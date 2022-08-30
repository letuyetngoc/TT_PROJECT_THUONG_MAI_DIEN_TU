import BaseService from '../service/BaseService'
class ProductService extends BaseService {

    getProducts = () => {
        return this.get('api/product')
    }

    createProduct = (data) => {
        return this.post('/api/product', data)
    }
}
export const productService = new ProductService()