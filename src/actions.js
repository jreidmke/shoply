import { ADD_TO_CART, REMOVE_FROM_CART } from './actionTypes';

export const add_to_cart = (newItem) => ({ type: ADD_TO_CART, payload: newItem });
export const remove_from_cart = (id) => ({ type: REMOVE_FROM_CART, id });