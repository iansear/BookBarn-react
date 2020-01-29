import React, {Component} from 'react'

class DisplayAdded extends Component {
  render(){
    const addedBooks = this.props.added.map(book => {
      return (
        <li>{book}</li>
      )
    })
    
    
    return(
      <div>
      {addedBooks}
      </div>
    )
  }
}

export default DisplayAdded