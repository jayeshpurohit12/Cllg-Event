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

  if(Posts[0]) {
    return (
      <>
        <div className="bg-dark listHeaders" id="Upcomming" style={{backgroundColor:"grey",borderRadius:"50px", border:"2px solid cornsilk"}}>
          <p className="listheaders-head">
          <h3 className=" event-heading" style={{margin:"0.3rem 2rem"}}>
              UPCOMMING EVENT
            </h3>
          </p>
        </div>
        <div className="eventCard" style={{display: "flex"}}>
          {Posts.map(({ id, Posts }) => {
            
                return (
                  <UpcommEventList
                  idp={id}
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
  } else {
      return (
        <>
          <div className=" listHeaders bg-dark" style={{backgroundColor:"grey",borderRadius:"50px", border:"2px solid cornsilk"}} id="Upcomming">
            <p className="listheaders-head">
              <h3 className=" event-heading" style={{margin:"0.3rem 2rem"}}>
                UPCOMMING EVENT
              </h3>
            </p>
          </div>
          <div style={{ width:"90%",height: "30rem", paddingTop: "1rem" }}>
            <center>
          <img
            src="./images/imgr.png"
            style={{ width: "35%", height: "20rem",opacity:"1"}}
            alt="No event found !!!!"
          />
          </center>
          </div>
        </>
      );
    }
  
};

export default Upcom;
