import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, Button } from "react-bootstrap";

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
        bg="dark"
        variant="dark"
        className="navi"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link to="/" style={{ color: "rgb(206, 206, 206)" }}>
              Home
            </Nav.Link>
            <NavLink to="/Upcomming" style={{ textDecoration: "none" }}>
              <Nav.Link href=" " style={{ color: "rgb(206, 206, 206)" }}>
                Upcomming
              </Nav.Link>
            </NavLink>
            <NavLink to="/Live" style={{ textDecoration: "none" }}>
              <Nav.Link href=" " style={{ color: "rgb(206, 206, 206)" }}>
                Live
              </Nav.Link>
            </NavLink>
            <NavLink to="/Previous" style={{ textDecoration: "none" }}>
              <Nav.Link href=" " style={{ color: "rgb(206, 206, 206)" }}>
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
                  href="#contained-buttons"
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
                  <Button variant="outline-success" className="search-btn">
                    Createevent
                  </Button>
                </Link>
                <Button
                  variant="outline-success"
                  className="search-btn"
                  href="#contained-buttons"
                  style={{ margin: "0rem 0.5rem"}}
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
