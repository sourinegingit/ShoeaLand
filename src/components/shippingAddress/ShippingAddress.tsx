import { FaEdit } from "react-icons/fa";
import { Address } from "../../type";
import { fetchAddresses } from "../../api/api";
import { useQuery } from "@tanstack/react-query";

const ShippingAddress: React.FC = () => {
  const { data: addresses, isLoading, error } = useQuery<Address[]>({
    queryKey: ["address"],
    queryFn: fetchAddresses,  
  });

  if (isLoading) return <p>Loading addresses...</p>;
  if (error) return <p>Failed to load addresses.</p>;

  return (
    <div className="mt-6">
      <h2 className="text-xl font-semibold mb-2">Shipping Address</h2>
      {addresses?.map((address) => (
        <div
          key={address.name}
          className={`flex items-center justify-between p-4 rounded-lg mt-4 ${
            address.isSelected ? "bg-gray-300" : "bg-gray-200"
          }`}
        >
          <div>
            <p className="font-semibold">{address.name}</p>
            <p className="text-gray-600 text-sm">{address.address}</p>
          </div>
          <button className="text-gray-600">
            <FaEdit />
          </button>
        </div>
      ))}
    </div>
  );
};

export default ShippingAddress;