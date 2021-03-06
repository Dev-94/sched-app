var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var schedSchema = new Schema({
  name: String,
  date: {
    type: Date,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  details: String,
  userId: String
}, {
  timestamps: true
});


var pandaSchema = new Schema({
  fact: String
});


module.exports = mongoose.model('Sched', schedSchema);