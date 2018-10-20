import React, { Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
import {
  InputComponent,
  TextAreaComponent,
  SelectComponent,
  CheckboxGroupComponent,
  RadioComponent,
} from '../FormComponents';
import Button from '@material-ui/core/Button';
import './ContactForm.css';

const Area = [
  'Build a website',
  'Hire for a job',
  'I just like to send emails',
];

const Gender = [
  {name: 'Male', value: 'male'},
  {name: 'Female', value: 'female'},
  {name: 'other', value: 'other'},
];

const CheckInterest = [
  {name: 'Dance', value: 'dance'},
  {name: 'Scuba', value: 'scuba'},
  {name: 'Bike', value: 'bike'},
  {name: 'Wine', value: 'wine'},
  {name: 'Rockclimbing', value: 'rock'},
  {name: 'Swimming', value: 'swim'},
];

const ContactForm = ({
  handleSubmit,
  onSubmit,
  valid,
  pristine,
  reset,
}) => (
  <Fragment>
    <h2 className="formTitle">Please fill out the form to get started</h2>
    <div className="contactForm">
      <form
        onSubmit={handleSubmit(onSubmit)}
      >
        <Field
          label="Your name"
          name="name"
          type="text"
          component={InputComponent}
          placeholder="Enter your name"
        />
        <Field
          label="Your email"
          name="email"
          type="email"
          component={InputComponent}
          placeholder="Enter your email"
        />
        <Field
          label="Subject"
          name="subject"
          type="text"
          component={InputComponent}
          placeholder="Enter your subject"
        />
        {/* <legend>Gender</legend> */}
        <Field
          name="sex"
          options={Gender}
          component={RadioComponent}
        />
        <Field
          label="Select your area of interest"
          name="area"
          component={SelectComponent}
          options={Area}
          labelWidth={0}
        />
        <Field
          label="Select your favorite"
          name="interests"
          options={CheckInterest}
          component={CheckboxGroupComponent}
        />
        <Field
          label="Your message"
          name="message"
          type="text"
          component={TextAreaComponent}
          placeholder="Enter your message"
        />
        <Button
          variant="extendedFab"
          color="primary"
          type="submit"
          className="button"
          disabled={!valid || pristine}
        >
          Submit
        </Button>
        <Button
          variant="extendedFab"
          color="secondary"
          type="button" 
          onClick={reset}
          className="button"
        >
          Cancel
        </Button>
      </form>
    </div>
    
  </Fragment>
);

function validate(values) {
  const errors = {};
  if (!values.name || values.name.length < 2) {
    errors.name = "Enter the name at least 3 charachters long!";
  }
  if ( !values.email) {
    errors.email = "Enter your email!";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'contactForm',
  enableReinitialize: true,
})(ContactForm);
