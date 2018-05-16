//NPM Packages
const
  express = require('express'),
  app = express(),
  PORT = 3000,
  bodyParser = require('body-parser')

//Modules
const
  // mongoose = require('./db/mongoose'),
  
  Startup = require('./models/startup')

//Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))




app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`)
})
