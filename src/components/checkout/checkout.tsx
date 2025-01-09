import React, { useState } from "react";
import CheckoutHeader from "./checkoutHeader";
import ShippingAddress from "../shippingAddress/ShippingAddress";
import ChooseShipping from "../shippingAddress/chooseShipping";
import PromoCode from "../promoCode/promocode";
import AmountSummary from "./AmountSummary";
import OrderItem from "../order/orderItem";
import { useQuery } from "@tanstack/react-query";
import { fetchOrders } from "../../api/api";

const Checkout: React.FC = () => {
  const [discount, setDiscount] = useState<number>(0);

  // استفاده از هوک برای دریافت سفارش‌ها
  const { data: orders, isLoading, isError, error } = useQuery({
    queryKey: ["orders"],
    queryFn: fetchOrders,
  });

  // محاسبه مبلغ نهایی
  const totalAmount = orders?.reduce((total: any, order: any) => total + order.total_price, 0) || 0;
  const shippingAmount = 10; // فرضی برای هزینه ارسال
  const grandTotal = totalAmount + shippingAmount - discount; // اعمال تخفیف

  return (
    <div className="p-4">
      {/* Header */}
      <CheckoutHeader />

      {/* Shipping Address */}
      <ShippingAddress address="123 Main Street, Apt 101, Los Angeles, CA" type="Home" />

      {/* Order List */}
      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: {error}</p>
      ) : (
        orders?.map((order) => (
          <OrderItem
            key={order.productId}
            name={order.name}
            details={`Color: ${order.color} | Size: ${order.size}`}
            price={`$${order.price.toFixed(2)}`}
            quantity={order.count}
            imageUrl={order.images[0]} // نمایش اولین تصویر
          />
        ))
      )}

      {/* Choose Shipping */}
      <ChooseShipping />

      {/* Promo Code */}
      <PromoCode onDiscountApplied={setDiscount} />

      {/* Amount Summary */}
      <AmountSummary amount={`$${totalAmount.toFixed(2)}`} shipping={`$${shippingAmount}`} total={`$${grandTotal.toFixed(2)}`} />

      {/* Continue to Payment Button */}
      <button className="w-full bg-black text-white font-semibold rounded-lg p-3 text-xl">
        Continue to Payment
      </button>
    </div>
  );
};

export default Checkout;
