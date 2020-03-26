import{EasyField as e}from"react-formutil";export*from"react-formutil";import r,{Children as t,cloneElement as n,Component as o,createContext as i,isValidElement as a,Fragment as c}from"react";import{isValidElementType as l}from"react-is";import{FormControl as u,FormLabel as s,InputGroup as f,FormText as p,FormGroup as d,ToggleButtonGroup as v,ToggleButton as m,FormCheck as y,Col as h,Row as b}from"react-bootstrap";import g from"react-fast-compare";function P(e,r,t){if(r in e){Object.defineProperty(e,r,{value:t,enumerable:true,configurable:true,writable:true})}else{e[r]=t}return e}function O(e){"@babel/helpers - typeof";if(typeof Symbol==="function"&&typeof Symbol.iterator==="symbol"){O=function e(r){return typeof r}}else{O=function e(r){return r&&typeof Symbol==="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r}}return O(e)}function k(e,r){if(O(e)!=="object"||e===null)return e;var t=e[Symbol.toPrimitive];if(t!==undefined){var n=t.call(e,r||"default");if(O(n)!=="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(r==="string"?String:Number)(e)}function E(e){var r=k(e,"string");return O(r)==="symbol"?r:String(r)}function j(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);if(r)n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}));t.push.apply(t,n)}return t}function _(e){for(var r=1;r<arguments.length;r++){var t=arguments[r]!=null?arguments[r]:{};if(r%2){j(Object(t),true).forEach((function(r){P(e,r,t[r])}))}else if(Object.getOwnPropertyDescriptors){Object.defineProperties(e,Object.getOwnPropertyDescriptors(t))}else{j(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}}return e}function w(e,r){if(e==null)return{};var t={};var n=Object.keys(e);var o,i;for(i=0;i<n.length;i++){o=n[i];if(r.indexOf(o)>=0)continue;t[o]=e[o]}return t}function S(e,r){if(e==null)return{};var t=w(e,r);var n,o;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++){n=i[o];if(r.indexOf(n)>=0)continue;if(!Object.prototype.propertyIsEnumerable.call(e,n))continue;t[n]=e[n]}}return t}function C(e,r){if(!(e instanceof r)){throw new TypeError("Cannot call a class as a function")}}function $(e,r){for(var t=0;t<r.length;t++){var n=r[t];n.enumerable=n.enumerable||false;n.configurable=true;if("value"in n)n.writable=true;Object.defineProperty(e,n.key,n)}}function V(e,r,t){if(r)$(e.prototype,r);if(t)$(e,t);return e}function F(e){F=Object.setPrototypeOf?Object.getPrototypeOf:function e(r){return r.__proto__||Object.getPrototypeOf(r)};return F(e)}function x(){if(typeof Reflect==="undefined"||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==="function")return true;try{Date.prototype.toString.call(Reflect.construct(Date,[],(function(){})));return true}catch(e){return false}}function T(e){if(e===void 0){throw new ReferenceError("this hasn't been initialised - super() hasn't been called")}return e}function N(e,r){if(r&&(O(r)==="object"||typeof r==="function")){return r}return T(e)}function R(e){return function(){var r=F(e),t;if(x()){var n=F(this).constructor;t=Reflect.construct(r,arguments,n)}else{t=r.apply(this,arguments)}return N(this,t)}}function A(e,r){A=Object.setPrototypeOf||function e(r,t){r.__proto__=t;return r};return A(e,r)}function B(e,r){if(typeof r!=="function"&&r!==null){throw new TypeError("Super expression must either be null or a function")}e.prototype=Object.create(r&&r.prototype,{constructor:{value:e,writable:true,configurable:true}});if(r)A(e,r)}var D=function(e){B(o,e);var r=R(o);function o(){C(this,o);return r.apply(this,arguments)}V(o,[{key:"render",value:function e(){var r=this.props,o=r.children,i=r.name,a=r.onChange,c=r.value,l=r.onFocus,u=r.onBlur,s=r.isValid,f=r.isInvalid;var p=function e(r){var t=r.target,n=t.checked,o=t.value;var i=c||[];a(n?i.concat(o):i.filter((function(e){return e!==o})))};return t.map(o,(function(e){var r=e.props.value;return n(e,{isValid:s,isInvalid:f,checked:!!c&&c.indexOf(r)>-1,onChange:p,onFocus:l,onBlur:u,name:i})}))}}]);return o}(o);D.formutilType="array";var I;try{var Y=document.createElement("style");Y.type="text/css";document.getElementsByTagName("head")[0].appendChild(Y);I=document.styleSheets[document.styleSheets.length-1]}catch(e){}function U(e,r){if(I){if(I.insertRule){I.insertRule("".concat(e," { ").concat(r," }"),0)}else if(I.addRule){I.addRule(e,r,0)}}}var H=i({}),z=H.Consumer,G=H.Provider;var L=1;var M=function e(r){L=r};var W=u.Feedback;function q(e){if(e){var r=e.type;if(l(r)){if(r.formutilType){return r.formutilType}if(typeof r==="string"&&e.props.type){return e.props.type}}return r||e}}var J=function(o){B(l,o);var i=R(l);function l(){var e;C(this,l);for(var t=arguments.length,n=new Array(t),o=0;o<t;o++){n[o]=arguments[o]}e=i.call.apply(i,[this].concat(n));e.fields={};e.registerField=function(r,t){return t?e.fields[r]=t:delete e.fields[r]};e.latestValidationProps=null;e.checkHasError=function(e,r,t,n,o){switch(e){case 0:return r&&t&&n;case 1:return r&&t;case 2:return r;default:return false}};e.fetchCurrentValidationProps=function(r){var t=Object.keys(e.fields).map((function(r){return e.fields[r].$new()}));var n=t.filter((function(e){return e.$invalid}));var o=n.length>0;var i=t.some((function(e){return e.$dirty}));var a=t.some((function(e){return e.$touched}));var c=t.some((function(e){return e.$focused}));var l=n.map((function(t){var n=t.$invalid,o=t.$focused,i=t.$touched,a=t.$dirty,c=t.$getFirstError;var l=e.checkHasError(r,n,a,i,o);return l&&c()})).filter(Boolean);return e.getValidationProps(r,o,i,a,c,l)};e.getValidationProps=function(t,n,o,i,a,c){var l=e.checkHasError(t,n,o,i,a);var u={className:[e.props.className,l&&"has-error",n?"is-invalid":"is-valid",o?"is-dirty":"is-pristine",i?"is-touched":"is-untouched",a?"is-focused":"is-unfocused"].filter(Boolean).join(" ")};var s={};if(l){s.isInvalid=true}if(e.props.feedback&&!n){s.isValid=true}return{groupProps:u,validationProps:s,error:l?r.createElement(W,{type:"invalid"},Array.isArray(c)?c.map((function(e,t){return r.createElement("div",{key:t},e)})):c):null}};return e}V(l,[{key:"componentDidMount",value:function e(){var r;(r=this.registerAncestorField)===null||r===void 0?void 0:r.call(this,this.props.name,this.$fieldutil)}},{key:"componentWillUnmount",value:function e(){var r;(r=this.registerAncestorField)===null||r===void 0?void 0:r.call(this,this.props.name,null)}},{key:"render",value:function o(){var i=this;var l=this.props;var O=l.children,k=l.addons,j=l.label,w=l.helper,C=l.labelCol,$=l.wrapperCol,V=l.validationState,F=l.className,x=l.as,T=l.feedback,N=l.extra,R=l.noStyle,A=l.errorLevel,B=A===void 0?L:A,I=S(l,["children","addons","label","helper","labelCol","wrapperCol","validationState","className","as","feedback","extra","noStyle","errorLevel"]);var Y=$?h:c;var U=!x&&(C||$)?b:x;if(j){if(a(j)){if(C){j=n(j,_({column:true},C))}}else{j=r.createElement(s,Object.assign({column:!!C},C),j)}}var H=k?f:c;var M=k?{size:k.size}:undefined;if(k){if(k.pre){k.pre=r.createElement(f.Prepend,null,a(k.pre)?k.pre:r.createElement(f.Text,null,k.pre))}if(k.end){k.end=r.createElement(f.Append,null,a(k.end)?k.end:r.createElement(f.Text,null,k.end))}}else{k={}}if(w&&!a(w)){w=r.createElement(p,{className:"text-muted"},w)}if(!l.name){var W=this.latestValidationProps=this.fetchCurrentValidationProps(B),J=W.groupProps,K=W.error;Promise.resolve().then((function(){if(!g(i.latestValidationProps,i.fetchCurrentValidationProps(B))){i.forceUpdate()}}));return r.createElement(G,{value:this.registerField},r.createElement(d,Object.assign({},I,J,{as:U}),j,r.createElement(Y,$,r.createElement(H,M,k.pre,O,k.end),K||w),N))}if(l.$memo===true){I.__DIFF__=O}var Q=typeof O==="function"?O:t.only(O);var X=q(Q);if(X===u){if(Q.props.as==="select"&&Q.props.multiple){X="multipleSelect"}}switch(X){case y:case m:case"checkbox":case"radio":I.__TYPE__="checked";break;case"multipleSelect":I.__TYPE__="array";break;case D:case v:if(Q.props.type!=="radio"){I.__TYPE__="array"}break;case"checked":case"array":case"object":case"number":case"empty":I.__TYPE__=X;break}return r.createElement(e,Object.assign({},I,{passUtil:"$fieldutil",render:function e(t){var o,a;var c=l.valuePropName,u=c===void 0?"value":c,s=l.changePropName,f=s===void 0?"onChange":s,p=l.focusPropName,v=p===void 0?"onFocus":p,m=l.blurPropName,y=m===void 0?"onBlur":m;var h=t.$fieldutil,b=t[f],g=t[v],O=t[y],_=t[u],C=S(t,["$fieldutil",f,v,y,u].map(E));var V=h.$invalid,F=h.$dirty,x=h.$touched,T=h.$focused,A=h.$getFirstError;var D;switch(I.__TYPE__){case"checked":case"checkbox":case"radio":var G=l.checked,L=G===void 0?true:G,W=l.unchecked,q=W===void 0?false:W;D={checked:_===L,onChange:function e(r){var t=r&&r.target?r.target.checked:r;b(t?L:q,r)}};break;default:D=(o={onCompositionEnd:function e(r){i.isComposition=false;delete i.compositionValue;b(r)},onCompositionStart:function e(){return i.isComposition=true}},P(o,f,X==="multipleSelect"?function(e){b([].slice.call(e.target.options).filter((function(e){return e.selected})).map((function(e){return e.value})),e)}:function(e){if(i.isComposition){i.compositionValue=e.target[u];i.forceUpdate()}else{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++){t[n-1]=arguments[n]}b.apply(void 0,[e].concat(t))}}),P(o,u,"compositionValue"in i?i.compositionValue:_),P(o,"name",I.name),o);break}var J=i.getValidationProps(B,V,F,x,T,A()),K=J.groupProps,Z=J.validationProps,ee=J.error;Object.assign(D,(a={},P(a,v,g),P(a,y,O),a),Z);var re=typeof Q==="function"?Q(D):n(Q,D);return r.createElement(z,null,(function(e){if(R){i.$fieldutil=h;i.registerAncestorField=e;return re}return r.createElement(d,Object.assign({},C,K,{as:U}),j,r.createElement(Y,$,r.createElement(H,M,k.pre,re,k.end),ee||w),N)}))}}))}}]);return l}(o);U(".valid-feedback:empty,.invalid-feedback:empty","display: none !important");U(".has-error .invalid-feedback","display: block");var K=function(e){B(o,e);var r=R(o);function o(){C(this,o);return r.apply(this,arguments)}V(o,[{key:"render",value:function e(){var r=this.props,o=r.children,i=r.name,a=r.onChange,c=r.value,l=r.onFocus,u=r.onBlur,s=r.isValid,f=r.isInvalid;var p=function e(r){a(r.target.value,r)};return t.map(o,(function(e){var r=e.props.value;return n(e,{isValid:s,isInvalid:f,checked:c===r,onChange:p,onFocus:l,onBlur:u,name:i})}))}}]);return o}(o);export{D as CheckboxGroup,J as FormGroup,K as RadioGroup,D as SwitchGroup,M as setErrorLevel};
