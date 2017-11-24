const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const pillSchema = new Schema({
  title: String,
  description: String,
  category: {type: String, enum: ['AJAX', 'Algorithms','Arrays','Async-Callbacks','Canvas','Conditionals-Loops', 'Debugging','DOM','Express','Functions','JQuery','JSON','Libraries','Methods','Mongo','Mongoose','Node','Objects','Passport','Prototype','Testing']},
  link: String,
  language: {type: String, enum: ['English', 'Spanish']}
  // comments: [{type:Schema.Types.ObjectId, ref:'comment'}],
}, {
  timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

var Pill = mongoose.model('Pill', pillSchema);
module.exports = Pill;
