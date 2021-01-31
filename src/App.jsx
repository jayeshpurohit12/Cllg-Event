import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Navbarr from "./Navbarr";
import SlidingBanner from "./SlidingBanner";
import MainBody from "./MainBody";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <div className="main-head">
        <img src="./Name.png" style={{width:"100%",height:"150px"}} alt="logo"/>
        <div className="head-name">
          <h2 style={{fontFamily: "Dancing Script",fontSize:"250%",marginTop:"-3rem"}}>EVENTIVE</h2>
          <div>
          <a href="#facebook">
          <i className="fa fa-facebook"></i>
          </a>                     
          <a href="#twitter">
          <i className="fa fa-twitter"></i>
          </a >
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
        <MainBody/>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
