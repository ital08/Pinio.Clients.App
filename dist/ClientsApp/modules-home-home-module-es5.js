function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/not-found-product/not-found-product.component.html": function node_modulesRawLoaderDistCjsJsSrcAppModulesHomePagesNotFoundProductNotFoundProductComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/products/products.component.html": function node_modulesRawLoaderDistCjsJsSrcAppModulesHomePagesProductsProductsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- <div>\r\n  <div *ngIf=\"products\">\r\n    <div class=\"flex-container-main mt-3\">\r\n      <ng-container\r\n        style=\"grid-auto-columns: auto\"\r\n        *ngFor=\"let item of products\"\r\n      > -->\r\n<div style=\"background-color: white\">\r\n  <div class=\"products-router-container\">\r\n    <a style=\"text-decoration: none\" href=\"category/item.category\"\r\n      >item.category</a\r\n    >\r\n    <span class=\"material-icons\"> arrow_forward_ios </span>\r\n    <a style=\"text-decoration: none\" href=\"\">item.brand</a>\r\n    <span class=\"material-icons\"> arrow_forward_ios </span>\r\n    <a style=\"text-decoration: none\" href=\"product/item.productId\"\r\n      >item.name}</a\r\n    >\r\n  </div>\r\n  <div style=\"background-color: #ed691e; height: 1vh\"></div>\r\n  <div class=\"products-details-container\">\r\n    <!-- /***left***/ -->\r\n    <div class=\"box1\">\r\n      <img class=\"product-image\" alt=\"item.name\" src=\"item.url\" />\r\n    </div>\r\n    <!-- end left -->\r\n    <!-- right -->\r\n    <div>\r\n      <div class=\"products-details\">\r\n        <h3>item.name</h3>\r\n        <p>Stock:&nbsp;item.stock</p>\r\n        <p>Marca:&nbsp;item.brand</p>\r\n        <p>Descripcion:&nbsp;item.description</p>\r\n        <p style=\"color: red\">Precio:&nbsp;item.price</p>\r\n      </div>\r\n      <button>pal carrito</button>\r\n    </div>\r\n    <!-- end right -->\r\n  </div>\r\n</div>\r\n<!-- </ng-container>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/start/start.component.html": function node_modulesRawLoaderDistCjsJsSrcAppModulesHomePagesStartStartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"background-color: #d3d3d3\">\r\n  <nav\r\n    style=\"padding-top: 20px\"\r\n    class=\"navbar navbar-expand-lg navbar-light bg-light\"\r\n  >\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      data-toggle=\"collapse\"\r\n      data-target=\"#navbarNavDropdown\"\r\n      aria-controls=\"navbarNavDropdown\"\r\n      aria-expanded=\"false\"\r\n      aria-label=\"Toggle navigation\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            MARCA\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <section class=\"example-section\">\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n            </section>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            PRECIO\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <section class=\"example-section\">\r\n              <mat-slider\r\n                thumbLabel\r\n                [displayWith]=\"formatLabel\"\r\n                tickInterval=\"1000\"\r\n                step=\"1000\"\r\n                min=\"0\"\r\n                max=\"10000\"\r\n                aria-label=\"units\"\r\n              ></mat-slider>\r\n            </section>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            ENVIO\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <section class=\"example-section\">\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n            </section>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            ORDENAR POR\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <section class=\"example-section\">\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me</mat-checkbox>\r\n              </li>\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n            </section>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--  -->\r\n</div>\r\n<!-- productos -->\r\n\r\n<div *ngIf=\"loading === true\">\r\n  <div class=\"container justify-content-center\" style=\"padding: 10%\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"justify-content-center\">\r\n        <mat-progress-spinner\r\n          class=\"justify-content-center\"\r\n          color=\"primary\"\r\n          mode=\"indeterminate\"\r\n        >\r\n        </mat-progress-spinner>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"container\">\r\n  <div class=\"row justify-content-center mt-2 mb-2\">\r\n    <div *ngFor=\"let item of products\">\r\n      <div class=\"col-4 mt-1 mb-1 justify-content-center\">\r\n        <mat-card style=\"width: 280px\">\r\n          <mat-card-title align=\"center\" style=\"font-size: small\">\r\n            {{ item.productModel }}\r\n          </mat-card-title>\r\n          <mat-card-subtitle align=\"center\" color=\"primary\">\r\n            S/.{{ item.unitprice }}\r\n          </mat-card-subtitle>\r\n          <mat-card-content align=\"center\">\r\n            <img src=\"{{ item.urlimage }}\" mat-card-lg-image />\r\n          </mat-card-content>\r\n          <mat-card-actions align=\"center\">\r\n            <button class=\"col-8 m-1\" mat-stroked-button color=\"accent\">\r\n              Detalles\r\n              <mat-icon>dehaze</mat-icon>\r\n            </button>\r\n            <button class=\"col-8 m-1\" mat-flat-button color=\"accent\">\r\n              Comprar\r\n              <mat-icon>add_shopping_cart</mat-icon>\r\n            </button>\r\n          </mat-card-actions>\r\n        </mat-card>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- fin productos -->\r\n<!-- paginator -->\r\n\r\n<mat-paginator\r\n  [length]=\"length\"\r\n  [pageSize]=\"pageSize\"\r\n  [pageSizeOptions]=\"pageSizeOptions\"\r\n  (page)=\"pageEvent = $event\"\r\n  aria-label=\"Select page\"\r\n>\r\n</mat-paginator>\r\n\r\n<div *ngIf=\"pageEvent\">\r\n  <h5>Page Change Event Properties</h5>\r\n  <div>List length: {{ pageEvent.length }}</div>\r\n  <div>Page size: {{ pageEvent.pageSize }}</div>\r\n  <div>Page index: {{ pageEvent.pageIndex }}</div>\r\n</div>\r\n<!-- fin paginator -->\r\n";
    /***/
  },

  /***/
  "./src/app/data/services/products.service.ts": function srcAppDataServicesProductsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProductService", function () {
      return ProductService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @env */
    "./src/environments/environment.ts");
    /* harmony import */


    var _shared_service_http_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @shared/service/http.service */
    "./src/app/shared/service/http.service.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var ProductService = /*#__PURE__*/function () {
      function ProductService(httpService, http) {
        _classCallCheck(this, ProductService);

        this.httpService = httpService;
        this.http = http;
        this.httpOptions = {
          headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            "Content-Type": "application/json;charset=utf-8"
          })
        };
        this.APIENDPOINT = _env__WEBPACK_IMPORTED_MODULE_3__["environment"].urlApiService;
      } // tslint:disable-next-line:typedef


      _createClass(ProductService, [{
        key: "errorHandl",
        value: function errorHandl(error) {
          var errorMessage = "";

          if (error.error instanceof ErrorEvent) {
            errorMessage = error.error.message;
          } else {
            errorMessage = "Error Code: ".concat(error.status, "\nMessage: ").concat(error.message);
          }

          console.log(errorMessage);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
        }
      }, {
        key: "getProductCatalog1",
        value: function getProductCatalog1(productId, brand, model, price) {
          return this.httpService.get("".concat(this.APIENDPOINT, "/products/productcatalog?idProductCatalog=").concat(productId, "&productBrand=").concat(brand, "&productModel=").concat(model, "&unitprice=").concat(price, "&urlimage=string"));
        }
      }, {
        key: "getProductCatalog2",
        value: function getProductCatalog2(productId, brand, model, price) {
          return this.http.get("".concat(this.APIENDPOINT, "/products/productcatalog?idProductCatalog=").concat(productId, "&productBrand=").concat(brand, "&productModel=").concat(model, "&unitprice=").concat(price, "&urlimage=string"), this.httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["catchError"])(this.errorHandl));
        }
      }]);

      return ProductService;
    }();

    ProductService.ctorParameters = function () {
      return [{
        type: _shared_service_http_service__WEBPACK_IMPORTED_MODULE_4__["HttpService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ProductService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: "root"
    })], ProductService);
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
      path: "product/:id",
      component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"]
    }, {
      path: "not-fount",
      component: _pages_not_found_product_not_found_product_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundProductComponent"]
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
    /* harmony import */


    var ngx_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-avatar */
    "./node_modules/ngx-avatar/fesm2015/ngx-avatar.js");

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };

    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_pages_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], _pages_not_found_product_not_found_product_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundProductComponent"], _pages_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], ngx_avatar__WEBPACK_IMPORTED_MODULE_8__["AvatarModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"]]
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
      selector: "app-not-found-product",
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

    var ProductsComponent = /*#__PURE__*/function () {
      function ProductsComponent() {
        _classCallCheck(this, ProductsComponent);
      } // this.routeSub = this.route.params.subscribe((params) => {
      //   this.id = params["id"]; //obtenemos el id del route para usarlo en servicios
      // });


      _createClass(ProductsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log("entramos");
        }
      }]);

      return ProductsComponent;
    }();

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


    __webpack_exports__["default"] = "mat-card {\r\n  width: calc(100% - 200px);\r\n  height: calc(100% - 600px);\r\n}\r\n.button-category {\r\n  background-color: #4f4e4e;\r\n  height: 80px;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 20%; /* The width is 20%, by default */\r\n}\r\n.products {\r\n  padding-bottom: 10px;\r\n}\r\n.flex-container-main {\r\n  display: flex;\r\n}\r\n.product-container {\r\n  background-color: #ed691e;\r\n  border-radius: 20px;\r\n}\r\n.button-promotion,\r\n.button-news,\r\n.button-aboutus,\r\n.button-faq {\r\n  background-color: #4f4e4e;\r\n  height: 80px;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 20%; /* The width is 20%, by default */\r\n}\r\n.flex-container {\r\n  max-width: 300xp;\r\n}\r\n.category-button {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 40px;\r\n  margin: 20px;\r\n  color: white;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  background-color: #ed691e;\r\n}\r\n.secondary-button {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 40px;\r\n  background-color: #e9e9e9;\r\n  margin: 20px;\r\n  color: black;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n}\r\n.mat-toolbar {\r\n  width: 100%;\r\n}\r\n.content {\r\n  padding: 16px;\r\n}\r\n.content > mat-card {\r\n  width: 200px;\r\n}\r\n/* @media screen and .buttons(max-width:600px); */\r\n@media screen and (max-width: 800px) {\r\n  .button-category,\r\n  .button-promotion,\r\n  .button-aboutus,\r\n  .button-news,\r\n  .button-faq {\r\n    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */\r\n    height: 80%;\r\n  }\r\n  .category-button,\r\n  .secondary-button {\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    width: 80%;\r\n  }\r\n  .grid {\r\n    grid-template-columns: 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n/***section***/\r\n.example-section {\r\n  margin-left: 20px;\r\n}\r\nmat-slider {\r\n  width: 300px;\r\n}\r\n/**cards**/\r\n.example-card {\r\n  min-width: 100%;\r\n  width: 500px;\r\n}\r\n/**paginator**/\r\n.mat-form-field {\r\n  margin-right: 12px;\r\n}\r\n/**grid**/\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n}\r\n/**example card**/\r\n.example-card {\r\n  width: 120%;\r\n  margin-bottom: 10px;\r\n  height: 350px;\r\n}\r\n/**grid**/\r\n@media screen and (max-width: 1920px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 1420px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 1020px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 800px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 620px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 410px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n.button {\r\n  cursor: pointer;\r\n  background-color: #ed691e;\r\n  border-radius: 100px;\r\n  margin-left: 25px;\r\n  margin-right: 25px;\r\n  padding-left: auto;\r\n  padding-right: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsVUFBVSxFQUFFLGlDQUFpQztBQUMvQztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTs7OztFQUlFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVLEVBQUUsaUNBQWlDO0FBQy9DO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQSxpREFBaUQ7QUFDakQ7RUFDRTs7Ozs7SUFLRSxXQUFXLEVBQUUsNkRBQTZEO0lBQzFFLFdBQVc7RUFDYjtFQUNBOztJQUVFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxrQ0FBa0MsRUFBRSx5Q0FBeUM7RUFDL0U7QUFDRjtBQUNBLGNBQWM7QUFDZDtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0EsVUFBVTtBQUNWO0VBQ0UsZUFBZTtFQUNmLFlBQVk7QUFDZDtBQUNBLGNBQWM7QUFDZDtFQUNFLGtCQUFrQjtBQUNwQjtBQUNBLFNBQVM7QUFDVDtFQUNFLGFBQWE7RUFDYiwwQ0FBMEMsRUFBRSx5Q0FBeUM7QUFDdkY7QUFDQSxpQkFBaUI7QUFDakI7RUFDRSxXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLGFBQWE7QUFDZjtBQUNBLFNBQVM7QUFDVDtFQUNFO0lBQ0UsYUFBYTtJQUNiLDhDQUE4QyxFQUFFLHlDQUF5QztFQUMzRjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7SUFDYiwwQ0FBMEMsRUFBRSx5Q0FBeUM7RUFDdkY7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2Isc0NBQXNDLEVBQUUseUNBQXlDO0VBQ25GO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLGtDQUFrQyxFQUFFLHlDQUF5QztFQUMvRTtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7SUFDYiw4QkFBOEIsRUFBRSx5Q0FBeUM7RUFDM0U7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsMEJBQTBCLEVBQUUseUNBQXlDO0VBQ3ZFO0FBQ0Y7QUFDQTtFQUNFLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLG1CQUFtQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9zdGFydC9zdGFydC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWNhcmQge1xyXG4gIHdpZHRoOiBjYWxjKDEwMCUgLSAyMDBweCk7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2MDBweCk7XHJcbn1cclxuLmJ1dHRvbi1jYXRlZ29yeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNGU0ZTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDIwJTsgLyogVGhlIHdpZHRoIGlzIDIwJSwgYnkgZGVmYXVsdCAqL1xyXG59XHJcbi5wcm9kdWN0cyB7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbn1cclxuLmZsZXgtY29udGFpbmVyLW1haW4ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLnByb2R1Y3QtY29udGFpbmVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ2OTFlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLmJ1dHRvbi1wcm9tb3Rpb24sXHJcbi5idXR0b24tbmV3cyxcclxuLmJ1dHRvbi1hYm91dHVzLFxyXG4uYnV0dG9uLWZhcSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNGU0ZTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDIwJTsgLyogVGhlIHdpZHRoIGlzIDIwJSwgYnkgZGVmYXVsdCAqL1xyXG59XHJcbi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgbWF4LXdpZHRoOiAzMDB4cDtcclxufVxyXG4uY2F0ZWdvcnktYnV0dG9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDY5MWU7XHJcbn1cclxuLnNlY29uZGFyeS1idXR0b24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4ubWF0LXRvb2xiYXIge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb250ZW50IHtcclxuICBwYWRkaW5nOiAxNnB4O1xyXG59XHJcblxyXG4uY29udGVudCA+IG1hdC1jYXJkIHtcclxuICB3aWR0aDogMjAwcHg7XHJcbn1cclxuLyogQG1lZGlhIHNjcmVlbiBhbmQgLmJ1dHRvbnMobWF4LXdpZHRoOjYwMHB4KTsgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuYnV0dG9uLWNhdGVnb3J5LFxyXG4gIC5idXR0b24tcHJvbW90aW9uLFxyXG4gIC5idXR0b24tYWJvdXR1cyxcclxuICAuYnV0dG9uLW5ld3MsXHJcbiAgLmJ1dHRvbi1mYXEge1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIFRoZSB3aWR0aCBpcyAxMDAlLCB3aGVuIHRoZSB2aWV3cG9ydCBpcyA4MDBweCBvciBzbWFsbGVyICovXHJcbiAgICBoZWlnaHQ6IDgwJTtcclxuICB9XHJcbiAgLmNhdGVnb3J5LWJ1dHRvbixcclxuICAuc2Vjb25kYXJ5LWJ1dHRvbiB7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxMCU7XHJcbiAgICB3aWR0aDogODAlO1xyXG4gIH1cclxuICAuZ3JpZCB7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyOyAvKiBDcmVhdGUgMiBjb2x1bW5zIGFuZCBhdXRvLXBsYWNlIHJvd3MgKi9cclxuICB9XHJcbn1cclxuLyoqKnNlY3Rpb24qKiovXHJcbi5leGFtcGxlLXNlY3Rpb24ge1xyXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcbm1hdC1zbGlkZXIge1xyXG4gIHdpZHRoOiAzMDBweDtcclxufVxyXG4vKipjYXJkcyoqL1xyXG4uZXhhbXBsZS1jYXJkIHtcclxuICBtaW4td2lkdGg6IDEwMCU7XHJcbiAgd2lkdGg6IDUwMHB4O1xyXG59XHJcbi8qKnBhZ2luYXRvcioqL1xyXG4ubWF0LWZvcm0tZmllbGQge1xyXG4gIG1hcmdpbi1yaWdodDogMTJweDtcclxufVxyXG4vKipncmlkKiovXHJcbi5ncmlkIHtcclxuICBkaXNwbGF5OiBncmlkO1xyXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjsgLyogQ3JlYXRlIDIgY29sdW1ucyBhbmQgYXV0by1wbGFjZSByb3dzICovXHJcbn1cclxuLyoqZXhhbXBsZSBjYXJkKiovXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIHdpZHRoOiAxMjAlO1xyXG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgaGVpZ2h0OiAzNTBweDtcclxufVxyXG4vKipncmlkKiovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE5MjBweCkge1xyXG4gIC5ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmciAxZnIgMWZyOyAvKiBDcmVhdGUgMiBjb2x1bW5zIGFuZCBhdXRvLXBsYWNlIHJvd3MgKi9cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQyMHB4KSB7XHJcbiAgLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmcjsgLyogQ3JlYXRlIDIgY29sdW1ucyBhbmQgYXV0by1wbGFjZSByb3dzICovXHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjBweCkge1xyXG4gIC5ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnIgMWZyIDFmcjsgLyogQ3JlYXRlIDIgY29sdW1ucyBhbmQgYXV0by1wbGFjZSByb3dzICovXHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7IC8qIENyZWF0ZSAyIGNvbHVtbnMgYW5kIGF1dG8tcGxhY2Ugcm93cyAqL1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gIC5ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7IC8qIENyZWF0ZSAyIGNvbHVtbnMgYW5kIGF1dG8tcGxhY2Ugcm93cyAqL1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MTBweCkge1xyXG4gIC5ncmlkIHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjsgLyogQ3JlYXRlIDIgY29sdW1ucyBhbmQgYXV0by1wbGFjZSByb3dzICovXHJcbiAgfVxyXG59XHJcbi5idXR0b24ge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ2OTFlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiAyNXB4O1xyXG4gIG1hcmdpbi1yaWdodDogMjVweDtcclxuICBwYWRkaW5nLWxlZnQ6IGF1dG87XHJcbiAgcGFkZGluZy1yaWdodDogYXV0bztcclxufVxyXG4iXX0= */";
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


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_data_services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/data/services/products.service */
    "./src/app/data/services/products.service.ts");

    var StartComponent = /*#__PURE__*/function () {
      function StartComponent( // private routeSub: Subscription,
      formBuilder, productService, router) {
        _classCallCheck(this, StartComponent);

        this.formBuilder = formBuilder;
        this.productService = productService;
        this.router = router;
        this.loading = true;
        this.price = 0;
        this.length = 100;
        this.pageSizeOptions = [5, 10, 25, 100];
        this.tableOffset = 0;
        this.pageNumber = 1;
        this.offset = 0;
        this.pageSize = 10;
        this.count = 0;
        this.sortColumn = "name";
        this.sortType = "asc";
        this.productCatalogList = [];
        this.products = [];
        this.toppings = formBuilder.group({
          pepperoni: false,
          extracheese: false,
          mushroom: false
        });
      } // this.routeSub = this.route.params.subscribe((params) => {
      //   this.category = params["category"]; //obtenemos el id del route para usarlo en servicios
      // });


      _createClass(StartComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createFilterForm();
          this.getListProducts();
        }
      }, {
        key: "createFilterForm",
        value: function createFilterForm() {
          this.firstFilterForm = this.formBuilder.group({
            autocomplete: [""],
            idproductcatalog: [""],
            productbrand: [""],
            productmodel: [""],
            unitprice: 0
          });
        }
        /**
         * Get Products
         */

      }, {
        key: "getListProducts",
        value: function getListProducts() {
          var _this = this;

          var firstFilter = this.firstFilterForm.value;
          this.productService.getProductCatalog1(firstFilter.idproductcatalog, firstFilter.productbrand, firstFilter.productmodel, firstFilter.unitprice).subscribe(function (response) {
            var body = response.body;
            var status = response.status;
            _this.loading = false;

            switch (status) {
              case 200:
                _this.products = body.listProductCatalog;
                console.log(_this.products);
                break;

              default:
                break;
            }
          }, function (error) {
            _this.loading = true;
            console.log("Error al traer los productos");
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
        /**fin pagination */

      }, {
        key: "comprobar",
        value: function comprobar() {
          console.log(this.products);
        }
      }, {
        key: "gotoproduct",
        value: function gotoproduct(product) {
          this.router.navigateByUrl("product/${product}");
        }
      }]);

      return StartComponent;
    }();

    StartComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: src_app_data_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteTrigger"], {
      read: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteTrigger"],
      "static": false
    })], StartComponent.prototype, "autocomplete", void 0);
    StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-start",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./start.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/start/start.component.html"))["default"],
      encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./start.component.css */
      "./src/app/modules/home/pages/start/start.component.css"))["default"]]
    })], StartComponent);
    /***/
  }
}]);
//# sourceMappingURL=modules-home-home-module-es5.js.map