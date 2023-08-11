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
      <section className="home--section">
        <h1> Fueling Futures, Hiring the Best Drivers</h1>
        <p>
          Discover a road to success like never before - join our team of
          skilled drivers where every mile driven is a step towards a rewarding
          career in the dynamic world of logistics
        </p>
        <button className=" btn btn--apply"> Apply </button>
      </section>
    </div>
  );
};

export default NavBar;
