import { IProductProps } from "../components/products/ProductCard";
import { CartItem } from "../components/reducers/cart.reducer";
import { Products } from "../type";
import Api from "./base";

export const fetchProducts = async (brand: string) => {
  try {
    const response = await Api.get("/products");
    const allProducts: Products[] = response.data || [];

    return brand === "all"
      ? allProducts
      : allProducts.filter(
          (product: Products) =>
            product.brand.toLowerCase() === brand.toLowerCase()
        );
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};


export const fetchAllProducts = async (): Promise<IProductProps[]> => {
  const response = await Api.get("/products");
  return response.data || [];
};

export const fetchProductsByBrand = async (brand?: string) => {
  try {
    const url = brand ? `/products?brand=${brand}` : "/products";
    const response = await Api.get(url);
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};

export const updateCartItem = async (cartItem: CartItem) => {
  try {
    const response = await Api.put(`/cart/${cartItem.id}`, {
      quantity: cartItem.quantity,
      size: cartItem.size,
      color: cartItem.color,
    });
    return response.data;
  } catch (error) {
    console.error("Error updating cart item:", error);
    throw error;
  }
};
