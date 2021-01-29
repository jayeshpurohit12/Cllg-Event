import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
const UpcommEventList = () => {
  return (
    <>
      <div className="event-img-dist">
        <div className="card" style={{ width: "18rem" }}>
          <img
            className="card-img-top"
            src="http://placeimg.com/286/180/any"
            alt="Card img"
          />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a href="#description" className="btn btn-primary event-btn">
              More Details
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpcommEventList;
