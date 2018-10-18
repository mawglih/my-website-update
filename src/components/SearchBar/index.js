import React, { Fragment } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import {
  setTextFilter,
} from '../../actions';
import './SearchBar.css'

const SearchBar = () => (
  <Fragment>
    <form>
      <Field
        name="Test"
        type="text"
        component="input"
        placeholder="filter by title or framework"
        className="searchInput"
      />
    </form>
  </Fragment>
);


export default connect()(reduxForm({
  form: 'inputForm',
  onChange: (values, dispatch) => {
    console.log('form values are: ', values.Test);
    dispatch(setTextFilter(values.Test));
  },
})(SearchBar));