
import CartItemCard from "./CartItem";
import Footer from "../Footer.components";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../store";
import { removeFromCart, updateQuantity } from "../store/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemove = (productId: number) => {
    dispatch(removeFromCart(productId));
  };

  const handleQuantityChange = (productId: number, quantity: number) => {
    dispatch(updateQuantity({ productId, quantity }));
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.total_price, 0);

  return (
    <div>
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cartItems.map((item) => (
          <CartItemCard key={item.productId} item={item}
          onRemove={() => handleRemove(item.productId)}
          onQuantityChange={(quantity:number) =>
            handleQuantityChange(item.productId, quantity)
            }  />
        ))
      )}
      <div className="flex items-center justify-between p-2 gap-16 w-full h-28 bg-gray-300 mt-4 fixed bottom-20 right-0">
        <p className="text-2xl font-semibold">Total: ${totalPrice}</p>

<Link to="/checkout">
<button className="w-56 bg-black text-white font-semibold rounded-full p-2 text-xl">check out</button>
</Link>      </div>
      <Footer/>
    </div>
  );
};
export default Cart;
