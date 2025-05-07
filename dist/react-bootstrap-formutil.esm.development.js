import { EasyField } from 'react-formutil';
export * from 'react-formutil';
import React, { Component, Children, cloneElement, isValidElement, createContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { FormControl, FormLabel, InputGroup, FormGroup, FormSelect, ToggleButtonGroup, ToggleButton, FormCheck, FloatingLabel, Col, Row, FormText } from 'react-bootstrap';
import reactIs from 'react-is';
import isEqual from 'react-fast-compare';

class CheckboxGroup extends Component {
  render() {
    const {
      children,
      name,
      onChange,
      value,
      onFocus,
      onBlur,
      isValid,
      isInvalid
    } = this.props;
    const childOnChange = ev => {
      const {
        checked,
        value: childValue
      } = ev.target;
      const newValue = value || [];
      onChange(checked ? newValue.concat(childValue) : newValue.filter(v => v !== childValue));
    };
    return Children.map(children, child => {
      const childValue = child.props.value;
      return /*#__PURE__*/cloneElement(child, {
        isValid,
        isInvalid,
        checked: !!value && value.indexOf(childValue) > -1,
        onChange: childOnChange,
        onFocus,
        onBlur,
        name
      });
    });
  }
}
CheckboxGroup.formutilType = 'array';
CheckboxGroup.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.array
};
var CheckboxGroup$1 = CheckboxGroup;

let styleSheet;
try {
  const style = document.createElement('style');
  style.type = 'text/css';
  document.getElementsByTagName('head')[0].appendChild(style);
  styleSheet = style.sheet || style.styleSheet;
} catch (err) {}
function insertRule(selector, content) {
  if (styleSheet) {
    if (styleSheet.insertRule) {
      styleSheet.insertRule(`${selector} { ${content} }`, 0);
    } else if (styleSheet.addRule) {
      styleSheet.addRule(selector, content, 0);
    }
  }
}

const {
  isValidElementType
} = reactIs;
const {
  Consumer,
  Provider
} = /*#__PURE__*/createContext({});
let errorLevelGlobal = 1;

/**
 * 0 dirty & invalid & touched
 * 1 dirty & invalid
 * 2 invalid
 */
const setErrorLevel = function (level) {
  errorLevelGlobal = level;
};
const HelpBlock = FormControl.Feedback;
function getChildComponent(children) {
  if (children) {
    const childrenType = children.type;
    if (isValidElementType(childrenType)) {
      // SomeComponent.formutiType = xx
      if (childrenType.formutilType) {
        return childrenType.formutilType;
      }

      // <input type="checkbox" />
      if (typeof childrenType === 'string' && children.props.type) {
        return children.props.type;
      }
    }
    return childrenType || children;
  }
}
class _FormGroup extends Component {
  constructor() {
    super(...arguments);
    this.fields = {};
    this.registerField = (name, $fieldutil) => $fieldutil ? this.fields[name] = $fieldutil : delete this.fields[name];
    this.latestValidationProps = null;
    this.checkHasError = (errorLevel, $invalid, $dirty, $touched, $focused) => {
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
    this.fetchCurrentValidationProps = errorLevel => {
      const allFieldutils = Object.keys(this.fields).map(name => this.fields[name].$new());
      const errFieldutils = allFieldutils.filter($fieldutil => $fieldutil.$invalid);
      const $invalid = errFieldutils.length > 0;
      const $dirty = allFieldutils.some($fieldutil => $fieldutil.$dirty);
      const $touched = allFieldutils.some($fieldutil => $fieldutil.$touched);
      const $focused = allFieldutils.some($fieldutil => $fieldutil.$focused);
      const $errors = errFieldutils.map($fieldutil => {
        const {
          $invalid,
          $focused,
          $touched,
          $dirty,
          $getFirstError
        } = $fieldutil;
        const hasError = this.checkHasError(errorLevel, $invalid, $dirty, $touched, $focused);
        return hasError && $getFirstError();
      }).filter(Boolean);
      return this.getValidationProps(errorLevel, $invalid, $dirty, $touched, $focused, $errors);
    };
    this.getValidationProps = (errorLevel, $invalid, $dirty, $touched, $focused, $errors) => {
      const hasError = this.checkHasError(errorLevel, $invalid, $dirty, $touched, $focused);
      const groupProps = {
        className: [this.props.className, hasError && 'has-error', $invalid ? 'is-invalid' : 'is-valid', $dirty ? 'is-dirty' : 'is-pristine', $touched ? 'is-touched' : 'is-untouched', $focused ? 'is-focused' : 'is-unfocused'].filter(Boolean).join(' ')
      };
      const validationProps = {};
      if (hasError) {
        validationProps.isInvalid = true;
      }
      if (this.props.feedback && !$invalid) {
        validationProps.isValid = true;
      }
      return {
        groupProps,
        validationProps,
        error: hasError ? /*#__PURE__*/React.createElement(HelpBlock, {
          type: "invalid"
        }, Array.isArray($errors) ? $errors.map((err, index) => /*#__PURE__*/React.createElement("div", {
          key: index
        }, err)) : $errors) : null
      };
    };
  }
  componentDidMount() {
    var _this$registerAncesto;
    // eslint-disable-next-line
    (_this$registerAncesto = this.registerAncestorField) === null || _this$registerAncesto === void 0 ? void 0 : _this$registerAncesto.call(this, this.props.name, this.$fieldutil);
  }
  componentWillUnmount() {
    var _this$registerAncesto2;
    // eslint-disable-next-line
    (_this$registerAncesto2 = this.registerAncestorField) === null || _this$registerAncesto2 === void 0 ? void 0 : _this$registerAncesto2.call(this, this.props.name, null);
  }
  render() {
    var _this = this;
    const props = this.props;
    let {
      children: childList,
      addons,
      label,
      helper,
      labelCol,
      wrapperCol,
      validationState,
      className,
      as,
      feedback,
      floatingLabel,
      extra: extraNode,
      noStyle,
      errorLevel = errorLevelGlobal,
      ...fieldProps
    } = props;
    let Wrapper = wrapperCol ? Col : Fragment;
    const groupAsProps = !as && (labelCol || wrapperCol) ? Row : as;
    if (label) {
      if (/*#__PURE__*/isValidElement(label)) {
        if (labelCol) {
          label = /*#__PURE__*/cloneElement(label, {
            column: true,
            ...labelCol
          });
        }
      } else {
        label = /*#__PURE__*/React.createElement(FormLabel, Object.assign({
          column: !!labelCol
        }, labelCol), label);
      }
    }
    let AddonWrapper = addons ? InputGroup : Fragment;
    let addonWrapperProps = addons ? {
      size: addons.size
    } : undefined;
    if (addons) {
      if (addons.pre) {
        addons.pre = /*#__PURE__*/isValidElement(addons.pre) ? addons.pre : /*#__PURE__*/React.createElement(InputGroup.Text, null, addons.pre);
      }
      if (addons.end) {
        addons.end = /*#__PURE__*/isValidElement(addons.end) ? addons.end : /*#__PURE__*/React.createElement(InputGroup.Text, null, addons.end);
      }
    } else {
      addons = {};
    }
    if (helper && ! /*#__PURE__*/isValidElement(helper)) {
      helper = /*#__PURE__*/React.createElement(FormText, {
        muted: true
      }, helper);
    }
    if (!props.name) {
      const {
        groupProps,
        error
      } = this.latestValidationProps = this.fetchCurrentValidationProps(errorLevel);

      /**
       * 检查下最新的校验状态和当前是否一致，不一致的话需要强制刷新下
       */
      Promise.resolve().then(() => {
        if (!isEqual(this.latestValidationProps, this.fetchCurrentValidationProps(errorLevel))) {
          this.forceUpdate();
        }
      });
      const fieldInstance = typeof childList === 'function' ? childList() : childList;
      return /*#__PURE__*/React.createElement(Provider, {
        value: this.registerField
      }, /*#__PURE__*/React.createElement(FormGroup, Object.assign({}, fieldProps, groupProps, {
        as: groupAsProps
      }), label, /*#__PURE__*/React.createElement(Wrapper, wrapperCol, /*#__PURE__*/React.createElement(AddonWrapper, addonWrapperProps, addons.pre, fieldInstance, addons.end), error || helper), extraNode));
    }

    // If $memo is true, pass the children to Field for SCU diffing.
    if (fieldProps.$memo === true) {
      fieldProps.__DIFF__ = {
        childList,
        compositionValue: this.compositionValue
      };
    } else if (Array.isArray(fieldProps.$memo)) {
      fieldProps.$memo = fieldProps.$memo.concat(this.compositionValue);
    }
    const children = typeof childList === 'function' ? childList : Children.only(childList);
    let component = getChildComponent(children);
    if ((component === FormControl && children.props.as === 'select' || component === FormSelect) && children.props.multiple) {
      component = 'multipleSelect';
    }
    switch (component) {
      case FormCheck:
      case ToggleButton:
      case 'checkbox':
      case 'radio':
        fieldProps.__TYPE__ = 'checked';
        break;
      case 'multipleSelect':
        fieldProps.__TYPE__ = 'array';
        break;
      case CheckboxGroup$1:
      case ToggleButtonGroup:
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
    return /*#__PURE__*/React.createElement(EasyField, Object.assign({}, fieldProps, {
      passUtil: "$fieldutil",
      render: $handleProps => {
        const {
          valuePropName = 'value',
          changePropName = 'onChange',
          focusPropName = 'onFocus',
          blurPropName = 'onBlur'
        } = props;
        const {
          $fieldutil,
          [changePropName]: onChange,
          [focusPropName]: onFocus,
          [blurPropName]: onBlur,
          [valuePropName]: value,
          ...restProps
        } = $handleProps;
        const {
          $invalid,
          $dirty,
          $touched,
          $focused,
          $getFirstError
        } = $fieldutil;

        /** @type {any} */
        let childProps;
        switch (fieldProps.__TYPE__) {
          case 'checked':
          case 'checkbox':
          case 'radio':
            const {
              checked = true,
              unchecked = false
            } = props;
            childProps = {
              checked: value === checked,
              onChange: ev => {
                const newValue = ev && ev.target ? ev.target.checked : ev;
                onChange(newValue ? checked : unchecked, ev);
              }
            };
            break;
          default:
            childProps = {
              onCompositionEnd: ev => {
                this.isComposing = false;
                delete this.compositionValue;
                onChange(ev);
              },
              onCompositionStart: () => this.isComposing = true,
              [changePropName]: component === 'multipleSelect' ? ev => {
                onChange([].slice.call(ev.target.options).filter(option => option.selected).map(option => option.value), ev);
              } : function (ev) {
                if (_this.isComposing) {
                  _this.compositionValue = ev.target[valuePropName];
                  _this.forceUpdate();
                } else {
                  for (var _len = arguments.length, rest = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
                    rest[_key - 1] = arguments[_key];
                  }
                  onChange(ev, ...rest);
                }
              },
              [valuePropName]: 'compositionValue' in this ? this.compositionValue : value,
              [blurPropName]: function () {
                if (_this.isComposing) {
                  _this.isComposing = false;
                  delete _this.compositionValue;
                  onChange(...arguments);
                }
                return onBlur(...arguments);
              },
              name: fieldProps.name
            };
            break;
        }
        const {
          groupProps,
          validationProps,
          error
        } = this.getValidationProps(errorLevel, $invalid, $dirty, $touched, $focused, $getFirstError());
        childProps = Object.assign({
          [focusPropName]: onFocus,
          [blurPropName]: onBlur
        }, childProps, validationProps);
        const fieldInstance = typeof children === 'function' ? children(childProps) : /*#__PURE__*/cloneElement(children, childProps);
        return /*#__PURE__*/React.createElement(Consumer, null, registerField => {
          if (noStyle) {
            this.$fieldutil = $fieldutil;
            this.registerAncestorField = registerField;
            return fieldInstance;
          }
          return /*#__PURE__*/React.createElement(FormGroup, Object.assign({}, restProps, groupProps, {
            as: groupAsProps
          }), !floatingLabel && label, /*#__PURE__*/React.createElement(Wrapper, wrapperCol, /*#__PURE__*/React.createElement(AddonWrapper, addonWrapperProps, addons.pre, floatingLabel && label ? /*#__PURE__*/React.createElement(FloatingLabel, {
            label: label.props.children
          }, fieldInstance) : fieldInstance, addons.end), error || helper), extraNode);
        });
      }
    }));
  }
}
_FormGroup.propTypes = {
  children(props) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
    if ('name' in props) {
      return PropTypes.oneOfType([PropTypes.element, PropTypes.func]).isRequired(props, ...args);
    }
    return PropTypes.node.isRequired(props, ...args);
  },
  label: PropTypes.any,
  helper: PropTypes.any,
  labelCol: PropTypes.object,
  floatingLabel: PropTypes.bool,
  wrapperCol: PropTypes.object,
  addons: PropTypes.object,
  extra: PropTypes.node,
  feedback: PropTypes.bool,
  noStyle: PropTypes.bool,
  errorLevel: PropTypes.oneOf([0, 1, 2, 'off'])

  // $parser $formatter checked unchecked $validators validMessage等传递给 EasyField 组件的额外参数
};
var _FormGroup$1 = _FormGroup;
insertRule('.valid-feedback:empty,.invalid-feedback:empty', 'display: none !important');
insertRule('.has-error .invalid-feedback', 'display: block');

class RadioGroup extends Component {
  render() {
    const {
      children,
      name,
      onChange,
      value,
      onFocus,
      onBlur,
      isValid,
      isInvalid
    } = this.props;
    const childOnChange = ev => {
      onChange(ev.target.value, ev);
    };
    return Children.map(children, child => {
      const childValue = child.props.value;
      return /*#__PURE__*/cloneElement(child, {
        isValid,
        isInvalid,
        checked: value === childValue,
        onChange: childOnChange,
        onFocus,
        onBlur,
        name
      });
    });
  }
}
RadioGroup.propTypes = {
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  value: PropTypes.string
};
var RadioGroup$1 = RadioGroup;

export { CheckboxGroup$1 as CheckboxGroup, _FormGroup$1 as FormGroup, RadioGroup$1 as RadioGroup, CheckboxGroup$1 as SwitchGroup, setErrorLevel };
