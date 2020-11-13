import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Footer from "../../layout/Footer";
import UserHeader from "../../layout/Header";
import SideMenu from "./component/SideMenu";
import { Container, Row, Col, Table } from "react-bootstrap";
import Axios from "axios";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Auth from "../../auth";

export class Dashboard extends Component {
  constructor(props) {
    super(props);

    this.state = {
      appliedJobs: [],
      user: "",
      userId: null,
      isLoggedIn: false,
      error: "",
    };
  }
  componentDidMount() {
    // Check if logged in
    const data = Auth.isLoggedIn();
    var userID;

    if (data) {
      this.setState({
        user: data.username,
        isLoggedIn: true,
        userId: data._id,
      });
      userID = data._id;
    }
    // Get applied Jobs
    const URL = "http://localhost:8080/api/user/get/jobs/" + userID;
    Axios.get(URL)
      .then((response) => {
        console.log(response);
        this.setState({ appliedJobs: response.data.data });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ eror: "Something went wrong" });
      });
  }

  render() {
    return (
      <div>
        <UserHeader
          state={{
            isLoggedIn: this.state.isLoggedIn,
            name: this.state.user,
          }}></UserHeader>
        {/* {this.state.isLoggedIn ? null : <Redirect to='/'></Redirect>} */}
        <div className='dashboar-content-container'>
          <Container>
            <Row>
              <Col md='3'>
                <h4>USER</h4>
                <SideMenu></SideMenu>
              </Col>
              <Col md='9' style={{ paddingTop: "35px" }}>
                <Table striped bordered hover size='sm' variant='dark'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>JobId</th>
                      <th>UserId</th>
                      {/* <th>Company Name</th>
                      <th>Location</th>
                      <th>Exp.Req</th> */}
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.appliedJobs.length > 0 ? (
                      this.state.appliedJobs.map((job, index) => {
                        return (
                          <tr key={index}>
                            <td>{index}</td>
                            <td>{job.jobId}</td>
                            <td>{job.userId}</td>
                            <td>
                              {job.rejected ? (
                                <span>Accepted</span>
                              ) : (
                                <span>Pending</span>
                              )}
                            </td>
                            {/* <td>{job.location}</td>
                            <td>{job.experience}</td> */}

                            {/* <td>
                            <FontAwesomeIcon
                              icon={faEye}
                              onClick={() => this.handleViewClick(job._id)}
                            />

                            <FontAwesomeIcon
                              icon={faTrash}
                              onClick={() => this.handleDeleteClick(job._id)}
                            />
                          </td> */}
                          </tr>
                        );
                      })
                    ) : (
                      <tr>
                        <td colSpan='5'>Loading...</td>
                      </tr>
                    )}
                  </tbody>
                </Table>
              </Col>
            </Row>
          </Container>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default Dashboard;
