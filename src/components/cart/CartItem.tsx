import { RiDeleteBin6Line } from "react-icons/ri";
import Footer from "../Footer.components";
import CartQuantity from "./CartQuantity";
import { useState } from "react";
import { CartItem } from "../../type";

interface CartItemCardProps {
  item: CartItem;
  onRemove: () => void;
  onQuantityChange: (quantity: number) => void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({ item, onRemove, onQuantityChange }) => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="flex flex-col mt-2">
      <div className="flex p-2 items-start justify-evenly gap-5 bg-gray-200 rounded-xl">
        <img
          src={item.images[0]} // Dynamic image path
          className="w-36 object-cover rounded-lg"
          alt={item.name}
        />
        <div className="flex p-2 items-center gap-2 justify-between">
          <div className="flex flex-col">
            <p className="text-3xl mt-3">{item.name}</p>
            <div className="flex items-center mt-2 gap-2">
              <p className="text-sm border-r-2 p-1 border-gray-400">{item.color}</p>
              <p className="text-sm">{item.size}</p>
            </div>
            <div className="flex items-center justify-between mt-2">
              <p className="font-semibold text-black">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <CartQuantity
                value={item.quantity}
                min={1}
                onChange={(e) => onQuantityChange(Number(e.target.value))}
              />
            </div>
          </div>
        </div>
        <div>
          <RiDeleteBin6Line
            className="text-4xl mt-3 p-1 cursor-pointer"
            onClick={toggleModal}
          />
        </div>
      </div>

      {/* Modal for Confirmation */}
      {isModalOpen && (
        <div className="fixed w-full left-0 bottom-0 bg-gray-500 bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white flex flex-col w-full max-w-md p-8 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Remove from Cart</h3>
            <div className="flex items-center justify-between">
              <img
                src={item.images[0]}
                className="w-12 h-12 object-cover rounded-lg"
                alt={item.name}
              />
              <p className="flex-1 ml-4">{item.name}</p>
            </div>
            <div className="flex justify-between mt-4">
              <button
                className="bg-gray-300 w-24 rounded-full p-2"
                onClick={toggleModal}
              >
                Cancel
              </button>
              <button
                onClick={() => {
                  onRemove();
                  toggleModal();
                }}
                className="bg-red-600 w-24 rounded-full p-2 text-white"
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