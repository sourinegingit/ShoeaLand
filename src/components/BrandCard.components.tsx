import { FC, ReactElement } from "react";

export interface IBrandProps {
  image: string;
  link: string;
  brandName: string;
}

const BrandCard: FC<IBrandProps> = ({ image, brandName, link }): ReactElement => {
  return (
    <div className="flex flex-col items-center bg-white p-1 rounded-lg">
      {/* Image */}
      <img
        src={image}
        alt={brandName}
        className="w-12 h-12 object-cover rounded-full border-4 border-gray-200 mb-2"
      />
      {/* Brand Name */}
      <span className="text-sm font-semibold text-gray-700">{brandName}</span>
    </div>
  );
};

export default BrandCard;
