import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import {
  setTextFilter,
} from '../../actions';
import './SearchBar.css'

const SearchBar = ({
  setTextFilter
}) => (
  <Fragment>
    <form onChange={(e) => {
          setTextFilter(e.target.value);
        }}>
      <input
        placeholder="filter by title or frsamework"
        type="text"
        className="searchInput"
      />
    </form>
  </Fragment>
);


 export default connect(null, { setTextFilter })(SearchBar);