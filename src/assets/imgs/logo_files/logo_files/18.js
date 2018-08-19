webpackJsonp([18],{

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintEditModule", function() { return ComplaintEditModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_complaint__ = __webpack_require__(481);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ComplaintEditModule = /** @class */ (function () {
    function ComplaintEditModule() {
    }
    ComplaintEditModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__edit_complaint__["a" /* ComplaintEditPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_complaint__["a" /* ComplaintEditPage */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__edit_complaint__["a" /* ComplaintEditPage */]]
        })
    ], ComplaintEditModule);
    return ComplaintEditModule;
}());

//# sourceMappingURL=edit-complaint.module.js.map

/***/ }),

/***/ 481:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComplaintEditPage; });
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




var ComplaintEditPage = /** @class */ (function () {
    function ComplaintEditPage(complaintService, customService, navParam, viewCtrl, actionSheetCtrl, mdlCtrl, events) {
        this.complaintService = complaintService;
        this.customService = customService;
        this.navParam = navParam;
        this.viewCtrl = viewCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.mdlCtrl = mdlCtrl;
        this.events = events;
        this.title = "Edit " + this.complaintService.compOrSugg;
        this.complaint = this.navParam.get('complaint');
    }
    ComplaintEditPage.prototype.ngOnInit = function () {
        var _this = this;
        this.customService.showLoader();
        this.complaintService.getPrioritiesAndEmployees()
            .subscribe(function (res) {
            _this.customService.hideLoader();
            _this.priorityList = res[0], _this.facultyList = res[1];
        }, function (err) {
            _this.customService.hideLoader();
            _this.customService.showToast(err.msg);
        });
    };
    ComplaintEditPage.prototype.onAssignedToBtn = function () {
        var _this = this;
        var searchableList;
        if (URLPREFIX === 'sa') {
            searchableList = this.facultyList.filter(function (s) { return s.storeId === _this.complaint.storeId; });
        }
        else {
            searchableList = this.facultyList;
        }
        var searchPage = this.mdlCtrl.create("FacultySearchPage", { 'searchList': searchableList, 'title': 'Employee' });
        searchPage.present();
        searchPage.onDidDismiss(function (selected) {
            if (selected) {
                _this.assignTo = selected.selectedSearch;
                _this.assignToName = selected.selectedSearch.name;
            }
        });
    };
    ComplaintEditPage.prototype.onEditBtn = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Are you sure to change the status ?',
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
    ComplaintEditPage.prototype.submitFinally = function () {
        var _this = this;
        var status = {
            assignedTo: this.assignTo && this.assignTo.id,
            priority: this.priority
        };
        (this.inProgress);
        if (this.inProgress) {
            status.statusId = 3;
        }
        this.customService.showLoader();
        this.complaintService.editComplaint(this.complaint.id, status)
            .subscribe(function (res) {
            _this.complaintService.updateComplaint(_this.complaint, res);
            _this.customService.hideLoader();
            _this.customService.showToast('Complaint Edited successfully');
            _this.dismiss(res);
        }, function (err) {
            _this.customService.hideLoader();
            _this.customService.showToast(err.msg);
        });
    };
    ComplaintEditPage.prototype.dismiss = function (updatedComplaint) {
        this.viewCtrl.dismiss(updatedComplaint);
    };
    ComplaintEditPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'edit-complaint',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/management/edit-complaint/edit-complaint.html"*/'<ion-header>\n  <ion-toolbar color="primary">\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span color="light">Cancel</span>\n      </button>\n    </ion-buttons>\n    <ion-title>{{title | titlecase}}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class="gray-back">\n  <div class="input-box">\n    <ion-item (click)="onAssignedToBtn()" no-lines>\n      <ion-icon name="md-done-all" color=\'primary\' item-left></ion-icon>\n      <ion-label>Assign To</ion-label>\n      <ion-input right item-right [(ngModel)]="assignToName" disabled placeholder="Select Employee"></ion-input>\n    </ion-item>\n  </div>\n  <div class="input-box">\n    <ion-item no-lines>\n      <ion-icon name="md-arrow-round-up" color=\'primary\' item-left></ion-icon>\n      <ion-label>Set Priority</ion-label>\n      <ion-select [(ngModel)]="priority">\n        <ion-option *ngFor="let p of priorityList" [value]="p.id">{{p.name}}</ion-option>\n      </ion-select>\n    </ion-item>\n  </div>\n  <div class="input-box">\n    <ion-item no-lines>\n      <ion-label>In Progress</ion-label>\n      <ion-checkbox [(ngModel)]="inProgress"></ion-checkbox>\n    </ion-item>\n  </div>\n  <div padding>\n    <button [disabled]="!(assignTo || priority || inProgress)" round (click)="onEditBtn()" ion-button full>Save</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/management/edit-complaint/edit-complaint.html"*/,
            styles: [""]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_complaint_service__["a" /* ComplaintService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_custom_service__["a" /* CustomService */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["s" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Events */]])
    ], ComplaintEditPage);
    return ComplaintEditPage;
}());

//# sourceMappingURL=edit-complaint.js.map

/***/ })

});
//# sourceMappingURL=18.js.map