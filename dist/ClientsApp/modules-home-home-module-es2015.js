(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-home-home-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/not-found-product/not-found-product.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/not-found-product/not-found-product.component.html ***!
  \*****************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/products/products.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/products/products.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div>\n  <div *ngIf=\"products\">\n    <div class=\"flex-container-main mt-3\">\n      <ng-container\n        style=\"grid-auto-columns: auto\"\n        *ngFor=\"let item of products\"\n      > -->\n<div style=\"background-color: white\">\n  <div class=\"products-router-container\">\n    <a style=\"text-decoration: none\" href=\"category/item.category\"\n      >item.category</a\n    >\n    <span class=\"material-icons\"> arrow_forward_ios </span>\n    <a style=\"text-decoration: none\" href=\"\">item.brand</a>\n    <span class=\"material-icons\"> arrow_forward_ios </span>\n    <a style=\"text-decoration: none\" href=\"product/item.productId\"\n      >item.name}</a\n    >\n  </div>\n  <div style=\"background-color: #ed691e; height: 1vh\"></div>\n  <div class=\"products-details-container\">\n    <!-- /***left***/ -->\n    <div class=\"box1\">\n      <img class=\"product-image\" alt=\"item.name\" src=\"item.url\" />\n    </div>\n    <!-- end left -->\n    <!-- right -->\n    <div>\n      <div class=\"products-details\">\n        <h3>item.name</h3>\n        <p>Stock:&nbsp;item.stock</p>\n        <p>Marca:&nbsp;item.brand</p>\n        <p>Descripcion:&nbsp;item.description</p>\n        <p style=\"color: red\">Precio:&nbsp;item.price</p>\n      </div>\n      <button>pal carrito</button>\n    </div>\n    <!-- end right -->\n  </div>\n</div>\n<!-- </ng-container>\n    </div>\n  </div>\n</div> -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/start/start.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/start/start.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: #d3d3d3\">\r\n  <nav\r\n    style=\"padding-top: 20px\"\r\n    class=\"navbar navbar-expand-lg navbar-light bg-light\"\r\n  >\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      data-toggle=\"collapse\"\r\n      data-target=\"#navbarNavDropdown\"\r\n      aria-controls=\"navbarNavDropdown\"\r\n      aria-expanded=\"false\"\r\n      aria-label=\"Toggle navigation\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            MARCA\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <section class=\"example-section\">\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n            </section>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            PRECIO\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <section class=\"example-section\">\r\n              <mat-slider\r\n                thumbLabel\r\n                [displayWith]=\"formatLabel\"\r\n                tickInterval=\"1000\"\r\n                step=\"1000\"\r\n                min=\"0\"\r\n                max=\"10000\"\r\n                aria-label=\"units\"\r\n              ></mat-slider>\r\n            </section>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            ENVIO\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <section class=\"example-section\">\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n            </section>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            ORDENAR POR\r\n          </a>\r\n          <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\r\n            <section class=\"example-section\">\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Check me!</mat-checkbox>\r\n              </li>\r\n            </section>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--  -->\r\n</div>\r\n<!-- productos -->\r\n<div>\r\n  <div *ngIf=\"loading === true; else elseBlock\">\r\n    <div class=\"container justify-content-center\" style=\"padding: 10%\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"justify-content-center\">\r\n          <mat-progress-spinner\r\n            class=\"justify-content-center\"\r\n            color=\"primary\"\r\n            mode=\"indeterminate\"\r\n          >\r\n          </mat-progress-spinner>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <ng-template #elseBlock>\r\n    <div class=\"products\">\r\n      <div *ngIf=\"products\">\r\n        <div class=\"grid flex-container-main mt-3\">\r\n          <ng-container\r\n            style=\"grid-auto-columns: auto\"\r\n            *ngFor=\"let item of products\"\r\n          >\r\n            <mat-card class=\"example-card\">\r\n              <img\r\n                style=\"padding: 10px\"\r\n                mat-card-image\r\n                width=\"200px\"\r\n                height=\"150px\"\r\n                src=\"{{ item.urlimage }}\"\r\n                alt=\"{{ item.productModel }}\"\r\n              />\r\n              <mat-card-header\r\n                style=\"padding: 0%; margin: -15px; justify-content: left\"\r\n              >\r\n                <mat-card-title>\r\n                  <div style=\"max-width: 200px; min-width: 200px\">\r\n                    <p\r\n                      style=\"\r\n                        font-size: small;\r\n                        text-size-adjust: auto;\r\n                        width: 20ch;\r\n                        overflow: hidden;\r\n                        white-space: nowrap;\r\n                        text-overflow: ellipsis;\r\n                      \"\r\n                    >\r\n                      {{ item.productModel }}\r\n                    </p>\r\n                  </div>\r\n                </mat-card-title>\r\n                <mat-card-subtitle style=\"color: red\"\r\n                  >S/. {{ item.unitprice }}</mat-card-subtitle\r\n                >\r\n              </mat-card-header>\r\n              <mat-card-content>\r\n                <div>\r\n                  <p style=\"color: #868686\">Unidades:FALTA CALCULAR</p>\r\n                </div>\r\n              </mat-card-content>\r\n              <mat-card-actions class=\"justify-content-center\">\r\n                <div class=\"button center justify-content-center\">\r\n                  <a href=\"/product/{{ item.idProductCatalog }}\">\r\n                    <p\r\n                      style=\"\r\n                        color: white;\r\n                        font-weight: bold;\r\n                        font-size: small;\r\n                        text-overflow: ellipsis;\r\n                      \"\r\n                    >\r\n                      DETALLES\r\n                    </p></a\r\n                  >\r\n                </div>\r\n                <div class=\"button center justify-content-center\">\r\n                  <p\r\n                    style=\"\r\n                      color: white;\r\n                      font-weight: bold;\r\n                      font-size: small;\r\n                      text-overflow: ellipsis;\r\n                    \"\r\n                  >\r\n                    AÑADIR A CARRITO\r\n                  </p>\r\n                </div>\r\n              </mat-card-actions>\r\n            </mat-card>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-template>\r\n</div>\r\n<!-- fin productos -->\r\n<!-- paginator -->\r\n\r\n<mat-paginator\r\n  [length]=\"length\"\r\n  [pageSize]=\"pageSize\"\r\n  [pageSizeOptions]=\"pageSizeOptions\"\r\n  (page)=\"pageEvent = $event\"\r\n  aria-label=\"Select page\"\r\n>\r\n</mat-paginator>\r\n\r\n<div *ngIf=\"pageEvent\">\r\n  <h5>Page Change Event Properties</h5>\r\n  <div>List length: {{ pageEvent.length }}</div>\r\n  <div>Page size: {{ pageEvent.pageSize }}</div>\r\n  <div>Page index: {{ pageEvent.pageIndex }}</div>\r\n</div>\r\n<!-- fin paginator -->\r\n");

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

/***/ "./src/app/modules/home/home-routing.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: routes, HomeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutingModule", function() { return HomeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/start/start.component */ "./src/app/modules/home/pages/start/start.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _pages_not_found_product_not_found_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/not-found-product/not-found-product.component */ "./src/app/modules/home/pages/not-found-product/not-found-product.component.ts");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/products/products.component */ "./src/app/modules/home/pages/products/products.component.ts");







const routes = [
    {
        path: "",
        component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"],
    },
    { path: "category/:category", component: _pages_start_start_component__WEBPACK_IMPORTED_MODULE_2__["StartComponent"] },
    {
        path: "product/:id",
        component: _pages_products_products_component__WEBPACK_IMPORTED_MODULE_6__["ProductsComponent"],
    },
    {
        path: "not-fount",
        component: _pages_not_found_product_not_found_product_component__WEBPACK_IMPORTED_MODULE_5__["NotFoundProductComponent"],
    },
];
let HomeRoutingModule = class HomeRoutingModule {
};
HomeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
    })
], HomeRoutingModule);



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _pages_start_start_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/start/start.component */ "./src/app/modules/home/pages/start/start.component.ts");
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home-routing.module */ "./src/app/modules/home/home-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _pages_not_found_product_not_found_product_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/not-found-product/not-found-product.component */ "./src/app/modules/home/pages/not-found-product/not-found-product.component.ts");
/* harmony import */ var _pages_products_products_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/products/products.component */ "./src/app/modules/home/pages/products/products.component.ts");
/* harmony import */ var ngx_avatar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-avatar */ "./node_modules/ngx-avatar/fesm2015/ngx-avatar.js");









let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], _pages_not_found_product_not_found_product_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundProductComponent"], _pages_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], ngx_avatar__WEBPACK_IMPORTED_MODULE_8__["AvatarModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"]],
    })
], HomeModule);



/***/ }),

/***/ "./src/app/modules/home/pages/not-found-product/not-found-product.component.css":
/*!**************************************************************************************!*\
  !*** ./src/app/modules/home/pages/not-found-product/not-found-product.component.css ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9ub3QtZm91bmQtcHJvZHVjdC9ub3QtZm91bmQtcHJvZHVjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/home/pages/not-found-product/not-found-product.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/modules/home/pages/not-found-product/not-found-product.component.ts ***!
  \*************************************************************************************/
/*! exports provided: NotFoundProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundProductComponent", function() { return NotFoundProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let NotFoundProductComponent = class NotFoundProductComponent {
    constructor() { }
    ngOnInit() { }
};
NotFoundProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-not-found-product",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./not-found-product.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/not-found-product/not-found-product.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./not-found-product.component.css */ "./src/app/modules/home/pages/not-found-product/not-found-product.component.css")).default]
    })
], NotFoundProductComponent);



/***/ }),

/***/ "./src/app/modules/home/pages/products/products.component.css":
/*!********************************************************************!*\
  !*** ./src/app/modules/home/pages/products/products.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".products-details-container {\r\n  display: flex;\r\n  padding: 1%;\r\n  padding-left: 10%;\r\n  padding-right: 10%;\r\n}\r\n.box1 {\r\n  align-items: center;\r\n  text-align: center;\r\n  justify-content: center;\r\n  text-shadow: #ed691e;\r\n}\r\n.product-image {\r\n  max-width: 900px;\r\n  height: auto;\r\n  padding-right: 10px;\r\n}\r\n.products-details {\r\n  padding: 5%;\r\n  vertical-align: auto;\r\n  align-items: center;\r\n  text-align: left;\r\n  text-shadow: #ed691e;\r\n  justify-content: center;\r\n}\r\n.products-router-container {\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  background-color: #d3d3d3;\r\n  padding: 2vh;\r\n}\r\n.material-icons {\r\n  color: #ed691e;\r\n}\r\n@media screen and (max-width: 700px) {\r\n  .products-details-container {\r\n    display: inline;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsV0FBVztFQUNYLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBQ0E7RUFDRTtJQUNFLGVBQWU7RUFDakI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9wYWdlcy9wcm9kdWN0cy9wcm9kdWN0cy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2R1Y3RzLWRldGFpbHMtY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIHBhZGRpbmc6IDElO1xyXG4gIHBhZGRpbmctbGVmdDogMTAlO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwJTtcclxufVxyXG4uYm94MSB7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgdGV4dC1zaGFkb3c6ICNlZDY5MWU7XHJcbn1cclxuLnByb2R1Y3QtaW1hZ2Uge1xyXG4gIG1heC13aWR0aDogOTAwcHg7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbn1cclxuLnByb2R1Y3RzLWRldGFpbHMge1xyXG4gIHBhZGRpbmc6IDUlO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBhdXRvO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB0ZXh0LXNoYWRvdzogI2VkNjkxZTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4ucHJvZHVjdHMtcm91dGVyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xyXG4gIHBhZGRpbmc6IDJ2aDtcclxufVxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGNvbG9yOiAjZWQ2OTFlO1xyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDcwMHB4KSB7XHJcbiAgLnByb2R1Y3RzLWRldGFpbHMtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICB9XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/modules/home/pages/products/products.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/modules/home/pages/products/products.component.ts ***!
  \*******************************************************************/
/*! exports provided: ProductsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductsComponent", function() { return ProductsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ProductsComponent = class ProductsComponent {
    constructor() { }
    // this.routeSub = this.route.params.subscribe((params) => {
    //   this.id = params["id"]; //obtenemos el id del route para usarlo en servicios
    // });
    ngOnInit() {
        console.log("entramos");
    }
};
ProductsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-products",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./products.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/products/products.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./products.component.css */ "./src/app/modules/home/pages/products/products.component.css")).default]
    })
], ProductsComponent);



/***/ }),

/***/ "./src/app/modules/home/pages/start/start.component.css":
/*!**************************************************************!*\
  !*** ./src/app/modules/home/pages/start/start.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n  width: calc(100% - 200px);\r\n  height: calc(100% - 600px);\r\n}\r\n.button-category {\r\n  background-color: #4f4e4e;\r\n  height: 80px;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 20%; /* The width is 20%, by default */\r\n}\r\n.products {\r\n  padding-bottom: 10px;\r\n}\r\n.flex-container-main {\r\n  display: flex;\r\n}\r\n.product-container {\r\n  background-color: #ed691e;\r\n  border-radius: 20px;\r\n}\r\n.button-promotion,\r\n.button-news,\r\n.button-aboutus,\r\n.button-faq {\r\n  background-color: #4f4e4e;\r\n  height: 80px;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 20%; /* The width is 20%, by default */\r\n}\r\n.flex-container {\r\n  max-width: 300xp;\r\n}\r\n.category-button {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 40px;\r\n  margin: 20px;\r\n  color: white;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  background-color: #ed691e;\r\n}\r\n.secondary-button {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 40px;\r\n  background-color: #e9e9e9;\r\n  margin: 20px;\r\n  color: black;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n}\r\n.mat-toolbar {\r\n  width: 100%;\r\n}\r\n.content {\r\n  padding: 16px;\r\n}\r\n.content > mat-card {\r\n  width: 200px;\r\n}\r\n/* @media screen and .buttons(max-width:600px); */\r\n@media screen and (max-width: 800px) {\r\n  .button-category,\r\n  .button-promotion,\r\n  .button-aboutus,\r\n  .button-news,\r\n  .button-faq {\r\n    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */\r\n    height: 80%;\r\n  }\r\n  .category-button,\r\n  .secondary-button {\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    width: 80%;\r\n  }\r\n  .grid {\r\n    grid-template-columns: 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n/***section***/\r\n.example-section {\r\n  margin-left: 20px;\r\n}\r\nmat-slider {\r\n  width: 300px;\r\n}\r\n/**cards**/\r\n.example-card {\r\n  max-width: 200px;\r\n  margin-left: auto;\r\n  margin-right: auto;\r\n}\r\n/**paginator**/\r\n.mat-form-field {\r\n  margin-right: 12px;\r\n}\r\n/**grid**/\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n}\r\n/**example card**/\r\n.example-card {\r\n  width: 120%;\r\n  margin-bottom: 10px;\r\n  height: 350px;\r\n}\r\n/**grid**/\r\n@media screen and (max-width: 1920px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 1420px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 1020px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 800px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 620px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 410px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n.button {\r\n  cursor: pointer;\r\n  background-color: #ed691e;\r\n  border-radius: 100px;\r\n  margin-left: 25px;\r\n  margin-right: 25px;\r\n  padding-left: auto;\r\n  padding-right: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsVUFBVSxFQUFFLGlDQUFpQztBQUMvQztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTs7OztFQUlFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVLEVBQUUsaUNBQWlDO0FBQy9DO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQSxpREFBaUQ7QUFDakQ7RUFDRTs7Ozs7SUFLRSxXQUFXLEVBQUUsNkRBQTZEO0lBQzFFLFdBQVc7RUFDYjtFQUNBOztJQUVFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxrQ0FBa0MsRUFBRSx5Q0FBeUM7RUFDL0U7QUFDRjtBQUNBLGNBQWM7QUFDZDtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0EsVUFBVTtBQUNWO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQSxjQUFjO0FBQ2Q7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2IsMENBQTBDLEVBQUUseUNBQXlDO0FBQ3ZGO0FBQ0EsaUJBQWlCO0FBQ2pCO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQSxTQUFTO0FBQ1Q7RUFDRTtJQUNFLGFBQWE7SUFDYiw4Q0FBOEMsRUFBRSx5Q0FBeUM7RUFDM0Y7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsMENBQTBDLEVBQUUseUNBQXlDO0VBQ3ZGO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNDQUFzQyxFQUFFLHlDQUF5QztFQUNuRjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7SUFDYixrQ0FBa0MsRUFBRSx5Q0FBeUM7RUFDL0U7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsOEJBQThCLEVBQUUseUNBQXlDO0VBQzNFO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLDBCQUEwQixFQUFFLHlDQUF5QztFQUN2RTtBQUNGO0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvcGFnZXMvc3RhcnQvc3RhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjAwcHgpO1xyXG59XHJcbi5idXR0b24tY2F0ZWdvcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjRlNGU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyMCU7IC8qIFRoZSB3aWR0aCBpcyAyMCUsIGJ5IGRlZmF1bHQgKi9cclxufVxyXG4ucHJvZHVjdHMge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mbGV4LWNvbnRhaW5lci1tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5wcm9kdWN0LWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkNjkxZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5idXR0b24tcHJvbW90aW9uLFxyXG4uYnV0dG9uLW5ld3MsXHJcbi5idXR0b24tYWJvdXR1cyxcclxuLmJ1dHRvbi1mYXEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjRlNGU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyMCU7IC8qIFRoZSB3aWR0aCBpcyAyMCUsIGJ5IGRlZmF1bHQgKi9cclxufVxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMzAweHA7XHJcbn1cclxuLmNhdGVnb3J5LWJ1dHRvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ2OTFlO1xyXG59XHJcbi5zZWNvbmRhcnktYnV0dG9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLm1hdC10b29sYmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmNvbnRlbnQgPiBtYXQtY2FyZCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIC5idXR0b25zKG1heC13aWR0aDo2MDBweCk7ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmJ1dHRvbi1jYXRlZ29yeSxcclxuICAuYnV0dG9uLXByb21vdGlvbixcclxuICAuYnV0dG9uLWFib3V0dXMsXHJcbiAgLmJ1dHRvbi1uZXdzLFxyXG4gIC5idXR0b24tZmFxIHtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBUaGUgd2lkdGggaXMgMTAwJSwgd2hlbiB0aGUgdmlld3BvcnQgaXMgODAwcHggb3Igc21hbGxlciAqL1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgfVxyXG4gIC5jYXRlZ29yeS1idXR0b24sXHJcbiAgLnNlY29uZGFyeS1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbiAgLmdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjsgLyogQ3JlYXRlIDIgY29sdW1ucyBhbmQgYXV0by1wbGFjZSByb3dzICovXHJcbiAgfVxyXG59XHJcbi8qKipzZWN0aW9uKioqL1xyXG4uZXhhbXBsZS1zZWN0aW9uIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG5tYXQtc2xpZGVyIHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuLyoqY2FyZHMqKi9cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgbWF4LXdpZHRoOiAyMDBweDtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuLyoqcGFnaW5hdG9yKiovXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcbi8qKmdyaWQqKi9cclxuLmdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyOyAvKiBDcmVhdGUgMiBjb2x1bW5zIGFuZCBhdXRvLXBsYWNlIHJvd3MgKi9cclxufVxyXG4vKipleGFtcGxlIGNhcmQqKi9cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgd2lkdGg6IDEyMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcbi8qKmdyaWQqKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkyMHB4KSB7XHJcbiAgLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7IC8qIENyZWF0ZSAyIGNvbHVtbnMgYW5kIGF1dG8tcGxhY2Ugcm93cyAqL1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDIwcHgpIHtcclxuICAuZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyOyAvKiBDcmVhdGUgMiBjb2x1bW5zIGFuZCBhdXRvLXBsYWNlIHJvd3MgKi9cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyMHB4KSB7XHJcbiAgLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyOyAvKiBDcmVhdGUgMiBjb2x1bW5zIGFuZCBhdXRvLXBsYWNlIHJvd3MgKi9cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjsgLyogQ3JlYXRlIDIgY29sdW1ucyBhbmQgYXV0by1wbGFjZSByb3dzICovXHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XHJcbiAgLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgLyogQ3JlYXRlIDIgY29sdW1ucyBhbmQgYXV0by1wbGFjZSByb3dzICovXHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMHB4KSB7XHJcbiAgLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAvKiBDcmVhdGUgMiBjb2x1bW5zIGFuZCBhdXRvLXBsYWNlIHJvd3MgKi9cclxuICB9XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDY5MWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogYXV0bztcclxuICBwYWRkaW5nLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/modules/home/pages/start/start.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/home/pages/start/start.component.ts ***!
  \*************************************************************/
/*! exports provided: StartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StartComponent", function() { return StartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_data_services_products_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/data/services/products.service */ "./src/app/data/services/products.service.ts");






let StartComponent = class StartComponent {
    constructor(
    // private routeSub: Subscription,
    formBuilder, productService, router) {
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
            mushroom: false,
        });
    }
    // this.routeSub = this.route.params.subscribe((params) => {
    //   this.category = params["category"]; //obtenemos el id del route para usarlo en servicios
    // });
    ngOnInit() {
        this.createFilterForm();
        this.getListProducts();
    }
    createFilterForm() {
        this.firstFilterForm = this.formBuilder.group({
            autocomplete: [""],
            idproductcatalog: [""],
            productbrand: [""],
            productmodel: [""],
            unitprice: 0,
        });
    }
    /**
     * Get Products
     */
    getListProducts() {
        let firstFilter = this.firstFilterForm.value;
        this.productService
            .getProductCatalog1(firstFilter.idproductcatalog, firstFilter.productbrand, firstFilter.productmodel, firstFilter.unitprice)
            .subscribe((response) => {
            let body = response.body;
            let status = response.status;
            this.loading = false;
            switch (status) {
                case 200:
                    this.products = body.listProductCatalog;
                    console.log(this.products);
                    break;
                default:
                    break;
            }
        }, (error) => {
            this.loading = true;
            console.log("Error al traer los productos");
        });
    }
    /**Precio**/
    formatLabel(value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + "k";
        }
        return value;
    }
    setPageSizeOptions(setPageSizeOptionsInput) {
        if (setPageSizeOptionsInput) {
            this.pageSizeOptions = setPageSizeOptionsInput
                .split(",")
                .map((str) => +str);
        }
    }
    /**fin pagination */
    comprobar() {
        console.log(this.products);
    }
    gotoproduct(product) {
        this.router.navigateByUrl("product/${product}");
    }
};
StartComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_data_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteTrigger"], {
        read: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteTrigger"],
        static: false,
    })
], StartComponent.prototype, "autocomplete", void 0);
StartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: "app-start",
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./start.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/start/start.component.html")).default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewEncapsulation"].None,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./start.component.css */ "./src/app/modules/home/pages/start/start.component.css")).default]
    })
], StartComponent);



/***/ })

}]);
//# sourceMappingURL=modules-home-home-module-es2015.js.map