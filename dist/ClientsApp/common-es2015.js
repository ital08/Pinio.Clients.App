(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/modals/modal-login-error/modal-login-error.component.html":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/modals/modal-login-error/modal-login-error.component.html ***!
  \******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal-header\">\r\n  <h6 class=\"modal-title pull-left\">{{title}}</h6>\r\n  <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"cancel()\">\r\n      <span aria-hidden=\"true\">&times;</span>\r\n  </button>\r\n</div>\r\n<div class=\"modal-body\">\r\n  <div class=\"row justify-content-center\">\r\n      {{ message }}\r\n  </div>\r\n</div>\r\n<div class=\"modal-footer justify-content-center\">\r\n  <button mat-raised-button *ngIf=\"cancelButton\" (click)=\"cancel()\">{{ cancelButton.text}}</button>\r\n  <button mat-raised-button *ngIf=\"acceptButton\" color=\"accent\" class=\"ml-3 text-button\" (click)=\"accept()\">{{ acceptButton.text }}</button>\r\n</div>\r\n");

/***/ }),

/***/ "./src/app/data/services/products.service.ts":
/*!***************************************************!*\
  !*** ./src/app/data/services/products.service.ts ***!
  \***************************************************/
/*! exports provided: ProductService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductService", function() { return ProductService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env */ "./src/environments/environment.ts");
/* harmony import */ var _shared_service_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service/http.service */ "./src/app/shared/service/http.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");







let ProductService = class ProductService {
    constructor(httpService, http) {
        this.httpService = httpService;
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json;charset=utf-8",
            }),
        };
        this.APIENDPOINT = _env__WEBPACK_IMPORTED_MODULE_3__["environment"].urlApiService;
    }
    // tslint:disable-next-line:typedef
    errorHandl(error) {
        let errorMessage = "";
        if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
        }
        else {
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    }
    getProductCatalog1(productId, brand, model, price) {
        return this.httpService.get(`${this.APIENDPOINT}/products/productcatalog?idProductCatalog=${productId}&productBrand=${brand}&productModel=${model}&unitprice=${price}&urlimage=string`);
    }
    getProductCatalog2(productId, brand, model, price) {
        return this.http
            .get(`${this.APIENDPOINT}/products/productcatalog?idProductCatalog=${productId}&productBrand=${brand}&productModel=${model}&unitprice=${price}&urlimage=string`, this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errorHandl));
    }
};
ProductService.ctorParameters = () => [
    { type: _shared_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], ProductService);



/***/ }),

/***/ "./src/app/data/services/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/data/services/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @env */ "./src/environments/environment.ts");
/* harmony import */ var _shared_service_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/service/http.service */ "./src/app/shared/service/http.service.ts");





let UserService = class UserService {
    constructor(httpService, http) {
        this.httpService = httpService;
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
                "Content-Type": "application/json;charset=utf-8",
            }),
        };
        this.APIENDPOINT = _env__WEBPACK_IMPORTED_MODULE_3__["environment"].urlApiService;
    }
    login(email, pwd) {
        return this.httpService.get(`${this.APIENDPOINT}/products/user?clientemail=${email}&clientpassword=${pwd}`);
    }
    register(email, pwd) {
        return this.httpService.get(`${this.APIENDPOINT}/products/register?clientemail=${email}&clientpassword=${pwd}`);
    }
};
UserService.ctorParameters = () => [
    { type: _shared_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: "root",
    })
], UserService);



/***/ }),

/***/ "./src/app/modules/auth/modals/modal-login-error/modal-login-error.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/modules/auth/modals/modal-login-error/modal-login-error.component.css ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-body{\r\n  padding: 20px 40px;\r\n}\r\n\r\n.modal-open .modal {\r\n  background: #00000070;\r\n}\r\n\r\n.modal-header{\r\n  background-color: #E4E9EB;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL21vZGFscy9tb2RhbC1sb2dpbi1lcnJvci9tb2RhbC1sb2dpbi1lcnJvci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9hdXRoL21vZGFscy9tb2RhbC1sb2dpbi1lcnJvci9tb2RhbC1sb2dpbi1lcnJvci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWJvZHl7XHJcbiAgcGFkZGluZzogMjBweCA0MHB4O1xyXG59XHJcblxyXG4ubW9kYWwtb3BlbiAubW9kYWwge1xyXG4gIGJhY2tncm91bmQ6ICMwMDAwMDA3MDtcclxufVxyXG5cclxuLm1vZGFsLWhlYWRlcntcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRTRFOUVCO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/auth/modals/modal-login-error/modal-login-error.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/auth/modals/modal-login-error/modal-login-error.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ModalLoginErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalLoginErrorComponent", function() { return ModalLoginErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let ModalLoginErrorComponent = class ModalLoginErrorComponent {
    constructor(router, bsModalRefModalMessage) {
        this.router = router;
        this.bsModalRefModalMessage = bsModalRefModalMessage;
    }
    ngOnInit() {
        this.onClose = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    cancel() {
        this.onClose.next(false);
        this.bsModalRefModalMessage.hide();
        this.router.navigateByUrl('/');
    }
    accept() {
        this.onClose.next(true);
        this.bsModalRefModalMessage.hide();
    }
};
ModalLoginErrorComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_3__["BsModalRef"] }
];
ModalLoginErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modal-login-error',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modal-login-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/modals/modal-login-error/modal-login-error.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modal-login-error.component.css */ "./src/app/modules/auth/modals/modal-login-error/modal-login-error.component.css")).default]
    })
], ModalLoginErrorComponent);



/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map