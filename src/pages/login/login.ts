import { Component } from '@angular/core';
import { IonicPage, NavController, Events, MenuController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomService } from '../../providers/custom.service';
import { AuthService } from '../../providers/auth.service';
import { HomePage } from '../home/home';

declare var URLPREFIX;
declare var ROLE;

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  loginType = 'guest';
  audio:any;

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private customService: CustomService,
    private authService: AuthService,
    private events:Events,
    private menu: MenuController
  ) {
  }


  ngOnInit() {
    this.menu.swipeEnable(false);
    this.loginForm = this.formBuilder.group({
      username: ['kabliwala', Validators.required],
      password: ['abc123', Validators.required]
    });
  }



  login() {


    if (this.loginForm.valid) {

      // clear the URLPREFIX before each fresh login in order to avoid any bug
      URLPREFIX = undefined;
      ROLE= undefined;

      this.customService.showLoader("Authenticating...");
      this.authService.login(this.loginForm.value)
        .subscribe((res: any) => {

          this.authService.saveToken(res.access_token);
          this.authService.fetchUserDetails()
            .subscribe((res: any) => {

              this.customService.hideLoader();
              // this.authService.saveUserDetails(res);
              this.navigate();
            }, (err) => {

              this.customService.hideLoader();
              localStorage.clear();
            });
        }, (err) => {

          this.customService.hideLoader();
          this.loginFailed(err);
        });
    } else {

      if (this.loginForm.controls.username.invalid) {
        this.customService.showToast('Username is required');
      } else {
        this.customService.showToast('Password is required');
      }
    }
  }

  navigate() {
    // switch (this.loginType) {
    //   case 'guest': this.navCtrl.setRoot(HomePage); break;
    //   // case 'management':this.navCtrl.setRoot(); break;
    //   // case 'superadmin':this.navCtrl.setRoot(); break;
    // }

    this.events.publish('user:login');


  }


  loginFailed(err) {

    if (err.status == 400) {

      this.customService.showToast("Please enter valid username or password.");
    } else {

      this.customService.showToast(err.msg);
    }
  }

  playSound(type:string){
    if(type=='click'){
      this.audio = document.getElementById("click");
      this.audio.play();
    }
  }

}
