import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewAPage } from './new-a';

@NgModule({
  declarations: [
    NewAPage,
  ],
  imports: [
    IonicPageModule.forChild(NewAPage),
  ],
})
export class NewAPageModule {}
