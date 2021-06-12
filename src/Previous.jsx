import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { dbs } from "./firebase.js";
import PreviousEvent from "./PreviousEvent";

const Previous = () => {
  var d = new Date();
  const [Posts, setPosts] = useState([]);
  // runs a piece of code on a specific condition
  useEffect(() => {
    dbs.collection("PreviousPosts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          Posts: doc.data(),
        }))
      );
    });
  }, []);
  if (Posts[0]) {
    return (
      <>
        <div className="bg-dark listHeaders" id="Upcomming">
          <p className="listheaders-head">
            <h3 className="text-white bg-dark event-heading">PREVIOUS EVENT</h3>
          </p>
        </div>
        <div className="eventCard" style={{display: "flex"}}>
          {Posts.map(({ id, Posts }) => {
            if (
              parseInt(Posts.date.substring(3, 5)) >= d.getMonth() + 1 &&
              parseInt(Posts.date.substring(6, 10)) >= d.getFullYear()
            ) {
              if (
                parseInt(Posts.date.substring(3, 5)) > d.getMonth() + 1 ||
                parseInt(Posts.date.substring(0, 2)) > d.getDate()
              ) {
                dbs.collection("PreviousPosts").doc(id).delete();
              }
            }
            if (
              parseInt(Posts.date.substring(3, 5)) <= d.getMonth() + 1 &&
              parseInt(Posts.date.substring(6, 10)) <= d.getFullYear()
            ) {
              if (
                parseInt(Posts.date.substring(3, 5)) < d.getMonth() + 1 ||
                parseInt(Posts.date.substring(0, 2)) < d.getDate()
              ) {
                return (
                  <PreviousEvent
                    key={id}
                    title={Posts.title}
                    description={Posts.description}
                    Url={Posts.ImageUrl}
                    date={Posts.date}
                    time={Posts.time}
                    Category={Posts.Category}
                    Venue={Posts.Venue}
                  />
                );
              }
            }
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="bg-dark listHeaders" id="Upcomming">
          <p className="listheaders-head">
            <h3 className="text-white bg-dark event-heading">PREVIOUS EVENT</h3>
          </p>
        </div>
        <div style={{ height: "10rem", paddingTop: "1rem" }}>
          <span style={{ marginLeft: "1rem", fontSize: "1.5rem" }}>
            No event found
          </span>
        </div>
      </>
    );
  }
};

export default Previous;
