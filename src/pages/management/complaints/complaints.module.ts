import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintsPage } from './complaints';
import { ComplaintMainModule } from '../complaint-main/complaint-main.module';
import { ChangeRoleModule } from '../change-role/change-role.module';
import { SortFilterOptionsModule } from '../sort-filter-options/sort-filter.module';

@NgModule({
  declarations: [
    ComplaintsPage,
  ],
  imports: [
    // SortFilterOptionsModule,
    ComplaintMainModule,
    ChangeRoleModule,
    SortFilterOptionsModule,
    IonicPageModule.forChild(ComplaintsPage),
  ],
})
export class ComplaintsPageModule { }
