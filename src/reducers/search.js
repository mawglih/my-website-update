import {
  SET_TEXT_FILTER,
} from '../actions';

const INITIAL_STATE = {
  filter: '',
};

export default (state = INITIAL_STATE, {type, payload} ) => {
  switch(type) {
    case SET_TEXT_FILTER:
      return {
        ...state,
        filter: payload,
      };
    default:
      return state;
  }
};