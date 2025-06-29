import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Navigation() {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('loggedIn') === 'true';

  const handleLogout = () => {
    localStorage.removeItem('loggedIn');
    navigate('/login');
  };

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand as={Link} to="/">React App</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/about">About</Nav.Link>
          <Nav.Link as={Link} to="/posts">Posts</Nav.Link>
          {!isLoggedIn && <Nav.Link as={Link} to="/login">Login</Nav.Link>}
          {isLoggedIn && <Nav.Link onClick={handleLogout}>Logout</Nav.Link>}
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Navigation;