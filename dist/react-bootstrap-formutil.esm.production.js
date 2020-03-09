import{EasyField as e}from"react-formutil";export*from"react-formutil";import r from"@babel/runtime/helpers/esm/defineProperty";import t from"@babel/runtime/helpers/esm/toPropertyKey";import a from"@babel/runtime/helpers/esm/objectSpread2";import n from"@babel/runtime/helpers/esm/objectWithoutProperties";import i from"@babel/runtime/helpers/esm/classCallCheck";import o from"@babel/runtime/helpers/esm/createClass";import l from"@babel/runtime/helpers/esm/possibleConstructorReturn";import s from"@babel/runtime/helpers/esm/getPrototypeOf";import c from"@babel/runtime/helpers/esm/inherits";import u,{Children as p,cloneElement as d,Component as f,createContext as m,isValidElement as v,Fragment as h}from"react";import{isValidElementType as b}from"react-is";import{FormControl as y,FormLabel as g,InputGroup as k,FormText as E,FormGroup as P,ToggleButtonGroup as C,ToggleButton as $,FormCheck as _,Col as V,Row as F}from"react-bootstrap";import S from"react-fast-compare";var x=function(e){c(r,e);function r(){i(this,r);return l(this,s(r).apply(this,arguments))}o(r,[{key:"render",value:function e(){var r=this.props,t=r.children,a=r.name,n=r.onChange,i=r.value,o=r.onFocus,l=r.onBlur,s=r.isValid,c=r.isInvalid;var u=function e(r){var t=r.target,a=t.checked,o=t.value;var l=i||[];n(a?l.concat(o):l.filter(function(e){return e!==o}))};return p.map(t,function(e){var r=e.props.value;return d(e,{isValid:s,isInvalid:c,checked:!!i&&i.indexOf(r)>-1,onChange:u,onFocus:o,onBlur:l,name:a})})}}]);return r}(f);var j;try{var N=document.createElement("style");N.type="text/css";document.getElementsByTagName("head")[0].appendChild(N);j=document.styleSheets[document.styleSheets.length-1]}catch(e){}function T(e,r){if(j){if(j.insertRule){j.insertRule("".concat(e," { ").concat(r," }"),0)}else if(j.addRule){j.addRule(e,r,0)}}}var w=m({}),A=w.Consumer,B=w.Provider;var O=1;var I=function e(r){O=r};var R=y.Feedback;function Y(e){if(e){var r=e.type;if(b(r)){if(r.formutilType){return r.formutilType}if(typeof r==="string"&&e.props.type){return e.props.type}}return r||e}}var U=function(f){c(m,f);function m(){var e;var r;i(this,m);for(var t=arguments.length,a=new Array(t),n=0;n<t;n++){a[n]=arguments[n]}r=l(this,(e=s(m)).call.apply(e,[this].concat(a)));r.fields={};r.registerField=function(e,t){return t?r.fields[e]=t:delete r.fields[e]};r.latestValidationProps=null;r.checkHasError=function(e,r,t,a,n){switch(e){case 0:return r&&t&&a;case 1:return r&&t;case 2:return r;default:return false}};r.fetchCurrentValidationProps=function(e){var t=Object.keys(r.fields).map(function(e){return r.fields[e].$new()});var a=t.filter(function(e){return e.$invalid});var n=a.length>0;var i=t.some(function(e){return e.$dirty});var o=t.some(function(e){return e.$touched});var l=t.some(function(e){return e.$focused});var s=a.map(function(t){var a=t.$invalid,n=t.$focused,i=t.$touched,o=t.$dirty,l=t.$getFirstError;var s=r.checkHasError(e,a,o,i,n);return s&&l()}).filter(Boolean);return r.getValidationProps(e,n,i,o,l,s)};r.getValidationProps=function(e,t,a,n,i,o){var l=r.checkHasError(e,t,a,n,i);var s={className:[r.props.className,l&&"has-error",t?"is-invalid":"is-valid",a?"is-dirty":"is-pristine",n?"is-touched":"is-untouched",i?"is-focused":"is-unfocused"].filter(Boolean).join(" ")};var c={};if(l){c.isInvalid=true}if(r.props.feedback&&!t){c.isValid=true}return{groupProps:s,validationProps:c,error:l?u.createElement(R,{type:"invalid"},Array.isArray(o)?o.map(function(e,r){return u.createElement("div",{key:r},e)}):o):null}};return r}o(m,[{key:"componentDidMount",value:function e(){var r;(r=this.registerAncestorField)===null||r===void 0?void 0:r.call(this,this.props.name,this.$fieldutil)}},{key:"componentWillUnmount",value:function e(){var r;(r=this.registerAncestorField)===null||r===void 0?void 0:r.call(this,this.props.name,null)}},{key:"render",value:function i(){var o=this;var l=this.props;var s=l.children,c=l.addons,f=l.label,m=l.helper,b=l.labelCol,j=l.wrapperCol,N=l.validationState,T=l.className,w=l.as,I=l.feedback,R=l.extra,U=l.noStyle,H=l.errorLevel,z=H===void 0?O:H,G=n(l,["children","addons","label","helper","labelCol","wrapperCol","validationState","className","as","feedback","extra","noStyle","errorLevel"]);var L=j?V:h;var W=!w&&(b||j)?F:w;if(f){if(v(f)){if(b){f=d(f,a({column:true},b))}}else{f=u.createElement(g,Object.assign({column:!!b},b),f)}}var D=c?k:h;var K=c?{size:c.size}:undefined;if(c){if(c.pre){c.pre=u.createElement(k.Prepend,null,v(c.pre)?c.pre:u.createElement(k.Text,null,c.pre))}if(c.end){c.end=u.createElement(k.Append,null,v(c.end)?c.end:u.createElement(k.Text,null,c.end))}}else{c={}}if(m&&!v(m)){m=u.createElement(E,{className:"text-muted"},m)}if(!l.name){var M=this.latestValidationProps=this.fetchCurrentValidationProps(z),q=M.groupProps,J=M.error;Promise.resolve().then(function(){if(!S(o.latestValidationProps,o.fetchCurrentValidationProps(z))){o.forceUpdate()}});return u.createElement(B,{value:this.registerField},u.createElement(P,Object.assign({},G,q,{as:W}),f,u.createElement(L,j,u.createElement(D,K,c.pre,s,c.end),J||m),R))}var Q=typeof s==="function"?s:p.only(s);var X=Y(Q);if(X===y){if(Q.props.as==="select"&&Q.props.multiple){X="multipleSelect"}}switch(X){case _:case $:case"checkbox":case"radio":G.__TYPE__="checked";break;case"multipleSelect":G.__TYPE__="array";break;case x:case C:if(Q.props.type!=="radio"){G.__TYPE__="array"}break;case"checked":case"array":case"object":case"number":case"empty":G.__TYPE__=X;break}return u.createElement(e,Object.assign({},G,{passUtil:"$fieldutil",render:function e(a){var i,s;var p=l.valuePropName,v=p===void 0?"value":p,h=l.changePropName,b=h===void 0?"onChange":h,y=l.focusPropName,g=y===void 0?"onFocus":y,k=l.blurPropName,E=k===void 0?"onBlur":k;var C=a.$fieldutil,$=a[b],_=a[g],V=a[E],F=a[v],S=n(a,["$fieldutil",b,g,E,v].map(t));var x=C.$invalid,N=C.$dirty,T=C.$touched,w=C.$focused,B=C.$getFirstError;var O;switch(G.__TYPE__){case"checked":case"checkbox":case"radio":var I=l.checked,Y=I===void 0?true:I,H=l.unchecked,M=H===void 0?false:H;O={checked:F===Y,onChange:function e(r){var t=r&&r.target?r.target.checked:r;$(t?Y:M,r)}};break;default:O=(i={onCompositionEnd:function e(r){o.isComposition=false;delete o.compositionValue;$(r)},onCompositionStart:function e(){return o.isComposition=true}},r(i,b,X==="multipleSelect"?function(e){$([].slice.call(e.target.options).filter(function(e){return e.selected}).map(function(e){return e.value}),e)}:function(e){if(o.isComposition){o.compositionValue=e.target[v];o.forceUpdate()}else{for(var r=arguments.length,t=new Array(r>1?r-1:0),a=1;a<r;a++){t[a-1]=arguments[a]}$.apply(void 0,[e].concat(t))}}),r(i,v,"compositionValue"in o?o.compositionValue:F),r(i,"name",G.name),i);break}var q=o.getValidationProps(z,x,N,T,w,B()),J=q.groupProps,Z=q.validationProps,ee=q.error;Object.assign(O,(s={},r(s,g,_),r(s,E,V),s),Z);var re=typeof Q==="function"?Q(O):d(Q,O);return u.createElement(A,null,function(e){if(U){o.$fieldutil=C;o.registerAncestorField=e;return re}return u.createElement(P,Object.assign({},S,J,{as:W}),f,u.createElement(L,j,u.createElement(D,K,c.pre,re,c.end),ee||m),R)})}}))}}]);return m}(f);T(".valid-feedback:empty,.invalid-feedback:empty","display: none !important");T(".has-error .invalid-feedback","display: block");var H=function(e){c(r,e);function r(){i(this,r);return l(this,s(r).apply(this,arguments))}o(r,[{key:"render",value:function e(){var r=this.props,t=r.children,a=r.name,n=r.onChange,i=r.value,o=r.onFocus,l=r.onBlur,s=r.isValid,c=r.isInvalid;var u=function e(r){n(r.target.value,r)};return p.map(t,function(e){var r=e.props.value;return d(e,{isValid:s,isInvalid:c,checked:i===r,onChange:u,onFocus:o,onBlur:l,name:a})})}}]);return r}(f);export{x as CheckboxGroup,U as FormGroup,H as RadioGroup,x as SwitchGroup,I as setErrorLevel};
