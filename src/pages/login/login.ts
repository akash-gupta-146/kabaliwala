import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomService } from '../../providers/custom.service';
import { AuthService } from '../../providers/auth.service';
import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  loginForm: FormGroup;
  loginType = 'guest';

  constructor(
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    private customService: CustomService,
    private authService: AuthService
  ) {
  }


  ngOnInit() {

    this.loginForm = this.formBuilder.group({
      username: ['guest@3', Validators.required],
      password: ['abc123', Validators.required]
    });
  }

  login() {

    // temporary block managment from login
    if (this.loginType === 'management') { return; }


    if (this.loginForm.valid) {

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
      this.navCtrl.setRoot(HomePage);
  }


  loginFailed(err) {

    if (err.status == 400) {

      this.customService.showToast("Please enter valid username or password.");
    } else {

      this.customService.showToast(err.msg);
    }
  }


}
