import React, {Component} from 'react'

class BookList extends Component {

    render() {
        let books = this.props.list.map((book) => {
            let key = book.year + book.title + book.author
            let href = "/bookdetails/" + book.id
            let imageURL = "https://raw.githubusercontent.com/benoitvallon/100-best-books/master/static/" + book.imageLink
            return (<div className="book" key={key}>
                        <h3><a href={href}>{book.title}</a> - {book.author} - {book.year}</h3>
                        <img src={imageURL} alt="Oops"/>
                    </div>)
        })

        return (<div className="booklist">
                {books}
                </div>)
    }
}

export default BookList