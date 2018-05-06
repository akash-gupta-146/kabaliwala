import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CustomService } from '../../../providers/custom.service';
import { EmployeeService } from '../../../providers/employee.service';


@IonicPage()
@Component({
  selector: 'page-employees',
  templateUrl: 'employees.html',
})
export class EmployeesPage {

  employees: Array<any>;
  currentPage = 1;

  constructor(
    private customService: CustomService,
    private employeeService: EmployeeService,
    private modalCtrl: ModalController
  ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EmployeesPage');
    this.getEmployees();
  }


  getEmployees(refresher?: any) {

    !refresher && this.customService.showLoader();
    this.employeeService.getEmployees(1)
      .subscribe((res: any) => {
        refresher ? refresher.complete() : this.customService.hideLoader();
        this.employees = this.addRolesList(res);
        this.currentPage = 1;
      }, (err) => {
        refresher ? refresher.complete() : this.customService.hideLoader();
        this.customService.showToast(err.msg);
      });
  }

  doRefresh(refresher: any) {
    this.getEmployees(refresher);
  }

  doInfinite(infinite: any) {
    this.employeeService.getEmployees(this.currentPage + 1)
      .subscribe((res: any) => {
        infinite.complete();
        if (res.length != 0) {
          this.employees = this.employees.concat(this.addRolesList(res));
          this.currentPage++;
        }
      }, (err) => {
        infinite.complete();
        this.customService.showToast(err.msg);
      });
  }

  addRolesList(eList: Array<any>) {
    let roleString;
    eList.forEach(e => {
      roleString = '';
      e.roles.forEach((role: any, index: number, roles: Array<any>) => {
        roleString += `${role.role}` + (index < roles.length-1 ? ',' : '');

      });

      e['rolesList'] = roleString;
    });

    return eList;
  }

  openNewEmployeeModal() {

    const modal = this.modalCtrl.create('NewEmplPage');
    modal.present();
    modal.onDidDismiss((newEmp: any) => {
      if (newEmp) { this.employees.unshift(this.addRolesList([newEmp])[0]); }
    });
  }

}
