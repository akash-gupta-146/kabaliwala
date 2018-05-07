import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';



@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private events: Events
  ) {
  }

  ionViewDidLoad() {
  }

  onLogoutBtn() {
    this.events.publish('user:logout')
  }

}
