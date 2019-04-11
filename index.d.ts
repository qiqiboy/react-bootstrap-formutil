// Type definitions for react-bootstrap-formutil@>0.0.3
// Project: react-bootstrap-formutil
// Definitions by: qiqiboy <https://github.com/qiqiboy>

import React from 'react';
import { ColProps, Sizes } from 'react-bootstrap';
import { BaseEasyFieldComponentProps, FieldValidatorProps, OtherKeys } from 'react-formutil';

export * from 'react-formutil';

export type ErrorLevel = 0 | 1 | 2 | 'off';

export interface FormGroupComponentProps<T = any, P = {}, Fields = {}, WeakFields = Fields>
    extends BaseEasyFieldComponentProps<T, P, Fields, WeakFields> {
    wrapperCol?: ColProps;
    labelCol?: ColProps;
    label?: React.ReactNode;
    helper?: React.ReactNode;
    addons?: {
        pre?: React.ReactNode;
        end?: React.ReactNode;
    };
    feedback?: React.ReactElement<any> | boolean;
    errorLevel?: ErrorLevel;
    children: React.ReactElement<any>;

    bsClass?: string;
    bsSize?: Sizes;
    controlId?: string;
    validationState?: 'success' | 'warning' | 'error' | null;
}

export class FormGroup<T = any, P = {}, Fields = {}, WeakFields = Fields> extends React.Component<
    FormGroupComponentProps<T, P, Fields, WeakFields> & FieldValidatorProps<P> & OtherKeys
> {}

interface CheckboxGroupProps<T> {
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
    value?: T[];
    onChange?(value: T[]): void;
}

export class CheckboxGroup<T = any> extends React.Component<CheckboxGroupProps<T>> {}


interface RadioGroupProps<T> {
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
    value?: T;
    onChange?(value: T): void;
}

export class RadioGroup<T = any> extends React.Component<RadioGroupProps<T>> {}

export function setErrorLevel(errorLevel: ErrorLevel): void;
