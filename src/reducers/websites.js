import {
  GET_WEBSITES_SUCCESS,
} from '../actions';

const INITIAL_STATE = {
  links: [],
};

const websiteReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case GET_WEBSITES_SUCCESS:
      return {
        ...state,
        links: payload,
      };
    default:
      return state;
  }
};
export default websiteReducer;
