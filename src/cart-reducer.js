export function cartReducer(state, action) {
  // console.log(action.payload)

  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cartItems: state.cartItems + 1,
        totalPrice: state.totalPrice + action.payload.price,
        cart: [...state.cart, { ...action.payload }]
      };
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cartItems: state.cartItems - 1,
        totalPrice: state.totalPrice - action.payload.price
      };
    default:
      return state;
  }
}
