import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, Button } from "react-bootstrap";
import "./css/Navbarr.css";
import { NavLink } from "react-router-dom";
import { auth, provider } from "./firebase";

const Navbarr = () => {
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
      <Navbar
        collapseOnSelect
        expand="lg"
        //bg="light"
        // variant="dark"
        className="navi"
        style={{borderRadius: "28px", backgroundColor: "cornsilk"}}
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link to="/"className="navib" style={{ color: "black" }}>
              Home
            </Nav.Link>
            <NavLink to="/Upcomming" style={{ textDecoration: "none" }}>
              <Nav.Link href=" "className="navib" style={{ color: "black" }}>
                Upcomming
              </Nav.Link>
            </NavLink>
            <NavLink to="/Live" style={{ textDecoration: "none" }}>
              <Nav.Link href=" "className="navib" style={{ color: "black" }}>
                Live
              </Nav.Link>
            </NavLink>
            <NavLink to="/Previous" style={{ textDecoration: "none" }}>
              <Nav.Link href=" " className="navib" style={{ color: "black" }}>
                Previous
              </Nav.Link>
            </NavLink>
          </Nav>
          <Form inline>
            {user === null ? (
              <div>
                <Button
                  variant="outline-success"
                  className="search-btn"
                  color="primary"
                  
                  style={{borderRadius: "20px"}}
                  onClick={() => {
                    auth
                      .signInWithPopup(provider)
                      .then(function (result) {
                        setUser(result.user);
                      })
                      .catch(function (err) {
                        alert(err.message);
                      });
                  }}
                >
                  Login
                </Button>
              </div>
            ) : (
              <div>
                 <Link to="/Create">
                  <Button variant="outline-success" className="search-btn" style={{borderRadius: "20px"}}>
                    Createevent
                  </Button>
                </Link>
                <Button
                  variant="outline-success"
                  className="search-btn"
                  
                  style={{ margin: "0rem 0.5rem", borderRadius: "20px"}}
                  onClick={() => {
                    auth.signOut().then(() => {
                      setUser(null);
                    });
                  }}
                >
                  Signout
                </Button>
               
              </div>
            )}
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Navbarr;
