(this.webpackJsonpreact=this.webpackJsonpreact||[]).push([[27],{131:function(e,t,n){"use strict";function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function c(e,t){return(c=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e){return(i=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function a(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}function u(e){return(u="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e,t){return!t||"object"!==u(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}n.r(t),n.d(t,"default",(function(){return h}));var s=n(0),f=n.n(s),d=n(606),h=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&c(e,t)}(b,e);var t,n,u,s,h=(t=b,function(){var e,n=i(t);if(a()){var o=i(this).constructor;e=Reflect.construct(n,arguments,o)}else e=n.apply(this,arguments);return l(this,e)});function b(){var e;o(this,b);for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return(e=h.call.apply(h,[this].concat(n))).state={isChecked:!0},e}return n=b,(u=[{key:"handleChange",value:function(e){var t=e.target.checked;this.setState({isChecked:t})}},{key:"render",value:function(){var e=this.state.isChecked;return f.a.createElement("div",null,f.a.createElement(d.a,{checked:e,containerProps:{id:"my-custom-id"},onChange:this.handleChange,value:"myVal"}),f.a.createElement("h3",null,e?"TRUE":"FALSE"))}}])&&r(n.prototype,u),s&&r(n,s),b}(s.Component)},194:function(e,t,n){"use strict";function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}n.d(t,"a",(function(){return o}))},207:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return f})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return r})),n.d(t,"e",(function(){return a})),n.d(t,"f",(function(){return i}));var o=n(194);function r(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function i(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function a(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function u(e,t){return(u=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function l(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&u(e,t)}function s(e,t){return!t||"object"!==Object(o.a)(t)&&"function"!==typeof t?a(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}},606:function(e,t,n){"use strict";var o=n(9),r=n(17),c=n(0),i=n.n(c),a=n(2),u=n.n(a),l=n(8),s=n(16),f=n(207),d=function(){return{startPoint:null,isDragging:!1}},h=function(e){return function(t){var n=t.circleWidth,o=t.boxWidth;return e?{drag:o-n}:{drag:0}}},b=n(31);function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var O=function(e){var t,n=e.containerProps,r=e.id,c=e.className,a=void 0===c?"":c,u=e.style,l=void 0===u?{}:u,s=e.hasError,f=void 0!==s&&s,d=e.readOnly,h=void 0!==d&&d,p=e.disabled,O=void 0!==p&&p,y=e.checked,g=void 0!==y&&y,j=e.onBlur,m=void 0===j?function(){return null}:j,k=e.onFocus,E=void 0===k?function(){return null}:k,S=e.onChange,w=void 0===S?function(){return null}:S,P=e.onMouseDown,D=void 0===P?function(){return null}:P,C=e.onMouseEnter,M=void 0===C?function(){return null}:C,T=e.onMouseLeave,x=void 0===T?function(){return null}:T,R=e.onTouchCancel,W=void 0===R?function(){return null}:R,_=e.onTouchEnd,F=void 0===_?function(){return null}:_,N=e.onTouchMove,L=void 0===N?function(){return null}:N,z=e.onTouchStart,B=void 0===z?function(){return null}:z,X=e.labelOn,U=void 0===X?"ON":X,I=e.labelOff,V=void 0===I?"OFF":I,A=e.dragStyle,J=void 0===A?{}:A,K=e.containerRef,q=void 0===K?null:K,G=e.handRef,H=void 0===G?null:G,Q=e.name,Y=void 0===Q?"":Q,Z=e.value,$=void 0===Z?"":Z,ee=e.size,te=void 0===ee?"s":ee,ne=Object(b.b)("form-element-toggle",a,{hasError:f,readOnly:h,disabled:O,checked:g,id:r,size:te}),oe=ne.cssClassName,re=ne.classNameBlock,ce=ne.classNameElement,ie=O||h;return i.a.createElement("div",Object(o.a)({},n,{"data-testid":"em-ds-toggle","aria-disabled":O,defaultChecked:g,defaultValue:$},{role:"button",tabIndex:"0",onClick:t=ie?null:w,onKeyPress:function(e){e.stopPropagation();var n=e.keycode;("Enter"===e.key||13===n)&&t(e)}},{ref:q,className:oe,onBlur:m,onFocus:E}),i.a.createElement("div",{className:re("box")},g&&i.a.createElement("div",{className:ce("icon-on")},U),!g&&i.a.createElement("div",{className:ce("icon-off")},V)),i.a.createElement("div",{ref:H,"aria-checked":g,"aria-disabled":O,className:ce("input"),onMouseDown:ie?null:D,onMouseEnter:ie?null:M,onMouseLeave:ie?null:x,onTouchCancel:ie?null:W,onTouchEnd:ie?null:F,onTouchMove:ie?null:L,onTouchStart:ie?null:B,style:v(v({},l),J)}),i.a.createElement("input",{className:ce("hidden-checkbox"),defaultChecked:g,defaultValue:$,name:Y,type:"checkbox"}))};function y(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?y(Object(n),!0).forEach((function(t){Object(s.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):y(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function j(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=Object(f.b)(e);if(t){var r=Object(f.b)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return Object(f.c)(this,n)}}var m=function(e){Object(f.a)(n,e);var t=j(n);function n(e){var o;return Object(f.d)(this,n),o=t.call(this,e),Object(s.a)(Object(f.e)(o),"onDragStart",(function(e){var t=o.state,n=t.startPoint,r=t.checked,c=function(e,t){var n=t.startPoint,o=t.checked,r=t.isDragging,c=t.boxWidth,i=t.circleWidth;if(!r)return null;var a=n-e,u=o?c-i-a:e-n;return!o&&e>0&&e>n&&u<.7*c||o&&e>0&&e<n&&a<.7*c?u:null}(e,{startPoint:n,checked:r,isDragging:t.isDragging,boxWidth:t.boxWidth,circleWidth:t.circleWidth});c?o.setState({drag:c}):o.setDragOnChange(r)})),Object(s.a)(Object(f.e)(o),"onDragStop",(function(e){var t=o.state.checked;!function(e){var t=e.inside,n=e.circleWidth,o=e.drag,r=e.checked,c=e.boxWidth;return r?!t&&-o>(c-n)/2:!t&&o>c/3}(o.state)?o.setDragOnChange(t):(o.onChange(e),o.setState(d))})),Object(s.a)(Object(f.e)(o),"onBlur",(function(e){var t=o.props,n=t.onBlur,r=t.id;n&&n(e,r)})),Object(s.a)(Object(f.e)(o),"onFocus",(function(e){var t=o.props,n=t.onFocus,r=t.id;n&&n(e,r)})),Object(s.a)(Object(f.e)(o),"onChange",(function(e){var t=o.state.checked,n=o.props,r=n.onChange,c=n.id,i=n.value,a=!t;o.setState({checked:a}),e.target.value=i,e.target.checked=a,e.checked=a,r(e,c),o.setDragOnChange(a)})),Object(s.a)(Object(f.e)(o),"onMouseEnter",(function(){o.setState({inside:!0})})),Object(s.a)(Object(f.e)(o),"onMouseLeave",(function(){o.setState({inside:!1})})),Object(s.a)(Object(f.e)(o),"onMouseMove",(function(e){e.preventDefault(),o.onDragStart(e.clientX)})),Object(s.a)(Object(f.e)(o),"onMouseDown",(function(e){o.onDragStart(e.clientX),o.setState({startPoint:e.clientX,isDragging:!0}),window.addEventListener("mousemove",o.onMouseMove),window.addEventListener("mouseup",o.onMouseUp)})),Object(s.a)(Object(f.e)(o),"onMouseUp",(function(e){o.onDragStop(e),window.removeEventListener("mousemove",o.onMouseMove),window.removeEventListener("mouseup",o.onMouseUp)})),Object(s.a)(Object(f.e)(o),"onTouchCancel",(function(){o.setState({inside:!1})})),Object(s.a)(Object(f.e)(o),"onTouchEnd",(function(e){e.preventDefault(),o.onDragStop(e)})),Object(s.a)(Object(f.e)(o),"onTouchMove",(function(e){o.onDragStart(e.touches[0].clientX)})),Object(s.a)(Object(f.e)(o),"onTouchStart",(function(e){o.onDragStart(e.touches[0].clientX),o.setState({startPoint:e.touches[0].clientX,isDragging:!0})})),o.state=g({checked:e.checked||!1,inside:!1,isDragging:!1,drag:null,startPoint:null,circleWidth:null,boxWidth:null},h(e.checked||!1)),o.circle=i.a.createRef(),o.box=i.a.createRef(),o}return Object(f.f)(n,[{key:"componentDidMount",value:function(){this.verifyElements()}},{key:"componentDidUpdate",value:function(e,t,n){n&&this.verifyElements()}},{key:"getSnapshotBeforeUpdate",value:function(e){var t=this.props.size;return e.size!==t}},{key:"setDragOnChange",value:function(e){this.setState(h(e))}},{key:"verifyElements",value:function(){var e=this,t=this.state.checked,n=this.props.checked,o=setInterval((function(){if(e.circle&&e.box&&e.circle.current&&e.box.current){var r=e.circle.current.clientWidth,c=e.box.current.clientWidth;r&&c&&r!==c&&(e.setState({boxWidth:c,circleWidth:r}),e.setDragOnChange(null!=n?n:t),clearInterval(o))}}),100)}},{key:"render",value:function(){var e=this.state,t=e.checked,n=e.drag,r=e.inside,c=null!==n?{transform:"translateX(".concat(n,"px)")}:null;return i.a.createElement(O,Object(o.a)({},this.props,{checked:t,containerRef:this.box,dragStyle:c,handRef:this.circle,inside:r,onBlur:this.onBlur,onChange:this.onChange,onFocus:this.onFocus,onMouseDown:this.onMouseDown,onMouseEnter:this.onMouseEnter,onMouseLeave:this.onMouseLeave,onTouchCancel:this.onTouchCancel,onTouchEnd:this.onTouchEnd,onTouchMove:this.onTouchMove,onTouchStart:this.onTouchStart}))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return null!=e.checked?g({checked:e.checked},h(e.checked)(t)):null}}]),n}(c.Component),k=function(e){var t=e.containerProps,n=void 0===t?{}:t,c=e.hasError,a=void 0!==c&&c,u=e.readOnly,l=void 0!==u&&u,s=e.disabled,f=void 0!==s&&s,d=e.checked,h=void 0===d?void 0:d,b=e.labelOn,p=void 0===b?"ON":b,v=e.labelOff,O=void 0===v?"OFF":v,y=e.name,g=void 0===y?"":y,j=e.value,k=void 0===j?"":j,E=e.size,S=void 0===E?"s":E,w=Object(r.a)(e,["containerProps","hasError","readOnly","disabled","checked","labelOn","labelOff","name","value","size"]);return i.a.createElement(m,Object(o.a)({},w,{checked:h,containerProps:n,disabled:f,hasError:a,labelOff:O,labelOn:p,name:g,readOnly:l,size:S,value:k}))};k.propTypes={containerProps:u.a.shape({}),hasError:u.a.bool,readOnly:u.a.bool,disabled:u.a.bool,checked:u.a.bool,onChange:u.a.func,labelOn:u.a.string,labelOff:u.a.string,value:u.a.string,size:u.a.oneOf(l.h)};t.a=k}}]);
//# sourceMappingURL=27.7d0c02c5.chunk.js.map