(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["main"],{

/***/ 158:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./guards/auth.guard */ 5107);
/* harmony import */ var _guards_login_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./guards/login.guard */ 2721);





const routes = [
    {
        path: '',
        redirectTo: 'cart-m',
        pathMatch: 'full'
    },
    {
        path: 'home',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/home/home.module */ 7994)).then(m => m.HomePageModule), canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_0__.AuthGuard]
    },
    {
        path: 'cart-modal',
        loadChildren: () => Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ./pages/cart-modal/cart-modal.module */ 7828)).then(m => m.CartModalPageModule)
    },
    {
        path: 'home/:id',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_test_test_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/test/test.module */ 5011)).then(m => m.TestPageModule)
    },
    {
        path: 'connection',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_connection_connection_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/connection/connection.module */ 7069)).then(m => m.ConnectionPageModule), canActivate: [_guards_login_guard__WEBPACK_IMPORTED_MODULE_1__.LoginGuard]
    },
    {
        path: 'commands',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_commands_commands_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/commands/commands.module */ 7086)).then(m => m.CommandsPageModule)
    },
    {
        path: 'menu-cart',
        loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_pages_menu-cart_menu-cart_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./pages/menu-cart/menu-cart.module */ 6861)).then(m => m.MenuCartPageModule)
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule.forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_4__.PreloadAllModules })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_4__.RouterModule]
    })
], AppRoutingModule);



/***/ }),

/***/ 5041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.html?ngResource */ 3383);
/* harmony import */ var _app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss?ngResource */ 202);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _services_authservice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/authservice.service */ 3958);






let AppComponent = class AppComponent {
    constructor(authServive) {
        this.authServive = authServive;
        this.title = 'comprendre les directives ngstyle et ngclass';
    }
    ngOnInit() {
        this.UserInfoConnection = this.authServive.getUserInfoConnection();
        this.UserInfoConnection.subscribe(value => this.user = value);
    }
    displaymessage() {
        this.logoutmessage = new rxjs__WEBPACK_IMPORTED_MODULE_3__.BehaviorSubject('ooops vous vous êtes déconnectés');
        console.log('message affiché');
        // this.logoutmessage= this.authServive.getLogoutMessage();
    }
    addStyle() {
        return {
            'font-size.px': 20,
            'font-style': 'italic',
            'color': 'blue'
        };
    }
    addClass() {
        return {
            'btn-bold': true,
            'btn-italic': true,
            'btn-green': true
        };
    }
};
AppComponent.ctorParameters = () => [
    { type: _services_authservice_service__WEBPACK_IMPORTED_MODULE_2__.AuthserviceService }
];
AppComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-root',
        template: _app_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_app_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 6747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _pages_cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/cart-modal/cart-modal.module */ 7828);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser */ 318);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 5041);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ 158);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _component_popover_popover_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/popover/popover.component */ 3364);
/* harmony import */ var _component_list_command_list_command_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/list-command/list-command.component */ 3691);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-cookie-service */ 3694);













let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent, _component_popover_popover_component__WEBPACK_IMPORTED_MODULE_3__.PopoverComponent, _component_list_command_list_command_component__WEBPACK_IMPORTED_MODULE_4__.ListCommandComponent],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__.BrowserModule,
            _pages_cart_modal_cart_modal_module__WEBPACK_IMPORTED_MODULE_0__.CartModalPageModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicModule.forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__.AppRoutingModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.ReactiveFormsModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule,
            _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClientModule
        ],
        providers: [
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_11__.CookieService,
            {
                provide: _angular_router__WEBPACK_IMPORTED_MODULE_12__.RouteReuseStrategy,
                useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.IonicRouteStrategy
            }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    })
], AppModule);



/***/ }),

/***/ 3691:
/*!******************************************************************!*\
  !*** ./src/app/component/list-command/list-command.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCommandComponent": () => (/* binding */ ListCommandComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _list_command_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list-command.component.html?ngResource */ 8781);
/* harmony import */ var _list_command_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./list-command.component.scss?ngResource */ 3031);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let ListCommandComponent = class ListCommandComponent {
    constructor() { }
    ngOnInit() { }
};
ListCommandComponent.ctorParameters = () => [];
ListCommandComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-list-command',
        template: _list_command_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_list_command_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListCommandComponent);



/***/ }),

/***/ 3364:
/*!********************************************************!*\
  !*** ./src/app/component/popover/popover.component.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PopoverComponent": () => (/* binding */ PopoverComponent)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./popover.component.html?ngResource */ 2447);
/* harmony import */ var _popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./popover.component.scss?ngResource */ 2057);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);




let PopoverComponent = class PopoverComponent {
    constructor() { }
    ngOnInit() { }
};
PopoverComponent.ctorParameters = () => [];
PopoverComponent = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-popover',
        template: _popover_component_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_popover_component_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], PopoverComponent);



/***/ }),

/***/ 5107:
/*!**************************************!*\
  !*** ./src/app/guards/auth.guard.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthGuard": () => (/* binding */ AuthGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_authservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/authservice.service */ 3958);




let AuthGuard = class AuthGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        const token = this.auth.generateToken();
        if (token) {
            return true;
        }
        else {
            this.router.navigateByUrl('/connection');
            return false;
        }
    }
};
AuthGuard.ctorParameters = () => [
    { type: _services_authservice_service__WEBPACK_IMPORTED_MODULE_0__.AuthserviceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
AuthGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], AuthGuard);



/***/ }),

/***/ 2721:
/*!***************************************!*\
  !*** ./src/app/guards/login.guard.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginGuard": () => (/* binding */ LoginGuard)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _services_authservice_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../services/authservice.service */ 3958);




let LoginGuard = class LoginGuard {
    constructor(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    canActivate(route, state) {
        const token = this.auth.generateToken();
        if (!token) {
            return true;
        }
        else {
            this.router.navigateByUrl('/home');
            return false;
        }
    }
};
LoginGuard.ctorParameters = () => [
    { type: _services_authservice_service__WEBPACK_IMPORTED_MODULE_0__.AuthserviceService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__.Router }
];
LoginGuard = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], LoginGuard);



/***/ }),

/***/ 5860:
/*!********************************!*\
  !*** ./src/app/models/User.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "User": () => (/* binding */ User)
/* harmony export */ });
class User {
}


/***/ }),

/***/ 6751:
/*!***************************************************************!*\
  !*** ./src/app/pages/cart-modal/cart-modal-routing.module.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartModalPageRoutingModule": () => (/* binding */ CartModalPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _cart_modal_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-modal.page */ 6699);




const routes = [
    {
        path: '',
        component: _cart_modal_page__WEBPACK_IMPORTED_MODULE_0__.CartModalPage
    }
];
let CartModalPageRoutingModule = class CartModalPageRoutingModule {
};
CartModalPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], CartModalPageRoutingModule);



/***/ }),

/***/ 7828:
/*!*******************************************************!*\
  !*** ./src/app/pages/cart-modal/cart-modal.module.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartModalPageModule": () => (/* binding */ CartModalPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-modal-routing.module */ 6751);
/* harmony import */ var _cart_modal_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-modal.page */ 6699);







let CartModalPageModule = class CartModalPageModule {
};
CartModalPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _cart_modal_routing_module__WEBPACK_IMPORTED_MODULE_0__.CartModalPageRoutingModule
        ],
        declarations: [_cart_modal_page__WEBPACK_IMPORTED_MODULE_1__.CartModalPage]
    })
], CartModalPageModule);



/***/ }),

/***/ 6699:
/*!*****************************************************!*\
  !*** ./src/app/pages/cart-modal/cart-modal.page.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartModalPage": () => (/* binding */ CartModalPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _cart_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart-modal.page.html?ngResource */ 135);
/* harmony import */ var _cart_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cart-modal.page.scss?ngResource */ 7543);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ 910);






let CartModalPage = class CartModalPage {
    constructor(cartService, modalCtrl, alertCtrl) {
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.alertCtrl = alertCtrl;
        this.condition = '';
        this.title = 'directives structurelle';
        this.tabdirective = ['ngif', 'ngfor', 'ngswitch', 'ngstyle', 'ngclass'];
        this.genre = 'femme';
        this.genre_1 = 'femme';
        this.genre_2 = 'homme';
        this.cart = [];
    }
    ngOnInit() {
        this.cart = this.cartService.getCart();
    }
    decreaseCartItem(product) {
        this.cartService.decreaseProduct(product);
    }
    increaseCartItem(product) {
        this.cartService.addProduct(product);
    }
    removeCartItem(product) {
        this.cartService.removeProduct(product);
    }
    getTotal() {
        return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
    }
    close() {
        this.modalCtrl.dismiss();
    }
    checkout() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            let alert = yield this.alertCtrl.create({
                header: 'thanks for your order!',
                message: 'we will deliver your food as soon as possible',
                buttons: ['ok']
            });
            alert.present().then(() => {
                this.modalCtrl.dismiss();
            });
        });
    }
};
CartModalPage.ctorParameters = () => [
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController }
];
CartModalPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-cart-modal',
        template: _cart_modal_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_cart_modal_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], CartModalPage);



/***/ }),

/***/ 3958:
/*!*************************************************!*\
  !*** ./src/app/services/authservice.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AuthserviceService": () => (/* binding */ AuthserviceService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ 8784);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ 3694);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/User */ 5860);








let AuthserviceService = class AuthserviceService {
    constructor(http, cookie, router) {
        this.http = http;
        this.cookie = cookie;
        this.router = router;
        this.user1 = new _models_User__WEBPACK_IMPORTED_MODULE_0__.User();
        this.UserInfoConnection = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject(this.user1);
        this.logoutmessage = new rxjs__WEBPACK_IMPORTED_MODULE_1__.BehaviorSubject('ooops vous vous êtes déconnectés');
    }
    getListUser() {
        return this.http.get('http://localhost:3000/User');
    }
    findUser(formValue) {
        return this.getListUser().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.map)(ListUsers => [...ListUsers].find(element => {
            this.UserInfoConnection.next(formValue);
            return element.username === formValue.username && element.password === formValue.password;
        })));
    }
    getUserInfoConnection() {
        return this.UserInfoConnection;
    }
    getLogoutMessage() {
        return this.logoutmessage;
    }
    generateCookie(user) {
        var CryptoJs = __webpack_require__(/*! crypto-js */ 6240);
        //encrypt
        var usernamecrypt = CryptoJs.AES.encrypt(user.username, 'secret key 123').toString();
        console.log('Voici le texte encrypté ' + usernamecrypt);
        this.cookie.set('USERNAME', usernamecrypt);
    }
    generateToken() {
        if (this.cookie.get('USERNAME'))
            return this.token = 'MyToken';
        //this.router.navigateByUrl('/connection')
    }
};
AuthserviceService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__.HttpClient },
    { type: ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__.CookieService },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router }
];
AuthserviceService = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.NgModule)({
        providers: [
            ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__.CookieService
        ]
    }),
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_7__.Injectable)({
        providedIn: 'root'
    })
], AuthserviceService);



/***/ }),

/***/ 910:
/*!******************************************!*\
  !*** ./src/app/services/cart.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CartService": () => (/* binding */ CartService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ 4505);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ 8784);




let CartService = class CartService {
    constructor(http) {
        this.http = http;
        this.cart = [];
        this.cartItemCount = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(0);
    }
    getAllProducts() {
        return this.http.get('http://localhost:3000/Products');
    }
    getProductById(id) {
        return this.http.get('http://localhost:3000/Products/' + id);
    }
    getCart() {
        return this.cart;
    }
    getCartItemCount() {
        return this.cartItemCount;
    }
    addProduct(product) {
        let added = false;
        for (let p of this.cart) {
            console.log('salut');
            if (p.id === product.id) {
                p.amount += 1;
                added = true;
                break;
            }
        }
        if (!added) {
            product.amount = 1;
            this.cart.push(product);
        }
        this.cartItemCount.next(this.cartItemCount.value + 1);
    }
    decreaseProduct(product) {
        for (let [index, p] of this.cart.entries()) {
            if (p.id === product.id) {
                p.amount -= 1;
                if (p.amount == 0) {
                    this.cart.splice(index, 1);
                }
            }
        }
        this.cartItemCount.next(this.cartItemCount.value - 1);
    }
    removeProduct(product) {
        for (let [index, p] of this.cart.entries()) {
            if (p.id === product.id) {
                this.cartItemCount.next(this.cartItemCount.value - p.amount);
                this.cart.splice(index, 1);
            }
        }
    }
};
CartService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__.HttpClient }
];
CartService = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Injectable)({
        providedIn: 'root'
    })
], CartService);



/***/ }),

/***/ 2340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 4431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 8150);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 6747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 2340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.log(err));


/***/ }),

/***/ 863:
/*!******************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \******************************************************************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./ion-accordion_2.entry.js": [
		79,
		"common",
		"node_modules_ionic_core_dist_esm_ion-accordion_2_entry_js"
	],
	"./ion-action-sheet.entry.js": [
		5593,
		"common",
		"node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"
	],
	"./ion-alert.entry.js": [
		3225,
		"common",
		"node_modules_ionic_core_dist_esm_ion-alert_entry_js"
	],
	"./ion-app_8.entry.js": [
		4812,
		"common",
		"node_modules_ionic_core_dist_esm_ion-app_8_entry_js"
	],
	"./ion-avatar_3.entry.js": [
		6655,
		"node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"
	],
	"./ion-back-button.entry.js": [
		4856,
		"common",
		"node_modules_ionic_core_dist_esm_ion-back-button_entry_js"
	],
	"./ion-backdrop.entry.js": [
		3059,
		"node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"
	],
	"./ion-breadcrumb_2.entry.js": [
		8648,
		"common",
		"node_modules_ionic_core_dist_esm_ion-breadcrumb_2_entry_js"
	],
	"./ion-button_2.entry.js": [
		8308,
		"node_modules_ionic_core_dist_esm_ion-button_2_entry_js"
	],
	"./ion-card_5.entry.js": [
		4690,
		"node_modules_ionic_core_dist_esm_ion-card_5_entry_js"
	],
	"./ion-checkbox.entry.js": [
		4090,
		"node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"
	],
	"./ion-chip.entry.js": [
		6214,
		"node_modules_ionic_core_dist_esm_ion-chip_entry_js"
	],
	"./ion-col_3.entry.js": [
		9447,
		"node_modules_ionic_core_dist_esm_ion-col_3_entry_js"
	],
	"./ion-datetime-button.entry.js": [
		7950,
		"default-node_modules_ionic_core_dist_esm_parse-71f28cd7_js-node_modules_ionic_core_dist_esm_t-0c999b",
		"node_modules_ionic_core_dist_esm_ion-datetime-button_entry_js"
	],
	"./ion-datetime_3.entry.js": [
		9689,
		"default-node_modules_ionic_core_dist_esm_parse-71f28cd7_js-node_modules_ionic_core_dist_esm_t-0c999b",
		"common",
		"node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"
	],
	"./ion-fab_3.entry.js": [
		8840,
		"common",
		"node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"
	],
	"./ion-img.entry.js": [
		749,
		"node_modules_ionic_core_dist_esm_ion-img_entry_js"
	],
	"./ion-infinite-scroll_2.entry.js": [
		9667,
		"common",
		"node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"
	],
	"./ion-input.entry.js": [
		3288,
		"node_modules_ionic_core_dist_esm_ion-input_entry_js"
	],
	"./ion-item-option_3.entry.js": [
		5473,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"
	],
	"./ion-item_8.entry.js": [
		3634,
		"common",
		"node_modules_ionic_core_dist_esm_ion-item_8_entry_js"
	],
	"./ion-loading.entry.js": [
		2855,
		"node_modules_ionic_core_dist_esm_ion-loading_entry_js"
	],
	"./ion-menu_3.entry.js": [
		495,
		"common",
		"node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"
	],
	"./ion-modal.entry.js": [
		8737,
		"common",
		"node_modules_ionic_core_dist_esm_ion-modal_entry_js"
	],
	"./ion-nav_2.entry.js": [
		4933,
		"common",
		"node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"
	],
	"./ion-picker-column-internal.entry.js": [
		4446,
		"common",
		"node_modules_ionic_core_dist_esm_ion-picker-column-internal_entry_js"
	],
	"./ion-picker-internal.entry.js": [
		2275,
		"node_modules_ionic_core_dist_esm_ion-picker-internal_entry_js"
	],
	"./ion-popover.entry.js": [
		8050,
		"common",
		"node_modules_ionic_core_dist_esm_ion-popover_entry_js"
	],
	"./ion-progress-bar.entry.js": [
		8994,
		"node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"
	],
	"./ion-radio_2.entry.js": [
		3592,
		"node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"
	],
	"./ion-range.entry.js": [
		5454,
		"common",
		"node_modules_ionic_core_dist_esm_ion-range_entry_js"
	],
	"./ion-refresher_2.entry.js": [
		290,
		"common",
		"node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"
	],
	"./ion-reorder_2.entry.js": [
		2666,
		"common",
		"node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"
	],
	"./ion-ripple-effect.entry.js": [
		4816,
		"node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"
	],
	"./ion-route_4.entry.js": [
		5534,
		"node_modules_ionic_core_dist_esm_ion-route_4_entry_js"
	],
	"./ion-searchbar.entry.js": [
		4902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"
	],
	"./ion-segment_2.entry.js": [
		1938,
		"common",
		"node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"
	],
	"./ion-select_3.entry.js": [
		8179,
		"node_modules_ionic_core_dist_esm_ion-select_3_entry_js"
	],
	"./ion-slide_2.entry.js": [
		668,
		"node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"
	],
	"./ion-spinner.entry.js": [
		1624,
		"common",
		"node_modules_ionic_core_dist_esm_ion-spinner_entry_js"
	],
	"./ion-split-pane.entry.js": [
		9989,
		"node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"
	],
	"./ion-tab-bar_2.entry.js": [
		8902,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"
	],
	"./ion-tab_2.entry.js": [
		199,
		"common",
		"node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"
	],
	"./ion-text.entry.js": [
		8395,
		"node_modules_ionic_core_dist_esm_ion-text_entry_js"
	],
	"./ion-textarea.entry.js": [
		6357,
		"node_modules_ionic_core_dist_esm_ion-textarea_entry_js"
	],
	"./ion-toast.entry.js": [
		8268,
		"node_modules_ionic_core_dist_esm_ion-toast_entry_js"
	],
	"./ion-toggle.entry.js": [
		5269,
		"common",
		"node_modules_ionic_core_dist_esm_ion-toggle_entry_js"
	],
	"./ion-virtual-scroll.entry.js": [
		2875,
		"node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(() => {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(() => {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = 863;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/*!***********************************************!*\
  !*** ./src/app/app.component.scss?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "ion-button {\n  margin-top: 253px;\n  font-size: 24px;\n  margin-left: 214px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQ0oiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWJ1dHRvbntcbiAgICBtYXJnaW4tdG9wOiAyNTNweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgbWFyZ2luLWxlZnQ6IDIxNHB4O1xufSJdfQ== */";

/***/ }),

/***/ 3031:
/*!*******************************************************************************!*\
  !*** ./src/app/component/list-command/list-command.component.scss?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0LWNvbW1hbmQuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 2057:
/*!*********************************************************************!*\
  !*** ./src/app/component/popover/popover.component.scss?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwb3BvdmVyLmNvbXBvbmVudC5zY3NzIn0= */";

/***/ }),

/***/ 7543:
/*!******************************************************************!*\
  !*** ./src/app/pages/cart-modal/cart-modal.page.scss?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjYXJ0LW1vZGFsLnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 3383:
/*!***********************************************!*\
  !*** ./src/app/app.component.html?ngResource ***!
  \***********************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-app>\n\n  <ion-split-pane contentId=\"menu\">\n      <ion-menu contentId=\"menu\" menuId=\"menuhome\" side=\"start\" type=\"push\">\n        <ion-header>\n          <ion-toolbar color=\"tertiary\">\n            <ion-title>Menu</ion-title>\n          </ion-toolbar>\n        </ion-header>\n\n\n\n        <ion-content>\n          <ion-menu-toggle>\n            <ion-item>\n             \n              <h1> Welcome {{user.username}}</h1>\n            </ion-item>\n          </ion-menu-toggle>\n\n          \n          <ion-menu-toggle>\n            <ion-item routerLink=\"home\">\n              <ion-avatar slot=\"start\">\n                <img src=\"assets/image/pizzalogo.png\" />\n              </ion-avatar>\n              <ion-label>See our pizzas</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle>\n            <ion-item routerLink=\"menu-cart\">\n              <ion-avatar slot=\"start\">\n                <img src=\"assets/image/logo.jpeg\" />\n              </ion-avatar>\n              <ion-label>Visit the menu-cart</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle>\n            <ion-item routerLink=\"commands\">\n              <ion-avatar slot=\"start\">\n                <img src=\"assets/image/commands.jpeg\" />\n              </ion-avatar>\n              <ion-label>see your commands here</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-menu-toggle>\n            <ion-item routerLink=\"connection\">\n              <ion-avatar slot=\"start\">\n                <img src=\"assets/image/commands.jpeg\" />\n              </ion-avatar>\n              <ion-label>sign in </ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n\n          <ion-button (click)=\"displaymessage()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n            <ion-icon name=\"log-out\"  color=\"primary\"></ion-icon>        \n            </ion-button>\n\n\n          \n\n        </ion-content>\n      </ion-menu>\n      \n      <ion-router-outlet id=\"menu\"> </ion-router-outlet>\n\n  </ion-split-pane>\n\n \n\n\n \n</ion-app>\n\n\n\n <!-- <div class=\"toolbar\">\n\n    <img src=\"assets/icon/favicon.png\" alt=\"angular logo\">\n    <span> Angular Tutorials </span>\n    <div class=\"spacer\"></div>\n    \n  </div>\n\n  <div class=\"header\"> {{title}} </div>\n  \n\n  <div class=\"content\">\n\n    <button [ngStyle]=\"{'font-size.px': 20, 'font-style': 'italic', 'color': 'red'}\"> \n     ngstyle option 2\n    </button>\n\n    <button [ngStyle]=\"addStyle()\"> ngstyle option1\n\n    </button>\n\n    <br> <br> <br>\n\n    <button [ngClass]=\"['btn-bold', 'btn-italic', 'btn-red']\">ngClass Array</button>\n    <button [ngClass]=\"{'btn-bold': true, 'btn-italic': false, 'btn-blue':false}\">ngClass object</button>\n    <button [ngClass]=\"addClass()\">ngclass function</button>\n\n\n  </div>\n -->\n";

/***/ }),

/***/ 8781:
/*!*******************************************************************************!*\
  !*** ./src/app/component/list-command/list-command.component.html?ngResource ***!
  \*******************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>Header</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <ion-item>\n    <ion-label>Ateutchia</ion-label>\n    <ion-label>date</ion-label>\n    <ion-label>Label</ion-label>\n  </ion-item>\n</ion-content>\n";

/***/ }),

/***/ 2447:
/*!*********************************************************************!*\
  !*** ./src/app/component/popover/popover.component.html?ngResource ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<p>\n  popover works!\n<ion-item>\n  <ion-label>Awesome Label</ion-label>\n</ion-item>\n  \n</p>\nAwesome Label";

/***/ }),

/***/ 135:
/*!******************************************************************!*\
  !*** ./src/app/pages/cart-modal/cart-modal.page.html?ngResource ***!
  \******************************************************************/
/***/ ((module) => {

"use strict";
module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-title>cartModal</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n <!--  <p *ngIf=\"tabdirective && tabdirective.length > 0\"> {{title}}</p>\n\n  <div [ngSwitch]=\"genre\">\n\n    <p *ngSwitchCase=\"genre_1\">  je suis une {{genre_1}} </p>\n    <p *ngSwitchCase=\"genre_2\">  je suis un {{genre_2}} </p>\n\n\n  </div> -->\n\n  <div class=\"ion-text-end\">\n    <ion-button (click)=\"close()\" fill=\"clear\" color=\"dark\">\n      <ion-icon name=\"close\" slot=\"start\"></ion-icon>\n    </ion-button>\n  </div>\n\n  <div class=\"ion-padding\">\n\n    <ion-list>\n      <ion-item *ngFor=\"let p of cart\" class=\"ion-text-wrap\">\n        <ion-grid>\n          <ion-row class=\"ion-align-items-center\">\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"decreaseCartItem(p)\">\n                <ion-icon name=\"remove-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n\n            <ion-col size=\"1\" class=\"ion-align-self-center\">\n              {{ p.amount }}\n            </ion-col>\n\n            <ion-col size=\"2\" class=\"ion-align-self-center\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"increaseCartItem(p)\">\n                <ion-icon name=\"add-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n\n            <ion-col size=\"2\" offset=\"5\">\n              <ion-button color=\"medium\" fill=\"clear\" (click)=\"removeCartItem(p)\">\n                <ion-icon name=\"close-circle\" slot=\"icon-only\"></ion-icon>\n              </ion-button>\n            </ion-col>\n          </ion-row>\n          <ion-row>\n            <ion-col size=\"9\">\n              <b>{{ p.name }}</b>\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              {{ p.amount * p.price | currency:'USD' }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n      <ion-item>\n        <ion-grid>\n          <ion-row>\n            <ion-col size=\"9\">\n              Total:\n            </ion-col>\n            <ion-col size=\"3\" class=\"ion-text-end\">\n              {{ getTotal() | currency:'USD' }}\n            </ion-col>\n          </ion-row>\n        </ion-grid>\n      </ion-item>\n    </ion-list>\n\n    <ion-button expand=\"full\" (click)=\"checkout()\">\n      Checkout\n    </ion-button>\n  </div>\n \n\n  \n\n\n\n</ion-content>\n";

/***/ }),

/***/ 2480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4431)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map