export const GET_WEBSITES_START = 'GET_WEBSITES_START';
export const GET_WEBSITES_SUCCESS = 'GET_WEBSITES_SUCCESS';
export const GET_WEBSITES_FAILURE = 'GET_WEBSITES_FAILURE';
export const SET_TEXT_FILTER = 'SET_TEXT_FILTER';
export const SUBMIT_FORM_TO_SERVER_START = 'SUBMIT_FORM_TO_SERVER_START';
export const SUBMIT_FORM_TO_SERVER_SUCESS = 'SUBMIT_FORM_TO_SERVER_SUCESS';
export const SUBMIT_FORM_TO_SERVER_FAILURE = 'SUBMIT_FORM_TO_SERVER_FAILURE';

export const getWebsitesStart = () => (
  {
    type: GET_WEBSITES_START,
  }
);

export const getWebsitesSuccess = ({ payload }) => (
  {
    type: GET_WEBSITES_SUCCESS,
    payload,
  }
);

export const getWebsitesFailure = ({ payload }) => (
  {
    type: GET_WEBSITES_FAILURE,
    error: payload,
  }
);

export const setTextFilter = (text) => {
  return{
    type: SET_TEXT_FILTER,
    payload: text,
  };
};

export const submitFormStart = ({ payload }) => {
  return{
    type: SUBMIT_FORM_TO_SERVER_START,
    payload,
  };
};

export const submitFormSuccess = ({ payload }) => {
  return{
    type: SUBMIT_FORM_TO_SERVER_SUCESS,
    payload,
  };
};

export const submitFormFailure = ({ payload }) => {
  return{
    type: SUBMIT_FORM_TO_SERVER_FAILURE,
    error: payload,
  };
};