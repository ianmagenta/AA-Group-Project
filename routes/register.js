const express = require('express');
const db = require('../db/models');
const router = express.Router();

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);


router.get("/", asyncHandler(async (req, res) => {
    const user = await db.User.build();
    res.render('register', { user });
}));

module.exports = router;
