import React from "react";
import protection from '../assets/shield.svg';
import payment from '../assets/card.svg';
import value from '../assets/dollar.svg';
import shipping from '../assets/shipping.svg';

const Features = () => {
  return (
    <div className="features">
      <div className="feature-div f-1">
        <img src={protection} alt="sheild" />
        <div className="feature-text">Buyers Protection</div>
        <div className="feature-subtext">
          Get a refund if item arrive late, damaged or not as described
        </div>
      </div>
      <div className="feature-div f-2">
      <img src={payment} alt="sheild" />
        <div className="feature-text">Safe payment</div>
        <div className="feature-subtext">
        Safe payment methods preferred by international shoppers or buyers
        </div>
      </div>
      <div className="feature-div f-3">
      <img src={value} alt="sheild" />
        <div className="feature-text">Value-for-money</div>
        <div className="feature-subtext">
        We offer the best price for great quality of all our items.
        </div>
      </div>
      <div className="feature-div f-4">
      <img src={shipping} alt="sheild" />
        <div className="feature-text">Free shipping</div>
        <div className="feature-subtext">
        Get free shipping world wide on some specific items and items more than N100,000.
        </div>
      </div>
    </div>
  );
};

export default Features;
