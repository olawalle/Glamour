import { ADD_SERVICES, SET_LOADING_SERVICES } from '../actions/types';

const INITIAL_STATE = {
  beautyServices: {
    byId: [],
    allServices: [],
    loadingServices: false
  }
}

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case SET_LOADING_SERVICES: {
      return {
        ...state,
        ...{
          beautyServices: {
            ...state.beautyServices,
            loadingServices: payload
          }
        }
      }
    }
    case ADD_SERVICES: {
      let byId = [];
      let allServices = {};

      payload.forEach((service, i) => {
        byId.push(i)
        allServices[i] = {...service, img: service.pictureUrl, name: service.serviceName}
      })

      return {
        ...state,
        ...{
          beautyServices: {
            ...state.beautyServices,
            byId,
            allServices
          }
        }
      }
    }
    default:
     return state
  }

}