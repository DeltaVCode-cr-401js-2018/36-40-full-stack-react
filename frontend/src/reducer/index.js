import { combineReducers } from 'redux';

import ensembles from './ensembles';
import auth from './auth';

export default combineReducers({
  ensembles,
  auth,
});