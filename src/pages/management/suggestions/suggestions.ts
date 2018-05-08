import { Component, ViewChild } from '@angular/core';
import { IonicPage } from 'ionic-angular';
import { ComplaintMainPage } from '../complaint-main/complaint-main';
import { ComplaintService } from '../../../providers/complaint.service';

@IonicPage()
@Component({
    templateUrl: './suggestions.html'

})

export class SuggestionsPage {

    title: string;
    complaintList: Array<any>;
    searchInput: string = '';
    debounceDuration: number = 400;
    @ViewChild(ComplaintMainPage) complaintMainPage: ComplaintMainPage;

    constructor(
        private complaintService: ComplaintService

    ) {
        this.complaintService.compOrSugg = "suggestion";
        this.title = this.complaintService.compOrSugg + 's';
    }

    onRoleChanged(ev: any) {
        this.complaintMainPage.currentPage = 1;
        this.complaintMainPage.getComplaints(1);
    }



    onSortFilterSelect(event: any) {

        this.complaintMainPage.onSortFilterSelect(event);
        this.searchInput = '';

    }

    // openNewComplaintModal() {
    //     this.complaintMainPage.openNewComplaintModal();
    // }


    doRefresh(refresher: any) {
        this.complaintMainPage.doRefresh(refresher);
        this.searchInput = '';
    }

    onSearchInput(event: any) {

        this.complaintMainPage.onSearchInput(event);
    }

    onSearchClear(event: any) {

        this.complaintMainPage.onSearchClear(event);
    }
}