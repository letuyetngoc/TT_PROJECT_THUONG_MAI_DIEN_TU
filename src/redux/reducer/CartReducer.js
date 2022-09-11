import { GET_ARR_CART_ITEM } from "../types/cartTypes"

const stateDefault = {
    arrCartItem: '',
}

const CartReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case GET_ARR_CART_ITEM: {
            state.arrCartItem = action.payload
            return { ...state }
        }
        default: return { ...state }
    }
}
export default CartReducer