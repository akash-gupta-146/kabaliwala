import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { SuggestionsPage } from './suggestions';
import { ComplaintMainModule } from '../complaint-main/complaint-main.module';
import { ChangeRoleModule } from '../change-role/change-role.module';
import { SortFilterOptionsModule } from '../sort-filter-options/sort-filter.module';



@NgModule({
  
    declarations: [SuggestionsPage],
   
    imports: [
        // SortFilterOptionsModule,
        ComplaintMainModule,
        ChangeRoleModule,
        SortFilterOptionsModule,
        IonicPageModule.forChild(SuggestionsPage)
    ],
    
})
export class SuggestionsModule { }  