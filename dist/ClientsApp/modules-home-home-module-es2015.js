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
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div *ngIf=\"loading\">\r\n  <div class=\"container justify-content-center\" style=\"padding: 10%\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"justify-content-center\">\r\n        <mat-progress-spinner\r\n          class=\"justify-content-center\"\r\n          color=\"primary\"\r\n          mode=\"indeterminate\"\r\n        >\r\n        </mat-progress-spinner>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div> -->\r\n<div class=\"bg-white\">\r\n  <div class=\"mt-3 bg-white\">\r\n    <div>\r\n      <div class=\"products-router-container\">\r\n        <a\r\n          style=\"text-decoration: none; color: #ed691e\"\r\n          href=\"/category/{{ defaultProduct?.idProductCatalog }}\"\r\n          >Categoria</a\r\n        >\r\n        <span class=\"material-icons\"> arrow_forward_ios </span>\r\n        <a style=\"text-decoration: none; color: #ed691e\" href=\"\">{{\r\n          defaultProduct?.productBrand\r\n        }}</a>\r\n        <span class=\"material-icons\"> arrow_forward_ios </span>\r\n        <a\r\n          style=\"text-decoration: none; color: #ed691e\"\r\n          href=\"/product/{{ defaultProduct?.idProductCatalog }}\"\r\n          >{{ defaultProduct?.productModel }}</a\r\n        >\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div style=\"background-color: #ed691e; height: 1vh\"></div>\r\n  <div class=\"container\">\r\n    <div class=\"row mt-3 mb-3\">\r\n      <div class=\"col-md-6\">\r\n        <div *ngIf=\"isLoading\" class=\"img-fluid\">\r\n          <img [src]=\"loader\" class=\"img-fluid\" />\r\n        </div>\r\n        <img\r\n          class=\"img-fluid\"\r\n          [src]=\"defaultProduct?.urlimage\"\r\n          [ngStyle]=\"{\r\n            visibility: isLoading ? 'hidden' : ''\r\n          }\"\r\n          (load)=\"hideLoader()\"\r\n          (error)=\"hideLoader()\"\r\n        />\r\n      </div>\r\n      <div class=\"col-md-6 my-auto justify-content-center\">\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <h3>{{ defaultProduct?.productModel }}</h3>\r\n          </div>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">Stock:</div>\r\n          <div class=\"col-5\">20+ Unidades</div>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">Marca:</div>\r\n          <div class=\"col-5\">{{ defaultProduct?.productBrand }}</div>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">Modelo:</div>\r\n          <div class=\"col-5\">{{ defaultProduct?.idProductCatalog }}</div>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n        <div class=\"row\">\r\n          <div class=\"col-4\">Descripción:</div>\r\n          <div class=\"col-8 justify-content-center\">\r\n            {{ defaultProduct?.description }}\r\n          </div>\r\n        </div>\r\n        <mat-divider></mat-divider>\r\n        <div class=\"row\">\r\n          <div class=\"col-3\">Precio</div>\r\n          <div class=\"col-5\">\r\n            <h4 style=\"color: red\">S/.{{ defaultProduct?.unitprice }}</h4>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col-md-12\">\r\n            <button\r\n              class=\"float-center\"\r\n              style=\"color: white\"\r\n              mat-raised-button\r\n              color=\"primary\"\r\n              disable=\"true\"\r\n              (click)=\"addToCart()\"\r\n            >\r\n              Añadir al carrito\r\n              <mat-icon style=\"color: white\">add_shopping_cart</mat-icon>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/start/start.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/home/pages/start/start.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"background-color: #d3d3d3\">\r\n  <nav\r\n    style=\"padding-top: 20px\"\r\n    class=\"navbar navbar-expand-lg navbar-light bg-light\"\r\n  >\r\n    <button\r\n      class=\"navbar-toggler\"\r\n      type=\"button\"\r\n      data-toggle=\"collapse\"\r\n      data-target=\"#navbarNavDropdown\"\r\n      aria-controls=\"navbarNavDropdown\"\r\n      aria-expanded=\"false\"\r\n      aria-label=\"Toggle navigation\"\r\n    >\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            MARCA\r\n          </a>\r\n          <div\r\n            class=\"bg-filters dropdown-menu\"\r\n            aria-labelledby=\"navbarDropdownMenuLink\"\r\n          >\r\n            <section class=\"example-section\">\r\n              <div *ngFor=\"let item of Brands; let i = index\">\r\n                <mat-checkbox\r\n                  [checked]=\"selected === i\"\r\n                  (change)=\"selected = i\"\r\n                  >{{ item.BrandName }}</mat-checkbox\r\n                >\r\n              </div>\r\n            </section>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            PRECIO\r\n          </a>\r\n          <div\r\n            class=\"bg-filters dropdown-menu\"\r\n            aria-labelledby=\"navbarDropdownMenuLink\"\r\n          >\r\n            <section class=\"example-section1\">\r\n              <div>\r\n                <mat-form-field\r\n                  class=\"w-100\"\r\n                  appearance=\"fill\"\r\n                  color=\"primary\"\r\n                  floatLabel=\"always\"\r\n                >\r\n                  <mat-label>Desde</mat-label>\r\n                  <input matInput type=\"number\" [(ngModel)]=\"minValue\" />\r\n                  <span matPrefix>S/.&nbsp;</span>\r\n                </mat-form-field>\r\n              </div>\r\n              <div>\r\n                <mat-form-field\r\n                  class=\"w-100\"\r\n                  appearance=\"fill\"\r\n                  floatLabel=\"always\"\r\n                >\r\n                  <mat-label>Hasta</mat-label>\r\n                  <input matInput type=\"number\" [(ngModel)]=\"maxValue\" />\r\n                  <span matPrefix>S/.&nbsp;</span>\r\n                </mat-form-field>\r\n              </div>\r\n              <ngx-slider\r\n                [(value)]=\"minValue\"\r\n                [(highValue)]=\"maxValue\"\r\n                [options]=\"options\"\r\n              ></ngx-slider>\r\n              <div class=\"float-right\" (click)=\"restablecer()\">Restablecer</div>\r\n            </section>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            ENVIO\r\n          </a>\r\n          <div\r\n            class=\"bg-filters dropdown-menu\"\r\n            aria-labelledby=\"navbarDropdownMenuLink\"\r\n          >\r\n            <section class=\"example-section\">\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Gratis</mat-checkbox>\r\n              </li>\r\n              <li>\r\n                <mat-checkbox class=\"example-margin\">Terrestre</mat-checkbox>\r\n              </li>\r\n            </section>\r\n          </div>\r\n        </li>\r\n        <li class=\"nav-item dropdown\">\r\n          <a\r\n            class=\"nav-link dropdown-toggle\"\r\n            href=\"#\"\r\n            id=\"navbarDropdownMenuLink\"\r\n            data-toggle=\"dropdown\"\r\n            aria-haspopup=\"true\"\r\n            aria-expanded=\"false\"\r\n          >\r\n            ORDENAR POR\r\n          </a>\r\n          <div\r\n            class=\"bg-filters dropdown-menu\"\r\n            aria-labelledby=\"navbarDropdownMenuLink\"\r\n          >\r\n            <section class=\"example-section w-auto\">\r\n              <div\r\n                style=\"width: 200px\"\r\n                *ngFor=\"let item of OrderBy; let i = index\"\r\n              >\r\n                <mat-checkbox\r\n                  [checked]=\"selected === i\"\r\n                  (change)=\"selected = i\"\r\n                  >{{ item.OptionOrderName }}</mat-checkbox\r\n                >\r\n              </div>\r\n            </section>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n  <!--  -->\r\n</div>\r\n<!-- productos -->\r\n\r\n<div *ngIf=\"loading; else elseBlock\">\r\n  <div class=\"container justify-content-center\" style=\"padding: 10%\">\r\n    <div class=\"row justify-content-center\">\r\n      <div class=\"justify-content-center\">\r\n        <mat-progress-spinner\r\n          class=\"justify-content-center\"\r\n          color=\"primary\"\r\n          mode=\"indeterminate\"\r\n        >\r\n        </mat-progress-spinner>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<ng-template #elseBlock>\r\n  <div class=\"container\">\r\n    <div class=\"row justify-content-center mt-2 mb-2\">\r\n      <div *ngFor=\"let item of products\">\r\n        <div class=\"col-3 mt-1 mb-1 justify-content-center\">\r\n          <mat-card style=\"width: 240px\">\r\n            <mat-card-title align=\"center\" style=\"font-size: small\">\r\n              {{ item.productModel }}\r\n            </mat-card-title>\r\n            <mat-card-subtitle align=\"center\" color=\"primary\">\r\n              S/.{{ item.unitprice }}\r\n            </mat-card-subtitle>\r\n            <mat-card-content align=\"center\">\r\n              <div *ngIf=\"isLoading\">\r\n                <img mat-card-lg-image [src]=\"loader\" />\r\n              </div>\r\n              <img\r\n                src=\"{{ item.urlimage }}\"\r\n                mat-card-lg-image\r\n                [ngStyle]=\"{\r\n                  visibility: isLoading ? 'hidden' : ''\r\n                }\"\r\n                (load)=\"hideLoader()\"\r\n                (error)=\"hideLoader()\"\r\n              />\r\n            </mat-card-content>\r\n            <mat-card-actions align=\"center\">\r\n              <button\r\n                (click)=\"gotoproduct(item.id)\"\r\n                class=\"col-8 m-1\"\r\n                mat-stroked-button\r\n                color=\"accent\"\r\n              >\r\n                Detalles\r\n                <mat-icon>dehaze</mat-icon>\r\n              </button>\r\n              <button\r\n                (click)=\"openCart(item)\"\r\n                class=\"col-8 m-1\"\r\n                mat-flat-button\r\n                style=\"color: white\"\r\n                color=\"accent\"\r\n              >\r\n                Agregar\r\n                <mat-icon>add_shopping_cart</mat-icon>\r\n              </button>\r\n            </mat-card-actions>\r\n          </mat-card>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n<div *ngIf=\"NoItemMessage\">\r\n  <div class=\"container justify-content-center mt-5\">\r\n    <div class=\"row justify-content-center m-5\">\r\n      <div style=\"min-height: 440px\" class=\"justify-content-center m-1\">\r\n        No se han encontrado resultados que coincidan con tu criterio de\r\n        búsqueda.\r\n        <mat-icon>new_releases</mat-icon>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<!-- fin productos -->\r\n<!-- paginator -->\r\n\r\n<mat-paginator\r\n  #paginator\r\n  [length]=\"length\"\r\n  [pageSize]=\"pageSize\"\r\n  [pageSizeOptions]=\"pageSizeOptions\"\r\n  (page)=\"getListProducts($event)\"\r\n  aria-label=\"Select page\"\r\n>\r\n</mat-paginator>\r\n<!-- fin paginator -->\r\n");

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
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "./node_modules/@angular-slider/ngx-slider/fesm2015/angular-slider-ngx-slider.js");










let HomeModule = class HomeModule {
};
HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_pages_start_start_component__WEBPACK_IMPORTED_MODULE_3__["StartComponent"], _pages_not_found_product_not_found_product_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundProductComponent"], _pages_products_products_component__WEBPACK_IMPORTED_MODULE_7__["ProductsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], ngx_avatar__WEBPACK_IMPORTED_MODULE_8__["AvatarModule"], _home_routing_module__WEBPACK_IMPORTED_MODULE_4__["HomeRoutingModule"], _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_9__["NgxSliderModule"]],
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
/* harmony default export */ __webpack_exports__["default"] = (".products-router-container {\r\n  display: flex;\r\n  align-items: center;\r\n  text-align: center;\r\n  background-color: #d3d3d3;\r\n  padding: 2vh;\r\n}\r\n.material-icons {\r\n  color: #ed691e;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGtCQUFrQjtFQUNsQix5QkFBeUI7RUFDekIsWUFBWTtBQUNkO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL3Byb2R1Y3RzL3Byb2R1Y3RzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZHVjdHMtcm91dGVyLWNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDNkM2QzO1xyXG4gIHBhZGRpbmc6IDJ2aDtcclxufVxyXG4ubWF0ZXJpYWwtaWNvbnMge1xyXG4gIGNvbG9yOiAjZWQ2OTFlO1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _modules_home_modals_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @modules/home/modals/cart/cart.component */ "./src/app/modules/home/modals/cart/cart.component.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var src_app_data_services_products_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/data/services/products.service */ "./src/app/data/services/products.service.ts");
/* harmony import */ var src_app_data_services_search_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/data/services/search.service */ "./src/app/data/services/search.service.ts");









let ProductsComponent = class ProductsComponent {
    constructor(productService, formBuilder, activatedRoute, router, sharedService, modalService, dialog) {
        this.productService = productService;
        this.formBuilder = formBuilder;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.sharedService = sharedService;
        this.modalService = modalService;
        this.dialog = dialog;
        this.loader = "./../../../../../assets/loader.gif";
        this.height = 200;
        this.width = 200;
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
        this.idp = history.state.id;
        this.products = [];
        this.activatedRoute.params.subscribe((params) => {
            if (params["id"]) {
                this.id = params["id"];
                this.getProducts();
            }
            else {
                this.router.navigate([""]);
            }
        });
        this.isLoading = true;
    }
    ngOnInit() { }
    hideLoader() {
        this.isLoading = false;
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
    getProducts() {
        const product = this.productService.getProduct(this.id);
        console.log(product);
        this.defaultProduct = product;
        this.loading = false;
        this.isLoading = false;
    }
    addToCart() {
        this.productService.guardarProductoEnCarrito(this.defaultProduct);
        this.dialogRef = this.dialog.open(_modules_home_modals_cart_cart_component__WEBPACK_IMPORTED_MODULE_5__["CartComponent"], {
            position: { right: "0", top: "0" },
            height: "100%",
            width: "300px",
            hasBackdrop: true,
            panelClass: ["animate__bounceOutRight"],
        });
    }
};
ProductsComponent.ctorParameters = () => [
    { type: src_app_data_services_products_service__WEBPACK_IMPORTED_MODULE_7__["ProductService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_data_services_search_service__WEBPACK_IMPORTED_MODULE_8__["SharedService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_6__["BsModalService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductsComponent.prototype, "loader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductsComponent.prototype, "height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductsComponent.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], ProductsComponent.prototype, "image", void 0);
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
/* harmony default export */ __webpack_exports__["default"] = ("mat-card {\r\n  width: calc(100% - 200px);\r\n  height: calc(100% - 600px);\r\n}\r\n.button-category {\r\n  background-color: #4f4e4e;\r\n  height: 80px;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 20%; /* The width is 20%, by default */\r\n}\r\n.products {\r\n  padding-bottom: 10px;\r\n}\r\n.flex-container-main {\r\n  display: flex;\r\n}\r\n.product-container {\r\n  background-color: #ed691e;\r\n  border-radius: 20px;\r\n}\r\n.button-promotion,\r\n.button-news,\r\n.button-aboutus,\r\n.button-faq {\r\n  background-color: #4f4e4e;\r\n  height: 80px;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 20%; /* The width is 20%, by default */\r\n}\r\n.flex-container {\r\n  max-width: 300xp;\r\n}\r\n.category-button {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 40px;\r\n  margin: 20px;\r\n  color: white;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  background-color: #ed691e;\r\n}\r\n.secondary-button {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 40px;\r\n  background-color: #e9e9e9;\r\n  margin: 20px;\r\n  color: black;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n}\r\n.mat-toolbar {\r\n  width: 100%;\r\n}\r\n.content {\r\n  padding: 16px;\r\n}\r\n.content > mat-card {\r\n  width: 200px;\r\n}\r\n/* @media screen and .buttons(max-width:600px); */\r\n@media screen and (max-width: 800px) {\r\n  .button-category,\r\n  .button-promotion,\r\n  .button-aboutus,\r\n  .button-news,\r\n  .button-faq {\r\n    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */\r\n    height: 80%;\r\n  }\r\n  .category-button,\r\n  .secondary-button {\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    width: 80%;\r\n  }\r\n  .grid {\r\n    grid-template-columns: 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n/***section***/\r\n.example-section {\r\n  margin-left: 20px;\r\n}\r\n.bg-filters {\r\n  color: white;\r\n  background-color: #ed691e;\r\n}\r\n.example-section1 {\r\n  width: 200px;\r\n  margin-left: 20px;\r\n  margin-right: 20px;\r\n}\r\nmat-slider {\r\n  width: 300px;\r\n}\r\n/**cards**/\r\n.example-card {\r\n  min-width: 100%;\r\n  width: 500px;\r\n}\r\n/**paginator**/\r\n.mat-form-field {\r\n  margin-right: 12px;\r\n}\r\n/**grid**/\r\n.grid {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n}\r\n/**example card**/\r\n.example-card {\r\n  width: 120%;\r\n  margin-bottom: 10px;\r\n  height: 350px;\r\n}\r\n/**grid**/\r\n@media screen and (max-width: 1920px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 1420px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 1020px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 800px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 620px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n@media screen and (max-width: 410px) {\r\n  .grid {\r\n    display: grid;\r\n    grid-template-columns: 1fr; /* Create 2 columns and auto-place rows */\r\n  }\r\n}\r\n.button {\r\n  cursor: pointer;\r\n  background-color: #ed691e;\r\n  border-radius: 100px;\r\n  margin-left: 25px;\r\n  margin-right: 25px;\r\n  padding-left: auto;\r\n  padding-right: auto;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9ob21lL3BhZ2VzL3N0YXJ0L3N0YXJ0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7RUFDekIsMEJBQTBCO0FBQzVCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsVUFBVSxFQUFFLGlDQUFpQztBQUMvQztBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLHlCQUF5QjtFQUN6QixtQkFBbUI7QUFDckI7QUFDQTs7OztFQUlFLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVLEVBQUUsaUNBQWlDO0FBQy9DO0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtFQUNuQix5QkFBeUI7QUFDM0I7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7QUFDYjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBRUE7RUFDRSxZQUFZO0FBQ2Q7QUFDQSxpREFBaUQ7QUFDakQ7RUFDRTs7Ozs7SUFLRSxXQUFXLEVBQUUsNkRBQTZEO0lBQzFFLFdBQVc7RUFDYjtFQUNBOztJQUVFLGdCQUFnQjtJQUNoQixpQkFBaUI7SUFDakIsVUFBVTtFQUNaO0VBQ0E7SUFDRSxrQ0FBa0MsRUFBRSx5Q0FBeUM7RUFDL0U7QUFDRjtBQUNBLGNBQWM7QUFDZDtFQUNFLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBLFVBQVU7QUFDVjtFQUNFLGVBQWU7RUFDZixZQUFZO0FBQ2Q7QUFDQSxjQUFjO0FBQ2Q7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQSxTQUFTO0FBQ1Q7RUFDRSxhQUFhO0VBQ2IsMENBQTBDLEVBQUUseUNBQXlDO0FBQ3ZGO0FBQ0EsaUJBQWlCO0FBQ2pCO0VBQ0UsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFDQSxTQUFTO0FBQ1Q7RUFDRTtJQUNFLGFBQWE7SUFDYiw4Q0FBOEMsRUFBRSx5Q0FBeUM7RUFDM0Y7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsMENBQTBDLEVBQUUseUNBQXlDO0VBQ3ZGO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLHNDQUFzQyxFQUFFLHlDQUF5QztFQUNuRjtBQUNGO0FBQ0E7RUFDRTtJQUNFLGFBQWE7SUFDYixrQ0FBa0MsRUFBRSx5Q0FBeUM7RUFDL0U7QUFDRjtBQUNBO0VBQ0U7SUFDRSxhQUFhO0lBQ2IsOEJBQThCLEVBQUUseUNBQXlDO0VBQzNFO0FBQ0Y7QUFDQTtFQUNFO0lBQ0UsYUFBYTtJQUNiLDBCQUEwQixFQUFFLHlDQUF5QztFQUN2RTtBQUNGO0FBQ0E7RUFDRSxlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7QUFDckIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2hvbWUvcGFnZXMvc3RhcnQvc3RhcnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICB3aWR0aDogY2FsYygxMDAlIC0gMjAwcHgpO1xyXG4gIGhlaWdodDogY2FsYygxMDAlIC0gNjAwcHgpO1xyXG59XHJcbi5idXR0b24tY2F0ZWdvcnkge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjRlNGU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyMCU7IC8qIFRoZSB3aWR0aCBpcyAyMCUsIGJ5IGRlZmF1bHQgKi9cclxufVxyXG4ucHJvZHVjdHMge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mbGV4LWNvbnRhaW5lci1tYWluIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbi5wcm9kdWN0LWNvbnRhaW5lciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkNjkxZTtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5idXR0b24tcHJvbW90aW9uLFxyXG4uYnV0dG9uLW5ld3MsXHJcbi5idXR0b24tYWJvdXR1cyxcclxuLmJ1dHRvbi1mYXEge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICM0ZjRlNGU7XHJcbiAgaGVpZ2h0OiA4MHB4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAyMCU7IC8qIFRoZSB3aWR0aCBpcyAyMCUsIGJ5IGRlZmF1bHQgKi9cclxufVxyXG4uZmxleC1jb250YWluZXIge1xyXG4gIG1heC13aWR0aDogMzAweHA7XHJcbn1cclxuLmNhdGVnb3J5LWJ1dHRvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgbWFyZ2luOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBoZWlnaHQ6IDQwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ2OTFlO1xyXG59XHJcbi5zZWNvbmRhcnktYnV0dG9uIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbn1cclxuLm1hdC10b29sYmFyIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG4uY29udGVudCB7XHJcbiAgcGFkZGluZzogMTZweDtcclxufVxyXG5cclxuLmNvbnRlbnQgPiBtYXQtY2FyZCB7XHJcbiAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi8qIEBtZWRpYSBzY3JlZW4gYW5kIC5idXR0b25zKG1heC13aWR0aDo2MDBweCk7ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgwMHB4KSB7XHJcbiAgLmJ1dHRvbi1jYXRlZ29yeSxcclxuICAuYnV0dG9uLXByb21vdGlvbixcclxuICAuYnV0dG9uLWFib3V0dXMsXHJcbiAgLmJ1dHRvbi1uZXdzLFxyXG4gIC5idXR0b24tZmFxIHtcclxuICAgIHdpZHRoOiAxMDAlOyAvKiBUaGUgd2lkdGggaXMgMTAwJSwgd2hlbiB0aGUgdmlld3BvcnQgaXMgODAwcHggb3Igc21hbGxlciAqL1xyXG4gICAgaGVpZ2h0OiA4MCU7XHJcbiAgfVxyXG4gIC5jYXRlZ29yeS1idXR0b24sXHJcbiAgLnNlY29uZGFyeS1idXR0b24ge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIG1hcmdpbi1yaWdodDogMTAlO1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICB9XHJcbiAgLmdyaWQge1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjsgLyogQ3JlYXRlIDIgY29sdW1ucyBhbmQgYXV0by1wbGFjZSByb3dzICovXHJcbiAgfVxyXG59XHJcbi8qKipzZWN0aW9uKioqL1xyXG4uZXhhbXBsZS1zZWN0aW9uIHtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxufVxyXG4uYmctZmlsdGVycyB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDY5MWU7XHJcbn1cclxuLmV4YW1wbGUtc2VjdGlvbjEge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBtYXJnaW4tbGVmdDogMjBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbn1cclxubWF0LXNsaWRlciB7XHJcbiAgd2lkdGg6IDMwMHB4O1xyXG59XHJcbi8qKmNhcmRzKiovXHJcbi5leGFtcGxlLWNhcmQge1xyXG4gIG1pbi13aWR0aDogMTAwJTtcclxuICB3aWR0aDogNTAwcHg7XHJcbn1cclxuLyoqcGFnaW5hdG9yKiovXHJcbi5tYXQtZm9ybS1maWVsZCB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAxMnB4O1xyXG59XHJcbi8qKmdyaWQqKi9cclxuLmdyaWQge1xyXG4gIGRpc3BsYXk6IGdyaWQ7XHJcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyOyAvKiBDcmVhdGUgMiBjb2x1bW5zIGFuZCBhdXRvLXBsYWNlIHJvd3MgKi9cclxufVxyXG4vKipleGFtcGxlIGNhcmQqKi9cclxuLmV4YW1wbGUtY2FyZCB7XHJcbiAgd2lkdGg6IDEyMCU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBoZWlnaHQ6IDM1MHB4O1xyXG59XHJcbi8qKmdyaWQqKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTkyMHB4KSB7XHJcbiAgLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyIDFmciAxZnI7IC8qIENyZWF0ZSAyIGNvbHVtbnMgYW5kIGF1dG8tcGxhY2Ugcm93cyAqL1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDIwcHgpIHtcclxuICAuZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmciAxZnIgMWZyOyAvKiBDcmVhdGUgMiBjb2x1bW5zIGFuZCBhdXRvLXBsYWNlIHJvd3MgKi9cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyMHB4KSB7XHJcbiAgLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnIgMWZyOyAvKiBDcmVhdGUgMiBjb2x1bW5zIGFuZCBhdXRvLXBsYWNlIHJvd3MgKi9cclxuICB9XHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAuZ3JpZCB7XHJcbiAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyIDFmcjsgLyogQ3JlYXRlIDIgY29sdW1ucyBhbmQgYXV0by1wbGFjZSByb3dzICovXHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XHJcbiAgLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjsgLyogQ3JlYXRlIDIgY29sdW1ucyBhbmQgYXV0by1wbGFjZSByb3dzICovXHJcbiAgfVxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQxMHB4KSB7XHJcbiAgLmdyaWQge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyOyAvKiBDcmVhdGUgMiBjb2x1bW5zIGFuZCBhdXRvLXBsYWNlIHJvd3MgKi9cclxuICB9XHJcbn1cclxuLmJ1dHRvbiB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDY5MWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwcHg7XHJcbiAgbWFyZ2luLWxlZnQ6IDI1cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xyXG4gIHBhZGRpbmctbGVmdDogYXV0bztcclxuICBwYWRkaW5nLXJpZ2h0OiBhdXRvO1xyXG59XHJcbiJdfQ== */");

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
/* harmony import */ var src_app_data_services_search_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/data/services/search.service */ "./src/app/data/services/search.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm2015/ngx-bootstrap-modal.js");
/* harmony import */ var _modules_home_modals_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @modules/home/modals/cart/cart.component */ "./src/app/modules/home/modals/cart/cart.component.ts");









let StartComponent = class StartComponent {
    constructor(formBuilder, productService, router, sharedService, modalService, dialog) {
        this.formBuilder = formBuilder;
        this.productService = productService;
        this.router = router;
        this.sharedService = sharedService;
        this.modalService = modalService;
        this.dialog = dialog;
        //
        //IMG LOADER
        this.loader = "./../../../../../assets/loader.gif";
        this.height = 200;
        this.width = 200;
        this.minValue = 0;
        this.maxValue = 10000;
        this.options = {
            floor: 0,
            ceil: 10000,
            translate: (value) => {
                return "S/." + value;
            },
            getPointerColor: (value) => {
                return "white";
            },
            getSelectionBarColor: (value) => {
                return "white";
            },
            getTickColor: (value) => {
                return "#ed691e";
            },
        };
        this.loading = true;
        this.NoItemMessage = false;
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
        this.labelPosition = "after";
        this.Brands = [
            {
                id: 1,
                BrandName: "Samsung",
            },
            {
                id: 2,
                BrandName: "Huawei",
            },
            {
                id: 3,
                BrandName: "Apple",
            },
            {
                id: 4,
                BrandName: "Motorola",
            },
            {
                id: 5,
                BrandName: "Xiaomi",
            },
        ];
        this.OrderBy = [
            {
                id: 1,
                OptionOrderName: "Nombre",
            },
            {
                id: 2,
                OptionOrderName: "Mayor a Menor Precio",
            },
            {
                id: 3,
                OptionOrderName: "Menor a Mayor Precio",
            },
        ];
        //search
        this.nameSearch = history.state.nameSearch;
        this.products = [];
        this.isLoading = true;
    }
    hideLoader() {
        this.isLoading = false;
    }
    ngOnInit() {
        this.generateSlide();
        this.createFilterForm();
        this.getListProducts({ pageSize: 10, pageIndex: 0 });
        this.subscription = this.sharedService.searchSubject.subscribe((mySearch) => {
            if (mySearch != undefined) {
                this.primaryFilterSearch(mySearch);
            }
        });
    }
    primaryFilterSearch(name) {
        this.products = new Array();
        this.createFilterForm();
        this.firstFilterForm.controls.productmodel.setValue(name);
        this.loading = true;
        // this.getListProducts();
    }
    restablecer() {
        this.minValue = 0;
        this.maxValue = 10000;
    }
    generateSlide() {
        this.sliderForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            sliderControl: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]([this.floor, this.ceil]),
        });
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
    getListProducts(event) {
        this.loading = true;
        this.products = [];
        const timer = setInterval(() => {
            const items = this.productService.getProductCatalog(event.pageSize ? event.pageSize : 10, event.pageIndex);
            let data = items.data;
            this.products = data;
            this.length = items.total;
            if (this.products.length > 0) {
                this.NoItemMessage = false;
            }
            else {
                this.NoItemMessage = true;
            }
            this.loading = false;
            clearInterval(timer);
        }, 1000);
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
    gotoproduct(id) {
        this.router.navigate([`product/${id}`]);
    }
    openCart(item) {
        this.productService.guardarProductoEnCarrito(item);
        this.dialogRef = this.dialog.open(_modules_home_modals_cart_cart_component__WEBPACK_IMPORTED_MODULE_8__["CartComponent"], {
            position: { right: "0", top: "0" },
            height: "100%",
            width: "300px",
            hasBackdrop: true,
            panelClass: ["animate__bounceOutRight"],
        });
    }
};
StartComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_data_services_products_service__WEBPACK_IMPORTED_MODULE_5__["ProductService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: src_app_data_services_search_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"] },
    { type: ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_7__["BsModalService"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
], StartComponent.prototype, "paginator", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteTrigger"], {
        read: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatAutocompleteTrigger"],
        static: false,
    })
], StartComponent.prototype, "bsModalRef", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StartComponent.prototype, "loader", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StartComponent.prototype, "height", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StartComponent.prototype, "width", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], StartComponent.prototype, "image", void 0);
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