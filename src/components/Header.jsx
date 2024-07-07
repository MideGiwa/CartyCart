import React, { useEffect, useState } from "react";
import Button from "./Button";
import { Link, useLocation, useParams } from "react-router-dom";
import cartyLogo from "../assets/CartyCart-white.svg";
import cart from "../assets/cart-white.svg";
import shipping from "../assets/shipping-white.svg";
import explore from "../assets/explore.svg";
import tel from "../assets/tel.svg";

const Home = () => {
  return (
    <>
      <Banner />
      <MainNav />
    </>
  );
};

export default Home;

const Banner = () => {
  return (
    <div className="d-flex align-items-center justify-content-between banner">
      <div className="b">Download app</div>

      <div className="d-flex align-items-center banner-end">
        <div>English / Ngn </div>
        <div>Help</div>
        <div id="fast">
          <i src={shipping}></i> Fast delivery
        </div>
      </div>
    </div>
  );
};

const MainNav = () => {
  return (
    <div
      className="
    nav-wrapper"
    >
      <nav className="navbar pt-3 navbar-expand-lg">
        <div className="container-fluid px-5">
          <a href="/" className="col-md-3">
            <img src={cartyLogo} alt="" />
          </a>
          <div
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            className="navbar-toggler "
          >
            Menu
          </div>
          <div
            className="search-div collapse navbar-collapse d-md-flex justify-content-md-between align-item-center align-items-md-baseline collapse-style collapse-container"
            id="navbarSupportedContent"
          >
            {/* <ul className="nav-links">
            <li className="nav-link">
              <Link to="/">Home</Link>{" "}
            </li>
            <li className="nav-link">
              <Link to="/market-place/all">Market place</Link>
            </li>
            <li className="nav-link">
              <Link to="/market-place/bills-payment">Bill payments</Link>
            </li>
            <li className="nav-link">
              <Link to="/faq">FAQs</Link>
            </li>
            <li className="nav-link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul> */}
            <input className="search" placeholder="shoes" />
            <div className="cart-header">
              <div className="cart">
                <img src={cart} alt="" />
                cart
              </div>
              <div className="cart-count">0 Item(s)</div>
            </div>
            <div className="buttons-div d-flex ">
              <Button to="create-account" isOrange={true}>
                Sign in / Sign up
              </Button>
            </div>
          </div>
        </div>
      </nav>
      <Bottom />
    </div>
  );
};

const Bottom = () => {
  const [cat, setCat] = useState();
  const text = useLocation();

  useEffect(() => {
    if (text.pathname === "/") {
      setCat("Categories");
    } else if (text.pathname === "/checkout") {
      setCat("Checkout");
    } else if (text.pathname === "/cart") {
      setCat("Cart");
    }
  }, []);

  return (
    <div className="bottom">
      <div className="bottom-start">
        {cat}
        <img src={explore} alt="" />
      </div>
      <div
        className="d-md-flex justify-content-md-around align-item-center align-items-md-baseline collapse-style collapse-container"
        id="navbarSupportedContent"
      >
        <ul className="nav-links">
          <li className="nav-link">
            <Link to="/">Home</Link>{" "}
          </li>
          <li className="nav-link">
            <Link to="/fashion">Fashion</Link>
          </li>
          <li className="nav-link">
            <Link to="/electronics">Electronics</Link>
          </li>
          <li className="nav-link">
            <Link to="/health&beauty">Health & Beauty</Link>
          </li>
          <li className="nav-link">
            <Link to="/sports">Sports</Link>
          </li>
          <li className="nav-link">
            <Link to="/more">More</Link>
          </li>
        </ul>
      </div>
      <div className="tel">
        <img src={tel} alt="" />
        +234 8100 000 000
      </div>
    </div>
  );
};
