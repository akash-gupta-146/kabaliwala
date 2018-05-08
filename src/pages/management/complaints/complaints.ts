import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { ComplaintService } from '../../../providers/complaint.service';
import { ComplaintMainPage } from '../complaint-main/complaint-main';
declare var URLPREFIX;
declare var ROLE;

@IonicPage()
@Component({
  selector: 'page-complaints',
  templateUrl: 'complaints.html',
})
export class ComplaintsPage {

  title: string;

  isAdmin = URLPREFIX === 'a'; // to show/hide the change role btn
  role = ROLE; // to show the currently selected role

  @ViewChild(ComplaintMainPage) complaintMainPage: ComplaintMainPage;

  //variables for scroll
  start = 0;
  threshold = 100;
  slideHeaderPrevious = 0;
  ionScroll: any;
  showHelpers: boolean;
  hideHelpers: boolean;
  headercontent: any;

  complaintList: Array<any>;
  searchInput: string = '';
  debounceDuration: number = 400;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private complaintService: ComplaintService,
    private alertCtrl: AlertController
  ) {
    this.complaintService.compOrSugg = "complaint";
    this.title = this.complaintService.compOrSugg + 's';

    this.showHelpers = false;
    this.hideHelpers = true;
  }
      
  onRoleChanged(ev: any) {
    this.complaintMainPage.currentPage = 1;
    this.complaintMainPage.getComplaints(1);
  }

  ionViewDidLoad() {
    // Ionic scroll element
    // this.ionScroll = this.myElement.nativeElement.getElementsByClassName('scroll-content')[0];
    // // On scroll function
    // this.ionScroll.addEventListener('scroll', () => {
    //   if (this.ionScroll.scrollTop - this.start > this.threshold) {
    //     this.showHelpers = true;
    //     this.hideHelpers = false;
    //   } else {
    //     this.showHelpers = false;
    //     this.hideHelpers = true;
    //   }
    //   if (this.slideHeaderPrevious >= this.ionScroll.scrollTop - this.start) {
    //     this.showHelpers = false;
    //     this.hideHelpers = true;
    //   }
    //   this.slideHeaderPrevious = this.ionScroll.scrollTop - this.start;
    // });
  }


  onSortFilterSelect(event: any) {

    this.complaintMainPage.onSortFilterSelect(event);
    this.searchInput = '';
  }

  // openNewComplaintModal() {

  //   this.complaintMainPage.openNewComplaintModal();
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
