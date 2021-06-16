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
        <div
          className=" listHeaders bg-dark"
          style={{
            backgroundColor: "grey",
            borderRadius: "50px",
            border: "2px solid cornsilk",
          }}
          id="Upcomming"
        >
          <p className="listheaders-head">
            <h3
              className=" event-heading"
              style={{ margin: "0.3rem 2rem" }}
            >
              PREVIOUS EVENT
            </h3>
          </p>
        </div>
        <div className="eventCard" style={{ display: "flex" }}>
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
        <div
          className=" listHeaders bg-dark"
          style={{
            backgroundColor: "grey",
            borderRadius: "50px",
            border: "2px solid cornsilk",
          }}
          id="Upcomming"
        >
          <p className="listheaders-head">
            <h3
              className=" event-heading"
              style={{margin: "0.3rem 2rem" }}
            >
              PREVIOUS EVENT
            </h3>
          </p>
        </div>
        <div style={{ width: "90%", height: "30rem", paddingTop: "1rem" }}>
          <center>
            <img
              src="./images/imgr.png"
              style={{ width: "35%", height: "20rem", opacity: "1" }}
              alt="No event found !!!!"
            />
          </center>
        </div>
      </>
    );
  }
};

export default Previous;
