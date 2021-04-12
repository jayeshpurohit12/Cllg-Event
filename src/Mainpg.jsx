import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./css/Mainpg.css";
import Navbarr from "./Navbarr";
import { Button } from "@material-ui/core";
import SlidingBanner from "./SlidingBanner";
import MainBody from "./MainBody";
import Footer from "./Footer";
import { auth, provider } from "./firebase";

const Mainpg = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, []);
  return (
    <>
      <div className="main-head">
        <img
          src="./images/Name.png"
          style={{ width: "100%", height: "150px" }}
          alt="logo"
        />
        <div className="head-name">
          <span className="headtitle">EVENTIVE</span>
          <div>
            {user === null ? (
              <div>
                <a href="#facebook">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#twitter">
                  <i className="fa fa-twitter"></i>
                </a>
                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  onClick={() => {
                    auth
                      .signInWithPopup(provider)
                      .then(function (result) {
                        setUser(result.user);
                      })
                      .catch(function (err) {
                        console.log(err);
                      });
                  }}
                >
                  Login
                </Button>
              </div>
            ) : (
              <div>
                <Button
                  variant="contained"
                  color="primary"
                  href="#contained-buttons"
                  style={{ margin: "0rem 0.5rem" }}
                  onClick={() => {
                    auth.signOut().then(() => {
                      setUser(null);
                    });
                  }}
                >
                  Signout
                </Button>
                <Link to="/Create">
                  <Button className="user" variant="contained" color="primary">
                    Createevent
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="full-header bg-white">
        <div className="nav">
          <Navbarr />
        </div>
        <div className="sliding-banner">
          <SlidingBanner />
        </div>
        <MainBody />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Mainpg;
