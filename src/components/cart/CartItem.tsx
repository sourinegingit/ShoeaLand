import { RiDeleteBin6Line } from "react-icons/ri";
import CartQuantity from "./CartQuantity";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import { CartItem } from "../reducers/cart.reducer";
import Footer from "../Footer.components";
import Api from "../../api/base";

const CartItemCard = ({ item }: { item: CartItem }) => {
  const { dispatch } = useContext(CartContext);
  const [quantity, setQuantity] = useState<number>(item.quantity);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);


  // Handle delete action
  const handleDelete = async () => {
    try {
      console.log("Item ID:", item.id);

      if (!item.id) {
        throw new Error("Item ID is missing");
      }

      const response = await Api.delete(`/cart/${item.id}`);

      if (response.status === 200) {
        dispatch({ type: "REMOVE_ITEM", payload: item.id });
        setIsModalOpen(false);
      } else {
        console.error("Error deleting item from server:", response.data);
      }
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // Handle modal toggle
  const toggleModal = () => {
    try {
      setIsModalOpen(!isModalOpen);
    } catch (error) {
      console.error("Error toggling modal:", error);
    }
  };

  // Handle quantity change
  const handleQuantityChange = async (newQuantity: number) => {
    try {
      if (newQuantity < 1) {
        throw new Error("Quantity must be greater than 0");
      }

      // Update quantity on the server
      const updatedItem = { ...item, quantity: newQuantity };
      const response = await Api.put(`/cart/${item.id}`, updatedItem);

      if (response.status === 200) {
        dispatch({ type: "UPDATE_ITEM", payload: updatedItem });
        setQuantity(newQuantity);
      } else {
        console.error("Error updating quantity on server:", response.data);
      }
    } catch (error) {
      console.error("Error updating quantity:", error);
    }
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
              <p className="text-sm border-r-2 p-1 border-gray-400">
                {item.color}
              </p>
              <p className="text-sm">{item.size}</p>
            </div>

            <div className="flex items-center justify-between">
              <p className="font-semibold text-black">
                ${parseFloat(item.price) * quantity}
              </p>
              <CartQuantity
                value={quantity}
                min={1}
                onChange={(e) => {
                  const newQuantity = Number(e.target.value);
                  handleQuantityChange(newQuantity);
                }}
              />
            </div>
          </div>
        </div>

        <div>
          <RiDeleteBin6Line
            className="text-4xl mt-3 p-1"
            onClick={toggleModal}
          />
        </div>
      </div>

      {/* Modal for Confirmation */}
      {isModalOpen && (
        <div className="fixed w-full left-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white flex flex-col w-full p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Remove from Cart</h3>
            <div className="flex items-center justify-between">
              <img
                src="./assets/products/adidas/1.webp"
                className="w-12 h-12 object-cover rounded-lg"
                alt={item.title}
              />
              <p className="flex-1 ml-4">{item.title}</p>
            </div>
            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-300 w-52 rounded-full p-4"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button
                className="bg-gray-700 w-52 rounded-full p-4 text-white"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default CartItemCard;
