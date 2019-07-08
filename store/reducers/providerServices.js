import { SAVE_PROVIDER_SERVICES } from '../actions/types';

const INITIAL_STATE = []

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case SAVE_PROVIDER_SERVICES: {
      return payload
    }
    default:
     return state
  }

}