function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/start/start.component.html": function node_modulesRawLoaderDistCjsJsSrcAppModulesHomePagesStartStartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\r\n  <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n    <a class=\"navbar-brand\" href=\"#\">Navbar</a>\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      data-toggle=\"collapse\"\r\n      data-target=\"#navbarNavDropdown\"\r\n      aria-controls=\"navbarNavDropdown\"\r\n      aria-expanded=\"false\"\r\n      aria-label=\"Toggle navigation\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item active\">\r\n          <a class=\"nav-link\" href=\"#\"\r\n            >Home <span class=\"sr-only\">(current)</span></a\r\n          >\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Features</a>\r\n        </li>\r\n        <li class=\"nav-item\">\r\n          <a class=\"nav-link\" href=\"#\">Pricing</a>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            Dropdown link\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <a class=\"dropdown-item\" href=\"#\">Action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Another action</a>\r\n            <a class=\"dropdown-item\" href=\"#\">Something else here</a>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</div>\r\n\r\n<div>\r\n  <!-- header -->\r\n  <!-- <div style=\"background-color: #4f4e4e\">\r\n    <div class=\"button-category\">\r\n      <a style=\"text-decoration: none\" href=\"\">\r\n        <div class=\"category-button\">\r\n          <p>CATEGORIAS</p>\r\n        </div>\r\n      </a>\r\n    </div>\r\n    <div class=\"button-promotion\">\r\n      <a style=\"text-decoration: none\" href=\"\">\r\n        <div class=\"secondary-button\">\r\n          <p>PROMOCIONES</p>\r\n        </div>\r\n      </a>\r\n    </div>\r\n    <div class=\"button-news\">\r\n      <a style=\"text-decoration: none\" href=\"\">\r\n        <div class=\"secondary-button\">\r\n          <p>NOVEDADES</p>\r\n        </div>\r\n      </a>\r\n    </div>\r\n    <div class=\"button-aboutus\">\r\n      <a style=\"text-decoration: none\" href=\"\">\r\n        <div class=\"secondary-button\">\r\n          <p>ABOUT US</p>\r\n        </div>\r\n      </a>\r\n    </div>\r\n    <div class=\"button-faq\">\r\n      <a style=\"text-decoration: none\" href=\"\">\r\n        <div class=\"secondary-button\">\r\n          <p>FAQ</p>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div> -->\r\n  <div class=\"products\">\r\n    <div *ngIf=\"products\">\r\n      <div class=\"flex-container-main mt-3\">\r\n        <ng-container *ngFor=\"let item of products\">\r\n          <div class=\"product-container\">\r\n            <p>{{ item.name }}</p>\r\n            <p>{{ item.description }}</p>\r\n            <p>{{ item.price }}</p>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- fin Contenido -->\r\n</div>\r\n";
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
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @shared/shared.module */
    "./src/app/shared/shared.module.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"]],
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


    __webpack_exports__["default"] = ".button-category {\r\n  background-color: #4f4e4e;\r\n  height: 80px;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 20%; /* The width is 20%, by default */\r\n}\r\n.products {\r\n}\r\n.flex-container-main {\r\n  display: flex;\r\n}\r\n.product-container {\r\n  background-color: #ed691e;\r\n  border-radius: 20px;\r\n}\r\n.button-promotion,\r\n.button-news,\r\n.button-aboutus,\r\n.button-faq {\r\n  background-color: #4f4e4e;\r\n  height: 80px;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 20%; /* The width is 20%, by default */\r\n}\r\n.flex-container {\r\n  max-width: 300xp;\r\n}\r\n.category-button {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 40px;\r\n  margin: 20px;\r\n  color: white;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  background-color: #ed691e;\r\n}\r\n.secondary-button {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 40px;\r\n  background-color: #e9e9e9;\r\n  margin: 20px;\r\n  color: black;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n}\r\n.mat-toolbar {\r\n  width: 100%;\r\n}\r\n.content {\r\n  padding: 16px;\r\n}\r\n.content > mat-card {\r\n  width: 200px;\r\n}\r\n/* @media screen and .buttons(max-width:600px); */\r\n@media screen and (max-width: 800px) {\r\n  .button-category,\r\n  .button-promotion,\r\n  .button-aboutus,\r\n  .button-news,\r\n  .button-faq {\r\n    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */\r\n    height: 80%;\r\n  }\r\n  .category-button,\r\n  .secondary-button {\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    width: 80%;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsVUFBVSxFQUFFLGlDQUFpQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLG1CQUFtQjtBQUNyQjtBQUNBOzs7O0VBSUUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFVBQVUsRUFBRSxpQ0FBaUM7QUFDL0M7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsWUFBWTtFQUNaLFlBQVk7RUFDWixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUNBLGlEQUFpRDtBQUNqRDtFQUNFOzs7OztJQUtFLFdBQVcsRUFBRSw2REFBNkQ7SUFDMUUsV0FBVztFQUNiO0VBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0VBQ1o7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9zdGFydC9zdGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1jYXRlZ29yeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNGU0ZTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDIwJTsgLyogVGhlIHdpZHRoIGlzIDIwJSwgYnkgZGVmYXVsdCAqL1xyXG59XHJcbi5wcm9kdWN0cyB7XHJcbn1cclxuLmZsZXgtY29udGFpbmVyLW1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnByb2R1Y3QtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ2OTFlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmJ1dHRvbi1wcm9tb3Rpb24sXHJcbi5idXR0b24tbmV3cyxcclxuLmJ1dHRvbi1hYm91dHVzLFxyXG4uYnV0dG9uLWZhcSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNGU0ZTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDIwJTsgLyogVGhlIHdpZHRoIGlzIDIwJSwgYnkgZGVmYXVsdCAqL1xyXG59XHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAzMDB4cDtcclxufVxyXG4uY2F0ZWdvcnktYnV0dG9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDY5MWU7XHJcbn1cclxuLnNlY29uZGFyeS1idXR0b24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uY29udGVudCA+IG1hdC1jYXJkIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuLyogQG1lZGlhIHNjcmVlbiBhbmQgLmJ1dHRvbnMobWF4LXdpZHRoOjYwMHB4KTsgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuYnV0dG9uLWNhdGVnb3J5LFxyXG4gIC5idXR0b24tcHJvbW90aW9uLFxyXG4gIC5idXR0b24tYWJvdXR1cyxcclxuICAuYnV0dG9uLW5ld3MsXHJcbiAgLmJ1dHRvbi1mYXEge1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIFRoZSB3aWR0aCBpcyAxMDAlLCB3aGVuIHRoZSB2aWV3cG9ydCBpcyA4MDBweCBvciBzbWFsbGVyICovXHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICB9XHJcbiAgLmNhdGVnb3J5LWJ1dHRvbixcclxuICAuc2Vjb25kYXJ5LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxufVxyXG4iXX0= */";
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

        this.products = [{
          productId: 100001,
          name: "Televisor 40'",
          brand: "Samsung",
          model: "S40LNK2019",
          stock: 30,
          description: "Televisor Nuevo",
          price: 1999
        }, {
          productId: 100002,
          name: "S20+",
          brand: "Samsung",
          model: "SKLNHTO202020",
          stock: 2,
          description: "Celular Nuevo",
          price: 3000
        }];
      }

      _createClass(StartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return StartComponent;
    }();

    StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-start",
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