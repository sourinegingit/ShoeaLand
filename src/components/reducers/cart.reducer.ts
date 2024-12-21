export interface CartItem {
    id: number;
    title: string;
    price: string;
    quantity: number;
    size: string | null;
    color: string | null;
  }
  
export  type CartAction =
    | { type: "ADD_ITEM"; payload: CartItem }
    | { type: "REMOVE_ITEM"; payload: number }
    | { type: "UPDATE_ITEM"; payload: CartItem };
  

 export const cartReducer = (state: CartItem[], action: CartAction): CartItem[] => {
    
    switch (action.type) {
      case "ADD_ITEM":
        return  [...state, action.payload];
    
      case "REMOVE_ITEM":
        return state.filter((item) => item.id !== action.payload);

      case "UPDATE_ITEM":
        return state.map((item) =>
            item.id === action.payload.id ? action.payload : item
          );
      default:
        return state;
    }
  };
  