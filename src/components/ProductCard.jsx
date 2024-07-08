import React from "react";
import shoes from "../assets/adidas.png";
import "./styles.css";
import favorite from "../assets/favorite.svg";
import cart from "../assets/cart.svg";
import rating from '../assets/rating.svg';

const ProductCard = () => {
  return (
    <div className="col-6 col-md-3 product-card">
      
      <img src={shoes} alt="adidas" />
      <div className="information-overlay">
        <h3 className="product-name">Adidas Sporty</h3>
        <h3 className="price">Price</h3>
        <img src={rating} alt={rating} />
      </div>
      <div className="add-icons">
        <img src={favorite} alt={favorite} />
        <img src={cart} alt={cart} />
      </div>
    </div>
  );
};

export default ProductCard;
