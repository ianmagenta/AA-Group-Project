<<<<<<< HEAD
const { check, validationResult } = require('express-validator');
const fetch = require("node-fetch");
=======
const { validationResult } = require('express-validator');

>>>>>>> b8d2e9dde8c6a01afc34b6a19cd37a24258e3baa
const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

const handleValidationErrors = (req, res, next) => {
    const validationErrors = validationResult(req);

    if (!validationErrors.isEmpty()) {
        const errors = validationErrors.array().map((error) => error.msg);

        const err = Error("Bad request.");
        err.errors = errors;
        err.status = 400;
        err.title = "Bad request.";
        return next(err);
    }
    next();
};

module.exports = { asyncHandler, handleValidationErrors }
