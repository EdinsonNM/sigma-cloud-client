/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 70);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _underscore = __webpack_require__(3);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Template = function () {
    function Template(css, html) {
        _classCallCheck(this, Template);

        this._css = css;
        this._html = html;
        this.createTemplate();
    }

    _createClass(Template, [{
        key: "createTemplate",
        value: function createTemplate() {
            this._template = "";
            if (this._css != "") {
                this._template = "<custom-style>\n                                <style>\n                                " + this._css + "\n                                </style>\n                            </custom-style>";
            }
            this._template += this._html;
        }
    }, {
        key: "template",
        get: function get() {
            return this._template;
        }
    }], [{
        key: "render",
        value: function render(template) {
            var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

            var preTemplate = _underscore2.default.template(template);
            return preTemplate({ data: data });
        }
    }]);

    return Template;
}();

exports.default = Template;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _lory = __webpack_require__(27);

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _appCarouselChips = __webpack_require__(29);

var _appCarouselChips2 = _interopRequireDefault(_appCarouselChips);

var _appCarouselChips3 = __webpack_require__(28);

var _appCarouselChips4 = _interopRequireDefault(_appCarouselChips3);

var _customEvent = __webpack_require__(26);

var _customEvent2 = _interopRequireDefault(_customEvent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var templateObj = new _template2.default(_appCarouselChips4.default, _appCarouselChips2.default);

var AppCarouselChips = function (_CustomElement2) {
    _inherits(AppCarouselChips, _CustomElement2);

    function AppCarouselChips() {
        _classCallCheck(this, AppCarouselChips);

        var _this = _possibleConstructorReturn(this, (AppCarouselChips.__proto__ || Object.getPrototypeOf(AppCarouselChips)).call(this));

        _this._shadowRoot = _this.attachShadow({ mode: 'open' });
        _this._shadowRoot.innerHTML = templateObj.template;
        _this.initDOMRefs();
        _this.addListeners();
        _this.modules = {
            inv: {
                title: 'Inventario de Riego',
                description: 'Realiza consultas y operaciones sobre el inventario de canales, drenes, tramos, estructuras,etc.',
                logo: './images/modules/module_inv.png',
                module: 'module-inv'
            },
            pad: {
                title: 'Padron de Usuarios y Predios Agrícolas',
                description: 'Realiza consultas y operaciones sobre los usuarios y predios agrícolas denrto del ambito de la junta de usuarios',
                logo: './images/modules/module_pad.png',
                module: 'module-pad'
            },
            pcr: {
                title: 'Plan de Cultivo y Riego',
                description: 'Realiza consultas sobre la campaña agrícola, cultivos y declaraciones de intensión de siembra',
                logo: './images/modules/module_pcr.png',
                module: 'module-pcr'
            },
            pda: {
                title: 'Plan de Distribución del Agua',
                description: 'Consulta el plan de distribución de agua por periodo',
                logo: './images/modules/module_pda.png'
            },
            tar: {
                title: 'Administración de la tarifa',
                description: 'Consulta deudas atrasadas, deudas extraordinarias y pagos realizados por los usuarios',
                logo: './images/modules/module_tar.png'
            },
            hid: {
                title: 'Hidrometria',
                description: 'Realiza el registro de las mediciones de...',
                logo: './images/modules/module_hid.png'
            }

        };
        return _this;
    }

    _createClass(AppCarouselChips, [{
        key: 'initDOMRefs',
        value: function initDOMRefs() {}
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var paperChips = this._shadowRoot.querySelectorAll("paper-chip");
            paperChips.forEach(function (chip) {
                var _this2 = this;

                chip.addEventListener('click', function (e) {
                    var active = e.currentTarget.active;
                    paperChips.forEach(function (chip) {
                        chip.active = false;
                    });
                    e.currentTarget.active = !active;
                    var name = e.currentTarget.id;
                    _this2.dispatchEvent(new _customEvent2.default('changed-chip', {
                        detail: {
                            name: name,
                            active: e.currentTarget.active,
                            data: _this2.modules[name]
                        }
                    }));
                });
            }, this);
        }
    }, {
        key: 'connectedCallback',
        value: function connectedCallback() {

            console.log('loaded carousel chips');
            var multiSlides = this.shadowRoot.querySelector('.js_multislides');
            (0, _lory.lory)(multiSlides, {
                rewind: true,
                enableMouseEvents: true,
                //infinite: 4,
                slidesToScroll: 1
            });
        }
    }]);

    return AppCarouselChips;
}(_CustomElement);

exports.default = AppCarouselChips;


var nameWebComponent = "app-carousel-chips";
var component = AppCarouselChips;

customElements.define(nameWebComponent, component);
customElements.whenDefined(nameWebComponent).then(function () {
    console.log('registered ' + nameWebComponent);
});

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(25);

__webpack_require__(24);

__webpack_require__(23);

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;//     Underscore.js 1.8.3
//     http://underscorejs.org
//     (c) 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
//     Underscore may be freely distributed under the MIT license.

(function() {

  // Baseline setup
  // --------------

  // Establish the root object, `window` in the browser, or `exports` on the server.
  var root = this;

  // Save the previous value of the `_` variable.
  var previousUnderscore = root._;

  // Save bytes in the minified (but not gzipped) version:
  var ArrayProto = Array.prototype, ObjProto = Object.prototype, FuncProto = Function.prototype;

  // Create quick reference variables for speed access to core prototypes.
  var
    push             = ArrayProto.push,
    slice            = ArrayProto.slice,
    toString         = ObjProto.toString,
    hasOwnProperty   = ObjProto.hasOwnProperty;

  // All **ECMAScript 5** native function implementations that we hope to use
  // are declared here.
  var
    nativeIsArray      = Array.isArray,
    nativeKeys         = Object.keys,
    nativeBind         = FuncProto.bind,
    nativeCreate       = Object.create;

  // Naked function reference for surrogate-prototype-swapping.
  var Ctor = function(){};

  // Create a safe reference to the Underscore object for use below.
  var _ = function(obj) {
    if (obj instanceof _) return obj;
    if (!(this instanceof _)) return new _(obj);
    this._wrapped = obj;
  };

  // Export the Underscore object for **Node.js**, with
  // backwards-compatibility for the old `require()` API. If we're in
  // the browser, add `_` as a global object.
  if (true) {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = _;
    }
    exports._ = _;
  } else {
    root._ = _;
  }

  // Current version.
  _.VERSION = '1.8.3';

  // Internal function that returns an efficient (for current engines) version
  // of the passed-in callback, to be repeatedly applied in other Underscore
  // functions.
  var optimizeCb = function(func, context, argCount) {
    if (context === void 0) return func;
    switch (argCount == null ? 3 : argCount) {
      case 1: return function(value) {
        return func.call(context, value);
      };
      case 2: return function(value, other) {
        return func.call(context, value, other);
      };
      case 3: return function(value, index, collection) {
        return func.call(context, value, index, collection);
      };
      case 4: return function(accumulator, value, index, collection) {
        return func.call(context, accumulator, value, index, collection);
      };
    }
    return function() {
      return func.apply(context, arguments);
    };
  };

  // A mostly-internal function to generate callbacks that can be applied
  // to each element in a collection, returning the desired result — either
  // identity, an arbitrary callback, a property matcher, or a property accessor.
  var cb = function(value, context, argCount) {
    if (value == null) return _.identity;
    if (_.isFunction(value)) return optimizeCb(value, context, argCount);
    if (_.isObject(value)) return _.matcher(value);
    return _.property(value);
  };
  _.iteratee = function(value, context) {
    return cb(value, context, Infinity);
  };

  // An internal function for creating assigner functions.
  var createAssigner = function(keysFunc, undefinedOnly) {
    return function(obj) {
      var length = arguments.length;
      if (length < 2 || obj == null) return obj;
      for (var index = 1; index < length; index++) {
        var source = arguments[index],
            keys = keysFunc(source),
            l = keys.length;
        for (var i = 0; i < l; i++) {
          var key = keys[i];
          if (!undefinedOnly || obj[key] === void 0) obj[key] = source[key];
        }
      }
      return obj;
    };
  };

  // An internal function for creating a new object that inherits from another.
  var baseCreate = function(prototype) {
    if (!_.isObject(prototype)) return {};
    if (nativeCreate) return nativeCreate(prototype);
    Ctor.prototype = prototype;
    var result = new Ctor;
    Ctor.prototype = null;
    return result;
  };

  var property = function(key) {
    return function(obj) {
      return obj == null ? void 0 : obj[key];
    };
  };

  // Helper for collection methods to determine whether a collection
  // should be iterated as an array or as an object
  // Related: http://people.mozilla.org/~jorendorff/es6-draft.html#sec-tolength
  // Avoids a very nasty iOS 8 JIT bug on ARM-64. #2094
  var MAX_ARRAY_INDEX = Math.pow(2, 53) - 1;
  var getLength = property('length');
  var isArrayLike = function(collection) {
    var length = getLength(collection);
    return typeof length == 'number' && length >= 0 && length <= MAX_ARRAY_INDEX;
  };

  // Collection Functions
  // --------------------

  // The cornerstone, an `each` implementation, aka `forEach`.
  // Handles raw objects in addition to array-likes. Treats all
  // sparse array-likes as if they were dense.
  _.each = _.forEach = function(obj, iteratee, context) {
    iteratee = optimizeCb(iteratee, context);
    var i, length;
    if (isArrayLike(obj)) {
      for (i = 0, length = obj.length; i < length; i++) {
        iteratee(obj[i], i, obj);
      }
    } else {
      var keys = _.keys(obj);
      for (i = 0, length = keys.length; i < length; i++) {
        iteratee(obj[keys[i]], keys[i], obj);
      }
    }
    return obj;
  };

  // Return the results of applying the iteratee to each element.
  _.map = _.collect = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length,
        results = Array(length);
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      results[index] = iteratee(obj[currentKey], currentKey, obj);
    }
    return results;
  };

  // Create a reducing function iterating left or right.
  function createReduce(dir) {
    // Optimized iterator function as using arguments.length
    // in the main function will deoptimize the, see #1991.
    function iterator(obj, iteratee, memo, keys, index, length) {
      for (; index >= 0 && index < length; index += dir) {
        var currentKey = keys ? keys[index] : index;
        memo = iteratee(memo, obj[currentKey], currentKey, obj);
      }
      return memo;
    }

    return function(obj, iteratee, memo, context) {
      iteratee = optimizeCb(iteratee, context, 4);
      var keys = !isArrayLike(obj) && _.keys(obj),
          length = (keys || obj).length,
          index = dir > 0 ? 0 : length - 1;
      // Determine the initial value if none is provided.
      if (arguments.length < 3) {
        memo = obj[keys ? keys[index] : index];
        index += dir;
      }
      return iterator(obj, iteratee, memo, keys, index, length);
    };
  }

  // **Reduce** builds up a single result from a list of values, aka `inject`,
  // or `foldl`.
  _.reduce = _.foldl = _.inject = createReduce(1);

  // The right-associative version of reduce, also known as `foldr`.
  _.reduceRight = _.foldr = createReduce(-1);

  // Return the first value which passes a truth test. Aliased as `detect`.
  _.find = _.detect = function(obj, predicate, context) {
    var key;
    if (isArrayLike(obj)) {
      key = _.findIndex(obj, predicate, context);
    } else {
      key = _.findKey(obj, predicate, context);
    }
    if (key !== void 0 && key !== -1) return obj[key];
  };

  // Return all the elements that pass a truth test.
  // Aliased as `select`.
  _.filter = _.select = function(obj, predicate, context) {
    var results = [];
    predicate = cb(predicate, context);
    _.each(obj, function(value, index, list) {
      if (predicate(value, index, list)) results.push(value);
    });
    return results;
  };

  // Return all the elements for which a truth test fails.
  _.reject = function(obj, predicate, context) {
    return _.filter(obj, _.negate(cb(predicate)), context);
  };

  // Determine whether all of the elements match a truth test.
  // Aliased as `all`.
  _.every = _.all = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (!predicate(obj[currentKey], currentKey, obj)) return false;
    }
    return true;
  };

  // Determine if at least one element in the object matches a truth test.
  // Aliased as `any`.
  _.some = _.any = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = !isArrayLike(obj) && _.keys(obj),
        length = (keys || obj).length;
    for (var index = 0; index < length; index++) {
      var currentKey = keys ? keys[index] : index;
      if (predicate(obj[currentKey], currentKey, obj)) return true;
    }
    return false;
  };

  // Determine if the array or object contains a given item (using `===`).
  // Aliased as `includes` and `include`.
  _.contains = _.includes = _.include = function(obj, item, fromIndex, guard) {
    if (!isArrayLike(obj)) obj = _.values(obj);
    if (typeof fromIndex != 'number' || guard) fromIndex = 0;
    return _.indexOf(obj, item, fromIndex) >= 0;
  };

  // Invoke a method (with arguments) on every item in a collection.
  _.invoke = function(obj, method) {
    var args = slice.call(arguments, 2);
    var isFunc = _.isFunction(method);
    return _.map(obj, function(value) {
      var func = isFunc ? method : value[method];
      return func == null ? func : func.apply(value, args);
    });
  };

  // Convenience version of a common use case of `map`: fetching a property.
  _.pluck = function(obj, key) {
    return _.map(obj, _.property(key));
  };

  // Convenience version of a common use case of `filter`: selecting only objects
  // containing specific `key:value` pairs.
  _.where = function(obj, attrs) {
    return _.filter(obj, _.matcher(attrs));
  };

  // Convenience version of a common use case of `find`: getting the first object
  // containing specific `key:value` pairs.
  _.findWhere = function(obj, attrs) {
    return _.find(obj, _.matcher(attrs));
  };

  // Return the maximum element (or element-based computation).
  _.max = function(obj, iteratee, context) {
    var result = -Infinity, lastComputed = -Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value > result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed > lastComputed || computed === -Infinity && result === -Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Return the minimum element (or element-based computation).
  _.min = function(obj, iteratee, context) {
    var result = Infinity, lastComputed = Infinity,
        value, computed;
    if (iteratee == null && obj != null) {
      obj = isArrayLike(obj) ? obj : _.values(obj);
      for (var i = 0, length = obj.length; i < length; i++) {
        value = obj[i];
        if (value < result) {
          result = value;
        }
      }
    } else {
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index, list) {
        computed = iteratee(value, index, list);
        if (computed < lastComputed || computed === Infinity && result === Infinity) {
          result = value;
          lastComputed = computed;
        }
      });
    }
    return result;
  };

  // Shuffle a collection, using the modern version of the
  // [Fisher-Yates shuffle](http://en.wikipedia.org/wiki/Fisher–Yates_shuffle).
  _.shuffle = function(obj) {
    var set = isArrayLike(obj) ? obj : _.values(obj);
    var length = set.length;
    var shuffled = Array(length);
    for (var index = 0, rand; index < length; index++) {
      rand = _.random(0, index);
      if (rand !== index) shuffled[index] = shuffled[rand];
      shuffled[rand] = set[index];
    }
    return shuffled;
  };

  // Sample **n** random values from a collection.
  // If **n** is not specified, returns a single random element.
  // The internal `guard` argument allows it to work with `map`.
  _.sample = function(obj, n, guard) {
    if (n == null || guard) {
      if (!isArrayLike(obj)) obj = _.values(obj);
      return obj[_.random(obj.length - 1)];
    }
    return _.shuffle(obj).slice(0, Math.max(0, n));
  };

  // Sort the object's values by a criterion produced by an iteratee.
  _.sortBy = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    return _.pluck(_.map(obj, function(value, index, list) {
      return {
        value: value,
        index: index,
        criteria: iteratee(value, index, list)
      };
    }).sort(function(left, right) {
      var a = left.criteria;
      var b = right.criteria;
      if (a !== b) {
        if (a > b || a === void 0) return 1;
        if (a < b || b === void 0) return -1;
      }
      return left.index - right.index;
    }), 'value');
  };

  // An internal function used for aggregate "group by" operations.
  var group = function(behavior) {
    return function(obj, iteratee, context) {
      var result = {};
      iteratee = cb(iteratee, context);
      _.each(obj, function(value, index) {
        var key = iteratee(value, index, obj);
        behavior(result, value, key);
      });
      return result;
    };
  };

  // Groups the object's values by a criterion. Pass either a string attribute
  // to group by, or a function that returns the criterion.
  _.groupBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key].push(value); else result[key] = [value];
  });

  // Indexes the object's values by a criterion, similar to `groupBy`, but for
  // when you know that your index values will be unique.
  _.indexBy = group(function(result, value, key) {
    result[key] = value;
  });

  // Counts instances of an object that group by a certain criterion. Pass
  // either a string attribute to count by, or a function that returns the
  // criterion.
  _.countBy = group(function(result, value, key) {
    if (_.has(result, key)) result[key]++; else result[key] = 1;
  });

  // Safely create a real, live array from anything iterable.
  _.toArray = function(obj) {
    if (!obj) return [];
    if (_.isArray(obj)) return slice.call(obj);
    if (isArrayLike(obj)) return _.map(obj, _.identity);
    return _.values(obj);
  };

  // Return the number of elements in an object.
  _.size = function(obj) {
    if (obj == null) return 0;
    return isArrayLike(obj) ? obj.length : _.keys(obj).length;
  };

  // Split a collection into two arrays: one whose elements all satisfy the given
  // predicate, and one whose elements all do not satisfy the predicate.
  _.partition = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var pass = [], fail = [];
    _.each(obj, function(value, key, obj) {
      (predicate(value, key, obj) ? pass : fail).push(value);
    });
    return [pass, fail];
  };

  // Array Functions
  // ---------------

  // Get the first element of an array. Passing **n** will return the first N
  // values in the array. Aliased as `head` and `take`. The **guard** check
  // allows it to work with `_.map`.
  _.first = _.head = _.take = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[0];
    return _.initial(array, array.length - n);
  };

  // Returns everything but the last entry of the array. Especially useful on
  // the arguments object. Passing **n** will return all the values in
  // the array, excluding the last N.
  _.initial = function(array, n, guard) {
    return slice.call(array, 0, Math.max(0, array.length - (n == null || guard ? 1 : n)));
  };

  // Get the last element of an array. Passing **n** will return the last N
  // values in the array.
  _.last = function(array, n, guard) {
    if (array == null) return void 0;
    if (n == null || guard) return array[array.length - 1];
    return _.rest(array, Math.max(0, array.length - n));
  };

  // Returns everything but the first entry of the array. Aliased as `tail` and `drop`.
  // Especially useful on the arguments object. Passing an **n** will return
  // the rest N values in the array.
  _.rest = _.tail = _.drop = function(array, n, guard) {
    return slice.call(array, n == null || guard ? 1 : n);
  };

  // Trim out all falsy values from an array.
  _.compact = function(array) {
    return _.filter(array, _.identity);
  };

  // Internal implementation of a recursive `flatten` function.
  var flatten = function(input, shallow, strict, startIndex) {
    var output = [], idx = 0;
    for (var i = startIndex || 0, length = getLength(input); i < length; i++) {
      var value = input[i];
      if (isArrayLike(value) && (_.isArray(value) || _.isArguments(value))) {
        //flatten current level of array or arguments object
        if (!shallow) value = flatten(value, shallow, strict);
        var j = 0, len = value.length;
        output.length += len;
        while (j < len) {
          output[idx++] = value[j++];
        }
      } else if (!strict) {
        output[idx++] = value;
      }
    }
    return output;
  };

  // Flatten out an array, either recursively (by default), or just one level.
  _.flatten = function(array, shallow) {
    return flatten(array, shallow, false);
  };

  // Return a version of the array that does not contain the specified value(s).
  _.without = function(array) {
    return _.difference(array, slice.call(arguments, 1));
  };

  // Produce a duplicate-free version of the array. If the array has already
  // been sorted, you have the option of using a faster algorithm.
  // Aliased as `unique`.
  _.uniq = _.unique = function(array, isSorted, iteratee, context) {
    if (!_.isBoolean(isSorted)) {
      context = iteratee;
      iteratee = isSorted;
      isSorted = false;
    }
    if (iteratee != null) iteratee = cb(iteratee, context);
    var result = [];
    var seen = [];
    for (var i = 0, length = getLength(array); i < length; i++) {
      var value = array[i],
          computed = iteratee ? iteratee(value, i, array) : value;
      if (isSorted) {
        if (!i || seen !== computed) result.push(value);
        seen = computed;
      } else if (iteratee) {
        if (!_.contains(seen, computed)) {
          seen.push(computed);
          result.push(value);
        }
      } else if (!_.contains(result, value)) {
        result.push(value);
      }
    }
    return result;
  };

  // Produce an array that contains the union: each distinct element from all of
  // the passed-in arrays.
  _.union = function() {
    return _.uniq(flatten(arguments, true, true));
  };

  // Produce an array that contains every item shared between all the
  // passed-in arrays.
  _.intersection = function(array) {
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = getLength(array); i < length; i++) {
      var item = array[i];
      if (_.contains(result, item)) continue;
      for (var j = 1; j < argsLength; j++) {
        if (!_.contains(arguments[j], item)) break;
      }
      if (j === argsLength) result.push(item);
    }
    return result;
  };

  // Take the difference between one array and a number of other arrays.
  // Only the elements present in just the first array will remain.
  _.difference = function(array) {
    var rest = flatten(arguments, true, true, 1);
    return _.filter(array, function(value){
      return !_.contains(rest, value);
    });
  };

  // Zip together multiple lists into a single array -- elements that share
  // an index go together.
  _.zip = function() {
    return _.unzip(arguments);
  };

  // Complement of _.zip. Unzip accepts an array of arrays and groups
  // each array's elements on shared indices
  _.unzip = function(array) {
    var length = array && _.max(array, getLength).length || 0;
    var result = Array(length);

    for (var index = 0; index < length; index++) {
      result[index] = _.pluck(array, index);
    }
    return result;
  };

  // Converts lists into objects. Pass either a single array of `[key, value]`
  // pairs, or two parallel arrays of the same length -- one of keys, and one of
  // the corresponding values.
  _.object = function(list, values) {
    var result = {};
    for (var i = 0, length = getLength(list); i < length; i++) {
      if (values) {
        result[list[i]] = values[i];
      } else {
        result[list[i][0]] = list[i][1];
      }
    }
    return result;
  };

  // Generator function to create the findIndex and findLastIndex functions
  function createPredicateIndexFinder(dir) {
    return function(array, predicate, context) {
      predicate = cb(predicate, context);
      var length = getLength(array);
      var index = dir > 0 ? 0 : length - 1;
      for (; index >= 0 && index < length; index += dir) {
        if (predicate(array[index], index, array)) return index;
      }
      return -1;
    };
  }

  // Returns the first index on an array-like that passes a predicate test
  _.findIndex = createPredicateIndexFinder(1);
  _.findLastIndex = createPredicateIndexFinder(-1);

  // Use a comparator function to figure out the smallest index at which
  // an object should be inserted so as to maintain order. Uses binary search.
  _.sortedIndex = function(array, obj, iteratee, context) {
    iteratee = cb(iteratee, context, 1);
    var value = iteratee(obj);
    var low = 0, high = getLength(array);
    while (low < high) {
      var mid = Math.floor((low + high) / 2);
      if (iteratee(array[mid]) < value) low = mid + 1; else high = mid;
    }
    return low;
  };

  // Generator function to create the indexOf and lastIndexOf functions
  function createIndexFinder(dir, predicateFind, sortedIndex) {
    return function(array, item, idx) {
      var i = 0, length = getLength(array);
      if (typeof idx == 'number') {
        if (dir > 0) {
            i = idx >= 0 ? idx : Math.max(idx + length, i);
        } else {
            length = idx >= 0 ? Math.min(idx + 1, length) : idx + length + 1;
        }
      } else if (sortedIndex && idx && length) {
        idx = sortedIndex(array, item);
        return array[idx] === item ? idx : -1;
      }
      if (item !== item) {
        idx = predicateFind(slice.call(array, i, length), _.isNaN);
        return idx >= 0 ? idx + i : -1;
      }
      for (idx = dir > 0 ? i : length - 1; idx >= 0 && idx < length; idx += dir) {
        if (array[idx] === item) return idx;
      }
      return -1;
    };
  }

  // Return the position of the first occurrence of an item in an array,
  // or -1 if the item is not included in the array.
  // If the array is large and already in sort order, pass `true`
  // for **isSorted** to use binary search.
  _.indexOf = createIndexFinder(1, _.findIndex, _.sortedIndex);
  _.lastIndexOf = createIndexFinder(-1, _.findLastIndex);

  // Generate an integer Array containing an arithmetic progression. A port of
  // the native Python `range()` function. See
  // [the Python documentation](http://docs.python.org/library/functions.html#range).
  _.range = function(start, stop, step) {
    if (stop == null) {
      stop = start || 0;
      start = 0;
    }
    step = step || 1;

    var length = Math.max(Math.ceil((stop - start) / step), 0);
    var range = Array(length);

    for (var idx = 0; idx < length; idx++, start += step) {
      range[idx] = start;
    }

    return range;
  };

  // Function (ahem) Functions
  // ------------------

  // Determines whether to execute a function as a constructor
  // or a normal function with the provided arguments
  var executeBound = function(sourceFunc, boundFunc, context, callingContext, args) {
    if (!(callingContext instanceof boundFunc)) return sourceFunc.apply(context, args);
    var self = baseCreate(sourceFunc.prototype);
    var result = sourceFunc.apply(self, args);
    if (_.isObject(result)) return result;
    return self;
  };

  // Create a function bound to a given object (assigning `this`, and arguments,
  // optionally). Delegates to **ECMAScript 5**'s native `Function.bind` if
  // available.
  _.bind = function(func, context) {
    if (nativeBind && func.bind === nativeBind) return nativeBind.apply(func, slice.call(arguments, 1));
    if (!_.isFunction(func)) throw new TypeError('Bind must be called on a function');
    var args = slice.call(arguments, 2);
    var bound = function() {
      return executeBound(func, bound, context, this, args.concat(slice.call(arguments)));
    };
    return bound;
  };

  // Partially apply a function by creating a version that has had some of its
  // arguments pre-filled, without changing its dynamic `this` context. _ acts
  // as a placeholder, allowing any combination of arguments to be pre-filled.
  _.partial = function(func) {
    var boundArgs = slice.call(arguments, 1);
    var bound = function() {
      var position = 0, length = boundArgs.length;
      var args = Array(length);
      for (var i = 0; i < length; i++) {
        args[i] = boundArgs[i] === _ ? arguments[position++] : boundArgs[i];
      }
      while (position < arguments.length) args.push(arguments[position++]);
      return executeBound(func, bound, this, this, args);
    };
    return bound;
  };

  // Bind a number of an object's methods to that object. Remaining arguments
  // are the method names to be bound. Useful for ensuring that all callbacks
  // defined on an object belong to it.
  _.bindAll = function(obj) {
    var i, length = arguments.length, key;
    if (length <= 1) throw new Error('bindAll must be passed function names');
    for (i = 1; i < length; i++) {
      key = arguments[i];
      obj[key] = _.bind(obj[key], obj);
    }
    return obj;
  };

  // Memoize an expensive function by storing its results.
  _.memoize = function(func, hasher) {
    var memoize = function(key) {
      var cache = memoize.cache;
      var address = '' + (hasher ? hasher.apply(this, arguments) : key);
      if (!_.has(cache, address)) cache[address] = func.apply(this, arguments);
      return cache[address];
    };
    memoize.cache = {};
    return memoize;
  };

  // Delays a function for the given number of milliseconds, and then calls
  // it with the arguments supplied.
  _.delay = function(func, wait) {
    var args = slice.call(arguments, 2);
    return setTimeout(function(){
      return func.apply(null, args);
    }, wait);
  };

  // Defers a function, scheduling it to run after the current call stack has
  // cleared.
  _.defer = _.partial(_.delay, _, 1);

  // Returns a function, that, when invoked, will only be triggered at most once
  // during a given window of time. Normally, the throttled function will run
  // as much as it can, without ever going more than once per `wait` duration;
  // but if you'd like to disable the execution on the leading edge, pass
  // `{leading: false}`. To disable execution on the trailing edge, ditto.
  _.throttle = function(func, wait, options) {
    var context, args, result;
    var timeout = null;
    var previous = 0;
    if (!options) options = {};
    var later = function() {
      previous = options.leading === false ? 0 : _.now();
      timeout = null;
      result = func.apply(context, args);
      if (!timeout) context = args = null;
    };
    return function() {
      var now = _.now();
      if (!previous && options.leading === false) previous = now;
      var remaining = wait - (now - previous);
      context = this;
      args = arguments;
      if (remaining <= 0 || remaining > wait) {
        if (timeout) {
          clearTimeout(timeout);
          timeout = null;
        }
        previous = now;
        result = func.apply(context, args);
        if (!timeout) context = args = null;
      } else if (!timeout && options.trailing !== false) {
        timeout = setTimeout(later, remaining);
      }
      return result;
    };
  };

  // Returns a function, that, as long as it continues to be invoked, will not
  // be triggered. The function will be called after it stops being called for
  // N milliseconds. If `immediate` is passed, trigger the function on the
  // leading edge, instead of the trailing.
  _.debounce = function(func, wait, immediate) {
    var timeout, args, context, timestamp, result;

    var later = function() {
      var last = _.now() - timestamp;

      if (last < wait && last >= 0) {
        timeout = setTimeout(later, wait - last);
      } else {
        timeout = null;
        if (!immediate) {
          result = func.apply(context, args);
          if (!timeout) context = args = null;
        }
      }
    };

    return function() {
      context = this;
      args = arguments;
      timestamp = _.now();
      var callNow = immediate && !timeout;
      if (!timeout) timeout = setTimeout(later, wait);
      if (callNow) {
        result = func.apply(context, args);
        context = args = null;
      }

      return result;
    };
  };

  // Returns the first function passed as an argument to the second,
  // allowing you to adjust arguments, run code before and after, and
  // conditionally execute the original function.
  _.wrap = function(func, wrapper) {
    return _.partial(wrapper, func);
  };

  // Returns a negated version of the passed-in predicate.
  _.negate = function(predicate) {
    return function() {
      return !predicate.apply(this, arguments);
    };
  };

  // Returns a function that is the composition of a list of functions, each
  // consuming the return value of the function that follows.
  _.compose = function() {
    var args = arguments;
    var start = args.length - 1;
    return function() {
      var i = start;
      var result = args[start].apply(this, arguments);
      while (i--) result = args[i].call(this, result);
      return result;
    };
  };

  // Returns a function that will only be executed on and after the Nth call.
  _.after = function(times, func) {
    return function() {
      if (--times < 1) {
        return func.apply(this, arguments);
      }
    };
  };

  // Returns a function that will only be executed up to (but not including) the Nth call.
  _.before = function(times, func) {
    var memo;
    return function() {
      if (--times > 0) {
        memo = func.apply(this, arguments);
      }
      if (times <= 1) func = null;
      return memo;
    };
  };

  // Returns a function that will be executed at most one time, no matter how
  // often you call it. Useful for lazy initialization.
  _.once = _.partial(_.before, 2);

  // Object Functions
  // ----------------

  // Keys in IE < 9 that won't be iterated by `for key in ...` and thus missed.
  var hasEnumBug = !{toString: null}.propertyIsEnumerable('toString');
  var nonEnumerableProps = ['valueOf', 'isPrototypeOf', 'toString',
                      'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];

  function collectNonEnumProps(obj, keys) {
    var nonEnumIdx = nonEnumerableProps.length;
    var constructor = obj.constructor;
    var proto = (_.isFunction(constructor) && constructor.prototype) || ObjProto;

    // Constructor is a special case.
    var prop = 'constructor';
    if (_.has(obj, prop) && !_.contains(keys, prop)) keys.push(prop);

    while (nonEnumIdx--) {
      prop = nonEnumerableProps[nonEnumIdx];
      if (prop in obj && obj[prop] !== proto[prop] && !_.contains(keys, prop)) {
        keys.push(prop);
      }
    }
  }

  // Retrieve the names of an object's own properties.
  // Delegates to **ECMAScript 5**'s native `Object.keys`
  _.keys = function(obj) {
    if (!_.isObject(obj)) return [];
    if (nativeKeys) return nativeKeys(obj);
    var keys = [];
    for (var key in obj) if (_.has(obj, key)) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve all the property names of an object.
  _.allKeys = function(obj) {
    if (!_.isObject(obj)) return [];
    var keys = [];
    for (var key in obj) keys.push(key);
    // Ahem, IE < 9.
    if (hasEnumBug) collectNonEnumProps(obj, keys);
    return keys;
  };

  // Retrieve the values of an object's properties.
  _.values = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var values = Array(length);
    for (var i = 0; i < length; i++) {
      values[i] = obj[keys[i]];
    }
    return values;
  };

  // Returns the results of applying the iteratee to each element of the object
  // In contrast to _.map it returns an object
  _.mapObject = function(obj, iteratee, context) {
    iteratee = cb(iteratee, context);
    var keys =  _.keys(obj),
          length = keys.length,
          results = {},
          currentKey;
      for (var index = 0; index < length; index++) {
        currentKey = keys[index];
        results[currentKey] = iteratee(obj[currentKey], currentKey, obj);
      }
      return results;
  };

  // Convert an object into a list of `[key, value]` pairs.
  _.pairs = function(obj) {
    var keys = _.keys(obj);
    var length = keys.length;
    var pairs = Array(length);
    for (var i = 0; i < length; i++) {
      pairs[i] = [keys[i], obj[keys[i]]];
    }
    return pairs;
  };

  // Invert the keys and values of an object. The values must be serializable.
  _.invert = function(obj) {
    var result = {};
    var keys = _.keys(obj);
    for (var i = 0, length = keys.length; i < length; i++) {
      result[obj[keys[i]]] = keys[i];
    }
    return result;
  };

  // Return a sorted list of the function names available on the object.
  // Aliased as `methods`
  _.functions = _.methods = function(obj) {
    var names = [];
    for (var key in obj) {
      if (_.isFunction(obj[key])) names.push(key);
    }
    return names.sort();
  };

  // Extend a given object with all the properties in passed-in object(s).
  _.extend = createAssigner(_.allKeys);

  // Assigns a given object with all the own properties in the passed-in object(s)
  // (https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object/assign)
  _.extendOwn = _.assign = createAssigner(_.keys);

  // Returns the first key on an object that passes a predicate test
  _.findKey = function(obj, predicate, context) {
    predicate = cb(predicate, context);
    var keys = _.keys(obj), key;
    for (var i = 0, length = keys.length; i < length; i++) {
      key = keys[i];
      if (predicate(obj[key], key, obj)) return key;
    }
  };

  // Return a copy of the object only containing the whitelisted properties.
  _.pick = function(object, oiteratee, context) {
    var result = {}, obj = object, iteratee, keys;
    if (obj == null) return result;
    if (_.isFunction(oiteratee)) {
      keys = _.allKeys(obj);
      iteratee = optimizeCb(oiteratee, context);
    } else {
      keys = flatten(arguments, false, false, 1);
      iteratee = function(value, key, obj) { return key in obj; };
      obj = Object(obj);
    }
    for (var i = 0, length = keys.length; i < length; i++) {
      var key = keys[i];
      var value = obj[key];
      if (iteratee(value, key, obj)) result[key] = value;
    }
    return result;
  };

   // Return a copy of the object without the blacklisted properties.
  _.omit = function(obj, iteratee, context) {
    if (_.isFunction(iteratee)) {
      iteratee = _.negate(iteratee);
    } else {
      var keys = _.map(flatten(arguments, false, false, 1), String);
      iteratee = function(value, key) {
        return !_.contains(keys, key);
      };
    }
    return _.pick(obj, iteratee, context);
  };

  // Fill in a given object with default properties.
  _.defaults = createAssigner(_.allKeys, true);

  // Creates an object that inherits from the given prototype object.
  // If additional properties are provided then they will be added to the
  // created object.
  _.create = function(prototype, props) {
    var result = baseCreate(prototype);
    if (props) _.extendOwn(result, props);
    return result;
  };

  // Create a (shallow-cloned) duplicate of an object.
  _.clone = function(obj) {
    if (!_.isObject(obj)) return obj;
    return _.isArray(obj) ? obj.slice() : _.extend({}, obj);
  };

  // Invokes interceptor with the obj, and then returns obj.
  // The primary purpose of this method is to "tap into" a method chain, in
  // order to perform operations on intermediate results within the chain.
  _.tap = function(obj, interceptor) {
    interceptor(obj);
    return obj;
  };

  // Returns whether an object has a given set of `key:value` pairs.
  _.isMatch = function(object, attrs) {
    var keys = _.keys(attrs), length = keys.length;
    if (object == null) return !length;
    var obj = Object(object);
    for (var i = 0; i < length; i++) {
      var key = keys[i];
      if (attrs[key] !== obj[key] || !(key in obj)) return false;
    }
    return true;
  };


  // Internal recursive comparison function for `isEqual`.
  var eq = function(a, b, aStack, bStack) {
    // Identical objects are equal. `0 === -0`, but they aren't identical.
    // See the [Harmony `egal` proposal](http://wiki.ecmascript.org/doku.php?id=harmony:egal).
    if (a === b) return a !== 0 || 1 / a === 1 / b;
    // A strict comparison is necessary because `null == undefined`.
    if (a == null || b == null) return a === b;
    // Unwrap any wrapped objects.
    if (a instanceof _) a = a._wrapped;
    if (b instanceof _) b = b._wrapped;
    // Compare `[[Class]]` names.
    var className = toString.call(a);
    if (className !== toString.call(b)) return false;
    switch (className) {
      // Strings, numbers, regular expressions, dates, and booleans are compared by value.
      case '[object RegExp]':
      // RegExps are coerced to strings for comparison (Note: '' + /a/i === '/a/i')
      case '[object String]':
        // Primitives and their corresponding object wrappers are equivalent; thus, `"5"` is
        // equivalent to `new String("5")`.
        return '' + a === '' + b;
      case '[object Number]':
        // `NaN`s are equivalent, but non-reflexive.
        // Object(NaN) is equivalent to NaN
        if (+a !== +a) return +b !== +b;
        // An `egal` comparison is performed for other numeric values.
        return +a === 0 ? 1 / +a === 1 / b : +a === +b;
      case '[object Date]':
      case '[object Boolean]':
        // Coerce dates and booleans to numeric primitive values. Dates are compared by their
        // millisecond representations. Note that invalid dates with millisecond representations
        // of `NaN` are not equivalent.
        return +a === +b;
    }

    var areArrays = className === '[object Array]';
    if (!areArrays) {
      if (typeof a != 'object' || typeof b != 'object') return false;

      // Objects with different constructors are not equivalent, but `Object`s or `Array`s
      // from different frames are.
      var aCtor = a.constructor, bCtor = b.constructor;
      if (aCtor !== bCtor && !(_.isFunction(aCtor) && aCtor instanceof aCtor &&
                               _.isFunction(bCtor) && bCtor instanceof bCtor)
                          && ('constructor' in a && 'constructor' in b)) {
        return false;
      }
    }
    // Assume equality for cyclic structures. The algorithm for detecting cyclic
    // structures is adapted from ES 5.1 section 15.12.3, abstract operation `JO`.

    // Initializing stack of traversed objects.
    // It's done here since we only need them for objects and arrays comparison.
    aStack = aStack || [];
    bStack = bStack || [];
    var length = aStack.length;
    while (length--) {
      // Linear search. Performance is inversely proportional to the number of
      // unique nested structures.
      if (aStack[length] === a) return bStack[length] === b;
    }

    // Add the first object to the stack of traversed objects.
    aStack.push(a);
    bStack.push(b);

    // Recursively compare objects and arrays.
    if (areArrays) {
      // Compare array lengths to determine if a deep comparison is necessary.
      length = a.length;
      if (length !== b.length) return false;
      // Deep compare the contents, ignoring non-numeric properties.
      while (length--) {
        if (!eq(a[length], b[length], aStack, bStack)) return false;
      }
    } else {
      // Deep compare objects.
      var keys = _.keys(a), key;
      length = keys.length;
      // Ensure that both objects contain the same number of properties before comparing deep equality.
      if (_.keys(b).length !== length) return false;
      while (length--) {
        // Deep compare each member
        key = keys[length];
        if (!(_.has(b, key) && eq(a[key], b[key], aStack, bStack))) return false;
      }
    }
    // Remove the first object from the stack of traversed objects.
    aStack.pop();
    bStack.pop();
    return true;
  };

  // Perform a deep comparison to check if two objects are equal.
  _.isEqual = function(a, b) {
    return eq(a, b);
  };

  // Is a given array, string, or object empty?
  // An "empty" object has no enumerable own-properties.
  _.isEmpty = function(obj) {
    if (obj == null) return true;
    if (isArrayLike(obj) && (_.isArray(obj) || _.isString(obj) || _.isArguments(obj))) return obj.length === 0;
    return _.keys(obj).length === 0;
  };

  // Is a given value a DOM element?
  _.isElement = function(obj) {
    return !!(obj && obj.nodeType === 1);
  };

  // Is a given value an array?
  // Delegates to ECMA5's native Array.isArray
  _.isArray = nativeIsArray || function(obj) {
    return toString.call(obj) === '[object Array]';
  };

  // Is a given variable an object?
  _.isObject = function(obj) {
    var type = typeof obj;
    return type === 'function' || type === 'object' && !!obj;
  };

  // Add some isType methods: isArguments, isFunction, isString, isNumber, isDate, isRegExp, isError.
  _.each(['Arguments', 'Function', 'String', 'Number', 'Date', 'RegExp', 'Error'], function(name) {
    _['is' + name] = function(obj) {
      return toString.call(obj) === '[object ' + name + ']';
    };
  });

  // Define a fallback version of the method in browsers (ahem, IE < 9), where
  // there isn't any inspectable "Arguments" type.
  if (!_.isArguments(arguments)) {
    _.isArguments = function(obj) {
      return _.has(obj, 'callee');
    };
  }

  // Optimize `isFunction` if appropriate. Work around some typeof bugs in old v8,
  // IE 11 (#1621), and in Safari 8 (#1929).
  if (typeof /./ != 'function' && typeof Int8Array != 'object') {
    _.isFunction = function(obj) {
      return typeof obj == 'function' || false;
    };
  }

  // Is a given object a finite number?
  _.isFinite = function(obj) {
    return isFinite(obj) && !isNaN(parseFloat(obj));
  };

  // Is the given value `NaN`? (NaN is the only number which does not equal itself).
  _.isNaN = function(obj) {
    return _.isNumber(obj) && obj !== +obj;
  };

  // Is a given value a boolean?
  _.isBoolean = function(obj) {
    return obj === true || obj === false || toString.call(obj) === '[object Boolean]';
  };

  // Is a given value equal to null?
  _.isNull = function(obj) {
    return obj === null;
  };

  // Is a given variable undefined?
  _.isUndefined = function(obj) {
    return obj === void 0;
  };

  // Shortcut function for checking if an object has a given property directly
  // on itself (in other words, not on a prototype).
  _.has = function(obj, key) {
    return obj != null && hasOwnProperty.call(obj, key);
  };

  // Utility Functions
  // -----------------

  // Run Underscore.js in *noConflict* mode, returning the `_` variable to its
  // previous owner. Returns a reference to the Underscore object.
  _.noConflict = function() {
    root._ = previousUnderscore;
    return this;
  };

  // Keep the identity function around for default iteratees.
  _.identity = function(value) {
    return value;
  };

  // Predicate-generating functions. Often useful outside of Underscore.
  _.constant = function(value) {
    return function() {
      return value;
    };
  };

  _.noop = function(){};

  _.property = property;

  // Generates a function for a given object that returns a given property.
  _.propertyOf = function(obj) {
    return obj == null ? function(){} : function(key) {
      return obj[key];
    };
  };

  // Returns a predicate for checking whether an object has a given set of
  // `key:value` pairs.
  _.matcher = _.matches = function(attrs) {
    attrs = _.extendOwn({}, attrs);
    return function(obj) {
      return _.isMatch(obj, attrs);
    };
  };

  // Run a function **n** times.
  _.times = function(n, iteratee, context) {
    var accum = Array(Math.max(0, n));
    iteratee = optimizeCb(iteratee, context, 1);
    for (var i = 0; i < n; i++) accum[i] = iteratee(i);
    return accum;
  };

  // Return a random integer between min and max (inclusive).
  _.random = function(min, max) {
    if (max == null) {
      max = min;
      min = 0;
    }
    return min + Math.floor(Math.random() * (max - min + 1));
  };

  // A (possibly faster) way to get the current timestamp as an integer.
  _.now = Date.now || function() {
    return new Date().getTime();
  };

   // List of HTML entities for escaping.
  var escapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#x27;',
    '`': '&#x60;'
  };
  var unescapeMap = _.invert(escapeMap);

  // Functions for escaping and unescaping strings to/from HTML interpolation.
  var createEscaper = function(map) {
    var escaper = function(match) {
      return map[match];
    };
    // Regexes for identifying a key that needs to be escaped
    var source = '(?:' + _.keys(map).join('|') + ')';
    var testRegexp = RegExp(source);
    var replaceRegexp = RegExp(source, 'g');
    return function(string) {
      string = string == null ? '' : '' + string;
      return testRegexp.test(string) ? string.replace(replaceRegexp, escaper) : string;
    };
  };
  _.escape = createEscaper(escapeMap);
  _.unescape = createEscaper(unescapeMap);

  // If the value of the named `property` is a function then invoke it with the
  // `object` as context; otherwise, return it.
  _.result = function(object, property, fallback) {
    var value = object == null ? void 0 : object[property];
    if (value === void 0) {
      value = fallback;
    }
    return _.isFunction(value) ? value.call(object) : value;
  };

  // Generate a unique integer id (unique within the entire client session).
  // Useful for temporary DOM ids.
  var idCounter = 0;
  _.uniqueId = function(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  };

  // By default, Underscore uses ERB-style template delimiters, change the
  // following template settings to use alternative delimiters.
  _.templateSettings = {
    evaluate    : /<%([\s\S]+?)%>/g,
    interpolate : /<%=([\s\S]+?)%>/g,
    escape      : /<%-([\s\S]+?)%>/g
  };

  // When customizing `templateSettings`, if you don't want to define an
  // interpolation, evaluation or escaping regex, we need one that is
  // guaranteed not to match.
  var noMatch = /(.)^/;

  // Certain characters need to be escaped so that they can be put into a
  // string literal.
  var escapes = {
    "'":      "'",
    '\\':     '\\',
    '\r':     'r',
    '\n':     'n',
    '\u2028': 'u2028',
    '\u2029': 'u2029'
  };

  var escaper = /\\|'|\r|\n|\u2028|\u2029/g;

  var escapeChar = function(match) {
    return '\\' + escapes[match];
  };

  // JavaScript micro-templating, similar to John Resig's implementation.
  // Underscore templating handles arbitrary delimiters, preserves whitespace,
  // and correctly escapes quotes within interpolated code.
  // NB: `oldSettings` only exists for backwards compatibility.
  _.template = function(text, settings, oldSettings) {
    if (!settings && oldSettings) settings = oldSettings;
    settings = _.defaults({}, settings, _.templateSettings);

    // Combine delimiters into one regular expression via alternation.
    var matcher = RegExp([
      (settings.escape || noMatch).source,
      (settings.interpolate || noMatch).source,
      (settings.evaluate || noMatch).source
    ].join('|') + '|$', 'g');

    // Compile the template source, escaping string literals appropriately.
    var index = 0;
    var source = "__p+='";
    text.replace(matcher, function(match, escape, interpolate, evaluate, offset) {
      source += text.slice(index, offset).replace(escaper, escapeChar);
      index = offset + match.length;

      if (escape) {
        source += "'+\n((__t=(" + escape + "))==null?'':_.escape(__t))+\n'";
      } else if (interpolate) {
        source += "'+\n((__t=(" + interpolate + "))==null?'':__t)+\n'";
      } else if (evaluate) {
        source += "';\n" + evaluate + "\n__p+='";
      }

      // Adobe VMs need the match returned to produce the correct offest.
      return match;
    });
    source += "';\n";

    // If a variable is not specified, place data values in local scope.
    if (!settings.variable) source = 'with(obj||{}){\n' + source + '}\n';

    source = "var __t,__p='',__j=Array.prototype.join," +
      "print=function(){__p+=__j.call(arguments,'');};\n" +
      source + 'return __p;\n';

    try {
      var render = new Function(settings.variable || 'obj', '_', source);
    } catch (e) {
      e.source = source;
      throw e;
    }

    var template = function(data) {
      return render.call(this, data, _);
    };

    // Provide the compiled source as a convenience for precompilation.
    var argument = settings.variable || 'obj';
    template.source = 'function(' + argument + '){\n' + source + '}';

    return template;
  };

  // Add a "chain" function. Start chaining a wrapped Underscore object.
  _.chain = function(obj) {
    var instance = _(obj);
    instance._chain = true;
    return instance;
  };

  // OOP
  // ---------------
  // If Underscore is called as a function, it returns a wrapped object that
  // can be used OO-style. This wrapper holds altered versions of all the
  // underscore functions. Wrapped objects may be chained.

  // Helper function to continue chaining intermediate results.
  var result = function(instance, obj) {
    return instance._chain ? _(obj).chain() : obj;
  };

  // Add your own custom functions to the Underscore object.
  _.mixin = function(obj) {
    _.each(_.functions(obj), function(name) {
      var func = _[name] = obj[name];
      _.prototype[name] = function() {
        var args = [this._wrapped];
        push.apply(args, arguments);
        return result(this, func.apply(_, args));
      };
    });
  };

  // Add all of the Underscore functions to the wrapper object.
  _.mixin(_);

  // Add all mutator Array functions to the wrapper.
  _.each(['pop', 'push', 'reverse', 'shift', 'sort', 'splice', 'unshift'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      var obj = this._wrapped;
      method.apply(obj, arguments);
      if ((name === 'shift' || name === 'splice') && obj.length === 0) delete obj[0];
      return result(this, obj);
    };
  });

  // Add all accessor Array functions to the wrapper.
  _.each(['concat', 'join', 'slice'], function(name) {
    var method = ArrayProto[name];
    _.prototype[name] = function() {
      return result(this, method.apply(this._wrapped, arguments));
    };
  });

  // Extracts the result from a wrapped and chained object.
  _.prototype.value = function() {
    return this._wrapped;
  };

  // Provide unwrapping proxy for some methods used in engine operations
  // such as arithmetic and JSON stringification.
  _.prototype.valueOf = _.prototype.toJSON = _.prototype.value;

  _.prototype.toString = function() {
    return '' + this._wrapped;
  };

  // AMD registration happens at the end for compatibility with AMD loaders
  // that may not enforce next-turn semantics on modules. Even though general
  // practice for AMD registration is to be anonymous, underscore registers
  // as a named module because, like jQuery, it is a base library that is
  // popular enough to be bundled in a third party lib, but not be part of
  // an AMD load request. Those cases could generate an error when an
  // anonymous define() is called outside of a loader request.
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
      return _;
    }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  }
}.call(this));


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _appRouter = __webpack_require__(13);

var _paperMaterial = __webpack_require__(18);

var _paperMaterial2 = _interopRequireDefault(_paperMaterial);

var _splash = __webpack_require__(12);

var _splash2 = _interopRequireDefault(_splash);

var _login = __webpack_require__(5);

var _login2 = _interopRequireDefault(_login);

var _main = __webpack_require__(6);

var _main2 = _interopRequireDefault(_main);

var _map = __webpack_require__(7);

var _map2 = _interopRequireDefault(_map);

var _profile = __webpack_require__(11);

var _profile2 = _interopRequireDefault(_profile);

var _app = __webpack_require__(30);

var _app2 = _interopRequireDefault(_app);

var _loader = __webpack_require__(14);

var _loader2 = _interopRequireDefault(_loader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
	return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var App = function (_CustomElement2) {
	_inherits(App, _CustomElement2);

	function App() {
		_classCallCheck(this, App);

		var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this));

		var shadowRoot = _this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = _app2.default;

		return _this;
	}

	return App;
}(_CustomElement);

exports.default = App;


customElements.define('my-app', App);
customElements.whenDefined('my-app').then(function () {
	console.log('registered my-app');
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _login = __webpack_require__(32);

var _login2 = _interopRequireDefault(_login);

var _login3 = __webpack_require__(31);

var _login4 = _interopRequireDefault(_login3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
		return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);


var templateObj = new _template2.default(_login4.default, _login2.default);

var AppLogin = function (_CustomElement2) {
		_inherits(AppLogin, _CustomElement2);

		function AppLogin() {
				_classCallCheck(this, AppLogin);

				var _this = _possibleConstructorReturn(this, (AppLogin.__proto__ || Object.getPrototypeOf(AppLogin)).call(this));

				_this._shadowRoot = _this.attachShadow({ mode: 'open' });
				_this._shadowRoot.innerHTML = templateObj.template;
				_this.initDOMRefs();
				_this.addListeners();
				return _this;
		}

		_createClass(AppLogin, [{
				key: 'initDOMRefs',
				value: function initDOMRefs() {
						this.$user = this._shadowRoot.querySelector("#txtUser");
						this.$password = this._shadowRoot.querySelector("#txtPassword");
						this.$btnLogin = this._shadowRoot.querySelector("#btnLogin");
				}
		}, {
				key: 'addListeners',
				value: function addListeners() {
						this.$btnLogin.addEventListener("click", this.login.bind(this));
				}
		}, {
				key: 'connectedCallback',
				value: function connectedCallback() {}
		}, {
				key: 'login',
				value: function login(e) {
						var user = this.$user.value;
						var password = this.$password.value;
						//alert("Hola Mundo");
						document.location.hash = "#/main";
						console.log(user, password);
				}
		}, {
				key: 'render',
				value: function render() {
						this._shadowRoot.innerHTML = template.render(this.data);
				}
		}]);

		return AppLogin;
}(_CustomElement);

exports.default = AppLogin;


var nameWebComponent = "app-login";
var component = AppLogin;
customElements.define(nameWebComponent, component);
customElements.whenDefined(nameWebComponent).then(function () {
		console.log('registered ' + nameWebComponent);
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _appCarouselChips = __webpack_require__(1);

var _appCarouselChips2 = _interopRequireDefault(_appCarouselChips);

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _main = __webpack_require__(34);

var _main2 = _interopRequireDefault(_main);

var _main3 = __webpack_require__(33);

var _main4 = _interopRequireDefault(_main3);

__webpack_require__(9);

__webpack_require__(8);

__webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
	return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var templateObj = new _template2.default(_main4.default, _main2.default);

var AppMain = function (_CustomElement2) {
	_inherits(AppMain, _CustomElement2);

	function AppMain() {
		_classCallCheck(this, AppMain);

		var _this = _possibleConstructorReturn(this, (AppMain.__proto__ || Object.getPrototypeOf(AppMain)).call(this));

		var shadowRoot = _this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = templateObj.template;
		_this.initDOMRefs();
		_this.addListerners();
		_this.showSubView = false;

		return _this;
	}

	_createClass(AppMain, [{
		key: 'initDOMRefs',
		value: function initDOMRefs() {
			this.$chips = this.shadowRoot.querySelector('app-carousel-chips');
			this.$footer = this.shadowRoot.querySelector('.footer-container');
			this.$footerTitle = this.shadowRoot.querySelector('.footer-title');
			this.$footerLogo = this.shadowRoot.querySelector('.footer-logo');
			this.$footerDescription = this.shadowRoot.querySelector('.footer-description');
			this.$footerImg = this.shadowRoot.querySelector('#footer-img');
			this.$inputContainer = this.shadowRoot.querySelector('.input-container');
			this.$subviewContent = this.shadowRoot.querySelector('.subview-content');
			this.$map = this.shadowRoot.querySelector('#main-map');
		}
	}, {
		key: 'addListerners',
		value: function addListerners() {

			this.$chips.addEventListener('changed-chip', this.showFooter.bind(this));
			this.$footerLogo.addEventListener('click', this.showSubView.bind(this));
		}
	}, {
		key: 'showFooter',
		value: function showFooter(e) {
			console.log("changed-chip", e);
			if (e.detail.active) {
				this.$footer.classList.remove('hidden');

				animate(this.$footerLogo, 'animated', 'zoomIn');
			} else {
				this.$footer.classList.add('hidden');

				animate(this.$footerLogo, 'animated', 'zoomOut');
			}
			this.footerTitle = e.detail.data.title;
			this.footerDescription = e.detail.data.description;
			this.$footerImg.setAttribute("src", e.detail.data.logo);
			this.moduleName = e.detail.data.module;
			this.render();
		}
	}, {
		key: 'showMainElements',
		value: function showMainElements(val) {
			if (!val) {
				this.$chips.style.visibility = 'hidden';
				this.$inputContainer.style.visibility = 'hidden';
			} else {
				this.$chips.style.visibility = 'visible';
				this.$inputContainer.style.visibility = 'visible';
			}
		}
	}, {
		key: 'showSubView',
		value: function showSubView() {
			//document.location.hash="/main/padron"
			this.showSubView = !this.showSubView;
			if (this.showSubView) {
				this.$footer.classList.add('showAll');
				this.showMainElements(false);
				this.$subviewContent.classList.remove('hidden');
				animate(this.$footerLogo, 'animated', 'rubberBand');
				var module = document.createElement(this.moduleName);
				this.$subviewContent.innerHTML = '';
				this.$subviewContent.appendChild(module);
			} else {
				this.$footer.classList.remove('showAll');
				this.showMainElements(true);
				animate(this.$footerLogo, 'animated', 'rubberBand');
				this.$subviewContent.classList.add('hidden');
			}
		}
	}, {
		key: 'connectedCallback',
		value: function connectedCallback() {
			var self = this;
			document.addEventListener("mapReady", function (e) {
				self.$map.addMarker({
					lat: -12.1417,
					lng: -77.0167
				});

				self.$map.addMarker({
					lat: -12.117880,
					lng: -77.033043
				});
			});
		}
	}, {
		key: 'render',
		value: function render() {
			this.$footerTitle.innerHTML = this.footerTitle;
			this.$footerDescription.innerHTML = this.footerDescription;
		}
	}]);

	return AppMain;
}(_CustomElement);

exports.default = AppMain;


var nameWebComponent = "app-main";
var component = AppMain;

customElements.define(nameWebComponent, component);
customElements.whenDefined(nameWebComponent).then(function () {
	console.log('registered ' + nameWebComponent);
});

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _map = __webpack_require__(35);

var _map2 = _interopRequireDefault(_map);

var _map3 = __webpack_require__(36);

var _map4 = _interopRequireDefault(_map3);

var _niceMap = __webpack_require__(15);

var _niceMap2 = _interopRequireDefault(_niceMap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
	return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var templateObj = new _template2.default(_map2.default, _map4.default);

var AppMap = function (_CustomElement2) {
	_inherits(AppMap, _CustomElement2);

	function AppMap() {
		_classCallCheck(this, AppMap);

		var _this = _possibleConstructorReturn(this, (AppMap.__proto__ || Object.getPrototypeOf(AppMap)).call(this));

		var shadowRoot = _this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = templateObj.template;
		_this.initDOMRefs();
		return _this;
	}

	_createClass(AppMap, [{
		key: 'initDOMRefs',
		value: function initDOMRefs() {
			// this.$chipsContainer = this.shadowRoot.querySelector("#chip-container");
			// this.$chipsTemplate = this.shadowRoot.querySelector(this.$chipsContainer.getAttribute('ref'));
		}
	}, {
		key: 'connectedCallback',
		value: function connectedCallback() {
			// this.$chipsContainer.innerHTML = Template.render(this.$chipsTemplate.innerHTML,this.data.modules);
		}
	}]);

	return AppMap;
}(_CustomElement);

exports.default = AppMap;

var nameWebComponent = "app-map";

var component = AppMap;

customElements.define(nameWebComponent, component);
customElements.whenDefined(nameWebComponent).then(function () {
	console.log('registered ' + nameWebComponent);
});

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _appCarouselChips = __webpack_require__(1);

var _appCarouselChips2 = _interopRequireDefault(_appCarouselChips);

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _moduleInv = __webpack_require__(38);

var _moduleInv2 = _interopRequireDefault(_moduleInv);

var _moduleInv3 = __webpack_require__(37);

var _moduleInv4 = _interopRequireDefault(_moduleInv3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
		return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var templateObj = new _template2.default(_moduleInv4.default, _moduleInv2.default);

var ModuleInv = function (_CustomElement2) {
		_inherits(ModuleInv, _CustomElement2);

		function ModuleInv() {
				_classCallCheck(this, ModuleInv);

				var _this = _possibleConstructorReturn(this, (ModuleInv.__proto__ || Object.getPrototypeOf(ModuleInv)).call(this));

				var shadowRoot = _this.attachShadow({ mode: 'open' });
				shadowRoot.innerHTML = templateObj.template;
				_this.initDOMRefs();
				_this.addListerners();

				return _this;
		}

		_createClass(ModuleInv, [{
				key: 'initDOMRefs',
				value: function initDOMRefs() {}
		}, {
				key: 'addListerners',
				value: function addListerners() {}
		}, {
				key: 'connectedCallback',
				value: function connectedCallback() {}
		}, {
				key: 'render',
				value: function render() {}
		}]);

		return ModuleInv;
}(_CustomElement);

exports.default = ModuleInv;


var nameWebComponent = "module-inv";
var component = ModuleInv;

customElements.define(nameWebComponent, component);
customElements.whenDefined(nameWebComponent).then(function () {
		console.log('registered ' + nameWebComponent);
});

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _appCarouselChips = __webpack_require__(1);

var _appCarouselChips2 = _interopRequireDefault(_appCarouselChips);

__webpack_require__(2);

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _modulePad = __webpack_require__(40);

var _modulePad2 = _interopRequireDefault(_modulePad);

var _modulePad3 = __webpack_require__(39);

var _modulePad4 = _interopRequireDefault(_modulePad3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
		return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var templateObj = new _template2.default(_modulePad4.default, _modulePad2.default);

var ModulePad = function (_CustomElement2) {
		_inherits(ModulePad, _CustomElement2);

		function ModulePad() {
				_classCallCheck(this, ModulePad);

				var _this = _possibleConstructorReturn(this, (ModulePad.__proto__ || Object.getPrototypeOf(ModulePad)).call(this));

				var shadowRoot = _this.attachShadow({ mode: 'open' });
				shadowRoot.innerHTML = templateObj.template;
				_this.initDOMRefs();
				_this.addListerners();

				return _this;
		}

		_createClass(ModulePad, [{
				key: 'initDOMRefs',
				value: function initDOMRefs() {}
		}, {
				key: 'addListerners',
				value: function addListerners() {}
		}, {
				key: 'connectedCallback',
				value: function connectedCallback() {}
		}, {
				key: 'render',
				value: function render() {}
		}]);

		return ModulePad;
}(_CustomElement);

exports.default = ModulePad;


var nameWebComponent = "module-pad";
var component = ModulePad;

customElements.define(nameWebComponent, component);
customElements.whenDefined(nameWebComponent).then(function () {
		console.log('registered ' + nameWebComponent);
});

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
		value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _appCarouselChips = __webpack_require__(1);

var _appCarouselChips2 = _interopRequireDefault(_appCarouselChips);

__webpack_require__(2);

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _modulePcr = __webpack_require__(42);

var _modulePcr2 = _interopRequireDefault(_modulePcr);

var _modulePcr3 = __webpack_require__(41);

var _modulePcr4 = _interopRequireDefault(_modulePcr3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
		return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var templateObj = new _template2.default(_modulePcr4.default, _modulePcr2.default);

var ModulePcr = function (_CustomElement2) {
		_inherits(ModulePcr, _CustomElement2);

		function ModulePcr() {
				_classCallCheck(this, ModulePcr);

				var _this = _possibleConstructorReturn(this, (ModulePcr.__proto__ || Object.getPrototypeOf(ModulePcr)).call(this));

				var shadowRoot = _this.attachShadow({ mode: 'open' });
				shadowRoot.innerHTML = templateObj.template;
				_this.initDOMRefs();
				_this.addListerners();

				return _this;
		}

		_createClass(ModulePcr, [{
				key: 'initDOMRefs',
				value: function initDOMRefs() {}
		}, {
				key: 'addListerners',
				value: function addListerners() {}
		}, {
				key: 'connectedCallback',
				value: function connectedCallback() {}
		}, {
				key: 'render',
				value: function render() {}
		}]);

		return ModulePcr;
}(_CustomElement);

exports.default = ModulePcr;


var nameWebComponent = "module-pcr";
var component = ModulePcr;

customElements.define(nameWebComponent, component);
customElements.whenDefined(nameWebComponent).then(function () {
		console.log('registered ' + nameWebComponent);
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _index = __webpack_require__(43);

var _index2 = _interopRequireDefault(_index);

var _main = __webpack_require__(44);

var _main2 = _interopRequireDefault(_main);

var _niceStep = __webpack_require__(16);

var _niceStep2 = _interopRequireDefault(_niceStep);

var _niceStepper = __webpack_require__(17);

var _niceStepper2 = _interopRequireDefault(_niceStepper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
	return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var templateObj = new _template2.default(_main2.default, _index2.default);

var AppProfile = function (_CustomElement2) {
	_inherits(AppProfile, _CustomElement2);

	function AppProfile() {
		_classCallCheck(this, AppProfile);

		var _this = _possibleConstructorReturn(this, (AppProfile.__proto__ || Object.getPrototypeOf(AppProfile)).call(this));

		var shadowRoot = _this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = templateObj.template;
		_this.initDOMRefs();
		return _this;
	}

	_createClass(AppProfile, [{
		key: 'initDOMRefs',
		value: function initDOMRefs() {
			// this.$chipsContainer = this.shadowRoot.querySelector("#chip-container");
			// this.$chipsTemplate = this.shadowRoot.querySelector(this.$chipsContainer.getAttribute('ref'));
		}
	}, {
		key: 'connectedCallback',
		value: function connectedCallback() {
			// this.$chipsContainer.innerHTML = Template.render(this.$chipsTemplate.innerHTML,this.data.modules);
		}
	}]);

	return AppProfile;
}(_CustomElement);

exports.default = AppProfile;

var nameWebComponent = "app-profile";

var component = AppProfile;

customElements.define(nameWebComponent, component);
customElements.whenDefined(nameWebComponent).then(function () {
	console.log('registered ' + nameWebComponent);
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _splash = __webpack_require__(46);

var _splash2 = _interopRequireDefault(_splash);

var _splash3 = __webpack_require__(45);

var _splash4 = _interopRequireDefault(_splash3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var templateObj = new _template2.default(_splash4.default, _splash2.default);

var AppSplash = function (_CustomElement2) {
    _inherits(AppSplash, _CustomElement2);

    function AppSplash() {
        _classCallCheck(this, AppSplash);

        var _this = _possibleConstructorReturn(this, (AppSplash.__proto__ || Object.getPrototypeOf(AppSplash)).call(this));

        var shadowRoot = _this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = templateObj.template;
        _this.initDOMRefs();
        return _this;
    }

    _createClass(AppSplash, [{
        key: 'initDOMRefs',
        value: function initDOMRefs() {
            this.$logo = this.shadowRoot.querySelector('#logo');
        }
    }, {
        key: 'connectedCallback',
        value: function connectedCallback() {
            var _this2 = this;

            setTimeout(function () {
                animate(_this2.$logo, 'animated', 'flipInX');
            }, 2000);

            setTimeout(function () {
                document.location.hash = "#/login";
            }, 4000);
        }
    }]);

    return AppSplash;
}(_CustomElement);

exports.default = AppSplash;

var nameWebComponent = "app-splash";
var component = AppSplash;

customElements.define(nameWebComponent, component);
customElements.whenDefined(nameWebComponent).then(function () {
    console.log('registered ' + nameWebComponent);
});

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


// @license Copyright (C) 2015 Erik Ringsmuth - MIT license
(function (window, document) {
  var utilities = {};
  var importedURIs = {};
  var isIE = 'ActiveXObject' in window;
  var isEdge = !!window.navigator.userAgent.match(/Edge/);
  var previousUrl = {};

  // <app-router
  //   init="auto|manual"
  //   mode="auto|hash|hashbang|pushstate"
  //   trailingSlash="strict|ignore"
  //   typecast="auto|string"
  //   bindRouter
  //   ></app-router>
  var AppRouter = Object.create(HTMLElement.prototype);
  AppRouter.util = utilities;

  // <app-route
  //   path="/path"
  //   import="/page/cust-el.html"
  //   element[="cust-el"]
  //   template[="template-id"]
  //   regex
  //   redirect="/path"
  //   onUrlChange="reload|updateModel|noop"
  //   bindRouter
  //   ></app-route>
  document.registerElement('app-route', {
    prototype: Object.create(HTMLElement.prototype)
  });

  // Initial set up when attached
  AppRouter.attachedCallback = function () {
    // init="auto|manual"
    if (this.getAttribute('init') !== 'manual') {
      this.init();
    }
  };

  // Initialize the router
  AppRouter.init = function () {
    var router = this;
    if (router.isInitialized) {
      return;
    }
    router.isInitialized = true;

    // trailingSlash="strict|ignore"
    if (!router.hasAttribute('trailingSlash')) {
      router.setAttribute('trailingSlash', 'strict');
    }

    // mode="auto|hash|hashbang|pushstate"
    if (!router.hasAttribute('mode')) {
      router.setAttribute('mode', 'auto');
    }

    // typecast="auto|string"
    if (!router.hasAttribute('typecast')) {
      router.setAttribute('typecast', 'auto');
    }

    // scroll-to-hash="auto|disabled"
    if (!router.hasAttribute('scroll-to-hash')) {
      router.setAttribute('scroll-to-hash', 'auto');
    }

    // <app-router core-animated-pages transitions="hero-transition cross-fade">
    if (router.hasAttribute('core-animated-pages')) {
      // use shadow DOM to wrap the <app-route> elements in a <core-animated-pages> element
      // <app-router>
      //   # shadowRoot
      //   <core-animated-pages>
      //     # content in the light DOM
      //     <app-route element="home-page">
      //       <home-page>
      //       </home-page>
      //     </app-route>
      //   </core-animated-pages>
      // </app-router>
      router.createShadowRoot();
      router.coreAnimatedPages = document.createElement('core-animated-pages');
      router.coreAnimatedPages.appendChild(document.createElement('content'));

      // don't know why it needs to be static, but absolute doesn't display the page
      router.coreAnimatedPages.style.position = 'static';

      // toggle the selected page using selected="path" instead of selected="integer"
      router.coreAnimatedPages.setAttribute('valueattr', 'path');

      // pass the transitions attribute from <app-router core-animated-pages transitions="hero-transition cross-fade">
      // to <core-animated-pages transitions="hero-transition cross-fade">
      router.coreAnimatedPages.setAttribute('transitions', router.getAttribute('transitions'));

      // set the shadow DOM's content
      router.shadowRoot.appendChild(router.coreAnimatedPages);

      // when a transition finishes, remove the previous route's content. there is a temporary overlap where both
      // the new and old route's content is in the DOM to animate the transition.
      router.coreAnimatedPages.addEventListener('core-animated-pages-transition-end', function () {
        // with core-animated-pages, navigating to the same route twice quickly will set the new route to both the
        // activeRoute and the previousRoute before the animation finishes. we don't want to delete the route content
        // if it's actually the active route.
        if (router.previousRoute && !router.previousRoute.hasAttribute('active')) {
          deactivateRoute(router.previousRoute);
        }
      });
    }

    // listen for URL change events
    router.stateChangeHandler = stateChange.bind(null, router);
    window.addEventListener('popstate', router.stateChangeHandler, false);
    if (isIE || isEdge) {
      // IE & Edge bug. A hashchange is supposed to trigger a popstate event, making popstate the only event you
      // need to listen to. That's not the case in IE & Edge so we make another event listener for it.
      window.addEventListener('hashchange', router.stateChangeHandler, false);
    }

    // load the web component for the current route
    stateChange(router);
  };

  // clean up global event listeners
  AppRouter.detachedCallback = function () {
    window.removeEventListener('popstate', this.stateChangeHandler, false);
    if (isIE || isEdge) {
      window.removeEventListener('hashchange', this.stateChangeHandler, false);
    }
  };

  // go(path, options) Navigate to the path
  //
  // options = {
  //   replace: true
  // }
  AppRouter.go = function (path, options) {
    if (this.getAttribute('mode') !== 'pushstate') {
      // mode == auto, hash or hashbang
      if (this.getAttribute('mode') === 'hashbang') {
        path = '#!' + path;
      } else {
        path = '#' + path;
      }
    }
    var currentState = window.history.state;
    if (options && options.replace === true) {
      window.history.replaceState(currentState, null, path);
    } else {
      window.history.pushState(currentState, null, path);
    }

    // dispatch a popstate event
    try {
      var popstateEvent = new PopStateEvent('popstate', {
        bubbles: false,
        cancelable: false,
        state: currentState
      });

      if ('dispatchEvent_' in window) {
        // FireFox with polyfill
        window.dispatchEvent_(popstateEvent);
      } else {
        // normal
        window.dispatchEvent(popstateEvent);
      }
    } catch (error) {
      // Internet Exploder
      var fallbackEvent = document.createEvent('CustomEvent');
      fallbackEvent.initCustomEvent('popstate', false, false, { state: currentState });
      window.dispatchEvent(fallbackEvent);
    }
  };

  // fire(type, detail, node) - Fire a new CustomEvent(type, detail) on the node
  //
  // listen with document.querySelector('app-router').addEventListener(type, function(event) {
  //   event.detail, event.preventDefault()
  // })
  function fire(type, detail, node) {
    // create a CustomEvent the old way for IE9/10 support
    var event = document.createEvent('CustomEvent');

    // initCustomEvent(type, bubbles, cancelable, detail)
    event.initCustomEvent(type, false, true, detail);

    // returns false when event.preventDefault() is called, true otherwise
    return node.dispatchEvent(event);
  }

  // Find the first <app-route> that matches the current URL and change the active route
  function stateChange(router) {
    var url = utilities.parseUrl(window.location.href, router.getAttribute('mode'));

    // don't load a new route if only the hash fragment changed
    if (url.hash !== previousUrl.hash && url.path === previousUrl.path && url.search === previousUrl.search && url.isHashPath === previousUrl.isHashPath) {
      if (router.getAttribute('scroll-to-hash') !== 'disabled') {
        scrollToHash(url.hash);
      }
      previousUrl = url;
      return;
    }
    previousUrl = url;

    // fire a state-change event on the app-router and return early if the user called event.preventDefault()
    var eventDetail = {
      path: url.path,
      state: window.history.state
    };
    if (!fire('state-change', eventDetail, router)) {
      return;
    }

    // find the first matching route
    var route = router.firstElementChild;
    while (route) {
      if (route.tagName === 'APP-ROUTE' && utilities.testRoute(route.getAttribute('path'), url.path, router.getAttribute('trailingSlash'), route.hasAttribute('regex'))) {
        activateRoute(router, route, url);
        return;
      }
      route = route.nextSibling;
    }

    fire('not-found', eventDetail, router);
  }

  // Activate the route
  function activateRoute(router, route, url) {
    if (route.hasAttribute('redirect')) {
      router.go(route.getAttribute('redirect'), { replace: true });
      return;
    }

    // if we're on the same route and `onUrlChange="noop"` then don't reload the route or update the model
    if (route === router.activeRoute && route.getAttribute('onUrlChange') === 'noop') {
      return;
    }

    var eventDetail = {
      path: url.path,
      route: route,
      oldRoute: router.activeRoute,
      state: window.history.state
    };
    if (!fire('activate-route-start', eventDetail, router)) {
      return;
    }
    if (!fire('activate-route-start', eventDetail, route)) {
      return;
    }

    // keep track of the route currently being loaded
    router.loadingRoute = route;

    // if we're on the same route and `onUrlChange="updateModel"` then update the model but don't replace the page content
    if (route === router.activeRoute && route.getAttribute('onUrlChange') === 'updateModel') {
      updateModelAndActivate(router, route, url, eventDetail);
    }
    // import custom element or template
    else if (route.hasAttribute('import')) {
        importAndActivate(router, route.getAttribute('import'), route, url, eventDetail);
      }
      // pre-loaded custom element
      else if (route.hasAttribute('element')) {
          activateCustomElement(router, route.getAttribute('element'), route, url, eventDetail);
        }
        // inline template
        else if (route.firstElementChild && route.firstElementChild.tagName === 'TEMPLATE') {
            // mark the route as an inline template so we know how to clean it up when we remove the route's content
            route.isInlineTemplate = true;
            activateTemplate(router, route.firstElementChild, route, url, eventDetail);
          }
  }

  // If we are only hiding and showing the route, update the model and activate the route
  function updateModelAndActivate(router, route, url, eventDetail) {
    var model = createModel(router, route, url, eventDetail);

    if (route.hasAttribute('template') || route.isInlineTemplate) {
      // update the template model
      setObjectProperties(route.lastElementChild.templateInstance.model, model);
    } else {
      // update the custom element model
      setObjectProperties(route.firstElementChild, model);
    }

    fire('activate-route-end', eventDetail, router);
    fire('activate-route-end', eventDetail, eventDetail.route);
  }

  // Import and activate a custom element or template
  function importAndActivate(router, importUri, route, url, eventDetail) {
    var importLink;
    function importLoadedCallback() {
      importLink.loaded = true;
      activateImport(router, importLink, importUri, route, url, eventDetail);
    }
    function importErrorCallback(event) {
      var errorDetail = {
        errorEvent: event,
        importUri: importUri,
        routeDetail: eventDetail
      };
      fire('import-error', errorDetail, router);
      fire('import-error', errorDetail, route);
    }

    if (!importedURIs.hasOwnProperty(importUri)) {
      // hasn't been imported yet
      importLink = document.createElement('link');
      importLink.setAttribute('rel', 'import');
      importLink.setAttribute('href', importUri);
      importLink.setAttribute('async', 'async');
      importLink.addEventListener('load', importLoadedCallback);
      importLink.addEventListener('error', importErrorCallback);
      importLink.loaded = false;
      document.head.appendChild(importLink);
      importedURIs[importUri] = importLink;
    } else {
      // previously imported. this is an async operation and may not be complete yet.
      importLink = importedURIs[importUri];
      if (!importLink.loaded) {
        importLink.addEventListener('load', importLoadedCallback);
        importLink.addEventListener('error', importErrorCallback);
      } else {
        activateImport(router, importLink, importUri, route, url, eventDetail);
      }
    }
  }

  // Activate the imported custom element or template
  function activateImport(router, importLink, importUri, route, url, eventDetail) {
    // allow referencing the route's import link in the activate-route-end callback
    route.importLink = importLink;

    // make sure the user didn't navigate to a different route while it loaded
    if (route === router.loadingRoute) {
      if (route.hasAttribute('template')) {
        // template
        var templateId = route.getAttribute('template');
        var template;
        if (templateId) {
          template = importLink.import.getElementById(templateId);
        } else {
          template = importLink.import.querySelector('template');
        }
        activateTemplate(router, template, route, url, eventDetail);
      } else {
        // custom element
        activateCustomElement(router, route.getAttribute('element') || importUri.split('/').slice(-1)[0].replace('.html', ''), route, url, eventDetail);
      }
    }
  }

  // Data bind the custom element then activate it
  function activateCustomElement(router, elementName, route, url, eventDetail) {
    var customElement = document.createElement(elementName);
    var model = createModel(router, route, url, eventDetail);
    setObjectProperties(customElement, model);
    activateElement(router, customElement, url, eventDetail);
  }

  // Create an instance of the template
  function activateTemplate(router, template, route, url, eventDetail) {
    var templateInstance;
    if ('createInstance' in template) {
      // template.createInstance(model) is a Polymer method that binds a model to a template and also fixes
      // https://github.com/erikringsmuth/app-router/issues/19
      var model = createModel(router, route, url, eventDetail);
      templateInstance = template.createInstance(model);
    } else {
      templateInstance = document.importNode(template.content, true);
    }
    activateElement(router, templateInstance, url, eventDetail);
  }

  // Create the route's model
  function createModel(router, route, url, eventDetail) {
    var model = utilities.routeArguments(route.getAttribute('path'), url.path, url.search, route.hasAttribute('regex'), router.getAttribute('typecast') === 'auto');
    if (route.hasAttribute('bindRouter') || router.hasAttribute('bindRouter')) {
      model.router = router;
    }
    eventDetail.model = model;
    fire('before-data-binding', eventDetail, router);
    fire('before-data-binding', eventDetail, eventDetail.route);
    return eventDetail.model;
  }

  // Copy properties from one object to another
  function setObjectProperties(object, model) {
    for (var property in model) {
      if (model.hasOwnProperty(property)) {
        object[property] = model[property];
      }
    }
  }

  // Replace the active route's content with the new element
  function activateElement(router, element, url, eventDetail) {
    // when using core-animated-pages, the router doesn't remove the previousRoute's content right away. if you
    // navigate between 3 routes quickly (ex: /a -> /b -> /c) you might set previousRoute to '/b' before '/a' is
    // removed from the DOM. this verifies old content is removed before switching the reference to previousRoute.
    deactivateRoute(router.previousRoute);

    // update references to the activeRoute, previousRoute, and loadingRoute
    router.previousRoute = router.activeRoute;
    router.activeRoute = router.loadingRoute;
    router.loadingRoute = null;
    if (router.previousRoute) {
      router.previousRoute.removeAttribute('active');
    }
    router.activeRoute.setAttribute('active', 'active');

    // remove the old route's content before loading the new route. core-animated-pages temporarily needs the old and
    // new route in the DOM at the same time to animate the transition, otherwise we can remove the old route's content
    // right away. there is one exception for core-animated-pages where the route we're navigating to matches the same
    // route (ex: path="/article/:id" navigating from /article/0 to /article/1). in this case we have to simply replace
    // the route's content instead of animating a transition.
    if (!router.hasAttribute('core-animated-pages') || eventDetail.route === eventDetail.oldRoute) {
      deactivateRoute(router.previousRoute);
    }

    // add the new content
    router.activeRoute.appendChild(element);

    // animate the transition if core-animated-pages are being used
    if (router.hasAttribute('core-animated-pages')) {
      router.coreAnimatedPages.selected = router.activeRoute.getAttribute('path');
      // the 'core-animated-pages-transition-end' event handler in init() will call deactivateRoute() on the previousRoute
    }

    // scroll to the URL hash if it's present
    if (url.hash && !router.hasAttribute('core-animated-pages') && router.getAttribute('scroll-to-hash') !== 'disabled') {
      scrollToHash(url.hash);
    }

    fire('activate-route-end', eventDetail, router);
    fire('activate-route-end', eventDetail, eventDetail.route);
  }

  // Remove the route's content
  function deactivateRoute(route) {
    if (route) {
      // remove the route content
      var node = route.firstChild;

      // don't remove an inline <template>
      if (route.isInlineTemplate) {
        node = route.querySelector('template').nextSibling;
      }

      while (node) {
        var nodeToRemove = node;
        node = node.nextSibling;
        route.removeChild(nodeToRemove);
      }
    }
  }

  // scroll to the element with id="hash" or name="hash"
  function scrollToHash(hash) {
    if (!hash) return;

    // wait for the browser's scrolling to finish before we scroll to the hash
    // ex: http://example.com/#/page1#middle
    // the browser will scroll to an element with id or name `/page1#middle` when the page finishes loading. if it doesn't exist
    // it will scroll to the top of the page. let the browser finish the current event loop and scroll to the top of the page
    // before we scroll to the element with id or name `middle`.
    setTimeout(function () {
      var hashElement;
      try {
        hashElement = document.querySelector('html /deep/ ' + hash) || document.querySelector('html /deep/ [name="' + hash.substring(1) + '"]');
      } catch (e) {
        // DOM exception 12 (unknown selector) is thrown in Firefox, Safari etc. when using Polymer 1.x Shady DOM mode
        hashElement = document.querySelector(hash) || document.querySelector('[name="' + hash.substring(1) + '"]');
      }
      if (hashElement && hashElement.scrollIntoView) {
        hashElement.scrollIntoView(true);
      }
    }, 0);
  }

  // parseUrl(location, mode) - Augment the native URL() constructor to get info about hash paths
  //
  // Example parseUrl('http://domain.com/other/path?queryParam3=false#/example/path?queryParam1=true&queryParam2=example%20string#middle', 'auto')
  //
  // returns {
  //   path: '/example/path',
  //   hash: '#middle'
  //   search: '?queryParam1=true&queryParam2=example%20string',
  //   isHashPath: true
  // }
  //
  // Note: The location must be a fully qualified URL with a protocol like 'http(s)://'
  utilities.parseUrl = function (location, mode) {
    var url = {
      isHashPath: mode === 'hash'
    };

    if (typeof URL === 'function') {
      // browsers that support `new URL()`
      var nativeUrl = new URL(location);
      url.path = nativeUrl.pathname;
      url.hash = nativeUrl.hash;
      url.search = nativeUrl.search;
    } else {
      // IE
      var anchor = document.createElement('a');
      anchor.href = location;
      url.path = anchor.pathname;
      if (url.path.charAt(0) !== '/') {
        url.path = '/' + url.path;
      }
      url.hash = anchor.hash;
      url.search = anchor.search;
    }

    if (mode !== 'pushstate') {
      // auto or hash

      // check for a hash path
      if (url.hash.substring(0, 2) === '#/') {
        // hash path
        url.isHashPath = true;
        url.path = url.hash.substring(1);
      } else if (url.hash.substring(0, 3) === '#!/') {
        // hashbang path
        url.isHashPath = true;
        url.path = url.hash.substring(2);
      } else if (url.isHashPath) {
        // still use the hash if mode="hash"
        if (url.hash.length === 0) {
          url.path = '/';
        } else {
          url.path = url.hash.substring(1);
        }
      }

      if (url.isHashPath) {
        url.hash = '';

        // hash paths might have an additional hash in the hash path for scrolling to a specific part of the page #/hash/path#elementId
        var secondHashIndex = url.path.indexOf('#');
        if (secondHashIndex !== -1) {
          url.hash = url.path.substring(secondHashIndex);
          url.path = url.path.substring(0, secondHashIndex);
        }

        // hash paths get the search from the hash if it exists
        var searchIndex = url.path.indexOf('?');
        if (searchIndex !== -1) {
          url.search = url.path.substring(searchIndex);
          url.path = url.path.substring(0, searchIndex);
        }
      }
    }

    return url;
  };

  // testRoute(routePath, urlPath, trailingSlashOption, isRegExp) - Test if the route's path matches the URL's path
  //
  // Example routePath: '/user/:userId/**'
  // Example urlPath = '/user/123/bio'
  utilities.testRoute = function (routePath, urlPath, trailingSlashOption, isRegExp) {
    // try to fail or succeed as quickly as possible for the most common cases

    // handle trailing slashes (options: strict (default), ignore)
    if (trailingSlashOption === 'ignore') {
      // remove trailing / from the route path and URL path
      if (urlPath.slice(-1) === '/') {
        urlPath = urlPath.slice(0, -1);
      }
      if (routePath.slice(-1) === '/' && !isRegExp) {
        routePath = routePath.slice(0, -1);
      }
    }

    // test regular expressions
    if (isRegExp) {
      return utilities.testRegExString(routePath, urlPath);
    }

    // if the urlPath is an exact match or '*' then the route is a match
    if (routePath === urlPath || routePath === '*') {
      return true;
    }

    // relative routes a/b/c are the same as routes that start with a globstar /**/a/b/c
    if (routePath.charAt(0) !== '/') {
      routePath = '/**/' + routePath;
    }

    // recursively test if the segments match (start at 1 because 0 is always an empty string)
    return segmentsMatch(routePath.split('/'), 1, urlPath.split('/'), 1);
  };

  // segmentsMatch(routeSegments, routeIndex, urlSegments, urlIndex, pathVariables)
  // recursively test the route segments against the url segments in place (without creating copies of the arrays
  // for each recursive call)
  //
  // example routeSegments ['', 'user', ':userId', '**']
  // example urlSegments ['', 'user', '123', 'bio']
  function segmentsMatch(routeSegments, routeIndex, urlSegments, urlIndex, pathVariables) {
    var routeSegment = routeSegments[routeIndex];
    var urlSegment = urlSegments[urlIndex];

    // if we're at the last route segment and it is a globstar, it will match the rest of the url
    if (routeSegment === '**' && routeIndex === routeSegments.length - 1) {
      return true;
    }

    // we hit the end of the route segments or the url segments
    if (typeof routeSegment === 'undefined' || typeof urlSegment === 'undefined') {
      // return true if we hit the end of both at the same time meaning everything else matched, else return false
      return routeSegment === urlSegment;
    }

    // if the current segments match, recursively test the remaining segments
    if (routeSegment === urlSegment || routeSegment === '*' || routeSegment.charAt(0) === ':') {
      // store the path variable if we have a pathVariables object
      if (routeSegment.charAt(0) === ':' && typeof pathVariables !== 'undefined') {
        pathVariables[routeSegment.substring(1)] = urlSegments[urlIndex];
      }
      return segmentsMatch(routeSegments, routeIndex + 1, urlSegments, urlIndex + 1, pathVariables);
    }

    // globstars can match zero to many URL segments
    if (routeSegment === '**') {
      // test if the remaining route segments match any combination of the remaining url segments
      for (var i = urlIndex; i < urlSegments.length; i++) {
        if (segmentsMatch(routeSegments, routeIndex + 1, urlSegments, i, pathVariables)) {
          return true;
        }
      }
    }

    // all tests failed, the route segments do not match the url segments
    return false;
  }

  // routeArguments(routePath, urlPath, search, isRegExp) - Gets the path variables and query parameter values from the URL
  utilities.routeArguments = function (routePath, urlPath, search, isRegExp, typecast) {
    var args = {};

    // regular expressions can't have path variables
    if (!isRegExp) {
      // relative routes a/b/c are the same as routes that start with a globstar /**/a/b/c
      if (routePath.charAt(0) !== '/') {
        routePath = '/**/' + routePath;
      }

      // get path variables
      // urlPath '/customer/123'
      // routePath '/customer/:id'
      // parses id = '123'
      segmentsMatch(routePath.split('/'), 1, urlPath.split('/'), 1, args);
    }

    var queryParameters = search.substring(1).split('&');
    // split() on an empty string has a strange behavior of returning [''] instead of []
    if (queryParameters.length === 1 && queryParameters[0] === '') {
      queryParameters = [];
    }
    for (var i = 0; i < queryParameters.length; i++) {
      var queryParameter = queryParameters[i];
      var queryParameterParts = queryParameter.split('=');
      args[queryParameterParts[0]] = queryParameterParts.splice(1, queryParameterParts.length - 1).join('=');
    }

    if (typecast) {
      // parse the arguments into unescaped strings, numbers, or booleans
      for (var arg in args) {
        args[arg] = utilities.typecast(args[arg]);
      }
    }

    return args;
  };

  // typecast(value) - Typecast the string value to an unescaped string, number, or boolean
  utilities.typecast = function (value) {
    // bool
    if (value === 'true') {
      return true;
    }
    if (value === 'false') {
      return false;
    }

    // number
    if (!isNaN(value) && value !== '' && value.charAt(0) !== '0') {
      return +value;
    }

    // string
    return decodeURIComponent(value);
  };

  // testRegExString(pattern, value) - Parse HTML attribute path="/^\/\w+\/\d+$/i" to a regular
  // expression `new RegExp('^\/\w+\/\d+$', 'i')` and test against it.
  //
  // note that 'i' is the only valid option. global 'g', multiline 'm', and sticky 'y' won't be valid matchers for a path.
  utilities.testRegExString = function (pattern, value) {
    if (pattern.charAt(0) !== '/') {
      // must start with a slash
      return false;
    }
    pattern = pattern.slice(1);
    var options = '';
    if (pattern.slice(-1) === '/') {
      pattern = pattern.slice(0, -1);
    } else if (pattern.slice(-2) === '/i') {
      pattern = pattern.slice(0, -2);
      options = 'i';
    } else {
      // must end with a slash followed by zero or more options
      return false;
    }
    return new RegExp(pattern, options).test(value);
  };

  document.registerElement('app-router', {
    prototype: AppRouter
  });
})(window, document);

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _loader = __webpack_require__(48);

var _loader2 = _interopRequireDefault(_loader);

var _loader3 = __webpack_require__(47);

var _loader4 = _interopRequireDefault(_loader3);

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
	return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);


var templateObj = new _template2.default(_loader4.default, _loader2.default);

/**
 * Helper class for Loader
 */
var LoaderMap = {
	apiMap: {}, // { hash -> Loader }
	/**
  * @param {Function} notifyCallback loaded callback fn(result)
  * @param {string} jsonpCallbackName name of jsonpcallback. If API does not provide it, leave empty. Optional.
  */
	require: function require(url, notifyCallback, jsonpCallbackName) {
		// make hashable string form url
		var name = this.nameFromUrl(url);
		// create a loader as needed
		if (!this.apiMap[name]) this.apiMap[name] = new _Loader(name, url, jsonpCallbackName);
		// ask for notification
		this.apiMap[name].requestNotify(notifyCallback);
	},

	nameFromUrl: function nameFromUrl(url) {
		return url.replace(/[\:\/\%\?\&\.\=\-\,]/g, '_') + '_api';
	}
};

var _Loader = function _Loader(name, url, callbackName) {
	this.notifiers = [];

	if (!callbackName) {
		if (url.indexOf(this.callbackMacro) >= 0) {
			callbackName = name + '_loaded';
			url = url.replace(this.callbackMacro, callbackName);
		} else {
			this.error = new Error('Loader a %%callback%% parameter is required in libraryUrl');
			return;
		}
	}

	this.callbackName = callbackName;
	window[this.callbackName] = this.success.bind(this);
	this.addScript(url);
};

_Loader.prototype = {
	callbackMacro: '%%callback%%',
	loaded: false,

	addScript: function addScript(src) {
		var script = document.createElement('script');
		script.src = src;
		script.onerror = this.handleError.bind(this);
		var s = document.querySelector('script') || document.body;
		s.parentNode.insertBefore(script, s);
		this.script = script;
	},

	removeScript: function removeScript() {
		if (this.script.parentNode) {
			this.script.parentNode.removeChild(this.script);
		}
		this.script = null;
	},

	handleError: function handleError(ev) {
		this.error = new Error("Library failed to load");
		this.notifyAll();
		this.cleanup();
	},

	success: function success() {
		this.loaded = true;
		this.result = Array.prototype.slice.call(arguments);
		this.notifyAll();
		this.cleanup();
	},

	cleanup: function cleanup() {
		delete window[this.callbackName];
	},

	notifyAll: function notifyAll() {
		this.notifiers.forEach(function (notifyCallback) {
			notifyCallback(this.error, this.result);
		}.bind(this));
		this.notifiers = [];
	},

	requestNotify: function requestNotify(notifyCallback) {
		if (this.loaded || this.error) {
			notifyCallback(this.error, this.result);
		} else {
			this.notifiers.push(notifyCallback);
		}
	}
};

/**
 * Load Class charge on load file on async way
 */

var Loader = function (_CustomElement2) {
	_inherits(Loader, _CustomElement2);

	function Loader() {
		_classCallCheck(this, Loader);

		var _this = _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this));

		var shadowRoot = _this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = templateObj.template;
		_this.initDOMRefs();
		_this.addListeners();
		_this.collectDataAttributes();

		return _this;
	}

	_createClass(Loader, [{
		key: 'initDOMRefs',
		value: function initDOMRefs() {
			this.$mapContainer = this.shadowRoot.querySelector("#map-container");
		}
	}, {
		key: 'addListeners',
		value: function addListeners() {}
	}, {
		key: 'collectDataAttributes',
		value: function collectDataAttributes() {
			if (this.attributes['url']) {
				this._url = this.attributes['url'].nodeValue;
			}
		}
	}, {
		key: '_fireLoadedEvent',
		value: function _fireLoadedEvent() {
			document.dispatchEvent(new CustomEvent('loadedComplete', {}));
		}
	}, {
		key: '_libraryLoadCallback',
		value: function _libraryLoadCallback(err, result) {
			if (err) {
				//TODO HANDLE ERROR WHEN THERE IS SOMETHING WRONG WITH THE LOADED
				console.error(err);
			} else {
				this._fireLoadedEvent();
			}
		}
	}, {
		key: '_loadLibrary',
		value: function _loadLibrary() {
			if (this._url) {
				LoaderMap.require(this._url, this._libraryLoadCallback.bind(this));
			}
		}
	}, {
		key: 'connectedCallback',
		value: function connectedCallback() {
			this._loadLibrary();
		}
	}, {
		key: 'attributeChangedCallback',
		value: function attributeChangedCallback(attr, oldValue, newValue) {
			if (attr == 'url') {
				if (newValue) {
					console.log(newValue);
					this._url = newValue;
					this._loadLibrary(newValue);
				}
			}
		}
	}], [{
		key: 'observedAttributes',
		get: function get() {
			return ['url'];
		}
	}]);

	return Loader;
}(_CustomElement);

exports.default = Loader;


customElements.define('nice-loader', Loader);

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _niceMap = __webpack_require__(50);

var _niceMap2 = _interopRequireDefault(_niceMap);

var _niceMap3 = __webpack_require__(49);

var _niceMap4 = _interopRequireDefault(_niceMap3);

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
	return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);


var templateObj = new _template2.default(_niceMap4.default, _niceMap2.default);

var URL = 'https://maps.googleapis.com/maps/api/js?callback=%%callback%%';

var VERSION = '3.exp';

var DEFAULT_CENTER_MAP = {
	lat: -12.046374,
	lng: -77.042793
};

var DEFAULT_ZOOM = 10;

/**
 * Map class
 * Map web component base on google maps API
 * @attributes:
 * 		my-location : Flag that indicate that the map will be center at the current position
 * 		disable-default-ui	: Disable google maps default UI
 * 		center : Default location base on latitude and longitude, if the my-location flag is set, this attribute will be ignored
 * @methods:
 * 		setZoom: Set zoom property
 *		setCurrentLocation: Set location property
 * 		addMarker: Add a new marked(object with lat and lng properties as parameter)
 */

var Map = function (_CustomElement2) {
	_inherits(Map, _CustomElement2);

	function Map() {
		_classCallCheck(this, Map);

		var _this = _possibleConstructorReturn(this, (Map.__proto__ || Object.getPrototypeOf(Map)).call(this));

		var shadowRoot = _this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = templateObj.template;
		_this.map = null;
		_this.initDOMRefs();
		_this.collectDataAttributes();
		_this.addListeners();
		return _this;
	}

	_createClass(Map, [{
		key: 'initDOMRefs',
		value: function initDOMRefs() {
			this.$mapContainer = this.shadowRoot.querySelector("#map-container");
			this.$loaderContainer = this.shadowRoot.querySelector("#loader-container");
		}
	}, {
		key: 'addListeners',
		value: function addListeners() {}

		/**
   * collectDataAttributes - Collect all the "data-" attributes
   *
   * @return {type}	description
   */

	}, {
		key: 'collectDataAttributes',
		value: function collectDataAttributes() {
			if (!this.attributes['api-key']) {
				throw new Error('api-key is required as attribute');
			} else {
				this.apikey = this.attributes['api-key'].nodeValue;
			}

			if (this.attributes['client-id']) {
				this.clientId = this.attributes['client-id'].nodeValue;
			}

			if (this.attributes['language']) {
				this.language = this.attributes['language'].nodeValue;
			}

			if (this.attributes['signed_in']) {
				this.signed_in = this.attributes['signed_in'].nodeValue;
			}

			if ('my-location' in this.attributes) {
				this.my_location = true;
			}

			if ('disable-default-ui' in this.attributes) {
				this.disableDefaultUI = true;
			}

			if (this.attributes['center'] && this.attributes['center'].nodeValue) {
				var center = this.attributes['center'].nodeValue;
				var coordinates = center.split(",");
				if (coordinates.length == 2) {
					this.lng = parseFloat(coordinates[0]);
					this.lat = parseFloat(coordinates[1]);
				} else {
					throw new Error('Invalid center property');
				}
			}
		}
	}, {
		key: 'addMarker',
		value: function addMarker(location) {
			var marker = new google.maps.Marker({
				position: location,
				map: this.map
			});
			// this.mapsMarkers.push(marker);
		}

		/**
   * setZoom - Set map zoom property
   *
   * @param	{integer} zoom Zoom as Integer
   */

	}, {
		key: 'setZoom',
		value: function setZoom(zoom) {
			if (zoom && !isNan(zoom)) {
				this.map.setZoom(zoom);
			} else {
				throw new Error('Invalid zoom');
			}
		}

		/**
   * setLocation - Set location base on lat and lng properties
   *
   * @param	{type} lat description
   * @param	{type} lng description
   * @return {type}		 description
   */

	}, {
		key: 'setLocation',
		value: function setLocation(lat, lng) {
			if (lat && !isNaN(lat) && lng && !isNaN(lng)) {
				var pos = {
					lat: lat,
					lng: lng
				};
				this.map.setCenter(pos);
			}
		}

		/**
   * setCurrentLocation - Set the current position base on the location
   */

	}, {
		key: 'setCurrentLocation',
		value: function setCurrentLocation() {
			var self = this;
			if (navigator.geolocation) {
				navigator.geolocation.getCurrentPosition(function (position) {
					self.setLocation(position.coords.latitude, position.coords.longitude);
				}, function () {
					self.setLocation(DEFAULT_CENTER_MAP.lat, DEFAULT_CENTER_MAP.lng);
				});
			} else {
				// TODO HANDLE ERROR WHEN BROWSER DOESN'T SUPPORT GEOLOCATION
			}
		}

		/**
   * buildMapObjectConfig - Build the default config object for google maps
   *
   * @return {type}	description
   */

	}, {
		key: 'buildMapObjectConfig',
		value: function buildMapObjectConfig() {
			var obj = {
				center: DEFAULT_CENTER_MAP,
				zoom: DEFAULT_ZOOM,
				disableDefaultUI: false
			};

			if (this.lat && !isNaN(this.lat) && this.lng && !isNaN(this.lng)) {
				var lat = this.lat;
				var lng = this.lng;
				obj.center = {
					lat: lat,
					lng: lng
				};
			}

			if (this.zoom && !isNaN(this.zoom)) {
				var zoom = this.zoom;
				obj.zoom = zoom;
			}

			if (this.disableDefaultUI) {
				obj.disableDefaultUI = true;
			}
			return obj;
		}

		/**
   * computeUrl - Build the URL with all the arguments
   *
   * @param	{string} mapsUrl
   * @param	{string} version
   * @param	{string} apiKey
   * @param	{string} clientId
   * @param	{string} language
   * @param	{string} signedIn
   * @return {string}
   */

	}, {
		key: 'computeUrl',
		value: function computeUrl(mapsUrl, version, apiKey, clientId, language, signedIn) {
			var url = mapsUrl + '&v=' + version;
			// Always load all Maps API libraries.
			url += '&libraries=drawing,geometry,places,visualization';
			if (apiKey && !clientId) {
				url += '&key=' + apiKey;
			}
			if (clientId) {
				url += '&client=' + clientId;
			}
			// Log a warning if the user is not using an API Key or Client ID.
			if (!apiKey && !clientId) {
				var warning = 'No Google Maps API Key or Client ID specified. ' + 'See https://developers.google.com/maps/documentation/javascript/get-api-key ' + 'for instructions to get started with a key or client id.';
				console.warn(warning);
			}
			if (language) {
				url += '&language=' + language;
			}
			if (signedIn) {
				url += '&signed_in=' + signedIn;
			}
			return url;
		}
	}, {
		key: 'buildMap',
		value: function buildMap() {
			var container = this.shadowRoot.querySelector('#map-container');
			var mapConfig = this.buildMapObjectConfig();
			this.map = new google.maps.Map(container, mapConfig);
			console.log(this.map);
			// google.maps.event.trigger(this.map,'resize');


			if (this.my_location) {
				this.setCurrentLocation();
			}

			document.dispatchEvent(new CustomEvent('mapReady', {}));

			// console.log(container.innerHTML);
		}
	}, {
		key: 'connectedCallback',
		value: function connectedCallback() {

			var self = this;
			var container = this.shadowRoot.querySelector('#map-container');

			if (container.innerHTML) {
				container.innerHTML = "";
			}

			var url = this.computeUrl(URL, VERSION, this.apikey, this.clientId, this.language, this.signed_in);
			this.$loaderContainer.setAttribute('url', url);

			//EVENT WHEN THE LOADER GET THE LIBRARY , GOOGLE MAPS AVAILABLE
			document.addEventListener("loadedComplete", function (e) {
				self.buildMap();
				console.log('ppppp', container.innerHTML);
			});

			// if (!container.innerHTML ) {
			// 	this.buildMap();
			// }
		}
	}]);

	return Map;
}(_CustomElement);

exports.default = Map;


customElements.define('nice-map', Map);

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _niceStep = __webpack_require__(52);

var _niceStep2 = _interopRequireDefault(_niceStep);

var _niceStep3 = __webpack_require__(51);

var _niceStep4 = _interopRequireDefault(_niceStep3);

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
	return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);


var templateObj = new _template2.default(_niceStep4.default, _niceStep2.default);

var NiceStep = function (_CustomElement2) {
	_inherits(NiceStep, _CustomElement2);

	function NiceStep() {
		_classCallCheck(this, NiceStep);

		var _this = _possibleConstructorReturn(this, (NiceStep.__proto__ || Object.getPrototypeOf(NiceStep)).call(this));

		var shadowRoot = _this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = templateObj.template;
		_this.initDOMRefs();
		_this.collectDataAttributes();
		return _this;
	}

	_createClass(NiceStep, [{
		key: 'initDOMRefs',
		value: function initDOMRefs() {
			this.$stepContainer = this.shadowRoot.querySelector("#step-container");
		}
	}, {
		key: 'collectDataAttributes',
		value: function collectDataAttributes() {
			this.index = null;

			if (this.attributes['data-index']) {
				this.label = parseInt(this.attributes['data-index'].nodeValue);
			}
		}
	}, {
		key: 'connectedCallback',
		value: function connectedCallback() {
			this.$stepContainer.innerHTML = this.innerHTML;
		}
	}]);

	return NiceStep;
}(_CustomElement);

exports.default = NiceStep;


customElements.define('nice-step', NiceStep);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _niceStepper = __webpack_require__(54);

var _niceStepper2 = _interopRequireDefault(_niceStepper);

var _niceStepper3 = __webpack_require__(53);

var _niceStepper4 = _interopRequireDefault(_niceStepper3);

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _paperIcon = __webpack_require__(21);

var _paperIcon2 = _interopRequireDefault(_paperIcon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
	return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);


var templateObj = new _template2.default(_niceStepper4.default, _niceStepper2.default);

var LABEL = "Paso __CURRENT__ de __TOTAL__";

var SELECTED_COLOR = 'black';

var FINAL_BUTTON_LABEL = 'Finalizar';

var Stepper = function (_CustomElement2) {
	_inherits(Stepper, _CustomElement2);

	function Stepper() {
		_classCallCheck(this, Stepper);

		var _this = _possibleConstructorReturn(this, (Stepper.__proto__ || Object.getPrototypeOf(Stepper)).call(this));

		var shadowRoot = _this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = templateObj.template;
		_this.initDOMRefs();
		_this.collectDataAttributes();

		//COUNT THE NUMBERS OF STEPS INSIDE THE STEPPER
		_this.stepsCount = (_this.innerHTML.match(/<nice-step>/g) || []).length;

		//SAVE THE CONTENT BEFORE BUILD THE TEMPLATE
		_this.content = _this.innerHTML;

		if (_this.stepsCount < 0) {
			throw new Error('The stepper components needs steps');
		}

		_this.currentStep = 1;
		_this.addListeners();
		return _this;
	}

	_createClass(Stepper, [{
		key: 'initDOMRefs',
		value: function initDOMRefs() {
			this.$stepperContainer = this.shadowRoot.querySelector("#stepper-container");
			this.$stepperLabelContainer = this.shadowRoot.querySelector("#step-label-container");
			this.$stepperStepContainer = this.shadowRoot.querySelector("#step-container");
			this.$stepsLabelTemplate = this.shadowRoot.querySelector("#steps-label-template");
			this.$label = this.shadowRoot.querySelector("#label");
			this.$stepButton = this.shadowRoot.querySelector("#btnStep");
		}
	}, {
		key: 'addListeners',
		value: function addListeners() {
			this.$stepButton.addEventListener("click", this.nextStep.bind(this));
		}

		/**
   * nextStep - Move on to the next step
   *
   * @param  {Object} e Event Object
   */

	}, {
		key: 'nextStep',
		value: function nextStep(e) {
			var previousStep = this.currentStep;
			if (previousStep + 1 <= this.stepsCount) {
				this.currentStep += 1;
				this.setStep(this.currentStep);
				this.$stepButton.innerText = FINAL_BUTTON_LABEL;
				var result = {
					detail: {
						'currentStep': this.currentStep,
						'previouStep': previousStep
					}
				};
				var event = new CustomEvent('stepper_changed', result);
				window.dispatchEvent(event);
			} else {
				this.$stepButton.setAttribute('disabled', 'disabled');
			}
		}

		/**
   * collectDataAttributes - Collect all the "data-" attributes
   *
   * @return {type}  description
   */

	}, {
		key: 'collectDataAttributes',
		value: function collectDataAttributes() {
			this.label_template = LABEL;
			this.selectedColor = SELECTED_COLOR;

			if (this.attributes['data-label']) {
				this.label_template = this.attributes['data-label'].nodeValue;
			}

			if (this.attributes['data-selected-color']) {
				this.selectedColor = this.attributes['data-selected-color'].nodeValue;
			}
		}

		/**
   * setStep - Set step in the UI
   *
   * @param  {type} stepIndex Step Index
   */

	}, {
		key: 'setStep',
		value: function setStep(stepIndex) {
			if (!stepIndex && isNaN(stepIndex)) {
				throw new Error('Invalid step index');
			}

			if (stepIndex <= this.stepsCount) {
				this.setLabel(stepIndex);

				if (stepIndex > 1) {
					var lastStep = this.shadowRoot.querySelector("nice-step[data-index='" + (stepIndex - 1) + "']");

					lastStep.classList.add('hide');
				}

				var newStep = this.shadowRoot.querySelector("nice-step[data-index='" + stepIndex + "']");

				newStep.classList.remove('hide');
			}
		}

		/**
   * setLabel - Set label for stepper component base on label template
   *
   * @param  {integer} stepIndex Step Index
   */

	}, {
		key: 'setLabel',
		value: function setLabel(stepIndex) {
			var _this2 = this;

			var label = this.label_template.replace('__CURRENT__', stepIndex);
			label = label.replace('__TOTAL__', this.stepsCount);
			this.$label.innerHTML = label;

			var stepLabels = this.shadowRoot.querySelectorAll("paper-icon");
			stepLabels.forEach(function (stepLabel, index) {
				if (index + 1 != stepIndex) {
					stepLabel.setAttribute('data-color', '');
				} else {
					stepLabel.setAttribute('data-color', _this2.selectedColor);
				}
			});
		}
	}, {
		key: 'connectedCallback',
		value: function connectedCallback() {
			var _this3 = this;

			//SET UP TEMPLATE
			var arr = new Array(this.stepsCount).fill(0);
			templateObj.render;
			this.$stepperLabelContainer.innerHTML = _template2.default.render(this.$stepsLabelTemplate.innerHTML, arr);

			//SET HTML FROM TEMPLATE
			this.$stepperStepContainer.innerHTML = this.content;

			//SET INITIAL DATA TO NICE-STEPS
			var stepContents = this.shadowRoot.querySelectorAll("nice-step");
			stepContents.forEach(function (step, index) {
				step.setAttribute('data-index', index + 1);
				if (index + 1 != _this3.currentStep) {
					step.classList.toggle('hide');
				}
			});

			//SET STEP
			this.setStep(this.currentStep);
		}
	}]);

	return Stepper;
}(_CustomElement);

exports.default = Stepper;


customElements.define('nice-stepper', Stepper);

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(19);

__webpack_require__(20);

__webpack_require__(22);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _paperButton = __webpack_require__(56);

var _paperButton2 = _interopRequireDefault(_paperButton);

var _paperButton3 = __webpack_require__(55);

var _paperButton4 = _interopRequireDefault(_paperButton3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
	return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var templateObj = new _template2.default(_paperButton4.default, _paperButton2.default);

var PaperButton = function (_CustomElement2) {
	_inherits(PaperButton, _CustomElement2);

	function PaperButton() {
		_classCallCheck(this, PaperButton);

		var _this = _possibleConstructorReturn(this, (PaperButton.__proto__ || Object.getPrototypeOf(PaperButton)).call(this));

		_this._shadowRoot = _this.attachShadow({ mode: 'open' });
		_this._shadowRoot.innerHTML = templateObj.template;

		_this.addListeners();
		_this.initDOMRefs();
		return _this;
	}

	_createClass(PaperButton, [{
		key: 'initDOMRefs',
		value: function initDOMRefs() {
			this.$container = this.shadowRoot.querySelector("#paper-button");
		}
	}, {
		key: 'addListeners',
		value: function addListeners() {
			var _this2 = this;

			this.addEventListener('keydown', function (e) {
				if (e.keyCode === 32 || e.keyCode === 13) {
					_this2.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }));
				}
			});
			this.addEventListener('click', function (e) {
				if (_this2.disabled) {
					e.preventDefault();
					e.stopPropagation();
				} else {
					_this2.drawRipple(e.offsetX, e.offsetY);
				}
			});
		}
	}, {
		key: 'drawRipple',
		value: function drawRipple(x, y) {
			var div = document.createElement('div');
			div.classList.add('ripple');
			this.$container.appendChild(div);
			div.style.top = y - div.clientHeight / 2 + 'px';
			div.style.left = x - div.clientWidth / 2 + 'px';
			div.style.backgroundColor = getComputedStyle(this).color;
			div.classList.add('run');
			div.addEventListener('transitionend', function (e) {
				return div.remove();
			});
		}
	}, {
		key: 'connectedCallback',
		value: function connectedCallback() {
			this.color = this.getAttribute('color');
			this.fullwidth = this.getAttribute('fullwidth');
			this.bgcolor = this.getAttribute('bgcolor');
		}
	}, {
		key: 'disconnectedCallback',
		value: function disconnectedCallback() {}
	}, {
		key: 'attributeChangedCallback',
		value: function attributeChangedCallback(attrName, oldVal, newVal) {}
	}, {
		key: 'raised',
		set: function set(val) {
			if (val) this.setAttribute('raised', '');else this.removeAttribute('raised');
		},
		get: function get() {
			return this.hasAttribute('raised');
		}
	}, {
		key: 'disabled',
		get: function get() {
			return this.hasAttribute('disabled');
		},
		set: function set(val) {
			if (val) this.setAttribute('disabled', '');else this.removeAttribute('disabled');
		}
	}, {
		key: 'color',
		set: function set(val) {
			this.style.color = val;
			this.setAttribute('color', val);
		},
		get: function get() {
			return this.getAttribute('color');
		}
	}, {
		key: 'fullwidth',
		set: function set(val) {
			if (val) {
				this.setAttribute('fullwidth', '');
				this.style.width = "100%";
			} else {
				this.removeAttribute('fullwidth');
			}
		},
		get: function get() {
			return this.hasAttribute('fullwidth');
		}
	}, {
		key: 'bgcolor',
		set: function set(val) {
			if (val) {
				this.setAttribute('bgcolor', val);
				this.style.backgroundColor = val;
			} else this.removeAttribute('bgcolor');
		},
		get: function get() {
			return this.hasAttribute('bgcolor');
		}
	}]);

	return PaperButton;
}(_CustomElement);

exports.default = PaperButton;


customElements.define('paper-button', PaperButton, { extends: 'button' });

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _paperChip = __webpack_require__(58);

var _paperChip2 = _interopRequireDefault(_paperChip);

var _paperChip3 = __webpack_require__(57);

var _paperChip4 = _interopRequireDefault(_paperChip3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
	return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var templateObj = new _template2.default(_paperChip4.default, _paperChip2.default);

var PaperChip = function (_CustomElement2) {
	_inherits(PaperChip, _CustomElement2);

	function PaperChip() {
		_classCallCheck(this, PaperChip);

		var _this = _possibleConstructorReturn(this, (PaperChip.__proto__ || Object.getPrototypeOf(PaperChip)).call(this));

		_this._shadowRoot = _this.attachShadow({ mode: 'open' });
		_this._shadowRoot.innerHTML = templateObj.template;
		_this.initDOMRefs();
		_this.addListeners();
		return _this;
	}

	_createClass(PaperChip, [{
		key: 'initDOMRefs',
		value: function initDOMRefs() {
			this.$label = this._shadowRoot.querySelector('.md-chip-text');
			this.$chip = this._shadowRoot.querySelector('.md-chip');
			this.$circle = this._shadowRoot.querySelector('.md-chip-text');
			this.$icon = this._shadowRoot.querySelector('#icon');
		}
	}, {
		key: 'addListeners',
		value: function addListeners() {}
	}, {
		key: 'connectedCallback',
		value: function connectedCallback() {
			this.label = this.getAttribute('label');
			this.icon = this.getAttribute('icon');
			this.activeColor = this.getAttribute('activeColor') || 'purple';
			this.defaultColor = this.getAttribute('defaultColor') || 'white';
			this.$chip.classList.add(this.defaultColor);
			this.active = this.hasAttribute('active');
			this.render();
		}
	}, {
		key: 'render',
		value: function render() {
			if (this.active) this.$chip.classList.add(this.activeColor);else this.$chip.classList.remove(this.activeColor);
		}
	}, {
		key: 'attributeChangedCallback',
		value: function attributeChangedCallback() {
			this.render();
		}
	}, {
		key: 'label',
		set: function set(val) {
			if (val) {
				this.setAttribute('label', val);
				this.$label.innerHTML = val;
			} else {
				this.removeAttribute('label');
			}
		},
		get: function get() {
			return this.getAttribute('label');
		}
	}, {
		key: 'icon',
		set: function set(val) {
			if (val) {
				this.setAttribute('icon', val);
				this.$icon.innerHTML = val;
			}
		},
		get: function get() {
			return this.getAttribute('icon');
		}
	}, {
		key: 'defaultColor',
		set: function set(val) {
			if (val) {
				this.setAttribute('defaultColor', val);
			}
		},
		get: function get() {
			return this.getAttribute('defaultColor');
		}
	}, {
		key: 'activeColor',
		set: function set(val) {
			if (val) {
				this.setAttribute('activeColor', val);
			}
		},
		get: function get() {
			return this.getAttribute('activeColor');
		}
	}, {
		key: 'active',
		set: function set(val) {
			if (val) {
				this.setAttribute('active', '');
			} else {
				this.removeAttribute('active');
			}
		},
		get: function get() {
			return this.hasAttribute('active');
		}
	}], [{
		key: 'observedAttributes',
		get: function get() {
			return ['active'];
		}
	}]);

	return PaperChip;
}(_CustomElement);

exports.default = PaperChip;


try {
	customElements.define('paper-chip', PaperChip, { extends: 'input' });
} catch (e) {
	console.log("paper-chip was registered");
}

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _paperIcon = __webpack_require__(60);

var _paperIcon2 = _interopRequireDefault(_paperIcon);

var _paperIcon3 = __webpack_require__(59);

var _paperIcon4 = _interopRequireDefault(_paperIcon3);

var _underscore = __webpack_require__(3);

var _underscore2 = _interopRequireDefault(_underscore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
	return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var templateObj = new _template2.default(_paperIcon4.default, _paperIcon2.default);

/**
 * PaperIcon class
 * Icon web component base on material desing icons
 * @attributes:
 * 		data-class : Aditional defined class to the icon element (tiny, small, medium, large)
 * 		data-size	: Icon's Size (12px, 12rem .. etc) overwrite data-class
 * 		data-color : Icon's color ( red, #FFF... etc)
 */

var PaperIcon = function (_CustomElement2) {
	_inherits(PaperIcon, _CustomElement2);

	function PaperIcon() {
		_classCallCheck(this, PaperIcon);

		var _this = _possibleConstructorReturn(this, (PaperIcon.__proto__ || Object.getPrototypeOf(PaperIcon)).call(this));

		var shadowRoot = _this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = templateObj.template;
		_this.initDOMRefs();
		_this.collectDataAttributes();
		return _this;
	}

	_createClass(PaperIcon, [{
		key: 'collectDataAttributes',
		value: function collectDataAttributes() {
			this.iconClass = null;
			this.iconSize = null;
			this.iconColor = null;

			if (this.attributes['data-class']) {
				this.iconClass = this.attributes['data-class'].nodeValue;
			}

			if (this.attributes['data-size']) {
				this.iconSize = this.attributes['data-size'].nodeValue;
			}

			if (this.attributes['data-color']) {
				this.iconColor = this.attributes['data-color'].nodeValue;
			}
		}
	}, {
		key: 'initDOMRefs',
		value: function initDOMRefs() {
			this.$icon = this.shadowRoot.querySelector('#icon');
		}
	}, {
		key: 'connectedCallback',
		value: function connectedCallback() {
			//SET CLASS
			if (this.iconClass) {
				this.$icon.className += " " + this.iconClass;
			}

			//SET SIZE
			if (this.iconSize) {
				this.$icon.style['font-size'] = this.iconSize;
			}

			//SET COLOR
			if (this.iconColor) {
				this.$icon.style['color'] = this.iconColor;
			}
		}
	}, {
		key: 'attributeChangedCallback',
		value: function attributeChangedCallback(attr, oldValue, newValue) {
			if (attr == 'data-color') {
				this.$icon.style['color'] = newValue;
			}
		}
	}], [{
		key: 'observedAttributes',
		get: function get() {
			return ['data-color'];
		}
	}]);

	return PaperIcon;
}(_CustomElement);

exports.default = PaperIcon;


customElements.define('paper-icon', PaperIcon);

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _paperInput = __webpack_require__(62);

var _paperInput2 = _interopRequireDefault(_paperInput);

var _paperInput3 = __webpack_require__(61);

var _paperInput4 = _interopRequireDefault(_paperInput3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
    return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var templateObj = new _template2.default(_paperInput4.default, _paperInput2.default);

var PaperInput = function (_CustomElement2) {
    _inherits(PaperInput, _CustomElement2);

    function PaperInput() {
        _classCallCheck(this, PaperInput);

        var _this = _possibleConstructorReturn(this, (PaperInput.__proto__ || Object.getPrototypeOf(PaperInput)).call(this));

        _this._shadowRoot = _this.attachShadow({ mode: 'open' });
        _this._shadowRoot.innerHTML = templateObj.template;
        _this.initDOMRefs();
        _this.addListeners();

        return _this;
    }

    _createClass(PaperInput, [{
        key: 'initDOMRefs',
        value: function initDOMRefs() {
            this.$container = this._shadowRoot.querySelector('.group');
            this.$input = this._shadowRoot.querySelector('input');
            this.$label = this._shadowRoot.querySelector('label');
        }
    }, {
        key: 'addListeners',
        value: function addListeners() {
            var _this2 = this;

            this.$input.addEventListener("input", function (e) {
                _this2.value = e.currentTarget.value;
            });
        }
    }, {
        key: 'connectedCallback',
        value: function connectedCallback() {
            this.color = this.getAttribute('color');
            this.floatingLabel = this.getAttribute('floating-label');
            this.value = this.getAttribute('value');
            this.type = this.getAttribute('type');
        }
    }, {
        key: 'color',
        set: function set(val) {
            if (val) {
                this.setAttribute('color', val);
                this.$input.style.color = val;
            } else this.removeAttribute('color');
        },
        get: function get() {
            return this.hasAttribute('color');
        }
    }, {
        key: 'floatingLabel',
        set: function set(val) {
            if (val) {
                this.setAttribute('floating-label', val);
                this.$label.innerHTML = val;
            } else this.removeAttribute('floating-label');
        },
        get: function get() {
            return this.hasAttribute('color');
        }
    }, {
        key: 'value',
        set: function set(val) {
            if (val) {
                this.setAttribute('value', val);
                this.$input.value = val;
            } else this.removeAttribute('value');
        },
        get: function get() {
            return this.getAttribute('value');
        }
    }, {
        key: 'type',
        set: function set(val) {
            if (val) {
                this.setAttribute('type', val);
                this.$input.type = val;
            } else this.removeAttribute('type');
        },
        get: function get() {
            return this.getAttribute('type');
        }
    }]);

    return PaperInput;
}(_CustomElement);

exports.default = PaperInput;

try {
    customElements.define('paper-input', PaperInput, { extends: 'input' });
} catch (e) {
    console.log("paper-input was registered");
}

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _paperLine = __webpack_require__(64);

var _paperLine2 = _interopRequireDefault(_paperLine);

var _paperLine3 = __webpack_require__(63);

var _paperLine4 = _interopRequireDefault(_paperLine3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
	return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var templateObj = new _template2.default(_paperLine4.default, _paperLine2.default);

var PaperLine = function (_CustomElement2) {
	_inherits(PaperLine, _CustomElement2);

	function PaperLine() {
		_classCallCheck(this, PaperLine);

		var _this = _possibleConstructorReturn(this, (PaperLine.__proto__ || Object.getPrototypeOf(PaperLine)).call(this));

		var shadowRoot = _this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = templateObj.template;
		_this.initDOMRefs();
		_this.collectDataAttributes();
		return _this;
	}

	_createClass(PaperLine, [{
		key: 'collectDataAttributes',
		value: function collectDataAttributes() {}
	}, {
		key: 'initDOMRefs',
		value: function initDOMRefs() {}
	}, {
		key: 'connectedCallback',
		value: function connectedCallback() {}
	}, {
		key: 'attributeChangedCallback',
		value: function attributeChangedCallback(attr, oldValue, newValue) {}
	}]);

	return PaperLine;
}(_CustomElement);

exports.default = PaperLine;


customElements.define('paper-line', PaperLine, { extends: 'ul' });

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _paperListItem = __webpack_require__(66);

var _paperListItem2 = _interopRequireDefault(_paperListItem);

var _paperListItem3 = __webpack_require__(65);

var _paperListItem4 = _interopRequireDefault(_paperListItem3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
	return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var templateObj = new _template2.default(_paperListItem4.default, _paperListItem2.default);

var PaperListItem = function (_CustomElement2) {
	_inherits(PaperListItem, _CustomElement2);

	function PaperListItem() {
		_classCallCheck(this, PaperListItem);

		var _this = _possibleConstructorReturn(this, (PaperListItem.__proto__ || Object.getPrototypeOf(PaperListItem)).call(this));

		var shadowRoot = _this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = templateObj.template;
		_this.initDOMRefs();
		_this.collectDataAttributes();
		return _this;
	}

	_createClass(PaperListItem, [{
		key: 'collectDataAttributes',
		value: function collectDataAttributes() {}
	}, {
		key: 'initDOMRefs',
		value: function initDOMRefs() {
			this.$primaryTitle = this.shadowRoot.querySelector('.primary-content');
			this.$secondaryTitle = this.shadowRoot.querySelector('.secondary-content');
			this.$iconLeft = this.shadowRoot.querySelector('.icon-left');
			this.$iconRight = this.shadowRoot.querySelector('.icon-right');
		}
	}, {
		key: 'connectedCallback',
		value: function connectedCallback() {
			this.render();
		}
	}, {
		key: 'attributeChangedCallback',
		value: function attributeChangedCallback(attr, oldValue, newValue) {
			this.render();
		}
	}, {
		key: 'render',
		value: function render() {
			this.$primaryTitle.innerHTML = this.primaryTitle;
			this.$secondaryTitle.innerHTML = this.secondaryTitle;
			this.$iconLeft.innerHTML = this.iconLeft;
			this.$iconRight.innerHTML = this.iconRight;
		}
	}, {
		key: 'primaryTitle',
		set: function set(val) {
			this.setAttribute('primary-title', val || '');
		},
		get: function get() {
			return this.getAttribute('primary-title');
		}
	}, {
		key: 'secondaryTitle',
		set: function set(val) {
			this.setAttribute('secondary-title', val || '');
		},
		get: function get() {
			return this.getAttribute('secondary-title');
		}
	}, {
		key: 'iconLeft',
		set: function set(val) {
			this.setAttribute('icon-left', val || '');
		},
		get: function get() {
			return this.getAttribute('icon-left');
		}
	}, {
		key: 'iconRight',
		set: function set(val) {
			this.setAttribute('icon-right', val || '');
		},
		get: function get() {
			return this.getAttribute('icon-right');
		}
	}], [{
		key: 'observedAttributes',
		get: function get() {
			return ['primaryTitle', 'secondaryTitle', 'iconLeft', 'iconRight'];
		}
	}]);

	return PaperListItem;
}(_CustomElement);

exports.default = PaperListItem;


customElements.define('paper-list-item', PaperListItem);

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _template = __webpack_require__(0);

var _template2 = _interopRequireDefault(_template);

var _paperList = __webpack_require__(68);

var _paperList2 = _interopRequireDefault(_paperList);

var _paperList3 = __webpack_require__(67);

var _paperList4 = _interopRequireDefault(_paperList3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _CustomElement() {
	return Reflect.construct(HTMLElement, [], this.__proto__.constructor);
}

;
Object.setPrototypeOf(_CustomElement.prototype, HTMLElement.prototype);
Object.setPrototypeOf(_CustomElement, HTMLElement);

var templateObj = new _template2.default(_paperList4.default, _paperList2.default);

var PaperList = function (_CustomElement2) {
	_inherits(PaperList, _CustomElement2);

	function PaperList() {
		_classCallCheck(this, PaperList);

		var _this = _possibleConstructorReturn(this, (PaperList.__proto__ || Object.getPrototypeOf(PaperList)).call(this));

		var shadowRoot = _this.attachShadow({ mode: 'open' });
		shadowRoot.innerHTML = templateObj.template;
		_this.initDOMRefs();
		_this.collectDataAttributes();
		return _this;
	}

	_createClass(PaperList, [{
		key: 'collectDataAttributes',
		value: function collectDataAttributes() {}
	}, {
		key: 'initDOMRefs',
		value: function initDOMRefs() {}
	}, {
		key: 'connectedCallback',
		value: function connectedCallback() {}
	}, {
		key: 'attributeChangedCallback',
		value: function attributeChangedCallback(attr, oldValue, newValue) {}
	}]);

	return PaperList;
}(_CustomElement);

exports.default = PaperList;


customElements.define('paper-list', PaperList, { extends: 'ul' });

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {
var NativeCustomEvent = global.CustomEvent;

function useNative () {
  try {
    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
    return  'cat' === p.type && 'bar' === p.detail.foo;
  } catch (e) {
  }
  return false;
}

/**
 * Cross-browser `CustomEvent` constructor.
 *
 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
 *
 * @public
 */

module.exports = useNative() ? NativeCustomEvent :

// IE >= 9
'undefined' !== typeof document && 'function' === typeof document.createEvent ? function CustomEvent (type, params) {
  var e = document.createEvent('CustomEvent');
  if (params) {
    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
  } else {
    e.initCustomEvent(type, false, false, void 0);
  }
  return e;
} :

// IE <= 8
function CustomEvent (type, params) {
  var e = document.createEventObject();
  e.type = type;
  if (params) {
    e.bubbles = Boolean(params.bubbles);
    e.cancelable = Boolean(params.cancelable);
    e.detail = params.detail;
  } else {
    e.bubbles = false;
    e.cancelable = false;
    e.detail = void 0;
  }
  return e;
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(69)))

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(1);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	
	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; /* globals jQuery */
	
	exports.lory = lory;
	
	var _detectPrefixes = __webpack_require__(2);
	
	var _detectPrefixes2 = _interopRequireDefault(_detectPrefixes);
	
	var _dispatchEvent = __webpack_require__(3);
	
	var _dispatchEvent2 = _interopRequireDefault(_dispatchEvent);
	
	var _defaults = __webpack_require__(5);
	
	var _defaults2 = _interopRequireDefault(_defaults);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var slice = Array.prototype.slice;
	
	function lory(slider, opts) {
	    var position = void 0;
	    var slidesWidth = void 0;
	    var frameWidth = void 0;
	    var slides = void 0;
	
	    /**
	     * slider DOM elements
	     */
	    var frame = void 0;
	    var slideContainer = void 0;
	    var prevCtrl = void 0;
	    var nextCtrl = void 0;
	    var prefixes = void 0;
	    var transitionEndCallback = void 0;
	
	    var index = 0;
	    var options = {};
	
	    /**
	     * if object is jQuery convert to native DOM element
	     */
	    if (typeof jQuery !== 'undefined' && slider instanceof jQuery) {
	        slider = slider[0];
	    }
	
	    /**
	     * private
	     * set active class to element which is the current slide
	     */
	    function setActiveElement(slides, currentIndex) {
	        var _options = options;
	        var classNameActiveSlide = _options.classNameActiveSlide;
	
	
	        slides.forEach(function (element, index) {
	            if (element.classList.contains(classNameActiveSlide)) {
	                element.classList.remove(classNameActiveSlide);
	            }
	        });
	
	        slides[currentIndex].classList.add(classNameActiveSlide);
	    }
	
	    /**
	     * private
	     * setupInfinite: function to setup if infinite is set
	     *
	     * @param  {array} slideArray
	     * @return {array} array of updated slideContainer elements
	     */
	    function setupInfinite(slideArray) {
	        var _options2 = options;
	        var infinite = _options2.infinite;
	
	
	        var front = slideArray.slice(0, infinite);
	        var back = slideArray.slice(slideArray.length - infinite, slideArray.length);
	
	        front.forEach(function (element) {
	            var cloned = element.cloneNode(true);
	
	            slideContainer.appendChild(cloned);
	        });
	
	        back.reverse().forEach(function (element) {
	            var cloned = element.cloneNode(true);
	
	            slideContainer.insertBefore(cloned, slideContainer.firstChild);
	        });
	
	        slideContainer.addEventListener(prefixes.transitionEnd, onTransitionEnd);
	
	        return slice.call(slideContainer.children);
	    }
	
	    /**
	     * [dispatchSliderEvent description]
	     * @return {[type]} [description]
	     */
	    function dispatchSliderEvent(phase, type, detail) {
	        (0, _dispatchEvent2.default)(slider, phase + '.lory.' + type, detail);
	    }
	
	    /**
	     * translates to a given position in a given time in milliseconds
	     *
	     * @to        {number} number in pixels where to translate to
	     * @duration  {number} time in milliseconds for the transistion
	     * @ease      {string} easing css property
	     */
	    function translate(to, duration, ease) {
	        var style = slideContainer && slideContainer.style;
	
	        if (style) {
	            style[prefixes.transition + 'TimingFunction'] = ease;
	            style[prefixes.transition + 'Duration'] = duration + 'ms';
	
	            if (prefixes.hasTranslate3d) {
	                style[prefixes.transform] = 'translate3d(' + to + 'px, 0, 0)';
	            } else {
	                style[prefixes.transform] = 'translate(' + to + 'px, 0)';
	            }
	        }
	    }
	
	    /**
	     * slidefunction called by prev, next & touchend
	     *
	     * determine nextIndex and slide to next postion
	     * under restrictions of the defined options
	     *
	     * @direction  {boolean}
	     */
	    function slide(nextIndex, direction) {
	        var _options3 = options;
	        var slideSpeed = _options3.slideSpeed;
	        var slidesToScroll = _options3.slidesToScroll;
	        var infinite = _options3.infinite;
	        var rewind = _options3.rewind;
	        var rewindSpeed = _options3.rewindSpeed;
	        var ease = _options3.ease;
	        var classNameActiveSlide = _options3.classNameActiveSlide;
	
	
	        var duration = slideSpeed;
	
	        var nextSlide = direction ? index + 1 : index - 1;
	        var maxOffset = Math.round(slidesWidth - frameWidth);
	
	        dispatchSliderEvent('before', 'slide', {
	            index: index,
	            nextSlide: nextSlide
	        });
	
	        if (typeof nextIndex !== 'number') {
	            if (direction) {
	                nextIndex = index + slidesToScroll;
	            } else {
	                nextIndex = index - slidesToScroll;
	            }
	        }
	
	        nextIndex = Math.min(Math.max(nextIndex, 0), slides.length - 1);
	
	        if (infinite && direction === undefined) {
	            nextIndex += infinite;
	        }
	
	        var nextOffset = Math.min(Math.max(slides[nextIndex].offsetLeft * -1, maxOffset * -1), 0);
	
	        if (rewind && Math.abs(position.x) === maxOffset && direction) {
	            nextOffset = 0;
	            nextIndex = 0;
	            duration = rewindSpeed;
	        }
	
	        /**
	         * translate to the nextOffset by a defined duration and ease function
	         */
	        translate(nextOffset, duration, ease);
	
	        /**
	         * update the position with the next position
	         */
	        position.x = nextOffset;
	
	        /**
	         * update the index with the nextIndex only if
	         * the offset of the nextIndex is in the range of the maxOffset
	         */
	        if (slides[nextIndex].offsetLeft <= maxOffset) {
	            index = nextIndex;
	        }
	
	        if (infinite && (nextIndex === slides.length - infinite || nextIndex === 0)) {
	            if (direction) {
	                index = infinite;
	            }
	
	            if (!direction) {
	                index = slides.length - infinite * 2;
	            }
	
	            position.x = slides[index].offsetLeft * -1;
	
	            transitionEndCallback = function transitionEndCallback() {
	                translate(slides[index].offsetLeft * -1, 0, undefined);
	            };
	        }
	
	        if (classNameActiveSlide) {
	            setActiveElement(slice.call(slides), index);
	        }
	
	        dispatchSliderEvent('after', 'slide', {
	            currentSlide: index
	        });
	    }
	
	    /**
	     * public
	     * setup function
	     */
	    function setup() {
	        dispatchSliderEvent('before', 'init');
	
	        prefixes = (0, _detectPrefixes2.default)();
	        options = _extends({}, _defaults2.default, opts);
	
	        var _options4 = options;
	        var classNameFrame = _options4.classNameFrame;
	        var classNameSlideContainer = _options4.classNameSlideContainer;
	        var classNamePrevCtrl = _options4.classNamePrevCtrl;
	        var classNameNextCtrl = _options4.classNameNextCtrl;
	        var enableMouseEvents = _options4.enableMouseEvents;
	        var classNameActiveSlide = _options4.classNameActiveSlide;
	
	
	        frame = slider.getElementsByClassName(classNameFrame)[0];
	        slideContainer = frame.getElementsByClassName(classNameSlideContainer)[0];
	        prevCtrl = slider.getElementsByClassName(classNamePrevCtrl)[0];
	        nextCtrl = slider.getElementsByClassName(classNameNextCtrl)[0];
	
	        position = {
	            x: slideContainer.offsetLeft,
	            y: slideContainer.offsetTop
	        };
	
	        if (options.infinite) {
	            slides = setupInfinite(slice.call(slideContainer.children));
	        } else {
	            slides = slice.call(slideContainer.children);
	        }
	
	        reset();
	
	        if (classNameActiveSlide) {
	            setActiveElement(slides, index);
	        }
	
	        if (prevCtrl && nextCtrl) {
	            prevCtrl.addEventListener('click', prev);
	            nextCtrl.addEventListener('click', next);
	        }
	
	        frame.addEventListener('touchstart', onTouchstart);
	
	        if (enableMouseEvents) {
	            frame.addEventListener('mousedown', onTouchstart);
	            frame.addEventListener('click', onClick);
	        }
	
	        options.window.addEventListener('resize', onResize);
	
	        dispatchSliderEvent('after', 'init');
	    }
	
	    /**
	     * public
	     * reset function: called on resize
	     */
	    function reset() {
	        var _options5 = options;
	        var infinite = _options5.infinite;
	        var ease = _options5.ease;
	        var rewindSpeed = _options5.rewindSpeed;
	        var rewindOnResize = _options5.rewindOnResize;
	        var classNameActiveSlide = _options5.classNameActiveSlide;
	
	
	        slidesWidth = slideContainer.getBoundingClientRect().width || slideContainer.offsetWidth;
	        frameWidth = frame.getBoundingClientRect().width || frame.offsetWidth;
	
	        if (frameWidth === slidesWidth) {
	            slidesWidth = slides.reduce(function (previousValue, slide) {
	                return previousValue + slide.getBoundingClientRect().width || slide.offsetWidth;
	            }, 0);
	        }
	
	        if (rewindOnResize) {
	            index = 0;
	        } else {
	            ease = null;
	            rewindSpeed = 0;
	        }
	
	        if (infinite) {
	            translate(slides[index + infinite].offsetLeft * -1, 0, null);
	
	            index = index + infinite;
	            position.x = slides[index].offsetLeft * -1;
	        } else {
	            translate(slides[index].offsetLeft * -1, rewindSpeed, ease);
	            position.x = slides[index].offsetLeft * -1;
	        }
	
	        if (classNameActiveSlide) {
	            setActiveElement(slice.call(slides), index);
	        }
	    }
	
	    /**
	     * public
	     * slideTo: called on clickhandler
	     */
	    function slideTo(index) {
	        slide(index);
	    }
	
	    /**
	     * public
	     * returnIndex function: called on clickhandler
	     */
	    function returnIndex() {
	        return index - options.infinite || 0;
	    }
	
	    /**
	     * public
	     * prev function: called on clickhandler
	     */
	    function prev() {
	        slide(false, false);
	    }
	
	    /**
	     * public
	     * next function: called on clickhandler
	     */
	    function next() {
	        slide(false, true);
	    }
	
	    /**
	     * public
	     * destroy function: called to gracefully destroy the lory instance
	     */
	    function destroy() {
	        dispatchSliderEvent('before', 'destroy');
	
	        // remove event listeners
	        frame.removeEventListener(prefixes.transitionEnd, onTransitionEnd);
	        frame.removeEventListener('touchstart', onTouchstart);
	        frame.removeEventListener('touchmove', onTouchmove);
	        frame.removeEventListener('touchend', onTouchend);
	        frame.removeEventListener('mousemove', onTouchmove);
	        frame.removeEventListener('mousedown', onTouchstart);
	        frame.removeEventListener('mouseup', onTouchend);
	        frame.removeEventListener('mouseleave', onTouchend);
	        frame.removeEventListener('click', onClick);
	
	        options.window.removeEventListener('resize', onResize);
	
	        if (prevCtrl) {
	            prevCtrl.removeEventListener('click', prev);
	        }
	
	        if (nextCtrl) {
	            nextCtrl.removeEventListener('click', next);
	        }
	
	        // remove cloned slides if infinite is set
	        if (options.infinite) {
	            Array.apply(null, Array(options.infinite)).forEach(function () {
	                slideContainer.removeChild(slideContainer.firstChild);
	                slideContainer.removeChild(slideContainer.lastChild);
	            });
	        }
	
	        dispatchSliderEvent('after', 'destroy');
	    }
	
	    // event handling
	
	    var touchOffset = void 0;
	    var delta = void 0;
	    var isScrolling = void 0;
	
	    function onTransitionEnd() {
	        if (transitionEndCallback) {
	            transitionEndCallback();
	
	            transitionEndCallback = undefined;
	        }
	    }
	
	    function onTouchstart(event) {
	        var _options6 = options;
	        var enableMouseEvents = _options6.enableMouseEvents;
	
	        var touches = event.touches ? event.touches[0] : event;
	
	        if (enableMouseEvents) {
	            frame.addEventListener('mousemove', onTouchmove);
	            frame.addEventListener('mouseup', onTouchend);
	            frame.addEventListener('mouseleave', onTouchend);
	        }
	
	        frame.addEventListener('touchmove', onTouchmove);
	        frame.addEventListener('touchend', onTouchend);
	
	        var pageX = touches.pageX;
	        var pageY = touches.pageY;
	
	
	        touchOffset = {
	            x: pageX,
	            y: pageY,
	            time: Date.now()
	        };
	
	        isScrolling = undefined;
	
	        delta = {};
	
	        dispatchSliderEvent('on', 'touchstart', {
	            event: event
	        });
	    }
	
	    function onTouchmove(event) {
	        var touches = event.touches ? event.touches[0] : event;
	        var pageX = touches.pageX;
	        var pageY = touches.pageY;
	
	
	        delta = {
	            x: pageX - touchOffset.x,
	            y: pageY - touchOffset.y
	        };
	
	        if (typeof isScrolling === 'undefined') {
	            isScrolling = !!(isScrolling || Math.abs(delta.x) < Math.abs(delta.y));
	        }
	
	        if (!isScrolling && touchOffset) {
	            event.preventDefault();
	            translate(position.x + delta.x, 0, null);
	        }
	
	        // may be
	        dispatchSliderEvent('on', 'touchmove', {
	            event: event
	        });
	    }
	
	    function onTouchend(event) {
	        /**
	         * time between touchstart and touchend in milliseconds
	         * @duration {number}
	         */
	        var duration = touchOffset ? Date.now() - touchOffset.time : undefined;
	
	        /**
	         * is valid if:
	         *
	         * -> swipe attempt time is over 300 ms
	         * and
	         * -> swipe distance is greater than 25px
	         * or
	         * -> swipe distance is more then a third of the swipe area
	         *
	         * @isValidSlide {Boolean}
	         */
	        var isValid = Number(duration) < 300 && Math.abs(delta.x) > 25 || Math.abs(delta.x) > frameWidth / 3;
	
	        /**
	         * is out of bounds if:
	         *
	         * -> index is 0 and delta x is greater than 0
	         * or
	         * -> index is the last slide and delta is smaller than 0
	         *
	         * @isOutOfBounds {Boolean}
	         */
	        var isOutOfBounds = !index && delta.x > 0 || index === slides.length - 1 && delta.x < 0;
	
	        var direction = delta.x < 0;
	
	        if (!isScrolling) {
	            if (isValid && !isOutOfBounds) {
	                slide(false, direction);
	            } else {
	                translate(position.x, options.snapBackSpeed);
	            }
	        }
	
	        touchOffset = undefined;
	
	        /**
	         * remove eventlisteners after swipe attempt
	         */
	        frame.removeEventListener('touchmove', onTouchmove);
	        frame.removeEventListener('touchend', onTouchend);
	        frame.removeEventListener('mousemove', onTouchmove);
	        frame.removeEventListener('mouseup', onTouchend);
	        frame.removeEventListener('mouseleave', onTouchend);
	
	        dispatchSliderEvent('on', 'touchend', {
	            event: event
	        });
	    }
	
	    function onClick(event) {
	        if (delta.x) {
	            event.preventDefault();
	        }
	    }
	
	    function onResize(event) {
	        reset();
	
	        dispatchSliderEvent('on', 'resize', {
	            event: event
	        });
	    }
	
	    // trigger initial setup
	    setup();
	
	    // expose public api
	    return {
	        setup: setup,
	        reset: reset,
	        slideTo: slideTo,
	        returnIndex: returnIndex,
	        prev: prev,
	        next: next,
	        destroy: destroy
	    };
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = detectPrefixes;
	/**
	 * Detecting prefixes for saving time and bytes
	 */
	function detectPrefixes() {
	    var transform = void 0;
	    var transition = void 0;
	    var transitionEnd = void 0;
	    var hasTranslate3d = void 0;
	
	    (function () {
	        var el = document.createElement('_');
	        var style = el.style;
	
	        var prop = void 0;
	
	        if (style[prop = 'webkitTransition'] === '') {
	            transitionEnd = 'webkitTransitionEnd';
	            transition = prop;
	        }
	
	        if (style[prop = 'transition'] === '') {
	            transitionEnd = 'transitionend';
	            transition = prop;
	        }
	
	        if (style[prop = 'webkitTransform'] === '') {
	            transform = prop;
	        }
	
	        if (style[prop = 'msTransform'] === '') {
	            transform = prop;
	        }
	
	        if (style[prop = 'transform'] === '') {
	            transform = prop;
	        }
	
	        document.body.insertBefore(el, null);
	        style[transform] = 'translate3d(0, 0, 0)';
	        hasTranslate3d = !!global.getComputedStyle(el).getPropertyValue(transform);
	        document.body.removeChild(el);
	    })();
	
	    return {
	        transform: transform,
	        transition: transition,
	        transitionEnd: transitionEnd,
	        hasTranslate3d: hasTranslate3d
	    };
	}
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.default = dispatchEvent;
	
	var _customEvent = __webpack_require__(4);
	
	var _customEvent2 = _interopRequireDefault(_customEvent);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/**
	 * dispatch custom events
	 *
	 * @param  {element} el         slideshow element
	 * @param  {string}  type       custom event name
	 * @param  {object}  detail     custom detail information
	 */
	function dispatchEvent(target, type, detail) {
	    var event = new _customEvent2.default(type, {
	        bubbles: true,
	        cancelable: true,
	        detail: detail
	    });
	
	    target.dispatchEvent(event);
	}

/***/ },
/* 4 */
/***/ function(module, exports) {

	/* WEBPACK VAR INJECTION */(function(global) {
	var NativeCustomEvent = global.CustomEvent;
	
	function useNative () {
	  try {
	    var p = new NativeCustomEvent('cat', { detail: { foo: 'bar' } });
	    return  'cat' === p.type && 'bar' === p.detail.foo;
	  } catch (e) {
	  }
	  return false;
	}
	
	/**
	 * Cross-browser `CustomEvent` constructor.
	 *
	 * https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent.CustomEvent
	 *
	 * @public
	 */
	
	module.exports = useNative() ? NativeCustomEvent :
	
	// IE >= 9
	'function' === typeof document.createEvent ? function CustomEvent (type, params) {
	  var e = document.createEvent('CustomEvent');
	  if (params) {
	    e.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
	  } else {
	    e.initCustomEvent(type, false, false, void 0);
	  }
	  return e;
	} :
	
	// IE <= 8
	function CustomEvent (type, params) {
	  var e = document.createEventObject();
	  e.type = type;
	  if (params) {
	    e.bubbles = Boolean(params.bubbles);
	    e.cancelable = Boolean(params.cancelable);
	    e.detail = params.detail;
	  } else {
	    e.bubbles = false;
	    e.cancelable = false;
	    e.detail = void 0;
	  }
	  return e;
	}
	
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 5 */
/***/ function(module, exports) {

	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	exports.default = {
	  /**
	   * slides scrolled at once
	   * @slidesToScroll {Number}
	   */
	  slidesToScroll: 1,
	
	  /**
	   * time in milliseconds for the animation of a valid slide attempt
	   * @slideSpeed {Number}
	   */
	  slideSpeed: 300,
	
	  /**
	   * time in milliseconds for the animation of the rewind after the last slide
	   * @rewindSpeed {Number}
	   */
	  rewindSpeed: 600,
	
	  /**
	   * time for the snapBack of the slider if the slide attempt was not valid
	   * @snapBackSpeed {Number}
	   */
	  snapBackSpeed: 200,
	
	  /**
	   * Basic easing functions: https://developer.mozilla.org/de/docs/Web/CSS/transition-timing-function
	   * cubic bezier easing functions: http://easings.net/de
	   * @ease {String}
	   */
	  ease: 'ease',
	
	  /**
	   * if slider reached the last slide, with next click the slider goes back to the startindex.
	   * use infinite or rewind, not both
	   * @rewind {Boolean}
	   */
	  rewind: false,
	
	  /**
	   * number of visible slides or false
	   * use infinite or rewind, not both
	   * @infinite {number}
	   */
	  infinite: false,
	
	  /**
	   * class name for slider frame
	   * @classNameFrame {string}
	   */
	  classNameFrame: 'js_frame',
	
	  /**
	   * class name for slides container
	   * @classNameSlideContainer {string}
	   */
	  classNameSlideContainer: 'js_slides',
	
	  /**
	   * class name for slider prev control
	   * @classNamePrevCtrl {string}
	   */
	  classNamePrevCtrl: 'js_prev',
	
	  /**
	   * class name for slider next control
	   * @classNameNextCtrl {string}
	   */
	  classNameNextCtrl: 'js_next',
	
	  /**
	   * class name for current active slide
	   * if emptyString then no class is set
	   * @classNameActiveSlide {string}
	   */
	  classNameActiveSlide: 'active',
	
	  /**
	   * enables mouse events for swiping on desktop devices
	   * @enableMouseEvents {boolean}
	   */
	  enableMouseEvents: false,
	
	  /**
	   * window instance
	   * @window {object}
	   */
	  window: window,
	
	  /**
	   * If false, slides lory to the first slide on window resize.
	   * @rewindOnResize {boolean}
	   */
	  rewindOnResize: true
	};

/***/ }
/******/ ])
});
;

/***/ }),
/* 28 */
/***/ (function(module, exports) {

module.exports = ":host{\r\n        width: 100%;\r\n        position: relative;\r\n}\r\n.slider {\r\n    position: relative;\r\n    width: 100%;\r\n    max-width: 790px;\r\n    margin: 0 auto;\r\n    -webkit-user-select: none;\r\n    -khtml-user-select: none;\r\n    -moz-user-select: -moz-none;\r\n    -o-user-select: none;\r\n    user-select: none;\r\n}\r\n\r\n.frame,\r\n.events_log {\r\n    position: relative;\r\n    width: 100%;\r\n    margin: 0 auto;\r\n    font-size: 0;\r\n    line-height: 0;\r\n    overflow: hidden;\r\n    white-space: nowrap;\r\n}\r\n\r\n.frame li {\r\n    position: relative;\r\n    display: inline-block;\r\n    font-family: 'Source Sans Pro', sans-serif;\r\n    text-align: center;\r\n    font-size: 15px;\r\n    line-height: 30px;\r\n\r\n    color: #fff;\r\n}\r\n\r\n.slides {\r\n    display: inline-block;\r\n}\r\n\r\n.simple > .frame li,\r\n.rewind > .frame li,\r\n.events > .frame li {\r\n    width: 270px;\r\n    margin-right: 10px;\r\n}\r\n\r\n\r\n"

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = "<div class=\"slider js_multislides multislides\">\r\n    <div class=\"frame js_frame\">\r\n        <ul class=\"slides js_slides\">\r\n            <li class=\"js_slide\" style=\"width:125px;\">\r\n                <paper-chip id=\"pad\" label=\"Padron\" icon=\"face\"></paper-chip>\r\n            </li>\r\n            <li class=\"js_slide\" style=\"width:150px;\">\r\n                <paper-chip id=\"inv\" label=\"Inventario\" icon=\"device_hub\"></paper-chip>\r\n            </li>\r\n            <li class=\"js_slide\" style=\"width:110px;\">\r\n                <paper-chip id=\"pcr\" label=\"PCR\" icon=\"local_florist\"></paper-chip>\r\n            </li>\r\n            <li class=\"js_slide\" style=\"width:110px;\">\r\n                <paper-chip id=\"pda\" label=\"PDA\" icon=\"texture\"></paper-chip>\r\n            </li>\r\n            <li class=\"js_slide\" style=\"width:130px;\">\r\n                <paper-chip id=\"tar\" label=\"Tarifas\" icon=\"attach_money\"></paper-chip>\r\n            </li>\r\n            <li class=\"js_slide\" style=\"width:160px;\">\r\n                <paper-chip id=\"hid\" label=\"Hidrometria\" icon=\"timeline\"></paper-chip>\r\n            </li>\r\n        </ul>\r\n    </div>\r\n    \r\n</div>\r\n"

/***/ }),
/* 30 */
/***/ (function(module, exports) {

module.exports = "<custom-style>\r\n\t<style>\r\n\t\t:host{\r\n\t\t\t\twidth: 100%;\r\n\t\t\t\theight: 100%;\r\n\t\t}\r\n\t\t#app{\r\n\t\t\t\theight: 100%;\r\n\t\t\t\twidth: 100%;\r\n\t\t}\r\n\t</style>\r\n</custom-style>\r\n<div id=\"app\">\r\n\t<app-router mode=\"hash\">\r\n\t\t<app-route path=\"/\"\telement=\"app-splash\"></app-route>\r\n\t\t<app-route path=\"/login\"\telement=\"app-login\"></app-route>\r\n\t\t<app-route path=\"/main\"\telement=\"app-main\"></app-route>\r\n\t\t<app-route path=\"/profile\"\telement=\"app-profile\"></app-route>\r\n\t\t<app-route path=\"/map\"\telement=\"app-map\"></app-route>\r\n\t</app-router>\r\n</diV>\r\n"

/***/ }),
/* 31 */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    @apply --layout-center-center;\r\n    @apply --layout-vertical;\r\n   \t@apply --background-app;\r\n    height: 100%;\r\n    color:white;\r\n    padding: 0 40px 0px 40px;\r\n    font-family: 'Advent Pro', sans-serif;\r\n}\r\n#logo{\r\n    width:200px;\r\n    height:200px;\r\n}\r\n\r\niron-icon {\r\n    height: 200px;\r\n    width: 200px;\r\n}\r\niron-icon:nth-of-type(1) {\r\n    fill: white;\r\n    transition: .3s ease-in-out;\r\n    animation: changeColor 5s infinite alternate;\r\n}\r\n@keyframes changeColor {\r\n    0% {\r\n        fill: white;\r\n    }\r\n    100% {\r\n        fill: white;\r\n    }\r\n}\r\n:root{\r\n    --input-text-color:{\r\n        color:red;\r\n    }\r\n}\r\n\r\nh1{\r\n    font-family: 'Advent Pro', sans-serif;\r\n    width: 200px;\r\n    text-align: center;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 50px;\r\n    font-weight: 100;\r\n}\r\nh3{\r\n    font-family: 'Baloo', cursive;\r\n    text-align: center;\r\n    display: block;\r\n    width: 200px;\r\n    margin: 0;\r\n    padding-left: 60px;\r\n    font-size: 24px;\r\n}\r\n\r\nh5{\r\n    font-size: 16px;\r\n    font-family: Roboto;\r\n    font-weight: 100;\r\n    text-align: center;\r\n    margin: 0;\r\n    margin-top: 10px;\r\n}\r\n\r\n#container{\r\n    width: 100%;\r\n    max-width: 350px;\r\n}\r\n\r\n"

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = "<img id=\"logo\" src=\"./images/logo.svg\">\r\n<h1>SIGMA</h1>\r\n<h3>CLOUD</h3>\r\n<div id=\"container\">\r\n\t<h5>Ingrese su nombre de usuario y contraseña para iniciar sesión</h5>\r\n\t<paper-input id=\"txtUser\" color=\"white\" floating-label=\"Usuario\"></paper-input>\r\n\t<paper-input id=\"txtPassword\" type=\"password\"  color=\"white\" floating-label=\"Contraseña\"></paper-input>\r\n\t<paper-button id=\"btnLogin\" raised fullwidth=\"true\" bgcolor=\"#2196f3\">Entrar</paper-button>\r\n</div>\r\n"

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "nice-map{\r\n    width: 100%;\r\n    height: 100%;\r\n}\r\npaper-chip{\r\n    opacity:0.8;\r\n}\r\n\r\ninput:focus{\r\n    outline: none;\r\n}\r\n\r\n:host{\r\n    @apply --layout-center-center;\r\n    @apply --layout-vertical;\r\n   \t@apply --background-app;\r\n    @apply --paper-font-common-base;\r\n    height: 100%;\r\n    width: 100%;\r\n    overflow: hidden;\r\n    color:black;\r\n    padding: 0 ;\r\n    font-family: 'Advent Pro', sans-serif;\r\n}\r\n\r\n\r\n.row{\r\n    @apply --layout-horizontal;\r\n}\r\n .flexchild {\r\n      @apply --layout-flex;\r\n}\r\n\r\n\r\n.input-container{\r\n\tposition: absolute;\r\n\tmargin: auto;\r\n    top: 20px;\r\n    left:20px;\r\n    right: 20px;\r\n    background-color: white;\r\n    @apply  --shadow-elevation-2dp;\r\n}\r\n\r\n\r\n.input-container > div > div > input{\r\n    width: 100%;\r\n    border:0;\r\n    padding: 0;\r\n    font-size: 14px;\r\n    height: 100%;\r\n}\r\n\r\n.chip-container{\r\n    position: absolute;\r\n    top: 75px;\r\n}\r\n.footer-container{\r\n    width: 100%;\r\n    bottom: 0;\r\n    height: 120px;\r\n    background-color: white;\r\n    @apply --layout-center;\r\n    @apply --layout-vertical;\r\n    @apply --layout-fixed-bottom;\r\n\r\n    transition:all 0.3s ease-in-out;\r\n}\r\n.footer-container.hidden{\r\n    bottom: -160px;\r\n    transition:all 0.3s ease-in-out;\r\n}\r\n\r\n.footer-container .subview-header .footer-title{\r\n    font-size: 20px;\r\n    @apply --layout-center-center;\r\n    @apply --paper-font-common-base;\r\n    display: block;\r\n}\r\n.footer-container .subview-header .footer-description{\r\n    font-size: 13px;\r\n    display: block;\r\n    text-align: justify;\r\n    margin-left: 10px;\r\n    margin-right: 10px;\r\n}\r\n\r\n.footer-container .subview-header .footer-logo{\r\n    height: 80px;\r\n    width: 80px;\r\n    background-color: #9C27B0;\r\n    border-radius: 40px;\r\n    margin-top: -40px;\r\n    cursor: pointer; \r\n    cursor: hand; \r\n  \r\n}\r\n\r\n\r\n.img-round{\r\n    height: 74px;\r\n    width: 74px;\r\n    border: 0;\r\n    padding: 0;\r\n    margin: 3px;\r\n    border-radius: 37px;\r\n    overflow: hidden;\r\n    @apply --layout-center-center;\r\n    cursor: pointer; \r\n    cursor: hand; \r\n}\r\n\r\n.subview-header{\r\n    width: 100%;\r\n    bottom: 0;\r\n    height: 120px;\r\n    background-color: white;\r\n    @apply --layout-center;\r\n    @apply --layout-vertical;\r\n}\r\n\r\n.footer-container.showAll{\r\n    height: calc(100% - 100px);\r\n    transition:all 0.5s ease-in-out;\r\n}\r\n\r\n.subview-content{\r\n    width: 100%;\r\n    visibility: visible;\r\n    height:100%;\r\n    position: relative;\r\n    opacity: 1;\r\n    transition:all 2s ease-in-out;\r\n    \r\n}\r\n.subview-content.hidden{\r\n    visibility: hidden;\r\n    height: 0;\r\n    transition:all 0.3s ease-in-out;\r\n    opacity: 0;\r\n}\r\n\r\n"

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css\">\r\n<nice-map id=\"main-map\" api-key=\"AIzaSyBLF11XmoFl4VedETvlRVo5hJBkICgzTIc\" my-location  disable-default-ui center=\"-8.783195,34.508523\"></nice-map>\r\n<div class=\"input-container\">\r\n\t<div class=\"row\">\r\n\t\t<div>\r\n\t\t\t<paper-button icon>\r\n\t\t\t<paper-icon>menu</paper-icon>\r\n\t\t\t</paper-button>\r\n\t\t</div>\r\n\t\t<div class=\"flexchild\">\r\n\t\t\t<input type=\"text\" placeholder=\"Busca un predio\"/>\r\n\t\t\t</div>\r\n\t\t<div>\r\n\t\t\t<paper-button icon>\r\n\t\t\t<paper-icon>more_vert</paper-icon>\r\n\t\t\t</paper-button>\r\n\t\t</div>\r\n\t</div>\r\n\r\n</div>\r\n<div class=\"chip-container\"  style=\"width:100%\">\r\n\t\t<app-carousel-chips></app-carousel-chips>\r\n</div>\r\n\r\n<div class=\"footer-container hidden\">\r\n\t<div class=\"subview-header\">\r\n\t\t<div class=\"footer-logo\">\r\n\t\t\t<img id=\"footer-img\" src=\"./images/modules/module_inv.png\" class=\"img-round\"/>\r\n\t\t</div>\r\n\t\t<div class=\"footer-title\"></div>\r\n\t\t<div class=\"footer-description\"></div>\r\n\t</div>\r\n\t<div class=\"subview-content hidden\">\r\n\t</div>\r\n</div>"

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports = ":host{\r\n\t@apply --layout-center-center;\r\n\t@apply --layout-vertical;\r\n \t@apply --background-app;\r\n\theight: 100%;\r\n\tcolor:white;\r\n\tpadding: 0 40px 0px 40px;\r\n\tfont-family: 'Advent Pro', sans-serif;\r\n}\r\n\r\n\r\n.map {\r\n\theight: 300px;\r\n\twidth: 300px;\r\n}\r\n"

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = "<h2> THIS IS THE MAP COMPONENT</h2>\r\n<div class=\"map\">\r\n  <nice-map></nice-map>\r\n</div>\r\n"

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports = "<app-carousel-chips></app-carousel-chips>\r\n<paper-list>\r\n    <paper-list-item primary-title=\"Inventario de Canales\" secondary-title=\"Conozca el padron electoral de usuarios\" icon-left=\"menu\" icon-right=\"star\"></paper-list-item>\r\n    <paper-line></paper-line>\r\n    <paper-list-item primary-title=\"Canales por Comision\" secondary-title=\"Whats Up...\" icon-left=\"menu\" icon-right=\"star\"></paper-list-item>\r\n    <paper-line></paper-line>\r\n    <paper-list-item primary-title=\"Drenes\" secondary-title=\"Whats Up...\" icon-left=\"menu\" icon-right=\"star\"></paper-list-item>\r\n    <paper-line></paper-line>\r\n    <paper-list-item primary-title=\"Bloques de Riego\" secondary-title=\"Resumen total de predios por comisión de usuarios\" icon-left=\"menu\" icon-right=\"star\"></paper-list-item>\r\n\r\n</paper-list>"

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\napp-carousel-chips{\r\n    width: 100%;\r\n}"

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = "<app-carousel-chips></app-carousel-chips>\r\n<paper-list>\r\n    <paper-list-item primary-title=\"Padron Electoral\" secondary-title=\"Conozca el padron electoral de usuarios\" icon-left=\"menu\" icon-right=\"star\"></paper-list-item>\r\n    <paper-line></paper-line>\r\n    <paper-list-item primary-title=\"Predios Agrícolas\" secondary-title=\"Whats Up...\" icon-left=\"menu\" icon-right=\"star\"></paper-list-item>\r\n    <paper-line></paper-line>\r\n    <paper-list-item primary-title=\"Predios por Canal\" secondary-title=\"Whats Up...\" icon-left=\"menu\" icon-right=\"star\"></paper-list-item>\r\n    <paper-line></paper-line>\r\n    <paper-list-item primary-title=\"Predios por Comisión\" secondary-title=\"Resumen total de predios por comisión de usuarios\" icon-left=\"menu\" icon-right=\"star\"></paper-list-item>\r\n\r\n</paper-list>"

/***/ }),
/* 41 */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n}\r\n\r\napp-carousel-chips{\r\n    width: 100%;\r\n}"

/***/ }),
/* 42 */
/***/ (function(module, exports) {

module.exports = "<app-carousel-chips></app-carousel-chips>\r\n<paper-list>\r\n    <paper-list-item primary-title=\"Declaración de Intensión de Siembra\" secondary-title=\"Conozca el padron electoral de usuarios\" icon-left=\"menu\" icon-right=\"star\"></paper-list-item>\r\n    <paper-line></paper-line>\r\n    <paper-list-item primary-title=\"Avance de la DIS\" secondary-title=\"Whats Up...\" icon-left=\"menu\" icon-right=\"star\"></paper-list-item>\r\n    <paper-line></paper-line>\r\n    <paper-list-item primary-title=\"Balance Hídrico\" secondary-title=\"Whats Up...\" icon-left=\"menu\" icon-right=\"star\"></paper-list-item>\r\n    <paper-line></paper-line>\r\n    <paper-list-item primary-title=\"Resumen PCR\" secondary-title=\"Resumen total de predios por comisión de usuarios\" icon-left=\"menu\" icon-right=\"star\"></paper-list-item>\r\n\r\n</paper-list>"

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = "<h1>SIGMA</h1>\r\n<h3>CLOUD</h3>\r\n<h5>Profile</h5>\r\n<h2> THIS IS THE STEPPER COMPONENT</h2>\r\n<nice-stepper data-selected-color=\"red\">\r\n\t<nice-step>\r\n\t\t<h3>Form1</h3>\r\n\t\t<form>\r\n\t\t\t<paper-input id=\"txtUser\" color=\"white\" floating-label=\"Nombre\"></paper-input>\r\n\t\t\t<paper-input id=\"txtUser\" color=\"white\" floating-label=\"Apellido\"></paper-input>\r\n\t\t</form>\r\n\t</nice-step>\r\n\t<nice-step>\r\n\t\t<h3>Form2 </h3>\r\n\t\t<form>\r\n\t\t\t<paper-input id=\"txtUser\" color=\"white\" floating-label=\"Username\"></paper-input>\r\n\t\t\t<paper-input id=\"txtUser\" color=\"white\" floating-label=\"Email\"></paper-input>\r\n\t\t</form>\r\n\t</nice-step>\r\n\t<nice-step>\r\n\t\t<h3>Form3 </h3>\r\n\t\t<form>\r\n\t\t\t<paper-input id=\"txtUser\" color=\"white\" floating-label=\"Tlf\"></paper-input>\r\n\t\t\t<paper-input id=\"txtUser\" color=\"white\" floating-label=\"Direccion\"></paper-input>\r\n\t\t</form>\r\n\t</nice-step>\r\n</nice-stepper>\r\n"

/***/ }),
/* 44 */
/***/ (function(module, exports) {

module.exports = ":host{\r\n\t@apply --layout-center-center;\r\n\t@apply --layout-vertical;\r\n \t@apply --background-app;\r\n\theight: 100%;\r\n\tcolor:white;\r\n\tpadding: 0 40px 0px 40px;\r\n\tfont-family: 'Advent Pro', sans-serif;\r\n}\r\n"

/***/ }),
/* 45 */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    @apply --layout-center-center;\r\n    @apply --layout-vertical;\r\n   \t@apply --background-app;\r\n    height: 100%;\r\n    color:white;\r\n    padding: 0 40px 0px 40px;\r\n    font-family: 'Advent Pro', sans-serif;\r\n}\r\n#logo{\r\n    width:200px;\r\n    height:200px;\r\n}\r\n\r\niron-icon {\r\n    height: 200px;\r\n    width: 200px;\r\n}\r\niron-icon:nth-of-type(1) {\r\n    fill: white;\r\n    transition: .3s ease-in-out;\r\n    animation: changeColor 5s infinite alternate;\r\n}\r\n@keyframes changeColor {\r\n    0% {\r\n        fill: white;\r\n    }\r\n    100% {\r\n        fill: white;\r\n    }\r\n}\r\n\r\n\r\nh1{\r\n    font-family: 'Advent Pro', sans-serif;\r\n    width: 200px;\r\n    text-align: center;\r\n    margin: 0;\r\n    padding: 0;\r\n    font-size: 50px;\r\n    font-weight: 100;\r\n}\r\nh3{\r\n    font-family: 'Baloo', cursive;\r\n    text-align: center;\r\n    display: block;\r\n    width: 200px;\r\n    margin: 0;\r\n    padding-left: 60px;\r\n    font-size: 24px;\r\n}\r\n\r\nh5{\r\n    font-size: 16px;\r\n    font-family: Roboto;\r\n    font-weight: 100;\r\n    text-align: center;\r\n}"

/***/ }),
/* 46 */
/***/ (function(module, exports) {

module.exports = "<link rel=\"stylesheet\" href=\"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css\">\r\n<img id=\"logo\" src=\"./images/logo.svg\">\r\n<h1>SIGMA</h1>\r\n<h3>CLOUD</h3>\r\n<h5>Sistema Integral de Gestión y Manejo del Agua</h5>"

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = ":host{\r\n  display: none;\r\n}\r\n"

/***/ }),
/* 48 */
/***/ (function(module, exports) {

module.exports = "<div id=\"loader-container\">\r\n</div>\r\n"

/***/ }),
/* 49 */
/***/ (function(module, exports) {

module.exports = ":host{\r\n\tcolor:white;\r\n\tfont-family: 'Advent Pro', sans-serif;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n\r\n#map-container{\r\n\twidth: inherit;\r\n\theight: inherit;\r\n}\r\n"

/***/ }),
/* 50 */
/***/ (function(module, exports) {

module.exports = "<nice-loader url=\"\" id=\"loader-container\"></nice-loader>\r\n<div id=\"map-container\" >\r\n</div>\r\n"

/***/ }),
/* 51 */
/***/ (function(module, exports) {

module.exports = ":host{\r\n\theight: 100%;\r\n\tcolor:white;\r\n\tpadding: 0 10px 0px 10px;\r\n\tfont-family: 'Advent Pro', sans-serif;\r\n}\r\n"

/***/ }),
/* 52 */
/***/ (function(module, exports) {

module.exports = "<div id=\"step-container\">\r\n  \r\n</div>\r\n"

/***/ }),
/* 53 */
/***/ (function(module, exports) {

module.exports = ":host{\r\n\t/*@apply --layout-center-center;\r\n\t@apply --layout-vertical;\r\n \t@apply --background-app;*/\r\n\t/*height: 100%;*/\r\n\tcolor:white;\r\n\t/*padding: 0 40px 0px 40px;*/\r\n\tfont-family: 'Advent Pro', sans-serif;\r\n}\r\n\r\n#step-label-container{\r\n\tdisplay: inherit;\r\n}\r\n\r\n#step-label-container{\r\n\ttext-align: center;\r\n\tmargin-top: 10px;\r\n}\r\n\r\n#stepper-container span {\r\n\tdisplay: inherit;\r\n\ttext-align: center;\r\n}\r\n\r\n.hide{\r\n\tdisplay: none;\r\n}\r\n"

/***/ }),
/* 54 */
/***/ (function(module, exports) {

module.exports = "<div id=\"stepper-container\">\r\n\t<span id=\"label\"></span>\r\n\t<div id=\"step-label-container\">\r\n\t</div>\r\n\t<div id=\"step-container\">\r\n\t\tbody\r\n\t</div>\r\n\t<paper-button\r\n\t\tid=\"btnStep\" raised fullwidth=\"true\"\r\n\t\tbgcolor=\"#2196f3\">\r\n\t\tSiguiente\r\n\t</paper-button>\r\n</div>\r\n\r\n<script id=\"steps-label-template\" type=\"text/template\">\r\n\t<% _.each(data, function(elem, index){ %>\r\n\t\t<paper-icon data-class=\"tiny\" data-index=\"<%=(index +1) %>\">\r\n\t\t\tbrightness_1\r\n\t\t</paper-icon>\r\n\t<% }); %>\r\n</script>\r\n"

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    @apply --layout-inline;\r\n    @apply --layout-center-center;\r\n    box-sizing: border-box;\r\n    margin: 0 0.29em;\r\n    font: inherit;\r\n    text-transform: uppercase;\r\n    outline-width:0;\r\n    border-radius: 3px;\r\n    -moz-user-select: none;\r\n    -ms-user-select:none;\r\n    -webkit-user-select:none;\r\n    user-select:none;\r\n    cursor:pointer;\r\n    padding: 0.57em 0.57em;\r\n    transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);\r\n    display: inline-block;\r\n    overflow:hidden;\r\n    position:relative;\r\n    contain: content;\r\n    @apply --paper-font-common-base;\r\n    contain: content;\r\n    opacity: 0.7;\r\n    text-align: center;\r\n    \r\n}\r\n:host([icon]){\r\n    border-radius: 50%;\r\n}\r\n:host(:hover){\r\n    opacity:1;\r\n}\r\n:host([hidden]) {\r\n    display: none !important;\r\n}\r\n:host([raised]:not([disabled])){\r\n    @apply --shadow-elevation-2dp;\r\n}\r\n\r\n:host([disabled]) {\r\n    background: #eaeaea;\r\n    color: #a8a8a8;\r\n    cursor: auto;\r\n    pointer-events: none;\r\n    box-shadow:none;\r\n    @apply --paper-button-disabled;\r\n}\r\n\r\n:host([color]){\r\n    color: var(--paper-button-color,'green');\r\n}\r\n\r\n:host:not([disabled]):focus{\r\n    font-weight: 500;\r\n}\r\n:host([animated]) {\r\n    @apply --shadow-transition;\r\n}\r\n#paper-button .ripple{\r\n    position:absolute;\r\n    transform: scale3d(0,0,0);\r\n    opacity:1;\r\n    transition: all 800ms cubic-bezier(0.4,0,0.2,1);\r\n    border-radius: 50%;\r\n    width:150px;\r\n    height:150px;\r\n    will-change: opacity transform;\r\n    contain: content;\r\n    z-index:-1;\r\n}\r\n\r\n#paper-button .ripple.run{\r\n    opacity: 0;\r\n    transform:none;\r\n}"

/***/ }),
/* 56 */
/***/ (function(module, exports) {

module.exports = "<div id=\"paper-button\">\r\n\t<slot>\r\n\t<span>My Paper Button</span>\r\n\t</slot>\r\n</div>"

/***/ }),
/* 57 */
/***/ (function(module, exports) {

module.exports = ":host{\r\n        @apply --paper-font-common-base;\r\n        font-size: 11px;\r\n      display: inline-block;\r\n      border-radius: 40px;\r\n      padding: 0;\r\n      height: 40px;\r\n\r\n}\r\n.md-chip {\r\n  display: inline-block;\r\n  border-radius: 40px;\r\n  padding: 0;\r\n  height: 40px;\r\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\r\n  -webkit-transition: .2s ease-out;\r\n          transition: .2s ease-out;\r\n}\r\n\r\n.md-chip:hover {\r\n  box-shadow: 0 5px 11px 0 rgba(0, 0, 0, 0.18), 0 4px 15px 0 rgba(0, 0, 0, 0.15);\r\n  cursor: pointer;\r\n}\r\n\r\n.md-chip-img {\r\n  border-radius: 50%;\r\n  width: 40px;\r\n  height: 40px;\r\n  overflow: hidden;\r\n  float: left;\r\n}\r\n\r\n.md-chip-img .md-chip-span {\r\n  display: block;\r\n  height: 40px;\r\n  display: flex;\r\n\t@apply  --layout-center-center;\r\n  color: black;\r\n}\r\n\r\n.md-chip-img img {\r\n  -webkit-transform: translate(-50%);\r\n  margin-left: 21px;\r\n  height: 40px;\r\n}\r\n\r\n.md-chip-text {\r\n  display: inline-block;\r\n  font-weight: 400;\r\n  font-size: 14px;\r\n  height: 40px;\r\n  float: left;\r\n  padding:6px 18px 6px 10px;\r\n  color: rgba(255, 255, 255, .87);\r\n}\r\n\r\n/* Colors */\r\n.grey{\r\n  background-color: var(--paper-grey-300);\r\n}\r\n.pink {\r\n  background-color: #E91E63;\r\n}\r\n\r\n.orange {\r\n  background-color: #ff9800;\r\n}\r\n\r\n.indigo {\r\n  background-color: #3f51b5;\r\n}\r\n\r\n.teal {\r\n  background-color: #009688;\r\n}\r\n\r\n.purple {\r\n  background-color: #9C27B0;\r\n}\r\n\r\n.deep-purple {\r\n  background-color: #512DA8;\r\n}\r\n\r\n.white {\r\n  background-color: #fff;\r\n}\r\n\r\n.white .md-chip-text {\r\n  color: rgba(0, 0, 0, .87);\r\n}\r\n\r\n.red {\r\n  background-color: #f44336;\r\n}\r\n\r\n.blue {\r\n  background-color: #2196f3\r\n}\r\n\r\n.green {\r\n  background-color: #4caf50\r\n}\r\n\r\n\r\n\r\n.white{\r\n  background-color: #fff;\r\n}\r\n.white .md-chip-img .md-chip-span{\r\n  background-color: var(--paper-grey-300);\r\n}\r\n.white .md-chip-img .md-chip-span paper-icon{\r\n    color: var(--paper-grey-700);\r\n}\r\n.white .md-chip-text{\r\n  color: var(--paper-grey-700);\r\n}\r\n\r\n.purple{\r\n  background-color: var(--paper-purple-500);\r\n}\r\n.purple .md-chip-img .md-chip-span{\r\n  background-color: var(--paper-purple-700);\r\n  color:white;\r\n}\r\n.purple .md-chip-img .md-chip-span paper-icon{\r\n    color: white;\r\n}\r\n.purple .md-chip-text{\r\n  color: white;\r\n}"

/***/ }),
/* 58 */
/***/ (function(module, exports) {

module.exports = "  <div class=\"md-chip\">\r\n    <div class=\"md-chip-img\">\r\n      <span class=\"md-chip-span\">\r\n        <paper-icon id=\"icon\"></paper-icon>\r\n      </span>\r\n    </div>\r\n    <span class=\"md-chip-text\">Material Design Chip</span>\r\n  </div>"

/***/ }),
/* 59 */
/***/ (function(module, exports) {

module.exports = "\r\n@font-face {\r\n\tfont-family: 'Material Icons';\r\n\tfont-style: normal;\r\n\tfont-weight: 400;\r\n\tsrc: local('Material Icons'), local('MaterialIcons-Regular'), url(https://fonts.gstatic.com/s/materialicons/v21/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2) format('woff2');\r\n}\r\n\r\n:host{\r\n\tfont-family: 'Material Icons';\r\n\tfont-weight: normal;\r\n\tfont-style: normal;\r\n\tfont-size: 24px;\r\n\tline-height: 1;\r\n\tletter-spacing: normal;\r\n\ttext-transform: none;\r\n\tdisplay: inline-block;\r\n\twhite-space: nowrap;\r\n\tword-wrap: normal;\r\n\tdirection: ltr;\r\n\t-webkit-font-feature-settings: 'liga';\r\n\t-webkit-font-smoothing: antialiased;\r\n}\r\n\r\n.large {\r\n\tfont-size: 6rem;\r\n}\r\n.tiny{\r\n\tfont-size: 1rem;\r\n}\r\n.small{\r\n\tfont-size: 2rem;\r\n}\r\n.medium{\r\n\tfont-size: 4rem;\r\n}\r\n"

/***/ }),
/* 60 */
/***/ (function(module, exports) {

module.exports = "<slot></slot>\r\n"

/***/ }),
/* 61 */
/***/ (function(module, exports) {

module.exports = "* { box-sizing:border-box; }\r\n:host{\r\n    display: block;\r\n    padding-top: 20px;\r\n}\r\n/* form starting stylings ------------------------------- */\r\n.group{ \r\n  position:relative; \r\n  margin-bottom:10px; \r\n}\r\n.group.valid{\r\n    color:green;\r\n}\r\n.group.invalid label{\r\n    color:red!important;\r\n}\r\n\r\ninput \t\t\t\t{\r\n  font-size:14px;\r\n  padding:5px;\r\n  display:block;\r\n  width:100%;\r\n  border:none;\r\n  border-bottom:1px solid #757575;\r\n  background-color: transparent;\r\n  color: black;\r\n  @apply --paper-font-common-base;\r\n}\r\ninput:focus \t\t{ outline:none; }\r\n\r\n/* LABEL ======================================= */\r\nlabel \t\t\t\t {\r\n  color:#999; \r\n  font-size:14px;\r\n  font-weight:normal;\r\n  position:absolute;\r\n  pointer-events:none;\r\n  left:5px;\r\n  top:5px;\r\n  transition:0.2s ease all; \r\n  -moz-transition:0.2s ease all; \r\n  -webkit-transition:0.2s ease all;\r\n   @apply --paper-font-common-base;\r\n}\r\n\r\n/* active state */\r\ninput:focus ~ label, input:valid ~ label \t\t{\r\n  top:-20px;\r\n  font-size:14px;\r\n  color:#5264AE;\r\n}\r\n\r\n/* BOTTOM BARS ================================= */\r\n.bar \t{ position:relative; display:block; width:100%; }\r\n.bar:before, .bar:after \t{\r\n  content:'';\r\n  height:2px; \r\n  width:0;\r\n  bottom:1px; \r\n  position:absolute;\r\n  background:#5264AE; \r\n  transition:0.2s ease all; \r\n  -moz-transition:0.2s ease all; \r\n  -webkit-transition:0.2s ease all;\r\n}\r\n.bar:before {\r\n  left:50%;\r\n}\r\n.bar:after {\r\n  right:50%; \r\n}\r\n\r\n/* active state */\r\ninput:focus ~ .bar:before, input:focus ~ .bar:after {\r\n  width:50%;\r\n}\r\n\r\n/* HIGHLIGHTER ================================== */\r\n.highlight {\r\n  position:absolute;\r\n  height:60%; \r\n  width:100px; \r\n  top:25%; \r\n  left:0;\r\n  pointer-events:none;\r\n  opacity:0.5;\r\n}\r\n\r\n/* active state */\r\ninput:focus ~ .highlight {\r\n  -webkit-animation:inputHighlighter 0.3s ease;\r\n  -moz-animation:inputHighlighter 0.3s ease;\r\n  animation:inputHighlighter 0.3s ease;\r\n}\r\n\r\n/* ANIMATIONS ================ */\r\n@-webkit-keyframes inputHighlighter {\r\n\tfrom { background:#5264AE; }\r\n  to \t{ width:0; background:transparent; }\r\n}\r\n@-moz-keyframes inputHighlighter {\r\n\tfrom { background:#5264AE; }\r\n  to \t{ width:0; background:transparent; }\r\n}\r\n@keyframes inputHighlighter {\r\n\tfrom { background:#5264AE; }\r\n  to \t{ width:0; background:transparent; }\r\n}"

/***/ }),
/* 62 */
/***/ (function(module, exports) {

module.exports = "<div class=\"group\">      \r\n      <input type=\"text\" required>\r\n      <span class=\"highlight\"></span>\r\n      <span class=\"bar\"></span>\r\n      <label>Undefined</label>\r\n</div>"

/***/ }),
/* 63 */
/***/ (function(module, exports) {

module.exports = "hr{\r\n    margin: -1px 0px 0px 72px;\r\n    height: 1px;\r\n    border: none;\r\n    background-color: rgb(224, 224, 224);\r\n }\r\n"

/***/ }),
/* 64 */
/***/ (function(module, exports) {

module.exports = "<hr/>"

/***/ }),
/* 65 */
/***/ (function(module, exports) {

module.exports = ":host{\r\n    border: 10px;\r\n    box-sizing: border-box;\r\n    display: block;\r\n    font-family: Roboto, sans-serif;\r\n    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\r\n    cursor: pointer;\r\n    text-decoration: none;\r\n    margin: 0px;\r\n    padding: 0px;\r\n    outline: none;\r\n    font-size: 16px;\r\n    font-weight: inherit;\r\n    position: relative;\r\n    z-index: 1;\r\n    color: rgba(0, 0, 0, 0.870588);\r\n    line-height: 16px;\r\n    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\r\n    background: none;\r\n}\r\n\r\n.item{\r\n    margin-left: 0px;\r\n    padding: 20px 56px 16px 72px;\r\n    position: relative;\r\n    display: block;\r\n    text-decoration: none;\r\n    height: 100%;\r\n    color: rgba(0, 0, 0, 0.870588);\r\n}\r\n\r\n.item:hover{\r\n    background-color: #e8e8e8;\r\n}\r\n\r\n.icon-right{\r\n    display: block;\r\n    color: rgba(0, 0, 0, 0.870588);\r\n    fill: rgb(117, 117, 117);\r\n    height: 24px;\r\n    width: 24px;\r\n    user-select: none;\r\n    transition: all 450ms cubic-bezier(0.23, 1, 0.32, 1) 0ms;\r\n    position: absolute;\r\n    top: 12px;\r\n    margin: 12px;\r\n    right: 4px;\r\n}\r\n.icon-left{\r\n    color: rgb(255, 255, 255);\r\n    background-color: rgb(188, 188, 188);\r\n    user-select: none;\r\n    display: inline-flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    font-size: 20px;\r\n    border-radius: 50%;\r\n    height: 40px;\r\n    width: 40px;\r\n    position: absolute;\r\n    top: 16px;\r\n    left: 16px;\r\n}\r\n\r\n.secondary-content{\r\n        font-size: 14px;\r\n    line-height: 16px;\r\n    height: 16px;\r\n    margin: 4px 0px 0px;\r\n    color: rgba(0, 0, 0, 0.541176);\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}"

/***/ }),
/* 66 */
/***/ (function(module, exports) {

module.exports = "<div class=\"item\">\r\n    <paper-icon class=\"icon-left\"></paper-icon>\r\n    <paper-icon class=\"icon-right\"></paper-icon>\r\n    <div class=\"primary-content\"></div>\r\n    <div class=\"secondary-content\"></div>\r\n</div>\r\n"

/***/ }),
/* 67 */
/***/ (function(module, exports) {

module.exports = ":host {\r\n    display: block;\r\n    padding: 8px 0;\r\n    list-style: none;\r\n}\r\n\r\nul, ol {\r\n    font-size: 14px;\r\n    line-height: 24px;\r\n}\r\n\r\naddress, ul, ol {\r\n    font-weight: 400;\r\n    letter-spacing: 0;\r\n}"

/***/ }),
/* 68 */
/***/ (function(module, exports) {

module.exports = "<slot></slot>\r\n"

/***/ }),
/* 69 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(4);

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map