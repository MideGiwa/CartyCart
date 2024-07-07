import React from "react";
import Header from "../components/Header";
import Filter from "./Filter";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import bank from "../assets/bank.svg";
import card from "../assets/card-black.svg";
import pay from "../assets/pay.svg";
import Features from "../components/Features";

const Checkout = () => {
  return (
    <div className="">
      <Header />
      <div className="container-fluid my-3 w-100">
        <div className="row gap-3 gap-md-0 p-3 w-100 justify-content-around">
          <div className="col-md-6">
            <PaymentMethod />
          </div>
          <div className="col-md-4 row justify-content-between">
            <Shipping />
          </div>
        </div>
      </div>
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
};

const PaymentMethod = () => {
  return (
    <div className="payment-method">
      <div className="text">Payment method</div>
      <div className="payment-options">
        <div className="p-option op">
          <img src={bank} alt="" />
          <div>Bank</div>
        </div>
        <div className="p-option op">
          <img src={card} alt="" />
          <div>card</div>
        </div>
        <div className="p-option op">
          <img src={pay} alt="" />
          <div>Pay</div>
        </div>
        <div className="p-option">
          <div>More</div>
        </div>
      </div>
      <form className="payment-form">
        <label>Name on card</label>
        <input type="text" placeholder="Rosalind Jacobs" />
        <label>Card number</label>
        <input type="text" placeholder="4444 8239 5656 7272" />
        <div className="row date-cvv">
          <div className="col-6 date">
            <label>Expiry date</label>
            <input type="text" placeholder="01 / 25" />
          </div>
          <div className="col-6 cvv ">
            <label>CVC</label>
            <input type="text" placeholder="131" />
          </div>
        </div>
        <div className="save-card">
          <input type="radio" /> Save my card details for future use.
        </div>
        <Button isOrange={true}>Buy now</Button>
      </form>
    </div>
  );
};

const Shipping = () => {
  return (
    <div className="shipping">
      <div className="shipping-details">
        <div className="col-7 shipping-info">
          <div className="text">Shipping details</div>
          <div className="subtext">
            N0. 12 Goodluck Johnathan, Royal Estate, Asokoro, Abuja, Nigeria.{" "}
            <br />
            Contact- 0814949494949
          </div>
        </div>
        <div className="col-3">
          <Button>Edit</Button>
        </div>
      </div>
      <div className="order-details">
        <div>Order details</div>
        <div className="order">
          <div className="items">
            <p>Adidas</p>
            <p>1</p>
            <p>N68,500</p>
          </div>
          <div className="items">
            <p>New balance</p>
            <p>1</p>
            <p>N38,000</p>
          </div>
          <div className="items">
            <p>Adidas</p>
            <p>1</p>
            <p>N68,500</p>
          </div>
        </div>
      </div>
      <div className="total">
        <div>Item total</div>
        <div className="total-items">
          <p>Discount</p>
          <p>N68,500</p>
        </div>
        <div className="total-items">
          <p>Delivery</p>
          <p>N68,500</p>
        </div>
        <div className="total-items">
          <p>Tax</p>
          <p>N68,500</p>
        </div>
        <div className="total-bill">
          <p>Total bill</p>
          <p>N173,000</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
