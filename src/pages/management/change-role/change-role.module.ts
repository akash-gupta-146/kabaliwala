import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChangeRolePage } from './change-role';

@NgModule({
    declarations: [ChangeRolePage],

    imports: [
        IonicPageModule.forChild(ChangeRolePage)
    ],
    exports:[ChangeRolePage]

})
export class ChangeRoleModule { }