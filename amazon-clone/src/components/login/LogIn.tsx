import React, { useState } from "react";
import "./LogIn.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebase";

const LogIn = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signIn = (event) => {
    event.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        history.push("/");
      })
      .catch((error) => alert(error.message));
  };

  const register = (event) => {
    event.preventDefault();

    //firebase
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        console.log(auth);
        if (auth) {
          history.push("/");
        }
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="assets/amazon_logo_inverted.jpg"
          alt=""
          className="login__img"
        />
      </Link>
      <div className="login__container">
        <h1>Sign-in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            onClick={signIn}
            type="submit"
            className="login__signinButton"
            name="Submit"
          >
            Sign In
          </button>
        </form>
        <p>
          Dev Purpose Only
          <br /> By signing-in you agree to Amazon Clone's conditions of Use &
          Sale. Please see our Privacy Notice, our COokies Notice and our
          Interest-Based Ads
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
};

export default LogIn;
