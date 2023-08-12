import React, { useState } from "react";
import "./navBar.style.css";

const NavBar = () => {
  const [contact, setContact] = useState();

  const onClickContact = () => {
    console.log("cliked");
  };
  return (
    <div className="nav--bar-container">
      <nav className="nav--bar">
        <a href="/home">
          <h3 className="main--logo"> LOGIRECRUIT </h3>
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
            <button className=" btn btn--contact" onClick={onClickContact}>
              Contact
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
