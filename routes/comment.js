const express = require('express');
const router = express.Router();
const { requireAuth } = require("../auth");
const db = require("../db/models");
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("./utils");
const md = require('markdown-it')();
const sequelize = require('sequelize');
const { Op } = require('sequelize');

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

// let commentLikes = await db.CommentLike.findAll({

//     group: ["storyId"],
//     attributes: ["storyId", [sequelize.fn("count", "userId"), "Likes"]],

// })

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

router.get("/storyId/:id(\\d+)", asyncHandler(async (req, res, next) => {
    const storyId = parseInt(req.params.id, 10);
    const comment = await db.Comment.findAll({ where: { storyId }, include: [db.User] });
    comment.forEach(element => {
        element.body = md.render(element.body);
    });
    if (comment) {
        for (const key in comment) {
            const commentLikes = await db.CommentLike.findAll({ where: { commentId: comment[key].id } });
            comment[key].setDataValue('commentLikes', commentLikes);
        }
        res.json({ comment });
    } else {
        next(commentNotFoundError(storyId));
    }

}));

router.post('/', commentValidators, asyncHandler(async (req, res) => {
    const {
        storyId,
        userId,
        body
    } = req.body;

    const comment = await db.Comment.create({
        storyId,
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
            storyId,
            userId,
            body
        } = req.body;

        await comment.update({
            storyId,
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
