webpackJsonp([9],{

/***/ 320:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeesPageModule", function() { return EmployeesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__employees__ = __webpack_require__(490);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_image_image_module__ = __webpack_require__(472);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var EmployeesPageModule = /** @class */ (function () {
    function EmployeesPageModule() {
    }
    EmployeesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__employees__["a" /* EmployeesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__employees__["a" /* EmployeesPage */]),
                __WEBPACK_IMPORTED_MODULE_3__custom_image_image_module__["a" /* ImageHandlerModule */]
            ],
        })
    ], EmployeesPageModule);
    return EmployeesPageModule;
}());

//# sourceMappingURL=employees.module.js.map

/***/ }),

/***/ 472:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageHandlerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__image__ = __webpack_require__(473);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImageHandlerModule = /** @class */ (function () {
    function ImageHandlerModule() {
    }
    ImageHandlerModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__image__["a" /* ImageHandler */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__image__["a" /* ImageHandler */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__image__["a" /* ImageHandler */]]
        })
    ], ImageHandlerModule);
    return ImageHandlerModule;
}());

//# sourceMappingURL=image.module.js.map

/***/ }),

/***/ 473:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageHandler; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ImageHandler = /** @class */ (function () {
    function ImageHandler() {
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ImageHandler.prototype, "src", void 0);
    ImageHandler = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'nl-img',
            template: "\n    <img *ngIf=\"src\" [src]=\"src\">\n    <img *ngIf=\"!src\" src=\"assets/imgs/default-user-image.png\">\n  "
        }),
        __metadata("design:paramtypes", [])
    ], ImageHandler);
    return ImageHandler;
}());

//# sourceMappingURL=image.js.map

/***/ }),

/***/ 490:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_custom_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_employee_service__ = __webpack_require__(216);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EmployeesPage = /** @class */ (function () {
    function EmployeesPage(customService, employeeService, modalCtrl) {
        this.customService = customService;
        this.employeeService = employeeService;
        this.modalCtrl = modalCtrl;
        this.currentPage = 1;
    }
    EmployeesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad EmployeesPage');
        this.getEmployees();
    };
    EmployeesPage.prototype.getEmployees = function (refresher) {
        var _this = this;
        !refresher && this.customService.showLoader();
        this.employeeService.getEmployees(1)
            .subscribe(function (res) {
            refresher ? refresher.complete() : _this.customService.hideLoader();
            _this.employees = _this.addRolesList(res);
            _this.currentPage = 1;
        }, function (err) {
            refresher ? refresher.complete() : _this.customService.hideLoader();
            _this.customService.showToast(err.msg);
        });
    };
    EmployeesPage.prototype.doRefresh = function (refresher) {
        this.getEmployees(refresher);
    };
    EmployeesPage.prototype.doInfinite = function (infinite) {
        var _this = this;
        this.employeeService.getEmployees(this.currentPage + 1)
            .subscribe(function (res) {
            infinite.complete();
            if (res.length != 0) {
                _this.employees = _this.employees.concat(_this.addRolesList(res));
                _this.currentPage++;
            }
        }, function (err) {
            infinite.complete();
            _this.customService.showToast(err.msg);
        });
    };
    EmployeesPage.prototype.addRolesList = function (eList) {
        var roleString;
        eList.forEach(function (e) {
            roleString = '';
            e.roles.forEach(function (role, index, roles) {
                roleString += "" + role.role + (index < roles.length - 1 ? ',' : '');
            });
            e['rolesList'] = roleString;
        });
        return eList;
    };
    EmployeesPage.prototype.openNewEmployeeModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create('NewEmplPage');
        modal.present();
        modal.onDidDismiss(function (newEmp) {
            if (newEmp) {
                _this.employees.unshift(_this.addRolesList([newEmp])[0]);
            }
        });
    };
    EmployeesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-employees',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/super-admin/employees/employees.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button icon-only menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title no-lines>\n          Employes\n        </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content class="gray-back">\n\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content></ion-refresher-content>\n  </ion-refresher>\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-6 col-lg-4 col-xl-3 *ngFor="let e of employees">\n          <ion-card class="profile-card2">\n            <div class="top"></div>\n            <div image>\n               <img *ngIf="e.picUrl" [src]="e.picUrl">\n               <img *ngIf="!e.picUrl" src="assets/imgs/user.png">\n                <!-- <img src="http://glia.ca/scm/2013/ge1127_b/wp-content/uploads/2013/10/594partner-profile-pic-An.jpg"> -->\n              </div>\n              <div text-center class="user-details">\n                  <h2 class="" text-center><b>{{ e.name }}</b></h2>\n                  <p *ngIf="e.email">{{e.email}}</p>\n                  <b *ngIf="e.contactNo">{{e.contactNo}}</b>\n              </div>\n\n              <div class="bottom" text-center>\n                <ion-slides>\n                  <ion-slide *ngFor="let role of e.roles" text-center>\n                      <b>{{ role.role }}@</b>\n                      <b>{{role.storeName}}</b>\n                      <p>{{ role.storeLocation }}</p>\n                  </ion-slide>\n                </ion-slides>\n    \n              </div>\n            \n            </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <!-- //BELOW CODE WAS JUST FOR THERE FOR AN ALTERNATE VIEW -->\n<!-- <ion-grid>\n<ion-row>\n  <ion-col col-sm-12 col-md-6 col-lg-4 col-xl-3 *ngFor="let e of employees">\n      <ion-card class="profile-card" >\n        <div image>\n          <div class="top d-flex justify-content-between">\n            <b></b>\n            <b>\n              <ion-icon name="email"></ion-icon> {{e.email}}\n            </b>\n          </div>\n            <img src="http://img2.thejournal.ie/inline/2470754/original/?width=428&version=2470754">\n            <div class="bottom d-flex justify-content-between">\n              John\n                <b>{{ e.name }}</b>\n                <b><ion-icon name="call"></ion-icon> {{e.contactNo}}</b>\n              </div>\n          </div>\n          <ion-item text-center *ngFor="let role of e.roles">\n              <ion-badge>{{ role.role }}</ion-badge><br>\n              <b>{{role.storeName}}</b>\n              <p>{{ role.storeLocation }}</p>\n          </ion-item>\n        \n        </ion-card>\n  </ion-col>\n</ion-row>\n</ion-grid> -->\n\n\n  <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n    <ion-infinite-scroll-content></ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="openNewEmployeeModal()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/super-admin/employees/employees.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_custom_service__["a" /* CustomService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_employee_service__["a" /* EmployeeService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */]])
    ], EmployeesPage);
    return EmployeesPage;
}());

//# sourceMappingURL=employees.js.map

/***/ })

});
//# sourceMappingURL=9.js.map