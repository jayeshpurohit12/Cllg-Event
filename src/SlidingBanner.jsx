import React, { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Carousel } from "react-bootstrap";
import { dbs } from "./firebase.js";

const SlidingBanner = () => {
  const [Posts, setPosts] = useState([]);
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
    <div className="slide-image">
       <Carousel>
       {Posts.slice(0,3).map(({ id, Posts }) => {
          return (
   <Carousel.Item>
   <a className="live-tv" href="#Upcomm">
        {" "}
        <i class="fas fa-stream" style={{color:"white"}}>Live</i>
      </a>
      <img
        className="d-block w-100"
        src={Posts.ImageUrl}
        alt="First slide"
      />
      <Carousel.Caption style={{fontSize:"1.5rem"}}>
        {Posts.title}
      </Carousel.Caption>
      </Carousel.Item>
      );
        })}
        </Carousel>
      </div>
    );
      }
      else{
          return (
            <>
             <div className="slide-image">
       <Carousel>
   <Carousel.Item>
   <a className="live-tv" href="#Upcomm">
        {" "}
        <i class="fas fa-stream" style={{color:"white"}}>Live</i>
      </a>
      <img
        className="d-block w-100"
        src="https://img.freepik.com/free-vector/no-data-concept-illustration_114360-626.jpg?size=626&ext=jpg"
        alt="First slide"
      />
      <Carousel.Caption style={{fontSize:"1.5rem",color:"black",margin:"-1rem"}}>
        <strong>No Live Event</strong>
      </Carousel.Caption>
      </Carousel.Item>
        </Carousel>
      </div>
            </>
          );
      }
  };
export default SlidingBanner;