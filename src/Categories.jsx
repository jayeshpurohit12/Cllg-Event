import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./css/Live.css";

const Categories = () => {
  return (
    <>
      <div className="listHeaders" id="Upcomming" style={{borderRadius: "50px", backgroundColor: "transparent", border: "2px solid cornsilk", backgroundColor: "white"}}>
        <p className="listheaders-head">
          <span className="text-white category event-heading" style={{borderRadius:"50px",margin: "auto"}}>CATEGORIES</span>
        </p>
      </div>
      <div className="Category-list">
        <div className="Cat-list" style={{ backgroundColor:" white",margin: "0.5rem"}} ><Link to="/Sport" style={{display: "table", margin: "auto", fontWeight: 640, fontSize: "1.2rem"}}>Sport</Link></div>
       <div  className="Cat-list" style={{backgroundColor:" white",margin:"0.5rem"}}> <Link to="/Tech" style={{display: "table", margin: "auto", fontWeight: 640, fontSize: "1.2rem"}}>Tech</Link></div>
       <div  className="Cat-list" style={{backgroundColor:" white",margin:"0.5rem"}}> <Link to="/Webinar" style={{display: "table", margin: "auto", fontWeight: 640, fontSize: "1.2rem"}}>Webinar</Link></div>
        <div className="Cat-list"  style={{backgroundColor:" white",margin:"0.5rem"}}><Link to="/Art" style={{display: "table", margin: "auto", fontWeight: 640, fontSize: "1.2rem"}}>Art</Link></div>
        <div className="Cat-list"  style={{backgroundColor:" white",margin:"0.5rem"}}><Link to="/other" style={{display: "table", margin: "auto", fontWeight: 640, fontSize: "1.2rem"}}>other</Link></div>
      </div>
     
      <div className=" listHeaders" id="Upcomming" style={{borderRadius: "50px", backgroundColor: "transparent", border: "2px solid cornsilk", backgroundColor: "white"}}>
        <p className="listheaders-head">
          <span className="text-white category event-heading" style={{borderRadius:"50px",margin:"auto"}}>FACEBOOK</span>
        </p>
      </div>
      <div className="facebook">
        <div
          className="card"
          style={{ width: "100.5%", margin: "1rem 1rem 1rem 0rem" }}
        >
          <img
            className="card-img-top"
            src="images/facebook.jpg"
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
