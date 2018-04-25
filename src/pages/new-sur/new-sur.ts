import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SurveyService, Question } from '../../providers/survey.service';
import { CustomService } from '../../providers/custom.service';
import { SharedService } from '../../providers/shared.service';


@IonicPage()
@Component({
  selector: 'page-new-sur',
  templateUrl: 'new-sur.html',
})
export class NewSurPage {

  questions: Array<Question>; // survey questions
  defaultRating = 0; // for all questions
  guestInfo: { name: string, email: string, contact: string } = <any>{};;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private surveyService: SurveyService,
    private customService: CustomService,
    private sharedService: SharedService
  ) {
  }

  ionViewDidLoad() {
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

  submitSurvey() {

    // check if all ratings have been given or not
    if (!this.isValidForm()) {
      this.customService.showToast('Please answer all required questions', 'top');
      return;
    }
    
    //confirm that if either name or contact no. is present
    // then the other one shud also be present 
    if (this.isGuestNameEntered() && !this.isGuestContactEntered()) {
      this.customService.showToast('Please also enter your contact no.', 'top');
      return;
    }
    if (!this.isGuestNameEntered() && this.isGuestContactEntered()) {
      this.customService.showToast('Please also enter your name', 'top');
      return;
    }

    // check contact no validation
    if (!this.sharedService.isValidContactNo(this.guestInfo.contact)) { return; }



    // finally build payload and send psot request
    const payLoad = this.buildPayLoad();
    // console.log(payLoad);
    this.customService.showLoader();
    this.surveyService.submitSurvey(payLoad)
      .subscribe((res: any) => {

        this.customService.hideLoader();
        this.clearAnswers();
        this.navCtrl.push('SubmitSuccessPage');

      }, (err) => {

        this.customService.hideLoader();
        this.customService.showToast(err.msg);
      });


  }

  // return true only if all questions with type==='STAR' have been answered
  isValidForm() {
    return this.questions.every(q => {
      if (q.type === 'STAR') {
        return q.starValue ? true : false;
      }
      return true;
    });
  }

  buildPayLoad() {
    let data: any = {};
    data.surveyResult = [];

    this.questions.forEach(q => {
      const ques: any = { questionId: q.id };
      if (q.type === 'STAR') { ques.starValue = q.starValue || null; }
      if (q.type === 'TEXT') { ques.textValue = q.textValue && q.textValue.trim() !== '' ? q.textValue : null; }
      data.surveyResult.push(ques);
    });

    // include the guest info only when both name and contact are present
    if (this.isGuestContactEntered() && this.isGuestNameEntered()) {

      data.visitorInfo = {
        contactNo: this.guestInfo.contact,
        name: this.guestInfo.name
      };
      this.guestInfo.email && this.guestInfo.email.trim() != '' && (data.visitorInfo.email = this.guestInfo.email);
    };

    return data;
  }

  isGuestNameEntered() {
    return this.guestInfo.name && this.guestInfo.name.trim() != '';
  }

  isGuestContactEntered() {
    return this.guestInfo.contact && this.guestInfo.contact.trim() != '';
  }

 // reset the question to initial state with no answers
  clearAnswers() {
    this.questions.forEach(q => {
      q.textValue = q.starValue = null;
    });

  }

}
