
import { Component, Input } from '@angular/core';
import { IonicPage, ModalController, AlertController, ActionSheetController, Events } from 'ionic-angular';
import { ComplaintSuggestionOptionsBaseClass } from '../../../Classes/compl-suggestion-base-class';
import { CustomService } from '../../../providers/custom.service';
import { ComplaintService } from '../../../providers/complaint.service';

@IonicPage()
@Component({
    selector: 'c-s-options',
    templateUrl: './compl-suggestion-options.html',
    styles: [``]

})

export class ComplaintSuggestionOptionsPage extends ComplaintSuggestionOptionsBaseClass {

    @Input() complaint: any;
    @Input() complaintIndex: any;

    compalintStatusChanged: boolean;
    isStudent: boolean;
    constructor(
        public mdlCtrl: ModalController,
        public alertCtrl: AlertController,
        public actionSheetCtrl: ActionSheetController,
        public customService: CustomService,
        public complaintService: ComplaintService,
        public events: Events
    ) {
        super(mdlCtrl, alertCtrl, actionSheetCtrl, customService, complaintService, events);

    }




}