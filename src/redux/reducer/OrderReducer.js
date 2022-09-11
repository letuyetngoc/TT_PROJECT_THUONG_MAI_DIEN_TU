import { CREATE_ORDER } from "../types/orderType"

const stateDefault = {
    newOrder: ''
}
export default function OrderReducer(state = stateDefault, action) {
    switch (action.type) {
        case CREATE_ORDER: {
            state.newOrder = action.payload
            return { ...state }
        }
        default: return { ...state }
    }
}