import Axios from "axios";
import React, { Component } from "react";
import { Form } from "react-bootstrap";
import "../../assets/style/user_profile.css";
import Footer from "../../layout/Footer";
import Header from "../../layout/Header";
import Employment from "../user/multilevel/Employment";
import Personal from "../user/multilevel/Personal";
import Education from "./multilevel/Education";

const URL = "http://localhost:8080/api/user/profile/create";

export class SeekerProfile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      step: 1,
      userId: "",
      addressLine1: "",
      addressLine2: "",
      city: "",
      State: "",
      postalCode: "",
      country: "",
      experienceYear: "",
      currentExperienceMonth: "",
      skills: "",
      resumeLink: "",
      currentEmployer: "",
      prevEmployer: "",
      prevJobDesc: "",
      currentJobDesc: "",
      university: "",
      graduationSchool: "",
      graduationYear: "",
      areYouGraduated: false,
      qualifications: "",
      certificate: "",
      projects: "",
      onSuccess: "",
      error: "",
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      addressLine1: this.state.addressLine1,
      addressLine2: this.state.addressLine2,
      city: this.state.city,
      state: this.state.State,
      country: this.state.country,
      experienceYear: this.state.experienceYear,
      experienceMonth: this.state.currentExperienceMonth,
      skills: this.state.skills,
      resumeLink: this.state.resumeLink,
      currentEmployer: this.state.currentEmployer,
      prevEmployer: this.state.prevEmployer,
      prevJobDesc: this.state.prevJobDesc,
      currentJobDesc: this.state.currentJobDesc,
      university: this.state.university,
      graduationSchool: this.state.graduationSchool,
      graduationYear: this.state.graduationYear,
      areYouGraduated: this.state.areYouGraduated,
      qualifications: this.state.qualifications,
      certificate: this.state.certificate,
      projects: this.state.projects,
    };
    Axios.post(URL, data)
      .then((response) => {
        console.log("hurray");
        console.log(response);
        this.setState({ onSuccess: "Your profile Created. Now you can apply" });
      })
      .catch((error) => {
        console.log(error);
        this.setState({ error: "Could not save data. Please fill all" });
      });
  };

  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1,
    });
  };

  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1,
    });
  };

  render() {
    return (
      <div>
        <Header></Header>
        {/* Multilevel input here */}
        <div className='job-seeker-multilevelform-wrapper'>
          <div className='job-seeker-multilevelform'>
            {this.state.onSuccess ? (
              <p style={{ color: "green" }}>{this.state.onSuccess}</p>
            ) : null}
            {this.state.error ? (
              <p style={{ color: "green" }}>{this.state.error}</p>
            ) : null}
            <div className='job-seeker-multilevelform-header'>
              <h4>Profile Update</h4>
              <p>Update your latest information</p>
            </div>

            <Form onSubmit={this.handleSubmit}>
              {
                {
                  1: (
                    <Personal
                      state={this.state}
                      handleChange={this.handleChange}
                      nextStep={this.nextStep}></Personal>
                  ),
                  2: (
                    <Employment
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      state={this.state}
                      handleChange={this.handleChange}></Employment>
                  ),
                  3: (
                    <Education
                      nextStep={this.nextStep}
                      prevStep={this.prevStep}
                      state={this.state}
                      handleChange={this.handleChange}></Education>
                  ),
                }[this.state.step]
              }
            </Form>
          </div>
        </div>
        <Footer></Footer>
      </div>
    );
  }
}

export default SeekerProfile;
