// Type definitions for react-bootstrap-formutil@>0.3.0
// Project: react-bootstrap-formutil
// Definitions by: qiqiboy <https://github.com/qiqiboy>

import { FormGroup as _FormGroup } from '@types/react-bootstrap';
import React from 'react';
import ReactFormutil from 'react-formutil';

export { Field, withField, Form, withForm, EasyField, connect } from 'react-formutil';

const { FormGroupProps } = _FormGroup;

interface FormGroupComponentProps extends ReactFormutil.EasyFieldComponentProps, FormGroupProps {
    wrapperCol?: object;
    labelCol?: object;
    label?: React.ReactNode;
    helper?: React.ReactNode;
    children: React.ReactElement<any>;

    [otherName: string]: any;
}

export class FormGroup extends React.Component<FormGroupComponentProps, any> {}

interface CheckboxGroupProps {
    name?: string;
    value?: any;
    onChange?: (ev: React.SyntheticEvent) => any;
    onFocus?: (ev: React.SyntheticEvent) => any;
    onBlur?: (ev: React.SyntheticEvent) => any;
}

export class CheckboxGroup extends React.Component<CheckboxGroupProps, any> {}

export class RadioGroup extends React.Component<CheckboxGroupProps, any> {}

