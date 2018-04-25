import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewSurPage } from './new-sur';
import { Ionic2RatingModule } from 'ionic2-rating';

@NgModule({
  declarations: [
    NewSurPage,
  ],
  imports: [
    Ionic2RatingModule,
    IonicPageModule.forChild(NewSurPage),
  ],
})
export class NewSurPageModule {}
