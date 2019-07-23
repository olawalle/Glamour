import { ADD_NOTIFICATIONS, SET_LOADING_NOTIFICATIONS, SET_WRITING_REVIEW, SET_REVIEW } from '../actions/types';
import dayjs from 'dayjs';

const INITIAL_STATE = {
  byId: [],
  allNotifications: {},
  review: {
    stars: 0,
    experience: '',
    user: {
      id: null,
      name: '',
      avatar: ''
    }
  },
  loadingNotifications: false,
  isWritingReview: false
}

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {

    case SET_LOADING_NOTIFICATIONS: {
      return {
        ...state,
        loadingNotifications: payload
      }
    }

    case SET_REVIEW: {
      return {
        ...state,
        review: payload
      }
    }

    case SET_WRITING_REVIEW: {
      return {
        ...state,
        isWritingReview: payload
      }
    }

    case ADD_NOTIFICATIONS: {
      let byId = [];
      let allNotifications = {};
      console.log(payload)

      payload.forEach((notification) => {
        byId = [
          ...byId,
          notification._id
        ]
        allNotifications = {
          ...allNotifications,
          [notification._id]: notification
        }
      })

      return {
        ...state,
        byId,
        allNotifications
      }
    }

    default:
     return state
  }

}