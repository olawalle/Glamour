import { ADD_NOTIFICATIONS, SET_LOADING_NOTIFICATIONS } from '../actions/types';
import dayjs from 'dayjs';

const INITIAL_STATE = {
  byId: [1, 2, 3, 4, 5, 6],
  allNotifications: {
    1: {
      user: {
        img: '/static/images/team/teammember1.png',
        name: 'Mary Jane',
      },
      body: 'marked the service you booked as done',
      unseen: true,
      date:  dayjs(1556719144900).format('{YYYY} MM-DDTHH A')
    },
    2: {
      user: {
        img: '/static/images/team/teammember2.png',
        name: 'Brittany Mckay',
      },
      body: 'marked the service you booked as done',
      date:  dayjs(1556712144900).format('{YYYY} MM-DDTHH A')
    },
    3: {
      user: {
        img: '/static/images/team/teammember1.png',
        name: 'Mary Jane',
      },
      body: 'marked the service you booked as done',
      date:  dayjs(1556719174900).format('{YYYY} MM-DDTHH A')
    },
    4: {
      user: {
        img: '/static/images/team/teammember2.png',
        name: 'Brittany Mckay',
      },
      body: 'marked the service you booked as done',
      date:  dayjs(1256719144900).format('{YYYY} MM-DDTHH A')
    },
    5: {
      user: {
        img: '/static/images/team/teammember1.png',
        name: 'Mary Jane',
      },
      body: 'marked the service you booked as done',
      date:  dayjs(1556719144000).format('{YYYY} MM-DDTHH A')
    },
    6: {
      user: {
        img: '/static/images/team/teammember2.png',
        name: 'Brittany Mckay',
      },
      body: 'marked the service you booked as done',
      date:  dayjs(15567191334900).format('{YYYY} MM-DDTHH A')
    }
  },
  loadingNotifications: false
}

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {

    case SET_LOADING_NOTIFICATIONS: {
      return {
        ...state,
        loadingNotifications: payload
      }
    }

    case ADD_NOTIFICATIONS: {
      let byId = [];
      let allNotifications = {};

      payload.forEach((notification) => {
        byId = [
          ...byId,
          notification.id
        ]
        allNotifications = {
          ...allNotifications,
          [notification.id]: notification
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