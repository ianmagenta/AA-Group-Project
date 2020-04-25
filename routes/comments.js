const express = require('express');
const router = express.Router();
const { requireAuth } = require("../auth");
const db = require("../db/models");
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("./utils");

router.get("/new/:id(\\d+)", async (req, res) => {

    res.render("newcomment");


});
module.exports = router;
