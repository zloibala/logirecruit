import React from "react";
import "./navBar.style.css";

const NavBar = () => {
  return (
    <div className="nav--bar-container">
      <nav className="nav--bar">
        <a href="/home">
          <h3> LOGIRECRUIT </h3>
        </a>
        <ul>
          <li>
            <a href="/aboutUs"> About Us</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/becomeDriver"> Become a Driver</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/findDriver"> Find a Driver</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="/contact"> Contact</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
