const express = require('express');
const router = express.Router();
const { requireAuth } = require("../auth");
const db = require("../db/models");
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("./utils");

router.get("/new", (req, res) => {
    res.render("newstory");
});

router.get("/:id", asyncHandler(async (req, res) => {
    res.render("story");
}));

module.exports = router;
