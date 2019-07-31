import axios from 'axios';
import decode from 'jwt-decode';
export default class RegisterService {

    constructor() {
        this.domain = 'http://localhost:3300'; // API server domain
    }

    registerUser(userInfoVo) {
           return axios.post(this.domain + '/sellandleave/addUser', userInfoVo) 
            .then((result) => {
                console.log('xxxxxxx xxxxxxxxxxx here yes  is::: ', result);
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is::: ', err);
                return (err);
            });

        //console.log('UserInformation...xxx: ',userInfoVo);
    }

    login(email, password) {
        return axios.post(this.domain + '/sellandleave/login', {
            email: email,
            pass: password
        })
            .then(result => {
                console.log(result);
                this.setToken(result.data.token);
                return Promise.resolve(result);
               
            });
    }
    setToken(idToken) {
        localStorage.setItem('id_token', JSON.stringify(idToken));
    }

    logout() {
        localStorage.removeItem('id_token');
    }
    isTokenExpired(token) {
        try {
            const decoded = decode(token);
            if (decoded.exp < Date.now() / 1000) { 
                return true;
            }
            else
                return false;
        }
        catch (err) {
            return false;
        }
    }

    getToken() {
        let token = '';
        if (localStorage.getItem('id_token')) {
            token = JSON.parse(localStorage.getItem('id_token'));
        }
        return token
    }

    loggedIn() {
        const token = this.getToken() 
        return !!token && !this.isTokenExpired(token) 
    }

}
