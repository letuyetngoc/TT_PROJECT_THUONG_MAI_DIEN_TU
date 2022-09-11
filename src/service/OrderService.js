import BaseService from "./BaseService";

class OrderService extends BaseService {
    constructor() {
        super()
    }
    createOrder = (data) => {
        return this.post('api/order', data)
    }
}
export const orderService = new OrderService()