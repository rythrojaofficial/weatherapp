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
const weatherIconPath = "../src/weatherIcons/";
// import clearDay from "./images/weatherIcons/clear-day.svg";

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
          src: `${weatherIconPath}${currentWeather[condition]}.svg`,
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

/***/ "./src/images/sun-pattern.png":
/*!************************************!*\
  !*** ./src/images/sun-pattern.png ***!
  \************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "d1a4d5684c2dc7eb6881.png";

/***/ }),

/***/ "./src/fonts/inter/Inter-VariableFont_slnt,wght.ttf":
/*!**********************************************************!*\
  !*** ./src/fonts/inter/Inter-VariableFont_slnt,wght.ttf ***!
  \**********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "853e01975d2783d9fa29.ttf";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFlO0FBQ2Y7QUFDQTtBQUNBLEVBQUUsNERBQVU7QUFDWixJQUFJLCtEQUFnQjtBQUNwQixHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL3NyYy9zdHlsZS5jc3M/NzE2MyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL3NyYy9jaGFuZ2VEb20uanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zLy4vc3JjL2h0bWxFbGVtZW50LmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL3NyYy9wYXJzZVdlYXRoZXIuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zLy4vc3JjL3F1ZXJ5T2JqZWN0LmpzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy8uL3NyYy9xdWVyeVJlcXVlc3QuanMiLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2R5bmFtaWMtdWktaW50ZXJhdGN0aW9ucy93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vZHluYW1pYy11aS1pbnRlcmF0Y3Rpb25zL3dlYnBhY2svcnVudGltZS9ub25jZSIsIndlYnBhY2s6Ly9keW5hbWljLXVpLWludGVyYXRjdGlvbnMvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4vZm9udHMvaW50ZXIvSW50ZXItVmFyaWFibGVGb250X3NsbnQsd2dodC50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJpbWFnZXMvc3VuLXBhdHRlcm4ucG5nXCIsIGltcG9ydC5tZXRhLnVybCk7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fXyA9IF9fX0NTU19MT0FERVJfR0VUX1VSTF9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzFfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8xX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGZvbnQtZmFjZSB7XG4gICAgZm9udC1mYW1pbHk6ICdnRm9udHMtSW50ZXInO1xuICAgIHNyYzogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMF9fX30pO1xuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gICAgZm9udC1zaXplOiBub3JtYWw7XG4gIH1cblxuKnsgYm94LXNpemluZzogYm9yZGVyLWJveDt9XG5ib2R5e1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IGF1dG8gOTAlIGF1dG87XG4gIGZvbnQtZmFtaWx5OiAnZ0ZvbnRzLUludGVyJztcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7X19fQ1NTX0xPQURFUl9VUkxfUkVQTEFDRU1FTlRfMV9fX30pO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xufVxuXG4uYXBwLWNvbnRhaW5lciB7XG4gIC8qIGNlbnRlciBhcHAgY29udGFpbmVyICovXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xuICAvKiBhZGQgbWFyZ2lucyAgKi9cbiAgbWFyZ2luLXRvcDogNXZoO1xuICBtYXJnaW4tYm90dG9tOiA1dmg7XG4gIC8qIGdyaWQgZGlzcGxheSBhcmVhICAqL1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLWdhcDogMXJlbTtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCBhdXRvKTtcbiAgZ3JpZC1hdXRvLXJvd3M6IGF1dG87XG4gIC8qIHZpc2liaWxpdHkgY29sb3IgKi9cbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMTg1LCA4OSk7ICovXG4gIFxufVxuI2xvY2F0aW9uLWRpc3BsYXl7XG4gIGdyaWQtY29sdW1uOiAxIC8gNDtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmx1ZXZpb2xldDtcbiAgLyogc3ViZ3JpZCAqL1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJyZW0gYXV0byBhdXRvO1xufVxuI2xvY2F0aW9uLXN1YntcbiAgZ3JpZC1jb2x1bW46IDIgLyA0O1xuICAvKiBzdWJncmlkICovXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xufVxuI2xvY2F0aW9uLW1haW57XG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuI2xvY2F0aW9uLXRpbWV7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAyO1xufVxuXG5cbiNsb2NhdGlvbi1zZWFyY2h7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xuICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxNzYsIDkyLCAxODcpO1xuICAvKiBncmlkLWNvbHVtbi1lbmQ6IDsgKi9cbn1cbiN3ZWF0aGVyLWRhdGF7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDU7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig4NywgMTMzLCAxMzMpO1xuICAvKiBzdWJncmlkICovXG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogYXV0byBhdXRvO1xufVxuI3dlYXRoZXItZm9yZWNhc3R7XG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICBncmlkLWNvbHVtbi1lbmQ6IDI7XG4gIC8qIGJhY2tncm91bmQtY29sb3I6IGFxdWFtYXJpbmU7ICovXG59XG4jd2VhdGhlci1udW1iZXJze1xuICBncmlkLWNvbHVtbjogMiAvIDM7XG59XG5cbi8qIGNoaWxkcmVuIG9mIGFwcCBjb250YWluZXIgKi9cbi5hcHAtY29udGFpbmVyID4gZGl2e1xuICBwYWRkaW5nOiAxcmVtO1xuICBib3JkZXItcmFkaXVzOiAxcmVtO1xufVxuXG4uY29uZGl0aW9ucy1sYWJlbHtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cbiNjdXJyZW50LWNvbmRpdG9ucy10aXRsZXtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAxLjJyZW07XG59XG4jY3VycmVudC1kaXNwbGF5e1xuICBmb250LXNpemU6IDEuNHJlbTtcbn1cblxuLnN2Zy1pY29ue1xuICBoZWlnaHQ6IDIuNXJlbTtcbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSwyQkFBMkI7SUFDM0IsNENBQTJEO0lBQzNELG1CQUFtQjtJQUNuQixpQkFBaUI7RUFDbkI7O0FBRUYsR0FBRyxzQkFBc0IsQ0FBQztBQUMxQjtFQUNFLGFBQWE7RUFDYixvQ0FBb0M7RUFDcEMsMkJBQTJCO0VBQzNCLHlEQUErQztFQUMvQyx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsb0JBQW9CO0VBQ3BCLGlCQUFpQjtFQUNqQixlQUFlO0VBQ2Ysa0JBQWtCO0VBQ2xCLHVCQUF1QjtFQUN2QixhQUFhO0VBQ2IsY0FBYztFQUNkLHFDQUFxQztFQUNyQyxvQkFBb0I7RUFDcEIscUJBQXFCO0VBQ3JCLHlDQUF5Qzs7QUFFM0M7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQiw0QkFBNEI7RUFDNUIsWUFBWTtFQUNaLGFBQWE7RUFDYixxQ0FBcUM7QUFDdkM7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixZQUFZO0VBQ1osYUFBYTtFQUNiLGdDQUFnQztFQUNoQyw0QkFBNEI7QUFDOUI7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0Qjs7O0FBR0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLG1DQUFtQztFQUNuQyx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsbUNBQW1DO0VBQ25DLFlBQVk7RUFDWixhQUFhO0VBQ2IsZ0NBQWdDO0FBQ2xDO0FBQ0E7RUFDRSxvQkFBb0I7RUFDcEIsa0JBQWtCO0VBQ2xCLGtDQUFrQztBQUNwQztBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBLDhCQUE4QjtBQUM5QjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLGdCQUFnQjtFQUNoQixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGNBQWM7QUFDaEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQGZvbnQtZmFjZSB7XFxuICAgIGZvbnQtZmFtaWx5OiAnZ0ZvbnRzLUludGVyJztcXG4gICAgc3JjOiB1cmwoJy4vZm9udHMvaW50ZXIvSW50ZXItVmFyaWFibGVGb250X3NsbnRcXFxcLHdnaHQudHRmJyk7XFxuICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICAgIGZvbnQtc2l6ZTogbm9ybWFsO1xcbiAgfVxcblxcbip7IGJveC1zaXppbmc6IGJvcmRlci1ib3g7fVxcbmJvZHl7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIDkwJSBhdXRvO1xcbiAgZm9udC1mYW1pbHk6ICdnRm9udHMtSW50ZXInO1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFxcXCJpbWFnZXMvc3VuLXBhdHRlcm4ucG5nXFxcIik7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xcbn1cXG5cXG4uYXBwLWNvbnRhaW5lciB7XFxuICAvKiBjZW50ZXIgYXBwIGNvbnRhaW5lciAqL1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDI7XFxuICAvKiBhZGQgbWFyZ2lucyAgKi9cXG4gIG1hcmdpbi10b3A6IDV2aDtcXG4gIG1hcmdpbi1ib3R0b206IDV2aDtcXG4gIC8qIGdyaWQgZGlzcGxheSBhcmVhICAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtZ2FwOiAxcmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCBhdXRvKTtcXG4gIGdyaWQtYXV0by1yb3dzOiBhdXRvO1xcbiAgLyogdmlzaWJpbGl0eSBjb2xvciAqL1xcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE5MiwgMTg1LCA4OSk7ICovXFxuICBcXG59XFxuI2xvY2F0aW9uLWRpc3BsYXl7XFxuICBncmlkLWNvbHVtbjogMSAvIDQ7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVldmlvbGV0O1xcbiAgLyogc3ViZ3JpZCAqL1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMnJlbSBhdXRvIGF1dG87XFxufVxcbiNsb2NhdGlvbi1zdWJ7XFxuICBncmlkLWNvbHVtbjogMiAvIDQ7XFxuICAvKiBzdWJncmlkICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlOyAqL1xcbn1cXG4jbG9jYXRpb24tbWFpbntcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuI2xvY2F0aW9uLXRpbWV7XFxuICBncmlkLWNvbHVtbi1zdGFydDogMjtcXG59XFxuXFxuXFxuI2xvY2F0aW9uLXNlYXJjaHtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiA0O1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3NiwgOTIsIDE4Nyk7XFxuICAvKiBncmlkLWNvbHVtbi1lbmQ6IDsgKi9cXG59XFxuI3dlYXRoZXItZGF0YXtcXG4gIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgZ3JpZC1jb2x1bW4tZW5kOiA1O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDg3LCAxMzMsIDEzMyk7XFxuICAvKiBzdWJncmlkICovXFxuICBkaXNwbGF5OiBncmlkO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBhdXRvIGF1dG87XFxufVxcbiN3ZWF0aGVyLWZvcmVjYXN0e1xcbiAgZ3JpZC1jb2x1bW4tc3RhcnQ6IDE7XFxuICBncmlkLWNvbHVtbi1lbmQ6IDI7XFxuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhbWFyaW5lOyAqL1xcbn1cXG4jd2VhdGhlci1udW1iZXJze1xcbiAgZ3JpZC1jb2x1bW46IDIgLyAzO1xcbn1cXG5cXG4vKiBjaGlsZHJlbiBvZiBhcHAgY29udGFpbmVyICovXFxuLmFwcC1jb250YWluZXIgPiBkaXZ7XFxuICBwYWRkaW5nOiAxcmVtO1xcbiAgYm9yZGVyLXJhZGl1czogMXJlbTtcXG59XFxuXFxuLmNvbmRpdGlvbnMtbGFiZWx7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG4jY3VycmVudC1jb25kaXRvbnMtdGl0bGV7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxufVxcbiNjdXJyZW50LWRpc3BsYXl7XFxuICBmb250LXNpemU6IDEuNHJlbTtcXG59XFxuXFxuLnN2Zy1pY29ue1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcbm9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImNvbnN0IHdlYXRoZXJJY29uUGF0aCA9IFwiLi4vc3JjL3dlYXRoZXJJY29ucy9cIjtcbi8vIGltcG9ydCBjbGVhckRheSBmcm9tIFwiLi9pbWFnZXMvd2VhdGhlckljb25zL2NsZWFyLWRheS5zdmdcIjtcblxuY29uc3QgZG9tTG9jYXRpb25BcnJheSA9IFtcImljb25cIiwgXCJtYWluXCIsIFwiYXJlYVwiLCBcInRpbWVcIl07XG5jb25zdCBkb21Db25kaXRpb25zQXJyYXkgPSBbXCJpY29uXCIsIFwiY29uZGl0aW9uc1wiLCBcImRlc2NyaXB0aW9uXCJdO1xuY29uc3QgZG9tTnVtYmVyc0FycmF5ID0gW1widGVtcFwiLCBcInRlbXBtaW5cIiwgXCJ0ZW1wbWF4XCIsIFwic3Vuc2V0XCIsIFwicHJlY2lwcHJvYlwiXTtcblxuY29uc3QgZG9tQXJyYXlzID0gW2RvbUNvbmRpdGlvbnNBcnJheSwgZG9tTnVtYmVyc0FycmF5XTtcblxuaW1wb3J0IHsgSHRtbEVsZW1lbnQgfSBmcm9tIFwiLi9odG1sRWxlbWVudC5qc1wiO1xuXG5leHBvcnQgZnVuY3Rpb24gcG9wdWxhdGVPcHRpb25zKCkge1xuICBkb21Db25kaXRpb25zQXJyYXkuZm9yRWFjaCgoY29uKSA9PiB7XG4gICAgbGV0IHBhcmVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwid2VhdGhlci1mb3JlY2FzdFwiKTtcbiAgICBsZXQgY29uZGl0aW9uTGFiZWwgPSBuZXcgSHRtbEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgcGFyZW50LFxuICAgICAgeyBjbGFzczogXCJjb25kaXRpb25zLWxhYmVsXCIgfSxcbiAgICAgIGNvblxuICAgICk7XG4gICAgbGV0IHBvcHVsYXRlQ29uZGl0aW9uID0gbmV3IEh0bWxFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHBhcmVudCxcbiAgICAgIHsgY2xhc3M6IFwiY3VycmVudC1kaXNwbGF5XCIsIGlkOiBgY3VycmVudC0ke2Nvbn1gIH0sXG4gICAgICBgY3VycmVudC0ke2Nvbn1gXG4gICAgKTtcbiAgfSk7XG5cbiAgZG9tTnVtYmVyc0FycmF5LmZvckVhY2goKG51bSkgPT4ge1xuICAgIGxldCBwYXJlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIndlYXRoZXItbnVtYmVyc1wiKTtcbiAgICBsZXQgY29uZGl0aW9uTGFiZWwgPSBuZXcgSHRtbEVsZW1lbnQoXG4gICAgICBcImRpdlwiLFxuICAgICAgcGFyZW50LFxuICAgICAgeyBjbGFzczogXCJjb25kaXRpb25zLWxhYmVsXCIgfSxcbiAgICAgIG51bVxuICAgICk7XG4gICAgbGV0IHBvcHVsYXRlTnVtYmVyID0gbmV3IEh0bWxFbGVtZW50KFxuICAgICAgXCJkaXZcIixcbiAgICAgIHBhcmVudCxcbiAgICAgIHsgY2xhc3M6IFwiY3VycmVudC1kaXNwbGF5XCIsIGlkOiBgY3VycmVudC0ke251bX1gIH0sXG4gICAgICBgY3VycmVudC0ke251bX1gXG4gICAgKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjaGFuZ2VEb21PblF1ZXJ5KGRhdGFPYmopIHtcbiAgY2hhbmdlTG9jYXRpb25PblF1ZXJ5KGRhdGFPYmopO1xuICBjb25zdCBkYXlXZWF0aGVyID0gZGF0YU9iai5kYXlzWzBdO1xuICBjb25zdCBjdXJyZW50V2VhdGhlciA9IGRhdGFPYmouY3VycmVudENvbmRpdGlvbnM7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb21OdW1iZXJzQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSBkb21OdW1iZXJzQXJyYXlbaV07XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBjdXJyZW50LSR7Y29uZGl0aW9ufWApO1xuICAgIHN3aXRjaCAoY29uZGl0aW9uKSB7XG4gICAgICBjYXNlIFwic3Vuc2V0XCI6XG4gICAgICAgIGRvbUVsZW1lbnQuaW5uZXJUZXh0ID0gb2JqVGltZShkYXlXZWF0aGVyW2NvbmRpdGlvbl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgXCJ0ZW1wXCI6XG4gICAgICAgIGRvbUVsZW1lbnQuaW5uZXJUZXh0ID0gZGVncmVlc0YoY3VycmVudFdlYXRoZXJbY29uZGl0aW9uXSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcInRlbXBtaW5cIjpcbiAgICAgIGNhc2UgXCJ0ZW1wbWF4XCI6XG4gICAgICAgIGRvbUVsZW1lbnQuaW5uZXJUZXh0ID0gZGVncmVlc0YoZGF5V2VhdGhlcltjb25kaXRpb25dKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwicHJlY2lwcHJvYlwiOlxuICAgICAgICBkb21FbGVtZW50LmlubmVyVGV4dCA9IGNoYW5jZU9mUHJlY2lwKGN1cnJlbnRXZWF0aGVyW2NvbmRpdGlvbl0pO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGRvbUVsZW1lbnQuaW5uZXJUZXh0ID0gZGF5V2VhdGhlcltjb25kaXRpb25dO1xuICAgICAgICBicmVhaztcbiAgICB9XG4gIH1cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBkb21Db25kaXRpb25zQXJyYXkubGVuZ3RoOyBpKyspIHtcbiAgICBjb25zdCBjb25kaXRpb24gPSBkb21Db25kaXRpb25zQXJyYXlbaV07XG4gICAgY29uc3QgZG9tRWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFxuICAgICAgYGN1cnJlbnQtJHtkb21Db25kaXRpb25zQXJyYXlbaV19YFxuICAgICk7XG4gICAgc3dpdGNoIChjb25kaXRpb24pIHtcbiAgICAgIGNhc2UgXCJkZXNjcmlwdGlvblwiOlxuICAgICAgICBkb21FbGVtZW50LmlubmVyVGV4dCA9IGRhdGFPYmouZGVzY3JpcHRpb247XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcImljb25cIjpcbiAgICAgICAgLy8gZG9tRWxlbWVudC5pbm5lclRleHQgPSBjdXJyZW50V2VhdGhlcltjb25kaXRpb25dO1xuICAgICAgICBkb21FbGVtZW50LmlubmVyVGV4dCA9IFwiXCI7XG4gICAgICAgIGNvbnN0IGljb25XcmFwcGVyID0gbmV3IEh0bWxFbGVtZW50KFwiZGl2XCIsIGRvbUVsZW1lbnQpO1xuICAgICAgICBjb25zdCBpY29uID0gbmV3IEh0bWxFbGVtZW50KFwiaW1nXCIsIGljb25XcmFwcGVyLmVsZW1lbnQsIHtcbiAgICAgICAgICBzcmM6IGAke3dlYXRoZXJJY29uUGF0aH0ke2N1cnJlbnRXZWF0aGVyW2NvbmRpdGlvbl19LnN2Z2AsXG4gICAgICAgICAgY2xhc3M6IFwic3ZnLWljb25cIixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICBkb21FbGVtZW50LmlubmVyVGV4dCA9IGN1cnJlbnRXZWF0aGVyW2NvbmRpdGlvbl07XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjaGFuZ2VMb2NhdGlvbk9uUXVlcnkob2JqKSB7XG4gIGNvbnN0IGZ1bGxBZGRyZXNzID0gb2JqLmFkZHJlc3M7XG4gIGNvbnN0IGFkZHJlc3NBcnJheSA9IGZ1bGxBZGRyZXNzLnNwbGl0KFwiIFwiKTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbi1tYWluXCIpLmlubmVyVGV4dCA9IGFkZHJlc3NBcnJheVswXTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbi1hcmVhXCIpLmlubmVyVGV4dCA9IGFkZHJlc3NBcnJheVsxXTtcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbi10aW1lXCIpLmlubmVyVGV4dCA9IG9ialRpbWUoXG4gICAgb2JqLmN1cnJlbnRDb25kaXRpb25zLmRhdGV0aW1lXG4gICk7XG59XG5cbmZ1bmN0aW9uIGRlZ3JlZXNGKG51bSkge1xuICByZXR1cm4gYCR7bnVtfcKwRmA7XG59XG5mdW5jdGlvbiBvYmpUaW1lKG1pbHRpbWUpIHtcbiAgbGV0IG1pbEFycmF5ID0gbWlsdGltZS5zcGxpdChcIjpcIik7XG4gIGxldCBteUludCA9IG1pbEFycmF5WzBdIC8gMTtcbiAgc3dpdGNoICh0cnVlKSB7XG4gICAgY2FzZSBteUludCA+IDEyOlxuICAgICAgbXlJbnQgKz0gLTEyO1xuICAgICAgbXlJbnQudG9TdHJpbmcoKTtcbiAgICAgIHJldHVybiBgJHtteUludH06JHttaWxBcnJheVsxXX0gUE1gO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSBteUludCA8PSAxMjpcbiAgICAgIHJldHVybiBgJHttaWx0aW1lfSBBTWA7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICAgICAgY29uc29sZS5sb2coXCJlcnJvciBvYmp0aW1lXCIpO1xuICAgICAgYnJlYWs7XG4gIH1cbiAgaWYgKG15SW50ID49IDEyKSB7XG4gICAgbXlJbnQgKz0gLTEyO1xuICAgIG15SW50LnRvU3RyaW5nKCk7XG4gICAgcmV0dXJuIGAke215SW50fToke21pbEFycmF5WzFdfSBQTWA7XG4gIH1cbn1cbmZ1bmN0aW9uIGNoYW5jZU9mUHJlY2lwKG51bSkge1xuICByZXR1cm4gYCR7bnVtfSUgY2hhbmNlIG9mIHByZWNpcGl0YXRpb24gY3VycmVudGx5YDtcbn1cbiIsImV4cG9ydCBjbGFzcyBIdG1sRWxlbWVudCB7XG4gIGNvbnN0cnVjdG9yKHR5cGUsIHBhcmVudCwgcHJvcGVydGllc09iamVjdCA9IHt9LCBjb250ZW50ID0gXCJcIikge1xuICAgIHRoaXMuZWxlbWVudCA9IFwiXCI7XG4gICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICB0aGlzLnBhcmVudCA9IHBhcmVudDtcbiAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzT2JqZWN0O1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5hZGQoKTtcbiAgfVxuXG4gIGFkZCgpIHtcbiAgICBsZXQgbmV3RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQodGhpcy50eXBlKTtcblxuICAgIGlmIChKU09OLnN0cmluZ2lmeSh0aGlzLnByb3BlcnRpZXMgIT09IFwie31cIikpIHtcbiAgICAgIHRoaXMuYWRkUHJvcGVydGllcyhuZXdFbGVtZW50LCB0aGlzLnByb3BlcnRpZXMpO1xuICAgIH1cbiAgICBpZiAodGhpcy5jb250ZW50ICE9PSBcIlwiKSB7XG4gICAgICBuZXdFbGVtZW50LnRleHRDb250ZW50ID0gdGhpcy5jb250ZW50O1xuICAgIH1cbiAgICBpZiAodGhpcy5wYXJlbnQpIHtcbiAgICAgIHRoaXMucGFyZW50LmFwcGVuZENoaWxkKG5ld0VsZW1lbnQpO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQgPSBuZXdFbGVtZW50O1xuICB9XG5cbiAgYWRkUHJvcGVydGllcyhlbGVtZW50LCBvYmplY3QpIHtcbiAgICBmb3IgKGxldCBwcm9wZXJ0eSBpbiBvYmplY3QpIHtcbiAgICAgIGVsZW1lbnQuc2V0QXR0cmlidXRlKGAke3Byb3BlcnR5fWAsIG9iamVjdFtwcm9wZXJ0eV0pO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHBhcnNlV2VhdGhlcihvYmopIHtcbiAgY29uc3Qgd2VhdGhlciA9IHtcbiAgICB0ZW1wZXJhdHVyZTogb2JqLnRlbXAsXG4gICAgY29uZGl0aW9uczogb2JqLmNvbmRpdGlvbnMsXG4gICAgLy8gICB1dmluZGV4OiBvYmoudXZpbmRleCxcbiAgICBmZWVsc2xpa2U6IG9iai5mZWVsc2xpa2UsXG4gICAgLy8gICBodW1pZGl0eTogb2JqLmh1bWlkaXR5LFxuICAgIC8vICAgd2luZHNwZWVkOiBvYmoud2luZHNwZWVkLFxuICAgIC8vICAgcHJlc3N1cmU6IG9iai5wcmVzc3VyZSxcbiAgICAvLyAgIHZpc2liaWxpdHk6IG9iai52aXNpYmlsaXR5LFxuICAgIGljb246IG9iai5pY29uLFxuICAgIHByZWNpcHByb2I6IG9iai5wcmVjaXBwcm9iLFxuICAgIGRlc2NyaXB0aW9uOiBvYmouZGVzY3JpcHRpb24sXG4gIH07XG4gIHJldHVybiB3ZWF0aGVyO1xufVxuIiwiZXhwb3J0IGNsYXNzIFZpc3VhbENyb3NzaW5nUXVlcnkge1xuICBjb25zdHJ1Y3Rvcihsb2NhdGlvbiwgbWV0aG9kID0gXCJcIikge1xuICAgIHRoaXMuYXBpa2V5ID0gXCJSQUVISFlHUEtMRkNBUDgzNUxQUVdOTVE5XCI7XG4gICAgdGhpcy5tZXRob2QgPSBtZXRob2Q7XG4gICAgdGhpcy5sb2NhdGlvbiA9IGxvY2F0aW9uO1xuICB9XG59XG4iLCJpbXBvcnQgeyBWaXN1YWxDcm9zc2luZ1F1ZXJ5IH0gZnJvbSBcIi4vcXVlcnlPYmplY3QuanNcIjtcblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXIoYXBpbWV0aG9kLCBsb2NhdGlvbikge1xuICBjb25zdCB3ZWJzaXRlID1cbiAgICBcImh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lXCI7XG4gIGNvbnN0IGdlbmVyYXRlZFF1ZXJ5ID0gbmV3IFZpc3VhbENyb3NzaW5nUXVlcnkoXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2NhdGlvbi1zZWFyY2gtYmFyXCIpLnZhbHVlXG4gICk7XG5cbiAgLy8gbGV0IHRpbWUgPSBub3cgY3JlYXRlIGZyb20gbmV3IGRhdGUgdGltZVxuICAvLyBsZXQgZW5kdGltZSA9IDggaG91cnMgYWZ0ZXJcbiAgY29uc3Qga2V5ID0gXCJSQUVISFlHUEtMRkNBUDgzNUxQUVdOTVE5XCI7XG4gIC8vIGNvbnN0IGFwaURhdGFPYmogPSBuZXcgVmlzdWFsQ3Jvc3NpbmdRdWVyeShtZXRob2QsIG15TG9jYXRpb24pO1xuICBjb25zdCB0aW1lID0gXCJ0b2RheVwiO1xuICBjb25zdCBtZXRob2RzID0gYCR7dGltZX0/dW5pdHM9dXNgO1xuICBjb25zdCBteVF1ZXJ5ID0gYCR7d2Vic2l0ZX0vJHtnZW5lcmF0ZWRRdWVyeS5sb2NhdGlvbn0vJHttZXRob2RzfSZrZXk9JHtrZXl9YDtcblxuICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKG15UXVlcnkpO1xuICBjb25zdCB3ZWF0aGVyRGF0YU9iaiA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcbiAgLy8gY29uc3QgY3VycmVudENvbmRpdGlvbnNPYmogPSB3ZWF0aGVyRGF0YU9iai5jdXJyZW50Q29uZGl0aW9ucztcbiAgLy8gY29uc29sZS50YWJsZSh3ZWF0aGVyRGF0YU9iaik7XG4gIHJldHVybiB3ZWF0aGVyRGF0YU9iajtcbn1cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJ2YXIgc2NyaXB0VXJsO1xuaWYgKF9fd2VicGFja19yZXF1aXJlX18uZy5pbXBvcnRTY3JpcHRzKSBzY3JpcHRVcmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcubG9jYXRpb24gKyBcIlwiO1xudmFyIGRvY3VtZW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmRvY3VtZW50O1xuaWYgKCFzY3JpcHRVcmwgJiYgZG9jdW1lbnQpIHtcblx0aWYgKGRvY3VtZW50LmN1cnJlbnRTY3JpcHQgJiYgZG9jdW1lbnQuY3VycmVudFNjcmlwdC50YWdOYW1lLnRvVXBwZXJDYXNlKCkgPT09ICdTQ1JJUFQnKVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjO1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHtcblx0XHRcdHZhciBpID0gc2NyaXB0cy5sZW5ndGggLSAxO1xuXHRcdFx0d2hpbGUgKGkgPiAtMSAmJiAoIXNjcmlwdFVybCB8fCAhL15odHRwKHM/KTovLnRlc3Qoc2NyaXB0VXJsKSkpIHNjcmlwdFVybCA9IHNjcmlwdHNbaS0tXS5zcmM7XG5cdFx0fVxuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImluZGV4XCI6IDBcbn07XG5cbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gbm8ganNvbnAgZnVuY3Rpb24iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5jID0gdW5kZWZpbmVkOyIsImltcG9ydCBcIi4vc3R5bGUuY3NzXCI7XG5pbXBvcnQgeyBnZXRXZWF0aGVyIH0gZnJvbSBcIi4vcXVlcnlSZXF1ZXN0LmpzXCI7XG5pbXBvcnQgeyBwb3B1bGF0ZU9wdGlvbnMsIGNoYW5nZURvbU9uUXVlcnkgfSBmcm9tIFwiLi9jaGFuZ2VEb20uanNcIjtcbmltcG9ydCB7IHBhcnNlV2VhdGhlciB9IGZyb20gXCIuL3BhcnNlV2VhdGhlci5qc1wiO1xuXG5wb3B1bGF0ZU9wdGlvbnMoKTtcbmNvbnN0IHNlYXJjaEJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9jYXRpb24tc2VhcmNoLWJ1dHRvblwiKTtcbnNlYXJjaEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgYXN5bmMgKCkgPT4ge1xuICBnZXRXZWF0aGVyKCkudGhlbigod2VhdGhlck9iaikgPT4ge1xuICAgIGNoYW5nZURvbU9uUXVlcnkod2VhdGhlck9iaik7XG4gIH0pO1xufSk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=