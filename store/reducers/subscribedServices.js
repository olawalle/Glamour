import { SUBSCRIBE_TO_SERVICE, SELECTED_TIME, SELECTED_PROVIDER } from '../actions/types';

const INITIAL_STATE = {
  selectedProvider: {},
  subscribedServices: [],
  time: ''
}

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case SUBSCRIBE_TO_SERVICE: {
        return {
            ...state,
            subscribedServices: payload
        }
    }
    case SELECTED_PROVIDER: {
        return {
            ...state,
            selectedProvider: payload
        }
    }
    case SELECTED_TIME: {
        return {
            ...state,
            time: payload
        }
    }
    default:
     return state
  }

}