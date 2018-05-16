const mongoose = require('mongoose');

const Startup = mongoose.model('Startup', {
  name: {type: String, required: true, unique: true},
  tagline: {type: String},
  imgUrl: {type: String},
  funded: {type: Boolean},
  perks: [{type: String}],
  founders: [{type: String, required: true }],
  //_by: {type: mongoose.Schema.Types.ObjectId, ref: 'User'} *BONUS*
})

const newStartup = new Startup({
  name: "Cspr",
  tagline: "Uber for Fish!",
  imgUrl:"https://images.unsplash.com/photo-1513568655455-59ca5a91774a?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd66903b6ce8a111bfa8d2e4aa8964b0&auto=format&fit=crop&w=800&q=60",
  funded: false,
  perks: ['unlimited ping', 'catered laundry'],
  founders: ['Nickelback twins']
});

newStartup.save().then((successfulStartup) => {
  console.log(successfulStartup);
}, (error) => {
  console.log(error);
});

Startup.find({}).then((alldemstartups) => {
  console.log(alldemstartups);
}, (error) => {
  console.log(error)
})

module.exports = Startup
