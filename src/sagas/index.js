import { takeEvery } from 'redux-saga/effects';
import {
  GET_WEBSITES_START,
  SUBMIT_FORM_TO_SERVER_START,
 } from '../actions';
import websitesSaga from './websites';
import { sendMessageSaga } from './contact';

export default function* rootSaga() {
  yield takeEvery(GET_WEBSITES_START, websitesSaga);
  yield takeEvery(SUBMIT_FORM_TO_SERVER_START, sendMessageSaga);

}
