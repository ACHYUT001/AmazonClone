import React from "react";
import "./Checkout.css";
import Subtotal from "../subtotal/Subtotal";
import CheckoutProduct from "./CheckoutProduct";
import { useStateValue } from "../../Stateprovider";
import FlipMove from "react-flip-move";

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img src="assets/amazon_ad.jpg" alt="" className="checkout__ad" />
        <div className="checkout__title">
          <h2>Your Shopping Basket </h2>

          {basket.map((item) => (
            <CheckoutProduct
              key={item.id}
              id={item.id}
              title={item.title}
              img_source={item.img_source}
              rating={item.rating}
              price={item.price}
            />
          ))}
        </div>
      </div>
      <div className="checkout__right">
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
