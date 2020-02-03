import React from 'react'
import { connect } from 'react-redux';

const Register =() => {
  return(
    <div>
      <form>
        <label>First Name:</label>
        <input type="text" onChange={handleChange} name="First Name"/>
        <label>email: </label>
        <input type="text" onChange={handleChange} name="email"/>
        <label>password: </label>
        <input type="text" onChange={handleChange} name="password"/>
      </form>
    </div>
  )
}

export default connect(mapPropsToState)(Register)