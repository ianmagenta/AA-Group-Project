const express = require('express');
const router = express.Router();

router.get("/:Category", (req, res) => {
    res.render("categoryStories");
});

module.exports = router;
