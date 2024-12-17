// AllProducts.tsx

import { useEffect, useState } from 'react';
import ProductCard, { IProductProps } from '../products/ProductCard';
import Api from '../../api/base';
import Layout from '../layout/Layout';
import Container from '../../Container';


const AllProducts = () => {
  const [products, setProducts] = useState<IProductProps[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        setLoading(true);
        setError(null);

        const response = await Api.get("/products");
        setProducts(response.data || []);
      } catch (error) {
        setError("Error fetching products");
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, []);

  return (
    <Layout>
      <Container>
        <div className="container p-8 text-base">
          <div id="products" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {loading ? (
              <div>Loading...</div>
            ) : error ? (
              <div>{error}</div>
            ) : products.length > 0 ? (
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

export default AllProducts;
