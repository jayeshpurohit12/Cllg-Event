import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/Mainpg.css";
import Navbarr from "./Navbarr";
import SlidingBanner from "./SlidingBanner";
import MainBody from "./MainBody";
import Footer from "./Footer";

const Mainpg = () => {
 
  return (
    <>
      <div className="main-head">
        <img
          src="./images/Name.png"
          style={{ width: "100%", height: "150px" }}
          alt="logo"
        />
        <div className="head-name">
          <span className="headtitle">EVENTIVE</span>
          <div>
              <div>
                <a href="#facebook">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#twitter">
                  <i className="fa fa-twitter"></i>
                </a>
                </div>
          </div>
        </div>
      </div>
      <div className="full-header bg-white">
        <div className="nav">
          <Navbarr />
        </div>
        <div className="sliding-banner">
          <SlidingBanner />
        </div>
        <MainBody />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Mainpg;
