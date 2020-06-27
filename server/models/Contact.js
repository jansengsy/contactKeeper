const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users',
  },
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: 'Personal', //Personal or professional
  },
  phone: {
    type: Number,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const contactModel = mongoose.model('Contact', contactSchema);

module.exports = contactModel;
