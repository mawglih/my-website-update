import { takeEvery } from 'redux-saga/effects';
import { GET_WEBSITES_START } from '../actions';
import websitesSaga from './websites';

export default function* rootSaga() {
  yield takeEvery(GET_WEBSITES_START, websitesSaga);
}
