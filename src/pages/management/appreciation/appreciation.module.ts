import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AppreciationsPage } from './appreciation';
import { MomentModule } from 'angular2-moment';
import { ChangeRoleModule } from '../change-role/change-role.module';

@NgModule({

  declarations: [AppreciationsPage],

  imports: [
    MomentModule,
    ChangeRoleModule,
    IonicPageModule.forChild(AppreciationsPage)
  ],

})
export class AppreciationsModule { }  