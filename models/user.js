const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    match: [/[a-zа-яё0-9]+/gi, '"user name" is not valid'],
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    match: [/[a-zа-яё0-9]+/gi, '"user about"  is not valid'],
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    match: [/^https?:\/\/(www\.)?(((\d{1,3}\.){3}\d{1,3}(?!\d))|([A-Za-z0-9]+(\.[A-Za-z0-9]+)?\.[a-z]{2,3}))(:\d{2,5}(?!\d))?([A-Za-z0-9/]+#?$)?/, 'avatar link is not valid'],
  },
});

module.exports = mongoose.model('user', userSchema);
