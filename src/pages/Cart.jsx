import React from "react";
import Features from "../components/Features";
import Header from "../components/Header";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import shoes from "../assets/adidas.png";
import Button from "../components/Button";

const Cart = () => {
  return (
    <div className="">
      <Header />
      <div className="container-fluid d-flex justify-content-center my-5 w-100">
        <div className="row gap-3 gap-md-0 p-3 w-100 justify-content-around">
          <div className="col-md-6 d-flex flex-column gap-3 cart-items-div">
            <Item
              img={shoes}
              itemName={"Adidas Sporty Unisex "}
              size={"42"}
              color={"Black"}
              price={"68,500"}
            />
            <Item
              img={shoes}
              itemName={"Adidas Sporty Unisex "}
              size={"42"}
              color={"Black"}
              price={"68,500"}
            />
            <Item
              img={shoes}
              itemName={"Adidas Sporty Unisex "}
              size={"42"}
              color={"Black"}
              price={"68,500"}
            />
          </div>
          <div className="col-md-4">
            <Delivery />
          </div>
        </div>
      </div>
      <Features />
      <Newsletter />
      <Footer />
    </div>
  );
};

const Item = ({ img, itemName, size, color, price }) => {
  return (
    <div className="row cart-item">
      <div className="col-6 col-md-4 item-img">
        <img src={img} alt="" />
      </div>
      <div className="col-12 col-md-8 items-right">
        <div className="item-des">
          <div className="item-info">
            <div className="info-up">
              <div className="up-title">{itemName}</div>
              <div className="up-sub">
                Size:{size} Color:{color}
              </div>
            </div>
            <div className="price">N{price}</div>
          </div>
          <div className="expected">
            Expected arrival date: 2 weeks from date of purchase.
          </div>
        </div>
        <div className="item-buttons row">
          <Button isOrange={true}>Add to wishlist</Button>
          <Button>Delete</Button>
        </div>
      </div>
    </div>
  );
};

const Delivery = () => {
  return (
    <div className="delivery">
      <div className="delivery-up">2 weeks from date of purchase.</div>
      <div className="coupon">Apply coupon here</div>

      <div className="sub-total">
        <div className="sub-up">
          <div className="sub-title">Subtotal</div>
          <div className="sub-title">N165,000</div>
        </div>
        <div className="sub-middle">
          <div className="sub-text">
            <div className="total-items">
              <p>Discount</p>
              <p>N0.00</p>
            </div>
            <div className="total-items">
              <p>Delivery</p>
              <p>N5,000</p>
            </div>
            <div className="total-items">
              <p>Tax</p>
              <p>N3,000</p>
            </div>
          </div>
          <div className="sub-down">
            <div className="sub-title">Total</div>
            <div className="sub-title">N173,000</div>
          </div>
        </div>
        <div className="subtotal-buttons">
          <Button isOrange={true}>Proceed to checkout</Button>
          <Button>Continue to shopping</Button>
        </div>
      </div>
    </div>
  );
};
export default Cart;
