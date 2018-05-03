import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class ComplaintService {

//  THIS SCRIPT IS USED FOR BOTH COMPLAINTS AND SUGGESTIONS
// HENCE COMPLAINT REFERS TO BOTH COMPLAINTS AS WELL AS SUGGESTIONS

    compOrSugg:string;
    complaintCategories: Array<any>;

    constructor(private http: CustomHttpService) { }

    getComplaintCategories() {
        if (this.complaintCategories) {
            return of(this.complaintCategories);
        } else {

            return this.http.get('/complaint/save-info').map(res=>{
                this.complaintCategories = res;
                return res;
            });
        }
    }

    submitComplaint(data:any){
        return this.http.post(`/${this.compOrSugg}`,data);
    }

    // below methods are related to managment/admin

    
}