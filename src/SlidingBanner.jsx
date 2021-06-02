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
  return (
    <div className="slide-image">
       <Carousel>
       {Posts.slice(0,3).map(({ id, Posts }) => {
          return (
   <Carousel.Item>
   <a className="live-tv" href="#Upcomm">
        {" "}
        <i class="fas fa-stream">Live</i>
      </a>
      <img
        className="d-block w-100"
        src={Posts.ImageUrl}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3>{Posts.title}</h3>
      </Carousel.Caption>
      </Carousel.Item>
      );
        })}
        </Carousel>
      </div>
    );
  }

export default SlidingBanner;
