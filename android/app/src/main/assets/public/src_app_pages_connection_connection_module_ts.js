"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_connection_connection_module_ts"],{

/***/ 5514:
/*!***************************************************************!*\
  !*** ./src/app/pages/connection/connection-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionPageRoutingModule": () => (/* binding */ ConnectionPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _connection_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection.page */ 950);




const routes = [
    {
        path: '',
        component: _connection_page__WEBPACK_IMPORTED_MODULE_0__.ConnectionPage
    }
];
let ConnectionPageRoutingModule = class ConnectionPageRoutingModule {
};
ConnectionPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], ConnectionPageRoutingModule);



/***/ }),

/***/ 7069:
/*!*******************************************************!*\
  !*** ./src/app/pages/connection/connection.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionPageModule": () => (/* binding */ ConnectionPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _connection_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection-routing.module */ 5514);
/* harmony import */ var _connection_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection.page */ 950);







let ConnectionPageModule = class ConnectionPageModule {
};
ConnectionPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _connection_routing_module__WEBPACK_IMPORTED_MODULE_0__.ConnectionPageRoutingModule
        ],
        declarations: [_connection_page__WEBPACK_IMPORTED_MODULE_1__.ConnectionPage]
    })
], ConnectionPageModule);



/***/ }),

/***/ 950:
/*!*****************************************************!*\
  !*** ./src/app/pages/connection/connection.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ConnectionPage": () => (/* binding */ ConnectionPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _connection_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./connection.page.html?ngResource */ 8068);
/* harmony import */ var _connection_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./connection.page.scss?ngResource */ 4299);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var src_app_services_authservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/authservice.service */ 3958);







//import { User } from 'src/app/services/authservice.service';

let ConnectionPage = class ConnectionPage {
    constructor(formbuilder, authService, router) {
        this.formbuilder = formbuilder;
        this.authService = authService;
        this.router = router;
    }
    ngOnInit() {
        this.snapForm = this.formbuilder.group({
            username: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(5)]],
            password: [null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__.Validators.minLength(3)]]
        }, {
            updateOn: 'change'
        });
    }
    onSubmitForm() {
        this.authService.findUser(this.snapForm.value).subscribe((value) => {
            this.User = value;
            console.log(this.User);
            if (this.User) {
                this.authService.generateToken();
                this.authService.generateCookie(this.User);
                this.router.navigateByUrl('/home');
            }
            else {
                this.error = 'veuillez vérifier votre username ou password!!!';
            }
        });
    }
    get userName() {
        return this.snapForm.get('username');
    }
    get password() {
        return this.snapForm.get('password');
    }
};
ConnectionPage.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__.FormBuilder },
    { type: src_app_services_authservice_service__WEBPACK_IMPORTED_MODULE_2__.AuthserviceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ConnectionPage = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-connection',
        template: _connection_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_connection_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ConnectionPage);



/***/ }),

/***/ 4299:
/*!******************************************************************!*\
  !*** ./src/app/pages/connection/connection.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = ".img-box {\n  position: absolute;\n  height: 257px;\n  width: 385px;\n  border-bottom-left-radius: 250%;\n  border-bottom-right-radius: 250%;\n  overflow: hidden;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.card {\n  margin-top: 10px;\n}\n\nion-card {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  --background: #f4f5f8b8;\n  margin-top: 127px;\n  height: 426px;\n  width: 301px;\n  border-radius: 4%;\n}\n\nion-list {\n  margin-top: 87px;\n}\n\nion-button {\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  width: 167px;\n}\n\ndiv > ion-button {\n  font-size: 11px;\n  margin: -16px;\n  display: block;\n  margin-left: auto;\n  margin-right: auto;\n  margin-top: 5px;\n  color: darkblue;\n}\n\nion-text {\n  text-align: center;\n  font-family: system-ui;\n  position: absolute;\n  margin-top: -14px;\n}\n\n.icon {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbm5lY3Rpb24ucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLCtCQUFBO0VBQ0EsZ0NBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBREo7O0FBSUE7RUFDSSxnQkFBQTtBQURKOztBQUlBO0VBRUksY0FBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtBQUZKOztBQU1BO0VBQ0ksZ0JBQUE7QUFISjs7QUFNQTtFQUNJLGNBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUhKOztBQU9BO0VBRUksZUFBQTtFQUNBLGFBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0FBTEo7O0FBU0E7RUFDSSxrQkFBQTtFQUVBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQVBKOztBQVVBO0VBQ0ksWUFBQTtBQVBKIiwiZmlsZSI6ImNvbm5lY3Rpb24ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5cbi5pbWctYm94IHtcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcbiAgICBoZWlnaHQ6IDI1N3B4O1xuICAgIHdpZHRoOiAzODVweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAyNTAlO1xuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAyNTAlO1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xufVxuXG4uY2FyZHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG5pb24tY2FyZHtcblxuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICAtLWJhY2tncm91bmQ6ICNmNGY1ZjhiODtcbiAgICBtYXJnaW4tdG9wOiAxMjdweDtcbiAgICBoZWlnaHQ6IDQyNnB4O1xuICAgIHdpZHRoOiAzMDFweDtcbiAgICBib3JkZXItcmFkaXVzOiA0JTtcblxufVxuXG5pb24tbGlzdHtcbiAgICBtYXJnaW4tdG9wOiA4N3B4O1xufVxuXG5pb24tYnV0dG9ue1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICB3aWR0aDogMTY3cHg7XG59XG5cblxuZGl2Pmlvbi1idXR0b257XG5cbiAgICBmb250LXNpemU6IDExcHg7XG4gICAgbWFyZ2luOiAtMTZweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIGNvbG9yOiBkYXJrYmx1ZTtcblxufVxuXG5pb24tdGV4dHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgXG4gICAgZm9udC1mYW1pbHk6IHN5c3RlbS11aTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgbWFyZ2luLXRvcDogLTE0cHg7XG59XG5cbi5pY29ue1xuICAgIGhlaWdodDogNTBweDtcbn1cblxuXG5cblxuXG4iXX0= */";

/***/ }),

/***/ 8068:
/*!******************************************************************!*\
  !*** ./src/app/pages/connection/connection.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = "<ion-content>\n\n\n\n  <div class=\"img-box\">\n    <img src=\"/assets/image/pexels-pixabay-326278.jpg\" alt=\"food image\">\n\n\n  </div>\n\n\n  <div class=\"card\">\n    <ion-card>\n      <ion-card-header>\n\n        <ion-card-title>\n          <ion-text color=\"primary\">\n            <h1>welcome on GreatFood</h1>\n\n          </ion-text>\n        </ion-card-title>\n      </ion-card-header>\n\n\n       <form [formGroup]=\"snapForm\" (ngSubmit)=\"onSubmitForm()\">\n\n\n        <ion-card-content>\n\n          <ion-list>\n            <ion-item>\n              <ion-input type=\"text\" placeholder=\"username\" formControlName=\"username\"></ion-input>\n             \n            </ion-item>\n            <div *ngIf=\"userName.errors !== null && userName.errors.minlength \">\n              <p style=\"color: red;\">username must minimun be 4 characters </p>  \n         </div> \n            \n            <ion-item>\n              <ion-input type=\"password\" placeholder=\"Password\" formControlName=\"password\"></ion-input>\n              <ion-label slot=\"end\">\n                <ion-icon name=\"eye\"></ion-icon>\n              </ion-label>\n            </ion-item>\n            <div *ngIf=\"password.errors !== null && password.errors.minlength\">\n              <p style=\"color: red;\">password must minimun be 3 characters </p>   \n           </div>\n            \n            \n          </ion-list>\n\n          <ion-item lines=\"none\">\n            <ion-select interface=\"popover\" placeholder=\"choose a language\">\n              <ion-select-option value=\"français\">Français</ion-select-option>\n              <ion-select-option value=\"anglais\">Anglais</ion-select-option>\n            </ion-select>\n\n          </ion-item>\n\n\n        </ion-card-content>\n         <p style=\"color: red;\">  {{error}}</p>\n\n\n\n\n\n\n        <ion-button class=\"button\" type=\"submit\" (click)=\"onSubmitForm()\" [disabled]=\"snapForm.invalid\"  shape=\"round\">\n          Sign In\n        </ion-button>\n\n\n      </form>\n\n      <div>\n        <ion-button class=\"\" expand=\"block\" fill=\"clear\" shape=\"round\">\n          Créer mon compte\n        </ion-button>\n        <ion-button  expand=\"block\" fill=\"clear\" shape=\"round\">\n          Mot de passe oublié\n        </ion-button>\n      </div>\n\n    </ion-card>\n\n\n\n\n  </div>\n\n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_connection_connection_module_ts.js.map