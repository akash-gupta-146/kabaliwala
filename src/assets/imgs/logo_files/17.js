webpackJsonp([17],{

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SortFilterOptionsModule", function() { return SortFilterOptionsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sort_filter__ = __webpack_require__(471);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var SortFilterOptionsModule = /** @class */ (function () {
    function SortFilterOptionsModule() {
    }
    SortFilterOptionsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [__WEBPACK_IMPORTED_MODULE_2__sort_filter__["a" /* SortFilterOptionsPage */]],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__sort_filter__["a" /* SortFilterOptionsPage */])
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_2__sort_filter__["a" /* SortFilterOptionsPage */]]
        })
    ], SortFilterOptionsModule);
    return SortFilterOptionsModule;
}());

//# sourceMappingURL=sort-filter.module.js.map

/***/ }),

/***/ 471:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SortFilterOptionsPage; });
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



var SortFilterOptionsPage = /** @class */ (function () {
    function SortFilterOptionsPage(actionSheetCtrl, complaintService) {
        this.actionSheetCtrl = actionSheetCtrl;
        this.complaintService = complaintService;
        this.onSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SortFilterOptionsPage.prototype.ngOnInit = function () {
        this.getDataRequiredForFiltering();
        // this.statusOptions = JSON.parse(localStorage.getItem('complaintStatusList'));
        // this.priorityOptions = JSON.parse(localStorage.getItem('complaintPriorityList'));
        // this.complaintCategoryOptions = JSON.parse(localStorage.getItem('complaintCategoryOptions'));
    };
    SortFilterOptionsPage.prototype.getDataRequiredForFiltering = function () {
        var _this = this;
        this.complaintService.fetchDataRequiredForFiltering()
            .subscribe(function (res) {
            _this.statusOptions = res.status;
            _this.priorityOptions = res.priority;
            _this.complaintCategoryOptions = res.category;
        }, function (err) {
        });
    };
    SortFilterOptionsPage.prototype.onSort = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Sort By',
            buttons: [
                {
                    text: 'Priority',
                    handler: function () {
                        _this.onSelect.emit({ sortName: 'priority', filter: null });
                    }
                },
                {
                    text: 'Status',
                    handler: function () {
                        _this.onSelect.emit({ sortName: 'status', filter: null });
                    }
                },
                {
                    text: 'Clear',
                    handler: function () {
                        if (!_this.sortSelected) {
                            return;
                        }
                        _this.onSelect.emit({ sortName: 'clear', filter: null });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    SortFilterOptionsPage.prototype.onFilter = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Filter By',
            buttons: [
                {
                    text: 'Priority',
                    handler: function () {
                        actionSheet.dismiss().then(function () {
                            _this.filterBySubCategories(1);
                        });
                        return false;
                    }
                },
                {
                    text: 'Status',
                    handler: function () {
                        actionSheet.dismiss().then(function () {
                            _this.filterBySubCategories(2);
                        });
                        return false;
                    }
                },
                {
                    text: 'Category',
                    handler: function () {
                        actionSheet.dismiss().then(function () {
                            _this.filterBySubCategories(3);
                        });
                        return false;
                    }
                },
                {
                    text: 'Clear',
                    handler: function () {
                        if (!_this.filterSelected) {
                            return;
                        }
                        _this.onSelect.emit({ sortName: null, filter: { filterName: 'clear', id: null } });
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                    }
                }
            ]
        });
        actionSheet.present();
    };
    /**id 1 is for priority and 2 is for status */
    SortFilterOptionsPage.prototype.filterBySubCategories = function (id) {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create();
        if (id == 1) {
            actionSheet.setTitle('Select Priority');
            var _loop_1 = function (i) {
                actionSheet.addButton({
                    text: this_1.priorityOptions[i].name,
                    handler: function () {
                        _this.onSelect.emit({ sortName: null, filter: { filterName: 'priority', id: _this.priorityOptions[i].id } });
                    }
                });
            };
            var this_1 = this;
            for (var i = 0; i < this.priorityOptions.length; i++) {
                _loop_1(i);
            }
        }
        else if (id == 2) {
            actionSheet.setTitle('Select Status');
            var _loop_2 = function (i) {
                actionSheet.addButton({
                    text: this_2.statusOptions[i].name,
                    handler: function () {
                        _this.onSelect.emit({ sortName: null, filter: { filterName: 'status', id: _this.statusOptions[i].id } });
                    }
                });
            };
            var this_2 = this;
            for (var i = 0; i < this.statusOptions.length; i++) {
                _loop_2(i);
            }
        }
        else {
            actionSheet.setTitle('Select Category');
            var _loop_3 = function (i) {
                actionSheet.addButton({
                    text: this_3.complaintCategoryOptions[i].name,
                    handler: function () {
                        actionSheet.dismiss().then(function () {
                            _this.afterCategorySelect(_this.complaintCategoryOptions[i]);
                        });
                        return false;
                    }
                });
            };
            var this_3 = this;
            for (var i = 0; i < this.complaintCategoryOptions.length; i++) {
                _loop_3(i);
            }
        }
        actionSheet.addButton({
            text: 'Cancel',
            role: 'cancel',
            handler: function () {
            }
        });
        actionSheet.present();
    };
    SortFilterOptionsPage.prototype.afterCategorySelect = function (selectedCategory) {
        var _this = this;
        console.log(selectedCategory);
        if (selectedCategory.childCategory) {
            var actionSheet = this.actionSheetCtrl.create();
            actionSheet.setTitle('Select Subcategory');
            var _loop_4 = function (i) {
                actionSheet.addButton({
                    text: selectedCategory.childCategory[i].name,
                    handler: function () {
                        _this.onSelect.emit({ sortName: null, filter: { filterName: 'category', id: selectedCategory.childCategory[i].id } });
                    }
                });
            };
            for (var i = 0; i < selectedCategory.childCategory.length; i++) {
                _loop_4(i);
            }
            actionSheet.addButton({
                text: 'Cancel',
                role: 'cancel',
                handler: function () {
                }
            });
            actionSheet.present();
        }
        else {
            this.onSelect.emit({ sortName: null, filter: { filterName: 'category', id: selectedCategory.id } });
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], SortFilterOptionsPage.prototype, "sortSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], SortFilterOptionsPage.prototype, "filterSelected", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SortFilterOptionsPage.prototype, "onSelect", void 0);
    SortFilterOptionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'sort-filter',
            template: "   \n    <ion-grid no-padding>\n        <ion-row>\n            <ion-col no-padding>\n                <button full ion-button (click)=\"onSort()\" [style.background-color]=\"sortSelected ? 'grey': ''\" icon-start>\n                    <ion-icon name=\"arrow-round-down\"></ion-icon><ion-icon name=\"arrow-round-up\"></ion-icon>\n                Sort\n                </button>\n            </ion-col>\n\n            <ion-col no-padding>\n                    <button full ion-button (click)=\"onFilter()\" [style.background-color]=\"filterSelected ? 'grey': ''\" icon-start>\n                        <ion-icon name=\"funnel\"></ion-icon>\n                    Filter\n                    </button>\n            </ion-col>  \n        </ion-row>\n    </ion-grid>\n            ",
            styles: ["\n        button{\n            margin: 0rem 0rem !important;\n            height:45px;\n        }\n        ion-grid{\n            position:fixed;\n        }\n    "]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_complaint_service__["a" /* ComplaintService */]])
    ], SortFilterOptionsPage);
    return SortFilterOptionsPage;
}());

//# sourceMappingURL=sort-filter.js.map

/***/ })

});
//# sourceMappingURL=17.js.map