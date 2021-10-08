function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/start/start.component.html": function node_modulesRawLoaderDistCjsJsSrcAppModulesHomePagesStartStartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"background-color: #4f4e4e\">\n  <div class=\"button-category\">\n    <a style=\"text-decoration: none\" href=\"\">\n      <div class=\"category-button\">\n        <p>CATEGORIAS</p>\n      </div>\n    </a>\n  </div>\n  <div class=\"button-promotion\">\n    <a style=\"text-decoration: none\" href=\"\">\n      <div class=\"secondary-button\">\n        <p>PROMOCIONES</p>\n      </div>\n    </a>\n  </div>\n  <div class=\"button-news\">\n    <a style=\"text-decoration: none\" href=\"\">\n      <div class=\"secondary-button\">\n        <p>NOVEDADES</p>\n      </div>\n    </a>\n  </div>\n  <div class=\"button-aboutus\">\n    <a style=\"text-decoration: none\" href=\"\">\n      <div class=\"secondary-button\">\n        <p>ABOUT US</p>\n      </div>\n    </a>\n  </div>\n  <div class=\"button-faq\">\n    <a style=\"text-decoration: none\" href=\"\">\n      <div class=\"secondary-button\">\n        <p>FAQ</p>\n      </div>\n    </a>\n  </div>\n</div>\n<div>aqui va el contenido de productos></div>\n";
    /***/
  },

  /***/
  "./src/app/modules/home/home-routing.module.ts": function srcAppModulesHomeHomeRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routes", function () {
      return routes;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function () {
      return HomeRoutingModule;
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


    var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./pages/start/start.component */
    "./src/app/modules/home/pages/start/start.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var routes = [{
      path: "",
      redirectTo: "home",
      pathMatch: "full"
    }, {
      path: "home",
      component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]]
    })], HomeRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/home/home.module.ts": function srcAppModulesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
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


    var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./pages/start/start.component */
    "./src/app/modules/home/pages/start/start.component.ts");
    /* harmony import */


    var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./home-routing.module */
    "./src/app/modules/home/home-routing.module.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"]],
      exports: [],
      providers: [],
      entryComponents: []
    })], HomeModule);
    /***/
  },

  /***/
  "./src/app/modules/home/pages/start/start.component.css": function srcAppModulesHomePagesStartStartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button-category {\r\n  background-color: #4f4e4e;\r\n  height: 80px;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 20%; /* The width is 20%, by default */\r\n}\r\n.button-promotion,\r\n.button-news,\r\n.button-aboutus,\r\n.button-faq {\r\n  background-color: #4f4e4e;\r\n  height: 80px;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 20%; /* The width is 20%, by default */\r\n}\r\n.category-button {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 40px;\r\n  margin: 20px;\r\n  color: white;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  background-color: #ed691e;\r\n}\r\n.secondary-button {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 40px;\r\n  background-color: #e9e9e9;\r\n  margin: 20px;\r\n  color: black;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n}\r\n/* @media screen and .buttons(max-width:600px); */\r\n@media screen and (max-width: 800px) {\r\n  .button-category,\r\n  .button-promotion,\r\n  .button-aboutus,\r\n  .button-news,\r\n  .button-faq {\r\n    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */\r\n    height: 80%;\r\n  }\r\n  .category-button,\r\n  .secondary-button {\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    width: 80%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsVUFBVSxFQUFFLGlDQUFpQztBQUMvQztBQUNBOzs7O0VBSUUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFVBQVUsRUFBRSxpQ0FBaUM7QUFDL0M7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFFQSxpREFBaUQ7QUFDakQ7RUFDRTs7Ozs7SUFLRSxXQUFXLEVBQUUsNkRBQTZEO0lBQzFFLFdBQVc7RUFDYjtFQUNBOztJQUVFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtFQUNaO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvcGFnZXMvc3RhcnQvc3RhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5idXR0b24tY2F0ZWdvcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjRlNGU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyMCU7IC8qIFRoZSB3aWR0aCBpcyAyMCUsIGJ5IGRlZmF1bHQgKi9cclxufVxyXG4uYnV0dG9uLXByb21vdGlvbixcclxuLmJ1dHRvbi1uZXdzLFxyXG4uYnV0dG9uLWFib3V0dXMsXHJcbi5idXR0b24tZmFxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY0ZTRlO1xyXG4gIGhlaWdodDogODBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjAlOyAvKiBUaGUgd2lkdGggaXMgMjAlLCBieSBkZWZhdWx0ICovXHJcbn1cclxuLmNhdGVnb3J5LWJ1dHRvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ2OTFlO1xyXG59XHJcbi5zZWNvbmRhcnktYnV0dG9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuXHJcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIC5idXR0b25zKG1heC13aWR0aDo2MDBweCk7ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmJ1dHRvbi1jYXRlZ29yeSxcclxuICAuYnV0dG9uLXByb21vdGlvbixcclxuICAuYnV0dG9uLWFib3V0dXMsXHJcbiAgLmJ1dHRvbi1uZXdzLFxyXG4gIC5idXR0b24tZmFxIHtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBUaGUgd2lkdGggaXMgMTAwJSwgd2hlbiB0aGUgdmlld3BvcnQgaXMgODAwcHggb3Igc21hbGxlciAqL1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgfVxyXG4gIC5jYXRlZ29yeS1idXR0b24sXHJcbiAgLnNlY29uZGFyeS1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/modules/home/pages/start/start.component.ts": function srcAppModulesHomePagesStartStartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StartComponent", function () {
      return StartComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var StartComponent = /*#__PURE__*/function () {
      function StartComponent() {
        _classCallCheck(this, StartComponent);
      }

      _createClass(StartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StartComponent;
    }();

    StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-start',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./start.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/start/start.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./start.component.css */
      "./src/app/modules/home/pages/start/start.component.css"))["default"]]
    })], StartComponent);
    /***/
  }
}]);
//# sourceMappingURL=modules-home-home-module-es5.js.map