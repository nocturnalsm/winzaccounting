(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_currencies_CurrencyList_js"],{

/***/ "./resources/js/components/datatable/DTToolbar.js":
/*!********************************************************!*\
  !*** ./resources/js/components/datatable/DTToolbar.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");





var DTToolbarShow = function DTToolbarShow(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CButton, {
    className: "mr-2",
    color: "success",
    shape: "square",
    size: "sm",
    disabled: props.disabled,
    to: props.showLink ? props.showLink.replace(/\/$/, '') + "/" + props._id : '',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "cil-magnifying-glass"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "d-none d-md-inline ml-2",
      children: "Show"
    })]
  });
};

var DTToolbarEdit = function DTToolbarEdit(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CButton, {
    className: "mr-2",
    color: "primary",
    shape: "square",
    size: "sm",
    disabled: props.disabled,
    to: props.editLink ? props.editLink.replace(/\/$/, '') + "/" + props._id : '',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "cilPencil"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "d-none d-md-inline ml-2",
      children: "Edit"
    })]
  });
};

var DTToolbarDelete = function DTToolbarDelete(props) {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CButton, {
    className: "mr-2",
    color: "danger",
    shape: "square",
    size: "sm",
    disabled: props.disabled,
    to: props.deleteLink ? props.deleteLink.replace(/\/$/, '') + "/" + props._id : '',
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__["default"], {
      name: "cilTrash"
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
      className: "d-none d-md-inline ml-2",
      children: "Delete"
    })]
  });
};

var DTToolbar = function DTToolbar(props) {
  var _props$showButtonVisi, _props$editButtonVisi, _props$deleteButtonVi;

  var showButtonVisible = (_props$showButtonVisi = props.showButtonVisible) !== null && _props$showButtonVisi !== void 0 ? _props$showButtonVisi : true;
  var editButtonVisible = (_props$editButtonVisi = props.editButtonVisible) !== null && _props$editButtonVisi !== void 0 ? _props$editButtonVisi : true;
  var deleteButtonVisible = (_props$deleteButtonVi = props.deleteButtonVisible) !== null && _props$deleteButtonVi !== void 0 ? _props$deleteButtonVi : true;
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("td", {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_0__.CButtonToolbar, {
      children: [showButtonVisible ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DTToolbarShow, {
        _id: props._id,
        showLink: props.showLink,
        disabled: props.showButtonDisabled
      }) : '', editButtonVisible ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DTToolbarEdit, {
        _id: props._id,
        editLink: props.editLink,
        disabled: props.editButtonDisabled
      }) : '', deleteButtonVisible ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DTToolbarDelete, {
        _id: props._id,
        deleteLink: props.deleteLink,
        disabled: props.deleteButtonDisabled
      }) : '']
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DTToolbar);

/***/ }),

/***/ "./resources/js/components/datatable/DTable.js":
/*!*****************************************************!*\
  !*** ./resources/js/components/datatable/DTable.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store */ "./resources/js/store.js");
/* harmony import */ var _alert__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../alert */ "./resources/js/alert.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _DTToolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./DTToolbar */ "./resources/js/components/datatable/DTToolbar.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash.debounce */ "./node_modules/lodash.debounce/index.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");


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













var DTable = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(function (props, ref) {
  var _ref3, _params$limit;

  var appLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.appLoading;
  });

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]),
      _useState2 = _slicedToArray(_useState, 2),
      data = _useState2[0],
      setData = _useState2[1];

  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true),
      _useState4 = _slicedToArray(_useState3, 2),
      showToolbar = _useState4[0],
      setShowToolbar = _useState4[1];

  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState6 = _slicedToArray(_useState5, 2),
      customFields = _useState6[0],
      setCustomFields = _useState6[1];

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState8 = _slicedToArray(_useState7, 2),
      customFilterInputs = _useState8[0],
      setCustomFilterInputs = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.fields),
      _useState10 = _slicedToArray(_useState9, 2),
      fields = _useState10[0],
      setFields = _useState10[1];

  var _useState11 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.customFilterValue),
      _useState12 = _slicedToArray(_useState11, 2),
      customFilterValue = _useState12[0],
      setCustomFilterValue = _useState12[1];

  var _useState13 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({}),
      _useState14 = _slicedToArray(_useState13, 2),
      params = _useState14[0],
      setParams = _useState14[1];

  var initialParams = function initialParams() {
    var _props$customFilterVa;

    return JSON.parse(localStorage.getItem('datatable.' + props._id)) || {
      page: 1,
      limit: 10,
      sort: null,
      order: 'asc',
      filter: (_props$customFilterVa = props.customFilterValue) !== null && _props$customFilterVa !== void 0 ? _props$customFilterVa : {}
    };
  };

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var data = initialParams();
    fetchData(data);
  }, []);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var _props$customFilterIn;

    var inputs = (_props$customFilterIn = props.customFilterInput) !== null && _props$customFilterIn !== void 0 ? _props$customFilterIn : {};
    var values = initialParams();
    var filterSlots = {};
    Object.keys(inputs).map(function (item, index) {
      filterSlots[item] = inputs[item](values.filter[item]);
    });
  }, [customFilterInputs]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useImperativeHandle)(ref, function () {
    return {
      setCustomFilter: function setCustomFilter(values) {
        fetchData({
          filter: _objectSpread(_objectSpread({}, params.filter), values)
        });
        setCustomFilterValue(values);
      },
      getInitialParams: function getInitialParams() {
        return initialParams();
      }
    };
  });
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var slots = {};
    var currFields = props.fields;
    currFields.map(function (field, index) {
      if (field.type == 'toolbar' && showToolbar == true) {
        field['key'] = '_toolbar';
        field['sorter'] = false;
        field['filter'] = false;

        slots[field.key] = function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_DTToolbar__WEBPACK_IMPORTED_MODULE_7__["default"], {
            _id: item.id,
            createLink: props.createLink,
            editLink: props.editLink,
            deleteLink: props.deleteLink,
            showLink: props.showLink
          });
        };

        return field;
      } else if (field.type == 'email') {
        slots[field.key] = function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
              href: "mailto:" + item[field.key],
              children: item[field.key]
            })
          });
        };
      } else if (field.type == 'url') {
        slots[field.key] = function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("a", {
              target: "_blank",
              href: "http://" + item[field.key],
              children: item[field.key]
            })
          });
        };
      } else if (field.type == 'badge') {
        slots[field.key] = function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CBadge, {
              color: "success",
              children: item[field.key]
            }, index)
          });
        };
      } else if (field.type == 'custom') {
        slots[field.key] = field.onRender;
      }
    });
    setFields(currFields);
    setCustomFields(slots);
  }, []);

  var fetchData = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(request) {
      var _params$request, page, limit, sort, order, filter, newParams, response;

      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (appLoading) {
                _context.next = 19;
                break;
              }

              _store__WEBPACK_IMPORTED_MODULE_4__.store.dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppLoading)(true));
              _context.prev = 2;
              _params$request = _objectSpread(_objectSpread({}, params), request), page = _params$request.page, limit = _params$request.limit, sort = _params$request.sort, order = _params$request.order, filter = _params$request.filter;
              newParams = {
                page: page !== null && page !== void 0 ? page : 1,
                limit: limit !== null && limit !== void 0 ? limit : 10,
                sort: sort,
                order: order !== null && order !== void 0 ? order : 'asc',
                filter: filter
              };
              _context.next = 7;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().get(props.apiUrl, {
                params: newParams
              });

            case 7:
              response = _context.sent;
              setData(response.data);
              setParams(newParams);
              localStorage.setItem('datatable.' + props._id, JSON.stringify(newParams));
              _context.next = 16;
              break;

            case 13:
              _context.prev = 13;
              _context.t0 = _context["catch"](2);
              _alert__WEBPACK_IMPORTED_MODULE_5__["default"].error({
                text: _context.t0.response.data.message
              });

            case 16:
              _context.prev = 16;
              _store__WEBPACK_IMPORTED_MODULE_4__.store.dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppLoading)(false));
              return _context.finish(16);

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[2, 13, 16, 19]]);
    }));

    return function fetchData(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  var handlePageChange = function handlePageChange(newPage) {
    if (newPage > 0 && newPage != params.page) {
      fetchData({
        page: newPage
      });
    }
  };

  var handleFilterChange = function handleFilterChange(newFilter) {
    var _params$filter;

    var oldParams = (_params$filter = params.filter) !== null && _params$filter !== void 0 ? _params$filter : {};

    if (Object.keys(newFilter).length != 0 && newFilter !== oldParams) {
      var filter = _objectSpread(_objectSpread({}, newFilter), customFilterValue);

      fetchData({
        filter: filter
      });
    }
  };

  var handlePerRowsChange = function handlePerRowsChange(newLimit) {
    fetchData({
      limit: newLimit
    });
  };

  var handleSort = function handleSort(newSort) {
    var _ref2;

    if (newSort.column != params.sort || newSort.asc != ((_ref2 = params.order == 'asc') !== null && _ref2 !== void 0 ? _ref2 : true)) {
      var sort = newSort.column;
      var order = newSort.asc == true ? 'asc' : 'desc';
      fetchData({
        sort: sort,
        order: order
      });
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CRow, {
      className: "pb-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CCol, {
        xs: "6",
        md: "9",
        lg: "10",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CButton, {
          color: "primary",
          to: "/currencies/create",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_8__["default"], {
            name: "cil-plus"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("span", {
            className: "ml-2",
            children: "Add"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CCol, {
        xs: "6",
        md: "3",
        lg: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CSelect, {
          placeholder: "Items per page",
          custom: true,
          name: "pagechange",
          id: "pagechange",
          value: params.limit,
          onChange: function onChange(event) {
            return handlePerRowsChange(parseInt(event.target.value));
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("option", {
            value: "10",
            children: "10 items per page"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("option", {
            value: "20",
            children: "20 items per page"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("option", {
            value: "50",
            children: "50 items per page"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)("option", {
            value: "100",
            children: "100 items per page"
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CDataTable, {
      items: data.data,
      fields: fields,
      columnFilter: true,
      footer: true,
      columnFilterValue: params.filter,
      itemsPerPage: params.limit,
      onColumnFilterChange: lodash_debounce__WEBPACK_IMPORTED_MODULE_9___default()(handleFilterChange, 300),
      loading: appLoading,
      sorterValue: {
        column: params.sort,
        asc: (_ref3 = params.order == 'asc') !== null && _ref3 !== void 0 ? _ref3 : true
      },
      hover: true,
      sorter: true,
      onSorterValueChange: handleSort,
      scopedSlots: customFields,
      columnFilterSlot: customFilterInputs
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_10__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_6__.CPagination, {
      activePage: params.page ? data.count <= params.limit ? 1 : params.page : 1,
      pages: data.count ? Math.ceil(data.count / ((_params$limit = params.limit) !== null && _params$limit !== void 0 ? _params$limit : 10)) : 0,
      onActivePageChange: handlePageChange
    })]
  });
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DTable);

/***/ }),

/***/ "./resources/js/views/pages/currencies/CurrencyList.js":
/*!*************************************************************!*\
  !*** ./resources/js/views/pages/currencies/CurrencyList.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_datatable_DTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/datatable/DTable */ "./resources/js/components/datatable/DTable.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../store */ "./resources/js/store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var CurrencyList = function CurrencyList() {
  var fields = [{
    label: 'Name',
    key: 'name'
  }, {
    label: 'Code',
    key: 'code'
  }, {
    label: 'Sign',
    key: 'sign'
  }, {
    label: 'Action',
    type: 'toolbar'
  }];
  var activeCompany = (0,react_redux__WEBPACK_IMPORTED_MODULE_3__.useSelector)(function (state) {
    return state.activeCompany;
  });
  var dtRef = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)(null);
  (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(function () {
    dtRef.current.setCustomFilter({
      company_id: activeCompany.id
    });
  }, [activeCompany]);
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_5__.jsx)(_components_datatable_DTable__WEBPACK_IMPORTED_MODULE_0__["default"], {
        _id: "currencieslist",
        defaultSort: "name",
        fields: fields,
        ref: dtRef,
        customFilterValue: {
          company_id: activeCompany.id
        },
        apiUrl: "/api/setup/currencies",
        editLink: "/currencies/edit",
        createLink: "/currencies/create",
        deleteLink: "/currencies/delete",
        showLink: "/currencies/show"
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CurrencyList);

/***/ }),

/***/ "./node_modules/lodash.debounce/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.debounce/index.js ***!
  \***********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as the `TypeError` message for "Functions" methods. */
var FUNC_ERROR_TEXT = 'Expected a function';

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match leading and trailing whitespace. */
var reTrim = /^\s+|\s+$/g;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof __webpack_require__.g == 'object' && __webpack_require__.g && __webpack_require__.g.Object === Object && __webpack_require__.g;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        result = wait - timeSinceLastCall;

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return !!value && (type == 'object' || type == 'function');
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = value.replace(reTrim, '');
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = debounce;


/***/ })

}]);