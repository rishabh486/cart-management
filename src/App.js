import "./styles.css";

import { ProductListing } from "./ProductListing";
import { Cart } from "./cart";
import { SideBar } from "./SideBar";
// const items = [
//   {
//     id: 1,
//     name: "kala chasma",
//     price: 1000
//   },
//   {
//     id: 2,
//     name: "laal chhadi",
//     price: 500
//   },
//   {
//     id: 3,
//     name: "jalebi",
//     price: 50
//   },
//   {
//     id: 4,
//     name: "japani joota",
//     price: 10000
//   }
// ];

export default function App() {
  //   const { state, dispatch } = useCart();
  // console.log(state.items)
  return (
    <div className="App">
      {/* <h1>cart</h1>
      <h1>items{state.cartItems}</h1>
      <h1>price{state.totalPrice}</h1>
      <h1>{}</h1>
      <div>
        {items.map(({id, name, price }) => (
          <div >
            <h2>{name}</h2>
            <h2>{price}</h2>
            <button
              onClick={() => dispatch({ type: "ADD_TO_CART", payload: id })}
            >
              Add to cart
            </button>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_FROM_CART", payload: id })
              }
            >
              remove from cart
            </button>
          </div>
        ))}
      </div> */}
      <SideBar />
      <ProductListing />
      <Cart />
    </div>
  );
}
