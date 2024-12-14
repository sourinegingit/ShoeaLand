import { FC, ReactElement } from "react";

export interface IProductProps {
  productName: string;
  price: number;
  image: string;
  id: number;
}


const ProductCard: FC<IProductProps> = ({ productName, price, image, id }): ReactElement => {
    return (
      <div className="bg-white mt-4 col-span-1 cursor-pointer border-[1.2px] border-slate-200 rounded-sm p-2 transition text-center text-sm hover:scale-105">
        {/* Product Image */}
        <div className="flex flex-col items-center w-full gap-1">
          <img 
            src={image} 
            alt={productName} 
            className="w-full h-full object-contain "
          />
        </div>
        
        {/* Product Info */}
        <div className="p-4 mt-4">
          <h3 className="text-lg font-semibold text-gray-800">{productName}</h3>
          <p className="text-xl font-bold text-gray-900 mt-2">${price}</p>
        </div>
      </div>
    );
  };
  

export default ProductCard;
