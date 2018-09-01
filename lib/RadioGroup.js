var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';

var RadioGroup = (_temp = _class = function (_Component) {
    _inherits(RadioGroup, _Component);

    function RadioGroup() {
        _classCallCheck(this, RadioGroup);

        return _possibleConstructorReturn(this, (RadioGroup.__proto__ || Object.getPrototypeOf(RadioGroup)).apply(this, arguments));
    }

    _createClass(RadioGroup, [{
        key: 'render',
        value: function render() {
            var _props = this.props,
                children = _props.children,
                name = _props.name,
                onChange = _props.onChange,
                value = _props.value,
                onFocus = _props.onFocus,
                onBlur = _props.onBlur;

            var childOnChange = function childOnChange(ev) {
                onChange(ev.target.value, ev);
            };

            return React.createElement(
                Fragment,
                null,
                Children.map(children, function (child) {
                    var childValue = child.props.value;

                    return cloneElement(child, {
                        checked: value === childValue,
                        onChange: childOnChange,
                        onFocus: onFocus,
                        onBlur: onBlur,
                        name: name
                    });
                })
            );
        }
    }]);

    return RadioGroup;
}(Component), _class.propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.string
}, _temp);


export default RadioGroup;