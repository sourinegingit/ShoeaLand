import { Link, useParams } from "react-router-dom";
import Container from "../../Container";
import { useContext, useEffect, useState } from "react";
import Api from "../../api/base";
import SetColor from "../products/SetColor";
import { BiHeart } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import SetSize from "../products/SetSize";
import CartQuantity from "../cart/CartQuantity";
import { CartContext } from "../context/CartContext";
import { CartItem } from "../reducers/cart.reducer";

export interface IProductDetail {
  id: number;
  images: { title: { src: string } };
  title: string;
  price: string;
  rate: string;
  description:string;
  category: string;
  brand: string;
  size: string[];
  color: string[];
}

const ProductDetail = () => {
  const { id } = useParams();

const{dispatch}=useContext(CartContext)

  const [product, setProduct] = useState<IProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null); // Track selected size

  const [quantity, setQuantity] = useState<number>(1); 

  const navigate = useNavigate();

  const [favorites, setFavorites] = useState<IProductDetail[]>(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  useEffect(() => {
    const fetchProductDetail = async () => {
      try {
        const response = await Api.get(`/products/${id}`);
        setLoading(true);
        setProduct(response.data);
      } catch (error) {
        setLoading(false);
        setError("Error fetching product details");
      } finally {
        setLoading(false);
      }
    };
    if (id) {
      fetchProductDetail();
    }
  }, [id]);


  
  const handleAddToFavorites = () => {
    if (!product) return;

    const isProductInFavorites = favorites.find(
      (item) => item.id === product.id
    );

    if (isProductInFavorites) {
      // Remove from favorites
      const updatedFavorites = favorites.filter(
        (item) => item.id !== product.id
      );
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      // Add to favorites
      const updatedFavorites = [...favorites, product];
      setFavorites(updatedFavorites);
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    }
  };

  if (loading) return <div>Loading product details...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found.</div>;




  const handleAddToCart = async () => {
    if (!product || !selectedColor || !selectedSize) return;
  
    const newCartItem: CartItem = {
      productId:product.id,
      title: product.title,
      price: product.price,
      quantity,
      size: selectedSize,
      color: selectedColor,
    };
  
    try {
      // Check if the product already exists in the cart in the backend
      const response = await Api.get(`/cart?size=${selectedSize}&color=${selectedColor}&productId=${product.id}`); // Get cart items from the API
      // const cartItems: CartItem[] = response.data;
  
      const existingCartItem = response.data[0]
  
      console.log('data',response.data);
      
      if (existingCartItem) {
        // Update the existing item in the cart (increment quantity)
        const updatedCartItem = {
          ...existingCartItem,
          quantity: existingCartItem.quantity + quantity,
        };
  
        // Update the backend cart
        await Api.put(`/cart/${existingCartItem.id}`, updatedCartItem); // Update item in the cart
  
        // Dispatch the update action to update the state and localStorage
        dispatch({ type: "UPDATE_ITEM", payload: updatedCartItem });
      } else {
        // Add new item to the cart (backend and localStorage)
        await Api.post('/cart', newCartItem); // Add the item to the backend cart
        dispatch({ type: "ADD_ITEM", payload: newCartItem });
      }
  
      console.log('Item added to cart successfully');
    } catch (error) {
      console.error('Error adding item to cart', error);
    }
  };
  
  
 

  if (!product) return <div>Loading...</div>;

  // Calculate the total price
  const totalPrice = product
    ? parseFloat(product.price) * quantity
    : 0;

  
  return (
    <div className="p-4">
      <Container>
        <div className="grid p-2 my-auto  grid-cols-1 md:grid-cols-2 gap-12  ">
          <div>
            <img src={product.images.title.src} alt={product.title} />
          </div>
          <div className="flex  mx-2 w-full flex-col gap-1 text-slate-500 text-sm">
            <div className="flex gap-46 justify-between items-center">
              <h2 className="text-3xl  font-medium text-slate-700">
                {product.title}
              </h2>
              <BiHeart
                className="z-40 text-4xl cursor-pointer"
                onClick={handleAddToFavorites}
                style={{
                  color: favorites.some((item) => item.id === product.id)
                    ? "red"
                    : "gray",
                }}
              />
            </div>
            <div className="flex items-center gap-2">
              ⭐⭐⭐⭐
              <div>({product.rate} reviews)</div>
            </div>
            <div className="text-justify mt-4">{product.title}</div>
            <div className="text-justify mt-4">{product.description}</div>

            <div>
              <span className="font-semibold">
                CATEGORY: {product.category}
              </span>
            </div>
            <div>
              <span className="font-semibold">BRAND: {product.brand}</span>
            </div>
            <div>
              <span className="font-semibold">PRICE: {product.price}</span>
            </div>

            <div className="flex items-center gap-28">
              <SetSize size={product.size} onSizeChange={setSelectedSize} />
              <SetColor
                colors={product.color}
                onColorChange={setSelectedColor}
              />
            </div>

            <div className="flex items-center gap-6 ">
              <p className="text-2xl font-semibold text-black"> Quantity</p>
              <CartQuantity  value={quantity}
                min={1}
                onChange={(e) => setQuantity(Number(e.target.value))}
               />
            </div>

            <div className="flex items-center border-t-2  border-gray-300 justify-between mt-4">
            <div className="flex mb-2 flex-col">
              <p className="text-black font-semibold text-4xl text-start">{totalPrice.toFixed()}</p>
              
            </div>
            <div>
             <Link to="/cart">
             <button
              onClick={handleAddToCart}
                className="bg-black rounded-full
                 w-44 p-3 text-gray-100"
              >
                Add To Cart
              </button >
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
