import React, { Component } from 'react';
import ContactForm from '../ContactForm';
import { connect } from 'react-redux';
import { submitFormStart } from '../../actions';

class Contact extends Component {
  submit = ((values, dispatch) => {
    console.log('in submit function in Contact: ', values);
    dispatch(submitFormStart(values));
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