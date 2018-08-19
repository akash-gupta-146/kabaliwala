webpackJsonp([20],{

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

/***/ })

});
//# sourceMappingURL=20.js.map