function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/not-found-product/not-found-product.component.html": function node_modulesRawLoaderDistCjsJsSrcAppModulesHomePagesNotFoundProductNotFoundProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>not-found-product works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/products/products.component.html": function node_modulesRawLoaderDistCjsJsSrcAppModulesHomePagesProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div></div>\n<div *ngIf=\"products\">\n  <div class=\"flex-container-main mt-3\">\n    <ng-container style=\"grid-auto-columns: auto\" *ngFor=\"let item of products\">\n      <div style=\"background-color: white\">\n        <div class=\"products-router-container\">\n          <a\n            style=\"text-decoration: none\"\n            href=\"category/{{ item.category }}\"\n            >{{ item.category }}</a\n          >\n          <span class=\"material-icons\"> arrow_forward_ios </span>\n          <a style=\"text-decoration: none\" href=\"\">{{ item.brand }}</a>\n          <span class=\"material-icons\"> arrow_forward_ios </span>\n          <a\n            style=\"text-decoration: none\"\n            href=\"product/{{ item.productId }}\"\n            >{{ item.name }}</a\n          >\n        </div>\n        <div style=\"background-color: #ed691e; height: 1vh\"></div>\n        <div class=\"products-details-container\">\n          <!-- /***left***/ -->\n          <div class=\"box1\">\n            <img\n              class=\"product-image\"\n              alt=\"{{ item.name }}\"\n              src=\"{{ item.url }}\"\n            />\n          </div>\n          <!-- end left -->\n          <!-- right -->\n          <div>\n            <div class=\"products-details\">\n              <h3>{{ item.name }}</h3>\n              <p>Stock:&nbsp;{{ item.stock }}</p>\n              <p>Marca:&nbsp;{{ item.brand }}</p>\n              <p>Descripcion:&nbsp;{{ item.description }}</p>\n              <p style=\"color: red\">Precio:&nbsp;S/.{{ item.price }}</p>\n            </div>\n            <button>pal carrito</button>\n          </div>\n          <!-- end right -->\n        </div>\n      </div>\n    </ng-container>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/start/start.component.html": function node_modulesRawLoaderDistCjsJsSrcAppModulesHomePagesStartStartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"background-color: #d3d3d3\">\r\n  <nav\r\n    style=\"padding-top: 20px\"\r\n    class=\"navbar navbar-expand-lg navbar-light bg-light\"\r\n  >\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      data-toggle=\"collapse\"\r\n      data-target=\"#navbarNavDropdown\"\r\n      aria-controls=\"navbarNavDropdown\"\r\n      aria-expanded=\"false\"\r\n      aria-label=\"Toggle navigation\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            MARCA\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <section class=\"example-section\">\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n            </section>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            PRECIO\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <section class=\"example-section\">\r\n              <mat-slider\r\n                thumbLabel\r\n                [displayWith]=\"formatLabel\"\r\n                tickInterval=\"1000\"\r\n                step=\"1000\"\r\n                min=\"0\"\r\n                max=\"10000\"\r\n                aria-label=\"units\"\r\n              ></mat-slider>\r\n            </section>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            ENVIO\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <section class=\"example-section\">\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n            </section>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            ORDENAR POR\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <section class=\"example-section\">\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n            </section>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--  -->\r\n</div>\r\n<!-- productos -->\r\n<div>\r\n  <div class=\"products\">\r\n    <div *ngIf=\"products\">\r\n      <div class=\"grid flex-container-main mt-3\">\r\n        <ng-container\r\n          style=\"grid-auto-columns: auto\"\r\n          *ngFor=\"let item of products\"\r\n        >\r\n          <mat-card class=\"example-card\">\r\n            <img\r\n              style=\"padding: 10px\"\r\n              mat-card-image\r\n              width=\"10px\"\r\n              src=\"{{ item.url }}\"\r\n              alt=\"{{ item.name }}\"\r\n            />\r\n            <mat-card-header\r\n              style=\"padding: 0%; margin: -15px; justify-content: left\"\r\n            >\r\n              <mat-card-title>\r\n                <div>\r\n                  <p\r\n                    style=\"\r\n                      width: 15ch;\r\n                      overflow: hidden;\r\n                      white-space: nowrap;\r\n                      text-overflow: ellipsis;\r\n                    \"\r\n                  >\r\n                    {{ item.name }}\r\n                  </p>\r\n                </div>\r\n              </mat-card-title>\r\n              <mat-card-subtitle style=\"color: red\"\r\n                >S/. {{ item.price }}</mat-card-subtitle\r\n              >\r\n            </mat-card-header>\r\n            <mat-card-content>\r\n              <div>\r\n                <p style=\"color: #868686\">Unidades:{{ item.stock }}</p>\r\n              </div>\r\n            </mat-card-content>\r\n            <mat-card-actions>\r\n              <button mat-button>LIKE</button>\r\n              <button mat-button>SHARE</button>\r\n            </mat-card-actions>\r\n          </mat-card>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- fin productos -->\r\n<!-- paginator -->\r\n\r\n<mat-paginator\r\n  [length]=\"length\"\r\n  [pageSize]=\"pageSize\"\r\n  [pageSizeOptions]=\"pageSizeOptions\"\r\n  (page)=\"pageEvent = $event\"\r\n  aria-label=\"Select page\"\r\n>\r\n</mat-paginator>\r\n\r\n<div *ngIf=\"pageEvent\">\r\n  <h5>Page Change Event Properties</h5>\r\n  <div>List length: {{ pageEvent.length }}</div>\r\n  <div>Page size: {{ pageEvent.pageSize }}</div>\r\n  <div>Page index: {{ pageEvent.pageIndex }}</div>\r\n</div>\r\n<!-- fin paginator -->\r\n";
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _pages_not_found_product_not_found_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./pages/not-found-product/not-found-product.component */
    "./src/app/modules/home/pages/not-found-product/not-found-product.component.ts");
    /* harmony import */


    var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/products/products.component */
    "./src/app/modules/home/pages/products/products.component.ts");

    var routes = [{
      path: "",
      component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"]
    }, {
      path: "category/:category",
      component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"]
    }, {
      path: "category/:category/:brand",
      component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"]
    }, {
      path: "products",
      component: _pages_not_found_product_not_found_product_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundProductComponent"]
    }, {
      path: "products/:id",
      component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"]
    }];

    var HomeRoutingModule = function HomeRoutingModule() {
      _classCallCheck(this, HomeRoutingModule);
    };

    HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
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
    /* harmony import */


    var _pages_not_found_product_not_found_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pages/not-found-product/not-found-product.component */
    "./src/app/modules/home/pages/not-found-product/not-found-product.component.ts");
    /* harmony import */


    var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./pages/products/products.component */
    "./src/app/modules/home/pages/products/products.component.ts");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], _pages_not_found_product_not_found_product_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundProductComponent"], _pages_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"]],
      exports: [],
      providers: [],
      entryComponents: []
    })], HomeModule);
    /***/
  },

  /***/
  "./src/app/modules/home/pages/not-found-product/not-found-product.component.css": function srcAppModulesHomePagesNotFoundProductNotFoundProductComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9ub3QtZm91bmQtcHJvZHVjdC9ub3QtZm91bmQtcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/home/pages/not-found-product/not-found-product.component.ts": function srcAppModulesHomePagesNotFoundProductNotFoundProductComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundProductComponent", function () {
      return NotFoundProductComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFoundProductComponent = /*#__PURE__*/function () {
      function NotFoundProductComponent() {
        _classCallCheck(this, NotFoundProductComponent);
      }

      _createClass(NotFoundProductComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundProductComponent;
    }();

    NotFoundProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found-product',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found-product.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/not-found-product/not-found-product.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found-product.component.css */
      "./src/app/modules/home/pages/not-found-product/not-found-product.component.css"))["default"]]
    })], NotFoundProductComponent);
    /***/
  },

  /***/
  "./src/app/modules/home/pages/products/products.component.css": function srcAppModulesHomePagesProductsProductsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".products-details-container {\r\n  display: flex;\r\n  padding: 1%;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n}\r\n.box1 {\r\n  align-items: center;\r\n  text-align: center;\r\n  justify-content: center;\r\n  text-shadow: #ed691e;\r\n}\r\n.product-image {\r\n  max-width: 900px;\r\n  height: auto;\r\n  padding-right: 10px;\r\n}\r\n.products-details {\r\n  padding: 5%;\r\n  vertical-align: auto;\r\n  align-items: center;\r\n  text-align: left;\r\n  text-shadow: #ed691e;\r\n  justify-content: center;\r\n}\r\n.products-router-container {\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  background-color: #d3d3d3;\r\n  padding: 2vh;\r\n}\r\n.material-icons {\r\n  color: #ed691e;\r\n}\r\n@media screen and (max-width: 700px) {\r\n  .products-details-container {\r\n    display: inline;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RzLWRldGFpbHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxufVxyXG4uYm94MSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1zaGFkb3c6ICNlZDY5MWU7XHJcbn1cclxuLnByb2R1Y3QtaW1hZ2Uge1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnByb2R1Y3RzLWRldGFpbHMge1xyXG4gIHBhZGRpbmc6IDUlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LXNoYWRvdzogI2VkNjkxZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucHJvZHVjdHMtcm91dGVyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xyXG4gIHBhZGRpbmc6IDJ2aDtcclxufVxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGNvbG9yOiAjZWQ2OTFlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLnByb2R1Y3RzLWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/modules/home/pages/products/products.component.ts": function srcAppModulesHomePagesProductsProductsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductsComponent", function () {
      return ProductsComponent;
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

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent(route, router) {
        _classCallCheck(this, ProductsComponent);

        this.route = route;
        this.router = router;
        this.products = [{
          productId: 100001,
          name: "Televisor 40'",
          brand: "Samsung",
          model: "S40LNK2019",
          stock: 30,
          description: "Accesorios incluidos Control Remoto, Manual de uso y Tarjeta de garantía / Alto (con/sin base) 72.1 cm con base/ Ancho 116.4 cm/ Aplicaciones destacadas Netflix, Google y Youtube. /Conexión Bluetooth Sí/ Conexión WiFi Sí/ Contraste Gran contraste/ Control remoto incluido Sí / Entrada Internet Sí / Entradas auxiliares de 3.5 mm No incluye / Entradas HDMI 3 / Entradas RCA Sin entradas / Entradas USB 2 / Entradas VGA Sin entradas / Garantía del proveedor 1 Año / Hecho en México / Lentes 3D incluidos No / Peso 12.9 kg / Potencia de los parlantes 20 Watts / Profundidad 32.5 cm con base / Resolución 4K Ultra HD / Sintonizador digital Sí / Sintonizador TDT No Aplica / Smart TV Sí / Tamaño de la pantalla 50 pulgadas / Tasa de refresco nativa AC100-240V 50/60Hz / Tecnología LED / Tipo de pantalla Plana / Tipo Televisores",
          price: 1999,
          url: "https://i.linio.com/p/8637b377f896c4216ffa1354c2836275-product.webp",
          category: "Televisores"
        }];
      }

      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.routeSub = this.route.params.subscribe(function (params) {
            _this.category = params["category"]; //obtenemos el id del route para usarlo en servicios
          });
        }
      }]);

      return ProductsComponent;
    }();

    ProductsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-products",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./products.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/products/products.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./products.component.css */
      "./src/app/modules/home/pages/products/products.component.css"))["default"]]
    })], ProductsComponent);
    /***/
  },

  /***/
  "./src/app/modules/home/pages/start/start.component.css": function srcAppModulesHomePagesStartStartComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button-category {\r\n  background-color: #4f4e4e;\r\n  height: 80px;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 20%; /* The width is 20%, by default */\r\n}\r\n.products {\r\n  padding-bottom: 10px;\r\n}\r\n.flex-container-main {\r\n  display: flex;\r\n}\r\n.product-container {\r\n  background-color: #ed691e;\r\n  border-radius: 20px;\r\n}\r\n.button-promotion,\r\n.button-news,\r\n.button-aboutus,\r\n.button-faq {\r\n  background-color: #4f4e4e;\r\n  height: 80px;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 20%; /* The width is 20%, by default */\r\n}\r\n.flex-container {\r\n  max-width: 300xp;\r\n}\r\n.category-button {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 40px;\r\n  margin: 20px;\r\n  color: white;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  background-color: #ed691e;\r\n}\r\n.secondary-button {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 40px;\r\n  background-color: #e9e9e9;\r\n  margin: 20px;\r\n  color: black;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n}\r\n.mat-toolbar {\r\n  width: 100%;\r\n}\r\n.content {\r\n  padding: 16px;\r\n}\r\n.content > mat-card {\r\n  width: 200px;\r\n}\r\n/* @media screen and .buttons(max-width:600px); */\r\n@media screen and (max-width: 800px) {\r\n  .button-category,\r\n  .button-promotion,\r\n  .button-aboutus,\r\n  .button-news,\r\n  .button-faq {\r\n    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */\r\n    height: 80%;\r\n  }\r\n  .category-button,\r\n  .secondary-button {\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    width: 80%;\r\n  }\r\n  .grid {\r\n    grid-template-columns: 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n/***section***/\r\n.example-section {\r\n  margin-left: 20px;\r\n}\r\nmat-slider {\r\n  width: 300px;\r\n}\r\n/**cards**/\r\n.example-card {\r\n  max-width: 200px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n/**paginator**/\r\n.mat-form-field {\r\n  margin-right: 12px;\r\n}\r\n/**grid**/\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n}\r\n/**example card**/\r\n.example-card {\r\n  width: 120%;\r\n  margin-bottom: 10px;\r\n  height: 350px;\r\n}\r\n/**grid**/\r\n@media screen and (max-width: 1920px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 1420px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 1020px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 800px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 620px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 410px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsVUFBVSxFQUFFLGlDQUFpQztBQUMvQztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTs7OztFQUlFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVLEVBQUUsaUNBQWlDO0FBQy9DO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQSxpREFBaUQ7QUFDakQ7RUFDRTs7Ozs7SUFLRSxXQUFXLEVBQUUsNkRBQTZEO0lBQzFFLFdBQVc7RUFDYjtFQUNBOztJQUVFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxrQ0FBa0MsRUFBRSx5Q0FBeUM7RUFDL0U7QUFDRjtBQUNBLGNBQWM7QUFDZDtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0EsVUFBVTtBQUNWO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQSxjQUFjO0FBQ2Q7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2IsMENBQTBDLEVBQUUseUNBQXlDO0FBQ3ZGO0FBQ0EsaUJBQWlCO0FBQ2pCO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQSxTQUFTO0FBQ1Q7RUFDRTtJQUNFLGFBQWE7SUFDYiw4Q0FBOEMsRUFBRSx5Q0FBeUM7RUFDM0Y7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsMENBQTBDLEVBQUUseUNBQXlDO0VBQ3ZGO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNDQUFzQyxFQUFFLHlDQUF5QztFQUNuRjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7SUFDYixrQ0FBa0MsRUFBRSx5Q0FBeUM7RUFDL0U7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsOEJBQThCLEVBQUUseUNBQXlDO0VBQzNFO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLDBCQUEwQixFQUFFLHlDQUF5QztFQUN2RTtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWNhdGVnb3J5IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY0ZTRlO1xyXG4gIGhlaWdodDogODBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjAlOyAvKiBUaGUgd2lkdGggaXMgMjAlLCBieSBkZWZhdWx0ICovXHJcbn1cclxuLnByb2R1Y3RzIHtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxufVxyXG4uZmxleC1jb250YWluZXItbWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ucHJvZHVjdC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDY5MWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4uYnV0dG9uLXByb21vdGlvbixcclxuLmJ1dHRvbi1uZXdzLFxyXG4uYnV0dG9uLWFib3V0dXMsXHJcbi5idXR0b24tZmFxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY0ZTRlO1xyXG4gIGhlaWdodDogODBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjAlOyAvKiBUaGUgd2lkdGggaXMgMjAlLCBieSBkZWZhdWx0ICovXHJcbn1cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDMwMHhwO1xyXG59XHJcbi5jYXRlZ29yeS1idXR0b24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkNjkxZTtcclxufVxyXG4uc2Vjb25kYXJ5LWJ1dHRvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5jb250ZW50ID4gbWF0LWNhcmQge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4vKiBAbWVkaWEgc2NyZWVuIGFuZCAuYnV0dG9ucyhtYXgtd2lkdGg6NjAwcHgpOyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5idXR0b24tY2F0ZWdvcnksXHJcbiAgLmJ1dHRvbi1wcm9tb3Rpb24sXHJcbiAgLmJ1dHRvbi1hYm91dHVzLFxyXG4gIC5idXR0b24tbmV3cyxcclxuICAuYnV0dG9uLWZhcSB7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogVGhlIHdpZHRoIGlzIDEwMCUsIHdoZW4gdGhlIHZpZXdwb3J0IGlzIDgwMHB4IG9yIHNtYWxsZXIgKi9cclxuICAgIGhlaWdodDogODAlO1xyXG4gIH1cclxuICAuY2F0ZWdvcnktYnV0dG9uLFxyXG4gIC5zZWNvbmRhcnktYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG4gIC5ncmlkIHtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7IC8qIENyZWF0ZSAyIGNvbHVtbnMgYW5kIGF1dG8tcGxhY2Ugcm93cyAqL1xyXG4gIH1cclxufVxyXG4vKioqc2VjdGlvbioqKi9cclxuLmV4YW1wbGUtc2VjdGlvbiB7XHJcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbn1cclxubWF0LXNsaWRlciB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbi8qKmNhcmRzKiovXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIG1heC13aWR0aDogMjAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcbi8qKnBhZ2luYXRvcioqL1xyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG4vKipncmlkKiovXHJcbi5ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjsgLyogQ3JlYXRlIDIgY29sdW1ucyBhbmQgYXV0by1wbGFjZSByb3dzICovXHJcbn1cclxuLyoqZXhhbXBsZSBjYXJkKiovXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIHdpZHRoOiAxMjAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG4vKipncmlkKiovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MjBweCkge1xyXG4gIC5ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyOyAvKiBDcmVhdGUgMiBjb2x1bW5zIGFuZCBhdXRvLXBsYWNlIHJvd3MgKi9cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQyMHB4KSB7XHJcbiAgLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjsgLyogQ3JlYXRlIDIgY29sdW1ucyBhbmQgYXV0by1wbGFjZSByb3dzICovXHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjBweCkge1xyXG4gIC5ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjsgLyogQ3JlYXRlIDIgY29sdW1ucyBhbmQgYXV0by1wbGFjZSByb3dzICovXHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7IC8qIENyZWF0ZSAyIGNvbHVtbnMgYW5kIGF1dG8tcGxhY2Ugcm93cyAqL1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gIC5ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IC8qIENyZWF0ZSAyIGNvbHVtbnMgYW5kIGF1dG8tcGxhY2Ugcm93cyAqL1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTBweCkge1xyXG4gIC5ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgLyogQ3JlYXRlIDIgY29sdW1ucyBhbmQgYXV0by1wbGFjZSByb3dzICovXHJcbiAgfVxyXG59XHJcbiJdfQ== */";
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
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var StartComponent = /*#__PURE__*/function () {
      function StartComponent(fb, route, router) {
        _classCallCheck(this, StartComponent);

        this.route = route;
        this.router = router;
        this.products = [{
          productId: 100001,
          name: "Televisor 40'",
          brand: "Samsung",
          model: "S40LNK2019",
          stock: 30,
          description: "Televisor Nuevo",
          price: 1999,
          url: "https://i.linio.com/p/8637b377f896c4216ffa1354c2836275-product.webp",
          category: "Televisores"
        }, {
          productId: 100001,
          name: "Televisor 40'",
          brand: "Samsung",
          model: "S40LNK2019",
          stock: 30,
          description: "Televisor Nuevo",
          price: 1999,
          url: "https://i.linio.com/p/8637b377f896c4216ffa1354c2836275-product.webp",
          category: "Televisor"
        }, {
          productId: 100002,
          name: "S20+",
          brand: "Samsung",
          model: "SKLNHTO202020",
          stock: 2,
          description: "Celular Nuevo",
          price: 3000,
          url: "https://i.linio.com/p/8e1860d92da3ce3eada000c1d22fa5c1-product.webp",
          category: "Celulares"
        }, {
          productId: 100003,
          name: "Mando de Xbox Series XS + Cable USB-C Compatible con PC",
          brand: "Microsoft",
          model: "MXBOX123G",
          stock: 5,
          description: "Mando Nuevo",
          price: 329,
          url: "https://i.linio.com/p/5acc22fe0763ee8436cdaabf52184603-product.webp",
          category: "Consolas y Accesorios"
        }]; //Pagination
        //https://material.angular.io/components/paginator/overview
        // MatPaginator Inputs

        this.length = 100;
        this.pageSize = 10;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.toppings = fb.group({
          pepperoni: false,
          extracheese: false,
          mushroom: false
        });
      }

      _createClass(StartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.routeSub = this.route.params.subscribe(function (params) {
            _this2.category = params["category"]; //obtenemos el id del route para usarlo en servicios
          });
        }
        /**Precio**/

      }, {
        key: "formatLabel",
        value: function formatLabel(value) {
          if (value >= 1000) {
            return Math.round(value / 1000) + "k";
          }

          return value;
        }
      }, {
        key: "setPageSizeOptions",
        value: function setPageSizeOptions(setPageSizeOptionsInput) {
          if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput.split(",").map(function (str) {
              return +str;
            });
          }
        }
      }]);

      return StartComponent;
    }();

    StartComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

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