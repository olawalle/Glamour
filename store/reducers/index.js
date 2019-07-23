import { combineReducers } from 'redux';

// IMPORT REDUCERS HERE
import userReducer from '../reducers/user';
import authReducer from '../reducers/auth';
import teamReducer from '../reducers/team';
import serviceReducer from '../reducers/service';
import trendReducer from '../reducers/trends';
import testimonialReducer from '../reducers/testimonial';
import notificationReducer from '../reducers/notification';
import serviceProviders from '../reducers/serviceProviders';
import subscribedServicesReducer from '../reducers/subscribedServices'
import cartReducer from '../reducers/cart';
import providerServices from '../reducers/providerServices'
import bookingsReducer from '../reducers/bookings';
import addressReducer from '../reducers/address';
import providerLookbookReducer from '../reducers/providerLookbook'
import subscriptionsReducer from '../reducers/subscriptions'
import activeComponentReducer from '../reducers/activeComponent'

let rootReducer = combineReducers({
  user: userReducer,
  auth: authReducer,
  team: teamReducer,
  serviceProviders: serviceProviders,
  service: serviceReducer,
  providerServices: providerServices,
  trend: trendReducer,
  testimonial: testimonialReducer,
  notifications: notificationReducer,
  subscribedServices: subscribedServicesReducer,
  cart: cartReducer,
  bookings: bookingsReducer,
  addresses: addressReducer,
  providerLookbook: providerLookbookReducer,
  subscriptions: subscriptionsReducer,
  activeComponent: activeComponentReducer
});

export default rootReducer;
