webpackJsonp([16],{

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewAppreciationPageModule", function() { return NewAppreciationPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_a__ = __webpack_require__(487);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewAppreciationPageModule = /** @class */ (function () {
    function NewAppreciationPageModule() {
    }
    NewAppreciationPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_a__["a" /* NewAppreciationPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_a__["a" /* NewAppreciationPage */]),
            ],
        })
    ], NewAppreciationPageModule);
    return NewAppreciationPageModule;
}());

//# sourceMappingURL=new-a.module.js.map

/***/ }),

/***/ 487:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewAppreciationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_custom_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_appreciation_service__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_service__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewAppreciationPage = /** @class */ (function () {
    function NewAppreciationPage(navCtrl, customService, appreciationService, sharedService) {
        this.navCtrl = navCtrl;
        this.customService = customService;
        this.appreciationService = appreciationService;
        this.sharedService = sharedService;
        this.title = '';
        this.description = '';
        this.guestInfo = {};
    }
    ;
    NewAppreciationPage.prototype.submitAppreciation = function () {
        var _this = this;
        if (this.isGuestNameEntered() && !this.isGuestContactEntered()) {
            this.customService.showToast('Please also enter your contact no.', 'top');
            return;
        }
        if (!this.isGuestNameEntered() && this.isGuestContactEntered()) {
            this.customService.showToast('Please also enter your name', 'top');
            return;
        }
        if (!this.sharedService.isValidContactNo(this.guestInfo.contact)) {
            return;
        }
        var data = {};
        data.title = this.title;
        data.description = this.description;
        if (this.isGuestContactEntered() && this.isGuestNameEntered()) {
            data.visitorInfo = {
                contactNo: this.guestInfo.contact,
                name: this.guestInfo.name
            };
            this.guestInfo.email && this.guestInfo.email.trim() != '' && (data.visitorInfo.email = this.guestInfo.email);
        }
        ;
        this.customService.showLoader();
        this.appreciationService.submitAppreciation(data)
            .subscribe(function (res) {
            _this.customService.hideLoader();
            _this.navCtrl.push('SubmitSuccessPage');
        }, function (err) {
            _this.customService.hideLoader();
            _this.customService.showToast(err.msg);
        });
    };
    NewAppreciationPage.prototype.isGuestNameEntered = function () {
        return this.guestInfo.name && this.guestInfo.name.trim() != '';
    };
    NewAppreciationPage.prototype.isGuestContactEntered = function () {
        return this.guestInfo.contact && this.guestInfo.contact.trim() != '';
    };
    NewAppreciationPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-new-a',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/new-a/new-a.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Appreciation</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="gray-back">\n\n  <div class="input-box">\n    <ion-item> \n      <ion-icon name="ios-more" item-start></ion-icon>\n      <ion-label stacked>Title</ion-label>\n      <ion-textarea [(ngModel)]="title" required name="title" maxlength="50" placeholder="Enter Title (Max 50 characters)"></ion-textarea>\n    </ion-item>\n    <ion-item no-lines> \n      <ion-icon name="list" item-start></ion-icon>\n      <ion-label stacked>Description</ion-label>\n      <ion-textarea [(ngModel)]="description" required name="description" rows="5" maxlength="2500" placeholder="Enter Description (Max 2500 characters)"></ion-textarea>\n    </ion-item>\n\n  </div>\n\n  <!-- GUEST OPTIONAL INFO FORM -->\n      <ion-list-header>\n          <h5>Your Details (Optional)</h5>\n        </ion-list-header>\n    <div class="input-box">\n      <ion-item no-lines> \n        <ion-icon name="person" item-start></ion-icon>\n        <ion-label>Name</ion-label>\n        <ion-input type="text" placeholder="Your Name"  [(ngModel)]="guestInfo.name" name="name"></ion-input>\n      </ion-item>\n    </div>\n\n    <div class="input-box">\n      <ion-item no-lines> \n        <ion-icon name="mail" item-start></ion-icon>\n        <ion-label>Email</ion-label>\n        <ion-input type="email" placeholder="Your Email Address" [(ngModel)]="guestInfo.email" name="email"></ion-input>\n      </ion-item>\n    </div>\n\n    <div class="input-box">\n      <ion-item no-lines> \n        <ion-icon name="call" item-start></ion-icon>\n        <ion-label>Contact No.</ion-label>\n        <ion-input type="text" placeholder="Your 10 Digits Contact Number" [(ngModel)]="guestInfo.contact" minlength="10" maxlength="10" name="contact"></ion-input>\n      </ion-item>\n    </div>\n\n  <div padding>\n    <button [disabled]="title.trim()==\'\' || description.trim()==\'\'" round icon-right ion-button full type="button" (click)="submitAppreciation()">\n        Send\n        <ion-icon name="send"></ion-icon>\n    </button>\n  </div>\n\n\n</ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/new-a/new-a.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_custom_service__["a" /* CustomService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_appreciation_service__["a" /* AppreciationService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_service__["a" /* SharedService */]])
    ], NewAppreciationPage);
    return NewAppreciationPage;
}());

//# sourceMappingURL=new-a.js.map

/***/ })

});
//# sourceMappingURL=16.js.map