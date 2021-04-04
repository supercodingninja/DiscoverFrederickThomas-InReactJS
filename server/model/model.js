'use strict';

const profile = require('mongoose');
const schema = profile.Schema;

const likeMe = schema({
  likes: { type: Number, default: 0 },
  name: { type: String, required: true }
});

module.exports = profile.model('likes', likeMe);