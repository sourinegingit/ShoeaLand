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
      <div className="flex items-center justify-between p-2 gap-16 w-full h-28 bg-gray-300 mt-4 fixed bottom-20 right-0">
        <p className="text-2xl font-semibold">Total: ${totalPrice}</p>
        <button className="w-56 bg-black text-white font-semibold rounded-full p-2 text-xl">check out</button>
      </div>
    </div>
  );
};
export default Cart;
