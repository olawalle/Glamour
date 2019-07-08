import { SUBSCRIBE_TO_SERVICE, UNSUBSCRIBE_TO_SERVICE, SELECTED_PROVIDER } from '../actions/types';

const INITIAL_STATE = {
  selectedProvider: {},
  subscribedServices: []
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
    default:
     return state
  }

}