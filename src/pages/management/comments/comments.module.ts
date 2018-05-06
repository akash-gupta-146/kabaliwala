import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MomentModule } from 'angular2-moment';

import { CommentsPage } from './comments';

@NgModule({
    declarations: [CommentsPage],

    imports: [
        MomentModule,
        IonicPageModule.forChild(CommentsPage)
    ],

})
export class CommentsModule { }