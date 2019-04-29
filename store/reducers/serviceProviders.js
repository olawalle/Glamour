import { SAVE_SERVICE_PROVIDERS } from '../actions/types';

const INITIAL_STATE = {
  allProviders: {
    1: {
      banner: '/static/images/team/test.png',
      name: 'Bellinda Sullivan',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 3,
      ratingsCount: 16
    },
    2: {
      banner: '/static/images/team/test.png',
      name: 'Bellinda Sullivan',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 3,
      ratingsCount: 12
    },
    3: {
      banner: '/static/images/team/test.png',
      name: 'Bellinda Sullivan',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 5,
      ratingsCount: 14
    },
    4: {
      banner: '/static/images/team/test.png',
      name: 'Bellinda Sullivan',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 2,
      ratingsCount: 3
    },
    5: {
      banner: '/static/images/team/test.png',
      name: 'Bellinda Sullivan',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 5,
      ratingsCount: 12
    },
    6: {
      banner: '/static/images/team/test.png',
      name: 'Bellinda Sullivan',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 1,
      ratingsCount: 23
    },
  }
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