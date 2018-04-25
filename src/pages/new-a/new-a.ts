import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { CustomService } from '../../providers/custom.service';
import { AppreciationService } from '../../providers/appreciation.service';
import { SharedService } from '../../providers/shared.service';



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
    private appreciationService: AppreciationService,
    private sharedService:SharedService
  ) {
  }


  submitAppreciation() {

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

    data.title = this.title;
    data.description = this.description;

    if (this.isGuestContactEntered() && this.isGuestNameEntered()) {

      data.visitorInfo = {
        contactNo: this.guestInfo.contact,
        name: this.guestInfo.name
      };
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

  isGuestNameEntered() {
    return this.guestInfo.name && this.guestInfo.name.trim() != '';
  }

  isGuestContactEntered() {
    return this.guestInfo.contact && this.guestInfo.contact.trim() != '';
  }



}
