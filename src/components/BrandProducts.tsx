import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ProductCard, { IProductProps } from "./products/ProductCard";
import Api from "../api/base";
import Layout from "./layout/Layout";
import Container from "../Container";

const BrandProducts = () => {
  const { brand } = useParams<{ brand: string }>(); 
  // console.log(brand);
  
  const [products, setProducts] = useState<IProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProductsByBrand = async () => {
      try {
        setLoading(true);
        const response = await Api.get(`/products?brand=${brand}`); 
        console.log(response.data);
        
        setProducts(response.data);
      } catch (error) {
        setError("Error fetching products");
      } finally {
        setLoading(false);
      }
    };

    if (brand) {
      fetchProductsByBrand();
    }
  }, [brand]); 

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <Layout>
      <Container>
    <div>
      <h1 className="w-full mt-4 h-12 text-2xl items-center">Products for Brand : {brand}</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
       
        {products.length > 0 ? (
          products.map((item) => (
            <ProductCard
              key={item.id}
              title={item.title}
              price={item.price}
              images={item.images.title.src}
            />
          ))
        ) : (
          <div>No products available.</div>
        )}
      </div>
    </div>
    </Container>
    </Layout>
  );
};

export default BrandProducts;
