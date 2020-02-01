(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"example-container\">\n  <mat-toolbar color=\"primary\" class=\"example-toolbar\">\n    <button [style.display]=\"mobileQuery.matches ? 'block' : 'none'\" mat-icon-button (click)=\"snav.toggle()\"><mat-icon>menu</mat-icon></button>\n    <h1 class=\"example-app-name\">Doxi Yoga</h1>\n    <!-- <mat-nav-list>\n     <a mat-list-item routerLink=\"/\">Home</a>\n     <a mat-list-item routerLink=\"/\">About</a>\n     <a mat-list-item routerLink=\"/\">Contact</a>\n   </mat-nav-list> -->\n   <div  *ngIf=\"!mobileQuery.matches\">\n    <a mat-button [routerLink]=\"'/about'\"> About </a>\n    <a mat-button  [matMenuTriggerFor]=\"menu\"> Schedule </a>\n    <!-- [routerLink]=\"'/schedule'\" -->\n    <mat-menu #menu=\"matMenu\">\n      <button mat-menu-item disabled>\n          <mat-icon>filter_vintage</mat-icon>\n          <span>\n            Private classes\n          </span>\n      </button>\n      <button mat-menu-item disabled> \n        <mat-icon>filter_vintage</mat-icon>\n        <span>\n          Vinyasa flow\n        </span>\n      </button>\n      <button mat-menu-item [routerLink]=\"'/retreat'\">\n          <mat-icon>filter_vintage</mat-icon>\n          <span>\n              Yoga Retreat\n          </span>\n        </button>\n      <button mat-menu-item [routerLink]=\"'/workshop'\">\n          <mat-icon>filter_vintage</mat-icon>\n          <span>\n            Workshops\n          </span>\n      </button>\n      <button mat-menu-item  [routerLink]=\"'/yogaForBeginners'\"> \n        \n        <mat-icon>filter_vintage</mat-icon>\n        <span>Yoga for beginners</span>\n      </button>\n    </mat-menu>\n    <a mat-button [routerLink]=\"'/videos'\"> Videos </a>\n    <a mat-button   [routerLink]=\"['about']\"  fragment=\"contacts\" > Contact </a>\n    <!-- <a mat-button   [routerLink]=\"['about']\"  > Contact </a> -->\n\n  </div>\n  </mat-toolbar>\n  \n  <mat-sidenav-container class=\"example-sidenav-container\"\n  >\n  <!-- [style.marginTop.px]=\"mobileQuery.matches ? 56 : 0\"  -->\n    <mat-sidenav #snav [mode]=\"mobileQuery.matches ? 'over' : 'side'\" [(opened)]=\"opened\"\n                >\n                <!--  [fixedInViewport]=\"mobileQuery.matches\" fixedTopGap=\"56\" -->\n                 <mat-nav-list>\n                  <a mat-list-item routerLink=\"/about\">About</a>\n                  <a mat-list-item  [matMenuTriggerFor]=\"smenu\">Schedule</a>\n                  <mat-menu #smenu=\"matMenu\">\n                    <button mat-menu-item disabled><mat-icon>filter_vintage</mat-icon>\n                      <span>\n                        Private classes\n                      </span></button>\n                    \n                    <button mat-menu-item disabled><mat-icon>filter_vintage</mat-icon>\n                      <span>\n                        Vinyasa flow\n                      </span></button>\n                      <button mat-menu-item [routerLink]=\"'/retreat'\"><mat-icon>filter_vintage</mat-icon>\n                        <span>\n                          Yoga Retreat\n                        </span></button>\n                    <button mat-menu-item [routerLink]=\"'/workshop'\"> <mat-icon>filter_vintage</mat-icon>\n                      <span>\n                        Workshops\n                      </span></button>\n                    <button mat-menu-item [routerLink]=\"'/yogaForBeginners'\"><mat-icon>filter_vintage</mat-icon>\n                      <span>Yoga for beginners</span></button>\n                  </mat-menu>\n                  <a mat-list-item routerLink=\"/videos\">Videos</a>\n                  <a mat-list-item  [routerLink]=\"['about']\"  fragment=\"contacts\">Contact</a>\n                </mat-nav-list>\n    </mat-sidenav>\n   \n    <mat-sidenav-content>\n      <!-- <div>\n        <img class=\"nyuszi\" src=\"./assets/20170728_110710.jpg\">\n        <p>Nyusz Nyusz Nyusz</p>\n      </div> -->\n      <router-outlet></router-outlet>\n    </mat-sidenav-content>\n  </mat-sidenav-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>contact works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"homeContainer\" #homeContainer >\n    <div class=\"toTop\"></div>\n    <div class=\"homepageC \" #homepage id=\"homepage\">\n        <div class=\"homeRow\">\n            <div class=\"homeImg\">\n                <img src=\".\\assets\\photo1.jpg\">\n                <!-- <img src=\".\\assets\\20170728_110710.jpg\"> -->\n            </div>\n            <div class=\"description\">\n                <h2>About Me</h2>\n                <p>My story begins when I arrived to England. \n                    This is where I first met Yoga.\n                    Sport always been an important part of my life, so I was open to trying it out.\n                    First I just practiced at home, watching videos, after I decided to go to my local gym, where I attended to yoga (Hatha) and Pilates classes.\n                    When I was stepping on the yoga mat and started practicing Surya Namaskar, it was a fantastic feeling, physically and mentally filled up me, I was reborn.\n            </p>\n            </div>\n        </div>\n    </div>\n    <div  class=\"homepageC backgroundImage2\">\n        <div class=\"homeRow reverse\">\n            <div class=\"homeImgPortrait\">\n                <img src=\".\\assets\\IMG_20191220_135258.jpg\">\n            </div>\n            <div class=\"description\">\n                <h2>Yoga with Me</h2>\n                <p>After that, I was searching to the opportunity to practicing yoga and I decided to change my lifestyle and that I could focus on yoga. Therefore I decided to apply in a 200 hour yoga teacher training course.\n                    That's how I found Elton Heather's yoga course. The training was very diverse. I learned a lot of things about Asanas and thus meaningful practices that can help purify.\n                    She taught us that yoga is more than just exercise, not just a series of asanas, it's much more.\n                    I would like to proceed to be better myself, and push my limits even further and show it to others how can they practice yoga and relax as a sport what can move every muscle in the whole body. \n                </p>\n            </div>\n        </div>\n    </div>\n    <div  class=\"homepageC \">\n        <div class=\"homeRow\">\n            <div class=\"homeImg\">\n                <img src=\".\\assets\\photo2.jpg\">\n            </div>\n            <div class=\"description\">\n                \n                    <p>        \n                        Other than yoga I do different sports as well, like indoor climbing and practicing contortionist. I like the deep and slow stretching. \n                        Iona Luvsandorj Denning is my performer contortion trainer. She works on our adequate flexibility, handstand and contortion during the class. Help us to keep the right positions in the stretching.\n                        I would like to pass through all of this knowledge and experience to my students.\n                        I not want to just practice yoga, I want to pass on to as many people as possible this knowledge, and positive experiences that have fundamentally changed my life.\n                    </p>\n            </div>\n        </div>\n        <div class=\"homeRow \">\n            <!-- <div class=\"firstStep\"> -->\n                        <button mat-raised-button color=\"primary\" [routerLink]=\"'/yogaForBeginners'\">First step</button>\n                   \n            <!-- </div> -->\n            <!-- <div></div> -->\n        </div>\n    </div>\n    <div  class=\"homepageC backgroundImage\">\n        <div  id=\"contacts\" class=\"theEnd\"></div>\n        <div class=\"homeRow reverse opacity\">\n                <div class=\"contactdetails \">\n                        <!-- <mat-card class=\"contactCard\"> -->\n                                <!-- <mat-card-header></mat-card-header> -->\n                                <mat-list role=\"list\">\n                                    <mat-list-item role=\"listitem\">\n                                        <i class=\"material-icons contactIcon\">phone</i>+4474123456789\n                                    </mat-list-item>\n                                    <mat-list-item role=\"listitem\">\n                                        <i class=\"material-icons contactIcon\">email</i>\n                                        <a href=\"mailto:eudoxia87@gmail.com\"> eudoxia87@gmail.com</a>\n                                    </mat-list-item>\n                                    <mat-list-item role=\"listitem\">\n                                        <i class=\"material-icons contactIcon\">location_city</i>\n                                        West Acton, London\n                                    </mat-list-item>\n                                </mat-list>\n                        <!-- </mat-card> -->\n                </div>\n                <section  class=\"description contactInfo\">\n                        <h2  >Contact</h2> \n                        <p class=\"\">        \n                           If you have a question about me, about yoga or just want to chat, pleaase feel free to drop me a line or call me. \n                        </p>\n                    </section>\n            </div>\n    </div>\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!-- <div>\n    <mat-card class=\"card\">\n            <mat-card-header class=\"cardTitle\">About Me</mat-card-header>\n            <div class=\"section\">\n                <div class=\"firstPara\">\n                    <p>My story begins when I arrived to England. \n                            This is where I first met Yoga.\n                            Sport always been an important part of my life, so I was open to trying it out.\n                            First I just practiced at home, watching videos, after I decided to go to my local gym, where I attended to yoga (Hatha) and Pilates classes.\n                            When I was stepping on the yoga mat and started practicing Surya Namaskar, it was a fantastic feeling, physically and mentally filled up me, I was reborn.\n                    </p>\n                </div>\n                <div class=\"firstPic\">\n                    <img>\n                </div>\n            </div>\n    </mat-card>\n</div>\n<div>\n    <mat-card class=\"card\">\n            <mat-card-header class=\"cardTitle\">Yoga with Me</mat-card-header>\n            <div class=\"section\">\n                <div class=\"firstPic\">\n                    <img>\n                </div>\n                <div class=\"firstPara\">\n                    <p>After that, I was searching to the opportunity to practicing yoga and I decided to change my lifestyle and that I could focus on yoga. Therefore I decided to apply in a 200 hour yoga teacher training course.\n                        That's how I found Elton Heather's yoga course. The training was very diverse. I learned a lot of things about Asanas and thus meaningful practices that can help purify.\n                        She taught us that yoga is more than just exercise, not just a series of asanas, it's much more.\n                        I would like to proceed to be better myself, and push my limits even further and show it to others how can they practice yoga and relax as a sport what can move every muscle in the whole body. \n                    </p>\n                </div>\n            </div> -->\n    <!-- </mat-card>\n</div>\n<div>\n    <mat-card class=\"card\"> -->\n            <!-- <mat-card-header class=\"cardTitle\">Yoga with Me</mat-card-header> -->\n            <!-- <div class=\"section\">\n                <div class=\"firstPara\">\n                    <p>        \n                        Other than yoga I do different sports as well, like indoor climbing and practicing contortionist. I like the deep and slow stretching. \n                        Iona Luvsandorj Denning is my performer contortion trainer. She works on our adequate flexibility, handstand and contortion during the class. Help us to keep the right positions in the stretching.\n                        I would like to pass through all of this knowledge and experience to my students.\n                        I not want to just practice yoga, I want to pass on to as many people as possible this knowledge, and positive experiences that have fundamentally changed my life.\n                    </p>\n                </div>\n                <div class=\"firstPic\">\n                    <img>\n                </div>\n            </div>\n    </mat-card>\n</div>\n\n\n<div class=\"firstStep\">\n    <button mat-raised-button color=\"primary\" [routerLink]=\"'/yogaForBeginners'\">First step</button>\n</div>\n<mat-card class=\"card\">\n    <div class=\"contactCard\">\n        <mat-card >\n                <mat-card-header>Contact</mat-card-header>\n                <mat-list role=\"list\">\n                    <mat-list-item role=\"listitem\">+4474123456789</mat-list-item>\n                    <mat-list-item role=\"listitem\">eudoxia87@gmail.com</mat-list-item>\n                    <mat-list-item role=\"listitem\">West Acton, London</mat-list-item>\n                </mat-list>\n        </mat-card>\n    \n    </div>\n</mat-card> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/retreat/retreat.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/retreat/retreat.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<div class=\"homepageC\">\n        <div class=\"homeRow\">\n            <div class=\"homeImgPortrait\">\n                <img src=\".\\assets\\IMG_20191220_135501.jpg\">\n            </div>\n            <div class=\"description\">\n                <h3>\n                    Yoga Retreat\n                </h3>\n                <p>\n                    Would you like to work on your strength and flexibility, learn more from yoga methods and meditation? \n                    Join us for a 5-day Yoga Retreat in Morocco on the 10th of June – 15th of June in 2020.\n                </p>\n                <p>\n                    Based in a traditional Hotel & Spa Riad which is set in the heart of Marrakech Medina. The rooms and suites at Riad combines a contemporary and Moroccan style. Each room shared with a maximum of 3 people,and equipped with air conditioning. Additional facilities at this Riad include an indoor pool and a restaurant, an on-site spa, a hot tub, and a massage room. There is also a rooftop terrace, where you can try the continental breakfast and admire the panoramic views. It makes scenic locations for morning and evening classes. \n                    The retreat provides a mixture of Hatha classes and traditional Iyengar style yoga. Instruction in asana (postures that hone core strength and flexibility), also you will learn meditations and breathing techniques.\n                </p>\n            </div>   \n        </div>\n<!-- </div>\n<div class=\"homepageC\"> -->\n        <div class=\"homeRow nopaddingTop\">    \n                <div class=\"description \">\n                <h4>\n                    Daily Schedule\n                </h4>\n                    <p>\n                        What will be found here?\n                    </p>\n                    <ul>\n                        <li>\n                            Day 1 <br>\n                            Arrival in a traditional riad, Opening ceremony by having a tea\n                        </li>\n                        <li>\n                            Day 2 <br>\n                            Morning yoga (Awakening the body with Sun salutation)\n                            Breakfast\n                            Offering one day guided trip, camel riding in the desert, by the Atlas mountains.\n                            Arrive back to the Riad \n                        </li>\n                        <li>\n                            Day 3 <br>\n                            Meditations and breathing techniques\n                            Breakfast\n                            Walking tour together in Medina, market street food\n                            Arrive back, and closing the day with Moon salutation in the sunset\n                        </li>\n                        <li>\n                            Day 4 <br>\n                            Morning yoga\n                            Breakfast\n                            Free time for reading, sun-bathing, relaxing near the pool, city tour, shopping\n                            Afternoon tea together in the Riad\n                        </li>\n                        <li>\n                            Day 5 <br>\n                            Meditations and breathing techniques\n                            Breakfast\n                            Check out\n                        </li>\n                    </ul>\n                    <h4>\n                        The price includes:\n                    </h4>\n                    <ul>\n                        <li>\n                            5 nights in shared rooms, single room available for extra fee\n                        </li>\n                        <li>\n                            Breakfast                             \n                        </li>\n                        <li>\n                            Free WiFi access available                            \n                        </li>\n                        <li>\n                            Free coffee or tea                           \n                        </li>\n                        <li>\n                            Daily yoga practices     \n                        </li>\n                        <li>\n                            Guided tour to the desert, including a traditional Berber cuisine\n                        </li>\n                    </ul>\n                    \n                    <p>\n                        Prices start from £750 for a 5-night stay. Contact me with questions or book by email. All levels and abilities are warmly welcomed!\n                    </p>\n                    \n            </div>\n        </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/videos/videos.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/videos/videos.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>videos works!</p> -->\n\n\n<!-- <div class=\"homepageC\"> -->\n    <!-- <div class=\"homeRow\"> -->\n        <!-- <div class=\"homeImg\"> -->\n            <div class=\"yt\">\n                <div  [innerHtml]=\"yt_iframe_html\"></div>\n            </div>\n        <!-- </div> -->\n        <!-- <div class=\"description\">\n            <p>       \n                Would you like to work on your strength and flexibility, learn more from yoga methods and meditation to reach your goals?\n                Yoga can help to feel better yourselves as mentally and physically. Its relaxing you after the long busy days, and give us vitality.\n                Yoga helps purify, improve digestion, positively give shape our body, healing our spine health and play an important role in stress relief.\n                I am sure that if you try it, you will feel these positive effects in the short term.\n            </p>\n        </div> -->\n    <!-- </div> -->\n<!-- </div> -->");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/workshop/workshop.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/workshop/workshop.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"homepageC\">\n    <div class=\"homeRow\">\n        <div class=\"homeImg\">\n            <img src=\".\\assets\\IMG_20191220_140105.jpg\" >\n        </div>\n        <div class=\"description\">\n            <h3>\n                Intro to Backband Workshop\n            </h3>\n            <h4>\n                What would you find here:\n            </h4>\n            <p>       \n                In this intense workshop, we are working in a small group. We'll be going back to basics on how to approach a safe curve for the spine. You'll have enough space and time to really get to grips with what you need to know when you are ready for a wheel pose.\n                We warm up the body, which is followed by standing and sitting poses, then finally going through some Asanas to build strength to the core for a peak pose, after that cooling down our body with a closing sequence. We hold asanas for 5 deep breaths and notice them.\n            </p>\n        </div>\n    </div>\n    <div class=\"homeRow nopaddingTop\">\n            <div class=\"description\">\n            <h4>\n                Areas covered include:\n            </h4>\n            <p>\n                Wrist, shoulder, core strength and mobility\n                Integrate your muscles to keep you safe and strong in backbends\n                Practices by the wall\n                Safe entry and exit\n            </p>\n            <p>\n                Come and join us to have fun on Friday to keep a Healthy Spine Day together.\n                2.5 hour London based workshop \n                Early bird rate: £25\n                ​Regular Price: £35\n                All levels and abilities are warmly welcomed!\n            </p>\n        </div>\n    </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/yoga-for-beginners/yoga-for-beginners.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/yoga-for-beginners/yoga-for-beginners.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n\n<div class=\"homepageC\">\n        <div class=\"homeRow\">\n            <div class=\"homeImg\">\n                <img src=\".\\assets\\IMG_20191220_135803_1.jpg\" >\n            </div>\n            <div class=\"description\">\n                <p>       \n                    Would you like to work on your strength and flexibility, learn more from yoga methods and meditation to reach your goals?\n                    Yoga can help to feel better yourselves as mentally and physically. Its relaxing you after the long busy days, and give us vitality.\n                    Yoga helps purify, improve digestion, positively give shape our body, healing our spine health and play an important role in stress relief.\n                    I am sure that if you try it, you will feel these positive effects in the short term.\n                </p>\n            </div>\n        </div>\n</div>\n\n<!-- <div>\n    <mat-card class=\"card\">\n        <mat-card-header class=\"cardTitle\">Yoga for beginners</mat-card-header>\n        <div class=\"section\">\n            <div class=\"firstPic\">\n                <img>\n            </div>\n            <div class=\"firstPara\">\n                <p>       \n                    Would you like to work on your strength and flexibility, learn more from yoga methods and meditation to reach your goals?\n                    Yoga can help to feel better yourselves as mentally and physically. Its relaxing you after the long busy days, and give us vitality.\n                    Yoga helps purify, improve digestion, positively give shape our body, healing our spine health and play an important role in stress relief.\n                    I am sure that if you try it, you will feel these positive effects in the short term.\n                </p>\n            </div>\n        </div>\n    </mat-card>\n</div> -->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _yoga_for_beginners_yoga_for_beginners_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./yoga-for-beginners/yoga-for-beginners.component */ "./src/app/yoga-for-beginners/yoga-for-beginners.component.ts");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./videos/videos.component */ "./src/app/videos/videos.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _workshop_workshop_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./workshop/workshop.component */ "./src/app/workshop/workshop.component.ts");
/* harmony import */ var _retreat_retreat_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./retreat/retreat.component */ "./src/app/retreat/retreat.component.ts");









const routerOptions = {
    useHash: false,
    // useHash:true,
    anchorScrolling: 'enabled',
    scrollPositionRestoration: 'enabled',
    onSameUrlNavigation: "reload",
};
const routes = [{ path: '', redirectTo: '/about', pathMatch: 'full' },
    { path: 'yogaForBeginners', component: _yoga_for_beginners_yoga_for_beginners_component__WEBPACK_IMPORTED_MODULE_3__["YogaForBeginnersComponent"] },
    { path: 'workshop', component: _workshop_workshop_component__WEBPACK_IMPORTED_MODULE_7__["WorkshopComponent"] },
    { path: 'retreat', component: _retreat_retreat_component__WEBPACK_IMPORTED_MODULE_8__["RetreatComponent"] },
    { path: 'videos', component: _videos_videos_component__WEBPACK_IMPORTED_MODULE_4__["VideosComponent"] },
    { path: 'contact', component: _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"] },
    { path: 'about', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"] },];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, routerOptions)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n  }\r\n  \r\n  .example-is-mobile .example-toolbar {\r\n    position: fixed;\r\n    /* Make sure the toolbar will stay on top of the content as it scrolls past. */\r\n    z-index: 2;\r\n  }\r\n  \r\n  h1.example-app-name {\r\n    margin-left: 8px;\r\n    font-family: \"Samarkan\";\r\n    font-size: 36px;\r\n  }\r\n  \r\n  .example-sidenav-container {\r\n    /* When the sidenav is not fixed, stretch the sidenav container to fill the available space. This\r\n       causes `<mat-sidenav-content>` to act as our scrolling element for desktop layouts. */\r\n    flex: 1;\r\n  }\r\n  \r\n  .example-is-mobile .example-sidenav-container {\r\n    /* When the sidenav is fixed, don't constrain the height of the sidenav container. This allows the\r\n       `<body>` to be our scrolling element for mobile layouts. */\r\n    flex: 1 0 auto;\r\n  }\r\n  \r\n  .nyuszi{\r\n    transform: rotate(90deg);\r\n    width:400px;\r\n    margin-top:60px;\r\n    float:left;\r\n  }\r\n  \r\n  .flower{\r\n    /* height:20px; */\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sU0FBUztJQUNULE9BQU87SUFDUCxRQUFRO0VBQ1Y7O0VBRUE7SUFDRSxlQUFlO0lBQ2YsOEVBQThFO0lBQzlFLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZUFBZTtFQUNqQjs7RUFFQTtJQUNFOzRGQUN3RjtJQUN4RixPQUFPO0VBQ1Q7O0VBRUE7SUFDRTtpRUFDNkQ7SUFDN0QsY0FBYztFQUNoQjs7RUFFQTtJQUNFLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsZUFBZTtJQUNmLFVBQVU7RUFDWjs7RUFFQTtJQUNFLGlCQUFpQjtFQUNuQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1pcy1tb2JpbGUgLmV4YW1wbGUtdG9vbGJhciB7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICAvKiBNYWtlIHN1cmUgdGhlIHRvb2xiYXIgd2lsbCBzdGF5IG9uIHRvcCBvZiB0aGUgY29udGVudCBhcyBpdCBzY3JvbGxzIHBhc3QuICovXHJcbiAgICB6LWluZGV4OiAyO1xyXG4gIH1cclxuICBcclxuICBoMS5leGFtcGxlLWFwcC1uYW1lIHtcclxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XHJcbiAgICBmb250LWZhbWlseTogXCJTYW1hcmthblwiO1xyXG4gICAgZm9udC1zaXplOiAzNnB4O1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgICAvKiBXaGVuIHRoZSBzaWRlbmF2IGlzIG5vdCBmaXhlZCwgc3RyZXRjaCB0aGUgc2lkZW5hdiBjb250YWluZXIgdG8gZmlsbCB0aGUgYXZhaWxhYmxlIHNwYWNlLiBUaGlzXHJcbiAgICAgICBjYXVzZXMgYDxtYXQtc2lkZW5hdi1jb250ZW50PmAgdG8gYWN0IGFzIG91ciBzY3JvbGxpbmcgZWxlbWVudCBmb3IgZGVza3RvcCBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMTtcclxuICB9XHJcbiAgXHJcbiAgLmV4YW1wbGUtaXMtbW9iaWxlIC5leGFtcGxlLXNpZGVuYXYtY29udGFpbmVyIHtcclxuICAgIC8qIFdoZW4gdGhlIHNpZGVuYXYgaXMgZml4ZWQsIGRvbid0IGNvbnN0cmFpbiB0aGUgaGVpZ2h0IG9mIHRoZSBzaWRlbmF2IGNvbnRhaW5lci4gVGhpcyBhbGxvd3MgdGhlXHJcbiAgICAgICBgPGJvZHk+YCB0byBiZSBvdXIgc2Nyb2xsaW5nIGVsZW1lbnQgZm9yIG1vYmlsZSBsYXlvdXRzLiAqL1xyXG4gICAgZmxleDogMSAwIGF1dG87XHJcbiAgfVxyXG4gIFxyXG4gIC5ueXVzeml7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgICB3aWR0aDo0MDBweDtcclxuICAgIG1hcmdpbi10b3A6NjBweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgfVxyXG5cclxuICAuZmxvd2Vye1xyXG4gICAgLyogaGVpZ2h0OjIwcHg7ICovXHJcbiAgfSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");



let AppComponent = class AppComponent {
    constructor(changeDetectorRef, media) {
        this.title = 'DoxiYoga';
        this.opened = false;
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this._mobileQueryListener = () => { changeDetectorRef.detectChanges(); this.opened = false; };
        this.mobileQuery.addListener(this._mobileQueryListener);
    }
    ngOnInit() {
        console.log(this.mobileQuery);
        //  this.route.fragment.subscribe(fragment => { this.fragment = fragment; });
        // const isSmallScreen = breakpointObserver.isMatched('(max-width: 599px)');
    }
    ngAfterViewInit() {
        // try {
        //   console.log(this.fragment)
        //   document.querySelector('#' + this.fragment).scrollIntoView();
        // } catch (e) { }
    }
    ngOnDestroy() {
        this.mobileQuery.removeListener(this._mobileQueryListener);
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["MediaMatcher"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm2015/button.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm2015/layout.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm2015/menu.js");
/* harmony import */ var _yoga_for_beginners_yoga_for_beginners_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./yoga-for-beginners/yoga-for-beginners.component */ "./src/app/yoga-for-beginners/yoga-for-beginners.component.ts");
/* harmony import */ var _videos_videos_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./videos/videos.component */ "./src/app/videos/videos.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/contact/contact.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-page-scroll-core */ "./node_modules/ngx-page-scroll-core/fesm2015/ngx-page-scroll-core.js");
/* harmony import */ var ngx_page_scroll__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ngx-page-scroll */ "./node_modules/ngx-page-scroll/fesm2015/ngx-page-scroll.js");
/* harmony import */ var _workshop_workshop_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./workshop/workshop.component */ "./src/app/workshop/workshop.component.ts");
/* harmony import */ var _retreat_retreat_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./retreat/retreat.component */ "./src/app/retreat/retreat.component.ts");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
























let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
            _yoga_for_beginners_yoga_for_beginners_component__WEBPACK_IMPORTED_MODULE_14__["YogaForBeginnersComponent"],
            _videos_videos_component__WEBPACK_IMPORTED_MODULE_15__["VideosComponent"],
            _contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"],
            _workshop_workshop_component__WEBPACK_IMPORTED_MODULE_20__["WorkshopComponent"],
            _retreat_retreat_component__WEBPACK_IMPORTED_MODULE_21__["RetreatComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_9__["MatSidenavModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_11__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
            _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_12__["LayoutModule"],
            _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_17__["MatCardModule"],
            ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_18__["NgxPageScrollCoreModule"],
            ngx_page_scroll__WEBPACK_IMPORTED_MODULE_19__["NgxPageScrollModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_23__["HttpClientModule"],
            ngx_embed_video__WEBPACK_IMPORTED_MODULE_22__["EmbedVideo"].forRoot()
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/contact/contact.component.css":
/*!***********************************************!*\
  !*** ./src/app/contact/contact.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/contact/contact.component.ts":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/contact/contact.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./contact.component.css */ "./src/app/contact/contact.component.css")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\r\n/* .firstPara{\r\n    padding-left:15px;\r\n    float:left;\r\n    width:35%;\r\n}\r\n.firstPic{\r\n    float:left;\r\n    background-color:lightgray;\r\n    width:55%;\r\n    height:250px;\r\n    padding-right:15px;\r\n    margin-left:35px;\r\n}\r\n.section{\r\n    margin: 15px 0;\r\n    display:inline-block;\r\n    width:100%;\r\n    max-width:1200px;\r\n}\r\n.cardTitle{\r\n    font-size: 40px;\r\n}\r\n\r\n.firstStep{\r\n    margin:25px;\r\n}\r\n\r\n.contactCard{\r\n    width:300px;\r\n    display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n}\r\n\r\n.card{\r\n    margin:10px;\r\n} */\r\n.contacts{\r\n    color:black;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FvQ0c7QUFDSDtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi8qIC5maXJzdFBhcmF7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTVweDtcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICB3aWR0aDozNSU7XHJcbn1cclxuLmZpcnN0UGlje1xyXG4gICAgZmxvYXQ6bGVmdDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6bGlnaHRncmF5O1xyXG4gICAgd2lkdGg6NTUlO1xyXG4gICAgaGVpZ2h0OjI1MHB4O1xyXG4gICAgcGFkZGluZy1yaWdodDoxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6MzVweDtcclxufVxyXG4uc2VjdGlvbntcclxuICAgIG1hcmdpbjogMTVweCAwO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOjEyMDBweDtcclxufVxyXG4uY2FyZFRpdGxle1xyXG4gICAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4uZmlyc3RTdGVwe1xyXG4gICAgbWFyZ2luOjI1cHg7XHJcbn1cclxuXHJcbi5jb250YWN0Q2FyZHtcclxuICAgIHdpZHRoOjMwMHB4O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uY2FyZHtcclxuICAgIG1hcmdpbjoxMHB4O1xyXG59ICovXHJcbi5jb250YWN0c3tcclxuICAgIGNvbG9yOmJsYWNrO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-page-scroll-core */ "./node_modules/ngx-page-scroll-core/fesm2015/ngx-page-scroll-core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let HomeComponent = class HomeComponent {
    constructor(pageScrollService, document, route) {
        this.pageScrollService = pageScrollService;
        this.document = document;
        this.route = route;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // console.log(this.homepage)
        this.route.fragment.subscribe((fragment) => {
            if (fragment == "contacts") {
                this.scrollToElement('.theEnd', 1500);
                this.scrollIt();
            }
            else if (fragment == undefined) {
                // console.log(undefined)
                this.scrollToElement('.toTop', 1);
                this.scrollIt();
            }
        });
        // setTimeout(() => {
        // }, 1200);
    }
    scrollToElement(element, duration) {
        // console.log($element);
        this.pageScrollInstance = this.pageScrollService.create({
            document: this.document,
            scrollTarget: element,
            // scrollTarget: '#contacts',
            scrollViews: [this.homepage.nativeElement],
            duration: duration
        });
    }
    scrollIt() {
        // console.log("called")
        this.pageScrollService.start(this.pageScrollInstance);
    }
};
HomeComponent.ctorParameters = () => [
    { type: ngx_page_scroll_core__WEBPACK_IMPORTED_MODULE_2__["PageScrollService"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('homeContainer', { static: false })
], HomeComponent.prototype, "homepage", void 0);
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]))
], HomeComponent);



/***/ }),

/***/ "./src/app/retreat/retreat.component.scss":
/*!************************************************!*\
  !*** ./src/app/retreat/retreat.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JldHJlYXQvcmV0cmVhdC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/retreat/retreat.component.ts":
/*!**********************************************!*\
  !*** ./src/app/retreat/retreat.component.ts ***!
  \**********************************************/
/*! exports provided: RetreatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RetreatComponent", function() { return RetreatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let RetreatComponent = class RetreatComponent {
    constructor() { }
    ngOnInit() {
    }
};
RetreatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-retreat',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./retreat.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/retreat/retreat.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./retreat.component.scss */ "./src/app/retreat/retreat.component.scss")).default]
    })
], RetreatComponent);



/***/ }),

/***/ "./src/app/videos/videos.component.css":
/*!*********************************************!*\
  !*** ./src/app/videos/videos.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".yt{\r\n    width:90%;\r\n    /* display: flex; */\r\n    /* position: relative; */\r\n\tpadding-bottom: 45%; \r\n\theight: 0;\r\n}\r\n\r\n.yt div {\r\n\tposition: absolute;\r\n\ttop: 5%;\r\n\tleft: 5%;\r\n\twidth: 90%;\r\n    height: 90%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlkZW9zL3ZpZGVvcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksU0FBUztJQUNULG1CQUFtQjtJQUNuQix3QkFBd0I7Q0FDM0IsbUJBQW1CO0NBQ25CLFNBQVM7QUFDVjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixPQUFPO0NBQ1AsUUFBUTtDQUNSLFVBQVU7SUFDUCxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC92aWRlb3MvdmlkZW9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIueXR7XHJcbiAgICB3aWR0aDo5MCU7XHJcbiAgICAvKiBkaXNwbGF5OiBmbGV4OyAqL1xyXG4gICAgLyogcG9zaXRpb246IHJlbGF0aXZlOyAqL1xyXG5cdHBhZGRpbmctYm90dG9tOiA0NSU7IFxyXG5cdGhlaWdodDogMDtcclxufVxyXG5cclxuLnl0IGRpdiB7XHJcblx0cG9zaXRpb246IGFic29sdXRlO1xyXG5cdHRvcDogNSU7XHJcblx0bGVmdDogNSU7XHJcblx0d2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/videos/videos.component.ts":
/*!********************************************!*\
  !*** ./src/app/videos/videos.component.ts ***!
  \********************************************/
/*! exports provided: VideosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideosComponent", function() { return VideosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-embed-video */ "./node_modules/ngx-embed-video/dist/index.js");
/* harmony import */ var ngx_embed_video__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__);



let VideosComponent = class VideosComponent {
    constructor(embedService) {
        this.embedService = embedService;
        this.ytLink = "https://youtu.be/8oY5naf226k";
        this.yt_iframe_html = this.embedService.embed(this.ytLink, {
            // query: { portrait: 0, color: '333' },
            attr: { width: '100%', height: '100%' }
        });
        // this.yt_iframe_html = this.embedService.embed(this.ytLink, {
        //   attr: max-width: 920
        // });
    }
    ngOnInit() {
    }
};
VideosComponent.ctorParameters = () => [
    { type: ngx_embed_video__WEBPACK_IMPORTED_MODULE_2__["EmbedVideoService"] }
];
VideosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-videos',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./videos.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/videos/videos.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./videos.component.css */ "./src/app/videos/videos.component.css")).default]
    })
], VideosComponent);



/***/ }),

/***/ "./src/app/workshop/workshop.component.scss":
/*!**************************************************!*\
  !*** ./src/app/workshop/workshop.component.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3dvcmtzaG9wL3dvcmtzaG9wLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/workshop/workshop.component.ts":
/*!************************************************!*\
  !*** ./src/app/workshop/workshop.component.ts ***!
  \************************************************/
/*! exports provided: WorkshopComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WorkshopComponent", function() { return WorkshopComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let WorkshopComponent = class WorkshopComponent {
    constructor() { }
    ngOnInit() {
    }
};
WorkshopComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-workshop',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./workshop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/workshop/workshop.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./workshop.component.scss */ "./src/app/workshop/workshop.component.scss")).default]
    })
], WorkshopComponent);



/***/ }),

/***/ "./src/app/yoga-for-beginners/yoga-for-beginners.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/yoga-for-beginners/yoga-for-beginners.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3lvZ2EtZm9yLWJlZ2lubmVycy95b2dhLWZvci1iZWdpbm5lcnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/yoga-for-beginners/yoga-for-beginners.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/yoga-for-beginners/yoga-for-beginners.component.ts ***!
  \********************************************************************/
/*! exports provided: YogaForBeginnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YogaForBeginnersComponent", function() { return YogaForBeginnersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let YogaForBeginnersComponent = class YogaForBeginnersComponent {
    constructor() { }
    ngOnInit() {
    }
};
YogaForBeginnersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-yoga-for-beginners',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./yoga-for-beginners.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/yoga-for-beginners/yoga-for-beginners.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./yoga-for-beginners.component.css */ "./src/app/yoga-for-beginners/yoga-for-beginners.component.css")).default]
    })
], YogaForBeginnersComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\repos\Doxi\DoxiYoga\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);