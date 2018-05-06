import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintsPage } from './complaints';
import { ComplaintMainModule } from '../complaint-main/complaint-main.module';

@NgModule({
  declarations: [
    ComplaintsPage,
  ],
  imports: [
    // SortFilterOptionsModule,
    ComplaintMainModule,
    IonicPageModule.forChild(ComplaintsPage),
  ],
})
export class ComplaintsPageModule { }
