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
    <div className="flex gap-4 items-center">
      <span className="font-semibold">Available Colors: </span>
      <div className="flex gap-2">
        {colors.map((color, index) => (
          <div
            key={index}
            onClick={() => handleColorClick(color)}
            className={`h-7 w-7 rounded-full cursor-pointer ${
              selectedColor === color ? "border-4 border-teal-400" : "border"
            }`}
            style={{ backgroundColor: color }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default SetColor;
