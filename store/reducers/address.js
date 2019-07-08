import { SAVE_ADDRESSES, SELECT_ACTIVE_ADDRESS } from '../actions/types';

const INITIAL_STATE = {
  addressList: [],
  activeAddress: ''
}

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case SAVE_ADDRESSES: {
        return {
            ...state,
            addressList: payload
        }
    }
    case SELECT_ACTIVE_ADDRESS: {
        return {
            ...state,
            activeAddress: payload
        }
    }
    default:
     return state
  }

}