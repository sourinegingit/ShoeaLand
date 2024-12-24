import React, { createContext, PropsWithChildren, useReducer } from "react";
import { CartAction, CartItem, cartReducer } from "../reducers/cart.reducer";

export const CartContext = createContext<{
  cart: CartItem[];
  dispatch: React.Dispatch<CartAction>;
}>({
  cart: [],
  dispatch: () => {},
});

function CartProvider({ children }: PropsWithChildren) {
  // Initialize cart state from localStorage
  // const storedCart = localStorage.getItem("cart");
  // const initialCart = storedCart ? JSON.parse(storedCart) : [];
  const [cart, dispatch] = useReducer(cartReducer,[]);

  // Sync cart to localStorage whenever it changes
  // useEffect(() => {
  //   if (cart.length > 0) {
  //     localStorage.setItem("cart", JSON.stringify(cart));
  //   }
  // }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
