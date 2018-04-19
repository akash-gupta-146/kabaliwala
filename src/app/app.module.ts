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


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage 
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Network,
    NetworkService,
    CustomHttpService,
    CustomService,
    AuthService,
    ComplaintService
  ]
})
export class AppModule {}
