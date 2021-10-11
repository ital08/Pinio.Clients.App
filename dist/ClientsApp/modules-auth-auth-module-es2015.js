(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-auth-auth-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/login/login.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/login/login.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container-main\">\n  <div class=\"custom-container\">\n    <div class=\"box1\">\n      <!-- image -->\n      <div class=\"box2\">\n        <img class=\"img-logus\" src=\"../../../../../assets/logo/logo_home.png\" />\n      </div>\n      <!-- end image -->\n      <!-- form -->\n      <div class=\"box3\">aqui va el form</div>\n      <!-- end form -->\n    </div>\n  </div>\n  <div class=\"footer\">\n    <p style=\"text-align: justify\">\n      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod\n      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim\n      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea\n      commodo consequat. Duis aute irure dolor in reprehenderit in voluptate\n      velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat\n      cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id\n      est laborum\n    </p>\n  </div>\n</div>\n");

/***/ }),

/***/ "./src/app/modules/auth/auth-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/auth/auth-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: AuthRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function() { return AuthRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/modules/auth/pages/login/login.component.ts");




const routes = [
    {
        path: "",
        redirectTo: "/auth/login",
        pathMatch: "full",
    },
    {
        path: "",
        children: [
            {
                path: "login",
                component: _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
            },
        ],
    },
];
let AuthRoutingModule = class AuthRoutingModule {
};
AuthRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AuthRoutingModule);



/***/ }),

/***/ "./src/app/modules/auth/auth.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/auth/auth.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/login/login.component */ "./src/app/modules/auth/pages/login/login.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth-routing.module */ "./src/app/modules/auth/auth-routing.module.ts");






let AuthModule = class AuthModule {
};
AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_5__["AuthRoutingModule"]],
        exports: [],
        providers: [],
    })
], AuthModule);



/***/ }),

/***/ "./src/app/modules/auth/pages/login/login.component.css":
/*!**************************************************************!*\
  !*** ./src/app/modules/auth/pages/login/login.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".container-main {\r\n  padding: 10vh;\r\n  padding-top: 6vh;\r\n  padding-bottom: 5vh;\r\n}\r\n.img-logus {\r\n  position: fixed;\r\n  right: 10px;\r\n  bottom: 10px;\r\n  -webkit-filter: contrast(100%);\r\n          filter: contrast(100%);\r\n  -webkit-filter: drop-shadow(0px 0px 5px white);\r\n          filter: drop-shadow(0px 0px 5px white);\r\n  width: 40%;\r\n  color: black;\r\n  text-align: center;\r\n}\r\n.box1 {\r\n  background-color: #4f4e4e;\r\n  border-radius: 20px;\r\n  display: flex;\r\n}\r\n.box2 {\r\n  height: 550px;\r\n  background: url(\"https://us.123rf.com/450wm/nejron/nejron1808/nejron180800024/105668533-bella-mujer-con-tarjeta-de-cr%C3%A9dito-para-compras-online.jpg?ver=6\");\r\n  background-repeat: no-repeat;\r\n  background-size: cover;\r\n  border-radius: 20px 0 0 20px;\r\n  background-position: center center;\r\n  padding: 20%;\r\n  -webkit-filter: contrast(75%);\r\n          filter: contrast(75%);\r\n  background-color: #ed691e;\r\n}\r\n.footer {\r\n  margin-top: 20px;\r\n}\r\n.box3 {\r\n}\r\n@media screen and (max-width: 800px) {\r\n  .box1 {\r\n    display: block;\r\n  }\r\n  .box2 {\r\n    border-radius: 20px 20px 0 0;\r\n    height: 200px;\r\n  }\r\n  .img-logus {\r\n    left: 5px;\r\n    top: 5px;\r\n    width: 20%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9hdXRoL3BhZ2VzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osOEJBQXNCO1VBQXRCLHNCQUFzQjtFQUN0Qiw4Q0FBc0M7VUFBdEMsc0NBQXNDO0VBQ3RDLFVBQVU7RUFDVixZQUFZO0VBQ1osa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLCtKQUErSjtFQUMvSiw0QkFBNEI7RUFDNUIsc0JBQXNCO0VBQ3RCLDRCQUE0QjtFQUM1QixrQ0FBa0M7RUFDbEMsWUFBWTtFQUNaLDZCQUFxQjtVQUFyQixxQkFBcUI7RUFDckIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7RUFDRTtJQUNFLGNBQWM7RUFDaEI7RUFDQTtJQUNFLDRCQUE0QjtJQUM1QixhQUFhO0VBQ2Y7RUFDQTtJQUNFLFNBQVM7SUFDVCxRQUFRO0lBQ1IsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2F1dGgvcGFnZXMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItbWFpbiB7XHJcbiAgcGFkZGluZzogMTB2aDtcclxuICBwYWRkaW5nLXRvcDogNnZoO1xyXG4gIHBhZGRpbmctYm90dG9tOiA1dmg7XHJcbn1cclxuLmltZy1sb2d1cyB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIGJvdHRvbTogMTBweDtcclxuICBmaWx0ZXI6IGNvbnRyYXN0KDEwMCUpO1xyXG4gIGZpbHRlcjogZHJvcC1zaGFkb3coMHB4IDBweCA1cHggd2hpdGUpO1xyXG4gIHdpZHRoOiA0MCU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uYm94MSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNGU0ZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmJveDIge1xyXG4gIGhlaWdodDogNTUwcHg7XHJcbiAgYmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly91cy4xMjNyZi5jb20vNDUwd20vbmVqcm9uL25lanJvbjE4MDgvbmVqcm9uMTgwODAwMDI0LzEwNTY2ODUzMy1iZWxsYS1tdWplci1jb24tdGFyamV0YS1kZS1jciVDMyVBOWRpdG8tcGFyYS1jb21wcmFzLW9ubGluZS5qcGc/dmVyPTZcIik7XHJcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHggMCAwIDIwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyIGNlbnRlcjtcclxuICBwYWRkaW5nOiAyMCU7XHJcbiAgZmlsdGVyOiBjb250cmFzdCg3NSUpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDY5MWU7XHJcbn1cclxuLmZvb3RlciB7XHJcbiAgbWFyZ2luLXRvcDogMjBweDtcclxufVxyXG4uYm94MyB7XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuYm94MSB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgLmJveDIge1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweCAyMHB4IDAgMDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgfVxyXG4gIC5pbWctbG9ndXMge1xyXG4gICAgbGVmdDogNXB4O1xyXG4gICAgdG9wOiA1cHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gIH1cclxufVxyXG4iXX0= */");

/***/ }),

/***/ "./src/app/modules/auth/pages/login/login.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/auth/pages/login/login.component.ts ***!
  \*************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginComponent = class LoginComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/auth/pages/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/modules/auth/pages/login/login.component.css")).default]
    })
], LoginComponent);



/***/ })

}]);
//# sourceMappingURL=modules-auth-auth-module-es2015.js.map