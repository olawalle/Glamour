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

export const getProviders = (state) => {
  return state.serviceProviders
}