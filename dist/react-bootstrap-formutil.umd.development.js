(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('react-formutil'), require('react'), require('prop-types'), require('react-bootstrap')) :
  typeof define === 'function' && define.amd ? define(['exports', 'react-formutil', 'react', 'prop-types', 'react-bootstrap'], factory) :
  (global = global || self, factory(global.ReactBootstrapFormutil = {}, global.ReactFormutil, global.React, global.PropTypes, global.ReactBootstrap));
}(this, function (exports, reactFormutil, React, PropTypes, reactBootstrap) { 'use strict';

  var React__default = 'default' in React ? React['default'] : React;
  PropTypes = PropTypes && PropTypes.hasOwnProperty('default') ? PropTypes['default'] : PropTypes;

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

  function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
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

        return React__default.createElement(React.Fragment, null, React.Children.map(children, function (child) {
          var childValue = child.props.value;
          return React.cloneElement(child, {
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
  }(React.Component);

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
  var isUglify = reactBootstrap.FormControl.name !== 'FormControl';

  var _Checkbox = isUglify ? reactBootstrap.Checkbox : 'Checkbox';

  var _Radio = isUglify ? reactBootstrap.Radio : 'Radio';

  var _CheckboxGroup = isUglify ? CheckboxGroup : 'CheckboxGroup';

  var _ToggleButtonGroup = isUglify ? reactBootstrap.ToggleButtonGroup : 'Uncontrolled(ToggleButtonGroup)';

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

        var Wrapper = wrapperCol ? reactBootstrap.Col : React.Fragment;
        var groupProps = {
          controlId: controlId,
          bsSize: bsSize,
          bsClass: bsClass,
          className: className
        };

        if (label) {
          if (React.isValidElement(label)) {
            if (labelCol) {
              label = React__default.createElement(reactBootstrap.Col, labelCol, label);
            }
          } else {
            label = labelCol ? React__default.createElement(reactBootstrap.Col, Object.assign({}, labelCol, {
              componentClass: reactBootstrap.ControlLabel
            }), label) : React__default.createElement(reactBootstrap.ControlLabel, null, label);
          }
        }

        var AddonWrapper = addons ? reactBootstrap.InputGroup : React.Fragment;

        if (addons) {
          if (addons.pre && !React.isValidElement(addons.pre)) {
            addons.pre = React__default.createElement(reactBootstrap.InputGroup.Addon, null, addons.pre);
          }

          if (addons.end && !React.isValidElement(addons.end)) {
            addons.end = React__default.createElement(reactBootstrap.InputGroup.Addon, null, addons.end);
          }
        } else {
          addons = {};
        }

        if (helper && !React.isValidElement(helper)) {
          helper = React__default.createElement(reactBootstrap.HelpBlock, null, helper);
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

        return React__default.createElement(reactFormutil.EasyField, Object.assign({}, fieldProps, {
          passUtil: "$fieldutil",
          render: function render(_ref) {
            var _childProps, _Object$assign;

            var $fieldutil = _ref.$fieldutil,
                restProps = _objectWithoutProperties(_ref, ["$fieldutil"]);

            var $invalid = $fieldutil.$invalid,
                $dirty = $fieldutil.$dirty,
                $touched = $fieldutil.$touched,
                $getFirstError = $fieldutil.$getFirstError;
            var _props$valuePropName = props.valuePropName,
                valuePropName = _props$valuePropName === void 0 ? 'value' : _props$valuePropName,
                _props$changePropName = props.changePropName,
                changePropName = _props$changePropName === void 0 ? 'onChange' : _props$changePropName,
                _props$focusPropName = props.focusPropName,
                focusPropName = _props$focusPropName === void 0 ? 'onFocus' : _props$focusPropName,
                _props$blurPropName = props.blurPropName,
                blurPropName = _props$blurPropName === void 0 ? 'onBlur' : _props$blurPropName;
            var _onChange = restProps[changePropName];
            var onFocus = restProps[focusPropName];
            var onBlur = restProps[blurPropName];
            var value = restProps[valuePropName];
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
                feedbackNode = React__default.createElement(reactBootstrap.FormControl.Feedback, null);
              } else {
                feedbackNode = React__default.createElement(reactBootstrap.FormControl.Feedback, null, feedback);
              }
            }

            return React__default.createElement(reactBootstrap.FormGroup, Object.assign({}, groupProps, {
              validationState: hasError ? 'error' : validationState
            }), label, React__default.createElement(Wrapper, wrapperCol, React__default.createElement(AddonWrapper, null, addons.pre, React.cloneElement(children, childProps), addons.end), feedbackNode, hasError ? React__default.createElement(reactBootstrap.HelpBlock, null, $getFirstError()) : helper));
          }
        }));
      }
    }]);

    return _FormGroup;
  }(React.Component);

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

        return React__default.createElement(React.Fragment, null, React.Children.map(children, function (child) {
          var childValue = child.props.value;
          return React.cloneElement(child, {
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
  }(React.Component);

  RadioGroup.propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.string
  };

  Object.keys(reactFormutil).forEach(function (key) {
    Object.defineProperty(exports, key, {
      enumerable: true,
      get: function () {
        return reactFormutil[key];
      }
    });
  });
  exports.CheckboxGroup = CheckboxGroup;
  exports.FormGroup = _FormGroup;
  exports.RadioGroup = RadioGroup;
  exports.setErrorLevel = setErrorLevel;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=react-bootstrap-formutil.umd.development.js.map
