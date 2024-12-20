import React, { useState } from "react";

interface ISetColorProps {
  colors: string[]; 
  onColorChange: (color: string) => void; 
}

const SetColor: React.FC<ISetColorProps> = ({ colors, onColorChange }) => {
  const [selectedColor, setSelectedColor] = useState<string | null>(null); 

  const handleColorClick = (color: string) => {
    setSelectedColor(color); 
    onColorChange(color); 
  };

  return (
    <div className="flex flex-col gap-4 ">
      <span className="font-semibold">Available Colors: </span>
      <div className="ml-6 flex gap-4 text-lg">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleColorClick(color)}
            className={`h-10 w-10 rounded-full cursor-pointer ${
              selectedColor === color ? "border-4 border-black" : "border"
            }`}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SetColor;
