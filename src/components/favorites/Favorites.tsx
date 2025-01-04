import ProductCard from "../products/ProductCard";
import Container from "../../Container";
import Layout from "../layout/Layout";
import { fetchWishList } from "../../api/api";
import { useQuery } from "@tanstack/react-query";

const Favorites = () => {
  // const [favorites, setFavorites] = useState<IProductProps[]>(() => {
  //   const storedFavorites = localStorage.getItem("favorites");
  //   return storedFavorites ? JSON.parse(storedFavorites) : [];
  // });

  const {
    data: favorites,
    isLoading,
    isError,
  } = useQuery(
    {
      queryKey: ["whishlist"],
      queryFn: fetchWishList,
    }
    // console.log(favorites);
  );

  return (
    <Layout>
      <div className="p-2">
        <Container>
          <div className="p-2">
            <Container>
              <div className="container p-8 text-base">
                <h2 className="text-2xl font-semibold mb-4">
                  Favorite Products
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-8">
                  {isLoading ? (
                    <div>Loading...</div>
                  ) : isError ? (
                    <div>Error loading wishlist.</div>
                  ) : favorites.length === 0 ? (
                    <div>No favorite products.</div>
                  ) : (
                    favorites.map((item) => (
                      <ProductCard
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        images={item.images}
                      />
                    ))
                  )}
                </div>
              </div>
            </Container>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Favorites;


