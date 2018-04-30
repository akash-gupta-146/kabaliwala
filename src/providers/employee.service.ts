import { Injectable } from '@angular/core';
import { CustomService } from './custom.service';
import { CustomHttpService } from './custom-http.service';
import { IfObservable } from 'rxjs/observable/IfObservable';
import { Observable } from 'rxjs/Observable';
import { forkJoin } from 'rxjs/observable/forkJoin';

@Injectable()
export class EmployeeService {

    constructor(
        private http: CustomHttpService
    ) { }

    getRolesAndStores() {
        return forkJoin(this.getRoles(), this.getStores()) ;
    }

    getRoles() {
        return this.http.get(`/role`);
    }

    getStores() {
        return this.http.get(`/store`);
    }

    getEmployees(pageNo: number) {
        return this.http.get(`/employee/page/${pageNo}`);
    }

    createEmployee(data: any) {
        return this.http.post('/employee', data);
    }
}