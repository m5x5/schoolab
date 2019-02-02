var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  _id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  is_admin: {
    type: Boolean,
    required: true
  },
  is_signed_in: {
    type: Boolean,
    default: false
  },
  create_date: {
    type: Date,
    default: Date.now()
  }
});

// Create the user model and export it
module.exports = mongoose.model('Users', userSchema);
