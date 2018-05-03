import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
declare var URLPREFIX;

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
        return this.http.get('/user-info').map((res) => {
            this.saveUserDetails(res);
            return res;
        });
    }

    saveUserDetails(userInfo: any) {
        this.setRole(userInfo);

        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    }

    setRole(info: any) {
        // urlPrefix will be 'g' for guest, 'a' for admin/management, 'sa' for superadmin
        URLPREFIX = info.urlPrefix;
    }
}
