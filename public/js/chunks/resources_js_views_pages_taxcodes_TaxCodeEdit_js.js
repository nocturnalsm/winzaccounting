"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_taxcodes_TaxCodeEdit_js"],{

/***/ "./resources/js/views/pages/taxcodes/TaxCodeEdit.js":
/*!**********************************************************!*\
  !*** ./resources/js/views/pages/taxcodes/TaxCodeEdit.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../store */ "./resources/js/store.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../alert */ "./resources/js/alert.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var TaxCodeEdit = function TaxCodeEdit(props) {
  var _data$name, _data$code, _data$percentage, _data$account_id;

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useParams)(),
      id = _useParams.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState2 = _slicedToArray(_useState, 2),
      initialData = _useState2[0],
      setInitialData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState4 = _slicedToArray(_useState3, 2),
      data = _useState4[0],
      setData = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      validated = _useState6[0],
      setValidated = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      submitError = _useState8[0],
      setSubmitError = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState10 = _slicedToArray(_useState9, 2),
      accounts = _useState10[0],
      setAccounts = _useState10[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.appLoading;
  });
  var activeCompany = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.activeCompany;
  });

  var handleChange = function handleChange(values) {
    setData(_objectSpread(_objectSpread({}, data), values));
  };

  var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_9__.useHistory)();

  var handleSubmit = function handleSubmit(event) {
    var form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);

    if (form.checkValidity() === true) {
      var submit = /*#__PURE__*/function () {
        var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          var request, response;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  request = {
                    company_id: activeCompany.id,
                    name: data.name,
                    code: data.code,
                    percentage: data.percentage,
                    account_id: data.account_id
                  };
                  _context.next = 4;
                  return axios__WEBPACK_IMPORTED_MODULE_7___default()({
                    method: id ? 'put' : 'post',
                    url: '/api/setup/taxcodes/' + (id !== null && id !== void 0 ? id : ''),
                    data: request
                  });

                case 4:
                  response = _context.sent;
                  return _context.abrupt("return", response);

                case 8:
                  _context.prev = 8;
                  _context.t0 = _context["catch"](0);
                  return _context.abrupt("return", {
                    error: {
                      message: _context.t0.response.data.message,
                      errors: _context.t0.response.data.errors
                    }
                  });

                case 11:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 8]]);
        }));

        return function submit() {
          return _ref.apply(this, arguments);
        };
      }();

      dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppLoading)(true));
      submit().then(function (response) {
        dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppLoading)(false));

        if (response.error) {
          if (response.error.errors) {
            setSubmitError(response.error.errors);
          } else {
            var _response$error$messa;

            var message = (_response$error$messa = response.error.message) !== null && _response$error$messa !== void 0 ? _response$error$messa : 'Something went wrong';
            _alert__WEBPACK_IMPORTED_MODULE_5__["default"].error({
              text: message
            });
          }
        } else {
          _alert__WEBPACK_IMPORTED_MODULE_5__["default"].success({
            text: 'Data saved successfully'
          });
          setSubmitError({});

          if (!id) {
            setData({});
          }
        }

        ref.current.focus();
        setValidated(false);
      });
    }
  };

  var resetForm = function resetForm() {
    handleChange(initialData);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    axios__WEBPACK_IMPORTED_MODULE_7___default().get("/api/setup/accounts", {
      params: {
        limit: 10000,
        filter: {
          company_id: activeCompany.id,
          account_type: 1
        }
      }
    }).then(function (response) {
      if (response) {
        setAccounts(response.data.data);
      }
    })["catch"](function (error) {
      _alert__WEBPACK_IMPORTED_MODULE_5__["default"].error({
        text: error.response.message
      });
    });

    if (id) {
      dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppLoading)(true));
      axios__WEBPACK_IMPORTED_MODULE_7___default().get('/api/setup/taxcodes/' + id).then(function (response) {
        dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppLoading)(false));
        setData(response.data);
        ref.current.focus();
      })["catch"](function (error) {
        dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppLoading)(false));
        _alert__WEBPACK_IMPORTED_MODULE_5__["default"].error({
          type: 'error',
          text: error.message
        });
        history.back();
      });
    }
  }, []);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCard, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCardHeader, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("h3", {
        children: id && id != "" ? 'Edit Tax Code' : 'Create Tax Code'
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCardBody, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CForm, {
        className: "form-horizontal needs-validation",
        noValidate: true,
        wasValidated: validated,
        onSubmit: handleSubmit,
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CFormGroup, {
          row: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCol, {
            sm: "4",
            lg: "2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CLabel, {
              children: "Tax Name"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCol, {
            sm: "8",
            lg: "3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CInput, {
              placeholder: "Enter tax name",
              autoFocus: true,
              autoComplete: "off",
              type: "text",
              innerRef: ref,
              disabled: loading,
              onChange: function onChange(e) {
                return handleChange({
                  name: e.target.value
                });
              },
              value: (_data$name = data.name) !== null && _data$name !== void 0 ? _data$name : '',
              invalid: submitError.hasOwnProperty('name'),
              required: true
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CInvalidFeedback, {
              children: submitError.hasOwnProperty('name') ? submitError.name[0] : 'Please enter a name'
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CFormGroup, {
          row: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCol, {
            sm: "4",
            lg: "2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CLabel, {
              children: "Tax Code"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCol, {
            sm: "8",
            lg: "3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CInput, {
              type: "text",
              placeholder: "Enter tax code",
              autoComplete: "off",
              disabled: loading,
              value: (_data$code = data.code) !== null && _data$code !== void 0 ? _data$code : '',
              onChange: function onChange(e) {
                return handleChange({
                  code: e.target.value
                });
              },
              invalid: submitError.hasOwnProperty('code')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CInvalidFeedback, {
              children: submitError.hasOwnProperty('code') ? submitError.code[0] : 'Pleas enter a code'
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CFormGroup, {
          row: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCol, {
            sm: "4",
            lg: "2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CLabel, {
              children: "Percentage (in %)"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCol, {
            sm: "8",
            lg: "3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CInput, {
              type: "number",
              placeholder: "Enter tax percentage",
              autoComplete: "off",
              disabled: loading,
              value: (_data$percentage = data.percentage) !== null && _data$percentage !== void 0 ? _data$percentage : '',
              onChange: function onChange(e) {
                return handleChange({
                  percentage: e.target.value
                });
              },
              invalid: submitError.hasOwnProperty('percentage')
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CInvalidFeedback, {
              children: submitError && submitError.hasOwnProperty('percentage') ? submitError.percentage[0] : 'Unknown Error'
            })]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CFormGroup, {
          row: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCol, {
            sm: "4",
            lg: "2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CLabel, {
              children: "Linked to Account"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCol, {
            sm: "8",
            lg: "5",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CSelect, {
              type: "text",
              placeholder: "Choose account",
              autoComplete: "off",
              disabled: loading,
              value: (_data$account_id = data.account_id) !== null && _data$account_id !== void 0 ? _data$account_id : '',
              onChange: function onChange(e) {
                return handleChange({
                  account_id: e.target.value
                });
              },
              children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
                value: ""
              }), accounts ? accounts.map(function (item, index) {
                return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)("option", {
                  value: item.id,
                  children: [item.number, " - ", item.name]
                }, item.id);
              }) : '']
            })
          })]
        })]
      })
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCardFooter, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CButton, {
        className: "mr-2",
        type: "submit",
        onClick: function onClick(event) {
          return handleSubmit(event);
        },
        size: "md",
        color: "primary",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: "cil-scrubber"
        }), " Submit"]
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CButton, {
        className: "mr-2",
        type: "reset",
        onClick: resetForm,
        size: "md",
        color: "danger",
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
          name: "cil-ban"
        }), " Reset"]
      })]
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaxCodeEdit);

/***/ })

}]);