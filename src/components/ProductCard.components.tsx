import { FC, ReactElement } from "react";

export interface IProductProps {
  productName: string;
  price: number;
  image: string;
  id: number;
}


const ProductCard: FC<IProductProps> = ({ productName, price, image, id }): ReactElement => {
    return (
      <div className="bg-white w-72 min-h-60 flex flex-col shadow-md  rounded-lg overflow-hidden mt-4">
        {/* Product Image */}
        <div className="flex justify-center border-2 border-b-gray-300 items-center  ">
          <img 
            src={image} 
            alt={productName} 
            className="w-full h-48 object-cover "
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
