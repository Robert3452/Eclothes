
import { types } from '../actions/types';

const reducer = (state, action) => {
    switch (action.type) {
        case types.ADD_TO_CART:
            let cart = [...state.cart, action.payload]

            // let productIndex = state.cart
            //     .findIndex((el) => (el._id === action.payload._id))
            // if (!productIndex < 0)
            //     cart[productIndex] = {
            //         quantity:
            //             cart[productIndex].quantity + action.payload.quantity,
            //         ...cart[productIndex]
            //     }
            return {
                ...state,
                cart
            }

        case types.ADD_TO_PROD_ID:
            const qty = state.cart[action.payload.indexFound].quantity + action.payload.quantity
            return {

                ...state,
                cart: [...state.cart.filter((_, index) => index !== action.payload.indexFound),
                {
                    ...state.cart[action.payload.indexFound],
                    ["quantity"]: qty,
                }],

            }
        case types.DELETE_TO_CART:
            return {
                ...state,
                cart: state.cart.filter(el => el._id !== action.payload._id)
            }
        case types.VOID_CART:
            return {
                ...state,
                cart: []
            }
        default:
            return state
    }
}

export default reducer;