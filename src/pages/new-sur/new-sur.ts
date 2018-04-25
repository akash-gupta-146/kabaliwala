import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SurveyService, Question } from '../../providers/survey.service';
import { CustomService } from '../../providers/custom.service';


@IonicPage()
@Component({
  selector: 'page-new-sur',
  templateUrl: 'new-sur.html',
})
export class NewSurPage {

  questions: Array<Question>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private surveyService: SurveyService,
    private customService: CustomService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewSurPage');
    this.getQuestions();
  }

  getQuestions() {
    this.customService.showLoader();
    this.surveyService.fetchQuestions()
      .subscribe((res: any) => {

        this.questions = res;
        this.customService.hideLoader();
      }, (err) => {

        this.customService.hideLoader();
        this.customService.showToast('Could not fetch the required data, Please try again');
      });

  }
}
