import { OrderItemProps } from "../../type";

  const OrderItem: React.FC<OrderItemProps> = ({ name, details, price, quantity, imageUrl }) => (
    <div className="flex my-3 items-center gap-4 p-4 bg-gray-100 rounded-lg">
      <img src={imageUrl} alt={name} className="w-16 h-16 object-cover rounded-lg" />
      <div className="flex-1">
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-gray-600">{details}</p>
      </div>
      <p className="font-semibold">{price}</p>
      <p className="text-gray-600">x{quantity}</p>
    </div>
  );
  export default OrderItem;