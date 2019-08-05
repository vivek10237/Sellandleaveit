import axios from 'axios';
export default class AdminService {

    constructor() {
        this.domain = 'http://localhost:3300'; // API server domain
    }

    // getProfile() {
    //     return decode(this.getToken());
    // }

    
    getUserAll(){
        console.log('adminService...xx..x');
        return axios.get(this.domain + '/sellandleave/userlist')
            .then((result) => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }

    AdminEditUserInfo(userInfoVo){
        console.log('editAdminService:',userInfoVo);
        return axios.post(this.domain + '/sellandleave/userEditInfo', userInfoVo)
            .then((result) => {
                return (result);
            }).catch(err => {
                console.log('xxxxxxx xxxxxxxxxxx err is ', err);
            });
    }

}    