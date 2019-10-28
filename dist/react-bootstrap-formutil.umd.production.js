!function(e,t){"object"===typeof exports&&"undefined"!==typeof module?t(exports,require("react-formutil"),require("react"),require("react-bootstrap")):"function"===typeof define&&define.amd?define(["exports","react-formutil","react","react-bootstrap"],t):t((e=e||self).ReactBootstrapFormutil={},e.ReactFormutil,e.React,e.ReactBootstrap)}(this,function(e,t,r,n){"use strict";var o="default"in r?r.default:r;function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function c(e,t,r){return t&&a(e.prototype,t),r&&a(e,r),e}function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),r.push.apply(r,n)}return r}function s(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function d(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function m(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){var t=function(e,t){if("object"!==typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,t||"default");if("object"!==typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(e)}(e,"string");return"symbol"===typeof t?t:String(t)}function b(e,t){return e(t={exports:{}},t.exports),t.exports}var v,h=b(function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,i=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,l=r?Symbol.for("react.provider"):60109,u=r?Symbol.for("react.context"):60110,s=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,p=r?Symbol.for("react.forward_ref"):60112,d=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,y=r?Symbol.for("react.memo"):60115,b=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.fundamental"):60117,h=r?Symbol.for("react.responder"):60118,g=r?Symbol.for("react.scope"):60119;function C(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case s:case f:case i:case c:case a:case d:return e;default:switch(e=e&&e.$$typeof){case u:case p:case l:return e;default:return t}}case b:case y:case o:return t}}}function O(e){return C(e)===f}t.typeOf=C,t.AsyncMode=s,t.ConcurrentMode=f,t.ContextConsumer=u,t.ContextProvider=l,t.Element=n,t.ForwardRef=p,t.Fragment=i,t.Lazy=b,t.Memo=y,t.Portal=o,t.Profiler=c,t.StrictMode=a,t.Suspense=d,t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===f||e===c||e===a||e===d||e===m||"object"===typeof e&&null!==e&&(e.$$typeof===b||e.$$typeof===y||e.$$typeof===l||e.$$typeof===u||e.$$typeof===p||e.$$typeof===v||e.$$typeof===h||e.$$typeof===g)},t.isAsyncMode=function(e){return O(e)||C(e)===s},t.isConcurrentMode=O,t.isContextConsumer=function(e){return C(e)===u},t.isContextProvider=function(e){return C(e)===l},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return C(e)===p},t.isFragment=function(e){return C(e)===i},t.isLazy=function(e){return C(e)===b},t.isMemo=function(e){return C(e)===y},t.isPortal=function(e){return C(e)===o},t.isProfiler=function(e){return C(e)===c},t.isStrictMode=function(e){return C(e)===a},t.isSuspense=function(e){return C(e)===d}});(v=h)&&v.__esModule&&Object.prototype.hasOwnProperty.call(v,"default")&&v.default;h.typeOf,h.AsyncMode,h.ConcurrentMode,h.ContextConsumer,h.ContextProvider,h.Element,h.ForwardRef,h.Fragment,h.Lazy,h.Memo,h.Portal,h.Profiler,h.StrictMode,h.Suspense,h.isValidElementType,h.isAsyncMode,h.isConcurrentMode,h.isContextConsumer,h.isContextProvider,h.isElement,h.isForwardRef,h.isFragment,h.isLazy,h.isMemo,h.isPortal,h.isProfiler,h.isStrictMode,h.isSuspense;var g,C=b(function(e){e.exports=h}).isValidElementType,O=function(e){function t(){return i(this,t),m(this,f(t).apply(this,arguments))}return s(t,r.Component),c(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.name,o=e.onChange,i=e.value,a=e.onFocus,c=e.onBlur,l=e.isValid,u=e.isInvalid,s=function(e){var t=e.target,r=t.checked,n=t.value,a=i||[];o(r?a.concat(n):a.filter(function(e){return e!==n}))};return r.Children.map(t,function(e){var t=e.props.value;return r.cloneElement(e,{isValid:l,isInvalid:u,checked:!!i&&i.indexOf(t)>-1,onChange:s,onFocus:a,onBlur:c,name:n})})}}]),t}();try{var E=document.createElement("style");E.type="text/css",document.getElementsByTagName("head")[0].appendChild(E),g=document.styleSheets[document.styleSheets.length-1]}catch(e){}function P(e,t){g&&(g.insertRule?g.insertRule("".concat(e," { ").concat(t," }"),0):g.addRule&&g.addRule(e,t,0))}var S=1,_="Form"!==n.Form.displayName,j=_?n.FormControl:"FormControl",k=_?n.FormCheck:"FormCheck",w=_?O:"CheckboxGroup",x=_?n.ToggleButton:"ToggleButton",F=_?n.ToggleButtonGroup:"ToggleButtonGroup",$=n.FormControl.Feedback;var T=function(e){function a(){return i(this,a),m(this,f(a).apply(this,arguments))}return s(a,r.Component),c(a,[{key:"render",value:function(){var e=this,i=this.props,a=i.children,c=i.addons,s=i.label,f=i.helper,p=i.labelCol,m=i.wrapperCol,b=(i.validationState,i.className),v=i.feedback,h=i.extra,g=i.errorLevel,O=void 0===g?S:g,E=d(i,["children","addons","label","helper","labelCol","wrapperCol","validationState","className","feedback","extra","errorLevel"]),P=r.Children.only(a),T=m?n.Col:r.Fragment,M={className:b};s&&(r.isValidElement(s)?p&&(s=r.cloneElement(s,function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(r,!0).forEach(function(t){l(e,t,r[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(r).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))})}return e}({column:!0},p))):s=o.createElement(n.FormLabel,Object.assign({column:!!p},p),s)),(p||m)&&(M.as=n.Row);var V=c?n.InputGroup:r.Fragment,N=c?{size:c.size}:void 0;c?(c.pre&&!r.isValidElement(c.pre)&&(c.pre=o.createElement(n.InputGroup.Prepend,null,o.createElement(n.InputGroup.Text,null,c.pre))),c.end&&!r.isValidElement(c.end)&&(c.end=o.createElement(n.InputGroup.Append,null,o.createElement(n.InputGroup.Text,null,c.end)))):c={},f&&!r.isValidElement(f)&&(f=o.createElement(n.FormText,{className:"text-muted"},f));var R=function(e){if(e){var t=e.type;return"string"!==typeof t&&C(t)?t.formutilType?t.formutilType:_?t:t.displayName||t.name:e.props.type||e.type}}(P);switch(R===j&&"select"===P.props.as&&P.props.multiple&&(R="multipleSelect"),R){case k:case x:case"checkbox":case"radio":E.__TYPE__="checked";break;case"multipleSelect":E.__TYPE__="array";break;case w:case F:"radio"!==P.props.type&&(E.__TYPE__="array");break;case"checked":case"array":case"object":case"number":case"empty":E.__TYPE__=R}return o.createElement(t.EasyField,Object.assign({},E,{passUtil:"$fieldutil",render:function(t){var a,u,p,b,g=i.valuePropName,C=void 0===g?"value":g,S=i.changePropName,_=void 0===S?"onChange":S,j=i.focusPropName,k=void 0===j?"onFocus":j,w=i.blurPropName,x=void 0===w?"onBlur":w,F=t.$fieldutil,B=t[_],G=t[k],I=t[x],L=t[C],z=d(t,["$fieldutil",_,k,x,C].map(y)),A=F.$invalid,Y=F.$dirty,D=F.$touched,q=F.$focused,U=F.$getFirstError;switch(E.__TYPE__){case"checked":case"checkbox":case"radio":var H=i.checked,J=void 0===H||H,K=i.unchecked,Q=void 0!==K&&K;p={checked:L===J,onChange:function(e){var t=e&&e.target?e.target.checked:e;B(t?J:Q,e)}};break;default:l(a={onCompositionEnd:function(t){e.isComposition=!1,delete e.compositionValue,B(t)},onCompositionStart:function(){return e.isComposition=!0}},_,"multipleSelect"===R?function(e){B([].slice.call(e.target.options).filter(function(e){return e.selected}).map(function(e){return e.value}),e)}:function(t){if(e.isComposition)e.compositionValue=t.target[C],e.forceUpdate();else{for(var r=arguments.length,n=new Array(r>1?r-1:0),o=1;o<r;o++)n[o-1]=arguments[o];B.apply(void 0,[t].concat(n))}}),l(a,C,"compositionValue"in e?e.compositionValue:L),l(a,"name",E.name),p=a}switch(Object.assign(p,(l(u={},k,G),l(u,x,I),u)),O){case 0:b=A&&Y&&D;break;case 1:b=A&&Y;break;case 2:b=A;break;default:b=!1}return b&&(p.isInvalid=!0,N&&(N.className="is-invalid")),v&&!A&&(p.isValid=!0),M.className=[M.className,b&&"has-error",A&&"is-invalid",Y&&"is-dirty",D&&"is-touched",q&&"is-focused"].filter(Boolean).join(" "),o.createElement(n.FormGroup,Object.assign({},z,M),s,o.createElement(T,m,o.createElement(V,N,c.pre,r.cloneElement(P,p),c.end),b?o.createElement($,{type:"invalid"},o.createElement(n.FormText,null,U())):f),h)}}))}}]),a}();P(".valid-feedback:empty,.invalid-feedback:empty","display: none !important"),P(".has-error .invalid-feedback","display: block");var M=function(e){function t(){return i(this,t),m(this,f(t).apply(this,arguments))}return s(t,r.Component),c(t,[{key:"render",value:function(){var e=this.props,t=e.children,n=e.name,o=e.onChange,i=e.value,a=e.onFocus,c=e.onBlur,l=e.isValid,u=e.isInvalid,s=function(e){o(e.target.value,e)};return r.Children.map(t,function(e){var t=e.props.value;return r.cloneElement(e,{isValid:l,isInvalid:u,checked:i===t,onChange:s,onFocus:a,onBlur:c,name:n})})}}]),t}();Object.keys(t).forEach(function(r){"default"!==r&&Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[r]}})}),e.CheckboxGroup=O,e.FormGroup=T,e.RadioGroup=M,e.SwitchGroup=O,e.setErrorLevel=function(e){S=e},Object.defineProperty(e,"__esModule",{value:!0})});
