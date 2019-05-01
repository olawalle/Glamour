import { UPDATE_SIGNUP_FORM, UPDATE_LOGIN_FORM } from '../actions/types';

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
    isLoggedIn: false
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
    case UPDATE_LOGIN_FORM: {
      return {
        ...state,
        login: {
          ...state.login,
          ...payload
        }
      }
    }
    default:
     return state
  }

}