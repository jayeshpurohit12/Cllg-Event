import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Footer";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-left">
          <p className="About">
            <h2 style={{ color: "white", padding: "0.5rem" }}>Event Site</h2>
            <p>
              This site is a single source to view (live, past, upcomming
              events)/post (upcomming events).
            </p>
          </p>
          <div className="footer_icons">
            <a target="_blank" href="https://www.facebook.com/Jayeshpurohit01">
              <i className="fa fa-facebook"></i>
            </a>
            <a target="_blank" href="https://twitter.com/tech_jayesh">
              <i className="fa fa-twitter"></i>
            </a>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/jayesh-purohit-yt/"
            >
              <i className="fa fa-linkedin"></i>
            </a>
            <a
              target="_blank"
              href="https://www.instagram.com/jayesh__purohit/"
            >
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-center">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>AITR </span>
              Indore,India
            </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>(+91) 8770 535 206</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="mailto: jayeshpurohit456789@gmail.com">Send Mail</a>
            </p>
          </div>
        </div>
        <div className="footer-right">
          <h2>
            Eventive
            <img
              src="./images/Name.png"
              style={{
                width: "50%",
                height: "80%",
                backgroundColor: "transparent",
              }}
              alt="logo"
            />
          </h2>
          <p className="menu">
            <Link to="/">Home</Link> | <Link to="/Contact">Contact</Link> |{" "}
            <Link to="/Upcomming">Upcomming</Link> |{" "}
            <Link to="/Previous">Previous</Link> | <Link to="/Live">Live</Link>
          </p>
          <p className="tag">Eventive Copyright © 2021</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
