import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
const Navbarr = () => {
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
            <Nav.Link href="#home" style={{ color: "rgb(206, 206, 206)" }}>
              Home
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "rgb(206, 206, 206)" }}>
              Upcomming
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "rgb(206, 206, 206)" }}>
              Live
            </Nav.Link>
            <Nav.Link href="#link" style={{ color: "rgb(206, 206, 206)" }}>
              Previous
            </Nav.Link>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success" className="search-btn">
              Search
            </Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};
export default Navbarr;
