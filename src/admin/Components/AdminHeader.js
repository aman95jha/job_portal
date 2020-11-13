import { faUserNinja } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import "../../assets/style/home.css";

const AdminHeader = () => {
  return (
    <div className='header-wrapper'>
      {/* <Container> */}
      <Navbar collapseOnSelect className='navbar-wrapper'>
        <Container>
          <Navbar.Brand className='logo-text' href='#home'>
            TeraJob Admin
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              {/* <Nav.Link href='#features'>About</Nav.Link> */}
              {/* <Nav.Link href="#pricing"></Nav.Link> */}
              {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            </Nav>
            <Nav>
              <Nav.Link href='/login'>
                <FontAwesomeIcon icon={faUserNinja} />
                Login
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* </Container> */}
    </div>
  );
};

export default AdminHeader;
