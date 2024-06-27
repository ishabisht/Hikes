import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import Logo from '../images/Logo.png'
const Header = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
       <img
    src={Logo}
    height="80"
    className="d-inline-block align-top"
    alt="Hiking Life Logo"
  />
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto mt-4">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#class">Class</Nav.Link>
          <Nav.Link href="#promo">Promo</Nav.Link>
          <Nav.Link href="#online-class">Online Class</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
