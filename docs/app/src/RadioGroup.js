import { Component, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';

class RadioGroup extends Component {
    static propTypes = {
        onChange: PropTypes.func,
        onFocus: PropTypes.func,
        onBlur: PropTypes.func,
        value: PropTypes.string
    };

    render() {
        const { children, name, onChange, value, onFocus, onBlur, isValid, isInvalid } = this.props;
        const childOnChange = ev => {
            onChange(ev.target.value, ev);
        };

        return Children.map(children, child => {
            const childValue = child.props.value;

            return cloneElement(child, {
                isValid,
                isInvalid,
                checked: value === childValue,
                onChange: childOnChange,
                onFocus,
                onBlur,
                name
            });
        });
    }
}

export default RadioGroup;
