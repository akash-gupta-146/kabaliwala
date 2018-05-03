import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';
import { ViewComplaintPage } from './view';
import { ImageHandlerModule } from '../../custom-image/image.module';

@NgModule({
    declarations: [ViewComplaintPage],

    imports: [
        MomentModule,
        ImageHandlerModule,
        IonicPageModule.forChild(ViewComplaintPage)
    ],
})
export class ViewComplaintModule { }  