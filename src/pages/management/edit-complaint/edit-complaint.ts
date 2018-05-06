
import { Component } from '@angular/core';
import { IonicPage, Events, NavParams, ViewController, ModalController, ActionSheetController } from 'ionic-angular';
import { ComplaintService } from '../../../providers/complaint.service';
import { CustomService } from '../../../providers/custom.service';

@IonicPage()
@Component({
    selector: 'edit-complaint',
    templateUrl: './edit-complaint.html',
    styles: [``]

})

export class ComplaintEditPage {

    title: string = `Edit ${this.complaintService.compOrSugg}`;
    complaint: any;

    //form variables
    assignTo: any;
    assignToName: string;
    priority: string;
    priorityList: Array<any>;
    inProgress: boolean;
    facultyList: Array<any>;

    searchList: Array<any>;
    constructor(

        private complaintService: ComplaintService,
        private customService: CustomService,
        private navParam: NavParams,
        private viewCtrl: ViewController,
        private actionSheetCtrl: ActionSheetController,
        private mdlCtrl: ModalController,
        private events: Events
    ) {

        this.complaint = this.navParam.get('complaint');
    }

    ngOnInit() {

        this.customService.showLoader();
        this.complaintService.getPrioritiesAndEmployees()
            .subscribe((res: Array<any>) => {
                this.customService.hideLoader();

                [this.priorityList, this.facultyList] = res;
            }, (err: any) => {
                this.customService.hideLoader();
                this.customService.showToast(err.msg);
            });
    }

    onAssignedToBtn() {

        let searchPage = this.mdlCtrl.create("FacultySearchPage", { 'searchList': this.facultyList, 'title': 'Employee' });
        searchPage.present();
        searchPage.onDidDismiss((selected) => {
            if (selected) {

                this.assignTo = selected.selectedSearch;
                this.assignToName = selected.selectedSearch.name;

            }
        });
    }


    onEditBtn() {

        let actionSheet = this.actionSheetCtrl.create({
            title: 'Are you sure to change the status ?',
            buttons: [
                {
                    text: 'Yes',
                    handler: () => {
                        this.submitFinally();
                    }
                }, {
                    text: 'Cancel',
                    role: 'destructive',
                    handler: () => {
                    }
                }
            ]
        });

        actionSheet.present();
    }

    submitFinally() {

        let status: any = {
            assignedTo: this.assignTo && this.assignTo.id,
            priority: this.priority
        };
        (this.inProgress);
        
        if (this.inProgress) { status.statusId = 3; }

        this.customService.showLoader();
        this.complaintService.editComplaint(this.complaint.id, status)
            .subscribe((res: any) => {

                this.complaintService.updateComplaint(this.complaint,res);
                this.customService.hideLoader();
                this.customService.showToast('Complaint Edited successfully');
                this.dismiss(res);
            }, (err: any) => {

                this.customService.hideLoader();
                this.customService.showToast(err.msg);
            });

    }

    dismiss(updatedComplaint?:any) {

        this.viewCtrl.dismiss(updatedComplaint);
    }
}



