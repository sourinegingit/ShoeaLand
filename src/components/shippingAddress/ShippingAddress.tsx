import { FaEdit } from "react-icons/fa";
import { IoLocation } from "react-icons/io5";
interface ShippingAddressProps {
    address: string;
    type: string;
  }
const ShippingAddress: React.FC<ShippingAddressProps> = ({ address, type }) => (
    <div className="mb-6">
      <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
      <div className="flex items-center justify-between p-4 bg-gray-200 rounded-lg">
        <div className="flex items-center gap-4">
          <IoLocation className="text-xl text-gray-600" />
          <div>
            <p className="font-semibold">{type}</p>
            <p className="text-gray-600 text-sm">{address}</p>
          </div>
        </div>
        <button className="text-gray-600">
          <FaEdit />
        </button>
      </div>
    </div>
  );
  export default ShippingAddress;