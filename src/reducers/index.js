import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';
import websites from './websites';
import search from './search';

export default combineReducers({
  form: FormReducer,
  websites,
  search,
});
