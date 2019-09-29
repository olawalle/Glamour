import { ADD_TESTIMONIALS, SET_LOADING_TESTIMONIALS } from '../actions/types';

const INITIAL_STATE = {
  all: [],
  loadingTestimonials: false
}

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case SET_LOADING_TESTIMONIALS: {
      return {
        ...state,
        loadingTestimonials: payload
      }
    }
    case ADD_TESTIMONIALS: {
      return {
        ...state,
        all: payload
      }
    }
    default:
     return state
  }

}