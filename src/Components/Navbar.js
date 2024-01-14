import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const AppNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expand="md"
      fixed="top"
      style={{ backgroundColor: "#B78365", boxShadow: "-5px -5px 35px #D6B8A7" }}
      expanded={expanded}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="navbar-brand font-weight-bold waviy">
          <span style={{ "--i": 1 }}>L</span>
          <span style={{ "--i": 2 }}>e</span>
          <span style={{ "--i": 3 }}>a</span>
          <span style={{ "--i": 4 }}>t</span>
          <span style={{ "--i": 5 }}>h</span>
          <span style={{ "--i": 6 }}>e</span>
          <span style={{ "--i": 7 }}>r</span>
          <span style={{ "--i": 8, margin: "0 5px" }}></span>
          <span style={{ "--i": 9 }}>J</span>
          <span style={{ "--i": 10 }}>o</span>
          <span style={{ "--i": 11 }}>u</span>
          <span style={{ "--i": 12 }}>r</span>
          <span style={{ "--i": 13 }}>n</span>
          <span style={{ "--i": 14 }}>a</span>
          <span style={{ "--i": 15 }}>l</span>
        </Navbar.Brand>
        <Navbar.Toggle onClick={handleToggle} aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" style={{marginLeft:"30rem"}}>
            <Nav.Link as={Link} to="/" className="animated-border-bottom" onClick={handleToggle}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/" className="animated-border-bottom" onClick={handleToggle}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to="/photopage" className="animated-border-bottom" onClick={handleToggle}>
              Products
            </Nav.Link>
            {/* <Nav.Link as={Link} to="/" className="animated-border-bottom" onClick={handleToggle}>
              Profile
            </Nav.Link> */}
            <Nav.Link as={Link} to="/contactpage" className="animated-border-bottom" onClick={handleToggle}>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default AppNavbar;
