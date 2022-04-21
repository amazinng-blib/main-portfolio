import React from "react";
import { FaHandPointDown } from "react-icons/fa";
const Contact = () => {
  return (
    <section className="contact">
      <h2>contact us</h2>
      <div className="contact-div">
        Do you want to build a website? Do you want a developer that will build
        a responsive website for you?
      </div>
      <div className="contact-div">
        Do you need a developer that will serve as a front-end dev in your
        company?
      </div>

      <div className="contact-div last-div ">
        Kindly get-in-touch with me through the link below...{" "}
      </div>
      <div className="contact-icon">
        <FaHandPointDown />
      </div>
    </section>
  );
};

export default Contact;
