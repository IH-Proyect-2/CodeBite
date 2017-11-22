const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const commentSchema = new Schema({
  content: {type: String, required: true},
  _creator: {type: String, required: true,}
}, {
  timestamps: {createdAt: 'created_at', updatedAt: 'updated_at'}
});

var Comment = mongoose.model('Comment', commentSchema);
module.exports = Comment;
