import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';

@Injectable()
export class ComplaintService {

    constructor(private http: CustomHttpService) { }

  getComplaintCategories(){
      return this.http.get('/complaint/save-info');
  }
}