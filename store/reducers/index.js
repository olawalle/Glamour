import { combineReducers } from 'redux';

// IMPORT REDUCERS HERE
import userReducer from '../reducers/user';
import authReducer from '../reducers/auth';
import teamReducer from '../reducers/team';

let rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  team: teamReducer
});

export default rootReducer;
