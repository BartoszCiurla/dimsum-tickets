(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[30,64],{112:function(e,n,t){"use strict";t.r(n),t.d(n,"randomEntity",(function(){return o})),t.d(n,"randomEntities",(function(){return c})),t.d(n,"randomEntityNoChildren",(function(){return i})),t.d(n,"randomEntitiesNoChildren",(function(){return u})),t.d(n,"randomEntityMoreGroup",(function(){return l})),t.d(n,"randomEntitiesMoreGroups",(function(){return d}));var r=t(1),a=t(354),o=function(e){var n=Object(a.a)(),t=Object(r.random)(0,4)<1,o=t?c(Object(r.random)(0,5),n):void 0;return{id:n,name:"".concat(Object(r.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(n),type:t?"group":"single",parent:e,children:o}},c=function(e,n){return new Array(e).fill(0).map((function(){return o(n)}))},i=function(){var e=Object(a.a)(),n=Object(r.random)(0,4)<2,t=n?c(Object(r.random)(0,2),e):void 0;return Object(r.random)(0,4)<2&&(t=[]),{id:e,name:"".concat(Object(r.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(e),type:n?"group":"single",children:t,isGroup:n}},u=function(e){return new Array(e).fill(0).map((function(){return i()}))},l=function(){var e=Object(a.a)(),n=Object(r.random)(0,4)<3,t=n?c(Object(r.random)(0,2),e):void 0;return Object(r.random)(0,4)<2&&(t=[]),{id:e,name:"".concat(Object(r.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(e),type:n?"group":"single",children:t,isGroup:n}},d=function(e){return new Array(e).fill(0).map((function(){return l()}))}},120:function(e,n,t){"use strict";t.r(n),t.d(n,"TreeToolbar",(function(){return l}));var r=t(0),a=t.n(r),o=t(487),c=t(517),i=t(210),u=t(219),l=function(e){var n=e.searchQuery,t=e.setSearchQuery,r=e.toggleExpandAll;return a.a.createElement(a.a.Fragment,null,a.a.createElement(c.a,{withDepth:!1},r&&a.a.createElement(u.a,{buttonType:"secondary",labelText:"Toggle Expand",onClick:r}),a.a.createElement(o.a,{clearable:!0,containerProps:{"data-testid":"tree-searchbox"},onSearch:function(e){var n=e.value;return t(n)},placeholder:"Search all",searchOnEnter:!1,value:n})),a.a.createElement(i.a,{margin:"none",orientation:"horizontal",type:"non-form"}))}},121:function(e,n,t){"use strict";t.r(n),t.d(n,"TreeContainer",(function(){return o}));var r=t(26);function a(){var e=Object(r.a)(["\n  height: calc(100% - ","px);\n"]);return a=function(){return e},e}var o=t(16).default.div(a(),(function(e){return e.offsetHeight||80}))},129:function(e,n,t){"use strict";t.r(n);var r=t(81),a=t(0),o=t.n(a),c=t(211),i=t(212),u=t(848),l=t(82),d=t(83),s=t(120),m=t(112),f=t(121),h=Object(m.randomEntitiesMoreGroups)(100);n.default=function(){var e=Object(a.useRef)(null),n=Object(a.useState)(""),t=Object(r.a)(n,2),m=t[0],p=t[1],b=function(){return e.current.actions.toggleExpandAll()};return Object(a.useEffect)((function(){return b(),function(){}}),[]),o.a.createElement(f.TreeContainer,{offsetHeight:48},o.a.createElement("div",{style:{height:"100%"}},o.a.createElement(s.TreeToolbar,{searchQuery:m,setSearchQuery:p,toggleExpandAll:b}),o.a.createElement(c.a,{data:h,fluid:!0,groupIcon:o.a.createElement(l.a,null),instanceRef:e,isMultiSelect:!0,itemIcon:o.a.createElement(d.a,null),plugins:[i.a,u.a],searchQuery:m,showChildrenAmount:!0})))}},159:function(e,n,t){"use strict";t.r(n);var r=t(81),a=t(0),o=t.n(a),c=t(129),i=t(850),u=t(508),l=t(219);n.default=function(){var e=Object(a.useState)(!1),n=Object(r.a)(e,2),t=n[0],d=n[1],s=function(){return d(!t)};return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{style:{padding:"2rem 0"}},o.a.createElement(l.a,{labelText:"Toggle Modal",onClick:s})),o.a.createElement(i.a,{isOpen:t,modalTitle:"Demo Modal with TreeView",modalType:u.b.DECISION,onClose:s,onConfirm:s,onReject:s,shouldCloseOnOverlayClick:!0,size:"large",version:2},o.a.createElement("div",{style:{height:"400px"}},o.a.createElement(c.default,null))))}}}]);
//# sourceMappingURL=30.2d128941.chunk.js.map