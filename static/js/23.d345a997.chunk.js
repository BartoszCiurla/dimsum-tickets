(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[23,55,63,64],{112:function(e,n,r){"use strict";r.r(n),r.d(n,"randomEntity",(function(){return o})),r.d(n,"randomEntities",(function(){return c})),r.d(n,"randomEntityNoChildren",(function(){return i})),r.d(n,"randomEntitiesNoChildren",(function(){return u})),r.d(n,"randomEntityMoreGroup",(function(){return l})),r.d(n,"randomEntitiesMoreGroups",(function(){return s}));var t=r(1),a=r(354),o=function(e){var n=Object(a.a)(),r=Object(t.random)(0,4)<1,o=r?c(Object(t.random)(0,5),n):void 0;return{id:n,name:"".concat(Object(t.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(n),type:r?"group":"single",parent:e,children:o}},c=function(e,n){return new Array(e).fill(0).map((function(){return o(n)}))},i=function(){var e=Object(a.a)(),n=Object(t.random)(0,4)<2,r=n?c(Object(t.random)(0,2),e):void 0;return Object(t.random)(0,4)<2&&(r=[]),{id:e,name:"".concat(Object(t.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(e),type:n?"group":"single",children:r,isGroup:n}},u=function(e){return new Array(e).fill(0).map((function(){return i()}))},l=function(){var e=Object(a.a)(),n=Object(t.random)(0,4)<3,r=n?c(Object(t.random)(0,2),e):void 0;return Object(t.random)(0,4)<2&&(r=[]),{id:e,name:"".concat(Object(t.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(e),type:n?"group":"single",children:r,isGroup:n}},s=function(e){return new Array(e).fill(0).map((function(){return l()}))}},120:function(e,n,r){"use strict";r.r(n),r.d(n,"TreeToolbar",(function(){return l}));var t=r(0),a=r.n(t),o=r(487),c=r(517),i=r(210),u=r(219),l=function(e){var n=e.searchQuery,r=e.setSearchQuery,t=e.toggleExpandAll;return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{withDepth:!1},t&&a.a.createElement(u.a,{buttonType:"secondary",labelText:"Toggle Expand",onClick:t}),a.a.createElement(o.a,{clearable:!0,containerProps:{"data-testid":"tree-searchbox"},onSearch:function(e){var n=e.value;return r(n)},placeholder:"Search all",searchOnEnter:!1,value:n})),a.a.createElement(i.a,{margin:"none",orientation:"horizontal",type:"non-form"}))}},121:function(e,n,r){"use strict";r.r(n),r.d(n,"TreeContainer",(function(){return o}));var t=r(26);function a(){var e=Object(t.a)(["\n  height: calc(100% - ","px);\n"]);return a=function(){return e},e}var o=r(16).default.div(a(),(function(e){return e.offsetHeight||80}))},130:function(e,n,r){"use strict";r.r(n),r.d(n,"useTreeProps",(function(){return o}));var t=r(81),a=r(0),o=function(){var e=Object(a.useState)(!1),n=Object(t.a)(e,2),r=n[0],o=n[1];return{disableGroups:r,toggleDisableGroups:function(){return o(!r)}}}},165:function(e,n,r){"use strict";r.r(n);var t=r(81),a=r(0),o=r.n(a),c=r(211),i=r(212),u=r(848),l=r(82),s=r(83),d=r(222),f=r(120),p=r(121),h=r(112),b=r(130),m=Object(h.randomEntitiesNoChildren)(1e3),v=function(e){console.log(111,e)};n.default=function(){var e=Object(a.useState)(""),n=Object(t.a)(e,2),r=n[0],h=n[1],y=Object(b.useTreeProps)(),g=y.disableGroups,O=y.toggleDisableGroups,E=Object(a.useRef)(null);return Object(a.useEffect)((function(){!function(){var e=E.current.actions.toggleExpandAll;console.log("REF",E.current),e&&e()}()}),[]),o.a.createElement(p.TreeContainer,null,o.a.createElement(d.a,{checked:g,labelText:"Disable Groups",onChange:O}),o.a.createElement(f.TreeToolbar,{searchQuery:r,setSearchQuery:h}),o.a.createElement(c.a,{data:m,fluid:!0,instanceRef:E,groupIcon:o.a.createElement(l.a,null),isSingleSelect:!0,itemIcon:o.a.createElement(s.a,null),disableGroups:g,onItemClick:v,plugins:[i.a,u.a],searchQuery:r,showChildrenAmount:!0}))}},354:function(e,n,r){"use strict";var t="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!==typeof msCrypto&&"function"===typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),a=new Uint8Array(16);function o(){if(!t)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return t(a)}var c=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var i=function(e){return"string"===typeof e&&c.test(e)},u=[],l=0;l<256;++l)u.push((l+256).toString(16).substr(1));var s=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=(u[e[n+0]]+u[e[n+1]]+u[e[n+2]]+u[e[n+3]]+"-"+u[e[n+4]]+u[e[n+5]]+"-"+u[e[n+6]]+u[e[n+7]]+"-"+u[e[n+8]]+u[e[n+9]]+"-"+u[e[n+10]]+u[e[n+11]]+u[e[n+12]]+u[e[n+13]]+u[e[n+14]]+u[e[n+15]]).toLowerCase();if(!i(r))throw TypeError("Stringified UUID is invalid");return r};n.a=function(e,n,r){var t=(e=e||{}).random||(e.rng||o)();if(t[6]=15&t[6]|64,t[8]=63&t[8]|128,n){r=r||0;for(var a=0;a<16;++a)n[r+a]=t[a];return n}return s(t)}},487:function(e,n,r){"use strict";r(2),r(6);var t=r(0),a=r.n(t),o=r(3),c=r.n(o),i=(r(4),r(33),r(34),r(7),r(73),r(74),r(30),r(219)),u=r(512),l=r(259),s=r(263);var d=Object(s.a)((function(e){var n=e.containerProps,r=e.placeholder,t=e.className,o=e.disabled,c=e.disableButton,s=e.innerRef,d=e.showIcon,f=e.style,p=e.onChange,h=e.onKeyUp,b=e.onSearch,m=e.readOnly,v=e.value,y=e.clearable;return a.a.createElement(u.a,{className:t,clearable:y,containerProps:n,disabled:o,innerRef:s,onChange:p,onKeyUp:h,placeholder:r,readOnly:m,rightComponent:d&&a.a.createElement(i.a,{disabled:o||c,buttonType:"text",icon:a.a.createElement(l.a,null),iconSize:"s",onClick:b}),style:f,value:v})})),f=function(e){var n=e.containerProps,r=void 0===n?{}:n,t=e.innerRef,o=void 0===t?void 0:t,c=e.className,i=void 0===c?"":c,u=e.disabled,l=void 0!==u&&u,s=e.disableButton,f=void 0!==s&&s,p=e.searchIcon,h=void 0===p?"search":p,b=e.style,m=void 0===b?{}:b,v=e.property,y=void 0===v?"all":v,g=e.placeholder,O=void 0===g?"Search all":g,E=e.searchOnEnter,j=void 0===E||E,S=e.clearOnSearch,C=void 0!==S&&S,w=e.onKeyUp,T=void 0===w?function(){return null}:w,R=e.onSearch,I=void 0===R?function(){return null}:R,G=e.onChange,x=void 0===G?function(){return null}:G,D=e.readOnly,J=void 0!==D&&D,N=e.value,P=void 0===N?void 0:N,U=e.showIcon,A=void 0===U||U;return a.a.createElement(d,{className:i,clearOnSearch:C,containerProps:r,disabled:l,disableButton:f,innerRef:o,onKeyUp:T,onSearch:I,onChange:x,placeholder:O,property:y,readOnly:J,searchIcon:h,searchOnEnter:j,showIcon:A,style:m,value:P})};f.propTypes={containerProps:c.a.shape({}),className:c.a.string,innerRef:c.a.any,searchIcon:c.a.string,style:c.a.objectOf(c.a.string),property:c.a.string,placeholder:c.a.string,searchOnEnter:c.a.bool,clearOnSearch:c.a.bool,onKeyUp:c.a.func,onSearch:c.a.func,onChange:c.a.func,value:c.a.oneOfType([c.a.string,c.a.number,c.a.object]),showIcon:c.a.bool,disabled:c.a.bool,disableButton:c.a.bool,readOnly:c.a.bool};n.a=f}}]);
//# sourceMappingURL=23.d345a997.chunk.js.map