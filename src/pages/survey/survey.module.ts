import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyPage } from './survey';
import { ChangeRoleModule } from '../management/change-role/change-role.module';


@NgModule({
  
    declarations: [SurveyPage],
   
    imports: [
        ChangeRoleModule,
        IonicPageModule.forChild(SurveyPage)
    ],
    
})
export class SurveyModule { }  