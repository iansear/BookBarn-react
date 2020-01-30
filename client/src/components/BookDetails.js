import React, { useEffect, useState } from 'react'
const url = 'http://localhost:3001/bookdetails/'

function BookDetails(props) {
    const [book, setBook] = useState([])
    let href = '/updatebook/' + props.match.params.bookID

    useEffect(() => {
        let urlID = url + props.match.params.bookID
        fetch(urlID).then(bookRAW => bookRAW.json()).then(book => setBook(book))
    })
    let imageURL = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/" + book.imageLink
    return (<div>
        <a href={href}><button>Update</button></a>
        <h1>{book.title}</h1>
        <h3>By: {book.author}</h3>
        <img src={imageURL} alt="Oops"/>
        <h3>From: {book.country}</h3>
        <h3>Language: {book.language}</h3>
        <h3>Pages: {book.pages}</h3>
        <h3>Year: {book.year}</h3>
        <a href={book.link}>{book.link}</a>
        </div>)
}

export default BookDetails