import React, { Component, cloneElement, isValidElement, Children, Fragment } from 'react';
import PropTypes from 'prop-types';
import { EasyField } from 'react-formutil';
import {
    FormGroup,
    FormControl,
    ControlLabel,
    InputGroup,
    HelpBlock,
    Checkbox,
    Radio,
    Col,
    ToggleButtonGroup
} from 'react-bootstrap';
import CheckboxGroup from './CheckboxGroup';

let errorLevelGlobal = 1;

/**
 * 0 dirty & invalid & touched
 * 1 dirty & invalid
 * 2 invalid
 */
export const setErrorLevel = function(level) {
    errorLevelGlobal = level;
};

const isUglify = FormControl.name !== 'FormControl';

const _Checkbox = isUglify ? Checkbox : 'Checkbox';
const _Radio = isUglify ? Radio : 'Radio';
const _CheckboxGroup = isUglify ? CheckboxGroup : 'CheckboxGroup';
const _ToggleButtonGroup = isUglify ? ToggleButtonGroup : 'Uncontrolled(ToggleButtonGroup)';

function getChildComponent(children) {
    if (children) {
        if (typeof children.type === 'function') {
            const func = children.type;

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

class _FormGroup extends Component {
    static propTypes = {
        children: PropTypes.element.isRequired,
        label: PropTypes.any,
        helper: PropTypes.any,
        labelCol: PropTypes.object,
        wrapperCol: PropTypes.object,
        addons: PropTypes.object,
        feedback: PropTypes.oneOfType([PropTypes.bool, PropTypes.element]),
        errorLevel: PropTypes.oneOf([0, 1, 2, 'off'])

        //$parser $formatter checked unchecked $validators validMessage等传递给 EasyField 组件的额外参数
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
            controlId,
            validationState,
            bsSize,
            bsClass,
            className,
            feedback,
            errorLevel = errorLevelGlobal,
            ...fieldProps
        } = props;
        const children = Children.only(childList);

        let Wrapper = wrapperCol ? Col : Fragment;
        const groupProps = {
            controlId,
            bsSize,
            bsClass,
            className
        };

        if (label) {
            if (isValidElement(label)) {
                if (labelCol) {
                    label = <Col {...labelCol}>{label}</Col>;
                }
            } else {
                label = labelCol ? (
                    <Col {...labelCol} componentClass={ControlLabel}>
                        {label}
                    </Col>
                ) : (
                    <ControlLabel>{label}</ControlLabel>
                );
            }
        }

        let AddonWrapper = addons ? InputGroup : Fragment;
        if (addons) {
            if (addons.pre && !isValidElement(addons.pre)) {
                addons.pre = <InputGroup.Addon>{addons.pre}</InputGroup.Addon>;
            }

            if (addons.end && !isValidElement(addons.end)) {
                addons.end = <InputGroup.Addon>{addons.end}</InputGroup.Addon>;
            }
        } else {
            addons = {};
        }

        if (helper && !isValidElement(helper)) {
            helper = <HelpBlock>{helper}</HelpBlock>;
        }

        let component = getChildComponent(children);

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
                    const { $invalid, $dirty, $touched, $getFirstError } = $fieldutil;

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
                                [changePropName]: (ev, ...rest) => {
                                    if (this.isComposition) {
                                        this.compositionValue = ev.target[valuePropName];
                                        this.forceUpdate();
                                    } else {
                                        onChange(ev, ...rest)
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

                    let hasError, feedbackNode;

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

                    if (feedback) {
                        if (typeof feedback === 'boolean') {
                            feedbackNode = <FormControl.Feedback />;
                        } else {
                            feedbackNode = <FormControl.Feedback>{feedback}</FormControl.Feedback>;
                        }
                    }

                    return (
                        <FormGroup
                            {...restProps}
                            {...groupProps}
                            validationState={hasError ? 'error' : validationState}>
                            {label}
                            <Wrapper {...wrapperCol}>
                                <AddonWrapper>
                                    {addons.pre}
                                    {cloneElement(children, childProps)}
                                    {addons.end}
                                </AddonWrapper>
                                {feedbackNode}
                                {hasError ? <HelpBlock>{$getFirstError()}</HelpBlock> : helper}
                            </Wrapper>
                        </FormGroup>
                    );
                }}
            />
        );
    }
}

export default _FormGroup;
