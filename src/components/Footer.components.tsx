import React from "react"
import { FaHome, FaShoppingCart, FaUser, FaWallet } from "react-icons/fa"
import { FaBasketShopping } from "react-icons/fa6"

const Footer:React.FC = () => {
  return (
    <nav id="action-nav" className="bottom-0 left-0 w-full border-t border-gray-300 flex justify-around py-4">
      <div className="text-center">
        <FaHome className="p-1 text-3xl text-gray-300" />
        <span className="text-sm text-gray-700">Home</span>
      </div>
      <div className="text-center">
        <FaBasketShopping className="p-1 text-3xl text-gray-300" />
        <span className="text-sm text-gray-700">Cart</span>
      </div>
      <div className="text-center">
        <FaShoppingCart className="p-1 text-3xl text-gray-300" />
        <span className="text-sm text-gray-700">Orders</span>
      </div>
      <div className="text-center">
        <FaWallet className="p-1 text-3xl text-gray-300" />
        <span className="text-sm text-gray-700">Wallet</span>
      </div>
      <div className="text-center">
        <FaUser className="p-1 text-3xl text-gray-300" />
        <span className="text-sm text-gray-700">User</span>
      </div>
    </nav>
  )
}

export default Footer
