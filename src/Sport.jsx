import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CatEventList from "./CatEventList";
import { dbs } from "./firebase.js";

const Sport = () => {
    var d = new Date();
    const [PPosts, setPPosts] = useState([]);
    const [LPosts, setLPosts] = useState([]);
    const [UPosts, setUPosts] = useState([]);
    // runs a piece of code on a specific condition
    useEffect(() => {
      dbs.collection("UpcommingPosts").onSnapshot((snapshot) => {
        setUPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            UPosts: doc.data(),
          }))
        );
      });
      dbs.collection("LivePosts").onSnapshot((snapshot) => {
        setLPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            LPosts: doc.data(),
          }))
        );
      });
      dbs.collection("PreviousPosts").onSnapshot((snapshot) => {
        setPPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            PPosts: doc.data(),
          }))
        );
      });
    }, []);
    if (UPosts[0]||LPosts[0]||PPosts[0]) {
        return (
          <>
            <div className="bg-dark listHeaders" id="Upcomming" style={{backgroundColor:"grey",borderRadius:"50px", border:"2px solid cornsilk"}}>
              <p className="listheaders-head">
                <h3 className="text-white bg-dark event-heading" style={{borderRadius:"50px",margin:"0.3rem 2rem"}}>
                SPORT EVENTS
                </h3>
              </p>
            </div>
            <div className="eventCard">
              {UPosts.map(({ id, UPosts }) => {
                if (
                  UPosts.Category==="Sport"
                ) {
                      return (
                        <CatEventList
                          key={id}
                          title={UPosts.title}
                          description={UPosts.description}
                          Url={UPosts.ImageUrl}
                          date={UPosts.date}
                          time={UPosts.time}
                          Category={UPosts.Category}
                          Venue={UPosts.Venue}
                        />
                      );
                }}
              )}
               {LPosts.map(({ id, LPosts }) => {
                if (
                  LPosts.Category==="Sport"
                ) {
                      return (
                        <CatEventList
                          key={id}
                          title={LPosts.title}
                          description={LPosts.description}
                          Url={LPosts.ImageUrl}
                          date={LPosts.date}
                          time={LPosts.time}
                          Category={LPosts.Category}
                          Venue={LPosts.Venue}
                        />
                      );
                }}
               )}
               {PPosts.map(({ id, PPosts }) => {
                if (
                  PPosts.Category==="Sport"
                ) {
                      return (
                        <CatEventList
                          key={id}
                          title={PPosts.title}
                          description={PPosts.description}
                          Url={PPosts.ImageUrl}
                          date={PPosts.date}
                          time={PPosts.time}
                          Category={PPosts.Category}
                          Venue={PPosts.Venue}
                        />
                      );
                }}
              )}
              </div>
          </>
        );
      }
      else {
        return (
          <>
            <div className=" listHeaders bg-dark" style={{backgroundColor:"grey",borderRadius:"50px", border:"2px solid cornsilk"}} id="Upcomming">
              <p className="listheaders-head">
                <h3 className=" event-heading" style={{borderRadius:"50px",margin:"0.3rem 2rem"}}>
                SPORT EVENTS
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

    
    export default Sport;