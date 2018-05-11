
import { Injectable } from '@angular/core';

import { FCM } from '@ionic-native/fcm';
import { AuthService } from './auth.service';
import { AlertController } from 'ionic-angular';

@Injectable()
export class PushMessageService {

    constructor(private fcm: FCM, private authService: AuthService, private alert: AlertController) { }

    initializeFCM() {
        this.fcm.getToken().then(token => {
            // alert(JSON.stringify(token));
            this.authService.tokenUpdate(token)
                .subscribe((res: any) => {
                    alert(JSON.stringify(res));

                }, (err: any) => {
                    alert(JSON.stringify(err));
                    const alertC = this.alert.create({
                        title: 'Error in Push notifications',
                        message: 'Due to some errro, you wont be able to recive the push notifications',
                        buttons: ['Dismiss']
                    });
                    alertC.present();
                });
        });
        this.fcm.subscribeToTopic('all');

        this.fcm.onNotification().subscribe(data => {
            // alert(JSON.stringify(data));
            if (data.wasTapped) {
                console.info("Received in background");
            } else {
                console.info("Received in foreground");
            };
        });
        this.fcm.onTokenRefresh().subscribe(token => {
            // backend.registerToken(token);
        });
    }


}

