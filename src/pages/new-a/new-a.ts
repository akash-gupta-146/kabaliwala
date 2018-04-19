import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CustomService } from '../../providers/custom.service';
import { AppreciationService } from '../../providers/appreciation.service';

/**
 * Generated class for the NewAPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-a',
  templateUrl: 'new-a.html',
})
export class NewAppreciationPage {

  title: string = '';
  description: string = '';
  guestInfo: { name: string, email: string, contact: string } = <any>{};;

  constructor(
    public navCtrl: NavController,
    private customService: CustomService,
    private appreciationService: AppreciationService
  ) {
  }


  submitAppreciation() {

    if (!this.isValidContactNo()) {
      return;
    }

    const data: any = {};

    data.title = this.title;
    data.description = this.description;

    if (this.guestInfo.contact && this.guestInfo.contact.trim() != '') {

      data.visitorInfo = { contactNo: this.guestInfo.contact };
      this.guestInfo.name && this.guestInfo.name.trim() != '' && (data.visitorInfo.name = this.guestInfo.name);
      this.guestInfo.email && this.guestInfo.email.trim() != '' && (data.visitorInfo.email = this.guestInfo.email);
    };

    this.customService.showLoader();
    this.appreciationService.submitAppreciation(data)
      .subscribe((res: any) => {
        this.customService.hideLoader();
        this.navCtrl.push('SubmitSuccessPage');
      }, (err) => {

        this.customService.hideLoader();
        this.customService.showToast(err.msg);
      });
  }

  isValidContactNo() {

    
    const pattern = /[^0-9]/;
    
    if (this.guestInfo.contact && pattern.test(this.guestInfo.contact)) {
      this.customService.showToast('Only digits are allowed in Contact No.','top');
      return false;
    }

    if(this.guestInfo.contact && this.guestInfo.contact.trim().length !== 10){
      this.customService.showToast('Contact No. must contain exactly 10 digits', "top", true);
      return false;
    }

    return true;
  }

}
