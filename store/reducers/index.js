import { combineReducers } from 'redux';

// IMPORT REDUCERS HERE
import userReducer from '../reducers/user';

let rootReducer = combineReducers({
  user: userReducer
});


export default rootReducer;
