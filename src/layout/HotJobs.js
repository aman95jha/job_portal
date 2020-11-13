import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Container, Row, Col } from "react-bootstrap";
import "../assets/style/hotjob.css";
import { Link } from "@material-ui/core";

const Hotjobs = (props) => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const handleClick = (jobId) => {
    window.location.href = "/job/view/" + jobId;
  };

  return (
    <div className='hotjobs'>
      <Container>
        <h2 className='header'>Hot Jobs</h2>
        <Carousel responsive={responsive} className='carousel-custom'>
          {props.hotjobs.map((job, index) => {
            return (
              <div
                className='hotjob-section'
                onClick={() => handleClick(job._id)}
                key={index}>
                <h4>{job.companyName}</h4>
                <p>Role: {job.role}</p>
                <h4>Experience Required: {job.experience}</h4>
                <p>Location: {job.location}</p>
              </div>
            );
          })}
        </Carousel>
      </Container>
    </div>
  );
};

export default Hotjobs;
