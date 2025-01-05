import { AmountSummaryProps } from "../../type";

const AmountSummary: React.FC<AmountSummaryProps> = ({ amount, shipping, total }) => (
    <div className="mb-6">
      <div className="p-4 bg-gray-100 rounded-lg">
        <div className="flex justify-between mb-2">
          <p className="text-gray-600">Amount</p>
          <p className="font-semibold">{amount}</p>
        </div>
        <div className="flex justify-between mb-2">
          <p className="text-gray-600">Shipping</p>
          <p className="font-semibold">{shipping}</p>
        </div>
        <div className="flex justify-between border-t border-gray-300 pt-2">
          <p className="font-semibold">Total</p>
          <p className="font-semibold">{total}</p>
        </div>
      </div>
    </div>
  );
  export default AmountSummary