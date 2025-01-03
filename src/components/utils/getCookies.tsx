import { Cookies } from "react-cookie";

// getcookies
const cookies = new Cookies();
export const getCookies = () => {
  const result = cookies.get("shoeToken");
  return result;
};
