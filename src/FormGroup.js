import React, { Component, cloneElement, isValidElement, Children, Fragment } from 'react';
import { isValidElementType } from 'react-is';
import PropTypes from 'prop-types';
import { EasyField } from 'react-formutil';
import {
    Form,
    FormCheck,
    FormGroup,
    FormControl,
    FormLabel,
    FormText,
    InputGroup,
    Row,
    Col,
    ToggleButton,
    ToggleButtonGroup
} from 'react-bootstrap';
import CheckboxGroup from './CheckboxGroup';
import { insertRule } from './helper';

let errorLevelGlobal = 1;

/**
 * 0 dirty & invalid & touched
 * 1 dirty & invalid
 * 2 invalid
 */
export const setErrorLevel = function(level) {
    errorLevelGlobal = level;
};

const isUglify = Form.displayName !== 'Form';

const _FormControl = isUglify ? FormControl : 'FormControl';
const _FormCheck = isUglify ? FormCheck : 'FormCheck';
const _CheckboxGroup = isUglify ? CheckboxGroup : 'CheckboxGroup';
const _ToggleButton = isUglify ? ToggleButton : 'ToggleButton';
const _ToggleButtonGroup = isUglify ? ToggleButtonGroup : 'ToggleButtonGroup';

const HelpBlock = FormControl.Feedback;

function getChildComponent(children) {
    if (children) {
        const childrenType = children.type;

        if (typeof childrenType !== 'string' && isValidElementType(childrenType)) {
            if (childrenType.formutilType) {
                return childrenType.formutilType;
            }

            if (isUglify) {
                return childrenType;
            }

            return childrenType.displayName || childrenType.name;
        }

        return children.props.type || children.type;
    }
}

class _FormGroup extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
        label: PropTypes.any,
        helper: PropTypes.any,
        labelCol: PropTypes.object,
        wrapperCol: PropTypes.object,
        addons: PropTypes.object,
        extra: PropTypes.node,
        feedback: PropTypes.bool,
        errorLevel: PropTypes.oneOf([0, 1, 2, 'off'])

        // $parser $formatter checked unchecked $validators validMessage等传递给 EasyField 组件的额外参数
    };

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
            feedback,
            extra: extraNode,
            errorLevel = errorLevelGlobal,
            ...fieldProps
        } = props;
        const children = Children.only(childList);

        let Wrapper = wrapperCol ? Col : Fragment;
        const groupProps = {
            className
        };

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

        if (labelCol || wrapperCol) {
            groupProps.as = Row;
        }

        let AddonWrapper = addons ? InputGroup : Fragment;
        let addonWrapperProps = addons
            ? {
                  size: addons.size
              }
            : undefined;

        if (addons) {
            if (addons.pre) {
                addons.pre = (
                    <InputGroup.Prepend>
                        {isValidElement(addons.pre) ? addons.pre : <InputGroup.Text>{addons.pre}</InputGroup.Text>}
                    </InputGroup.Prepend>
                );
            }

            if (addons.end) {
                addons.end = (
                    <InputGroup.Append>
                        {isValidElement(addons.end) ? addons.end : <InputGroup.Text>{addons.end}</InputGroup.Text>}
                    </InputGroup.Append>
                );
            }
        } else {
            addons = {};
        }

        if (helper && !isValidElement(helper)) {
            helper = <FormText className="text-muted">{helper}</FormText>;
        }

        let component = getChildComponent(children);

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
                                    this.isComposition = false;
                                    delete this.compositionValue;
                                    onChange(ev);
                                },
                                onCompositionStart: () => (this.isComposition = true),
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
                                              if (this.isComposition) {
                                                  this.compositionValue = ev.target[valuePropName];
                                                  this.forceUpdate();
                                              } else {
                                                  onChange(ev, ...rest);
                                              }
                                          },
                                [valuePropName]: 'compositionValue' in this ? this.compositionValue : value,
                                name: fieldProps.name
                            };

                            break;
                    }

                    Object.assign(childProps, {
                        [focusPropName]: onFocus,
                        [blurPropName]: onBlur
                    });

                    let hasError;

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

                    groupProps.className = [
                        groupProps.className,
                        hasError && 'has-error',
                        $invalid ? 'is-invalid' : 'is-valid',
                        $dirty ? 'is-dirty' : 'is-pristine',
                        $touched ? 'is-touched' : 'is-untouched',
                        $focused ? 'is-focused' : 'is-unfocused'
                    ]
                        .filter(Boolean)
                        .join(' ');

                    return (
                        <FormGroup {...restProps} {...groupProps}>
                            {label}
                            <Wrapper {...wrapperCol}>
                                <AddonWrapper {...addonWrapperProps}>
                                    {addons.pre}
                                    {cloneElement(children, childProps)}
                                    {addons.end}
                                </AddonWrapper>
                                {hasError ? (
                                    <HelpBlock type="invalid">
                                        <FormText>{$getFirstError()}</FormText>
                                    </HelpBlock>
                                ) : (
                                    helper
                                )}
                            </Wrapper>
                            {extraNode}
                        </FormGroup>
                    );
                }}
            />
        );
    }
}

export default _FormGroup;

insertRule('.valid-feedback:empty,.invalid-feedback:empty', 'display: none !important');
insertRule('.has-error .invalid-feedback', 'display: block');
