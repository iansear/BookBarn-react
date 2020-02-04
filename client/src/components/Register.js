import React from 'react'
import { connect } from 'react-redux';
import {useState} from 'react'
const Register =(props) => {
  
  const [user, setUser] = useState({})
  
  const handleChange =(e) => {
    setUser({
      ...user,
    [e.target.name]: e.target.value
    })
  }
  
  return(
    <div>
      
        <label>First Name:</label>
        <input type="text" onChange={handleChange} name="name" />
        <label>email: </label>
        <input type="text" onChange={handleChange} name="email"/>
        <label>password: </label>
        <input type="text" onChange={handleChange} name="password"/>
        <button onClick={()=>props.onRegisterUser(user)}> register </button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onRegisterUser: (registeredUser) => dispatch({type: 'REGISTER_USER', value: registeredUser})
  }
}

export default connect(null,mapDispatchToProps)(Register)