import React from "react";
import { Icon, Button } from "semantic-ui-react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Stateprovider";
import { auth } from "../../firebase";

const NavBar = () => {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  return (
    <div className="navbar">
      <div>
        <Link to="/">
          <img className="navbar__logo" src="assets/amazon__logo.png" />
        </Link>
      </div>
      <div className="navbar__search">
        <input className="navbar__searchInput" />
        <SearchIcon className="navbar__searchButton" />
      </div>
      <div className="navbar__options">
        <Link to={user ? "/" : "/login"}>
          <div className="navbar__option" onClick={handleAuth}>
            <span className="navbar_optionLine1">
              Hello {user != null ? `${user.email}` : "Guest"}
            </span>
            <span className="navbar_optionLine2">
              {user !== null ? "Sign Out" : "Sign In"}
            </span>
          </div>
        </Link>

        <div className="navbar__option">
          <span className="navbar_optionLine1">Returns</span>
          <span className="navbar_optionLine2">& Orders</span>
        </div>
        <div className="navbar__option">
          <span className="navbar_optionLine1">Your</span>
          <span className="navbar_optionLine2">Prime</span>
        </div>

        <Link to="/checkout">
          <div className="navbar__optionBasket">
            <ShoppingBasketIcon />
            <span className="navbar__optionLine2 navbar__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
