const express = require('express');
const router = express.Router();
const { requireAuth } = require("../auth");
const db = require("../db/models");
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("./utils");

router.use(requireAuth);

const commentNotFoundError = (id) => {
    const err = Error(`Comment with id of ${id} could not be found.`);
    err.title = "Comment not found.";
    err.status = 404;
    return err;
};

const commentValidators = [
    check('body')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a comment'),
    handleValidationErrors
];
router.get("/", asyncHandler(async (req, res) => {
    const comments = await db.Comment.findAll();
    res.json({ comments });
}));

router.get("/:id(\\d+)", asyncHandler(async (req, res, next) => {
    const commentId = parseInt(req.params.id, 10);
    const comment = await db.Comment.findByPk(commentId);
    if (comment) {
        res.json({ comment });
    } else {
        next(commentNotFoundError(commentId));
    }

}));

router.post('/', commentValidators, asyncHandler(async (req, res) => {
    const {
        commentId,
        userId,
        body
    } = req.body;

    const comment = await db.Comment.create({
        commentId,
        userId,
        body
    });
    res.json({ comment });
}));

router.put("/:id(\\d+)", commentValidators, asyncHandler(async (req, res, next) => {
    const commentId = parseInt(req.params.id, 10);
    const comment = await db.Comment.findByPk(commentId);
    if (comment) {
        const {
            commentId,
            userId,
            body
        } = req.body;

        await comment.update({
            commentId,
            userId,
            body
        });

        res.json({ comment });
    } else {
        next(commentNotFoundError(commentId));
    }


}));

router.delete("/:id(\\d+)", asyncHandler(async (req, res, next) => {
    const commentId = parseInt(req.params.id, 10);
    const comment = await db.Comment.findByPk(commentId);
    if (comment) {
        await comment.destroy();

        res.end();
    } else {
        next(commentNotFoundError(commentId));
    }


}));

router.post("/:id(\\d+)/likes", asyncHandler(async (req, res, next) => {
    const commentId = parseInt(req.params.id, 10);
    const comment = await db.Comment.findByPk(commentId);

    if (comment) {
        const {
            userId,
            commentId
        } = req.body;

        const commentLike = await db.CommentLike.create({
            userId,
            commentId
        });

        res.json({ commentLike });
    } else {
        next(commentNotFoundError(commentId));
    }


}));

router.delete("/:commentId(\\d+)/likes/:userId(\\d+)", asyncHandler(async (req, res, next) => {
    const commentId = parseInt(req.params.commentId, 10);
    const userId = parseInt(req.params.userId, 10);
    const commentLike = await db.CommentLike.findOne({

        where: {
            commentId, userId
        }

    })

    if (commentLike) {
        await commentLike.destroy();

        res.end();
    } else {
        next(commentLikeNotFoundError(commentId));
    }


}));

module.exports = router;
