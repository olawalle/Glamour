import { ADD_TESTIMONIALS, SET_LOADING_TESTIMONIALS } from '../actions/types';

const INITIAL_STATE = {
  all: [
    {
      img: '/static/images/team/teammember3.png',
      city: 'London',
      fullname: 'Melissa McCarthy',
      testimony: `“They're using our own satellites against us. And the clock is ticking.
      They're using our own satellites against us.
      And the clock is ticking. Just my luck, no ice.
      God help us, we're in the hands of engineers.”`,
    },
    {
      img: '/static/images/team/teammember7.png',
      city: 'Bristol',
      fullname: 'Linda Florentine',
      testimony: `“So you two dig up, dig up dinosaurs? Yeah,
      but your scientists were so preoccupied with whether or not they could,
      they didn't stop to think if they should.”`,
    },
    {
      img: '/static/images/team/teammember2.png',
      city: 'Manchester',
      fullname: 'Julie Tarantino',
      testimony: `“Life finds a way. What do they got in there? King Kong?
      Eventually, you do plan to have dinosaurs on your dinosaur tour, right?
      They're using our own satellites against us. And the clock is ticking.”`,
    },
    {
      img: '/static/images/team/teammember8.png',
      city: 'London',
      fullname: 'Melissa McCarthy',
      testimony: `“They're using our own satellites against us. And the clock is ticking.
      They're using our own satellites against us.
      And the clock is ticking. Just my luck, no ice.
      God help us, we're in the hands of engineers.”`,
    },
    {
      img: '/static/images/team/teammember4.png',
      city: 'Bristol',
      fullname: 'Linda Florentine',
      testimony: `“So you two dig up, dig up dinosaurs? Yeah,
      but your scientists were so preoccupied with whether or not they could,
      they didn't stop to think if they should.”`,
    },
    {
      img: '/static/images/team/teammember5.png',
      city: 'Manchester',
      fullname: 'Julie Tarantino',
      testimony: `“Life finds a way. What do they got in there? King Kong?
      Eventually, you do plan to have dinosaurs on your dinosaur tour, right?
      They're using our own satellites against us. And the clock is ticking.”`,
    },
    {
      img: '/static/images/team/teammember7.png',
      city: 'London',
      fullname: 'Melissa McCarthy',
      testimony: `“They're using our own satellites against us. And the clock is ticking.
      They're using our own satellites against us.
      And the clock is ticking. Just my luck, no ice.
      God help us, we're in the hands of engineers.”`,
    },
  ],
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
      return payload
    }
    default:
     return state
  }

}