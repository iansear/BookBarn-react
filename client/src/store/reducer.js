const initialState = {
  cart: [],
  username: ''
}

const reducer = (state=initialState, action) => {
  if (action.type === 'ADDED_TO_CART'){
    return {
      ...state,
      cart: state.cart.concat(action.book)
    }
  }
  return state;
}

export default reducer