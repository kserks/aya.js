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
	
	var _dicts = __webpack_require__(1);
	
	var _dicts2 = _interopRequireDefault(_dicts);
	
	var _utils = __webpack_require__(2);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	function getChar(word) {
		if ((0, _utils.isKyr)(word)) {
			console.log(true, word);
		} else {
			console.log(false, word);
		};
		var reg = (0, _utils.isUpperCase)(word);
		console.log('\u0420\u0435\u0433\u0438\u0441\u0442\u0440: ' + reg);
		/*
	 let result = [];
	 var str = Object.values(word)
	 		let arr = word.split('');
	 
	 		arr.map((key)=>{
	 			result.push(dict[key])
	 		});
	 		
	 		return result.join("");
	 		*/
	}
	
	var res = getChar('Г' /*'wuxia'*/);
	
	//console.log(res);

/***/ },
/* 1 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
		value: true
	});
	var EN_RU = {
		'a': 'ф',
		'b': 'и',
		'c': 'с',
		'd': 'в',
		'e': 'у',
		'f': 'а',
		'g': 'п',
		'h': 'р',
		'i': 'ш',
		'j': 'о',
		'k': 'л',
		'l': 'д',
		'm': 'ь',
		'n': 'т',
		'o': 'o',
		'p': 'з',
		'q': 'й',
		'r': 'к',
		's': 'ы',
		't': 'е',
		'u': 'г',
		'v': 'м',
		'w': 'ц',
		'x': 'ч',
		'y': 'н',
		'z': 'я'
	};
	var RU_EN = {
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
		'я': 'z'
	};
	exports.RU_EN = RU_EN;
	exports.EN_RU = EN_RU;

/***/ },
/* 2 */
/***/ function(module, exports) {

	"use strict";
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	function isUpperCase(char) {
	
	  if (char.toUpperCase() === char) {
	    return true;
	  } else {
	    return false;
	  }
	};
	
	function isKyr(str) {
	  return (/[а-яё]/i.test(str)
	  );
	};
	
	exports.isKyr = isKyr;
	exports.isUpperCase = isUpperCase;

/***/ }
/******/ ]);
//# sourceMappingURL=aya.js.map