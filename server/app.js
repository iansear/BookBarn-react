const express = require('express')
const cors = require('cors')
const app = express()
app.use(express.json())
app.use(cors())
const PORT = 3001
global.models = require('./models')

app.get("/", (req, res) => {
  models.Book.findAll().then((books) => {
    res.send(books)
  })
})

app.post("/", (req, res) => {
  const book = models.Book.build({
    author: req.body.author,
    country: req.body.country,
    imageLink: req.body.imageLink,
    language: req.body.language,
    link: req.body.link,
    pages: req.body.pages,
    title: req.body.title,
    year: req.body.year
  })
  book.save().then(() => {
      res.redirect("/")
  })
})

app.get("/bookdetails/:bookID", (req, res) => {
  models.Book.findOne({
    where: {
      id: req.params.bookID
    }
  }).then((book) => {
    res.send(book)
  })
})

app.get("/updatebook/:bookID", (req, res) => {
  models.Book.findOne({
    where: {
      id: req.params.bookID
    }
  }).then((book) => {
    res.send(book)
  })
})

app.post("/updatebook/:bookID",  (req, res) => {
  models.Book.update({
    author: req.body.author,
    country: req.body.country,
    imageLink: req.body.imageLink,
    language: req.body.language,
    link: req.body.link,
    pages: req.body.pages,
    title: req.body.title,
    year: req.body.year
  }, {
    where: {
      id: req.params.bookID
    }
  }).then(json => res.send(json))
  
})

app.listen(PORT, () => {
  console.log("Server is running...")
})