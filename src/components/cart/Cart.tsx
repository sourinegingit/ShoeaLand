// Cart.tsx
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import CartItemCard from "./CartItem";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + parseFloat(item.price) * item.quantity, 0);

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
      <div className="flex justify-end mt-4">
        <p className="text-2xl font-semibold">Total: ${totalPrice}</p>
      </div>
    </div>
  );
};
export default Cart;
