import { Link, useParams } from "react-router-dom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useState, useEffect } from "react";
import { BiHeart } from "react-icons/bi";
import SetColor from "../products/SetColor";
import SetSize from "../products/SetSize";
import { IProductDetail } from "../../type";
import Container from "../../Container";
import CartQuantity from "../cart/CartQuantity";
import { useDispatch } from 'react-redux';


import {
  addToWishList,
  fetchProductDetail,
  removeFromWishList,
} from "../../api/api";
import { addToCart } from "../store/cartSlice";

const ProductDetail = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);
  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const {
    data: product,
    isLoading,
    isError,
  } = useQuery<IProductDetail>({
    queryKey: ["product", id],
    queryFn: () => fetchProductDetail(id!),
  });

  const { mutate: addToFavorites } = useMutation({
    mutationFn: addToWishList,
  });

  const { mutate: removeFromFavorites } = useMutation({
    mutationFn: removeFromWishList,
  });

  useEffect(() => {
    if (product) {
      setIsFavorite(product.isFavorite || false);
    }
  }, [product]);

  const handleFavoriteClick = () => {
    if (!product) return;
    if (isFavorite) {
      removeFromFavorites(product.id);
      setIsFavorite(false);
    } else {
      addToFavorites(product.id);
      setIsFavorite(true);
    }
  };

  const dispatch = useDispatch();

  const handleAddToCart = () => {

    if (!selectedColor || !selectedSize || !quantity) {
      alert('Please select a color and size before adding to the cart.');
      return;
    }
    if (product) {
      dispatch(
        addToCart({
          productId: product.id,
          name: product.name,
          price: product.price,
          total_price: product.price * quantity,
          color: selectedColor,
          size: selectedSize,
          images: product.images,
          quantity,
        })
      );
    }
  };

  if (isLoading) return <div>Loading product details...</div>;
  if (isError || !product) return <div>Product not found.</div>;

  const totalPrice = product.price * quantity;

  return (
    <div className="p-4">
      <Container>
        <div className="grid p-2 my-auto grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <img src={product.images[0]} alt={product.name} />
          </div>
          <div className="flex mx-2 w-full flex-col gap-1 text-slate-500 text-sm">
            <div className="flex gap-46 justify-between items-center">
              <h2 className="text-3xl font-medium text-slate-700">
                {product.name}
              </h2>
              <BiHeart
                onClick={handleFavoriteClick}
                className={`text-4xl cursor-pointer ${
                  isFavorite ? "text-red-500" : "text-gray-500"
                }`}
              />
            </div>
            <div className="flex items-center gap-2">
              ⭐⭐⭐⭐
              <div>({product.rating} reviews)</div>
            </div>
            <div className="text-justify mt-4">{product.description}</div>
            <div>
              <span className="font-semibold">PRICE: ${product.price}</span>
            </div>
            <div className="flex items-center gap-28">
              <SetSize size={product.sizes} onSizeChange={setSelectedSize} />
              <SetColor
                colors={product.colors}
                onColorChange={setSelectedColor}
              />
            </div>
            <div className="flex items-center gap-6">
              <p className="text-2xl font-semibold text-black">Quantity</p>
              <CartQuantity
                value={quantity}
                min={1}
                onChange={(e) => setQuantity(Number(e.target.value))}
              />
            </div>
            <div className="flex items-center border-t-2 border-gray-300 justify-between mt-4">
              <div className="flex mb-2 flex-col">
                <p className="text-black font-semibold text-4xl text-start">
                  ${totalPrice.toFixed(2)}
                </p>
              </div>
              <div>
                <Link to="/cart">
                  <button
                    onClick={handleAddToCart}
                    className="bg-black rounded-full w-44 p-3 text-gray-100"
                  >
                    Add To Cart
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
