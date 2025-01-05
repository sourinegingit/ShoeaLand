import { FaArrowLeft } from "react-icons/fa";

const CheckoutHeader: React.FC = () => (
    <div className="flex items-center gap-4 mb-6">
      <button className="text-xl">
        <FaArrowLeft />
      </button>
      <h1 className="text-2xl font-semibold">Check Out</h1>
    </div>
  );
  
  export default CheckoutHeader;