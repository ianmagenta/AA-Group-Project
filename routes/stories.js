const express = require('express');
const router = express.Router();
const { requireAuth } = require("../auth");
const db = require("../db/models");
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("./utils");

router.get("/new", async (req, res) => {
    const storyCategories = await db.StoryCategory.findAll({ attributes: ['id', 'categoryName'] });
    res.render("newstory", { title: "New story", storyCategories });
});

router.get("/:id", asyncHandler(async (req, res) => {
    res.render("story");
}));

router.get("/:id/edit", asyncHandler(async (req, res) => {
    const storyCategories = await db.StoryCategory.findAll({ attributes: ['id', 'categoryName'] });
    res.render("storyedit", { title: "Edit story", storyCategories });
}));

module.exports = router;
