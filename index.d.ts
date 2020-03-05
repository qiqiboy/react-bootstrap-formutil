// Type definitions for react-bootstrap-formutil@>0.0.3
// Project: react-bootstrap-formutil
// Definitions by: qiqiboy <https://github.com/qiqiboy>

import React from 'react';
import { ColProps } from 'react-bootstrap';
import { BaseEasyFieldComponentProps, $FieldHandler, OtherKeys } from 'react-formutil';

export * from 'react-formutil';

export type ErrorLevel = 0 | 1 | 2 | 'off';

export interface FormGroupComponentProps<T = any, P = {}, Fields = {}, WeakFields = Fields>
    extends BaseEasyFieldComponentProps<T, P, Fields, WeakFields>,
        ColProps {
    wrapperCol?: ColProps;
    labelCol?: ColProps;
    label?: React.ReactNode;
    helper?: React.ReactNode;
    extra?: React.ReactNode;
    addons?: {
        size?: 'sm' | 'lg';
        pre?: React.ReactNode;
        end?: React.ReactNode;
    };
    feedback?: boolean;
    noStyle?: boolean;
    errorLevel?: ErrorLevel;
    children: React.ReactElement<any> | (($fieldHandler: Partial<$FieldHandler<T>> & OtherKeys) => React.ReactNode);

    controlId?: string;
    className?: string;
    as?: React.ElementType;
}

export class FormGroup<T = any, P = {}, Fields = {}, WeakFields = Fields> extends React.Component<
    FormGroupComponentProps<T, P, Fields, WeakFields> & OtherKeys
> {}

interface CheckboxGroupProps<T> {
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
    value?: T[];
    onChange?(value: T[]): void;
}

export class CheckboxGroup<T = any> extends React.Component<CheckboxGroupProps<T>> {}

interface SwitchGroupProps<T> {
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
    value?: T[];
    onChange?(value: T[]): void;
}

export class SwitchGroup<T = any> extends React.Component<SwitchGroupProps<T>> {}

interface RadioGroupProps<T> {
    onFocus?: React.FocusEventHandler;
    onBlur?: React.FocusEventHandler;
    value?: T;
    onChange?(value: T): void;
}

export class RadioGroup<T = any> extends React.Component<RadioGroupProps<T>> {}

export function setErrorLevel(errorLevel: ErrorLevel): void;
