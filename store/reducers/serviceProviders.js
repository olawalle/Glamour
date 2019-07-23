import { SAVE_SERVICE_PROVIDERS, SAVE_FAVED_PROVIDERS, SAVE_FULL_FAVED_PROVIDERS } from '../actions/types';

const INITIAL_STATE = {
  allProviders: [],
  savedProviders: [],
  savedProvidersFull: []
}

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case SAVE_SERVICE_PROVIDERS: {
      return {
        ...state,
        allProviders: payload
      }
    }
    case SAVE_FAVED_PROVIDERS: {
      let providerDictionary = [...state.allProviders].reduce((obj, item) => {
          obj[item._id] = item
          return obj
      }, {})

      let fullSavedUsersArray = [...payload].map(provider => {
          return providerDictionary[provider.providerId]
      })
      return {...state, savedProviders: payload, savedProvidersFull: fullSavedUsersArray}
    }
    default:
     return state
  }

}