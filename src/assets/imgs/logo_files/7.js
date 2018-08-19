webpackJsonp([7],{

/***/ 318:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewSurPageModule", function() { return NewSurPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__new_sur__ = __webpack_require__(488);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__ = __webpack_require__(475);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var NewSurPageModule = /** @class */ (function () {
    function NewSurPageModule() {
    }
    NewSurPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__new_sur__["a" /* NewSurPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3_ionic2_rating__["a" /* Ionic2RatingModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__new_sur__["a" /* NewSurPage */]),
            ],
        })
    ], NewSurPageModule);
    return NewSurPageModule;
}());

//# sourceMappingURL=new-sur.module.js.map

/***/ }),

/***/ 474:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export RATING_CONTROL_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2Rating; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(13);


var noop = function () {
};
var RATING_CONTROL_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["forwardRef"])(function () { return Ionic2Rating; }),
    multi: true
};
var Ionic2Rating = (function () {
    function Ionic2Rating() {
        this._max = 5;
        this._readOnly = false;
        this._emptyStarIconName = 'star-outline';
        this._halfStarIconName = 'star-half';
        this._starIconName = 'star';
        this._nullable = false;
        this.onChangeCallback = noop;
    }
    Object.defineProperty(Ionic2Rating.prototype, "max", {
        get: function () {
            return this._max;
        },
        set: function (val) {
            this._max = this.getNumberPropertyValue(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "readOnly", {
        get: function () {
            return this._readOnly;
        },
        set: function (val) {
            this._readOnly = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "emptyStarIconName", {
        get: function () {
            return this._emptyStarIconName;
        },
        set: function (val) {
            this._emptyStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "halfStarIconName", {
        get: function () {
            return this._halfStarIconName;
        },
        set: function (val) {
            this._halfStarIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "starIconName", {
        get: function () {
            return this._starIconName;
        },
        set: function (val) {
            this._starIconName = val;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Ionic2Rating.prototype, "nullable", {
        get: function () {
            return this._nullable;
        },
        set: function (val) {
            this._nullable = this.isTrueProperty(val);
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.ngOnInit = function () {
        // ngFor needs an array
        this.starIndexes = Array(this.max).fill(1).map(function (x, i) { return i; });
    };
    Ionic2Rating.prototype.getStarIconName = function (starIndex) {
        if (this.value === undefined) {
            return this.emptyStarIconName;
        }
        if (this.value > starIndex) {
            if (this.value < starIndex + 1) {
                return this.halfStarIconName;
            }
            else {
                return this.starIconName;
            }
        }
        else {
            return this.emptyStarIconName;
        }
    };
    Object.defineProperty(Ionic2Rating.prototype, "value", {
        get: function () {
            return this.innerValue;
        },
        set: function (value) {
            if (value !== this.innerValue) {
                this.innerValue = value;
                this.onChangeCallback(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    Ionic2Rating.prototype.writeValue = function (value) {
        if (value !== this.innerValue) {
            this.innerValue = value;
        }
    };
    Ionic2Rating.prototype.registerOnChange = function (fn) {
        this.onChangeCallback = fn;
    };
    Ionic2Rating.prototype.registerOnTouched = function (fn) {
    };
    Ionic2Rating.prototype.onKeyDown = function (event) {
        if (/(37|38|39|40)/.test(event.which)) {
            event.preventDefault();
            event.stopPropagation();
            var newValue = this.value + ((event.which == 38 || event.which == 39) ? 1 : -1);
            return this.rate(newValue);
        }
    };
    Ionic2Rating.prototype.rate = function (value) {
        if (this.readOnly || value < 0 || value > this.max) {
            return;
        }
        if (value === this.value && this.nullable) {
            value = null;
        }
        this.value = value;
    };
    Ionic2Rating.prototype.isTrueProperty = function (val) {
        if (typeof val === 'string') {
            val = val.toLowerCase().trim();
            return (val === 'true' || val === 'on');
        }
        return !!val;
    };
    Ionic2Rating.prototype.getNumberPropertyValue = function (val) {
        if (typeof val === 'string') {
            return parseInt(val.trim());
        }
        return val;
    };
    Ionic2Rating.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"], args: [{
                    selector: 'rating',
                    styles: ["\n    ul.rating li {\n      display: inline;\n      border: 0px;\n      background: none;\n      padding: 5px 10px;\n    }\n    ul.rating li i {\n      font-size: 30px;\n    }\n  "],
                    template: "\n    <ul class=\"rating\" (keydown)=\"onKeyDown($event)\">\n      <li *ngFor=\"let starIndex of starIndexes\" tappable (click)=\"rate(starIndex + 1)\">\n        <ion-icon [name]=\"getStarIconName(starIndex)\">\n        </ion-icon>\n      </li>\n    </ul>",
                    providers: [RATING_CONTROL_VALUE_ACCESSOR]
                },] },
    ];
    /** @nocollapse */
    Ionic2Rating.ctorParameters = [];
    Ionic2Rating.propDecorators = {
        'max': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'readOnly': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'emptyStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'halfStarIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'starIconName': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
        'nullable': [{ type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"] },],
    };
    return Ionic2Rating;
}());
//# sourceMappingURL=ionic2-rating.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__ = __webpack_require__(476);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__ionic2_rating_module__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic2_rating__ = __webpack_require__(474);
/* unused harmony reexport Ionic2Rating */


//# sourceMappingURL=index.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ionic2RatingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__ = __webpack_require__(474);




var Ionic2RatingModule = (function () {
    function Ionic2RatingModule() {
    }
    Ionic2RatingModule.decorators = [
        { type: __WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"], args: [{
                    declarations: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    exports: [
                        __WEBPACK_IMPORTED_MODULE_3__ionic2_rating__["a" /* Ionic2Rating */]
                    ],
                    imports: [
                        __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */],
                        __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* IonicModule */]
                    ],
                    schemas: [
                        __WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]
                    ]
                },] },
    ];
    /** @nocollapse */
    Ionic2RatingModule.ctorParameters = [];
    return Ionic2RatingModule;
}());
//# sourceMappingURL=ionic2-rating.module.js.map

/***/ }),

/***/ 488:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NewSurPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_survey_service__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_custom_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_shared_service__ = __webpack_require__(214);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var NewSurPage = /** @class */ (function () {
    function NewSurPage(navCtrl, navParams, surveyService, customService, sharedService) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.surveyService = surveyService;
        this.customService = customService;
        this.sharedService = sharedService;
        this.defaultRating = 0; // for all questions
        this.guestInfo = {};
    }
    ;
    NewSurPage.prototype.ionViewDidLoad = function () {
        this.getQuestions();
    };
    NewSurPage.prototype.getQuestions = function () {
        var _this = this;
        this.customService.showLoader();
        this.surveyService.fetchQuestions()
            .subscribe(function (res) {
            _this.questions = res;
            _this.customService.hideLoader();
        }, function (err) {
            _this.customService.hideLoader();
            _this.customService.showToast('Could not fetch the required data, Please try again');
        });
    };
    NewSurPage.prototype.submitSurvey = function () {
        var _this = this;
        // check if all ratings have been given or not
        if (!this.isValidForm()) {
            this.customService.showToast('Please answer all required questions', 'top');
            return;
        }
        //confirm that if either name or contact no. is present
        // then the other one shud also be present 
        if (this.isGuestNameEntered() && !this.isGuestContactEntered()) {
            this.customService.showToast('Please also enter your contact no.', 'top');
            return;
        }
        if (!this.isGuestNameEntered() && this.isGuestContactEntered()) {
            this.customService.showToast('Please also enter your name', 'top');
            return;
        }
        // check contact no validation
        if (!this.sharedService.isValidContactNo(this.guestInfo.contact)) {
            return;
        }
        // finally build payload and send psot request
        var payLoad = this.buildPayLoad();
        // console.log(payLoad);
        this.customService.showLoader();
        this.surveyService.submitSurvey(payLoad)
            .subscribe(function (res) {
            _this.customService.hideLoader();
            _this.clearAnswers();
            _this.navCtrl.push('SubmitSuccessPage');
        }, function (err) {
            _this.customService.hideLoader();
            _this.customService.showToast(err.msg);
        });
    };
    // return true only if all questions with type==='STAR' have been answered
    NewSurPage.prototype.isValidForm = function () {
        return this.questions.every(function (q) {
            if (q.type === 'STAR') {
                return q.starValue ? true : false;
            }
            return true;
        });
    };
    NewSurPage.prototype.buildPayLoad = function () {
        var data = {};
        data.surveyResult = [];
        this.questions.forEach(function (q) {
            var ques = { questionId: q.id };
            if (q.type === 'STAR') {
                ques.starValue = q.starValue || null;
            }
            if (q.type === 'TEXT') {
                ques.textValue = q.textValue && q.textValue.trim() !== '' ? q.textValue : null;
            }
            data.surveyResult.push(ques);
        });
        // include the guest info only when both name and contact are present
        if (this.isGuestContactEntered() && this.isGuestNameEntered()) {
            data.visitorInfo = {
                contactNo: this.guestInfo.contact,
                name: this.guestInfo.name
            };
            this.guestInfo.email && this.guestInfo.email.trim() != '' && (data.visitorInfo.email = this.guestInfo.email);
        }
        ;
        return data;
    };
    NewSurPage.prototype.isGuestNameEntered = function () {
        return this.guestInfo.name && this.guestInfo.name.trim() != '';
    };
    NewSurPage.prototype.isGuestContactEntered = function () {
        return this.guestInfo.contact && this.guestInfo.contact.trim() != '';
    };
    // reset the question to initial state with no answers
    NewSurPage.prototype.clearAnswers = function () {
        this.questions.forEach(function (q) {
            q.textValue = q.starValue = null;
        });
    };
    NewSurPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'page-new-sur',template:/*ion-inline-start:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/new-sur/new-sur.html"*/'<ion-header>\n  <ion-navbar color="primary">\n    <ion-title>Survey</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<!--\n   <rating [(ngModel)]="rate" \n    readOnly="false" // default value, so it can be ommited\n    max="5" // default value\n    emptyStarIconName="star-outline" // default value\n    halfStarIconName="star-half" // default value\n    starIconName="star" // default value\n    nullable="false" // default value\n    (ngModelChange)="onModelChange($event)"></rating> \n      -->\n\n<ion-content class="gray-back">\n\n    <ion-list-header>\n      Help us improve by answering the following questions\n    </ion-list-header>\n      <ion-slides pager paginationType="progress" *ngIf="questions && questions.length" autoplay="5000" speed="1000">\n        <ng-container *ngFor="let q of questions;let i=index" >\n        <ion-slide *ngIf="q.type===\'STAR\'" class="image-slide">\n          <div  class="survey-card">\n          <ion-label text-center>{{q.question}}</ion-label>\n          <div class="image"></div>\n          <rating [(ngModel)]="q.starValue" text-center></rating>\n        </div>\n        </ion-slide>\n        <ion-slide *ngIf="q.type===\'TEXT\'" class="text-slide">\n            <div  class="survey-card">\n            <ion-label color="primary" text-center>{{q.question}}</ion-label>\n            <ion-textarea type="text" rows="5" [(ngModel)]="q.textValue" placeholder="Type Here (optional)"></ion-textarea>\n              </div>\n        </ion-slide>\n      </ng-container>\n      </ion-slides>\n\n  <!-- GUEST OPTIONAL INFO FORM -->\n  <ion-list-header>\n      <h5>Your Details (Optional)</h5>\n    </ion-list-header>\n\n    <div class="input-box">\n      <ion-item no-lines>\n          <ion-icon name=\'person\' item-left></ion-icon>\n        <ion-label>Name</ion-label>\n        <ion-input placeholder="Your Name" type="text" [(ngModel)]="guestInfo.name" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n    </div>\n\n    <div class="input-box">\n      <ion-item no-lines>\n          <ion-icon name=\'mail\' item-left></ion-icon>\n        <ion-label>Email</ion-label>\n        <ion-input placeholder="Your Email Address" type="email" [(ngModel)]="guestInfo.email" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n    </div>\n\n    <div class="input-box">\n      <ion-item no-lines>\n          <ion-icon name=\'call\' item-left></ion-icon>\n        <ion-label>Contact No.</ion-label>\n        <ion-input  placeholder="Your 10 Digits Contact Number" type="text" [(ngModel)]="guestInfo.contact" [ngModelOptions]="{standalone: true}"></ion-input>\n      </ion-item>\n    </div>\n\n  <div padding>\n    <button ion-button full round icon-right type="button" (click)="submitSurvey()">\n        Send\n        <ion-icon name="send"></ion-icon>\n    </button>\n\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"/Users/alkagirdhar/Desktop/akash/kabaliwala/src/pages/new-sur/new-sur.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_survey_service__["a" /* SurveyService */],
            __WEBPACK_IMPORTED_MODULE_3__providers_custom_service__["a" /* CustomService */],
            __WEBPACK_IMPORTED_MODULE_4__providers_shared_service__["a" /* SharedService */]])
    ], NewSurPage);
    return NewSurPage;
}());

//# sourceMappingURL=new-sur.js.map

/***/ })

});
//# sourceMappingURL=7.js.map