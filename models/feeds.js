/* eslint-disable no-unused-vars */
const express = require('express');
const router = express.Router();
const feed = require('../models/feeds');
const { authenticateUser } = require('../middleware/authentication');

// Get user's feed
router.get('/', authenticateUser, async (req, res) => {
    // Implement logic to fetch user's feed
});

module.exports = router;