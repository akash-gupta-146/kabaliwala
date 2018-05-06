import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ComplaintEditPage } from './edit-complaint';

@NgModule({
  declarations: [ComplaintEditPage],
  
  imports: [
      IonicPageModule.forChild(ComplaintEditPage)
    ],
  exports: [ComplaintEditPage]
})

export class ComplaintEditModule { }