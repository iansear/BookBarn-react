import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import './Menu.css'

class Menu extends Component {
  render(){
    return(
      <div className="flexy">
        <h3><NavLink to ="/" > Home </NavLink></h3>
        <h3><NavLink to = "/my-books">My Books</NavLink></h3>
        <h3>Browse</h3>
        <h3>Community</h3>
        
        <h3><NavLink to="/sign-in"> Sign in </NavLink></h3>
        <h3><NavLink to="/join"> Join </NavLink></h3>
      </div>
    )
  }
}

export default Menu