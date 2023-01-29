/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"styles.css\");\n\n//# sourceURL=webpack://webpack_ts/./src/styles.scss?");

/***/ }),

/***/ "./src/scripts.ts":
/*!************************!*\
  !*** ./src/scripts.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\nvar __extends = (undefined && undefined.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        if (typeof b !== \"function\" && b !== null)\r\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nvar Carousel = /** @class */ (function () {\r\n    function Carousel(selector) {\r\n        this.rootElement = document.querySelector(selector);\r\n        this.currImgIndex = 0;\r\n        this.images = Array.from(this.rootElement.querySelectorAll(\"img\"));\r\n        this.imgNumber = this.images.length;\r\n        this.init();\r\n    }\r\n    Carousel.prototype.init = function () {\r\n        this.imgContainer = this.createImgContainer(this.images, this.rootElement);\r\n        this.hideAll(this.images);\r\n        this.unhideNeighbours(this.images, this.currImgIndex);\r\n        this.buttonWrapper = this.createButtonWrapper();\r\n        this.nextButton = this.createButton(\"next\", \"fa-solid fa-chevron-right\");\r\n        this.prevButton = this.createButton(\"prev\", \"fa-solid fa-chevron-left\");\r\n        this.handleBtnVisibility(this.currImgIndex);\r\n    };\r\n    Carousel.prototype.createImgContainer = function (images, target) {\r\n        var imgContainer = document.createElement(\"div\");\r\n        imgContainer.classList.add(\"image-container\");\r\n        images.forEach(function (image) {\r\n            image.classList.add(\"image\");\r\n            imgContainer.appendChild(image);\r\n        });\r\n        this.rootElement.appendChild(imgContainer);\r\n        return imgContainer;\r\n    };\r\n    Carousel.prototype.hideAll = function (elements) {\r\n        elements.forEach(function (element, i) {\r\n            element.classList.add(\"hidden\");\r\n        });\r\n    };\r\n    Carousel.prototype.unhideNeighbours = function (images, index) {\r\n        images.forEach(function (image, i) {\r\n            if (i === index) {\r\n                image.classList.add(\"fade-in\");\r\n                image.classList.remove(\"fade-out\");\r\n            }\r\n            else {\r\n                image.classList.add(\"fade-out\");\r\n                image.classList.remove(\"fade-in\");\r\n            }\r\n            if (Math.abs(i - index) > 1) {\r\n                image.classList.add(\"hidden\");\r\n            }\r\n            else {\r\n                image.classList.remove(\"hidden\");\r\n            }\r\n        });\r\n    };\r\n    Carousel.prototype.createButtonWrapper = function () {\r\n        var buttonWrapper = document.createElement(\"div\");\r\n        buttonWrapper.classList.add(\"button-wrapper\");\r\n        this.imgContainer.appendChild(buttonWrapper);\r\n        return buttonWrapper;\r\n    };\r\n    Carousel.prototype.createButton = function (type, iconStyle) {\r\n        var _this = this;\r\n        var button = document.createElement(\"div\");\r\n        // button.innerText = type;\r\n        var span = document.createElement(\"span\");\r\n        span.className = \"icon\";\r\n        var icon = document.createElement(\"i\");\r\n        icon.className = iconStyle;\r\n        button.append(span);\r\n        span.append(icon);\r\n        button.classList.add(\"button\", type);\r\n        button.addEventListener(\"click\", function () {\r\n            if (type === \"prev\") {\r\n                _this.swapImage(-1);\r\n            }\r\n            else {\r\n                _this.swapImage(1);\r\n            }\r\n        });\r\n        this.buttonWrapper.appendChild(button);\r\n        return button;\r\n    };\r\n    Carousel.prototype.handleBtnVisibility = function (index) {\r\n        if (index <= 0) {\r\n            this.prevButton.classList.add(\"button--hidden\");\r\n        }\r\n        else {\r\n            this.prevButton.classList.remove(\"button--hidden\");\r\n        }\r\n        if (index >= this.imgNumber - 1) {\r\n            this.nextButton.classList.add(\"button--hidden\");\r\n        }\r\n        else {\r\n            this.nextButton.classList.remove(\"button--hidden\");\r\n        }\r\n    };\r\n    Carousel.prototype.swapImage = function (direction) {\r\n        if ((direction === -1 && this.currImgIndex === 0) ||\r\n            (direction === 1 && this.currImgIndex === this.imgNumber - 1)) {\r\n            return;\r\n        }\r\n        this.currImgIndex += direction;\r\n        this.handleBtnVisibility(this.currImgIndex);\r\n        this.unhideNeighbours(this.images, this.currImgIndex);\r\n    };\r\n    return Carousel;\r\n}());\r\nvar CarouselIndic = /** @class */ (function (_super) {\r\n    __extends(CarouselIndic, _super);\r\n    function CarouselIndic(selector) {\r\n        var _this = _super.call(this, selector) || this;\r\n        _this.indicatorWrapper = _this.createIndicatorWrapper();\r\n        _this.indicators = _this.createIndicators();\r\n        _this.updateIndicator();\r\n        return _this;\r\n    }\r\n    CarouselIndic.prototype.createIndicatorWrapper = function () {\r\n        var indicatorWrapper = document.createElement(\"div\");\r\n        indicatorWrapper.classList.add(\"indicator-wrapper\");\r\n        this.rootElement.appendChild(indicatorWrapper);\r\n        return indicatorWrapper;\r\n    };\r\n    CarouselIndic.prototype.createIndicators = function () {\r\n        var _this = this;\r\n        var indicators = [];\r\n        var _loop_1 = function (i) {\r\n            var indicator = document.createElement(\"div\");\r\n            indicator.classList.add(\"indicator\");\r\n            indicator.addEventListener(\"click\", function () {\r\n                _this.swapImage(i - _this.currImgIndex);\r\n            });\r\n            this_1.indicatorWrapper.appendChild(indicator);\r\n            indicators.push(indicator);\r\n        };\r\n        var this_1 = this;\r\n        for (var i = 0; i < this.images.length; i++) {\r\n            _loop_1(i);\r\n        }\r\n        return indicators;\r\n    };\r\n    CarouselIndic.prototype.updateIndicator = function () {\r\n        var _this = this;\r\n        this.indicators.forEach(function (indicator, i) {\r\n            if (i === _this.currImgIndex) {\r\n                indicator.classList.add(\"indicator--current\");\r\n            }\r\n            else {\r\n                indicator.classList.remove(\"indicator--current\");\r\n            }\r\n        });\r\n    };\r\n    CarouselIndic.prototype.swapImage = function (direction) {\r\n        _super.prototype.swapImage.call(this, direction);\r\n        this.updateIndicator();\r\n    };\r\n    return CarouselIndic;\r\n}(Carousel));\r\nvar CarouselThumbs = /** @class */ (function (_super) {\r\n    __extends(CarouselThumbs, _super);\r\n    function CarouselThumbs(selector) {\r\n        var _this = _super.call(this, selector) || this;\r\n        _this.thumbWrapper = _this.createThumbWrapper();\r\n        _this.thumbs = _this.createThumbs();\r\n        _this.swapThumbs();\r\n        _this.updateThumb();\r\n        return _this;\r\n    }\r\n    CarouselThumbs.prototype.swapThumbs = function () {\r\n        this.rootElement.appendChild(this.thumbWrapper);\r\n        this.rootElement.appendChild(this.indicatorWrapper);\r\n    };\r\n    CarouselThumbs.prototype.createThumbWrapper = function () {\r\n        var thumbWrapper = document.createElement(\"div\");\r\n        thumbWrapper.classList.add(\"thumb-wrapper\");\r\n        this.rootElement.appendChild(thumbWrapper);\r\n        return thumbWrapper;\r\n    };\r\n    CarouselThumbs.prototype.createThumbs = function () {\r\n        var _this = this;\r\n        var thumbs = [];\r\n        var _loop_2 = function (i) {\r\n            var thumb = document.createElement(\"img\");\r\n            thumb.src = this_2.images[i].src;\r\n            thumb.classList.add(\"thumb\");\r\n            thumb.addEventListener(\"click\", function () {\r\n                _this.swapImage(i - _this.currImgIndex);\r\n            });\r\n            this_2.thumbWrapper.appendChild(thumb);\r\n            thumbs.push(thumb);\r\n        };\r\n        var this_2 = this;\r\n        for (var i = 0; i < this.images.length; i++) {\r\n            _loop_2(i);\r\n        }\r\n        return thumbs;\r\n    };\r\n    CarouselThumbs.prototype.updateThumb = function () {\r\n        var _this = this;\r\n        this.thumbs.forEach(function (thumb, i) {\r\n            if (i === _this.currImgIndex) {\r\n                thumb.classList.add(\"thumb--current\");\r\n            }\r\n            else {\r\n                thumb.classList.remove(\"thumb--current\");\r\n            }\r\n        });\r\n    };\r\n    CarouselThumbs.prototype.swapImage = function (direction) {\r\n        _super.prototype.swapImage.call(this, direction);\r\n        this.updateThumb();\r\n    };\r\n    return CarouselThumbs;\r\n}(CarouselIndic));\r\nvar CarouselFullscreen = /** @class */ (function (_super) {\r\n    __extends(CarouselFullscreen, _super);\r\n    function CarouselFullscreen(selector) {\r\n        var _this = _super.call(this, selector) || this;\r\n        _this.slidePeriod = 3000;\r\n        _this.fullscreenBtn = _this.createFullscreenBtn();\r\n        _this.slideshowBtn = _this.createSlideshowButton();\r\n        _this.isFullscreen = false;\r\n        _this.addFullScreenListener();\r\n        return _this;\r\n    }\r\n    CarouselFullscreen.prototype.addFullScreenListener = function () {\r\n        var _this = this;\r\n        document.addEventListener(\"fullscreenchange\", function () {\r\n            if (!document.fullscreenElement) {\r\n                _this.showUiElements();\r\n            }\r\n        });\r\n    };\r\n    CarouselFullscreen.prototype.createFullscreenBtn = function () {\r\n        var btn = document.createElement(\"div\");\r\n        btn.innerHTML = '<i class=\"fa-solid fa-expand\"></i>';\r\n        btn.className = (\"carousel__fullscreen-btn small-btn\");\r\n        btn.addEventListener(\"click\", this.toggleFullscreen.bind(this));\r\n        this.buttonWrapper.appendChild(btn);\r\n        return btn;\r\n    };\r\n    CarouselFullscreen.prototype.createSlideshowButton = function () {\r\n        var btn = document.createElement(\"div\");\r\n        btn.innerHTML = '<i class=\"fa-solid fa-circle-play\"></i>';\r\n        btn.className = (\"carousel__slideshow-btn small-btn\");\r\n        btn.addEventListener(\"click\", this.startSlideshow.bind(this));\r\n        this.buttonWrapper.appendChild(btn);\r\n        return btn;\r\n    };\r\n    CarouselFullscreen.prototype.hideUiElements = function () {\r\n        this.indicatorWrapper.classList.add(\"hidden\");\r\n        this.thumbWrapper.classList.add(\"hidden\");\r\n        this.fullscreenBtn.classList.add(\"hidden\");\r\n        this.slideshowBtn.classList.add(\"hidden\");\r\n        this.buttonWrapper.classList.add(\"hidden\");\r\n        this.imgContainer.classList.remove(\"image-container\");\r\n        this.imgContainer.classList.add(\"image-container--fullscreen\");\r\n    };\r\n    CarouselFullscreen.prototype.showUiElements = function () {\r\n        this.indicatorWrapper.classList.remove(\"hidden\");\r\n        this.thumbWrapper.classList.remove(\"hidden\");\r\n        this.fullscreenBtn.classList.remove(\"hidden\");\r\n        this.slideshowBtn.classList.remove(\"hidden\");\r\n        this.buttonWrapper.classList.remove(\"hidden\");\r\n        this.imgContainer.classList.remove(\"image-container--fullscreen\");\r\n        this.imgContainer.classList.add(\"image-container\");\r\n    };\r\n    CarouselFullscreen.prototype.toggleFullscreen = function () {\r\n        if (document.fullscreenElement) {\r\n            this.showUiElements();\r\n            document.exitFullscreen();\r\n        }\r\n        else {\r\n            this.hideUiElements();\r\n            this.rootElement.requestFullscreen();\r\n        }\r\n    };\r\n    CarouselFullscreen.prototype.startSlideshow = function () {\r\n        var _this = this;\r\n        if (this.slideshowInterval) {\r\n            clearInterval(this.slideshowInterval);\r\n            this.slideshowBtn.innerHTML = '<i class=\"fa-solid fa-expand\"></i>';\r\n            this.slideshowInterval = null;\r\n        }\r\n        else {\r\n            this.slideshowInterval = window.setInterval(function () {\r\n                _this.swapImage(1);\r\n                if (_this.currImgIndex === _this.images.length - 1) {\r\n                    _this.currImgIndex = 0;\r\n                }\r\n            }, this.slidePeriod);\r\n            this.slideshowBtn.innerHTML = '<i class=\"fa-solid fa-circle-stop\"></i>';\r\n        }\r\n    };\r\n    CarouselFullscreen.prototype.stopSlideshow = function () {\r\n        clearInterval(this.slideshowInterval);\r\n    };\r\n    return CarouselFullscreen;\r\n}(CarouselThumbs));\r\nvar carousel1 = new Carousel(\".carousel--1\");\r\nvar carousel2 = new CarouselIndic(\".carousel--2\");\r\nvar carousel3 = new CarouselThumbs(\".carousel--3\");\r\nvar carousel4 = new CarouselFullscreen(\".carousel--4\");\r\n\r\n\n\n//# sourceURL=webpack://webpack_ts/./src/scripts.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	__webpack_modules__["./src/scripts.ts"](0, {}, __webpack_require__);
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/styles.scss"](0, __webpack_exports__, __webpack_require__);
/******/ 	
/******/ })()
;