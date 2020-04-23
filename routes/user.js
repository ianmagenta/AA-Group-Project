const express = require('express');
const bcrypt = require("bcryptjs");
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("./utils");
const { requireAuth, getUserToken } = require("../auth");
const db = require('../db/models');


const router = express.Router();



router.use(requireAuth);

const userNotFoundError = (id) => {
    const err = Error(`User with id of ${id} could not be found.`);
    err.title = "User not found.";
    err.status = 404;
    return err;
};
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

router.get("/", asyncHandler(async (req, res) => {
    const users = await db.User.findAll();
    res.json({ users });
}));

router.get('/:id(\\d+)', asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.id, 10);
    const user = await db.User.findByPk(userId);
    if (user) {
        res.json({ user });
    } else {
        next(userNotFoundError(userId));
    }

}))

router.get("/:searchTerm", asyncHandler(async (req, res) => {
    const searchTerm = '%' + req.params.searchTerm + '%';

    const users = await db.User.findAll({

        where: {
            [Op.or]: [
                { lastName: { [Op.iLike]: searchTerm } },
                { firstName: { [Op.iLike]: searchTerm } }

            ]

        }
    });

    res.json({ users });
}));

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

    const token = getUserToken(user);
    res.json({
        user: { id: user.id },
        token,
    });

}));

router.put("/:id(\\d+)", userValidators, asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.id, 10);
    const user = await db.User.findByPk(userId);
    if (user) {
        const {
            userName,
            password,
            firstName,
            lastName,
            email
        } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        await user.update({
            userName,
            password: hashedPassword,
            firstName,
            lastName,
            email,
            bio: "",
            isAdmin: false
        });

        res.json({ user });
    } else {
        next(userNotFoundError(userId));
    }


}));

router.delete("/:id(\\d+)", asyncHandler(async (req, res, next) => {
    const userId = parseInt(req.params.id, 10);

    const user = await db.User.findByPk(userId);

    if (user) {
        await user.destroy();

        res.end();
    } else {

        next(userNotFoundError(userId));
    }


}));
module.exports = router;
