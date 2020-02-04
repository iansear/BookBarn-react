const initialState = {
  cart: [],
  users: []
}

const reducer = (state=initialState, action) => {
  if (action.type === 'ADDED_TO_CART'){
    return {
      ...state,
      cart: state.cart.concat(action.book)
    }
  }
  if(action.type === 'REGISTER_USER'){
    console.log(state.users)
    return {
      ...state,
      users: state.users.concat(action.value)
    }
  }
  return state;
}

export default reducer