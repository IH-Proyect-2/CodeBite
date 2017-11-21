const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const pillSchema = new Schema({
  title: {type: String, required: true},
  description: {type: String, required: true},
  category: {enum: ['AJAX', 'Algorithms', 'Functions']},
  link: {type: String, required: true},
  language: {enum: ['English', 'Spanish']},
  comments: [{type:Schema.Types.ObjectId, ref:'comment'}],
  _creator: {type: String, required: true,}
}, {
  // timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

var Pill = mongoose.model('Pill', pillSchema);
module.exports = Pill;
