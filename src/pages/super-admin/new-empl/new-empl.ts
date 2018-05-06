import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { EmployeeService } from '../../../providers/employee.service';
import { CustomService } from '../../../providers/custom.service';


@IonicPage()
@Component({
  selector: 'page-new-empl',
  templateUrl: 'new-empl.html',
})
export class NewEmplPage {

  // required data for the form
  roles: Array<any>;
  stores: Array<any>;

  //ngModal variables
  name: string;
  nickName: string;
  contactNo: string;
  email: string;
  username: string;
  password: string;

  roleStoreList: Array<{ storeId: number, roleId: number }> = [{ storeId: null, roleId: null }];


  constructor(
    private viewCtrl: ViewController,
    private empService: EmployeeService,
    private customService: CustomService
  ) { }

  ionViewDidLoad() {
    this.getRoleAndStores();
  }

  getRoleAndStores() {
    this.customService.showLoader();
    this.empService.getRolesAndStores()
      .subscribe((res: Array<any>) => {
        [this.roles, this.stores] = res;
        this.customService.hideLoader();

      }, (err: any) => {
        this.customService.hideLoader();
        this.customService.showToast(err.msg);
        this.dismiss();
      })
  }

  onAdd() {
    if (this.roleStoreList.length <= this.roles.length * this.stores.length) {
      this.roleStoreList.push({ storeId: null, roleId: null });
    }
  }

  onRemove(index: number) {
    this.roleStoreList.splice(index, 1);
  }

  dismiss(data?:any) {
    this.viewCtrl.dismiss(data);
  }

  onSubmit() {
    const data: any = {};
    data.name = this.name;
    data.username = this.username;
    data.password = this.password;

    this.nickName && (data.nickName = this.nickName);
    this.contactNo && (data.contactNo = this.contactNo);
    this.email && (data.email = this.email);

    data.roleStoreList = this.roleStoreList;

    // send post request
    this.customService.showLoader();
    this.empService.createEmployee(data)
      .subscribe((res: any) => {
        this.customService.hideLoader();
        this.customService.showToast('Employee created successfully');
        this.dismiss(res);
      }, (err: any) => {
        this.customService.hideLoader();
        this.customService.showToast(err.msg);
      })

  }

}
