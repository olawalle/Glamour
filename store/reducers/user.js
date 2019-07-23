
import { SAVE_USER_DATA, SAVE_LOGGEDIN_STATUS } from '../actions/types';

const INITIAL_STATE = {
    // token: '',
    createdAt: "",
    email: "",
    fullname: "",
    phone: "",
    pictureUrl: '',
    role: "",
    isLoggedIn: false
}

export default function (state = INITIAL_STATE, action) {
    
  switch (action.type) {
    case SAVE_USER_DATA:
      return {...action.payload};

    // case SAVE_LOGGEDIN_STATUS: {
    //   console.log(action.payload)
    //   return {
    //     ...state,
    //     isLoggedIn: action.payload
    //   }
    // }

    default:
      return state
  }
}