import React, { Component } from "react";
import { useState, useEffect } from "react";
import Axios from "axios";
import AdminHeader from "./Components/AdminHeader";
import Footer from "../layout/Footer";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import LeftMenu from "./Components/LeftMenu";

import { faCheckSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class JobDetail extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobId: "",
      title: "",
      role: "",
      responsibility: "",
      companyName: "",
      experience: "",
      noOfPositons: "",
      location: "",
      skills: "",
      degree: "",
      companyInfo: "",
      employmentType: "",
      keywords: "",
      jobDesc: "",
      salaryMin: 0,
      salaryMax: 0,
      error: "",
      onSuccess: "",
      message: "",
    };
  }

  componentDidMount() {
    const url = `http://localhost:8080/api/admin/view/${this.props.match.params.id}`;
    Axios.get(url)
      .then((response) => {
        const job = response.data.job;
        this.setState({
          jobId: job.jobId,
          title: job.title,
          role: job.role,
          responsibility: job.responsibility,
          companyName: job.companyName,
          experience: job.experience,
          noOfPositons: job.noOfPositons,
          location: job.location,
          skills: job.skills,
          degree: job.degree,
          companyInfo: job.companyInfo,
          employmentType: job.employmentType,
          keywords: job.keywords,
          jobDesc: job.jobDesc,
          salaryMin: 0,
          salaryMax: 0,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const url =
      "http://localhost:8080/api/admin/job/update/" +
      this.props.match.params.id;

    const data = {
      jobId: this.state.jobId,
      title: this.state.title,
      role: this.state.role,
      responsibility: this.state.responsibility,
      companyName: this.state.companyName,
      experience: this.state.experience,
      noOfPositions: this.state.noOfPositons,
      location: this.state.location,
      skills: this.state.skills,
      degree: this.state.degree,
      companyInfo: this.state.companyInfo,
      keywords: this.state.keywords,
      jobDesc: this.state.jobDesc,
      salaryMin: this.state.salaryMin,
      salaryMax: this.state.salaryMax,
    };
    Axios.post(url, data)
      .then((response) => {
        this.setState({ onSuccess: true, message: "Job Posted" });
      })
      .catch((error) => {
        this.setState({
          error: "something went wrond. could not save to database",
        });
      });
  };

  render() {
    return (
      <div>
        <AdminHeader></AdminHeader>
        <div className='dashboar-content-container'>
          <Container>
            <Row>
              <Col md='3'>
                <h4>Admin</h4>
                <LeftMenu></LeftMenu>
              </Col>
              <Col md='9' style={{ paddingTop: "35px" }}>
                <div
                  style={{
                    backgroundColor: "rgb(32, 32, 87)",
                    padding: "10px 10px",
                    color: "white",
                    fontWeight: "900",
                  }}>
                  <span>View And Update </span>
                </div>
                <div className='dashboar-content-container'>
                  {this.state.onSuccess ? (
                    <p
                      style={{
                        backgroundColor: "green",
                        color: "white",
                        padding: "8px 15px",
                        borderRadius: "9px",
                      }}>
                      <FontAwesomeIcon icon={faCheckSquare} />
                      {this.state.message}
                    </p>
                  ) : null}
                  <Form onSubmit={this.handleSubmit}>
                    {/* item 1 */}
                    <Form.Group controlId='formBasicCurrentEmployer'>
                      <Form.Label>JobId</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='jobId'
                        name='jobId'
                        onChange={this.handleChange}
                        value={this.state.jobId}
                      />
                    </Form.Group>

                    {/* item 1 */}
                    <Form.Group controlId='formBasicCurrentEmployer'>
                      <Form.Label>Title</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='title'
                        name='title'
                        onChange={this.handleChange}
                        value={this.state.title}
                      />
                    </Form.Group>

                    {/* item 1 */}
                    <Form.Group controlId='formBasicCurrentEmployer'>
                      <Form.Label>Role</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='role'
                        name='role'
                        onChange={this.handleChange}
                        value={this.state.role}
                      />
                    </Form.Group>

                    {/* item 1 */}
                    <Form.Group controlId='formBasicCurrentEmployer'>
                      <Form.Label>Responsibility</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='responsibility'
                        name='responsibility'
                        onChange={this.handleChange}
                        value={this.state.responsibility}
                      />
                    </Form.Group>

                    {/* item 1 */}
                    <Form.Group controlId='formBasicCurrentEmployer'>
                      <Form.Label>Company Name</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='companyName'
                        name='companyName'
                        onChange={this.handleChange}
                        value={this.state.companyName}
                      />
                    </Form.Group>

                    {/* item 1 */}
                    <Form.Group controlId='formBasicCurrentEmployer'>
                      <Form.Label>Experience</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='experience'
                        name='experience'
                        onChange={this.handleChange}
                        value={this.state.experience}
                      />
                    </Form.Group>

                    {/* item 1 */}
                    <Form.Group controlId='formBasicCurrentEmployer'>
                      <Form.Label>No Of Positions</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='noOfPositions'
                        name='noOfPositons'
                        onChange={this.handleChange}
                        value={this.state.noOfPositons}
                      />
                    </Form.Group>

                    {/* item 1 */}
                    <Form.Group controlId='formBasicCurrentEmployer'>
                      <Form.Label>Location</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='location'
                        name='location'
                        onChange={this.handleChange}
                        value={this.state.location}
                      />
                    </Form.Group>

                    {/* item 1 */}
                    <Form.Group controlId='formBasicCurrentEmployer'>
                      <Form.Label>Skills</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='skills'
                        name='skills'
                        onChange={this.handleChange}
                        value={this.state.skills}
                      />
                    </Form.Group>

                    {/* item 1 */}
                    <Form.Group controlId='formBasicCurrentEmployer'>
                      <Form.Label>Degree</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='degree'
                        name='degree'
                        onChange={this.handleChange}
                        value={this.state.degree}
                      />
                    </Form.Group>

                    {/* item 1 */}
                    <Form.Group controlId='formBasicCurrentEmployer'>
                      <Form.Label>Company Info</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='companyInfo'
                        name='companyInfo'
                        onChange={this.handleChange}
                        value={this.state.companyInfo}
                      />
                    </Form.Group>

                    {/* item 1 */}
                    <Form.Group controlId='formBasicCurrentEmployer'>
                      <Form.Label>Employment Type</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='employmentType'
                        name='employmentType'
                        onChange={this.handleChange}
                        value={this.state.employmentType}
                      />
                    </Form.Group>

                    {/* item 1 */}
                    <Form.Group controlId='formBasicCurrentEmployer'>
                      <Form.Label>Keywords</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='keywords'
                        name='keywords'
                        onChange={this.handleChange}
                        value={this.state.keywords}
                      />
                    </Form.Group>

                    {/* item 1 */}
                    <Form.Group controlId='formBasicCurrentEmployer'>
                      <Form.Label>Job Desc</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='jobDesc'
                        name='jobDesc'
                        onChange={this.handleChange}
                        value={this.state.jobDesc}
                      />
                    </Form.Group>

                    {/* item 1 */}
                    <Form.Group controlId='formBasicCurrentEmployer'>
                      <Form.Label>Salary Min</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='salaryMin'
                        name='salaryMin'
                        onChange={this.handleChange}
                        value={this.state.salaryMin}
                      />
                    </Form.Group>

                    {/* item 1 */}
                    <Form.Group controlId='formBasicCurrentEmployer'>
                      <Form.Label>Salary Max</Form.Label>
                      <Form.Control
                        type='text'
                        placeholder='salaryMax'
                        name='salaryMax'
                        onChange={this.handleChange}
                        value={this.state.salaryMax}
                      />
                    </Form.Group>

                    <Button
                      variant='primary'
                      className='prev-btn-multilevel-form'
                      type='submit'>
                      UPDATE
                    </Button>
                  </Form>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default JobDetail;
