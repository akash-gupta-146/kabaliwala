import { Component, ViewChild } from '@angular/core';
import { NavParams, IonicPage, ViewController, Content, AlertController, Events } from 'ionic-angular';
import { ComplaintService } from '../../../providers/complaint.service';
import { CustomService } from '../../../providers/custom.service';
import { CustomHttpService } from '../../../providers/custom-http.service';
declare const URLPREFIX;

@IonicPage()
@Component({
    selector: 'comments',
    templateUrl: './comments.html',
    styles: [``]
})

export class CommentsPage {

    title: string = "COMMENTS";
    inputChat: string = '';
    complaint: any;
    complaintIndex: number;
    comments: Array<any>;
    isCommentsEmpty: boolean;
    complaintClosed = false; // used only for handling comment count in case complaint is closed with a comment
    userInfo:any = JSON.parse(localStorage.getItem('userInfo'));
    selfId: number;
    postInProcess = false; //to show spinner while sending the message
    stompClient: any;
    @ViewChild(Content) content: Content;

    constructor(
        private navParam: NavParams,
        private viewCtrl: ViewController,
        private alertCtrl: AlertController,
        private events: Events,
        private complaintService: ComplaintService,
        private customService: CustomService,
        private customHttp: CustomHttpService
    ) {
        this.selfId = this.userInfo.id;
        this.complaint = this.navParam.get('complaint');
        this.complaintIndex = this.navParam.get('complaintIndex');
        this.getComments();
        this.sockJsConnection();
    }

    getComments() {

        this.customService.showLoader();
        this.complaintService.fetchComments(this.complaint.id)
            .subscribe((res: any) => {

                this.comments = res;
                this.isCommentsEmpty = this.comments.length == 0;
                this.customService.hideLoader();
                setTimeout(() => {

                    this.content.scrollToBottom();
                }, 100);

                this.checkComplaintStatus();
            }, (err: any) => {

                this.customService.showToast(err.msg);
                this.customService.hideLoader();
            });
    }

    checkComplaintStatus() {

        if (this.complaint.statusId == 4 || this.complaint.statusId == 6) {
            this.customService.showToast("This complaint is has been closed, No more comments can be added to it.");
        }
    }

    sockJsConnection() {

        this.stompClient = this.customHttp.getSockJs();
        let url1 = `/${URLPREFIX}/${this.complaintService.compOrSugg}/${this.complaint.id}/close`;
        let url2 = `/${URLPREFIX}/${this.complaintService.compOrSugg}/${this.complaint.id}/comment`;

        this.stompClient.connect({}, (frame) => {


            this.stompClient.subscribe(url1, (greeting) => {
                let message = JSON.parse(greeting.body);
                if (!message) {
                    return;
                }

                this.complaint = message;
                this.complaintClosed = true;
                this.showPrompt();
                this.content.scrollToBottom();

            });

            this.stompClient.subscribe(url2, (greeting) => {

                let message = JSON.parse(greeting.body);
                if (!message) {
                    return;
                }
                this.comments.push(message);
                this.content.scrollToBottom();
                this.isCommentsEmpty = this.comments.length == 0;
                if (!this.complaintClosed) { this.complaint.commentCount++; }


            });

        });

    }

    showPrompt() {

        let alert = this.alertCtrl.create({
            title: `Closed`,
            subTitle: `This ${this.complaintService.compOrSugg} has been closed, you can't comment anymore`,
            buttons: ['Dismiss']
        });
        alert.present();

    }


    postChat() {

        const msg = this.inputChat;
        this.inputChat = '';
        this.postInProcess = true;
        // this.content.scrollToBottom();

        this.complaintService.postComments(this.complaint.id, msg)
            .subscribe((res: any) => {

                this.postInProcess = false;
                this.complaint.commentCount++;
                this.isCommentsEmpty = false;
                this.showRecentPost({
                    comment: msg,
                    employeeId: this.selfId || null,
                    employeeName: this.userInfo.name || null,
                    employeePicUrl: this.userInfo.picUrl || null,
                });
                setTimeout(() => {

                    this.content.scrollToBottom();
                }, 100);
            }, (err: any) => {

                this.customService.showToast(err.msg);
                this.inputChat = '';
                this.postInProcess = false;

            });
    }

    showRecentPost(commentData: any) {
        console.log(commentData);
        
        this.comments.push({
            comment: commentData.comment,
            employeeId: commentData.employeeId || null,
            employeeName: commentData.employeeName || null,
            employeeNickName: commentData.employeeNickName || null,
            employeePicUrl: commentData.employeePicUrl || null,
            createdAt: new Date(Date.now())
        });

    }    


    dismiss(updatedComplaint?: any) {

        this.disconnectSockJs();
        this.viewCtrl.dismiss(updatedComplaint);
    }

    disconnectSockJs() {

        /**disconnect the connection if connected  */
        if (this.stompClient && this.stompClient.connected) {

            this.stompClient.disconnect((res: any) => {
                console.log(res);
            });
        }
    }
}