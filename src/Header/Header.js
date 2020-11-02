import React, { Fragment, useEffect, useRef, useState }  from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Button from "react-bootstrap/Button";
import './Header.css';
const Header = () => {
  return (
    <div class="nav-container">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">
          <img src="/assets/img/logo.png" alt="image" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="javascript:void(0)">Why Shortify</Nav.Link>
            <Nav.Link href="javascript:void(0)">Features</Nav.Link>
            <Nav.Link href="javascript:void(0)">Solutions</Nav.Link>
          </Nav>
          <Navbar.Text>
            <div class="user-actions">
              <Button variant="primary">Sign Up</Button>
              <Button variant="secondary">Get a Quote</Button>
            </div>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default Header;
