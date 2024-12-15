import { FC, ReactElement } from "react";

export interface IBrandProps {
  image: string;
  link: string;
  brandName: string;
  onClick: () => void; // Update the type to handle function with no return
}

const BrandCard: FC<IBrandProps> = ({ image, brandName, onClick }): ReactElement => {
  return (
    <div
      onClick={onClick} 
      className="flex flex-col items-center bg-white p-1 rounded-lg cursor-pointer"
    >
      <img
        src={image}
        alt={brandName}
        className="w-12 h-12 object-cover rounded-full border-4 border-gray-200 mb-2"
      />
      <span className="text-sm font-semibold text-gray-700">{brandName}</span>
    </div>
  );
};

export default BrandCard;
