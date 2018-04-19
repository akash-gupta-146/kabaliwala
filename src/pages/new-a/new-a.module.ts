import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewAppreciationPage } from './new-a';

@NgModule({
  declarations: [
    NewAppreciationPage,
  ],
  imports: [
    IonicPageModule.forChild(NewAppreciationPage),
  ],
})
export class NewAppreciationPageModule {}
