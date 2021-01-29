import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import Navbarr from "./Navbarr";
import SlidingBanner from "./SlidingBanner";
import Upcomming from "./Upcomming";
import Live from "./Live";
import Footer from "./Footer";
const App = () => {
  return (
    <>
      <div className="bg-danger alert-light main-head"></div>
      <div className="full-header bg-white">
        <div className="nav">
          <Navbarr />
        </div>
        <div className="sliding-banner">
          <SlidingBanner />
        </div>
        <div>
          <Upcomming />
        </div>
        <div>
          <Live />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
