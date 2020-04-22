const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
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

module.exports = router
