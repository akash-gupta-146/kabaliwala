
import { Component } from '@angular/core';
import { IonicPage, Events, NavParams, ViewController, ActionSheetController } from 'ionic-angular';
import { ComplaintService } from '../../../providers/complaint.service';
import { CustomService } from '../../../providers/custom.service';

@IonicPage()
@Component({
    selector: 'comp-close-mngnt',
    templateUrl: './comp-close-mngnt.html',
    styles: [``]

})

export class ComplaintCloseManagementPage {

    title: string = `Close ${this.complaintService.compOrSugg}`;
    complaint: any;
    complaintIndex: number;

    //form variables
    rootCause: string = '';
    comment: string = '';

    complaintClosed: boolean = false;

    constructor(

        private complaintService: ComplaintService,
        private customService: CustomService,
        private navParam: NavParams,
        private viewCtrl: ViewController,
        private actionSheetCtrl: ActionSheetController,
        private events: Events
    ) {

        this.complaint = this.navParam.get('complaint');
        this.complaintIndex = this.navParam.get('complaintIndex');

    }

    onSubmit() {


        let actionSheet = this.actionSheetCtrl.create({
            title: 'Are you sure to close the complaint ?',
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

        let reason = {
            rca: this.rootCause,
            comment: this.comment
        };
        this.customService.showLoader();
        this.complaintService.closeComplaint(this.complaint.id, reason)
            .subscribe((res: any) => {

                this.customService.hideLoader();
                this.complaintService.updateComplaint(this.complaint,res);
                this.customService.showToast('Complaint closed successfully');
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



