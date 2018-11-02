// Type definitions for react-bootstrap-formutil@>0.0.3
// Project: react-bootstrap-formutil
// Definitions by: qiqiboy <https://github.com/qiqiboy>

import { FormGroupProps, ColProps } from 'react-bootstrap';
import React from 'react';
import { EasyFieldComponentProps } from 'react-formutil';

export * from 'react-formutil';

export interface FormGroupComponentProps<T = any, P = {}, Fields = {}, WeakFields = Fields>
    extends EasyFieldComponentProps<T, P, Fields, WeakFields> {
    wrapperCol?: ColProps;
    labelCol?: ColProps;
    label?: React.ReactNode;
    helper?: React.ReactNode;
    children: React.ReactElement<any>;

    [otherName: string]: any;
}

export class FormGroup<T = any, P = {}, Fields = {}, WeakFields = Fields> extends React.Component<
    FormGroupComponentProps<T, P, Fields, WeakFields>
> {}

interface CheckboxGroupProps<T> {
    onChange(value: T[]): void;
    onFocus: React.FocusEventHandler;
    onBlur: React.FocusEventHandler;
    value: T[]
}

export class CheckboxGroup<T = any> extends React.Component<CheckboxGroupProps<T>> {}

export class RadioGroup<T = any> extends React.Component<CheckboxGroupProps<T>> {}
