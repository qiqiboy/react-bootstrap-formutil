"use strict";Object.defineProperty(exports,"__esModule",{value:true});function e(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var r=require("react-formutil");var t=require("react");var n=e(t);var o=require("react-bootstrap");function a(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}function l(e,r){if(e==null)return{};var t={};var n=Object.keys(e);var o,a;for(a=0;a<n.length;a++){o=n[a];if(r.indexOf(o)>=0)continue;t[o]=e[o]}return t}function u(e,r){if(e==null)return{};var t=l(e,r);var n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++){n=a[o];if(r.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;t[n]=e[n]}}return t}function c(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}function i(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function s(e,r,t){if(r)i(e.prototype,r);if(t)i(e,t);return e}function f(e){if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){f=function e(r){return typeof r}}else{f=function e(r){return r&&typeof Symbol==="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r}}return f(e)}function p(e){if(typeof Symbol==="function"&&f(Symbol.iterator)==="symbol"){p=function e(r){return f(r)}}else{p=function e(r){return r&&typeof Symbol==="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":f(r)}}return p(e)}function b(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function d(e,r){if(r&&(p(r)==="object"||typeof r==="function")){return r}return b(e)}function m(e){m=Object.setPrototypeOf?Object.getPrototypeOf:function e(r){return r.__proto__||Object.getPrototypeOf(r)};return m(e)}function v(e,r){v=Object.setPrototypeOf||function e(r,t){r.__proto__=t;return r};return v(e,r)}function y(e,r){if(typeof r!=="function"&&r!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:true,configurable:true}});if(r)v(e,r)}var h=function(e){y(r,e);function r(){c(this,r);return d(this,m(r).apply(this,arguments))}s(r,[{key:"render",value:function e(){var r=this.props,o=r.children,a=r.name,l=r.onChange,u=r.value,c=r.onFocus,i=r.onBlur;var s=function e(r){var t=r.target,n=t.checked,o=t.value;var a=u||[];l(n?a.concat(o):a.filter(function(e){return e!==o}))};return n.createElement(t.Fragment,null,t.Children.map(o,function(e){var r=e.props.value;return t.cloneElement(e,{checked:!!u&&u.indexOf(r)>-1,onChange:s,onFocus:c,onBlur:i,name:a})}))}}]);return r}(t.Component);var k=1;var g=function e(r){k=r};var E=o.FormControl.name!=="FormControl";var C=E?o.Checkbox:"Checkbox";var O=E?o.Radio:"Radio";var _=E?h:"CheckboxGroup";var j=E?o.ToggleButtonGroup:"Uncontrolled(ToggleButtonGroup)";function F(e){if(e){if(typeof e.type==="function"){var r=e.type;if(r.formutilType){return r.formutilType}if(E){return r}return r.displayName||r.name}else{return e.props.type||e.type}}}var S=function(e){y(l,e);function l(){c(this,l);return d(this,m(l).apply(this,arguments))}s(l,[{key:"render",value:function e(){var l=this.props;var c=l.children,i=l.addons,s=l.label,f=l.helper,p=l.labelCol,b=l.wrapperCol,d=l.controlId,m=l.validationState,v=l.bsSize,y=l.bsClass,h=l.className,g=l.feedback,E=l.errorLevel,S=E===void 0?k:E,P=u(l,["children","addons","label","helper","labelCol","wrapperCol","controlId","validationState","bsSize","bsClass","className","feedback","errorLevel"]);var w=b?o.Col:t.Fragment;var x={controlId:d,bsSize:v,bsClass:y,className:h};if(s){if(t.isValidElement(s)){if(p){s=n.createElement(o.Col,p,s)}}else{s=p?n.createElement(o.Col,Object.assign({},p,{componentClass:o.ControlLabel}),s):n.createElement(o.ControlLabel,null,s)}}var G=i?o.InputGroup:t.Fragment;if(i){if(i.pre&&!t.isValidElement(i.pre)){i.pre=n.createElement(o.InputGroup.Addon,null,i.pre)}if(i.end&&!t.isValidElement(i.end)){i.end=n.createElement(o.InputGroup.Addon,null,i.end)}}else{i={}}if(f&&!t.isValidElement(f)){f=n.createElement(o.HelpBlock,null,f)}var T=F(c);switch(T){case C:case O:case"checkbox":case"radio":P.__TYPE__="checked";break;case _:case j:if(c.props.type!=="radio"){P.__TYPE__="array"}break;case"checked":case"array":case"object":case"number":case"empty":P.__TYPE__=T;break;default:break}return n.createElement(r.EasyField,Object.assign({},P,{passUtil:"$fieldutil",render:function e(r){var p,d;var v=r.$fieldutil,y=u(r,["$fieldutil"]);var h=v.$invalid,k=v.$dirty,E=v.$touched,C=v.$getFirstError;var O=l.valuePropName,_=O===void 0?"value":O,j=l.changePropName,F=j===void 0?"onChange":j,T=l.focusPropName,B=T===void 0?"onFocus":T,N=l.blurPropName,I=N===void 0?"onBlur":N;var $=y[F];var L=y[B];var R=y[I];var V=y[_];var Y;switch(P.__TYPE__){case"checked":case"checkbox":case"radio":var q=l.checked,z=q===void 0?true:q,A=l.unchecked,H=A===void 0?false:A;Y={checked:V===z,onChange:function e(r){var t=r&&r.target?r.target.checked:r;$(t?z:H,r)}};break;default:Y=(p={},a(p,F,$),a(p,_,V),a(p,"name",P.name),p);break}Object.assign(Y,(d={},a(d,B,L),a(d,I,R),d));var U,M;switch(S){case 0:U=h&&k&E;break;case 1:U=h&&k;break;case 2:U=h;break;default:U=false;break}if(g){if(typeof g==="boolean"){M=n.createElement(o.FormControl.Feedback,null)}else{M=n.createElement(o.FormControl.Feedback,null,g)}}return n.createElement(o.FormGroup,Object.assign({},x,{validationState:U?"error":m}),s,n.createElement(w,b,n.createElement(G,null,i.pre,t.cloneElement(c,Y),i.end),M,U?n.createElement(o.HelpBlock,null,C()):f))}}))}}]);return l}(t.Component);var P=function(e){y(r,e);function r(){c(this,r);return d(this,m(r).apply(this,arguments))}s(r,[{key:"render",value:function e(){var r=this.props,o=r.children,a=r.name,l=r.onChange,u=r.value,c=r.onFocus,i=r.onBlur;var s=function e(r){l(r.target.value,r)};return n.createElement(t.Fragment,null,t.Children.map(o,function(e){var r=e.props.value;return t.cloneElement(e,{checked:u===r,onChange:s,onFocus:c,onBlur:i,name:a})}))}}]);return r}(t.Component);Object.keys(r).forEach(function(e){Object.defineProperty(exports,e,{enumerable:true,get:function(){return r[e]}})});exports.CheckboxGroup=h;exports.FormGroup=S;exports.RadioGroup=P;exports.setErrorLevel=g;
