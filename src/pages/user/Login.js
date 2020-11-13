import Axios from "axios";
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import "../../assets/style/signup.css";
import Auth from "../../auth";

const URL = "http://localhost:8080/api/user/login";

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      error: "",
      onSuccess: false,
      username: "",
      password: "",
      isLoggedIn: false,
      redirectPage: "",
    };
  }

  componentDidMount() {
    const checkLogin = Auth.isLoggedIn();
    if (checkLogin) {
      this.setState({ isLoggedIn: true });
    }

    this.setState({ redirectPage: this.props.location.state });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      password: this.state.password,
    };

    Axios.post(URL, data)
      .then((response) => {
        const user = response.data.data;
        this.setState({ onSuccess: true });
        const returnValue = Auth.logIn(user);
        if (returnValue) {
          console.log("dss");
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "Something Went Wrong" });
      });
  };

  render() {
    return (
      <div className='user-signup-wrapper'>
        <div className='user-signup-box'>
          <div
            className='logo-text'
            style={{ textAlign: "center", borderBottom: "1px solid #eee" }}>
            <h4>TeraJob</h4>
            <p>Please Login for your better future</p>
          </div>
          <Form
            style={{ padding: "30px 0px 20px 0px" }}
            onSubmit={this.handleSubmit}>
            <Form.Group controlId='formBasicUsername'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                name='username'
                onChange={this.handleChange}
                value={this.state.username}
                type='text'
                placeholder='Username'
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                name='password'
                onChange={this.handleChange}
                value={this.state.password}
                type='password'
                placeholder='Password'
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Login
            </Button>
            <h6>
              New User.<Link to='/signup'>plese signup</Link>
            </h6>
          </Form>
        </div>

        {/* {this.state.onSuccess ? (
          <Redirect to='/update/profile'></Redirect>
        ) : null} */}
      </div>
    );
  }
}

export default Signup;
