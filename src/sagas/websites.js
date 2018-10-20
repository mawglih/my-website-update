import {
  call,
  put,
} from 'redux-saga/effects';
import axios from 'axios';
import {
  GET_WEBSITES_SUCCESS,
} from '../actions';

const URL = 'http://web-server.oleg-dev.com:9090/get-websitess';

export default function* websitesSaga() {
  const response = yield call(axios, URL);
  yield put({
    type: GET_WEBSITES_SUCCESS,
    payload: response.data,
  });
}
