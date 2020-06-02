// CRUD - create read update delete

// GET = getting data from server - Example: getting things associated with a user
// POST = posting data to server - Example: Filling out a form
// PUT = update something already on server
// DELETE = delete something from server

const express = require('express');
const router = express.Router();

// @route   POST api/users
// @desc    Register a user
// @access  Public
router.post('/', (req, res) => {
  res.send('Registers a user');
});

module.exports = router;
