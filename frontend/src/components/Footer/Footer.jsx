import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.CloudBite} alt="" />
          <p>
            A food delivery website provides a user-friendly platform for
            customers to browse local restaurants, view menus, and easily place
            orders from home. With real-time order tracking and secure payment
            options, it ensures convenient and timely delivery of a variety of
            delicious meals, enhancing dining experiences.
          </p>
          <div className="footer-social-section">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>GET IN TOUCH</h2>
          <ul>
            <li>+91 9221059303</li>
            <li>+91 9987977085</li>
            <li>sumitpadma@cloudbite.com</li>

            <li>mohit22shukla@cloudbite.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright-text">
        Copyright 2024 @ CloudBite -All Right Reserved
      </p>
    </div>
  );
};

export default Footer;
