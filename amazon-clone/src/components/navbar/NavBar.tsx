import React from "react";
import { Icon, Button } from "semantic-ui-react";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./NavBar.css";
import { Link } from "react-router-dom";
import { useStateValue } from "../../Stateprovider";

const NavBar = () => {
  const [{ basket }, dispatch] = useStateValue();

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
        <Link to="/login">
          <div className="navbar__option">
            <span className="navbar_optionLine1">Hello Guest</span>
            <span className="navbar_optionLine2">Sign In</span>
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
