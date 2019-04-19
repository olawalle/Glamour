import { combineReducers } from 'redux';

// IMPORT REDUCERS HERE
import userReducer from '../reducers/user';

let rootReducer = combineReducers({
  userReducer
});


export default rootReducer;
