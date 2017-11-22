const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const pillSchema = new Schema({
  title: String,
  description: String,
  category: {enum: ['AJAX', 'Algorithms', 'Functions']},
  link: String,
  language: {enum: ['English', 'Spanish']},
  comments: [{type:Schema.Types.ObjectId, ref:'comment'}],
  _creator: String
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

var Pill = mongoose.model('Pill', pillSchema);
module.exports = Pill;
