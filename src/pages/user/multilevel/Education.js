import React from "react";
import { Button, Form } from "react-bootstrap";

const Education = (props) => {
  const { state } = props;

  return (
    <div>
      <h4>Education Information</h4>

      <Form.Group controlId='formBasicUniversity'>
        <Form.Label>College / University</Form.Label>
        <Form.Control
          type='text'
          placeholder='College / University'
          name='university'
          value={state.university}
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Form.Group controlId='formBasicPassedYear'>
        <Form.Label>Year Passed On</Form.Label>
        <Form.Control
          type='text'
          placeholder='Year Passed On'
          name='graduationYear'
          value={state.graduationYear}
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Form.Group controlId='formBasicText'>
        <Form.Label>Graduated</Form.Label>
        <Form.Control
          type='text'
          placeholder='Yes/No'
          name='areYouGraduated'
          value={state.areYouGraduated}
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Form.Group controlId='formBasicText'>
        <Form.Label>Name of Gratuated School</Form.Label>
        <Form.Control
          type='text'
          placeholder='Name of Graduated School'
          name='graduationSchool'
          value={state.graduationSchool}
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Form.Group controlId='formBasicText'>
        <Form.Label>Number of year attended</Form.Label>
        <Form.Control type='text' placeholder='Number of year' />
      </Form.Group>

      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Skills </Form.Label>
        <Form.Control
          type='text'
          placeholder='Skills'
          name='skills'
          value={state.skills}
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Form.Group controlId='formBasicText'>
        <Form.Label>Certification if any</Form.Label>
        <Form.Control
          type='text'
          placeholder='Certificates'
          name='certificate'
          value={state.certificate}
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Form.Group controlId='formBasicResumeLink'>
        <Form.Label>Link Of your resume</Form.Label>
        <Form.Control
          type='text'
          placeholder='Resume Link'
          name='resumeLink'
          value={state.resumeLink}
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Button
        variant='primary'
        onClick={props.prevStep}
        className='prev-btn-multilevel-form'>
        Prev
      </Button>
      <Button variant='primary' type='submit'>
        Submit
      </Button>
    </div>
  );
};

export default Education;
