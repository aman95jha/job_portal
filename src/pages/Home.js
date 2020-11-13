import React, { Component } from "react";

import { Button, Form } from "react-bootstrap";

import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { faGrin } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/style/home.css";

import Footer from "../layout/Footer";
import Header from "../layout/Header";
import Hotjobs from "../layout/HotJobs";
import Joblist from "../layout/JobsList";
import Auth from "../auth";
import Axios from "axios";
const URL = "http://localhost:8080/api/search";

export class Home extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoggedIn: false,
      postCompanyRole: "",
      place: "",
      jobs: [],
      hotjobs: [],
      name: "",
      userId: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    Axios.get(URL, {
      params: {
        postCompanyRole: this.state.postCompanyRole,
        place: this.state.place,
      },
    })
      .then((res) => {
        const jobResult = res.data.data;
        this.setState({ jobs: jobResult });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    const data = Auth.isLoggedIn();
    const hotJobsUrl = "http://localhost:8080/api/hotjobs";
    Axios.get(hotJobsUrl)
      .then((response) => {
        this.setState({ hotjobs: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });

    if (data) {
      this.setState({ isLoggedIn: true, name: data.username });
    }
  }

  render() {
    var Content;
    if (this.state.jobs.length > 0) {
      Content = <Joblist jobs={this.state.jobs}></Joblist>;
    } else {
      Content = (
        <div>
          <div className='more-tag-line'>
            <h4>It only takes a few seconds</h4>
            <h4>post a job, search resumes, and more</h4>
          </div>
          <Hotjobs hotjobs={this.state.hotjobs}></Hotjobs>
        </div>
      );
    }

    return (
      <div>
        <Header state={this.state}></Header>
        <div className='search-content-box'>
          <div className='tag-line'>
            <h4>Get your Dream come true</h4>
            <h4 style={{ color: "blue", fontSize: "60px" }}>
              <FontAwesomeIcon icon={faGrin}></FontAwesomeIcon>
            </h4>
          </div>
          <div className='job-search-box'>
            <Form
              className='form-wrapper-job-search'
              onSubmit={this.handleSubmit}>
              <Form.Group
                className='search-job-input-item'
                controlId='formBasicPostCompanyRole'>
                <Form.Control
                  className='search-job-input-field'
                  type='text'
                  name='postCompanyRole'
                  placeholder='Post or Company or Role'
                  value={this.state.postCompanyRole}
                  onChange={this.handleChange}
                />
              </Form.Group>
              <Form.Group
                className='search-job-input-item'
                controlId='formBasicCity'>
                <Form.Control
                  className='search-job-input-field'
                  type='text'
                  placeholder='Place'
                  name='place'
                  onChange={this.handleChange}
                  value={this.state.place}
                />
              </Form.Group>
              <Button
                variant='primary'
                size='lg'
                type='submit'
                style={{ padding: "4px 30px" }}
                active>
                Hit Search
              </Button>
            </Form>
          </div>
          {Content}
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Home;
