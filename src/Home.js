import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
            title="Learning React: A Hands-On Guide to Building Web Applications Using React and Redux"
            price={26.96}
            rating={5}
            image="https://m.media-amazon.com/images/I/51bBG0BOZwL._AC_UL640_FMwebp_QL65_.jpg"
          />
          <Product
            id="49538094"
            title="Amazon Web Services in Action"
            price={39.75}
            rating={5}
            image="https://m.media-amazon.com/images/I/71L-lHkQdnL._AC_UL640_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title="Best Seller
            Cracking the Coding Interview: 189 Programming Questions and Solutions"
            price={16.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/619M-4xNINL._AC_UY436_FMwebp_QL65_.jpg"
          />
          <Product
            id="23445930"
            title="X-VOLSPORT Massage Gaming Chair with Footrest Reclining High Back Computer Chair with Lumbar Support and Headrest, Racing Style Video Gamer Chair..."
            price={119.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/618hSD2t6+L._QL65_AC_UL640_.jpg"
          />
          <Product
            id="3254354345"
            title="I HATE / LOVE Programming T Shirt for Programmers "
            price={19.99}
            rating={5}
            image="https://m.media-amazon.com/images/I/7160vGfIZRL._AC_UL640_FMwebp_QL65_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title="2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB SSD Storage) - Silver"
            price={1149.98}
            rating={5}
            image="https://m.media-amazon.com/images/I/71gD8WdSlaL._AC_UY436_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
}
export default Home;