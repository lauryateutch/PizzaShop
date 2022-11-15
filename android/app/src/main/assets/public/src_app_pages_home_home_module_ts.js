"use strict";
(self["webpackChunkapp"] = self["webpackChunkapp"] || []).push([["src_app_pages_home_home_module_ts"],{

/***/ 6610:
/*!***************************************************!*\
  !*** ./src/app/pages/home/home-routing.module.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageRoutingModule": () => (/* binding */ HomePageRoutingModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);




const routes = [
    {
        path: '',
        component: _home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage,
    }
];
let HomePageRoutingModule = class HomePageRoutingModule {
};
HomePageRoutingModule = (0,tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
    })
], HomePageRoutingModule);



/***/ }),

/***/ 7994:
/*!*******************************************!*\
  !*** ./src/app/pages/home/home.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePageModule": () => (/* binding */ HomePageModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6362);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 587);
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page */ 678);
/* harmony import */ var _home_routing_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-routing.module */ 6610);







let HomePageModule = class HomePageModule {
};
HomePageModule = (0,tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule,
            _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule,
            _home_routing_module__WEBPACK_IMPORTED_MODULE_1__.HomePageRoutingModule
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_0__.HomePage]
    })
], HomePageModule);



/***/ }),

/***/ 678:
/*!*****************************************!*\
  !*** ./src/app/pages/home/home.page.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomePage": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! tslib */ 4929);
/* harmony import */ var _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.page.html?ngResource */ 8380);
/* harmony import */ var _home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.page.scss?ngResource */ 2260);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/core */ 3184);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 2816);
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/angular */ 3819);
/* harmony import */ var _component_popover_popover_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../component/popover/popover.component */ 3364);
/* harmony import */ var _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../cart-modal/cart-modal.page */ 6699);
/* harmony import */ var _services_cart_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/cart.service */ 910);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ 6942);
/* harmony import */ var src_app_services_authservice_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/authservice.service */ 3958);











let HomePage = class HomePage {
    constructor(cartService, modalCtrl, popoverController, router, authService) {
        this.cartService = cartService;
        this.modalCtrl = modalCtrl;
        this.popoverController = popoverController;
        this.router = router;
        this.authService = authService;
        this.cart = [];
        this.toplimit = 15;
        this.isOpen = false;
    }
    ngOnInit() {
        this.cart = this.cartService.getCart();
        this.cartItemCount = this.cartService.getCartItemCount();
        /* this.products$= this.cartService.getAllProducts();
        this.data$= this.cartService.getAllProducts(); */
        this.products$ = this.cartService.getAllProducts();
        this.products$.subscribe(value => {
            this.products = value.slice(0, this.toplimit);
            console.log(this.products);
        });
    }
    loadData(event) {
        setTimeout(() => {
            this.products$.subscribe(value => {
                this.toplimit += 10;
                this.products = value.slice(0, this.toplimit);
                event.target.complete();
                if (this.products.length === value.length) {
                    event.target.disabled = true;
                }
            });
        }, 250);
    }
    addToCart(product) {
        this.cartService.addProduct(product);
        this.animateCSS('tada');
        console.log(product);
        console.log(this.cart);
    }
    presentPopoversimple(e) {
        this.popover.event = e;
        this.isOpen = true;
    }
    presentPopover(e) {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            const popover = yield this.popoverController.create({
                component: _component_popover_popover_component__WEBPACK_IMPORTED_MODULE_2__.PopoverComponent,
                event: e,
            });
            yield popover.present();
            const { role } = yield popover.onDidDismiss();
            this.roleMsg = `Popover dismissed with role: ${role}`;
        });
    }
    getColor(country) {
        (2);
        switch (country) {
            case 'France':
                return 'green';
            case 'italie':
                return 'blue';
            case 'cuba':
                return 'red';
            case 'canada':
                return 'yellow';
        }
    }
    openCart() {
        return (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__awaiter)(this, void 0, void 0, function* () {
            this.animateCSS('bounceOutLeft', true);
            let modal = yield this.modalCtrl.create({
                component: _cart_modal_cart_modal_page__WEBPACK_IMPORTED_MODULE_3__.CartModalPage,
                cssClass: 'cart-modal'
            });
            modal.onWillDismiss().then(() => {
                this.fab.nativeElement.classList.remove('animated', 'bounceOutLeft');
                this.animateCSS('bounceInLeft');
            });
            modal.present();
        });
    }
    animateCSS(animationName, keepAnimated = false) {
        const node = this.fab.nativeElement;
        node.classList.add('animated', animationName);
        //https://github.com/daneden/animate.css
        function handleAnimationEnd() {
            if (!keepAnimated) {
                node.classList.remove('animated', animationName);
            }
            node.removeEventListener('animationend', handleAnimationEnd);
        }
        node.addEventListener('animationend', handleAnimationEnd);
    }
    viewItem(id) {
        this.router.navigateByUrl(`home/${id}`);
    }
    filterpizza(event) {
        const query = event.target.value.toLowerCase();
        this.products$ = this.data$.pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_7__.map)(products => products.filter(product => product.name.toLowerCase().indexOf(query) > -1)));
    }
};
HomePage.ctorParameters = () => [
    { type: _services_cart_service__WEBPACK_IMPORTED_MODULE_4__.CartService },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.ModalController },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_8__.PopoverController },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_9__.Router },
    { type: src_app_services_authservice_service__WEBPACK_IMPORTED_MODULE_5__.AuthserviceService }
];
HomePage.propDecorators = {
    fab: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['cart', { static: false, read: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ElementRef },] }],
    popover: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_10__.ViewChild, args: ['popover',] }]
};
HomePage = (0,tslib__WEBPACK_IMPORTED_MODULE_6__.__decorate)([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_10__.Component)({
        selector: 'app-home',
        template: _home_page_html_ngResource__WEBPACK_IMPORTED_MODULE_0__,
        styles: [_home_page_scss_ngResource__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomePage);



/***/ }),

/***/ 2260:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.scss?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "#container {\n  text-align: center;\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 50%;\n  transform: translateY(-50%);\n}\n\n#container strong {\n  font-size: 20px;\n  line-height: 26px;\n}\n\n#container p {\n  font-size: 16px;\n  line-height: 22px;\n  color: #8c8c8c;\n  margin: 0;\n}\n\n#container a {\n  text-decoration: none;\n}\n\nion-fab-button {\n  height: 70px;\n  width: 70px;\n}\n\n.cart-icon {\n  font-size: 50px;\n}\n\n.cart-length {\n  color: var(--ion-color-primary);\n  position: absolute;\n  top: 18px;\n  left: 25px;\n  font-weight: 600;\n  font-size: 1em;\n  min-width: 25px;\n  z-index: 10;\n}\n\n.icon {\n  font-size: 13px;\n  margin-top: -94px;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFFQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxRQUFBO0VBQ0EsUUFBQTtFQUNBLDJCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7QUFBRjs7QUFHQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUVBLGNBQUE7RUFFQSxTQUFBO0FBRkY7O0FBS0E7RUFDRSxxQkFBQTtBQUZGOztBQUtBO0VBQ0UsWUFBQTtFQUNBLFdBQUE7QUFGRjs7QUFLQTtFQUNFLGVBQUE7QUFGRjs7QUFLQTtFQUNFLCtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0FBRkY7O0FBS0E7RUFFRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBSEYiLCJmaWxlIjoiaG9tZS5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjY29udGFpbmVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIHRvcDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTUwJSk7XG59XG5cbiNjb250YWluZXIgc3Ryb25nIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBsaW5lLWhlaWdodDogMjZweDtcbn1cblxuI2NvbnRhaW5lciBwIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjJweDtcblxuICBjb2xvcjogIzhjOGM4YztcblxuICBtYXJnaW46IDA7XG59XG5cbiNjb250YWluZXIgYSB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxuaW9uLWZhYi1idXR0b24ge1xuICBoZWlnaHQ6IDcwcHg7XG4gIHdpZHRoOiA3MHB4O1xufVxuXG4uY2FydC1pY29uIHtcbiAgZm9udC1zaXplOiA1MHB4O1xufVxuXG4uY2FydC1sZW5ndGgge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMThweDtcbiAgbGVmdDogMjVweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxZW07XG4gIG1pbi13aWR0aDogMjVweDtcbiAgei1pbmRleDogMTA7XG59XG5cbi5pY29ue1xuXG4gIGZvbnQtc2l6ZTogMTNweDtcbiAgbWFyZ2luLXRvcDogLTk0cHg7XG4gIGNvbG9yOiBibGFjaztcblxufVxuXG5cblxuXG4iXX0= */";

/***/ }),

/***/ 8380:
/*!******************************************************!*\
  !*** ./src/app/pages/home/home.page.html?ngResource ***!
  \******************************************************/
/***/ ((module) => {

module.exports = "<ion-header [translucent]=\"true\">\n  <ion-toolbar>\n    <ion-title>Shopping</ion-title>\n     <ion-buttons slot=\"start\">\n      <ion-menu-button  menu=\"menuhome\"></ion-menu-button>\n    </ion-buttons>\n\n    \n  </ion-toolbar>\n  \n  <ion-toolbar>\n    <ion-searchbar   [debounce]=\"250\"  (ionChange)=\"filterpizza($event)\" placeholder=\"search your pizza \" show-clear-button=\"always\" clear-icon=\"trash-bin\" ></ion-searchbar>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [fullscreen]=\"true\">\n   <ion-fab vertical=\"top\" horizontal=\"center\" slot=\"fixed\">\n\n    <ion-fab-button (click)=\"openCart()\" #cart>\n      <div class=\"cart-length\">{{cartItemCount | async}}</div>\n      <ion-icon name=\"cart\" class=\"cart-icon\"></ion-icon>\n\n    </ion-fab-button>\n\n  </ion-fab>\n\n  <ion-list>\n    <ion-card *ngFor=\"let p of products \" >\n\n      <ion-card-header>\n        <ion-card-subtitle [ngStyle]=\"{'color': getColor(p.country),'font-size':'15px'}\">{{p.name}} </ion-card-subtitle>\n\n      </ion-card-header>\n\n      <ion-card-content>\n\n        <ion-row>\n          <ion-col size=\"12\" class=\"ion-text-right\">\n            <ion-button  [id]=\"p.id\" fill=\"clear\"  [ngClass]=\"['icon']\">\n              <ion-icon name=\"ellipsis-vertical\"></ion-icon>\n            </ion-button>\n            <ion-popover [trigger]=\"p.id\"  triggerAction=\"click\">\n              <ng-template>\n                <ion-content class=\"ion-padding\">\n                  <ion-list>\n                    <ion-item  [routerLink]=\"['/home',p.id]\" >\n                      <ion-label>show details <ion-icon name=\"enter\"></ion-icon></ion-label>\n                    </ion-item>\n                    <ion-item>\n                      <ion-label>liker <ion-icon name=\"heart\"></ion-icon> </ion-label>\n                    </ion-item>\n\n                  </ion-list>\n                  </ion-content>\n              </ng-template>\n            </ion-popover>\n          </ion-col>\n        </ion-row>\n\n\n        <ion-row class=\"ion-align-items-center\">\n          <ion-col size=\"4\">\n            <ion-label color=\"secondary\">\n              <b>{{p.price | currency: 'USD'}}</b>\n\n            </ion-label>\n          </ion-col>\n\n\n          <ion-col size=\"4\">\n\n            <ion-text [ngStyle]=\"{'color': getColor(p.country),'font-size':'20px'}\">\n\n\n              <h3>{{p.country}} <ion-icon slot=\"start\" name=\"flag\"></ion-icon>\n              </h3>\n            </ion-text>\n\n          </ion-col>\n\n\n\n          <ion-col size=\"4\" class=\"ion-text-right\">\n            <ion-button (click)=\"addToCart(p)\" fill=\"clear\">\n              <ion-icon name=\"add\"></ion-icon>\n            </ion-button>\n\n          </ion-col>\n\n\n\n\n\n\n\n        </ion-row>\n\n\n\n\n      </ion-card-content>\n\n    </ion-card>\n  </ion-list>\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n  <ion-item>\n    <ion-label>\n      <ion-button (click)=\"presentPopoversimple($event)\" expand=\"block\">\n        more options\n    </ion-button>\n    <ion-popover #popover [isOpen]=\"isOpen\" (didDismiss)=\"isOpen= false\" >\n<ng-template >\n\n  <ion-content [ngClass]=\"['font-family-popover', 'background-popover']\"  class=\"ion-padding\">\n    <ion-list>\n      <ion-item   >\n        <ion-label >show details <ion-icon name=\"enter\"></ion-icon></ion-label>\n      </ion-item>\n      <ion-item>\n        <ion-label>liker <ion-icon name=\"heart\"></ion-icon> </ion-label>\n      </ion-item>\n\n    </ion-list>\n  </ion-content>\n\n</ng-template>\n\n    </ion-popover>\n  </ion-label>\n\n  </ion-item>\n\n\n  <p>{{logoutmessage | async}}</p>\n\n\n \n\n  \n\n\n  \n\n\n</ion-content>";

/***/ })

}]);
//# sourceMappingURL=src_app_pages_home_home_module_ts.js.map