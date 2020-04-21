const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get("/newstory", (req, res) => {
    res.render("newstory");
});

router.get("/profile", (req, res) => {
    res.render("profile");
});

router.get("/signin", (req, res) => {
    res.render("signin");
})

router.get("/profile", (req, res) => {
    res.render("profile");
})

router.get("/splash", (req, res) => {
    res.render("splash");
})

router.get("/story", (req, res) => {
    res.render("story");
})

module.exports = router
