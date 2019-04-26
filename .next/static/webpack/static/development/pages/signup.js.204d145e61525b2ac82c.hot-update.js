webpackHotUpdate("static\\development\\pages\\signup.js",{

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
/* harmony import */ var _store_reducers_auth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../store/reducers/auth */ "./store/reducers/auth.js");










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
var formErrors = {};

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

    _babel_runtime_corejs2_core_js_object_keys__WEBPACK_IMPORTED_MODULE_1___default()(signupFormData).forEach(function (item) {
      if (!signupFormData[item]) {
        formErrors[item] = true;
      }
    });

    console.log(signupFormData); // CALL API WITH signupFormData
  };

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    fullname: '',
    email: 'm',
    address: '',
    mobileNumber: '0',
    password: '',
    referral: '',
    accept: false
  }),
      _useState2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useState, 2),
      signupFormData = _useState2[0],
      setSignupData = _useState2[1];

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

/***/ })

})
//# sourceMappingURL=signup.js.204d145e61525b2ac82c.hot-update.js.map