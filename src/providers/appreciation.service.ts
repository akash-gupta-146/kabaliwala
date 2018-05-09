import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';

@Injectable()
export class AppreciationService {

    constructor(private http: CustomHttpService) { }

    submitAppreciation(data: any) {
        return this.http.post('/appreciation', data);
    }

    getAppreciations(pageNo:number){
        return this.http.get(`/appreciation/page/${pageNo}`);

    }
}