import { IProductDetail } from "../components/productDetail/ProductDetail";
import { IProductProps } from "../components/products/ProductCard";
import { Products } from "../type";

import Api from "./base";

// Updated fetchProducts function to properly handle params as an object
export async function fetchProducts(params: { brand: string }) {
  const response = await Api.get<Products[]>("api/products", { params });
  // console.log(response);
  return response.data;
}

export const fetchAllProducts = async (): Promise<IProductProps[]> => {
  const response = await Api.get("/products");
  return response.data || [];
};

export const fetchProductsByBrand = async (brand?: string) => {
  const res = await Api.get<Products[]>("api/products?brand=" + brand);

  console.log(res.data);
  return res.data;
};



export const getProductsById = async (id: string) => {
  try {
    const response = await Api.get<IProductDetail>(`/api/products/${id}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching product details");
  }
};


export const fetchProductsByBrands= async (brand?: string) => {
  const res = await Api.get<IProductDetail>("api/products?brands=" + brand);

  console.log(res.data);
  return res.data;
};
export const getPopularProducts = async () => {
  const response = await Api.get("api/products?is_popular=true");
  return response.data;
};
