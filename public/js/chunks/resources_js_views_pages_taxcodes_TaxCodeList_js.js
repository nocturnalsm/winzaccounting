"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_views_pages_taxcodes_TaxCodeList_js"],{

/***/ "./resources/js/components/datatable/DTToolbar.js":
/*!********************************************************!*\
  !*** ./resources/js/components/datatable/DTToolbar.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__.default, {
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
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__.default, {
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
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_1__.default, {
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
        disabled: props.showButtonDisabled
      }) : '', editButtonVisible ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DTToolbarEdit, {
        disabled: props.editButtonDisabled
      }) : '', deleteButtonVisible ? /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(DTToolbarDelete, {
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
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var _DTToolbar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./DTToolbar */ "./resources/js/components/datatable/DTToolbar.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");
var _excluded = ["page"],
    _excluded2 = ["filter"],
    _excluded3 = ["limit"],
    _excluded4 = ["sort", "order"];

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var DTable = function DTable(props) {
  var _props$limit, _props$defaultSort, _props$defaultOrder;

  var appLoading = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.appLoading;
  });
  var appError = (0,react_redux__WEBPACK_IMPORTED_MODULE_2__.useSelector)(function (state) {
    return state.appError;
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

  var _useState7 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(props.fields),
      _useState8 = _slicedToArray(_useState7, 2),
      fields = _useState8[0],
      setFields = _useState8[1];

  var _useState9 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({
    page: 1,
    limit: (_props$limit = props.limit) !== null && _props$limit !== void 0 ? _props$limit : 10,
    sort: (_props$defaultSort = props.defaultSort) !== null && _props$defaultSort !== void 0 ? _props$defaultSort : 'id',
    order: (_props$defaultOrder = props.defaultOrder) !== null && _props$defaultOrder !== void 0 ? _props$defaultOrder : 'asc',
    filter: {}
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      params = _useState10[0],
      setParams = _useState10[1];

  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    fetchUsers();
  }, [params]);
  (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function () {
    var slots = {};
    var currFields = props.fields;
    currFields.map(function (field, index) {
      if (field.type == 'toolbar' && showToolbar == true) {
        field['key'] = '_toolbar';
        field['sorter'] = false;
        field['filter'] = false;

        slots[field.key] = function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_DTToolbar__WEBPACK_IMPORTED_MODULE_6__.default, {});
        };

        return field;
      } else if (field.type == 'email') {
        slots[field.key] = function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              href: "mailto:" + item[field.key],
              children: item[field.key]
            })
          });
        };
      } else if (field.type == 'url') {
        slots[field.key] = function (item, index) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("a", {
              target: "_blank",
              href: "http://" + item[field.key],
              children: item[field.key]
            })
          });
        };
      } else if (field.type == 'badge') {
        slots[field.key] = function (item) {
          return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("td", {
            children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CBadge, {
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

  var fetchUsers = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var response;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _store__WEBPACK_IMPORTED_MODULE_4__.store.dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppLoading)(true));
              _context.prev = 1;
              _context.next = 4;
              return axios__WEBPACK_IMPORTED_MODULE_3___default().get(props.apiUrl, {
                params: params
              });

            case 4:
              response = _context.sent;
              setData(response.data);
              _context.next = 11;
              break;

            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](1);
              _store__WEBPACK_IMPORTED_MODULE_4__.store.dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppError)(_context.t0.response.data.message));

            case 11:
              _context.prev = 11;
              _store__WEBPACK_IMPORTED_MODULE_4__.store.dispatch((0,_store__WEBPACK_IMPORTED_MODULE_4__.setAppLoading)(false));
              return _context.finish(11);

            case 14:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[1, 8, 11, 14]]);
    }));

    return function fetchUsers() {
      return _ref.apply(this, arguments);
    };
  }();

  var handlePageChange = function handlePageChange(newPage) {
    var page = params.page,
        rest = _objectWithoutProperties(params, _excluded);

    page = newPage;
    setParams(_objectSpread({
      page: page
    }, rest));
  };

  var handleFilterChange = function handleFilterChange(newFilter) {
    if (Object.keys(newFilter).length != 0) {
      var filter = params.filter,
          rest = _objectWithoutProperties(params, _excluded2);

      filter = newFilter;
      setParams(_objectSpread({
        filter: filter
      }, rest));
    }
  };

  var handlePerRowsChange = function handlePerRowsChange(newLimit) {
    var limit = params.limit,
        rest = _objectWithoutProperties(params, _excluded3);

    limit = newLimit;
    setParams(_objectSpread({
      limit: limit
    }, rest));
  };

  var handleSort = function handleSort(newSort) {
    if (typeof newSort.asc != 'undefined') {
      var sort = params.sort,
          order = params.order,
          rest = _objectWithoutProperties(params, _excluded4);

      sort = newSort.column;
      order = newSort.asc == true ? 'asc' : 'desc';
      setParams(_objectSpread({
        sort: sort,
        order: order
      }, rest));
    }
  };

  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.Fragment, {
    children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CRow, {
      className: "pb-2",
      children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCol, {
        xs: "6",
        md: "9",
        lg: "10",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CButton, {
          color: "primary",
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_7__.default, {
            name: "cil-plus"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("span", {
            className: "ml-2",
            children: "Add"
          })]
        })
      }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CCol, {
        xs: "6",
        md: "3",
        lg: "2",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CSelect, {
          placeholder: "Items per page",
          custom: true,
          name: "pagechange",
          id: "pagechange",
          onChange: function onChange(event) {
            return handlePerRowsChange(event.target.value);
          },
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
            value: "10",
            children: "10 items per page"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
            value: "20",
            children: "20 items per page"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
            value: "50",
            children: "50 items per page"
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)("option", {
            value: "50",
            children: "100 items per page"
          })]
        })
      })]
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CDataTable, {
      items: data.data,
      fields: fields,
      columnFilter: true,
      footer: true,
      itemsPerPage: params.limit,
      onColumnFilterChange: handleFilterChange,
      loading: appLoading,
      hover: true,
      sorter: true,
      onSorterValueChange: handleSort,
      scopedSlots: customFields
    }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_8__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_5__.CPagination, {
      activePage: params.page,
      pages: Math.ceil(data.count / params.limit),
      onActivePageChange: handlePageChange
    })]
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (DTable);

/***/ }),

/***/ "./resources/js/views/pages/taxcodes/TaxCodeList.js":
/*!**********************************************************!*\
  !*** ./resources/js/views/pages/taxcodes/TaxCodeList.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_datatable_DTable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../components/datatable/DTable */ "./resources/js/components/datatable/DTable.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/es/index.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");




var TaxCodeList = function TaxCodeList() {
  var fields = [{
    label: 'Name',
    key: 'name'
  }, {
    label: 'Code',
    key: 'code'
  }, {
    label: 'Percentage (%)',
    key: 'percentage'
  }, {
    label: 'Action',
    type: 'toolbar'
  }];
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCard, {
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCardBody, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_components_datatable_DTable__WEBPACK_IMPORTED_MODULE_0__.default, {
        fields: fields,
        apiUrl: "/api/setup/taxcodes"
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (TaxCodeList);

/***/ })

}]);