import React from "react";
import { IProduct } from "../../models/product";
import * as CurrencyFormat from "react-currency-format";
import "./Product.css";
import { useStateValue } from "../../Stateprovider";
import { unstable_createMuiStrictModeTheme } from "@material-ui/core";
import { v4 as uuid } from "uuid";

interface IProps {
  id?: string;
  title: string;
  price: number;
  rating: number;
  img_source: string;
}

const Product: React.FC<IProps> = ({
  id,
  title,
  price,
  rating,
  img_source,
}) => {
  const [{ basket }, dispatch] = useStateValue();
  const handleAddToBasket = () => {
    console.log(basket);
    //dispatch the item into the data layer using the reducer and context api
    dispatch({
      type: "ADD-TO-BASKET",
      item: {
        id: id,
        title: title,
        img_source: img_source,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <span>{title}</span>
        <span className="product__price">
          <small>₹</small>

          <CurrencyFormat
            renderText={(value) => <strong>{value}</strong>}
            decimalScale={2}
            value={price}
            displayType={"text"}
            thousandSeparator={true}
            thousandSpacing="2s"
          />
        </span>
        <div className="product__rating">
          {Array(rating)
            .fill(rating)
            .map((i) => (
              <span>⭐</span>
            ))}
        </div>
      </div>

      <img className="product__img" src={img_source} alt="" />
      <button onClick={handleAddToBasket} className="product__addToCart">
        Add to Cart
      </button>
    </div>
  );
};

export default Product;
