import { faUserNinja, faUserSecret } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Redirect } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { Container, Nav, Navbar, Dropdown } from "react-bootstrap";
import "../assets/style/home.css";
import logo from "../images/logo2.png";
import Auth from "../auth";
import Axios from "axios";

const Header = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const user = Auth.isLoggedIn();
    console.log(user);
  }, []);

  const handleLogOut = () => {
    Auth.logMeOut();
    window.location.reload();
  };

  const handleLoginSubmit = (e) => {
    const URL = "http://localhost:8080/api/user/login";

    const data = {
      username: username,
      password: password,
    };

    Axios.post(URL, data)
      .then((response) => {
        const user = response.data.data;
        const returnValue = Auth.logIn(user);
        if (returnValue) {
          console.log("dss");
          window.location.reload(true);
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "Something Went Wrong" });
      });
  };

  var loginDiv;
  if (props.state.isLoggedIn) {
    loginDiv = (
      <Dropdown>
        <Dropdown.Toggle
          style={{ backgroundColor: "white", color: "black", border: "none" }}
          id='dropdown-basic'>
          <FontAwesomeIcon icon={faUserSecret} /> {props.state.name}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => (window.location.href = "/user/dashboard")}>
            Dashboard
          </Dropdown.Item>
          <Dropdown.Item onClick={() => handleLogOut()}>logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    );
  } else {
    loginDiv = (
      <div>
        <Nav.Link>
          <FontAwesomeIcon icon={faUserNinja} />
          Login
        </Nav.Link>
      </div>
    );
  }

  return (
    <div className='header-wrapper'>
      {/* <Container> */}
      <Navbar collapseOnSelect className='navbar-wrapper'>
        <Container>
          <Navbar.Brand className='logo-text' href='/'>
            <img src={logo} width='70px'></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='mr-auto'>
              <Nav.Link href='#features'>About</Nav.Link>
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
              {loginDiv}
              {/* <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div
        className={
          props.state.isLoggedIn ? "top-login top-login-hide" : "top-login"
        }>
        <div className='top-login-header'></div>
        <div>
          <form>
            <div className='top-login-item'>
              <h4>Please Login</h4>
            </div>
            <div className='top-login-item'>
              <label htmlFor='login-email'>Username</label>
              <input
                type='text'
                placeholder='username'
                value={username}
                onChange={(e) => setUsername(e.target.value)}></input>
            </div>

            <div className='top-login-item'>
              <label htmlFor='login-password'>Password</label>
              <input
                type='password'
                placeholder='Password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            <div className='top-login-item'>
              <button type='button' onClick={() => handleLoginSubmit()}>
                LOGIN
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* </Container> */}
    </div>
  );
};

export default Header;
