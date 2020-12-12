import {splicer} from './../helpers';
const INITIAL_STATE = { cart: [] };

function cart(state=INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {...state, cart: [...state.cart, action.payload]}

        case 'REMOVE_FROM_CART':
            return {...state, cart: [...splicer(state.cart, action.id)]}

        case 'TOTAL':
            return {...state, cart: [...state.cart, action.payload]}

        default:
            return state;
    }
}

export default cart;