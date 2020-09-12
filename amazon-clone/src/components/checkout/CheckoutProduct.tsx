import React from "react";
import * as CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../Stateprovider";

import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, title, img_source, rating, price }) => {
  const [{ basket }, dispatch] = useStateValue();
  const handleRemoveFromBasket = () => {
    dispatch({
      type: "REMOVE-FROM-BASKET",
      id: id,
    });
  };
  return (
    <div className="checkout__product">
      <div>
        <img className="checkout__productImg" src={img_source} alt="" />
      </div>
      <div className="checkout__productInfo">
        <p className="checkout__productTitle">{title}</p>
        <span>
          <CurrencyFormat
            renderText={(value) => <strong>{value}</strong>}
            decimalScale={2}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            thousandSpacing="2s"
            prefix="₹"
          />
        </span>
        <div className="checkout__productRating">
          {Array(rating)
            .fill(rating)
            .map((i) => (
              <small>⭐</small>
            ))}
        </div>
        <button onClick={handleRemoveFromBasket} className="product__addToCart">
          Remove from Cart
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
