const initialState = {
  cart: [],
  users: [{name: "John", email:"johndoe@gmail.com", password:'test1234'}],
  isAuthenticated: false,
  favourites: []
}

const reducer = (state=initialState, action) => {
  if (action.type === 'ADDED_TO_CART'){
    return {
      ...state,
      cart: state.cart.concat(action.book)
    }
  }
  else if(action.type === 'REGISTER_USER'){
    console.log(state.users)
    return {
      ...state,
      users: state.users.concat(action.value)
    }
  }
  
  else if(action.type === 'LOGIN_USER'){
    return {
      ...state,
      isAuthenticated: !state.isAuhtenticated
    }
  }
  
  else if(action.type === 'ADD_TO_FAVS'){
    return {
      ...state,
      favourites: state.favourites.concat(action.book)
    }
  }
  return state;
}

export default reducer