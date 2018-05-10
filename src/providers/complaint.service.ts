import { Injectable } from '@angular/core';
import { CustomHttpService } from './custom-http.service';
import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import { forkJoin } from 'rxjs/observable/forkJoin';
declare var URLPREFIX;

@Injectable()
export class ComplaintService {

    //  THIS SCRIPT IS USED FOR BOTH COMPLAINTS AND SUGGESTIONS
    // HENCE COMPLAINT REFERS TO BOTH, COMPLAINTS AS WELL AS SUGGESTIONS

    compOrSugg: string; // to track which one of the complaint or suggestion is currently being used
    complaintCategories: Array<any>;

    // below info is used for editing complaints/suggstions
    complaintPriorities: Array<any>;
    employees: Array<any>;

    dataRequiredForFiltering: any;

    constructor(private http: CustomHttpService) { }

    getComplaintCategories() {
        if (this.complaintCategories) {
            return of(this.complaintCategories);
        } else {

            return this.http.get('/complaint/save-info').map(res => {
                this.complaintCategories = res;
                return res;
            });
        }
    }

    submitComplaint(data: any) {
        return this.http.post(`/${this.compOrSugg}`, data);
    }

    // below methods are related to managment/admin or superadmin

    getComplaints(pageNo: number) {
        return this.http.get(`/${this.compOrSugg}/page/${pageNo}`);

    }

    getComplaintById(id: number) {
        return this.http.get(`/${this.compOrSugg}/${id}`);
    }

    closeComplaint(id: number, reason: any) {
        return this.http.put(`/${this.compOrSugg}/${id}/close`, reason);

    }


    editComplaint(id: number, status: any) {
        return this.http.put(`/${this.compOrSugg}/${id}`, status);

    }

    getPrioritiesAndEmployees(): Observable<any> {



        if (this.complaintPriorities && this.employees) {
            return of([this.complaintPriorities, this.employees]);
        } else {

            return this.http.get(`/${this.compOrSugg}/edit-info`)
                .map(res => {
                    this.complaintPriorities = res['priorities'];
                    this.employees = res['employees'];
                    return [this.complaintPriorities, this.employees];
                });
        }
    }

    fetchComments(complaintId: number) {
        return this.http.get(`/${this.compOrSugg}/${complaintId}/comment`);
    }

    postComments(complaintId: number, comment: string) {
        return this.http.post(`/${this.compOrSugg}/${complaintId}/comment`, { comment: comment });
    }

    updateComplaint(oldC: any, newC: any) {
        // these are all the updatable properties depending on which operation is performed
        // if a property has been changed, it will be updated, otherwise old value will be assigned
        oldC.statusId = newC.statusId || oldC.statusId;
        oldC.statusName = newC.statusName || oldC.statusName;
        oldC.statusColor = newC.statusColor || oldC.statusColor;
        oldC.assignedEmployeeId = newC.assignedEmployeeId || oldC.assignedEmployeeId;
        oldC.assignedEmployeeName = newC.assignedEmployeeName || oldC.assignedEmployeeName;
        oldC.assignedEmployeePicUrl = newC.assignedEmployeePicUrl || oldC.assignedEmployeePicUrl;
        oldC.closedOn = newC.closedOn || oldC.closedOn;
        oldC.commentCount = newC.commentCount || oldC.commentCount;
        oldC.priorityId = newC.priorityId || oldC.priorityId;
        oldC.priorityName = newC.priorityName || oldC.priorityName;
        oldC.rca = newC.rca || oldC.rca;
    }

    // below methods are related to fetch the data required for sort and fiter
    fetchDataRequiredForFiltering() {
        if (this.dataRequiredForFiltering) {
            return of(this.dataRequiredForFiltering);
        } else {

            return this.http.get('/complaint/filter/info').map(res => {
                this.dataRequiredForFiltering = res;
                return res;
            });
        }
    }

    sortBy(sortType: string, pageNo: number) {
        return this.http.get(`/${this.compOrSugg}/sort/${sortType}/true/page/${pageNo}`);
    }

    filterBy(filterName: string, id: number, pageNo: number) {
        console.log(filterName);
        const data={[filterName+'Id']:id};
        console.log(data);
        
        
        return this.http.post(`/${this.compOrSugg}/filter/page/${pageNo}`, data);

    }


}