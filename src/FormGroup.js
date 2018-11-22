import React, { Component, cloneElement, isValidElement, Fragment } from 'react';
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
    if (children && typeof children.type === 'function') {
        const func = children.type;

        if (isUglify) {
            return func;
        }

        return func.displayName || func.name;
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
        errorLevel: PropTypes.number

        //$parser $formatter checked unchecked $validators validMessage等传递给 EasyField 组件的额外参数
    };

    render() {
        const props = this.props;
        let {
            children,
            addons,
            label,
            helper,
            labelCol,
            wrapperCol,
            controlId,
            validationState,
            bsSize,
            bsClass,
            errorLevel = errorLevelGlobal,
            ...fieldProps
        } = props;

        let Wrapper = wrapperCol ? Col : Fragment;
        const groupProps = {
            controlId,
            bsSize,
            bsClass
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
                fieldProps.__TYPE__ = 'checked';
                break;

            case _CheckboxGroup:
            case _ToggleButtonGroup:
                if (children.props.type !== 'radio') {
                    fieldProps.__TYPE__ = 'array';
                }
                break;

            default:
                break;
        }

        return (
            <EasyField
                {...fieldProps}
                passUtil="$fieldutil"
                render={({ $fieldutil, ...restProps }) => {
                    const { $invalid, $dirty, $touched, $getFirstError } = $fieldutil;
                    const {
                        valuePropName = 'value',
                        changePropName = 'onChange',
                        focusPropName = 'onFocus',
                        blurPropName = 'onBlur'
                    } = props;
                    const onChange = restProps[changePropName];
                    const onFocus = restProps[focusPropName];
                    const onBlur = restProps[blurPropName];
                    const value = restProps[valuePropName];

                    let childProps;
                    switch (component) {
                        case _Checkbox:
                        case _Radio:
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
                                [changePropName]: onChange,
                                [valuePropName]: value,
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
                            hasError = $invalid && $dirty & $touched;
                            break;
                        case 1:
                            hasError = $invalid && $dirty;
                            break;
                        default:
                            hasError = $invalid;
                            break;
                    }

                    return (
                        <FormGroup {...groupProps} validationState={hasError ? 'error' : validationState}>
                            {label}
                            <Wrapper {...wrapperCol}>
                                <AddonWrapper>
                                    {addons.pre}
                                    {cloneElement(children, childProps)}
                                    {addons.end}
                                </AddonWrapper>
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
