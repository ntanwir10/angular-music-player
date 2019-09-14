(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/artist/artist.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/artist/artist.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div class=\"section no-pad-bot valign-wrapper\" id=\"top\">\n\t<div class=\"container center \">\n\t\t<h1 class=\"white-text animated fadeIn \">{{artist.name}}</h1>\n\t\t<br>\n\t</div>\n</div>\n\n<app-preloader [name]=\"'Loading artist...'\" *ngIf=\"preloading\"></app-preloader>\n<div class=\"container animated fadeIn\" *ngIf=\"!preloader\">\n\t<div class=\"row\">\n\t\t<div class=\"col l4 m6 s12\">\n\t\t\t<img [src]=\"artist.images | noimage\" width=\"100%\">\n\t\t</div>\n\t\t<div class=\"col l8 m6 s12\">\n\t\t\t<h6>Artist: <span class=\"light\">{{artist.name}}</span></h6>\n\t\t\t<h6>Type: <span class=\"light\">{{artist.type}}</span></h6>\n\t\t\t<h6>Popularity: <span class=\"light\">{{artist.popularity}}</span></h6>\n\t\t\t<h6>Followers: <span class=\"light\">{{artist.followers?.total | number}}</span></h6>\n\t\t\t<h6>Genres: <div class=\"chip\" *ngFor=\"let x of artist.genres\">{{x}}</div></h6>\n\t\t</div>\n\t</div>\n\t<div class=\"row center\">\n\t\t<div class=\"divider\"></div>\n\t\t<br>\n\t\t<a href=\"{{artist.external_urls?.spotify}}\" target=\"_blank\">Open in Spotify</a>\n\t</div>\n</div>\n<br>\n<section id=\"top-tracks\" >\n\t<h2 class=\"center white-text\" id=\"title\">Top tracks of {{artist.name}}</h2>\n\t<div class=\"home-container\">\n\t\t<div class=\"row\">\n\t\t\t<div class=\"col s12 m6\" *ngFor=\"let x of topTracks\">\n\t\t\t<div class=\"card horizontal \">\n\t\t\t\t<div class=\"card-image\">\n\t\t\t\t\t<img [src]=\"x.album.images | noimage\" height=\"100%\" width=\"100%\">\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-stacked\">\n\t\t\t\t\t<div class=\"card-content\">\n\t\t\t\t\t\t<span class=\"card-title black-text\">{{x.name}}</span>\n\t\t\t\t\t\t<p>{{x.album.release_date | date}}</p>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"card-action\">\n\t\t\t\t\t\t<iframe [src]=\"x.uri | domsafe:'https://open.spotify.com/embed?uri='\" width=\"100%\" height=\"80px\" frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t\t</div>\n\t</div>\n</section>\n\n<style>\n#top-tracks{\n\tbackground-image: linear-gradient(#080b0d, #384b5e);\n}\n\n#title{\n\tpadding-top: 50px;\n}\n</style>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"home-container animated fadeIn\">\n\t<div class=\"row\">\n\t\t<div class=\"col s12 m4 l3\" *ngFor=\"let x of items\">\n\t\t\t<div class=\"card large\">\n\t\t\t\t<div class=\"card-image pointer\">\n\t\t\t\t\t<a target=\"_blank\" (click)=\"seeDetails(x)\"><img [src]=\"x.images | noimage\"></a>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-content\">\n\t\t\t\t\t<span class=\"card-title black-text\">{{x.name}}</span>\n\t\t\t\t\t<p class=\"light\">{{x.release_date}}</p>\n\t\t\t\t</div>\n\t\t\t\t<div class=\"card-action center\">\n\t\t\t\t\t<div class=\"chip\" *ngFor=\"let y of x.artists\">\n\t\t\t\t\t{{y.name}}\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t</div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n\n<app-preloader [name]=\"'Searching new releases...'\" *ngIf=\"preloading\"></app-preloader>\n<div class=\"container center animated shake\" *ngIf=\"error\">\n\t<i class=\"material-icons md-164\">error_outline</i>\n\t<h3 class=\"error\">{{message}}</h3>\n</div>\n<app-card [items] = \"newReleases\"></app-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav>\n  <div class=\"nav-wrapper\">\n    <a href='#' class=\"brand-logo\">Music App</a>\n    <a href=\"#\" data-target=\"mobile-nav\" class=\"sidenav-trigger\"\n      ><i class=\"material-icons\">menu</i></a\n    >\n    <ul class=\"right hide-on-med-and-down\">\n      <li><a [routerLink]=\"['/home']\" routerLinkActive=\"active\">Home</a></li>\n      <li>\n        <a [routerLink]=\"['/search']\" routerLinkActive=\"active\">Search</a>\n      </li>\n      <li>\n        <a [routerLink]=\"['/artist']\" routerLinkActive=\"active\">Artist</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<ul class=\"sidenav\" id=\"mobile-nav\">\n  <li><a [routerLink]=\"['/home']\" routerLinkActive=\"active\">Home</a></li>\n  <li>\n    <a [routerLink]=\"['/search']\" routerLinkActive=\"active\">Search</a>\n  </li>\n  <li>\n    <a [routerLink]=\"['/artist']\" routerLinkActive=\"active\">Artist</a>\n  </li>\n</ul>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/preloader/preloader.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/preloader/preloader.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center\" id=\"pre\">\n\t<div class=\"preloader-wrapper big active\">\n\t\t<div class=\"spinner-layer spinner-spotify \">\n\t\t\t<div class=\"circle-clipper left\">\n\t\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"gap-patch\">\n\t\t\t\t<div class=\"circle\"></div>\n\t\t\t</div><div class=\"circle-clipper right\">\n\t\t\t\t<div class=\"circle\"></div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t<h5>{{name}}</h5>\n</div>\n\n<style>\n\t.spinner-spotify {\n\t\tborder-color: #50ba5f;\n\t}\n\n\t#pre{\n\t\tpadding-top: 50px;\n\t\tcolor: #bdbdbd;\n\t}\n</style>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\n<div>\n\t<div class=\"section no-pad-bot\" id=\"top\">\n\t\t<div class=\"container \">\n\t\t\t<h1 class=\"white-text animated fadeIn\">Find out a thousand of artists!</h1>\n\t\t\t<h4 class=\"light white-text animated fadeIn valign-wrapper \"><i class=\"material-icons md-36 hide-on-small-only\">search</i>Type and press enter to look for an artist.</h4>\n\t\t\t<br>\n\t\t</div>\n\t</div>\n</div>\n\n<div class=\"container\" id=\"search-container\">\n\t<nav>\n\t\t<div class=\"nav-wrapper grey lighten-5\">\n\t\t\t<form onsubmit=\"return false\">\n\t\t\t\t<div class=\"input-field\">\n\t\t\t\t\t<input id=\"search\" type=\"search\" required placeholder=\"Let's find artists...\" (keyup.enter)=\"searchArtist(inputSearchArtist.value)\" #inputSearchArtist>\n\t\t\t\t\t<label class=\"label-icon\" for=\"search\"><i class=\"material-icons grey-text\">search</i></label>\n\t\t\t\t\t<i class=\"material-icons\">close</i>\n\t\t\t\t</div>\n\t\t\t</form>\n\t\t</div>\n\t</nav>\n</div>\n\n<app-card [items]=\"artists\"></app-card>\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.ngOnInit = function () {
        console.log('firing');
        $(document).ready(function () {
            console.log('firing2');
            $('.sidenav').sidenav();
            console.log('fired');
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routes */ "./src/app/app.routes.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_artist_artist_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/artist/artist.component */ "./src/app/components/artist/artist.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var _pipes_noimage_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pipes/noimage.pipe */ "./src/app/pipes/noimage.pipe.ts");
/* harmony import */ var _components_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/card/card.component */ "./src/app/components/card/card.component.ts");
/* harmony import */ var _components_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/preloader/preloader.component */ "./src/app/components/preloader/preloader.component.ts");
/* harmony import */ var _pipes_domsafe_pipe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pipes/domsafe.pipe */ "./src/app/pipes/domsafe.pipe.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};













var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                _components_artist_artist_component__WEBPACK_IMPORTED_MODULE_6__["ArtistComponent"],
                _components_search_search_component__WEBPACK_IMPORTED_MODULE_7__["SearchComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _pipes_noimage_pipe__WEBPACK_IMPORTED_MODULE_9__["NoimagePipe"],
                _components_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"],
                _components_preloader_preloader_component__WEBPACK_IMPORTED_MODULE_11__["PreloaderComponent"],
                _pipes_domsafe_pipe__WEBPACK_IMPORTED_MODULE_12__["DomsafePipe"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _app_routes__WEBPACK_IMPORTED_MODULE_3__["APP_ROUTING"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/*! exports provided: APP_ROUTING */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_ROUTING", function() { return APP_ROUTING; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/search/search.component */ "./src/app/components/search/search.component.ts");
/* harmony import */ var _components_artist_artist_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/artist/artist.component */ "./src/app/components/artist/artist.component.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




var APP_ROUTES = [
    { path: 'home', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: 'search', component: _components_search_search_component__WEBPACK_IMPORTED_MODULE_2__["SearchComponent"] },
    { path: 'artist/:id', component: _components_artist_artist_component__WEBPACK_IMPORTED_MODULE_3__["ArtistComponent"] },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var APP_ROUTING = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(APP_ROUTES, { useHash: true });


/***/ }),

/***/ "./src/app/components/artist/artist.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/artist/artist.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYXJ0aXN0L2FydGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/artist/artist.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/artist/artist.component.ts ***!
  \*******************************************************/
/*! exports provided: ArtistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ArtistComponent", function() { return ArtistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/spotify.service */ "./src/app/services/spotify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var ArtistComponent = /** @class */ (function () {
    function ArtistComponent(_activatedRoute, _spotifyService) {
        var _this = this;
        this._activatedRoute = _activatedRoute;
        this._spotifyService = _spotifyService;
        this.artist = {};
        this.preloading = true;
        this.topTracks = [];
        this._activatedRoute.params.subscribe(function (params) {
            _this.artistId = params['id'];
        });
    }
    ArtistComponent.prototype.ngOnInit = function () {
        this.getArtist();
        this.getTopTracks();
    };
    ArtistComponent.prototype.getArtist = function () {
        var _this = this;
        this._spotifyService.getArtistById(this.artistId).subscribe(function (data) {
            _this.artist = data;
            console.log(data);
            _this.preloading = false;
        });
    };
    ArtistComponent.prototype.getTopTracks = function () {
        var _this = this;
        this._spotifyService.getTopTracks(this.artistId).subscribe(function (data) {
            // this.artist=data;
            console.log(data);
            _this.topTracks = data;
        });
    };
    ArtistComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] },
        { type: _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"] }
    ]; };
    ArtistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-artist',
            template: __importDefault(__webpack_require__(/*! raw-loader!./artist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/artist/artist.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./artist.component.css */ "./src/app/components/artist/artist.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_spotify_service__WEBPACK_IMPORTED_MODULE_2__["SpotifyService"]])
    ], ArtistComponent);
    return ArtistComponent;
}());



/***/ }),

/***/ "./src/app/components/card/card.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/card/card.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2FyZC9jYXJkLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/card/card.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/card/card.component.ts ***!
  \***************************************************/
/*! exports provided: CardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CardComponent", function() { return CardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var CardComponent = /** @class */ (function () {
    function CardComponent(_router) {
        this._router = _router;
        this.items = [];
    }
    CardComponent.prototype.ngOnInit = function () { };
    CardComponent.prototype.seeDetails = function (item) {
        var artistId;
        if (item.type === 'artist') {
            artistId = item.id;
        }
        else {
            artistId = item.artists[0].id;
        }
        this._router.navigate(['/artist', artistId]);
    };
    CardComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], CardComponent.prototype, "items", void 0);
    CardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-card',
            template: __importDefault(__webpack_require__(/*! raw-loader!./card.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/card/card.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./card.component.css */ "./src/app/components/card/card.component.css")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], CardComponent);
    return CardComponent;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".md-164{\n\tfont-size: 164px;\n\tcolor: #bdbdbd;\n\tpadding-top: 50px;\n}\n\n.error{\n\tcolor: #bdbdbd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsaUJBQWlCO0FBQ2xCOztBQUVBO0NBQ0MsY0FBYztBQUNmIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZC0xNjR7XG5cdGZvbnQtc2l6ZTogMTY0cHg7XG5cdGNvbG9yOiAjYmRiZGJkO1xuXHRwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmVycm9ye1xuXHRjb2xvcjogI2JkYmRiZDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/spotify.service */ "./src/app/services/spotify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(_spotifyService) {
        var _this = this;
        this._spotifyService = _spotifyService;
        this.newReleases = [];
        this.preloading = true;
        this.error = false;
        this._spotifyService.getNewReleases().subscribe(function (data) {
            _this.newReleases = data;
            _this.preloading = false;
        }, function (error) {
            _this.preloading = false;
            _this.error = true;
            _this.message = error.error.error.message;
            console.log(error.error.error.message);
        });
    }
    HomeComponent.prototype.ngOnInit = function () { };
    HomeComponent.ctorParameters = function () { return [
        { type: _services_spotify_service__WEBPACK_IMPORTED_MODULE_1__["SpotifyService"] }
    ]; };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_spotify_service__WEBPACK_IMPORTED_MODULE_1__["SpotifyService"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("nav .nav-wrapper {\n  background-color: #040302;\n}\n\nnav {\n  height: 70px !important;\n  line-height: 70px !important;\n}\n\n/*To center nav elements*/\n\nnav.nav-center ul li {\n  display: inline;\n  float: none;\n}\n\nnav.nav-center ul li a {\n  display: inline-block;\n}\n\n.active {\n  border-bottom: 5px solid #1db954;\n  position: relative;\n  bottom: 4px;\n}\n\nnav .brand-logo {\n  padding-left: 10px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsNEJBQTRCO0FBQzlCOztBQUVBLHlCQUF5Qjs7QUFDekI7RUFDRSxlQUFlO0VBQ2YsV0FBVztBQUNiOztBQUNBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiAubmF2LXdyYXBwZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDQwMzAyO1xufVxuXG5uYXYge1xuICBoZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbiAgbGluZS1oZWlnaHQ6IDcwcHggIWltcG9ydGFudDtcbn1cblxuLypUbyBjZW50ZXIgbmF2IGVsZW1lbnRzKi9cbm5hdi5uYXYtY2VudGVyIHVsIGxpIHtcbiAgZGlzcGxheTogaW5saW5lO1xuICBmbG9hdDogbm9uZTtcbn1cbm5hdi5uYXYtY2VudGVyIHVsIGxpIGEge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5hY3RpdmUge1xuICBib3JkZXItYm90dG9tOiA1cHggc29saWQgIzFkYjk1NDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBib3R0b206IDRweDtcbn1cblxubmF2IC5icmFuZC1sb2dvIHtcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xufVxuIl19 */");

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/components/preloader/preloader.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/preloader/preloader.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJlbG9hZGVyL3ByZWxvYWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/preloader/preloader.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/preloader/preloader.component.ts ***!
  \*************************************************************/
/*! exports provided: PreloaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreloaderComponent", function() { return PreloaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var PreloaderComponent = /** @class */ (function () {
    function PreloaderComponent() {
    }
    PreloaderComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PreloaderComponent.prototype, "name", void 0);
    PreloaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-preloader',
            template: __importDefault(__webpack_require__(/*! raw-loader!./preloader.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/preloader/preloader.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./preloader.component.css */ "./src/app/components/preloader/preloader.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], PreloaderComponent);
    return PreloaderComponent;
}());



/***/ }),

/***/ "./src/app/components/search/search.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/search/search.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".material-icons.md-36 {\n  font-size: 36px;\n}\n\n#top {\n  background-image: linear-gradient(#040302, #1db954);\n  height: 100%;\n  min-height: 27vh;\n  padding-bottom: 60px;\n}\n\n#search-container {\n  padding-top: 50px;\n}\n\n.input-field input[type=\"search\"]:focus {\n  border-bottom: 0px solid !important;\n  box-shadow: 0 0px 0 0 #000 !important;\n}\n\n::-webkit-input-placeholder {\n  color: #bdbdbd;\n  opacity: 1;\n  font-size: 26px;\n}\n\n::-moz-placeholder {\n  color: #bdbdbd;\n  opacity: 1;\n  font-size: 26px;\n}\n\n:-ms-input-placeholder {\n  color: #bdbdbd;\n  opacity: 1;\n  font-size: 26px;\n}\n\n::-ms-input-placeholder {\n  color: #bdbdbd;\n  opacity: 1;\n  font-size: 26px;\n}\n\n::placeholder {\n  color: #bdbdbd;\n  opacity: 1;\n  font-size: 26px;\n}\n\nnav .input-field label.active i {\n  line-height: 38px;\n}\n\n.grey-text {\n  color: #1db954 !important;\n}\n\nnav i,\nnav [class^=\"mdi-\"],\nnav [class*=\"mdi-\"],\nnav i.material-icons {\n  font-size: 40px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zZWFyY2gvc2VhcmNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsbURBQW1EO0VBQ25ELFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsbUNBQW1DO0VBQ25DLHFDQUFxQztBQUN2Qzs7QUFFQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFKQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFKQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFKQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFKQTtFQUNFLGNBQWM7RUFDZCxVQUFVO0VBQ1YsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTs7OztFQUlFLGVBQWU7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NlYXJjaC9zZWFyY2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXRlcmlhbC1pY29ucy5tZC0zNiB7XG4gIGZvbnQtc2l6ZTogMzZweDtcbn1cblxuI3RvcCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjMDQwMzAyLCAjMWRiOTU0KTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4taGVpZ2h0OiAyN3ZoO1xuICBwYWRkaW5nLWJvdHRvbTogNjBweDtcbn1cblxuI3NlYXJjaC1jb250YWluZXIge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn1cblxuLmlucHV0LWZpZWxkIGlucHV0W3R5cGU9XCJzZWFyY2hcIl06Zm9jdXMge1xuICBib3JkZXItYm90dG9tOiAwcHggc29saWQgIWltcG9ydGFudDtcbiAgYm94LXNoYWRvdzogMCAwcHggMCAwICMwMDAgIWltcG9ydGFudDtcbn1cblxuOjpwbGFjZWhvbGRlciB7XG4gIGNvbG9yOiAjYmRiZGJkO1xuICBvcGFjaXR5OiAxO1xuICBmb250LXNpemU6IDI2cHg7XG59XG5cbm5hdiAuaW5wdXQtZmllbGQgbGFiZWwuYWN0aXZlIGkge1xuICBsaW5lLWhlaWdodDogMzhweDtcbn1cblxuLmdyZXktdGV4dCB7XG4gIGNvbG9yOiAjMWRiOTU0ICFpbXBvcnRhbnQ7XG59XG5cbm5hdiBpLFxubmF2IFtjbGFzc149XCJtZGktXCJdLFxubmF2IFtjbGFzcyo9XCJtZGktXCJdLFxubmF2IGkubWF0ZXJpYWwtaWNvbnMge1xuICBmb250LXNpemU6IDQwcHg7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/components/search/search.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/search/search.component.ts ***!
  \*******************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_spotify_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/spotify.service */ "./src/app/services/spotify.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SearchComponent = /** @class */ (function () {
    function SearchComponent(_spotifyService) {
        this._spotifyService = _spotifyService;
        this.artists = [];
    }
    SearchComponent.prototype.ngOnInit = function () { };
    SearchComponent.prototype.searchArtist = function (txt) {
        var _this = this;
        this._spotifyService.getArtist(txt).subscribe(function (data) {
            _this.artists = data;
        });
    };
    SearchComponent.ctorParameters = function () { return [
        { type: _services_spotify_service__WEBPACK_IMPORTED_MODULE_1__["SpotifyService"] }
    ]; };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __importDefault(__webpack_require__(/*! raw-loader!./search.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/search/search.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./search.component.css */ "./src/app/components/search/search.component.css")).default]
        }),
        __metadata("design:paramtypes", [_services_spotify_service__WEBPACK_IMPORTED_MODULE_1__["SpotifyService"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/pipes/domsafe.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/domsafe.pipe.ts ***!
  \***************************************/
/*! exports provided: DomsafePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomsafePipe", function() { return DomsafePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var DomsafePipe = /** @class */ (function () {
    function DomsafePipe(_domSanitizer) {
        this._domSanitizer = _domSanitizer;
    }
    DomsafePipe.prototype.transform = function (value, url) {
        return this._domSanitizer.bypassSecurityTrustResourceUrl(url + value);
    };
    DomsafePipe.ctorParameters = function () { return [
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"] }
    ]; };
    DomsafePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'domsafe'
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], DomsafePipe);
    return DomsafePipe;
}());



/***/ }),

/***/ "./src/app/pipes/noimage.pipe.ts":
/*!***************************************!*\
  !*** ./src/app/pipes/noimage.pipe.ts ***!
  \***************************************/
/*! exports provided: NoimagePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NoimagePipe", function() { return NoimagePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var NoimagePipe = /** @class */ (function () {
    function NoimagePipe() {
    }
    NoimagePipe.prototype.transform = function (images) {
        if (!images) {
            return 'assets/no-image.png';
        }
        if (images.length > 0) {
            return images[0].url;
        }
        else {
            return 'assets/no-image.png';
        }
        return null;
    };
    NoimagePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({
            name: 'noimage'
        })
    ], NoimagePipe);
    return NoimagePipe;
}());



/***/ }),

/***/ "./src/app/services/spotify.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/spotify.service.ts ***!
  \*********************************************/
/*! exports provided: SpotifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpotifyService", function() { return SpotifyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var SpotifyService = /** @class */ (function () {
    function SpotifyService(_http) {
        this._http = _http;
        this.url = 'https://api.spotify.com/v1/';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
            Authorization: 'Bearer BQCUaCDF-fBa75WpXcEbJ-17C_U5C5NC2eSkEoqFLftArST4Dx5D7v0BfCs5YGyowNf00RoDI1twLwVuWGVOA_l1nY8qQt07PVwrkaKFq-S3S3UxYOjOKDhPumP8E90nb9nKA4m_HYYoP7RyM13Z8ncxTaYj9daOYb-etCknVavvTmTYZUWst4qlmJ6OcOnsgIYTFACtEU7XfRP1D_4cYZw24dSljBPimsngkj-L7iJ1X2RzioerzSgCRwg-ptay5SFMTnghUg'
        });
    }
    SpotifyService.prototype.getNewReleases = function () {
        return this._http
            .get(this.url + "browse/new-releases", { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data['albums'].items; }));
    };
    SpotifyService.prototype.getArtist = function (txt) {
        return this._http
            .get(this.url + ("search?q=" + txt + "&type=artist&market=SV&offset=0&limit=20"), { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data['artists'].items; }));
    };
    SpotifyService.prototype.getArtistById = function (id) {
        return this._http.get(this.url + ("artists/" + id), {
            headers: this.headers
        });
    };
    SpotifyService.prototype.getTopTracks = function (id) {
        return this._http
            .get(this.url + ("artists/" + id + "/top-tracks?country=us"), {
            headers: this.headers
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (data) { return data['tracks']; }));
    };
    SpotifyService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
    ]; };
    SpotifyService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SpotifyService);
    return SpotifyService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
var environment = {
    production: true,
    clientId: '0511dcf688e94d04a4a451f5b0572d58',
    clientSecret: 'f9804718399a4552b28d59ecb8f6ee66'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! Z:\my-music-app\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map