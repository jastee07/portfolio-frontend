import axios from "axios";


class AuthService {

    login(credentials){
        axios.post('/auth/login/', credentials)
    }

    refreshToken(token){
        axios.post("auth/token/refresh/", token)
    }

    fetchUser(){
        axios.get('auth/user')
    }
}

export default new AuthService();