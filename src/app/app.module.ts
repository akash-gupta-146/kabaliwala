import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';

//PROVIDERS
import { NetworkService } from '../providers/network.service';
import { CustomHttpService } from '../providers/custom-http.service';
import { CustomService } from '../providers/custom.service';
import { AuthService } from '../providers/auth.service';
import { Network } from '@ionic-native/network';
import { ComplaintService } from '../providers/complaint.service';
import { AppreciationService } from '../providers/appreciation.service';
import { SurveyService } from '../providers/survey.service';
import { SharedService } from '../providers/shared.service';
import { StoreService } from '../providers/store.service';
import { EmployeeService } from '../providers/employee.service';
import { DashboardPage } from '../pages/dashboard/dashboard';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      preloadModules: true
    }),
    HttpClientModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Network,
    NetworkService,
    CustomHttpService,
    CustomService,
    AuthService,
    ComplaintService,
    AppreciationService,
    SurveyService,
    StoreService,
    EmployeeService,
    SharedService
  ]
})
export class AppModule { }
