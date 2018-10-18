import {
  SUBMIT_FORM_TO_SERVER_START,
} from '../actions';

const INITIAL_STATE = {
  data: {},
};

export default (state = INITIAL_STATE, { type, payload} ) => {
  switch(type) {
    case SUBMIT_FORM_TO_SERVER_START:
      return {
        ...state,
        data: payload,
      };
    default:
    return state;
  }
};
