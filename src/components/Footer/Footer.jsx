import React from "react";
import "./Footer.css";
import { assets } from "../../assets/assets";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="footer-content-left">
        <Link to="/">
        <img src={assets.logo3} alt="Logo" />
        </Link>
        </div>
        <div className="footer-content-center-left">
          <p>Resources</p>
          <ul>
            <li><a href="#">About</a></li>
            <li><a href="#">Credits</a></li>
          </ul>
        </div>
        <div className="footer-content-center-right">
            <p>Legal</p>
            <ul>
              <li><a href="#">Disclaimer</a></li>
            </ul>
        </div>
        <div className="footer-content-right">
            <p><a href="#">Contact us</a></p>
        </div>
      </div>
      <div className="footer-bottom">
          © 2024 tuclubs. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
