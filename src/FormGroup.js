import React, { Component, cloneElement, isValidElement, Children, Fragment, createContext } from 'react';
import PropTypes from 'prop-types';
import { EasyField } from 'react-formutil';
import {
    FormCheck,
    FormGroup,
    FormControl,
    FormLabel,
    FormText,
    FormSelect,
    InputGroup,
    Row,
    Col,
    FloatingLabel,
    ToggleButton,
    ToggleButtonGroup
} from 'react-bootstrap';
import reactIs from 'react-is';
import isEqual from 'react-fast-compare';
import CheckboxGroup from './CheckboxGroup';
import { insertRule } from './helper';

const { isValidElementType } = reactIs;
const { Consumer, Provider } = createContext({});

let errorLevelGlobal = 1;

/**
 * 0 dirty & invalid & touched
 * 1 dirty & invalid
 * 2 invalid
 */
export const setErrorLevel = function (level) {
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
    static propTypes = {
        children(props, ...args) {
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

    fields = {};
    registerField = (name, $fieldutil) => ($fieldutil ? (this.fields[name] = $fieldutil) : delete this.fields[name]);
    latestValidationProps = null;
    checkHasError = (errorLevel, $invalid, $dirty, $touched, $focused) => {
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

    fetchCurrentValidationProps = errorLevel => {
        const allFieldutils = Object.keys(this.fields).map(name => this.fields[name].$new());
        const errFieldutils = allFieldutils.filter($fieldutil => $fieldutil.$invalid);

        const $invalid = errFieldutils.length > 0;
        const $dirty = allFieldutils.some($fieldutil => $fieldutil.$dirty);
        const $touched = allFieldutils.some($fieldutil => $fieldutil.$touched);
        const $focused = allFieldutils.some($fieldutil => $fieldutil.$focused);
        const $errors = errFieldutils
            .map($fieldutil => {
                const { $invalid, $focused, $touched, $dirty, $getFirstError } = $fieldutil;
                const hasError = this.checkHasError(errorLevel, $invalid, $dirty, $touched, $focused);

                return hasError && $getFirstError();
            })
            .filter(Boolean);

        return this.getValidationProps(errorLevel, $invalid, $dirty, $touched, $focused, $errors);
    };

    getValidationProps = (errorLevel, $invalid, $dirty, $touched, $focused, $errors) => {
        const hasError = this.checkHasError(errorLevel, $invalid, $dirty, $touched, $focused);

        const groupProps = {
            className: [
                this.props.className,
                hasError && 'has-error',
                $invalid ? 'is-invalid' : 'is-valid',
                $dirty ? 'is-dirty' : 'is-pristine',
                $touched ? 'is-touched' : 'is-untouched',
                $focused ? 'is-focused' : 'is-unfocused'
            ]
                .filter(Boolean)
                .join(' ')
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
            error: hasError ? (
                <HelpBlock type="invalid">
                    {Array.isArray($errors) ? $errors.map((err, index) => <div key={index}>{err}</div>) : $errors}
                </HelpBlock>
            ) : null
        };
    };

    componentDidMount() {
        // eslint-disable-next-line
        this.registerAncestorField?.(this.props.name, this.$fieldutil);
    }

    componentWillUnmount() {
        // eslint-disable-next-line
        this.registerAncestorField?.(this.props.name, null);
    }

    render() {
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
            if (isValidElement(label)) {
                if (labelCol) {
                    label = cloneElement(label, {
                        column: true,
                        ...labelCol
                    });
                }
            } else {
                label = (
                    <FormLabel column={!!labelCol} {...labelCol}>
                        {label}
                    </FormLabel>
                );
            }
        }

        let AddonWrapper = addons ? InputGroup : Fragment;
        let addonWrapperProps = addons
            ? {
                  size: addons.size
              }
            : undefined;

        if (addons) {
            if (addons.pre) {
                addons.pre = isValidElement(addons.pre) ? addons.pre : <InputGroup.Text>{addons.pre}</InputGroup.Text>;
            }

            if (addons.end) {
                addons.end = isValidElement(addons.end) ? addons.end : <InputGroup.Text>{addons.end}</InputGroup.Text>;
            }
        } else {
            addons = {};
        }

        if (helper && !isValidElement(helper)) {
            helper = <FormText muted>{helper}</FormText>;
        }

        if (!props.name) {
            const { groupProps, error } = (this.latestValidationProps = this.fetchCurrentValidationProps(errorLevel));

            /**
             * 检查下最新的校验状态和当前是否一致，不一致的话需要强制刷新下
             */
            Promise.resolve().then(() => {
                if (!isEqual(this.latestValidationProps, this.fetchCurrentValidationProps(errorLevel))) {
                    this.forceUpdate();
                }
            });

            const fieldInstance = typeof childList === 'function' ? childList() : childList;

            return (
                <Provider value={this.registerField}>
                    <FormGroup {...fieldProps} {...groupProps} as={groupAsProps}>
                        {label}
                        <Wrapper {...wrapperCol}>
                            <AddonWrapper {...addonWrapperProps}>
                                {addons.pre}
                                {fieldInstance}
                                {addons.end}
                            </AddonWrapper>
                            {error || helper}
                        </Wrapper>
                        {extraNode}
                    </FormGroup>
                </Provider>
            );
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

        if (
            ((component === FormControl && children.props.as === 'select') || component === FormSelect) &&
            children.props.multiple
        ) {
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

            case CheckboxGroup:
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

            default:
                break;
        }

        return (
            <EasyField
                {...fieldProps}
                passUtil="$fieldutil"
                render={$handleProps => {
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
                    const { $invalid, $dirty, $touched, $focused, $getFirstError } = $fieldutil;

                    /** @type {any} */
                    let childProps;

                    switch (fieldProps.__TYPE__) {
                        case 'checked':
                        case 'checkbox':
                        case 'radio':
                            const { checked = true, unchecked = false } = props;

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
                                onCompositionStart: () => (this.isComposing = true),
                                [changePropName]:
                                    component === 'multipleSelect'
                                        ? ev => {
                                              onChange(
                                                  [].slice
                                                      .call(ev.target.options)
                                                      .filter(option => option.selected)
                                                      .map(option => option.value),
                                                  ev
                                              );
                                          }
                                        : (ev, ...rest) => {
                                              if (this.isComposing) {
                                                  this.compositionValue = ev.target[valuePropName];
                                                  this.forceUpdate();
                                              } else {
                                                  onChange(ev, ...rest);
                                              }
                                          },
                                [valuePropName]: 'compositionValue' in this ? this.compositionValue : value,
                                [blurPropName]: (...args) => {
                                    if (this.isComposing) {
                                        this.isComposing = false;
                                        delete this.compositionValue;
                                        onChange(...args);
                                    }

                                    return onBlur(...args);
                                },
                                name: fieldProps.name
                            };

                            break;
                    }

                    const { groupProps, validationProps, error } = this.getValidationProps(
                        errorLevel,
                        $invalid,
                        $dirty,
                        $touched,
                        $focused,
                        $getFirstError()
                    );

                    childProps = Object.assign(
                        {
                            [focusPropName]: onFocus,
                            [blurPropName]: onBlur
                        },
                        childProps,
                        validationProps
                    );

                    const fieldInstance =
                        typeof children === 'function' ? children(childProps) : cloneElement(children, childProps);

                    return (
                        <Consumer>
                            {registerField => {
                                if (noStyle) {
                                    this.$fieldutil = $fieldutil;
                                    this.registerAncestorField = registerField;

                                    return fieldInstance;
                                }

                                return (
                                    <FormGroup {...restProps} {...groupProps} as={groupAsProps}>
                                        {!floatingLabel && label}
                                        <Wrapper {...wrapperCol}>
                                            <AddonWrapper {...addonWrapperProps}>
                                                {addons.pre}
                                                {floatingLabel && label ? (
                                                    <FloatingLabel label={label.props.children}>
                                                        {fieldInstance}
                                                    </FloatingLabel>
                                                ) : (
                                                    fieldInstance
                                                )}
                                                {addons.end}
                                            </AddonWrapper>
                                            {error || helper}
                                        </Wrapper>
                                        {extraNode}
                                    </FormGroup>
                                );
                            }}
                        </Consumer>
                    );
                }}
            />
        );
    }
}

export default _FormGroup;

insertRule('.valid-feedback:empty,.invalid-feedback:empty', 'display: none !important');
insertRule('.has-error .invalid-feedback', 'display: block');
