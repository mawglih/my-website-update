import React, { Fragment } from 'react';
import { reduxForm, Field } from 'redux-form';
// import { connect } from 'react-redux';
import { submitFormStart } from '../../actions';
import './ContactForm.css';

const ContactForm = ({
  handleSubmit,
}) => (
  <Fragment>
    <form
      className="contactForm"
      onSubmit={handleSubmit}
    >
      <div>
        <label htmlFor="name">Your Name</label>
        <Field
          name="name"
          type="text"
          component="input"
          placeholder="Enter your name"
          className="contactField"
        />
      </div>
      <div>
        <label htmlFor="email">Your Email</label>
        <Field
          name="email"
          type="email"
          component="input"
          placeholder="Enter your email"
          className="contactField"
        />
      </div>
      <div>
        <label htmlFor="messagee">Your Message</label>
        <Field
          name="message"
          type="text"
          component="textarea"
          placeholder="Enter your message"
          className="contactField"
        />
      </div>
      <button type="submit">
        Submit
      </button>
    </form>
  </Fragment>
);

export default reduxForm({
  form: 'constactForm',
  onSubmit: (values, dispatch) => {
    console.log('contact form: ', values);
    dispatch(submitFormStart(values));
  },
})(ContactForm);
