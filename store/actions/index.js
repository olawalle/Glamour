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

export const subscribeToService = (payload) => {
  return {
    type: types.SUBSCRIBE_TO_SERVICE,
    payload
  }
}

export const unSubscribeToService = (payload) => {
  return {
    type: types.UNSUBSCRIBE_TO_SERVICE,
    payload
  }
}
export const removeCartItem = (payload) => {
  return {
    type: types.REMOVE_CART_ITEM,
    payload
  }
}