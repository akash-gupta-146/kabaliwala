webpackJsonp([19],{

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintCloseManagementModule", function() { return ComplaintCloseManagementModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__comp_close_mngnt__ = __webpack_require__(479);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComplaintCloseManagementModule = /** @class */ (function () {
    function ComplaintCloseManagementModule() {
    }
    ComplaintCloseManagementModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__comp_close_mngnt__["a" /* ComplaintCloseManagementPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__comp_close_mngnt__["a" /* ComplaintCloseManagementPage */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__comp_close_mngnt__["a" /* ComplaintCloseManagementPage */]]
        })
    ], ComplaintCloseManagementModule);
    return ComplaintCloseManagementModule;
}());

//# sourceMappingURL=comp-close-mngnt.module.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintCloseManagementPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_complaint_service__ = __webpack_require__(105);
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




var ComplaintCloseManagementPage = /** @class */ (function () {
    function ComplaintCloseManagementPage(complaintService, customService, navParam, viewCtrl, actionSheetCtrl, events) {
        this.complaintService = complaintService;
        this.customService = customService;
        this.navParam = navParam;
        this.viewCtrl = viewCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.events = events;
        this.title = "Close " + this.complaintService.compOrSugg;
        //form variables
        this.rootCause = '';
        this.comment = '';
        this.complaintClosed = false;
        this.complaint = this.navParam.get('complaint');
        this.complaintIndex = this.navParam.get('complaintIndex');
    }
    ComplaintCloseManagementPage.prototype.onSubmit = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Are you sure to close the complaint ?',
            buttons: [
                {
                    text: 'Yes',
                    handler: function () {
                        _this.submitFinally();
                    }
                }, {
                    text: 'Cancel',
                    role: 'destructive',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    ComplaintCloseManagementPage.prototype.submitFinally = function () {
        var _this = this;
        var reason = {
            rca: this.rootCause,
            comment: this.comment
        };
        this.customService.showLoader();
        this.complaintService.closeComplaint(this.complaint.id, reason)
            .subscribe(function (res) {
            _this.customService.hideLoader();
            _this.complaintService.updateComplaint(_this.complaint, res);
            _this.customService.showToast('Complaint closed successfully');
            _this.dismiss(res);
        }, function (err) {
            _this.customService.hideLoader();
            _this.customService.showToast(err.msg);
        });
    };
    ComplaintCloseManagementPage.prototype.dismiss = function (updatedComplaint) {
        this.viewCtrl.dismiss(updatedComplaint);
    };
    ComplaintCloseManagementPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'comp-close-mngnt',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/management/comp-close-mngnt/comp-close-mngnt.html"*/'<ion-header>\n        <ion-toolbar color="primary">\n          <ion-buttons start>\n            <button ion-button (click)="dismiss()">\n              <span color="light">Cancel</span>\n            </button>\n          </ion-buttons>\n          <ion-title>{{title | titlecase}}</ion-title>\n        </ion-toolbar>\n    </ion-header>\n\n<ion-content class="gray-back">\n        <div class="input-box">\n        <ion-item>\n            <ion-label stacked class="d-flex justify-content-between">\n                Root Cause\n                <ion-badge class="limit">\n                        <span>{{50 - rootCause.length}}</span>\n                </ion-badge>\n            </ion-label>\n            <ion-textarea [(ngModel)]="rootCause" required name="rca" maxlength="50" placeholder="Enter Root Cause "></ion-textarea>\n\n        </ion-item>\n\n        </div>\n\n        <div class="input-box">\n        <ion-item>\n            <ion-label stacked class="d-flex justify-content-between">\n                Comment\n                <ion-badge>\n                        <span>{{200 - comment.length}}</span>\n                </ion-badge>\n            </ion-label>\n            <ion-textarea [(ngModel)]="comment" required name="comment" maxlength="50" placeholder="Enter Comment"></ion-textarea>\n\n        </ion-item>\n    </div>\n\n    <div padding>\n        <button (click)="onSubmit()" round [disabled]="rootCause.trim().length==0 || comment.trim().length==0" ion-button full>Submit</button>\n    </div>\n\n</ion-content>'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/management/comp-close-mngnt/comp-close-mngnt.html"*/,
            styles: [""]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_complaint_service__["a" /* ComplaintService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_custom_service__["a" /* CustomService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], ComplaintCloseManagementPage);
    return ComplaintCloseManagementPage;
}());

//# sourceMappingURL=comp-close-mngnt.js.map

/***/ })

});
//# sourceMappingURL=19.js.map