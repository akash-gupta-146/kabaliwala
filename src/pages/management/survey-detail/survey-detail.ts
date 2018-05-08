import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, ModalController, NavController, NavParams } from 'ionic-angular';
import { SurveyService } from '../../../providers/survey.service';


@IonicPage()
@Component({
    selector: 'survey-detail',
    templateUrl: './survey-detail.html',
    styles: [` `]
})

export class SurveyDetailPage implements OnInit {

    survey: Array<any>; // contains array of questiona nd their answers givenby visitor

    constructor(
        public surveyService: SurveyService,
        private navCtrl: NavController,
        private navParam:NavParams
    ) {    };

    ngOnInit() {

        this.survey = this.navParam.get('surveyInfo');
    }


}