const express = require('express');
const router = express.Router();

router.get("/:Category", (req, res) => {
    const categoryInTitle = req.params.Category;
    res.render("categoryStories", { title: categoryInTitle });
});

module.exports = router;
