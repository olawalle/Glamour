import { SAVE_AVAILABLE_SUBSCRIPTIONS, SAVE_FULL_FAVED_PROVIDERS } from '../actions/types';

const INITIAL_STATE = {
  availableSubscriptions: [],
}

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case SAVE_AVAILABLE_SUBSCRIPTIONS: {
      return {...state, availableSubscriptions: payload}
    }
    default:
     return state
  }
}