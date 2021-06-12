import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import UpcommEventList from "./UpcommEventList";
import { dbs } from "./firebase.js";
const Upcom = () => {
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
  return (
    <>
      <div className="bg-dark listHeaders" id="Upcomming">
        <p className="listheaders-head">
          <h3 className="text-white bg-dark event-heading">UPCOMMING EVENT</h3>
        </p>
      </div>
      <div className="eventCard" style={{display: "flex"}}>
        {Posts.map(({ id, Posts }) => {
          
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
          
        )
        }
      </div>
    </>
  );
};

export default Upcom;
