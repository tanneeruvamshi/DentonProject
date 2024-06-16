// src/components/NavigationBar/NavBar.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top">
      <Navbar.Brand href="#home">Namaste Denton</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          {/* <Nav.Link href="#about">About Us</Nav.Link> */}
          {/* <Nav.Link href="#menu">Menu</Nav.Link> */}
          <Nav.Link href="#reservation">Reservation</Nav.Link>
          <Nav.Link href="#events">Events</Nav.Link>
          {/* <Nav.Link href="#testimonials">Testimonials</Nav.Link> */}
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavBar;
