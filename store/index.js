import { composeWithDevTools } from 'redux-devtools-extension';
import reduxThunk from 'redux-thunk';
import reduxPromise from 'redux-promise';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers';

// INITAL STATE OF STORE
const INITIAL_STATE = {

}

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
export const getTeamMembers = (state) => {
  return state.team.byId.map((id) => state.team.allMembers[id])
}

export const getTopTrends = (state) => {
  return state.trend.byId.map((id) => state.trend.allTopTrends[id])
}

export const getTestimonials = (state) => {
  return state.testimonial.all
}

export const getBeautyServices = (state) => {
  return state.service.beautyServices.byId.map((id) => state.service.beautyServices.allServices[id])
}