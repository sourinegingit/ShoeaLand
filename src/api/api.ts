import axios from "axios";
import { API_URL } from "./base";

export const fetchProducts = async () => {
  try {
    const response = await axios.get(API_URL);
    console.log(response);
    
    return response.data;
  } catch (error) {
    console.error("Error fetching products:", error);
    throw error;
  }
};
