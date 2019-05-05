import { ADD_CART_ITEM, ADD_CART_ITEMS, REMOVE_CART_ITEM } from '../actions/types';


const INITIAL_STATE = {
  cartItemIds: [ 1, 2, 3 ],
  cartItems: {
    1: {
        id: 1,
        key: '1',
        providerInfo: {
          avatar: '/static/images/team/teammember1.png',
          name: 'Britanny McDavidson',
          formattedTime: '08:00 pm, Today',
        },
        services: [{ name: 'Title of service', price: 80 }, { name: 'Title of service', price: 65 }],
      },
    2: {
        id: 2,
        key: '2',
        providerInfo: {
          avatar: '/static/images/team/teammember4.png',
          name: 'Mary Jane',
          formattedTime: '04:00 pm, Tommorrow',
        },
        services: [{ name: 'Title of service', price: 75 }, { name: 'Title of service', price: 30 }],
      },
    3: {
        id: 3,
        key: '3',
        providerInfo: {
          avatar: '/static/images/team/teammember3.png',
          name: 'Joe Black',
          formattedTime: '21:00 am, Today',
        },
        services: [{ name: 'Title of service', price: 5 }, { name: 'Title of service', price: 10 }, { name: 'Title of service', price: 300 }],
      }
  }
}


export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case (ADD_CART_ITEM): {

    }
    case (REMOVE_CART_ITEM): {
      let { cartItems, cartItemIds } = state;
      cartItemIds = state.cartItemIds.filter(cartItem => cartItem.id !== action.payload);
      delete cartItems[action.payload];
      return {
        ...state,
        cartItems,
        cartItemIds
      }
    }
    case (ADD_CART_ITEMS): {

    }
    default:
      return state
  }
}