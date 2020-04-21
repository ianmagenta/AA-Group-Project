const express = require('express');
const csrf = require('csurf');
const bcrypt = require("bcryptjs");
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("./utils");
const { requireAuth, getUserToken } = require("../auth");
const db = require('../db/models');


const router = express.Router();
const csrfProtection = csrf({ cookie: true });
const { User } = db;


// router.use(requireAuth);

// router.get('/', csrfProtection, (req, res) => {
//     const user = db.User.build();
//     res.render('register', {
//         title: 'Add User',
//         user,
//         csrfToken: req.csrfToken(),
//     });
// });

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
        .isEmail({ checkFalsy: true })
        .withMessage('Please provide a valid email format'),
    handleValidationErrors
];

router.post('/', userValidators, asyncHandler(async (req, res) => {

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
    const user = await db.User.create({
        userName,
        password: hashedPassword,
        firstName,
        lastName,
        email,
        bio,
        isAdmin
    });
    //res.json({ user });
    const token = getUserToken(user);
    res.status(201).json({
        user: { id: user.id },
        token,
    });

}));

const validateUserNameAndPassword = [
    check('userName')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for Username')
        .isLength({ max: 20 })
        .withMessage('Username must not be more than 20 characters long'),
    check('password')
        .exists({ checkFalsy: true })
        .withMessage('Please provide a value for password'),
    handleValidationErrors
];

router.post("/signin", validateUserNameAndPassword, asyncHandler(async (req, res, next) => {
    const { userName, password } = req.body;
    const user = await User.findOne({
        where: {
            userName,
        },
    });
    User.prototype.validatePassword = function (password) {

        return bcrypt.compareSync(password, this.password.toString());
    }
    if (!user || !user.validatePassword(password)) {
        const err = new Error("Login failed");
        err.status = 401;
        err.title = "Login failed";
        err.errors = ["The provided credentials were invalid."];
        return next(err);
    }
    const token = getUserToken(user);
    res.json({ token, user: { id: user.id } });
}));

module.exports = router;
