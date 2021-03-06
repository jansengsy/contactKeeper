// CRUD - create read update delete

// GET = getting data from server - Example: getting things associated with a user
// POST = posting data to server - Example: Filling out a form
// PUT = update something already on server - Example: changing user email address
// DELETE = delete something from server - Example: removing user from db

const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config/default.json');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');

// @route   GET api/auth
// @desc    Get logged in user
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
});

// @route   POST api/auth/login
// @desc    Logs in user
// @access  Public
router.post(
  '/',
  [
    check('email', 'Please include email').not().isEmpty(),
    check('email', 'Please include valid email').isEmail(),
    check('password', 'Please included a password').not().isEmpty(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).json({ msg: 'Invalid credentials' });
      }

      const payload = {
        user: {
          id: user.id,
        },
      };

      jwt.sign(
        payload,
        config.jwtSecret,
        {
          expiresIn: 3600000000, // 1 hour
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error...');
    }
  }
);

module.exports = router;
