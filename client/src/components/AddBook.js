import React, {Component} from 'react'
// import DisplayAdded from './DisplayAdded'
class AddBook extends Component {
  constructor(props){
    super(props)
    this.state = {
      
      author:'',
      country:'',
      imageLink:'',
      language:'',
      link: '',
      pages: 0,
      title: '',
      year: 0
    }  
  }
  
  handleAddBook = () => {
    this.props.onBookSave(this.state.author, this.state.country, this.state.imageLink, this.state.language, this.state.link, this.state.pages, this.state.title, this.state.year)
  }
  
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  render(){
    return(
      <div>
      <input type="text" onChange={this.handleChange} name="author" placeholder="author"></input>
        <input type="text" onChange={this.handleChange} name="country" placeholder="country"></input>
        <input type="text" onChange={this.handleChange} name="imageLink" placeholder="imageLink"></input>
        <input type="text" onChange={this.handleChange} name="language" placeholder="language"></input>
        <input type="text" onChange={this.handleChange} name="link" placeholder="link"></input>
        <input type="text" onChange={this.handleChange} name="pages" placeholder="pages"></input>
        <input type="text" onChange={this.handleChange} name="title" placeholder="title"></input>
        <input type="text" onChange={this.handleChange} name="year" placeholder="year"></input>
        <button onClick={this.handleAddBook}>Add</button>
        
      </div>
    )
  }
}

export default AddBook