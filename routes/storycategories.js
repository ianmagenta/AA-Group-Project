const express = require('express');
const { Op } = require('sequelize');
const bcrypt = require("bcryptjs");
const { check } = require('express-validator');
const { asyncHandler, handleValidationErrors } = require("./utils");
const { requireAuth, getUserToken } = require("../auth");
const db = require('../db/models');


const router = express.Router();

router.get('/', asyncHandler(async (req, res) => {
  const categories = await db.StoryCategory.findAll();
  res.json({ categories });
}))

module.exports = router;
