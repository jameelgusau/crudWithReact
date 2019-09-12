module.exports =
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

/***/ "./config/config.js":
/*!**************************!*\
  !*** ./config/config.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar config = {\n  env: \"development\" || false,\n  port: process.env.PORT || 8181,\n  jwtSecret: process.env.JWT_SECRET || \"YOUR_secret_key\",\n  mongoUri: process.env.MONGODB_URI || process.env.MONGO_HOST || 'mongodb://' + (process.env.IP || 'localhost') + ':' + (process.env.MONGO_PORT || '27017') + '/mernproject'\n};\nvar _default = config;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(config, \"config\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\config\\\\config.js\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\config\\\\config.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./config/config.js?");

/***/ }),

/***/ "./server/controllers/auth.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/auth.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n/* harmony import */ var jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jsonwebtoken__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! express-jwt */ \"express-jwt\");\n/* harmony import */ var express_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(express_jwt__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../config/config */ \"./config/config.js\");\n\n\n\n\n\nvar signin = function signin(req, res) {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findOne({\n    email: req.body.email\n  }, function (err, user) {\n    if (err) throw err; // test a matching password\n\n    user.comparePassword(req.body.password, function (err, isMatch) {\n      if (err) throw err;\n      console.log('Password123:', isMatch);\n      var token = jsonwebtoken__WEBPACK_IMPORTED_MODULE_1___default.a.sign({\n        _id: user._id\n      }, _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret);\n      res.cookie(\"t\", token, {\n        expire: new Date() + 9999\n      });\n      return res.json({\n        token: token,\n        user: {\n          _id: user._id,\n          name: user.name,\n          email: user.email\n        }\n      }); // -> Password123: true\n    }); // test a failing password\n    //     user.comparePassword('123Password', function(err, isMatch) {\n    //         if (err) throw err;\n    //         console.log('123Password:', isMatch); // -> 123Password: false\n    //     });\n  });\n};\n\nvar signout = function signout(req, res) {\n  res.clearCookie(\"t\");\n  return res.status('200').json({\n    message: \"signed out\"\n  });\n};\n\nvar requireSignin = express_jwt__WEBPACK_IMPORTED_MODULE_2___default()({\n  secret: _config_config__WEBPACK_IMPORTED_MODULE_3__[\"default\"].jwtSecret,\n  userProperty: 'auth'\n});\n\nvar hasAuthorization = function hasAuthorization(req, res, next) {\n  var authorized = req.profile && req.auth && req.profile._id == req.auth._id;\n\n  if (!authorized) {\n    return res.status('403').json({\n      error: \"User is not authorized\"\n    });\n  }\n\n  next();\n};\n\nvar _default = {\n  signin: signin,\n  signout: signout,\n  requireSignin: requireSignin,\n  hasAuthorization: hasAuthorization\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(signin, \"signin\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\controllers\\\\auth.controller.js\");\n\n  __REACT_HOT_LOADER__.register(signout, \"signout\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\controllers\\\\auth.controller.js\");\n\n  __REACT_HOT_LOADER__.register(requireSignin, \"requireSignin\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\controllers\\\\auth.controller.js\");\n\n  __REACT_HOT_LOADER__.register(hasAuthorization, \"hasAuthorization\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\controllers\\\\auth.controller.js\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\controllers\\\\auth.controller.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./server/controllers/auth.controller.js?");

/***/ }),

/***/ "./server/controllers/user.controller.js":
/*!***********************************************!*\
  !*** ./server/controllers/user.controller.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _models_user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../models/user.model */ \"./server/models/user.model.js\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ \"lodash\");\n/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../helpers/dbErrorHandler */ \"./server/helpers/dbErrorHandler.js\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\n\nvar create = function create(req, res, next) {\n  var user = new _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"](req.body);\n  console.log(req.body);\n  user.save(function (err, result) {\n    console.log(result);\n\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    res.status(200).json({\n      message: \"Successfully signed up!\"\n    });\n  });\n};\n\nvar list = function list(req, res) {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].find(function (err, users) {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    res.json(users);\n  }).select('name email updated created');\n};\n\nvar userByID = function userByID(req, res, next, id) {\n  _models_user_model__WEBPACK_IMPORTED_MODULE_0__[\"default\"].findById(id).exec(function (err, user) {\n    if (err || !user) return res.status('400').json({\n      error: \"User not found\"\n    });\n    req.profile = user;\n    next();\n  });\n};\n\nvar read = function read(req, res) {\n  req.profile.password = undefined;\n  req.profile.salt = undefined;\n  return res.json(req.profile);\n};\n\nvar update = function update(req, res, next) {\n  var user = req.profile;\n  user = lodash__WEBPACK_IMPORTED_MODULE_1___default.a.extend(user, req.body);\n  user.updated = Date.now();\n  user.save(function (err) {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    user.password = undefined;\n    user.salt = undefined;\n    res.json(user);\n  });\n};\n\nvar remove = function remove(req, res, next) {\n  var user = req.profile;\n  user.remove(function (err, deletedUser) {\n    if (err) {\n      return res.status(400).json({\n        error: _helpers_dbErrorHandler__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getErrorMessage(err)\n      });\n    }\n\n    deletedUser.password = undefined;\n    deletedUser.salt = undefined;\n    res.json(deletedUser);\n  });\n};\n\nvar _default = {\n  create: create,\n  userByID: userByID,\n  read: read,\n  list: list,\n  remove: remove,\n  update: update\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(create, \"create\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\controllers\\\\user.controller.js\");\n\n  __REACT_HOT_LOADER__.register(list, \"list\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\controllers\\\\user.controller.js\");\n\n  __REACT_HOT_LOADER__.register(userByID, \"userByID\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\controllers\\\\user.controller.js\");\n\n  __REACT_HOT_LOADER__.register(read, \"read\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\controllers\\\\user.controller.js\");\n\n  __REACT_HOT_LOADER__.register(update, \"update\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\controllers\\\\user.controller.js\");\n\n  __REACT_HOT_LOADER__.register(remove, \"remove\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\controllers\\\\user.controller.js\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\controllers\\\\user.controller.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./server/controllers/user.controller.js?");

/***/ }),

/***/ "./server/devBundle.js":
/*!*****************************!*\
  !*** ./server/devBundle.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack */ \"webpack\");\n/* harmony import */ var webpack__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! webpack-dev-middleware */ \"webpack-dev-middleware\");\n/* harmony import */ var webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! webpack-hot-middleware */ \"webpack-hot-middleware\");\n/* harmony import */ var webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../webpack.config.client.js */ \"./webpack.config.client.js\");\n/* harmony import */ var _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nvar compile = function compile(app) {\n  if (_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].env === \"development\") {\n    var compiler = webpack__WEBPACK_IMPORTED_MODULE_1___default()(_webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a);\n    var middleware = webpack_dev_middleware__WEBPACK_IMPORTED_MODULE_2___default()(compiler, {\n      publicPath: _webpack_config_client_js__WEBPACK_IMPORTED_MODULE_4___default.a.output.publicPath\n    });\n    app.use(middleware);\n    app.use(webpack_hot_middleware__WEBPACK_IMPORTED_MODULE_3___default()(compiler));\n  }\n};\n\nvar _default = {\n  compile: compile\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(compile, \"compile\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\devBundle.js\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\devBundle.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./server/devBundle.js?");

/***/ }),

/***/ "./server/express.js":
/*!***************************!*\
  !*** ./server/express.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! body-parser */ \"body-parser\");\n/* harmony import */ var body_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(body_parser__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cookie-parser */ \"cookie-parser\");\n/* harmony import */ var cookie_parser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cookie_parser__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! compression */ \"compression\");\n/* harmony import */ var compression__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(compression__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! cors */ \"cors\");\n/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! helmet */ \"helmet\");\n/* harmony import */ var helmet__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(helmet__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var _routes_user_routes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./routes/user.routes */ \"./server/routes/user.routes.js\");\n/* harmony import */ var _routes_auth_routes__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./routes/auth.routes */ \"./server/routes/auth.routes.js\");\n/* harmony import */ var _devBundle__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./devBundle */ \"./server/devBundle.js\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_10__);\n\n\n\n\n\n\n\n\n\n\n\nvar app = express__WEBPACK_IMPORTED_MODULE_0___default()();\n_devBundle__WEBPACK_IMPORTED_MODULE_9__[\"default\"].compile(app);\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.json());\napp.use(body_parser__WEBPACK_IMPORTED_MODULE_1___default.a.urlencoded({\n  extended: true\n}));\napp.use(cookie_parser__WEBPACK_IMPORTED_MODULE_2___default()());\napp.use(compression__WEBPACK_IMPORTED_MODULE_3___default()());\napp.use(helmet__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(cors__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use('/', _routes_user_routes__WEBPACK_IMPORTED_MODULE_7__[\"default\"]);\napp.use('/', _routes_auth_routes__WEBPACK_IMPORTED_MODULE_8__[\"default\"]);\napp.get('/', function (req, res) {\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_6__[\"default\"])());\n});\napp.use(function (err, req, res, next) {\n  if (err.name === 'UnauthorizedError') {\n    res.status(401).json({\n      \"error\": err.name + \": \" + err.message\n    });\n  }\n});\nvar CURRENT_WORKING_DIR = process.cwd();\napp.use('/dist', express__WEBPACK_IMPORTED_MODULE_0___default.a[\"static\"](path__WEBPACK_IMPORTED_MODULE_10___default.a.join(CURRENT_WORKING_DIR, 'dist')));\nvar _default = app;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(app, \"app\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\express.js\");\n\n  __REACT_HOT_LOADER__.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\express.js\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\express.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./server/express.js?");

/***/ }),

/***/ "./server/helpers/dbErrorHandler.js":
/*!******************************************!*\
  !*** ./server/helpers/dbErrorHandler.js ***!
  \******************************************/
/*! exports provided: getUniqueErrorMessage, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getUniqueErrorMessage\", function() { return getUniqueErrorMessage; });\nvar getErrorMessage = function getErrorMessage(err) {\n  var message = '';\n\n  if (err.code) {\n    switch (err.code) {\n      case 11000:\n      case 11001:\n        message = getUniqueErrorMessage(err);\n        break;\n\n      default:\n        message = 'Something went wrong';\n    }\n  } else {\n    for (var errName in err.errors) {\n      if (err.errors[errName].message) message = err.errors[errName].message;\n    }\n  }\n\n  return message;\n};\n\nvar getUniqueErrorMessage = function getUniqueErrorMessage(err) {\n  var output;\n\n  try {\n    var fieldName = err.message.substring(err.message.lastIndexOf('.$') + 2, err.message.lastIndexOf('_1'));\n    output = fieldName.charAt(0).toUpperCase() + fieldName.slice(1) + ' already exists';\n  } catch (ex) {\n    output = 'Unique field already exists';\n  }\n\n  return output;\n};\nvar _default = {\n  getErrorMessage: getErrorMessage\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(getErrorMessage, \"getErrorMessage\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n\n  __REACT_HOT_LOADER__.register(getUniqueErrorMessage, \"getUniqueErrorMessage\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\helpers\\\\dbErrorHandler.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./server/helpers/dbErrorHandler.js?");

/***/ }),

/***/ "./server/models/user.model.js":
/*!*************************************!*\
  !*** ./server/models/user.model.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar SALT_WORK_FACTOR = 10;\nvar UserSchema = new mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.Schema({\n  name: {\n    type: String,\n    trim: true,\n    required: 'Name is required'\n  },\n  email: {\n    type: String,\n    trim: true,\n    unique: 'Email already exists',\n    match: [/.+\\@.+\\..+/, 'Please fill a valid email address'],\n    required: 'Email is required'\n  },\n  created: {\n    type: Date,\n    \"default\": Date.now\n  },\n  updated: Date,\n  password: {\n    type: String,\n    required: \"Password is required\"\n  } // salt: String\n\n}); // UserSchema\n//   .virtual('this.password')\n//   .set(function(password) {    \n//     this._password = password    \n//     this.salt = this.makeSalt()    \n//     this.password = this.encryptPassword(password)  \n// })\n//   .get(function() {\n//     return this._password\n// })\n// UserSchema.methods = {   \n//     authenticate: function(plainText) {    \n//         return this.encryptPassword(plainText) === this.password\n//     },\n//     encryptPassword: function(password) {\n//       if (!password) return ''\n//       try {\n//         return crypto\n//           .createHmac('sha1', this.salt)\n//           .update(password)\n//           .digest('hex')\n//       } catch (err) {\n//         return ''\n//       }\n//     },\n//     makeSalt: function() {\n//       return Math.round((new Date().valueOf() * Math.random())) + ''\n//   }\n// }\n\nUserSchema.virtual('isLocked').get(function () {\n  // check for a future lockUntil timestamp\n  return !!(this.lockUntil && this.lockUntil > Date.now());\n});\nUserSchema.pre('save', function (next) {\n  var user = this; // only hash the password if it has been modified (or is new)\n\n  if (!user.isModified('password')) return next(); // generate a salt\n\n  bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.genSalt(SALT_WORK_FACTOR, function (err, salt) {\n    if (err) return next(err); // hash the password using our new salt\n\n    bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.hash(user.password, salt, function (err, hash) {\n      if (err) return next(err); // set the hashed password back on our user document\n\n      user.password = hash;\n      console.log(user.password);\n      next();\n    });\n  });\n});\n\nUserSchema.methods.comparePassword = function (candidatePassword, cb) {\n  bcrypt__WEBPACK_IMPORTED_MODULE_1___default.a.compare(candidatePassword, this.password, function (err, isMatch) {\n    if (err) return cb(err);\n    cb(null, isMatch);\n  });\n};\n\nUserSchema.methods.incLoginAttempts = function (cb) {\n  // if we have a previous lock that has expired, restart at 1\n  if (this.lockUntil && this.lockUntil < Date.now()) {\n    return this.update({\n      $set: {\n        loginAttempts: 1\n      },\n      $unset: {\n        lockUntil: 1\n      }\n    }, cb);\n  } // otherwise we're incrementing\n\n\n  var updates = {\n    $inc: {\n      loginAttempts: 1\n    }\n  }; // lock the account if we've reached  attempts and it's not locked already\n\n  if (this.loginAttempts + 1 >= MAX_LOGmaxIN_ATTEMPTS && !this.isLocked) {\n    updates.$set = {\n      lockUntil: Date.now() + LOCK_TIME\n    };\n  }\n\n  return this.update(updates, cb);\n}; // expose enum on the model, and provide an internal convenience reference \n\n\nvar reasons = UserSchema.statics.failedLogin = {\n  NOT_FOUND: 0,\n  PASSWORD_INCORRECT: 10,\n  MAX_ATTEMPTS: 10\n};\n\nUserSchema.statics.getAuthenticated = function (username, password, cb) {};\n\nvar _default = mongoose__WEBPACK_IMPORTED_MODULE_0___default.a.model('User', UserSchema);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(SALT_WORK_FACTOR, \"SALT_WORK_FACTOR\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\models\\\\user.model.js\");\n\n  __REACT_HOT_LOADER__.register(UserSchema, \"UserSchema\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\models\\\\user.model.js\");\n\n  __REACT_HOT_LOADER__.register(reasons, \"reasons\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\models\\\\user.model.js\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\models\\\\user.model.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./server/models/user.model.js?");

/***/ }),

/***/ "./server/routes/auth.routes.js":
/*!**************************************!*\
  !*** ./server/routes/auth.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/auth/signin').post(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signin);\nrouter.route('/auth/signout').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].signout);\nvar _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(router, \"router\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\routes\\\\auth.routes.js\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\routes\\\\auth.routes.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./server/routes/auth.routes.js?");

/***/ }),

/***/ "./server/routes/user.routes.js":
/*!**************************************!*\
  !*** ./server/routes/user.routes.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! express */ \"express\");\n/* harmony import */ var express__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(express__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../controllers/user.controller */ \"./server/controllers/user.controller.js\");\n/* harmony import */ var _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../controllers/auth.controller */ \"./server/controllers/auth.controller.js\");\n\n\n\nvar router = express__WEBPACK_IMPORTED_MODULE_0___default.a.Router();\nrouter.route('/api/users').post(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].create);\nrouter.route('/api/users').get(_controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].list);\nrouter.param('userId', _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].userByID);\nrouter.route('/api/users/:userId').get(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].read);\nrouter.route('/api/users/:userId').put(_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].update);\nrouter.route('/api/users/:userId')[\"delete\"](_controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].requireSignin, _controllers_auth_controller__WEBPACK_IMPORTED_MODULE_2__[\"default\"].hasAuthorization, _controllers_user_controller__WEBPACK_IMPORTED_MODULE_1__[\"default\"].remove);\nvar _default = router;\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(router, \"router\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\routes\\\\user.routes.js\");\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\routes\\\\user.routes.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./server/routes/user.routes.js?");

/***/ }),

/***/ "./server/server.js":
/*!**************************!*\
  !*** ./server/server.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _config_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../config/config */ \"./config/config.js\");\n/* harmony import */ var _express__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./express */ \"./server/express.js\");\n/* harmony import */ var _template__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../template */ \"./template.js\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n //const CURRENT_WORKING_DIR = process.cwd()\n//app.use('/dist', express.static(path.join(CURRENT_WORKING_DIR, 'dist')))\n\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].get('/', function (req, res) {\n  res.status(200).send(Object(_template__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\n});\nvar port = process.env.PORT || 8181;\n_express__WEBPACK_IMPORTED_MODULE_1__[\"default\"].listen(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port, function (err) {\n  if (err) {\n    console.log(err);\n  }\n\n  console.info('Server started on port %s.', _config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].port);\n});\nmongoose__WEBPACK_IMPORTED_MODULE_3___default.a.Promise = global.Promise;\nmongoose__WEBPACK_IMPORTED_MODULE_3___default.a.connect(_config_config__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mongoUri, {\n  useNewUrlParser: true,\n  useUnifiedTopology: true\n});\nmongoose__WEBPACK_IMPORTED_MODULE_3___default.a.set('useCreateIndex', true);\nmongoose__WEBPACK_IMPORTED_MODULE_3___default.a.connection.on('error', function () {\n  throw new Error(\"unable to connect to database: \".concat(mongoUri));\n});\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(port, \"port\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\server\\\\server.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./server/server.js?");

/***/ }),

/***/ "./template.js":
/*!*********************!*\
  !*** ./template.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar _default = function _default() {\n  return \"<!doctype html>\\n      <html lang=\\\"en\\\">\\n          <head>\\n             <meta charset=\\\"utf-8\\\">\\n             <meta name=\\\"viewport\\\" content=\\\"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no\\\"/>\\n             <link rel=\\\"stylesheet\\\" href=\\\"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap\\\" />\\n             <link href=\\\"https://fonts.googleapis.com/icon?family=Material+Icons\\\" rel=\\\"stylesheet\\\">\\n             <title>New Social App</title>\\n          </head>\\n          <body>\\n            <div id=\\\"root\\\"></div>\\n            <script type=\\\"text/javascript\\\" src=\\\"/dist/bundle.js\\\"></script>\\n          </body>\\n      </html>\";\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (_default);\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(_default, \"default\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\template.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./template.js?");

/***/ }),

/***/ "./webpack.config.client.js":
/*!**********************************!*\
  !*** ./webpack.config.client.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var path = __webpack_require__(/*! path */ \"path\");\n\nvar webpack = __webpack_require__(/*! webpack */ \"webpack\");\n\nvar CURRENT_WORKING_DIR = process.cwd();\n\nvar nodeExternals = __webpack_require__(/*! webpack-node-externals */ \"webpack-node-externals\");\n\nvar config = {\n  name: \"browser\",\n  mode: \"development\",\n  devtool: 'eval-source-map',\n  entry: [//'react-hot-loader/patch',        \n  //'webpack-hot-middleware/client?reload=true',        \n  path.join(CURRENT_WORKING_DIR, 'client/main.js')],\n  output: {\n    path: path.join(CURRENT_WORKING_DIR, '/dist'),\n    filename: 'bundle.js',\n    publicPath: '/dist/'\n  },\n  module: {\n    rules: [{\n      test: /\\.jsx?$/,\n      exclude: /node_modules/,\n      use: ['babel-loader']\n    }, // {\n    //     test: /\\.jsx?$/,\n    //     include: /node_modules\\/react-dom/,\n    //     use: ['react-hot-loader/webpack']\n    // },\n    {\n      test: /\\.(ttf|eot|svg|gif|jpg|png)(\\?[\\s\\S]+)?$/,\n      use: 'file-loader'\n    }]\n  },\n  plugins: [new webpack.HotModuleReplacementPlugin(), new webpack.NoEmitOnErrorsPlugin()]\n};\nmodule.exports = config;\n;\n\nvar _temp = function () {\n  if (typeof __REACT_HOT_LOADER__ === 'undefined') {\n    return;\n  }\n\n  __REACT_HOT_LOADER__.register(CURRENT_WORKING_DIR, \"CURRENT_WORKING_DIR\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\webpack.config.client.js\");\n\n  __REACT_HOT_LOADER__.register(config, \"config\", \"C:\\\\Users\\\\STETiS\\\\Videos\\\\DISK3\\\\backEndSetUp\\\\webpack.config.client.js\");\n}();\n\n;\n\n//# sourceURL=webpack:///./webpack.config.client.js?");

/***/ }),

/***/ 0:
/*!********************************!*\
  !*** multi ./server/server.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! C:\\Users\\STETiS\\Videos\\DISK3\\backEndSetUp\\server\\server.js */\"./server/server.js\");\n\n\n//# sourceURL=webpack:///multi_./server/server.js?");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");\n\n//# sourceURL=webpack:///external_%22bcrypt%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cookie-parser\");\n\n//# sourceURL=webpack:///external_%22cookie-parser%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-jwt":
/*!******************************!*\
  !*** external "express-jwt" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-jwt\");\n\n//# sourceURL=webpack:///external_%22express-jwt%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"lodash\");\n\n//# sourceURL=webpack:///external_%22lodash%22?");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongodb\");\n\n//# sourceURL=webpack:///external_%22mongodb%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "webpack":
/*!**************************!*\
  !*** external "webpack" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack\");\n\n//# sourceURL=webpack:///external_%22webpack%22?");

/***/ }),

/***/ "webpack-dev-middleware":
/*!*****************************************!*\
  !*** external "webpack-dev-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-dev-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-dev-middleware%22?");

/***/ }),

/***/ "webpack-hot-middleware":
/*!*****************************************!*\
  !*** external "webpack-hot-middleware" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-hot-middleware\");\n\n//# sourceURL=webpack:///external_%22webpack-hot-middleware%22?");

/***/ }),

/***/ "webpack-node-externals":
/*!*****************************************!*\
  !*** external "webpack-node-externals" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"webpack-node-externals\");\n\n//# sourceURL=webpack:///external_%22webpack-node-externals%22?");

/***/ })

/******/ });