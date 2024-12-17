import Api from "./base";


 export const fetchProducts = async (brand: string) => {
  try {
    const response = await Api.get(`/products?brand=${brand}`);
    return response.data; // Return the product data
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error; 
  }
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


