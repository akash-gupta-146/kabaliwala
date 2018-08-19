webpackJsonp([10],{

/***/ 312:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FacultySearchModule", function() { return FacultySearchModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__search__ = __webpack_require__(482);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__custom_image_image_module__ = __webpack_require__(472);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var FacultySearchModule = /** @class */ (function () {
    function FacultySearchModule() {
    }
    FacultySearchModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__search__["a" /* FacultySearchPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__custom_image_image_module__["a" /* ImageHandlerModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__search__["a" /* FacultySearchPage */])
            ],
        })
    ], FacultySearchModule);
    return FacultySearchModule;
}());

//# sourceMappingURL=search.module.js.map

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

/***/ 482:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FacultySearchPage; });
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


var FacultySearchPage = /** @class */ (function () {
    function FacultySearchPage(viewCtrl, navParam) {
        this.viewCtrl = viewCtrl;
        this.navParam = navParam;
        this.noMatch = false;
        this.searchList = this.navParam.get('searchList');
        this.title = 'Select ' + this.navParam.get('title');
        this.searchTempList = this.searchList;
    }
    FacultySearchPage.prototype.ionViewDidEnter = function () {
        this.searchBar.setFocus();
    };
    FacultySearchPage.prototype.onSearchInput = function (event) {
        var _this = this;
        if (event.type != 'input' || this.searchList.length == 0) {
            return;
        }
        if (this.searchInput.trim().length == 0) {
            this.searchTempList = this.searchList;
            this.noMatch = this.searchTempList.length == 0;
            return;
        }
        this.searchTempList = this.searchList.filter(function (search) {
            return search.name.toLowerCase().indexOf(_this.searchInput.toLowerCase()) > -1;
        });
        this.noMatch = this.searchTempList.length == 0;
    };
    FacultySearchPage.prototype.onSearchClear = function (event) {
        if (this.searchList.length == 0) {
            return;
        }
        this.searchTempList = this.searchList;
        this.noMatch = this.searchTempList.length == 0;
    };
    FacultySearchPage.prototype.dismiss = function (selectedSearch) {
        if (selectedSearch) {
            this.viewCtrl.dismiss({ 'selectedSearch': selectedSearch });
        }
        else {
            this.viewCtrl.dismiss();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* Searchbar */])
    ], FacultySearchPage.prototype, "searchBar", void 0);
    FacultySearchPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'faculty-search',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/management/edit-complaint/search/search.html"*/'<ion-header>\n        <ion-toolbar color="primary">\n          <ion-buttons start>\n            <button ion-button class="navBtnRight" (click)="dismiss()">\n              <span color="light">Cancel</span>\n            </button>\n          </ion-buttons>\n          <ion-title>{{title | titlecase}}</ion-title>\n        </ion-toolbar>\n        <ion-searchbar color=\'primary\' #searchbar [(ngModel)]="searchInput" (ionInput)="onSearchInput($event)" (ionClear)="onSearchClear($event)"></ion-searchbar>\n      </ion-header>\n\n<ion-content class="gray-back">\n        <ion-list>\n            <button ion-item *ngFor="let search of searchTempList" (click)="dismiss(search)">\n                <nl-img [src]="search.picUrl" item-left style="height: 50px;width: 50px"></nl-img>\n                {{search.name }}\n                <ion-badge *ngIf="search.role">{{search.role}}</ion-badge>\n                <p *ngIf="search.store"><span bold>Store: </span>{{search.store}}</p>\n            </button>\n        </ion-list>\n\n    <p *ngIf="noMatch">No Match Found</p>\n    <p *ngIf="searchList.length == 0">No Data Available</p>\n\n</ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/management/edit-complaint/search/search.html"*/,
            styles: [""]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */]])
    ], FacultySearchPage);
    return FacultySearchPage;
}());

//# sourceMappingURL=search.js.map

/***/ })

});
//# sourceMappingURL=10.js.map