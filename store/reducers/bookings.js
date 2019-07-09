import { SAVE_USER_BOOKINGS } from '../actions/types';


const INITIAL_STATE = {
  bookedItems: {
    // 1: {
    //     id: 1,
    //     key: '1',
    //     status: 'running',
    //     progressText: 'In progress',
    //     providerInfo: {
    //       avatar: '/static/images/team/teammember1.png',
    //       name: 'Britanny McDavidson',
    //       formattedTime: '08:00 pm, Today',
    //     },
    //     services: [{ name: 'Title of service', price: 80 }, { name: 'Title of service', price: 65 }],
    //   },
    // 2: {
    //     id: 2,
    //     key: '2',
    //     progressText: 'Completed',
    //     status: 'completed',
    //     providerInfo: {
    //       avatar: '/static/images/team/teammember4.png',
    //       name: 'Mary Jane',
    //       formattedTime: '04:00 pm, Tommorrow',
    //     },
    //     services: [{ name: 'Title of service', price: 75 }, { name: 'Title of service', price: 30 }],
    //   },
    // 3: {
    //     id: 3,
    //     key: '3',
    //     status: 'completed',
    //     progressText: 'Completed',
    //     providerInfo: {
    //       avatar: '/static/images/team/teammember3.png',
    //       name: 'Joe Black',
    //       formattedTime: '21:00 am, Today',
    //     },
    //     services: [{ name: 'Title of service', price: 5 }, { name: 'Title of service', price: 10 }, { name: 'Title of service', price: 300 }],
    //   }
  }
}


export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    // case (ADD_CART_ITEM): {
    //   let { cartItems, cartItemIds } = state;
    //   let bookedItemIds =  [...cartItemIds ,action.payload.id]
    //   let bookedItems = [...cartItems, action.payload]
    //   return {
    //     ...state,
    //     bookedItems,
    //     bookedItemIds
    //   }
    // }
    // case (REMOVE_CART_ITEM): {
    //   let { cartItems, cartItemIds } = state;
    //   cartItemIds = state.cartItemIds.filter(cartItem => cartItem.id !== action.payload);
    //   delete cartItems[action.payload];
    //   return {
    //     ...state,
    //     cartItems,
    //     cartItemIds
    //   }
    // }
    case SAVE_USER_BOOKINGS: {
      console.log('reducer', payload)
      return {bookedItems: payload}
    }
    default:
      return state
  }
}