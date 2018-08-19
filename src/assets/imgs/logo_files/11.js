webpackJsonp([11],{

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintSuggestionOptionsModule", function() { return ComplaintSuggestionOptionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__compl_suggestion_options__ = __webpack_require__(467);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComplaintSuggestionOptionsModule = /** @class */ (function () {
    function ComplaintSuggestionOptionsModule() {
    }
    ComplaintSuggestionOptionsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__compl_suggestion_options__["a" /* ComplaintSuggestionOptionsPage */]],
            imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__compl_suggestion_options__["a" /* ComplaintSuggestionOptionsPage */])],
            exports: [__WEBPACK_IMPORTED_MODULE_2__compl_suggestion_options__["a" /* ComplaintSuggestionOptionsPage */]]
        })
    ], ComplaintSuggestionOptionsModule);
    return ComplaintSuggestionOptionsModule;
}());

//# sourceMappingURL=compl-suggestion-options.module.js.map

/***/ }),

/***/ 466:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintSuggestionOptionsBaseClass; });
var ComplaintSuggestionOptionsBaseClass = /** @class */ (function () {
    function ComplaintSuggestionOptionsBaseClass(mdlCtrl, alertCtrl, actionSheetCtrl, customService, complaintService, events) {
        this.mdlCtrl = mdlCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.customService = customService;
        this.complaintService = complaintService;
        this.events = events;
    }
    // corresponding modals have been returned so that 
    // we can attach onDidDismissChange handler to them 
    // returned value is useful only when these modals are opened from viewComplaint page
    ComplaintSuggestionOptionsBaseClass.prototype.editComplaint = function () {
        var editPage = this.mdlCtrl.create("ComplaintEditPage", { 'complaint': this.complaint, 'complaintIndex': this.complaintIndex });
        editPage.present();
        return editPage;
    };
    ComplaintSuggestionOptionsBaseClass.prototype.openClosePage = function () {
        var closePage = this.mdlCtrl.create("ComplaintCloseManagementPage", { 'complaint': this.complaint, 'complaintIndex': this.complaintIndex });
        closePage.present();
        return closePage;
    };
    ComplaintSuggestionOptionsBaseClass.prototype.openCommentPage = function () {
        var commentPage = this.mdlCtrl.create("CommentsPage", { 'complaint': this.complaint, 'complaintIndex': this.complaintIndex });
        commentPage.present();
        return commentPage;
    };
    return ComplaintSuggestionOptionsBaseClass;
}());

//# sourceMappingURL=compl-suggestion-base-class.js.map

/***/ }),

/***/ 467:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintSuggestionOptionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Classes_compl_suggestion_base_class__ = __webpack_require__(466);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_custom_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_complaint_service__ = __webpack_require__(105);
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





var ComplaintSuggestionOptionsPage = /** @class */ (function (_super) {
    __extends(ComplaintSuggestionOptionsPage, _super);
    function ComplaintSuggestionOptionsPage(mdlCtrl, alertCtrl, actionSheetCtrl, customService, complaintService, events) {
        var _this = _super.call(this, mdlCtrl, alertCtrl, actionSheetCtrl, customService, complaintService, events) || this;
        _this.mdlCtrl = mdlCtrl;
        _this.alertCtrl = alertCtrl;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.customService = customService;
        _this.complaintService = complaintService;
        _this.events = events;
        return _this;
    }
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComplaintSuggestionOptionsPage.prototype, "complaint", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Object)
    ], ComplaintSuggestionOptionsPage.prototype, "complaintIndex", void 0);
    ComplaintSuggestionOptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'c-s-options',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/management/compl-suggestion-options/compl-suggestion-options.html"*/'<button ion-button *ngIf="complaint.statusId != 6 && complaint.statusId != 4" color="color2" (click)="editComplaint()">\n  <ion-icon name="md-close" class="csBigIcon"></ion-icon>\n  Edit\n</button>\n\n<button ion-button color="color4" (click)="openCommentPage()">\n  <ion-icon name="ios-chatbubbles" class="csBigIcon"></ion-icon>\n  Comments\n</button>\n\n\n<button ion-button *ngIf="complaint.statusId != 6 && complaint.statusId != 4" color="color3" (click)="openClosePage()">\n  <ion-icon name="md-close" class="csBigIcon"></ion-icon>\n  Close\n</button>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/management/compl-suggestion-options/compl-suggestion-options.html"*/,
            styles: [""]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_3__providers_custom_service__["a" /* CustomService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_complaint_service__["a" /* ComplaintService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], ComplaintSuggestionOptionsPage);
    return ComplaintSuggestionOptionsPage;
}(__WEBPACK_IMPORTED_MODULE_2__Classes_compl_suggestion_base_class__["a" /* ComplaintSuggestionOptionsBaseClass */]));

//# sourceMappingURL=compl-suggestion-options.js.map

/***/ })

});
//# sourceMappingURL=11.js.map