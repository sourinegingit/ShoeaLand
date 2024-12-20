import { FaBinoculars, FaDeleteLeft } from "react-icons/fa6";
import CartQuantity from "./CartQuantity";
import { RiDeleteBin6Line } from "react-icons/ri";

const ProductCard = () => {
  return (
    <div>
      <div className="flex flex-col mt-2">
        <div className="flex p-2 items-start justify-evenly gap-5 bg-gray-200 rounded-xl">
          <img
            src="./assets/products/adidas/1.webp"
            className="w-36 object-cover rounded-lg"
          />
          <div className="flex p-2 items-center gap-2 justify-between">
            <div className="flex flex-col ">
              <p className="text-3xl mt-3">AIR DROP 3 RETRO</p>
              <div className="flex items-center mt-2 gap-2">
                <p className="text-sm border-r-2 p-1 border-gray-400">black</p>
                <p className="text-sm">size=42</p>
              </div>

              <div className="flex items-center justify-between">
                <p className="font-semibold text-black">$105.00</p>
                <CartQuantity />
              </div>
            </div>
          </div>

          <div>
            <RiDeleteBin6Line className="text-4xl mt-3 p-1"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
