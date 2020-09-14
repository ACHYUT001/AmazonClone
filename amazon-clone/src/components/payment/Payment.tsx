import React, { useState } from "react";
import "./Payment.css";
import { useStateValue } from "../../Stateprovider";
import CheckoutProduct from "../checkout/CheckoutProduct";
import { Item } from "semantic-ui-react";
import { Link, useHistory } from "react-router-dom";
import { useElements, useStripe, CardElement } from "@stripe/react-stripe-js";
import * as CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../reducer";
import axios from "axios";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const history = useHistory();

  //Stripe Hooks!!
  const stripe = useStripe();
  const elements = useElements();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [processing, setProcessing] = useState(false);
  const [succeeded, setSucceeded] = useState(false);
  const [clientSecret, setClientSecret] = useState("");

  //   useEffect(() => {
  //     const getClientSecret = async () => {
  //       const response = await axios({
  //         method: "post",
  //         url: `/payments/create?total=${getBasketTotal(basket) * 100}`,
  //       });
  //       setClientSecret(response.data.clientSecret);
  //     };

  //     getClientSecret();
  //   }, [basket]);

  const handleSubmit = async (event) => {
    //handle stripe functionality after submitting card data
    event.preventDefault();
    setProcessing(true);

    // const payload = await stripe!
    //   .confirmCardPayment(clientSecret, {
    //     payment_method: {
    //       card: elements!.getElement(CardElement)!,
    //     },
    //   })
    //   .then(({ paymentIntent }) => {
    //     //paymentIntent = payment confirmation
    //     setSucceeded(true);
    //     setError(null);
    //     setProcessing(false);

    //   //we are not doing push here because we dont want our users to be able to come back to the payment page
    //   history.replace("/orders");
    // });

    // history.replace("/orders");
  };

  const handleChange = (event) => {
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout( <Link to="/checkout">{basket?.length} Items</Link> )
        </h1>

        {/* payment section for delivery address */}

        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            <p>123 React World</p>
            <p>Next to Amazon Office 😉</p>
          </div>
        </div>

        {/* payment section for review items */}

        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                price={item.price}
                rating={item.rating}
                img_source={item.img_source}
              />
            ))}
          </div>
        </div>

        {/* payment section for payment method */}

        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/* Stripe magic  */}

            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                    <>
                      <h3>Order Total: {value}</h3>
                    </>
                  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  prefix={"₹"}
                  thousandSeparator={true}
                  thousandSpacing="2s"
                />

                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                </button>
              </div>
              {/* Error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
