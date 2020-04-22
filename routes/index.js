const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('index');
});

router.get("/login", (req, res) => {
    res.render("signin");
})

router.get("/splash", (req, res) => {
    res.render("splash");
})

module.exports = router
