import BaseService from '../service/BaseService'
class ProductService extends BaseService {

    constructor() {
        super()
    }

    getProducts = () => {
        return this.get('api/product')
    }

    createProduct = (data) => {
        return this.post('api/product', data)
    }

}
export const productService = new ProductService()