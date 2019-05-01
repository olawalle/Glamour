import { combineReducers } from 'redux';

// IMPORT REDUCERS HERE
import userReducer from '../reducers/user';
import authReducer from '../reducers/auth';
import teamReducer from '../reducers/team';
import serviceReducer from '../reducers/service';
import trendReducer from '../reducers/trend';
import testimonialReducer from '../reducers/testimonial';
import notificationReducer from '../reducers/notification';
import serviceProviders from '../reducers/serviceProviders'

let rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  team: teamReducer,
  serviceProviders: serviceProviders,
  service: serviceReducer,
  trend: trendReducer,
  testimonial: testimonialReducer,
  notifications: notificationReducer
});

export default rootReducer;
