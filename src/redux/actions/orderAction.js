import { orderService } from "../../service/OrderService"
import { successMessage } from '../../component/message'
import { CREATE_ORDER } from "../types/orderType"

export const createOrder = (data) => {
    return async (dispatch) => {
        try {
            const result = await orderService.createOrder(data)
            console.log('result', result.data.message)
            successMessage(result.data.message || '')
            dispatch({
                type: CREATE_ORDER,
                payload: result.data.data || ''
            })
        } catch (error) {
            console.log('error', error)
        }
    }
}