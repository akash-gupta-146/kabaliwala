import { Component } from '@angular/core';
import { NavController, Events } from 'ionic-angular';
import { ComplaintService } from '../../providers/complaint.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
// this page refers to guest Main page
export class HomePage {

  constructor(
    private navCtrl: NavController,
    private complaintService: ComplaintService,
    private events: Events
  ) { }

  onComplaint() {
    this.complaintService.compOrSugg = 'complaint';
    this.navCtrl.push('NewComplaintPage');
  }

  onSuggestion() {
    this.complaintService.compOrSugg = 'suggestion';
    this.navCtrl.push('NewComplaintPage');
  }
  onAppreciation() {
    this.navCtrl.push('NewAppreciationPage');


  }
  onSurvey() { }

  onLogout() {
    this.events.publish('user:logout')
  }

}
