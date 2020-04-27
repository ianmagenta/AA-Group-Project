const express = require('express');
const router = express.Router();


router.get('/', (req, res) => {
    res.render('index', { title: 'Rare' });
});

router.get('/search', (req, res) => {
    res.render('search', { title: 'Search' });
});

router.get("/login", (req, res) => {
    res.render("signin", { title: 'Login' });
})

router.get("/splash", (req, res) => {
    res.render("splash", { title: 'Rare' });
})

router.get(`/\*/`, (req, res) => {
    res.render("404", { title: "Page Not Found" });
})

module.exports = router
