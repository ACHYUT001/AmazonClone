import React from "react";

import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Home from "./components/home/Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import LogIn from "./components/login/LogIn";

function App() {
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
