const express = require('express');
const { Op } = require('sequelize');
const router = express.Router();
const { requireAuth } = require("../auth");
const db = require("../db/models");
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("./utils");
const readingTime = require('reading-time');
const md = require('markdown-it')();

router.use(requireAuth);

const storyNotFoundError = (id) => {
    const err = Error(`Story with id of ${id} could not be found.`);
    err.title = "Story not found.";
    err.status = 404;
    return err;
};

const storyLikeNotFoundError = (storyid, userId) => {
    const err = Error(`StoryLike with id of ${storyid} and ${userId} could not be found.`);
    err.title = "StoryLike not found.";
    err.status = 404;
    return err;
};

const storyValidators = [
    check('title')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a title')
        .isLength({ max: 500 })
        .withMessage('Username must not be more than 500 characters long'),
    check('subHeading')
        .isLength({ max: 500 })
        .withMessage('First Name must not be more than 500 characters long'),
    check('body')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a story'),
    handleValidationErrors
];
router.get("/", asyncHandler(async (req, res) => {
    const stories = await db.Story.findAll();
    res.json({ stories });
}));

router.get("/:id(\\d+)", asyncHandler(async (req, res, next) => {
    const storyId = parseInt(req.params.id, 10);
    const story = await db.Story.findByPk(storyId);
    if (story) {
        const story = await db.Story.findByPk(storyId, { include: [db.User] });
        const readTime = readingTime(story.body);
        const parsedBody = md.render(story.body);
        res.json({ story, readTime, parsedBody });
    } else {
        next(storyNotFoundError(storyId));
    }
}));

router.get("/:searchTerm", asyncHandler(async (req, res) => {
    const searchTerm = '%' + req.params.searchTerm + '%';

    const stories = await db.Story.findAll({

        where: {
            [Op.or]: [
                { title: { [Op.iLike]: searchTerm } },
                { subHeading: { [Op.iLike]: searchTerm } },
                { body: { [Op.iLike]: searchTerm } }
            ]

        }, include: [db.User]
    });

    res.json({ stories });
}));

router.post('/', storyValidators, asyncHandler(async (req, res) => {
    const {
        title,
        subHeading,
        body,
        userId,
        categoryId
    } = req.body;

    const story = await db.Story.create({
        title,
        subHeading,
        body,
        userId,
        categoryId
    });
    res.json({ story });
}));

router.put("/:id(\\d+)", storyValidators, asyncHandler(async (req, res, next) => {
    const storyId = parseInt(req.params.id, 10);
    const story = await db.Story.findByPk(storyId);
    if (story) {
        const {
            title,
            subHeading,
            body,
            userId,
            categoryId
        } = req.body;

        await story.update({
            title,
            subHeading,
            body,
            userId,
            categoryId
        });

        res.json({ story });
    } else {
        next(storyNotFoundError(storyId));
    }


}));

router.delete("/:id(\\d+)", asyncHandler(async (req, res, next) => {
    const storyId = parseInt(req.params.id, 10);
    const story = await db.Story.findByPk(storyId);
    if (story) {
        await story.destroy();

        res.end();
    } else {
        next(storyNotFoundError(storyId));
    }


}));

router.post("/:id(\\d+)/likes", asyncHandler(async (req, res, next) => {
    const storyId = parseInt(req.params.id, 10);
    const story = await db.Story.findByPk(storyId);

    if (story) {
        const {
            userId,
            storyId
        } = req.body;

        const storyLike = await db.StoryLike.create({
            userId,
            storyId
        });

        res.json({ storyLike });
    } else {
        next(storyNotFoundError(storyId));
    }


}));

router.delete("/:storyId(\\d+)/likes/:userId(\\d+)", asyncHandler(async (req, res, next) => {
    const storyId = parseInt(req.params.storyId, 10);
    const userId = parseInt(req.params.userId, 10);
    const storyLike = await db.StoryLike.findOne({

        where: {
            storyId, userId
        }

    })

    if (storyLike) {
        await storyLike.destroy();

        res.end();
    } else {
        next(storyLikeNotFoundError(storyId));
    }


}));
module.exports = router;
