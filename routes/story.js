const express = require('express');
const router = express.Router();
const { requireAuth } = require("../auth");
const db = require("../db/models");
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("./utils");
const readingTime = require('reading-time');
const md = require('markdown-it')();

//router.use(requireAuth);

const storyNotFoundError = (id) => {
    const err = Error(`Story with id of ${id} could not be found.`);
    err.title = "Story not found.";
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
    handleValidationErrors
];
router.get("/", asyncHandler(async (req, res) => {
    const stories = await db.Story.findAll();
    res.json({ stories });
}));

router.get("/:id(\\d+)", asyncHandler(async (req, res, next) => {
    const storyId = parseInt(req.params.id, 10);
    const story = await db.Story.findByPk(storyId, { include: [db.User] });
    const readTime = readingTime(story.body);
    const parsedBody = md.render(story.body);
    res.json({ story, readTime, parsedBody });
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

module.exports = router;
