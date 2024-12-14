import Api from "./base";


export const fetchProducts = async () => {
  try {
    const response = await Api.get("/products");
    console.log(response);
    
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
