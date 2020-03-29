(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() | packages-package-module */ "packages-package-module").then(__webpack_require__.bind(null, /*! ./packages/package.module */ "./src/app/packages/package.module.ts")).then(m => m.PackageModule)
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_mdc_web_top_app_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-mdc/web/top-app-bar */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/top-app-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const _c0 = function () { return ["home"]; };
class AppComponent {
    constructor() {
        this.title = 'ngx-store';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 4, consts: [["fixed", "", 3, "scrollTarget"], ["align", "start", 2, "cursor", "pointer", 3, "title", "routerLink"], [1, "app-bar-content"], ["fixedContent", ""]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mdc-top-app-bar", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mdc-top-app-bar-row");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "mdc-top-app-bar-section", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("scrollTarget", _r13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", ctx.title)("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
    } }, directives: [_angular_mdc_web_top_app_bar__WEBPACK_IMPORTED_MODULE_1__["MdcTopAppBar"], _angular_mdc_web_top_app_bar__WEBPACK_IMPORTED_MODULE_1__["MdcTopAppBarRow"], _angular_mdc_web_top_app_bar__WEBPACK_IMPORTED_MODULE_1__["MdcTopAppBarSection"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]], encapsulation: 2 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                template: `
    <mdc-top-app-bar fixed [scrollTarget]="fixedContent">
      <mdc-top-app-bar-row>
        <mdc-top-app-bar-section style="cursor: pointer;" align="start" [title]="title" [routerLink]="['home']">
        </mdc-top-app-bar-section>
      </mdc-top-app-bar-row>
    </mdc-top-app-bar>
    <div class="app-bar-content" #fixedContent>
      <router-outlet></router-outlet>
    </div>
  `
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ui/ui.module */ "./src/app/ui/ui.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");









class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"],
            ngx_loading__WEBPACK_IMPORTED_MODULE_6__["NgxLoadingModule"].forRoot({}),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"], ngx_loading__WEBPACK_IMPORTED_MODULE_6__["NgxLoadingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _ui_ui_module__WEBPACK_IMPORTED_MODULE_4__["UIModule"],
                    ngx_loading__WEBPACK_IMPORTED_MODULE_6__["NgxLoadingModule"].forRoot({}),
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/ui/ui.module.ts":
/*!*********************************!*\
  !*** ./src/app/ui/ui.module.ts ***!
  \*********************************/
/*! exports provided: UIModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UIModule", function() { return UIModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_mdc_web_ripple__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular-mdc/web/ripple */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/ripple.js");
/* harmony import */ var _angular_mdc_web_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular-mdc/web/button */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/button.js");
/* harmony import */ var _angular_mdc_web_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular-mdc/web/icon */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/icon.js");
/* harmony import */ var _angular_mdc_web_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular-mdc/web/card */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/card.js");
/* harmony import */ var _angular_mdc_web_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular-mdc/web/list */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/list.js");
/* harmony import */ var _angular_mdc_web_top_app_bar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular-mdc/web/top-app-bar */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/top-app-bar.js");
/* harmony import */ var _angular_mdc_web_chips__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular-mdc/web/chips */ "./node_modules/@angular-mdc/web/__ivy_ngcc__/esm2015/chips.js");
/* harmony import */ var ngx_loading__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-loading */ "./node_modules/ngx-loading/__ivy_ngcc__/fesm2015/ngx-loading.js");











class UIModule {
}
UIModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UIModule });
UIModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UIModule_Factory(t) { return new (t || UIModule)(); }, imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_mdc_web_ripple__WEBPACK_IMPORTED_MODULE_2__["MdcRippleModule"],
        _angular_mdc_web_button__WEBPACK_IMPORTED_MODULE_3__["MdcButtonModule"],
        _angular_mdc_web_icon__WEBPACK_IMPORTED_MODULE_4__["MdcIconModule"],
        _angular_mdc_web_top_app_bar__WEBPACK_IMPORTED_MODULE_7__["MdcTopAppBarModule"],
        _angular_mdc_web_card__WEBPACK_IMPORTED_MODULE_5__["MdcCardModule"],
        _angular_mdc_web_list__WEBPACK_IMPORTED_MODULE_6__["MdcListModule"],
        _angular_mdc_web_chips__WEBPACK_IMPORTED_MODULE_8__["MdcChipsModule"],
        ngx_loading__WEBPACK_IMPORTED_MODULE_9__["NgxLoadingModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UIModule, { exports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _angular_mdc_web_ripple__WEBPACK_IMPORTED_MODULE_2__["MdcRippleModule"],
        _angular_mdc_web_button__WEBPACK_IMPORTED_MODULE_3__["MdcButtonModule"],
        _angular_mdc_web_icon__WEBPACK_IMPORTED_MODULE_4__["MdcIconModule"],
        _angular_mdc_web_top_app_bar__WEBPACK_IMPORTED_MODULE_7__["MdcTopAppBarModule"],
        _angular_mdc_web_card__WEBPACK_IMPORTED_MODULE_5__["MdcCardModule"],
        _angular_mdc_web_list__WEBPACK_IMPORTED_MODULE_6__["MdcListModule"],
        _angular_mdc_web_chips__WEBPACK_IMPORTED_MODULE_8__["MdcChipsModule"],
        ngx_loading__WEBPACK_IMPORTED_MODULE_9__["NgxLoadingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UIModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                exports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_mdc_web_ripple__WEBPACK_IMPORTED_MODULE_2__["MdcRippleModule"],
                    _angular_mdc_web_button__WEBPACK_IMPORTED_MODULE_3__["MdcButtonModule"],
                    _angular_mdc_web_icon__WEBPACK_IMPORTED_MODULE_4__["MdcIconModule"],
                    _angular_mdc_web_top_app_bar__WEBPACK_IMPORTED_MODULE_7__["MdcTopAppBarModule"],
                    _angular_mdc_web_card__WEBPACK_IMPORTED_MODULE_5__["MdcCardModule"],
                    _angular_mdc_web_list__WEBPACK_IMPORTED_MODULE_6__["MdcListModule"],
                    _angular_mdc_web_chips__WEBPACK_IMPORTED_MODULE_8__["MdcChipsModule"],
                    ngx_loading__WEBPACK_IMPORTED_MODULE_9__["NgxLoadingModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/runner/work/ngx-store/ngx-store/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map