// CRUD - create read update delete

// GET = getting data from server - Example: getting things associated with a user
// POST = posting data to server - Example: Filling out a form
// PUT = update something already on server
// DELETE = delete something from server

const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');
const auth = require('../middleware/auth');

const User = require('../models/User');
const Contact = require('../models/Contact');

// @route   GET api/contacts
// @desc    Get users contacts
// @access  Private
router.get('/', auth, async (req, res) => {
  try {
    const contacts = await Contact.find({ user: req.user.id }).sort({
      date: -1,
    });
    res.json(contacts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route   POST api/contacts
// @desc    Creates a new contact
// @access  Private
router.post('/', (req, res) => {
  res.send('Creates new contact');
});

// @route   PUT api/contacts/:id
// @desc    Updates a contact
// @access  Private
router.put('/:id', (req, res) => {
  res.send('Updated contact');
});

// @route   DELETE api/contacts/:id
// @desc    Deletes a contact
// @access  Private
router.delete('/:id', (req, res) => {
  res.send('Deleted contact');
});

module.exports = router;
