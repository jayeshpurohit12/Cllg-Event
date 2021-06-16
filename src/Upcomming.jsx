import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UpcommEventList from "./UpcommEventList";
import { dbs } from "./firebase.js";
import "./css/index.css";
import "./css/Live.css";

const Upcomming = () => {
  var d = new Date();
  const [Posts, setPosts] = useState([]);
  // runs a piece of code on a specific condition
  useEffect(() => {
    dbs.collection("UpcommingPosts").onSnapshot((snapshot) => {
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
        <div className=" listHeaders" id="Upcomming" style={{borderRadius: "50px", backgroundColor: "transparent", border: "2px solid cornsilk", backgroundColor: "white"}}>
          <p className="listheaders-head">
            <h3 className="text-white bg-dark event-heading" style={{margin:"0.3rem 2rem"}}>
              UPCOMMING EVENT
            </h3>
          </p>
        </div>

        <div
          className="eventCard"
          style={{ display: "flex", margin: "0rem -0.8rem;" }}
        >
          {Posts.map(({ id, Posts }) => {
            if (
              parseInt(Posts.date.substring(0, 2)) === d.getDate() &&
              parseInt(Posts.date.substring(3, 5)) === d.getMonth() + 1 &&
              parseInt(Posts.date.substring(6, 10)) === d.getFullYear()
            ) {
              dbs.collection("LivePosts").add({
                title: Posts.title,
                ImageUrl: Posts.ImageUrl,
                Venue: Posts.Venue,
                date: Posts.date,
                time: Posts.time,
                Category: Posts.Category,
                description: Posts.description,
              });
            }
            if (
              parseInt(Posts.date.substring(3, 5)) >= d.getMonth() + 1 &&
              parseInt(Posts.date.substring(6, 10)) >= d.getFullYear()
            ) {
              if (
                parseInt(Posts.date.substring(3, 5)) > d.getMonth() + 1 ||
                parseInt(Posts.date.substring(0, 2)) > d.getDate()
              ) {
                return (
                  <UpcommEventList
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
            if (
              parseInt(Posts.date.substring(0, 2)) === d.getDate() &&
              parseInt(Posts.date.substring(3, 5)) === d.getMonth() + 1 &&
              parseInt(Posts.date.substring(6, 10)) === d.getFullYear()
            ) {
              dbs.collection("UpcommingPosts").doc(id).delete();
            }
          })}
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className=" listHeaders" style={{backgroundColor:"rgb(255,255,255)",borderRadius:"50px", border:"2px solid cornsilk"}} id="Upcomming">
          <p className="listheaders-head">
            <h3 className=" event-heading" style={{margin:"0.3rem 2rem"}}>
              UPCOMMING EVENT
            </h3>
          </p>
        </div>
        <div style={{ width:"40%",height: "20rem", paddingTop: "1rem", margin: "auto" }}>
        <img
          src="./images/imgr.png"
          style={{ width: "80%", height: "70%",opacity:"1" }}
          alt="No event found !!!!"
        />
        </div>
      </>
    );
  }
};

export default Upcomming;
