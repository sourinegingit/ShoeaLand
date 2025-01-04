import { FC } from "react";
import { BiTrash } from "react-icons/bi";
import { MdDelete } from "react-icons/md";

export interface IProductProps {
  id: number;
name: string;
  price: number;
  sold_quantity:number;
  src:string;
  description:string;
  colors:string[];
  images:string[];
  isFavorite:string;
  is_popular:boolean;
  order:number;
  rating:number;
  sizes:string[];
  view_count:number;
  onClick: () => void; 
  onRemove:(id:number) => void;// Remove item

}



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
