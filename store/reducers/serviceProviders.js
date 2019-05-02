import { SAVE_SERVICE_PROVIDERS } from '../actions/types';

const INITIAL_STATE = {
  allProviders: [
    {
      banner: '/static/images/services/hair.png',
      userPhoto: '/static/images/team/teammember1.png',
      name: 'Bellinda Sullivan',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 3,
      id: '1',
      instant: true, ratingsCount: 16
    },
    {
      banner: '/static/images/services/hair.png',
      userPhoto: '/static/images/team/teammember3.png',
      name: 'Bellinda Sullivan',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 3,
      id: '2',
      instant: false, ratingsCount: 12
    },
    {
      banner: '/static/images/services/massage.png',
      userPhoto: '/static/images/team/teammember5.png',
      name: 'Bellinda Sullivan',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 5,
      id: '3',
      instant: true, ratingsCount: 14
    },
    {
      banner: '/static/images/services/nails.png',
      userPhoto: '/static/images/team/teammember2.png',
      name: 'Bellinda Sullivan',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 2,
      id: '4',
      instant: false, ratingsCount: 3
    },
    {
      banner: '/static/images/services/hair.png',
      userPhoto: '/static/images/team/teammember4.png',
      name: 'Bellinda Sullivan',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 5,
      id: '5',
      instant: false, ratingsCount: 12
    },
    {
      banner: '/static/images/services/body.png',
      userPhoto: '/static/images/team/teammember1.png',
      name: 'Bellinda Sullivan',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 1,
      id: '6',
      instant: true, ratingsCount: 23
    }
  ]
}

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case SAVE_SERVICE_PROVIDERS: {
      return {
        ...state
      }
    }
    default:
     return state
  }

}