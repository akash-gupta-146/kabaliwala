import { Component } from '@angular/core';
import { IonicPage, ViewController, AlertController, ActionSheetController, Events, ModalController, NavParams } from 'ionic-angular';
import { ComplaintSuggestionOptionsBaseClass } from '../../../Classes/compl-suggestion-base-class';
import { ComplaintService } from '../../../providers/complaint.service';
import { CustomService } from '../../../providers/custom.service';
import { AuthService } from '../../../providers/auth.service';


@IonicPage()
@Component({
    selector: 'view-compaint',
    templateUrl: './view.html',
    styles: [``]
})

export class ViewComplaintPage extends ComplaintSuggestionOptionsBaseClass {

    title = `View ${this.complaintService.compOrSugg}`;
    complaint: any;
    complaintIndex: number;
    stompClient: any;

    statusChangedByLive: boolean = false;

    constructor(
        public params: NavParams,
        public complaintService: ComplaintService,
        public viewCtrl: ViewController,
        public alertCtrl: AlertController,
        public mdlCtrl: ModalController,
        public actionSheetCtrl: ActionSheetController,
        public events: Events,
        public customService: CustomService,
        private authService: AuthService
    ) {
        super(mdlCtrl, alertCtrl, actionSheetCtrl, customService, complaintService, events);


        let complaintTemp = this.params.get('viewCompl');
        this.complaintIndex = this.params.get('index');
    
        this.fetchCompleteComplaint(complaintTemp.id); 
    }

    fetchCompleteComplaint(id: number) {
        this.customService.showLoader();
        this.complaintService.getComplaintById(id)
            .subscribe((res: any) => {

                this.complaint = res;
                this.customService.hideLoader();
                // this.subscribeLiveUpdates();
                // this.subscribeStatusChanges();
            }, (err: any) => {

                this.customService.hideLoader();
                this.customService.showToast(err.msg);
            });
    }

    // subscribeLiveUpdates() {

    //     this.stompClient = this.authService.getSockJs();
    //     let loginType = this.isStudent ? 'st' : 'ma';
    //     let url1 = `/${loginType}/${this.complaintService.compOrSugg}/${this.complaint.id}/close`;
    //     let url2 = `/${loginType}/${this.complaintService.compOrSugg}/${this.complaint.id}/status`;

    //     this.stompClient.connect({}, (frame) => {

    //         this.stompClient.subscribe(url1, (greeting) => {
    //             console.log('close subcribe in view called////');
    //             let message = JSON.parse(greeting.body);
    //             if (!message) {
    //                 return;
    //             }

    //             this.complaint = message;
    //             this.events.publish('complaintClosed', this.complaint, this.complaintIndex);


    //         });


    //         this.stompClient.subscribe(url2, (greeting) => {
    //             console.log('EDITING IN LIVE.......');
    //             let message = JSON.parse(greeting.body);
    //             if (!message) {
    //                 return;
    //             }

    //             this.complaint = message;
    //             this.events.publish('complaintStatusChanged', this.complaint, this.complaintIndex);




    //         });


    //     });
    // }

    // subscribeStatusChanges() {

    //     this.events.subscribe('complaintStatusChangedInCommentsPage', (newData: any, index: number) => {

    //         this.complaint = newData;
    //     });
    //     /**used for listeneing close complaint event published from comp-close-mngmnt page */
    //     this.events.subscribe('complaintStatusClosedMngmnt', (newData: any, index: number) => {

    //         this.complaint = newData;
    //         this.events.publish('complaintStatusChanged', this.complaint, this.complaintIndex);
    //     });
        
    // }


    dismiss() {

        // this.disconnectSockJs();
        // this.events.unsubscribe('complaintEdited');
        // this.events.unsubscribe('complaintStatusClosedMngmnt');
        // this.events.unsubscribe('complaintStatusChangedInCommentsPage');

        this.viewCtrl.dismiss();
    }

    disconnectSockJs() {

        if (this.stompClient && this.stompClient.connected) {

            this.stompClient.disconnect((res: any) => {
                console.log(res);
            });
        }
    }

}