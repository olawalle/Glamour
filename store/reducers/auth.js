import { UPDATE_SIGNUP_FORM, UPDATE_LOGIN_FORM, UPDATE_PROVIDER_SIGNUP_FORM } from '../actions/types';

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
  providerSignup: {
    description: "",
    email: "",
    fullnames: "",
    meta: "",
    mileRadius: "",
    password: "",
    phone: "",
    postcode: "",
    referral: "",
    schedules: [],
    service: []
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
    case UPDATE_PROVIDER_SIGNUP_FORM: {
      return {
        ...state,
        providerSignup: {
          ...state.providerSignup,
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