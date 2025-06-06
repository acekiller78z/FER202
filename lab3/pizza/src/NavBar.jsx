import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const CustomNavbar = () => {
  return (
    <Navbar expand="lg" bg="dark" variant="dark" className="py-3">
      <Container style={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
        <Navbar.Brand href="#" className="fw-bold text-white">
          Pizza House
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto ms-3">
            <Nav.Link href="#home" className="text-white fw-bold">
              Home
            </Nav.Link>
            <Nav.Link href="#about" className="text-white-50">
              About Us
            </Nav.Link>
            <Nav.Link href="#contact" className="text-white-50">
              Contact
            </Nav.Link>
          </Nav>
          <Form className="d-flex ms-3">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="danger">
              <i className="fas fa-search"></i>
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
