const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Hi' });
});

module.exports = router
