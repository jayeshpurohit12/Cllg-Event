import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import UpcommEventList from "./UpcommEventList";
const Upcomming = () => {
  return (
    <>
      <div className="bg-dark upcom" id="Upcomming">
        <h3 className="text-white event-heading">UPCOMMING EVENT</h3>
        <div className="arrow-btn">
          <PlayCircleOutlineIcon />
        </div>
      </div>
      <div className="eventCard">
        <UpcommEventList />
        <UpcommEventList />
        <UpcommEventList />
        <UpcommEventList />
      </div>
    </>
  );
};

export default Upcomming;
