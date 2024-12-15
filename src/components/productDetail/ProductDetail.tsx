import { useParams } from "react-router-dom";
import Container from "../../Container";
import { useEffect, useState } from "react";
import Api from "../../api/base";
import SetColor from "../products/SetColor"; // Import SetColor
import { BiHeart } from "react-icons/bi";

export interface IProductDetail {
  images: string;
  title: string;
  price: string;
  rate: string;
  category: string;
  brand: string;
  size: string[];
  color: string[];
}

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState<IProductDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedColor, setSelectedColor] = useState<string | null>(null); // State for selected color

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

  if (loading) return <div>Loading product details...</div>;
  if (error) return <div>{error}</div>;
  if (!product) return <div>Product not found.</div>;

  const handleColorChange = (color: string) => {
    setSelectedColor(color); // Update the selected color
  };

  return (
    <div className="p-4">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div >
            <img src={product.images.title.src} alt={product.title} />
            
          </div>
          <div className="flex flex-col gap-1 text-slate-500 text-sm">
            <div className="flex gap-64 items-center justify-between">
            <h2 className="text-3xl font-medium text-slate-700">{product.title}</h2>
            <BiHeart className="z-40 text-4xl"/>
            
            </div>
            <div className="flex items-center gap-2">
              ⭐⭐⭐⭐
              <div>{product.rate} reviews</div>
            </div>
            <div className="text-justify mt-4">{product.title}</div>
            <div>
              <span className="font-semibold">CATEGORY: {product.category}</span>
            </div>
            <div>
              <span className="font-semibold">BRAND: {product.brand}</span>
            </div>
            <div>
              <span className="font-semibold">PRICE: {product.price}</span>
            </div>

            <div>
              <span className="font-semibold">Available Sizes: </span>
              <ul className="ml-6 flex gap-4 text-lg">
                {product.size.map((size, index) => (
                  <li key={index}>{size}</li>
                ))}
              </ul>
            </div>

            {/* Pass the colors to SetColor component */}
            <SetColor colors={product.color} onColorChange={handleColorChange} />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default ProductDetail;
