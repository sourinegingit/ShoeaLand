import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import CartItemCard from "./CartItem";

const Cart = () => {
  const { cart, dispatch } = useContext(CartContext);

  useEffect(() => {
    // This will be handled by the CartProvider already, no need to fetch from API again
    // But you can use this for any server-side synchronization
  }, [dispatch]);

  return (
    <div>
      <h2>My Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <CartItemCard key={item.id} item={item} />
        ))
      )}
    </div>
  );
};
export default Cart