import * as types from './types'

// IMPORT SERVICES HERE


// ACTION CREATORS GOES HERE../../services/post

export const serverRenderAction = () => {
}

export const updateSignupForm = (payload) => {
  return {
    type: types.UPDATE_SIGNUP_FORM,
    payload
  }
}

export const updateLoginForm = (payload) => {
  return {
    type: types.UPDATE_LOGIN_FORM,
    payload
  }
}

export const setIsWritingReview = (payload) => {
  return {
    type: types.SET_WRITING_REVIEW,
    payload
  }
}

export const updateReview = (payload) => {
  return {
    type: types.SET_REVIEW,
    payload
  }
}