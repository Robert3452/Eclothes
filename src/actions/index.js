import { types } from './types';

export const addToCart = payload => ({
    type: types.ADD_TO_CART,
    payload
});

export const addToProdId = payload => ({
    type: types.ADD_TO_PROD_ID,
    payload
});

export const deleteToCart = payload => ({
    type: types.DELETE_TO_CART,
    payload
});

export const voidCart = payload => ({
    type: types.VOID_CART,
    payload
})