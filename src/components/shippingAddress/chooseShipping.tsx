import { FaTruck } from "react-icons/fa";

const ChooseShipping: React.FC = () => (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Choose Shipping</h2>
      <div className="flex items-center gap-4 p-4 bg-gray-200 rounded-lg">
        <FaTruck className="text-xl text-gray-600" />
        <p className="flex-1 font-semibold">Choose Shipping Type</p>
      </div>
    </div>
  );
  export default ChooseShipping;