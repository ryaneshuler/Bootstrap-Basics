import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar bg="info" variant="dark" expand="lg" className="p-3 mb-4">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto gap-3">
          <Nav.Link as={NavLink} to="#" activeclassname="active">
            Home
          </Nav.Link>
          <Nav.Link as={NavLink} to="#" activeclassname="active">
            About
          </Nav.Link>
          <Nav.Link as={NavLink} to="#" activeclassname="active">
            Contact
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar;