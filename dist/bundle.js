/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
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
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.htm":
/*!***********************!*\
  !*** ./src/index.htm ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "index.htm";

/***/ }),

/***/ "./src/js/index.ts":
/*!*************************!*\
  !*** ./src/js/index.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

//Declaration of elements from HTML
var inputelement = (document.getElementById("inputcontent"));
var selectElemet = (document.getElementById("selector"));
var btnElement = (document.getElementById("StartButton"));
//Declaration of variables
var inputstring;
var outputstring;
var list = document.createElement("ul");
var words = [];
//Adding eventlisteners
// selectElemet.addEventListener("change", SwitchFunction)
btnElement.addEventListener("click", SwitchFunction);
inputelement.addEventListener("change", RefreshInput);
//Force refresh on input
function RefreshInput() {
    inputstring = inputelement.value;
}
//Switch to se what function the user wants
function SwitchFunction() {
    switch (selectElemet.value) {
        case "Loud":
            outputstring = LoudFunction(inputstring);
            break;
        case "Quiet":
            outputstring = QuietFunction(inputstring);
            break;
        case "Reverse":
            outputstring = ReverseFunction(inputstring);
            break;
        case "Count":
            outputstring = CountFunction(inputstring);
            break;
        case "Add":
            AddListFunction(inputstring);
            outputstring = inputstring;
            break;
        case "Delete":
            DeleteListFunction(inputstring);
            break;
        default:
            outputstring = "Please choose an option.";
            break;
    }
    document.getElementById("outputdiv").innerHTML = outputstring;
}
//To upper case
function LoudFunction(input) {
    var str = input.toUpperCase();
    return str;
}
//To lower case
function QuietFunction(input) {
    return input.toLowerCase();
}
//Reverse string
function ReverseFunction(input) {
    var tempstr = "";
    for (var i = input.length - 1; i >= 0; i--) {
        tempstr += input[i];
    }
    return tempstr;
}
//Count characters
function CountFunction(input) {
    return input.length.toString();
}
//Add to list of words
function AddListFunction(input) {
    words.push(input);
    console.log(words);
    var item = document.createElement("li");
    item.innerHTML = input;
    DisplayList(item);
}
//Remove from list of words
function DeleteListFunction(input) {
    var x = words.indexOf(input);
    words.splice(x, 1);
    console.log(words);
    //list.removechild() -- Fordi liste elementet ikke er gemt uden for metoden kan den ikke findes.
}
//Display list in HTML
function DisplayList(item) {
    //   item.appendChild(document.createTextNode(words[words.length - 1]));
    list.appendChild(item);
    document.getElementById("listdiv").appendChild(list);
}


/***/ }),

/***/ "./src/scss/styles.scss":
/*!******************************!*\
  !*** ./src/scss/styles.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "bundle.css";

/***/ }),

/***/ 0:
/*!**********************************************************************!*\
  !*** multi ./src/index.htm ./src/scss/styles.scss ./src/js/index.ts ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.htm */"./src/index.htm");
__webpack_require__(/*! ./src/scss/styles.scss */"./src/scss/styles.scss");
module.exports = __webpack_require__(/*! ./src/js/index.ts */"./src/js/index.ts");


/***/ })

/******/ });
//# sourceMappingURL=bundle.js.map