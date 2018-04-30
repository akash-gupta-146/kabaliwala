import { Injectable } from '@angular/core';
import { CustomService } from './custom.service';
import { CustomHttpService } from './custom-http.service';

@Injectable()
export class StoreService {

    constructor(
        private http: CustomHttpService
    ) { }

    getStores(){
        return this.http.get('/store');
    }

    createStore(data: any) {
        return this.http.post('/store',data);
    }
}