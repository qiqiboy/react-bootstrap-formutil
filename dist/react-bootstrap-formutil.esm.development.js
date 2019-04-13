import { EasyField } from 'react-formutil';
export * from 'react-formutil';
import React, { Fragment, Children, cloneElement, Component, isValidElement } from 'react';
import PropTypes from 'prop-types';
import { FormControl, Col, ControlLabel, InputGroup, HelpBlock, FormGroup, Checkbox, Radio, ToggleButtonGroup } from 'react-bootstrap';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

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
  return Constructor;
}

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
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
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

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

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

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");

  return typeof key === "symbol" ? key : String(key);
}

var CheckboxGroup =
/*#__PURE__*/
function (_Component) {
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
          onBlur = _this$props.onBlur;

      var childOnChange = function childOnChange(ev) {
        var _ev$target = ev.target,
            checked = _ev$target.checked,
            childValue = _ev$target.value;
        var newValue = value || [];
        onChange(checked ? newValue.concat(childValue) : newValue.filter(function (v) {
          return v !== childValue;
        }));
      };

      return React.createElement(Fragment, null, Children.map(children, function (child) {
        var childValue = child.props.value;
        return cloneElement(child, {
          checked: !!value && value.indexOf(childValue) > -1,
          onChange: childOnChange,
          onFocus: onFocus,
          onBlur: onBlur,
          name: name
        });
      }));
    }
  }]);

  return CheckboxGroup;
}(Component);

CheckboxGroup.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.array
};

var errorLevelGlobal = 1;
/**
 * 0 dirty & invalid & touched
 * 1 dirty & invalid
 * 2 invalid
 */

var setErrorLevel = function setErrorLevel(level) {
  errorLevelGlobal = level;
};
var isUglify = FormControl.name !== 'FormControl';

var _Checkbox = isUglify ? Checkbox : 'Checkbox';

var _Radio = isUglify ? Radio : 'Radio';

var _CheckboxGroup = isUglify ? CheckboxGroup : 'CheckboxGroup';

var _ToggleButtonGroup = isUglify ? ToggleButtonGroup : 'Uncontrolled(ToggleButtonGroup)';

function getChildComponent(children) {
  if (children) {
    if (typeof children.type === 'function') {
      var func = children.type;

      if (func.formutilType) {
        return func.formutilType;
      }

      if (isUglify) {
        return func;
      }

      return func.displayName || func.name;
    } else {
      return children.props.type || children.type;
    }
  }
}

var _FormGroup =
/*#__PURE__*/
function (_Component) {
  _inherits(_FormGroup, _Component);

  function _FormGroup() {
    _classCallCheck(this, _FormGroup);

    return _possibleConstructorReturn(this, _getPrototypeOf(_FormGroup).apply(this, arguments));
  }

  _createClass(_FormGroup, [{
    key: "render",
    value: function render() {
      var props = this.props;

      var children = props.children,
          addons = props.addons,
          label = props.label,
          helper = props.helper,
          labelCol = props.labelCol,
          wrapperCol = props.wrapperCol,
          controlId = props.controlId,
          validationState = props.validationState,
          bsSize = props.bsSize,
          bsClass = props.bsClass,
          className = props.className,
          feedback = props.feedback,
          _props$errorLevel = props.errorLevel,
          errorLevel = _props$errorLevel === void 0 ? errorLevelGlobal : _props$errorLevel,
          fieldProps = _objectWithoutProperties(props, ["children", "addons", "label", "helper", "labelCol", "wrapperCol", "controlId", "validationState", "bsSize", "bsClass", "className", "feedback", "errorLevel"]);

      var Wrapper = wrapperCol ? Col : Fragment;
      var groupProps = {
        controlId: controlId,
        bsSize: bsSize,
        bsClass: bsClass,
        className: className
      };

      if (label) {
        if (isValidElement(label)) {
          if (labelCol) {
            label = React.createElement(Col, labelCol, label);
          }
        } else {
          label = labelCol ? React.createElement(Col, Object.assign({}, labelCol, {
            componentClass: ControlLabel
          }), label) : React.createElement(ControlLabel, null, label);
        }
      }

      var AddonWrapper = addons ? InputGroup : Fragment;

      if (addons) {
        if (addons.pre && !isValidElement(addons.pre)) {
          addons.pre = React.createElement(InputGroup.Addon, null, addons.pre);
        }

        if (addons.end && !isValidElement(addons.end)) {
          addons.end = React.createElement(InputGroup.Addon, null, addons.end);
        }
      } else {
        addons = {};
      }

      if (helper && !isValidElement(helper)) {
        helper = React.createElement(HelpBlock, null, helper);
      }

      var component = getChildComponent(children);

      switch (component) {
        case _Checkbox:
        case _Radio:
        case 'checkbox':
        case 'radio':
          fieldProps.__TYPE__ = 'checked';
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

        default:
          break;
      }

      return React.createElement(EasyField, Object.assign({}, fieldProps, {
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
              $getFirstError = $fieldutil.$getFirstError;
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
              childProps = (_childProps = {}, _defineProperty(_childProps, changePropName, _onChange), _defineProperty(_childProps, valuePropName, value), _defineProperty(_childProps, "name", fieldProps.name), _childProps);
              break;
          }

          Object.assign(childProps, (_Object$assign = {}, _defineProperty(_Object$assign, focusPropName, onFocus), _defineProperty(_Object$assign, blurPropName, onBlur), _Object$assign));
          var hasError, feedbackNode;

          switch (errorLevel) {
            case 0:
              hasError = $invalid && $dirty & $touched;
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

          if (feedback) {
            if (typeof feedback === 'boolean') {
              feedbackNode = React.createElement(FormControl.Feedback, null);
            } else {
              feedbackNode = React.createElement(FormControl.Feedback, null, feedback);
            }
          }

          return React.createElement(FormGroup, Object.assign({}, restProps, groupProps, {
            validationState: hasError ? 'error' : validationState
          }), label, React.createElement(Wrapper, wrapperCol, React.createElement(AddonWrapper, null, addons.pre, cloneElement(Children.only(children), childProps), addons.end), feedbackNode, hasError ? React.createElement(HelpBlock, null, $getFirstError()) : helper));
        }
      }));
    }
  }]);

  return _FormGroup;
}(Component);

_FormGroup.propTypes = {
  children: PropTypes.element.isRequired,
  label: PropTypes.any,
  helper: PropTypes.any,
  labelCol: PropTypes.object,
  wrapperCol: PropTypes.object,
  addons: PropTypes.object,
  feedback: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
  errorLevel: PropTypes.oneOf([0, 1, 2, 'off']) //$parser $formatter checked unchecked $validators validMessage等传递给 EasyField 组件的额外参数

};

var RadioGroup =
/*#__PURE__*/
function (_Component) {
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
          onBlur = _this$props.onBlur;

      var childOnChange = function childOnChange(ev) {
        onChange(ev.target.value, ev);
      };

      return React.createElement(Fragment, null, Children.map(children, function (child) {
        var childValue = child.props.value;
        return cloneElement(child, {
          checked: value === childValue,
          onChange: childOnChange,
          onFocus: onFocus,
          onBlur: onBlur,
          name: name
        });
      }));
    }
  }]);

  return RadioGroup;
}(Component);

RadioGroup.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string
};

export { CheckboxGroup, _FormGroup as FormGroup, RadioGroup, setErrorLevel };
//# sourceMappingURL=react-bootstrap-formutil.esm.development.js.map
