import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navbars = () => {
  return (
    <header className="bg-body-tertiary py-3">
      <Navbar expand="lg" className="container">
        <Navbar.Brand className="logo" href="/">
          <span>Creative</span> Construction
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link className="nav_link" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="nav_link" href="about">
              About Us
            </Nav.Link>
            <Nav.Link className="nav_link" href="/services">
              Services
            </Nav.Link>
            <Nav.Link className="nav_link" href="/projects">
              Projects
            </Nav.Link>
            <Nav.Link className="nav_link" href="/blogs">
              Blogs
            </Nav.Link>
            <Nav.Link className="nav_link" href="/contacts">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Navbars;
