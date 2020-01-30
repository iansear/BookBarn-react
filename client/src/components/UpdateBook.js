import React, { useEffect, useState } from 'react'
const url = 'http://localhost:3001/updatebook/'

function UpdateBook(props) {
    const [book, setBook] = useState({})

    const handleChange = (input) => {
        setBook({
            ...book,
            [input.target.name]: input.target.value
        })
    }

    const handleUpdate = () => {
        let urlID = url + props.match.params.bookID
        fetch(urlID, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
          }).then((response) => console.log(response))
    }

    useEffect(() => {
        let urlID = url + props.match.params.bookID
        fetch(urlID).then(bookRAW => bookRAW.json()).then(book => setBook(book))
    }, [])
    return (<div>
        <label>Title: </label><input name="title" placeholder={book.title} onChange={handleChange} type="text"/><br/>
        <label>Author: </label><input name="author" placeholder={book.author} onChange={handleChange} type="text"/><br/>
        <label>image URL: </label><input name="imageLink" type="text" placeholder={book.imageLink} onChange={handleChange}/><br/>
        <label>Country: </label><input name="country" type="text" placeholder={book.country} onChange={handleChange}/><br/>
        <label>Language: </label><input name="language" type="text" placeholder={book.language} onChange={handleChange}/><br/>
        <label>Pages: </label><input name="pages" type="number" placeholder={book.pages} onChange={handleChange}/><br/>
        <label>Year: </label><input name="year" type="number" placeholder={book.year} onChange={handleChange}/><br/>
        <label>Link: </label><input name="link" type="text" placeholder={book.link} onChange={handleChange}/><br/>
        <button onClick={handleUpdate}>Update Book</button>
        </div>)
}

export default UpdateBook