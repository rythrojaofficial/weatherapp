/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

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

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   changeDomOnQuery: () => (/* binding */ changeDomOnQuery),
/* harmony export */   populateOptions: () => (/* binding */ populateOptions)
/* harmony export */ });
/* harmony import */ var _htmlElement_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./htmlElement.js */ "./src/htmlElement.js");
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
          src: `../visualcrossingicons/WeatherIcons/SVG/color/${currentWeather[condition]}.svg`,
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

/***/ "./src/parseWeather.js":
/*!*****************************!*\
  !*** ./src/parseWeather.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

module.exports = __webpack_require__.p + "853e01975d2783d9fa29.ttf";

/***/ }),

/***/ "./src/images/sun-pattern.png":
/*!************************************!*\
  !*** ./src/images/sun-pattern.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "48fb38b05d57d9b712e9.png";

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

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LDREQUFVO0FBQ1osSUFBSSwrREFBZ0I7QUFDcEIsR0FBRztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9zcmMvc3R5bGUuY3NzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9zcmMvY2hhbmdlRG9tLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL3NyYy9odG1sRWxlbWVudC5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9zcmMvcGFyc2VXZWF0aGVyLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL3NyYy9xdWVyeU9iamVjdC5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9zcmMvcXVlcnlSZXF1ZXN0LmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvbm9uY2UiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyA9IG5ldyBVUkwoXCIuL2ZvbnRzL2ludGVyL0ludGVyLVZhcmlhYmxlRm9udF9zbG50LHdnaHQudHRmXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzFfX18gPSBuZXcgVVJMKFwiaW1hZ2VzL3N1bi1wYXR0ZXJuLnBuZ1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBmb250LWZhY2Uge1xuICAgIGZvbnQtZmFtaWx5OiAnZ0ZvbnRzLUludGVyJztcbiAgICBzcmM6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX199KTtcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgIGZvbnQtc2l6ZTogbm9ybWFsO1xuICB9XG5cbip7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7fVxuYm9keXtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDkwJSBhdXRvO1xuICBmb250LWZhbWlseTogJ2dGb250cy1JbnRlcic7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgke19fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX199KTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcbn1cblxuLmFwcC1jb250YWluZXIge1xuICAvKiBjZW50ZXIgYXBwIGNvbnRhaW5lciAqL1xuICBncmlkLWNvbHVtbi1zdGFydDogMjtcbiAgLyogYWRkIG1hcmdpbnMgICovXG4gIG1hcmdpbi10b3A6IDV2aDtcbiAgbWFyZ2luLWJvdHRvbTogNXZoO1xuICAvKiBncmlkIGRpc3BsYXkgYXJlYSAgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC1nYXA6IDFyZW07XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQgYXV0byk7XG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xuICAvKiB2aXNpYmlsaXR5IGNvbG9yICovXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDE4NSwgODkpOyAqL1xuICBcbn1cbiNsb2NhdGlvbi1kaXNwbGF5e1xuICBncmlkLWNvbHVtbjogMSAvIDQ7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG4gIC8qIHN1YmdyaWQgKi9cbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAycmVtIGF1dG8gYXV0bztcbn1cbiNsb2NhdGlvbi1zdWJ7XG4gIGdyaWQtY29sdW1uOiAyIC8gNDtcbiAgLyogc3ViZ3JpZCAqL1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cbn1cbiNsb2NhdGlvbi1tYWlue1xuICBmb250LXNpemU6IDEuNXJlbTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiNsb2NhdGlvbi10aW1le1xuICBncmlkLWNvbHVtbi1zdGFydDogMjtcbn1cblxuXG4jbG9jYXRpb24tc2VhcmNoe1xuICBncmlkLWNvbHVtbi1zdGFydDogNDtcbiAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTc2LCA5MiwgMTg3KTtcbiAgLyogZ3JpZC1jb2x1bW4tZW5kOiA7ICovXG59XG4jd2VhdGhlci1kYXRhe1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODcsIDEzMywgMTMzKTtcbiAgLyogc3ViZ3JpZCAqL1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gYXV0bztcbn1cbiN3ZWF0aGVyLWZvcmVjYXN0e1xuICBncmlkLWNvbHVtbi1zdGFydDogMTtcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lOyAqL1xufVxuI3dlYXRoZXItbnVtYmVyc3tcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xufVxuXG4vKiBjaGlsZHJlbiBvZiBhcHAgY29udGFpbmVyICovXG4uYXBwLWNvbnRhaW5lciA+IGRpdntcbiAgcGFkZGluZzogMXJlbTtcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcbn1cblxuLmNvbmRpdGlvbnMtbGFiZWx7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG4jY3VycmVudC1jb25kaXRvbnMtdGl0bGV7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xufVxuI2N1cnJlbnQtZGlzcGxheXtcbiAgZm9udC1zaXplOiAxLjRyZW07XG59XG5cbi5zdmctaWNvbntcbiAgaGVpZ2h0OiAyLjVyZW07XG59YCwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksMkJBQTJCO0lBQzNCLDRDQUEyRDtJQUMzRCxtQkFBbUI7SUFDbkIsaUJBQWlCO0VBQ25COztBQUVGLEdBQUcsc0JBQXNCLENBQUM7QUFDMUI7RUFDRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLDJCQUEyQjtFQUMzQix5REFBK0M7RUFDL0MseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLG9CQUFvQjtFQUNwQixpQkFBaUI7RUFDakIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQix1QkFBdUI7RUFDdkIsYUFBYTtFQUNiLGNBQWM7RUFDZCxxQ0FBcUM7RUFDckMsb0JBQW9CO0VBQ3BCLHFCQUFxQjtFQUNyQix5Q0FBeUM7O0FBRTNDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsNEJBQTRCO0VBQzVCLFlBQVk7RUFDWixhQUFhO0VBQ2IscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGFBQWE7RUFDYixnQ0FBZ0M7RUFDaEMsNEJBQTRCO0FBQzlCO0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxvQkFBb0I7QUFDdEI7OztBQUdBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixtQ0FBbUM7RUFDbkMsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyxZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztBQUNsQztBQUNBO0VBQ0Usb0JBQW9CO0VBQ3BCLGtCQUFrQjtFQUNsQixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQSw4QkFBOEI7QUFDOUI7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ2dGb250cy1JbnRlcic7XFxuICAgIHNyYzogdXJsKCcuL2ZvbnRzL2ludGVyL0ludGVyLVZhcmlhYmxlRm9udF9zbG50XFxcXCx3Z2h0LnR0ZicpO1xcbiAgICBmb250LXdlaWdodDogbm9ybWFsO1xcbiAgICBmb250LXNpemU6IG5vcm1hbDtcXG4gIH1cXG5cXG4qeyBib3gtc2l6aW5nOiBib3JkZXItYm94O31cXG5ib2R5e1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byA5MCUgYXV0bztcXG4gIGZvbnQtZmFtaWx5OiAnZ0ZvbnRzLUludGVyJztcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcXFwiaW1hZ2VzL3N1bi1wYXR0ZXJuLnBuZ1xcXCIpO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcXG59XFxuXFxuLmFwcC1jb250YWluZXIge1xcbiAgLyogY2VudGVyIGFwcCBjb250YWluZXIgKi9cXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xcbiAgLyogYWRkIG1hcmdpbnMgICovXFxuICBtYXJnaW4tdG9wOiA1dmg7XFxuICBtYXJnaW4tYm90dG9tOiA1dmg7XFxuICAvKiBncmlkIGRpc3BsYXkgYXJlYSAgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLWdhcDogMXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDQgYXV0byk7XFxuICBncmlkLWF1dG8tcm93czogYXV0bztcXG4gIC8qIHZpc2liaWxpdHkgY29sb3IgKi9cXG4gIC8qIGJhY2tncm91bmQtY29sb3I6IHJnYigxOTIsIDE4NSwgODkpOyAqL1xcbiAgXFxufVxcbiNsb2NhdGlvbi1kaXNwbGF5e1xcbiAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcXG4gIC8qIHN1YmdyaWQgKi9cXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gYXV0byBhdXRvO1xcbn1cXG4jbG9jYXRpb24tc3Vie1xcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xcbiAgLyogc3ViZ3JpZCAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYmx1ZTsgKi9cXG59XFxuI2xvY2F0aW9uLW1haW57XFxuICBmb250LXNpemU6IDEuNXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxufVxcbiNsb2NhdGlvbi10aW1le1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxufVxcblxcblxcbiNsb2NhdGlvbi1zZWFyY2h7XFxuICBncmlkLWNvbHVtbi1zdGFydDogNDtcXG4gIGdyaWQtY29sdW1uLWVuZDogNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzYsIDkyLCAxODcpO1xcbiAgLyogZ3JpZC1jb2x1bW4tZW5kOiA7ICovXFxufVxcbiN3ZWF0aGVyLWRhdGF7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMTtcXG4gIGdyaWQtY29sdW1uLWVuZDogNTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgMTMzLCAxMzMpO1xcbiAgLyogc3ViZ3JpZCAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xcbn1cXG4jd2VhdGhlci1mb3JlY2FzdHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiAyO1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogYXF1YW1hcmluZTsgKi9cXG59XFxuI3dlYXRoZXItbnVtYmVyc3tcXG4gIGdyaWQtY29sdW1uOiAyIC8gMztcXG59XFxuXFxuLyogY2hpbGRyZW4gb2YgYXBwIGNvbnRhaW5lciAqL1xcbi5hcHAtY29udGFpbmVyID4gZGl2e1xcbiAgcGFkZGluZzogMXJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDFyZW07XFxufVxcblxcbi5jb25kaXRpb25zLWxhYmVse1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuI2N1cnJlbnQtY29uZGl0b25zLXRpdGxle1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xcbn1cXG4jY3VycmVudC1kaXNwbGF5e1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxufVxcblxcbi5zdmctaWNvbntcXG4gIGhlaWdodDogMi41cmVtO1xcbn1cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107XG5cbiAgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07XG5cbiAgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGsgPSAwOyBrIDwgdGhpcy5sZW5ndGg7IGsrKykge1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2tdWzBdO1xuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHN1cHBvcnRzKSB7XG4gICAgICAgIGlmICghaXRlbVs0XSkge1xuICAgICAgICAgIGl0ZW1bNF0gPSBcIlwiLmNvbmNhdChzdXBwb3J0cyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzRdID0gc3VwcG9ydHM7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXJsLCBvcHRpb25zKSB7XG4gIGlmICghb3B0aW9ucykge1xuICAgIG9wdGlvbnMgPSB7fTtcbiAgfVxuICBpZiAoIXVybCkge1xuICAgIHJldHVybiB1cmw7XG4gIH1cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpO1xuXG4gIC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG4gIGlmIChvcHRpb25zLmhhc2gpIHtcbiAgICB1cmwgKz0gb3B0aW9ucy5oYXNoO1xuICB9XG5cbiAgLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuICBpZiAoL1tcIicoKSBcXHRcXG5dfCglMjApLy50ZXN0KHVybCkgfHwgb3B0aW9ucy5uZWVkUXVvdGVzKSB7XG4gICAgcmV0dXJuIFwiXFxcIlwiLmNvbmNhdCh1cmwucmVwbGFjZSgvXCIvZywgJ1xcXFxcIicpLnJlcGxhY2UoL1xcbi9nLCBcIlxcXFxuXCIpLCBcIlxcXCJcIik7XG4gIH1cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5vcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRPTSA9IFtdO1xuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5ET00ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5ET01baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleEJ5SWRlbnRpZmllciA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXSxcbiAgICAgIHN1cHBvcnRzOiBpdGVtWzRdLFxuICAgICAgbGF5ZXI6IGl0ZW1bNV1cbiAgICB9O1xuICAgIGlmIChpbmRleEJ5SWRlbnRpZmllciAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgdXBkYXRlciA9IGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpO1xuICAgICAgb3B0aW9ucy5ieUluZGV4ID0gaTtcbiAgICAgIHN0eWxlc0luRE9NLnNwbGljZShpLCAwLCB7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IHVwZGF0ZXIsXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cbmZ1bmN0aW9uIGFkZEVsZW1lbnRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIHVwZGF0ZXI7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcbiAgICAgIGlmIChzdHlsZXNJbkRPTVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5ET01bX2luZGV4XS51cGRhdGVyKCk7XG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG5cbiAgICAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlRWxlbWVudCkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQob2JqLnN1cHBvcnRzLCBcIikge1wiKTtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIik7XG4gIH1cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJAbGF5ZXJcIi5jb25jYXQob2JqLmxheWVyLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQob2JqLmxheWVyKSA6IFwiXCIsIFwiIHtcIik7XG4gIH1cbiAgY3NzICs9IG9iai5jc3M7XG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLnN1cHBvcnRzKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH1cblxuICAvLyBGb3Igb2xkIElFXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZUVsZW1lbnQpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZUVsZW1lbnQucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBzdHlsZUVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQpO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUoKSB7fSxcbiAgICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge31cbiAgICB9O1xuICB9XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZUVsZW1lbnQpIHtcbiAgaWYgKHN0eWxlRWxlbWVudC5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGVFbGVtZW50LmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlRWxlbWVudC5yZW1vdmVDaGlsZChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCk7XG4gICAgfVxuICAgIHN0eWxlRWxlbWVudC5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBkb21Mb2NhdGlvbkFycmF5ID0gW1wiaWNvblwiLCBcIm1haW5cIiwgXCJhcmVhXCIsIFwidGltZVwiXTtcbmNvbnN0IGRvbUNvbmRpdGlvbnNBcnJheSA9IFtcImljb25cIiwgXCJjb25kaXRpb25zXCIsIFwiZGVzY3JpcHRpb25cIl07XG5jb25zdCBkb21OdW1iZXJzQXJyYXkgPSBbXCJ0ZW1wXCIsIFwidGVtcG1pblwiLCBcInRlbXBtYXhcIiwgXCJzdW5zZXRcIiwgXCJwcmVjaXBwcm9iXCJdO1xuXG5jb25zdCBkb21BcnJheXMgPSBbZG9tQ29uZGl0aW9uc0FycmF5LCBkb21OdW1iZXJzQXJyYXldO1xuXG5pbXBvcnQgeyBIdG1sRWxlbWVudCB9IGZyb20gXCIuL2h0bWxFbGVtZW50LmpzXCI7XG5cbmV4cG9ydCBmdW5jdGlvbiBwb3B1bGF0ZU9wdGlvbnMoKSB7XG4gIGRvbUNvbmRpdGlvbnNBcnJheS5mb3JFYWNoKChjb24pID0+IHtcbiAgICBsZXQgcGFyZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3ZWF0aGVyLWZvcmVjYXN0XCIpO1xuICAgIGxldCBjb25kaXRpb25MYWJlbCA9IG5ldyBIdG1sRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBwYXJlbnQsXG4gICAgICB7IGNsYXNzOiBcImNvbmRpdGlvbnMtbGFiZWxcIiB9LFxuICAgICAgY29uXG4gICAgKTtcbiAgICBsZXQgcG9wdWxhdGVDb25kaXRpb24gPSBuZXcgSHRtbEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgcGFyZW50LFxuICAgICAgeyBjbGFzczogXCJjdXJyZW50LWRpc3BsYXlcIiwgaWQ6IGBjdXJyZW50LSR7Y29ufWAgfSxcbiAgICAgIGBjdXJyZW50LSR7Y29ufWBcbiAgICApO1xuICB9KTtcblxuICBkb21OdW1iZXJzQXJyYXkuZm9yRWFjaCgobnVtKSA9PiB7XG4gICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1udW1iZXJzXCIpO1xuICAgIGxldCBjb25kaXRpb25MYWJlbCA9IG5ldyBIdG1sRWxlbWVudChcbiAgICAgIFwiZGl2XCIsXG4gICAgICBwYXJlbnQsXG4gICAgICB7IGNsYXNzOiBcImNvbmRpdGlvbnMtbGFiZWxcIiB9LFxuICAgICAgbnVtXG4gICAgKTtcbiAgICBsZXQgcG9wdWxhdGVOdW1iZXIgPSBuZXcgSHRtbEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgcGFyZW50LFxuICAgICAgeyBjbGFzczogXCJjdXJyZW50LWRpc3BsYXlcIiwgaWQ6IGBjdXJyZW50LSR7bnVtfWAgfSxcbiAgICAgIGBjdXJyZW50LSR7bnVtfWBcbiAgICApO1xuICB9KTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGNoYW5nZURvbU9uUXVlcnkoZGF0YU9iaikge1xuICBjaGFuZ2VMb2NhdGlvbk9uUXVlcnkoZGF0YU9iaik7XG4gIGNvbnN0IGRheVdlYXRoZXIgPSBkYXRhT2JqLmRheXNbMF07XG4gIGNvbnN0IGN1cnJlbnRXZWF0aGVyID0gZGF0YU9iai5jdXJyZW50Q29uZGl0aW9ucztcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRvbU51bWJlcnNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRvbU51bWJlcnNBcnJheVtpXTtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYGN1cnJlbnQtJHtjb25kaXRpb259YCk7XG4gICAgc3dpdGNoIChjb25kaXRpb24pIHtcbiAgICAgIGNhc2UgXCJzdW5zZXRcIjpcbiAgICAgICAgZG9tRWxlbWVudC5pbm5lclRleHQgPSBvYmpUaW1lKGRheVdlYXRoZXJbY29uZGl0aW9uXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInRlbXBcIjpcbiAgICAgICAgZG9tRWxlbWVudC5pbm5lclRleHQgPSBkZWdyZWVzRihjdXJyZW50V2VhdGhlcltjb25kaXRpb25dKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwidGVtcG1pblwiOlxuICAgICAgY2FzZSBcInRlbXBtYXhcIjpcbiAgICAgICAgZG9tRWxlbWVudC5pbm5lclRleHQgPSBkZWdyZWVzRihkYXlXZWF0aGVyW2NvbmRpdGlvbl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJwcmVjaXBwcm9iXCI6XG4gICAgICAgIGRvbUVsZW1lbnQuaW5uZXJUZXh0ID0gY2hhbmNlT2ZQcmVjaXAoY3VycmVudFdlYXRoZXJbY29uZGl0aW9uXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZG9tRWxlbWVudC5pbm5lclRleHQgPSBkYXlXZWF0aGVyW2NvbmRpdGlvbl07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGRvbUNvbmRpdGlvbnNBcnJheS5sZW5ndGg7IGkrKykge1xuICAgIGNvbnN0IGNvbmRpdGlvbiA9IGRvbUNvbmRpdGlvbnNBcnJheVtpXTtcbiAgICBjb25zdCBkb21FbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXG4gICAgICBgY3VycmVudC0ke2RvbUNvbmRpdGlvbnNBcnJheVtpXX1gXG4gICAgKTtcbiAgICBzd2l0Y2ggKGNvbmRpdGlvbikge1xuICAgICAgY2FzZSBcImRlc2NyaXB0aW9uXCI6XG4gICAgICAgIGRvbUVsZW1lbnQuaW5uZXJUZXh0ID0gZGF0YU9iai5kZXNjcmlwdGlvbjtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiaWNvblwiOlxuICAgICAgICAvLyBkb21FbGVtZW50LmlubmVyVGV4dCA9IGN1cnJlbnRXZWF0aGVyW2NvbmRpdGlvbl07XG4gICAgICAgIGRvbUVsZW1lbnQuaW5uZXJUZXh0ID0gXCJcIjtcbiAgICAgICAgY29uc3QgaWNvbldyYXBwZXIgPSBuZXcgSHRtbEVsZW1lbnQoXCJkaXZcIiwgZG9tRWxlbWVudCk7XG4gICAgICAgIGNvbnN0IGljb24gPSBuZXcgSHRtbEVsZW1lbnQoXCJpbWdcIiwgaWNvbldyYXBwZXIuZWxlbWVudCwge1xuICAgICAgICAgIHNyYzogYC4uL3Zpc3VhbGNyb3NzaW5naWNvbnMvV2VhdGhlckljb25zL1NWRy9jb2xvci8ke2N1cnJlbnRXZWF0aGVyW2NvbmRpdGlvbl19LnN2Z2AsXG4gICAgICAgICAgY2xhc3M6IFwic3ZnLWljb25cIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkb21FbGVtZW50LmlubmVyVGV4dCA9IGN1cnJlbnRXZWF0aGVyW2NvbmRpdGlvbl07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VMb2NhdGlvbk9uUXVlcnkob2JqKSB7XG4gIGNvbnN0IGZ1bGxBZGRyZXNzID0gb2JqLmFkZHJlc3M7XG4gIGNvbnN0IGFkZHJlc3NBcnJheSA9IGZ1bGxBZGRyZXNzLnNwbGl0KFwiIFwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbi1tYWluXCIpLmlubmVyVGV4dCA9IGFkZHJlc3NBcnJheVswXTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbi1hcmVhXCIpLmlubmVyVGV4dCA9IGFkZHJlc3NBcnJheVsxXTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbi10aW1lXCIpLmlubmVyVGV4dCA9IG9ialRpbWUoXG4gICAgb2JqLmN1cnJlbnRDb25kaXRpb25zLmRhdGV0aW1lXG4gICk7XG59XG5cbmZ1bmN0aW9uIGRlZ3JlZXNGKG51bSkge1xuICByZXR1cm4gYCR7bnVtfcKwRmA7XG59XG5mdW5jdGlvbiBvYmpUaW1lKG1pbHRpbWUpIHtcbiAgbGV0IG1pbEFycmF5ID0gbWlsdGltZS5zcGxpdChcIjpcIik7XG4gIGxldCBteUludCA9IG1pbEFycmF5WzBdIC8gMTtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBteUludCA+IDEyOlxuICAgICAgbXlJbnQgKz0gLTEyO1xuICAgICAgbXlJbnQudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiBgJHtteUludH06JHttaWxBcnJheVsxXX0gUE1gO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBteUludCA8PSAxMjpcbiAgICAgIHJldHVybiBgJHttaWx0aW1lfSBBTWA7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBvYmp0aW1lXCIpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgaWYgKG15SW50ID49IDEyKSB7XG4gICAgbXlJbnQgKz0gLTEyO1xuICAgIG15SW50LnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIGAke215SW50fToke21pbEFycmF5WzFdfSBQTWA7XG4gIH1cbn1cbmZ1bmN0aW9uIGNoYW5jZU9mUHJlY2lwKG51bSkge1xuICByZXR1cm4gYCR7bnVtfSUgY2hhbmNlIG9mIHByZWNpcGl0YXRpb24gY3VycmVudGx5YDtcbn1cbiIsImV4cG9ydCBjbGFzcyBIdG1sRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcmVudCwgcHJvcGVydGllc09iamVjdCA9IHt9LCBjb250ZW50ID0gXCJcIikge1xuICAgIHRoaXMuZWxlbWVudCA9IFwiXCI7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzT2JqZWN0O1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5hZGQoKTtcbiAgfVxuXG4gIGFkZCgpIHtcbiAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy50eXBlKTtcblxuICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BlcnRpZXMgIT09IFwie31cIikpIHtcbiAgICAgIHRoaXMuYWRkUHJvcGVydGllcyhuZXdFbGVtZW50LCB0aGlzLnByb3BlcnRpZXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSBuZXdFbGVtZW50O1xuICB9XG5cbiAgYWRkUHJvcGVydGllcyhlbGVtZW50LCBvYmplY3QpIHtcbiAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGAke3Byb3BlcnR5fWAsIG9iamVjdFtwcm9wZXJ0eV0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnNlV2VhdGhlcihvYmopIHtcbiAgY29uc3Qgd2VhdGhlciA9IHtcbiAgICB0ZW1wZXJhdHVyZTogb2JqLnRlbXAsXG4gICAgY29uZGl0aW9uczogb2JqLmNvbmRpdGlvbnMsXG4gICAgLy8gICB1dmluZGV4OiBvYmoudXZpbmRleCxcbiAgICBmZWVsc2xpa2U6IG9iai5mZWVsc2xpa2UsXG4gICAgLy8gICBodW1pZGl0eTogb2JqLmh1bWlkaXR5LFxuICAgIC8vICAgd2luZHNwZWVkOiBvYmoud2luZHNwZWVkLFxuICAgIC8vICAgcHJlc3N1cmU6IG9iai5wcmVzc3VyZSxcbiAgICAvLyAgIHZpc2liaWxpdHk6IG9iai52aXNpYmlsaXR5LFxuICAgIGljb246IG9iai5pY29uLFxuICAgIHByZWNpcHByb2I6IG9iai5wcmVjaXBwcm9iLFxuICAgIGRlc2NyaXB0aW9uOiBvYmouZGVzY3JpcHRpb24sXG4gIH07XG4gIHJldHVybiB3ZWF0aGVyO1xufVxuIiwiZXhwb3J0IGNsYXNzIFZpc3VhbENyb3NzaW5nUXVlcnkge1xuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbiwgbWV0aG9kID0gXCJcIikge1xuICAgIHRoaXMuYXBpa2V5ID0gXCJSQUVISFlHUEtMRkNBUDgzNUxQUVdOTVE5XCI7XG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaXN1YWxDcm9zc2luZ1F1ZXJ5IH0gZnJvbSBcIi4vcXVlcnlPYmplY3QuanNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoYXBpbWV0aG9kLCBsb2NhdGlvbikge1xuICBjb25zdCB3ZWJzaXRlID1cbiAgICBcImh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lXCI7XG4gIGNvbnN0IGdlbmVyYXRlZFF1ZXJ5ID0gbmV3IFZpc3VhbENyb3NzaW5nUXVlcnkoXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbi1zZWFyY2gtYmFyXCIpLnZhbHVlXG4gICk7XG5cbiAgLy8gbGV0IHRpbWUgPSBub3cgY3JlYXRlIGZyb20gbmV3IGRhdGUgdGltZVxuICAvLyBsZXQgZW5kdGltZSA9IDggaG91cnMgYWZ0ZXJcbiAgY29uc3Qga2V5ID0gXCJSQUVISFlHUEtMRkNBUDgzNUxQUVdOTVE5XCI7XG4gIC8vIGNvbnN0IGFwaURhdGFPYmogPSBuZXcgVmlzdWFsQ3Jvc3NpbmdRdWVyeShtZXRob2QsIG15TG9jYXRpb24pO1xuICBjb25zdCB0aW1lID0gXCJ0b2RheVwiO1xuICBjb25zdCBtZXRob2RzID0gYCR7dGltZX0/dW5pdHM9dXNgO1xuICBjb25zdCBteVF1ZXJ5ID0gYCR7d2Vic2l0ZX0vJHtnZW5lcmF0ZWRRdWVyeS5sb2NhdGlvbn0vJHttZXRob2RzfSZrZXk9JHtrZXl9YDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG15UXVlcnkpO1xuICBjb25zdCB3ZWF0aGVyRGF0YU9iaiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgLy8gY29uc3QgY3VycmVudENvbmRpdGlvbnNPYmogPSB3ZWF0aGVyRGF0YU9iai5jdXJyZW50Q29uZGl0aW9ucztcbiAgLy8gY29uc29sZS50YWJsZSh3ZWF0aGVyRGF0YU9iaik7XG4gIHJldHVybiB3ZWF0aGVyRGF0YU9iajtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vcXVlcnlSZXF1ZXN0LmpzXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZU9wdGlvbnMsIGNoYW5nZURvbU9uUXVlcnkgfSBmcm9tIFwiLi9jaGFuZ2VEb20uanNcIjtcbmltcG9ydCB7IHBhcnNlV2VhdGhlciB9IGZyb20gXCIuL3BhcnNlV2VhdGhlci5qc1wiO1xuXG5wb3B1bGF0ZU9wdGlvbnMoKTtcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb24tc2VhcmNoLWJ1dHRvblwiKTtcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICBnZXRXZWF0aGVyKCkudGhlbigod2VhdGhlck9iaikgPT4ge1xuICAgIGNoYW5nZURvbU9uUXVlcnkod2VhdGhlck9iaik7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=