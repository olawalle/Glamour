// import { ADD_TRENDS, SET_LOADING_TRENDS } from '../actions/types';

// const INITIAL_STATE = {
//   byId: [1, 2, 3, 4, 5, 6],
//   allTopTrends: {
//     1: {
//       img: '/static/images/trends/trend1.png',
//       name: 'Trend One',
//     },
//     2: {
//       img: '/static/images/trends/trend2.png',
//       name: 'Trend Two',
//     },
//     3: {
//       img: '/static/images/trends/trend3.png',
//       name: 'Trend Three',
//     },
//     4: {
//       img: '/static/images/trends/trend4.png',
//       name: 'Trend Four',
//     },
//     5: {
//       img: '/static/images/trends/trend5.png',
//       name: 'Trend Five',
//     },
//     6: {
//       img: '/static/images/trends/trend6.png',
//       name: 'Trend Six',
//     },
//   },
//   loadingTrends: false
// }

// export default function (state = INITIAL_STATE, { type, payload }) {

//   switch (type) {
//     case SET_LOADING_TRENDS: {
//       return {
//         ...state,
//         loadingTrends: payload
//       }
//     }
//     case ADD_TRENDS: {
//       let byId = [];
//       let allTopTrends = {};

//       payload.forEach((trend) => {
//         byId = [
//           ...byId,
//           trend.id
//         ]
//         allTopTrends = {
//           ...allTopTrends,
//           [trend.id]: trend
//         }
//       })

//       return { byId, allTopTrends }
//     }
//     default:
//      return state
//   }

// }