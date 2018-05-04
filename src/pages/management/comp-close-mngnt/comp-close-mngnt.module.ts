import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintCloseManagementPage } from './comp-close-mngnt';

@NgModule({
  declarations: [ComplaintCloseManagementPage],
  
  imports: [
      IonicPageModule.forChild(ComplaintCloseManagementPage)
    ],
  exports: [ComplaintCloseManagementPage]
})

export class ComplaintCloseManagementModule { }