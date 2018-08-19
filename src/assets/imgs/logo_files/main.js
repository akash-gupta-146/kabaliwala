webpackJsonp([21],{

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ComplaintService = /** @class */ (function () {
    function ComplaintService(http) {
        this.http = http;
    }
    ComplaintService.prototype.getComplaintCategories = function () {
        var _this = this;
        if (this.complaintCategories) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(this.complaintCategories);
        }
        else {
            return this.http.get('/complaint/save-info').map(function (res) {
                _this.complaintCategories = res;
                return res;
            });
        }
    };
    ComplaintService.prototype.submitComplaint = function (data) {
        return this.http.post("/" + this.compOrSugg, data);
    };
    // below methods are related to managment/admin or superadmin
    ComplaintService.prototype.getComplaints = function (pageNo) {
        return this.http.get("/" + this.compOrSugg + "/page/" + pageNo);
    };
    ComplaintService.prototype.getComplaintById = function (id) {
        return this.http.get("/" + this.compOrSugg + "/" + id);
    };
    ComplaintService.prototype.closeComplaint = function (id, reason) {
        return this.http.put("/" + this.compOrSugg + "/" + id + "/close", reason);
    };
    ComplaintService.prototype.editComplaint = function (id, status) {
        return this.http.put("/" + this.compOrSugg + "/" + id, status);
    };
    ComplaintService.prototype.getPrioritiesAndEmployees = function () {
        var _this = this;
        if (this.complaintPriorities && this.employees) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])([this.complaintPriorities, this.employees]);
        }
        else {
            return this.http.get("/" + this.compOrSugg + "/edit-info")
                .map(function (res) {
                _this.complaintPriorities = res['priorities'];
                _this.employees = res['employees'];
                return [_this.complaintPriorities, _this.employees];
            });
        }
    };
    ComplaintService.prototype.fetchComments = function (complaintId) {
        return this.http.get("/" + this.compOrSugg + "/" + complaintId + "/comment");
    };
    ComplaintService.prototype.postComments = function (complaintId, comment) {
        return this.http.post("/" + this.compOrSugg + "/" + complaintId + "/comment", { comment: comment });
    };
    ComplaintService.prototype.updateComplaint = function (oldC, newC) {
        // these are all the updatable properties depending on which operation is performed
        // if a property has been changed, it will be updated, otherwise old value will be assigned
        oldC.statusId = newC.statusId || oldC.statusId;
        oldC.statusName = newC.statusName || oldC.statusName;
        oldC.statusColor = newC.statusColor || oldC.statusColor;
        oldC.assignedEmployeeId = newC.assignedEmployeeId || oldC.assignedEmployeeId;
        oldC.assignedEmployeeName = newC.assignedEmployeeName || oldC.assignedEmployeeName;
        oldC.assignedEmployeePicUrl = newC.assignedEmployeePicUrl || oldC.assignedEmployeePicUrl;
        oldC.closedOn = newC.closedOn || oldC.closedOn;
        oldC.commentCount = newC.commentCount || oldC.commentCount;
        oldC.priorityId = newC.priorityId || oldC.priorityId;
        oldC.priorityName = newC.priorityName || oldC.priorityName;
        oldC.rca = newC.rca || oldC.rca;
    };
    // below methods are related to fetch the data required for sort and fiter
    ComplaintService.prototype.fetchDataRequiredForFiltering = function () {
        var _this = this;
        if (this.dataRequiredForFiltering) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_of__["of"])(this.dataRequiredForFiltering);
        }
        else {
            return this.http.get('/complaint/filter/info').map(function (res) {
                _this.dataRequiredForFiltering = res;
                return res;
            });
        }
    };
    ComplaintService.prototype.sortBy = function (sortType, pageNo) {
        return this.http.get("/" + this.compOrSugg + "/sort/" + sortType + "/true/page/" + pageNo);
    };
    ComplaintService.prototype.filterBy = function (filterName, id, pageNo) {
        console.log(filterName);
        var data = (_a = {}, _a[filterName + 'Id'] = id, _a);
        console.log(data);
        return this.http.post("/" + this.compOrSugg + "/filter/page/" + pageNo, data);
        var _a;
    };
    ComplaintService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], ComplaintService);
    return ComplaintService;
}());

//# sourceMappingURL=complaint.service.js.map

/***/ }),

/***/ 117:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 117;

/***/ }),

/***/ 159:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/management/appreciation/appreciation.module": [
		307,
		5
	],
	"../pages/management/change-role/change-role.module": [
		303,
		20
	],
	"../pages/management/comments/comments.module": [
		308,
		6
	],
	"../pages/management/comp-close-mngnt/comp-close-mngnt.module": [
		309,
		19
	],
	"../pages/management/compl-suggestion-options/compl-suggestion-options.module": [
		304,
		11
	],
	"../pages/management/complaint-main/complaint-main.module": [
		305,
		2
	],
	"../pages/management/complaints/complaints.module": [
		310,
		1
	],
	"../pages/management/edit-complaint/edit-complaint.module": [
		311,
		18
	],
	"../pages/management/edit-complaint/search/search.module": [
		312,
		10
	],
	"../pages/management/sort-filter-options/sort-filter.module": [
		306,
		17
	],
	"../pages/management/suggestions/suggestions.module": [
		313,
		0
	],
	"../pages/management/survey-detail/survey-detail.module": [
		315,
		3
	],
	"../pages/management/view-complaint/view.module": [
		314,
		4
	],
	"../pages/new-a/new-a.module": [
		317,
		16
	],
	"../pages/new-c/new-c.module": [
		316,
		15
	],
	"../pages/new-sur/new-sur.module": [
		318,
		7
	],
	"../pages/submit-success/submit-success.module": [
		319,
		14
	],
	"../pages/super-admin/employees/employees.module": [
		320,
		9
	],
	"../pages/super-admin/new-empl/new-empl.module": [
		321,
		13
	],
	"../pages/super-admin/stores/stores.module": [
		322,
		12
	],
	"../pages/survey/survey.module": [
		323,
		8
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 159;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_custom_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__ = __webpack_require__(43);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var LoginPage = /** @class */ (function () {
    function LoginPage(navCtrl, formBuilder, customService, authService, events, menu) {
        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.customService = customService;
        this.authService = authService;
        this.events = events;
        this.menu = menu;
        this.loginType = 'guest';
    }
    LoginPage.prototype.ngOnInit = function () {
        this.menu.swipeEnable(false);
        this.loginForm = this.formBuilder.group({
            username: ['kabliwala', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required],
            password: ['abc123', __WEBPACK_IMPORTED_MODULE_2__angular_forms__["f" /* Validators */].required]
        });
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (this.loginForm.valid) {
            // clear the URLPREFIX before each fresh login in order to avoid any bug
            URLPREFIX = undefined;
            ROLE = undefined;
            this.customService.showLoader("Authenticating...");
            this.authService.login(this.loginForm.value)
                .subscribe(function (res) {
                _this.authService.saveToken(res.access_token);
                _this.authService.fetchUserDetails()
                    .subscribe(function (res) {
                    _this.customService.hideLoader();
                    // this.authService.saveUserDetails(res);
                    _this.navigate();
                }, function (err) {
                    _this.customService.hideLoader();
                    localStorage.clear();
                });
            }, function (err) {
                _this.customService.hideLoader();
                _this.loginFailed(err);
            });
        }
        else {
            if (this.loginForm.controls.username.invalid) {
                this.customService.showToast('Username is required');
            }
            else {
                this.customService.showToast('Password is required');
            }
        }
    };
    LoginPage.prototype.navigate = function () {
        // switch (this.loginType) {
        //   case 'guest': this.navCtrl.setRoot(HomePage); break;
        //   // case 'management':this.navCtrl.setRoot(); break;
        //   // case 'superadmin':this.navCtrl.setRoot(); break;
        // }
        this.events.publish('user:login');
    };
    LoginPage.prototype.loginFailed = function (err) {
        if (err.status == 400) {
            this.customService.showToast("Please enter valid username or password.");
        }
        else {
            this.customService.showToast(err.msg);
        }
    };
    LoginPage.prototype.playSound = function (type) {
        if (type == 'click') {
            this.audio = document.getElementById("click");
            this.audio.play();
        }
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/login/login.html"*/'<audio id="click">\n  <source src="assets/music/water-drop.wav">\n</audio>\n\n<ion-content>\n  <div class="background">\n    <div class="nuts">\n      <div class="top"></div>\n      <div class="right"></div>\n      <div class="bottom"></div>\n      <div class="layer"></div>\n    </div>\n  </div>\n  <div segment>\n    <img src="assets/imgs/logo.png" class="logo">\n\n    <ion-segment [(ngModel)]="loginType" class="custom-ion-segment-button">\n      <ion-segment-button value="superadmin" class=" d-flex flex-column align-items-center" (click)="playSound(\'click\')">\n        <img src="assets/imgs/super-admin.png" class="button-image">\n        <h3>Super Admin</h3>\n      </ion-segment-button>\n      <ion-segment-button value="management" class=" d-flex flex-column align-items-center" (click)="playSound(\'click\')">\n        <img src="assets/imgs/management.png" class="button-image">\n        <h3>Management</h3>\n      </ion-segment-button>\n      <ion-segment-button value="guest" class=" d-flex flex-column align-items-center" (click)="playSound(\'click\')">\n        <img src="assets/imgs/guest.png" class="button-image">\n        <h3>Guest</h3>\n      </ion-segment-button>\n    </ion-segment>\n\n    <form [formGroup]="loginForm" (ngSubmit)="login()" novalidate>\n      <div class="login-card paper" padding>\n        <ion-item no-lines>\n          <ion-icon name="person" item-left></ion-icon>\n          <ion-label fixed>Username</ion-label>\n          <ion-input type="text" formControlName="username"></ion-input>\n        </ion-item>\n        <ion-item no-lines>\n          <ion-icon name="unlock" item-left></ion-icon>\n          <ion-label fixed>Password</ion-label>\n          <ion-input type="password" formControlName="password"></ion-input>\n        </ion-item>\n      </div>\n\n      <button type="submit" ion-button round class="center-block" outline (click)="playSound(\'click\')">\n        Log In\n      </button>\n    </form>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormBuilder */],
            __WEBPACK_IMPORTED_MODULE_3__providers_custom_service__["a" /* CustomService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_complaint_service__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, complaintService, events) {
        this.navCtrl = navCtrl;
        this.complaintService = complaintService;
        this.events = events;
    }
    HomePage.prototype.onComplaint = function () {
        this.complaintService.compOrSugg = 'complaint';
        this.navCtrl.push('NewComplaintPage');
    };
    HomePage.prototype.onSuggestion = function () {
        this.complaintService.compOrSugg = 'suggestion';
        this.navCtrl.push('NewComplaintPage');
    };
    HomePage.prototype.onAppreciation = function () {
        this.navCtrl.push('NewAppreciationPage');
    };
    HomePage.prototype.onSurvey = function () {
        this.navCtrl.push('NewSurPage');
    };
    HomePage.prototype.onLogout = function () {
        this.events.publish('user:logout');
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-home',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/home/home.html"*/'<ion-content class="gray-back">\n    <ion-fab bottom right>\n        <button color="danger" ion-fab (click)="onLogout()"> <ion-icon name="log-out"></ion-icon></button>\n      </ion-fab>\n  <img src="assets/imgs/logo.png" class="home-logo" /> \n  <ion-grid>\n      <ion-row>\n        <ion-col col-6>\n          <div class="custom-button back-1" (click)="onComplaint()">\n            <div class="center">\n                <button clear icon-only>\n                    <ion-icon name="sad" ></ion-icon>\n                  </button>\n            </div>\n            <div class="btn-title" text-center>Complaint</div>\n          </div>\n        </ion-col>\n        <ion-col col-6>\n            <div class="custom-button back-2" (click)="onSuggestion()">\n                <div class="center">\n                    <button clear icon-only >\n                        <ion-icon name="bulb"></ion-icon>\n                      </button>\n                </div>\n                <div class="btn-title" text-center>Suggestion</div>\n              </div>\n        </ion-col>\n        <ion-col col-6>\n            <div class="custom-button back-3"  (click)="onAppreciation()">\n                <div class="center">\n                    <button clear icon-only>\n                        <ion-icon name="thumbs-up"></ion-icon>\n                      </button>\n                </div>\n                <div class="btn-title" text-center>Appreciate</div>\n              </div>\n        </ion-col>\n        <ion-col col-6>\n            <div class="custom-button back-4"  (click)="onSurvey()">\n                <div class="center">\n                    <button clear icon-only>\n                        <ion-icon name="list-box"></ion-icon>\n                      </button>\n                </div>\n                <div class="btn-title" text-center>Survey</div>\n              </div>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n\n\n</ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/home/home.html"*/
        })
        // this page refers to guest Main page
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_complaint_service__["a" /* ComplaintService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 207:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_dashboard_service__ = __webpack_require__(208);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardPage = /** @class */ (function () {
    function DashboardPage(dashboardService, events) {
        this.dashboardService = dashboardService;
        this.events = events;
        this.loaded = false;
    }
    ;
    DashboardPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        //    LOAD SCRIP, WHEN LOADED, FETCH THE YOUTUBE DATA 
        this.dashboardService.loadScript().subscribe(function (res) { }, function (err) { console.log(err); }, function () {
            _this.getComplaintByStatus();
            _this.getComplaintByCategory();
            _this.getComplaintByStore();
            _this.getAppreciationByStore();
            _this.getSurveyRatingByStore();
            _this.getSurveyRatingByQuestion();
            _this.getSurveyByStore();
        });
    };
    DashboardPage.prototype.getComplaintByStatus = function () {
        var _this = this;
        this.dashboardService.complaintByStatus('complaint').subscribe(function (res) {
            _this.loaded = true;
            if (res && res.length) {
                _this.complaintByStatus = res;
                setTimeout(function () {
                    _this.createGooglePieChart(res, 'complaintStatus_div');
                }, 100);
            }
        }, function (err) {
        });
    };
    DashboardPage.prototype.getComplaintByCategory = function () {
        var _this = this;
        this.dashboardService.complaintByCategory('complaint').subscribe(function (res) {
            _this.loaded = true;
            if (res && res.length) {
                _this.complaintByCategoryStatus = res;
                setTimeout(function () {
                    _this.createGoogleBarChart(res, 'complaintByCategoryStatus_div');
                }, 100);
            }
        }, function (err) {
        });
    };
    DashboardPage.prototype.getComplaintByStore = function () {
        var _this = this;
        this.dashboardService.complaintByStore('complaint').subscribe(function (res) {
            _this.loaded = true;
            if (res && res.length) {
                _this.complaintStatusStoreWise = res;
                setTimeout(function () {
                    _this.createGoogleBarChart(res, 'complaintStatusStoreWise_div');
                }, 100);
            }
        }, function (err) {
        });
    };
    DashboardPage.prototype.getAppreciationByStore = function () {
        var _this = this;
        this.dashboardService.appreciationByStore().subscribe(function (res) {
            _this.loaded = true;
            if (res && res.length) {
                _this.appreciationStoreWise = res;
                setTimeout(function () {
                    _this.createGooglePieChart(res, 'appreciationStoreWise_div');
                }, 100);
            }
        }, function (err) {
        });
    };
    DashboardPage.prototype.getSurveyRatingByStore = function () {
        var _this = this;
        this.dashboardService.surveyRatingByStore().subscribe(function (res) {
            _this.loaded = true;
            if (res && res.length) {
                _this.ratingGroupedByStore = res;
                setTimeout(function () {
                    _this.createGoogleBarChart(res, 'ratingGroupedByStore_div');
                }, 100);
            }
        }, function (err) {
        });
    };
    DashboardPage.prototype.getSurveyRatingByQuestion = function () {
        var _this = this;
        this.dashboardService.surveyRatingByQuestion().subscribe(function (res) {
            _this.loaded = true;
            if (res && res.length) {
                _this.ratingGroupedByQuestion = res;
                setTimeout(function () {
                    _this.createGoogleBarChart(res, 'ratingGroupedByQuestion_div');
                }, 100);
            }
        }, function (err) {
        });
    };
    DashboardPage.prototype.getSurveyByStore = function () {
        var _this = this;
        this.dashboardService.surveyStore().subscribe(function (res) {
            _this.loaded = true;
            if (res && res.length) {
                _this.surveyTakenStoreWise = res;
                setTimeout(function () {
                    _this.createGooglePieChart(res, 'surveyTakenStoreWise_div');
                }, 100);
            }
        }, function (err) {
        });
    };
    //////////////////////////////
    DashboardPage.prototype.createGooglePieChart = function (data, chartDivId) {
        google.charts.load('current', { packages: ['corechart', 'bar'] });
        google.charts.setOnLoadCallback(function () {
            var inputData = [[]]; // 2D array
            var options = {}; // to specify options for pie charts
            switch (chartDivId) {
                case 'complaintStatus_div':
                    inputData[0] = ['Status', 'count'];
                    data.forEach(function (r, index) {
                        inputData[index + 1] = [r.statusName, r.count];
                    });
                    // set options
                    options.colors = [];
                    data.forEach(function (status) { options.colors.push(status.statusColor); });
                    break;
                case 'appreciationStoreWise_div':
                    inputData[0] = ['Store', 'appreciationCount'];
                    data.forEach(function (r, index) {
                        inputData[index + 1] = [r.storeName, r.count];
                    });
                    break;
                case 'surveyTakenStoreWise_div':
                    inputData[0] = ['Store', 'surveyCount '];
                    data.forEach(function (r, index) {
                        inputData[index + 1] = [r.storeName, r.count];
                    });
                    break;
            }
            var dataOutput = google.visualization.arrayToDataTable(inputData);
            // const h = dataOutput.getNumberOfRows() * 30 + 200;
            options.height = 350;
            options.legend = {
                position: 'right',
                maxLines: 3
            };
            options.chartArea = { width: '100%' };
            var chart = new google.visualization.PieChart(document.getElementById(chartDivId));
            chart.draw(dataOutput, options);
            // if (chartDivId === 'userData_div') {
            //   google.visualization.events.addListener(chart, 'select', () => {
            //     console.log('EVENT LISTENER  CALLED////', chart.getSelection());
            //     // in case when boundary of chart is cliked/touched,
            //     // chart.getSelection() gives []
            //     // Ignore this cases, to avoid the error
            //     if (chart.getSelection().length !== 0) {
            //       const selectedRow = chart.getSelection()[0].row;
            //       const selectedType = this.rowToInfluencerType[selectedRow];
            //       this.fetchUserDataByType(selectedType);
            //     }
            //   });
            // }
        });
    };
    DashboardPage.prototype.createGoogleBarChart = function (data, chartDivId) {
        google.charts.load('current', { packages: ['corechart', 'bar'] });
        google.charts.setOnLoadCallback(function () {
            var inputData = [[]]; // 2D array
            var options = {}; // to specify options for pie charts
            switch (chartDivId) {
                case 'complaintByCategoryStatus_div':
                    if (!data[0].statusResults) {
                        return;
                    }
                    // set the first row of 2D array 
                    inputData[0] = ['categories'];
                    var statusNames = data[0].statusResults.map(function (s) { return s.statusName; });
                    inputData[0] = inputData[0].concat(statusNames);
                    //set the remaining rows
                    data.forEach(function (catg, index) {
                        inputData[index + 1] = [catg.categoryName];
                        catg.statusResults.forEach(function (status) {
                            inputData[index + 1].push(status.count);
                        });
                    });
                    // set colros of the categories
                    options.colors = [];
                    data[0].statusResults.forEach(function (status) { options.colors.push(status.statusColor); });
                    break;
                case 'complaintStatusStoreWise_div':
                    // set the first row of 2D array 
                    inputData[0] = ['stores'];
                    var sNames = data[0].statusResults.map(function (s) { return s.statusName; });
                    inputData[0] = inputData[0].concat(sNames);
                    //set the remaining rows
                    data.forEach(function (store, index) {
                        inputData[index + 1] = [store.storeName];
                        store.statusResults.forEach(function (status) {
                            inputData[index + 1].push(status.count);
                        });
                    });
                    // set colros of the categories
                    options.colors = [];
                    data[0].statusResults.forEach(function (status) { options.colors.push(status.statusColor); });
                    break;
                case 'ratingGroupedByStore_div':
                    // set the first row of 2D array 
                    inputData[0] = ['ratings'];
                    var ratings = data[0].starResults.map(function (s) { return s.starValue.toString(); });
                    inputData[0] = inputData[0].concat(ratings);
                    //set the remaining rows
                    data.forEach(function (store, index) {
                        inputData[index + 1] = [store.storeName];
                        store.starResults.forEach(function (rating) {
                            inputData[index + 1].push(rating.count);
                        });
                    });
                    break;
                case 'ratingGroupedByQuestion_div':
                    // set the first row of 2D array 
                    inputData[0] = ['ratings'];
                    var rating = data[0].starResults.map(function (s) { return s.starValue.toString(); });
                    inputData[0] = inputData[0].concat(rating);
                    var questions_1 = [];
                    //set the remaining rows
                    data.forEach(function (ques, index) {
                        inputData[index + 1] = ["Ques. " + (index + 1)];
                        questions_1.push("Ques. " + (index + 1) + ": " + ques.question);
                        ques.starResults.forEach(function (rating) {
                            inputData[index + 1].push(rating.count);
                        });
                    });
                    options.title = questions_1.join('\n');
                    break;
            }
            var dataOutput = google.visualization.arrayToDataTable(inputData);
            var h = dataOutput.getNumberOfRows() * 30 + 200;
            options.height = options.title ? dataOutput.getNumberOfRows() * 30 + 300 : h;
            options.legend = {
                position: 'top',
                maxLines: 3,
            };
            options.isStacked = true;
            options.chartArea = { width: '75%' };
            var chart = new google.visualization.BarChart(document.getElementById(chartDivId));
            chart.draw(dataOutput, options);
            // if (chartDivId === 'userData_div') {
            //   google.visualization.events.addListener(chart, 'select', () => {
            //     console.log('EVENT LISTENER  CALLED////', chart.getSelection());
            //     // in case when boundary of chart is cliked/touched,
            //     // chart.getSelection() gives []
            //     // Ignore this cases, to avoid the error
            //     if (chart.getSelection().length !== 0) {
            //       const selectedRow = chart.getSelection()[0].row;
            //       const selectedType = this.rowToInfluencerType[selectedRow];
            //       this.fetchUserDataByType(selectedType);
            //     }
            //   });
            // }
        });
    };
    DashboardPage.prototype.onLogoutBtn = function () {
        this.events.publish('user:logout');
    };
    DashboardPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-dashboard',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/dashboard/dashboard.html"*/'<ion-header>\n\n  <ion-navbar color="primary">\n    <button ion-button icon-only menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Dashboard</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only menuClose (click)="onLogoutBtn()">\n        <ion-icon name="log-out"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content  class="gray-back">\n\n  <div class="nuts-back"></div>\n  <ion-spinner class="graph-loader" *ngIf="!loaded"></ion-spinner>\n  <div class="graph" *ngIf="complaintByStatus">\n    <h6><span>Complaints</span> <span>Status (Overall)</span></h6>\n    <div id="complaintStatus_div"></div>\n  </div>\n\n  <div class="graph" *ngIf="complaintByCategoryStatus">\n    <h6>Complaints Status (Grouped by Category)</h6>\n    <div id="complaintByCategoryStatus_div"></div>\n  </div>\n\n  <div class="graph" *ngIf="complaintStatusStoreWise">\n    <h6>Complaints Status (Grouped by Store)</h6>\n    <div id="complaintStatusStoreWise_div"></div>\n  </div>\n\n  <div class="graph"  *ngIf="appreciationStoreWise">\n    <h6>Appreciations (Grouped By Store)</h6>\n    <div id="appreciationStoreWise_div"></div>\n  </div>\n\n  <div class="graph" *ngIf="surveyTakenStoreWise">\n    <h6>Surveys (Grouped By Store)</h6>\n    <div id="surveyTakenStoreWise_div"></div>\n  </div>\n  \n  <div class="graph" *ngIf="ratingGroupedByStore">\n    <h6>Survey Ratings (Grouped By Store)</h6>\n    <div id="ratingGroupedByStore_div"></div>\n  </div>\n\n  <div class="graph" *ngIf="ratingGroupedByQuestion">\n    <h6>Survey Ratings (Grouped By Question)</h6>\n    <div id="ratingGroupedByQuestion_div"></div>\n  </div>\n</ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/dashboard/dashboard.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_dashboard_service__["a" /* DashboardService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], DashboardPage);
    return DashboardPage;
}());

//# sourceMappingURL=dashboard.js.map

/***/ }),

/***/ 208:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DashboardService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DashboardService = /** @class */ (function () {
    function DashboardService(http) {
        this.http = http;
    }
    DashboardService.prototype.loadScript = function () {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].create(function (observer) {
            if (document.getElementById('GoogleCharts') == null) {
                var node = document.createElement('script');
                node.src = 'https://www.gstatic.com/charts/loader.js';
                node.type = 'text/javascript';
                node.async = false;
                node.charset = 'utf-8';
                node.id = 'GoogleCharts';
                document.getElementsByTagName('head')[0].appendChild(node);
                node.onload = function () {
                    observer.complete();
                };
            }
            else {
                observer.complete();
            }
        });
    };
    // below requests fetch the data required for drawing the various graphs 
    DashboardService.prototype.complaintByStatus = function (compOrSugg) {
        return this.http.get("/graph/status/" + compOrSugg);
    };
    DashboardService.prototype.complaintByCategory = function (compOrSugg) {
        return this.http.get("/graph/category-status/" + compOrSugg);
    };
    DashboardService.prototype.complaintByStore = function (compOrSugg) {
        // fetches store-wise statuses
        return this.http.get("/graph/store-status/" + compOrSugg);
    };
    //appreciation graphs
    DashboardService.prototype.appreciationByStore = function () {
        return this.http.get("/graph/appreciation");
    };
    //survey graphs
    DashboardService.prototype.surveyRatingByStore = function () {
        return this.http.get("/survey/graph/store-star");
    };
    DashboardService.prototype.surveyRatingByQuestion = function () {
        return this.http.get("/survey/graph/question-star");
    };
    DashboardService.prototype.surveyStore = function () {
        return this.http.get("/survey/graph/store");
    };
    DashboardService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], DashboardService);
    return DashboardService;
}());

//# sourceMappingURL=dashboard.service.js.map

/***/ }),

/***/ 209:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NetworkService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var NetworkService = /** @class */ (function () {
    function NetworkService(events, network) {
        this.events = events;
        this.network = network;
    }
    NetworkService.prototype.checkNetworkStatus = function () {
        var _this = this;
        this.network.onConnect().subscribe(function () {
            _this.events.publish("online");
        });
        this.network.onDisconnect().subscribe(function () {
            _this.events.publish("offline");
        });
    };
    NetworkService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* Events */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_network__["a" /* Network */]])
    ], NetworkService);
    return NetworkService;
}());

//# sourceMappingURL=network.service.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomHttpService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_constants__ = __webpack_require__(272);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CustomHttpService = /** @class */ (function () {
    function CustomHttpService(httpClient) {
        this.httpClient = httpClient;
    }
    CustomHttpService.prototype.getAccessToken = function () {
        var basicToken = "nxtlifefeedbacksystem:kabuliwala";
        return !localStorage.getItem('access_token') ? 'Basic ' + btoa(basicToken) : 'Bearer ' + localStorage.getItem('access_token');
    };
    CustomHttpService.prototype.addHeaders = function (optionalHeaders) {
        var requestHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Authorization', this.getAccessToken())
            .set('Content-Type', 'application/json');
        if (optionalHeaders) {
            for (var _i = 0, _a = optionalHeaders.keys(); _i < _a.length; _i++) {
                var header = _a[_i];
                requestHeaders = requestHeaders.append(header, optionalHeaders.get(header));
            }
        }
        return requestHeaders;
    };
    CustomHttpService.prototype.get = function (url, options) {
        var headers = this.addHeaders(options);
        var _url;
        if (ROLE) {
            // in case of admin.mngmnt, each request contains ROLE if ROLE exists
            _url = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* BASEURL */] + (URLPREFIX ? '/' + URLPREFIX : '') + '/' + ROLE + url;
        }
        else {
            _url = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* BASEURL */] + (URLPREFIX ? '/' + URLPREFIX : '') + url;
        }
        return this.httpClient.get(_url, { headers: headers, observe: 'response' })
            .map(this.extractData)
            .catch(this.handleError);
    };
    CustomHttpService.prototype.post = function (url, body, options) {
        var headers = this.addHeaders(options);
        var _url;
        if (ROLE) {
            // in case of admin.mngmnt, each request contains ROLE if ROLE exists
            _url = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* BASEURL */] + (URLPREFIX ? '/' + URLPREFIX : '') + '/' + ROLE + url;
        }
        else {
            _url = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* BASEURL */] + (URLPREFIX ? '/' + URLPREFIX : '') + url;
        }
        return this.httpClient.post(_url, body, { headers: headers, observe: 'response' })
            .map(this.extractData)
            .catch(this.handleError);
    };
    CustomHttpService.prototype.put = function (url, body, options) {
        var headers = this.addHeaders(options);
        var _url;
        if (ROLE) {
            // in case of admin.mngmnt, each request contains ROLE if ROLE exists
            _url = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* BASEURL */] + (URLPREFIX ? '/' + URLPREFIX : '') + '/' + ROLE + url;
        }
        else {
            _url = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* BASEURL */] + (URLPREFIX ? '/' + URLPREFIX : '') + url;
        }
        return this.httpClient.put(_url, body, { headers: headers, observe: 'response' })
            .map(this.extractData)
            .catch(this.handleError);
    };
    CustomHttpService.prototype.postForLogin = function (body) {
        var searchParams = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpParams */]()
            .append('username', body.username)
            .append('password', body.password);
        var loginHeaders = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]()
            .set('Authorization', this.getAccessToken());
        return this.httpClient.post(__WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* BASEURL */] + '/oauth/token?grant_type=password', {}, { headers: loginHeaders, params: searchParams, observe: 'response' })
            .map(this.extractData)
            .catch(this.handleError);
    };
    CustomHttpService.prototype.extractData = function (res) {
        // console.log('inside extract data', res);
        return res.body || res.status;
    };
    CustomHttpService.prototype.handleError = function (err) {
        // console.log('inside handle error', err);
        var errorInfo = {};
        if (err.error instanceof Error || err.error instanceof ProgressEvent) {
            /**A client-side or network error occurred. Handle it accordingly.*/
            // console.log('An error occurred:', );
            errorInfo.status = err.status;
            errorInfo.status == 0 ? errorInfo.msg = "No Internet, Check Your connection Or Try again" : errorInfo.msg = err.message || 'Some Error Occured';
        }
        else {
            /**The backend returned an unsuccessful response code.*/
            // console.log('Server occurred:', err);
            errorInfo.status = err.status;
            errorInfo.msg = err.error.message || err.error.error || 'Internal Server Error';
        }
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(errorInfo);
    };
    CustomHttpService.prototype.getSockJs = function () {
        var access_token = localStorage.getItem('access_token');
        var url = __WEBPACK_IMPORTED_MODULE_6__app_constants__["a" /* BASEURL */] + ("/" + URLPREFIX + "/nxtlife/websocket?access_token=" + access_token);
        var socket = new SockJS(url);
        return Stomp.over(socket);
    };
    CustomHttpService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], CustomHttpService);
    return CustomHttpService;
}());

//# sourceMappingURL=custom-http.service.js.map

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PushMessageService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_fcm__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(20);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PushMessageService = /** @class */ (function () {
    function PushMessageService(fcm, authService, alert) {
        this.fcm = fcm;
        this.authService = authService;
        this.alert = alert;
    }
    PushMessageService.prototype.initializeFCM = function () {
        var _this = this;
        this.fcm.getToken().then(function (token) {
            // alert(JSON.stringify(token));
            _this.authService.tokenUpdate(token)
                .subscribe(function (res) {
                alert(JSON.stringify(res));
            }, function (err) {
                alert(JSON.stringify(err));
                var alertC = _this.alert.create({
                    title: 'Error in Push notifications',
                    message: 'Due to some errro, you wont be able to recive the push notifications',
                    buttons: ['Dismiss']
                });
                alertC.present();
            });
        });
        this.fcm.subscribeToTopic('all');
        this.fcm.onNotification().subscribe(function (data) {
            // alert(JSON.stringify(data));
            if (data.wasTapped) {
                console.info("Received in background");
            }
            else {
                console.info("Received in foreground");
            }
            ;
        });
        this.fcm.onTokenRefresh().subscribe(function (token) {
            // backend.registerToken(token);
        });
    };
    PushMessageService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_2__auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["b" /* AlertController */]])
    ], PushMessageService);
    return PushMessageService;
}());

//# sourceMappingURL=push-message.service.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SurveyService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_of__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SurveyService = /** @class */ (function () {
    function SurveyService(http) {
        this.http = http;
    }
    SurveyService.prototype.fetchQuestions = function () {
        var _this = this;
        if (this.questions) {
            return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable_of__["of"])(this.questions);
        }
        else {
            return this.http.get('/survey/question').map(function (res) {
                _this.questions = res;
                return res;
            });
        }
    };
    SurveyService.prototype.submitSurvey = function (payLoad) {
        return this.http.post('/survey', payLoad);
    };
    SurveyService.prototype.getSurveys = function (pageNo) {
        return this.http.get("/survey/page/" + pageNo + "/12");
    };
    SurveyService.prototype.getSurvey = function (id) {
        return this.http.get("/survey/" + id);
    };
    SurveyService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], SurveyService);
    return SurveyService;
}());

//# sourceMappingURL=survey.service.js.map

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_service__ = __webpack_require__(42);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = /** @class */ (function () {
    function SharedService(customService) {
        this.customService = customService;
    }
    /**
     * checks if there is a non-digit character in contact no.
     * IF YES: return false
     * ELSE return true
     * IF @param contactNo is undefined or empty string, then also return true
     */
    SharedService.prototype.isValidContactNo = function (contactNo) {
        var pattern = /[^0-9]/; // regx for checking if there is a non-digit character in contact no.
        if (contactNo && contactNo.trim() !== '' && pattern.test(contactNo)) {
            this.customService.showToast('Only digits are allowed in Contact No.', "top");
            return false;
        }
        if (contactNo && contactNo.trim() !== '' && contactNo.trim().length !== 10) {
            this.customService.showToast('Contact No. must contain exactly 10 digits', "top", true);
            return false;
        }
        return true;
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_service__["a" /* CustomService */]])
    ], SharedService);
    return SharedService;
}());

//# sourceMappingURL=shared.service.js.map

/***/ }),

/***/ 215:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppreciationService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppreciationService = /** @class */ (function () {
    function AppreciationService(http) {
        this.http = http;
    }
    AppreciationService.prototype.submitAppreciation = function (data) {
        return this.http.post('/appreciation', data);
    };
    AppreciationService.prototype.getAppreciations = function (pageNo) {
        return this.http.get("/appreciation/page/" + pageNo);
    };
    AppreciationService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], AppreciationService);
    return AppreciationService;
}());

//# sourceMappingURL=appreciation.service.js.map

/***/ }),

/***/ 216:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmployeeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
    }
    EmployeeService.prototype.getRolesAndStores = function () {
        return Object(__WEBPACK_IMPORTED_MODULE_2_rxjs_observable_forkJoin__["forkJoin"])(this.getRoles(), this.getStores());
    };
    EmployeeService.prototype.getRoles = function () {
        return this.http.get("/role");
    };
    EmployeeService.prototype.getStores = function () {
        return this.http.get("/store");
    };
    EmployeeService.prototype.getEmployees = function (pageNo) {
        return this.http.get("/employee/page/" + pageNo);
    };
    EmployeeService.prototype.createEmployee = function (data) {
        return this.http.post('/employee', data);
    };
    EmployeeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], EmployeeService);
    return EmployeeService;
}());

//# sourceMappingURL=employee.service.js.map

/***/ }),

/***/ 217:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StoreService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var StoreService = /** @class */ (function () {
    function StoreService(http) {
        this.http = http;
    }
    StoreService.prototype.getStores = function () {
        return this.http.get('/store');
    };
    StoreService.prototype.createStore = function (data) {
        return this.http.post('/store', data);
    };
    StoreService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], StoreService);
    return StoreService;
}());

//# sourceMappingURL=store.service.js.map

/***/ }),

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(238);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__(300);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_network_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__providers_custom_http_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__providers_custom_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__providers_complaint_service__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_appreciation_service__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_survey_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_shared_service__ = __webpack_require__(214);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_store_service__ = __webpack_require__(217);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_employee_service__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_dashboard__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_dashboard_service__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_push_message_service__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_fcm__ = __webpack_require__(212);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









//PROVIDERS














//PLUGINS

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_dashboard__["a" /* DashboardPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */], {
                    preloadModules: true
                }, {
                    links: [
                        { loadChildren: '../pages/management/appreciation/appreciation.module#AppreciationsModule', name: 'AppreciationsPage', segment: 'appreciation', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/management/change-role/change-role.module#ChangeRoleModule', name: 'ChangeRolePage', segment: 'change-role', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/management/comments/comments.module#CommentsModule', name: 'CommentsPage', segment: 'comments', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/management/comp-close-mngnt/comp-close-mngnt.module#ComplaintCloseManagementModule', name: 'ComplaintCloseManagementPage', segment: 'comp-close-mngnt', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/management/compl-suggestion-options/compl-suggestion-options.module#ComplaintSuggestionOptionsModule', name: 'ComplaintSuggestionOptionsPage', segment: 'compl-suggestion-options', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/management/complaints/complaints.module#ComplaintsPageModule', name: 'ComplaintsPage', segment: 'complaints', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/management/complaint-main/complaint-main.module#ComplaintMainModule', name: 'ComplaintMainPage', segment: 'complaint-main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/management/edit-complaint/edit-complaint.module#ComplaintEditModule', name: 'ComplaintEditPage', segment: 'edit-complaint', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/management/edit-complaint/search/search.module#FacultySearchModule', name: 'FacultySearchPage', segment: 'search', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/management/suggestions/suggestions.module#SuggestionsModule', name: 'SuggestionsPage', segment: 'suggestions', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/management/sort-filter-options/sort-filter.module#SortFilterOptionsModule', name: 'SortFilterOptionsPage', segment: 'sort-filter', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/management/view-complaint/view.module#ViewComplaintModule', name: 'ViewComplaintPage', segment: 'view', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/management/survey-detail/survey-detail.module#SurveyDetailModule', name: 'SurveyDetailPage', segment: 'survey-detail', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-c/new-c.module#NewComplaintPageModule', name: 'NewComplaintPage', segment: 'new-c', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-a/new-a.module#NewAppreciationPageModule', name: 'NewAppreciationPage', segment: 'new-a', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/new-sur/new-sur.module#NewSurPageModule', name: 'NewSurPage', segment: 'new-sur', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/submit-success/submit-success.module#SubmitSuccessPageModule', name: 'SubmitSuccessPage', segment: 'submit-success', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/super-admin/employees/employees.module#EmployeesPageModule', name: 'EmployeesPage', segment: 'employees', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/super-admin/new-empl/new-empl.module#NewEmplPageModule', name: 'NewEmplPage', segment: 'new-empl', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/super-admin/stores/stores.module#StoresPageModule', name: 'StoresPage', segment: 'stores', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/survey/survey.module#SurveyModule', name: 'SurveyPage', segment: 'survey', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["b" /* HttpClientModule */],
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_7__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_20__pages_dashboard_dashboard__["a" /* DashboardPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["ErrorHandler"], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_9__providers_network_service__["a" /* NetworkService */],
                __WEBPACK_IMPORTED_MODULE_10__providers_custom_http_service__["a" /* CustomHttpService */],
                __WEBPACK_IMPORTED_MODULE_11__providers_custom_service__["a" /* CustomService */],
                __WEBPACK_IMPORTED_MODULE_12__providers_auth_service__["a" /* AuthService */],
                __WEBPACK_IMPORTED_MODULE_14__providers_complaint_service__["a" /* ComplaintService */],
                __WEBPACK_IMPORTED_MODULE_15__providers_appreciation_service__["a" /* AppreciationService */],
                __WEBPACK_IMPORTED_MODULE_16__providers_survey_service__["a" /* SurveyService */],
                __WEBPACK_IMPORTED_MODULE_18__providers_store_service__["a" /* StoreService */],
                __WEBPACK_IMPORTED_MODULE_19__providers_employee_service__["a" /* EmployeeService */],
                __WEBPACK_IMPORTED_MODULE_17__providers_shared_service__["a" /* SharedService */],
                __WEBPACK_IMPORTED_MODULE_21__providers_dashboard_service__["a" /* DashboardService */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_22__providers_push_message_service__["a" /* PushMessageService */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BASEURL; });
var BASEURL = "https://yugma.ind-cloud.everdata.com";
//# sourceMappingURL=app.constants.js.map

/***/ }),

/***/ 300:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Classes_user_session_manage__ = __webpack_require__(301);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_network_service__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__providers_custom_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_push_message_service__ = __webpack_require__(211);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var MyApp = /** @class */ (function (_super) {
    __extends(MyApp, _super);
    function MyApp(events, appCtrl, authService, alertCtrl, networkService, platform, statusBar, splashScreen, menu, customSercvice, pushMsgService) {
        var _this = _super.call(this, events, appCtrl, authService, alertCtrl, networkService, menu, customSercvice, pushMsgService) || this;
        _this.events = events;
        _this.appCtrl = appCtrl;
        _this.authService = authService;
        _this.alertCtrl = alertCtrl;
        _this.networkService = networkService;
        _this.platform = platform;
        _this.statusBar = statusBar;
        _this.splashScreen = splashScreen;
        _this.menu = menu;
        _this.customSercvice = customSercvice;
        _this.pushMsgService = pushMsgService;
        _this.defaultUserImage = "assets/imgs/user.png";
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
        return _this;
    }
    MyApp.prototype.openPage = function (page) {
        /**Handle the case when user pic is clicked */
        if (!page) {
            this.activePage = "";
            this.menu.close();
            // this.nav.setRoot("AccountPage");
            return;
        }
        this.activePage = page.component;
        this.menu.close();
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/app/app.html"*/'<ion-menu [content]="mycontent" *ngIf="!isGuest">\n    <ion-header tappable (tap)="openPage()" menuClose class="primary-back">\n                <div>\n                    <img [src]="userImage || defaultUserImage" class="center-block" width="100px" height="100px" margin-top>\n                    <h2 text-center>{{userName | titlecase}}</h2>\n            </div>\n    </ion-header>\n    <ion-content>\n        <ion-list>\n            <button ion-item *ngFor="let option of sideMenuOptions" (click)="openPage(option)" [ngClass]="{\'activePage\': activePage == option.component}">\n                <ion-icon [name]="option.icon" color="primary" item-left></ion-icon>{{option.title}}\n            </button>\n        </ion-list>\n    </ion-content>\n</ion-menu>\n\n\n<ion-nav [root]="rootPage" #mycontent></ion-nav>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* App */],
            __WEBPACK_IMPORTED_MODULE_5__providers_auth_service__["a" /* AuthService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_6__providers_network_service__["a" /* NetworkService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* Platform */],
            __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* MenuController */],
            __WEBPACK_IMPORTED_MODULE_7__providers_custom_service__["a" /* CustomService */],
            __WEBPACK_IMPORTED_MODULE_8__providers_push_message_service__["a" /* PushMessageService */]])
    ], MyApp);
    return MyApp;
}(__WEBPACK_IMPORTED_MODULE_4__Classes_user_session_manage__["a" /* UserSessionManage */]));

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSessionManage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_login_login__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__pages_home_home__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pages_dashboard_dashboard__ = __webpack_require__(207);



var UserSessionManage = /** @class */ (function () {
    function UserSessionManage(events, appCtrl, authService, alertCtrl, networkService, menu, customService, pushMsgService) {
        this.events = events;
        this.appCtrl = appCtrl;
        this.authService = authService;
        this.alertCtrl = alertCtrl;
        this.networkService = networkService;
        this.menu = menu;
        this.customService = customService;
        this.pushMsgService = pushMsgService;
        this.handleEvents();
        this.networkService.checkNetworkStatus();
        this.hasLoggedIn();
    }
    UserSessionManage.prototype.handleEvents = function () {
        var _this = this;
        this.events.subscribe('user:login', function () {
            _this.login();
        });
        // this.events.subscribe('session:expired', () => {
        //     this.sessionExpired();
        // });
        this.events.subscribe('user:logout', function () {
            _this.logout();
        });
        this.events.subscribe("offline", function () {
            _this.offline();
        });
        this.events.subscribe("online", function () {
            _this.online();
        });
        this.events.subscribe("user:image", function () {
            _this.imageUpdate();
        });
    };
    UserSessionManage.prototype.hasLoggedIn = function () {
        var _this = this;
        if (this.authService.isLoggedIn()) {
            this.authService.fetchUserDetails()
                .subscribe(function (res) {
                // no need to do any thing as userdetails would have been saved in service
                _this.setRootPage();
                _this.enablePushNotifications();
            }, function (err) {
                _this.customService.showToast('Some error occured, Please Reopen the App or Logout');
            });
        }
        else {
            this.rootPage = __WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */];
        }
    };
    UserSessionManage.prototype.login = function () {
        this.setRootPage();
        this.enablePushNotifications();
        // this.imageUpdate();
    };
    UserSessionManage.prototype.enablePushNotifications = function () {
        this.pushMsgService.initializeFCM();
    };
    UserSessionManage.prototype.setRootPage = function () {
        //check role and set root page
        var role = JSON.parse(localStorage.getItem('userInfo')).urlPrefix;
        switch (role) {
            case 'g':
                this.menu.enable(false);
                // this.rootPage = HomePage;
                this.appCtrl.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_1__pages_home_home__["a" /* HomePage */]);
                this.isGuest = true;
                break;
            case 'sa':
                // this.rootPage = DashboardPage;
                this.appCtrl.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_dashboard_dashboard__["a" /* DashboardPage */]);
                this.decideSideMenuContent();
                this.menu.enable(true);
                this.isGuest = false;
                break;
            case 'a':
                // this.rootPage = DashboardPage;
                this.appCtrl.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_2__pages_dashboard_dashboard__["a" /* DashboardPage */]);
                this.decideSideMenuContent();
                this.menu.enable(true);
                this.isGuest = false;
                break;
        }
        this.imageUpdate();
    };
    /**maintain different side menu options for super-admin and managment for better understanding and also there might be some features
     * present in one but not in other
     */
    UserSessionManage.prototype.decideSideMenuContent = function () {
        var isSuperAdmin = JSON.parse(localStorage.getItem('userInfo')).urlPrefix === 'sa';
        if (isSuperAdmin) {
            this.sideMenuOptions = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__pages_dashboard_dashboard__["a" /* DashboardPage */], icon: 'home' },
                { title: 'Complaints', component: "ComplaintsPage", icon: 'sad' },
                { title: 'Suggestions', component: "SuggestionsPage", icon: 'bulb' },
                { title: 'Appreciations', component: "AppreciationsPage", show: isSuperAdmin, icon: 'thumbs-up' },
                { title: 'Surveys', component: "SurveyPage", show: isSuperAdmin, icon: 'paper' },
                { title: 'Stores', component: "StoresPage", show: isSuperAdmin, icon: 'basket' },
                { title: 'Employees', component: "EmployeesPage", show: isSuperAdmin, icon: 'people' },
            ];
        }
        else {
            this.sideMenuOptions = [
                { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_2__pages_dashboard_dashboard__["a" /* DashboardPage */], icon: 'home' },
                { title: 'Complaints', component: "ComplaintsPage", icon: 'sad' },
                { title: 'Suggestions', component: "SuggestionsPage", icon: 'bulb' },
                { title: 'Appreciations', component: "AppreciationsPage", show: isSuperAdmin, icon: 'thumbs-up' },
                { title: 'Surveys', component: "SurveyPage", show: isSuperAdmin, icon: 'paper' },
            ];
        }
    };
    UserSessionManage.prototype.imageUpdate = function () {
        this.userImage = JSON.parse(localStorage.getItem('userInfo')).picUrl;
        this.userName = JSON.parse(localStorage.getItem('userInfo')).username || '';
    };
    UserSessionManage.prototype.logout = function () {
        localStorage.clear();
        URLPREFIX = undefined;
        ROLE = undefined;
        this.appCtrl.getRootNavs()[0].setRoot(__WEBPACK_IMPORTED_MODULE_0__pages_login_login__["a" /* LoginPage */]);
    };
    UserSessionManage.prototype.offline = function () {
        // if (this.authService.isLoggedIn()) {
        //     this.appCtrl.getRootNavs()[0].setRoot(NoInternet);
        // }
    };
    UserSessionManage.prototype.online = function () {
        // if (this.authService.isLoggedIn()) {
        //     this.login();
        // } else {
        //     this.logout();
        // }
    };
    return UserSessionManage;
}());

//# sourceMappingURL=user-session-manage.js.map

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CustomService; });
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


var CustomService = /** @class */ (function () {
    function CustomService(l, toastCtrl) {
        this.l = l;
        this.toastCtrl = toastCtrl;
    }
    CustomService.prototype.showLoader = function (text) {
        this.loading = this.l.create({
            content: text || 'Please wait...'
        });
        this.loading.present();
    };
    CustomService.prototype.hideLoader = function () {
        this.loading.dismiss();
    };
    CustomService.prototype.showToast = function (msg, pos, showCloseBtn) {
        this.toast = this.toastCtrl.create({
            message: msg,
            duration: 3000,
            position: pos || 'bottom',
            showCloseButton: showCloseBtn,
            closeButtonText: 'Ok'
        });
        this.toast.present();
    };
    CustomService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["r" /* ToastController */]])
    ], CustomService);
    return CustomService;
}());

//# sourceMappingURL=custom.service.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__custom_http_service__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
    }
    // Notification token update after user login
    AuthService.prototype.tokenUpdate = function (token) {
        var notificationToken = {
            notificationToken: token
        };
        return this.http.put('/update', notificationToken);
    };
    AuthService.prototype.login = function (loginCredentials) {
        return this.http.postForLogin(loginCredentials);
    };
    AuthService.prototype.isLoggedIn = function () {
        return localStorage.getItem('access_token') ? true : false;
    };
    AuthService.prototype.saveToken = function (token) {
        localStorage.setItem('access_token', token);
    };
    AuthService.prototype.fetchUserDetails = function () {
        var _this = this;
        return this.http.get('/user-info').map(function (res) {
            _this.saveUserDetails(res);
            return res;
        });
    };
    AuthService.prototype.saveUserDetails = function (userInfo) {
        this.setRole(userInfo);
        localStorage.setItem('userInfo', JSON.stringify(userInfo));
    };
    AuthService.prototype.setRole = function (info) {
        // urlPrefix will be 'g' for guest, 'a' for admin/management, 'sa' for superadmin
        URLPREFIX = info.urlPrefix;
        // set ROLE in case of admin/mngmnt only, set default ROLE as first role in array
        if (URLPREFIX === 'a') {
            ROLE = info.roles[0];
        }
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__custom_http_service__["a" /* CustomHttpService */]])
    ], AuthService);
    return AuthService;
}());

//# sourceMappingURL=auth.service.js.map

/***/ })

},[218]);
//# sourceMappingURL=main.js.map