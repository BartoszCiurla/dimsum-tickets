(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[21],{132:function(e,t,n){"use strict";n.r(t);var r=n(70),a=n(0),o=n.n(a),i=n(2),l=n.n(i),c=n(14),u=n(33);function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var d=Object(c.a)("div")("counter","textarea",(function(e){return{"limit-error":e.limitError}})),f=function(e){var t=e.containerProps,n=void 0===t?{}:t,r=e.autoFocus,i=void 0!==r&&r,l=e.className,c=void 0===l?"":l,f=e.disabled,p=void 0!==f&&f,v=e.name,b=void 0===v?"":v,h=e.id,m=void 0===h?null:h,g=e.maxLength,O=void 0===g?null:g,y=e.minLength,E=void 0===y?0:y,j=e.placeholder,x=void 0===j?"":j,P=e.onClick,w=void 0===P?function(){return null}:P,R=e.onChange,C=void 0===R?function(){return null}:R,T=e.onFocus,$=void 0===T?function(){return null}:T,S=e.onBlur,k=void 0===S?function(){return null}:S,N=e.onKeyUp,L=void 0===N?function(){return null}:N,F=e.onKeyDown,A=void 0===F?function(){return null}:F,D=e.onPaste,I=void 0===D?function(){return null}:D,z=e.value,q=void 0===z?"":z,_=e.hasError,B=void 0!==_&&_,M=e.required,W=void 0!==M&&M,V=e.readOnly,U=void 0!==V&&V,H=e.resize,K=void 0===H?"vertical":H,Z=e.innerRef,G=void 0===Z?null:Z,J=e.ariaLabel,Q=void 0===J?"Enter text":J,X=e.ariaAutocomplete,Y=void 0===X?"none":X,ee=e.role,te=void 0===ee?"textbox":ee,ne=e.characterLimitCounter,re=void 0===ne?0:ne,ae=e.rows,oe=void 0===ae?3:ae,ie=e.errorLimit,le=void 0===ie?"Please limit your entry to":ie,ce=e.tabIndex,ue=void 0===ce?"":ce,se=Object(a.useMemo)((function(){return re<String(q).length&&re>0}),[re,q]),de=Object(u.b)("form-element-textarea","text",{hasError:se||B,readOnly:U,disabled:p}),fe=de.cssClassName,pe=de.classNameElement,ve=de.classNameBlock;return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",s({},n,{className:"".concat(fe," ").concat(c)}),o.a.createElement("div",{className:ve("wrapper")},o.a.createElement("textarea",{ref:G,"aria-autocomplete":Y,"aria-label":Q,"aria-multiline":!0,"aria-placeholder":x,"aria-required":W,autoFocus:i,className:pe("textarea"),"data-testid":"ds-large-input_main-component",disabled:p,id:m,maxLength:O,minLength:E,name:b,onBlur:k,onChange:C,onClick:w,onFocus:$,onKeyDown:A,onKeyUp:function(e){L(e)},onPaste:I,placeholder:x,role:te,rows:String(oe),style:{resize:K},value:q,tabIndex:ue}))),re>0&&o.a.createElement(d,{classProps:{limitError:se},"data-testid":"counter-area"},"".concat(se?"".concat(le," ").concat(re," characters.   "):"").concat(String(q).length," / ").concat(re)))};f.propTypes={containerProps:l.a.shape({}),autoFocus:l.a.bool,className:l.a.string,disabled:l.a.bool,name:l.a.string,id:l.a.number,maxLength:l.a.number,minLength:l.a.number,placeholder:l.a.string,onClick:l.a.func,onChange:l.a.func,onFocus:l.a.func,onBlur:l.a.func,onKeyUp:l.a.func,onKeyDown:l.a.func,onPaste:l.a.func,value:l.a.string,hasError:l.a.bool,required:l.a.bool,readOnly:l.a.bool,resize:l.a.string,innerRef:l.a.func,ariaLabel:l.a.string,ariaAutocomplete:l.a.string,role:l.a.string,characterLimitCounter:l.a.number,tabIndex:l.a.string};var p=f,v=n(700);t.default=function(){var e=Object(a.useState)(),t=Object(r.a)(e,2),n=t[0],i=t[1],l=function(e){var t=e.target.value;return i(t)};return o.a.createElement("div",null,o.a.createElement(p,{characterLimitCounter:20,containerProps:{id:"my-custom-id"},maxLength:500,onChange:l,rows:6,value:n}),o.a.createElement("div",{style:{height:"2rem"}}),o.a.createElement(v.a,{containerProps:{id:"my-custom-id"},feedbackMessage:"Some feedback from de user...",inputComponent:p,labelText:"Label text",onChange:l,placeholder:"Hint Text",value:n}))}},211:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n.d(t,"a",(function(){return r}))},225:function(e,t,n){"use strict";function r(e){return(r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function l(e,t,n){return t&&i(e.prototype,t),n&&i(e,n),e}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function u(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}function s(e,t){return!t||"object"!==r(t)&&"function"!==typeof t?a(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return l})),n.d(t,"c",(function(){return o})),n.d(t,"d",(function(){return u})),n.d(t,"e",(function(){return d})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return a}))},262:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return i}));var r=n(275),a=n(276),o={DATE:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/],DATE_TIME:[/\d/,/\d/,"/",/\d/,/\d/,"/",/\d/,/\d/,/\d/,/\d/," ",/[0-2]/,/[0-9]/,":",/[0-5]/,/[0-9]/],PHONE:["(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],PHONE_INTENATIONAL:["+","1"," ","(",/[1-9]/,/\d/,/\d/,")"," ",/\d/,/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],SSN:[/\d/,/\d/,/\d/,"-",/\d/,/\d/,"-",/\d/,/\d/,/\d/,/\d/],US_ZIP_CODE:[/\d/,/\d/,/\d/,/\d/,/\d/],NUMBER:r.a,PERCENT:a.a},i=[o.DATE,o.DATE_TIME,o.PHONE,o.PHONE_INTENATIONAL,o.SSN,o.US_ZIP_CODE,o.NUMBER,o.PERCENT]},275:function(e,t,n){"use strict";var r=n(190),a=/-/,o=/\D+/g,i=/\d/,l=function(e){return e.split("").map((function(e){return i.test(e)?i:e}))},c=function(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.prefix,n=void 0===t?"$":t,u=e.suffix,s=void 0===u?"":u,d=e.includeThousandsSeparator,f=void 0===d||d,p=e.thousandsSeparatorSymbol,v=void 0===p?",":p,b=e.allowDecimal,h=void 0!==b&&b,m=e.decimalSymbol,g=void 0===m?".":m,O=e.decimalLimit,y=void 0===O?2:O,E=e.requireDecimal,j=void 0!==E&&E,x=e.allowNegative,P=void 0!==x&&x,w=e.allowLeadingZeroes,R=void 0!==w&&w,C=e.integerLimit,T=void 0===C?null:C,$=n&&n.length||0,S=s&&s.length||0,k=v&&v.length||0;function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.length;if(1===t&&!Number.isInteger(parseInt(e[0],10))&&!1===P)return[""];if(""===e||e[0]===n[0]&&1===t)return n.split("").concat([i]).concat(s.split(""));if(e===g&&h)return n.split("").concat(["0",g,i]).concat(s.split(""));var u="-"===e[0]&&P;u&&(e=e.toString().substr(1));var d,p,b,m=e.lastIndexOf(g),O=-1!==m;if(e.slice(-1*S)===s&&(e=e.slice(0,-1*S)),O&&(h||j)?(d=e.slice(e.slice(0,$)===n?$:0,m),p=e.slice(m+1,t),p=l(p.replace(o,""))):d=e.slice(0,$)===n?e.slice($):e,T&&"number"===Object(r.a)(T)){var E="."===v?"[.]":"".concat(v),x=(d.match(new RegExp(E,"g"))||[]).length;d=d.slice(0,T+x*k)}return d=d.replace(o,""),R||(d=d.replace(/^0+(0$|[^0])/,"$1")),d=f?c(d,v):d,b=l(d),(O&&h||!0===j)&&(e[m-1]!==g&&b.push("[]"),b.push(g,"[]"),p&&("number"===Object(r.a)(y)&&(p=p.slice(0,y)),b=b.concat(p)),!0===j&&e[m-1]===g&&b.push(i)),$>0&&(b=n.split("").concat(b)),u&&(b.length===$&&b.push(i),b=[a].concat(b)),s.length>0&&(b=b.concat(s.split(""))),b}return N.instanceOf="createNumberMask",N}},276:function(e,t,n){"use strict";var r=n(190),a=/-/,o=/\D+/g,i=/\d/,l=function(e){return e.split("").map((function(e){return i.test(e)?i:e}))},c=function(e,t){return e.replace(/\B(?=(\d{3})+(?!\d))/g,t)};t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.prefix,n=void 0===t?"":t,u=e.suffix,s=void 0===u?"%":u,d=e.includeThousandsSeparator,f=void 0===d||d,p=e.thousandsSeparatorSymbol,v=void 0===p?",":p,b=e.allowDecimal,h=void 0!==b&&b,m=e.decimalSymbol,g=void 0===m?".":m,O=e.decimalLimit,y=void 0===O?2:O,E=e.requireDecimal,j=void 0!==E&&E,x=e.allowNegative,P=void 0!==x&&x,w=e.allowLeadingZeroes,R=void 0!==w&&w,C=e.integerLimit,T=void 0===C?null:C,$=n&&n.length||0,S=s&&s.length||0,k=v&&v.length||0;function N(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.length;if(1===t&&!Number.isInteger(parseInt(e[0],10))&&!1===P)return[""];if(""===e||e[0]===n[0]&&1===t)return n.split("").concat([i]).concat(s.split(""));if(e===g&&h)return n.split("").concat(["0",g,i]).concat(s.split(""));var u="-"===e[0]&&P;u&&(e=e.toString().substr(1));var d,p,b,m=e.lastIndexOf(g),O=-1!==m;if(e.slice(-1*S)===s&&(e=e.slice(0,-1*S)),O&&(h||j)?(d=e.slice(e.slice(0,$)===n?$:0,m),p=e.slice(m+1,t),p=l(p.replace(o,""))):d=e.slice(0,$)===n?e.slice($):e,T&&"number"===Object(r.a)(T)){var E="."===v?"[.]":"".concat(v),x=(d.match(new RegExp(E,"g"))||[]).length;d=d.slice(0,T+x*k)}return d=d.replace(o,""),R||(d=d.replace(/^0+(0$|[^0])/,"$1")),d=f?c(d,v):d,b=l(d),(O&&h||!0===j)&&(e[m-1]!==g&&b.push("[]"),b.push(g,"[]"),p&&("number"===Object(r.a)(y)&&(p=p.slice(0,y)),b=b.concat(p)),!0===j&&e[m-1]===g&&b.push(i)),$>0&&(b=n.split("").concat(b)),u&&(b.length===$&&b.push(i),b=[a].concat(b)),s.length>0&&(b=b.concat(s.split(""))),b}return N.instanceOf="createPercentMask",N}},603:function(e,t,n){"use strict";var r=n(13),a=n(22),o=n(0),i=n.n(o),l=n(2),c=n.n(l),u=n(785),s=function(e){var t=e.containerProps,n=void 0===t?{}:t,o=e.autoFocus,l=void 0!==o&&o,c=e.disabled,s=void 0!==c&&c,d=e.maxLength,f=void 0===d?255:d,p=e.minLength,v=void 0===p?0:p,b=e.fluidWidth,h=void 0!==b&&b,m=e.placeholder,g=e.value,O=void 0===g?"":g,y=e.hasError,E=void 0!==y&&y,j=e.readOnly,x=void 0!==j&&j,P=e.innerRef,w=void 0===P?null:P,R=e.type,C=void 0===R?"text":R,T=e.min,$=void 0===T?void 0:T,S=e.max,k=void 0===S?void 0:S,N=e.clearable,L=void 0!==N&&N,F=e.leftComponent,A=void 0===F?null:F,D=e.rightComponent,I=void 0===D?null:D,z=e.required,q=void 0!==z&&z,_=e.variant,B=Object(a.a)(e,["containerProps","autoFocus","disabled","maxLength","minLength","fluidWidth","placeholder","value","hasError","readOnly","innerRef","type","min","max","clearable","leftComponent","rightComponent","required","variant"]);return i.a.createElement(u.a,Object(r.a)({},B,{"aria-label":B["aria-label"]||"Text Box",autoFocus:l,clearable:L,containerProps:n,disabled:s,fluidWidth:h,hasError:E,innerRef:w,leftComponent:A,max:k,maxLength:f,min:$,minLength:v,placeholder:m,readOnly:x,required:q,rightComponent:I,role:"textbox",type:C,value:O,variant:_}))};s.propTypes={containerProps:c.a.shape({}),autoFocus:c.a.bool,disabled:c.a.bool,maxLength:c.a.number,minLength:c.a.number,fluidWidth:c.a.bool,placeholder:c.a.string,value:c.a.string,hasError:c.a.bool,readOnly:c.a.bool,min:c.a.number,max:c.a.number,clearable:c.a.bool,leftComponent:c.a.element,rightComponent:c.a.element,required:c.a.bool,variant:c.a.string},t.a=s},617:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(33),i=Object(o.b)("form-required-mark").cssClassName;t.a=function(e){var t=e.required,n=void 0!==t&&t,r=e.optional;return n||void 0!==r&&r?n?a.a.createElement("span",{className:"".concat(i)},"\u25cf"):a.a.createElement("span",{className:"".concat(i," optional-mark")},"\u26ac"):null}},619:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.ContentRect=function(e){if("getBBox"in e){var t=e.getBBox();return Object.freeze({height:t.height,left:0,top:0,width:t.width})}var n=window.getComputedStyle(e);return Object.freeze({height:parseFloat(n.height||"0"),left:parseFloat(n.paddingLeft||"0"),top:parseFloat(n.paddingTop||"0"),width:parseFloat(n.width||"0")})}},629:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(642),a=n(643),o=[],i=function(){function e(e){this.$$observationTargets=[],this.$$activeTargets=[],this.$$skippedTargets=[];var t=function(e){if("undefined"===typeof e)return"Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.";if("function"!==typeof e)return"Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function."}(e);if(t)throw TypeError(t);this.$$callback=e,o.push(this)}return e.prototype.observe=function(e){var t=l("observe",e);if(t)throw TypeError(t);c(this.$$observationTargets,e)>0||(this.$$observationTargets.push(new r.ResizeObservation(e)),v())},e.prototype.unobserve=function(e){var t=l("unobserve",e);if(t)throw TypeError(t);var n=c(this.$$observationTargets,e);n<0||(this.$$observationTargets.splice(n,1),h())},e.prototype.disconnect=function(){this.$$observationTargets=[],this.$$activeTargets=[]},e}();function l(e,t){return"undefined"===typeof t?"Failed to execute '"+e+"' on 'ResizeObserver': 1 argument required, but only 0 present.":t instanceof window.Element?void 0:"Failed to execute '"+e+"' on 'ResizeObserver': parameter 1 is not of type 'Element'."}function c(e,t){for(var n=0;n<e.length;n+=1)if(e[n].target===t)return n;return-1}t.ResizeObserver=i;var u,s=function(e){o.forEach((function(t){t.$$activeTargets=[],t.$$skippedTargets=[],t.$$observationTargets.forEach((function(n){n.isActive()&&(f(n.target)>e?t.$$activeTargets.push(n):t.$$skippedTargets.push(n))}))}))},d=function(){var e=1/0;return o.forEach((function(t){if(t.$$activeTargets.length){var n=[];t.$$activeTargets.forEach((function(t){var r=new a.ResizeObserverEntry(t.target);n.push(r),t.$$broadcastWidth=r.contentRect.width,t.$$broadcastHeight=r.contentRect.height;var o=f(t.target);o<e&&(e=o)})),t.$$callback(n,t),t.$$activeTargets=[]}})),e},f=function(e){for(var t=0;e.parentNode;)e=e.parentNode,t+=1;return t},p=function(){var e=0;for(s(e);o.some((function(e){return!!e.$$activeTargets.length}));)e=d(),s(e);o.some((function(e){return!!e.$$skippedTargets.length}))&&function(){var e=new window.ErrorEvent("ResizeLoopError",{message:"ResizeObserver loop completed with undelivered notifications."});window.dispatchEvent(e)}()},v=function(){u||b()},b=function e(){u=window.requestAnimationFrame((function(){p(),e()}))},h=function(){u&&!o.some((function(e){return!!e.$$observationTargets.length}))&&(window.cancelAnimationFrame(u),u=void 0)};t.install=function(){return window.ResizeObserver=i}},642:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(619),a=function(){function e(e){this.target=e,this.$$broadcastWidth=this.$$broadcastHeight=0}return Object.defineProperty(e.prototype,"broadcastWidth",{get:function(){return this.$$broadcastWidth},enumerable:!0,configurable:!0}),Object.defineProperty(e.prototype,"broadcastHeight",{get:function(){return this.$$broadcastHeight},enumerable:!0,configurable:!0}),e.prototype.isActive=function(){var e=r.ContentRect(this.target);return!!e&&(e.width!==this.broadcastWidth||e.height!==this.broadcastHeight)},e}();t.ResizeObservation=a},643:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(619),a=function(e){this.target=e,this.contentRect=r.ContentRect(e)};t.ResizeObserverEntry=a},700:function(e,t,n){"use strict";var r=n(13),a=n(22),o=n(0),i=n.n(o),l=n(2),c=n.n(l),u=n(14),s=n(15),d=n(612),f=n(209);function p(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.b)(e);if(t){var a=Object(f.b)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(f.c)(this,n)}}var v=Object(u.a)("div")("input-addon-group"),b=Object(u.a)("span")("input-addon-group","addon"),h=function(e){Object(f.a)(n,e);var t=p(n);function n(){var e;Object(f.d)(this,n);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return e=t.call.apply(t,[this].concat(a)),Object(s.a)(Object(f.e)(e),"state",{}),e}return Object(f.f)(n,[{key:"render",value:function(){var e=this.props,t=e.leftAddon,n=e.rightAddon,a=e.children,o=e.className,l=e.containerProps,c=a&&a.type&&a.type.name?a.type.name.toLowerCase():"default";return i.a.createElement(v,Object(r.a)({className:"".concat(o," ").concat("input-addon-group","--").concat(c)},l),t&&i.a.createElement(b,null,t),a,n&&i.a.createElement(b,null,n))}}]),n}(o.Component);Object(s.a)(h,"defaultProps",{});var m=h,g=function(e){var t=e.containerProps,n=void 0===t?{}:t,r=e.innerRef,a=void 0===r?null:r,o=e.className,l=void 0===o?"":o,c=e.style,u=void 0===c?{}:c,s=e.leftAddon,d=void 0===s?null:s,f=e.rightAddon,p=void 0===f?null:f,v=e.children;return i.a.createElement(m,{ref:a,className:l,containerProps:n,leftAddon:d,rightAddon:p,style:u},v)};g.propTypes={containerProps:c.a.shape({}),innerRef:c.a.func,className:c.a.string,style:c.a.objectOf(c.a.string),leftAddon:c.a.element,rightAddon:c.a.element,children:c.a.element};var O=g,y=n(225),E=n(211);function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(y.e)(e);if(t){var a=Object(y.e)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(y.f)(this,n)}}var x=function(e){var t=e.target,n=e.currentTarget;return t?t.value:n?n.value:e},P=i.a.createContext().Provider,w=function(e){Object(y.d)(n,e);var t=j(n);function n(e){var r;Object(y.c)(this,n),r=t.call(this,e);var a=e.activeValue,o=e.disabled;return r.state={activeValue:a,disabled:o,prevValue:null,onChange:r.handleChange.bind(Object(y.g)(r))},r}return Object(y.b)(n,[{key:"handleChange",value:function(e){var t,n=this.props,r=n.multiple,a=n.onChange,o=this.state.activeValue,i=x(e);r?t=function(e,t){var n=x(t),r=e,a=e.indexOf(n);return-1===a?r.push(n):r.splice(a,1),r}(o||[],i):o!==i&&(t=i),this.setState({activeValue:t}),a&&a(t)}},{key:"render",value:function(){var e=this.props.children;return i.a.createElement(P,{value:this.state},e)}}],[{key:"getDerivedStateFromProps",value:function(e,t){var n=t.prevValue;return e.activeValue===n?null:{activeValue:e.activeValue,prevValue:e.activeValue}}}]),n}(o.Component);Object(E.a)(w,"defaultProps",{multiple:!1});var R=n(781),C=n(617),T=Object(u.a)("span")("em-ds-label","text"),$=function(e){var t=e.children,n=e.label,r=e.htmlFor,a=e.required,o=e.optional,l=e.truncateText,c=void 0===l||l,u=e.isGroup,s=void 0!==u&&u;return i.a.createElement("label",{className:"".concat("em-ds-label").concat(s?" ".concat("em-ds-label","--group"):""),htmlFor:r},c?i.a.createElement(R.a,{value:t||n}):i.a.createElement(T,null,n),i.a.createElement(C.a,{optional:o,required:a}))};$.propTypes={children:c.a.string,label:c.a.string,htmlFor:c.a.string,required:c.a.bool,optional:c.a.bool,truncateText:c.a.bool,isGroup:c.a.bool};var S=$,k=n(603),N=n(629),L=n(33);function F(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?F(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):F(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var D=function(e){var t=e.containerProps,n=void 0===t?{}:t,a=e.className,o=void 0===a?"":a,l=e.style,c=void 0===l?{}:l,u=e.text,s=void 0===u?"":u,d=e.maxCharacters,f=void 0===d?0:d,p=e.maxWidth,v=void 0===p?"100%":p,b=e.textEllipsis,h=void 0!==b&&b,m=e.textAlignment,g=void 0===m?"left":m,O=e.wordBreak,y=void 0===O||O,E=Object(L.b)("text-wrapperRef",o,{textEllipsis:h,textAlignment:g,wordBreak:y}),j=E.cssClassName,x=E.classNameElement,P=s;return h?P=f>0?P.substring(0,f):P:f>0&&(P=s.split(" ").reduce((function(e,t){var n=e.length-1;return e[n].length+t.length>f&&(n+=1),e[n]="".concat(e[n]||""," ").concat(t),e}),[""]).map((function(e,t){return i.a.createElement("span",{key:t,className:x("line")},e)}))),i.a.createElement("span",Object(r.a)({},n,{className:j,style:A({maxWidth:f<1?v:null},c)}),h?i.a.createElement("span",{className:x("ellipsis-wrapperRef")},P):P)};var I=function(e){var t=e.labelWidth,n=void 0===t?50:t,r=e.width,a=void 0===r?200:r,o=e.height,i=void 0===o?35:o,l=e.radiusStyle,c=e.hasRightRadius,u=void 0===c||c,s=e.hasLeftRadius,d=void 0===s||s,f=n,p=parseFloat(l),v=p+1.3,b=f+8,h=0,m=0,g=0,O=p;return u||(h+=p,g=2*p),d||(h+=p,m=2*p),(!d&&u||u&&d)&&(O=0),"M"+(v+4+b)+",0.5h"+(a-2*v-b-4+O)+((u?"a"+p+","+p+" 0 0 1 "+p+","+p:"")+"v"+(i-(2*v-(g+1.5)))+(u?"a"+p+","+p+" 0 0 1 "+-p+","+p:"")+"h"+(2*v-a-h)+(d?"a"+p+","+p+" 0 0 1 "+-p+","+-p:"")+"v"+(2*v-(m+1.5)-i)+(d?"a"+p+","+p+" 0 0 1 "+p+","+-p:""))+"h4"};function z(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function q(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,r=Object(f.b)(e);if(t){var a=Object(f.b)(this).constructor;n=Reflect.construct(r,arguments,a)}else n=r.apply(this,arguments);return Object(f.c)(this,n)}}var _=Object(u.a)("div")("labeled-outline",null,(function(e){return{"has-value":e.isOpen}})),B=Object(u.a)("label")("labeled-outline","label"),M=Object(u.a)("div")("labeled-outline","idle"),W=Object(u.a)("div")("labeled-outline","outline"),V=Object(u.a)("path")("labeled-outline","outline__path"),U=function(e){Object(f.a)(n,e);var t=q(n);function n(e){var r;return Object(f.d)(this,n),r=t.call(this,e),Object(s.a)(Object(f.e)(r),"resizeObserver",new N.ResizeObserver((function(){return r.updatePath()}))),Object(s.a)(Object(f.e)(r),"prevSizes",{}),r.wrapperRef=i.a.createRef(),r.outlinePathRef=i.a.createRef(),r.outlineIdleRef=i.a.createRef(),r.labelRef=i.a.createRef(),r.updatePath=r.updatePath.bind(Object(f.e)(r)),r}return Object(f.f)(n,[{key:"componentDidMount",value:function(){this.resizeObserver.observe(this.wrapperRef.current)}},{key:"componentDidUpdate",value:function(){(function(e,t){var n=e.width,r=e.height,a=e.labelWidth;return n!==t.width||(r!==t.height||a!==t.labelWidth)})(this.sizes,this.prevSizes)&&this.updatePath()}},{key:"componentWillUnmount",value:function(){this.resizeObserver.unobserve(this.wrapperRef.current)}},{key:"getValue",value:function(e){var t=this.props.valueAccessor;return t?t(e):e&&e.target?e.target.value:e}},{key:"updatePath",value:function(){var e=I(this.sizes);this.prevSizes=this.sizes,this.outlinePathRef.current.setAttribute("d",e)}},{key:"render",value:function(){var e=this.props,t=e.ariaLabel,n=e.hasError,r=e.readOnly,a=e.disabled,o=e.inputComponent,l=e.labelText,c=e.onBlur,u=e.onFocus,f=e.innerRef,p=e.extraInputProps,v=e.required,b=e.value,h=e.onChange,m=e.mask,g=e.useSubfix,O=e.optional,y=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?z(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):z(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({ariaLabel:t,className:"floating-label-input-controller",disabled:a,hasError:n,onBlur:c,onChange:h,onFocus:u,readOnly:r,value:b,innerRef:f,mask:m,useSubfix:g},p),E=Object(d.a)(o,y),j=this.isOpened;return i.a.createElement(_,{classProps:{hasError:n,isOpen:j,readOnly:r,disabled:a},innerRef:this.wrapperRef,onBlur:function(){return null},onFocus:function(){return null},onMouseOut:this.handleMouseOut,onMouseOver:this.handleMouseOver},E,i.a.createElement(B,{classProps:{isOpen:j},innerRef:this.labelRef},i.a.createElement(D,{maxWidth:"100%",text:l}),i.a.createElement(C.a,{optional:O,required:v})),i.a.createElement(W,null,i.a.createElement("svg",null,i.a.createElement(V,{innerRef:this.outlinePathRef}))),i.a.createElement(M,{innerRef:this.outlineIdleRef}))}},{key:"sizes",get:function(){var e=this.labelRef.current,t=this.wrapperRef.current,n=this.outlineIdleRef.current,r=window.getComputedStyle(n),a=r.getPropertyValue("border-top-left-radius"),o=r.getPropertyValue("border-top-right-radius"),i=0!==parseFloat(a),l=0!==parseFloat(o);return{labelWidth:.9*e.offsetWidth,width:t.offsetWidth,height:t.offsetHeight,radiusStyle:a,hasLeftRadius:i,hasRightRadius:l}}},{key:"isOpened",get:function(){var e=this.props,t=e.focused,n=e.isOpen,r=e.value;return t||(Array.isArray(r)?!!r.length:!!r)||n}}]),n}(o.Component);Object(s.a)(U,"defaultProps",{onChange:function(){return null}});var H=U,K=function(){},Z=function(e){e.containerProps;var t=e.arialLabel,n=void 0===t?"":t,r=e.innerRef,a=void 0===r?K:r,o=e.className,l=void 0===o?"":o,c=e.extraInputProps,u=void 0===c?{}:c,s=e.inputComponent,d=void 0===s?k.a:s,f=e.value,p=void 0===f?"":f,v=e.labelComponent,b=void 0===v?S:v,h=e.labelText,m=void 0===h?null:h,g=e.onChange,O=void 0===g?K:g,y=e.onBlur,E=void 0===y?K:y,j=e.onFocus,x=void 0===j?K:j,P=e.isOpen,w=void 0!==P&&P,R=e.hasError,C=void 0!==R&&R,T=e.readOnly,$=void 0!==T&&T,N=e.disabled,L=void 0!==N&&N,F=e.required,A=void 0!==F&&F,D=e.optional,I=void 0!==D&&D,z=e.mask,q=void 0===z?null:z,_=e.useSubfix,B=void 0===_?"":_;return i.a.createElement(H,{arialLabel:n,className:l,disabled:L,extraInputProps:u,hasError:C,innerRef:a,inputComponent:d,isOpen:w,labelComponent:b,labelText:m,mask:q,onBlur:E,onChange:O,onFocus:x,optional:I,readOnly:$,required:A,useSubfix:B,value:p})},G=Object(u.a)("span")("form-item","feedback"),J=function(e){var t=e.text,n=e.hasError;return t?i.a.createElement(G,{classProps:n},t):null},Q=n(16),X=Q.default.div.withConfig({componentId:"sed5xr-0"})(["height:2.16rem;align-items:center;display:flex;",""],(function(e){return e.label&&!e.withFeedback?"\n      padding-top: 1.2rem;\n      ":e.label||e.withFeedback?void 0:"\n      padding-top: 1rem;\n      "})),Y=Q.default.div.withConfig({componentId:"sed5xr-1"})(["padding-right:0.32rem;flex:1;"]),ee=Q.default.div.withConfig({componentId:"sed5xr-2"})(["display:flex;align-items:center;"]),te=n(262);function ne(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function re(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ne(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ne(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var ae=Object(u.a)("div")("form-item",null,(function(e){var t=e.leftLabel,n=e.variant;return Object(s.a)({"with-left-label":t},n,n)})),oe=Object(u.a)("div")("".concat("form-item","-content")),ie="variant-default",le="variant-focus",ce="variant-active",ue="variant-disabled",se="variant-read-only",de="variant-optional",fe=function(e){var t=e.leftLabel,n=void 0!==t&&t,o=e.floatingLabel,l=void 0!==o&&o,c=e.name,u=e.id,s=e.value,f=e.inputComponent,p=void 0===f?k.a:f,v=e.labelComponent,b=void 0===v?S:v,h=e.feedbackComponent,m=void 0===h?J:h,g=e.labelText,y=e.truncateText,E=e.hasError,j=void 0!==E&&E,x=e.validationState,P=e.validationMessage,R=void 0===P?"":P,C=e.feedbackMessage,T=void 0===C?"":C,$=e.readOnly,N=e.focused,L=void 0!==N&&N,F=e.type,A=e.autoFocus,D=void 0===A?function(){}:A,I=e.disabled,z=void 0!==I&&I,q=e.onChange,_=void 0===q?function(){}:q,B=e.onBlur,M=void 0===B?function(){}:B,W=e.onFocus,V=void 0===W?function(){}:W,U=e.onPaste,H=void 0===U?function(){}:U,K=e.onKeyUp,G=void 0===K?function(){}:K,Q=e.extraInputProps,te=void 0===Q?{}:Q,ne=e.extraContent,le=e.leftAddon,ce=void 0===le?null:le,ue=e.rightAddon,se=void 0===ue?null:ue,de=e.required,fe=void 0!==de&&de,pe=e.optional,ve=void 0!==pe&&pe,be=e.mask,he=e.useSubfix,me=void 0===he?"":he,ge=e.suffix,Oe=void 0===ge?"":ge,ye=e.variant,Ee=void 0===ye?ie:ye,je=e.containerProps,xe=void 0===je?{}:je,Pe=Object(a.a)(e,["leftLabel","floatingLabel","name","id","value","inputComponent","labelComponent","feedbackComponent","labelText","truncateText","hasError","validationState","validationMessage","feedbackMessage","readOnly","focused","type","autoFocus","disabled","onChange","onBlur","onFocus","onPaste","onKeyUp","extraInputProps","extraContent","leftAddon","rightAddon","required","optional","mask","useSubfix","suffix","variant","containerProps"]),we=p.type===i.a.createElement(w,null).type,Re="UNSAFE"===l,Ce=re(re({},te),{},{disabled:z,hasError:j||"error"===x,id:u,name:c,type:F,autofocus:D,onBlur:M,onChange:_,onFocus:V,onPaste:H,onKeyUp:G,readOnly:$,value:s,mask:be,useSubfix:me,variant:Ee,required:fe},Pe),Te=function(e){return ce||se?i.a.createElement(O,{leftAddon:ce,rightAddon:se,variant:Ee},e):e},$e=i.a.createElement(Z,Object(r.a)({},Ce,{extraInputProps:te,focused:L,inputComponent:p,labelComponent:b,labelText:g,optional:ve,required:fe,variant:Ee})),Se=Re?Te($e):i.a.createElement(i.a.Fragment,null,i.a.createElement(b,{htmlFor:u||c,label:g,optional:ve,required:fe,isGroup:we,truncateText:y}),Te(Object(d.a)(p,Ce)));return Oe?i.a.createElement(ae,Object(r.a)({classProps:{disabled:z,readOnly:$,hasError:j,leftLabel:n,variant:Ee}},xe),i.a.createElement(ee,{className:"suffix-wrapper"},i.a.createElement(Y,{className:"suffix-input-wrapper"},i.a.createElement(oe,null,Se,ne),i.a.createElement(m,{hasError:j,text:x||j?R:T})),i.a.createElement(X,{className:"suffix-label",label:!!g,withFeedback:Boolean(R||T)},Oe))):i.a.createElement(ae,Object(r.a)({classProps:{disabled:z,readOnly:$,hasError:j,leftLabel:n,variant:Ee}},xe),i.a.createElement(oe,null,Se,ne),i.a.createElement(m,{hasError:j,text:x||j?R:T}))};fe.propTypes={containerProps:c.a.shape({}),leftLabel:c.a.bool,floatingLabel:c.a.bool,name:c.a.string,value:c.a.oneOfType([c.a.string,c.a.number,c.a.object]),inputComponent:c.a.element,labelComponent:c.a.element,feedbackComponent:c.a.node,labelText:c.a.oneOfType([c.a.string,c.a.element]),hasError:c.a.bool,validationState:c.a.oneOf(["success","error","warning"]),validationMessage:c.a.string,feedbackMessage:c.a.string,readOnly:c.a.bool,focused:c.a.bool,type:c.a.string,autoFocus:c.a.func,disabled:c.a.bool,onChange:c.a.func,onBlur:c.a.func,extraInputProps:c.a.element,extraContent:c.a.element,leftAddon:c.a.element,rightAddon:c.a.element,required:c.a.bool,optional:c.a.bool,mask:c.a.oneOfType([c.a.oneOf(te.b),c.a.string]),useSubfix:c.a.string,suffix:c.a.string,variant:c.a.oneOf([ie,le,ce,ue,se,de])};t.a=fe}}]);
//# sourceMappingURL=21.ba93307d.chunk.js.map