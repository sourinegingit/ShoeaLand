import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import SetColor from "../products/SetColor";
import { BiHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import SetSize from "../products/SetSize";
import CartQuantity from "../cart/CartQuantity";
import { CartContext } from "../context/CartContext";
import { getProductsById } from "../../api/api"; 
import Api from "../../api/base";
import Container from "../../Container";

export interface IProductDetail {
  id: number;
  name: string;
  price: number;
  isFavorite: boolean;
  images: string[];
  icon: string;
  brand: string[];
  colors: string[];
  sizes: string[];
  order: number;
  is_popular: boolean;
  description: string;
  rating: number;
  view_count: number;
  sold_quantity: number;
}

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const { dispatch } = useContext(CartContext); // Use context to manage the cart

  const [product, setProduct] = useState<IProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null); // Selected size

  const [quantity, setQuantity] = useState<number>(1); // Quantity of product

  const navigate = useNavigate();

  // Fetch product details from the API
  const fetchProductDetail = async (id: string) => {
    try {
      const data = await getProductsById(id); // Call API to get product by ID
      setProduct(data); // Set product details in state
      setLoading(false);
    } catch (err) {
      setError("Failed to fetch product details.");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchProductDetail(id); // Fetch details when the product ID changes
    }
  }, [id]);

  const handleAddToFavorites = () => {
    if (!product) return;

    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

    const isProductInFavorites = favorites.find((item: IProductDetail) => item.id === product.id);

    if (isProductInFavorites) {
      const updatedFavorites = favorites.filter((item: IProductDetail) => item.id !== product.id);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      favorites.push(product);
      localStorage.setItem("favorites", JSON.stringify(favorites));
    }
  };

  const handleAddToCart = async () => {
    if (!product || !selectedColor || !selectedSize) return;

    // Construct new cart item object
    const newCartItem = {
      productId: product.id,
      title: product.name,
      price: product.price,
      quantity,
      size: selectedSize,
      color: selectedColor,
    };

    // API logic for adding to cart (if required)
    try {
      // Example API POST/PUT logic (adjust based on your backend API)
      const response = await Api.get(`/cart?size=${selectedSize}&color=${selectedColor}&productId=${product.id}`);
      const existingCartItem = response.data[0];

      if (existingCartItem) {
        const updatedCartItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + quantity,
        };

        await Api.put(`/cart/${existingCartItem.id}`, updatedCartItem); // Update cart item
        dispatch({ type: "UPDATE_ITEM", payload: updatedCartItem }); // Update cart in state
      } else {
        await Api.post('/cart', newCartItem); // Add to cart
        dispatch({ type: "ADD_ITEM", payload: newCartItem });
      }
    } catch (error) {
      console.error("Error adding item to cart", error);
    }
  };

  if (loading) return <div>Loading product details...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found.</div>;

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
              <h2 className="text-3xl font-medium text-slate-700">{product.name}</h2>
              <BiHeart
                className="z-40 text-4xl cursor-pointer"
                onClick={handleAddToFavorites}
                style={{
                  color: localStorage.getItem("favorites")?.includes(product.id) ? "red" : "gray",
                }}
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
              <SetColor colors={product.colors} onColorChange={setSelectedColor} />
            </div>

            <div className="flex items-center gap-6">
              <p className="text-2xl font-semibold text-black">Quantity</p>
              <CartQuantity value={quantity} min={1} onChange={(e) => setQuantity(Number(e.target.value))} />
            </div>

            <div className="flex items-center border-t-2 border-gray-300 justify-between mt-4">
              <div className="flex mb-2 flex-col">
                <p className="text-black font-semibold text-4xl text-start">${totalPrice.toFixed(2)}</p>
              </div>
              <div>
                <Link to="/cart">
                  <button onClick={handleAddToCart} className="bg-black rounded-full w-44 p-3 text-gray-100">
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
