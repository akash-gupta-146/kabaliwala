webpackJsonp([15],{

/***/ 316:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewComplaintPageModule", function() { return NewComplaintPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_c__ = __webpack_require__(486);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewComplaintPageModule = /** @class */ (function () {
    function NewComplaintPageModule() {
    }
    NewComplaintPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_c__["a" /* NewComplaintPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_c__["a" /* NewComplaintPage */]),
            ],
        })
    ], NewComplaintPageModule);
    return NewComplaintPageModule;
}());

//# sourceMappingURL=new-c.module.js.map

/***/ }),

/***/ 486:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewComplaintPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_custom_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_complaint_service__ = __webpack_require__(105);
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





/**
 * Generated class for the NewCPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewComplaintPage = /** @class */ (function () {
    function NewComplaintPage(navCtrl, navParams, customService, complaintService, sharedService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.customService = customService;
        this.complaintService = complaintService;
        this.sharedService = sharedService;
        this.title = "" + this.complaintService.compOrSugg;
        this.guestInfo = {};
    }
    ;
    NewComplaintPage.prototype.ionViewDidLoad = function () {
        this.getComplaintCategories();
    };
    NewComplaintPage.prototype.getComplaintCategories = function () {
        var _this = this;
        this.customService.showLoader();
        this.complaintService.getComplaintCategories()
            .subscribe(function (res) {
            _this.complaintCategories = res;
            _this.customService.hideLoader();
        }, function (err) {
            _this.customService.hideLoader();
            _this.customService.showToast('Could not fetch the required data, Please try again');
        });
    };
    NewComplaintPage.prototype.resetSubCategories = function () {
        this.selectedSubCategory = null;
    };
    NewComplaintPage.prototype.onSubmit = function () {
        var _this = this;
        if (this.isGuestNameEntered() && !this.isGuestContactEntered() && !this.isGuestEmailEntered()) {
            this.customService.showToast('Please also enter your Contact No. or Email', 'top');
            return;
        }
        if (!this.isGuestNameEntered() && (this.isGuestContactEntered() || this.isGuestEmailEntered())) {
            this.customService.showToast('Please also enter your name', 'top');
            return;
        }
        if (!this.sharedService.isValidContactNo(this.guestInfo.contact)) {
            return;
        }
        var data = {};
        data.againstCategoryId = this.selectedSubCategory ? this.selectedSubCategory.id : this.selectedCategory.id;
        data.title = this.complaintTitle;
        data.description = this.complaintDescription;
        if ((this.isGuestContactEntered() || this.isGuestEmailEntered()) && this.isGuestNameEntered()) {
            data.visitorInfo = {
                name: this.guestInfo.name
            };
            this.isGuestContactEntered() && (data.visitorInfo.contact = this.guestInfo.contact);
            this.isGuestEmailEntered() && (data.visitorInfo.email = this.guestInfo.email);
        }
        ;
        this.customService.showLoader();
        this.complaintService.submitComplaint(data)
            .subscribe(function (res) {
            _this.customService.hideLoader();
            _this.navCtrl.push('SubmitSuccessPage');
        }, function (err) {
            _this.customService.hideLoader();
            _this.customService.showToast(err.msg);
        });
    };
    NewComplaintPage.prototype.isGuestNameEntered = function () {
        return this.guestInfo.name && this.guestInfo.name.trim() != '';
    };
    NewComplaintPage.prototype.isGuestContactEntered = function () {
        return this.guestInfo.contact && this.guestInfo.contact.trim() != '';
    };
    NewComplaintPage.prototype.isGuestEmailEntered = function () {
        return this.guestInfo.email && this.guestInfo.email.trim() != '';
    };
    NewComplaintPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-new-c',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/new-c/new-c.html"*/'<!-- THIS FILE IS ALSO USED FRO SUGGESTIONS -->\n\n<ion-header>\n  <ion-navbar color="primary">\n    <ion-title no-lines>{{title | titlecase}}</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="gray-back">\n  <div *ngIf="complaintCategories">\n\n    <form #complaintForm="ngForm" (ngSubmit)="onSubmit()">\n      <div class="input-box">\n        <ion-item no-lines>\n          <ion-icon name="sad" item-start color="primary" *ngIf="complaintService.compOrSugg==\'complaint\'"></ion-icon>\n          <ion-icon name="bulb" item-start color="primary" *ngIf="complaintService.compOrSugg!=\'complaint\'"></ion-icon>\n          <ion-label>{{complaintService.compOrSugg==\'complaint\'?\'Complaint Against\':\'Suggestion For\'}}</ion-label>\n          <ion-select [(ngModel)]="selectedCategory" (ionChange)="resetSubCategories()" required name="category">\n            <ion-option *ngFor="let category of complaintCategories" [value]="category">{{category.name}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </div>\n\n      <div class="input-box" *ngIf="selectedCategory?.childCategory && selectedCategory.childCategory.length > 0">\n        <ion-item no-lines>\n          <ion-icon name="options" item-start></ion-icon>\n          <ion-label>SubCategory</ion-label>\n          <ion-select [(ngModel)]="selectedSubCategory" required name="subCategory">\n            <ion-option *ngFor="let subCat of selectedCategory.childCategory" [value]="subCat">{{subCat.name}}</ion-option>\n          </ion-select>\n        </ion-item>\n      </div>\n\n      <div class="input-box">\n        <ion-item>\n          <ion-icon name=\'ios-more\' item-left></ion-icon>\n          <ion-label stacked>Title</ion-label>\n          <ion-textarea [(ngModel)]="complaintTitle" required name="title" maxlength="50" placeholder="Enter Title (Max 50 characters)"></ion-textarea>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-icon name=\'list\' item-left></ion-icon>\n          <ion-label stacked>Description</ion-label>\n          <ion-textarea [(ngModel)]="complaintDescription" required name="description" rows="5" maxlength="2500" placeholder="Enter Description (Max 2500 characters)"></ion-textarea>\n        </ion-item>\n      </div>\n\n      <!-- GUEST OPTIONAL INFO FORM -->\n      <ion-list-header>\n        <h5>Your Details (Optional)</h5>\n      </ion-list-header>\n      <div class="input-box">\n        <ion-item no-lines>\n          <ion-icon name=\'person\' item-left></ion-icon>\n          <ion-label>Name</ion-label>\n          <ion-input placeholder="Your Name" type="text" [(ngModel)]="guestInfo.name" [ngModelOptions]="{standalone: true}" name="name"></ion-input>\n        </ion-item>\n      </div>\n\n      <div class="input-box">\n        <ion-item no-lines>\n          <ion-icon name=\'mail\' item-left></ion-icon>\n          <ion-label>Email</ion-label>\n          <ion-input placeholder="Your Email Address" type="email" [(ngModel)]="guestInfo.email" [ngModelOptions]="{standalone: true}"\n            name="email"></ion-input>\n        </ion-item>\n      </div>\n\n      <div class="input-box">\n        <ion-item no-lines>\n          <ion-icon name=\'call\' item-left></ion-icon>\n          <ion-label>Contact No.</ion-label>\n          <ion-input placeholder="Your 10 Digits Contact Number" type="text" [(ngModel)]="guestInfo.contact" [ngModelOptions]="{standalone: true}"\n            minlength="10" maxlength="10" name="contact"></ion-input>\n        </ion-item>\n      </div>\n\n      <div padding>\n        <button [disabled]="!complaintForm.valid" ion-button full round icon-right type="submit">\n          Send\n          <ion-icon name="send"></ion-icon>\n        </button>\n      </div>\n\n    </form>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/new-c/new-c.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_custom_service__["a" /* CustomService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_complaint_service__["a" /* ComplaintService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_service__["a" /* SharedService */]])
    ], NewComplaintPage);
    return NewComplaintPage;
}());

//# sourceMappingURL=new-c.js.map

/***/ })

});
//# sourceMappingURL=15.js.map