const
  express = require('express'),
  app = express(),
  PORT = 3000




app.listen(PORT, () => {
  console.log(`Server is up and running on ${PORT}`)
})
