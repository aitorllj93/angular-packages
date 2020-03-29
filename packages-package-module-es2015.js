(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["packages-package-module"],{

/***/ "./src/app/packages/package-detail.container.ts":
/*!******************************************************!*\
  !*** ./src/app/packages/package-detail.container.ts ***!
  \******************************************************/
/*! exports provided: PackageDetailContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageDetailContainerComponent", function() { return PackageDetailContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _package_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./package.service */ "./src/app/packages/package.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");
/* harmony import */ var _angular_mdc_web_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular-mdc/web/card */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/card.js");
/* harmony import */ var _angular_mdc_web_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-mdc/web/ripple */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/ripple.js");
/* harmony import */ var _package_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./package-header.component */ "./src/app/packages/package-header.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = function () { return { backdropBorderRadius: "3px" }; };
class PackageDetailContainerComponent {
    constructor(service, route) {
        this.service = service;
        this.route = route;
        this.loading = false;
        this.pkg$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.readme$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
    }
    ngOnInit() {
        this.loading = true;
        this.route.params.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(params => this.service.findByName(params.name)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(pkg => this.pkg$.next(pkg)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(pkg => this.service.fetchReadme(pkg)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(readme => this.readme$.next(readme))).subscribe(() => this.loading = false);
    }
}
PackageDetailContainerComponent.ɵfac = function PackageDetailContainerComponent_Factory(t) { return new (t || PackageDetailContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_package_service__WEBPACK_IMPORTED_MODULE_3__["PackageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
PackageDetailContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PackageDetailContainerComponent, selectors: [["app-package-detail-container"]], decls: 8, vars: 9, consts: [[1, "home-container"], [3, "show", "config"], ["outlined", "", 1, "demo-card", 2, "margin-bottom", "40px"], [1, "demo-card-article"], [3, "pkg"], [1, "markdown-body", 3, "innerHtml"]], template: function PackageDetailContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-loading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdc-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdc-ripple", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-package-header", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.loading)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](8, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pkg", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.pkg$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.readme$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [ngx_loading__WEBPACK_IMPORTED_MODULE_5__["NgxLoadingComponent"], _angular_mdc_web_card__WEBPACK_IMPORTED_MODULE_6__["MdcCard"], _angular_mdc_web_ripple__WEBPACK_IMPORTED_MODULE_7__["MdcRippleDirective"], _package_header_component__WEBPACK_IMPORTED_MODULE_8__["PackageHeaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PackageDetailContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-package-detail-container',
                template: `
    <div class="home-container">
      <ngx-loading [show]="loading" [config]="{ backdropBorderRadius: '3px' }"></ngx-loading>
      <mdc-card class="demo-card" style="margin-bottom: 40px;" outlined>
        <mdc-ripple class="demo-card-article">
          <app-package-header [pkg]="pkg$ | async"></app-package-header>
        </mdc-ripple>
      </mdc-card>
      <div class="markdown-body" [innerHtml]="readme$ | async"></div>
    </div>
  `
            }]
    }], function () { return [{ type: _package_service__WEBPACK_IMPORTED_MODULE_3__["PackageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "./src/app/packages/package-header.component.ts":
/*!******************************************************!*\
  !*** ./src/app/packages/package-header.component.ts ***!
  \******************************************************/
/*! exports provided: PackageHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageHeaderComponent", function() { return PackageHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_mdc_web_chips__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-mdc/web/chips */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/chips.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");




function PackageHeaderComponent_mdc_chip_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdc-chip");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdc-chip-text");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const tag_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](tag_r1);
} }
class PackageHeaderComponent {
    constructor() { }
    ngOnInit() { }
}
PackageHeaderComponent.ɵfac = function PackageHeaderComponent_Factory(t) { return new (t || PackageHeaderComponent)(); };
PackageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PackageHeaderComponent, selectors: [["app-package-header"]], inputs: { pkg: "pkg" }, decls: 6, vars: 3, consts: [["mdcHeadline5", "", 1, "demo-card-article__title"], ["mdcBody2", "", 1, "demo-card-article__snippet"], [4, "ngFor", "ngForOf"]], template: function PackageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mdc-chip-set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PackageHeaderComponent_mdc_chip_5_Template, 3, 1, "mdc-chip", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.pkg.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pkg.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pkg.tags);
    } }, directives: [_angular_mdc_web_chips__WEBPACK_IMPORTED_MODULE_1__["MdcChipSet"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_mdc_web_chips__WEBPACK_IMPORTED_MODULE_1__["MdcChip"], _angular_mdc_web_chips__WEBPACK_IMPORTED_MODULE_1__["MdcChipText"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PackageHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-package-header',
                template: `
    <h2 class="demo-card-article__title" mdcHeadline5>{{ pkg.name }}</h2>
    <p class="demo-card-article__snippet" mdcBody2>
      {{ pkg.description }}
    </p>
    <mdc-chip-set>
      <mdc-chip *ngFor="let tag of pkg.tags">
        <mdc-chip-text>{{ tag }}</mdc-chip-text>
      </mdc-chip>
    </mdc-chip-set>
  `
            }]
    }], function () { return []; }, { pkg: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "./src/app/packages/package-list.component.ts":
/*!****************************************************!*\
  !*** ./src/app/packages/package-list.component.ts ***!
  \****************************************************/
/*! exports provided: PackageListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageListComponent", function() { return PackageListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_mdc_web_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-mdc/web/card */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/card.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_mdc_web_ripple__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-mdc/web/ripple */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/ripple.js");
/* harmony import */ var _package_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./package-header.component */ "./src/app/packages/package-header.component.ts");
/* harmony import */ var _angular_mdc_web_list__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-mdc/web/list */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/list.js");







function PackageListComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdc-ripple", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PackageListComponent_ng_container_1_Template_mdc_ripple_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const pkg_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.pkgClick.emit(pkg_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-package-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "mdc-list-divider");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const pkg_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pkg", pkg_r3);
} }
class PackageListComponent {
    constructor() {
        this.pkgClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
}
PackageListComponent.ɵfac = function PackageListComponent_Factory(t) { return new (t || PackageListComponent)(); };
PackageListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PackageListComponent, selectors: [["app-package-list"]], inputs: { pkgs: "pkgs" }, outputs: { pkgClick: "pkgClick" }, decls: 2, vars: 1, consts: [["outlined", "", 1, "demo-card"], [4, "ngFor", "ngForOf"], [1, "demo-card-article", 3, "click"], [3, "pkg"]], template: function PackageListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdc-card", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PackageListComponent_ng_container_1_Template, 4, 1, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pkgs);
    } }, directives: [_angular_mdc_web_card__WEBPACK_IMPORTED_MODULE_1__["MdcCard"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_mdc_web_ripple__WEBPACK_IMPORTED_MODULE_3__["MdcRippleDirective"], _package_header_component__WEBPACK_IMPORTED_MODULE_4__["PackageHeaderComponent"], _angular_mdc_web_list__WEBPACK_IMPORTED_MODULE_5__["MdcListDivider"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PackageListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-package-list',
                template: `
    <mdc-card class="demo-card" outlined>
      <ng-container *ngFor="let pkg of pkgs">
        <mdc-ripple class="demo-card-article"
          (click)="pkgClick.emit(pkg)">
          <app-package-header [pkg]="pkg"></app-package-header>
        </mdc-ripple>
        <mdc-list-divider></mdc-list-divider>
      </ng-container>
    </mdc-card>
  `
            }]
    }], function () { return []; }, { pkgs: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], pkgClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "./src/app/packages/package-list.container.ts":
/*!****************************************************!*\
  !*** ./src/app/packages/package-list.container.ts ***!
  \****************************************************/
/*! exports provided: PackageListContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageListContainerComponent", function() { return PackageListContainerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _package_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./package.service */ "./src/app/packages/package.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");
/* harmony import */ var _angular_mdc_web_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular-mdc/web/card */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/card.js");
/* harmony import */ var _angular_mdc_web_ripple__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-mdc/web/ripple */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/ripple.js");
/* harmony import */ var _package_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./package-list.component */ "./src/app/packages/package-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");











const _c0 = function () { return { backdropBorderRadius: "3px" }; };
class PackageListContainerComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.loading = false;
        this.pkgs$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
    }
    ngOnInit() {
        this.loading = true;
        this.service.fetchAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(result => this.pkgs$.next(result)))
            .subscribe(() => this.loading = false);
    }
    onPkgClick(pkg) {
        this.router.navigate(['home', pkg.owner, pkg.name]);
    }
}
PackageListContainerComponent.ɵfac = function PackageListContainerComponent_Factory(t) { return new (t || PackageListContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_package_service__WEBPACK_IMPORTED_MODULE_3__["PackageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
PackageListContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PackageListContainerComponent, selectors: [["app-package-list-container"]], decls: 8, vars: 6, consts: [[3, "show", "config"], [1, "home-container"], ["href", "https://github.com/d3v0ps/ngx-store/issues", "target", "blank", 2, "text-decoration", "none", "color", "#69511e !important"], ["outlined", "", 1, "demo-card", 2, "margin-bottom", "20px", "background", "#EAB543"], [1, "demo-card-article"], [3, "pkgs", "pkgClick"]], template: function PackageListContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdc-card", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mdc-ripple", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Send me more packages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "app-package-list", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pkgClick", function PackageListContainerComponent_Template_app_package_list_pkgClick_6_listener($event) { return ctx.onPkgClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.loading)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pkgs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 3, ctx.pkgs$));
    } }, directives: [ngx_loading__WEBPACK_IMPORTED_MODULE_5__["NgxLoadingComponent"], _angular_mdc_web_card__WEBPACK_IMPORTED_MODULE_6__["MdcCard"], _angular_mdc_web_ripple__WEBPACK_IMPORTED_MODULE_7__["MdcRippleDirective"], _package_list_component__WEBPACK_IMPORTED_MODULE_8__["PackageListComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PackageListContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-package-list-container',
                template: `
    <ngx-loading [show]="loading" [config]="{ backdropBorderRadius: '3px' }"></ngx-loading>
    <div class="home-container">

      <a href="https://github.com/d3v0ps/ngx-store/issues" target="blank" style="text-decoration: none; color: #69511e !important;">
        <mdc-card class="demo-card" style="margin-bottom: 20px; background: #EAB543;" outlined>
          <mdc-ripple class="demo-card-article">
            Send me more packages
          </mdc-ripple>
        </mdc-card>
      </a>

      <app-package-list [pkgs]="pkgs$ | async"
        (pkgClick)="onPkgClick($event)">
      </app-package-list>
    </div>
  `
            }]
    }], function () { return [{ type: _package_service__WEBPACK_IMPORTED_MODULE_3__["PackageService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/packages/package.module.ts":
/*!********************************************!*\
  !*** ./src/app/packages/package.module.ts ***!
  \********************************************/
/*! exports provided: PackageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageModule", function() { return PackageModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _package_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./package-header.component */ "./src/app/packages/package-header.component.ts");
/* harmony import */ var _package_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./package-list.component */ "./src/app/packages/package-list.component.ts");
/* harmony import */ var _package_list_container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./package-list.container */ "./src/app/packages/package-list.container.ts");
/* harmony import */ var _package_detail_container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./package-detail.container */ "./src/app/packages/package-detail.container.ts");









class PackageModule {
}
PackageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: PackageModule });
PackageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function PackageModule_Factory(t) { return new (t || PackageModule)(); }, providers: [], imports: [[
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__["UIModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                {
                    path: '',
                    component: _package_list_container__WEBPACK_IMPORTED_MODULE_5__["PackageListContainerComponent"]
                },
                {
                    path: ':owner/:name',
                    component: _package_detail_container__WEBPACK_IMPORTED_MODULE_6__["PackageDetailContainerComponent"]
                }
            ])
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](PackageModule, { declarations: [_package_header_component__WEBPACK_IMPORTED_MODULE_3__["PackageHeaderComponent"],
        _package_list_component__WEBPACK_IMPORTED_MODULE_4__["PackageListComponent"],
        _package_list_container__WEBPACK_IMPORTED_MODULE_5__["PackageListContainerComponent"],
        _package_detail_container__WEBPACK_IMPORTED_MODULE_6__["PackageDetailContainerComponent"]], imports: [_ui_ui_module__WEBPACK_IMPORTED_MODULE_2__["UIModule"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PackageModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _ui_ui_module__WEBPACK_IMPORTED_MODULE_2__["UIModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild([
                        {
                            path: '',
                            component: _package_list_container__WEBPACK_IMPORTED_MODULE_5__["PackageListContainerComponent"]
                        },
                        {
                            path: ':owner/:name',
                            component: _package_detail_container__WEBPACK_IMPORTED_MODULE_6__["PackageDetailContainerComponent"]
                        }
                    ])
                ],
                exports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"],
                ],
                declarations: [
                    _package_header_component__WEBPACK_IMPORTED_MODULE_3__["PackageHeaderComponent"],
                    _package_list_component__WEBPACK_IMPORTED_MODULE_4__["PackageListComponent"],
                    _package_list_container__WEBPACK_IMPORTED_MODULE_5__["PackageListContainerComponent"],
                    _package_detail_container__WEBPACK_IMPORTED_MODULE_6__["PackageDetailContainerComponent"],
                ],
                providers: [],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/packages/package.service.ts":
/*!*********************************************!*\
  !*** ./src/app/packages/package.service.ts ***!
  \*********************************************/
/*! exports provided: PackageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PackageService", function() { return PackageService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class PackageService {
    constructor(http) {
        this.http = http;
    }
    fetchAll() {
        return this.http.get('assets/data/components.json');
    }
    findByName(name) {
        return this.fetchAll().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(items => items.find(item => item.name === name)));
    }
    fetchReadme(pkg) {
        return this.http.get(`https://get-github-readme-v2.now.sh/${pkg.owner}/${pkg.repo}?branch=master`, {
            responseType: 'text'
        });
    }
}
PackageService.ɵfac = function PackageService_Factory(t) { return new (t || PackageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
PackageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PackageService, factory: PackageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PackageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=packages-package-module-es2015.js.map