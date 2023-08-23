import React from "react";
// import { Routes, Route } from "react-router";
import AboutUs from "./AboutUs";
import "./home.style.css";

const Home = () => {
  return (
    <div className="landing--page">
      <h1> Fueling Futures, Hiring the Best Drivers</h1>
      <p>
        Discover a road to success like never before - join our team of skilled
        drivers where every mile driven is a step towards a rewarding career in
        the dynamic world of logistics
      </p>
      <button className=" btn btn--apply"> Apply </button>

      {/* <AboutUs /> */}
    </div>
  );
};

export default Home;
