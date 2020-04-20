const express = require('express');
const csrf = require('csurf');
const router = express.Router();
const { check, validationResult } = require('express-validator');
const csrfProtection = csrf({ cookie: true });
const db = require('./db/models');
const { User } = db;
const { asyncHandler, handleValidationErrors } = require("../utils");
const { requireAuth } = require("../auth");

router.use(requireAuth);

router.get('/', csrfProtection, (req, res) => {
    const user = db.User.build();
    res.render('register', {
        title: 'Add User',
        user,
        csrfToken: req.csrfToken(),
    });
});

const userValidators = [
    check('userName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Username')
        .isLength({ max: 20 })
        .withMessage('Username must not be more than 20 characters long'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for password'),
    check('firstName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for First Name')
        .isLength({ max: 50 })
        .withMessage('First Name must not be more than 50 characters long'),
    check('lastName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Last Name')
        .isLength({ max: 50 })
        .withMessage('Last Name must not be more than 50 characters long'),
    check('email')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Email')
        .isEmail
        .withMessage('Please provide a valid email format'),

];

router.post('/', csrfProtection, userValidators, handleValidationErrors, asyncHandler(async (req, res) => {
    const {
        userName,
        password,
        firstName,
        lastName,
        email,
        bio,
        isAdmin
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = db.User.create({
        userName,
        hashedPassword,
        firstName,
        lastName,
        email,
        bio,
        isAdmin
    });

    const token = getUserToken(user);
    res.status(201).json({
        user: { id: user.id },
        token,
    });


    try {
        await user.save();
        res.redirect('/');
    } catch (err) {
        if (err.name === 'SequelizeValidationError') {
            const errors = err.errors.map((error) => error.message);
            res.render('register', {
                title: 'Add User',
                user,
                errors,
                csrfToken: req.csrfToken(),
            });
        } else {
            next(err);
        }
    }
}));

module.exports = router;
