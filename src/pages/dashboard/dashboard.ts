import { Component } from '@angular/core';
import { IonicPage, Events } from 'ionic-angular';
import { DashboardService } from '../../providers/dashboard.service';
declare const google: any;

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
})
export class DashboardPage {

  loaded = false;

  complaintByStatus: Array<any>;;
  complaintByCategoryStatus: Array<any>;
  complaintStatusStoreWise: Array<any>;

  appreciationStoreWise: Array<any>;

  surveyTakenStoreWise: Array<any>;
  ratingGroupedByStore: Array<any>;
  ratingGroupedByQuestion: Array<any>;

  constructor(
    private dashboardService: DashboardService,
    private events: Events
  ) {
  }

  ionViewDidLoad() {
    //    LOAD SCRIP, WHEN LOADED, FETCH THE YOUTUBE DATA 
    this.dashboardService.loadScript().subscribe(
      (res) => { },
      (err) => { console.log(err); },
      () => {
        this.getComplaintByStatus();
        this.getComplaintByCategory();
        this.getComplaintByStore();
        this.getAppreciationByStore();
        this.getSurveyRatingByStore();
        this.getSurveyRatingByQuestion();
        this.getSurveyByStore();
      }
    );


  }

  getComplaintByStatus() {

    this.dashboardService.complaintByStatus('complaint').subscribe((res: any) => {

      this.loaded = true;
      if (res && res.length) {
        this.complaintByStatus = res;
        setTimeout(() => {
          this.createGooglePieChart(res, 'complaintStatus_div');
        }, 100);
      }
    }, (err: any) => {

    });
  }

  getComplaintByCategory() {

    this.dashboardService.complaintByCategory('complaint').subscribe((res: any) => {
      this.loaded = true;
      if (res && res.length) {

        this.complaintByCategoryStatus = res;
        setTimeout(() => {
          this.createGoogleBarChart(res, 'complaintByCategoryStatus_div');
        }, 100);
      }
    }, (err: any) => {

    });
  }

  getComplaintByStore() {

    this.dashboardService.complaintByStore('complaint').subscribe((res: any) => {

      this.loaded = true;
      if (res && res.length) {

        this.complaintStatusStoreWise = res;
        setTimeout(() => {
          this.createGoogleBarChart(res, 'complaintStatusStoreWise_div');
        }, 100);
      }
    }, (err: any) => {

    });
  }


  getAppreciationByStore() {

    this.dashboardService.appreciationByStore().subscribe((res: any) => {
      this.loaded = true;
      if (res && res.length) {
        this.appreciationStoreWise = res;
        setTimeout(() => {
          this.createGooglePieChart(res, 'appreciationStoreWise_div');
        }, 100);
      }
    }, (err: any) => {

    });
  }

  getSurveyRatingByStore() {

    this.dashboardService.surveyRatingByStore().subscribe((res: any) => {

      this.loaded = true;
      if (res && res.length) {

        this.ratingGroupedByStore = res;
        setTimeout(() => {
          this.createGoogleBarChart(res, 'ratingGroupedByStore_div');
        }, 100);
      }
    }, (err: any) => {

    });
  }

  getSurveyRatingByQuestion() {

    this.dashboardService.surveyRatingByQuestion().subscribe((res: any) => {

      this.loaded = true;
      if (res && res.length) {

        this.ratingGroupedByQuestion = res;
        setTimeout(() => {
          this.createGoogleBarChart(res, 'ratingGroupedByQuestion_div');
        }, 100);
      }
    }, (err: any) => {

    });
  }

  getSurveyByStore() {

    this.dashboardService.surveyStore().subscribe((res: any) => {
      this.loaded = true;
      if (res && res.length) {

        this.surveyTakenStoreWise = res;
        setTimeout(() => {
          this.createGooglePieChart(res, 'surveyTakenStoreWise_div');
        }, 100);
      }
    }, (err: any) => {

    });
  }


  //////////////////////////////
  createGooglePieChart(data: any, chartDivId: string) {
    google.charts.load('current', { packages: ['corechart', 'bar'] });


    google.charts.setOnLoadCallback(() => {


      let inputData: Array<Array<any>> = [[]]; // 2D array
      let options: any = {}; // to specify options for pie charts

      switch (chartDivId) {
        case 'complaintStatus_div':
          inputData[0] = ['Status', 'count'];
          data.forEach((r: { count: number, statusName: string }, index: number) => {
            inputData[index + 1] = [r.statusName, r.count];
          });
          // set options
          options.colors = [];
          data.forEach((status: any) => { options.colors.push(status.statusColor); });
          break;

        case 'appreciationStoreWise_div':
          inputData[0] = ['Store', 'appreciationCount'];
          data.forEach((r: any, index: number) => {
            inputData[index + 1] = [r.storeName, r.count];
          });
          break;


        case 'surveyTakenStoreWise_div':
          inputData[0] = ['Store', 'surveyCount '];
          data.forEach((r: any, index: number) => {
            inputData[index + 1] = [r.storeName, r.count];
          });
          break;
      }

      const dataOutput = google.visualization.arrayToDataTable(inputData);

      // const h = dataOutput.getNumberOfRows() * 30 + 200;
      options.height = 350;
      options.legend = {
        position: 'right',
        maxLines: 3
      };
      options.chartArea = { width: '100%' }

      const chart = new google.visualization.PieChart(document.getElementById(chartDivId));
      chart.draw(dataOutput, options);

      // if (chartDivId === 'userData_div') {
      //   google.visualization.events.addListener(chart, 'select', () => {
      //     console.log('EVENT LISTENER  CALLED////', chart.getSelection());

      //     // in case when boundary of chart is cliked/touched,
      //     // chart.getSelection() gives []
      //     // Ignore this cases, to avoid the error
      //     if (chart.getSelection().length !== 0) {
      //       const selectedRow = chart.getSelection()[0].row;
      //       const selectedType = this.rowToInfluencerType[selectedRow];
      //       this.fetchUserDataByType(selectedType);
      //     }

      //   });
      // }
    });
  }

  createGoogleBarChart(data: any, chartDivId: string) {

    google.charts.load('current', { packages: ['corechart', 'bar'] });


    google.charts.setOnLoadCallback(() => {


      let inputData: Array<Array<any>> = [[]]; // 2D array

      let options: any = {}; // to specify options for pie charts

      switch (chartDivId) {
        case 'complaintByCategoryStatus_div':

          if (!data[0].statusResults) { return; }
          // set the first row of 2D array 
          inputData[0] = ['categories'];
          const statusNames = data[0].statusResults.map(s => s.statusName);
          inputData[0] = inputData[0].concat(statusNames);

          //set the remaining rows
          data.forEach((catg: any, index: number) => {
            inputData[index + 1] = [catg.categoryName];
            catg.statusResults.forEach(status => {
              inputData[index + 1].push(status.count);
            });
          });

          // set colros of the categories
          options.colors = [];
          data[0].statusResults.forEach((status: any) => { options.colors.push(status.statusColor); });
          break;

        case 'complaintStatusStoreWise_div':
          // set the first row of 2D array 
          inputData[0] = ['stores'];
          const sNames = data[0].statusResults.map(s => s.statusName);
          inputData[0] = inputData[0].concat(sNames);

          //set the remaining rows
          data.forEach((store: any, index: number) => {
            inputData[index + 1] = [store.storeName];
            store.statusResults.forEach(status => {
              inputData[index + 1].push(status.count);
            });
          });

          // set colros of the categories
          options.colors = [];
          data[0].statusResults.forEach((status: any) => { options.colors.push(status.statusColor); });
          break;

        case 'ratingGroupedByStore_div':
          // set the first row of 2D array 
          inputData[0] = ['ratings'];
          const ratings = data[0].starResults.map(s => s.starValue.toString());
          inputData[0] = inputData[0].concat(ratings);

          //set the remaining rows
          data.forEach((store: any, index: number) => {
            inputData[index + 1] = [store.storeName];
            store.starResults.forEach(rating => {
              inputData[index + 1].push(rating.count);
            });
          });
          break;

        case 'ratingGroupedByQuestion_div':
          // set the first row of 2D array 
          inputData[0] = ['ratings'];
          const rating = data[0].starResults.map(s => s.starValue.toString());
          inputData[0] = inputData[0].concat(rating);

          const questions = [];

          //set the remaining rows
          data.forEach((ques: any, index: number) => {
            inputData[index + 1] = [`Ques. ${index + 1}`];
            questions.push(`Ques. ${index + 1}: `+ques.question);
            ques.starResults.forEach(rating => {
              inputData[index + 1].push(rating.count);
            });
          });

          options.title = questions.join('\n');
          break;

      }

      const dataOutput = google.visualization.arrayToDataTable(inputData);

      const h = dataOutput.getNumberOfRows() * 30 + 200;
      options.height = options.title?dataOutput.getNumberOfRows() * 30 + 300:h;
      options.legend = {
        position: 'top',
        maxLines: 3,
      };
      options.isStacked = true;
      options.chartArea = { width: '75%' }

      const chart = new google.visualization.BarChart(document.getElementById(chartDivId));
      chart.draw(dataOutput, options);

      // if (chartDivId === 'userData_div') {
      //   google.visualization.events.addListener(chart, 'select', () => {
      //     console.log('EVENT LISTENER  CALLED////', chart.getSelection());

      //     // in case when boundary of chart is cliked/touched,
      //     // chart.getSelection() gives []
      //     // Ignore this cases, to avoid the error
      //     if (chart.getSelection().length !== 0) {
      //       const selectedRow = chart.getSelection()[0].row;
      //       const selectedType = this.rowToInfluencerType[selectedRow];
      //       this.fetchUserDataByType(selectedType);
      //     }

      //   });
      // }
    });
  }







  onLogoutBtn() {
    this.events.publish('user:logout')
  }

}
