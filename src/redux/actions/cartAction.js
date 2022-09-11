import { cartService } from "../../service/CartService"
import { GET_ARR_CART_ITEM } from "../types/cartTypes"

const { sessionId } = JSON.parse(localStorage.getItem('USER_LOGIN'))
export const getCartAction = (sessionId) => {
    return async (dispatch) => {
        try {
            const result = await cartService.retrieve(sessionId)
            const { data } = result.data || []
            dispatch({
                type: GET_ARR_CART_ITEM,
                payload: data
            })
        } catch (errors) {
            console.log('error', errors)
            // errorMessage('Error', errors.response.data.message)
        }
    }
}
export const incrementAction = (data) => {

    return async (dispatch) => {
        try {
            const result = await cartService.increment(data)
            dispatch(getCartAction(sessionId))
        } catch (error) {
            console.log('error', error)
        }
    }
}
export const decrementAction = (data) => {
    return async (dispatch) => {
        try {
            const result = await cartService.decrement(data)
            dispatch(getCartAction(sessionId))
        } catch (error) {
            console.log('error', error)
        }
    }
}
