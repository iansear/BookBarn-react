const express = require('express')
const app = express()
const PORT = 3000
global.models = require('./models')

app.listen(PORT, () => {
  console.log("Server is running...")
})

app.post("/", (req, res) => {
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