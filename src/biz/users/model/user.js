const mongoose = require('mongoose');
const schema = new mongoose.Schema({  
  name: {type: String, required: true},
  password: {type: String}, 
  createdAt: {type: Date, default: Date.now},
  updatedAt: {type: Date, default: Date.now}
});

// 가상 필드로 `id`를 정의
schema.virtual('id').get(function() {
  return this._id.toString();  // _id를 id로 변환
});

module.exports = mongoose.model('User', schema);