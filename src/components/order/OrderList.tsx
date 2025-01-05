import { OrderListProps } from "../../type";
import OrderItem from "./orderItem";

const OrderList: React.FC<OrderListProps> = ({ items }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold mb-2">Order List</h2>
    <div className="space-y-4">
      {items.map((item, index) => (
        <OrderItem key={index} {...item} />
      ))}
    </div>
  </div>
);
export default OrderList;