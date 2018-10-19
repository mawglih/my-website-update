import {
  call,
  put,
  select,
  takeLatest,
} from 'redux-saga/effects';
import { postData } from '../utiliity';
import { submitFormStart, SUBMIT_FORM_TO_SERVER_SUCESS } from '../actions';

export function* sendMessageSaga() {
  const obj = yield select(submitFormStart);
  const data = obj.payload.contact.data;
  yield console.log('saga data: ', data);
  const response = yield call(postData, data);
  yield console.log('contact saga error: ', response.error);
  yield put({
    type: SUBMIT_FORM_TO_SERVER_SUCESS,
    payload: response.data,
  });
}

export default takeLatest(sendMessageSaga);