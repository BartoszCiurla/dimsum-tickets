(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[38,50,63],{124:function(e,t,n){"use strict";n.r(t);var o=n(0),c=n.n(o),a=n(512),r=n(2);t.default=function(e){var t=e.customHandlers.onToggle,n=void 0===t?function(){}:t,i=e.metaData.rowData,u=e.entityType,l=void 0===u?"workflow-rule":u,s=e.activeField,d=void 0===s?"active":s,h=i.id,f=Object(r.get)(i,d),b={"data-testid":"".concat(l,"-").concat(d,"-toggle"),["data-".concat(l,"Id")]:h,containerProps:{"data-testid":"".concat(l,"-").concat(d,"-toggle-container")}},v=Object(o.useCallback)((function(e){e.stopPropagation(),n(i)}),[n,i]);return c.a.createElement(a.a,Object.assign({},b,{checked:f,onChange:v}))}},134:function(e,t,n){"use strict";n.r(t),n.d(t,"CommentsCellHeader",(function(){return l}));var o=n(0),c=n.n(o),a=n(229),r=(n(3),n(6),n(23)),i=Object(r.a)({paths:["M18 3c.552.001.999.448 1 1v10c-.001.552-.448.999-1 1H9l-.267.2L5 17.994V15H2a1.0016 1.0016 0 0 1-1-1V4c.001-.552.448-.999 1-1h16zm0-1H2c-1.103.003-1.997.897-2 2v10c.003 1.103.897 1.997 2 2h2V17.995c0 .554.449 1.004 1.004 1.004h.003c.226 0 .434-.076.6-.204L9.333 16H18c1.103-.003 1.997-.897 2-2V4c-.003-1.103-.897-1.997-2-2z"],height:20,width:20}),u=n(2),l=function(){return c.a.createElement(i,null)};t.default=function(e){var t=e.customHandlers.onCommentsClick,n=void 0===t?function(){}:t,r=e.metaData.rowData,i=e.entityType,l=void 0===i?"workflow-rule":i,s=e.countField,d=void 0===s?"totalComments":s,h=r.id,f=Object(u.get)(r,d,"0"),b={"data-testid":"".concat(l,"-").concat(d,"-toggle"),["data-".concat(l,"Id")]:h,containerProps:{"data-testid":"".concat(l,"-").concat(d,"-toggle-container")}},v=Object(o.useCallback)((function(e){e.stopPropagation(),n(r)}),[n,r]);return c.a.createElement(a.a,Object.assign({},b,{color:function(e){return e.theme.colors.brand[500]},buttonType:"text",labelText:f,onClick:v,disabled:"0"===f}))}},146:function(e,t,n){"use strict";n.r(t);var o=n(7),c=n(0),a=n.n(c),r=n(134),i=n(124),u=n(2),l=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"label";return{property:Object(u.camelCase)(e),label:e,visible:!0,searchable:!0,sortable:!0,resizable:!0}};t.default=[Object(o.a)(Object(o.a)({},l("name")),{},{width:"19%"}),Object(o.a)(Object(o.a)({},l("event")),{},{width:"15%"}),Object(o.a)(Object(o.a)({},l("conditions")),{},{width:"19%"}),Object(o.a)(Object(o.a)({},l("result")),{},{width:"15%"}),Object(o.a)(Object(o.a)({},l("active")),{},{customRenderer:function(e){return a.a.createElement(i.default,Object.assign({},e,{entityType:"workflow-rules",activeField:"active"}))},width:64}),Object(o.a)(Object(o.a)({},l("comments")),{},{customRenderer:r.default,header:{formatters:[r.CommentsCellHeader]},headerStyle:{justifyContent:"center"},cellStyle:{justifyContent:"center"},width:"4%"}),Object(o.a)(Object(o.a)({},l("modified date")),{},{width:"14%"})]},512:function(e,t,n){"use strict";var o=n(3),c=n(6),a=n(0),r=n.n(a),i=n(1),u=n.n(i),l=n(4),s=n(33),d=n(34),h=n(8),f=n(73),b=n(74),v=n(29),O=n(11),p={containerProps:u.a.shape({}),hasError:u.a.bool,readOnly:u.a.bool,disabled:u.a.bool,checked:u.a.bool,onChange:u.a.func,labelOn:u.a.string,labelOff:u.a.string,value:u.a.string,size:u.a.oneOf(O.h),name:u.a.string},g=function(){return{startPoint:null,isDragging:!1}},j=function(e){return function(t){var n=t.circleWidth,o=t.boxWidth;return e?{drag:o-n}:{drag:0}}},m=n(50),y=function(e){return{role:"button",tabIndex:"0",onClick:e,onKeyPress:function(t){t.stopPropagation();var n=t.keycode;("Enter"===t.key||13===n)&&e(t)}}};function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function D(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=function(e){var t=e.containerProps,n=e.id,c=e.className,a=void 0===c?"":c,i=e.style,u=void 0===i?{}:i,l=e.hasError,s=void 0!==l&&l,d=e.readOnly,h=void 0!==d&&d,f=e.disabled,b=void 0!==f&&f,v=e.checked,O=void 0!==v&&v,p=e.onBlur,g=void 0===p?function(){return null}:p,j=e.onFocus,k=void 0===j?function(){return null}:j,w=e.onChange,E=void 0===w?function(){return null}:w,C=e.onMouseDown,P=void 0===C?function(){return null}:C,S=e.onMouseEnter,M=void 0===S?function(){return null}:S,T=e.onMouseLeave,x=void 0===T?function(){return null}:T,W=e.onTouchCancel,F=void 0===W?function(){return null}:W,R=e.onTouchEnd,N=void 0===R?function(){return null}:R,z=e.onTouchMove,L=void 0===z?function(){return null}:z,B=e.onTouchStart,H=void 0===B?function(){return null}:B,I=e.labelOn,V=void 0===I?"ON":I,X=e.labelOff,U=void 0===X?"OFF":X,J=e.dragStyle,K=void 0===J?{}:J,q=e.containerRef,A=void 0===q?null:q,G=e.handRef,Q=void 0===G?null:G,Y=e.name,Z=void 0===Y?"":Y,$=e.value,_=void 0===$?"":$,ee=e.size,te=void 0===ee?"s":ee,ne=e.defaultState,oe=Object(m.b)("form-element-toggle",a,{hasError:s,readOnly:h,disabled:b,checked:O,id:n,size:te}),ce=oe.cssClassName,ae=oe.classNameBlock,re=oe.classNameElement,ie=b||h;return r.a.createElement("div",Object(o.a)({},t,{"data-testid":"em-ds-toggle","aria-disabled":b,defaultChecked:O,defaultValue:_},y(ie?null:E),{ref:A,className:"".concat(ce," ").concat(ne?"default-state-checked":""),onBlur:g,onFocus:k,"aria-checked":O,role:"checkbox",tabIndex:0}),r.a.createElement("div",{className:ae("box")},O&&r.a.createElement("div",{className:re("icon-on")},V),!O&&r.a.createElement("div",{className:re("icon-off")},U)),r.a.createElement("div",{ref:Q,"aria-checked":O,"aria-disabled":b,className:"".concat(re("input")," ").concat(ne?"default-state-checked":""),onMouseDown:ie?null:P,onMouseEnter:ie?null:M,onMouseLeave:ie?null:x,onTouchCancel:ie?null:F,onTouchEnd:ie?null:N,onTouchMove:ie?null:L,onTouchStart:ie?null:H,style:D(D({},u),K)}),r.a.createElement("input",{className:re("hidden-checkbox"),defaultChecked:O,defaultValue:_,name:Z,type:"checkbox"}))};function E(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function C(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?E(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function P(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(v.a)(e);if(t){var c=Object(v.a)(this).constructor;n=Reflect.construct(o,arguments,c)}else n=o.apply(this,arguments);return Object(b.a)(this,n)}}var S=function(e){Object(f.a)(n,e);var t=P(n);function n(e){var o;return Object(s.a)(this,n),o=t.call(this,e),Object(l.a)(Object(h.a)(o),"onDragStart",(function(e){var t=o.state,n=t.startPoint,c=t.checked,a=function(e,t){var n=t.startPoint,o=t.checked,c=t.isDragging,a=t.boxWidth,r=t.circleWidth;if(!c)return null;var i=n-e,u=o?a-r-i:e-n;return!o&&e>0&&e>n&&u<.7*a||o&&e>0&&e<n&&i<.7*a?u:null}(e,{startPoint:n,checked:c,isDragging:t.isDragging,boxWidth:t.boxWidth,circleWidth:t.circleWidth});a?o.setState({drag:a}):o.setDragOnChange(c)})),Object(l.a)(Object(h.a)(o),"onDragStop",(function(e){var t=o.state.checked;!function(e){var t=e.inside,n=e.circleWidth,o=e.drag,c=e.checked,a=e.boxWidth;return c?!t&&-o>(a-n)/2:!t&&o>a/3}(o.state)?o.setDragOnChange(t):(o.onChange(e),o.setState(g))})),Object(l.a)(Object(h.a)(o),"onBlur",(function(e){var t=o.props,n=t.onBlur,c=t.id;n&&n(e,c)})),Object(l.a)(Object(h.a)(o),"onFocus",(function(e){var t=o.props,n=t.onFocus,c=t.id;n&&n(e,c)})),Object(l.a)(Object(h.a)(o),"onChange",(function(e){var t=o.state.checked,n=o.props,c=n.onChange,a=n.id,r=n.value,i=!t;o.setState({checked:i}),e.target.value=r,e.target.checked=i,e.checked=i,c(e,a),o.setDragOnChange(i)})),Object(l.a)(Object(h.a)(o),"onMouseEnter",(function(){o.setState({inside:!0})})),Object(l.a)(Object(h.a)(o),"onMouseLeave",(function(){o.setState({inside:!1})})),Object(l.a)(Object(h.a)(o),"onMouseMove",(function(e){e.preventDefault(),o.onDragStart(e.clientX)})),Object(l.a)(Object(h.a)(o),"onMouseDown",(function(e){o.onDragStart(e.clientX),o.setState({startPoint:e.clientX,isDragging:!0}),window.addEventListener("mousemove",o.onMouseMove),window.addEventListener("mouseup",o.onMouseUp)})),Object(l.a)(Object(h.a)(o),"onMouseUp",(function(e){o.onDragStop(e),window.removeEventListener("mousemove",o.onMouseMove),window.removeEventListener("mouseup",o.onMouseUp)})),Object(l.a)(Object(h.a)(o),"onTouchCancel",(function(){o.setState({inside:!1})})),Object(l.a)(Object(h.a)(o),"onTouchEnd",(function(e){e.preventDefault(),o.onDragStop(e)})),Object(l.a)(Object(h.a)(o),"onTouchMove",(function(e){o.onDragStart(e.touches[0].clientX)})),Object(l.a)(Object(h.a)(o),"onTouchStart",(function(e){o.onDragStart(e.touches[0].clientX),o.setState({startPoint:e.touches[0].clientX,isDragging:!0})})),o.state=C({checked:e.checked||!1,inside:!1,isDragging:!1,drag:null,startPoint:null,circleWidth:null,boxWidth:null},j(e.checked||!1)),o.circle=r.a.createRef(),o.box=r.a.createRef(),o}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.verifyElements()}},{key:"componentDidUpdate",value:function(e,t,n){n&&this.verifyElements()}},{key:"getSnapshotBeforeUpdate",value:function(e){var t=this.props.size;return e.size!==t}},{key:"setDragOnChange",value:function(e){this.setState(j(e))}},{key:"verifyElements",value:function(){var e=this,t=this.state.checked,n=this.props.checked,o=setInterval((function(){if(e.circle&&e.box&&e.circle.current&&e.box.current){var c=e.circle.current.clientWidth,a=e.box.current.clientWidth;c&&a&&c!==a&&(e.setState({boxWidth:a,circleWidth:c}),e.setDragOnChange(null!=n?n:t),clearInterval(o))}}),5)}},{key:"render",value:function(){var e=this.state,t=e.checked,n=e.drag,c=e.inside,a=null!==n||t||this.props.checked?{left:"".concat(n,"px")}:null;return r.a.createElement(w,Object(o.a)({},this.props,{defaultState:this.props.checked,checked:t,containerRef:this.box,dragStyle:a,handRef:this.circle,inside:c,onBlur:this.onBlur,onChange:this.onChange,onFocus:this.onFocus,onMouseDown:this.onMouseDown,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onTouchCancel:this.onTouchCancel,onTouchEnd:this.onTouchEnd,onTouchMove:this.onTouchMove,onTouchStart:this.onTouchStart}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.checked?C({checked:e.checked},j(e.checked)(t)):null}}]),n}(a.Component);S.propTypes=p;var M=S,T=function(e){var t=e.containerProps,n=void 0===t?{}:t,a=e.hasError,i=void 0!==a&&a,u=e.readOnly,l=void 0!==u&&u,s=e.disabled,d=void 0!==s&&s,h=e.checked,f=void 0===h?void 0:h,b=e.labelOn,v=void 0===b?"ON":b,O=e.labelOff,p=void 0===O?"OFF":O,g=e.name,j=void 0===g?"":g,m=e.value,y=void 0===m?"":m,k=e.size,D=void 0===k?"s":k,w=Object(c.a)(e,["containerProps","hasError","readOnly","disabled","checked","labelOn","labelOff","name","value","size"]);return r.a.createElement(M,Object(o.a)({},w,{checked:f,containerProps:n,disabled:d,hasError:i,labelOff:p,labelOn:v,name:j,readOnly:l,size:D,value:y}))};T.propTypes=p;t.a=T}}]);
//# sourceMappingURL=38.8cda5b20.chunk.js.map