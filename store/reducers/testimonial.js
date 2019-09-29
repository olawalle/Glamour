import { ADD_TESTIMONIALS, SET_LOADING_TESTIMONIALS } from '../actions/types';

const INITIAL_STATE = {
  all: [
    {
      pictureUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
      location: 'London',
      fullname: 'Melissa McCarthy',
      body: `“They're using our own satellites against us. And the clock is ticking.
      They're using our own satellites against us.
      And the clock is ticking. Just my luck, no ice.
      God help us, we're in the hands of engineers.”`,
    },
    {
      pictureUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
      location: 'Bristol',
      fullname: 'Linda Florentine',
      body: `“So you two dig up, dig up dinosaurs? Yeah,
      but your scientists were so preoccupied with whether or not they could,
      they didn't stop to think if they should.”`,
    },
    {
      pictureUrl: 'https://randomuser.me/api/portraits/women/25.jpg',
      location: 'Manchester',
      fullname: 'Julie Tarantino',
      body: `“Life finds a way. What do they got in there? King Kong?
      Eventually, you do plan to have dinosaurs on your dinosaur tour, right?
      They're using our own satellites against us. And the clock is ticking.”`,
    },
    {
      pictureUrl: 'https://randomuser.me/api/portraits/women/13.jpg',      
      location: 'London',
      fullname: 'Melissa McCarthy',
      body: `“They're using our own satellites against us. And the clock is ticking.
      They're using our own satellites against us.
      And the clock is ticking. Just my luck, no ice.
      God help us, we're in the hands of engineers.”`,
    },
    {
      pictureUrl: 'https://randomuser.me/api/portraits/women/25.jpg',      
      location: 'Bristol',
      fullname: 'Linda Florentine',
      body: `“So you two dig up, dig up dinosaurs? Yeah,
      but your scientists were so preoccupied with whether or not they could,
      they didn't stop to think if they should.”`,
    },
    {
      pictureUrl: 'https://randomuser.me/api/portraits/women/25.jpg',      
      location: 'Manchester',
      fullname: 'Julie Tarantino',
      body: `“Life finds a way. What do they got in there? King Kong?
      Eventually, you do plan to have dinosaurs on your dinosaur tour, right?
      They're using our own satellites against us. And the clock is ticking.”`,
    },
    {
      pictureUrl: 'https://randomuser.me/api/portraits/women/25.jpg',      
      location: 'London',
      fullname: 'Melissa McCarthy',
      body: `“They're using our own satellites against us. And the clock is ticking.
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