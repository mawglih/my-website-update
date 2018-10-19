import React, { Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
// import { connect } from 'react-redux';
import { submitFormStart } from '../../actions';
import './ContactForm.css';

const renderInputField = (field) => (
  <div className="contactField">
    <label>{field.label}</label>
    <input
      type={field.type}
      className={`inputField ${field.meta.error && field.meta.touched ? 'has-error' : null}`}
      {...field.input}
    />
    <div className="text-error">
      {field.meta.touched ? field.meta.error : ''}
    </div>
  </div>
);

const ContactForm = ({
  handleSubmit,
  onSubmit,
}) => (
  <Fragment>
    <form
      className="contactForm"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Field
        label="Your name"
        name="name"
        type="text"
        component={renderInputField}
        placeholder="Enter your name"
      />
      <Field
        label="Your email"
        name="email"
        type="email"
        component={renderInputField}
        placeholder="Enter your email"
      />
      <Field
        label="Your message"
        name="message"
        type="text"
        component={renderInputField}
        placeholder="Enter your message"
      />
      <button type="submit" className="button submitButton">
        Submit
      </button>
      <button type="reset" className="button cancelButton">
        Cancel
      </button>
    </form>
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
})(ContactForm);
