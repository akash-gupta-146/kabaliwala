import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';

@Injectable()
export class AppreciationService {

    constructor(private http: CustomHttpService) { }

    submitAppreciation(data: any) {
        return this.http.post('/appreciation', data);
    }
}