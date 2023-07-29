const express = require('express');
const router = express.Router();
const apiRoutes = require('./api');

// Prefix all API routes with '/api'
router.use('/api', apiRoutes);

module.exports = router;
