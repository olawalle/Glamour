import { ADD_SERVICES, SET_LOADING_SERVICES } from '../actions/types';

const INITIAL_STATE = {
  beautyServices: {
    byId: [1, 2, 3, 4, 5, 6],
    allServices: {
      1: {
        img: '/static/images/services/hair.png',
        name: 'Hair',
      },
      2: {
        img: '/static/images/services/hair removal.png',
        name: 'Hair Removal',
      },
      3: {
        img: '/static/images/services/massage.png',
        name: 'Massage',
      },
      4: {
        img: '/static/images/services/nails.png',
        name: 'Nails',
      },
      5: {
        img: '/static/images/services/face.png',
        name: 'Face',
      },
      6: {
        img: '/static/images/services/body.png',
        name: 'Body',
      }
    },
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

      payload.forEach((service) => {
        byId = [
          ...byId,
          service.id
        ]
        allServices = {
          ...allServices,
          [service.id]: service
        }
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