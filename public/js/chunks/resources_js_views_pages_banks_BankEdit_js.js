"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_banks_BankEdit_js"],{

/***/ "./resources/js/components/StickyComponent.js":
/*!****************************************************!*\
  !*** ./resources/js/components/StickyComponent.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Sticky)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["children"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }






function debounce(fn, ms) {
  var _arguments = arguments,
      _this = this;

  var timer;
  return function (_) {
    clearTimeout(timer);
    timer = setTimeout(function (_) {
      timer = null;
      fn.apply(_this, _arguments);
    }, ms);
  };
}

function Sticky(_ref) {
  var children = _ref.children,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined),
      _useState2 = _slicedToArray(_useState, 2),
      offset = _useState2[0],
      setOffset = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0),
      _useState4 = _slicedToArray(_useState3, 2),
      height = _useState4[0],
      setHeight = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      style = _useState6[0],
      setStyle = _useState6[1];

  var elementRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  var supportRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (elementRef.current) {
      var boundingRect = elementRef.current.getBoundingClientRect();

      if (!offset) {
        setOffset(boundingRect.y - 1);
      }

      if (height !== boundingRect.height) {
        setHeight(boundingRect.height);
      }
    }

    var handleScroll = debounce(function handleResize() {
      var supportRect = supportRef.current.getBoundingClientRect();
      var boundingRect = elementRef.current.getBoundingClientRect();

      if (supportRect.y < boundingRect.y) {
        setStyle(_objectSpread(_objectSpread({}, style), {}, {
          boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2)'
        }));
      } else {
        setStyle(_objectSpread(_objectSpread({}, style), {}, {
          boxShadow: undefined
        }));
      }
    }, 60);
    window.addEventListener('scroll', handleScroll);
    return function (_) {
      window.removeEventListener('scroll', handleScroll);
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
    if (offset) {
      setStyle({
        position: 'fixed',
        top: offset,
        zIndex: 99
      });
    }
  }, [offset]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      className: "sticky",
      ref: elementRef,
      style: style,
      children: children
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("div", {
      ref: supportRef,
      style: {
        visibility: 'hidden',
        height: height
      }
    })]
  });
}

/***/ }),

/***/ "./resources/js/containers/MasterEdit.js":
/*!***********************************************!*\
  !*** ./resources/js/containers/MasterEdit.js ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/esm/react-router.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../store */ "./resources/js/store.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../alert */ "./resources/js/alert.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _components_StickyComponent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/StickyComponent */ "./resources/js/components/StickyComponent.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["children", "formData"];


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

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }












var MasterEdit = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      formData = _ref.formData,
      props = _objectWithoutProperties(_ref, _excluded);

  var _useParams = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useParams)(),
      id = _useParams.id;

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formData),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(formData),
      _useState4 = _slicedToArray(_useState3, 2),
      initialData = _useState4[0],
      setInitialData = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false),
      _useState6 = _slicedToArray(_useState5, 2),
      validated = _useState6[0],
      setValidated = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      submitError = _useState8[0],
      setSubmitError = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      _useState10 = _slicedToArray(_useState9, 2),
      submitted = _useState10[0],
      setSubmitted = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState12 = _slicedToArray(_useState11, 2),
      navElements = _useState12[0],
      setNavElements = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(),
      _useState14 = _slicedToArray(_useState13, 2),
      activeNavigation = _useState14[0],
      setActiveNavigation = _useState14[1];

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useDispatch)();
  var loading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.appLoading;
  });
  var history = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_10__.useHistory)();

  var handleChange = function handleChange(values) {
    var oldData = data;

    var newData = _objectSpread(_objectSpread({}, data), values);

    setData(newData);

    if (props.onChangeData) {
      props.onChangeData(oldData, values);
    }
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    console.log(activeNavigation);
  }, [activeNavigation]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (!id) {
      setData(formData);
    }
  }, [submitted]);
  var inputRefs = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)({});
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    if (props.navigation) {
      setNavElements(props.navigation.map(function (item, index) {
        if (index == 0) {
          setActiveNavigation(item.target);
        }

        return document.querySelector(item.target);
      }));
    }
  }, []);

  var handleDelete = function handleDelete() {
    _alert__WEBPACK_IMPORTED_MODULE_5__["default"].confirm({
      title: 'Are you sure to delete this data ?',
      confirmAction: function confirmAction() {
        axios__WEBPACK_IMPORTED_MODULE_7___default()["delete"](props.apiUrl + "/" + id).then(function () {
          _alert__WEBPACK_IMPORTED_MODULE_5__["default"].success({
            text: "Data successfully deleted"
          });
          history.goBack();
        })["catch"](function (error) {
          _alert__WEBPACK_IMPORTED_MODULE_5__["default"].error({
            text: error.response
          });
        });
      }
    });
  };

  var refs = function refs(index) {
    if (!inputRefs.current.hasOwnProperty(index)) {
      inputRefs.current[index] = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.createRef();
    }

    return inputRefs.current[index];
  };

  var handleSubmit = function handleSubmit(event) {
    var form = event.currentTarget;
    event.preventDefault();
    event.stopPropagation();
    setValidated(true);
    var newData = {};
    Object.keys(formData).filter(function (x) {
      if (data[x] !== undefined) {
        newData[x] = data[x];
      } else {
        newData[x] = formData[x];
      }
    });
    var request = props.formatData ? props.formatData(newData) : newData;
    setData(request);

    if (form.checkValidity() === true) {
      var submit = /*#__PURE__*/function () {
        var _ref2 = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
          var response;
          return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.prev = 0;
                  _context.next = 3;
                  return axios__WEBPACK_IMPORTED_MODULE_7___default()({
                    method: id ? 'put' : 'post',
                    url: props.apiUrl + (id ? "/" + id : ''),
                    data: request
                  });

                case 3:
                  response = _context.sent;
                  return _context.abrupt("return", response);

                case 7:
                  _context.prev = 7;
                  _context.t0 = _context["catch"](0);
                  return _context.abrupt("return", {
                    error: {
                      message: _context.t0.response.data.message,
                      errors: _context.t0.response.data.errors
                    }
                  });

                case 10:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, null, [[0, 7]]);
        }));

        return function submit() {
          return _ref2.apply(this, arguments);
        };
      }();

      dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppLoading)(true));
      submit().then(function (response) {
        dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppLoading)(false));

        if (response.error) {
          if (response.error.errors) {
            setSubmitError(response.error.errors);
            var firstError = Object.keys(response.error.errors)[0];

            if (inputRefs.current && inputRefs.current.hasOwnProperty(firstError)) {
              inputRefs.current[firstError].current.focus();
            }
          } else {
            var _response$error$messa;

            var message = (_response$error$messa = response.error.message) !== null && _response$error$messa !== void 0 ? _response$error$messa : 'Something went wrong';
            _alert__WEBPACK_IMPORTED_MODULE_5__["default"].error({
              text: message
            });
          }

          if (props.onSubmitError) {
            props.onSubmitError(data, response);
          }
        } else {
          _alert__WEBPACK_IMPORTED_MODULE_5__["default"].success({
            text: 'Data saved successfully'
          });
          setSubmitError({});

          if (props.onSubmitSuccess) {
            props.onSubmitSuccess(request, response);
          }

          var firstKey = Object.keys(inputRefs.current)[0];

          if (inputRefs.current[firstKey].current) {
            inputRefs.current[firstKey].current.focus();
          }

          setSubmitted(submitted + 1);
        }

        setValidated(false);
      });
    }
  };

  var resetForm = function resetForm() {
    handleChange(initialData);
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppEditing)(true));

    if (id) {
      dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppLoading)(true));
      axios__WEBPACK_IMPORTED_MODULE_7___default().get(props.apiUrl + "/" + id).then(function (response) {
        dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppLoading)(false));

        var newData = _objectSpread(_objectSpread({}, formData), response.data);

        if (formData.id) {
          newData.id = id;
        }

        setData(newData);
        setInitialData(newData);

        if (props.onOpen) {
          props.onOpen(response.data);
        }
      })["catch"](function (error) {
        dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppLoading)(false));
        _alert__WEBPACK_IMPORTED_MODULE_5__["default"].error({
          text: error.message
        });

        if (props.onGetDataError) {
          props.onGetDataError(error);
        }
      });
    } else {
      if (props.onOpen) {
        props.onOpen();
      }
    }
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    return function () {
      dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppEditing)(false));
    };
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, function () {
    return {
      getRef: function getRef(index) {
        var resultRef = refs(index);

        if (resultRef) {
          return resultRef.current;
        }
      }
    };
  });
  var childProps = {
    data: data,
    loading: loading,
    inputRefs: refs,
    handleChange: handleChange,
    isInvalid: function isInvalid(property) {
      return submitError.hasOwnProperty(property);
    },
    feedback: function feedback(property, errorText) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CInvalidFeedback, {
        children: submitError.hasOwnProperty(property) ? submitError[property][0] : errorText !== null && errorText !== void 0 ? errorText : 'Unknown Error'
      });
    },
    activeNavigation: activeNavigation
  };
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CForm, {
    className: "form-horizontal needs-validation editForm",
    noValidate: true,
    wasValidated: validated,
    onSubmit: handleSubmit,
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCard, {
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCardHeader, {
        className: "p-0",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_components_StickyComponent__WEBPACK_IMPORTED_MODULE_8__["default"], {
          children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("div", {
            className: "d-flex flex-wrap flex-sm-nowrap",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)("h4", {
                className: "mb-0",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CButton, {
                  className: "btn-ghost pl-0",
                  onClick: function onClick(e) {
                    return history.goBack();
                  },
                  children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                    size: "2xl",
                    name: "cilArrowCircleLeft"
                  })
                }), id && id != "" ? 'Edit ' + props.title : 'Create ' + props.title]
              })
            }), props.navigation ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "order-2 px-4 pb-2 pb-sm-0 order-sm-1 col-12 col-sm-auto align-self-center",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CNav, {
                variant: "pills",
                className: "justify-content-between",
                children: props.navigation.map(function (item, index) {
                  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CNavItem, {
                    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CNavLink, {
                      active: item.target == activeNavigation,
                      onClick: function onClick() {
                        return setActiveNavigation(item.target);
                      },
                      children: [item.icon ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                        className: "mr-sm-2",
                        name: item.icon
                      }) : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                        className: "d-none d-sm-inline",
                        children: item.title
                      })]
                    })
                  }, index);
                })
              })
            }) : '', /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("div", {
              className: "order-1 order-sm-3 ml-auto",
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CButton, {
                onClick: handleDelete,
                color: "danger",
                className: "mt-2",
                children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
                  name: "cil-trash",
                  className: "mr-sm-2"
                }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)("span", {
                  className: "d-none d-sm-inline",
                  children: "Delete"
                })]
              })
            })]
          })
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCardBody, {
        children: children(childProps)
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCardFooter, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CButton, {
          className: "mr-2",
          type: "submit",
          size: "md",
          color: "primary",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "cil-scrubber"
          }), " Submit"]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CButton, {
          className: "mr-2",
          type: "reset",
          onClick: resetForm,
          size: "md",
          color: "danger",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_9__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_6__["default"], {
            name: "cil-ban"
          }), " Reset"]
        })]
      })]
    })
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MasterEdit);

/***/ }),

/***/ "./resources/js/views/pages/banks/BankEdit.js":
/*!****************************************************!*\
  !*** ./resources/js/views/pages/banks/BankEdit.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _containers_MasterEdit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../containers/MasterEdit */ "./resources/js/containers/MasterEdit.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");








var BankEdit = function BankEdit() {
  var activeCompany = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.activeCompany;
  });
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_containers_MasterEdit__WEBPACK_IMPORTED_MODULE_0__["default"], {
    title: "Bank",
    apiUrl: "/api/setup/banks",
    formData: {
      id: '',
      company_id: activeCompany.id,
      name: '',
      branch: ''
    },
    children: function children(props) {
      return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.Fragment, {
        children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CFormGroup, {
          row: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCol, {
            sm: "4",
            lg: "2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CLabel, {
              children: "Bank Name"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCol, {
            sm: "8",
            lg: "3",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CInput, {
              placeholder: "Enter bank name",
              autoFocus: true,
              autoComplete: "off",
              type: "text",
              innerRef: props.inputRefs('name'),
              disabled: props.loading,
              onChange: function onChange(e) {
                return props.handleChange({
                  name: e.target.value
                });
              },
              value: props.data.name,
              invalid: props.isInvalid('name'),
              required: true
            }), props.feedback('name', 'Please enter a name')]
          })]
        }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CFormGroup, {
          row: true,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCol, {
            sm: "4",
            lg: "2",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CLabel, {
              children: "Branch Name"
            })
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CCol, {
            sm: "8",
            lg: "3",
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_3__.CInput, {
              type: "text",
              placeholder: "Enter branch name",
              autoComplete: "off",
              disabled: props.loading,
              value: props.data.branch,
              onChange: function onChange(e) {
                return props.handleChange({
                  branch: e.target.value
                });
              }
            })
          })]
        })]
      });
    }
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BankEdit);

/***/ })

}]);