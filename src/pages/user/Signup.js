import Axios from "axios";
import React, { Component } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
import "../../assets/style/signup.css";

const url = "http://localhost:8080/api/user/register";

export class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      email: "",
      phone: "",
      password: "",
      message: null,
      onSuccess: false,
      error: "",
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      username: this.state.username,
      email: this.state.email,
      phone: this.state.phone,
      password: this.state.password,
    };
    Axios.post(url, data)
      .then((response) => {
        this.setState({ onSuccess: true, message: "now please login" });
      })
      .catch((error) => {
        this.setState({
          error: "something went wrong.",
        });
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className='user-signup-wrapper'>
        {this.state.onSuccess ? <Redirect to='/login'></Redirect> : null}
        <div className='user-signup-box'>
          <div
            className='logo-text'
            style={{ textAlign: "center", borderBottom: "1px solid #eee" }}>
            <h4>TeraJob</h4>
            <p>Please signup for your better future</p>
          </div>
          {this.state.message ? (
            <p className='alert-success'>{this.state.message}</p>
          ) : null}
          {this.state.error ? (
            <p className='alert-danger'>{this.state.error}</p>
          ) : null}
          <Form
            style={{ padding: "30px 0px 20px 0px" }}
            onSubmit={this.handleSubmit}>
            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Username</Form.Label>
              <Form.Control
                type='text'
                name='username'
                placeholder='Username'
                onChange={this.handleChange}
                value={this.state.username}
              />
            </Form.Group>

            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type='email'
                name='email'
                placeholder='Enter email'
                onChange={this.handleChange}
                value={this.state.email}
              />
            </Form.Group>

            <Form.Group controlId='formBasicEmail'>
              <Form.Label>Phone</Form.Label>
              <Form.Control
                type='text'
                name='phone'
                placeholder='Phone'
                onChange={this.handleChange}
                value={this.state.phone}
              />
            </Form.Group>

            <Form.Group controlId='formBasicPassword'>
              <Form.Label>Password</Form.Label>
              <Form.Control
                type='password'
                name='password'
                placeholder='Password'
                onChange={this.handleChange}
                value={this.state.password}
              />
            </Form.Group>
            <Button variant='primary' type='submit'>
              Signup
            </Button>
            <h6>
              Already User <Link to='/login'>Login</Link>
            </h6>
          </Form>
          {this.state.onSuccess ? <Redirect to='/login'></Redirect> : null}
        </div>
      </div>
    );
  }
}

export default Signup;
