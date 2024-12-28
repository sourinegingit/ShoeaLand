// AllProducts.tsx

import { useQuery } from '@tanstack/react-query';
import ProductCard from '../products/ProductCard';
import Layout from '../layout/Layout';
import Container from '../../Container';
import { fetchAllProducts } from '../../api/api';


const AllProducts = () => {
  const { data: products, isLoading, isError, error } = useQuery({
      queryKey:["products"],  // queryKey
    queryFn:fetchAllProducts,  // queryFn
  }
  
  );

  return (
    <Layout>
      <Container>
        <div className="container p-8 text-base">
          <div id="products" className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
            {isLoading ? (
              <div>Loading...</div>
            ) : isError ? (
              <div>{(error as Error).message}</div>
            ) : products && products.length > 0 ? (
              products.map((item) => (
                <ProductCard
                  key={item.id}
                  title={item.title}
                  price={item.price}
                  images={item.images}
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
