import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewSurPage } from './new-sur';

@NgModule({
  declarations: [
    NewSurPage,
  ],
  imports: [
    IonicPageModule.forChild(NewSurPage),
  ],
})
export class NewSurPageModule {}
