import React, { Component } from "react";
import AdminHeader from "./Components/AdminHeader";
import Footer from "../layout/Footer";
import { Container, Row, Col, Table } from "react-bootstrap";
import LeftMenu from "./Components/LeftMenu";
import Axios from "axios";

const URL = "http://localhost:8080/api/admin/applications";

export class ViewJobs extends Component {
  constructor(props) {
    super(props);

    this.state = {
      jobs: [],
      error: "",
    };
  }

  componentDidMount() {
    try {
      Axios.get(URL)
        .then((response) => {
          const resultJobs = response.data.data;
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
                      <th>UserId</th>
                      <th>Accepted</th>
                    </tr>
                  </thead>
                  <tbody>
                    {this.state.jobs.length > 0 ? (
                      this.state.jobs.map((job, index) => {
                        return (
                          <tr key={index}>
                            <td>{index}</td>
                            <td>{job.jobId}</td>
                            <td>{job.userId}</td>
                            <td>
                              {job.accepted ? (
                                <span>Accepted</span>
                              ) : (
                                <span>Pending</span>
                              )}
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
