const INITIAL_STATE = { cart: [] };

function rootReducer(state=INITIAL_STATE, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return {...state, cart: [...state.cart, action.payload]}

        case 'REMOVE_FROM_CART':
            return {...state, cart: [...splicer(state.cart, action.id)]}

        default:
            return state;
    }
}

function splicer(arr, id) {
    arr.splice(arr.indexOf(id), 1);
    return arr;
}

export default rootReducer;
