import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import CategoriesList from "./CategoriesList";
const Categories = () => {
    return (
      <>
      <div className="bg-dark listHeaders" id="Upcomming">
        <p className="listheaders-head">
        <span className="text-white category">CATEGORIES</span>
        <PlayCircleOutlineIcon />
        </p>
      </div>
        <div >
         <CategoriesList name="sport"/>
         <CategoriesList name="art"/>
         <CategoriesList name="tech"/>
         <CategoriesList name="webinar"/>
        </div>
        <div className="bg-dark listHeaders" id="Upcomming">
        <p className="listheaders-head">
        <span className="text-white category">FACEBOOK</span>
        <PlayCircleOutlineIcon />
        </p>
      </div>
     <div className="card" style={{width: "18rem",margin:"1rem 1rem 1rem 1rem"}}>
     <img className="card-img-top" src="./appName.png" alt="Card"/>
  <div className="card-body">
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
      </>
    );
}

export default Categories;