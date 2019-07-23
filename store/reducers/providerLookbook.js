import { SAVE_LOOKBOOK } from '../actions/types';

const INITIAL_STATE = {
  looks: []
}

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case SAVE_LOOKBOOK: {
      return payload
    }
    default:
     return state
  }

}