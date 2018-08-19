webpackJsonp([8,20],{

/***/ 303:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeRoleModule", function() { return ChangeRoleModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__change_role__ = __webpack_require__(465);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ChangeRoleModule = /** @class */ (function () {
    function ChangeRoleModule() {
    }
    ChangeRoleModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__change_role__["a" /* ChangeRolePage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__change_role__["a" /* ChangeRolePage */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__change_role__["a" /* ChangeRolePage */]]
        })
    ], ChangeRoleModule);
    return ChangeRoleModule;
}());

//# sourceMappingURL=change-role.module.js.map

/***/ }),

/***/ 323:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyModule", function() { return SurveyModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__survey__ = __webpack_require__(493);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__management_change_role_change_role_module__ = __webpack_require__(303);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var SurveyModule = /** @class */ (function () {
    function SurveyModule() {
    }
    SurveyModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__survey__["a" /* SurveyPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__management_change_role_change_role_module__["ChangeRoleModule"],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__survey__["a" /* SurveyPage */])
            ],
        })
    ], SurveyModule);
    return SurveyModule;
}());

//# sourceMappingURL=survey.module.js.map

/***/ }),

/***/ 465:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChangeRolePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChangeRolePage = /** @class */ (function () {
    function ChangeRolePage(alertCtrl) {
        this.alertCtrl = alertCtrl;
        this.isAdmin = URLPREFIX === 'a'; // to show/hide the change role btn
        this.role = ROLE; // to show the currently selected role
        //to inform the parent component that role has been changed
        this.roleChanged = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"](null);
    }
    ChangeRolePage.prototype.onChangeRole = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Change Role',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () { }
                },
                {
                    text: 'Change',
                    handler: function (data) {
                        if (data !== ROLE) {
                            ROLE = _this.role = data;
                            _this.roleChanged.emit(null);
                        }
                    }
                }
            ]
        });
        var roles = JSON.parse(localStorage.getItem('userInfo')).roles;
        roles.forEach(function (r) {
            alert.addInput({
                type: 'radio',
                value: r,
                label: r,
                checked: r === ROLE
            });
        });
        alert.present();
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"])
    ], ChangeRolePage.prototype, "roleChanged", void 0);
    ChangeRolePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'change-role',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/management/change-role/change-role.html"*/'    <div *ngIf="isAdmin" style="border:1px solid black" (tap)="onChangeRole()">\n       <span>{{role}}</span>\n    <button ion-button icon-only>\n            <ion-icon name="person"></ion-icon>\n        </button>\n    </div>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/management/change-role/change-role.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ChangeRolePage);
    return ChangeRolePage;
}());

//# sourceMappingURL=change-role.js.map

/***/ }),

/***/ 493:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_survey_service__ = __webpack_require__(213);
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




var SurveyPage = /** @class */ (function () {
    function SurveyPage(modalCtrl, surveyService, customService, navCtrl) {
        this.modalCtrl = modalCtrl;
        this.surveyService = surveyService;
        this.customService = customService;
        this.navCtrl = navCtrl;
        this.pageNo = 1;
    }
    ;
    SurveyPage.prototype.onRoleChanged = function (ev) {
        this.pageNo = 1;
        this.getSurveyList();
    };
    SurveyPage.prototype.ngOnInit = function () {
        this.getSurveyList();
    };
    SurveyPage.prototype.getSurveyList = function (refresher) {
        var _this = this;
        if (!refresher) {
            this.customService.showLoader();
        }
        this.surveyService.getSurveys(1)
            .subscribe(function (res) {
            _this.surveyList = res;
            _this.pageNo = 1;
            refresher ? refresher.complete() : _this.customService.hideLoader();
        }, function (err) {
            refresher ? refresher.complete() : _this.customService.hideLoader();
            _this.customService.showToast(err.msg);
        });
    };
    SurveyPage.prototype.doRefresh = function (refresher) {
        this.getSurveyList(refresher);
    };
    SurveyPage.prototype.doInfinite = function (infinite) {
        var _this = this;
        this.surveyService.getSurveys(this.pageNo + 1)
            .subscribe(function (res) {
            if (res && res.length !== 0) {
                _this.pageNo++;
                _this.surveyList = _this.surveyList.concat(res);
            }
            infinite.complete();
        }, function (err) {
            infinite.complete();
            _this.customService.showToast(err.msg);
        });
    };
    SurveyPage.prototype.onSurveyClick = function (survey) {
        var _this = this;
        this.customService.showLoader();
        this.surveyService.getSurvey(survey.id)
            .subscribe(function (res) {
            _this.customService.hideLoader();
            _this.goToDetailPage(res, survey);
        }, function (err) {
            _this.customService.hideLoader();
            _this.customService.showToast(err.msg);
        });
    };
    SurveyPage.prototype.goToDetailPage = function (detail, prevDetail) {
        this.navCtrl.push("SurveyDetailPage", { 'surveyInfo': detail, 'prevDetail': prevDetail });
    };
    SurveyPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'survey',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/survey/survey.html"*/'<ion-header>\n    <ion-navbar color="primary">\n        <button ion-button icon-only menuToggle>\n            <ion-icon name="menu"></ion-icon>\n        </button>\n        <ion-title no-lines>\n            Surveys\n        </ion-title>\n\n        <ion-buttons end >\n                <change-role (roleChanged)="onRoleChanged($event)"></change-role>\n            </ion-buttons>\n            \n    </ion-navbar>\n</ion-header>\n\n<ion-content class="gray-back">\n    <ion-refresher (ionRefresh)="doRefresh($event)">\n        <ion-refresher-content></ion-refresher-content>\n    </ion-refresher>\n    <img src="https://forum.sketchfab.com/uploads/db4890/1186/bb945a99e752fcb9.png" class="pic-back" />\n    <ion-list>\n        <ion-grid>\n            <ion-row>\n                <ion-col col-sm-12 col-md-6 col-lg-4 *ngFor="let survey of surveyList; let i =index" (click)="onSurveyClick(survey)">\n                    <ion-card padding>\n                        <div class="d-flex justify-content-between align-items-center">\n                            <div>\n                                <h3><b><ion-icon name="ios-analytics" style="color:orangered"></ion-icon> {{survey.storeName}}</b></h3>\n                                <h3 *ngIf="survey.visitorName"><ion-icon name="md-person" style="color:#04a9f4"></ion-icon> {{survey.visitorName}}</h3>\n                            </div>\n                            <div style="color:#fec108; font-size:25px">\n                                {{survey.averageMark}}<ion-icon name="star" ></ion-icon>\n                            </div>\n\n                        </div>\n                    </ion-card>\n                </ion-col>\n            </ion-row>\n        </ion-grid>\n    </ion-list>\n\n    <div class="no-comment" *ngIf="surveyList?.length==0">\n        <ion-icon name="list-box"></ion-icon>\n        <br>NO RECORD FOUND\n    </div>\n\n\n    <ion-infinite-scroll (ionInfinite)="doInfinite($event)">\n        <ion-infinite-scroll-content></ion-infinite-scroll-content>\n    </ion-infinite-scroll>\n</ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/survey/survey.html"*/,
            styles: [" "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_survey_service__["a" /* SurveyService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_custom_service__["a" /* CustomService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */]])
    ], SurveyPage);
    return SurveyPage;
}());

//# sourceMappingURL=survey.js.map

/***/ })

});
//# sourceMappingURL=8.js.map