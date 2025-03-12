const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  id: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  password: {type: String, required: true}, 
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
});

module.exports = mongoose.model('User', schema);