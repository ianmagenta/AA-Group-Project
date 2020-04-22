const express = require('express');
const router = express.Router();

router.get("/", (req, res) => {
    res.render("story");
});

router.get("/new", (req, res) => {
    res.render("newstory");
});

module.exports = router;
