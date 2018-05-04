import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FacultySearchPage } from './search';
import { ImageHandlerModule } from '../../../custom-image/image.module';

@NgModule({
  declarations: [FacultySearchPage],
  
  imports: [
    ImageHandlerModule,
      IonicPageModule.forChild(FacultySearchPage)
    ],
})

export class FacultySearchModule { }