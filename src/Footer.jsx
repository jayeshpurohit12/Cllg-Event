import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./Footer";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-left col-md-4 col-sm-6">
          <p className="About">
            <span>About the company</span>
            <p>
              Ut congue augue non tellus bibendum, in varius tellus condimentum.
              In scelerisque nibh tortor, sed rhoncus odio condimentum in.
            </p>
          </p>
          <div className="footer_icons">
            <a href="# ">
              <i className="fa fa-facebook"></i>
            </a>
            <a href="# ">
              <i className="fa fa-twitter"></i>
            </a>
            <a href="# ">
              <i className="fa fa-linkedin"></i>
            </a>
            <a href="# ">
              <i className="fa fa-instagram"></i>
            </a>
          </div>
        </div>
        <div className="footer-center col-md-4 col-sm-6">
          <div>
            <i className="fa fa-map-marker"></i>
            <p>
              <span>Street name and number </span>
              City, Country
            </p>
          </div>
          <div>
            <i className="fa fa-phone"></i>
            <p>(+91) 0000 000 000</p>
          </div>
          <div>
            <i className="fa fa-envelope"></i>
            <p>
              <a href="# ">office@gmail.com</a>
            </p>
          </div>
        </div>
        <div className="footer-right col-md-4 col-sm-6">
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
            <a href="/">Home</a> | <a href=" ">About</a> |{" "}
            <a href="/Contact ">Contact</a> | <a href="/Upcomming">Upcomming</a>
            <a href="/Previous ">Previous</a> | <a href="/Live">Live</a>
          </p>
          <p className="tag">Copyright © 2021</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
