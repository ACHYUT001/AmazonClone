import React from "react";
import * as CurrencyFormat from "react-currency-format";
import "./Subtotal.css";
import { useStateValue } from "../../Stateprovider";
import { getBasketTotal } from "../../reducer";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Subtotal({basket.length} Items): <strong>{value}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> This order contains a gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        thousandSpacing="2s"
        prefix={"₹"}
      />

      <button> Proceed to checkout</button>
    </div>
  );
};

export default Subtotal;
