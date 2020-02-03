import React from 'react'
import {connect} from 'react-redux'

const Cart =(props) => {
  return(
    <div>
    
        <div>Your cart has {props.cart.length} books</div>
    
    </div>
  )
} 

const mapStateToProps = (state) => {
  return {
      cart: state.cart
    }
}

export default connect(mapStateToProps)(Cart)