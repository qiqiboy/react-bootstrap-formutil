"use strict";function _interopDefault(e){return e&&"object"===typeof e&&"default"in e?e.default:e}Object.defineProperty(exports,"__esModule",{value:!0});var reactFormutil=require("react-formutil"),React=require("react"),React__default=_interopDefault(React),reactBootstrap=require("react-bootstrap");function _defineProperty(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function _objectWithoutPropertiesLoose(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}function _objectWithoutProperties(e,t){if(null==e)return{};var r,o,n=_objectWithoutPropertiesLoose(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var r=0;r<t.length;r++){var o=t[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,t,r){return t&&_defineProperties(e.prototype,t),r&&_defineProperties(e,r),e}function _typeof2(e){return(_typeof2="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function _typeof(e){return(_typeof="function"===typeof Symbol&&"symbol"===_typeof2(Symbol.iterator)?function(e){return _typeof2(e)}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":_typeof2(e)})(e)}function _assertThisInitialized(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function _possibleConstructorReturn(e,t){return!t||"object"!==_typeof(t)&&"function"!==typeof t?_assertThisInitialized(e):t}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,t){return(_setPrototypeOf=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function _inherits(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&_setPrototypeOf(e,t)}var CheckboxGroup=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,React.Component),_createClass(t,[{key:"render",value:function(){var e=this.props,t=e.children,r=e.name,o=e.onChange,n=e.value,a=e.onFocus,c=e.onBlur,l=function(e){var t=e.target,r=t.checked,a=t.value,c=n||[];o(r?c.concat(a):c.filter(function(e){return e!==a}))};return React__default.createElement(React.Fragment,null,React.Children.map(t,function(e){var t=e.props.value;return React.cloneElement(e,{checked:!!n&&n.indexOf(t)>-1,onChange:l,onFocus:a,onBlur:c,name:r})}))}}]),t}(),errorLevelGlobal=1,setErrorLevel=function(e){errorLevelGlobal=e},isUglify="FormControl"!==reactBootstrap.FormControl.name,_Checkbox=isUglify?reactBootstrap.Checkbox:"Checkbox",_Radio=isUglify?reactBootstrap.Radio:"Radio",_CheckboxGroup=isUglify?CheckboxGroup:"CheckboxGroup",_ToggleButtonGroup=isUglify?reactBootstrap.ToggleButtonGroup:"Uncontrolled(ToggleButtonGroup)";function getChildComponent(e){if(e){if("function"===typeof e.type){var t=e.type;return t.formutilType?t.formutilType:isUglify?t:t.displayName||t.name}return e.props.type||e.type}}var _FormGroup=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,React.Component),_createClass(t,[{key:"render",value:function(){var e=this.props,t=e.children,r=e.addons,o=e.label,n=e.helper,a=e.labelCol,c=e.wrapperCol,l=e.controlId,i=e.validationState,u=e.bsSize,s=e.bsClass,p=e.className,f=e.feedback,_=e.errorLevel,d=void 0===_?errorLevelGlobal:_,b=_objectWithoutProperties(e,["children","addons","label","helper","labelCol","wrapperCol","controlId","validationState","bsSize","bsClass","className","feedback","errorLevel"]),y=c?reactBootstrap.Col:React.Fragment,m={controlId:l,bsSize:u,bsClass:s,className:p};o&&(React.isValidElement(o)?a&&(o=React__default.createElement(reactBootstrap.Col,a,o)):o=a?React__default.createElement(reactBootstrap.Col,Object.assign({},a,{componentClass:reactBootstrap.ControlLabel}),o):React__default.createElement(reactBootstrap.ControlLabel,null,o));var h=r?reactBootstrap.InputGroup:React.Fragment;r?(r.pre&&!React.isValidElement(r.pre)&&(r.pre=React__default.createElement(reactBootstrap.InputGroup.Addon,null,r.pre)),r.end&&!React.isValidElement(r.end)&&(r.end=React__default.createElement(reactBootstrap.InputGroup.Addon,null,r.end))):r={},n&&!React.isValidElement(n)&&(n=React__default.createElement(reactBootstrap.HelpBlock,null,n));var C=getChildComponent(t);switch(C){case _Checkbox:case _Radio:case"checkbox":case"radio":b.__TYPE__="checked";break;case _CheckboxGroup:case _ToggleButtonGroup:"radio"!==t.props.type&&(b.__TYPE__="array");break;case"checked":case"array":case"object":case"number":case"empty":b.__TYPE__=C}return React__default.createElement(reactFormutil.EasyField,Object.assign({},b,{passUtil:"$fieldutil",render:function(a){var l,u,s,p,_,C=a.$fieldutil,v=_objectWithoutProperties(a,["$fieldutil"]),g=C.$invalid,R=C.$dirty,k=C.$touched,P=C.$getFirstError,E=e.valuePropName,O=void 0===E?"value":E,B=e.changePropName,j=void 0===B?"onChange":B,F=e.focusPropName,G=void 0===F?"onFocus":F,x=e.blurPropName,S=void 0===x?"onBlur":x,w=v[j],T=v[G],L=v[S],I=v[O];switch(b.__TYPE__){case"checked":case"checkbox":case"radio":var N=e.checked,U=void 0===N||N,$=e.unchecked,z=void 0!==$&&$;s={checked:I===U,onChange:function(e){var t=e&&e.target?e.target.checked:e;w(t?U:z,e)}};break;default:_defineProperty(l={},j,w),_defineProperty(l,O,I),_defineProperty(l,"name",b.name),s=l}switch(Object.assign(s,(_defineProperty(u={},G,T),_defineProperty(u,S,L),u)),d){case 0:p=g&&R&k;break;case 1:p=g&&R;break;case 2:p=g;break;default:p=!1}return f&&(_="boolean"===typeof f?React__default.createElement(reactBootstrap.FormControl.Feedback,null):React__default.createElement(reactBootstrap.FormControl.Feedback,null,f)),React__default.createElement(reactBootstrap.FormGroup,Object.assign({},m,{validationState:p?"error":i}),o,React__default.createElement(y,c,React__default.createElement(h,null,r.pre,React.cloneElement(t,s),r.end),_,p?React__default.createElement(reactBootstrap.HelpBlock,null,P()):n))}}))}}]),t}(),RadioGroup=function(e){function t(){return _classCallCheck(this,t),_possibleConstructorReturn(this,_getPrototypeOf(t).apply(this,arguments))}return _inherits(t,React.Component),_createClass(t,[{key:"render",value:function(){var e=this.props,t=e.children,r=e.name,o=e.onChange,n=e.value,a=e.onFocus,c=e.onBlur,l=function(e){o(e.target.value,e)};return React__default.createElement(React.Fragment,null,React.Children.map(t,function(e){var t=e.props.value;return React.cloneElement(e,{checked:n===t,onChange:l,onFocus:a,onBlur:c,name:r})}))}}]),t}();Object.keys(reactFormutil).forEach(function(e){Object.defineProperty(exports,e,{enumerable:!0,get:function(){return reactFormutil[e]}})}),exports.CheckboxGroup=CheckboxGroup,exports.FormGroup=_FormGroup,exports.RadioGroup=RadioGroup,exports.setErrorLevel=setErrorLevel;
