import BaseService from "./BaseService";

class CartService extends BaseService {
    constructor() {
        super()
    }
    addtocart = (data) => {
        return this.post('api/cart/addtocart', data)
    }
    retrieve = (session_id) => {
        return this.get(`api/cart/retrieve/${session_id}`)
    }
    increment = (data) => {
        return this.post('api/cart/increment', data)
    }
    decrement = (data) => {
        return this.post('api/cart/decrement', data)
    }

}
export const cartService = new CartService()