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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _package_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./package-header.component */ "./src/app/packages/package-header.component.ts");











function PackageDetailContainerComponent_app_package_header_4_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-package-header", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("githubClick", function PackageDetailContainerComponent_app_package_header_4_Template_app_package_header_githubClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r20.onGithubClick($event); })("homepageClick", function PackageDetailContainerComponent_app_package_header_4_Template_app_package_header_homepageClick_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r22.onHomepageClick($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const pkg_r19 = ctx.ngIf;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pkg", pkg_r19);
} }
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
    onGithubClick(event) {
        const pkg = this.pkg$.value;
        event.stopPropagation();
        window.open(`https://github.com/${pkg.owner}/${pkg.repo}`, '_blank');
    }
    onHomepageClick(event) {
        const pkg = this.pkg$.value;
        event.stopPropagation();
        window.open(pkg.url, '_blank');
    }
}
PackageDetailContainerComponent.ɵfac = function PackageDetailContainerComponent_Factory(t) { return new (t || PackageDetailContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_package_service__WEBPACK_IMPORTED_MODULE_3__["PackageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"])); };
PackageDetailContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PackageDetailContainerComponent, selectors: [["app-package-detail-container"]], decls: 8, vars: 9, consts: [[1, "home-container"], [3, "show", "config"], ["outlined", "", 1, "demo-card", 2, "margin-bottom", "40px"], [1, "demo-card-article"], [3, "pkg", "githubClick", "homepageClick", 4, "ngIf"], [1, "markdown-body", 3, "innerHtml"], [3, "pkg", "githubClick", "homepageClick"]], template: function PackageDetailContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "ngx-loading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mdc-card", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdc-ripple", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PackageDetailContainerComponent_app_package_header_4_Template, 1, 1, "app-package-header", 4);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 4, ctx.pkg$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHtml", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 6, ctx.readme$), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
    } }, directives: [ngx_loading__WEBPACK_IMPORTED_MODULE_5__["NgxLoadingComponent"], _angular_mdc_web_card__WEBPACK_IMPORTED_MODULE_6__["MdcCard"], _angular_mdc_web_ripple__WEBPACK_IMPORTED_MODULE_7__["MdcRippleDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"], _package_header_component__WEBPACK_IMPORTED_MODULE_9__["PackageHeaderComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PackageDetailContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-package-detail-container',
                template: `
    <div class="home-container">
      <ngx-loading [show]="loading" [config]="{ backdropBorderRadius: '3px' }"></ngx-loading>
      <mdc-card class="demo-card" style="margin-bottom: 40px;" outlined>
        <mdc-ripple class="demo-card-article">
          <app-package-header *ngIf="pkg$ | async as pkg" [pkg]="pkg"
            (githubClick)="onGithubClick($event)"
            (homepageClick)="onHomepageClick($event)"></app-package-header>
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout/extended */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/extended.js");
/* harmony import */ var _angular_mdc_web_icon__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-mdc/web/icon */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/icon.js");
/* harmony import */ var _angular_mdc_web_chips__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-mdc/web/chips */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/chips.js");






function PackageHeaderComponent_mdc_chip_8_Template(rf, ctx) { if (rf & 1) {
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
const _c0 = function (a0, a1, a2) { return { "circle-component": a0, "circle-ui": a1, "circle-sp": a2 }; };
class PackageHeaderComponent {
    constructor() {
        this.githubClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.homepageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
}
PackageHeaderComponent.ɵfac = function PackageHeaderComponent_Factory(t) { return new (t || PackageHeaderComponent)(); };
PackageHeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PackageHeaderComponent, selectors: [["app-package-header"]], inputs: { pkg: "pkg" }, outputs: { githubClick: "githubClick", homepageClick: "homepageClick" }, decls: 9, vars: 8, consts: [["mdcHeadline5", "", 1, "demo-card-article__title"], [1, "circle-icon", 3, "ngClass"], ["fontSet", "mdi", "fontIcon", "mdi-github", 2, "cursor", "pointer", 3, "click"], ["fontSet", "mdi", "fontIcon", "mdi-home", 2, "cursor", "pointer", 3, "click"], ["mdcBody2", "", 1, "demo-card-article__snippet"], [4, "ngFor", "ngForOf"]], template: function PackageHeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mdc-icon", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PackageHeaderComponent_Template_mdc_icon_click_3_listener($event) { return ctx.githubClick.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mdc-icon", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PackageHeaderComponent_Template_mdc_icon_click_4_listener($event) { return ctx.homepageClick.emit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mdc-chip-set");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PackageHeaderComponent_mdc_chip_8_Template, 3, 1, "mdc-chip", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction3"](4, _c0, ctx.pkg.category === "Component", ctx.pkg.category === "UI Kit", ctx.pkg.category === "Service Provider"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pkg.name, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.pkg.description, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.pkg.tags);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], _angular_flex_layout_extended__WEBPACK_IMPORTED_MODULE_2__["DefaultClassDirective"], _angular_mdc_web_icon__WEBPACK_IMPORTED_MODULE_3__["MdcIcon"], _angular_mdc_web_chips__WEBPACK_IMPORTED_MODULE_4__["MdcChipSet"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_mdc_web_chips__WEBPACK_IMPORTED_MODULE_4__["MdcChip"], _angular_mdc_web_chips__WEBPACK_IMPORTED_MODULE_4__["MdcChipText"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PackageHeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-package-header',
                template: `
    <h2 class="demo-card-article__title" mdcHeadline5>
      <i class="circle-icon" [ngClass]="{
        'circle-component': pkg.category === 'Component',
        'circle-ui': pkg.category === 'UI Kit',
        'circle-sp': pkg.category === 'Service Provider'
      }"></i>
      {{ pkg.name }}
      <mdc-icon fontSet="mdi" fontIcon="mdi-github" style="cursor:pointer"
        (click)="githubClick.emit($event)"></mdc-icon>
      <mdc-icon fontSet="mdi" fontIcon="mdi-home" style="cursor:pointer"
        (click)="homepageClick.emit($event)"></mdc-icon>
    </h2>

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
    }], function () { return []; }, { githubClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], homepageClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], pkg: [{
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-package-header", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("githubClick", function PackageListComponent_ng_container_1_Template_app_package_header_githubClick_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const pkg_r3 = ctx.$implicit; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.githubClick.emit({ event: $event, pkg: pkg_r3 }); })("homepageClick", function PackageListComponent_ng_container_1_Template_app_package_header_homepageClick_2_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const pkg_r3 = ctx.$implicit; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.homepageClick.emit({ event: $event, pkg: pkg_r3 }); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
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
        this.githubClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.homepageClick = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() { }
}
PackageListComponent.ɵfac = function PackageListComponent_Factory(t) { return new (t || PackageListComponent)(); };
PackageListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PackageListComponent, selectors: [["app-package-list"]], inputs: { pkgs: "pkgs" }, outputs: { pkgClick: "pkgClick", githubClick: "githubClick", homepageClick: "homepageClick" }, decls: 2, vars: 1, consts: [["outlined", "", 1, "demo-card"], [4, "ngFor", "ngForOf"], [1, "demo-card-article", 3, "click"], [3, "pkg", "githubClick", "homepageClick"]], template: function PackageListComponent_Template(rf, ctx) { if (rf & 1) {
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
          <app-package-header [pkg]="pkg"
            (githubClick)="githubClick.emit({ event: $event, pkg: pkg })"
            (homepageClick)="homepageClick.emit({ event: $event, pkg: pkg })">
          </app-package-header>
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
        }], githubClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], homepageClick: [{
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
/* harmony import */ var _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout/flex */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm2015/flex.js");
/* harmony import */ var _angular_mdc_web_textfield__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-mdc/web/textfield */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/textfield.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ng-select/ng-select */ "./node_modules/@ng-select/ng-select/__ivy_ngcc__/fesm2015/ng-select-ng-select.js");
/* harmony import */ var _angular_mdc_web_card__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular-mdc/web/card */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/card.js");
/* harmony import */ var _angular_mdc_web_ripple__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular-mdc/web/ripple */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/ripple.js");
/* harmony import */ var _package_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./package-list.component */ "./src/app/packages/package-list.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");















function PackageListContainerComponent_ng_template_8_div_0_Template(rf, ctx) { if (rf & 1) {
    const _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PackageListContainerComponent_ng_template_8_div_0_Template_span_click_3_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r16); const item_r13 = ctx.$implicit; const clear_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().clear; return clear_r10(item_r13); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00D7");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r13 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r13);
} }
function PackageListContainerComponent_ng_template_8_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const items_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().items;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", items_r9.length - 2, " more...");
} }
function PackageListContainerComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PackageListContainerComponent_ng_template_8_div_0_Template, 5, 1, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "slice");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PackageListContainerComponent_ng_template_8_div_2_Template, 3, 1, "div", 12);
} if (rf & 2) {
    const items_r9 = ctx.items;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](1, 2, items_r9, 0, 2));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", items_r9.length > 2);
} }
const _c0 = function () { return { backdropBorderRadius: "3px" }; };
class PackageListContainerComponent {
    constructor(service, router) {
        this.service = service;
        this.router = router;
        this.loading = false;
        this.pkgs$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.tags$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.filteredPkgs$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.filterText = '';
        this.filterTags = [];
    }
    ngOnInit() {
        this.loading = true;
        this.service.fetchAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(result => this.pkgs$.next(result)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(() => this.service.fetchTags()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(tags => {
            this.tags$.next(tags);
            this.onFilterChange();
        }))
            .subscribe(() => this.loading = false);
    }
    onPkgClick(pkg) {
        this.router.navigate(['home', pkg.owner, pkg.name]);
    }
    onGithubClick({ event, pkg }) {
        event.stopPropagation();
        window.open(`https://github.com/${pkg.owner}/${pkg.repo}`, '_blank');
    }
    onHomepageClick({ event, pkg }) {
        event.stopPropagation();
        window.open(pkg.url, '_blank');
    }
    onFilterChange() {
        this.filteredPkgs$.next(this.pkgs$.value.filter(pkg => {
            const matchesTags = this.filterTags.length <= 0 || pkg.tags.some(tag => this.filterTags.includes(tag));
            const matchesText = pkg.name.toLowerCase().includes(this.filterText.toLowerCase()) ||
                pkg.description.toLowerCase().includes(this.filterText.toLowerCase());
            return matchesTags && matchesText;
        }));
    }
}
PackageListContainerComponent.ɵfac = function PackageListContainerComponent_Factory(t) { return new (t || PackageListContainerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_package_service__WEBPACK_IMPORTED_MODULE_3__["PackageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
PackageListContainerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PackageListContainerComponent, selectors: [["app-package-list-container"]], decls: 15, vars: 14, consts: [[3, "show", "config"], [1, "home-container"], ["fxLayout", "row", "fxLayout.xs", "column", "fxFlexFill", ""], ["fxFlex", "50"], ["label", "Text", "fullwidth", "", 3, "ngModel", "ngModelChange"], ["placeholder", "Select tags", 3, "items", "multiple", "closeOnSelect", "searchable", "ngModel", "ngModelChange"], ["ng-multi-label-tmp", ""], ["href", "https://github.com/d3v0ps/angular-packages/issues", "target", "blank", 2, "text-decoration", "none", "color", "#69511e !important"], ["outlined", "", 1, "demo-card", 2, "margin-bottom", "20px", "background", "#EAB543"], [1, "demo-card-article"], [3, "pkgs", "pkgClick", "githubClick", "homepageClick"], ["class", "ng-value", 4, "ngFor", "ngForOf"], ["class", "ng-value", 4, "ngIf"], [1, "ng-value"], [1, "ng-value-label"], ["aria-hidden", "true", 1, "ng-value-icon", "right", 3, "click"]], template: function PackageListContainerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "ngx-loading", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mdc-text-field", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PackageListContainerComponent_Template_mdc_text_field_ngModelChange_4_listener($event) { return ctx.filterText = $event; })("ngModelChange", function PackageListContainerComponent_Template_mdc_text_field_ngModelChange_4_listener() { return ctx.onFilterChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "ng-select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function PackageListContainerComponent_Template_ng_select_ngModelChange_6_listener($event) { return ctx.filterTags = $event; })("ngModelChange", function PackageListContainerComponent_Template_ng_select_ngModelChange_6_listener() { return ctx.onFilterChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](7, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PackageListContainerComponent_ng_template_8_Template, 3, 6, "ng-template", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mdc-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mdc-ripple", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Send me more packages ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "app-package-list", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("pkgClick", function PackageListContainerComponent_Template_app_package_list_pkgClick_13_listener($event) { return ctx.onPkgClick($event); })("githubClick", function PackageListContainerComponent_Template_app_package_list_githubClick_13_listener($event) { return ctx.onGithubClick($event); })("homepageClick", function PackageListContainerComponent_Template_app_package_list_homepageClick_13_listener($event) { return ctx.onHomepageClick($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](14, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.loading)("config", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.filterText);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("items", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](7, 9, ctx.tags$))("multiple", true)("closeOnSelect", false)("searchable", true)("ngModel", ctx.filterTags);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("pkgs", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](14, 11, ctx.filteredPkgs$));
    } }, directives: [ngx_loading__WEBPACK_IMPORTED_MODULE_5__["NgxLoadingComponent"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultLayoutDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["FlexFillDirective"], _angular_flex_layout_flex__WEBPACK_IMPORTED_MODULE_6__["DefaultFlexDirective"], _angular_mdc_web_textfield__WEBPACK_IMPORTED_MODULE_7__["MdcTextField"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_8__["NgModel"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["NgSelectComponent"], _ng_select_ng_select__WEBPACK_IMPORTED_MODULE_9__["ɵi"], _angular_mdc_web_card__WEBPACK_IMPORTED_MODULE_10__["MdcCard"], _angular_mdc_web_ripple__WEBPACK_IMPORTED_MODULE_11__["MdcRippleDirective"], _package_list_component__WEBPACK_IMPORTED_MODULE_12__["PackageListComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["NgIf"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_13__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["SlicePipe"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PackageListContainerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-package-list-container',
                template: `
    <ngx-loading [show]="loading" [config]="{ backdropBorderRadius: '3px' }"></ngx-loading>
    <div class="home-container">

      <div fxLayout="row"
            fxLayout.xs="column"
            fxFlexFill >

        <div fxFlex="50">
        <mdc-text-field label="Text" fullwidth
          [(ngModel)]="filterText"
          (ngModelChange)="onFilterChange()"></mdc-text-field>
        </div>
        <div fxFlex="50">
          <ng-select
            [items]="tags$ | async"
            [multiple]="true"
            [closeOnSelect]="false"
            [searchable]="true"
            placeholder="Select tags"
            [(ngModel)]="filterTags"
            (ngModelChange)="onFilterChange()">
            <ng-template ng-multi-label-tmp let-items="items" let-clear="clear">
              <div class="ng-value" *ngFor="let item of items | slice:0:2">
                <span class="ng-value-label">{{item}}</span>
                <span class="ng-value-icon right" (click)="clear(item)" aria-hidden="true">×</span>
              </div>
              <div class="ng-value" *ngIf="items.length > 2">
                <span class="ng-value-label">{{items.length - 2}} more...</span>
              </div>
            </ng-template>
          </ng-select>
        </div>

      </div>

      <a href="https://github.com/d3v0ps/angular-packages/issues" target="blank" style="text-decoration: none; color: #69511e !important;">
        <mdc-card class="demo-card" style="margin-bottom: 20px; background: #EAB543;" outlined>
          <mdc-ripple class="demo-card-article">
            Send me more packages
          </mdc-ripple>
        </mdc-card>
      </a>

      <app-package-list [pkgs]="filteredPkgs$ | async"
        (pkgClick)="onPkgClick($event)"
        (githubClick)="onGithubClick($event)"
        (homepageClick)="onHomepageClick($event)">
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class PackageService {
    constructor(http) {
        this.http = http;
        this.cache = null;
    }
    fetchAll() {
        if (this.cache) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(this.cache);
        }
        return this.http.get('assets/data/components.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(items => this.cache = items));
    }
    fetchTags() {
        return this.fetchAll()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(items => [...new Set(items.reduce((result, item) => result.concat(item.tags), []))]));
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
PackageService.ɵfac = function PackageService_Factory(t) { return new (t || PackageService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
PackageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PackageService, factory: PackageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PackageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=packages-package-module-es2015.js.map