function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive": function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html": function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\r\n  <router-outlet></router-outlet>\r\n</body>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/contentlayout/contentlayout.component.html": function node_modulesRawLoaderDistCjsJsSrcAppLayoutContentlayoutContentlayoutComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main\">\r\n  <div class=\"mat-app-background\">\r\n    <app-header></app-header>\r\n    <app-sub-nav></app-sub-nav>\r\n    <div>\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html": function node_modulesRawLoaderDistCjsJsSrcAppLayoutFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"footer\">\r\n  <p>footer works!</p>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html": function node_modulesRawLoaderDistCjsJsSrcAppLayoutHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"bg-nav\">\r\n  <div class=\"left\">\r\n    <div class=\"left-container\">\r\n      <a href=\"javascript:void(0)\" (click)=\"home()\"\r\n        ><span class=\"logo\"></span\r\n      ></a>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"main\">\r\n    <div class=\"search-section\">\r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-label>Buscar productos</mat-label>\r\n        <input matInput />\r\n      </mat-form-field>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"right\">\r\n    <div class=\"user-section\">\r\n      <div>\r\n        <a style=\"text-decoration: none\" href=\"\">\r\n          <div class=\"avatar-container\">\r\n            <span class=\"avatar-logo\"></span>\r\n          </div>\r\n        </a>\r\n      </div>\r\n      <div class=\"profile-section\">\r\n        <div>\r\n          <a style=\"text-decoration: none\" href=\"\">\r\n            <div class=\"login-text\">\r\n              <p>Log In</p>\r\n            </div>\r\n          </a>\r\n        </div>\r\n        <div>\r\n          <a style=\"text-decoration: none\" href=\"\">\r\n            <div class=\"register-text\">\r\n              <p>Register</p>\r\n            </div></a\r\n          >\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"shopping-cart\">\r\n      <a style=\"text-decoration: none\" href=\"\">\r\n        <div class=\"cart-container\">\r\n          <span class=\"cart-logo\"></span>\r\n        </div>\r\n      </a>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sub-nav/sub-nav.component.html": function node_modulesRawLoaderDistCjsJsSrcAppLayoutSubNavSubNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div style=\"background-color: #4f4e4e\">\r\n  <div class=\"button-category\">\r\n    <a\r\n      (click)=\"isOpen = !isOpen\"\r\n      cdkOverlayOrigin\r\n      #trigger=\"cdkOverlayOrigin\"\r\n      style=\"text-decoration: none\"\r\n    >\r\n      <div class=\"category-button\" style=\"cursor: pointer\">\r\n        <p>CATEGORIAS</p>\r\n      </div>\r\n    </a>\r\n    <!-- This template displays the overlay content and is connected to the button -->\r\n    <ng-template\r\n      cdkConnectedOverlay\r\n      [cdkConnectedOverlayHasBackdrop]=\"true\"\r\n      [cdkConnectedOverlayOrigin]=\"trigger\"\r\n      [cdkConnectedOverlayOpen]=\"isOpen\"\r\n      (backdropClick)=\"toggleDropdown()\"\r\n    >\r\n      <div class=\"example-list\">\r\n        <div *ngIf=\"categories\">\r\n          <div class=\"flex-container-main mt-3\">\r\n            <ng-container *ngFor=\"let item of categories\">\r\n              <div>\r\n                <a style=\"text-decoration: none\" href=\"{{ item.url }}\">{{\r\n                  item.name\r\n                }}</a>\r\n              </div>\r\n              <div>\r\n                <p>{{ item.description }}</p>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </ng-template>\r\n  </div>\r\n  <div class=\"button-promotion\">\r\n    <a style=\"text-decoration: none\" href=\"/promo\">\r\n      <div class=\"secondary-button\">\r\n        <p>PROMOCIONES</p>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div class=\"button-news\">\r\n    <a style=\"text-decoration: none\" href=\"/news\">\r\n      <div class=\"secondary-button\">\r\n        <p>NOVEDADES</p>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div class=\"button-aboutus\">\r\n    <a style=\"text-decoration: none\" href=\"/about\">\r\n      <div class=\"secondary-button\">\r\n        <p>ABOUT US</p>\r\n      </div>\r\n    </a>\r\n  </div>\r\n  <div class=\"button-faq\">\r\n    <a style=\"text-decoration: none\" href=\"/faq\">\r\n      <div class=\"secondary-button\">\r\n        <p>FAQ</p>\r\n      </div>\r\n    </a>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/not-found/not-found.component.html": function node_modulesRawLoaderDistCjsJsSrcAppSharedComponentsNotFoundNotFoundComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"not-found-page\">\r\n  <div class=\"h-100 row align-items-center justify-content-center\">\r\n    <div class=\"title-not-found text-center\">\r\n      <a href=\"/home\">\r\n        <img\r\n          class=\"img-logo mb-4\"\r\n          style=\"width: 120px\"\r\n          src=\"../../../../assets/logo/logo_home.png\"\r\n        />\r\n      </a>\r\n      <h1>404</h1>\r\n      <p>Página no encontrada</p>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js": function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.
    
    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.
    
    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts": function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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
    /* harmony import */


    var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @shared/components/not-found/not-found.component */
    "./src/app/shared/components/not-found/not-found.component.ts");
    /* harmony import */


    var _layout_contentlayout_contentlayout_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout/contentlayout/contentlayout.component */
    "./src/app/layout/contentlayout/contentlayout.component.ts");

    var routes = [// {
    //   path: "",
    //   redirectTo: "home/",
    //   pathMatch: "full",
    // },
    {
      path: "",
      component: _layout_contentlayout_contentlayout_component__WEBPACK_IMPORTED_MODULE_4__["ContentlayoutComponent"],
      children: [{
        path: "",
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() | modules-home-home-module */
          "modules-home-home-module").then(__webpack_require__.bind(null,
          /*! @modules/home/home.module */
          "./src/app/modules/home/home.module.ts")).then(function (m) {
            return m.HomeModule;
          });
        }
      }]
    }, {
      path: "404",
      component: _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_3__["NotFoundComponent"]
    }, {
      path: "**",
      redirectTo: "/404"
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
        scrollPositionRestoration: "top"
      })],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
      providers: []
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css": function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts": function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-root",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts": function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./layout/header/header.component */
    "./src/app/layout/header/header.component.ts");
    /* harmony import */


    var _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./layout/footer/footer.component */
    "./src/app/layout/footer/footer.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _layout_contentlayout_contentlayout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./layout/contentlayout/contentlayout.component */
    "./src/app/layout/contentlayout/contentlayout.component.ts");
    /* harmony import */


    var _core_core_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./core/core.module */
    "./src/app/core/core.module.ts");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _layout_sub_nav_sub_nav_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./layout/sub-nav/sub-nav.component */
    "./src/app/layout/sub-nav/sub-nav.component.ts");
    /* harmony import */


    var _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @shared/components/not-found/not-found.component */
    "./src/app/shared/components/not-found/not-found.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _layout_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _layout_contentlayout_contentlayout_component__WEBPACK_IMPORTED_MODULE_7__["ContentlayoutComponent"], _layout_sub_nav_sub_nav_component__WEBPACK_IMPORTED_MODULE_11__["SubNavComponent"], _shared_components_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_12__["NotFoundComponent"]],
      imports: [// angular
      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], // 3rd party
      // core & shared
      _core_core_module__WEBPACK_IMPORTED_MODULE_8__["CoreModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_9__["SharedModule"], // app
      _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]],
      schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/core/core.module.ts": function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
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

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };

    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]]
    })], CoreModule);
    /***/
  },

  /***/
  "./src/app/layout/contentlayout/contentlayout.component.css": function srcAppLayoutContentlayoutContentlayoutComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main {\r\n  margin-top: -16px;\r\n}\r\n.mat-app-background {\r\n  height: 100%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2NvbnRlbnRsYXlvdXQvY29udGVudGxheW91dC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxZQUFZO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvY29udGVudGxheW91dC9jb250ZW50bGF5b3V0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgbWFyZ2luLXRvcDogLTE2cHg7XHJcbn1cclxuLm1hdC1hcHAtYmFja2dyb3VuZCB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/contentlayout/contentlayout.component.ts": function srcAppLayoutContentlayoutContentlayoutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContentlayoutComponent", function () {
      return ContentlayoutComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ContentlayoutComponent = /*#__PURE__*/function () {
      function ContentlayoutComponent() {
        _classCallCheck(this, ContentlayoutComponent);
      }

      _createClass(ContentlayoutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContentlayoutComponent;
    }();

    ContentlayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contentlayout',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contentlayout.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/contentlayout/contentlayout.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contentlayout.component.css */
      "./src/app/layout/contentlayout/contentlayout.component.css"))["default"]]
    })], ContentlayoutComponent);
    /***/
  },

  /***/
  "./src/app/layout/footer/footer.component.css": function srcAppLayoutFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".footer {\r\n  padding: 50px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZm9vdGVyIHtcclxuICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/footer/footer.component.ts": function srcAppLayoutFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/footer/footer.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/layout/footer/footer.component.css"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/layout/header/header.component.css": function srcAppLayoutHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "::ng-deep .mat-step-header .mat-step-icon-selected,\r\n.mat-step-header .mat-step-icon-state-done,\r\n.mat-step-header .mat-step-icon-state-edit {\r\n  background-color: #ed691e !important;\r\n}\r\n\r\n::ng-deep\r\n  .mat-form-field-appearance-outline.mat-form-field-invalid.mat-form-field-invalid\r\n  .mat-form-field-outline-thick {\r\n  color: #ed691e !important;\r\n}\r\n\r\n::ng-deep .mat-input-element {\r\n  caret-color: #ed691e !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-invalid .mat-input-element,\r\n.mat-warn .mat-input-element {\r\n  caret-color: #ed691e !important;\r\n}\r\n\r\n::ng-deep .mat-form-field.mat-focused .mat-form-field-label {\r\n  color: #ed691e !important;\r\n}\r\n\r\n::ng-deep .mat-form-field.mat-form-field-invalid .mat-form-field-label {\r\n  color: #ed691e !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-appearance-outline .mat-form-field-outline {\r\n  background-color: white;\r\n  border-radius: 40px;\r\n  width: 100%;\r\n  color: #ed691e !important;\r\n  opacity: 1 !important;\r\n}\r\n\r\nmat-form-field {\r\n  width: 95%;\r\n}\r\n\r\n::ng-deep .mat-form-field-outline-start {\r\n  border-radius: 40px 0 0 40px !important;\r\n  min-width: 40px !important;\r\n}\r\n\r\n::ng-deep .mat-form-field-outline-end {\r\n  border-radius: 0 40px 40px 0 !important;\r\n}\r\n\r\n* {\r\n  box-sizing: border-box;\r\n}\r\n\r\n.left-container {\r\n  padding-top: 10px;\r\n  padding-left: 5%;\r\n}\r\n\r\n.logo {\r\n  padding-top: 20px;\r\n  padding-left: 30px;\r\n  position: absolute;\r\n  content: url('logo_home.png');\r\n}\r\n\r\n/* .logo::before {\r\n  padding-top: 10px;\r\n  content: url(\"../../../assets/logo/logo_home.png\");\r\n} */\r\n\r\n.left {\r\n  background-color: #313030;\r\n  height: 100px;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 20%; /* The width is 20%, by default */\r\n}\r\n\r\n.main {\r\n  padding: 15.45px;\r\n  background-color: #313030;\r\n  height: 100px;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 50%; /* The width is 60%, by default */\r\n}\r\n\r\n.search-section {\r\n  padding-top: 8px;\r\n}\r\n\r\n.right {\r\n  background-color: #313030;\r\n  height: 100px;\r\n  display: flex;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 30%; /* The width is 20%, by default */\r\n}\r\n\r\n.bg-nav {\r\n  background-color: #313030;\r\n}\r\n\r\n.profile-section {\r\n  padding-left: 10px;\r\n  margin-top: -12px;\r\n}\r\n\r\n.shopping-cart,\r\n.user-section {\r\n  display: flex;\r\n  padding-top: 25px;\r\n  margin-right: 10%;\r\n}\r\n\r\n.user-section {\r\n  padding-left: 14%;\r\n}\r\n\r\n.shopping-cart {\r\n  text-align: right;\r\n}\r\n\r\n.avatar-container {\r\n  height: 60px;\r\n  width: 60px;\r\n  background-color: #ed691e;\r\n  border-radius: 100px;\r\n}\r\n\r\n.login-text {\r\n  color: #ed691e;\r\n}\r\n\r\n.register-text {\r\n  color: white;\r\n}\r\n\r\n.avatar-logo {\r\n  content: url('user.svg');\r\n  text-align: center;\r\n  margin: 13%;\r\n  height: 45px;\r\n}\r\n\r\n.cart-logo {\r\n  content: url('shopping-cart.svg');\r\n  text-align: center;\r\n  margin: 15%;\r\n  height: 45px;\r\n}\r\n\r\n.cart-container {\r\n  height: 65px;\r\n  width: 65px;\r\n  background-color: #ed691e;\r\n  border-radius: 100px;\r\n}\r\n\r\n/* Use a media query to add a break point at 800px: */\r\n\r\n@media screen and (max-width: 800px) {\r\n  .main {\r\n    height: 80px;\r\n    width: 100%;\r\n    margin: -1px;\r\n    margin-left: 0px;\r\n  }\r\n  .left-container {\r\n    padding: 20px;\r\n    padding-left: 25%;\r\n  }\r\n  .search-section {\r\n    text-align: center;\r\n    padding-left: 25px;\r\n    padding-top: 0px;\r\n    width: 90%;\r\n  }\r\n  .user-section {\r\n    padding-left: 18%;\r\n    align: center;\r\n    text-align: center;\r\n    align-content: center;\r\n    vertical-align: middle;\r\n  }\r\n  .left,\r\n  .right {\r\n    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0Usb0NBQW9DO0FBQ3RDOztBQUVBOzs7RUFHRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSwrQkFBK0I7QUFDakM7O0FBQ0E7O0VBRUUsK0JBQStCO0FBQ2pDOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLHFCQUFxQjtBQUN2Qjs7QUFDQTtFQUNFLFVBQVU7QUFDWjs7QUFDQTtFQUNFLHVDQUF1QztFQUN2QywwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx1Q0FBdUM7QUFDekM7O0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIsNkJBQWtEO0FBQ3BEOztBQUNBOzs7R0FHRzs7QUFDSDtFQUNFLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVLEVBQUUsaUNBQWlDO0FBQy9DOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVLEVBQUUsaUNBQWlDO0FBQy9DOztBQUNBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUNBO0VBQ0UseUJBQXlCO0VBQ3pCLGFBQWE7RUFDYixhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxVQUFVLEVBQUUsaUNBQWlDO0FBQy9DOztBQUNBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFDQTs7RUFFRSxhQUFhO0VBQ2IsaUJBQWlCO0VBQ2pCLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFDQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gseUJBQXlCO0VBQ3pCLG9CQUFvQjtBQUN0Qjs7QUFDQTtFQUNFLGNBQWM7QUFDaEI7O0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSx3QkFBd0M7RUFDeEMsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxpQ0FBaUQ7RUFDakQsa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLHlCQUF5QjtFQUN6QixvQkFBb0I7QUFDdEI7O0FBQ0EscURBQXFEOztBQUNyRDtFQUNFO0lBQ0UsWUFBWTtJQUNaLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0VBQ2xCO0VBQ0E7SUFDRSxhQUFhO0lBQ2IsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixVQUFVO0VBQ1o7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHFCQUFxQjtJQUNyQixzQkFBc0I7RUFDeEI7RUFDQTs7SUFFRSxXQUFXLEVBQUUsNkRBQTZEO0VBQzVFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9sYXlvdXQvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc2VsZWN0ZWQsXHJcbi5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24tc3RhdGUtZG9uZSxcclxuLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zdGF0ZS1lZGl0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ2OTFlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcFxyXG4gIC5tYXQtZm9ybS1maWVsZC1hcHBlYXJhbmNlLW91dGxpbmUubWF0LWZvcm0tZmllbGQtaW52YWxpZC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkXHJcbiAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtdGhpY2sge1xyXG4gIGNvbG9yOiAjZWQ2OTFlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWlucHV0LWVsZW1lbnQge1xyXG4gIGNhcmV0LWNvbG9yOiAjZWQ2OTFlICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC1pbnZhbGlkIC5tYXQtaW5wdXQtZWxlbWVudCxcclxuLm1hdC13YXJuIC5tYXQtaW5wdXQtZWxlbWVudCB7XHJcbiAgY2FyZXQtY29sb3I6ICNlZDY5MWUgIWltcG9ydGFudDtcclxufVxyXG5cclxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjZWQ2OTFlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQubWF0LWZvcm0tZmllbGQtaW52YWxpZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gIGNvbG9yOiAjZWQ2OTFlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtYXBwZWFyYW5jZS1vdXRsaW5lIC5tYXQtZm9ybS1maWVsZC1vdXRsaW5lIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiA0MHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGNvbG9yOiAjZWQ2OTFlICFpbXBvcnRhbnQ7XHJcbiAgb3BhY2l0eTogMSAhaW1wb3J0YW50O1xyXG59XHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogOTUlO1xyXG59XHJcbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtb3V0bGluZS1zdGFydCB7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweCAwIDAgNDBweCAhaW1wb3J0YW50O1xyXG4gIG1pbi13aWR0aDogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG46Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLW91dGxpbmUtZW5kIHtcclxuICBib3JkZXItcmFkaXVzOiAwIDQwcHggNDBweCAwICFpbXBvcnRhbnQ7XHJcbn1cclxuKiB7XHJcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxufVxyXG4ubGVmdC1jb250YWluZXIge1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogNSU7XHJcbn1cclxuLmxvZ28ge1xyXG4gIHBhZGRpbmctdG9wOiAyMHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMzBweDtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgY29udGVudDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL2xvZ28vbG9nb19ob21lLnBuZ1wiKTtcclxufVxyXG4vKiAubG9nbzo6YmVmb3JlIHtcclxuICBwYWRkaW5nLXRvcDogMTBweDtcclxuICBjb250ZW50OiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvbG9nby9sb2dvX2hvbWUucG5nXCIpO1xyXG59ICovXHJcbi5sZWZ0IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMDMwO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDIwJTsgLyogVGhlIHdpZHRoIGlzIDIwJSwgYnkgZGVmYXVsdCAqL1xyXG59XHJcblxyXG4ubWFpbiB7XHJcbiAgcGFkZGluZzogMTUuNDVweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMDMwO1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDUwJTsgLyogVGhlIHdpZHRoIGlzIDYwJSwgYnkgZGVmYXVsdCAqL1xyXG59XHJcbi5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgcGFkZGluZy10b3A6IDhweDtcclxufVxyXG4ucmlnaHQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMzMTMwMzA7XHJcbiAgaGVpZ2h0OiAxMDBweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIG1heC1oZWlnaHQ6IDEwMHB4O1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIHdpZHRoOiAzMCU7IC8qIFRoZSB3aWR0aCBpcyAyMCUsIGJ5IGRlZmF1bHQgKi9cclxufVxyXG4uYmctbmF2IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzEzMDMwO1xyXG59XHJcbi5wcm9maWxlLXNlY3Rpb24ge1xyXG4gIHBhZGRpbmctbGVmdDogMTBweDtcclxuICBtYXJnaW4tdG9wOiAtMTJweDtcclxufVxyXG4uc2hvcHBpbmctY2FydCxcclxuLnVzZXItc2VjdGlvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBwYWRkaW5nLXRvcDogMjVweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxufVxyXG4udXNlci1zZWN0aW9uIHtcclxuICBwYWRkaW5nLWxlZnQ6IDE0JTtcclxufVxyXG4uc2hvcHBpbmctY2FydCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuLmF2YXRhci1jb250YWluZXIge1xyXG4gIGhlaWdodDogNjBweDtcclxuICB3aWR0aDogNjBweDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWQ2OTFlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG59XHJcbi5sb2dpbi10ZXh0IHtcclxuICBjb2xvcjogI2VkNjkxZTtcclxufVxyXG4ucmVnaXN0ZXItdGV4dCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcbi5hdmF0YXItbG9nbyB7XHJcbiAgY29udGVudDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3VzZXIuc3ZnXCIpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDEzJTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuLmNhcnQtbG9nbyB7XHJcbiAgY29udGVudDogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3Nob3BwaW5nLWNhcnQuc3ZnXCIpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW46IDE1JTtcclxuICBoZWlnaHQ6IDQ1cHg7XHJcbn1cclxuLmNhcnQtY29udGFpbmVyIHtcclxuICBoZWlnaHQ6IDY1cHg7XHJcbiAgd2lkdGg6IDY1cHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkNjkxZTtcclxuICBib3JkZXItcmFkaXVzOiAxMDBweDtcclxufVxyXG4vKiBVc2UgYSBtZWRpYSBxdWVyeSB0byBhZGQgYSBicmVhayBwb2ludCBhdCA4MDBweDogKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODAwcHgpIHtcclxuICAubWFpbiB7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1hcmdpbjogLTFweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgfVxyXG4gIC5sZWZ0LWNvbnRhaW5lciB7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAyNSU7XHJcbiAgfVxyXG4gIC5zZWFyY2gtc2VjdGlvbiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDI1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICB9XHJcbiAgLnVzZXItc2VjdGlvbiB7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDE4JTtcclxuICAgIGFsaWduOiBjZW50ZXI7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIH1cclxuICAubGVmdCxcclxuICAucmlnaHQge1xyXG4gICAgd2lkdGg6IDEwMCU7IC8qIFRoZSB3aWR0aCBpcyAxMDAlLCB3aGVuIHRoZSB2aWV3cG9ydCBpcyA4MDBweCBvciBzbWFsbGVyICovXHJcbiAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/header/header.component.ts": function srcAppLayoutHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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

    var HeaderComponent = /*#__PURE__*/function () {
      function HeaderComponent(router) {
        _classCallCheck(this, HeaderComponent);

        this.router = router;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "home",
        value: function home() {
          this.router.navigateByUrl("");
        }
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-header",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/header/header.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/layout/header/header.component.css"))["default"]]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/layout/sub-nav/sub-nav.component.css": function srcAppLayoutSubNavSubNavComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".button-category {\r\n  background-color: #4f4e4e;\r\n  height: 80px;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 20%; /* The width is 20%, by default */\r\n}\r\n\r\n.flex-container-main {\r\n  display: flex;\r\n}\r\n\r\n.product-container {\r\n  background-color: #ed691e;\r\n  border-radius: 20px;\r\n}\r\n\r\n.button-promotion,\r\n.button-news,\r\n.button-aboutus,\r\n.button-faq {\r\n  background-color: #4f4e4e;\r\n  height: 80px;\r\n  max-height: 100px;\r\n  float: left;\r\n  width: 20%; /* The width is 20%, by default */\r\n}\r\n\r\n.flex-container {\r\n  max-width: 300xp;\r\n}\r\n\r\n.category-button {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 40px;\r\n  margin: 20px;\r\n  color: white;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n  background-color: #ed691e;\r\n}\r\n\r\n.secondary-button {\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  line-height: 40px;\r\n  background-color: #e9e9e9;\r\n  margin: 20px;\r\n  color: black;\r\n  height: 40px;\r\n  border-radius: 20px;\r\n}\r\n\r\n.mat-toolbar {\r\n  width: 100%;\r\n}\r\n\r\n.content {\r\n  padding: 16px;\r\n}\r\n\r\n.content > mat-card {\r\n  width: 200px;\r\n}\r\n\r\n/* @media screen and .buttons(max-width:600px); */\r\n\r\n@media screen and (max-width: 800px) {\r\n  .button-category,\r\n  .button-promotion,\r\n  .button-aboutus,\r\n  .button-news,\r\n  .button-faq {\r\n    cursor: pointer;\r\n    width: 100%; /* The width is 100%, when the viewport is 800px or smaller */\r\n    height: 80%;\r\n  }\r\n  .category-button,\r\n  .secondary-button {\r\n    margin-left: 10%;\r\n    margin-right: 10%;\r\n    width: 80%;\r\n  }\r\n}\r\n\r\n/* Overlays */\r\n\r\n.example-list {\r\n  width: 200px;\r\n  border: solid 1px #ccc;\r\n  border-radius: 5px;\r\n  background: #fff;\r\n  text-align: center;\r\n  padding: 10px;\r\n  margin: 0;\r\n}\r\n\r\n.example-list > li {\r\n  list-style-type: none;\r\n  border-bottom: solid 1px #8b8b8b;\r\n  padding: 8px 0;\r\n}\r\n\r\n.example-list > li:last-child {\r\n  border-bottom: none;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbGF5b3V0L3N1Yi1uYXYvc3ViLW5hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFVBQVUsRUFBRSxpQ0FBaUM7QUFDL0M7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsbUJBQW1CO0FBQ3JCOztBQUNBOzs7O0VBSUUseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFVBQVUsRUFBRSxpQ0FBaUM7QUFDL0M7O0FBQ0E7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixZQUFZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixtQkFBbUI7RUFDbkIseUJBQXlCO0FBQzNCOztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixZQUFZO0VBQ1osWUFBWTtFQUNaLG1CQUFtQjtBQUNyQjs7QUFDQTtFQUNFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFDQSxpREFBaUQ7O0FBQ2pEO0VBQ0U7Ozs7O0lBS0UsZUFBZTtJQUNmLFdBQVcsRUFBRSw2REFBNkQ7SUFDMUUsV0FBVztFQUNiO0VBQ0E7O0lBRUUsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixVQUFVO0VBQ1o7QUFDRjs7QUFDQSxhQUFhOztBQUNiO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsU0FBUztBQUNYOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGdDQUFnQztFQUNoQyxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbGF5b3V0L3N1Yi1uYXYvc3ViLW5hdi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJ1dHRvbi1jYXRlZ29yeSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzRmNGU0ZTtcclxuICBoZWlnaHQ6IDgwcHg7XHJcbiAgbWF4LWhlaWdodDogMTAwcHg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgd2lkdGg6IDIwJTsgLyogVGhlIHdpZHRoIGlzIDIwJSwgYnkgZGVmYXVsdCAqL1xyXG59XHJcblxyXG4uZmxleC1jb250YWluZXItbWFpbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG4ucHJvZHVjdC1jb250YWluZXIge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlZDY5MWU7XHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG4uYnV0dG9uLXByb21vdGlvbixcclxuLmJ1dHRvbi1uZXdzLFxyXG4uYnV0dG9uLWFib3V0dXMsXHJcbi5idXR0b24tZmFxIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNGY0ZTRlO1xyXG4gIGhlaWdodDogODBweDtcclxuICBtYXgtaGVpZ2h0OiAxMDBweDtcclxuICBmbG9hdDogbGVmdDtcclxuICB3aWR0aDogMjAlOyAvKiBUaGUgd2lkdGggaXMgMjAlLCBieSBkZWZhdWx0ICovXHJcbn1cclxuLmZsZXgtY29udGFpbmVyIHtcclxuICBtYXgtd2lkdGg6IDMwMHhwO1xyXG59XHJcbi5jYXRlZ29yeS1idXR0b24ge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGxpbmUtaGVpZ2h0OiA0MHB4O1xyXG4gIG1hcmdpbjogMjBweDtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VkNjkxZTtcclxufVxyXG4uc2Vjb25kYXJ5LWJ1dHRvbiB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgbGluZS1oZWlnaHQ6IDQwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcclxuICBtYXJnaW46IDIwcHg7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG4gIGhlaWdodDogNDBweDtcclxuICBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG59XHJcbi5tYXQtdG9vbGJhciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIHBhZGRpbmc6IDE2cHg7XHJcbn1cclxuXHJcbi5jb250ZW50ID4gbWF0LWNhcmQge1xyXG4gIHdpZHRoOiAyMDBweDtcclxufVxyXG4vKiBAbWVkaWEgc2NyZWVuIGFuZCAuYnV0dG9ucyhtYXgtd2lkdGg6NjAwcHgpOyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4MDBweCkge1xyXG4gIC5idXR0b24tY2F0ZWdvcnksXHJcbiAgLmJ1dHRvbi1wcm9tb3Rpb24sXHJcbiAgLmJ1dHRvbi1hYm91dHVzLFxyXG4gIC5idXR0b24tbmV3cyxcclxuICAuYnV0dG9uLWZhcSB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB3aWR0aDogMTAwJTsgLyogVGhlIHdpZHRoIGlzIDEwMCUsIHdoZW4gdGhlIHZpZXdwb3J0IGlzIDgwMHB4IG9yIHNtYWxsZXIgKi9cclxuICAgIGhlaWdodDogODAlO1xyXG4gIH1cclxuICAuY2F0ZWdvcnktYnV0dG9uLFxyXG4gIC5zZWNvbmRhcnktYnV0dG9uIHtcclxuICAgIG1hcmdpbi1sZWZ0OiAxMCU7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDEwJTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgfVxyXG59XHJcbi8qIE92ZXJsYXlzICovXHJcbi5leGFtcGxlLWxpc3Qge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBib3JkZXI6IHNvbGlkIDFweCAjY2NjO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG5cclxuLmV4YW1wbGUtbGlzdCA+IGxpIHtcclxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XHJcbiAgYm9yZGVyLWJvdHRvbTogc29saWQgMXB4ICM4YjhiOGI7XHJcbiAgcGFkZGluZzogOHB4IDA7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3QgPiBsaTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/layout/sub-nav/sub-nav.component.ts": function srcAppLayoutSubNavSubNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubNavComponent", function () {
      return SubNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SubNavComponent = /*#__PURE__*/function () {
      function SubNavComponent() {
        _classCallCheck(this, SubNavComponent);

        this.categories = [{
          categoryId: 1,
          name: "Televisores",
          items: 1,
          description: "Tv y celulares",
          url: "/home"
        }]; // overlay

        this.isOpen = false;
      }

      _createClass(SubNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "toggleDropdown",
        value: function toggleDropdown() {
          this.isOpen = false;
        }
      }]);

      return SubNavComponent;
    }();

    SubNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: "app-sub-nav",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sub-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout/sub-nav/sub-nav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sub-nav.component.css */
      "./src/app/layout/sub-nav/sub-nav.component.css"))["default"]]
    })], SubNavComponent);
    /***/
  },

  /***/
  "./src/app/shared/components/not-found/not-found.component.css": function srcAppSharedComponentsNotFoundNotFoundComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".not-found-page {\r\n  height: 100%;\r\n  background: white;\r\n  color: black;\r\n}\r\n\r\n.row {\r\n  margin: 0;\r\n}\r\n\r\nh1 {\r\n  font-weight: bold;\r\n}\r\n\r\np {\r\n  font-size: 16px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5vdC1mb3VuZC1wYWdlIHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogd2hpdGU7XHJcbiAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ucm93IHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbmgxIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxucCB7XHJcbiAgZm9udC1zaXplOiAxNnB4O1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/shared/components/not-found/not-found.component.ts": function srcAppSharedComponentsNotFoundNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function () {
      return NotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NotFoundComponent = /*#__PURE__*/function () {
      function NotFoundComponent() {
        _classCallCheck(this, NotFoundComponent);
      }

      _createClass(NotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NotFoundComponent;
    }();

    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-not-found',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./not-found.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/components/not-found/not-found.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./not-found.component.css */
      "./src/app/shared/components/not-found/not-found.component.css"))["default"]]
    })], NotFoundComponent);
    /***/
  },

  /***/
  "./src/app/shared/material.module.ts": function srcAppSharedMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
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


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/toolbar */
    "./node_modules/@angular/material/esm2015/toolbar.js");
    /* harmony import */


    var _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/menu */
    "./node_modules/@angular/material/esm2015/menu.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/esm2015/select.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/esm2015/checkbox.js");
    /* harmony import */


    var _angular_material_list__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/list */
    "./node_modules/@angular/material/esm2015/list.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/esm2015/core.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/progress-spinner */
    "./node_modules/@angular/material/esm2015/progress-spinner.js");
    /* harmony import */


    var _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/chips */
    "./node_modules/@angular/material/esm2015/chips.js");
    /* harmony import */


    var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/card */
    "./node_modules/@angular/material/esm2015/card.js");
    /* harmony import */


    var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/slide-toggle */
    "./node_modules/@angular/material/esm2015/slide-toggle.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/esm2015/tooltip.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/esm2015/snack-bar.js");
    /* harmony import */


    var _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/material/divider */
    "./node_modules/@angular/material/esm2015/divider.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/esm2015/datepicker.js");
    /* harmony import */


    var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! @angular/material/expansion */
    "./node_modules/@angular/material/esm2015/expansion.js");
    /* harmony import */


    var _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! @angular/material/radio */
    "./node_modules/@angular/material/esm2015/radio.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/esm2015/dialog.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/esm2015/overlay.js");
    /* harmony import */


    var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/material/autocomplete */
    "./node_modules/@angular/material/esm2015/autocomplete.js");
    /* harmony import */


    var _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! @angular/material/tree */
    "./node_modules/@angular/material/esm2015/tree.js");
    /* harmony import */


    var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/material/stepper */
    "./node_modules/@angular/material/esm2015/stepper.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js"); // Others


    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_material__WEBPACK_IMPORTED_MODULE_28__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"], _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"]],
      exports: [_angular_material__WEBPACK_IMPORTED_MODULE_28__["MatPaginatorModule"], _angular_material__WEBPACK_IMPORTED_MODULE_28__["MatFormFieldModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"], _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material_menu__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_6__["MatTabsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"], _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_13__["MatProgressSpinnerModule"], _angular_material_chips__WEBPACK_IMPORTED_MODULE_14__["MatChipsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_7__["MatCheckboxModule"], _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"], _angular_material_list__WEBPACK_IMPORTED_MODULE_8__["MatListModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_17__["MatTooltipModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_18__["MatSnackBarModule"], _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_16__["MatSlideToggleModule"], _angular_material_divider__WEBPACK_IMPORTED_MODULE_19__["MatDividerModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_20__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatNativeDateModule"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_21__["MatExpansionModule"], _angular_material_radio__WEBPACK_IMPORTED_MODULE_22__["MatRadioModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_23__["MatDialogModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_10__["MatRippleModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_24__["OverlayModule"], _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_25__["MatAutocompleteModule"], _angular_material_tree__WEBPACK_IMPORTED_MODULE_26__["MatTreeModule"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_27__["MatStepperModule"]]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/shared/shared.module.ts": function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
      return SharedModule;
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


    var _material_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./material.module */
    "./src/app/shared/material.module.ts");

    var SharedModule = function SharedModule() {
      _classCallCheck(this, SharedModule);
    };

    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      exports: [_material_module__WEBPACK_IMPORTED_MODULE_3__["MaterialModule"]]
    })], SharedModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts": function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: true
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts": function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0: function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\SI505V\Pinio.Clients.App\Pinio.Clients.App\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map