import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, ModalController } from 'ionic-angular';
import { SurveyService } from '../../providers/survey.service';
import { CustomService } from '../../providers/custom.service';


@IonicPage()
@Component({
    selector: 'survey',
    templateUrl: './survey.html',
    styles: [` `]
})

export class SurveyPage implements OnInit {

    surveyList: Array<any>;
    pageNo: number = 1;

    constructor(
        public modalCtrl: ModalController,
        public surveyService: SurveyService,
        public customService: CustomService
    ) {
    };

    ngOnInit() {

        this.getSurveyList();
    }

    getSurveyList(refresher?: any) {

        if (!refresher) { this.customService.showLoader(); }
        this.surveyService.getSurveys(1)
            .subscribe((res: any) => {

                this.surveyList = res;
                this.pageNo = 1;
                refresher ? refresher.complete() : this.customService.hideLoader();
            }, (err: any) => {

                refresher ? refresher.complete() : this.customService.hideLoader();
                this.customService.showToast(err.msg);
            });
    }


    doRefresh(refresher) {

        this.getSurveyList(refresher);
    }

    doInfinite(infinite) {

        this.surveyService.getSurveys(this.pageNo + 1)
            .subscribe((res: any) => {
                if (res && res.length !== 0) {
                    this.pageNo++;
                    this.surveyList = this.surveyList.concat(res);
                }
                infinite.complete();
            }, (err: any) => {

                infinite.complete();
                this.customService.showToast(err.msg);
            });
    }

}