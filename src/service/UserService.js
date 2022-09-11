import BaseService from "./BaseService";

class UserService extends BaseService {

    constructor() {
        super()
    }

    user = () => {
        return this.get('api/user')
    }

    signup = (data) => {
        return this.post('api/user/signup', data)
    }

    login = (data) => {
        return this.post('api/user/login', data)
    }

    verifyEmail = () => {
        return this.post('api/user/verifyEmail')
    }

    refreshToken = (data) => {
        return this.post('api/user/refreshToken', data)
    }

    loginFacebook = () => {
        return this.get('api/user/login/facebook')
    }
}
export const userService = new UserService()