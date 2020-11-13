import React from "react";
import { Button, Form } from "react-bootstrap";

function Employment(props) {
  const { state } = props;
  return (
    <div>
      <h4>Employment Information</h4>

      <Form.Group controlId='formBasicCurrentEmployer'>
        <Form.Label>Current Employer</Form.Label>
        <Form.Control
          type='text'
          placeholder='Current Employer'
          name='currentEmployer'
          value={state.currentEmployer}
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Form.Group controlId='formBasicCurrentJobDescription'>
        <Form.Label>Job Description</Form.Label>
        <Form.Control
          type='text'
          placeholder='Current Job Desc'
          name='currentJobDesc'
          value={state.currentHobDesc}
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Esxperience In Month</Form.Label>
        <Form.Control
          type='text'
          placeholder='Experience In Month'
          name='currentExperienceMonth'
          value={state.currentExperienceMonth}
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Form.Group controlId='formBasicPrevEmployer'>
        <Form.Label>Previous Employer</Form.Label>
        <Form.Control
          type='text'
          placeholder='Previous Employer'
          name='prevEmployer'
          value={state.prevEmployer}
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Form.Group controlId='formBasicPrevJobDesc'>
        <Form.Label>Job Description</Form.Label>
        <Form.Control
          type='text'
          placeholder='Job Description'
          name='prevJobDesc'
          value={state.prevJobDesc}
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
      <Button variant='primary' onClick={props.nextStep}>
        Next
      </Button>
    </div>
  );
}

export default Employment;
