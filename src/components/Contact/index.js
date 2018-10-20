import React, { Component } from 'react';
import ContactForm from '../ContactForm';
import { connect } from 'react-redux';
import { reset } from 'redux-form';
import { submitFormStart } from '../../actions';

class Contact extends Component {
  submit = ((values, dispatch) => {
    dispatch(submitFormStart(values));
    dispatch(reset('contactForm'));
  });

  render() {
    return (
      <div>
        <ContactForm onSubmit={this.submit}/>
      </div>
    );
  }
}

export default connect(null, { submitFormStart })(Contact);