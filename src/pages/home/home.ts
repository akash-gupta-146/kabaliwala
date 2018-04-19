import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
// this page refers to guest Main page
export class HomePage {

  constructor(
    public navCtrl: NavController
  ) { }

  onComplaint() {
    this.navCtrl.push('NewComplaintPage');
  }

  onSuggestion() {

  }
  onAppreciation() {

  }
  onSurvey() { }

}
