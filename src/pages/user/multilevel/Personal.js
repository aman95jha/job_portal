import React from "react";
import { Button, Form } from "react-bootstrap";

const Personal = (props) => {
  const { state } = props;

  return (
    <div>
      <h4>Personal Information</h4>

      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Address Line 1</Form.Label>
        <Form.Control
          name='addressLine1'
          value={state.addressLine1}
          type='text'
          placeholder='Enter Address Line1'
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Address Line 2</Form.Label>
        <Form.Control
          name='addressLine2'
          value={state.addressLine2}
          type='text'
          placeholder='Enter email'
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Form.Group controlId='formBasicCity'>
        <Form.Label>City</Form.Label>
        <Form.Control
          name='city'
          value={state.city}
          onChange={(e) => {
            props.handleChange(e);
          }}
          type='text'
          placeholder='City'
        />
      </Form.Group>

      <Form.Group controlId='formBasicState'>
        <Form.Label>State</Form.Label>
        <Form.Control
          type='text'
          placeholder='State'
          name='State'
          value={state.State}
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Form.Group controlId='formBasicPostalCode'>
        <Form.Label>Postal Code</Form.Label>
        <Form.Control
          type='text'
          placeholder='Postal Code'
          name='postalCode'
          value={state.state}
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Form.Group controlId='formBasicCountry'>
        <Form.Label>Country</Form.Label>
        <Form.Control
          type='text'
          placeholder='Country'
          name='country'
          value={state.country}
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Experience Year</Form.Label>
        <Form.Control
          type='text'
          placeholder='Experience Year'
          name='experienceYear'
          value={state.experienceYear}
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Form.Group controlId='formBasicEmail'>
        <Form.Label>Experience Month</Form.Label>
        <Form.Control
          type='text'
          placeholder='Experience Month'
          name='experienceMonth'
          value={state.experienceMonth}
          onChange={(e) => {
            props.handleChange(e);
          }}
        />
      </Form.Group>

      <Button variant='primary' onClick={() => props.nextStep()}>
        Next
      </Button>
    </div>
  );
};

export default Personal;
