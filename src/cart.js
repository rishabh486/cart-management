import { useCart } from "./cart-context";
const Cart = () => {
  const {
    state: { cart }
  } = useCart();
  return (
    <div>
      {cart.map((prod) => {
        return (
          <div>
            <h1>{prod.name}</h1>
            <h2>{prod.price}</h2>
          </div>
        );
      })}
    </div>
  );
};
export { Cart };
