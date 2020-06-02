// CRUD - create read update delete

// GET = getting data from server - Example: getting things associated with a user
// POST = posting data to server - Example: Filling out a form
// PUT = update something already on server
// DELETE = delete something from server

const express = require('express');
const router = express.Router();

// @route   GET api/contacts
// @desc    Get users contacts
// @access  Private
router.get('/', (req, res) => {
  res.send('Get contacts');
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
