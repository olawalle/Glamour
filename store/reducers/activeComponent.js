import { SAVE_ACTIVE_COMPONENT } from '../actions/types';

const INITIAL_STATE = {
  activeComponent: "Personal details"
}

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case SAVE_ACTIVE_COMPONENT: {
        return {
          activeComponent: payload
        }
    }
    default:
     return state
  }

}