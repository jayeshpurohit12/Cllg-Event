import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import UpcommEventList from "./UpcommEventList";
const Upcomming = () => {
  return (
    <>
      <div className="bg-dark listHeaders" id="Upcomming">
        <p className="listheaders-head">
        <h3 className="text-white bg-dark event-heading">UPCOMMING EVENT</h3>
        <PlayCircleOutlineIcon />
        </p>
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
