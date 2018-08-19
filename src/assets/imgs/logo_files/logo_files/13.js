webpackJsonp([13],{

/***/ 321:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewEmplPageModule", function() { return NewEmplPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_empl__ = __webpack_require__(491);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var NewEmplPageModule = /** @class */ (function () {
    function NewEmplPageModule() {
    }
    NewEmplPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_empl__["a" /* NewEmplPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_empl__["a" /* NewEmplPage */]),
            ],
        })
    ], NewEmplPageModule);
    return NewEmplPageModule;
}());

//# sourceMappingURL=new-empl.module.js.map

/***/ }),

/***/ 491:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewEmplPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_employee_service__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_custom_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NewEmplPage = /** @class */ (function () {
    function NewEmplPage(viewCtrl, empService, customService) {
        this.viewCtrl = viewCtrl;
        this.empService = empService;
        this.customService = customService;
        this.roleStoreList = [{ storeId: null, roleId: null }];
    }
    NewEmplPage.prototype.ionViewDidLoad = function () {
        this.getRoleAndStores();
    };
    NewEmplPage.prototype.getRoleAndStores = function () {
        var _this = this;
        this.customService.showLoader();
        this.empService.getRolesAndStores()
            .subscribe(function (res) {
            _this.roles = res[0], _this.stores = res[1];
            _this.customService.hideLoader();
        }, function (err) {
            _this.customService.hideLoader();
            _this.customService.showToast(err.msg);
            _this.dismiss();
        });
    };
    NewEmplPage.prototype.onAdd = function () {
        if (this.roleStoreList.length <= this.roles.length * this.stores.length) {
            this.roleStoreList.push({ storeId: null, roleId: null });
        }
    };
    NewEmplPage.prototype.onRemove = function (index) {
        this.roleStoreList.splice(index, 1);
    };
    NewEmplPage.prototype.dismiss = function (data) {
        this.viewCtrl.dismiss(data);
    };
    NewEmplPage.prototype.onSubmit = function () {
        var _this = this;
        var data = {};
        data.name = this.name;
        data.username = this.username;
        data.password = this.password;
        this.nickName && (data.nickName = this.nickName);
        this.contactNo && (data.contactNo = this.contactNo);
        this.email && (data.email = this.email);
        data.roleStoreList = this.roleStoreList;
        // send post request
        this.customService.showLoader();
        this.empService.createEmployee(data)
            .subscribe(function (res) {
            _this.customService.hideLoader();
            _this.customService.showToast('Employee created successfully');
            _this.dismiss(res);
        }, function (err) {
            _this.customService.hideLoader();
            _this.customService.showToast(err.msg);
        });
    };
    NewEmplPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-new-empl',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/super-admin/new-empl/new-empl.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <button ion-button (click)="dismiss()">\n      <span>Cancel</span>\n    </button>\n    <ion-title no-lines>\n      Add new employee\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="gray-back">\n\n  <form #newEmplForm="ngForm" (ngSubmit)="onSubmit()">\n    <ion-item>\n      <ion-icon item-left name="person" color="primary"></ion-icon>\n      <ion-label>Name</ion-label>\n      <ion-input [(ngModel)]="name" placeholder="Enter Name" required maxlength="50" name="name"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon item-left name="person" color="primary"></ion-icon>\n      <ion-label>NickName</ion-label>\n      <ion-input [(ngModel)]="nickName" placeholder="Enter Nickname" maxlength="50" name="title"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon item-left name="call" color="primary"></ion-icon>\n      <ion-label>Contact No.</ion-label>\n      <ion-input [(ngModel)]="contactNo" placeholder="Enter Contact Number" maxlength="15" name="contactNo"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon item-left name="mail" color="primary"></ion-icon>\n      <ion-label>Email</ion-label>\n      <ion-input [(ngModel)]="email" placeholder="Enter Email" name="email"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-icon item-left name="person" color="primary"></ion-icon>\n      <ion-label>Username</ion-label>\n      <ion-input [(ngModel)]="username" placeholder="Enter Username" required name="username"></ion-input>\n    </ion-item>\n\n    <ion-item no-lines>\n      <ion-icon item-left name="lock" color="primary"></ion-icon>\n      <ion-label>Password</ion-label>\n      <ion-input type="password" [(ngModel)]="password" placeholder="Enter Password" required name="password"></ion-input>\n    </ion-item>\n    <div *ngIf="roles">\n      <ion-list-header>\n        Select Store and role\n      </ion-list-header>\n      <div *ngFor="let rs of roleStoreList;let i=index" class="box">\n        <button class="box-btn" type="button" *ngIf="roleStoreList.length > 1 " ion-button icon-only (click)="onRemove(i)">\n          <ion-icon name="close"></ion-icon>\n        </button>\n        <ion-card>\n          <ion-item>\n            <ion-icon item-left name="basket" color="primary"></ion-icon>\n            <ion-label>Store</ion-label>\n            <ion-select [(ngModel)]="rs.storeId" required name="store{{i}}">\n              <ion-option *ngFor="let s of stores" value="{{s.id}}">{{s.name}}</ion-option>\n            </ion-select>\n          </ion-item>\n\n          <ion-item>\n            <ion-icon item-left name="body" color="primary"></ion-icon>\n            <ion-label>Role</ion-label>\n            <ion-select [(ngModel)]="rs.roleId" required name="role{{i}}">\n              <ion-option *ngFor="let r of roles" value="{{r.id}}">{{r.name}}</ion-option>\n            </ion-select>\n          </ion-item>\n        </ion-card>\n      </div>\n\n      <button type="button" margin-right style="float:right" small round ion-button (click)="onAdd()">\n        Add Role\n      </button>\n    </div>\n    <button [disabled]="!newEmplForm.valid" ion-button full type="submit">Save</button>\n  </form>\n\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/super-admin/new-empl/new-empl.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_custom_service__["a" /* CustomService */]])
    ], NewEmplPage);
    return NewEmplPage;
}());

//# sourceMappingURL=new-empl.js.map

/***/ })

});
//# sourceMappingURL=13.js.map