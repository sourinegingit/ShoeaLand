import BrandCard, { IBrandProps } from "./BrandCard.components";
import ProductCard, { IProductProps } from "./products/ProductCard";
import Layout from "./layout/Layout";
import Container from "../Container";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Search from "./search/Search";
import { useQuery } from "@tanstack/react-query";
import { fetchProducts } from "../api/api";

const brand: IBrandProps[] = [
  {
    brandName: "nike",
    link: "link",
    image: "/assets/brand/nike.png",
    onClick: () => {
      console.log("Nike clicked!");
    },
  },
  {
    brandName: "puma", // Fixed typo here
    link: "link",
    image: "/assets/brand/puma.png",
    onClick: () => {
      console.log("Puma clicked!");
    },
  },
  {
    brandName: "reebok",
    link: "link",
    image: "/assets/brand/reebok.png",
    onClick: () => {
      console.log("Reebok clicked!");
    },
  },
  {
    brandName: "converse",
    link: "link",
    image: "/assets/brand/converse.png",
    onClick: () => {
      console.log("Converse clicked!");
    },
  },
  {
    brandName: "adidas",
    link: "link",
    image: "/assets/brand/adidas.png",
    onClick: () => {
      console.log("Adidas clicked!");
    },
  },
  {
    brandName: "asics",
    link: "link",
    image: "/assets/brand/asics.png",
    onClick: () => {
      console.log("Asics clicked!");
    },
  },
  {
    brandName: "new balance",
    link: "link",
    image: "/assets/brand/newbalance.png",
    onClick: () => {
      console.log("New Balance clicked!");
    },
  },
  {
    brandName: "more...",
    link: "link",
    image: "/assets/brand/more.png",
    onClick: () => {
      console.log("More clicked!");
    },
  },
];

export type ProductsResponse = IProductProps[];

const Home = () => {
  const [selectedBrand, setSelectedBrand] = useState<string>("all");
  const navigate = useNavigate();

  // Fetch products using React Query with the selected brand filter


  const { data: products, isLoading, isError, error } = useQuery(
    {
      queryKey: ["products", selectedBrand],
      queryFn: () => fetchProducts(selectedBrand),
    }
  );

  // Handle brand filter click
  const handleBrandFilterClick = (brandName: string) => {
    setSelectedBrand(brandName);
  };

  // Handle product click
  const handleProductClick = (id: number) => {
    navigate(`/productDetail/${id}`);
  };

  // Handle brand click to navigate to the brand page
  const handleBrandClick = (brandName: string) => {
    navigate(`/products/${brandName}`);
  };

  return (
    <Layout>
      <div className="p-2">
        <Container>
          <div className="container p-8 text-base">
            {/* Search Bar */}
            <Search />

            {/* Companies Brand */}
            <div className="flex flex-wrap mt-4 items-center justify-between gap-1">
              {brand.map((item, index) => (
                <BrandCard
                  onClick={() => handleBrandClick(item.brandName)}
                  key={index}
                  brandName={item.brandName}
                  image={item.image}
                  link={item.link}
                />
              ))}
            </div>

            {/* Most Popular Section */}
            <div id="most-popular" className="mt-6">
              <header>
                <div className="flex justify-between items-center mb-4">
                  <p id="popular-btn" className="font-medium text-lg">
                    Most Popular
                  </p>
                  <p onClick={() => navigate("/products/all")} className="text-blue-500 cursor-pointer">
                    See All
                  </p>
                </div>
                <div id="header-buttons" className="flex flex-wrap gap-2">
                  <button
                    className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
                    onClick={() => handleBrandClick("all")}
                    style={{ backgroundColor: selectedBrand === "all" ? "#ddd" : "transparent" }}
                  >
                    All
                  </button>
                  {brand.map((item) => (
                    <button
                      key={item.brandName}
                      className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md"
                      onClick={() => handleBrandFilterClick(item.brandName)}
                      style={{ backgroundColor: selectedBrand === item.brandName ? "#ddd" : "transparent" }}
                    >
                      {item.brandName}
                    </button>
                  ))}
                </div>
              </header>
            </div>

            {/* Products Section */}
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
                    onClick={() => handleProductClick(item.id)}
                  />
                ))
              ) : (
                <div>No products available.</div>
              )}
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default Home;
