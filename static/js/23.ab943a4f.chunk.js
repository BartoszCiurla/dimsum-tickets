(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[23,38,49,50],{118:function(e,t,n){"use strict";n.r(t),n.d(t,"evalParent",(function(){return a})),n.d(t,"selectedItemsMapper",(function(){return i}));var r=n(15),c=n.n(r),a=function e(t){var n=t.hash,r=t.selectedItems,c=t.acc,a=t.parentId,i=t.mixed,u=void 0!==i&&i,o=n[a];c.parents.push(o);var s=r.filter((function(e){return e.parent===a}));if(s=s.concat(c.parents.filter((function(e){return e.parent===a}))),o.children.length>0){var l=u;if(o.children.length!==s.length||u?(c.items[a]="mixed",l=!0):c.items[a]=!0,o.parent&&!c.items[o.parent])return e({hash:n,selectedItems:r,acc:c,parentId:o.parent,mixed:l})}return c},i=function(e,t){return function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return!0},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:c()(e,"current.state.selection",{}),a=Object.keys(r).reduce((function(e,c){if("all"===c||!r[c])return e;var a=t[c];return a&&n(a)?(e.push(a),e):e}),[]);return a}}},119:function(e,t,n){"use strict";n.r(t),n.d(t,"randomEntity",(function(){return a})),n.d(t,"randomEntities",(function(){return i}));var r=n(2),c=n(199),a=function(e){var t=Object(c.a)(),n=Object(r.random)(0,4)<1,a=n?i(Object(r.random)(0,5),t):void 0;return{id:t,name:"".concat(Object(r.random)(0,1)>0?"John Doe":"Jon Snow"," ").concat(t),type:n?"group":"single",parent:e,children:a}},i=function(e,t){return new Array(e).fill(0).map((function(){return a(t)}))}},120:function(e,t,n){"use strict";n.r(t),n.d(t,"useTreeInitialSelectionState",(function(){return u}));var r=n(1),c=n(78),a=n(0),i=n(118),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=Object(a.useState)({}),u=Object(c.a)(n,2),o=u[0],s=u[1];return Object(a.useEffect)((function(){var n={},c=Array.isArray(t)?t:[t];c.length&&(n=c.reduce((function(t,n){return t.items=Object(r.a)(Object(r.a)({},t.items),{},{[n.id]:!0}),n.parent&&!t.items[n.parent]?Object(i.evalParent)({hash:e,selectedItems:c,acc:t,parentId:n.parent}):t}),{items:[],parents:[]})),s(n.items)}),[e,t]),o}},144:function(e,t,n){"use strict";n.r(t);var r=n(78),c=n(0),a=n.n(c),i=n(198),u=n(200),o=n(80),s=n(81),l=n(120),f=n(119),d=Object(f.randomEntities)(50),p=function(e){console.log(111,e)};t.default=function(){var e=Object(c.useState)(d),t=Object(r.a)(e,1)[0],n=Object(l.useTreeInitialSelectionState)(d,[d[40]]),f=Object(c.useRef)(null);return Object(c.useEffect)((function(){!function(){var e=f.current.actions.toggleExpandAll;console.log("REF",f.current),e&&e()}()}),[]),a.a.createElement(i.a,{data:t,fluid:!0,instanceRef:f,groupIcon:a.a.createElement(o.a,null),isMultiSelect:!0,itemIcon:a.a.createElement(s.a,null),selection:n,onItemClick:p,plugins:[u.a]})}}}]);
//# sourceMappingURL=23.ab943a4f.chunk.js.map