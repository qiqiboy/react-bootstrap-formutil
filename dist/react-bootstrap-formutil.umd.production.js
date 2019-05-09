!function(e,r){"object"===typeof exports&&"undefined"!==typeof module?r(exports,require("react-formutil"),require("react"),require("react-bootstrap")):"function"===typeof define&&define.amd?define(["exports","react-formutil","react","react-bootstrap"],r):r((e=e||self).ReactBootstrapFormutil={},e.ReactFormutil,e.React,e.ReactBootstrap)}(this,function(e,r,t,o){"use strict";var n="default"in t?t.default:t;function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,r){for(var t=0;t<r.length;t++){var o=r[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function _createClass(e,r,t){return r&&_defineProperties(e.prototype,r),t&&_defineProperties(e,t),e}function _defineProperty(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function _inherits(e,r){if("function"!==typeof r&&null!==r)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),r&&_setPrototypeOf(e,r)}function _getPrototypeOf(e){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function _setPrototypeOf(e,r){return(_setPrototypeOf=Object.setPrototypeOf||function(e,r){return e.__proto__=r,e})(e,r)}function _objectWithoutProperties(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}function _possibleConstructorReturn(e,r){return!r||"object"!==typeof r&&"function"!==typeof r?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):r}function _toPropertyKey(e){var r=function(e,r){if("object"!==typeof e||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var o=t.call(e,r||"default");if("object"!==typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(e)}(e,"string");return"symbol"===typeof r?r:String(r)}var a=function(e){function CheckboxGroup(){return _classCallCheck(this,CheckboxGroup),_possibleConstructorReturn(this,_getPrototypeOf(CheckboxGroup).apply(this,arguments))}return _inherits(CheckboxGroup,t.Component),_createClass(CheckboxGroup,[{key:"render",value:function(){var e=this.props,r=e.children,o=e.name,a=e.onChange,l=e.value,i=e.onFocus,c=e.onBlur,u=function(e){var r=e.target,t=r.checked,o=r.value,n=l||[];a(t?n.concat(o):n.filter(function(e){return e!==o}))};return n.createElement(t.Fragment,null,t.Children.map(r,function(e){var r=e.props.value;return t.cloneElement(e,{checked:!!l&&l.indexOf(r)>-1,onChange:u,onFocus:i,onBlur:c,name:o})}))}}]),CheckboxGroup}(),l=1,i="FormControl"!==o.FormControl.name,c=i?o.Checkbox:"Checkbox",u=i?o.Radio:"Radio",s=i?a:"CheckboxGroup",p=i?o.ToggleButtonGroup:"Uncontrolled(ToggleButtonGroup)";var f=function(e){function _FormGroup(){return _classCallCheck(this,_FormGroup),_possibleConstructorReturn(this,_getPrototypeOf(_FormGroup).apply(this,arguments))}return _inherits(_FormGroup,t.Component),_createClass(_FormGroup,[{key:"render",value:function(){var e=this.props,a=e.children,f=e.addons,d=e.label,b=e.helper,m=e.labelCol,h=e.wrapperCol,y=e.controlId,_=e.validationState,v=e.bsSize,C=e.bsClass,g=e.className,k=e.feedback,P=e.errorLevel,E=void 0===P?l:P,O=_objectWithoutProperties(e,["children","addons","label","helper","labelCol","wrapperCol","controlId","validationState","bsSize","bsClass","className","feedback","errorLevel"]),G=t.Children.only(a),F=h?o.Col:t.Fragment,j={controlId:y,bsSize:v,bsClass:C,className:g};d&&(t.isValidElement(d)?m&&(d=n.createElement(o.Col,m,d)):d=m?n.createElement(o.Col,Object.assign({},m,{componentClass:o.ControlLabel}),d):n.createElement(o.ControlLabel,null,d));var x=f?o.InputGroup:t.Fragment;f?(f.pre&&!t.isValidElement(f.pre)&&(f.pre=n.createElement(o.InputGroup.Addon,null,f.pre)),f.end&&!t.isValidElement(f.end)&&(f.end=n.createElement(o.InputGroup.Addon,null,f.end))):f={},b&&!t.isValidElement(b)&&(b=n.createElement(o.HelpBlock,null,b));var w=function(e){if(e){if("function"===typeof e.type){var r=e.type;return r.formutilType?r.formutilType:i?r:r.displayName||r.name}return e.props.type||e.type}}(G);switch(w){case c:case u:case"checkbox":case"radio":O.__TYPE__="checked";break;case s:case p:"radio"!==G.props.type&&(O.__TYPE__="array");break;case"checked":case"array":case"object":case"number":case"empty":O.__TYPE__=w}return n.createElement(r.EasyField,Object.assign({},O,{passUtil:"$fieldutil",render:function(r){var a,l,i,c,u,s=e.valuePropName,p=void 0===s?"value":s,m=e.changePropName,y=void 0===m?"onChange":m,v=e.focusPropName,C=void 0===v?"onFocus":v,g=e.blurPropName,P=void 0===g?"onBlur":g,w=r.$fieldutil,R=r[y],S=r[C],B=r[P],T=r[p],N=_objectWithoutProperties(r,["$fieldutil",y,C,P,p].map(_toPropertyKey)),I=w.$invalid,$=w.$dirty,L=w.$touched,V=w.$getFirstError;switch(O.__TYPE__){case"checked":case"checkbox":case"radio":var Y=e.checked,q=void 0===Y||Y,z=e.unchecked,W=void 0!==z&&z;i={checked:T===q,onChange:function(e){var r=e&&e.target?e.target.checked:e;R(r?q:W,e)}};break;default:_defineProperty(a={},y,R),_defineProperty(a,p,T),_defineProperty(a,"name",O.name),i=a}switch(Object.assign(i,(_defineProperty(l={},C,S),_defineProperty(l,P,B),l)),E){case 0:c=I&&$&&L;break;case 1:c=I&&$;break;case 2:c=I;break;default:c=!1}return k&&(u="boolean"===typeof k?n.createElement(o.FormControl.Feedback,null):n.createElement(o.FormControl.Feedback,null,k)),n.createElement(o.FormGroup,Object.assign({},N,j,{validationState:c?"error":_}),d,n.createElement(F,h,n.createElement(x,null,f.pre,t.cloneElement(G,i),f.end),u,c?n.createElement(o.HelpBlock,null,V()):b))}}))}}]),_FormGroup}(),d=function(e){function RadioGroup(){return _classCallCheck(this,RadioGroup),_possibleConstructorReturn(this,_getPrototypeOf(RadioGroup).apply(this,arguments))}return _inherits(RadioGroup,t.Component),_createClass(RadioGroup,[{key:"render",value:function(){var e=this.props,r=e.children,o=e.name,a=e.onChange,l=e.value,i=e.onFocus,c=e.onBlur,u=function(e){a(e.target.value,e)};return n.createElement(t.Fragment,null,t.Children.map(r,function(e){var r=e.props.value;return t.cloneElement(e,{checked:l===r,onChange:u,onFocus:i,onBlur:c,name:o})}))}}]),RadioGroup}();Object.keys(r).forEach(function(t){Object.defineProperty(e,t,{enumerable:!0,get:function(){return r[t]}})}),e.CheckboxGroup=a,e.FormGroup=f,e.RadioGroup=d,e.setErrorLevel=function(e){l=e},Object.defineProperty(e,"__esModule",{value:!0})});
