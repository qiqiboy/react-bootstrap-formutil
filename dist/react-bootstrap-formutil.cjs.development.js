'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var reactFormutil = require('react-formutil');
var React = require('react');
var PropTypes = require('prop-types');
var reactBootstrap = require('react-bootstrap');
var reactIs = require('react-is');
var isEqual = require('react-fast-compare');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);
var PropTypes__default = /*#__PURE__*/_interopDefaultLegacy(PropTypes);
var reactIs__default = /*#__PURE__*/_interopDefaultLegacy(reactIs);
var isEqual__default = /*#__PURE__*/_interopDefaultLegacy(isEqual);

function unwrapExports (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var defineProperty = createCommonjsModule(function (module) {
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _defineProperty = unwrapExports(defineProperty);

var _typeof_1 = createCommonjsModule(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";

  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}

module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(_typeof_1);

var require$$0 = _typeof_1;

var toPrimitive$1 = createCommonjsModule(function (module) {
var _typeof = require$$0["default"];

function _toPrimitive(input, hint) {
  if (_typeof(input) !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (_typeof(res) !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

module.exports = _toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(toPrimitive$1);

var toPrimitive = toPrimitive$1;

var toPropertyKey = createCommonjsModule(function (module) {
var _typeof = require$$0["default"];



function _toPropertyKey(arg) {
  var key = toPrimitive(arg, "string");
  return _typeof(key) === "symbol" ? key : String(key);
}

module.exports = _toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _toPropertyKey = unwrapExports(toPropertyKey);

var objectSpread2 = createCommonjsModule(function (module) {
function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    enumerableOnly && (symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    })), keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = null != arguments[i] ? arguments[i] : {};
    i % 2 ? ownKeys(Object(source), !0).forEach(function (key) {
      defineProperty(target, key, source[key]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) {
      Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
    });
  }

  return target;
}

module.exports = _objectSpread2, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _objectSpread = unwrapExports(objectSpread2);

var objectWithoutPropertiesLoose$1 = createCommonjsModule(function (module) {
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

module.exports = _objectWithoutPropertiesLoose, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(objectWithoutPropertiesLoose$1);

var objectWithoutPropertiesLoose = objectWithoutPropertiesLoose$1;

var objectWithoutProperties = createCommonjsModule(function (module) {
function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = objectWithoutPropertiesLoose(source, excluded);
  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

module.exports = _objectWithoutProperties, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _objectWithoutProperties = unwrapExports(objectWithoutProperties);

var classCallCheck = createCommonjsModule(function (module) {
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _classCallCheck = unwrapExports(classCallCheck);

var createClass = createCommonjsModule(function (module) {
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  Object.defineProperty(Constructor, "prototype", {
    writable: false
  });
  return Constructor;
}

module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _createClass = unwrapExports(createClass);

var setPrototypeOf$1 = createCommonjsModule(function (module) {
function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(setPrototypeOf$1);

var setPrototypeOf = setPrototypeOf$1;

var inherits = createCommonjsModule(function (module) {
function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  Object.defineProperty(subClass, "prototype", {
    writable: false
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _inherits = unwrapExports(inherits);

var getPrototypeOf$1 = createCommonjsModule(function (module) {
function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(getPrototypeOf$1);

var isNativeReflectConstruct$1 = createCommonjsModule(function (module) {
function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

module.exports = _isNativeReflectConstruct, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(isNativeReflectConstruct$1);

var assertThisInitialized$1 = createCommonjsModule(function (module) {
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(assertThisInitialized$1);

var assertThisInitialized = assertThisInitialized$1;

var possibleConstructorReturn$1 = createCommonjsModule(function (module) {
var _typeof = require$$0["default"];



function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  } else if (call !== void 0) {
    throw new TypeError("Derived constructors may only return object or undefined");
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

unwrapExports(possibleConstructorReturn$1);

var getPrototypeOf = getPrototypeOf$1;

var isNativeReflectConstruct = isNativeReflectConstruct$1;

var possibleConstructorReturn = possibleConstructorReturn$1;

var createSuper = createCommonjsModule(function (module) {
function _createSuper(Derived) {
  var hasNativeReflectConstruct = isNativeReflectConstruct();
  return function _createSuperInternal() {
    var Super = getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = getPrototypeOf(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return possibleConstructorReturn(this, result);
  };
}

module.exports = _createSuper, module.exports.__esModule = true, module.exports["default"] = module.exports;
});

var _createSuper = unwrapExports(createSuper);

var CheckboxGroup = /*#__PURE__*/function (_Component) {
  _inherits(CheckboxGroup, _Component);

  var _super = _createSuper(CheckboxGroup);

  function CheckboxGroup() {
    _classCallCheck(this, CheckboxGroup);

    return _super.apply(this, arguments);
  }

  _createClass(CheckboxGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          name = _this$props.name,
          onChange = _this$props.onChange,
          value = _this$props.value,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          isValid = _this$props.isValid,
          isInvalid = _this$props.isInvalid;

      var childOnChange = function childOnChange(ev) {
        var _ev$target = ev.target,
            checked = _ev$target.checked,
            childValue = _ev$target.value;
        var newValue = value || [];
        onChange(checked ? newValue.concat(childValue) : newValue.filter(function (v) {
          return v !== childValue;
        }));
      };

      return React.Children.map(children, function (child) {
        var childValue = child.props.value;
        return /*#__PURE__*/React.cloneElement(child, {
          isValid: isValid,
          isInvalid: isInvalid,
          checked: !!value && value.indexOf(childValue) > -1,
          onChange: childOnChange,
          onFocus: onFocus,
          onBlur: onBlur,
          name: name
        });
      });
    }
  }]);

  return CheckboxGroup;
}(React.Component);

CheckboxGroup.formutilType = 'array';
CheckboxGroup.propTypes = {
  onChange: PropTypes__default["default"].func,
  onFocus: PropTypes__default["default"].func,
  onBlur: PropTypes__default["default"].func,
  value: PropTypes__default["default"].array
};
var CheckboxGroup$1 = CheckboxGroup;

var styleSheet;

try {
  var style = document.createElement('style');
  style.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(style);
  styleSheet = document.styleSheets[document.styleSheets.length - 1];
} catch (err) {}

function insertRule(selector, content) {
  if (styleSheet) {
    if (styleSheet.insertRule) {
      styleSheet.insertRule("".concat(selector, " { ").concat(content, " }"), 0);
    } else if (styleSheet.addRule) {
      styleSheet.addRule(selector, content, 0);
    }
  }
}

var _excluded = ["children", "addons", "label", "helper", "labelCol", "wrapperCol", "validationState", "className", "as", "feedback", "extra", "noStyle", "errorLevel"];
var isValidElementType = reactIs__default["default"].isValidElementType;

var _createContext = /*#__PURE__*/React.createContext({}),
    Consumer = _createContext.Consumer,
    Provider = _createContext.Provider;

var errorLevelGlobal = 1;
/**
 * 0 dirty & invalid & touched
 * 1 dirty & invalid
 * 2 invalid
 */

var setErrorLevel = function setErrorLevel(level) {
  errorLevelGlobal = level;
};
var HelpBlock = reactBootstrap.FormControl.Feedback;

function getChildComponent(children) {
  if (children) {
    var childrenType = children.type;

    if (isValidElementType(childrenType)) {
      // SomeComponent.formutiType = xx
      if (childrenType.formutilType) {
        return childrenType.formutilType;
      } // <input type="checkbox" />


      if (typeof childrenType === 'string' && children.props.type) {
        return children.props.type;
      }
    }

    return childrenType || children;
  }
}

var _FormGroup = /*#__PURE__*/function (_Component) {
  _inherits(_FormGroup, _Component);

  var _super = _createSuper(_FormGroup);

  function _FormGroup() {
    var _this;

    _classCallCheck(this, _FormGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _super.call.apply(_super, [this].concat(args));
    _this.fields = {};

    _this.registerField = function (name, $fieldutil) {
      return $fieldutil ? _this.fields[name] = $fieldutil : delete _this.fields[name];
    };

    _this.latestValidationProps = null;

    _this.checkHasError = function (errorLevel, $invalid, $dirty, $touched, $focused) {
      switch (errorLevel) {
        case 0:
          return $invalid && $dirty && $touched;

        case 1:
          return $invalid && $dirty;

        case 2:
          return $invalid;

        default:
          return false;
      }
    };

    _this.fetchCurrentValidationProps = function (errorLevel) {
      var allFieldutils = Object.keys(_this.fields).map(function (name) {
        return _this.fields[name].$new();
      });
      var errFieldutils = allFieldutils.filter(function ($fieldutil) {
        return $fieldutil.$invalid;
      });
      var $invalid = errFieldutils.length > 0;
      var $dirty = allFieldutils.some(function ($fieldutil) {
        return $fieldutil.$dirty;
      });
      var $touched = allFieldutils.some(function ($fieldutil) {
        return $fieldutil.$touched;
      });
      var $focused = allFieldutils.some(function ($fieldutil) {
        return $fieldutil.$focused;
      });
      var $errors = errFieldutils.map(function ($fieldutil) {
        var $invalid = $fieldutil.$invalid,
            $focused = $fieldutil.$focused,
            $touched = $fieldutil.$touched,
            $dirty = $fieldutil.$dirty,
            $getFirstError = $fieldutil.$getFirstError;

        var hasError = _this.checkHasError(errorLevel, $invalid, $dirty, $touched, $focused);

        return hasError && $getFirstError();
      }).filter(Boolean);
      return _this.getValidationProps(errorLevel, $invalid, $dirty, $touched, $focused, $errors);
    };

    _this.getValidationProps = function (errorLevel, $invalid, $dirty, $touched, $focused, $errors) {
      var hasError = _this.checkHasError(errorLevel, $invalid, $dirty, $touched, $focused);

      var groupProps = {
        className: [_this.props.className, hasError && 'has-error', $invalid ? 'is-invalid' : 'is-valid', $dirty ? 'is-dirty' : 'is-pristine', $touched ? 'is-touched' : 'is-untouched', $focused ? 'is-focused' : 'is-unfocused'].filter(Boolean).join(' ')
      };
      var validationProps = {};

      if (hasError) {
        validationProps.isInvalid = true;
      }

      if (_this.props.feedback && !$invalid) {
        validationProps.isValid = true;
      }

      return {
        groupProps: groupProps,
        validationProps: validationProps,
        error: hasError ? /*#__PURE__*/React__default["default"].createElement(HelpBlock, {
          type: "invalid"
        }, Array.isArray($errors) ? $errors.map(function (err, index) {
          return /*#__PURE__*/React__default["default"].createElement("div", {
            key: index
          }, err);
        }) : $errors) : null
      };
    };

    return _this;
  }

  _createClass(_FormGroup, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this$registerAncesto;

      // eslint-disable-next-line
      (_this$registerAncesto = this.registerAncestorField) === null || _this$registerAncesto === void 0 ? void 0 : _this$registerAncesto.call(this, this.props.name, this.$fieldutil);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      var _this$registerAncesto2;

      // eslint-disable-next-line
      (_this$registerAncesto2 = this.registerAncestorField) === null || _this$registerAncesto2 === void 0 ? void 0 : _this$registerAncesto2.call(this, this.props.name, null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var props = this.props;

      var childList = props.children,
          addons = props.addons,
          label = props.label,
          helper = props.helper,
          labelCol = props.labelCol,
          wrapperCol = props.wrapperCol;
          props.validationState;
          props.className;
          var as = props.as;
          props.feedback;
          var extraNode = props.extra,
          noStyle = props.noStyle,
          _props$errorLevel = props.errorLevel,
          errorLevel = _props$errorLevel === void 0 ? errorLevelGlobal : _props$errorLevel,
          fieldProps = _objectWithoutProperties(props, _excluded);

      var Wrapper = wrapperCol ? reactBootstrap.Col : React.Fragment;
      var groupAsProps = !as && (labelCol || wrapperCol) ? reactBootstrap.Row : as;

      if (label) {
        if ( /*#__PURE__*/React.isValidElement(label)) {
          if (labelCol) {
            label = /*#__PURE__*/React.cloneElement(label, _objectSpread({
              column: true
            }, labelCol));
          }
        } else {
          label = /*#__PURE__*/React__default["default"].createElement(reactBootstrap.FormLabel, Object.assign({
            column: !!labelCol
          }, labelCol), label);
        }
      }

      var AddonWrapper = addons ? reactBootstrap.InputGroup : React.Fragment;
      var addonWrapperProps = addons ? {
        size: addons.size
      } : undefined;

      if (addons) {
        if (addons.pre) {
          addons.pre = /*#__PURE__*/React__default["default"].createElement(reactBootstrap.InputGroup.Prepend, null, /*#__PURE__*/React.isValidElement(addons.pre) ? addons.pre : /*#__PURE__*/React__default["default"].createElement(reactBootstrap.InputGroup.Text, null, addons.pre));
        }

        if (addons.end) {
          addons.end = /*#__PURE__*/React__default["default"].createElement(reactBootstrap.InputGroup.Append, null, /*#__PURE__*/React.isValidElement(addons.end) ? addons.end : /*#__PURE__*/React__default["default"].createElement(reactBootstrap.InputGroup.Text, null, addons.end));
        }
      } else {
        addons = {};
      }

      if (helper && ! /*#__PURE__*/React.isValidElement(helper)) {
        helper = /*#__PURE__*/React__default["default"].createElement(reactBootstrap.FormText, {
          className: "text-muted"
        }, helper);
      }

      if (!props.name) {
        var _this$latestValidatio = this.latestValidationProps = this.fetchCurrentValidationProps(errorLevel),
            groupProps = _this$latestValidatio.groupProps,
            error = _this$latestValidatio.error;
        /**
         * 检查下最新的校验状态和当前是否一致，不一致的话需要强制刷新下
         */


        Promise.resolve().then(function () {
          if (!isEqual__default["default"](_this2.latestValidationProps, _this2.fetchCurrentValidationProps(errorLevel))) {
            _this2.forceUpdate();
          }
        });
        return /*#__PURE__*/React__default["default"].createElement(Provider, {
          value: this.registerField
        }, /*#__PURE__*/React__default["default"].createElement(reactBootstrap.FormGroup, Object.assign({}, fieldProps, groupProps, {
          as: groupAsProps
        }), label, /*#__PURE__*/React__default["default"].createElement(Wrapper, wrapperCol, /*#__PURE__*/React__default["default"].createElement(AddonWrapper, addonWrapperProps, addons.pre, typeof childList === 'function' ? childList() : childList, addons.end), error || helper), extraNode));
      } // If $memo is true, pass the children to Field for SCU diffing.


      if (fieldProps.$memo === true) {
        fieldProps.__DIFF__ = {
          childList: childList,
          compositionValue: this.compositionValue
        };
      } else if (Array.isArray(fieldProps.$memo)) {
        fieldProps.$memo = fieldProps.$memo.concat(this.compositionValue);
      }

      var children = typeof childList === 'function' ? childList : React.Children.only(childList);
      var component = getChildComponent(children);

      if (component === reactBootstrap.FormControl) {
        if (children.props.as === 'select' && children.props.multiple) {
          component = 'multipleSelect';
        }
      }

      switch (component) {
        case reactBootstrap.FormCheck:
        case reactBootstrap.ToggleButton:
        case 'checkbox':
        case 'radio':
          fieldProps.__TYPE__ = 'checked';
          break;

        case 'multipleSelect':
          fieldProps.__TYPE__ = 'array';
          break;

        case CheckboxGroup$1:
        case reactBootstrap.ToggleButtonGroup:
          if (children.props.type !== 'radio') {
            fieldProps.__TYPE__ = 'array';
          }

          break;

        case 'checked':
        case 'array':
        case 'object':
        case 'number':
        case 'empty':
          fieldProps.__TYPE__ = component;
          break;
      }

      return /*#__PURE__*/React__default["default"].createElement(reactFormutil.EasyField, Object.assign({}, fieldProps, {
        passUtil: "$fieldutil",
        render: function render($handleProps) {
          var _childProps, _Object$assign;

          var _props$valuePropName = props.valuePropName,
              valuePropName = _props$valuePropName === void 0 ? 'value' : _props$valuePropName,
              _props$changePropName = props.changePropName,
              changePropName = _props$changePropName === void 0 ? 'onChange' : _props$changePropName,
              _props$focusPropName = props.focusPropName,
              focusPropName = _props$focusPropName === void 0 ? 'onFocus' : _props$focusPropName,
              _props$blurPropName = props.blurPropName,
              blurPropName = _props$blurPropName === void 0 ? 'onBlur' : _props$blurPropName;

          var $fieldutil = $handleProps.$fieldutil,
              _onChange = $handleProps[changePropName],
              onFocus = $handleProps[focusPropName],
              onBlur = $handleProps[blurPropName],
              value = $handleProps[valuePropName],
              restProps = _objectWithoutProperties($handleProps, ["$fieldutil", changePropName, focusPropName, blurPropName, valuePropName].map(_toPropertyKey));

          var $invalid = $fieldutil.$invalid,
              $dirty = $fieldutil.$dirty,
              $touched = $fieldutil.$touched,
              $focused = $fieldutil.$focused,
              $getFirstError = $fieldutil.$getFirstError;
          /** @type {any} */

          var childProps;

          switch (fieldProps.__TYPE__) {
            case 'checked':
            case 'checkbox':
            case 'radio':
              var _props$checked = props.checked,
                  checked = _props$checked === void 0 ? true : _props$checked,
                  _props$unchecked = props.unchecked,
                  unchecked = _props$unchecked === void 0 ? false : _props$unchecked;
              childProps = {
                checked: value === checked,
                onChange: function onChange(ev) {
                  var newValue = ev && ev.target ? ev.target.checked : ev;

                  _onChange(newValue ? checked : unchecked, ev);
                }
              };
              break;

            default:
              childProps = (_childProps = {
                onCompositionEnd: function onCompositionEnd(ev) {
                  _this2.isComposing = false;
                  delete _this2.compositionValue;

                  _onChange(ev);
                },
                onCompositionStart: function onCompositionStart() {
                  return _this2.isComposing = true;
                }
              }, _defineProperty(_childProps, changePropName, component === 'multipleSelect' ? function (ev) {
                _onChange([].slice.call(ev.target.options).filter(function (option) {
                  return option.selected;
                }).map(function (option) {
                  return option.value;
                }), ev);
              } : function (ev) {
                if (_this2.isComposing) {
                  _this2.compositionValue = ev.target[valuePropName];

                  _this2.forceUpdate();
                } else {
                  for (var _len2 = arguments.length, rest = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
                    rest[_key2 - 1] = arguments[_key2];
                  }

                  _onChange.apply(void 0, [ev].concat(rest));
                }
              }), _defineProperty(_childProps, valuePropName, 'compositionValue' in _this2 ? _this2.compositionValue : value), _defineProperty(_childProps, blurPropName, function () {
                if (_this2.isComposing) {
                  _this2.isComposing = false;
                  delete _this2.compositionValue;

                  _onChange.apply(void 0, arguments);
                }

                return onBlur.apply(void 0, arguments);
              }), _defineProperty(_childProps, "name", fieldProps.name), _childProps);
              break;
          }

          var _this2$getValidationP = _this2.getValidationProps(errorLevel, $invalid, $dirty, $touched, $focused, $getFirstError()),
              groupProps = _this2$getValidationP.groupProps,
              validationProps = _this2$getValidationP.validationProps,
              error = _this2$getValidationP.error;

          childProps = Object.assign((_Object$assign = {}, _defineProperty(_Object$assign, focusPropName, onFocus), _defineProperty(_Object$assign, blurPropName, onBlur), _Object$assign), childProps, validationProps);
          var fieldInstance = typeof children === 'function' ? children(childProps) : /*#__PURE__*/React.cloneElement(children, childProps);
          return /*#__PURE__*/React__default["default"].createElement(Consumer, null, function (registerField) {
            if (noStyle) {
              _this2.$fieldutil = $fieldutil;
              _this2.registerAncestorField = registerField;
              return fieldInstance;
            }

            return /*#__PURE__*/React__default["default"].createElement(reactBootstrap.FormGroup, Object.assign({}, restProps, groupProps, {
              as: groupAsProps
            }), label, /*#__PURE__*/React__default["default"].createElement(Wrapper, wrapperCol, /*#__PURE__*/React__default["default"].createElement(AddonWrapper, addonWrapperProps, addons.pre, fieldInstance, addons.end), error || helper), extraNode);
          });
        }
      }));
    }
  }]);

  return _FormGroup;
}(React.Component);

_FormGroup.propTypes = {
  children: function children(props) {
    var _PropTypes$node;

    for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
      args[_key3 - 1] = arguments[_key3];
    }

    if ('name' in props) {
      var _PropTypes$oneOfType;

      return (_PropTypes$oneOfType = PropTypes__default["default"].oneOfType([PropTypes__default["default"].element, PropTypes__default["default"].func])).isRequired.apply(_PropTypes$oneOfType, [props].concat(args));
    }

    return (_PropTypes$node = PropTypes__default["default"].node).isRequired.apply(_PropTypes$node, [props].concat(args));
  },
  label: PropTypes__default["default"].any,
  helper: PropTypes__default["default"].any,
  labelCol: PropTypes__default["default"].object,
  wrapperCol: PropTypes__default["default"].object,
  addons: PropTypes__default["default"].object,
  extra: PropTypes__default["default"].node,
  feedback: PropTypes__default["default"].bool,
  noStyle: PropTypes__default["default"].bool,
  errorLevel: PropTypes__default["default"].oneOf([0, 1, 2, 'off']) // $parser $formatter checked unchecked $validators validMessage等传递给 EasyField 组件的额外参数

};
var _FormGroup$1 = _FormGroup;
insertRule('.valid-feedback:empty,.invalid-feedback:empty', 'display: none !important');
insertRule('.has-error .invalid-feedback', 'display: block');

var RadioGroup = /*#__PURE__*/function (_Component) {
  _inherits(RadioGroup, _Component);

  var _super = _createSuper(RadioGroup);

  function RadioGroup() {
    _classCallCheck(this, RadioGroup);

    return _super.apply(this, arguments);
  }

  _createClass(RadioGroup, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          name = _this$props.name,
          onChange = _this$props.onChange,
          value = _this$props.value,
          onFocus = _this$props.onFocus,
          onBlur = _this$props.onBlur,
          isValid = _this$props.isValid,
          isInvalid = _this$props.isInvalid;

      var childOnChange = function childOnChange(ev) {
        onChange(ev.target.value, ev);
      };

      return React.Children.map(children, function (child) {
        var childValue = child.props.value;
        return /*#__PURE__*/React.cloneElement(child, {
          isValid: isValid,
          isInvalid: isInvalid,
          checked: value === childValue,
          onChange: childOnChange,
          onFocus: onFocus,
          onBlur: onBlur,
          name: name
        });
      });
    }
  }]);

  return RadioGroup;
}(React.Component);

RadioGroup.propTypes = {
  onChange: PropTypes__default["default"].func,
  onFocus: PropTypes__default["default"].func,
  onBlur: PropTypes__default["default"].func,
  value: PropTypes__default["default"].string
};
var RadioGroup$1 = RadioGroup;

exports.CheckboxGroup = CheckboxGroup$1;
exports.FormGroup = _FormGroup$1;
exports.RadioGroup = RadioGroup$1;
exports.SwitchGroup = CheckboxGroup$1;
exports.setErrorLevel = setErrorLevel;
Object.keys(reactFormutil).forEach(function (k) {
	if (k !== 'default' && !exports.hasOwnProperty(k)) Object.defineProperty(exports, k, {
		enumerable: true,
		get: function () { return reactFormutil[k]; }
	});
});
