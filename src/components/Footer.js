import React from "react";
import { FaEnvelope, FaPhoneAlt, FaTwitter } from "react-icons/fa";
const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <footer>
      <div className="footer-main-div">
        <div className="link-div">
          <a href="mailto: nwankwoernest2020@gmail.com? subject = subject text">
            <FaEnvelope className="icon" />
          </a>
        </div>

        <div className="link-div">
          <a href="tel:+234-706-184-7132">
            <FaPhoneAlt className="icon" />
          </a>
        </div>

        <div className="link-div">
          <a href="https://twitter.com/NwankwoErnestO2">
            <FaTwitter className="icon" />
          </a>
        </div>
      </div>
      <p className="copywrite">copywrite &copy; NwankwoErnest {date}</p>
    </footer>
  );
};

export default Footer;
