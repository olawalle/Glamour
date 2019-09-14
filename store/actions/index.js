import * as types from './types'

// IMPORT SERVICES HERE


// ACTION CREATORS GOES HERE../../services/post

export const saveUserData = (payload) => {
  return {
    type: types.SAVE_USER_DATA,
    payload
  }
}

export const saveLoggedinStatus = (payload) => {
  return {
    type: types.SAVE_LOGGEDIN_STATUS,
    payload
  }
}

export const serverRenderAction = () => {
}

export const saveServices = (payload) => {
  return {
    type: types.ADD_SERVICES,
    payload
  }  
}

export const saveTrends = (payload) => {
  return {
    type: types.ADD_TRENDS,
    payload
  }  
}

export const saveProviders = (payload) => {
  return {
    type: types.SAVE_SERVICE_PROVIDERS,
    payload
  }
}

export const updateSignupForm = (payload) => {
  return {
    type: types.UPDATE_SIGNUP_FORM,
    payload
  }
}

export const updateProviderSignupForm = (payload) => {
  return {
    type: types.UPDATE_PROVIDER_SIGNUP_FORM,
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

export const selectProvider = (payload) => {
  return {
    type: types.SELECTED_PROVIDER,
    payload
  }
}

export const removeCartItem = (payload) => {
  return {
    type: types.REMOVE_CART_ITEM,
    payload
  }
}

export const addCartItem = (payload) => {
  return {
    type: types.ADD_CART_ITEM,
    payload
  }
}


export const saveUserNotifications = (payload) => {
  return {
    type: types.ADD_NOTIFICATIONS,
    payload
  }
}

export const saveProviderServices = (payload) => {
  return {
    type: types.SAVE_PROVIDER_SERVICES,
    payload
  }
}

export const saveUserAddresses = (payload) => {
  return {
    type: types.SAVE_ADDRESSES,
    payload
  }
}

export const saveActiveAddress = (payload) => {
  return {
    type: types.SELECT_ACTIVE_ADDRESS,
    payload
  }
}

export const saveUserBookings = (payload) => {
  return {
    type: types.SAVE_USER_BOOKINGS,
    payload
  }
}

export const saveUserLookbook = (payload) => {
  return {
    type: types.SAVE_LOOKBOOK,
    payload
  }
}

export const pickServiceTime = (payload) => {
  return {
    type: types.SELECTED_TIME,
    payload
  }
}

export const saveFavedProviders = (payload) => {
  return {
    type: types.SAVE_FAVED_PROVIDERS,
    payload
  }
}

export const saveFullFavedProviders = (payload) => {
  return {
    type: types.SAVE_FULL_FAVED_PROVIDERS,
    payload
  }
}


export const saveAvailableSubscriptions = (payload) => {
  return {
    type: types.SAVE_AVAILABLE_SUBSCRIPTIONS,
    payload
  }
}

export const saveUserSubscriptions = (payload) => {
  return {
    type: types.SAVE_USER_SUBSCRIPTIONS,
    payload
  }
}

export const saveUserInvoices = (payload) => {
  return {
    type: types.SAVE_USER_INVOICES,
    payload
  }
}

export const saveActiveComponent = (payload) => {
  return {
    type: types.SAVE_ACTIVE_COMPONENT,
    payload
  }
}

export const saveCities = (payload) => {
  return {
    type: types.SAVE_CITIES,
    payload
  }
}