var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _class, _temp;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React, { Component, Fragment, cloneElement, Children } from 'react';
import PropTypes from 'prop-types';

var CheckboxGroup = (_temp = _class = function (_Component) {
    _inherits(CheckboxGroup, _Component);

    function CheckboxGroup() {
        _classCallCheck(this, CheckboxGroup);

        return _possibleConstructorReturn(this, (CheckboxGroup.__proto__ || Object.getPrototypeOf(CheckboxGroup)).apply(this, arguments));
    }

    _createClass(CheckboxGroup, [{
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
                var _ev$target = ev.target,
                    checked = _ev$target.checked,
                    childValue = _ev$target.value;

                var newValue = value || [];

                onChange(checked ? newValue.concat(childValue) : newValue.filter(function (v) {
                    return v !== childValue;
                }));
            };

            return React.createElement(
                Fragment,
                null,
                Children.map(children, function (child) {
                    var childValue = child.props.value;

                    return cloneElement(child, {
                        checked: !!value && value.indexOf(childValue) > -1,
                        onChange: childOnChange,
                        onFocus: onFocus,
                        onBlur: onBlur,
                        name: name
                    });
                })
            );
        }
    }]);

    return CheckboxGroup;
}(Component), _class.propTypes = {
    onChange: PropTypes.func,
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    value: PropTypes.array
}, _temp);


export default CheckboxGroup;