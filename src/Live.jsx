import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import LiveEventList from "./LiveEventList";
const Live = () => {
  return (
    <>
      <div className="bg-dark live" id="Live">
        <h3 className="text-white event-heading">LIVE EVENT </h3>
        <div className="arrow-btn">
          <PlayCircleOutlineIcon />
        </div>
      </div>
      <div className="eventCard">
        <LiveEventList />
        <LiveEventList />
        <LiveEventList />
        <LiveEventList />
      </div>
    </>
  );
};

export default Live;
