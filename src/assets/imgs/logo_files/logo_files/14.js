webpackJsonp([14],{

/***/ 319:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubmitSuccessPageModule", function() { return SubmitSuccessPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__submit_success__ = __webpack_require__(489);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SubmitSuccessPageModule = /** @class */ (function () {
    function SubmitSuccessPageModule() {
    }
    SubmitSuccessPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__submit_success__["a" /* SubmitSuccessPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__submit_success__["a" /* SubmitSuccessPage */]),
            ],
        })
    ], SubmitSuccessPageModule);
    return SubmitSuccessPageModule;
}());

//# sourceMappingURL=submit-success.module.js.map

/***/ }),

/***/ 489:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SubmitSuccessPage; });
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


/**
 * Generated class for the SubmitSuccessPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var SubmitSuccessPage = /** @class */ (function () {
    function SubmitSuccessPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    SubmitSuccessPage.prototype.onBack = function () {
        clearTimeout(this.timeOutId);
        this.navCtrl.pop();
    };
    SubmitSuccessPage.prototype.ngOnInit = function () {
        this.playSound();
    };
    SubmitSuccessPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        /**
         * REMOVE THE PAGE BELOW THE CURRENT PAGE IN THE PAGE STACK
         * THIS IS DONE IN ORDER TO VIEW THE MAIN PAGE DIRECTLY AND NOT THE NEW-FORM PAGE
         */
        var prevView = this.navCtrl.getPrevious();
        this.navCtrl.removeView(prevView);
        this.timeOutId = setTimeout(function () {
            _this.navCtrl.pop();
        }, 5000);
    };
    SubmitSuccessPage.prototype.playSound = function () {
        this.music = document.getElementById("music");
        if (this.music) {
            this.music.play();
        }
    };
    SubmitSuccessPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-submit-success',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/submit-success/submit-success.html"*/'<!--\n  Generated template for the SubmitSuccessPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<audio id="music">\n  <source src="assets/music/completed.mp3">\n</audio>\n\n\n\n<ion-content class="gray-back">\n\n<div cen>\n    <h1 margin text-center>Sent Successfully</h1>\n    <img class="sent" src="assets/imgs/sent.gif" margin>\n    <button ion-button round margin full class="center-block" icon-left (click)="onBack()">\n        <ion-icon name="arrow-dropleft"></ion-icon>\n        Back\n      </button>\n</div>\n\n\n\n</ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/submit-success/submit-success.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], SubmitSuccessPage);
    return SubmitSuccessPage;
}());

//# sourceMappingURL=submit-success.js.map

/***/ })

});
//# sourceMappingURL=14.js.map