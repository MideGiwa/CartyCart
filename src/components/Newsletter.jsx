import React from "react";
import "./styles.css";
import facebook from '../assets/facebook.svg';
import twitter from '../assets/twitter.svg';
import instagram from '../assets/instagram.svg';
import mail from '../assets/mail.svg';

const Newsletter = () => {
  return (
   <div className=" newsletter-banner d-flex gap-2 align-items-center justify-content-between">
        <div className=" sign">Sign up to our newsletter</div>
        <input className='' placeholder="Enter your email"/>
        <div className=" social">
            <img src={facebook}></img>
            <img src={twitter}></img>
            <img src={instagram}></img>
            <img src={mail}></img>
        </div>
   </div>
  );
};

export default Newsletter;
