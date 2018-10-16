import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import websites from './websites';

export default combineReducers({
  form: formReducer,
  websites,
});
