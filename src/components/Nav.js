import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <nav>
      <div className="nav-container">
        <Link to="/" className="link">
          <h3>Ernest</h3>
        </Link>
        <ul>
          <Link to="/" className="nav-link">
            <li>home</li>
          </Link>
          <Link to="/about" className="nav-link">
            <li>about</li>
          </Link>
          <Link to="/contact" className="nav-link">
            <li>contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
