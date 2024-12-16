import { useState } from "react";
import ProductCard, { IProductProps } from "../products/ProductCard";
import Container from "../../Container";
import Layout from "../layout/Layout";


const Favorites = () => {
  const [favorites, setFavorites] = useState<IProductProps[]>(() => {
    const storedFavorites = localStorage.getItem("favorites");
    return storedFavorites ? JSON.parse(storedFavorites) : [];
  });

  return (
    <Layout>
      <div className="p-2">
        <Container>
          <div className="container p-8 text-base">
            <h2 className="text-2xl font-semibold mb-4">Favorite Products</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
              {favorites.length === 0 ? (
                <div>No favorite products.</div>
              ) : (
                favorites.map((item) => (
                  <ProductCard
                    key={item.id}
                    title={item.title}
                    price={item.price}
                    images={item.images.title.src}
                  />
                ))
              )}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Favorites;
