// Filename - components/Footer.js

import React from "react";
import { Link } from "react-router-dom";
import cartyLogo from "../assets/CartyCart-black.svg";

const Footer = () => {
  return (
    <footer className="footer p-3">
      <div className="footer-column">
        <div className="col-md-3"></div>
        <div className="row justify-content-center footer-rows">
          <div className="col-12 col-md-3 footer-row">
            <h4 className="heading">
              <img src={cartyLogo}></img>
            </h4>
            <Link className="footer-link" to="#">
              Address; 21, aminu kano, abuja. <br />
              Phone: +234810000000 Email: <br />
              cartycart@gmail.com
            </Link>
          </div>
          <div className="col-12 col-md-3 footer-row">
            <h4 className="heading">Customer service</h4>
            <Link className="footer-link" to="#">
              Help center & FAQs
            </Link>
            <Link className="footer-link" to="#">
              Terms & condition
            </Link>
            <Link className="footer-link" to="#">
              Return policy
            </Link>
            <Link className="footer-link" to="#">
              Track order
            </Link>
          </div>
          <div className="col-12 col-md-3 footer-row">
            <h4 className="heading">My account</h4>
            <Link className="footer-link" to="#">
              Delivery information
            </Link>
            <Link className="footer-link" to="#">
              Privacy policy Custom link
            </Link>
            <Link className="footer-link" to="#">
              Custom link
            </Link>
          </div>
          <div className="col-12 col-md-3 footer-row">
            <h4 className="heading">Accepted Cards</h4>
            <Link className="footer-link" to="#">
              Visa
            </Link>
            <Link className="footer-link" to="#">
              Mastercard
            </Link>
            <Link className="footer-link" to="#">
              Americanexpress
            </Link>
            <Link className="footer-link" to="#">
              PayPal
            </Link>
            <Link className="footer-link" to="#">
              G pay
            </Link>
            <Link className="footer-link" to="#">
              Apple pay
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
