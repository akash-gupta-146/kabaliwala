import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintsPage } from './complaints';
import { ComplaintMainModule } from '../complaint-main/complaint-main.module';
import { ChangeRoleModule } from '../change-role/change-role.module';

@NgModule({
  declarations: [
    ComplaintsPage,
  ],
  imports: [
    // SortFilterOptionsModule,
    ComplaintMainModule,
    ChangeRoleModule,
    IonicPageModule.forChild(ComplaintsPage),
  ],
})
export class ComplaintsPageModule { }
