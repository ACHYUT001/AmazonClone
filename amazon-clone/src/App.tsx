import React, { useEffect } from "react";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import LogIn from "./components/login/LogIn";
import { auth } from "./firebase";
import { useStateValue } from "./Stateprovider";
import Payment from "./components/payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements, useStripe, useElements } from "@stripe/react-stripe-js";

const promise = loadStripe(
  "pk_test_51HR7diKZwiPqzZtfBIj3tKCzoatlPg149qmDYcsIOs9RTJTZz1Ra18AD5VIC20Q7EEagaM6zpAHN8KlnylxNtHwH00GQfDfUjT"
);

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      console.log("the user is ->", authUser);
      if (authUser) {
        dispatch({
          type: "SET-USER",
          user: authUser,
        });
      } else {
        dispatch({
          type: "SET-USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login">
            <LogIn />
          </Route>

          <Route path="/checkout">
            <NavBar />
            <Checkout />
          </Route>

          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>

          <Route path="/">
            <NavBar />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
