// CartItemCard.tsx
import { RiDeleteBin6Line } from "react-icons/ri";
import CartQuantity from "./CartQuantity";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { CartItem } from "../reducers/cart.reducer";

const CartItemCard = ({ item }: { item: CartItem }) => {
  const { dispatch } = useContext(CartContext);
  const [quantity, setQuantity] = useState<number>(item.quantity);

  const handleDelete = () => {
    dispatch({ type: "REMOVE_ITEM", payload: item.id });
  };

  const handleQuantityChange = (newQuantity: number) => {
    const updatedItem = { ...item, quantity: newQuantity };
    dispatch({ type: "UPDATE_ITEM", payload: updatedItem });
  };

  return (
    <div className="flex flex-col mt-2">
      <div className="flex p-2 items-start justify-evenly gap-5 bg-gray-200 rounded-xl">
        <img
          src="./assets/products/adidas/1.webp" // You can replace with dynamic image path
          className="w-36 object-cover rounded-lg"
          alt={item.title}
        />
        <div className="flex p-2 items-center gap-2 justify-between">
          <div className="flex flex-col">
            <p className="text-3xl mt-3">{item.title}</p>
            <div className="flex items-center mt-2 gap-2">
              <p className="text-sm border-r-2 p-1 border-gray-400">{item.color}</p>
              <p className="text-sm">{item.size}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-semibold text-black">${(parseFloat(item.price) * quantity).toFixed(2)}</p>
              <CartQuantity
                value={quantity}
                min={1}
                onChange={(e) => {
                  setQuantity(Number(e.target.value));
                  handleQuantityChange(Number(e.target.value));
                }}
              />
            </div>
          </div>
        </div>

        <div>
          <RiDeleteBin6Line className="text-4xl mt-3 p-1" onClick={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default CartItemCard;
