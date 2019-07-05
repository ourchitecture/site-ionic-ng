(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");






var HomePageModule = /** @class */ (function () {
    function HomePageModule() {
    }
    HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild([
                    {
                        path: '',
                        component: _home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]
                    }
                ])
            ],
            declarations: [_home_page__WEBPACK_IMPORTED_MODULE_5__["HomePage"]]
        })
    ], HomePageModule);
    return HomePageModule;
}());



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            Ourchitecture\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n    <div class=\"ion-padding\">\n        <ion-card>\n            <ion-card-header>\n                <ion-card-subtitle>Get Started</ion-card-subtitle>\n                <ion-card-title>Our Technology Architecture</ion-card-title>\n            </ion-card-header>\n            <ion-card-content>\n                <p>\n                    Generally, the <a href=\"https://iasaglobal.org/itabok-1/engagement-model/role-descriptions/\">types of architecture roles⭷</a>, fall into these categories:\n                </p>\n                <ion-item>\n                    <ion-label text-wrap>\n                        <ion-text color=\"primary\">Enterprise Architecture:</ion-text>\n                        <p>has mastered the fundamental skills in architecture and has been a practicing professional architect within one of the specializations prior to moving into the enterprise architecture practice. The enterprise architect has learned enough of the specializations to lead the architecture teams within an organization. Enterprise architects will have functioned as a solutions architect to the extent necessary to lead at the enterprise or global level. To be an enterprise architect, a successful candidate will have learned the value of the existing specializations and proven their ability to lead the cross-functional architecture teams to success.</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label text-wrap>\n                        <ion-text color=\"primary\">Solution Architecture:</ion-text>\n                        <p>has mastered the fundamental skills in architecture and has been a practicing architect within delivery based organization. The solution architect is responsible for delivery on one or more projects within the scope of the business case for the solution. Their primary role is to optimize the value of a solution to an organization through delivery and reduce owner risk in its delivery while ensuring the solution meets all compliance and regulatory which impact the system. The solution architect will work with specialist architects, technical staff and stakeholders of the solution to ensure it is delivered or canceled based on the most effective strategy for the organization as a whole.</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label text-wrap>\n                        <ion-text color=\"primary\">Business Architecture:</ion-text>\n                        <p>provides leadership of business initiatives through technology strategy by participating in the development of a business strategy to accomplish specific business goals. They provide innovation and opportunity recognition within business units. Specifically the business architect has mastered the delivery of value through technology support of business strategy. The business architect has developed their understanding of business valuation, business process and business strategy delivery. They act as a liaison from the technology groups to enhance business development and have tremendously advanced skills in business valuation of technology as well has human dynamics.</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label text-wrap>\n                        <ion-text color=\"primary\">Information Architecture:</ion-text>\n                        <p>directs the use, integration and storage of information within a particular business unit (vertical structure) or business capability (horizontal structure). The information architect may focus in on one particular form such as usage focused strategy, information storage or other elements of information architecture or but must consider all elements of information architecture in the organization or customer base. The information architect has mastered the management of information across and within their industry.</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label text-wrap>\n                        <ion-text color=\"primary\">Infrastructure Architecture:</ion-text>\n                        <p>provides strategic uses of infrastructure, network, and operations as an asset. They create and deliver technology strategies to optimize the use of technology resources related to hardware and physical system. It should be noted, this is not meant as quantitative overlap with the upcoming physical system architect who focuses on highly complex physical systems engineering domains such as satellite, defense, and embedded technology though there is some overlap. The infrastructure architect uses their mastery of network, computing platform and operations to guide the organization to valuable investments in hardware and platform.</p>\n                    </ion-label>\n                </ion-item>\n                <ion-item>\n                    <ion-label text-wrap>\n                        <ion-text color=\"primary\">Software Architecture:</ion-text>\n                        <p>has mastered the value, use, development and delivery of software intensive systems. They have developed skills in software development lifecycles, software engineering and software design. The software architect is responsible for the value generated from software systems or system of systems within their direct supervision. They work with project teams to ensure value is delivered for investment and feed resulting valuation results into the business, information and infrastructure areas.</p>\n                    </ion-label>\n                </ion-item>\n            </ion-card-content>\n        </ion-card>\n    </div>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomePage = /** @class */ (function () {
    function HomePage() {
    }
    HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
            styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomePage);
    return HomePage;
}());



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map