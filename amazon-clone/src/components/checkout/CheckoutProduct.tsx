import React, { forwardRef } from "react";
import * as CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../Stateprovider";

import "./CheckoutProduct.css";
import FlipMove from "react-flip-move";

interface IProps {
  id: string;
  title: string;
  img_source: string;
  rating: number;
  price: number;
}

const CheckoutProduct: React.FC<IProps> = (IProps) => {
  const [{ basket }, dispatch] = useStateValue();
  const handleRemoveFromBasket = () => {
    dispatch({
      type: "REMOVE-FROM-BASKET",
      id: IProps.id,
    });
  };
  return (
    <div className="checkout__product">
      <div>
        <img className="checkout__productImg" src={IProps.img_source} alt="" />
      </div>
      <div className="checkout__productInfo">
        <p className="checkout__productTitle">{IProps.title}</p>
        <span>
          <CurrencyFormat
            renderText={(value) => <strong>{value}</strong>}
            decimalScale={2}
            value={IProps.price}
            displayType={"text"}
            thousandSeparator={true}
            thousandSpacing="2s"
            prefix="₹"
          />
        </span>
        <div className="checkout__productRating">
          {Array(IProps.rating)
            .fill(IProps.rating)
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
