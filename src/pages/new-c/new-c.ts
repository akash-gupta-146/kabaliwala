import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CustomService } from '../../providers/custom.service';
import { ComplaintService } from '../../providers/complaint.service';
import { SharedService } from '../../providers/shared.service';

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
export class NewComplaintPage { // ALSO USED FOR NEW SUGGESTION

  title: string = `Create ${this.complaintService.compOrSugg}`;
  complaintCategories: Array<any>;
  guestInfo: { name: string, email: string, contact: string } = <any>{};;


  /**form ngModel variables */
  selectedCategory: any;
  selectedSubCategory: any;
  complaintTitle: string;
  complaintDescription: string;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private customService: CustomService,
    public complaintService: ComplaintService,
    private sharedService: SharedService
  ) { }


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

  resetSubCategories() {
    this.selectedSubCategory = null;
  }

  onSubmit() {

    if (this.isGuestNameEntered() && !this.isGuestContactEntered()) {
      this.customService.showToast('Please also enter your contact no.', 'top');
      return;
    }
    if (!this.isGuestNameEntered() && this.isGuestContactEntered()) {
      this.customService.showToast('Please also enter your name', 'top');
      return;
    }

    if (!this.sharedService.isValidContactNo(this.guestInfo.contact)) {
      return;
    }
    const data: any = {};

    data.againstCategoryId = this.selectedSubCategory ? this.selectedSubCategory.id : this.selectedCategory.id;
    data.title = this.complaintTitle;
    data.description = this.complaintDescription;

    if (this.isGuestContactEntered() && this.isGuestNameEntered()) {

      data.visitorInfo = {
        contactNo: this.guestInfo.contact,
        name: this.guestInfo.name
      };
      this.guestInfo.email && this.guestInfo.email.trim() != '' && (data.visitorInfo.email = this.guestInfo.email);
    };


    this.customService.showLoader();
    this.complaintService.submitComplaint(data)
      .subscribe((res: any) => {
        this.customService.hideLoader();
        this.navCtrl.push('SubmitSuccessPage');
      }, (err) => {

        this.customService.hideLoader();
        this.customService.showToast(err.msg);
      });
  }



  isGuestNameEntered() {
    return this.guestInfo.name && this.guestInfo.name.trim() != '';
  }

  isGuestContactEntered() {
    return this.guestInfo.contact && this.guestInfo.contact.trim() != '';
  }
}
