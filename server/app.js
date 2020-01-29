const express = require('express')
const app = express()
const PORT = 3000
global.models = require('./models')

app.listen(PORT, () => {
  console.log("Server is running...")
})