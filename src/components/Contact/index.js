import React, { Component } from 'react';
import ContactForm from '../ContactForm';
import { connect } from 'react-redux';
import { submitFormStart } from '../../actions';

class Contact extends Component {
  submit = values => {
    console.log(values);
    submitFormStart(values);
  }
  render() {
    return (
      <div>
        <ContactForm onSubmut={this.submit}/>
      </div>
    );
  }
}

export default connect(null, { submitFormStart })(Contact);