import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import LiveEventList from "./LiveEventList";
import { dbs } from "./firebase.js";

const Live = () => {
  const [Posts, setPosts] = useState([]);
  // runs a piece of code on a specific condition
  useEffect(() => {
    dbs.collection("LivePosts").onSnapshot((snapshot) => {
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          Posts: doc.data(),
        }))
      );
    });
  }, []);
  if(Posts[0]){
    return (
      <>
        <div className="bg-dark listHeaders" id="Upcomming">
          <p className="listheaders-head">
            <h3 className="text-white bg-dark event-heading">LIVE EVENT</h3>
          </p>
        </div>
          <div className="eventCard"> 
          {Posts.map(({ id, Posts }) => {
            return (
              <LiveEventList
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
          })}
          </div>
      </>
    );
   }
   else{
    return (
      <>
      <div className="bg-dark listHeaders" id="Upcomming">
        <p className="listheaders-head">
          <h3 className="text-white bg-dark event-heading">LIVE EVENT</h3>
        </p>
      </div>
      <div style={{height:"10rem",paddingTop:"1rem"}}><span style={{marginLeft:"1rem",fontSize:"1.5rem"}}>No event found</span></div>
      </>
        );
        }
};

export default Live;
