import { useState } from "react";



interface ISetSizeProps {
  size: string[]; 
  onSizeChange: (size: string) => void; 
}

const SetSize: React.FC<ISetSizeProps> = ({ size, onSizeChange }) => {
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

  // Handle size change
  const handleChangeSize = (size: string) => {
    setSelectedSize(size);
    onSizeChange(size)
  };

  return (
    <div>
      <span className="font-semibold">Available Sizes: </span>
      <div className="ml-6 flex gap-4 text-lg">
        {size.map((sizeOption, index) => (
          <div
            key={index}
            onClick={() => handleChangeSize(sizeOption)} // Update the selected size on click
            className={`h-10 w-10 flex items-center justify-center cursor-pointer rounded-full border-2 font-bold ${
              selectedSize === sizeOption
                ? "border-black bg-gray-300" // Selected size
                : "border-gray-400"
            }`}
          >
            {sizeOption}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SetSize;

