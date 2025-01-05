// reducers/cart.reducer.ts
export interface CartItem {
  item:CartItem;
  onRemove: () => void;
  onQuantityChange: (quantity: number) => void;
  id: string;
  name: string;
  price: string;
  color: string;
  size: string;
  quantity: number;
}

export type CartAction =
  | { type: "ADD_ITEM"; payload: CartItem }
  | { type: "REMOVE_ITEM"; payload: string }
  | { type: "UPDATE_ITEM"; payload: CartItem };

export const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
  switch (action.type) {
    case "ADD_ITEM":
      try {
        const itemIndex = state.findIndex(item => item.id === action.payload.id);
        if (itemIndex > -1) {
          const updatedCart = [...state];
          updatedCart[itemIndex].quantity += action.payload.quantity;
          return updatedCart;
        } else {
          return [...state, action.payload];
        }
      } catch (error) {
        console.error("Error adding item to cart:", error);
        return state; 
      }

    case "REMOVE_ITEM":
      try {
        return state.filter(item => item.id !== action.payload);
      } catch (error) {
        console.error("Error removing item from cart:", error);
        return state;
      }

    case "UPDATE_ITEM":
      try {
        const updatedCart = state.map(item =>
          item.id === action.payload.id ? { ...item, quantity: action.payload.quantity } : item
        );
        return updatedCart;
      } catch (error) {
        console.error("Error updating item in cart:", error);
        return state;
      }

    default:
      console.error("Unknown action type:", action.type);
      return state;
  }
};
