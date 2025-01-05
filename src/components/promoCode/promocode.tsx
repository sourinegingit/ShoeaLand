import { FaPlus } from "react-icons/fa";

const PromoCode: React.FC = () => (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Promo Code</h2>
      <div className="flex items-center gap-2">
        <input
          type="text"
          placeholder="Enter promo code"
          className="flex-1 p-2 border border-gray-300 rounded-lg"
        />
        <button className="p-2 bg-gray-700 text-white rounded-lg">
          <FaPlus />
        </button>
      </div>
    </div>
  );
  export default PromoCode