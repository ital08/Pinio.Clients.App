function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-profile-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/pages/about-profile/about-profile.component.html": function node_modulesRawLoaderDistCjsJsSrcAppModulesProfilePagesAboutProfileAboutProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- profile options -->\n<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col border profile-option\">\n      <a\n        class=\"profile-options-a\"\n        routerLink=\"/profile/me\"\n        routerLinkActive=\"active\"\n        ><div>Datos Personales</div></a\n      >\n    </div>\n    <div class=\"col border profile-option\">\n      <div>\n        <a\n          class=\"profile-options-a\"\n          routerLink=\"/profile/history\"\n          routerLinkActive=\"active\"\n          >Historial de pedidos</a\n        >\n      </div>\n    </div>\n    <div class=\"col border profile-option\">\n      <div>\n        <a\n          class=\"profile-options-a\"\n          routerLink=\"/profile/my-address\"\n          routerLinkActive=\"active\"\n          >Mis Direcciones</a\n        >\n      </div>\n    </div>\n    <div class=\"col border profile-option\">\n      <div>\n        <a\n          class=\"profile-options-a\"\n          routerLink=\"/profile/messages\"\n          routerLinkActive=\"active\"\n          >Mensajes</a\n        >\n      </div>\n    </div>\n    <div class=\"col border profile-option\">\n      <div>\n        <div\n          class=\"profile-options-a\"\n          style=\"cursor: pointer\"\n          (click)=\"logout()\"\n          routerLinkActive=\"active\"\n        >\n          Cerrar Sesión\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<!-- fin profile options -->\n<div>\n  <router-outlet></router-outlet>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/pages/address/address.component.html": function node_modulesRawLoaderDistCjsJsSrcAppModulesProfilePagesAddressAddressComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>address works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/pages/history/history.component.html": function node_modulesRawLoaderDistCjsJsSrcAppModulesProfilePagesHistoryHistoryComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>history works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/pages/mainprofile/mainprofile.component.html": function node_modulesRawLoaderDistCjsJsSrcAppModulesProfilePagesMainprofileMainprofileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-md\">\n  <div class=\"row w-50 p-5 mx-auto\">\n    <div class=\"col-sm-6\">\n      <div>\n        <svg\n          xmlns=\"http://www.w3.org/2000/svg\"\n          width=\"200\"\n          height=\"200\"\n          fill=\"currentColor\"\n          class=\"bi bi-person\"\n          viewBox=\"0 0 16 16\"\n          style=\"padding: 30px; border-radius: 100px; background-color: #ed691e\"\n        >\n          <path\n            d=\"M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z\"\n          />\n        </svg>\n      </div>\n    </div>\n    <div class=\"col-sm-5 left\">\n      <p style=\"color: #ed691e; font-size: 35px; font-weight: bold\">\n        BIENVENIDO A TU CUENTA\n      </p>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/pages/me/me.component.html": function node_modulesRawLoaderDistCjsJsSrcAppModulesProfilePagesMeMeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>me works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/pages/messages/messages.component.html": function node_modulesRawLoaderDistCjsJsSrcAppModulesProfilePagesMessagesMessagesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>messages works!</p>\n";
    /***/
  },

  /***/
  "./src/app/modules/profile/pages/about-profile/about-profile.component.css": function srcAppModulesProfilePagesAboutProfileAboutProfileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".profile-option {\r\n  background-color: #999999;\r\n  color: black;\r\n}\r\n.profile-options-a {\r\n  font-size: 15px;\r\n  font-weight: bold;\r\n  color: white;\r\n  text-decoration: none;\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding-bottom: 20px;\r\n  padding-top: 20px;\r\n  border-width: 20px;\r\n  border-left-width: 5px;\r\n  border-right-width: 5px;\r\n  border-left-color: white;\r\n  border-right-color: white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3BhZ2VzL2Fib3V0LXByb2ZpbGUvYWJvdXQtcHJvZmlsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1oscUJBQXFCO0VBQ3JCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsd0JBQXdCO0VBQ3hCLHlCQUF5QjtBQUMzQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9wYWdlcy9hYm91dC1wcm9maWxlL2Fib3V0LXByb2ZpbGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wcm9maWxlLW9wdGlvbiB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzk5OTk5OTtcclxuICBjb2xvcjogYmxhY2s7XHJcbn1cclxuLnByb2ZpbGUtb3B0aW9ucy1hIHtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgYm9yZGVyLXdpZHRoOiAyMHB4O1xyXG4gIGJvcmRlci1sZWZ0LXdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyLXJpZ2h0LXdpZHRoOiA1cHg7XHJcbiAgYm9yZGVyLWxlZnQtY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yaWdodC1jb2xvcjogd2hpdGU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/modules/profile/pages/about-profile/about-profile.component.ts": function srcAppModulesProfilePagesAboutProfileAboutProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutProfileComponent", function () {
      return AboutProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var AboutProfileComponent = /*#__PURE__*/function () {
      function AboutProfileComponent(router) {
        _classCallCheck(this, AboutProfileComponent);

        this.router = router;
      }

      _createClass(AboutProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "logout",
        value: function logout() {
          console.log("cerrando sesion");
          this.router.navigateByUrl("/");
        }
      }]);

      return AboutProfileComponent;
    }();

    AboutProfileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AboutProfileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-about-profile",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./about-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/pages/about-profile/about-profile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./about-profile.component.css */
      "./src/app/modules/profile/pages/about-profile/about-profile.component.css"))["default"]]
    })], AboutProfileComponent);
    /***/
  },

  /***/
  "./src/app/modules/profile/pages/address/address.component.css": function srcAppModulesProfilePagesAddressAddressComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9wYWdlcy9hZGRyZXNzL2FkZHJlc3MuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/profile/pages/address/address.component.ts": function srcAppModulesProfilePagesAddressAddressComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AddressComponent", function () {
      return AddressComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AddressComponent = /*#__PURE__*/function () {
      function AddressComponent() {
        _classCallCheck(this, AddressComponent);
      }

      _createClass(AddressComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AddressComponent;
    }();

    AddressComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-address',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./address.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/pages/address/address.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./address.component.css */
      "./src/app/modules/profile/pages/address/address.component.css"))["default"]]
    })], AddressComponent);
    /***/
  },

  /***/
  "./src/app/modules/profile/pages/history/history.component.css": function srcAppModulesProfilePagesHistoryHistoryComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9wYWdlcy9oaXN0b3J5L2hpc3RvcnkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/profile/pages/history/history.component.ts": function srcAppModulesProfilePagesHistoryHistoryComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HistoryComponent", function () {
      return HistoryComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HistoryComponent = /*#__PURE__*/function () {
      function HistoryComponent() {
        _classCallCheck(this, HistoryComponent);
      }

      _createClass(HistoryComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HistoryComponent;
    }();

    HistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-history',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./history.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/pages/history/history.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./history.component.css */
      "./src/app/modules/profile/pages/history/history.component.css"))["default"]]
    })], HistoryComponent);
    /***/
  },

  /***/
  "./src/app/modules/profile/pages/mainprofile/mainprofile.component.css": function srcAppModulesProfilePagesMainprofileMainprofileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".ico {\r\n  background-color:aqua;\r\n  min-width: 400px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3BhZ2VzL21haW5wcm9maWxlL21haW5wcm9maWxlLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBcUI7RUFDckIsZ0JBQWdCO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9wcm9maWxlL3BhZ2VzL21haW5wcm9maWxlL21haW5wcm9maWxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOmFxdWE7XHJcbiAgbWluLXdpZHRoOiA0MDBweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/profile/pages/mainprofile/mainprofile.component.ts": function srcAppModulesProfilePagesMainprofileMainprofileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainprofileComponent", function () {
      return MainprofileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MainprofileComponent = /*#__PURE__*/function () {
      function MainprofileComponent() {
        _classCallCheck(this, MainprofileComponent);
      }

      _createClass(MainprofileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MainprofileComponent;
    }();

    MainprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mainprofile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mainprofile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/pages/mainprofile/mainprofile.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mainprofile.component.css */
      "./src/app/modules/profile/pages/mainprofile/mainprofile.component.css"))["default"]]
    })], MainprofileComponent);
    /***/
  },

  /***/
  "./src/app/modules/profile/pages/me/me.component.css": function srcAppModulesProfilePagesMeMeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9wYWdlcy9tZS9tZS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/profile/pages/me/me.component.ts": function srcAppModulesProfilePagesMeMeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MeComponent", function () {
      return MeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MeComponent = /*#__PURE__*/function () {
      function MeComponent() {
        _classCallCheck(this, MeComponent);
      }

      _createClass(MeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MeComponent;
    }();

    MeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-me',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./me.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/pages/me/me.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./me.component.css */
      "./src/app/modules/profile/pages/me/me.component.css"))["default"]]
    })], MeComponent);
    /***/
  },

  /***/
  "./src/app/modules/profile/pages/messages/messages.component.css": function srcAppModulesProfilePagesMessagesMessagesComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcHJvZmlsZS9wYWdlcy9tZXNzYWdlcy9tZXNzYWdlcy5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/profile/pages/messages/messages.component.ts": function srcAppModulesProfilePagesMessagesMessagesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagesComponent", function () {
      return MessagesComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var MessagesComponent = /*#__PURE__*/function () {
      function MessagesComponent() {
        _classCallCheck(this, MessagesComponent);
      }

      _createClass(MessagesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return MessagesComponent;
    }();

    MessagesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-messages',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./messages.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/profile/pages/messages/messages.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./messages.component.css */
      "./src/app/modules/profile/pages/messages/messages.component.css"))["default"]]
    })], MessagesComponent);
    /***/
  },

  /***/
  "./src/app/modules/profile/profile-routing.module.ts": function srcAppModulesProfileProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function () {
      return ProfileRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _pages_about_profile_about_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./pages/about-profile/about-profile.component */
    "./src/app/modules/profile/pages/about-profile/about-profile.component.ts");
    /* harmony import */


    var _pages_address_address_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/address/address.component */
    "./src/app/modules/profile/pages/address/address.component.ts");
    /* harmony import */


    var _pages_history_history_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/history/history.component */
    "./src/app/modules/profile/pages/history/history.component.ts");
    /* harmony import */


    var _pages_mainprofile_mainprofile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/mainprofile/mainprofile.component */
    "./src/app/modules/profile/pages/mainprofile/mainprofile.component.ts");
    /* harmony import */


    var _pages_me_me_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/me/me.component */
    "./src/app/modules/profile/pages/me/me.component.ts");
    /* harmony import */


    var _pages_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/messages/messages.component */
    "./src/app/modules/profile/pages/messages/messages.component.ts");

    var routes = [{
      path: "",
      component: _pages_about_profile_about_profile_component__WEBPACK_IMPORTED_MODULE_4__["AboutProfileComponent"],
      children: [{
        path: "",
        component: _pages_mainprofile_mainprofile_component__WEBPACK_IMPORTED_MODULE_7__["MainprofileComponent"]
      }, {
        path: "me",
        component: _pages_me_me_component__WEBPACK_IMPORTED_MODULE_8__["MeComponent"]
      }, {
        path: "my-address",
        component: _pages_address_address_component__WEBPACK_IMPORTED_MODULE_5__["AddressComponent"]
      }, {
        path: "history",
        component: _pages_history_history_component__WEBPACK_IMPORTED_MODULE_6__["HistoryComponent"]
      }, {
        path: "messages",
        component: _pages_messages_messages_component__WEBPACK_IMPORTED_MODULE_9__["MessagesComponent"]
      }]
    }];

    var ProfileRoutingModule = function ProfileRoutingModule() {
      _classCallCheck(this, ProfileRoutingModule);
    };

    ProfileRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], ProfileRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/profile/profile.module.ts": function srcAppModulesProfileProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileModule", function () {
      return ProfileModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_avatar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-avatar */
    "./node_modules/ngx-avatar/fesm2015/ngx-avatar.js");
    /* harmony import */


    var _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./profile-routing.module */
    "./src/app/modules/profile/profile-routing.module.ts");
    /* harmony import */


    var _pages_about_profile_about_profile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/about-profile/about-profile.component */
    "./src/app/modules/profile/pages/about-profile/about-profile.component.ts");
    /* harmony import */


    var _pages_me_me_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/me/me.component */
    "./src/app/modules/profile/pages/me/me.component.ts");
    /* harmony import */


    var _pages_history_history_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./pages/history/history.component */
    "./src/app/modules/profile/pages/history/history.component.ts");
    /* harmony import */


    var _pages_address_address_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pages/address/address.component */
    "./src/app/modules/profile/pages/address/address.component.ts");
    /* harmony import */


    var _pages_messages_messages_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./pages/messages/messages.component */
    "./src/app/modules/profile/pages/messages/messages.component.ts");
    /* harmony import */


    var _pages_mainprofile_mainprofile_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./pages/mainprofile/mainprofile.component */
    "./src/app/modules/profile/pages/mainprofile/mainprofile.component.ts");

    var ProfileModule = function ProfileModule() {
      _classCallCheck(this, ProfileModule);
    };

    ProfileModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_about_profile_about_profile_component__WEBPACK_IMPORTED_MODULE_6__["AboutProfileComponent"], _pages_me_me_component__WEBPACK_IMPORTED_MODULE_7__["MeComponent"], _pages_history_history_component__WEBPACK_IMPORTED_MODULE_8__["HistoryComponent"], _pages_address_address_component__WEBPACK_IMPORTED_MODULE_9__["AddressComponent"], _pages_messages_messages_component__WEBPACK_IMPORTED_MODULE_10__["MessagesComponent"], _pages_mainprofile_mainprofile_component__WEBPACK_IMPORTED_MODULE_11__["MainprofileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"], ngx_avatar__WEBPACK_IMPORTED_MODULE_4__["AvatarModule"], _profile_routing_module__WEBPACK_IMPORTED_MODULE_5__["ProfileRoutingModule"]],
      exports: [],
      providers: [],
      entryComponents: []
    })], ProfileModule);
    /***/
  }
}]);
//# sourceMappingURL=modules-profile-profile-module-es5.js.map