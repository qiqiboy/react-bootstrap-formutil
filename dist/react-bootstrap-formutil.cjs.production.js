"use strict";Object.defineProperty(exports,"__esModule",{value:true});function e(e){return e&&typeof e==="object"&&"default"in e?e["default"]:e}var r=require("react-formutil");var t=require("react");var n=e(t);var o=require("react-bootstrap");function a(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}function i(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function l(e,r,t){if(r)i(e.prototype,r);if(t)i(e,t);return e}function u(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}function c(e,r){if(typeof r!=="function"&&r!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:true,configurable:true}});if(r)f(e,r)}function s(e){s=Object.setPrototypeOf?Object.getPrototypeOf:function e(r){return r.__proto__||Object.getPrototypeOf(r)};return s(e)}function f(e,r){f=Object.setPrototypeOf||function e(r,t){r.__proto__=t;return r};return f(e,r)}function p(e,r){if(e==null)return{};var t={};var n=Object.keys(e);var o,a;for(a=0;a<n.length;a++){o=n[a];if(r.indexOf(o)>=0)continue;t[o]=e[o]}return t}function d(e,r){if(e==null)return{};var t=p(e,r);var n,o;if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++){n=a[o];if(r.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;t[n]=e[n]}}return t}function v(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function m(e,r){if(r&&(typeof r==="object"||typeof r==="function")){return r}return v(e)}function b(e,r){if(typeof e!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==undefined){var n=t.call(e,r||"default");if(typeof n!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function h(e){var r=b(e,"string");return typeof r==="symbol"?r:String(r)}var y=function(e){c(r,e);function r(){a(this,r);return m(this,s(r).apply(this,arguments))}l(r,[{key:"render",value:function e(){var r=this.props,o=r.children,a=r.name,i=r.onChange,l=r.value,u=r.onFocus,c=r.onBlur;var s=function e(r){var t=r.target,n=t.checked,o=t.value;var a=l||[];i(n?a.concat(o):a.filter(function(e){return e!==o}))};return n.createElement(t.Fragment,null,t.Children.map(o,function(e){var r=e.props.value;return t.cloneElement(e,{checked:!!l&&l.indexOf(r)>-1,onChange:s,onFocus:u,onBlur:c,name:a})}))}}]);return r}(t.Component);var g=1;var C=function e(r){g=r};var k=o.FormControl.name!=="FormControl";var E=k?o.Checkbox:"Checkbox";var O=k?o.Radio:"Radio";var _=k?y:"CheckboxGroup";var j=k?o.ToggleButtonGroup:"Uncontrolled(ToggleButtonGroup)";function P(e){if(e){if(typeof e.type==="function"){var r=e.type;if(r.formutilType){return r.formutilType}if(k){return r}return r.displayName||r.name}else{return e.props.type||e.type}}}var w=function(e){c(i,e);function i(){a(this,i);return m(this,s(i).apply(this,arguments))}l(i,[{key:"render",value:function e(){var a=this;var i=this.props;var l=i.children,c=i.addons,s=i.label,f=i.helper,p=i.labelCol,v=i.wrapperCol,m=i.controlId,b=i.validationState,y=i.bsSize,C=i.bsClass,k=i.className,w=i.feedback,F=i.errorLevel,x=F===void 0?g:F,S=d(i,["children","addons","label","helper","labelCol","wrapperCol","controlId","validationState","bsSize","bsClass","className","feedback","errorLevel"]);var T=t.Children.only(l);var G=v?o.Col:t.Fragment;var B={controlId:m,bsSize:y,bsClass:C,className:k};if(s){if(t.isValidElement(s)){if(p){s=n.createElement(o.Col,p,s)}}else{s=p?n.createElement(o.Col,Object.assign({},p,{componentClass:o.ControlLabel}),s):n.createElement(o.ControlLabel,null,s)}}var N=c?o.InputGroup:t.Fragment;if(c){if(c.pre&&!t.isValidElement(c.pre)){c.pre=n.createElement(o.InputGroup.Addon,null,c.pre)}if(c.end&&!t.isValidElement(c.end)){c.end=n.createElement(o.InputGroup.Addon,null,c.end)}}else{c={}}if(f&&!t.isValidElement(f)){f=n.createElement(o.HelpBlock,null,f)}var V=P(T);switch(V){case E:case O:case"checkbox":case"radio":S.__TYPE__="checked";break;case _:case j:if(T.props.type!=="radio"){S.__TYPE__="array"}break;case"checked":case"array":case"object":case"number":case"empty":S.__TYPE__=V;break;default:break}return n.createElement(r.EasyField,Object.assign({},S,{passUtil:"$fieldutil",render:function e(r){var l,p;var m=i.valuePropName,y=m===void 0?"value":m,g=i.changePropName,C=g===void 0?"onChange":g,k=i.focusPropName,E=k===void 0?"onFocus":k,O=i.blurPropName,_=O===void 0?"onBlur":O;var j=r.$fieldutil,P=r[C],F=r[E],V=r[_],I=r[y],$=d(r,["$fieldutil",C,E,_,y].map(h));var L=j.$invalid,R=j.$dirty,Y=j.$touched,q=j.$getFirstError;var z;switch(S.__TYPE__){case"checked":case"checkbox":case"radio":var A=i.checked,U=A===void 0?true:A,H=i.unchecked,M=H===void 0?false:H;z={checked:I===U,onChange:function e(r){var t=r&&r.target?r.target.checked:r;P(t?U:M,r)}};break;default:z=(l={onCompositionEnd:function e(r){a.isComposition=false;delete a.compositionValue;P(r)},onCompositionStart:function e(){return a.isComposition=true}},u(l,C,function(e){if(a.isComposition){a.compositionValue=e.target[y];a.forceUpdate()}else{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++){t[n-1]=arguments[n]}P.apply(void 0,[e].concat(t))}}),u(l,y,"compositionValue"in a?a.compositionValue:I),u(l,"name",S.name),l);break}Object.assign(z,(p={},u(p,E,F),u(p,_,V),p));var D,J;switch(x){case 0:D=L&&R&&Y;break;case 1:D=L&&R;break;case 2:D=L;break;default:D=false;break}if(w){if(typeof w==="boolean"){J=n.createElement(o.FormControl.Feedback,null)}else{J=n.createElement(o.FormControl.Feedback,null,w)}}return n.createElement(o.FormGroup,Object.assign({},$,B,{validationState:D?"error":b}),s,n.createElement(G,v,n.createElement(N,null,c.pre,t.cloneElement(T,z),c.end),J,D?n.createElement(o.HelpBlock,null,q()):f))}}))}}]);return i}(t.Component);var F=function(e){c(r,e);function r(){a(this,r);return m(this,s(r).apply(this,arguments))}l(r,[{key:"render",value:function e(){var r=this.props,o=r.children,a=r.name,i=r.onChange,l=r.value,u=r.onFocus,c=r.onBlur;var s=function e(r){i(r.target.value,r)};return n.createElement(t.Fragment,null,t.Children.map(o,function(e){var r=e.props.value;return t.cloneElement(e,{checked:l===r,onChange:s,onFocus:u,onBlur:c,name:a})}))}}]);return r}(t.Component);Object.keys(r).forEach(function(e){Object.defineProperty(exports,e,{enumerable:true,get:function(){return r[e]}})});exports.CheckboxGroup=y;exports.FormGroup=w;exports.RadioGroup=F;exports.setErrorLevel=C;
