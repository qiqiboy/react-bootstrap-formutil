import { Component, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';

class CheckboxGroup extends Component {
    static formutilType = 'array';
    static propTypes = {
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        value: PropTypes.array
    };

    render() {
        const { children, name, onChange, value, onFocus, onBlur, isValid, isInvalid } = this.props;
        const childOnChange = ev => {
            const { checked, value: childValue } = ev.target;
            const newValue = value || [];

            onChange(checked ? newValue.concat(childValue) : newValue.filter(v => v !== childValue));
        };

        return Children.map(children, child => {
            const childValue = child.props.value;

            return cloneElement(child, {
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

export default CheckboxGroup;
