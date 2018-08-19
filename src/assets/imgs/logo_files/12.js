webpackJsonp([12],{

/***/ 322:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StoresPageModule", function() { return StoresPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__stores__ = __webpack_require__(492);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var StoresPageModule = /** @class */ (function () {
    function StoresPageModule() {
    }
    StoresPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__stores__["a" /* StoresPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__stores__["a" /* StoresPage */]),
            ],
        })
    ], StoresPageModule);
    return StoresPageModule;
}());

//# sourceMappingURL=stores.module.js.map

/***/ }),

/***/ 492:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoresPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_custom_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_store_service__ = __webpack_require__(217);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var StoresPage = /** @class */ (function () {
    function StoresPage(alert, customService, storeService) {
        this.alert = alert;
        this.customService = customService;
        this.storeService = storeService;
    }
    StoresPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad StoresPage');
        this.getStores();
    };
    StoresPage.prototype.getStores = function () {
        var _this = this;
        this.customService.showLoader();
        this.storeService.getStores()
            .subscribe(function (res) {
            _this.customService.hideLoader();
            _this.stores = res;
        }, function (err) {
            _this.customService.hideLoader();
            _this.customService.showToast(err.msg);
        });
    };
    StoresPage.prototype.openNewStoreAlert = function () {
        var _this = this;
        var alert = this.alert.create({
            title: 'New Store',
            inputs: [
                {
                    name: 'name',
                    type: 'text',
                    placeholder: 'Enter Store Name'
                }, {
                    name: 'location',
                    type: 'text',
                    placeholder: 'Enter Store Location'
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function (data) { }
                }, {
                    text: 'Create',
                    handler: function (data) {
                        if (data.name.trim() === '') {
                            _this.customService.showToast('Store name cannot be empty', 'top');
                            return false;
                        }
                        if (data.location.trim() === '') {
                            _this.customService.showToast('Store location cannot be empty', 'top');
                            return false;
                        }
                        _this.postStore(data, alert);
                        return false;
                    }
                }
            ]
        });
        alert.present();
    };
    StoresPage.prototype.postStore = function (data, alert) {
        var _this = this;
        this.customService.showLoader();
        this.storeService.createStore(data)
            .subscribe(function (res) {
            _this.customService.hideLoader();
            _this.customService.showToast('Store created successfully');
            // if stores is undefined, in case if there is no store aready present
            if (!_this.stores) {
                _this.stores = [res];
            }
            else {
                _this.stores.unshift(res);
            }
            alert.dismiss()
                .then(function () { return _this.showNewGuestInfo(res); });
        }, function (err) {
            _this.customService.hideLoader();
            _this.customService.showToast(err.msg);
        });
    };
    StoresPage.prototype.showNewGuestInfo = function (res) {
        var msg = "Username: " + res.guestUser.username;
        var alert = this.alert.create({
            title: 'Store created',
            message: msg,
            buttons: [{
                    text: 'Ok',
                    role: 'cancel',
                    handler: function () { }
                }]
        });
        alert.present();
    };
    StoresPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-stores',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/super-admin/stores/stores.html"*/'<ion-header>\n  <ion-navbar color="primary">\n      <button ion-button icon-only menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title no-lines>\n        Stores\n      </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="gray-back">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-sm-12 col-md-4 col-lg-3 col-xl-2 *ngFor="let s of stores">\n        <ion-card padding-top>\n          <img src="assets/imgs/store.png">\n          <ion-card-header text-center no-padding margin-top>\n            {{s.name}}\n          </ion-card-header>\n          <div text-center>\n            <p no-margin padding-left padding-right>{{s.location}}</p>\n          </div>\n        </ion-card>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n\n  <ion-fab right bottom>\n    <button ion-fab color="secondary" (click)="openNewStoreAlert()">\n      <ion-icon name="add"></ion-icon>\n    </button>\n  </ion-fab>\n\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/super-admin/stores/stores.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_custom_service__["a" /* CustomService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_store_service__["a" /* StoreService */]])
    ], StoresPage);
    return StoresPage;
}());

//# sourceMappingURL=stores.js.map

/***/ })

});
//# sourceMappingURL=12.js.map