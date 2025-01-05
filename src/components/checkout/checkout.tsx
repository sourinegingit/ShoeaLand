// Checkout.tsx
import React from "react";
import CheckoutHeader from "./checkoutHeader";
import ShippingAddress from "../shippingAddress/ShippingAddress";
import ChooseShipping from "../shippingAddress/chooseShipping";
import PromoCode from "../promoCode/promocode";
import AmountSummary from "./AmountSummary";
import OrderItem from "../order/orderItem";

const Checkout: React.FC = () => {
    const orderItems = [
        {
          name: "Product Name",
          details: "Color: Red | Size: M",
          price: "$50.00",
          quantity: 2,
          imageUrl: "./public/assets/products/adidas/1.Webp",
        },
        {
          name: "Product Name",
          details: "Color: Blue | Size: L",
          price: "$30.00",
          quantity: 1,
          imageUrl: "./assets/product-image.jpg",
        },
      ];
  return (
    <div className="p-4">
      {/* Header */}
      <CheckoutHeader/>

      {/* Shipping Address */}
    <ShippingAddress  address="123 Main Street, Apt 101, Los Angeles, CA"
        type="Home"/>

      {/* Order List */}

      <OrderItem  items={orderItems}/>
    

      {/* Choose Shipping */}
      <ChooseShipping />


      {/* Promo Code */}
      <PromoCode />


      {/* Amount Summary */}
   
      <AmountSummary amount="$100.00" shipping="$10.00" total="$110.00" />

      {/* Continue to Payment Button */}
      <button className="w-full bg-black text-white font-semibold rounded-lg p-3 text-xl">
        Continue to Payment
      </button>
    </div>
  );
};

export default Checkout;
