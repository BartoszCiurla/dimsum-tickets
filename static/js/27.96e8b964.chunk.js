(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[27,32,65,67],{112:function(e,n,t){"use strict";t.r(n),t.d(n,"randomEntity",(function(){return o})),t.d(n,"randomEntities",(function(){return i})),t.d(n,"randomEntityNoChildren",(function(){return c})),t.d(n,"randomEntitiesNoChildren",(function(){return u})),t.d(n,"randomEntityMoreGroup",(function(){return l})),t.d(n,"randomEntitiesMoreGroups",(function(){return d}));var r=t(1),a=t(222),o=function(e){var n=Object(a.a)(),t=Object(r.random)(0,4)<1,o=t?i(Object(r.random)(0,5),n):void 0;return{id:n,name:"".concat(Object(r.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(n),type:t?"group":"single",parent:e,children:o}},i=function(e,n){return new Array(e).fill(0).map((function(){return o(n)}))},c=function(){var e=Object(a.a)(),n=Object(r.random)(0,4)<2,t=n?i(Object(r.random)(0,2),e):void 0;return Object(r.random)(0,4)<2&&(t=[]),{id:e,name:"".concat(Object(r.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(e),type:n?"group":"single",children:t,isGroup:n}},u=function(e){return new Array(e).fill(0).map((function(){return c()}))},l=function(){var e=Object(a.a)(),n=Object(r.random)(0,4)<3,t=n?i(Object(r.random)(0,2),e):void 0;return Object(r.random)(0,4)<2&&(t=[]),{id:e,name:"".concat(Object(r.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(e),type:n?"group":"single",children:t,isGroup:n}},d=function(e){return new Array(e).fill(0).map((function(){return l()}))}},120:function(e,n,t){"use strict";t.r(n),t.d(n,"TreeToolbar",(function(){return l}));var r=t(0),a=t.n(r),o=t(487),i=t(499),c=t(212),u=t(221),l=function(e){var n=e.searchQuery,t=e.setSearchQuery,r=e.toggleExpandAll;return a.a.createElement(a.a.Fragment,null,a.a.createElement(i.a,{withDepth:!1},r&&a.a.createElement(u.a,{buttonType:"secondary",labelText:"Toggle Expand",onClick:r}),a.a.createElement(o.a,{clearable:!0,containerProps:{"data-testid":"tree-searchbox"},onSearch:function(e){var n=e.value;return t(n)},placeholder:"Search all",searchOnEnter:!1,value:n})),a.a.createElement(c.a,{margin:"none",orientation:"horizontal",type:"non-form"}))}},121:function(e,n,t){"use strict";t.r(n),t.d(n,"TreeContainer",(function(){return o}));var r=t(26);function a(){var e=Object(r.a)(["\n  height: calc(100% - ","px);\n"]);return a=function(){return e},e}var o=t(16).default.div(a(),(function(e){return e.offsetHeight||80}))},126:function(e,n,t){"use strict";t.r(n);var r=t(81),a=t(0),o=t.n(a),i=t(213),c=t(214),u=t(567),l=t(82),d=t(83),s=t(120),m=t(112),f=t(121),p=Object(m.randomEntitiesMoreGroups)(100);n.default=function(e){var n=Object(a.useRef)(null),t=Object(a.useState)(""),m=Object(r.a)(t,2),h=m[0],b=m[1],y=function(){return n.current.actions.toggleExpandAll()};return Object(a.useEffect)((function(){return y(),function(){}}),[]),o.a.createElement(f.TreeContainer,{offsetHeight:48},o.a.createElement("div",{style:{height:"100%"}},o.a.createElement(s.TreeToolbar,{searchQuery:h,setSearchQuery:b,toggleExpandAll:y}),o.a.createElement(i.a,Object.assign({data:p,fluid:!0,groupIcon:o.a.createElement(l.a,null),instanceRef:n,isMultiSelect:!0,itemIcon:o.a.createElement(d.a,null),plugins:[c.a,u.a],searchQuery:h,showChildrenAmount:!0},e))))}},130:function(e,n,t){"use strict";t.r(n);var r=t(81),a=t(0),o=t.n(a),i=t(126),c=t(851),u=t(510),l=t(221);n.default=function(e){var n=Object(a.useState)(!1),t=Object(r.a)(n,2),d=t[0],s=t[1],m=function(){return s(!d)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{padding:"2rem 0"}},o.a.createElement(l.a,{labelText:"Toggle Modal",onClick:m})),o.a.createElement(c.a,{isOpen:d,modalTitle:"Demo Modal with TreeView",modalType:u.b.DECISION,onClose:m,onConfirm:m,onReject:m,shouldCloseOnOverlayClick:!0,size:"large",version:2},o.a.createElement("div",{style:{height:"400px"}},o.a.createElement(i.default,e))))}},160:function(e,n,t){"use strict";t.r(n);var r=t(550),a=t(0),o=t.n(a),i=t(130),c=t(112),u=[{id:"1",name:"Initially Selected Group",type:"group",children:[{id:"2",name:"Element A",type:"group",children:[{id:"3",name:"First Child",type:"single",children:[]},{id:"4",name:"Second Child",type:"single",children:[]}],isGroup:!0},{id:"5",name:"Element B",type:"group",children:[{id:"6",name:"First Child",type:"single",children:[]},{id:"7",name:"Second Child",type:"single",children:[]}],isGroup:!0}],isGroup:!0}].concat(Object(r.a)(Object(c.randomEntitiesMoreGroups)(100))),l={1:"mixed",2:"mixed",3:!0,5:!0,6:!0,7:!0};n.default=function(){return o.a.createElement(i.default,{data:u,selection:l})}},550:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t(64);var a=t(86);function o(e){return function(e){if(Array.isArray(e))return Object(r.a)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||Object(a.a)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=27.96e8b964.chunk.js.map