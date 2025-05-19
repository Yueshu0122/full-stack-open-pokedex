const express = require('express')
const app = express()

// get the port from env variable
const PORT = process.env.PORT || 5001

app.use(express.static('dist'))

app.listen(PORT, '0.0.0.0',() => {
  console.log(`server started on port ${PORT}`)
})
