import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomService } from '../../providers/custom.service';
import { ComplaintService } from '../../providers/complaint.service';

/**
 * Generated class for the NewCPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-c',
  templateUrl: 'new-c.html',
})
export class NewComplaintPage {

  complaintCategories: Array<any>;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private customService: CustomService,
    private complaintService: ComplaintService) {
  }


  ionViewDidLoad() {
    this.getComplaintCategories();
  }

  getComplaintCategories() {
    this.customService.showLoader();
    this.complaintService.getComplaintCategories()
      .subscribe((res: any) => {

        this.complaintCategories = res;
        this.customService.hideLoader();
      }, (err) => {

        this.customService.hideLoader();
        this.customService.showToast('Could not fetch the required data, Please try again');
      });
  }

}
