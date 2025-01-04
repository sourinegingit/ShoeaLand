import { FC } from "react";
import { MdDelete } from "react-icons/md";
import { IProductProps } from "../../type";





const ProductCard: FC<IProductProps> = ({ name, price, images ,onClick})  => {
    return (
      <div onClick={onClick}  className="bg-white mt-4 col-span-1 cursor-pointer border-[1.2px] border-slate-200 rounded-sm p-2 transition text-center text-sm hover:scale-105">
        {/* Product Image */}
        <div className="flex flex-col  items-center w-full gap-1">
          <img 
            src={images[0]}
            alt={name} 
            className="w-full h-full object-contain "
          />
<MdDelete className="flex text-xl text-white "/>

        </div>
        
        {/* Product Info */}
        <div className="p-4 mt-4">
          <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
          <p className="text-xl font-bold text-gray-900 mt-2">${price}</p>
    
        </div>
      </div>
    );
  };
  

export default ProductCard;
