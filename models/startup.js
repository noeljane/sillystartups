const mongoose = require('mongoose');

const Startup = mongoose.model('Startup', {
  name: {type: String, required: true},
  tagline: {type: String},
  imgUrl: {type: String},
  funded: {type: Boolean},
  perks: [{type: String}],
  founders: [{type: String}],
  //_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'} *BONUS*
})

module.exports = Startup
