const express = require('express');
const csrf = require('csurf');
const db = require('../db/models');

const { fetchHandlerLite } = require('./utils');
const router = express.Router();

const csrfProtection = csrf({ cookie: true });

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);


router.get("/", csrfProtection, asyncHandler(async (req, res) => {
    const user = await db.User.build();
    res.render('register', { user, csrfToken: req.csrfToken() });
}));

// router.post("/", csrfProtection, asyncHandler(async (req, res) => {
//     const { userName, password, firstName, lastName, email, bio } = req.body;
//     const data = await fetchHandlerLite("user", "POST", { userName, password, firstName, lastName, email, bio, isAdmin: false });
//     console.log("hi there!")
//     console.log(data);
// }));

module.exports = router;
