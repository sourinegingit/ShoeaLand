import { FC, ReactElement } from "react";

export interface IProductProps {
  title: string;
  price: number;
  images: string;
  id: number;
}


const ProductCard: FC<IProductProps> = ({ title, price, images, id }): ReactElement => {
    return (
      <div className="bg-white mt-4 col-span-1 cursor-pointer border-[1.2px] border-slate-200 rounded-sm p-2 transition text-center text-sm hover:scale-105">
        {/* Product Image */}
        <div className="flex flex-col items-center w-full gap-1">
          <img 
            src={images} 
            alt={title} 
            className="w-full h-full object-contain "
          />
        </div>
        
        {/* Product Info */}
        <div className="p-4 mt-4">
          <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
          <p className="text-xl font-bold text-gray-900 mt-2">${price}</p>
        </div>
      </div>
    );
  };
  

export default ProductCard;
