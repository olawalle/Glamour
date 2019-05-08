import { SUBSCRIBE_TO_SERVICE, UNSUBSCRIBE_TO_SERVICE, SELECTED_PROVIDER } from '../actions/types';

const INITIAL_STATE = {
  selectedProvider: {},
  subscribedServices: []
}

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case SUBSCRIBE_TO_SERVICE: {
        let check = state.subscribedServices.find(service => service.title === payload.title)
        if (check === undefined) {
            let newState = [...state.subscribedServices, payload]
            return {
                ...state,
                subscribedServices: newState
            }
        } else {
            return state
        }
    }
    case UNSUBSCRIBE_TO_SERVICE: {
        let newState = state.subscribedServices.filter(service => service.title !== payload)
        return {
            ...state,
            subscribedServices: newState
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