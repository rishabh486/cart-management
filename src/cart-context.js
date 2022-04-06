import { useContext, createContext, useReducer } from "react";
import { cartReducer } from "./cart-reducer";
import { filterReducer } from "./filter-reducer";
const CartContext = createContext();
const CartProvider = ({ children }) => {
  const items = [
    {
      id: 1,
      name: "kala chasma",
      price: 1000,
      category: "men"
    },
    {
      id: 2,
      name: "laal chhadi",
      price: 500,
      category: "men"
    },
    {
      id: 3,
      name: "jalebi",
      price: 50,
      category: "women"
    },
    {
      id: 4,
      name: "japani joota",
      price: 10000,
      category: "kids"
    }
  ];
  const [state, dispatch] = useReducer(cartReducer, {
    cartItems: 0,
    totalPrice: 0,
    items: items,
    cart: []
  });
  const [filterState, filterDispatch] = useReducer(filterReducer, {
    category: { men: false, women: false, kids: false },
    nofilter: true
  });
  return (
    <CartContext.Provider
      value={{ state, dispatch, filterState, filterDispatch }}
    >
      {children}
    </CartContext.Provider>
  );
};
const useCart = () => useContext(CartContext);
export { useCart, CartProvider };
