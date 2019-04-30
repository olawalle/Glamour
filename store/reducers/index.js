import { combineReducers } from 'redux';

// IMPORT REDUCERS HERE
import userReducer from '../reducers/user';
import authReducer from '../reducers/auth';
import teamReducer from '../reducers/team';
import serviceReducer from '../reducers/service';
import trendReducer from '../reducers/trend';
import testimonialReducer from '../reducers/testimonial';

let rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  team: teamReducer,
  service: serviceReducer,
  trend: trendReducer,
  testimonial: testimonialReducer,
});

export default rootReducer;
