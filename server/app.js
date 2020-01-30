const express = require('express')
const cors = require('cors')
const app = express()
app.use(cors())
const PORT = 3001
global.models = require('./models')
const testAPIRouter = require('./routes/testAPI')



app.use('/testAPI', testAPIRouter)



app.get("/", (req, res) => {
  res.send("Saved")
})

app.post("/", (req, res) => {
  console.log(req.body)
  const book = models.Book.build({
    author: "DataTypes.STRING",
    country: "DataTypes.STRING",
    imageLink: "DataTypes.STRING",
    language: "DataTypes.STRING",
    link: "DataTypes.STRING",
    pages: 0,
    title: "DataTypes.STRING",
    year: 0
  })
  book.save().then( async () => {
      res.redirect("/")
  })
})

app.listen(PORT, () => {
  console.log("Server is running...")
})