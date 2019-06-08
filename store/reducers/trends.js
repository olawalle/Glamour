import { ADD_TRENDS, SET_LOADING_TRENDS } from '../actions/types';

const INITIAL_STATE = {
  beautyTrends: {
    byId: [],
    allTrends: {
    },
    loadingTrends: false
  }
}

export default function (state = INITIAL_STATE, { type, payload }) {

  switch (type) {
    case SET_LOADING_TRENDS: {
      return {
        ...state,
        ...{
          beautyTrends: {
            ...state.beautyTrends,
            loadingTrends: payload
          }
        }
      }
    }
    case ADD_TRENDS: {
      let byId = [];
      let allTrends = {};

      payload.forEach((trends, i) => {
        byId.push(i)
        allTrends[i] = {...trends, img: trends.pictureUrl, name: trends.trendName}
      })

      return {
        ...state,
        ...{
          beautyTrends: {
            ...state.beautyTrends,
            byId,
            allTrends
          }
        }
      }
    }
    default:
     return state
  }

}