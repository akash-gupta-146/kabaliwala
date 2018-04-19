import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
declare var ROLE;

@Injectable()
export class AuthService {

    constructor(private http: CustomHttpService) { }

    login(loginCredentials: any) {
        return this.http.postForLogin(loginCredentials);
    }

    isLoggedIn() {
        return localStorage.getItem('access_token') ? true : false;
    }

    saveToken(token: string) {
        localStorage.setItem('access_token', token);
    }

    fetchUserDetails() {
        return this.http.get('/user-info').map((res)=>{
            this.saveUserDetails(res);
            return res;
        });
    }

    saveUserDetails(userInfo: any) {
       this.setRole(userInfo);
         
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }


    setRole(info:any){
        // eg. if info.roles is ["guest@3,guest@4"], then ROLE has to be 'g'
      ROLE = info.roles[0].slice(0,1);
    }
}