import { ADD_TEAM_MEMBERS, SET_LOADING_MEMBERS } from '../actions/types';

const INITIAL_STATE = {
  byId: [1, 2, 3, 4, 5, 7, 8, 9],
  allMembers: {
    1: {
      img: '/static/images/team/teammember1.png',
      name: 'Name of team member',
      designation: 'designation'
    },
    2: {
      img: '/static/images/team/teammember2.png',
      name: 'Name of team member',
      designation: 'designation'
    },
    3: {
      img: '/static/images/team/teammember3.png',
      name: 'Name of team member',
      designation: 'designation'
    },
    4: {
      img: '/static/images/team/teammember4.png',
      name: 'Name of team member',
      designation: 'designation'
    },
    5: {
      img: '/static/images/team/teammember5.png',
      name: 'Name of team member',
      designation: 'designation'
    },
    7: {
      img: '/static/images/team/teammember7.png',
      name: 'Name of team member',
      designation: 'designation'
    },
    8: {
      img: '/static/images/team/teammember8.png',
      name: 'Name of team member',
      designation: 'designation'
    },
    9: {
      img: '/static/images/team/teammember9.png',
      name: 'Name of team member',
      designation: 'designation'
    },
  },
  loadingMembers: false
}

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case SET_LOADING_MEMBERS: {
      return {
        ...state,
        loadingMembers: payload
      }
    }
    case ADD_TEAM_MEMBERS: {
      let byId = [];
      let allMembers = {};

      payload.forEach((member) => {
        byId = [
          ...byId,
          member.id
        ]
        allMembers = {
          ...allMembers,
          [member.id]: member
        }
      })

      return { byId, allMembers }
    }
    default:
     return state
  }

}