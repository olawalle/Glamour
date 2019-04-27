webpackHotUpdate("static\\development\\pages\\signup.js",{

/***/ "./components/shared/Auth.js":
/*!***********************************!*\
  !*** ./components/shared/Auth.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



var styles = {
  Segment: {
    // margin: '0px',
    background: '#020202',
    minHeight: '90vh',
    backgroundImage: 'url("/static/images/auth.svg")',
    backgroundSize: 'cover'
  }
};

var Auth = function Auth(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Segment"], {
    style: styles.Segment,
    vertical: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    textAlign: "center"
  }, children));
};

/* harmony default export */ __webpack_exports__["default"] = (Auth);

/***/ }),

/***/ "./components/shared/Navbar.js":
/*!*************************************!*\
  !*** ./components/shared/Navbar.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");


var styles = {
  signUp: {
    borderRadius: '0px',
    height: '49px',
    width: '120px'
  },
  basket: {
    height: '28px'
  },
  Menu: {
    marginBottom: '0px'
  }
};

var Navbar = function Navbar() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"], {
    borderless: true,
    style: styles.Menu,
    className: "navbar"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Container"], {
    fluid: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    src: "/static/images/logo.svg",
    size: "small"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Menu, {
    position: "right"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    as: "a"
  }, "Services"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    as: "a"
  }, "About Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    as: "a"
  }, "Become a provider"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    as: "a"
  }, "Log in"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    as: "div"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Button"], {
    style: styles.signUp,
    size: "huge",
    secondary: true
  }, "Sign up")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Menu"].Item, {
    as: "a"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
    style: styles.basket,
    src: "/static/images/basket.svg",
    size: "mini"
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ }),

/***/ "./components/signup/SignupForm.js":
/*!*****************************************!*\
  !*** ./components/signup/SignupForm.js ***!
  \*****************************************/
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
    margin: '55px 0px',
    paddingBottom: '15px'
  },
  Link: {
    color: '#e84671'
  },
  Form: {
    padding: '5px 25px'
  },
  FormInput: {
    margin: '10px 0px',
    marginBottom: '30px'
  },
  Header: {},
  SubHeader: {
    marginTop: '10px'
  },
  Select: {
    height: '53px',
    borderRadius: '0px',
    borderColor: '#C4CDD5',
    paddingTop: '18px'
  },
  Checkbox: {
    paddingTop: '3px'
  },
  Button: {
    height: '60px',
    width: '126px'
  },
  accept: {
    margin: '2em 0em'
  }
};
var options = [{
  key: '',
  text: 'Not Applicable',
  value: ''
}, {
  key: 'onilne',
  text: 'Online',
  value: 'Online'
}, {
  key: 'offline',
  text: 'Offline',
  value: 'offline'
}];

var SignupForm = function SignupForm(props) {
  var handleChange = function handleChange(e, key) {
    var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
        _ref$value = _ref.value,
        value = _ref$value === void 0 ? null : _ref$value,
        _ref$checked = _ref.checked,
        checked = _ref$checked === void 0 ? null : _ref$checked;

    var newState = Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_3__["default"])({}, signupFormData, Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])({}, key, e.target.value || value || checked || ''));

    setSignupData(newState);
    props.updateSignupForm(newState); //delete error entry

    if (formErrors[key]) delete formErrors[key];
  };

  var submit = function submit(e) {
    e.preventDefault();
    var _formErrors = {};

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(signupFormData).forEach(function (item) {
      if (!signupFormData[item]) {
        _formErrors[item] = true;
      }
    });

    setFormErrors(_formErrors);
    console.log(signupFormData, formErrors); // CALL API WITH signupFormData
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({}),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      formErrors = _useState2[0],
      setFormErrors = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    fullname: '',
    email: 'm',
    address: '',
    mobileNumber: '0',
    password: '',
    referral: '',
    accept: false
  }),
      _useState4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState3, 2),
      signupFormData = _useState4[0],
      setSignupData = _useState4[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    var store = null;

    if (store = JSON.parse(localStorage.getItem('store'))) {
      if (store.auth) {
        setSignupData(store.auth.signup);
      }
    }
  }, []);
  return react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"], {
    className: "signupForm",
    columns: 2,
    centered: true
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Row, null, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Grid"].Column, {
    width: "8",
    style: styles.Column
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"], {
    style: styles.Header,
    textAlign: "center",
    as: "h1"
  }, "Sign up", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Header"].Subheader, {
    style: styles.SubHeader
  }, "Already have an account? ", ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/login"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    style: styles.Link
  }, "Log in")))), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("form", {
    style: styles.Form
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    onChange: function onChange(e) {
      return handleChange(e, 'fullname');
    },
    error: formErrors['fullname'],
    value: signupFormData.fullname,
    style: styles.FormInput,
    size: "huge",
    placeholder: "Full Name",
    fluid: true
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "email",
    error: formErrors['email'],
    onChange: function onChange(e) {
      return handleChange(e, 'email');
    },
    value: signupFormData.email,
    style: styles.FormInput,
    size: "huge",
    placeholder: "Email address",
    fluid: true
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "number",
    error: formErrors['mobileNumber'],
    onChange: function onChange(e) {
      return handleChange(e, 'mobileNumber');
    },
    value: signupFormData.mobileNumber,
    style: styles.FormInput,
    size: "huge",
    placeholder: "Mobile number",
    fluid: true
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Input"], {
    type: "password",
    error: formErrors['password'],
    onChange: function onChange(e) {
      return handleChange(e, 'password');
    },
    value: signupFormData.password,
    style: styles.FormInput,
    size: "huge",
    CharacterData: true,
    placeholder: "Password",
    fluid: true
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Select"], {
    error: formErrors['referral'],
    onChange: function onChange(e, data) {
      return handleChange(e, 'referral', data);
    },
    style: styles.Select,
    value: signupFormData.referral,
    fluid: true,
    options: options,
    placeholder: "How did you hear about Glamour on Demand?"
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    style: styles.accept
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Checkbox"], {
    checked: signupFormData.accept,
    style: styles.Checkbox,
    onChange: function onChange(e, data) {
      return handleChange(e, 'accept', data);
    }
  }), '   ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("span", null, "Yes, I accept the", react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/termsandconditions"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    style: styles.Link
  }, ' ', "Terms and Conditions", ' ')), "of Glamour on Demand")), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("div", {
    className: "is-v-centered"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: submit,
    style: styles.Button,
    size: "large",
    content: "Sign up",
    secondary: true
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("p", null, "Are you a service provider?", ' ', react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
    href: "/"
  }, react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement("a", {
    style: styles.Link
  }, "Get started"))))))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    signup: state.auth.signup
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(mapStateToProps, _store_actions__WEBPACK_IMPORTED_MODULE_8__)(SignupForm));

/***/ }),

/***/ "./pages/signup.js":
/*!*************************!*\
  !*** ./pages/signup.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_shared_Auth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/shared/Auth */ "./components/shared/Auth.js");
/* harmony import */ var _pages_layouts_withMasterLayout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../pages/layouts/withMasterLayout */ "./pages/layouts/withMasterLayout.js");
/* harmony import */ var _components_signup_SignupForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/signup/SignupForm */ "./components/signup/SignupForm.js");





var SignUp = function SignUp() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_shared_Auth__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_signup_SignupForm__WEBPACK_IMPORTED_MODULE_3__["default"], null));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_pages_layouts_withMasterLayout__WEBPACK_IMPORTED_MODULE_2__["default"])(SignUp));

/***/ }),

/***/ "./store/actions/index.js":
/*!********************************!*\
  !*** ./store/actions/index.js ***!
  \********************************/
/*! exports provided: serverRenderAction, updateSignupForm */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "serverRenderAction", function() { return serverRenderAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSignupForm", function() { return updateSignupForm; });
/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ "./store/actions/types.js");
 // IMPORT SERVICES HERE
// ACTION CREATORS GOES HERE../../services/post

var serverRenderAction = function serverRenderAction() {};
var updateSignupForm = function updateSignupForm(payload) {
  return {
    type: _types__WEBPACK_IMPORTED_MODULE_0__["UPDATE_SIGNUP_FORM"],
    payload: payload
  };
};

/***/ }),

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

/***/ })

})
//# sourceMappingURL=signup.js.b0c614a2b04536d7b5aa.hot-update.js.map