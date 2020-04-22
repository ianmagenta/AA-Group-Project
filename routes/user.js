const express = require('express');
const bcrypt = require("bcryptjs");
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("./utils");
const { requireAuth, getUserToken } = require("../auth");
const db = require('../db/models');


const router = express.Router();
const { User } = db;


// router.use(requireAuth);


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

// router.get('/:id+', (req, res) => {
//     const user = db.User.build();
//     res.render('register', {
//         title: 'Add User',
//         user,
//     });
// });
router.get('/:id(\\d+)', requireAuth, asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id, 10);
    console.log("The id is: ", id);
    const user = await db.User.findByPk(id);
    // console.log("The whole user info is: ", user);
    res.json({ user });
}))

router.post('/', userValidators, asyncHandler(async (req, res) => {
    const {
        userName,
        password,
        firstName,
        lastName,
        email
    } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await db.User.create({
        userName,
        password: hashedPassword,
        firstName,
        lastName,
        email,
        bio: "",
        isAdmin: false
    });
    //res.json({ user });
    const token = getUserToken(user);
    res.json({
        user: { id: user.id },
        token,
    });

}));

module.exports = router;
