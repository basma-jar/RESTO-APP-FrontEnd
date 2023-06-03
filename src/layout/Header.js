import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <Navbar class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom"  expand="lg">
      <Navbar.Brand class="fs-4">
        <Link to="/">Restaurant</Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav class="nav nav-pills" className="ml-auto">
          <Nav.Link as={Link} class="nav-item" to="/villes">Villes</Nav.Link>
          <Nav.Link as={Link} class="nav-item" to="/serie">About</Nav.Link>
          <Nav.Link as={Link} class="nav-item" to="/specialite">specialite</Nav.Link>
          <Nav.Link as={Link} class="nav-item" to="/restaurant">Restaurant</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
