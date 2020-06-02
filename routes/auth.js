// CRUD - create read update delete

// GET = getting data from server - Example: getting things associated with a user
// POST = posting data to server - Example: Filling out a form
// PUT = update something already on server
// DELETE = delete something from server

const express = require('express');
const router = express.Router();

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route   POST api/auth/login
// @desc    Logs in user
// @access  Public
router.post('/', (req, res) => {
  res.send('Log in user');
});

module.exports = router;
