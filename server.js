//NPM Packages
const
  express = require('express'),
  app = express(),
  PORT = 3000

//Modules
const
  mongoose = require('./db/mongoose'),
  Startup = require('./models/startup')




app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`)
})
