import React, { Component, cloneElement, isValidElement, Fragment } from 'react';
import PropTypes from 'prop-types';
import { EasyField } from 'react-formutil';
import { FormGroup, FormControl, ControlLabel, HelpBlock, Checkbox, Radio, Col } from 'react-bootstrap';
import CheckboxGroup from './CheckboxGroup';

const isUglify = FormControl.name !== 'FormControl';

const _Checkbox = isUglify ? Checkbox : 'Checkbox';
const _Radio = isUglify ? Radio : 'Radio';
const _CheckboxGroup = isUglify ? CheckboxGroup : 'CheckboxGroup';

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
        wrapperCol: PropTypes.object
        //$parser $formatter checked unchecked $validators validMessage等传递给 EasyField 组件的额外参数
    };

    render() {
        const props = this.props;
        let {
            children,
            label,
            helper,
            labelCol,
            wrapperCol,
            controlId,
            validationState,
            bsSize,
            bsClass,
            ...fieldProps
        } = props;

        const Wrapper = wrapperCol ? Col : Fragment;
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
                fieldProps.__TYPE__ = 'array';
                break;

            default:
                break;
        }

        return (
            <EasyField
                {...fieldProps}
                passUtil="$fieldutil"
                render={({ $fieldutil, ...restProps }) => {
                    const { $invalid, $dirty, $error } = $fieldutil;
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
                                [valuePropName]: value
                            };
                            break;
                    }

                    Object.assign(childProps, {
                        [focusPropName]: onFocus,
                        [blurPropName]: onBlur
                    });

                    return (
                        <FormGroup {...groupProps} validationState={$invalid && $dirty ? 'error' : validationState}>
                            {label}
                            <Wrapper {...wrapperCol}>
                                {cloneElement(children, childProps)}
                                {$invalid && $dirty ? <HelpBlock>{Object.values($error)[0]}</HelpBlock> : helper}
                            </Wrapper>
                        </FormGroup>
                    );
                }}
            />
        );
    }
}

export default _FormGroup;
