"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_commands_commands_module_ts"],{

/***/ 6868:
/*!***********************************************************!*\
  !*** ./src/app/pages/commands/commands-routing.module.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandsPageRoutingModule": () => (/* binding */ CommandsPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _commands_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands.page */ 3710);




const routes = [
    {
        path: '',
        component: _commands_page__WEBPACK_IMPORTED_MODULE_0__.CommandsPage
    }
];
let CommandsPageRoutingModule = class CommandsPageRoutingModule {
};
CommandsPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CommandsPageRoutingModule);



/***/ }),

/***/ 7086:
/*!***************************************************!*\
  !*** ./src/app/pages/commands/commands.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandsPageModule": () => (/* binding */ CommandsPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _commands_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands-routing.module */ 6868);
/* harmony import */ var _commands_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands.page */ 3710);







let CommandsPageModule = class CommandsPageModule {
};
CommandsPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _commands_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommandsPageRoutingModule
        ],
        declarations: [_commands_page__WEBPACK_IMPORTED_MODULE_1__.CommandsPage]
    })
], CommandsPageModule);



/***/ }),

/***/ 3710:
/*!*************************************************!*\
  !*** ./src/app/pages/commands/commands.page.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CommandsPage": () => (/* binding */ CommandsPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _commands_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./commands.page.html?ngResource */ 9257);
/* harmony import */ var _commands_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./commands.page.scss?ngResource */ 4213);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 2816);





let CommandsPage = class CommandsPage {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    previouspage() {
        this.router.navigateByUrl('/home');
    }
};
CommandsPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
CommandsPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-commands',
        template: _commands_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_commands_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CommandsPage);



/***/ }),

/***/ 4213:
/*!**************************************************************!*\
  !*** ./src/app/pages/commands/commands.page.scss?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = ".icon {\n  margin-top: -77px;\n  color: black;\n  font-size: larger;\n  margin-right: -16px;\n  font-weight: bold;\n  padding: 4px;\n}\n\nion-grid ion-col {\n  background-color: #135d54;\n  border: solid 1px #fff;\n  color: #fff;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbW1hbmRzLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUVJLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFBSjs7QUFJRTtFQUNJLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7QUFETiIsImZpbGUiOiJjb21tYW5kcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaWNvbntcblxuICAgIG1hcmdpbi10b3A6IC03N3B4O1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBmb250LXNpemU6IGxhcmdlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IC0xNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHBhZGRpbmc6IDRweFxuICBcbiAgfVxuXG4gIGlvbi1ncmlkIGlvbi1jb2x7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM1ZDU0O1xuICAgICAgYm9yZGVyOiBzb2xpZCAxcHggI2ZmZjtcbiAgICAgIGNvbG9yOiNmZmY7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH0iXX0= */";

/***/ }),

/***/ 9257:
/*!**************************************************************!*\
  !*** ./src/app/pages/commands/commands.page.html?ngResource ***!
  \**************************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-button slot=\"start\" (click)=\"previouspage()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n   </ion-button>\n    <ion-title>Commands</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n\n  <ion-card  >\n\n    <ion-card-header>\n      <ion-card-subtitle > ATEUTCHIA </ion-card-subtitle>\n\n    </ion-card-header> <ion-card-content>\n\n      <ion-row>\n        <ion-col size=\"12\" class=\"ion-text-right\">\n          <ion-button class=\"icon\" >\n           5000fcfa\n          </ion-button>\n          \n        </ion-col>\n      </ion-row>\n\n\n      \n      <ion-row class=\"ion-align-items-center\">\n        <ion-col size=\"8\">\n          <ion-label color=\"secondary\">\n             <h1 style=\"font-size: 20px;\">Pizza Salamani quantity: 5</h1>  \n\n          </ion-label>\n        </ion-col>\n\n        <ion-col size=\"4\" class=\"ion-text-right\">\n          <ion-button >\n            Confirm\n          </ion-button>\n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-card-content>\n\n  </ion-card> \n\n\n<!-- basic usage of grid with the concept of the property fixed -->\n<ion-grid [fixed]=\"true\">\n  <ion-row >\n    <ion-col size=\"6\">1</ion-col>\n    <ion-col size=\"6\">2</ion-col>\n  </ion-row>\n</ion-grid>\n<!-- le concept ion-grid avec auto-->\n<ion-grid >\n  <ion-row>\n    <ion-col size=\"auto\">ionic dev mobile </ion-col>\n    <ion-col size=\"7\">salut</ion-col>\n  </ion-row>\n</ion-grid>\n\n<!-- le concept ion-grid avec une longueur automatique-->\n<ion-grid fixed>\n  <ion-row>\n    <ion-col size=\"3\">Lundi</ion-col>\n    <ion-col size=\"4\"> Mardi</ion-col>\n    <ion-col size=\"4\"> Mercredi</ion-col>\n    <ion-col>J </ion-col>\n  </ion-row>\n</ion-grid>\n\n\n  \n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_commands_commands_module_ts.js.map