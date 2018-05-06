
import { ModalController, AlertController, ActionSheetController, Modal } from 'ionic-angular';
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

    // corresponding modals have been returned so that 
    // we can attach onDidDismissChange handler to them 
    // returned value is useful only when these modals are opened from viewComplaint page

    editComplaint(): Modal {

        let editPage = this.mdlCtrl.create("ComplaintEditPage", { 'complaint': this.complaint, 'complaintIndex': this.complaintIndex });
        editPage.present();
        return editPage;

    }
    openClosePage(): Modal {

        let closePage = this.mdlCtrl.create("ComplaintCloseManagementPage", { 'complaint': this.complaint, 'complaintIndex': this.complaintIndex });
        closePage.present();
        return closePage;
    }
    openCommentPage(): Modal {

        let commentPage = this.mdlCtrl.create("CommentsPage", { 'complaint': this.complaint, 'complaintIndex': this.complaintIndex });
        commentPage.present();
        return commentPage;
    }
}