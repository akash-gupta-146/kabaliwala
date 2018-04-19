import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the SubmitSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-submit-success',
  templateUrl: 'submit-success.html',
})
export class SubmitSuccessPage {

  timeOutId: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  onBack() {
    clearTimeout(this.timeOutId);
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    const prevView: ViewController = this.navCtrl.getPrevious();
    this.navCtrl.removeView(prevView);

    this.timeOutId = setTimeout(() => {
      this.navCtrl.pop();
    }, 5000);
  }

}
