import { NgModule } from '@angular/core';
import { IonicPageModule} from 'ionic-angular';
import { SuggestionsPage } from './suggestions';
import { ComplaintMainModule } from '../complaint-main/complaint-main.module';



@NgModule({
  
    declarations: [SuggestionsPage],
   
    imports: [
        // SortFilterOptionsModule,
        ComplaintMainModule,
        IonicPageModule.forChild(SuggestionsPage)
    ],
    
})
export class SuggestionsModule { }  