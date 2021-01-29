import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const SlidingBanner = () => {
  return (
    <>
      <div id="demo" className="carousel slide" data-ride="carousel">
        <ul className="carousel-indicators">
          <li data-target="#demo" data-slide-to="0" className="active"></li>
          <li data-target="#demo" data-slide-to="1"></li>
          <li data-target="#demo" data-slide-to="2"></li>
        </ul>
        <div className="carousel-inner slide-image">
          <div className="carousel-item active">
            <img src="http://placeimg.com/1300/450/any" alt="Live" />
          </div>
          <div className="http://placeimg.com/1300/450/any">
            <img src="chicago.jpg" alt="Live" />
          </div>
          <div className="http://placeimg.com/1300/450/any">
            <img src="ny.jpg" alt="Live" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#demo" data-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </a>
        <a className="carousel-control-next" href="#demo" data-slide="next">
          <span className="carousel-control-next-icon"></span>
        </a>
      </div>
    </>
  );
};

export default SlidingBanner;
