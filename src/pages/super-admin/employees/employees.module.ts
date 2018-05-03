import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EmployeesPage } from './employees';
import { ImageHandlerModule } from '../../custom-image/image.module';

@NgModule({
  declarations: [
    EmployeesPage,
    
  ],
  imports: [
    IonicPageModule.forChild(EmployeesPage),
    ImageHandlerModule
  ],
})
export class EmployeesPageModule {}
