import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

// INITAL STATE OF STORE
const INITIAL_STATE = {

}


// const r = () => {
//   return window.localStorageocalStorage.getItem('store') ? JSON.parse(localStorage.getItem('store')) : {}
// }


export function initStore (initialState = INITIAL_STATE) {
  return createStore(
    rootReducer,
    initialState,
    composeWithDevTools(
      applyMiddleware(
        reduxThunk,
        reduxPromise
      )
    )
  )
}


// GETTERS
export const getUserData = (state) => {
  return state.user
}

export const getTeamMembers = (state) => {
  return state.team.byId.map((id) => state.team.allMembers[id])
}

export const getProviders = (state) => {
  return state.serviceProviders.allProviders
}

export const getTopTrends = (state) => {
  return state.trend.beautyTrends.byId.map((id) => state.trend.beautyTrends.allTrends[id])
}

export const getTestimonials = (state) => {
  return state.testimonial.all
}

export const getNotifications = (state) => {
  return state.notifications.byId.map((id) => state.notifications.allNotifications[id])
}

export const getNotificationReview = (state) => {
  return state.notifications.review;
}

export const getIsWritingReview = (state) => {
  return state.notifications.isWritingReview;
}

export const getBeautyServices = (state) => {
  return state.service.beautyServices.byId.map((id) => state.service.beautyServices.allServices[id])
}

export const getCartItems = (state) => {
  return state.cart.cartItemIds.map(id => state.cart.cartItems[id])
}

export const getBookings = (state) => {
  return state.bookings.bookedItemIds.map(id => state.bookings.bookedItems[id])
}