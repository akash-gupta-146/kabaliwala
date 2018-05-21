import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SurveyDetailPage } from './survey-detail';
import { Ionic2RatingModule } from 'ionic2-rating';
import { MomentModule } from 'angular2-moment';


@NgModule({
  
    declarations: [SurveyDetailPage],
   
    imports: [
        Ionic2RatingModule,
        MomentModule,
        IonicPageModule.forChild(SurveyDetailPage)
    ],
    
})
export class SurveyDetailModule { }  