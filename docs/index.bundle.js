/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./fonts/inter/Inter-VariableFont_slnt,wght.ttf */ "./src/fonts/inter/Inter-VariableFont_slnt,wght.ttf"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! images/sun-pattern.png */ "./src/images/sun-pattern.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@font-face {
    font-family: 'gFonts-Inter';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    font-weight: normal;
    font-size: normal;
  }

*{ box-sizing: border-box;}
body{
  display: grid;
  grid-template-columns: auto 90% auto;
  font-family: 'gFonts-Inter';
  background-image: url(${___CSS_LOADER_URL_REPLACEMENT_1___});
  background-repeat: repeat;
}

.app-container {
  /* center app container */
  grid-column-start: 2;
  /* add margins  */
  margin-top: 5vh;
  margin-bottom: 5vh;
  /* grid display area  */
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(4 auto);
  grid-auto-rows: auto;
  /* visibility color */
  /* background-color: rgb(192, 185, 89); */
  
}
#location-display{
  grid-column: 1 / 4;
  background-color: blueviolet;
  /* subgrid */
  display: grid;
  grid-template-columns: 2rem auto auto;
}
#location-sub{
  grid-column: 2 / 4;
  /* subgrid */
  display: grid;
  grid-template-columns: auto auto;
  /* background-color: blue; */
}
#location-main{
  font-size: 1.5rem;
  font-weight: 600;
}
#location-time{
  grid-column-start: 2;
}


#location-search{
  grid-column-start: 4;
  grid-column-end: 5;
  background-color: rgb(176, 92, 187);
  /* grid-column-end: ; */
}
#weather-data{
  grid-column-start: 1;
  grid-column-end: 5;
  background-color: rgb(87, 133, 133);
  /* subgrid */
  display: grid;
  grid-template-columns: auto auto;
}
#weather-forecast{
  grid-column-start: 1;
  grid-column-end: 2;
  /* background-color: aquamarine; */
}
#weather-numbers{
  grid-column: 2 / 3;
}

/* children of app container */
.app-container > div{
  padding: 1rem;
  border-radius: 1rem;
}

.conditions-label{
  font-weight: 600;
}
#current-conditons-title{
  font-weight: 600;
  font-size: 1.2rem;
}
#current-display{
  font-size: 1.4rem;
}

.svg-icon{
  height: 2.5rem;
}`, "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;IACI,2BAA2B;IAC3B,4CAA2D;IAC3D,mBAAmB;IACnB,iBAAiB;EACnB;;AAEF,GAAG,sBAAsB,CAAC;AAC1B;EACE,aAAa;EACb,oCAAoC;EACpC,2BAA2B;EAC3B,yDAA+C;EAC/C,yBAAyB;AAC3B;;AAEA;EACE,yBAAyB;EACzB,oBAAoB;EACpB,iBAAiB;EACjB,eAAe;EACf,kBAAkB;EAClB,uBAAuB;EACvB,aAAa;EACb,cAAc;EACd,qCAAqC;EACrC,oBAAoB;EACpB,qBAAqB;EACrB,yCAAyC;;AAE3C;AACA;EACE,kBAAkB;EAClB,4BAA4B;EAC5B,YAAY;EACZ,aAAa;EACb,qCAAqC;AACvC;AACA;EACE,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,gCAAgC;EAChC,4BAA4B;AAC9B;AACA;EACE,iBAAiB;EACjB,gBAAgB;AAClB;AACA;EACE,oBAAoB;AACtB;;;AAGA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,mCAAmC;EACnC,uBAAuB;AACzB;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,mCAAmC;EACnC,YAAY;EACZ,aAAa;EACb,gCAAgC;AAClC;AACA;EACE,oBAAoB;EACpB,kBAAkB;EAClB,kCAAkC;AACpC;AACA;EACE,kBAAkB;AACpB;;AAEA,8BAA8B;AAC9B;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;AAClB;AACA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;AACA;EACE,iBAAiB;AACnB;;AAEA;EACE,cAAc;AAChB","sourcesContent":["@font-face {\n    font-family: 'gFonts-Inter';\n    src: url('./fonts/inter/Inter-VariableFont_slnt\\,wght.ttf');\n    font-weight: normal;\n    font-size: normal;\n  }\n\n*{ box-sizing: border-box;}\nbody{\n  display: grid;\n  grid-template-columns: auto 90% auto;\n  font-family: 'gFonts-Inter';\n  background-image: url(\"images/sun-pattern.png\");\n  background-repeat: repeat;\n}\n\n.app-container {\n  /* center app container */\n  grid-column-start: 2;\n  /* add margins  */\n  margin-top: 5vh;\n  margin-bottom: 5vh;\n  /* grid display area  */\n  display: grid;\n  grid-gap: 1rem;\n  grid-template-columns: repeat(4 auto);\n  grid-auto-rows: auto;\n  /* visibility color */\n  /* background-color: rgb(192, 185, 89); */\n  \n}\n#location-display{\n  grid-column: 1 / 4;\n  background-color: blueviolet;\n  /* subgrid */\n  display: grid;\n  grid-template-columns: 2rem auto auto;\n}\n#location-sub{\n  grid-column: 2 / 4;\n  /* subgrid */\n  display: grid;\n  grid-template-columns: auto auto;\n  /* background-color: blue; */\n}\n#location-main{\n  font-size: 1.5rem;\n  font-weight: 600;\n}\n#location-time{\n  grid-column-start: 2;\n}\n\n\n#location-search{\n  grid-column-start: 4;\n  grid-column-end: 5;\n  background-color: rgb(176, 92, 187);\n  /* grid-column-end: ; */\n}\n#weather-data{\n  grid-column-start: 1;\n  grid-column-end: 5;\n  background-color: rgb(87, 133, 133);\n  /* subgrid */\n  display: grid;\n  grid-template-columns: auto auto;\n}\n#weather-forecast{\n  grid-column-start: 1;\n  grid-column-end: 2;\n  /* background-color: aquamarine; */\n}\n#weather-numbers{\n  grid-column: 2 / 3;\n}\n\n/* children of app container */\n.app-container > div{\n  padding: 1rem;\n  border-radius: 1rem;\n}\n\n.conditions-label{\n  font-weight: 600;\n}\n#current-conditons-title{\n  font-weight: 600;\n  font-size: 1.2rem;\n}\n#current-display{\n  font-size: 1.4rem;\n}\n\n.svg-icon{\n  height: 2.5rem;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());
options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/changeDom.js":
/*!**************************!*\
  !*** ./src/changeDom.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeDomOnQuery: () => (/* binding */ changeDomOnQuery),
/* harmony export */   populateOptions: () => (/* binding */ populateOptions)
/* harmony export */ });
/* harmony import */ var _htmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElement.js */ "./src/htmlElement.js");
const IMG = (imgName) => {
  return __webpack_require__("./src/images sync recursive ^\\.\\/.*$")(`./${imgName}`);
};

const domLocationArray = ["icon", "main", "area", "time"];
const domConditionsArray = ["icon", "conditions", "description"];
const domNumbersArray = ["temp", "tempmin", "tempmax", "sunset", "precipprob"];

const domArrays = [domConditionsArray, domNumbersArray];



function populateOptions() {
  domConditionsArray.forEach((con) => {
    let parent = document.getElementById("weather-forecast");
    let conditionLabel = new _htmlElement_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElement(
      "div",
      parent,
      { class: "conditions-label" },
      con
    );
    let populateCondition = new _htmlElement_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElement(
      "div",
      parent,
      { class: "current-display", id: `current-${con}` },
      `current-${con}`
    );
  });

  domNumbersArray.forEach((num) => {
    let parent = document.getElementById("weather-numbers");
    let conditionLabel = new _htmlElement_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElement(
      "div",
      parent,
      { class: "conditions-label" },
      num
    );
    let populateNumber = new _htmlElement_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElement(
      "div",
      parent,
      { class: "current-display", id: `current-${num}` },
      `current-${num}`
    );
  });
}

function changeDomOnQuery(dataObj) {
  changeLocationOnQuery(dataObj);
  const dayWeather = dataObj.days[0];
  const currentWeather = dataObj.currentConditions;

  for (let i = 0; i < domNumbersArray.length; i++) {
    const condition = domNumbersArray[i];
    const domElement = document.getElementById(`current-${condition}`);
    switch (condition) {
      case "sunset":
        domElement.innerText = objTime(dayWeather[condition]);
        break;
      case "temp":
        domElement.innerText = degreesF(currentWeather[condition]);
        break;
      case "tempmin":
      case "tempmax":
        domElement.innerText = degreesF(dayWeather[condition]);
        break;
      case "precipprob":
        domElement.innerText = chanceOfPrecip(currentWeather[condition]);
        break;
      default:
        domElement.innerText = dayWeather[condition];
        break;
    }
  }
  for (let i = 0; i < domConditionsArray.length; i++) {
    const condition = domConditionsArray[i];
    const domElement = document.getElementById(
      `current-${domConditionsArray[i]}`
    );
    switch (condition) {
      case "description":
        domElement.innerText = dataObj.description;
        break;
      case "icon":
        // domElement.innerText = currentWeather[condition];
        domElement.innerText = "";
        const iconWrapper = new _htmlElement_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElement("div", domElement);
        const icon = new _htmlElement_js__WEBPACK_IMPORTED_MODULE_0__.HtmlElement("img", iconWrapper.element, {
          src: `{IMG(weatherIcons/${currentWeather[condition]}.svg)}`,
          class: "svg-icon",
        });

        break;
      default:
        domElement.innerText = currentWeather[condition];
        break;
    }
  }
}

function changeLocationOnQuery(obj) {
  const fullAddress = obj.address;
  const addressArray = fullAddress.split(" ");
  document.getElementById("location-main").innerText = addressArray[0];
  document.getElementById("location-area").innerText = addressArray[1];
  document.getElementById("location-time").innerText = objTime(
    obj.currentConditions.datetime
  );
}

function degreesF(num) {
  return `${num}°F`;
}
function objTime(miltime) {
  let milArray = miltime.split(":");
  let myInt = milArray[0] / 1;
  switch (true) {
    case myInt > 12:
      myInt += -12;
      myInt.toString();
      return `${myInt}:${milArray[1]} PM`;
      break;
    case myInt <= 12:
      return `${miltime} AM`;
      break;
    default:
      console.log("error objtime");
      break;
  }
  if (myInt >= 12) {
    myInt += -12;
    myInt.toString();
    return `${myInt}:${milArray[1]} PM`;
  }
}
function chanceOfPrecip(num) {
  return `${num}% chance of precipitation currently`;
}


/***/ }),

/***/ "./src/htmlElement.js":
/*!****************************!*\
  !*** ./src/htmlElement.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   HtmlElement: () => (/* binding */ HtmlElement)
/* harmony export */ });
class HtmlElement {
  constructor(type, parent, propertiesObject = {}, content = "") {
    this.element = "";
    this.type = type;
    this.parent = parent;
    this.properties = propertiesObject;
    this.content = content;
    this.add();
  }

  add() {
    let newElement = document.createElement(this.type);

    if (JSON.stringify(this.properties !== "{}")) {
      this.addProperties(newElement, this.properties);
    }
    if (this.content !== "") {
      newElement.textContent = this.content;
    }
    if (this.parent) {
      this.parent.appendChild(newElement);
    }
    this.element = newElement;
  }

  addProperties(element, object) {
    for (let property in object) {
      element.setAttribute(`${property}`, object[property]);
    }
  }
}


/***/ }),

/***/ "./src/images sync recursive ^\\.\\/.*$":
/*!***********************************!*\
  !*** ./src/images/ sync ^\.\/.*$ ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./icon.png": "./src/images/icon.png",
	"./sun-pattern.png": "./src/images/sun-pattern.png",
	"./weatherIcons/clear-day.svg": "./src/images/weatherIcons/clear-day.svg",
	"./weatherIcons/clear-night.svg": "./src/images/weatherIcons/clear-night.svg",
	"./weatherIcons/cloudy.svg": "./src/images/weatherIcons/cloudy.svg",
	"./weatherIcons/fog.svg": "./src/images/weatherIcons/fog.svg",
	"./weatherIcons/hail.svg": "./src/images/weatherIcons/hail.svg",
	"./weatherIcons/partly-cloudy-day.svg": "./src/images/weatherIcons/partly-cloudy-day.svg",
	"./weatherIcons/partly-cloudy-night.svg": "./src/images/weatherIcons/partly-cloudy-night.svg",
	"./weatherIcons/rain-snow-showers-day.svg": "./src/images/weatherIcons/rain-snow-showers-day.svg",
	"./weatherIcons/rain-snow-showers-night.svg": "./src/images/weatherIcons/rain-snow-showers-night.svg",
	"./weatherIcons/rain-snow.svg": "./src/images/weatherIcons/rain-snow.svg",
	"./weatherIcons/rain.svg": "./src/images/weatherIcons/rain.svg",
	"./weatherIcons/showers-day.svg": "./src/images/weatherIcons/showers-day.svg",
	"./weatherIcons/showers-night.svg": "./src/images/weatherIcons/showers-night.svg",
	"./weatherIcons/sleet.svg": "./src/images/weatherIcons/sleet.svg",
	"./weatherIcons/snow-showers-day.svg": "./src/images/weatherIcons/snow-showers-day.svg",
	"./weatherIcons/snow-showers-night.svg": "./src/images/weatherIcons/snow-showers-night.svg",
	"./weatherIcons/snow.svg": "./src/images/weatherIcons/snow.svg",
	"./weatherIcons/thunder-rain.svg": "./src/images/weatherIcons/thunder-rain.svg",
	"./weatherIcons/thunder-showers-day.svg": "./src/images/weatherIcons/thunder-showers-day.svg",
	"./weatherIcons/thunder-showers-night.svg": "./src/images/weatherIcons/thunder-showers-night.svg",
	"./weatherIcons/thunder.svg": "./src/images/weatherIcons/thunder.svg",
	"./weatherIcons/wind.svg": "./src/images/weatherIcons/wind.svg"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./src/images sync recursive ^\\.\\/.*$";

/***/ }),

/***/ "./src/parseWeather.js":
/*!*****************************!*\
  !*** ./src/parseWeather.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   parseWeather: () => (/* binding */ parseWeather)
/* harmony export */ });
async function parseWeather(obj) {
  const weather = {
    temperature: obj.temp,
    conditions: obj.conditions,
    //   uvindex: obj.uvindex,
    feelslike: obj.feelslike,
    //   humidity: obj.humidity,
    //   windspeed: obj.windspeed,
    //   pressure: obj.pressure,
    //   visibility: obj.visibility,
    icon: obj.icon,
    precipprob: obj.precipprob,
    description: obj.description,
  };
  return weather;
}


/***/ }),

/***/ "./src/queryObject.js":
/*!****************************!*\
  !*** ./src/queryObject.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VisualCrossingQuery: () => (/* binding */ VisualCrossingQuery)
/* harmony export */ });
class VisualCrossingQuery {
  constructor(location, method = "") {
    this.apikey = "RAEHHYGPKLFCAP835LPQWNMQ9";
    this.method = method;
    this.location = location;
  }
}


/***/ }),

/***/ "./src/queryRequest.js":
/*!*****************************!*\
  !*** ./src/queryRequest.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getWeather: () => (/* binding */ getWeather)
/* harmony export */ });
/* harmony import */ var _queryObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./queryObject.js */ "./src/queryObject.js");


async function getWeather(apimethod, location) {
  const website =
    "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline";
  const generatedQuery = new _queryObject_js__WEBPACK_IMPORTED_MODULE_0__.VisualCrossingQuery(
    document.getElementById("location-search-bar").value
  );

  // let time = now create from new date time
  // let endtime = 8 hours after
  const key = "RAEHHYGPKLFCAP835LPQWNMQ9";
  // const apiDataObj = new VisualCrossingQuery(method, myLocation);
  const time = "today";
  const methods = `${time}?units=us`;
  const myQuery = `${website}/${generatedQuery.location}/${methods}&key=${key}`;

  const response = await fetch(myQuery);
  const weatherDataObj = await response.json();
  // const currentConditionsObj = weatherDataObj.currentConditions;
  // console.table(weatherDataObj);
  return weatherDataObj;
}


/***/ }),

/***/ "./src/fonts/inter/Inter-VariableFont_slnt,wght.ttf":
/*!**********************************************************!*\
  !*** ./src/fonts/inter/Inter-VariableFont_slnt,wght.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "853e01975d2783d9fa29.ttf";

/***/ }),

/***/ "./src/images/icon.png":
/*!*****************************!*\
  !*** ./src/images/icon.png ***!
  \*****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "cf1767fae90e0058be92.png";

/***/ }),

/***/ "./src/images/sun-pattern.png":
/*!************************************!*\
  !*** ./src/images/sun-pattern.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "48fb38b05d57d9b712e9.png";

/***/ }),

/***/ "./src/images/weatherIcons/clear-day.svg":
/*!***********************************************!*\
  !*** ./src/images/weatherIcons/clear-day.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0ae928911d7143fe5c97.svg";

/***/ }),

/***/ "./src/images/weatherIcons/clear-night.svg":
/*!*************************************************!*\
  !*** ./src/images/weatherIcons/clear-night.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "10da86080cdf8ab805dc.svg";

/***/ }),

/***/ "./src/images/weatherIcons/cloudy.svg":
/*!********************************************!*\
  !*** ./src/images/weatherIcons/cloudy.svg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "b3bf211cc12293dba117.svg";

/***/ }),

/***/ "./src/images/weatherIcons/fog.svg":
/*!*****************************************!*\
  !*** ./src/images/weatherIcons/fog.svg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4367781d78de4b41c8ba.svg";

/***/ }),

/***/ "./src/images/weatherIcons/hail.svg":
/*!******************************************!*\
  !*** ./src/images/weatherIcons/hail.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "3889cfa8600afb2befbe.svg";

/***/ }),

/***/ "./src/images/weatherIcons/partly-cloudy-day.svg":
/*!*******************************************************!*\
  !*** ./src/images/weatherIcons/partly-cloudy-day.svg ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "1b7e30503cbfe9b1328f.svg";

/***/ }),

/***/ "./src/images/weatherIcons/partly-cloudy-night.svg":
/*!*********************************************************!*\
  !*** ./src/images/weatherIcons/partly-cloudy-night.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f16ddc81302dd032a209.svg";

/***/ }),

/***/ "./src/images/weatherIcons/rain-snow-showers-day.svg":
/*!***********************************************************!*\
  !*** ./src/images/weatherIcons/rain-snow-showers-day.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "2049dc22f51b775cff95.svg";

/***/ }),

/***/ "./src/images/weatherIcons/rain-snow-showers-night.svg":
/*!*************************************************************!*\
  !*** ./src/images/weatherIcons/rain-snow-showers-night.svg ***!
  \*************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "70b740bd0df75f5a12ca.svg";

/***/ }),

/***/ "./src/images/weatherIcons/rain-snow.svg":
/*!***********************************************!*\
  !*** ./src/images/weatherIcons/rain-snow.svg ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "0f570b61f610cc47550c.svg";

/***/ }),

/***/ "./src/images/weatherIcons/rain.svg":
/*!******************************************!*\
  !*** ./src/images/weatherIcons/rain.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "6e4f357e69e53710441a.svg";

/***/ }),

/***/ "./src/images/weatherIcons/showers-day.svg":
/*!*************************************************!*\
  !*** ./src/images/weatherIcons/showers-day.svg ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "4a2b8451b8315b4993a1.svg";

/***/ }),

/***/ "./src/images/weatherIcons/showers-night.svg":
/*!***************************************************!*\
  !*** ./src/images/weatherIcons/showers-night.svg ***!
  \***************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "86d5570e13c926b05b8a.svg";

/***/ }),

/***/ "./src/images/weatherIcons/sleet.svg":
/*!*******************************************!*\
  !*** ./src/images/weatherIcons/sleet.svg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "c11ff972687fa3708771.svg";

/***/ }),

/***/ "./src/images/weatherIcons/snow-showers-day.svg":
/*!******************************************************!*\
  !*** ./src/images/weatherIcons/snow-showers-day.svg ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "acb2b455bd9de4db2a8b.svg";

/***/ }),

/***/ "./src/images/weatherIcons/snow-showers-night.svg":
/*!********************************************************!*\
  !*** ./src/images/weatherIcons/snow-showers-night.svg ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "21754c08cf67996293bf.svg";

/***/ }),

/***/ "./src/images/weatherIcons/snow.svg":
/*!******************************************!*\
  !*** ./src/images/weatherIcons/snow.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "a38ec89338af4551eb0e.svg";

/***/ }),

/***/ "./src/images/weatherIcons/thunder-rain.svg":
/*!**************************************************!*\
  !*** ./src/images/weatherIcons/thunder-rain.svg ***!
  \**************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "83b0db88aba6097c5c55.svg";

/***/ }),

/***/ "./src/images/weatherIcons/thunder-showers-day.svg":
/*!*********************************************************!*\
  !*** ./src/images/weatherIcons/thunder-showers-day.svg ***!
  \*********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "545dd2062c3e501db0f4.svg";

/***/ }),

/***/ "./src/images/weatherIcons/thunder-showers-night.svg":
/*!***********************************************************!*\
  !*** ./src/images/weatherIcons/thunder-showers-night.svg ***!
  \***********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "e83e5d078be84eac9071.svg";

/***/ }),

/***/ "./src/images/weatherIcons/thunder.svg":
/*!*********************************************!*\
  !*** ./src/images/weatherIcons/thunder.svg ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "9e22ef7b53fde88ba057.svg";

/***/ }),

/***/ "./src/images/weatherIcons/wind.svg":
/*!******************************************!*\
  !*** ./src/images/weatherIcons/wind.svg ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
module.exports = __webpack_require__.p + "f9e79d493e2fd83a55bd.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"index": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _queryRequest_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./queryRequest.js */ "./src/queryRequest.js");
/* harmony import */ var _changeDom_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./changeDom.js */ "./src/changeDom.js");
/* harmony import */ var _parseWeather_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./parseWeather.js */ "./src/parseWeather.js");





(0,_changeDom_js__WEBPACK_IMPORTED_MODULE_2__.populateOptions)();
const searchButton = document.getElementById("location-search-button");
searchButton.addEventListener("click", async () => {
  (0,_queryRequest_js__WEBPACK_IMPORTED_MODULE_1__.getWeather)().then((weatherObj) => {
    (0,_changeDom_js__WEBPACK_IMPORTED_MODULE_2__.changeDomOnQuery)(weatherObj);
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOztVQUVBO1VBQ0E7Ozs7O1dDekJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxpQ0FBaUMsV0FBVztXQUM1QztXQUNBOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7OztXQ2xCQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7Ozs7O1dDckJBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQXFCO0FBQzBCO0FBQ29CO0FBQ2xCOztBQUVqRCw4REFBZTtBQUNmO0FBQ0E7QUFDQSxFQUFFLDREQUFVO0FBQ1osSUFBSSwrREFBZ0I7QUFDcEIsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9zcmMvY2hhbmdlRG9tLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL3NyYy9odG1sRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9zcmMvaW1hZ2VzLyBzeW5jIF5cXC5cXC8uKiQiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zLy4vc3JjL3BhcnNlV2VhdGhlci5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9zcmMvcXVlcnlPYmplY3QuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zLy4vc3JjL3F1ZXJ5UmVxdWVzdC5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi9mb250cy9pbnRlci9JbnRlci1WYXJpYWJsZUZvbnRfc2xudCx3Z2h0LnR0ZlwiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fID0gbmV3IFVSTChcImltYWdlcy9zdW4tcGF0dGVybi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ2dGb250cy1JbnRlcic7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgICBmb250LXNpemU6IG5vcm1hbDtcbiAgfVxuXG4qeyBib3gtc2l6aW5nOiBib3JkZXItYm94O31cbmJvZHl7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA5MCUgYXV0bztcbiAgZm9udC1mYW1pbHk6ICdnRm9udHMtSW50ZXInO1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19ffSk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XG59XG5cbi5hcHAtY29udGFpbmVyIHtcbiAgLyogY2VudGVyIGFwcCBjb250YWluZXIgKi9cbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG4gIC8qIGFkZCBtYXJnaW5zICAqL1xuICBtYXJnaW4tdG9wOiA1dmg7XG4gIG1hcmdpbi1ib3R0b206IDV2aDtcbiAgLyogZ3JpZCBkaXNwbGF5IGFyZWEgICovXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtZ2FwOiAxcmVtO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0IGF1dG8pO1xuICBncmlkLWF1dG8tcm93czogYXV0bztcbiAgLyogdmlzaWJpbGl0eSBjb2xvciAqL1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAxODUsIDg5KTsgKi9cbiAgXG59XG4jbG9jYXRpb24tZGlzcGxheXtcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xuICAvKiBzdWJncmlkICovXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSBhdXRvIGF1dG87XG59XG4jbG9jYXRpb24tc3Vie1xuICBncmlkLWNvbHVtbjogMiAvIDQ7XG4gIC8qIHN1YmdyaWQgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXG59XG4jbG9jYXRpb24tbWFpbntcbiAgZm9udC1zaXplOiAxLjVyZW07XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4jbG9jYXRpb24tdGltZXtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XG59XG5cblxuI2xvY2F0aW9uLXNlYXJjaHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7XG4gIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgOTIsIDE4Nyk7XG4gIC8qIGdyaWQtY29sdW1uLWVuZDogOyAqL1xufVxuI3dlYXRoZXItZGF0YXtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogNTtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCAxMzMsIDEzMyk7XG4gIC8qIHN1YmdyaWQgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XG59XG4jd2VhdGhlci1mb3JlY2FzdHtcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XG4gIGdyaWQtY29sdW1uLWVuZDogMjtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTsgKi9cbn1cbiN3ZWF0aGVyLW51bWJlcnN7XG4gIGdyaWQtY29sdW1uOiAyIC8gMztcbn1cblxuLyogY2hpbGRyZW4gb2YgYXBwIGNvbnRhaW5lciAqL1xuLmFwcC1jb250YWluZXIgPiBkaXZ7XG4gIHBhZGRpbmc6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XG59XG5cbi5jb25kaXRpb25zLWxhYmVse1xuICBmb250LXdlaWdodDogNjAwO1xufVxuI2N1cnJlbnQtY29uZGl0b25zLXRpdGxle1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuMnJlbTtcbn1cbiNjdXJyZW50LWRpc3BsYXl7XG4gIGZvbnQtc2l6ZTogMS40cmVtO1xufVxuXG4uc3ZnLWljb257XG4gIGhlaWdodDogMi41cmVtO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtJQUNJLDJCQUEyQjtJQUMzQiw0Q0FBMkQ7SUFDM0QsbUJBQW1CO0lBQ25CLGlCQUFpQjtFQUNuQjs7QUFFRixHQUFHLHNCQUFzQixDQUFDO0FBQzFCO0VBQ0UsYUFBYTtFQUNiLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0IseURBQStDO0VBQy9DLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixvQkFBb0I7RUFDcEIsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsdUJBQXVCO0VBQ3ZCLGFBQWE7RUFDYixjQUFjO0VBQ2QscUNBQXFDO0VBQ3JDLG9CQUFvQjtFQUNwQixxQkFBcUI7RUFDckIseUNBQXlDOztBQUUzQztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLDRCQUE0QjtFQUM1QixZQUFZO0VBQ1osYUFBYTtFQUNiLHFDQUFxQztBQUN2QztBQUNBO0VBQ0Usa0JBQWtCO0VBQ2xCLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0NBQWdDO0VBQ2hDLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0Usb0JBQW9CO0FBQ3RCOzs7QUFHQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsWUFBWTtFQUNaLGFBQWE7RUFDYixnQ0FBZ0M7QUFDbEM7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUEsOEJBQThCO0FBQzlCO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsY0FBYztBQUNoQlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAZm9udC1mYWNlIHtcXG4gICAgZm9udC1mYW1pbHk6ICdnRm9udHMtSW50ZXInO1xcbiAgICBzcmM6IHVybCgnLi9mb250cy9pbnRlci9JbnRlci1WYXJpYWJsZUZvbnRfc2xudFxcXFwsd2dodC50dGYnKTtcXG4gICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcXG4gICAgZm9udC1zaXplOiBub3JtYWw7XFxuICB9XFxuXFxuKnsgYm94LXNpemluZzogYm9yZGVyLWJveDt9XFxuYm9keXtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gOTAlIGF1dG87XFxuICBmb250LWZhbWlseTogJ2dGb250cy1JbnRlcic7XFxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFxcImltYWdlcy9zdW4tcGF0dGVybi5wbmdcXFwiKTtcXG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQ7XFxufVxcblxcbi5hcHAtY29udGFpbmVyIHtcXG4gIC8qIGNlbnRlciBhcHAgY29udGFpbmVyICovXFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG4gIC8qIGFkZCBtYXJnaW5zICAqL1xcbiAgbWFyZ2luLXRvcDogNXZoO1xcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xcbiAgLyogZ3JpZCBkaXNwbGF5IGFyZWEgICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC1nYXA6IDFyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg0IGF1dG8pO1xcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XFxuICAvKiB2aXNpYmlsaXR5IGNvbG9yICovXFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTkyLCAxODUsIDg5KTsgKi9cXG4gIFxcbn1cXG4jbG9jYXRpb24tZGlzcGxheXtcXG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XFxuICAvKiBzdWJncmlkICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIGF1dG8gYXV0bztcXG59XFxuI2xvY2F0aW9uLXN1YntcXG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcXG4gIC8qIHN1YmdyaWQgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGJsdWU7ICovXFxufVxcbiNsb2NhdGlvbi1tYWlue1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4jbG9jYXRpb24tdGltZXtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbn1cXG5cXG5cXG4jbG9jYXRpb24tc2VhcmNoe1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDQ7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCA5MiwgMTg3KTtcXG4gIC8qIGdyaWQtY29sdW1uLWVuZDogOyAqL1xcbn1cXG4jd2VhdGhlci1kYXRhe1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDEzMywgMTMzKTtcXG4gIC8qIHN1YmdyaWQgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcXG59XFxuI3dlYXRoZXItZm9yZWNhc3R7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogMjtcXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7ICovXFxufVxcbiN3ZWF0aGVyLW51bWJlcnN7XFxuICBncmlkLWNvbHVtbjogMiAvIDM7XFxufVxcblxcbi8qIGNoaWxkcmVuIG9mIGFwcCBjb250YWluZXIgKi9cXG4uYXBwLWNvbnRhaW5lciA+IGRpdntcXG4gIHBhZGRpbmc6IDFyZW07XFxuICBib3JkZXItcmFkaXVzOiAxcmVtO1xcbn1cXG5cXG4uY29uZGl0aW9ucy1sYWJlbHtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbiNjdXJyZW50LWNvbmRpdG9ucy10aXRsZXtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDEuMnJlbTtcXG59XFxuI2N1cnJlbnQtZGlzcGxheXtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbn1cXG5cXG4uc3ZnLWljb257XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xub3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRE9NLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRE9NW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXhCeUlkZW50aWZpZXIgPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM10sXG4gICAgICBzdXBwb3J0czogaXRlbVs0XSxcbiAgICAgIGxheWVyOiBpdGVtWzVdXG4gICAgfTtcbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICB2YXIgdXBkYXRlciA9IGZ1bmN0aW9uIHVwZGF0ZXIobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCAmJiBuZXdPYmouc3VwcG9ydHMgPT09IG9iai5zdXBwb3J0cyAmJiBuZXdPYmoubGF5ZXIgPT09IG9iai5sYXllcikge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB1cGRhdGVyO1xufVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuICAgICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuXG4gICAgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhlbGVtZW50LCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChlbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xuICByZXR1cm4gZWxlbWVudDtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZUVsZW1lbnQpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gXCJcIjtcbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KG9iai5zdXBwb3J0cywgXCIpIHtcIik7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG4gIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2Ygb2JqLmxheWVyICE9PSBcInVuZGVmaW5lZFwiO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwiQGxheWVyXCIuY29uY2F0KG9iai5sYXllci5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KG9iai5sYXllcikgOiBcIlwiLCBcIiB7XCIpO1xuICB9XG4gIGNzcyArPSBvYmouY3NzO1xuICBpZiAobmVlZExheWVyKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9XG5cbiAgLy8gRm9yIG9sZCBJRVxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG59XG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGVFbGVtZW50LnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICBpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKCkge30sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHt9XG4gICAgfTtcbiAgfVxuICB2YXIgc3R5bGVFbGVtZW50ID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZUVsZW1lbnQsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpO1xuICAgIH1cbiAgfTtcbn1cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50KSB7XG4gIGlmIChzdHlsZUVsZW1lbnQuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZUVsZW1lbnQucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpO1xuICAgIH1cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiY29uc3QgSU1HID0gKGltZ05hbWUpID0+IHtcbiAgcmV0dXJuIHJlcXVpcmUoYC4vaW1hZ2VzLyR7aW1nTmFtZX1gKTtcbn07XG5cbmNvbnN0IGRvbUxvY2F0aW9uQXJyYXkgPSBbXCJpY29uXCIsIFwibWFpblwiLCBcImFyZWFcIiwgXCJ0aW1lXCJdO1xuY29uc3QgZG9tQ29uZGl0aW9uc0FycmF5ID0gW1wiaWNvblwiLCBcImNvbmRpdGlvbnNcIiwgXCJkZXNjcmlwdGlvblwiXTtcbmNvbnN0IGRvbU51bWJlcnNBcnJheSA9IFtcInRlbXBcIiwgXCJ0ZW1wbWluXCIsIFwidGVtcG1heFwiLCBcInN1bnNldFwiLCBcInByZWNpcHByb2JcIl07XG5cbmNvbnN0IGRvbUFycmF5cyA9IFtkb21Db25kaXRpb25zQXJyYXksIGRvbU51bWJlcnNBcnJheV07XG5cbmltcG9ydCB7IEh0bWxFbGVtZW50IH0gZnJvbSBcIi4vaHRtbEVsZW1lbnQuanNcIjtcblxuZXhwb3J0IGZ1bmN0aW9uIHBvcHVsYXRlT3B0aW9ucygpIHtcbiAgZG9tQ29uZGl0aW9uc0FycmF5LmZvckVhY2goKGNvbikgPT4ge1xuICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItZm9yZWNhc3RcIik7XG4gICAgbGV0IGNvbmRpdGlvbkxhYmVsID0gbmV3IEh0bWxFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHBhcmVudCxcbiAgICAgIHsgY2xhc3M6IFwiY29uZGl0aW9ucy1sYWJlbFwiIH0sXG4gICAgICBjb25cbiAgICApO1xuICAgIGxldCBwb3B1bGF0ZUNvbmRpdGlvbiA9IG5ldyBIdG1sRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBwYXJlbnQsXG4gICAgICB7IGNsYXNzOiBcImN1cnJlbnQtZGlzcGxheVwiLCBpZDogYGN1cnJlbnQtJHtjb259YCB9LFxuICAgICAgYGN1cnJlbnQtJHtjb259YFxuICAgICk7XG4gIH0pO1xuXG4gIGRvbU51bWJlcnNBcnJheS5mb3JFYWNoKChudW0pID0+IHtcbiAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLW51bWJlcnNcIik7XG4gICAgbGV0IGNvbmRpdGlvbkxhYmVsID0gbmV3IEh0bWxFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHBhcmVudCxcbiAgICAgIHsgY2xhc3M6IFwiY29uZGl0aW9ucy1sYWJlbFwiIH0sXG4gICAgICBudW1cbiAgICApO1xuICAgIGxldCBwb3B1bGF0ZU51bWJlciA9IG5ldyBIdG1sRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBwYXJlbnQsXG4gICAgICB7IGNsYXNzOiBcImN1cnJlbnQtZGlzcGxheVwiLCBpZDogYGN1cnJlbnQtJHtudW19YCB9LFxuICAgICAgYGN1cnJlbnQtJHtudW19YFxuICAgICk7XG4gIH0pO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gY2hhbmdlRG9tT25RdWVyeShkYXRhT2JqKSB7XG4gIGNoYW5nZUxvY2F0aW9uT25RdWVyeShkYXRhT2JqKTtcbiAgY29uc3QgZGF5V2VhdGhlciA9IGRhdGFPYmouZGF5c1swXTtcbiAgY29uc3QgY3VycmVudFdlYXRoZXIgPSBkYXRhT2JqLmN1cnJlbnRDb25kaXRpb25zO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZG9tTnVtYmVyc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gZG9tTnVtYmVyc0FycmF5W2ldO1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgY3VycmVudC0ke2NvbmRpdGlvbn1gKTtcbiAgICBzd2l0Y2ggKGNvbmRpdGlvbikge1xuICAgICAgY2FzZSBcInN1bnNldFwiOlxuICAgICAgICBkb21FbGVtZW50LmlubmVyVGV4dCA9IG9ialRpbWUoZGF5V2VhdGhlcltjb25kaXRpb25dKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwidGVtcFwiOlxuICAgICAgICBkb21FbGVtZW50LmlubmVyVGV4dCA9IGRlZ3JlZXNGKGN1cnJlbnRXZWF0aGVyW2NvbmRpdGlvbl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ0ZW1wbWluXCI6XG4gICAgICBjYXNlIFwidGVtcG1heFwiOlxuICAgICAgICBkb21FbGVtZW50LmlubmVyVGV4dCA9IGRlZ3JlZXNGKGRheVdlYXRoZXJbY29uZGl0aW9uXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInByZWNpcHByb2JcIjpcbiAgICAgICAgZG9tRWxlbWVudC5pbm5lclRleHQgPSBjaGFuY2VPZlByZWNpcChjdXJyZW50V2VhdGhlcltjb25kaXRpb25dKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkb21FbGVtZW50LmlubmVyVGV4dCA9IGRheVdlYXRoZXJbY29uZGl0aW9uXTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZG9tQ29uZGl0aW9uc0FycmF5Lmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3QgY29uZGl0aW9uID0gZG9tQ29uZGl0aW9uc0FycmF5W2ldO1xuICAgIGNvbnN0IGRvbUVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcbiAgICAgIGBjdXJyZW50LSR7ZG9tQ29uZGl0aW9uc0FycmF5W2ldfWBcbiAgICApO1xuICAgIHN3aXRjaCAoY29uZGl0aW9uKSB7XG4gICAgICBjYXNlIFwiZGVzY3JpcHRpb25cIjpcbiAgICAgICAgZG9tRWxlbWVudC5pbm5lclRleHQgPSBkYXRhT2JqLmRlc2NyaXB0aW9uO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJpY29uXCI6XG4gICAgICAgIC8vIGRvbUVsZW1lbnQuaW5uZXJUZXh0ID0gY3VycmVudFdlYXRoZXJbY29uZGl0aW9uXTtcbiAgICAgICAgZG9tRWxlbWVudC5pbm5lclRleHQgPSBcIlwiO1xuICAgICAgICBjb25zdCBpY29uV3JhcHBlciA9IG5ldyBIdG1sRWxlbWVudChcImRpdlwiLCBkb21FbGVtZW50KTtcbiAgICAgICAgY29uc3QgaWNvbiA9IG5ldyBIdG1sRWxlbWVudChcImltZ1wiLCBpY29uV3JhcHBlci5lbGVtZW50LCB7XG4gICAgICAgICAgc3JjOiBge0lNRyh3ZWF0aGVySWNvbnMvJHtjdXJyZW50V2VhdGhlcltjb25kaXRpb25dfS5zdmcpfWAsXG4gICAgICAgICAgY2xhc3M6IFwic3ZnLWljb25cIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkb21FbGVtZW50LmlubmVyVGV4dCA9IGN1cnJlbnRXZWF0aGVyW2NvbmRpdGlvbl07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VMb2NhdGlvbk9uUXVlcnkob2JqKSB7XG4gIGNvbnN0IGZ1bGxBZGRyZXNzID0gb2JqLmFkZHJlc3M7XG4gIGNvbnN0IGFkZHJlc3NBcnJheSA9IGZ1bGxBZGRyZXNzLnNwbGl0KFwiIFwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbi1tYWluXCIpLmlubmVyVGV4dCA9IGFkZHJlc3NBcnJheVswXTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbi1hcmVhXCIpLmlubmVyVGV4dCA9IGFkZHJlc3NBcnJheVsxXTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbi10aW1lXCIpLmlubmVyVGV4dCA9IG9ialRpbWUoXG4gICAgb2JqLmN1cnJlbnRDb25kaXRpb25zLmRhdGV0aW1lXG4gICk7XG59XG5cbmZ1bmN0aW9uIGRlZ3JlZXNGKG51bSkge1xuICByZXR1cm4gYCR7bnVtfcKwRmA7XG59XG5mdW5jdGlvbiBvYmpUaW1lKG1pbHRpbWUpIHtcbiAgbGV0IG1pbEFycmF5ID0gbWlsdGltZS5zcGxpdChcIjpcIik7XG4gIGxldCBteUludCA9IG1pbEFycmF5WzBdIC8gMTtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBteUludCA+IDEyOlxuICAgICAgbXlJbnQgKz0gLTEyO1xuICAgICAgbXlJbnQudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiBgJHtteUludH06JHttaWxBcnJheVsxXX0gUE1gO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBteUludCA8PSAxMjpcbiAgICAgIHJldHVybiBgJHttaWx0aW1lfSBBTWA7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBvYmp0aW1lXCIpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgaWYgKG15SW50ID49IDEyKSB7XG4gICAgbXlJbnQgKz0gLTEyO1xuICAgIG15SW50LnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIGAke215SW50fToke21pbEFycmF5WzFdfSBQTWA7XG4gIH1cbn1cbmZ1bmN0aW9uIGNoYW5jZU9mUHJlY2lwKG51bSkge1xuICByZXR1cm4gYCR7bnVtfSUgY2hhbmNlIG9mIHByZWNpcGl0YXRpb24gY3VycmVudGx5YDtcbn1cbiIsImV4cG9ydCBjbGFzcyBIdG1sRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcmVudCwgcHJvcGVydGllc09iamVjdCA9IHt9LCBjb250ZW50ID0gXCJcIikge1xuICAgIHRoaXMuZWxlbWVudCA9IFwiXCI7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzT2JqZWN0O1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5hZGQoKTtcbiAgfVxuXG4gIGFkZCgpIHtcbiAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy50eXBlKTtcblxuICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BlcnRpZXMgIT09IFwie31cIikpIHtcbiAgICAgIHRoaXMuYWRkUHJvcGVydGllcyhuZXdFbGVtZW50LCB0aGlzLnByb3BlcnRpZXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSBuZXdFbGVtZW50O1xuICB9XG5cbiAgYWRkUHJvcGVydGllcyhlbGVtZW50LCBvYmplY3QpIHtcbiAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGAke3Byb3BlcnR5fWAsIG9iamVjdFtwcm9wZXJ0eV0pO1xuICAgIH1cbiAgfVxufVxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2ljb24ucG5nXCI6IFwiLi9zcmMvaW1hZ2VzL2ljb24ucG5nXCIsXG5cdFwiLi9zdW4tcGF0dGVybi5wbmdcIjogXCIuL3NyYy9pbWFnZXMvc3VuLXBhdHRlcm4ucG5nXCIsXG5cdFwiLi93ZWF0aGVySWNvbnMvY2xlYXItZGF5LnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy93ZWF0aGVySWNvbnMvY2xlYXItZGF5LnN2Z1wiLFxuXHRcIi4vd2VhdGhlckljb25zL2NsZWFyLW5pZ2h0LnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy93ZWF0aGVySWNvbnMvY2xlYXItbmlnaHQuc3ZnXCIsXG5cdFwiLi93ZWF0aGVySWNvbnMvY2xvdWR5LnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy93ZWF0aGVySWNvbnMvY2xvdWR5LnN2Z1wiLFxuXHRcIi4vd2VhdGhlckljb25zL2ZvZy5zdmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhdGhlckljb25zL2ZvZy5zdmdcIixcblx0XCIuL3dlYXRoZXJJY29ucy9oYWlsLnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy93ZWF0aGVySWNvbnMvaGFpbC5zdmdcIixcblx0XCIuL3dlYXRoZXJJY29ucy9wYXJ0bHktY2xvdWR5LWRheS5zdmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhdGhlckljb25zL3BhcnRseS1jbG91ZHktZGF5LnN2Z1wiLFxuXHRcIi4vd2VhdGhlckljb25zL3BhcnRseS1jbG91ZHktbmlnaHQuc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXRoZXJJY29ucy9wYXJ0bHktY2xvdWR5LW5pZ2h0LnN2Z1wiLFxuXHRcIi4vd2VhdGhlckljb25zL3JhaW4tc25vdy1zaG93ZXJzLWRheS5zdmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhdGhlckljb25zL3JhaW4tc25vdy1zaG93ZXJzLWRheS5zdmdcIixcblx0XCIuL3dlYXRoZXJJY29ucy9yYWluLXNub3ctc2hvd2Vycy1uaWdodC5zdmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhdGhlckljb25zL3JhaW4tc25vdy1zaG93ZXJzLW5pZ2h0LnN2Z1wiLFxuXHRcIi4vd2VhdGhlckljb25zL3JhaW4tc25vdy5zdmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhdGhlckljb25zL3JhaW4tc25vdy5zdmdcIixcblx0XCIuL3dlYXRoZXJJY29ucy9yYWluLnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy93ZWF0aGVySWNvbnMvcmFpbi5zdmdcIixcblx0XCIuL3dlYXRoZXJJY29ucy9zaG93ZXJzLWRheS5zdmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhdGhlckljb25zL3Nob3dlcnMtZGF5LnN2Z1wiLFxuXHRcIi4vd2VhdGhlckljb25zL3Nob3dlcnMtbmlnaHQuc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXRoZXJJY29ucy9zaG93ZXJzLW5pZ2h0LnN2Z1wiLFxuXHRcIi4vd2VhdGhlckljb25zL3NsZWV0LnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy93ZWF0aGVySWNvbnMvc2xlZXQuc3ZnXCIsXG5cdFwiLi93ZWF0aGVySWNvbnMvc25vdy1zaG93ZXJzLWRheS5zdmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhdGhlckljb25zL3Nub3ctc2hvd2Vycy1kYXkuc3ZnXCIsXG5cdFwiLi93ZWF0aGVySWNvbnMvc25vdy1zaG93ZXJzLW5pZ2h0LnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy93ZWF0aGVySWNvbnMvc25vdy1zaG93ZXJzLW5pZ2h0LnN2Z1wiLFxuXHRcIi4vd2VhdGhlckljb25zL3Nub3cuc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXRoZXJJY29ucy9zbm93LnN2Z1wiLFxuXHRcIi4vd2VhdGhlckljb25zL3RodW5kZXItcmFpbi5zdmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhdGhlckljb25zL3RodW5kZXItcmFpbi5zdmdcIixcblx0XCIuL3dlYXRoZXJJY29ucy90aHVuZGVyLXNob3dlcnMtZGF5LnN2Z1wiOiBcIi4vc3JjL2ltYWdlcy93ZWF0aGVySWNvbnMvdGh1bmRlci1zaG93ZXJzLWRheS5zdmdcIixcblx0XCIuL3dlYXRoZXJJY29ucy90aHVuZGVyLXNob3dlcnMtbmlnaHQuc3ZnXCI6IFwiLi9zcmMvaW1hZ2VzL3dlYXRoZXJJY29ucy90aHVuZGVyLXNob3dlcnMtbmlnaHQuc3ZnXCIsXG5cdFwiLi93ZWF0aGVySWNvbnMvdGh1bmRlci5zdmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhdGhlckljb25zL3RodW5kZXIuc3ZnXCIsXG5cdFwiLi93ZWF0aGVySWNvbnMvd2luZC5zdmdcIjogXCIuL3NyYy9pbWFnZXMvd2VhdGhlckljb25zL3dpbmQuc3ZnXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vc3JjL2ltYWdlcyBzeW5jIHJlY3Vyc2l2ZSBeXFxcXC5cXFxcLy4qJFwiOyIsImV4cG9ydCBhc3luYyBmdW5jdGlvbiBwYXJzZVdlYXRoZXIob2JqKSB7XG4gIGNvbnN0IHdlYXRoZXIgPSB7XG4gICAgdGVtcGVyYXR1cmU6IG9iai50ZW1wLFxuICAgIGNvbmRpdGlvbnM6IG9iai5jb25kaXRpb25zLFxuICAgIC8vICAgdXZpbmRleDogb2JqLnV2aW5kZXgsXG4gICAgZmVlbHNsaWtlOiBvYmouZmVlbHNsaWtlLFxuICAgIC8vICAgaHVtaWRpdHk6IG9iai5odW1pZGl0eSxcbiAgICAvLyAgIHdpbmRzcGVlZDogb2JqLndpbmRzcGVlZCxcbiAgICAvLyAgIHByZXNzdXJlOiBvYmoucHJlc3N1cmUsXG4gICAgLy8gICB2aXNpYmlsaXR5OiBvYmoudmlzaWJpbGl0eSxcbiAgICBpY29uOiBvYmouaWNvbixcbiAgICBwcmVjaXBwcm9iOiBvYmoucHJlY2lwcHJvYixcbiAgICBkZXNjcmlwdGlvbjogb2JqLmRlc2NyaXB0aW9uLFxuICB9O1xuICByZXR1cm4gd2VhdGhlcjtcbn1cbiIsImV4cG9ydCBjbGFzcyBWaXN1YWxDcm9zc2luZ1F1ZXJ5IHtcbiAgY29uc3RydWN0b3IobG9jYXRpb24sIG1ldGhvZCA9IFwiXCIpIHtcbiAgICB0aGlzLmFwaWtleSA9IFwiUkFFSEhZR1BLTEZDQVA4MzVMUFFXTk1ROVwiO1xuICAgIHRoaXMubWV0aG9kID0gbWV0aG9kO1xuICAgIHRoaXMubG9jYXRpb24gPSBsb2NhdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVmlzdWFsQ3Jvc3NpbmdRdWVyeSB9IGZyb20gXCIuL3F1ZXJ5T2JqZWN0LmpzXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRXZWF0aGVyKGFwaW1ldGhvZCwgbG9jYXRpb24pIHtcbiAgY29uc3Qgd2Vic2l0ZSA9XG4gICAgXCJodHRwczovL3dlYXRoZXIudmlzdWFsY3Jvc3NpbmcuY29tL1Zpc3VhbENyb3NzaW5nV2ViU2VydmljZXMvcmVzdC9zZXJ2aWNlcy90aW1lbGluZVwiO1xuICBjb25zdCBnZW5lcmF0ZWRRdWVyeSA9IG5ldyBWaXN1YWxDcm9zc2luZ1F1ZXJ5KFxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb24tc2VhcmNoLWJhclwiKS52YWx1ZVxuICApO1xuXG4gIC8vIGxldCB0aW1lID0gbm93IGNyZWF0ZSBmcm9tIG5ldyBkYXRlIHRpbWVcbiAgLy8gbGV0IGVuZHRpbWUgPSA4IGhvdXJzIGFmdGVyXG4gIGNvbnN0IGtleSA9IFwiUkFFSEhZR1BLTEZDQVA4MzVMUFFXTk1ROVwiO1xuICAvLyBjb25zdCBhcGlEYXRhT2JqID0gbmV3IFZpc3VhbENyb3NzaW5nUXVlcnkobWV0aG9kLCBteUxvY2F0aW9uKTtcbiAgY29uc3QgdGltZSA9IFwidG9kYXlcIjtcbiAgY29uc3QgbWV0aG9kcyA9IGAke3RpbWV9P3VuaXRzPXVzYDtcbiAgY29uc3QgbXlRdWVyeSA9IGAke3dlYnNpdGV9LyR7Z2VuZXJhdGVkUXVlcnkubG9jYXRpb259LyR7bWV0aG9kc30ma2V5PSR7a2V5fWA7XG5cbiAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChteVF1ZXJ5KTtcbiAgY29uc3Qgd2VhdGhlckRhdGFPYmogPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gIC8vIGNvbnN0IGN1cnJlbnRDb25kaXRpb25zT2JqID0gd2VhdGhlckRhdGFPYmouY3VycmVudENvbmRpdGlvbnM7XG4gIC8vIGNvbnNvbGUudGFibGUod2VhdGhlckRhdGFPYmopO1xuICByZXR1cm4gd2VhdGhlckRhdGFPYmo7XG59XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0ICYmIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQudGFnTmFtZS50b1VwcGVyQ2FzZSgpID09PSAnU0NSSVBUJylcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyYztcblx0aWYgKCFzY3JpcHRVcmwpIHtcblx0XHR2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpO1xuXHRcdGlmKHNjcmlwdHMubGVuZ3RoKSB7XG5cdFx0XHR2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTtcblx0XHRcdHdoaWxlIChpID4gLTEgJiYgKCFzY3JpcHRVcmwgfHwgIS9eaHR0cChzPyk6Ly50ZXN0KHNjcmlwdFVybCkpKSBzY3JpcHRVcmwgPSBzY3JpcHRzW2ktLV0uc3JjO1xuXHRcdH1cblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5iID0gZG9jdW1lbnQuYmFzZVVSSSB8fCBzZWxmLmxvY2F0aW9uLmhyZWY7XG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJpbmRleFwiOiAwXG59O1xuXG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG4vLyBubyBvbiBjaHVua3MgbG9hZGVkXG5cbi8vIG5vIGpzb25wIGZ1bmN0aW9uIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5uYyA9IHVuZGVmaW5lZDsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IHsgZ2V0V2VhdGhlciB9IGZyb20gXCIuL3F1ZXJ5UmVxdWVzdC5qc1wiO1xuaW1wb3J0IHsgcG9wdWxhdGVPcHRpb25zLCBjaGFuZ2VEb21PblF1ZXJ5IH0gZnJvbSBcIi4vY2hhbmdlRG9tLmpzXCI7XG5pbXBvcnQgeyBwYXJzZVdlYXRoZXIgfSBmcm9tIFwiLi9wYXJzZVdlYXRoZXIuanNcIjtcblxucG9wdWxhdGVPcHRpb25zKCk7XG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvY2F0aW9uLXNlYXJjaC1idXR0b25cIik7XG5zZWFyY2hCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jICgpID0+IHtcbiAgZ2V0V2VhdGhlcigpLnRoZW4oKHdlYXRoZXJPYmopID0+IHtcbiAgICBjaGFuZ2VEb21PblF1ZXJ5KHdlYXRoZXJPYmopO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9