import React from "react";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import cssStyle from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={cssStyle.footerContainer}>
      <div className={cssStyle.footerContent}>
        <div className={cssStyle.companyInfo}>
          <h3>Nike</h3>
          <p>
            Unleash your potential. Nike brings innovation, comfort, and style
            to every step.
          </p>
        </div>
        <div className={cssStyle.footerLinks}>
          <h4>More from Nike</h4>
          <ul>
            <li>About Us</li>
            <li>Careers</li>
            <li>Support</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div className={cssStyle.socialMedia}>
          <h4>Follow Us</h4>
          <div className={cssStyle.icons}>
            <FaFacebook />
            <FaInstagram />
            <FaTwitter />
            <FaYoutube />
          </div>
        </div>
        {/* <div className={cssStyle.newsletter}>
          <h4>Subscribe to our newsletter</h4>
          <input type="email" placeholder="Enter your email" />
          <button>Subscribe</button>
        </div> */}
      </div>
      <div className={cssStyle.copyright}>
        <p>© 2024 Nike, All Rights Reserved</p>
        <small>
          Original design by Samsad Rashid, with modifications by Taha Khan
        </small>
      </div>
    </div>
  );
};

export default Footer;
