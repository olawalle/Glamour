import { SAVE_SERVICE_PROVIDERS } from '../actions/types';

const INITIAL_STATE = {
  allProviders: [
    {
      banner: '/static/images/services/hair.png',
      userPhoto: '/static/images/team/teammember1.png',
      name: 'Mary Sullivan',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 3,
      id: '1',
      instant: true, 
      ratingsCount: 16,
      servicesRendered: [
        {
          title: 'something nice',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '40'
        },
        {
          title: 'another nice',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '30mins - 1hr',
          price: '30'
        },
        {
          title: 'hair rolls tasks',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '55'
        },
        {
          title: 'Basket making',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '80'
        }
      ]
    },
    {
      banner: '/static/images/services/hair.png',
      userPhoto: '/static/images/team/teammember3.png',
      name: 'Joy Koke',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 3,
      id: '2',
      instant: false, 
      ratingsCount: 12,
      servicesRendered: [
        {
          title: 'something nice',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '40'
        },
        {
          title: 'another nice',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '30mins - 1hr',
          price: '30'
        }
      ]
    },
    {
      banner: '/static/images/services/massage.png',
      userPhoto: '/static/images/team/teammember5.png',
      name: 'Joan Mariam',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 5,
      id: '3',
      instant: true, 
      ratingsCount: 14,
      servicesRendered: [
        {
          title: 'something nice',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '40'
        },
        {
          title: 'another nice',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '30mins - 1hr',
          price: '30'
        },
        {
          title: 'hair rolls tasks',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '55'
        },
        {
          title: 'Basket making',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '80'
        },
        {
          title: 'hair rolls tasks',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '55'
        },
        {
          title: 'Basket making',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '80'
        }
      ]
    },
    {
      banner: '/static/images/services/nails.png',
      userPhoto: '/static/images/team/teammember2.png',
      name: 'Tom Hanks',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 2,
      id: '4',
      instant: false, 
      ratingsCount: 3,
      servicesRendered: [
        {
          title: 'hair rolls tasks',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '55'
        },
        {
          title: 'Basket making',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '80'
        },
        {
          title: 'hair rolls tasks',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '55'
        }
      ]
    },
    {
      banner: '/static/images/services/hair.png',
      userPhoto: '/static/images/team/teammember4.png',
      name: 'Femi Alade',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 5,
      id: '5',
      instant: false, 
      ratingsCount: 12,
      servicesRendered: [
        {
          title: 'something nice',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '40'
        },
        {
          title: 'another nice',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '30mins - 1hr',
          price: '30'
        },
        {
          title: 'Basket making',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '80'
        },
        {
          title: 'hair rolls tasks',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '55'
        },
        {
          title: 'Basket making',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '80'
        }
      ]
    },
    {
      banner: '/static/images/services/body.png',
      userPhoto: '/static/images/team/teammember1.png',
      name: 'Juile Fraser',
      jobDesc: 'Makeup, Massage',
      description: 'Hey, you know how I\'m, like, always trying to save the planet? Here\'s my chance. ',
      stars: 1,
      id: '6',
      instant: true, 
      ratingsCount: 23,
      servicesRendered: [
        {
          title: 'hair rolls tasks',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '55'
        },
        {
          title: 'Basket making',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '80'
        },
        {
          title: 'hair rolls tasks',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '55'
        },
        {
          title: 'Basket making',
          desc: 'udyf djfviua viusvi isufvid iudvgiu giuvycytsf hvfiubdfiob sh yud cyfcduyfvius isfvs vfiuvfyu dfh dyf df u jf sjhfuysfvuys f',
          duration: '1hr',
          price: '80'
        }
      ]
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