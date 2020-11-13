import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import {
  faEye,
  faCalendarWeek,
  faRupeeSign,
  faMapMarkerAlt,
  faFileAlt,
  faClock,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../assets/style/joblist.css";

const Joblist = (props) => {
  const clickViewHandler = (id) => {
    window.location.href = `/job/view/${id}`;
  };

  return (
    <div className='jobslist'>
      <Container>
        <h2>Search Results with Filters</h2>
        <Row>
          <Col md={3} style={{ textAlign: "left" }}>
            <div style={{ marginBottom: "30px" }}>
              <h4>Locations</h4>
              <input type='checkbox' />
              <label>Delhi</label>
              <br />
              <input type='checkbox' />
              <label>Banglore</label>
              <br />
              <input type='checkbox' />
              <label>Chandigadh</label>
            </div>
            <div>
              <h4>Salary</h4>
              <input type='checkbox' />
              <label>0-3 Lakhs</label>
              <br />
              <input type='checkbox' />
              <label>3-7 Lakhs</label>
              <br />
              <input type='checkbox' />
              <label>7-10 Lakhs</label>
              <br />
              <input type='checkbox' />
              <label>10-15 Lakhs</label>
            </div>
          </Col>
          <Col md={9}>
            {props.jobs.length > 0 ? (
              props.jobs.map((job, index) => {
                return (
                  <div
                    className='joblist-section'
                    onClick={() => clickViewHandler(job._id)}
                    key={index}>
                    <div className='joblist-header'>
                      <h4>Java Developer</h4>
                      <p>Cognizant </p>
                    </div>

                    <div className='flex-container'>
                      <p>
                        <FontAwesomeIcon icon={faCalendarWeek} />1 Years
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faRupeeSign} />
                        3,00,000-5,00,000 PA
                      </p>
                      <p>
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                        Chennai
                      </p>
                    </div>
                    <p>
                      <FontAwesomeIcon icon={faFileAlt} />
                      Deep Knowledge Of Angular6, Deep Knowledge Of Angular6,
                      Deep Knowledge Of Angular6
                    </p>
                    <div className='flex-container'>
                      <p>Angularjs</p>
                      <p>CSS</p>
                      <p>HTML</p>
                    </div>
                    <div className='flex-container'>
                      <p>HOT JOB</p>
                      <p>
                        <FontAwesomeIcon icon={faClock} />2 DAYS AGO
                      </p>
                    </div>
                  </div>
                );
              })
            ) : (
              <tr>
                <td colSpan='5'>Loading...</td>
              </tr>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Joblist;
