
import { ModalController, AlertController, ActionSheetController } from 'ionic-angular';
import { Events } from 'ionic-angular';
import { CustomService } from '../providers/custom.service';
import { ComplaintService } from '../providers/complaint.service';

export class ComplaintSuggestionOptionsBaseClass {

    complaint: any;
    complaintIndex: number;

    constructor(
        public mdlCtrl: ModalController,
        public alertCtrl: AlertController,
        public actionSheetCtrl: ActionSheetController,
        public customService: CustomService,
        public complaintService: ComplaintService,
        public events: Events
    ) { }


    editComplaint() {

        let editPage = this.mdlCtrl.create("ComplaintEditPage", { 'complaint': this.complaint, 'complaintIndex': this.complaintIndex });
        editPage.present();

    }
    openClosePage() {
        
        let closePage = this.mdlCtrl.create("ComplaintCloseManagementPage", { 'complaint': this.complaint, 'complaintIndex': this.complaintIndex });
        closePage.present();
    }
    openCommentPage() {

        let commentPage = this.mdlCtrl.create("CommentsPage", { 'complaint': this.complaint, 'complaintIndex': this.complaintIndex });
        commentPage.present();
    }
}