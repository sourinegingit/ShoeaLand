interface CartQuantityProps {
  value: number; 
  min: number;   
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void; 
}

const CartQuantity: React.FC<CartQuantityProps> = ({ value, min, onChange }) => {
  return (
    <div>
      <div className="flex w-20 rounded-xl bg-gray-300 items-center justify-between gap-2">
        <button
          className="text-2xl p-1 font-semibold"
          onClick={() => value > min && onChange({ target: { value: (value - 1).toString() } } as React.ChangeEvent<HTMLInputElement>)}
        >
          -
        </button>
        <p className="text-xl p-1 font-semibold">{value}</p>
        <button
          className="text-2xl p-1 font-semibold"
          onClick={() => onChange({ target: { value: (value + 1).toString() } } as React.ChangeEvent<HTMLInputElement>)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartQuantity;
