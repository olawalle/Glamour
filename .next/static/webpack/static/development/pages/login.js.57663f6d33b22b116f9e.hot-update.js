webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./components/login/LoginForm.js":
/*!***************************************!*\
  !*** ./components/login/LoginForm.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../store/actions */ "./store/actions/index.js");









var styles = {
  Column: {
    background: 'white',
    padding: '45px 20px',
    marginTop: '135px',
    paddingBottom: '15px'
  },
  Link: {
    color: '#e84671'
  },
  Form: {
    padding: '5px 25px'
  },
  FormInput: {
    margin: '10px 0px' // marginBottom: '30px'

  },
  Header: {},
  SubHeader: {
    marginTop: '10px'
  },
  Checkbox: {
    paddingTop: '3px'
  },
  forgotPassword: {
    fontFamily: 'sofiaprosemibold !important',
    textAlign: 'end',
    color: '#e84671',
    fontSize: '16px'
  },
  Button: {
    height: '60px',
    width: '126px'
  }
};

var LoginForm = function LoginForm(props) {
  var handleChange = function handleChange(e, key) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$value = _ref.value,
        value = _ref$value === void 0 ? null : _ref$value,
        _ref$checked = _ref.checked,
        checked = _ref$checked === void 0 ? null : _ref$checked;

    var newState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, loginFormData, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, key, e.target.value || value || checked || ''));

    setLoginData(newState); //delete error entry

    if (formErrors[key]) delete formErrors[key];
  };

  var submit = function submit(e) {
    e.preventDefault();
    var _formErrors = {};

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(loginFormData).forEach(function (item) {
      if (!loginFormData[item]) {
        _formErrors[item] = true;
      }
    });

    setFormErrors(_formErrors);
    console.log(loginFormData, formErrors); // CALL API WITH loginFormData
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      formErrors = _useState2[0],
      setFormErrors = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    email: '',
    password: ''
  }),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      loginFormData = _useState4[0],
      setLoginData = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    className: "loginForm",
    columns: 2,
    centered: true
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    width: "7",
    style: styles.Column
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    style: styles.Header,
    textAlign: "center",
    as: "h1"
  }, "Log in", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"].Subheader, {
    style: styles.SubHeader
  }, "Don't have an account? ", ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/signup"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    style: styles.Link
  }, "Sign up")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    style: styles.Form
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "email",
    error: formErrors['email'],
    onChange: function onChange(e) {
      return handleChange(e, 'email');
    },
    value: loginFormData.email,
    style: styles.FormInput,
    size: "huge",
    placeholder: "Email address",
    fluid: true
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "password",
    error: formErrors['password'],
    onChange: function onChange(e) {
      return handleChange(e, 'password');
    },
    value: loginFormData.password,
    style: styles.FormInput,
    size: "huge",
    CharacterData: true,
    placeholder: "Password",
    fluid: true
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"].Subheader, {
    style: styles.forgotPassword,
    as: "h5"
  }, "Forgot password?"), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "is-v-centered"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: submit,
    style: styles.Button,
    size: "large",
    content: "Log in",
    secondary: true
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "Are you a service provider?", ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    style: styles.Link
  }, "Get started"))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(null, _store_actions__WEBPACK_IMPORTED_MODULE_8__)(LoginForm));

/***/ })

})
//# sourceMappingURL=login.js.57663f6d33b22b116f9e.hot-update.js.map