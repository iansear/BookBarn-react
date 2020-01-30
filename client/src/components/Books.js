import React, {Component} from 'react'
import BookList from './BookList'
import './Books.css'
import AddBook from './AddBook';
const url = "http://localhost:3001"

class Books extends Component {

    constructor(props) {
        super(props)
        this.state = {
            books: [],
            selectedBooks: [],
            languages: []
        }
    }

    fetchData = async () => {
        let books = await fetch(url)
        let booksJSON = await books.json()
        let languages = this.getLanguages(booksJSON)
        this.setState({
            books: booksJSON,
            selectedBooks: booksJSON,
            languages: languages
        })
    }

    uniqueLanguages = (languages) => {
        let languagesUnique = ['All']
        for(let i = 1; i < languages.length; i++) {
            if(!(languagesUnique.includes(languages[i]))) {
                languagesUnique.push(languages[i])
            }
        }
        return languagesUnique
    }

    getLanguages = (books) => {
        let languages = books.map((book) => book.language)
        let languagesUnique = this.uniqueLanguages(languages)
        return languagesUnique

    }

    booksByTitle = (title) => {
        let filteredBooks = this.state.books.filter((book) => {
            if(title.target.value === '') {
                return book
            } else if(book.title.toLowerCase().includes(title.target.value.toLowerCase())) {
                return book
            } else {
                return null
            }
        })
        this.setState({
            selectedBooks: filteredBooks
        })
    }

    booksByLanguage = (language) => {
        let filteredBooks = this.state.books.filter((book) => {
            if(language.target.value === 'All') {
                return book
            } else if(book.language === language.target.value) {
                return book
            } else {
                return null
            }
        })
        this.setState({
            selectedBooks: filteredBooks
        })
    }

    componentDidMount() {
        this.fetchData()
    }
    
    handleBookSave = (author, country, imageLink, language, link, pages, title, year) => {
        const book = {
            author: author, 
            country: country, 
            imageLink: imageLink, 
            language:language, 
            link:link, 
            pages:pages, 
            title:title, 
            year:year}
        
        fetch(url, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(book)
          }).then(() => this.fetchData())
    }

    render() {
        let selectLanguage = this.state.languages.map((language) => <option key={language} value={language}>{language}</option>)
        return (<div>
                <h1>Books</h1>
                <input type="text" onChange={this.booksByTitle} placeholder="Search by Title" />
                <select onChange={this.booksByLanguage}>{selectLanguage}</select>
                <AddBook onBookSave={this.handleBookSave}/>
                <BookList list={this.state.selectedBooks}/>                    
                </div>)
    }
}

export default Books 