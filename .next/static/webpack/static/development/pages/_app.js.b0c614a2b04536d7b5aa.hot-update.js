webpackHotUpdate("static\\development\\pages\\_app.js",{

/***/ "./store/actions/types.js":
/*!********************************!*\
  !*** ./store/actions/types.js ***!
  \********************************/
/*! exports provided: UPDATE_SIGNUP_FORM */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SIGNUP_FORM", function() { return UPDATE_SIGNUP_FORM; });
// ACTION TYPES STAYS HERE
var UPDATE_SIGNUP_FORM = 'update_signup_form';

/***/ }),

/***/ "./store/reducers/auth.js":
/*!********************************!*\
  !*** ./store/reducers/auth.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _actions_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions/types */ "./store/actions/types.js");


var INITIAL_STATE = {
  signup: {
    fullname: null,
    email: null,
    address: null,
    mobileNumber: null,
    password: null,
    referral: null,
    accept: false
  },
  login: {}
};
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : INITIAL_STATE;

  var _ref = arguments.length > 1 ? arguments[1] : undefined,
      type = _ref.type,
      payload = _ref.payload;

  switch (type) {
    case _actions_types__WEBPACK_IMPORTED_MODULE_1__["UPDATE_SIGNUP_FORM"]:
      {
        return Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
          signup: Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state.signup, payload)
        });
      }

    default:
      return state;
  }
});

/***/ })

})
//# sourceMappingURL=_app.js.b0c614a2b04536d7b5aa.hot-update.js.map