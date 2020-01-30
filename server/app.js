const express = require('express')
const app = express()
const PORT = 3000
global.models = require('./models')
const testAPIRouter = require('./routes/testAPI')



app.use('/testAPI', testAPIRouter)



app.listen(PORT, () => {
  console.log("Server is running...")
})