
import { SAVE_USER_DATA, SAVE_LOGGEDIN_STATUS } from '../actions/types';

const INITIAL_STATE = {
    token: '',
    user: {
        createdAt: "",
        email: "",
        fullname: "",
        phone: "",
        role: ""
    },
    isLoggedIn: false
}

export default function (state = INITIAL_STATE, action) {
    
  switch (action.type) {
    case SAVE_USER_DATA: {
      console.log(action)
      return {
        ...state, 
        ...action.payload
      }
    }
    default:
      return state
  }
}