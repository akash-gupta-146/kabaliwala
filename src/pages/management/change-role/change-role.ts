import { Component, Output, EventEmitter } from '@angular/core';
import { AlertController } from 'ionic-angular';

declare const URLPREFIX;
declare var ROLE;

@IonicPage()
@Component({
    selector: 'change-role',
    templateUrl: './change-role.html',
})

export class ChangeRolePage {

    isAdmin = URLPREFIX === 'a'; // to show/hide the change role btn
    role = ROLE; // to show the currently selected role

    //to inform the parent component that role has been changed
    @Output() roleChanged: EventEmitter<null> = new EventEmitter(null);

    constructor(
        private alertCtrl: AlertController,
    ) { }

    onChangeRole() {
        let alert = this.alertCtrl.create({
            title: 'Change Role',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: () => { }
                },
                {
                    text: 'Change',
                    handler: (data) => {
                        if (data !== ROLE) {
                            ROLE = this.role = data;
                            this.roleChanged.emit(null);
                        }
                    }
                }
            ]
        });

        const roles: Array<any> = JSON.parse(localStorage.getItem('userInfo')).roles;

        roles.forEach(r => {
            alert.addInput({
                type: 'radio',
                value: r,
                label: r,
                checked: r === ROLE
            })
        });
        alert.present();
    }

}