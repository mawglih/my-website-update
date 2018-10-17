export const GET_WEBSITES_START = 'GET_WEBSITES_START';
export const GET_WEBSITES_SUCCESS = 'GET_WEBSITES_SUCCESS';
export const GET_WEBSITES_FAILURE = 'GET_WEBSITES_FAILURE';
export const SET_TEXT_FILTER = 'SET_TEXT_FILTER';

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