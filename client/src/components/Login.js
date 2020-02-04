import React from 'react'
import { connect } from 'react-redux';
import {useState} from 'react'

const Login =(props) => {
  
  const [user, setUser] = useState({})
  
  const handleChange =(e) => {
    setUser({
      ...user,
    [e.target.name]: e.target.value
    })
  }
  
  const compareUser = () => {
    let comparedUser = props.users.map(userFromProps => {
      if( user.email === userFromProps.email && user.password === userFromProps.password){
        props.onLoginUser(user)
      } else {
        console.log("user not found")
      }
    })
    
  }
  
  const formatUsername = () => {
    let userName = props.users.map(userFromProps => userFromProps.name)
    return `${userName} is logged in`
  }
  
  
  return(
    <div>
        <h3>LOGIN here</h3>
        <label>email: </label>
        <input type="text" onChange={handleChange} name="email"/>
        <label>password: </label>
        <input type="text" onChange={handleChange} name="password"/>
        <button onClick={compareUser}> login </button>
        <h3> {props.isAuthenticated ? formatUsername() : null }</h3>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    users: state.users,
    isAuthenticated: state.isAuthenticated
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoginUser: (user) => dispatch({type: 'LOGIN_USER', value: user})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login)