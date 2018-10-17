import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import websites from './websites';
import search from './search';

export default combineReducers({
  form: formReducer,
  websites,
  search,
});
