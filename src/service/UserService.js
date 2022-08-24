import BaseService from "./BaseService";

class UserService extends BaseService {

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
}
export const userService = new UserService()