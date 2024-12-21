import Container from "../../Container";
import Footer from "../Footer.components";
import Search from "../search/Search";
import ProductCard from "./ProductCard";

export interface CartItem{
  product:string[];
  count:number;
}

const Cart = () => {
  return (
    <Container>
      <div>
        <div className="flex items-center justify-between gap-6 p-3 ">
          <div className="flex items-center justify-between gap-3">
            <img src="./public/assets/shoea.png" className="w-6 object-cover"/>
            <p className="text-2xl font-semibold text-black">My Cart</p>
          </div>
          <Search/>
        </div>

        <ProductCard/> 
      </div>
     <Footer/>
    </Container>
  );
};

export default Cart;
