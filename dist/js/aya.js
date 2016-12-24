var aya =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	var _utils = __webpack_require__(1);
	
	function aya(str) {
		var lowerStr = str.toLowerCase();
	
		return (0, _utils.invert)(lowerStr);
	};
	
	module.exports = aya;

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	exports.invert = undefined;
	
	var _dict = __webpack_require__(2);
	
	var _dict2 = _interopRequireDefault(_dict);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function isRu(str) {
		return (/[а-яё]/i.test(str)
		);
	};
	
	function getKeyByValue(dict, value) {
		for (var prop in dict) {
			if (dict.hasOwnProperty(prop)) {
				if (dict[prop] === value) return prop;
			}
		}
	}
	
	function invert(str) {
	
		var result = [];
		var strArr = str.split("");
	
		if (isRu(str)) {
	
			strArr.forEach(function (key) {
				result.push(_dict2.default[key]);
			});
		} else {
	
			strArr.map(function (item) {
				result.push(getKeyByValue(_dict2.default, item));
			});
		}
		return result.join('');
	};
	
	exports.invert = invert;

/***/ },
/* 2 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var dict = {
		'а': 'f',
		'б': ',',
		'в': 'd',
		'г': 'u',
		'д': 'l',
		'е': 't',
		'ё': '`',
		'ж': ';',
		'з': 'p',
		'и': 'b',
		'й': 'q',
		'к': 'r',
		'л': 'k',
		'м': 'v',
		'н': 'y',
		'о': 'j',
		'п': 'g',
		'р': 'h',
		'с': 'c',
		'т': 'n',
		'у': 'e',
		'ф': 'a',
		'х': '[',
		'ц': 'w',
		'ч': 'x',
		'ш': 'i',
		'щ': 'o',
		'ъ': ']',
		'ы': 's',
		'ь': 'm',
		'э': "'",
		'ю': '.',
		'я': 'z',
		'.': '/'
	
	};
	exports.default = dict;

/***/ }
/******/ ]);
//# sourceMappingURL=aya.js.map