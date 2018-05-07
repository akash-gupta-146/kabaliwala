import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppreciationsPage } from './appreciation';
import { MomentModule } from 'angular2-moment';

@NgModule({

  declarations: [AppreciationsPage],

  imports: [
    MomentModule,
    IonicPageModule.forChild(AppreciationsPage)
  ],

})
export class AppreciationsModule { }  