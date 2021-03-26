import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LiveEventList from "./LiveEventList";
const Live = () => {
  return (
    <>
      <div className="bg-dark listHeaders" id="Live">
      <p className="listheaders-head">
        <h3 className="text-white bg-dark event-heading">LIVE EVENT</h3>
        </p>
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
