import { Component } from '@angular/core';
import { IonicPage, AlertController, Alert } from 'ionic-angular';
import { CustomService } from '../../../providers/custom.service';
import { StoreService } from '../../../providers/store.service';


@IonicPage()
@Component({
  selector: 'page-stores',
  templateUrl: 'stores.html',
})
export class StoresPage {

  stores: Array<{ name: string, location: string }>;

  constructor(
    private alert: AlertController,
    private customService: CustomService,
    private storeService: StoreService
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StoresPage');
    this.getStores();
  }

  getStores() {
    this.customService.showLoader();
    this.storeService.getStores()
      .subscribe((res: any) => {
        this.customService.hideLoader();
        this.stores = res;
      }, (err) => {
        this.customService.hideLoader();
        this.customService.showToast(err.msg);
      });
  }

  openNewStoreAlert() {

    const alert = this.alert.create({
      title: 'New Store',
      inputs: [
        {
          name: 'name',
          type: 'text',
          placeholder: 'Enter Store Name'
        }, {
          name: 'location',
          type: 'text',
          placeholder: 'Enter Store Location'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => { }
        }, {
          text: 'Create',
          handler: data => {
            console.log(data);
            if (data.name.trim() === '') {
              this.customService.showToast('Store name cannot be empty', 'top');
              return false;
            }
            if (data.location.trim() === '') {
              this.customService.showToast('Store location cannot be empty', 'top');
              return false;
            }
            this.postStore(data, alert);
            return false;
          }
        }
      ]
    });

    alert.present();

  }

  postStore(data: any, alert: Alert) {
    this.customService.showLoader();
    this.storeService.createStore(data)
      .subscribe((res: any) => {
        this.customService.hideLoader();
        this.customService.showToast('Store created successfully');
        // if stores is undefined, in case if there is no store aready present
        if (!this.stores) {
          this.stores = [res];
        } else {
          this.stores.unshift(res);
        }
        alert.dismiss()
          .then(() => this.showNewGuestInfo(res));
      }, (err) => {

        this.customService.hideLoader();
        this.customService.showToast(err.msg);
      });
  }

  showNewGuestInfo(res: any) {

    const msg: string = `Username: ${res.guestUser.username}`;
    const alert = this.alert.create({
      title: 'Store created',
      message: msg,
      buttons: [{
        text: 'Ok',
        role: 'cancel',
        handler: () => { }
      }]
    });
    alert.present();
  }

}
