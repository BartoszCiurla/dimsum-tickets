(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[31,39],{102:function(e,a,t){"use strict";t.r(a),a.default=[{id:"4548a528-a0b2-4ee5-8fb3-94628e3320a6",name:"Test123 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[{id:"4548a528-a0b2-4e44-8fb3-94628e3320a6",name:"Child 1 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]},{id:"0ba3e4bb-bce5-4c33-aafc-2f79670ac3b6",name:"Child 2 (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}]},{id:"0ba3e4bb-bce5-4c3c-aafc-2f79670ac3b6",name:"Test (1)",type:"task",parent:"fd28f6e5-d055-4ed8-b3f1-a4c2473876a4",children:[]}]},128:function(e,a,t){"use strict";t.r(a);var c=t(70),n=t(0),l=t.n(n),r=t(174),i=t(172),d=t(71),s=t(72),b=t(102);a.default=function(){var e=Object(n.useState)(b.default),a=Object(c.a)(e,2),t=a[0],f=a[1],o=Object(n.useRef)(null),u=Object(n.useState)(""),p=Object(c.a)(u,2),h=p[0],m=p[1],k=Object(n.useState)(!1),O=Object(c.a)(k,2),g=O[0],j=O[1];return l.a.createElement(r.a,{key:g,data:t,fluid:!0,groupIcon:l.a.createElement(d.a,null),instanceRef:o,itemIcon:l.a.createElement(s.a,null),onOrderChange:f,onItemClick:function(e){var a;o.current.actions.select(e),h!==e.id?(a=!0,m(e.id)):o.current.state.selection[e.id]?(j(!g),console.log("Some clear selection logic here")):a=!0,a&&console.log("Some selection logic here")},plugins:[i.a],showChildrenAmount:!0,sortable:!0})}}}]);
//# sourceMappingURL=31.f26c5102.chunk.js.map