"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_coreui_src_views_pages_page404_Page404_js"],{

/***/ "./node_modules/@coreui/icons-react/dist/index.es.js":
/*!***********************************************************!*\
  !*** ./node_modules/@coreui/icons-react/dist/index.es.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CIcon)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* provided dependency */ var process = __webpack_require__(/*! process/browser */ "./node_modules/process/browser.js");


/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (false) {} else {
  reactIs.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$1 = function() {};

if (true) {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$1(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$1(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var checkPropTypes = checkPropTypes_1;

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning = function() {};

if (true) {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {}

var PropTypes = propTypes.exports;

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

var classNames = classnames.exports;

var toCamelCase = function (str) {
    return str
        .replace(/([-_][a-z0-9])/gi, function ($1) {
        return $1.toUpperCase();
    })
        .replace(/-/gi, '');
};
var CIcon = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var className = _a.className, content = _a.content, customClassName = _a.customClassName, height = _a.height, icon = _a.icon, name = _a.name, size = _a.size, title = _a.title, use = _a.use, width = _a.width, rest = __rest(_a, ["className", "content", "customClassName", "height", "icon", "name", "size", "title", "use", "width"]);
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), change = _c[0], setChange = _c[1];
    var _icon = icon || content || name;
    if (content) {
        process &&
            process.env &&
            "development" === 'development' &&
            console.warn('[CIcon] The `content` property is deprecated and will be removed in v3, please use `icon={...}` instead of.');
    }
    if (name) {
        process &&
            process.env &&
            "development" === 'development' &&
            console.warn('[CIcon] The `name` property is deprecated and will be removed in v3, please use `icon="..."` instead of.');
    }
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () { return setChange(change + 1); }, [_icon, JSON.stringify(_icon)]);
    var iconName = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        return _icon && typeof _icon === 'string' && _icon.includes('-') ? toCamelCase(_icon) : _icon;
    }, [change]);
    var titleCode = title ? "<title>" + title + "</title>" : '';
    var code = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        if (Array.isArray(_icon)) {
            return _icon;
        }
        if (typeof _icon === 'string' && react__WEBPACK_IMPORTED_MODULE_0__.icons) {
            return react__WEBPACK_IMPORTED_MODULE_0__.icons[iconName];
        }
    }, [change]);
    var iconCode = (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        return Array.isArray(code) ? code[1] || code[0] : code;
    }, [change]);
    var scale = (function () {
        return Array.isArray(code) && code.length > 1 ? code[0] : '64 64';
    })();
    var viewBox = (function () {
        return rest['viewBox'] || "0 0 " + scale;
    })();
    // render
    var _className = customClassName
        ? classNames(customClassName)
        : classNames('icon', (_b = {},
            _b["icon-" + size] = size,
            _b["icon-custom-size"] = height || width,
            _b), className);
    return use ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", className: _className }, (height && { height: height }), (width && { width: width }), { role: "img" }, rest, { ref: ref }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("use", { href: use }))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("svg", __assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: viewBox, className: _className }, (height && { height: height }), (width && { width: width }), { role: "img", dangerouslySetInnerHTML: { __html: titleCode + iconCode } }, rest, { ref: ref })));
});
CIcon.propTypes = {
    className: PropTypes.string,
    content: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    customClassName: PropTypes.string,
    height: PropTypes.number,
    icon: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
    name: PropTypes.string,
    size: PropTypes.oneOf([
        'custom-size',
        'sm',
        'lg',
        'xl',
        'xxl',
        '3xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
    ]),
    title: PropTypes.any,
    use: PropTypes.any,
    width: PropTypes.number,
};
CIcon.displayName = 'CIcon';


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./node_modules/@coreui/icons/js/free/cil-magnifying-glass.js":
/*!********************************************************************!*\
  !*** ./node_modules/@coreui/icons/js/free/cil-magnifying-glass.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cilMagnifyingGlass": () => (/* binding */ cilMagnifyingGlass)
/* harmony export */ });
const cilMagnifyingGlass = ["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M479.6,399.716l-81.084-81.084-62.368-25.767A175.014,175.014,0,0,0,368,192c0-97.047-78.953-176-176-176S16,94.953,16,192,94.953,368,192,368a175.034,175.034,0,0,0,101.619-32.377l25.7,62.2L400.4,478.911a56,56,0,1,0,79.2-79.195ZM48,192c0-79.4,64.6-144,144-144s144,64.6,144,144S271.4,336,192,336,48,271.4,48,192ZM456.971,456.284a24.028,24.028,0,0,1-33.942,0l-76.572-76.572-23.894-57.835L380.4,345.771l76.573,76.572A24.028,24.028,0,0,1,456.971,456.284Z' class='ci-primary'/>"]

/***/ }),

/***/ "./node_modules/@coreui/react/dist/index.es.js":
/*!*****************************************************!*\
  !*** ./node_modules/@coreui/react/dist/index.es.js ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CAccordion": () => (/* binding */ CAccordion),
/* harmony export */   "CAccordionBody": () => (/* binding */ CAccordionBody),
/* harmony export */   "CAccordionButton": () => (/* binding */ CAccordionButton),
/* harmony export */   "CAccordionCollapse": () => (/* binding */ CAccordionCollapse),
/* harmony export */   "CAccordionHeader": () => (/* binding */ CAccordionHeader),
/* harmony export */   "CAccordionItem": () => (/* binding */ CAccordionItem),
/* harmony export */   "CAlert": () => (/* binding */ CAlert),
/* harmony export */   "CAlertHeading": () => (/* binding */ CAlertHeading),
/* harmony export */   "CAlertLink": () => (/* binding */ CAlertLink),
/* harmony export */   "CAvatar": () => (/* binding */ CAvatar),
/* harmony export */   "CBackdrop": () => (/* binding */ CBackdrop),
/* harmony export */   "CBadge": () => (/* binding */ CBadge),
/* harmony export */   "CBreadcrumb": () => (/* binding */ CBreadcrumb),
/* harmony export */   "CBreadcrumbItem": () => (/* binding */ CBreadcrumbItem),
/* harmony export */   "CButton": () => (/* binding */ CButton),
/* harmony export */   "CButtonGroup": () => (/* binding */ CButtonGroup),
/* harmony export */   "CButtonToolbar": () => (/* binding */ CButtonToolbar),
/* harmony export */   "CCallout": () => (/* binding */ CCallout),
/* harmony export */   "CCard": () => (/* binding */ CCard),
/* harmony export */   "CCardBody": () => (/* binding */ CCardBody),
/* harmony export */   "CCardFooter": () => (/* binding */ CCardFooter),
/* harmony export */   "CCardGroup": () => (/* binding */ CCardGroup),
/* harmony export */   "CCardHeader": () => (/* binding */ CCardHeader),
/* harmony export */   "CCardImage": () => (/* binding */ CCardImage),
/* harmony export */   "CCardImageOverlay": () => (/* binding */ CCardImageOverlay),
/* harmony export */   "CCardLink": () => (/* binding */ CCardLink),
/* harmony export */   "CCardSubtitle": () => (/* binding */ CCardSubtitle),
/* harmony export */   "CCardText": () => (/* binding */ CCardText),
/* harmony export */   "CCardTitle": () => (/* binding */ CCardTitle),
/* harmony export */   "CCarousel": () => (/* binding */ CCarousel),
/* harmony export */   "CCarouselCaption": () => (/* binding */ CCarouselCaption),
/* harmony export */   "CCarouselControl": () => (/* binding */ CCarouselControl),
/* harmony export */   "CCarouselIndicators": () => (/* binding */ CCarouselIndicators),
/* harmony export */   "CCarouselInner": () => (/* binding */ CCarouselInner),
/* harmony export */   "CCarouselItem": () => (/* binding */ CCarouselItem),
/* harmony export */   "CCloseButton": () => (/* binding */ CCloseButton),
/* harmony export */   "CCol": () => (/* binding */ CCol),
/* harmony export */   "CCollapse": () => (/* binding */ CCollapse),
/* harmony export */   "CContainer": () => (/* binding */ CContainer),
/* harmony export */   "CDropdown": () => (/* binding */ CDropdown),
/* harmony export */   "CDropdownDivider": () => (/* binding */ CDropdownDivider),
/* harmony export */   "CDropdownHeader": () => (/* binding */ CDropdownHeader),
/* harmony export */   "CDropdownItem": () => (/* binding */ CDropdownItem),
/* harmony export */   "CDropdownItemPlain": () => (/* binding */ CDropdownItemPlain),
/* harmony export */   "CDropdownMenu": () => (/* binding */ CDropdownMenu),
/* harmony export */   "CDropdownToggle": () => (/* binding */ CDropdownToggle),
/* harmony export */   "CFooter": () => (/* binding */ CFooter),
/* harmony export */   "CForm": () => (/* binding */ CForm),
/* harmony export */   "CFormCheck": () => (/* binding */ CFormCheck),
/* harmony export */   "CFormFeedback": () => (/* binding */ CFormFeedback),
/* harmony export */   "CFormFloating": () => (/* binding */ CFormFloating),
/* harmony export */   "CFormInput": () => (/* binding */ CFormInput),
/* harmony export */   "CFormLabel": () => (/* binding */ CFormLabel),
/* harmony export */   "CFormRange": () => (/* binding */ CFormRange),
/* harmony export */   "CFormSelect": () => (/* binding */ CFormSelect),
/* harmony export */   "CFormSwitch": () => (/* binding */ CFormSwitch),
/* harmony export */   "CFormText": () => (/* binding */ CFormText),
/* harmony export */   "CFormTextarea": () => (/* binding */ CFormTextarea),
/* harmony export */   "CHeader": () => (/* binding */ CHeader),
/* harmony export */   "CHeaderBrand": () => (/* binding */ CHeaderBrand),
/* harmony export */   "CHeaderDivider": () => (/* binding */ CHeaderDivider),
/* harmony export */   "CHeaderNav": () => (/* binding */ CHeaderNav),
/* harmony export */   "CHeaderText": () => (/* binding */ CHeaderText),
/* harmony export */   "CHeaderToggler": () => (/* binding */ CHeaderToggler),
/* harmony export */   "CImage": () => (/* binding */ CImage),
/* harmony export */   "CInputGroup": () => (/* binding */ CInputGroup),
/* harmony export */   "CInputGroupText": () => (/* binding */ CInputGroupText),
/* harmony export */   "CLink": () => (/* binding */ CLink),
/* harmony export */   "CListGroup": () => (/* binding */ CListGroup),
/* harmony export */   "CListGroupItem": () => (/* binding */ CListGroupItem),
/* harmony export */   "CModal": () => (/* binding */ CModal),
/* harmony export */   "CModalBody": () => (/* binding */ CModalBody),
/* harmony export */   "CModalContent": () => (/* binding */ CModalContent),
/* harmony export */   "CModalDialog": () => (/* binding */ CModalDialog),
/* harmony export */   "CModalFooter": () => (/* binding */ CModalFooter),
/* harmony export */   "CModalHeader": () => (/* binding */ CModalHeader),
/* harmony export */   "CModalTitle": () => (/* binding */ CModalTitle),
/* harmony export */   "CNav": () => (/* binding */ CNav),
/* harmony export */   "CNavGroup": () => (/* binding */ CNavGroup),
/* harmony export */   "CNavGroupItems": () => (/* binding */ CNavGroupItems),
/* harmony export */   "CNavItem": () => (/* binding */ CNavItem),
/* harmony export */   "CNavLink": () => (/* binding */ CNavLink),
/* harmony export */   "CNavTitle": () => (/* binding */ CNavTitle),
/* harmony export */   "CNavbar": () => (/* binding */ CNavbar),
/* harmony export */   "CNavbarBrand": () => (/* binding */ CNavbarBrand),
/* harmony export */   "CNavbarNav": () => (/* binding */ CNavbarNav),
/* harmony export */   "CNavbarText": () => (/* binding */ CNavbarText),
/* harmony export */   "CNavbarToggler": () => (/* binding */ CNavbarToggler),
/* harmony export */   "COffcanvas": () => (/* binding */ COffcanvas),
/* harmony export */   "COffcanvasBody": () => (/* binding */ COffcanvasBody),
/* harmony export */   "COffcanvasHeader": () => (/* binding */ COffcanvasHeader),
/* harmony export */   "COffcanvasTitle": () => (/* binding */ COffcanvasTitle),
/* harmony export */   "CPagination": () => (/* binding */ CPagination),
/* harmony export */   "CPaginationItem": () => (/* binding */ CPaginationItem),
/* harmony export */   "CPopover": () => (/* binding */ CPopover),
/* harmony export */   "CPopoverContent": () => (/* binding */ CPopoverContent),
/* harmony export */   "CProgress": () => (/* binding */ CProgress),
/* harmony export */   "CProgressBar": () => (/* binding */ CProgressBar),
/* harmony export */   "CRow": () => (/* binding */ CRow),
/* harmony export */   "CSidebar": () => (/* binding */ CSidebar),
/* harmony export */   "CSidebarBrand": () => (/* binding */ CSidebarBrand),
/* harmony export */   "CSidebarFooter": () => (/* binding */ CSidebarFooter),
/* harmony export */   "CSidebarHeader": () => (/* binding */ CSidebarHeader),
/* harmony export */   "CSidebarNav": () => (/* binding */ CSidebarNav),
/* harmony export */   "CSidebarToggler": () => (/* binding */ CSidebarToggler),
/* harmony export */   "CSpinner": () => (/* binding */ CSpinner),
/* harmony export */   "CTabContent": () => (/* binding */ CTabContent),
/* harmony export */   "CTabPane": () => (/* binding */ CTabPane),
/* harmony export */   "CTable": () => (/* binding */ CTable),
/* harmony export */   "CTableBody": () => (/* binding */ CTableBody),
/* harmony export */   "CTableCaption": () => (/* binding */ CTableCaption),
/* harmony export */   "CTableDataCell": () => (/* binding */ CTableDataCell),
/* harmony export */   "CTableFoot": () => (/* binding */ CTableFoot),
/* harmony export */   "CTableHead": () => (/* binding */ CTableHead),
/* harmony export */   "CTableHeaderCell": () => (/* binding */ CTableHeaderCell),
/* harmony export */   "CTableRow": () => (/* binding */ CTableRow),
/* harmony export */   "CToast": () => (/* binding */ CToast),
/* harmony export */   "CToastBody": () => (/* binding */ CToastBody),
/* harmony export */   "CToastClose": () => (/* binding */ CToastClose),
/* harmony export */   "CToastHeader": () => (/* binding */ CToastHeader),
/* harmony export */   "CToaster": () => (/* binding */ CToaster),
/* harmony export */   "CTooltip": () => (/* binding */ CTooltip),
/* harmony export */   "CTooltipContent": () => (/* binding */ CTooltipContent),
/* harmony export */   "CWidgetStatsA": () => (/* binding */ CWidgetStatsA),
/* harmony export */   "CWidgetStatsB": () => (/* binding */ CWidgetStatsB),
/* harmony export */   "CWidgetStatsC": () => (/* binding */ CWidgetStatsC),
/* harmony export */   "CWidgetStatsD": () => (/* binding */ CWidgetStatsD),
/* harmony export */   "CWidgetStatsE": () => (/* binding */ CWidgetStatsE),
/* harmony export */   "CWidgetStatsF": () => (/* binding */ CWidgetStatsF)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");




/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}

var propTypes = {exports: {}};

var reactIs = {exports: {}};

var reactIs_production_min = {};

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}reactIs_production_min.AsyncMode=l;reactIs_production_min.ConcurrentMode=m;reactIs_production_min.ContextConsumer=k;reactIs_production_min.ContextProvider=h;reactIs_production_min.Element=c;reactIs_production_min.ForwardRef=n;reactIs_production_min.Fragment=e;reactIs_production_min.Lazy=t;reactIs_production_min.Memo=r;reactIs_production_min.Portal=d;
reactIs_production_min.Profiler=g;reactIs_production_min.StrictMode=f;reactIs_production_min.Suspense=p;reactIs_production_min.isAsyncMode=function(a){return A(a)||z(a)===l};reactIs_production_min.isConcurrentMode=A;reactIs_production_min.isContextConsumer=function(a){return z(a)===k};reactIs_production_min.isContextProvider=function(a){return z(a)===h};reactIs_production_min.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};reactIs_production_min.isForwardRef=function(a){return z(a)===n};reactIs_production_min.isFragment=function(a){return z(a)===e};reactIs_production_min.isLazy=function(a){return z(a)===t};
reactIs_production_min.isMemo=function(a){return z(a)===r};reactIs_production_min.isPortal=function(a){return z(a)===d};reactIs_production_min.isProfiler=function(a){return z(a)===g};reactIs_production_min.isStrictMode=function(a){return z(a)===f};reactIs_production_min.isSuspense=function(a){return z(a)===p};
reactIs_production_min.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};reactIs_production_min.typeOf=z;

var reactIs_development = {};

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



if (true) {
  (function() {

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

reactIs_development.AsyncMode = AsyncMode;
reactIs_development.ConcurrentMode = ConcurrentMode;
reactIs_development.ContextConsumer = ContextConsumer;
reactIs_development.ContextProvider = ContextProvider;
reactIs_development.Element = Element;
reactIs_development.ForwardRef = ForwardRef;
reactIs_development.Fragment = Fragment;
reactIs_development.Lazy = Lazy;
reactIs_development.Memo = Memo;
reactIs_development.Portal = Portal;
reactIs_development.Profiler = Profiler;
reactIs_development.StrictMode = StrictMode;
reactIs_development.Suspense = Suspense;
reactIs_development.isAsyncMode = isAsyncMode;
reactIs_development.isConcurrentMode = isConcurrentMode;
reactIs_development.isContextConsumer = isContextConsumer;
reactIs_development.isContextProvider = isContextProvider;
reactIs_development.isElement = isElement;
reactIs_development.isForwardRef = isForwardRef;
reactIs_development.isFragment = isFragment;
reactIs_development.isLazy = isLazy;
reactIs_development.isMemo = isMemo;
reactIs_development.isPortal = isPortal;
reactIs_development.isProfiler = isProfiler;
reactIs_development.isStrictMode = isStrictMode;
reactIs_development.isSuspense = isSuspense;
reactIs_development.isValidElementType = isValidElementType;
reactIs_development.typeOf = typeOf;
  })();
}

if (false) {} else {
  reactIs.exports = reactIs_development;
}

/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$3 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

var ReactPropTypesSecret_1 = ReactPropTypesSecret$3;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var printWarning$2 = function() {};

if (true) {
  var ReactPropTypesSecret$2 = ReactPropTypesSecret_1;
  var loggedTypeFailures = {};
  var has$1 = Function.call.bind(Object.prototype.hasOwnProperty);

  printWarning$2 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes$1(typeSpecs, values, location, componentName, getStack) {
  if (true) {
    for (var typeSpecName in typeSpecs) {
      if (has$1(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret$2);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning$2(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning$2(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes$1.resetWarningCache = function() {
  if (true) {
    loggedTypeFailures = {};
  }
};

var checkPropTypes_1 = checkPropTypes$1;

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactIs$1 = reactIs.exports;
var assign = objectAssign;

var ReactPropTypesSecret$1 = ReactPropTypesSecret_1;
var checkPropTypes = checkPropTypes_1;

var has = Function.call.bind(Object.prototype.hasOwnProperty);
var printWarning$1 = function() {};

if (true) {
  printWarning$1 = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

var factoryWithTypeCheckers = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message) {
    this.message = message;
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (true) {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret$1) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if ( true && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning$1(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName  + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$1);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs$1.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (true) {
        if (arguments.length > 1) {
          printWarning$1(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning$1('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
       true ? printWarning$1('Invalid argument supplied to oneOfType, expected an instance of array.') : 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning$1(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        if (checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$1) == null) {
          return null;
        }
      }

      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (!checker) {
          continue;
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from
      // props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' +  JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$1);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

var factoryWithThrowingShims = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  }  shim.isRequired = shim;
  function getShim() {
    return shim;
  }  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (true) {
  var ReactIs = reactIs.exports;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  propTypes.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {}

var PropTypes = propTypes.exports;

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
/* global define */

(function () {

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else {
		window.classNames = classNames;
	}
}());
}(classnames));

var classNames = classnames.exports;

var CAccordion = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, flush = _a.flush, rest = __rest(_a, ["children", "className", "flush"]);
    var _className = classNames('accordion', { 'accordion-flush': flush }, className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CAccordion.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    flush: PropTypes.bool,
};
CAccordion.displayName = 'CAccordion';

var CAccordionBody = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('accordion-body', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CAccordionBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CAccordionBody.displayName = 'CAccordionBody';

var CAccordionButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, collapsed = _a.collapsed, rest = __rest(_a, ["children", "className", "collapsed"]);
    var _className = classNames('accordion-button', { collapsed: collapsed }, className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", __assign({ className: _className }, rest, { "aria-expanded": !collapsed, ref: ref }), children));
});
CAccordionButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    collapsed: PropTypes.bool,
};
CAccordionButton.displayName = 'CAccordionButton';

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  _setPrototypeOf(subClass, superClass);
}

/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!hasClass(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass$1(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

var config = {
  disabled: false
};

var timeoutsShape =  true ? PropTypes.oneOfType([PropTypes.number, PropTypes.shape({
  enter: PropTypes.number,
  exit: PropTypes.number,
  appear: PropTypes.number
}).isRequired]) : 0;
var classNamesShape =  true ? PropTypes.oneOfType([PropTypes.string, PropTypes.shape({
  enter: PropTypes.string,
  exit: PropTypes.string,
  active: PropTypes.string
}), PropTypes.shape({
  enter: PropTypes.string,
  enterDone: PropTypes.string,
  enterActive: PropTypes.string,
  exit: PropTypes.string,
  exitDone: PropTypes.string,
  exitActive: PropTypes.string
})]) : 0;

var TransitionGroupContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext(null);

var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || config.disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || config.disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : react_dom__WEBPACK_IMPORTED_MODULE_1__.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children;
        _this$props.in;
        _this$props.mountOnEnter;
        _this$props.unmountOnExit;
        _this$props.appear;
        _this$props.enter;
        _this$props.exit;
        _this$props.timeout;
        _this$props.addEndListener;
        _this$props.onEnter;
        _this$props.onEntering;
        _this$props.onEntered;
        _this$props.onExit;
        _this$props.onExiting;
        _this$props.onExited;
        _this$props.nodeRef;
        var childProps = _objectWithoutPropertiesLoose(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      react__WEBPACK_IMPORTED_MODULE_0__.createElement(TransitionGroupContext.Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(react__WEBPACK_IMPORTED_MODULE_0__.Children.only(children), childProps))
    );
  };

  return Transition;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

Transition.contextType = TransitionGroupContext;
Transition.propTypes =  true ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: PropTypes.shape({
    current: typeof Element === 'undefined' ? PropTypes.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return PropTypes.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: PropTypes.oneOfType([PropTypes.func.isRequired, PropTypes.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: PropTypes.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: PropTypes.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: PropTypes.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: PropTypes.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: PropTypes.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: PropTypes.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = timeoutsShape;
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: PropTypes.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: PropTypes.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: PropTypes.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: PropTypes.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: PropTypes.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: PropTypes.func
} : 0; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
var Transition$1 = Transition;

var _addClass = function addClass$1(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return addClass(node, c);
  });
};

var removeClass = function removeClass(node, classes) {
  return node && classes && classes.split(' ').forEach(function (c) {
    return removeClass$1(node, c);
  });
};
/**
 * A transition component inspired by the excellent
 * [ng-animate](https://docs.angularjs.org/api/ngAnimate) library, you should
 * use it if you're using CSS transitions or animations. It's built upon the
 * [`Transition`](https://reactcommunity.org/react-transition-group/transition)
 * component, so it inherits all of its props.
 *
 * `CSSTransition` applies a pair of class names during the `appear`, `enter`,
 * and `exit` states of the transition. The first class is applied and then a
 * second `*-active` class in order to activate the CSS transition. After the
 * transition, matching `*-done` class names are applied to persist the
 * transition state.
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <CSSTransition in={inProp} timeout={200} classNames="my-node">
 *         <div>
 *           {"I'll receive my-node-* classes"}
 *         </div>
 *       </CSSTransition>
 *       <button type="button" onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the `in` prop is set to `true`, the child component will first receive
 * the class `example-enter`, then the `example-enter-active` will be added in
 * the next tick. `CSSTransition` [forces a
 * reflow](https://github.com/reactjs/react-transition-group/blob/5007303e729a74be66a21c3e2205e4916821524b/src/CSSTransition.js#L208-L215)
 * between before adding the `example-enter-active`. This is an important trick
 * because it allows us to transition between `example-enter` and
 * `example-enter-active` even though they were added immediately one after
 * another. Most notably, this is what makes it possible for us to animate
 * _appearance_.
 *
 * ```css
 * .my-node-enter {
 *   opacity: 0;
 * }
 * .my-node-enter-active {
 *   opacity: 1;
 *   transition: opacity 200ms;
 * }
 * .my-node-exit {
 *   opacity: 1;
 * }
 * .my-node-exit-active {
 *   opacity: 0;
 *   transition: opacity 200ms;
 * }
 * ```
 *
 * `*-active` classes represent which styles you want to animate **to**, so it's
 * important to add `transition` declaration only to them, otherwise transitions
 * might not behave as intended! This might not be obvious when the transitions
 * are symmetrical, i.e. when `*-enter-active` is the same as `*-exit`, like in
 * the example above (minus `transition`), but it becomes apparent in more
 * complex transitions.
 *
 * **Note**: If you're using the
 * [`appear`](http://reactcommunity.org/react-transition-group/transition#Transition-prop-appear)
 * prop, make sure to define styles for `.appear-*` classes as well.
 */


var CSSTransition = /*#__PURE__*/function (_React$Component) {
  _inheritsLoose(CSSTransition, _React$Component);

  function CSSTransition() {
    var _this;

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
    _this.appliedClasses = {
      appear: {},
      enter: {},
      exit: {}
    };

    _this.onEnter = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument[0],
          appearing = _this$resolveArgument[1];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, appearing ? 'appear' : 'enter', 'base');

      if (_this.props.onEnter) {
        _this.props.onEnter(maybeNode, maybeAppearing);
      }
    };

    _this.onEntering = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument2 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument2[0],
          appearing = _this$resolveArgument2[1];

      var type = appearing ? 'appear' : 'enter';

      _this.addClass(node, type, 'active');

      if (_this.props.onEntering) {
        _this.props.onEntering(maybeNode, maybeAppearing);
      }
    };

    _this.onEntered = function (maybeNode, maybeAppearing) {
      var _this$resolveArgument3 = _this.resolveArguments(maybeNode, maybeAppearing),
          node = _this$resolveArgument3[0],
          appearing = _this$resolveArgument3[1];

      var type = appearing ? 'appear' : 'enter';

      _this.removeClasses(node, type);

      _this.addClass(node, type, 'done');

      if (_this.props.onEntered) {
        _this.props.onEntered(maybeNode, maybeAppearing);
      }
    };

    _this.onExit = function (maybeNode) {
      var _this$resolveArgument4 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument4[0];

      _this.removeClasses(node, 'appear');

      _this.removeClasses(node, 'enter');

      _this.addClass(node, 'exit', 'base');

      if (_this.props.onExit) {
        _this.props.onExit(maybeNode);
      }
    };

    _this.onExiting = function (maybeNode) {
      var _this$resolveArgument5 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument5[0];

      _this.addClass(node, 'exit', 'active');

      if (_this.props.onExiting) {
        _this.props.onExiting(maybeNode);
      }
    };

    _this.onExited = function (maybeNode) {
      var _this$resolveArgument6 = _this.resolveArguments(maybeNode),
          node = _this$resolveArgument6[0];

      _this.removeClasses(node, 'exit');

      _this.addClass(node, 'exit', 'done');

      if (_this.props.onExited) {
        _this.props.onExited(maybeNode);
      }
    };

    _this.resolveArguments = function (maybeNode, maybeAppearing) {
      return _this.props.nodeRef ? [_this.props.nodeRef.current, maybeNode] // here `maybeNode` is actually `appearing`
      : [maybeNode, maybeAppearing];
    };

    _this.getClassNames = function (type) {
      var classNames = _this.props.classNames;
      var isStringClassNames = typeof classNames === 'string';
      var prefix = isStringClassNames && classNames ? classNames + "-" : '';
      var baseClassName = isStringClassNames ? "" + prefix + type : classNames[type];
      var activeClassName = isStringClassNames ? baseClassName + "-active" : classNames[type + "Active"];
      var doneClassName = isStringClassNames ? baseClassName + "-done" : classNames[type + "Done"];
      return {
        baseClassName: baseClassName,
        activeClassName: activeClassName,
        doneClassName: doneClassName
      };
    };

    return _this;
  }

  var _proto = CSSTransition.prototype;

  _proto.addClass = function addClass(node, type, phase) {
    var className = this.getClassNames(type)[phase + "ClassName"];

    var _this$getClassNames = this.getClassNames('enter'),
        doneClassName = _this$getClassNames.doneClassName;

    if (type === 'appear' && phase === 'done' && doneClassName) {
      className += " " + doneClassName;
    } // This is to force a repaint,
    // which is necessary in order to transition styles when adding a class name.


    if (phase === 'active') {
      /* eslint-disable no-unused-expressions */
      node && node.scrollTop;
    }

    if (className) {
      this.appliedClasses[type][phase] = className;

      _addClass(node, className);
    }
  };

  _proto.removeClasses = function removeClasses(node, type) {
    var _this$appliedClasses$ = this.appliedClasses[type],
        baseClassName = _this$appliedClasses$.base,
        activeClassName = _this$appliedClasses$.active,
        doneClassName = _this$appliedClasses$.done;
    this.appliedClasses[type] = {};

    if (baseClassName) {
      removeClass(node, baseClassName);
    }

    if (activeClassName) {
      removeClass(node, activeClassName);
    }

    if (doneClassName) {
      removeClass(node, doneClassName);
    }
  };

  _proto.render = function render() {
    var _this$props = this.props;
        _this$props.classNames;
        var props = _objectWithoutPropertiesLoose(_this$props, ["classNames"]);

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Transition$1, _extends({}, props, {
      onEnter: this.onEnter,
      onEntered: this.onEntered,
      onEntering: this.onEntering,
      onExit: this.onExit,
      onExiting: this.onExiting,
      onExited: this.onExited
    }));
  };

  return CSSTransition;
}(react__WEBPACK_IMPORTED_MODULE_0__.Component);

CSSTransition.defaultProps = {
  classNames: ''
};
CSSTransition.propTypes =  true ? _extends({}, Transition$1.propTypes, {
  /**
   * The animation classNames applied to the component as it appears, enters,
   * exits or has finished the transition. A single name can be provided, which
   * will be suffixed for each stage, e.g. `classNames="fade"` applies:
   *
   * - `fade-appear`, `fade-appear-active`, `fade-appear-done`
   * - `fade-enter`, `fade-enter-active`, `fade-enter-done`
   * - `fade-exit`, `fade-exit-active`, `fade-exit-done`
   *
   * A few details to note about how these classes are applied:
   *
   * 1. They are _joined_ with the ones that are already defined on the child
   *    component, so if you want to add some base styles, you can use
   *    `className` without worrying that it will be overridden.
   *
   * 2. If the transition component mounts with `in={false}`, no classes are
   *    applied yet. You might be expecting `*-exit-done`, but if you think
   *    about it, a component cannot finish exiting if it hasn't entered yet.
   *
   * 2. `fade-appear-done` and `fade-enter-done` will _both_ be applied. This
   *    allows you to define different behavior for when appearing is done and
   *    when regular entering is done, using selectors like
   *    `.fade-enter-done:not(.fade-appear-done)`. For example, you could apply
   *    an epic entrance animation when element first appears in the DOM using
   *    [Animate.css](https://daneden.github.io/animate.css/). Otherwise you can
   *    simply use `fade-enter-done` for defining both cases.
   *
   * Each individual classNames can also be specified independently like:
   *
   * ```js
   * classNames={{
   *  appear: 'my-appear',
   *  appearActive: 'my-active-appear',
   *  appearDone: 'my-done-appear',
   *  enter: 'my-enter',
   *  enterActive: 'my-active-enter',
   *  enterDone: 'my-done-enter',
   *  exit: 'my-exit',
   *  exitActive: 'my-active-exit',
   *  exitDone: 'my-done-exit',
   * }}
   * ```
   *
   * If you want to set these classes using CSS Modules:
   *
   * ```js
   * import styles from './styles.css';
   * ```
   *
   * you might want to use camelCase in your CSS file, that way could simply
   * spread them instead of listing them one by one:
   *
   * ```js
   * classNames={{ ...styles }}
   * ```
   *
   * @type {string | {
   *  appear?: string,
   *  appearActive?: string,
   *  appearDone?: string,
   *  enter?: string,
   *  enterActive?: string,
   *  enterDone?: string,
   *  exit?: string,
   *  exitActive?: string,
   *  exitDone?: string,
   * }}
   */
  classNames: classNamesShape,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or 'appear' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEnter: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter-active' or
   * 'appear-active' class is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'enter' or
   * 'appear' classes are **removed** and the `done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntered: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' class is
   * applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExit: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit-active' is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExiting: PropTypes.func,

  /**
   * A `<Transition>` callback fired immediately after the 'exit' classes
   * are **removed** and the `exit-done` class is added to the DOM node.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement)
   */
  onExited: PropTypes.func
}) : 0;
var CSSTransition$1 = CSSTransition;

// code borrowed from https://github.com/reach/reach-ui
function useForkedRef() {
    var refs = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        refs[_i] = arguments[_i];
    }
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(function () {
        if (refs.every(function (ref) { return ref == null; })) {
            return null;
        }
        return function (node) {
            refs.forEach(function (ref) {
                assignRef(ref, node);
            });
        };
    }, refs);
}
function assignRef(ref, value) {
    if (ref == null)
        return;
    if (isFunction(ref)) {
        ref(value);
    }
    else {
        try {
            ref.current = value;
        }
        catch (error) {
            throw new Error("Cannot assign value \"" + value + "\" to ref \"" + ref + "\"");
        }
    }
}
function isFunction(value) {
    return !!(value && {}.toString.call(value) == '[object Function]');
}

var CCollapse = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, visible = _a.visible, rest = __rest(_a, ["children", "className", "visible"]);
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), height = _b[0], setHeight = _b[1];
    var collapseRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var forkedRef = useForkedRef(ref, collapseRef);
    var getTransitionClass = function (state) {
        return state === 'entering'
            ? 'collapsing'
            : state === 'entered'
                ? 'collapse show'
                : state === 'exiting'
                    ? 'collapsing'
                    : 'collapse';
    };
    var onEntering = function () {
        collapseRef && collapseRef.current && setHeight(collapseRef.current.scrollHeight);
    };
    var onEntered = function () {
        setHeight(0);
    };
    var onExit = function () {
        collapseRef && collapseRef.current && setHeight(collapseRef.current.scrollHeight);
    };
    var onExiting = function () {
        setHeight(0);
    };
    var onExited = function () {
        setHeight(0);
    };
    var _className = classNames(className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CSSTransition$1, { in: visible, timeout: 350, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited }, function (state) {
        var transitionClass = getTransitionClass(state);
        var currentHeight = height === 0 ? null : { height: height };
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: classNames(_className, transitionClass), style: __assign({}, currentHeight) }, rest, { ref: forkedRef }), children));
    }));
});
CCollapse.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    visible: PropTypes.bool,
};
CCollapse.displayName = 'CCollapse';

var CAccordionCollapse = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCollapse, __assign({ className: "accordion-collapse" }, props, { ref: ref }), children));
});
CAccordionCollapse.propTypes = {
    children: PropTypes.node,
};
CAccordionCollapse.displayName = 'CAccordionCollapse';

var CAccordionHeader = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('accordion-header', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CAccordionHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CAccordionHeader.displayName = 'CAccordionHeader';

var CAccordionItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('accordion-item', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CAccordionItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CAccordionItem.displayName = 'CAccordionItem';

var colorPropType = PropTypes.oneOfType([
    PropTypes.oneOf([
        'primary',
        'secondary',
        'success',
        'danger',
        'warning',
        'info',
        'dark',
        'light',
    ]),
    PropTypes.string,
]);
var placementPropType = PropTypes.oneOf([
    'auto',
    'auto-start',
    'auto-end',
    'top-end',
    'top',
    'top-start',
    'bottom-end',
    'bottom',
    'bottom-start',
    'right-start',
    'right',
    'right-end',
    'left-start',
    'left',
    'left-end',
]);
var shapePropType = PropTypes.oneOfType([
    PropTypes.oneOf([
        'rounded',
        'rounded-top',
        'rounded-end',
        'rounded-bottom',
        'rounded-start',
        'rounded-circle',
        'rounded-pill',
        'rounded-0',
        'rounded-1',
        'rounded-2',
        'rounded-3',
    ]),
    PropTypes.string,
]);
var textColorsPropType = PropTypes.oneOfType([
    colorPropType,
    PropTypes.oneOf(['white', 'muted']),
    PropTypes.string,
]);
var triggerPropType = PropTypes.oneOf(['hover', 'focus', 'click']);

var CCloseButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var className = _a.className, disabled = _a.disabled, white = _a.white, rest = __rest(_a, ["className", "disabled", "white"]);
    var _className = classNames('btn', 'btn-close', {
        'btn-close-white': white,
    }, disabled, className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", __assign({ className: _className, "aria-label": "Close", disabled: disabled }, rest, { ref: ref })));
});
CCloseButton.propTypes = {
    className: PropTypes.string,
    disabled: PropTypes.bool,
    white: PropTypes.bool,
};
CCloseButton.displayName = 'CCloseButton';

var CAlert = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, _b = _a.color, color = _b === void 0 ? 'primary' : _b, dismissible = _a.dismissible, variant = _a.variant, _c = _a.visible, visible = _c === void 0 ? true : _c, onDismiss = _a.onDismiss, onDismissed = _a.onDismissed, rest = __rest(_a, ["children", "className", "color", "dismissible", "variant", "visible", "onDismiss", "onDismissed"]);
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(visible), _visible = _d[0], setVisible = _d[1];
    var _className = classNames('alert', variant === 'solid' ? "bg-" + color + " text-white" : "alert-" + color, {
        'alert-dismissible fade': dismissible,
        show: _visible && dismissible,
    }, className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CSSTransition$1, { in: _visible, timeout: 150, onExit: onDismiss, onExited: onDismissed, unmountOnExit: true },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className, role: "alert" }, rest, { ref: ref }),
            children,
            dismissible && react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCloseButton, { onClick: function () { return setVisible(false); } }))));
});
CAlert.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType.isRequired,
    dismissible: PropTypes.bool,
    onDismiss: PropTypes.func,
    onDismissed: PropTypes.func,
    variant: PropTypes.string,
    visible: PropTypes.bool,
};
CAlert.displayName = 'CAlert';

var CAlertHeading = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, _b = _a.component, Component = _b === void 0 ? 'h4' : _b, rest = __rest(_a, ["children", "className", "component"]);
    var _className = classNames('alert-heading', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), children));
});
CAlertHeading.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CAlertHeading.displayName = 'CAlertHeading';

var CLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, active = _a.active, className = _a.className, _b = _a.component, Component = _b === void 0 ? 'a' : _b, disabled = _a.disabled, rest = __rest(_a, ["children", "active", "className", "component", "disabled"]);
    // TODO: remove duplicated classes ex. `active active` in `<CListGroupItem>`
    var _className = classNames(className, { active: active, disabled: disabled });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, (active && { 'aria-current': 'page' }), (Component === 'a' && disabled && { 'aria-disabled': true, tabIndex: -1 }), ((Component === 'a' || Component === 'button') && {
        onClick: function (event) {
            event.preventDefault;
            !disabled && rest.onClick && rest.onClick(event);
        },
    }), { disabled: disabled }, rest, { ref: ref }), children));
});
CLink.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
    disabled: PropTypes.bool,
};
CLink.displayName = 'CLink';

var CAlertLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('alert-link', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CLink, __assign({ className: _className }, rest, { ref: ref }), children));
});
CAlertLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CAlertLink.displayName = 'CAlertLink';

var CAvatar = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, color = _a.color, shape = _a.shape, size = _a.size, src = _a.src, status = _a.status, textColor = _a.textColor, rest = __rest(_a, ["children", "className", "color", "shape", "size", "src", "status", "textColor"]);
    var _className = classNames('avatar', (_b = {},
        _b["bg-" + color] = color,
        _b["avatar-" + size] = size,
        _b["text-" + textColor] = textColor,
        _b), shape, className);
    var statusClassName = status && classNames('avatar-status', "bg-" + status);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }),
        src ? react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", { src: src, className: "avatar-img" }) : children,
        status && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: statusClassName })));
});
CAvatar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
    shape: shapePropType,
    size: PropTypes.string,
    src: PropTypes.string,
    status: PropTypes.string,
    textColor: textColorsPropType,
};
CAvatar.displayName = 'CAvatar';

var CBadge = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, color = _a.color, _c = _a.component, Component = _c === void 0 ? 'span' : _c, shape = _a.shape, size = _a.size, textColor = _a.textColor, rest = __rest(_a, ["children", "className", "color", "component", "shape", "size", "textColor"]);
    var _className = classNames('badge', (_b = {},
        _b["bg-" + color] = color,
        _b["text-" + textColor] = textColor,
        _b["badge-" + size] = size,
        _b), shape, className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), children));
});
CBadge.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
    component: PropTypes.string,
    shape: shapePropType,
    size: PropTypes.oneOf(['sm']),
    textColor: textColorsPropType,
};
CBadge.displayName = 'CBadge';

var CBackdrop = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b = _a.className, className = _b === void 0 ? 'modal-backdrop' : _b, visible = _a.visible, rest = __rest(_a, ["className", "visible"]);
    var _className = classNames(className, 'fade');
    var getTransitionClass = function (state) {
        return state === 'entered' && 'show';
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CSSTransition$1, { in: visible, timeout: 150, mountOnEnter: true, unmountOnExit: true }, function (state) {
        var transitionClass = getTransitionClass(state);
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: classNames(_className, transitionClass) }, rest, { ref: ref }));
    }));
});
CBackdrop.propTypes = {
    className: PropTypes.string,
    visible: PropTypes.bool,
};
CBackdrop.displayName = 'CBackdrop';

var CBreadcrumb = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('breadcrumb', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", { "aria-label": "breadcrumb" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", __assign({ className: _className }, rest, { ref: ref }), children)));
});
CBreadcrumb.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CBreadcrumb.displayName = 'CBreadcrumb';

var CBreadcrumbItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, active = _a.active, className = _a.className, href = _a.href, rest = __rest(_a, ["children", "active", "className", "href"]);
    var _className = classNames('breadcrumb-item', {
        active: active,
    }, className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", __assign({ className: _className }, (active && { 'aria-current': 'page' }), rest, { ref: ref }), href ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(CLink, { href: href }, children) : children));
});
CBreadcrumbItem.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    href: PropTypes.string,
};
CBreadcrumbItem.displayName = 'CBreadcrumbItem';

var CButton = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, _c = _a.color, color = _c === void 0 ? 'primary' : _c, _d = _a.component, component = _d === void 0 ? 'button' : _d, shape = _a.shape, size = _a.size, _e = _a.type, type = _e === void 0 ? 'button' : _e, variant = _a.variant, rest = __rest(_a, ["children", "className", "color", "component", "shape", "size", "type", "variant"]);
    var _className = classNames('btn', variant ? "btn-" + variant + "-" + color : "btn-" + color, (_b = {}, _b["btn-" + size] = size, _b), shape, className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CLink, __assign({ component: rest.href ? 'a' : component, type: type, className: _className }, rest, { ref: ref }), children));
});
CButton.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
    component: PropTypes.elementType,
    shape: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'lg']),
    type: PropTypes.oneOf(['button', 'submit', 'reset']),
    variant: PropTypes.oneOf(['outline', 'ghost']),
};
CButton.displayName = 'CButton';

var CButtonGroup = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, size = _a.size, vertical = _a.vertical, rest = __rest(_a, ["children", "className", "size", "vertical"]);
    var _className = classNames(vertical ? 'btn-group-vertical' : 'btn-group', (_b = {}, _b["btn-group-" + size] = size, _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CButtonGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'lg']),
    vertical: PropTypes.bool,
};
CButtonGroup.displayName = 'CButtonGroup';

var CButtonToolbar = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('btn-toolbar', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CButtonToolbar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CButtonToolbar.displayName = 'CButtonToolbar';

var CCallout = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
    var _className = classNames('callout', (_b = {},
        _b["callout-" + color] = color,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CCallout.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
};
CCallout.displayName = 'CCallout';

var CCard = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, color = _a.color, textColor = _a.textColor, rest = __rest(_a, ["children", "className", "color", "textColor"]);
    var _className = classNames('card', (_b = {},
        _b["bg-" + color] = color,
        _b["text-" + textColor] = textColor,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CCard.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
    textColor: PropTypes.string,
};
CCard.displayName = 'CCard';

var CCardBody = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('card-body', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CCardBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CCardBody.displayName = 'CCardBody';

var CCardFooter = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('card-footer', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CCardFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CCardFooter.displayName = 'CCardFooter';

var CCardGroup = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('card-group', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CCardGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CCardGroup.displayName = 'CCardGroup';

var CCardHeader = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, _b = _a.component, Component = _b === void 0 ? 'div' : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
    var _className = classNames('card-header', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), children));
});
CCardHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CCardHeader.displayName = 'CCardHeader';

var CCardImage = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, _b = _a.component, Component = _b === void 0 ? 'img' : _b, orientation = _a.orientation, rest = __rest(_a, ["children", "className", "component", "orientation"]);
    var _className = classNames(orientation ? "card-img-" + orientation : 'card-img', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), children));
});
CCardImage.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
    orientation: PropTypes.oneOf(['top', 'bottom']),
};
CCardImage.displayName = 'CCardImage';

var CCardImageOverlay = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('card-img-overlay', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CCardImageOverlay.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CCardImageOverlay.displayName = 'CCardImageOverlay';

var CCardLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('card-link', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CLink, __assign({ className: _className }, rest, { ref: ref }), children));
});
CCardLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CCardLink.displayName = 'CCardLink';

var CCardSubtitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, _b = _a.component, Component = _b === void 0 ? 'h6' : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
    var _className = classNames('card-subtitle', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), children));
});
CCardSubtitle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CCardSubtitle.displayName = 'CCardSubtitle';

var CCardText = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, _b = _a.component, Component = _b === void 0 ? 'p' : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
    var _className = classNames('card-text', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), children));
});
CCardText.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CCardText.displayName = 'CCardText';

var CCardTitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, _b = _a.component, Component = _b === void 0 ? 'h5' : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
    var _className = classNames('card-title', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), children));
});
CCardTitle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CCardTitle.displayName = 'CCardTitle';

var CCarouselControl = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var className = _a.className, children = _a.children, direction = _a.direction, rest = __rest(_a, ["className", "children", "direction"]);
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CCarouselContext), state = _b.state, setState = _b.setState, itemsNumber = _b.itemsNumber, animating = _b.animating;
    var onClick = function () {
        if (animating) {
            return;
        }
        var newIdx;
        if (direction === 'next') {
            newIdx = itemsNumber === state[1] + 1 ? 0 : state[1] + 1;
        }
        else {
            newIdx = state[1] === 0 ? itemsNumber - 1 : state[1] - 1;
        }
        setState([state[1], newIdx, direction]);
    };
    var anchorClasses = classNames("carousel-control-" + direction, className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", __assign({ className: anchorClasses }, rest, { onClick: onClick, ref: ref }), children || (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "carousel-control-" + direction + "-icon", "aria-label": direction }))));
});
CCarouselControl.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    direction: PropTypes.oneOf(['prev', 'next']).isRequired,
};
CCarouselControl.displayName = 'CCarouselControl';

var CCarouselIndicators = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var className = _a.className, _b = _a.indicatorsClass, indicatorsClass = _b === void 0 ? 'carousel-indicators' : _b;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CCarouselContext), itemsNumber = _c.itemsNumber, state = _c.state, setState = _c.setState, animating = _c.animating;
    var listClasses = classNames(indicatorsClass, className);
    var indicators = Array.from({ length: itemsNumber }, function (_, i) { return i; }).map(function (key) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: "indicator" + key, onClick: function () {
                !animating && key !== state[1] && setState([state[1], key]);
            }, className: state[1] === key ? 'active' : '', "data-coreui-target": "" }));
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("ol", { className: listClasses, ref: ref }, indicators));
});
CCarouselIndicators.propTypes = {
    className: PropTypes.string,
    indicatorsClass: PropTypes.string,
};
CCarouselIndicators.displayName = 'CCarouselIndicators';

var CCarouselInner = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var setItemsNumber = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CCarouselContext).setItemsNumber;
    var _className = classNames('carousel-inner', className);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        setItemsNumber(react__WEBPACK_IMPORTED_MODULE_0__.Children.toArray(children).length);
    });
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (child, index) {
        if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)) {
            return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, { key: index, idx: index });
        }
        return;
    })));
});
CCarouselInner.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CCarouselInner.displayName = 'CCarouselInner';

var CCarouselContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var CCarousel = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, _b = _a.animate, animate = _b === void 0 ? true : _b, className = _a.className, controls = _a.controls, dark = _a.dark, _c = _a.index, index = _c === void 0 ? 0 : _c, indicators = _a.indicators, _d = _a.interval, interval = _d === void 0 ? 5000 : _d, onSlideChange = _a.onSlideChange, transition = _a.transition, rest = __rest(_a, ["children", "animate", "className", "controls", "dark", "index", "indicators", "interval", "onSlideChange", "transition"]);
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([null, index]), state = _e[0], setState = _e[1];
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(0), itemsNumber = _f[0], setItemsNumber = _f[1];
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), animating = _g[0], setAnimating = _g[1];
    var data = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)({}).current;
    var cycle = function () {
        pause();
        if (typeof interval === 'number') {
            data.timeout = setTimeout(function () { return nextItem(); }, interval);
        }
    };
    var pause = function () { return data.timeout && clearTimeout(data.timeout); };
    var nextItem = function () {
        if (typeof state[1] === 'number')
            setState([state[1], itemsNumber === state[1] + 1 ? 0 : state[1] + 1, 'next']);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        setState([state[1], index]);
    }, [index]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        onSlideChange && onSlideChange(state[1]);
        cycle();
        return function () {
            pause();
        };
    }, [state]);
    var _className = classNames('carousel slide', transition === 'crossfade' && 'carousel-fade', dark && 'carousel-dark', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className, onMouseEnter: pause, onMouseLeave: cycle }, rest, { ref: ref }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCarouselContext.Provider, { value: {
                state: state,
                setState: setState,
                animate: animate,
                itemsNumber: itemsNumber,
                setItemsNumber: setItemsNumber,
                animating: animating,
                setAnimating: setAnimating,
            } },
            indicators && react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCarouselIndicators, null),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCarouselInner, null, children),
            controls && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCarouselControl, { direction: "prev" }),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCarouselControl, { direction: "next" }))))));
});
CCarousel.propTypes = {
    animate: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    controls: PropTypes.bool,
    dark: PropTypes.bool,
    index: PropTypes.number,
    indicators: PropTypes.bool,
    interval: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    onSlideChange: PropTypes.func,
    transition: PropTypes.oneOf(['slide', 'crossfade']),
};
CCarousel.displayName = 'CCarousel';

var CCarouselCaption = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var className = _a.className, rest = __rest(_a, ["className"]);
    var _className = classNames('carousel-caption', className);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }));
});
CCarouselCaption.propTypes = {
    className: PropTypes.string,
};
CCarouselCaption.displayName = 'CCarouselCaption';

// eslint-disable-next-line @typescript-eslint/ban-types
var getDirection = function (state) {
    if (state[2]) {
        return state[2] === 'next' ? 'right' : 'left';
    }
    else {
        return state[1] > state[0] ? 'right' : 'left';
    }
};
var CCarouselItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, idx = _a.idx, rest = __rest(_a, ["children", "className", "idx"]);
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CCarouselContext), animate = _b.animate, state = _b.state, animating = _b.animating, setAnimating = _b.setAnimating;
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), isIn = _c[0], setIsIn = _c[1];
    var onEnter = function () {
        setAnimating(false);
    };
    var onEntering = function () {
        setAnimating(true);
    };
    var onExit = function () {
        setAnimating(false);
    };
    var onExiting = function () {
        setAnimating(true);
    };
    var onExited = function () {
        setAnimating(false);
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        setIsIn(state[1] === idx);
    }, [state]);
    if (!animate || state[0] === null) {
        var itemClasses = classNames('carousel-item', isIn && 'active', className);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: itemClasses, ref: ref }, rest), children));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CSSTransition$1, { timeout: 600, in: isIn, onEnter: onEnter, onEntering: onEntering, onExit: onExit, onExiting: onExiting, onExited: onExited, nodeRef: ref }, function (status) {
        var direction = getDirection(state);
        var isActive = status === 'entered' || status === 'exiting';
        var directionClassName = (status === 'entering' || status === 'exiting') &&
            animating &&
            (direction === 'right' ? 'carousel-item-start' : 'carousel-item-end');
        var orderClassName = status === 'entering' &&
            (direction === 'right' ? 'carousel-item-next' : 'carousel-item-prev');
        var itemClasses = classNames('carousel-item', isActive && 'active', orderClassName, directionClassName, className);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: itemClasses, ref: ref }, rest), children));
    }));
});
CCarouselItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    idx: PropTypes.number,
};
CCarouselItem.displayName = 'CCarouselItem';

var ManagerReferenceNodeContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext();
var ManagerReferenceNodeSetterContext = react__WEBPACK_IMPORTED_MODULE_0__.createContext();
function Manager(_ref) {
  var children = _ref.children;

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      referenceNode = _React$useState[0],
      setReferenceNode = _React$useState[1];

  var hasUnmounted = react__WEBPACK_IMPORTED_MODULE_0__.useRef(false);
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    return function () {
      hasUnmounted.current = true;
    };
  }, []);
  var handleSetReferenceNode = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (node) {
    if (!hasUnmounted.current) {
      setReferenceNode(node);
    }
  }, []);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ManagerReferenceNodeContext.Provider, {
    value: referenceNode
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(ManagerReferenceNodeSetterContext.Provider, {
    value: handleSetReferenceNode
  }, children));
}

/**
 * Takes an argument and if it's an array, returns the first item in the array,
 * otherwise returns the argument. Used for Preact compatibility.
 */
var unwrapArray = function unwrapArray(arg) {
  return Array.isArray(arg) ? arg[0] : arg;
};
/**
 * Takes a maybe-undefined function and arbitrary args and invokes the function
 * only if it is defined.
 */

var safeInvoke = function safeInvoke(fn) {
  if (typeof fn === 'function') {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return fn.apply(void 0, args);
  }
};
/**
 * Sets a ref using either a ref callback or a ref object
 */

var setRef = function setRef(ref, node) {
  // if its a function call it
  if (typeof ref === 'function') {
    return safeInvoke(ref, node);
  } // otherwise we should treat it as a ref object
  else if (ref != null) {
      ref.current = node;
    }
};
/**
 * Simple ponyfill for Object.fromEntries
 */

var fromEntries = function fromEntries(entries) {
  return entries.reduce(function (acc, _ref) {
    var key = _ref[0],
        value = _ref[1];
    acc[key] = value;
    return acc;
  }, {});
};
/**
 * Small wrapper around `useLayoutEffect` to get rid of the warning on SSR envs
 */

var useIsomorphicLayoutEffect = typeof window !== 'undefined' && window.document && window.document.createElement ? react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect : react__WEBPACK_IMPORTED_MODULE_0__.useEffect;

var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

function isElement(node) {
  var OwnElement = getWindow(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = getWindow(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = getWindow(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}

// and applies them to the HTMLElements such as popper and arrow

function applyStyles(_ref) {
  var state = _ref.state;
  Object.keys(state.elements).forEach(function (name) {
    var style = state.styles[name] || {};
    var attributes = state.attributes[name] || {};
    var element = state.elements[name]; // arrow is optional + virtual elements

    if (!isHTMLElement(element) || !getNodeName(element)) {
      return;
    } // Flow doesn't support to extend this property, but it's the most
    // effective way to apply styles to an HTMLElement
    // $FlowFixMe[cannot-write]


    Object.assign(element.style, style);
    Object.keys(attributes).forEach(function (name) {
      var value = attributes[name];

      if (value === false) {
        element.removeAttribute(name);
      } else {
        element.setAttribute(name, value === true ? '' : value);
      }
    });
  });
}

function effect$2(_ref2) {
  var state = _ref2.state;
  var initialStyles = {
    popper: {
      position: state.options.strategy,
      left: '0',
      top: '0',
      margin: '0'
    },
    arrow: {
      position: 'absolute'
    },
    reference: {}
  };
  Object.assign(state.elements.popper.style, initialStyles.popper);
  state.styles = initialStyles;

  if (state.elements.arrow) {
    Object.assign(state.elements.arrow.style, initialStyles.arrow);
  }

  return function () {
    Object.keys(state.elements).forEach(function (name) {
      var element = state.elements[name];
      var attributes = state.attributes[name] || {};
      var styleProperties = Object.keys(state.styles.hasOwnProperty(name) ? state.styles[name] : initialStyles[name]); // Set all values to an empty string to unset them

      var style = styleProperties.reduce(function (style, property) {
        style[property] = '';
        return style;
      }, {}); // arrow is optional + virtual elements

      if (!isHTMLElement(element) || !getNodeName(element)) {
        return;
      }

      Object.assign(element.style, style);
      Object.keys(attributes).forEach(function (attribute) {
        element.removeAttribute(attribute);
      });
    });
  };
} // eslint-disable-next-line import/no-unused-modules


var applyStyles$1 = {
  name: 'applyStyles',
  enabled: true,
  phase: 'write',
  fn: applyStyles,
  effect: effect$2,
  requires: ['computeStyles']
};

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

var round$1 = Math.round;
function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (isHTMLElement(element) && includeScale) {
    // Fallback to 1 in case both values are `0`
    scaleX = rect.width / element.offsetWidth || 1;
    scaleY = rect.height / element.offsetHeight || 1;
  }

  return {
    width: round$1(rect.width / scaleX),
    height: round$1(rect.height / scaleY),
    top: round$1(rect.top / scaleY),
    right: round$1(rect.right / scaleX),
    bottom: round$1(rect.bottom / scaleY),
    left: round$1(rect.left / scaleX),
    x: round$1(rect.left / scaleX),
    y: round$1(rect.top / scaleY)
  };
}

// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = getBoundingClientRect(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && isShadowRoot(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

function getComputedStyle$1(element) {
  return getWindow(element).getComputedStyle(element);
}

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(getNodeName(element)) >= 0;
}

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((isElement(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

function getParentNode(element) {
  if (getNodeName(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    isShadowRoot(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    getDocumentElement(element) // fallback

  );
}

function getTrueOffsetParent(element) {
  if (!isHTMLElement(element) || // https://github.com/popperjs/popper-core/issues/837
  getComputedStyle$1(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && isHTMLElement(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = getComputedStyle$1(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = getParentNode(element);

  while (isHTMLElement(currentNode) && ['html', 'body'].indexOf(getNodeName(currentNode)) < 0) {
    var css = getComputedStyle$1(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = getWindow(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

var max = Math.max;
var min = Math.min;
var round = Math.round;

function within(min$1, value, max$1) {
  return max(min$1, min(value, max$1));
}

function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

function mergePaddingObject(paddingObject) {
  return Object.assign({}, getFreshSideObject(), paddingObject);
}

function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = getBasePlacement(state.placement);
  var axis = getMainAxisFromPlacement(basePlacement);
  var isVertical = [left, right].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = getLayoutRect(arrowElement);
  var minProp = axis === 'y' ? top : left;
  var maxProp = axis === 'y' ? bottom : right;
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = getOffsetParent(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = within(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect$1(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (true) {
    if (!isHTMLElement(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!contains(state.elements.popper, arrowElement)) {
    if (true) {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


var arrow$1 = {
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect$1,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
};

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: round(round(x * dpr) / dpr) || 0,
    y: round(round(y * dpr) / dpr) || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets;

  var _ref3 = roundOffsets === true ? roundOffsetsByDPR(offsets) : typeof roundOffsets === 'function' ? roundOffsets(offsets) : offsets,
      _ref3$x = _ref3.x,
      x = _ref3$x === void 0 ? 0 : _ref3$x,
      _ref3$y = _ref3.y,
      y = _ref3$y === void 0 ? 0 : _ref3$y;

  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = left;
  var sideY = top;
  var win = window;

  if (adaptive) {
    var offsetParent = getOffsetParent(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === getWindow(popper)) {
      offsetParent = getDocumentElement(popper);

      if (getComputedStyle$1(offsetParent).position !== 'static') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === top) {
      sideY = bottom; // $FlowFixMe[prop-missing]

      y -= offsetParent[heightProp] - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === left) {
      sideX = right; // $FlowFixMe[prop-missing]

      x -= offsetParent[widthProp] - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) < 2 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref4) {
  var state = _ref4.state,
      options = _ref4.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (true) {
    var transitionProperty = getComputedStyle$1(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: getBasePlacement(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var computeStyles$1 = {
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
};

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = getWindow(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


var eventListeners = {
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
};

var hash$1 = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash$1[matched];
  });
}

var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

function getWindowScroll(node) {
  var win = getWindow(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return getBoundingClientRect(getDocumentElement(element)).left + getWindowScroll(element).scrollLeft;
}

function getViewportRect(element) {
  var win = getWindow(element);
  var html = getDocumentElement(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + getWindowScrollBarX(element),
    y: y
  };
}

// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = getDocumentElement(element);
  var winScroll = getWindowScroll(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = max(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = max(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + getWindowScrollBarX(element);
  var y = -winScroll.scrollTop;

  if (getComputedStyle$1(body || html).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = getComputedStyle$1(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(getNodeName(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (isHTMLElement(node) && isScrollParent(node)) {
    return node;
  }

  return getScrollParent(getParentNode(node));
}

/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = getScrollParent(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = getWindow(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], isScrollParent(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(getParentNode(target)));
}

function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

function getInnerBoundingClientRect(element) {
  var rect = getBoundingClientRect(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === viewport ? rectToClientRect(getViewportRect(element)) : isHTMLElement(clippingParent) ? getInnerBoundingClientRect(clippingParent) : rectToClientRect(getDocumentRect(getDocumentElement(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = listScrollParents(getParentNode(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(getComputedStyle$1(element).position) >= 0;
  var clipperElement = canEscapeClipping && isHTMLElement(element) ? getOffsetParent(element) : element;

  if (!isElement(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return isElement(clippingParent) && contains(clippingParent, clipperElement) && getNodeName(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = max(rect.top, accRect.top);
    accRect.right = min(rect.right, accRect.right);
    accRect.bottom = min(rect.bottom, accRect.bottom);
    accRect.left = max(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

function getVariation(placement) {
  return placement.split('-')[1];
}

function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? getBasePlacement(placement) : null;
  var variation = placement ? getVariation(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case top:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case bottom:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case right:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case left:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? getMainAxisFromPlacement(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case start:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case end:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;
    }
  }

  return offsets;
}

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? clippingParents : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? viewport : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? popper : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = mergePaddingObject(typeof padding !== 'number' ? padding : expandToHashMap(padding, basePlacements));
  var altContext = elementContext === popper ? reference : popper;
  var referenceElement = state.elements.reference;
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = getClippingRect(isElement(element) ? element : element.contextElement || getDocumentElement(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = getBoundingClientRect(referenceElement);
  var popperOffsets = computeOffsets({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = rectToClientRect(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === popper ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === popper && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [right, bottom].indexOf(key) >= 0 ? 1 : -1;
      var axis = [top, bottom].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? placements : _options$allowedAutoP;
  var variation = getVariation(placement);
  var placements$1 = variation ? flipVariations ? variationPlacements : variationPlacements.filter(function (placement) {
    return getVariation(placement) === variation;
  }) : basePlacements;
  var allowedPlacements = placements$1.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements$1;

    if (true) {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[getBasePlacement(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}

function getExpandedFallbackPlacements(placement) {
  if (getBasePlacement(placement) === auto) {
    return [];
  }

  var oppositePlacement = getOppositePlacement(placement);
  return [getOppositeVariationPlacement(placement), oppositePlacement, getOppositeVariationPlacement(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = getBasePlacement(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [getOppositePlacement(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(getBasePlacement(placement) === auto ? computeAutoPlacement(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = getBasePlacement(placement);

    var isStartVariation = getVariation(placement) === start;
    var isVertical = [top, bottom].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = detectOverflow(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? right : left : isStartVariation ? bottom : top;

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = getOppositePlacement(mainVariationSide);
    }

    var altVariationSide = getOppositePlacement(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


var flip$1 = {
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
};

function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [top, right, bottom, left].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = detectOverflow(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = detectOverflow(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


var hide$1 = {
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
};

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = getBasePlacement(placement);
  var invertDistance = [left, top].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [left, right].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = placements.reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var offset$1 = {
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
};

function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = computeOffsets({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


var popperOffsets$1 = {
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
};

function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = detectOverflow(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = getBasePlacement(state.placement);
  var variation = getVariation(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = getMainAxisFromPlacement(basePlacement);
  var altAxis = getAltAxis(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis || checkAltAxis) {
    var mainSide = mainAxis === 'y' ? top : left;
    var altSide = mainAxis === 'y' ? bottom : right;
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min$1 = popperOffsets[mainAxis] + overflow[mainSide];
    var max$1 = popperOffsets[mainAxis] - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === start ? referenceRect[len] : popperRect[len];
    var maxLen = variation === start ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? getLayoutRect(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : getFreshSideObject();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = within(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - tetherOffsetValue : minLen - arrowLen - arrowPaddingMin - tetherOffsetValue;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + tetherOffsetValue : maxLen + arrowLen + arrowPaddingMax + tetherOffsetValue;
    var arrowOffsetParent = state.elements.arrow && getOffsetParent(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = state.modifiersData.offset ? state.modifiersData.offset[state.placement][mainAxis] : 0;
    var tetherMin = popperOffsets[mainAxis] + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = popperOffsets[mainAxis] + maxOffset - offsetModifierValue;

    if (checkMainAxis) {
      var preventedOffset = within(tether ? min(min$1, tetherMin) : min$1, offset, tether ? max(max$1, tetherMax) : max$1);
      popperOffsets[mainAxis] = preventedOffset;
      data[mainAxis] = preventedOffset - offset;
    }

    if (checkAltAxis) {
      var _mainSide = mainAxis === 'x' ? top : left;

      var _altSide = mainAxis === 'x' ? bottom : right;

      var _offset = popperOffsets[altAxis];

      var _min = _offset + overflow[_mainSide];

      var _max = _offset - overflow[_altSide];

      var _preventedOffset = within(tether ? min(_min, tetherMin) : _min, _offset, tether ? max(_max, tetherMax) : _max);

      popperOffsets[altAxis] = _preventedOffset;
      data[altAxis] = _preventedOffset - _offset;
    }
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


var preventOverflow$1 = {
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
};

function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

function getNodeScroll(node) {
  if (node === getWindow(node) || !isHTMLElement(node)) {
    return getWindowScroll(node);
  } else {
    return getHTMLElementScroll(node);
  }
}

function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = rect.width / element.offsetWidth || 1;
  var scaleY = rect.height / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = isHTMLElement(offsetParent);
  var offsetParentIsScaled = isHTMLElement(offsetParent) && isElementScaled(offsetParent);
  var documentElement = getDocumentElement(offsetParent);
  var rect = getBoundingClientRect(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (getNodeName(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    isScrollParent(documentElement)) {
      scroll = getNodeScroll(offsetParent);
    }

    if (isHTMLElement(offsetParent)) {
      offsets = getBoundingClientRect(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = getWindowScrollBarX(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return modifierPhases.reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    Object.keys(modifier).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(format(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

        case 'phase':
          if (modifierPhases.indexOf(modifier.phase) < 0) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + modifierPhases.join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (typeof modifier.effect !== 'function') {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (!Array.isArray(modifier.requires)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(format(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(format(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(options) {
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: isElement(reference) ? listScrollParents(reference) : reference.contextElement ? listScrollParents(reference.contextElement) : [],
          popper: listScrollParents(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = orderModifiers(mergeByName([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (true) {
          var modifiers = uniqueBy([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          validateModifiers(modifiers);

          if (getBasePlacement(state.options.placement) === auto) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = getComputedStyle$1(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (true) {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: getCompositeRect(reference, getOffsetParent(popper), state.options.strategy === 'fixed'),
          popper: getLayoutRect(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (true) {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: debounce(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (true) {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}

var defaultModifiers = [eventListeners, popperOffsets$1, computeStyles$1, applyStyles$1, offset$1, flip$1, preventOverflow$1, arrow$1, hide$1];
var createPopper = /*#__PURE__*/popperGenerator({
  defaultModifiers: defaultModifiers
}); // eslint-disable-next-line import/no-unused-modules

/* global Map:readonly, Set:readonly, ArrayBuffer:readonly */

var hasElementType = typeof Element !== 'undefined';
var hasMap = typeof Map === 'function';
var hasSet = typeof Set === 'function';
var hasArrayBuffer = typeof ArrayBuffer === 'function' && !!ArrayBuffer.isView;

// Note: We **don't** need `envHasBigInt64Array` in fde es6/index.js

function equal(a, b) {
  // START: fast-deep-equal es6/index.js 3.1.1
  if (a === b) return true;

  if (a && b && typeof a == 'object' && typeof b == 'object') {
    if (a.constructor !== b.constructor) return false;

    var length, i, keys;
    if (Array.isArray(a)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (!equal(a[i], b[i])) return false;
      return true;
    }

    // START: Modifications:
    // 1. Extra `has<Type> &&` helpers in initial condition allow es6 code
    //    to co-exist with es5.
    // 2. Replace `for of` with es5 compliant iteration using `for`.
    //    Basically, take:
    //
    //    ```js
    //    for (i of a.entries())
    //      if (!b.has(i[0])) return false;
    //    ```
    //
    //    ... and convert to:
    //
    //    ```js
    //    it = a.entries();
    //    while (!(i = it.next()).done)
    //      if (!b.has(i.value[0])) return false;
    //    ```
    //
    //    **Note**: `i` access switches to `i.value`.
    var it;
    if (hasMap && (a instanceof Map) && (b instanceof Map)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!equal(i.value[1], b.get(i.value[0]))) return false;
      return true;
    }

    if (hasSet && (a instanceof Set) && (b instanceof Set)) {
      if (a.size !== b.size) return false;
      it = a.entries();
      while (!(i = it.next()).done)
        if (!b.has(i.value[0])) return false;
      return true;
    }
    // END: Modifications

    if (hasArrayBuffer && ArrayBuffer.isView(a) && ArrayBuffer.isView(b)) {
      length = a.length;
      if (length != b.length) return false;
      for (i = length; i-- !== 0;)
        if (a[i] !== b[i]) return false;
      return true;
    }

    if (a.constructor === RegExp) return a.source === b.source && a.flags === b.flags;
    if (a.valueOf !== Object.prototype.valueOf) return a.valueOf() === b.valueOf();
    if (a.toString !== Object.prototype.toString) return a.toString() === b.toString();

    keys = Object.keys(a);
    length = keys.length;
    if (length !== Object.keys(b).length) return false;

    for (i = length; i-- !== 0;)
      if (!Object.prototype.hasOwnProperty.call(b, keys[i])) return false;
    // END: fast-deep-equal

    // START: react-fast-compare
    // custom handling for DOM elements
    if (hasElementType && a instanceof Element) return false;

    // custom handling for React/Preact
    for (i = length; i-- !== 0;) {
      if ((keys[i] === '_owner' || keys[i] === '__v' || keys[i] === '__o') && a.$$typeof) {
        // React-specific: avoid traversing React elements' _owner
        // Preact-specific: avoid traversing Preact elements' __v and __o
        //    __v = $_original / $_vnode
        //    __o = $_owner
        // These properties contain circular references and are not needed when
        // comparing the actual elements (and not their owners)
        // .$$typeof and ._store on just reasonable markers of elements

        continue;
      }

      // all other properties should be traversed as usual
      if (!equal(a[keys[i]], b[keys[i]])) return false;
    }
    // END: react-fast-compare

    // START: fast-deep-equal
    return true;
  }

  return a !== a && b !== b;
}
// end fast-deep-equal

var reactFastCompare = function isEqual(a, b) {
  try {
    return equal(a, b);
  } catch (error) {
    if (((error.message || '').match(/stack|recursion/i))) {
      // warn on circular references, don't crash
      // browsers give this different errors name and messages:
      // chrome/safari: "RangeError", "Maximum call stack size exceeded"
      // firefox: "InternalError", too much recursion"
      // edge: "Error", "Out of stack space"
      console.warn('react-fast-compare cannot handle circular refs');
      return false;
    }
    // some other error. we should definitely know about these
    throw error;
  }
};

var EMPTY_MODIFIERS$1 = [];
var usePopper = function usePopper(referenceElement, popperElement, options) {
  if (options === void 0) {
    options = {};
  }

  var prevOptions = react__WEBPACK_IMPORTED_MODULE_0__.useRef(null);
  var optionsWithDefaults = {
    onFirstUpdate: options.onFirstUpdate,
    placement: options.placement || 'bottom',
    strategy: options.strategy || 'absolute',
    modifiers: options.modifiers || EMPTY_MODIFIERS$1
  };

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState({
    styles: {
      popper: {
        position: optionsWithDefaults.strategy,
        left: '0',
        top: '0'
      },
      arrow: {
        position: 'absolute'
      }
    },
    attributes: {}
  }),
      state = _React$useState[0],
      setState = _React$useState[1];

  var updateStateModifier = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return {
      name: 'updateState',
      enabled: true,
      phase: 'write',
      fn: function fn(_ref) {
        var state = _ref.state;
        var elements = Object.keys(state.elements);
        setState({
          styles: fromEntries(elements.map(function (element) {
            return [element, state.styles[element] || {}];
          })),
          attributes: fromEntries(elements.map(function (element) {
            return [element, state.attributes[element]];
          }))
        });
      },
      requires: ['computeStyles']
    };
  }, []);
  var popperOptions = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    var newOptions = {
      onFirstUpdate: optionsWithDefaults.onFirstUpdate,
      placement: optionsWithDefaults.placement,
      strategy: optionsWithDefaults.strategy,
      modifiers: [].concat(optionsWithDefaults.modifiers, [updateStateModifier, {
        name: 'applyStyles',
        enabled: false
      }])
    };

    if (reactFastCompare(prevOptions.current, newOptions)) {
      return prevOptions.current || newOptions;
    } else {
      prevOptions.current = newOptions;
      return newOptions;
    }
  }, [optionsWithDefaults.onFirstUpdate, optionsWithDefaults.placement, optionsWithDefaults.strategy, optionsWithDefaults.modifiers, updateStateModifier]);
  var popperInstanceRef = react__WEBPACK_IMPORTED_MODULE_0__.useRef();
  useIsomorphicLayoutEffect(function () {
    if (popperInstanceRef.current) {
      popperInstanceRef.current.setOptions(popperOptions);
    }
  }, [popperOptions]);
  useIsomorphicLayoutEffect(function () {
    if (referenceElement == null || popperElement == null) {
      return;
    }

    var createPopper$1 = options.createPopper || createPopper;
    var popperInstance = createPopper$1(referenceElement, popperElement, popperOptions);
    popperInstanceRef.current = popperInstance;
    return function () {
      popperInstance.destroy();
      popperInstanceRef.current = null;
    };
  }, [referenceElement, popperElement, options.createPopper]);
  return {
    state: popperInstanceRef.current ? popperInstanceRef.current.state : null,
    styles: state.styles,
    attributes: state.attributes,
    update: popperInstanceRef.current ? popperInstanceRef.current.update : null,
    forceUpdate: popperInstanceRef.current ? popperInstanceRef.current.forceUpdate : null
  };
};

var NOOP = function NOOP() {
  return void 0;
};

var NOOP_PROMISE = function NOOP_PROMISE() {
  return Promise.resolve(null);
};

var EMPTY_MODIFIERS = [];
function Popper(_ref) {
  var _ref$placement = _ref.placement,
      placement = _ref$placement === void 0 ? 'bottom' : _ref$placement,
      _ref$strategy = _ref.strategy,
      strategy = _ref$strategy === void 0 ? 'absolute' : _ref$strategy,
      _ref$modifiers = _ref.modifiers,
      modifiers = _ref$modifiers === void 0 ? EMPTY_MODIFIERS : _ref$modifiers,
      referenceElement = _ref.referenceElement,
      onFirstUpdate = _ref.onFirstUpdate,
      innerRef = _ref.innerRef,
      children = _ref.children;
  var referenceNode = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ManagerReferenceNodeContext);

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      popperElement = _React$useState[0],
      setPopperElement = _React$useState[1];

  var _React$useState2 = react__WEBPACK_IMPORTED_MODULE_0__.useState(null),
      arrowElement = _React$useState2[0],
      setArrowElement = _React$useState2[1];

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    setRef(innerRef, popperElement);
  }, [innerRef, popperElement]);
  var options = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return {
      placement: placement,
      strategy: strategy,
      onFirstUpdate: onFirstUpdate,
      modifiers: [].concat(modifiers, [{
        name: 'arrow',
        enabled: arrowElement != null,
        options: {
          element: arrowElement
        }
      }])
    };
  }, [placement, strategy, onFirstUpdate, modifiers, arrowElement]);

  var _usePopper = usePopper(referenceElement || referenceNode, popperElement, options),
      state = _usePopper.state,
      styles = _usePopper.styles,
      forceUpdate = _usePopper.forceUpdate,
      update = _usePopper.update;

  var childrenProps = react__WEBPACK_IMPORTED_MODULE_0__.useMemo(function () {
    return {
      ref: setPopperElement,
      style: styles.popper,
      placement: state ? state.placement : placement,
      hasPopperEscaped: state && state.modifiersData.hide ? state.modifiersData.hide.hasPopperEscaped : null,
      isReferenceHidden: state && state.modifiersData.hide ? state.modifiersData.hide.isReferenceHidden : null,
      arrowProps: {
        style: styles.arrow,
        ref: setArrowElement
      },
      forceUpdate: forceUpdate || NOOP,
      update: update || NOOP_PROMISE
    };
  }, [setPopperElement, setArrowElement, placement, state, styles, update, forceUpdate]);
  return unwrapArray(children)(childrenProps);
}

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = "development" !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

var warning_1 = warning;

function Reference(_ref) {
  var children = _ref.children,
      innerRef = _ref.innerRef;
  var setReferenceNode = react__WEBPACK_IMPORTED_MODULE_0__.useContext(ManagerReferenceNodeSetterContext);
  var refHandler = react__WEBPACK_IMPORTED_MODULE_0__.useCallback(function (node) {
    setRef(innerRef, node);
    safeInvoke(setReferenceNode, node);
  }, [innerRef, setReferenceNode]); // ran on unmount

  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    return function () {
      return setRef(innerRef, null);
    };
  });
  react__WEBPACK_IMPORTED_MODULE_0__.useEffect(function () {
    warning_1(Boolean(setReferenceNode), '`Reference` should not be used outside of a `Manager` component.');
  }, [setReferenceNode]);
  return unwrapArray(children)({
    ref: refHandler
  });
}

var CDropdownContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var CDropdown = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, alignment = _a.alignment, className = _a.className, dark = _a.dark, direction = _a.direction, _b = _a.placement, placement = _b === void 0 ? 'bottom-start' : _b, _c = _a.popper, popper = _c === void 0 ? true : _c, _d = _a.variant, variant = _d === void 0 ? 'btn-group' : _d, _e = _a.component, component = _e === void 0 ? 'div' : _e, _f = _a.visible, visible = _f === void 0 ? false : _f, rest = __rest(_a, ["children", "alignment", "className", "dark", "direction", "placement", "popper", "variant", "component", "visible"]);
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(visible), _visible = _g[0], setVisible = _g[1];
    var dropdownRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var forkedRef = useForkedRef(ref, dropdownRef);
    var Component = variant === 'nav-item' ? 'li' : component;
    // Disable popper if responsive aligment is set.
    if (typeof alignment === 'object') {
        popper = false;
    }
    var contextValues = {
        alignment: alignment,
        dark: dark,
        direction: direction,
        placement: placement,
        popper: popper,
        variant: variant,
        visible: _visible,
        setVisible: setVisible,
    };
    var _className = classNames(variant === 'nav-item' ? 'nav-item dropdown' : variant, {
        show: _visible,
    }, direction, className);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        window.addEventListener('click', handleClickOutside);
        window.addEventListener('keyup', handleKeyup);
        return function () {
            window.removeEventListener('click', handleClickOutside);
            window.removeEventListener('keyup', handleKeyup);
        };
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        setVisible(visible);
    }, [visible]);
    var handleKeyup = function (event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setVisible(false);
        }
    };
    var handleClickOutside = function (event) {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setVisible(false);
        }
    };
    return popper ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CDropdownContext.Provider, { value: contextValues },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Manager, null, variant === 'input-group' ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, children)) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: forkedRef }), children))))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CDropdownContext.Provider, { value: contextValues },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: forkedRef }), children)));
});
var alignmentDirection = PropTypes.oneOf(['start', 'end']);
CDropdown.propTypes = {
    // @ts-expect-error TODO: we have to find a solution
    alignment: PropTypes.oneOfType([
        alignmentDirection,
        PropTypes.shape({ xs: alignmentDirection }),
        PropTypes.shape({ sm: alignmentDirection }),
        PropTypes.shape({ md: alignmentDirection }),
        PropTypes.shape({ lg: alignmentDirection }),
        PropTypes.shape({ xl: alignmentDirection }),
        PropTypes.shape({ xxl: alignmentDirection }),
    ]),
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
    dark: PropTypes.bool,
    direction: PropTypes.oneOf(['dropup', 'dropend', 'dropstart']),
    placement: placementPropType,
    popper: PropTypes.bool,
    variant: PropTypes.oneOf(['btn-group', 'dropdown', 'input-group', 'nav-item']),
    visible: PropTypes.bool,
};
CDropdown.displayName = 'CDropdown';

var CDropdownDivider = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var className = _a.className, rest = __rest(_a, ["className"]);
    var _className = classNames('dropdown-divider', className);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("hr", __assign({ className: _className }, rest, { ref: ref }));
});
CDropdownDivider.propTypes = {
    className: PropTypes.string,
};
CDropdownDivider.displayName = 'CDropdownDivider';

var CDropdownHeader = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, _b = _a.component, Component = _b === void 0 ? 'h6' : _b, rest = __rest(_a, ["children", "className", "component"]);
    var _className = classNames('dropdown-header', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), children));
});
CDropdownHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CDropdownHeader.displayName = 'CDropdownHeader';

var CDropdownItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, _b = _a.component, component = _b === void 0 ? 'a' : _b, rest = __rest(_a, ["children", "className", "component"]);
    var _className = classNames('dropdown-item', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CLink, __assign({ component: component }, rest, { className: _className, ref: ref }), children));
});
CDropdownItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CDropdownItem.displayName = 'CDropdownItem';

var CDropdownItemPlain = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, _b = _a.component, Component = _b === void 0 ? 'span' : _b, rest = __rest(_a, ["children", "className", "component"]);
    var _className = classNames('dropdown-item-text', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), children));
});
CDropdownItemPlain.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CDropdownItemPlain.displayName = 'CDropdownItemPlain';

var CDropdownMenu = function (_a) {
    var children = _a.children, className = _a.className, _b = _a.component, Component = _b === void 0 ? 'ul' : _b, rest = __rest(_a, ["children", "className", "component"]);
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CDropdownContext), alignment = _c.alignment, dark = _c.dark, direction = _c.direction, placement = _c.placement, popper = _c.popper, visible = _c.visible;
    var _placement = placement;
    if (direction === 'dropup') {
        _placement = 'top-start';
    }
    if (direction === 'dropend') {
        _placement = 'right-start';
    }
    if (direction === 'dropstart') {
        _placement = 'left-start';
    }
    if (alignment === 'end') {
        _placement = 'bottom-end';
    }
    var alignmentClassNames = function (alignment) {
        var classNames = [];
        if (typeof alignment === 'object') {
            Object.keys(alignment).map(function (key) {
                classNames.push("dropdown-menu" + (key === 'xs' ? '' : "-" + key) + "-" + alignment[key]);
            });
        }
        if (typeof alignment === 'string') {
            classNames.push("dropdown-menu-" + alignment);
        }
        return classNames;
    };
    var _className = classNames('dropdown-menu', {
        'dropdown-menu-dark': dark,
        show: visible,
    }, alignment && alignmentClassNames(alignment), className);
    var dropdownMenuComponent = function (style, ref) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className, ref: ref, style: style, role: "menu", "aria-hidden": !visible }, (!popper && { 'data-coreui-popper': 'static' }), rest), Component === 'ul'
            ? react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (child, index) {
                if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)) {
                    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { key: index }, react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child));
                }
                return;
            })
            : children));
    };
    return popper && visible ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Popper, { placement: _placement }, function (_a) {
        var ref = _a.ref, style = _a.style;
        return dropdownMenuComponent(style, ref);
    })) : (dropdownMenuComponent());
};
CDropdownMenu.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CDropdownMenu.displayName = 'CDropdownMenu';

var CDropdownToggle = function (_a) {
    var children = _a.children, _b = _a.caret, caret = _b === void 0 ? true : _b, className = _a.className, split = _a.split, _c = _a.trigger, trigger = _c === void 0 ? 'click' : _c, rest = __rest(_a, ["children", "caret", "className", "split", "trigger"]);
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CDropdownContext), popper = _d.popper, variant = _d.variant, visible = _d.visible, setVisible = _d.setVisible;
    var _className = classNames({
        'dropdown-toggle': caret,
        'dropdown-toggle-split': split,
        'nav-link': variant === 'nav-item',
    }, className);
    var triggers = __assign(__assign({}, ((trigger === 'click' || trigger.includes('click')) && {
        onClick: function (event) {
            event.preventDefault();
            setVisible(!visible);
        },
    })), ((trigger === 'focus' || trigger.includes('focus')) && {
        onFocus: function () { return setVisible(true); },
        onBlur: function () { return setVisible(false); },
    }));
    var togglerProps = __assign({ className: _className, 'aria-expanded': visible }, triggers);
    // We use any because Toggler can be `a` as well as `button`.
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    var Toggler = function (ref) {
        return variant === 'nav-item' ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", __assign({ href: "#" }, togglerProps, { ref: ref }), children)) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CButton, __assign({}, togglerProps, { tabIndex: 0 }, rest, { ref: ref }),
            children,
            split && react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "visually-hidden" }, "Toggle Dropdown")));
    };
    return popper ? react__WEBPACK_IMPORTED_MODULE_0__.createElement(Reference, null, function (_a) {
        var ref = _a.ref;
        return Toggler(ref);
    }) : Toggler();
};
CDropdownToggle.propTypes = {
    caret: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    split: PropTypes.bool,
    trigger: triggerPropType,
};
CDropdownToggle.displayName = 'CDropdownToggle';

var BREAKPOINTS$2 = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs',
];
var CCol = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var repsonsiveCLassNames = [];
    BREAKPOINTS$2.forEach(function (bp) {
        var breakpoint = rest[bp];
        delete rest[bp];
        var infix = bp === 'xs' ? '' : "-" + bp;
        if (typeof breakpoint === 'number' || typeof breakpoint === 'string') {
            repsonsiveCLassNames.push("col" + infix + "-" + breakpoint);
        }
        if (typeof breakpoint === 'boolean') {
            repsonsiveCLassNames.push("col" + infix);
        }
        if (breakpoint && typeof breakpoint === 'object') {
            if (typeof breakpoint.span === 'number' || typeof breakpoint.span === 'string') {
                repsonsiveCLassNames.push("col" + infix + "-" + breakpoint.span);
            }
            if (typeof breakpoint.span === 'boolean') {
                repsonsiveCLassNames.push("col" + infix);
            }
            if (typeof breakpoint.order === 'number' || typeof breakpoint.order === 'string') {
                repsonsiveCLassNames.push("order" + infix + "-" + breakpoint.order);
            }
            if (typeof breakpoint.offset === 'number') {
                repsonsiveCLassNames.push("offset" + infix + "-" + breakpoint.offset);
            }
        }
    });
    var _className = classNames(repsonsiveCLassNames.length ? repsonsiveCLassNames : 'col', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
var span = PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
    PropTypes.string,
    PropTypes.oneOf(['auto']),
]);
var col = PropTypes.oneOfType([
    span,
    PropTypes.shape({
        span: span,
        offset: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
        order: PropTypes.oneOfType([
            PropTypes.oneOf(['first', 'last']),
            PropTypes.number,
            PropTypes.string,
        ]),
    }),
]);
CCol.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    xs: col,
    sm: col,
};
CCol.displayName = 'CCol';

var BREAKPOINTS$1 = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'fluid',
];
var CContainer = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var repsonsiveCLassNames = [];
    BREAKPOINTS$1.forEach(function (bp) {
        var breakpoint = rest[bp];
        delete rest[bp];
        breakpoint && repsonsiveCLassNames.push("container-" + bp);
    });
    var _className = classNames(repsonsiveCLassNames.length ? repsonsiveCLassNames : 'container', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CContainer.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    sm: PropTypes.bool,
    md: PropTypes.bool,
    lg: PropTypes.bool,
    xl: PropTypes.bool,
    xxl: PropTypes.bool,
    fluid: PropTypes.bool,
};
CContainer.displayName = 'CContainer';

var BREAKPOINTS = [
    'xxl',
    'xl',
    'lg',
    'md',
    'sm',
    'xs',
];
var CRow = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var repsonsiveCLassNames = [];
    BREAKPOINTS.forEach(function (bp) {
        var breakpoint = rest[bp];
        delete rest[bp];
        var infix = bp === 'xs' ? '' : "-" + bp;
        if (typeof breakpoint === 'object') {
            if (breakpoint.cols) {
                repsonsiveCLassNames.push("row-cols" + infix + "-" + breakpoint.cols);
            }
            if (typeof breakpoint.gutter === 'number') {
                repsonsiveCLassNames.push("g" + infix + "-" + breakpoint.gutter);
            }
            if (typeof breakpoint.gutterX === 'number') {
                repsonsiveCLassNames.push("gx" + infix + "-" + breakpoint.gutterX);
            }
            if (typeof breakpoint.gutterY === 'number') {
                repsonsiveCLassNames.push("gy" + infix + "-" + breakpoint.gutterY);
            }
        }
    });
    var _className = classNames('row', repsonsiveCLassNames, className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _className, ref: ref }, children));
});
var bp = PropTypes.shape({
    cols: PropTypes.oneOfType([PropTypes.oneOf(['auto']), PropTypes.number, PropTypes.string]),
    gutter: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    gutterX: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    gutterY: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
});
CRow.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    xs: bp,
    sm: bp,
    md: bp,
    lg: bp,
    xl: bp,
    xxl: bp,
};
CRow.displayName = 'CRow';

var CFooter = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, position = _a.position, rest = __rest(_a, ["children", "className", "position"]);
    var _className = classNames('footer', (_b = {}, _b["footer-" + position] = position, _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    position: PropTypes.oneOf(['fixed', 'sticky']),
};
CFooter.displayName = 'CFooter';

var CForm = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, validated = _a.validated, rest = __rest(_a, ["children", "className", "validated"]);
    var _className = classNames({ 'was-validated': validated }, className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("form", __assign({ className: _className }, rest, { ref: ref }), children));
});
CForm.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    validated: PropTypes.bool,
};
CForm.displayName = 'CForm';

var CFormLabel = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, customClassName = _a.customClassName, rest = __rest(_a, ["children", "className", "customClassName"]);
    var _className = customClassName ? customClassName : classNames('form-label', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("label", __assign({ className: _className }, rest, { ref: ref }), children));
});
CFormLabel.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    customClassName: PropTypes.string,
};
CFormLabel.displayName = 'CFormLabel';

var CFormCheck = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var className = _a.className, button = _a.button, hitArea = _a.hitArea, id = _a.id, inline = _a.inline, invalid = _a.invalid, label = _a.label, _c = _a.type, type = _c === void 0 ? 'checkbox' : _c, valid = _a.valid, rest = __rest(_a, ["className", "button", "hitArea", "id", "inline", "invalid", "label", "type", "valid"]);
    var _className = classNames('form-check', {
        'form-check-inline': inline,
        'is-invalid': invalid,
        'is-valid': valid,
    }, className);
    var inputClassName = classNames(button ? 'btn-check' : 'form-check-input', {
        'is-invalid': invalid,
        'is-valid': valid,
        'me-2': hitArea,
    });
    var labelClassName = classNames(button
        ? classNames('btn', button.variant ? "btn-" + button.variant + "-" + button.color : "btn-" + button.color, (_b = {},
            _b["btn-" + button.size] = button.size,
            _b), "" + button.shape)
        : 'form-check-label');
    var formControl = function () {
        return react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", __assign({ type: type, className: inputClassName, id: id }, rest, { ref: ref }));
    };
    var formLabel = function () {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CFormLabel, __assign({ customClassName: labelClassName }, (id && { htmlFor: id })), label));
    };
    return button ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        formControl(),
        label && formLabel())) : label ? (hitArea ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CFormLabel, __assign({ customClassName: className }, (id && { htmlFor: id })),
        formControl(),
        label)) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _className },
        formControl(),
        formLabel()))) : (formControl());
});
CFormCheck.propTypes = {
    button: PropTypes.object,
    className: PropTypes.string,
    hitArea: PropTypes.oneOf(['full']),
    id: PropTypes.string,
    inline: PropTypes.bool,
    invalid: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    type: PropTypes.oneOf(['checkbox', 'radio']),
    valid: PropTypes.bool,
};
CFormCheck.displayName = 'CFormCheck';

var CFormFeedback = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, _c = _a.component, Component = _c === void 0 ? 'div' : _c, invalid = _a.invalid, tooltip = _a.tooltip, valid = _a.valid, rest = __rest(_a, ["children", "className", "component", "invalid", "tooltip", "valid"]);
    var _className = classNames((_b = {},
        _b["invalid-" + (tooltip ? 'tooltip' : 'feedback')] = invalid,
        _b["valid-" + (tooltip ? 'tooltip' : 'feedback')] = valid,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), children));
});
CFormFeedback.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
    invalid: PropTypes.bool,
    tooltip: PropTypes.bool,
    valid: PropTypes.bool,
};
CFormFeedback.displayName = 'CFormFeedback';

var CFormFloating = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('form-floating', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CFormFloating.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CFormFloating.displayName = 'CFormFloating';

var CFormInput = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, invalid = _a.invalid, plainText = _a.plainText, size = _a.size, _c = _a.type, type = _c === void 0 ? 'text' : _c, valid = _a.valid, rest = __rest(_a, ["children", "className", "invalid", "plainText", "size", "type", "valid"]);
    var _className = classNames(plainText ? 'form-control-plaintext' : 'form-control', (_b = {},
        _b["form-control-" + size] = size,
        _b['form-control-color'] = type === 'color',
        _b['is-invalid'] = invalid,
        _b['is-valid'] = valid,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", __assign({ type: type, className: _className }, rest, { ref: ref }), children));
});
CFormInput.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    invalid: PropTypes.bool,
    plainText: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'lg']),
    type: PropTypes.oneOfType([PropTypes.oneOf(['color', 'file', 'text']), PropTypes.string]),
    valid: PropTypes.bool,
};
CFormInput.displayName = 'CFormInput';

var CFormRange = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var className = _a.className, rest = __rest(_a, ["className"]);
    var _className = classNames('form-range', className);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", __assign({ type: "range", className: _className }, rest, { ref: ref }));
});
CFormRange.propTypes = {
    className: PropTypes.string,
};
CFormRange.displayName = 'CFormRange';

var CFormSelect = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, htmlSize = _a.htmlSize, invalid = _a.invalid, size = _a.size, valid = _a.valid, rest = __rest(_a, ["children", "className", "htmlSize", "invalid", "size", "valid"]);
    var _className = classNames('form-select', (_b = {},
        _b["form-select-" + size] = size,
        _b['is-invalid'] = invalid,
        _b['is-valid'] = valid,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("select", __assign({ className: _className, size: htmlSize }, rest, { ref: ref }), children));
});
CFormSelect.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    htmlSize: PropTypes.number,
    invalid: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'lg']),
    valid: PropTypes.bool,
};
CFormSelect.displayName = 'CFormSelect';

var CFormSwitch = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var className = _a.className, id = _a.id, invalid = _a.invalid, label = _a.label, size = _a.size, _c = _a.type, type = _c === void 0 ? 'checkbox' : _c, valid = _a.valid, rest = __rest(_a, ["className", "id", "invalid", "label", "size", "type", "valid"]);
    var _className = classNames('form-check form-switch', (_b = {},
        _b["form-switch-" + size] = size,
        _b['is-invalid'] = invalid,
        _b['is-valid'] = valid,
        _b), className);
    var inputClassName = classNames('form-check-input', {
        'is-invalid': invalid,
        'is-valid': valid,
    });
    var labelClassName = classNames('form-check-label');
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _className },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("input", __assign({ type: type, className: inputClassName, id: id }, rest, { ref: ref })),
        label && (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CFormLabel, __assign({ customClassName: labelClassName }, (id && { htmlFor: id })), label))));
});
CFormSwitch.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    invalid: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    size: PropTypes.oneOf(['lg', 'xl']),
    type: PropTypes.oneOf(['checkbox', 'radio']),
    valid: PropTypes.bool,
};
CFormSwitch.displayName = 'CFormSwitch';

var CFormText = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, _b = _a.component, Component = _b === void 0 ? 'div' : _b, rest = __rest(_a, ["children", "className", "component"]);
    var _className = classNames('form-text', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), children));
});
CFormText.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CFormText.displayName = 'CFormText';

var CFormTextarea = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, invalid = _a.invalid, plainText = _a.plainText, valid = _a.valid, rest = __rest(_a, ["children", "className", "invalid", "plainText", "valid"]);
    var _className = classNames(plainText ? 'form-control-plaintext' : 'form-control', {
        'is-invalid': invalid,
        'is-valid': valid,
    }, className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("textarea", __assign({ className: _className }, rest, { ref: ref }), children));
});
CFormTextarea.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    invalid: PropTypes.bool,
    plainText: PropTypes.bool,
    valid: PropTypes.bool,
};
CFormTextarea.displayName = 'CFormTextarea';

var CInputGroup = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, size = _a.size, rest = __rest(_a, ["children", "className", "size"]);
    var _className = classNames('input-group', (_b = {},
        _b["input-group-" + size] = size,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CInputGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'lg']),
};
CInputGroup.displayName = 'CInputGroup';

var CInputGroupText = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, _b = _a.component, Component = _b === void 0 ? 'span' : _b, rest = __rest(_a, ["children", "className", "component"]);
    var _className = classNames('input-group-text', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), children));
});
CInputGroupText.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CInputGroupText.displayName = 'CInputGroupText';

var CHeader = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, container = _a.container, position = _a.position, rest = __rest(_a, ["children", "className", "container", "position"]);
    var _className = classNames('header', (_b = {}, _b["header-" + position] = position, _b), className);
    var content;
    if (container) {
        content = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container" + (container !== true ? '-' + container : '') }, children));
    }
    else {
        content = children;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), content));
});
CHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    container: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf([
            'sm',
            'md',
            'lg',
            'xl',
            'xxl',
            'fluid',
        ]),
    ]),
    position: PropTypes.oneOf(['fixed', 'sticky']),
};
CHeader.displayName = 'CHeader';

var CHeaderBrand = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, _b = _a.component, Component = _b === void 0 ? 'a' : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
    var _className = classNames('header-brand', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), children));
});
CHeaderBrand.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CHeaderBrand.displayName = 'CHeaderBrand';

var CHeaderDivider = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var className = _a.className, rest = __rest(_a, ["className"]);
    var _className = classNames('header-divider', className);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }));
});
CHeaderDivider.propTypes = {
    className: PropTypes.string,
};
CHeaderDivider.displayName = 'CHeaderDivider';

var CHeaderNav = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, _b = _a.component, Component = _b === void 0 ? 'ul' : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
    var _className = classNames('header-nav', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className, role: "navigation" }, rest, { ref: ref }), children));
});
CHeaderNav.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CHeaderNav.displayName = 'CHeaderNav';

var CHeaderText = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('header-text', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", __assign({ className: _className }, rest, { ref: ref }), children));
});
CHeaderText.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CHeaderText.displayName = 'CHeaderText';

var CHeaderToggler = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('header-toggler', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", __assign({ type: "button", className: _className }, rest, { ref: ref }), children ? children : react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "header-toggler-icon" })));
});
CHeaderToggler.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CHeaderToggler.displayName = 'CHeaderToggler';

var CImage = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var align = _a.align, className = _a.className, fluid = _a.fluid, rounded = _a.rounded, thumbnail = _a.thumbnail, rest = __rest(_a, ["align", "className", "fluid", "rounded", "thumbnail"]);
    var _className = classNames((_b = {},
        _b["float-" + align] = align && (align === 'start' || align === 'end'),
        _b['d-block mx-auto'] = align && align === 'center',
        _b['img-fluid'] = fluid,
        _b.rounded = rounded,
        _b['img-thumbnail'] = thumbnail,
        _b), className);
    return react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", __assign({ className: _className }, rest, { ref: ref }));
});
CImage.propTypes = {
    align: PropTypes.oneOf(['start', 'center', 'end']),
    className: PropTypes.string,
    fluid: PropTypes.bool,
    rounded: PropTypes.bool,
    thumbnail: PropTypes.bool,
};
CImage.displayName = 'CImage';

var CListGroup = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, _c = _a.component, Component = _c === void 0 ? 'ul' : _c, flush = _a.flush, layout = _a.layout;
    var _className = classNames('list-group', (_b = {
            'list-group-flush': flush
        },
        _b["list-group-" + layout] = layout,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, { className: _className, ref: ref }, children));
});
CListGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
    flush: PropTypes.bool,
    layout: PropTypes.oneOf([
        'horizontal',
        'horizontal-sm',
        'horizontal-md',
        'horizontal-lg',
        'horizontal-xl',
        'horizontal-xxl',
    ]),
};
CListGroup.displayName = 'CListGroup';

var CListGroupItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, active = _a.active, className = _a.className, disabled = _a.disabled, color = _a.color, _c = _a.component, component = _c === void 0 ? 'li' : _c, rest = __rest(_a, ["children", "active", "className", "disabled", "color", "component"]);
    var _className = classNames('list-group-item', (_b = {},
        _b["list-group-item-" + color] = color,
        _b['list-group-item-action'] = component === 'a' || component === 'button',
        _b.active = active,
        _b.disabled = disabled,
        _b), className);
    var Component = component === 'a' || component === 'button' ? CLink : component;
    rest = __assign(__assign(__assign(__assign({}, ((component === 'a' || component === 'button') && {
        active: active,
        disabled: disabled,
        component: component,
        ref: ref,
    })), (active && { 'aria-current': true })), (disabled && { 'aria-disabled': true })), rest);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest), children));
});
CListGroupItem.propTypes = {
    active: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
    component: PropTypes.elementType,
    disabled: PropTypes.bool,
};
CListGroupItem.displayName = 'CListGroupItem';

var CModalContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('modal-content', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CModalContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CModalContent.displayName = 'CModalContent';

var CModalDialog = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, alignment = _a.alignment, className = _a.className, fullscreen = _a.fullscreen, scrollable = _a.scrollable, size = _a.size, rest = __rest(_a, ["children", "alignment", "className", "fullscreen", "scrollable", "size"]);
    var _className = classNames('modal-dialog', (_b = {
            'modal-dialog-centered': alignment === 'center'
        },
        _b[typeof fullscreen === 'boolean'
            ? 'modal-fullscreen'
            : "modal-fullscreen-" + fullscreen + "-down"] = fullscreen,
        _b['modal-dialog-scrollable'] = scrollable,
        _b["modal-" + size] = size,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CModalDialog.propTypes = {
    alignment: PropTypes.oneOf(['top', 'center']),
    children: PropTypes.node,
    className: PropTypes.string,
    fullscreen: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
    ]),
    scrollable: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'lg', 'xl']),
};
CModalDialog.displayName = 'CModalDialog';

var CModal = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, alignment = _a.alignment, _b = _a.backdrop, backdrop = _b === void 0 ? true : _b, className = _a.className, _c = _a.duration, duration = _c === void 0 ? 150 : _c, fullscreen = _a.fullscreen, _d = _a.keyboard, keyboard = _d === void 0 ? true : _d, onDismiss = _a.onDismiss, _e = _a.portal, portal = _e === void 0 ? true : _e, scrollable = _a.scrollable, size = _a.size, _f = _a.transition, transition = _f === void 0 ? true : _f, visible = _a.visible;
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), staticBackdrop = _g[0], setStaticBackdrop = _g[1];
    var modalRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var forkedRef = useForkedRef(ref, modalRef);
    var handleDismiss = function () {
        if (typeof onDismiss === 'undefined') {
            return setStaticBackdrop(true);
        }
        return onDismiss && onDismiss();
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
        setTimeout(function () { return setStaticBackdrop(false); }, duration);
    }, [staticBackdrop]);
    var getTransitionClass = function (state) {
        return state === 'entering'
            ? 'd-block'
            : state === 'entered'
                ? 'show d-block'
                : state === 'exiting'
                    ? 'd-block'
                    : '';
    };
    var _className = classNames('modal', {
        'modal-static': staticBackdrop,
        fade: transition,
    }, className);
    // Set focus to modal after open
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
        if (visible) {
            document.body.classList.add('modal-open');
            setTimeout(function () {
                modalRef.current && modalRef.current.focus();
            }, !transition ? 0 : duration);
        }
        else {
            document.body.classList.remove('modal-open');
        }
        return function () { return document.body.classList.remove('modal-open'); };
    }, [visible]);
    var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
        if (event.key === 'Escape' && keyboard) {
            return handleDismiss();
        }
    }, [modalRef, handleDismiss]);
    var modal = function (ref, transitionClass) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classNames(_className, transitionClass), tabIndex: -1, role: "dialog", ref: ref },
                react__WEBPACK_IMPORTED_MODULE_0__.createElement(CModalDialog, { alignment: alignment, fullscreen: fullscreen, scrollable: scrollable, size: size, onClick: function (event) { return event.stopPropagation(); } },
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(CModalContent, null, children)))));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { onClick: handleDismiss, onKeyDown: handleKeyDown },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(CSSTransition$1, { in: visible, timeout: !transition ? 0 : duration, onExit: onDismiss, mountOnEnter: true, unmountOnExit: true }, function (state) {
                var transitionClass = getTransitionClass(state);
                return typeof window !== 'undefined' && portal
                    ? (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(modal(forkedRef, transitionClass), document.body)
                    : modal(forkedRef, transitionClass);
            })),
        typeof window !== 'undefined' && portal
            ? backdrop && (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(CBackdrop, { visible: visible }), document.body)
            : backdrop && react__WEBPACK_IMPORTED_MODULE_0__.createElement(CBackdrop, { visible: visible })));
});
CModal.propTypes = {
    alignment: PropTypes.oneOf(['top', 'center']),
    backdrop: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    duration: PropTypes.number,
    fullscreen: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
    ]),
    keyboard: PropTypes.bool,
    onDismiss: PropTypes.func,
    portal: PropTypes.bool,
    scrollable: PropTypes.bool,
    size: PropTypes.oneOf(['sm', 'lg', 'xl']),
    transition: PropTypes.bool,
    visible: PropTypes.bool,
};
CModal.displayName = 'CModal';

var CModalBody = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('modal-body', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CModalBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CModalBody.displayName = 'CModalBody';

var CModalFooter = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('modal-footer', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CModalFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CModalFooter.displayName = 'CModalFooter';

var CModalHeader = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, onDismiss = _a.onDismiss, rest = __rest(_a, ["children", "className", "onDismiss"]);
    var _className = classNames('modal-header', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }),
        children,
        onDismiss && react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCloseButton, { onClick: onDismiss })));
});
CModalHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    onDismiss: PropTypes.func,
};
CModalHeader.displayName = 'CModalHeader';

var CModalTitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, _b = _a.component, Component = _b === void 0 ? 'h5' : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
    var _className = classNames('modal-title', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), children));
});
CModalTitle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CModalTitle.displayName = 'CModalTitle';

var CNav = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, _c = _a.component, Component = _c === void 0 ? 'ul' : _c, layout = _a.layout, variant = _a.variant, rest = __rest(_a, ["children", "className", "component", "layout", "variant"]);
    var _className = classNames('nav', (_b = {},
        _b["nav-" + layout] = layout,
        _b["nav-" + variant] = variant,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className, role: "navigation" }, rest, { ref: ref }), children));
});
CNav.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
    layout: PropTypes.oneOf(['fill', 'justified']),
    variant: PropTypes.oneOf(['tabs', 'pills']),
};
CNav.displayName = 'CNav';

var CNavGroupItems = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('nav-group-items', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", __assign({ className: _className }, rest, { ref: ref }), children));
});
CNavGroupItems.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CNavGroupItems.displayName = 'CNavGroupItems';

var CNavContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var CSidebarNav = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(''), visibleGroup = _b[0], setVisibleGroup = _b[1];
    var CNavContextValues = {
        visibleGroup: visibleGroup,
        setVisibleGroup: setVisibleGroup,
    };
    var classes = classNames('sidebar-nav', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", __assign({ className: classes, ref: ref }, rest),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(CNavContext.Provider, { value: CNavContextValues }, react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (child, index) {
            if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)) {
                return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, { key: index, idx: "" + index });
            }
            return;
        }))));
});
CSidebarNav.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CSidebarNav.displayName = 'CSidebarNav';

var CNavGroup = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, compact = _a.compact, idx = _a.idx, toggler = _a.toggler, visible = _a.visible, rest = __rest(_a, ["children", "className", "compact", "idx", "toggler", "visible"]);
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(), height = _b[0], setHeight = _b[1];
    var navItemsRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CNavContext), visibleGroup = _c.visibleGroup, setVisibleGroup = _c.setVisibleGroup;
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(Boolean(visible || (idx && visibleGroup && visibleGroup.toString().startsWith(idx.toString())))), _visible = _d[0], setVisible = _d[1];
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        setVisible(Boolean(idx && visibleGroup && visibleGroup.toString().startsWith(idx.toString())));
    }, [visibleGroup]);
    var handleTogglerOnCLick = function (event) {
        event.preventDefault();
        setVisibleGroup(_visible ? ((idx === null || idx === void 0 ? void 0 : idx.toString().includes('.')) ? idx.slice(0, idx.lastIndexOf('.')) : '') : idx);
        setVisible(!_visible);
    };
    var style = {
        height: 0,
    };
    var onEntering = function () {
        navItemsRef && navItemsRef.current && setHeight(navItemsRef.current.scrollHeight);
    };
    var onEntered = function () {
        setHeight('auto');
    };
    var onExit = function () {
        navItemsRef && navItemsRef.current && setHeight(navItemsRef.current.scrollHeight);
    };
    var onExiting = function () {
        // @ts-expect-error reflow is necessary to get correct height of the element
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        navItemsRef && navItemsRef.current && navItemsRef.current.offsetHeight;
        setHeight(0);
    };
    var onExited = function () {
        setHeight(0);
    };
    var transitionStyles = {
        entering: { display: 'block', height: height },
        entered: { display: 'block', height: height },
        exiting: { display: 'block', height: height },
        exited: { height: height },
    };
    var _className = classNames('nav-group', { show: _visible }, className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", __assign({ className: _className }, rest, { ref: ref }),
        toggler && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("a", { className: "nav-link nav-group-toggle", onClick: function (event) { return handleTogglerOnCLick(event); } }, toggler)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Transition$1, { in: _visible, timeout: 300, onEntering: onEntering, onEntered: onEntered, onExit: onExit, onExiting: onExiting, onExited: onExited }, function (state) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: classNames('nav-group-items', {
                compact: compact,
            }), style: __assign(__assign({}, style), transitionStyles[state]), ref: navItemsRef }, react__WEBPACK_IMPORTED_MODULE_0__.Children.map(children, function (child, index) {
            if (react__WEBPACK_IMPORTED_MODULE_0__.isValidElement(child)) {
                return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(child, { key: index, idx: idx + "." + index });
            }
            return;
        }))); })));
});
CNavGroup.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    compact: PropTypes.bool,
    idx: PropTypes.string,
    toggler: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    visible: PropTypes.bool,
};
CNavGroup.displayName = 'CNavGroup';

var CNavLink = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, idx = _a.idx, rest = __rest(_a, ["children", "className", "idx"]);
    var navLinkRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var forkedRef = useForkedRef(ref, navLinkRef);
    var setVisibleGroup = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CNavContext).setVisibleGroup;
    var _className = classNames('nav-link', className);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        var _a;
        rest.active = (_a = navLinkRef.current) === null || _a === void 0 ? void 0 : _a.classList.contains('active');
        idx && rest.active && setVisibleGroup(idx);
    }, [rest.active, className]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CLink, __assign({ className: _className }, rest, { ref: forkedRef }), children));
});
CNavLink.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    idx: PropTypes.string,
};
CNavLink.displayName = 'CNavLink';

var CNavItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('nav-item', className);
    if (rest.href || rest.to) {
        children = (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CNavLink, __assign({ className: className }, rest), children));
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", { className: _className, ref: ref }, children));
});
CNavItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CNavItem.displayName = 'CNavItem';

var CNavTitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('nav-title', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", __assign({ className: _className }, rest, { ref: ref }), children));
});
CNavTitle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CNavTitle.displayName = 'CNavTitle';

var CNavbar = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, color = _a.color, colorScheme = _a.colorScheme, _c = _a.component, Component = _c === void 0 ? 'nav' : _c, container = _a.container, expand = _a.expand, placement = _a.placement, rest = __rest(_a, ["children", "className", "color", "colorScheme", "component", "container", "expand", "placement"]);
    var _className = classNames('navbar', (_b = {},
        _b["bg-" + color] = color,
        _b["navbar-" + colorScheme] = colorScheme,
        _b[typeof expand === 'boolean' ? 'navbar-expand' : "navbar-expand-" + expand] = expand,
        _b), placement, className);
    var content;
    if (container) {
        content = (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "container" + (container !== true ? '-' + container : '') }, children));
    }
    else {
        content = children;
    }
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), content));
});
CNavbar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
    colorScheme: PropTypes.oneOf(['dark', 'light']),
    component: PropTypes.elementType,
    container: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf([
            'sm',
            'md',
            'lg',
            'xl',
            'xxl',
            'fluid',
        ]),
    ]),
    expand: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
    ]),
    placement: PropTypes.oneOf(['fixed-top', 'fixed-bottom', 'sticky-top']),
};
CNavbar.displayName = 'CNavbar';

var CNavbarBrand = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, component = _a.component, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
    var Component = component ? component : rest.href ? 'a' : 'span';
    var _className = classNames('navbar-brand', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), children));
});
CNavbarBrand.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CNavbarBrand.displayName = 'CNavbarBrand';

var CNavbarNav = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, _b = _a.component, Component = _b === void 0 ? 'ul' : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
    var _className = classNames('navbar-nav', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className, role: "navigation" }, rest, { ref: ref }), children));
});
CNavbarNav.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CNavbarNav.displayName = 'CNavbarNav';

var CNavbarText = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('navbar-text', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", __assign({ className: _className }, rest, { ref: ref }), children));
});
CNavbarText.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CNavbarText.displayName = 'CNavbarText';

var CNavbarToggler = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('navbar-toggler', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", __assign({ type: "button", className: _className }, rest, { ref: ref }), children ? children : react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "navbar-toggler-icon" })));
});
CNavbarToggler.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CNavbarToggler.displayName = 'CNavbarToggler';

var CPagination = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, size = _a.size, rest = __rest(_a, ["children", "className", "size"]);
    var _className = classNames('pagination', (_b = {}, _b["pagination-" + size] = size, _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("nav", __assign({ ref: ref }, rest),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", { className: _className }, children)));
});
CPagination.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    size: PropTypes.oneOf(['sm', 'lg']),
};
CPagination.displayName = 'CPagination';

var CPaginationItem = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, component = _a.component, rest = __rest(_a, ["children", "className", "component"]);
    var _className = classNames('page-item', {
        active: rest.active,
        disabled: rest.disabled,
    }, className);
    var Component = component ? component : rest.active ? 'span' : 'a';
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", __assign({ className: _className }, (rest.active && { 'aria-current': 'page' })), Component === 'a' ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CLink, __assign({ className: "page-link", component: Component }, rest, { ref: ref }), children)) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, { className: "page-link", ref: ref }, children))));
});
CPaginationItem.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
CPaginationItem.displayName = 'CPaginationItem';

var CPopoverContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var content = _a.content, title = _a.title, placementClassNamePostfix = _a.placementClassNamePostfix, arrowProps = _a.arrowProps, style = _a.style, transitionClass = _a.transitionClass;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classNames("popover bs-popover-" + placementClassNamePostfix, transitionClass), ref: ref, style: style, role: "tooltip" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: "popover-arrow" }, arrowProps)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "popover-header" }, title),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "popover-body" }, content))));
});
CPopoverContent.propTypes = {
    arrowProps: PropTypes.any,
    content: PropTypes.node,
    placementClassNamePostfix: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    title: PropTypes.string,
    transitionClass: PropTypes.string,
};
CPopoverContent.displayName = 'CPopoverContent';

var CPopover = function (_a) {
    var children = _a.children, _b = _a.placement, placement = _b === void 0 ? 'top' : _b, _c = _a.offset, offset = _c === void 0 ? [0, 8] : _c, _d = _a.trigger, trigger = _d === void 0 ? 'click' : _d, visible = _a.visible, rest = __rest(_a, ["children", "placement", "offset", "trigger", "visible"]);
    var _e = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(visible), _visible = _e[0], setVisible = _e[1];
    var getTransitionClass = function (state) {
        return state === 'entering'
            ? 'fade'
            : state === 'entered'
                ? 'fade show'
                : state === 'exiting'
                    ? 'fade'
                    : 'fade';
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Manager, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Reference, null, function (_a) {
            var ref = _a.ref;
            return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, __assign(__assign(__assign({ ref: ref }, ((trigger === 'click' || trigger.includes('click')) && {
                onClick: function () { return setVisible(!_visible); },
            })), ((trigger === 'focus' || trigger.includes('focus')) && {
                onFocus: function () { return setVisible(true); },
                onBlur: function () { return setVisible(false); },
            })), ((trigger === 'hover' || trigger.includes('hover')) && {
                onMouseEnter: function () { return setVisible(true); },
                onMouseLeave: function () { return setVisible(false); },
            })));
        }),
        typeof window !== 'undefined' &&
            (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(CSSTransition$1, { in: _visible, timeout: {
                    enter: 0,
                    exit: 200,
                }, mountOnEnter: true, unmountOnExit: true }, function (state) {
                var transitionClass = getTransitionClass(state);
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Popper, { placement: placement, modifiers: [
                        {
                            name: 'offset',
                            options: {
                                offset: offset,
                            },
                        },
                    ] }, function (p) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CPopoverContent, __assign({ transitionClass: transitionClass, placementClassNamePostfix: placement === 'left' ? 'start' : placement === 'right' ? 'end' : placement }, rest, p))); }));
            }), document.body)));
};
CPopover.propTypes = {
    children: PropTypes.any,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    offset: PropTypes.any,
    trigger: triggerPropType,
    visible: PropTypes.bool,
};
CPopover.displayName = 'CPopover';

var CProgressBar = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, animated = _a.animated, className = _a.className, color = _a.color, _c = _a.value, value = _c === void 0 ? 0 : _c, variant = _a.variant, rest = __rest(_a, ["children", "animated", "className", "color", "value", "variant"]);
    var _className = classNames('progress-bar', (_b = {},
        _b["bg-" + color] = color,
        _b["progress-bar-" + variant] = variant,
        _b['progress-bar-animated'] = animated,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className, role: "progressbar", style: { width: value + "%" }, "aria-valuenow": value, "aria-valuemin": 0, "aria-valuemax": 100 }, rest, { ref: ref }), children));
});
CProgressBar.propTypes = {
    animated: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
    value: PropTypes.number,
    variant: PropTypes.oneOf(['striped']),
};
CProgressBar.displayName = 'CProgressBar';

var CProgress = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, height = _a.height, thin = _a.thin, _b = _a.value, value = _b === void 0 ? 0 : _b, white = _a.white, rest = __rest(_a, ["children", "className", "height", "thin", "value", "white"]);
    var _className = classNames('progress', {
        'progress-thin': thin,
        'progress-white': white,
    }, className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: _className, style: height ? { height: height + "px" } : {}, ref: ref }, value ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CProgressBar, __assign({ value: value }, rest), children)) : (children)));
});
CProgress.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    height: PropTypes.number,
    thin: PropTypes.bool,
    value: PropTypes.number,
    white: PropTypes.bool,
};
CProgress.displayName = 'CProgress';

// TODO: check if element is visible after toggle
var CSidebar = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, narrow = _a.narrow, onHide = _a.onHide, onShow = _a.onShow, overlaid = _a.overlaid, position = _a.position, selfHiding = _a.selfHiding, size = _a.size, unfoldable = _a.unfoldable, visible = _a.visible, rest = __rest(_a, ["children", "className", "narrow", "onHide", "onShow", "overlaid", "position", "selfHiding", "size", "unfoldable", "visible"]);
    var sidebarRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var forkedRef = useForkedRef(ref, sidebarRef);
    var _c = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false), mobile = _c[0], setMobile = _c[1];
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(visible), _visible = _d[0], setVisible = _d[1];
    var isOnMobile = function (element) {
        return Boolean(element.current && getComputedStyle(element.current).getPropertyValue('--cui-is-mobile'));
    };
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(function () {
        setMobile(isOnMobile(sidebarRef));
    });
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        setVisible(visible);
        setMobile(isOnMobile(sidebarRef));
    }, [visible]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        setMobile(isOnMobile(sidebarRef));
        _visible && onShow && onShow();
    }, [_visible]);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        window.addEventListener('mouseup', handleClickOutside);
        sidebarRef.current && sidebarRef.current.addEventListener('mouseup', handleOnClick);
        window.addEventListener('keyup', handleKeyup);
        return function () {
            window.removeEventListener('mouseup', handleClickOutside);
            sidebarRef.current && sidebarRef.current.removeEventListener('mouseup', handleOnClick);
            window.removeEventListener('keyup', handleKeyup);
        };
    });
    var handleHide = function () {
        if (_visible) {
            setVisible(false);
            onHide && onHide();
        }
    };
    var handleKeyup = function (event) {
        if (mobile &&
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target)) {
            handleHide();
        }
    };
    var handleClickOutside = function (event) {
        if (mobile &&
            sidebarRef.current &&
            !sidebarRef.current.contains(event.target)) {
            handleHide();
        }
    };
    var handleOnClick = function (event) {
        var target = event.target;
        target &&
            target.classList.contains('nav-link') &&
            !target.classList.contains('nav-group-toggle') &&
            mobile &&
            handleHide();
    };
    var _className = classNames('sidebar', (_b = {
            'sidebar-narrow': narrow,
            'sidebar-overlaid': overlaid
        },
        _b["sidebar-" + position] = position,
        _b["sidebar-self-hiding" + (typeof selfHiding !== 'boolean' && '-' + selfHiding)] = selfHiding,
        _b["sidebar-" + size] = size,
        _b['sidebar-narrow-unfoldable'] = unfoldable,
        _b.show = _visible === true,
        _b.hide = _visible === false,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: forkedRef }), children),
        typeof window !== 'undefined' &&
            mobile &&
            (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(CBackdrop, { className: "sidebar-backdrop", visible: _visible }), document.body)));
});
CSidebar.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    narrow: PropTypes.bool,
    onHide: PropTypes.func,
    onShow: PropTypes.func,
    overlaid: PropTypes.bool,
    position: PropTypes.oneOf(['fixed', 'sticky']),
    selfHiding: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
    ]),
    size: PropTypes.oneOf(['sm', 'lg', 'xl']),
    unfoldable: PropTypes.bool,
    visible: PropTypes.bool,
};
CSidebar.displayName = 'CSidebar';

var COffcanvas = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, _c = _a.backdrop, backdrop = _c === void 0 ? true : _c, className = _a.className, _d = _a.keyboard, keyboard = _d === void 0 ? true : _d, onDismiss = _a.onDismiss, placement = _a.placement, _e = _a.portal, portal = _e === void 0 ? true : _e, _f = _a.visible, visible = _f === void 0 ? false : _f, rest = __rest(_a, ["children", "backdrop", "className", "keyboard", "onDismiss", "placement", "portal", "visible"]);
    var _g = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(visible), _visible = _g[0], setVisible = _g[1];
    var offcanvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    var forkedRef = useForkedRef(ref, offcanvasRef);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        setVisible(visible);
    }, [visible]);
    var _className = classNames('offcanvas', (_b = {},
        _b["offcanvas-" + placement] = placement,
        _b.show = _visible,
        _b), className);
    var transitionStyles = {
        entering: { visibility: 'visible' },
        entered: { visibility: 'visible' },
        exiting: { visibility: 'visible' },
        exited: { visibility: 'hidden' },
    };
    var handleDismiss = function () {
        setVisible(false);
        return onDismiss && onDismiss();
    };
    var handleKeyDown = (0,react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(function (event) {
        if (event.key === 'Escape' && keyboard) {
            return handleDismiss();
        }
    }, [ref, handleDismiss]);
    var offcanvas = function (ref, state) {
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className, style: __assign({}, transitionStyles[state]), tabIndex: -1, onKeyDown: handleKeyDown }, rest, { ref: ref }), children)));
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Transition$1, { in: _visible, timeout: 300, onEntered: function () { var _a; return (_a = offcanvasRef.current) === null || _a === void 0 ? void 0 : _a.focus(); } }, function (state) {
            return typeof window !== 'undefined' && portal
                ? (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(offcanvas(forkedRef, state), document.body)
                : offcanvas(forkedRef, state);
        }),
        typeof window !== 'undefined' && portal
            ? backdrop &&
                (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(CBackdrop, { visible: visible, onClick: handleDismiss }), document.body)
            : backdrop && react__WEBPACK_IMPORTED_MODULE_0__.createElement(CBackdrop, { visible: visible, onClick: handleDismiss })));
});
COffcanvas.propTypes = {
    backdrop: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    keyboard: PropTypes.bool,
    onDismiss: PropTypes.func,
    placement: PropTypes.oneOf(['start', 'end', 'top', 'bottom'])
        .isRequired,
    portal: PropTypes.bool,
    visible: PropTypes.bool,
};
COffcanvas.displayName = 'COffcanvas';

var COffcanvasBody = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('offcanvas-body', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
COffcanvasBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
COffcanvasBody.displayName = 'COffcanvasBody';

var COffcanvasHeader = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('offcanvas-header', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
COffcanvasHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
COffcanvasHeader.displayName = 'COffcanvasHeader';

var COffcanvasTitle = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, _b = _a.component, Component = _b === void 0 ? 'h5' : _b, className = _a.className, rest = __rest(_a, ["children", "component", "className"]);
    var _className = classNames('offcanvas-title', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className }, rest, { ref: ref }), children));
});
COffcanvasTitle.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    component: PropTypes.elementType,
};
COffcanvasTitle.displayName = 'COffcanvasTitle';

var CSidebarBrand = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('sidebar-brand', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className, ref: ref }, rest), children));
});
CSidebarBrand.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CSidebarBrand.displayName = 'CSidebarBrand';

var CSidebarFooter = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('sidebar-footer', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className, ref: ref }, rest), children));
});
CSidebarFooter.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CSidebarFooter.displayName = 'CSidebarFooter';

var CSidebarToggler = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('sidebar-toggler', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("button", __assign({ className: _className, ref: ref }, rest), children));
});
CSidebarToggler.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CSidebarToggler.displayName = 'CSidebarToggler';

var CSidebarHeader = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('sidebar-header', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className, ref: ref }, rest), children));
});
CSidebarHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CSidebarHeader.displayName = 'CSidebarHeader';

var CSpinner = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var className = _a.className, color = _a.color, _b = _a.component, Component = _b === void 0 ? 'div' : _b, size = _a.size, _c = _a.variant, variant = _c === void 0 ? 'border' : _c, _d = _a.visuallyHiddenLabel, visuallyHiddenLabel = _d === void 0 ? 'Loading...' : _d, rest = __rest(_a, ["className", "color", "component", "size", "variant", "visuallyHiddenLabel"]);
    var _className = classNames("spinner-" + variant, "text-" + color, size && "spinner-" + variant + "-" + size, className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ className: _className, role: "status" }, rest, { ref: ref }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("span", { className: "visually-hidden" }, visuallyHiddenLabel)));
});
CSpinner.propTypes = {
    className: PropTypes.string,
    color: colorPropType,
    component: PropTypes.string,
    size: PropTypes.oneOf(['sm']),
    variant: PropTypes.oneOf(['border', 'grow']),
    visuallyHiddenLabel: PropTypes.string,
};
CSpinner.displayName = 'CSpinner';

var CTable = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, align = _a.align, borderColor = _a.borderColor, bordered = _a.bordered, borderless = _a.borderless, caption = _a.caption, className = _a.className, color = _a.color, hover = _a.hover, responsive = _a.responsive, small = _a.small, striped = _a.striped, rest = __rest(_a, ["children", "align", "borderColor", "bordered", "borderless", "caption", "className", "color", "hover", "responsive", "small", "striped"]);
    var _className = classNames('table', (_b = {},
        _b["align-" + align] = align,
        _b["caption-" + caption] = caption,
        _b["border-" + borderColor] = borderColor,
        _b['table-bordered'] = bordered,
        _b['table-borderless'] = borderless,
        _b["table-" + color] = color,
        _b['table-hover'] = hover,
        _b['table-sm'] = small,
        _b['table-striped'] = striped,
        _b), className);
    return responsive ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: typeof responsive === 'boolean' ? 'table-responsive' : "table-responsive-" + responsive },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", __assign({ className: _className ? _className : undefined }, rest, { ref: ref }), children))) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement("table", __assign({ className: _className ? _className : undefined }, rest, { ref: ref }), children));
});
CTable.propTypes = {
    align: PropTypes.oneOf(['bottom', 'middle', 'top']),
    borderColor: PropTypes.string,
    bordered: PropTypes.bool,
    borderless: PropTypes.bool,
    caption: PropTypes.oneOf(['top']),
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
    hover: PropTypes.bool,
    responsive: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['sm', 'md', 'lg', 'xl', 'xxl']),
    ]),
    small: PropTypes.bool,
    striped: PropTypes.bool,
};
CTable.displayName = 'CTable';

var CTableBody = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
    var _className = classNames((_b = {},
        _b["table-" + color] = color,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tbody", __assign({ className: _className ? _className : undefined }, rest, { ref: ref }), children));
});
CTableBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
};
CTableBody.displayName = 'CTableBody';

var CTableCaption = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, props = __rest(_a, ["children"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("caption", __assign({}, props, { ref: ref }), children));
});
CTableCaption.propTypes = {
    children: PropTypes.node,
};
CTableCaption.displayName = 'CTableCaption';

var CTableDataCell = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, active = _a.active, align = _a.align, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "active", "align", "className", "color"]);
    var _className = classNames((_b = {},
        _b["align-" + align] = align,
        _b['table-active'] = active,
        _b["table-" + color] = color,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("td", __assign({ className: _className ? _className : undefined }, rest, { ref: ref }), children));
});
CTableDataCell.propTypes = {
    active: PropTypes.bool,
    align: PropTypes.oneOf(['bottom', 'middle', 'top']),
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
};
CTableDataCell.displayName = 'CTableDataCell';

var CTableFoot = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
    var _className = classNames((_b = {},
        _b["table-" + color] = color,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tfoot", __assign({ className: _className ? _className : undefined }, rest, { ref: ref }), children));
});
CTableFoot.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
};
CTableFoot.displayName = 'CTableFoot';

var CTableHead = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
    var _className = classNames((_b = {},
        _b["table-" + color] = color,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("thead", __assign({ className: _className ? _className : undefined }, rest, { ref: ref }), children));
});
CTableHead.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
};
CTableHead.displayName = 'CTableHead';

var CTableHeaderCell = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "className", "color"]);
    var _className = classNames((_b = {},
        _b["table-" + color] = color,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("th", __assign({ className: _className ? _className : undefined }, rest, { ref: ref }), children));
});
CTableHeaderCell.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
};
CTableHeaderCell.displayName = 'CTableHeaderCell';

var CTableRow = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, active = _a.active, align = _a.align, className = _a.className, color = _a.color, rest = __rest(_a, ["children", "active", "align", "className", "color"]);
    var _className = classNames((_b = {},
        _b["align-" + align] = align,
        _b['table-active'] = active,
        _b["table-" + color] = color,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("tr", __assign({ className: _className ? _className : undefined }, rest, { ref: ref }), children));
});
CTableRow.propTypes = {
    active: PropTypes.bool,
    align: PropTypes.oneOf(['bottom', 'middle', 'top']),
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
};
CTableRow.displayName = 'CTableRow';

var CTabContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('tab-content', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CTabContent.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CTabContent.displayName = 'CTabContent';

var CTabPane = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, visible = _a.visible, rest = __rest(_a, ["children", "className", "visible"]);
    var style = {
        transition: "opacity 150ms linear",
    };
    var getTransitionClass = function (state) {
        return state === 'entering'
            ? 'show'
            : state === 'entered'
                ? 'show active'
                : state === 'exiting'
                    ? 'active'
                    : '';
    };
    var _className = classNames('tab-pane', 'fade', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Transition$1, { in: visible, timeout: 350 }, function (state) {
        var transitionClass = getTransitionClass(state);
        return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: classNames(_className, transitionClass), style: __assign({}, style) }, rest, { ref: ref }), children));
    }));
});
CTabPane.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    visible: PropTypes.bool,
};
CTabPane.displayName = 'CTabPane';

var CToastContext = (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)({});
var CToast = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var children = _a.children, _c = _a.autohide, autohide = _c === void 0 ? true : _c, className = _a.className, color = _a.color, _d = _a.delay, delay = _d === void 0 ? 5000 : _d, index = _a.index, key = _a.key, _e = _a.visible, visible = _e === void 0 ? true : _e, onDismiss = _a.onDismiss, rest = __rest(_a, ["children", "autohide", "className", "color", "delay", "index", "key", "visible", "onDismiss"]);
    var _f = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(visible), _visible = _f[0], setVisible = _f[1];
    var timeout = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    var contextValues = {
        visible: _visible,
        setVisible: setVisible,
    };
    // triggered on mount and destroy
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () { return function () { return clearTimeout(timeout.current); }; }, []);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        _autohide();
    }, [_visible]);
    var _autohide = function () {
        if (autohide) {
            clearTimeout(timeout.current);
            timeout.current = window.setTimeout(function () {
                setVisible(false);
            }, delay);
        }
    };
    var _className = classNames('toast fade', (_b = {
            show: _visible
        },
        _b["bg-" + color] = color,
        _b['border-0'] = color,
        _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CSSTransition$1, { in: _visible, timeout: 250, onExit: function () { return onDismiss && onDismiss(index ? index : null); }, unmountOnExit: true },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(CToastContext.Provider, { value: contextValues },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className, "aria-live": "assertive", "aria-atomic": "true", role: "alert", onMouseEnter: function () { return clearTimeout(timeout.current); }, onMouseLeave: function () { return _autohide; } }, rest, { key: key, ref: ref }), children))));
});
CToast.propTypes = {
    autohide: PropTypes.bool,
    children: PropTypes.node,
    className: PropTypes.string,
    color: colorPropType,
    delay: PropTypes.number,
    index: PropTypes.number,
    key: PropTypes.number,
    onDismiss: PropTypes.func,
    visible: PropTypes.bool,
};
CToast.displayName = 'CToast';

var CToastBody = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, rest = __rest(_a, ["children", "className"]);
    var _className = classNames('toast-body', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }), children));
});
CToastBody.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
};
CToastBody.displayName = 'CToastBody';

var CToastClose = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, Component = _a.component, rest = __rest(_a, ["children", "component"]);
    var setVisible = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(CToastContext).setVisible;
    return Component ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Component, __assign({ onClick: function () { return setVisible(false); } }, rest, { ref: ref }), children)) : (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCloseButton, __assign({ onClick: function () { return setVisible(false); } }, rest, { ref: ref })));
});
CToastClose.propTypes = __assign(__assign({}, CCloseButton.propTypes), { component: PropTypes.elementType });
CToastClose.displayName = 'CToastClose';

var CToastHeader = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, close = _a.close, rest = __rest(_a, ["children", "className", "close"]);
    var _className = classNames('toast-header', className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }),
        children,
        close && react__WEBPACK_IMPORTED_MODULE_0__.createElement(CToastClose, null)));
});
CToastHeader.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    close: PropTypes.bool,
};
CToastHeader.displayName = 'CToastHeader';

var CToaster = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var children = _a.children, className = _a.className, placement = _a.placement, push = _a.push, rest = __rest(_a, ["children", "className", "placement", "push"]);
    var _b = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]), toasts = _b[0], setToasts = _b[1];
    var index = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {
        index.current++;
        push && addToast(push);
    }, [push]);
    var addToast = function (push) {
        setToasts(function (state) { return __spreadArray(__spreadArray([], state), [
            react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(push, {
                index: index.current,
                key: index.current,
                onDismiss: function (index) {
                    return setToasts(function (state) { return state.filter(function (i) { return i.props.index !== index; }); });
                },
            }),
        ]); });
    };
    var _className = classNames('toaster toast-container p-3', {
        'position-fixed': placement,
        'top-0': placement && placement.includes('top'),
        'top-50 translate-middle-y': placement && placement.includes('middle'),
        'bottom-0': placement && placement.includes('bottom'),
        'start-0': placement && placement.includes('start'),
        'start-50 translate-middle-x': placement && placement.includes('center'),
        'end-0': placement && placement.includes('end'),
    }, className);
    var toaster = function (ref) {
        return toasts.length > 0 || children ? (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: _className }, rest, { ref: ref }),
            children,
            toasts.map(function (toast) { return toast; }))) : null;
    };
    return typeof window !== 'undefined' && placement
        ? (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(toaster(ref), document.body)
        : toaster(ref);
});
CToaster.propTypes = {
    children: PropTypes.node,
    className: PropTypes.string,
    placement: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.oneOf([
            'top-start',
            'top-center',
            'top-end',
            'middle-start',
            'middle-center',
            'middle-end',
            'bottom-start',
            'bottom-center',
            'bottom-end',
        ]),
    ]),
    push: PropTypes.any,
};
CToaster.displayName = 'CToaster';

var CTooltipContent = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var content = _a.content, placementClassNamePostfix = _a.placementClassNamePostfix, arrowProps = _a.arrowProps, transitionClass = _a.transitionClass, style = _a.style;
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: classNames("tooltip bs-tooltip-" + placementClassNamePostfix, transitionClass), ref: ref, style: style, role: "tooltip" },
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", __assign({ className: "tooltip-arrow" }, arrowProps)),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "tooltip-inner" }, content)));
});
CTooltipContent.propTypes = {
    arrowProps: PropTypes.any,
    content: PropTypes.node,
    placementClassNamePostfix: PropTypes.string,
    style: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
    transitionClass: PropTypes.string,
};
CTooltipContent.displayName = 'CTooltipContent';

var CTooltip = function (_a) {
    var children = _a.children, _b = _a.placement, placement = _b === void 0 ? 'top' : _b, _c = _a.trigger, trigger = _c === void 0 ? 'hover' : _c, visible = _a.visible, rest = __rest(_a, ["children", "placement", "trigger", "visible"]);
    var _d = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(visible), _visible = _d[0], setVisible = _d[1];
    var getTransitionClass = function (state) {
        return state === 'entering'
            ? 'fade'
            : state === 'entered'
                ? 'fade show'
                : state === 'exiting'
                    ? 'fade'
                    : 'fade';
    };
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Manager, null,
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(Reference, null, function (_a) {
            var ref = _a.ref;
            return react__WEBPACK_IMPORTED_MODULE_0__.cloneElement(children, __assign(__assign(__assign({ ref: ref }, ((trigger === 'click' || trigger.includes('click')) && {
                onClick: function () { return setVisible(!_visible); },
            })), ((trigger === 'focus' || trigger.includes('focus')) && {
                onFocus: function () { return setVisible(true); },
                onBlur: function () { return setVisible(false); },
            })), ((trigger === 'hover' || trigger.includes('hover')) && {
                onMouseEnter: function () { return setVisible(true); },
                onMouseLeave: function () { return setVisible(false); },
            })));
        }),
        typeof window !== 'undefined' &&
            (0,react_dom__WEBPACK_IMPORTED_MODULE_1__.createPortal)(react__WEBPACK_IMPORTED_MODULE_0__.createElement(CSSTransition$1, { in: _visible, timeout: {
                    enter: 0,
                    exit: 200,
                }, mountOnEnter: true, unmountOnExit: true }, function (state) {
                var transitionClass = getTransitionClass(state);
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(Popper, { placement: placement }, function (p) { return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CTooltipContent, __assign({ transitionClass: transitionClass, placementClassNamePostfix: placement === 'left' ? 'start' : placement === 'right' ? 'end' : placement }, rest, p))); }));
            }), document.body)));
};
CTooltip.propTypes = {
    children: PropTypes.any,
    placement: PropTypes.oneOf(['top', 'right', 'bottom', 'left']),
    trigger: triggerPropType,
    visible: PropTypes.bool,
};
CTooltip.displayName = 'CTooltip';

var CWidgetStatsA = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var action = _a.action, chart = _a.chart, className = _a.className, color = _a.color, title = _a.title, value = _a.value, rest = __rest(_a, ["action", "chart", "className", "color", "title", "value"]);
    var _className = classNames((_b = {}, _b["bg-" + color] = color, _b['text-high-emphasis-inverse'] = color, _b), className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCard, __assign({ className: _className }, rest, { ref: ref }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCardBody, { className: "pb-0 d-flex justify-content-between align-items-start" },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                value && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "fs-4 fw-semibold" }, value),
                title && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, title)),
            action),
        chart));
});
CWidgetStatsA.propTypes = {
    action: PropTypes.node,
    chart: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    className: PropTypes.string,
    color: colorPropType,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number]),
};
CWidgetStatsA.displayName = 'CWidgetStatsA';

var CWidgetStatsB = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var className = _a.className, color = _a.color, inverse = _a.inverse, progress = _a.progress, text = _a.text, title = _a.title, value = _a.value, rest = __rest(_a, ["className", "color", "inverse", "progress", "text", "title", "value"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCard, __assign({ className: className, color: color }, (inverse && { textColor: 'high-emphasis-inverse' }), rest, { ref: ref }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCardBody, null,
            value && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "fs-4 fw-semibold" }, value),
            title && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null, title),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(CProgress, __assign({ className: "my-2", height: 4 }, (inverse && { white: true }), progress)),
            text && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("small", { className: inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis' }, text)))));
});
CWidgetStatsB.propTypes = {
    className: PropTypes.string,
    color: colorPropType,
    inverse: PropTypes.bool,
    progress: PropTypes.object,
    text: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number]),
};
CWidgetStatsB.displayName = 'CWidgetCWidgetStatsB';

var CWidgetStatsC = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var className = _a.className, color = _a.color, icon = _a.icon, inverse = _a.inverse, progress = _a.progress, title = _a.title, value = _a.value, rest = __rest(_a, ["className", "color", "icon", "inverse", "progress", "title", "value"]);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCard, __assign({ className: className, color: color }, (inverse && { textColor: 'high-emphasis-inverse' }), rest, { ref: ref }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCardBody, null,
            icon && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "text-medium-emphasis" + (inverse ? '-inverse' : '') + " text-end mb-4" }, icon)),
            value && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "text-high-emphasis" + (inverse ? '-inverse' : '') + " fs-4 fw-semibold" }, value)),
            title && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: inverse ? 'text-medium-emphasis-inverse' : 'text-medium-emphasis' }, title)),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement(CProgress, __assign({ className: "mt-3 mb-0", height: 4 }, (inverse && { white: true }), progress)))));
});
CWidgetStatsC.propTypes = {
    className: PropTypes.string,
    color: colorPropType,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    inverse: PropTypes.bool,
    progress: PropTypes.object,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number]),
};
CWidgetStatsC.displayName = 'CWidgetStatsCWidgetStatsC';

var CWidgetStatsD = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var _b;
    var className = _a.className, chart = _a.chart, color = _a.color, icon = _a.icon, values = _a.values, rest = __rest(_a, ["className", "chart", "color", "icon", "values"]);
    var _className = classNames(className);
    var classNameHeader = classNames('position-relative d-flex justify-content-center align-items-center', (_b = {},
        _b["bg-" + color] = color,
        _b));
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCard, __assign({ className: _className }, rest, { ref: ref }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCardHeader, { className: classNameHeader },
            icon,
            chart),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCardBody, { className: "row text-center" }, values &&
            values.map(function (value, index) {
                return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: index },
                    index % 2 !== 0 && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "vr" }),
                    react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCol, null,
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "fs-5 fw-semibold" }, value.value),
                        react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "text-uppercase text-medium-emphasis small" }, value.title))));
            }))));
});
CWidgetStatsD.propTypes = {
    chart: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    className: PropTypes.string,
    color: colorPropType,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    values: PropTypes.arrayOf(PropTypes.any),
};
CWidgetStatsD.displayName = 'CWidgetStatsD';

var CWidgetStatsE = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var chart = _a.chart, className = _a.className, title = _a.title, value = _a.value, rest = __rest(_a, ["chart", "className", "title", "value"]);
    var _className = classNames(className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCard, __assign({ className: _className }, rest, { ref: ref }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCardBody, { className: "text-center" },
            title && (react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "text-medium-emphasis small text-uppercase fw-semibold" }, title)),
            value && react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "fs-6 fw-semibold py-3" }, value),
            chart)));
});
CWidgetStatsE.propTypes = {
    children: PropTypes.node,
    chart: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    className: PropTypes.string,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number]),
};
CWidgetStatsE.displayName = 'CWidgetStatsE';

var CWidgetStatsF = (0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)(function (_a, ref) {
    var className = _a.className, color = _a.color, footer = _a.footer, icon = _a.icon, _b = _a.padding, padding = _b === void 0 ? true : _b, title = _a.title, value = _a.value, rest = __rest(_a, ["className", "color", "footer", "icon", "padding", "title", "value"]);
    var _className = classNames(className);
    return (react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCard, __assign({ className: _className }, rest, { ref: ref }),
        react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCardBody, { className: "d-flex align-items-center " + (padding === false && 'p-0') },
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "me-3 text-white bg-" + color + " " + (padding ? 'p-3' : 'p-4') }, icon),
            react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", null,
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "fs-6 fw-semibold text-" + color }, value),
                react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", { className: "text-medium-emphasis text-uppercase fw-semibold small" }, title))),
        footer && react__WEBPACK_IMPORTED_MODULE_0__.createElement(CCardFooter, null, footer)));
});
CWidgetStatsF.propTypes = {
    className: PropTypes.string,
    color: colorPropType,
    footer: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    padding: PropTypes.bool,
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.node, PropTypes.number]),
};
CWidgetStatsF.displayName = 'CWidgetStatsF';


//# sourceMappingURL=index.es.js.map


/***/ }),

/***/ "./resources/coreui/src/views/pages/page404/Page404.js":
/*!*************************************************************!*\
  !*** ./resources/coreui/src/views/pages/page404/Page404.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _coreui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @coreui/react */ "./node_modules/@coreui/react/dist/index.es.js");
/* harmony import */ var _coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @coreui/icons-react */ "./node_modules/@coreui/icons-react/dist/index.es.js");
/* harmony import */ var _coreui_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @coreui/icons */ "./node_modules/@coreui/icons/js/free/cil-magnifying-glass.js");
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/react/jsx-runtime.js");







var Page404 = function Page404() {
  return /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("div", {
    className: "bg-light min-vh-100 d-flex flex-row align-items-center",
    children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CContainer, {
      children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CRow, {
        className: "justify-content-center",
        children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CCol, {
          md: 6,
          children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("div", {
            className: "clearfix",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("h1", {
              className: "float-start display-3 me-4",
              children: "404"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)("h4", {
              className: "pt-3",
              children: ["Oops! You", "'", "re lost."]
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)("p", {
              className: "text-medium-emphasis float-start",
              children: "The page you are looking for was not found."
            })]
          }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxs)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInputGroup, {
            className: "input-prepend",
            children: [/*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CInputGroupText, {
              children: /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_icons_react__WEBPACK_IMPORTED_MODULE_2__.default, {
                icon: _coreui_icons__WEBPACK_IMPORTED_MODULE_4__.cilMagnifyingGlass
              })
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CFormInput, {
              type: "text",
              placeholder: "What are you looking for?"
            }), /*#__PURE__*/(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_coreui_react__WEBPACK_IMPORTED_MODULE_1__.CButton, {
              color: "info",
              children: "Search"
            })]
          })]
        })
      })
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Page404);

/***/ })

}]);