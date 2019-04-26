import { UPDATE_SIGNUP_FORM } from '../actions/types';

const INITIAL_STATE = {
  signup: {
    fullname: null,
    email: null,
    address: null,
    mobileNumber: null,
    password: null,
    referral: null,
    accept: false
  },
  login: {

  }
}

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case UPDATE_SIGNUP_FORM: {
      return {
        ...state,
        signup: {
          ...state.signup,
          ...payload
        }
      }
    }
    default:
     return state
  }

}