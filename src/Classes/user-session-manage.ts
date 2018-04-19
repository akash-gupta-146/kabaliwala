import { AlertController, Events, App, MenuController } from 'ionic-angular';
import { AuthService } from '../providers/auth.service';
import { NetworkService } from '../providers/network.service';

import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { CustomService } from '../providers/custom.service';

export class UserSessionManage {

    selectedPage: string;
    rootPage: any;
    // userName: string;
    // userImage: string;

    constructor(
        public events: Events,
        public appCtrl: App,
        public authService: AuthService,
        public alertCtrl: AlertController,
        public networkService: NetworkService,
        public menu: MenuController,
        public customService: CustomService) {

        this.handleEvents();
        this.networkService.checkNetworkStatus();
        this.hasLoggedIn();
    }

    public handleEvents() {
        this.events.subscribe('user:login', () => {
            this.login();
        });
        // this.events.subscribe('session:expired', () => {
        //     this.sessionExpired();
        // });
        this.events.subscribe('user:logout', () => {
            this.logout();
        });
        this.events.subscribe("offline", () => {
            this.offline();
        });
        this.events.subscribe("online", () => {
            this.online();
        });
        this.events.subscribe("user:image", () => {
            this.imageUpdate();
        });
    }


    public hasLoggedIn() {

        if (this.authService.isLoggedIn()) {
            this.authService.fetchUserDetails()
                .subscribe((res) => {
                    // no need to do any thing as userdetails would have been saved in service
                    this.rootPage = HomePage;
                }, (err: any) => {
                    this.customService.showToast('Some error occured, Please Reopen the App or Logout');
                });
            
        } else {
            this.rootPage = LoginPage;
        }
    }

    public login() {
        this.appCtrl.getRootNavs()[0].setRoot(HomePage);
        // this.menu.enable(true);
        // this.imageUpdate();
    }

    public imageUpdate() {

        // this.userImage = localStorage.getItem('picUrl');
        // this.userName = localStorage.getItem('name') || '';
    }

    public logout() {

        localStorage.clear();
        this.appCtrl.getRootNavs()[0].setRoot(LoginPage);
    }

    public offline() {
        // if (this.authService.isLoggedIn()) {

        //     this.appCtrl.getRootNavs()[0].setRoot(NoInternet);
        // }
    }

    public online() {
        // if (this.authService.isLoggedIn()) {
        //     this.login();
        // } else {
        //     this.logout();
        // }
    }


    // public sessionExpired() {

    //     let alert = this.alertCtrl.create({
    //         title: 'Session Expired',
    //         message: "You're already logged in some other device. You may again login.",
    //         enableBackdropDismiss: false,
    //         buttons: [{
    //             text: 'Logout',
    //             handler: () => {
    //                 this.events.publish("user:logout");
    //             }
    //         }]
    //     });
    //     alert.present();
    // }


}


