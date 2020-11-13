import React, { useEffect, useState } from "react";
import Axios from "axios";
import Auth from "../auth";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

import Footer from "../layout/Footer";
import Header from "../layout/Header";

function ViewJob(props) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loggedInName, setLoggedInName] = useState("");
  const [userId, setUserId] = useState("");
  const [jobId, setJobId] = useState(null);
  const [job, setjob] = useState({});
  const [haveApplied, setHaveApplied] = useState(false);
  const [haveSaved, setHaveSaved] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    // Check if logged in
    const data = Auth.isLoggedIn();

    if (data) {
      setUserId(data._id);
      setIsLoggedIn(true);
    }
    // FEtch job information
    const url = `http://localhost:8080/api/job/view/${props.match.params.id}`;
    Axios.get(url)
      .then((response) => {
        const job = response.data.job;
        setJobId(job._id);
        setjob(job);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleAplyClick = () => {
    const sendThis = {
      userId: userId,
      jobId: jobId,
    };
    console.log(sendThis);
    // Logic
    if (isLoggedIn) {
      const url = "http://localhost:8080/api/user/job/apply";

      Axios.post(url, sendThis)
        .then((response) => {
          console.log(response);
          setHaveApplied(true);
        })
        .catch((error) => {
          console.log(error);
          setError("Dimag kharab hojayega nahi chalega to");
        });
    } else {
      console.log("userid not found");
    }
  };

  const handleSaveClick = () => {
    const jobAndUser = {
      userId: userId,
      jobId: jobId,
    };
    if (isLoggedIn) {
      const URL = "http://localhost:8080/api/user/job/save";

      Axios.post(URL, jobAndUser)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          setError(error.response.data);
          console.log(error);
        });
    } else {
      console.log("User Not Logged In");
    }
  };

  const state = {
    isLoggedIn: isLoggedIn,
    name: "aman",
  };
  return (
    <div>
      <Header state={state}></Header>
      <div style={{ paddingTop: "30px" }}>
        <div className='index-view-job'>
          <div className='index-view-job-header'>
            {haveApplied ? <p style={{ color: "green" }}>Applied</p> : null}
            {error ? (
              <p style={{ fontSize: "10px", color: "red" }}>{error}</p>
            ) : null}
            <span>{job.companyName}</span>

            <span>Location: {job.location}</span>
            {isLoggedIn ? (
              <div>
                <Button
                  variant='primary'
                  onClick={() => handleAplyClick()}
                  style={{ padding: "2px 30px", marginRight: "15px" }}>
                  APPLY
                </Button>
                <Button
                  variant='primary'
                  onClick={() => handleSaveClick()}
                  style={{ padding: "2px 30px" }}>
                  SAVE JOB
                </Button>
              </div>
            ) : null}
          </div>

          <div className='index-view-job-content'>
            <span>Job ID: {job.jobId}</span>
            <span>Role: {job.role}</span>
            <span>{job.title}</span>
            <span>responsibility: {job.responsibility}</span>
            <span>Experience: {job.experience}</span>
            <span>Skills Required: {job.skills}</span>
            <span>No of Positions: {job.noOfPositions}</span>
            <span>Degree: {job.degree}</span>
            <span>Posted On: {job.createdAt}</span>
            <span>Job Description: {job.jobDesc}</span>
          </div>
        </div>
      </div>

      <Footer></Footer>
    </div>
  );
}

export default ViewJob;
