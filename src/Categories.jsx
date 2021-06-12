import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CategoriesList from "./CategoriesList";
import { Button } from "react-bootstrap";

const Categories = () => {
  return (
    <>
      <div className="bg-dark listHeaders" id="Upcomming">
        <p className="listheaders-head">
          <span className="text-white category">CATEGORIES</span>
        </p>
      </div>
      <div>
        {/* Test code  */}
        
        <CategoriesList name="tech" />
            
        <CategoriesList name="sport" />
        <CategoriesList name="art" />
        
        <CategoriesList name="webinar" />

        {/* Test code  */}
      </div>
      <div className="bg-dark listHeaders" id="Upcomming">
        <p className="listheaders-head">
          <span className="text-white category">FACEBOOK</span>
        </p>
      </div>
      <div className="facebook">
        <div
          className="card"
          style={{ width: "100.5%", margin: "1rem 1rem 1rem 0rem" }}
        >
          <img
            className="card-img-top"
            src="https://www.careeraddict.com/uploads/article/55582/man-writing-code-computer.jpg"
            alt="Card"
          />
          <div className="card-body">
            <p className="card-text">
              <center>
                Website and software application designing, building, or
                maintaining.
              </center>
            </p>
            <center>
              <Button
                variant="primary"
                className="event_btn"
                target="_blank"
                href="https://www.facebook.com/Jayeshpurohit01"
              >
                Visit
              </Button>
            </center>
          </div>
        </div>
      </div>
    </>
  );
};

export default Categories;
