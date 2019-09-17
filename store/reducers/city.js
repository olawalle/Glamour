import { SAVE_CITIES } from '../actions/types';

const INITIAL_STATE = []

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case SAVE_CITIES: {
        return payload
    }
    default:
     return state
  }

}