import React, { Component } from "react";
import AdminHeader from "./Components/AdminHeader";
import Footer from "../layout/Footer";
import { Container, Row, Col, Table } from "react-bootstrap";
import LeftMenu from "./Components/LeftMenu";
import Axios from "axios";
import { faEye, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const URL = "http://localhost:8080/api/admin/jobs/view/all";

export class ViewJobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      error: "",
    };
  }

  handleViewClick = (id) => {
    window.location.href = `/dashboard/job/${id}`;
  };

  handleDeleteClick = (id) => {
    const URL = "http://localhost:8080/api/admin/job/delete/" + id;
    Axios.get(URL)
      .then((response) => {
        const del = this.state.jobs.filter((job) => id != job._id);
        this.setState({ jobs: del });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  componentDidMount() {
    try {
      Axios.get(URL)
        .then((response) => {
          const resultJobs = response.data.jobs;
          this.setState({ jobs: resultJobs });
          console.log(this.state.jobs);
        })
        .catch((error) => {
          this.setState({ error: "Could Not Fetch Jobs" });
        });
    } catch (error) {
      console.log(error);
    }
  }
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
                <Table striped bordered hover size='sm' variant='dark'>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>JobId</th>
                      <th>Title</th>
                      <th>Company Name</th>
                      <th>Location</th>
                      <th>Exp.Req</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.jobs.length > 0 ? (
                      this.state.jobs.map((job, index) => {
                        return (
                          <tr key={index}>
                            <td>{index}</td>
                            <td>{job.jobId}</td>
                            <td>{job.title}</td>
                            <td>{job.companyName}</td>
                            <td>{job.location}</td>
                            <td>{job.experience}</td>
                            <td>
                              <FontAwesomeIcon
                                icon={faEye}
                                onClick={() => this.handleViewClick(job._id)}
                              />

                              <FontAwesomeIcon
                                icon={faTrash}
                                onClick={() => this.handleDeleteClick(job._id)}
                              />
                            </td>
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

export default ViewJobs;
