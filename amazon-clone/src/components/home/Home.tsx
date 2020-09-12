import React, { useState } from "react";
import "./Home.css";
import Product from "../product/Product";
import { IProduct } from "../../models/product";
import { v4 as uuid } from "uuid";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__banner" src="/assets/amazon__banner.jpg" alt="" />

        <div className="home__row">
          <Product
            id={uuid()}
            title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
            price={615}
            rating={4}
            img_source="/assets/lean__startup.png"
          />
          <Product
            id={uuid()}
            title="Microsoft Xbox One S 1TB Console - Star Wars Jedi: Fallen Order™ Bundle"
            price={30990.0}
            rating={4}
            img_source="/assets/xbox.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={uuid()}
            title="Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={103900}
            rating={5}
            img_source="assets/apple_ipad.jpg"
          />
          <Product
            id={uuid()}
            title="Microsoft Surface Pro X 1876 13-inch Laptop  Matte Black"
            price={100713}
            rating={5}
            img_source="assets/ms_surface.jpg"
          />
          <Product
            id={uuid()}
            title="Amazon Echo (3rd Gen) – Improved sound, powered by Dolby (Black)"
            price={9749}
            rating={4}
            img_source="assets/alexa_echo.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id={uuid()}
            title="LG 38UC99 38'  Class 21:9 UltraWide WQHD+ (3840x1600) IPS Curved LED Backlit Computer Monitor ,USB C & 3.0 1ms, Motion Blur Reduction International Version"
            price={128990.0}
            rating={5}
            img_source="assets/lg_monitor.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
