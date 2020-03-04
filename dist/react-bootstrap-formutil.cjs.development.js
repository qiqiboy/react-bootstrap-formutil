'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var reactFormutil = require('react-formutil');
var _defineProperty = _interopDefault(require('@babel/runtime/helpers/esm/defineProperty'));
var _toPropertyKey = _interopDefault(require('@babel/runtime/helpers/esm/toPropertyKey'));
var _objectSpread = _interopDefault(require('@babel/runtime/helpers/esm/objectSpread2'));
var _objectWithoutProperties = _interopDefault(require('@babel/runtime/helpers/esm/objectWithoutProperties'));
var _classCallCheck = _interopDefault(require('@babel/runtime/helpers/esm/classCallCheck'));
var _createClass = _interopDefault(require('@babel/runtime/helpers/esm/createClass'));
var _possibleConstructorReturn = _interopDefault(require('@babel/runtime/helpers/esm/possibleConstructorReturn'));
var _getPrototypeOf = _interopDefault(require('@babel/runtime/helpers/esm/getPrototypeOf'));
var _inherits = _interopDefault(require('@babel/runtime/helpers/esm/inherits'));
var React = require('react');
var React__default = _interopDefault(React);
var reactIs = require('react-is');
var PropTypes = _interopDefault(require('prop-types'));
var reactBootstrap = require('react-bootstrap');

var CheckboxGroup = /*#__PURE__*/function (_Component) {
  _inherits(CheckboxGroup, _Component);

  function CheckboxGroup() {
    _classCallCheck(this, CheckboxGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(CheckboxGroup).apply(this, arguments));
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
        return React.cloneElement(child, {
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

CheckboxGroup.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.array
};

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

var errorLevelGlobal = 1;
/**
 * 0 dirty & invalid & touched
 * 1 dirty & invalid
 * 2 invalid
 */

var setErrorLevel = function setErrorLevel(level) {
  errorLevelGlobal = level;
};
var isUglify = reactBootstrap.Form.displayName !== 'Form';

var _FormControl = isUglify ? reactBootstrap.FormControl : 'FormControl';

var _FormCheck = isUglify ? reactBootstrap.FormCheck : 'FormCheck';

var _CheckboxGroup = isUglify ? CheckboxGroup : 'CheckboxGroup';

var _ToggleButton = isUglify ? reactBootstrap.ToggleButton : 'ToggleButton';

var _ToggleButtonGroup = isUglify ? reactBootstrap.ToggleButtonGroup : 'ToggleButtonGroup';

var HelpBlock = reactBootstrap.FormControl.Feedback;

function getChildComponent(children) {
  if (children) {
    var _children$props;

    var childrenType = children.type;

    if (typeof childrenType !== 'string' && reactIs.isValidElementType(childrenType)) {
      if (childrenType.formutilType) {
        return childrenType.formutilType;
      }

      if (isUglify) {
        return childrenType;
      }

      return childrenType.displayName || childrenType.name;
    }

    return ((_children$props = children.props) === null || _children$props === void 0 ? void 0 : _children$props.type) || children.type;
  }
}

var _FormGroup = /*#__PURE__*/function (_Component) {
  _inherits(_FormGroup, _Component);

  function _FormGroup() {
    _classCallCheck(this, _FormGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(_FormGroup).apply(this, arguments));
  }

  _createClass(_FormGroup, [{
    key: "render",
    value: function render() {
      var _this = this;

      var props = this.props;

      var childList = props.children,
          addons = props.addons,
          label = props.label,
          helper = props.helper,
          labelCol = props.labelCol,
          wrapperCol = props.wrapperCol,
          validationState = props.validationState,
          className = props.className,
          feedback = props.feedback,
          extraNode = props.extra,
          _props$errorLevel = props.errorLevel,
          errorLevel = _props$errorLevel === void 0 ? errorLevelGlobal : _props$errorLevel,
          fieldProps = _objectWithoutProperties(props, ["children", "addons", "label", "helper", "labelCol", "wrapperCol", "validationState", "className", "feedback", "extra", "errorLevel"]);

      var children = typeof childList === 'function' ? childList : React.Children.only(childList);
      var Wrapper = wrapperCol ? reactBootstrap.Col : React.Fragment;
      var groupProps = {
        className: className
      };

      if (label) {
        if (React.isValidElement(label)) {
          if (labelCol) {
            label = React.cloneElement(label, _objectSpread({
              column: true
            }, labelCol));
          }
        } else {
          label = React__default.createElement(reactBootstrap.FormLabel, Object.assign({
            column: !!labelCol
          }, labelCol), label);
        }
      }

      if (labelCol || wrapperCol) {
        groupProps.as = reactBootstrap.Row;
      }

      var AddonWrapper = addons ? reactBootstrap.InputGroup : React.Fragment;
      var addonWrapperProps = addons ? {
        size: addons.size
      } : undefined;

      if (addons) {
        if (addons.pre) {
          addons.pre = React__default.createElement(reactBootstrap.InputGroup.Prepend, null, React.isValidElement(addons.pre) ? addons.pre : React__default.createElement(reactBootstrap.InputGroup.Text, null, addons.pre));
        }

        if (addons.end) {
          addons.end = React__default.createElement(reactBootstrap.InputGroup.Append, null, React.isValidElement(addons.end) ? addons.end : React__default.createElement(reactBootstrap.InputGroup.Text, null, addons.end));
        }
      } else {
        addons = {};
      }

      if (helper && !React.isValidElement(helper)) {
        helper = React__default.createElement(reactBootstrap.FormText, {
          className: "text-muted"
        }, helper);
      }

      var component = getChildComponent(children);

      if (component === _FormControl) {
        if (children.props.as === 'select' && children.props.multiple) {
          component = 'multipleSelect';
        }
      }

      switch (component) {
        case _FormCheck:
        case _ToggleButton:
        case 'checkbox':
        case 'radio':
          fieldProps.__TYPE__ = 'checked';
          break;

        case 'multipleSelect':
          fieldProps.__TYPE__ = 'array';
          break;

        case _CheckboxGroup:
        case _ToggleButtonGroup:
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

      return React__default.createElement(reactFormutil.EasyField, Object.assign({}, fieldProps, {
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
                  _this.isComposition = false;
                  delete _this.compositionValue;

                  _onChange(ev);
                },
                onCompositionStart: function onCompositionStart() {
                  return _this.isComposition = true;
                }
              }, _defineProperty(_childProps, changePropName, component === 'multipleSelect' ? function (ev) {
                _onChange([].slice.call(ev.target.options).filter(function (option) {
                  return option.selected;
                }).map(function (option) {
                  return option.value;
                }), ev);
              } : function (ev) {
                if (_this.isComposition) {
                  _this.compositionValue = ev.target[valuePropName];

                  _this.forceUpdate();
                } else {
                  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    rest[_key - 1] = arguments[_key];
                  }

                  _onChange.apply(void 0, [ev].concat(rest));
                }
              }), _defineProperty(_childProps, valuePropName, 'compositionValue' in _this ? _this.compositionValue : value), _defineProperty(_childProps, "name", fieldProps.name), _childProps);
              break;
          }

          Object.assign(childProps, (_Object$assign = {}, _defineProperty(_Object$assign, focusPropName, onFocus), _defineProperty(_Object$assign, blurPropName, onBlur), _Object$assign));
          var hasError;

          switch (errorLevel) {
            case 0:
              hasError = $invalid && $dirty && $touched;
              break;

            case 1:
              hasError = $invalid && $dirty;
              break;

            case 2:
              hasError = $invalid;
              break;

            default:
              hasError = false;
              break;
          }

          if (hasError) {
            childProps.isInvalid = true;
          }

          if (feedback && !$invalid) {
            childProps.isValid = true;
          }

          groupProps.className = [groupProps.className, hasError && 'has-error', $invalid ? 'is-invalid' : 'is-valid', $dirty ? 'is-dirty' : 'is-pristine', $touched ? 'is-touched' : 'is-untouched', $focused ? 'is-focused' : 'is-unfocused'].filter(Boolean).join(' ');
          return React__default.createElement(reactBootstrap.FormGroup, Object.assign({}, restProps, groupProps), label, React__default.createElement(Wrapper, wrapperCol, React__default.createElement(AddonWrapper, addonWrapperProps, addons.pre, typeof children === 'function' ? children(childProps) : React.cloneElement(children, childProps), addons.end), hasError ? React__default.createElement(HelpBlock, {
            type: "invalid"
          }, $getFirstError()) : helper), extraNode);
        }
      }));
    }
  }]);

  return _FormGroup;
}(React.Component);

_FormGroup.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired,
  label: PropTypes.any,
  helper: PropTypes.any,
  labelCol: PropTypes.object,
  wrapperCol: PropTypes.object,
  addons: PropTypes.object,
  extra: PropTypes.node,
  feedback: PropTypes.bool,
  errorLevel: PropTypes.oneOf([0, 1, 2, 'off']) // $parser $formatter checked unchecked $validators validMessage等传递给 EasyField 组件的额外参数

};
insertRule('.valid-feedback:empty,.invalid-feedback:empty', 'display: none !important');
insertRule('.has-error .invalid-feedback', 'display: block');

var RadioGroup = /*#__PURE__*/function (_Component) {
  _inherits(RadioGroup, _Component);

  function RadioGroup() {
    _classCallCheck(this, RadioGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(RadioGroup).apply(this, arguments));
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
        return React.cloneElement(child, {
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
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string
};

Object.keys(reactFormutil).forEach(function (k) {
    if (k !== 'default') Object.defineProperty(exports, k, {
        enumerable: true,
        get: function () {
            return reactFormutil[k];
        }
    });
});
exports.CheckboxGroup = CheckboxGroup;
exports.FormGroup = _FormGroup;
exports.RadioGroup = RadioGroup;
exports.SwitchGroup = CheckboxGroup;
exports.setErrorLevel = setErrorLevel;
