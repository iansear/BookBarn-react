import React, { useEffect, useState } from 'react'
import {connect} from 'react-redux'

const url = 'http://localhost:3001/bookdetails/'
const urldel = 'http://localhost:3001/delete/'
const gohome = 'http://localhost:3000/'

function BookDetails(props) {
    const [book, setBook] = useState([])
    let href = '/updatebook/' + props.match.params.bookID

    const handleDelete = () => {
        let bookID = props.match.params.bookID
        let urlDelId = urldel+ bookID
        fetch(urlDelId, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({bookID: bookID})
        }).then((response) => console.log(response))
    }
    
    const handleToggle =() => {
            return (
                <div>
                    
                <a href={href}><button>Update</button></a>
                <a href={gohome}><button onClick={handleDelete}>DELETE</button></a>
                <button onClick={()=> props.onAddedBooks(book)}>Add To Cart</button>
                <button onClick={()=> props.onFavouriteBook(book)}>Add To Favs</button>
                
                </div>
            )
        
    }
    
    useEffect(() => {
        let urlID = url + props.match.params.bookID
        fetch(urlID).then(bookRAW => bookRAW.json()).then(book => setBook(book))
    })
    let imageURL = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/" + book.imageLink
    return (<div>
        
        <div> {props.isAuth ? handleToggle() : null} </div>
        
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

const mapStateToProps = (state) => {
    return {
        isAuth: state.isAuthenticated
    }
}

const mapDispatchToProps =(dispatch) => {
    return {
        onAddedBooks: (book) => dispatch({type: 'ADDED_TO_CART', book: book}),
        onFavouriteBook: (book) => dispatch ({type: 'ADD_TO_FAVS', book: book})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(BookDetails)