"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_test_test_module_ts"],{

/***/ 4385:
/*!***************************************************!*\
  !*** ./src/app/pages/test/test-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPageRoutingModule": () => (/* binding */ TestPageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.page */ 2941);




const routes = [
    {
        path: '',
        component: _test_page__WEBPACK_IMPORTED_MODULE_0__.TestPage
    }
];
let TestPageRoutingModule = class TestPageRoutingModule {
};
TestPageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule],
    })
], TestPageRoutingModule);



/***/ }),

/***/ 5011:
/*!*******************************************!*\
  !*** ./src/app/pages/test/test.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPageModule": () => (/* binding */ TestPageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _test_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test-routing.module */ 4385);
/* harmony import */ var _test_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.page */ 2941);







let TestPageModule = class TestPageModule {
};
TestPageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _test_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestPageRoutingModule
        ],
        declarations: [_test_page__WEBPACK_IMPORTED_MODULE_1__.TestPage]
    })
], TestPageModule);



/***/ }),

/***/ 2941:
/*!*****************************************!*\
  !*** ./src/app/pages/test/test.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TestPage": () => (/* binding */ TestPage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _test_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.page.html?ngResource */ 5310);
/* harmony import */ var _test_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./test.page.scss?ngResource */ 1001);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/cart.service */ 910);







let TestPage = class TestPage {
    constructor(alertController, router, route, cartService) {
        this.alertController = alertController;
        this.router = router;
        this.route = route;
        this.cartService = cartService;
        this.handlerMessage = '';
        this.roleMessage = '';
        this.textMessage = '';
    }
    ngOnInit() {
        const productid = +this.route.snapshot.params['id'];
        this.cartService.getProductById(productid).subscribe((value) => {
            this.product = value;
            console.log(this.product);
        });
    }
    previouspage() {
        this.router.navigateByUrl('/home');
    }
    presentAlert() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert',
                subHeader: 'Important message',
                message: 'are you sure you want to exit this page',
                buttons: ['OK'],
            });
            yield alert.present();
        });
    }
    presentAlertbuttons() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Alert!',
                cssClass: 'custom-alert',
                buttons: [
                    {
                        text: 'cancel',
                        cssClass: 'alert-button-cancel',
                        handler: () => {
                            this.router.navigateByUrl('/home');
                        },
                    },
                    {
                        text: 'OK',
                        cssClass: 'alert-button-confirm',
                        role: 'confirm',
                        handler: () => {
                            this.handlerMessage = 'Alert confirmed';
                        },
                    },
                ],
            });
            yield alert.present();
            const { role } = yield alert.onDidDismiss();
            this.roleMessage = `Dismissed with role: ${role}`;
        });
    }
    presentAlertInputs() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__awaiter)(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'please submit your command',
                buttons: [
                    {
                        text: 'submit',
                        handler: () => {
                            this.router.navigateByUrl('/commands');
                        },
                    }
                ],
                inputs: [
                    {
                        placeholder: 'Name',
                    },
                    {
                        type: 'number',
                        placeholder: 'enter the quantity',
                        min: 1,
                        max: 200,
                    },
                    {
                        type: 'textarea',
                        placeholder: 'the place to deliver'
                    },
                    {
                        type: 'datetime-local',
                        placeholder: ''
                    },
                ],
            });
            yield alert.present();
        });
    }
};
TestPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__.AlertController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.Router },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__.ActivatedRoute },
    { type: src_app_services_cart_service__WEBPACK_IMPORTED_MODULE_2__.CartService }
];
TestPage = (0,tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_6__.Component)({
        selector: 'app-test',
        template: _test_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_test_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], TestPage);

function onionViewWillEnter() {
    throw new Error('Function not implemented.');
}


/***/ }),

/***/ 1001:
/*!******************************************************!*\
  !*** ./src/app/pages/test/test.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJ0ZXN0LnBhZ2Uuc2NzcyJ9 */";

/***/ }),

/***/ 5310:
/*!******************************************************!*\
  !*** ./src/app/pages/test/test.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header>\n  <ion-toolbar>\n    <ion-button slot=\"start\" (click)=\"previouspage()\" expand=\"block\" fill=\"clear\" shape=\"round\">\n      <ion-icon name=\"arrow-back-outline\"></ion-icon>\n   </ion-button>\n    <ion-title>details</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n  <div *ngIf=\"product != undefined\">\n    <ion-img src=\"assets/image/pexels-valeria-boltneva-9957551.jpg\">\n\n\n    </ion-img>\n    <ion-card>\n  \n      <ion-card-header>\n        <ion-card-subtitle></ion-card-subtitle>\n        <ion-card-title>{{product.name}}</ion-card-title>\n      </ion-card-header>\n  \n      <ion-card-content>\n        In the array of buttons, each button\n         includes properties for its text,\n          and optionally a handler. If a handler returns false then\n           the alert will not automatically be dismissed when the button is clicked.\n            All buttons will show up in the order they have been added to the buttons array from left to right. Note: The right most button (the last one in the array) is the main button.\n  \n               Optionally, a role property can be added to a button, such as cancel. If a cancel role is on one of the buttons, then if the alert is dismissed by tapping the backdrop, then it will fire the handler from the button with a cancel role.\n      </ion-card-content>\n  \n      \n    </ion-card>\n  \n    \n  \n    <ion-item>\n      <ion-label>\n        <ion-button (click)=\"presentAlertbuttons()\"  expand=\"block\" >\n          exit\n        </ion-button>\n      </ion-label>\n      <ion-label>\n        <ion-button (click)=\"presentAlertInputs()\" expand=\"block\"  >\n          command\n        </ion-button> \n      </ion-label>\n      \n    </ion-item>\n  </div>\n\n  <!-- <ion-img src=\"assets/image/pexels-valeria-boltneva-9957551.jpg\">\n\n\n  </ion-img>\n  <ion-card>\n\n    <ion-card-header>\n      <ion-card-subtitle></ion-card-subtitle>\n      <ion-card-title>{{product.name}}</ion-card-title>\n    </ion-card-header>\n\n    <ion-card-content>\n      In the array of buttons, each button\n       includes properties for its text,\n        and optionally a handler. If a handler returns false then\n         the alert will not automatically be dismissed when the button is clicked.\n          All buttons will show up in the order they have been added to the buttons array from left to right. Note: The right most button (the last one in the array) is the main button.\n\n             Optionally, a role property can be added to a button, such as cancel. If a cancel role is on one of the buttons, then if the alert is dismissed by tapping the backdrop, then it will fire the handler from the button with a cancel role.\n    </ion-card-content>\n\n    \n  </ion-card>\n\n  \n\n  <ion-item>\n    <ion-label>\n      <ion-button (click)=\"presentAlertbuttons()\"  expand=\"block\" >\n        exit\n      </ion-button>\n    </ion-label>\n    <ion-label>\n      <ion-button (click)=\"presentAlertInputs()\" expand=\"block\"  >\n        command\n      </ion-button> \n    </ion-label>\n    \n  </ion-item> -->\n\n</ion-content>\n";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_test_test_module_ts.js.map