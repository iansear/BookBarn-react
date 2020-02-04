import React, {Component} from 'react'
import {Link, NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import Cart from './Cart'
import './Menu.css'

class Menu extends Component {
  

  
  render(){
    return(
      <div className="flexy">
        <h3><NavLink to ="/" > Home </NavLink></h3>
        <h3>Browse</h3>
        <h3>Community </h3>
        <h3><NavLink to="/sign-in"> {!this.props.isAuthenticated ? `Sign In` : null} </NavLink></h3>
        <h3><NavLink to="/join"> {!this.props.isAuthenticated ? `Join` : null} </NavLink></h3>
        <h3><NavLink to = "/my-books">{this.props.isAuthenticated ? `My Books` : null}</NavLink></h3>
        <h3><NavLink to="/logout"> {this.props.isAuthenticated ? `Logout` : null}</NavLink> </h3>
        
        <Cart/>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    isAuthenticated: state.isAuthenticated
  }
}

export default connect(mapStateToProps)(Menu)