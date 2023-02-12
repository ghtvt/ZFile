!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",u=i.asyncIterator||"@@asyncIterator",c=i.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(k){f=function(t,e,r){return t[e]=r}}function l(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,i=Object.create(o.prototype),a=new T(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return j()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=L(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=s(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(k){return{type:"throw",arg:k}}}r.wrap=l;var d={};function p(){}function v(){}function h(){}var y={};f(y,a,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(_([])));g&&g!==n&&o.call(g,a)&&(y=g);var w=h.prototype=p.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function E(e,r){function n(i,a,u,c){var f=s(e[i],e,a);if("throw"!==f.type){var l=f.arg,d=l.value;return d&&"object"==t(d)&&o.call(d,"__await")?r.resolve(d.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(d).then((function(t){l.value=t,u(l)}),(function(t){return n("throw",t,u,c)}))}c(f.arg)}var i;this._invoke=function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return i=i?i.then(o,o):o()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return d;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return d}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,d;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function x(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function T(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(x,this),this.reset(!0)}function _(t){if(t){var e=t[a];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:j}}function j(){return{value:void 0,done:!0}}return v.prototype=h,f(w,"constructor",h),f(h,"constructor",v),v.displayName=f(h,c,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===v||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,f(t,c,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},b(E.prototype),f(E.prototype,u,(function(){return this})),r.AsyncIterator=E,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new E(l(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),f(w,c,"Generator"),f(w,a,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},r.values=_,T.prototype={constructor:T,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:_(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},r}function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(f){return void r(f)}u.done?e(c):Promise.resolve(c).then(n,o)}function n(t){return function(){var e=this,n=arguments;return new Promise((function(o,i){var a=t.apply(e,n);function u(t){r(a,o,i,u,c,"next",t)}function c(t){r(a,o,i,u,c,"throw",t)}u(void 0)}))}}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null==r)return;var n,o,i=[],a=!0,u=!1;try{for(r=r.call(t);!(a=(n=r.next()).done)&&(i.push(n.value),!e||i.length!==e);a=!0);}catch(c){u=!0,o=c}finally{try{a||null==r.return||r.return()}finally{if(u)throw o}}return i}(t,e)||u(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function i(t){return function(t){if(Array.isArray(t))return c(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||u(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(t,e){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=u(t))||e&&t&&"number"==typeof t.length){r&&(t=r);var n=0,o=function(){};return{s:o,n:function(){return n>=t.length?{done:!0}:{done:!1,value:t[n++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==r.return||r.return()}finally{if(c)throw i}}}}function u(t,e){if(t){if("string"==typeof t)return c(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?c(t,e):void 0}}function c(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}System.register(["./base-legacy.300d11a2.js","./index-legacy.5c2a5b9a.js"],(function(t){"use strict";var r,u,c,f,l,s,d,p,v,h,y,m,g,w;return{setters:[function(t){r=t.A,u=t.O,c=t.k,f=t._},function(t){l=t.o,s=t.H,d=t.d,p=t.r,v=t.v,h=t.w,y=t.u,m=t.Z,g=t.m,w=t.g}],execute:function(){var b=[],E=function(t){for(var e=[],r=document.createTreeWalker(t,NodeFilter.SHOW_ELEMENT,{acceptNode:function(t){var e="INPUT"===t.tagName&&"hidden"===t.type;return t.disabled||t.hidden||e?NodeFilter.FILTER_SKIP:t.tabIndex>=0||t===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});r.nextNode();)e.push(r.currentNode);return e},L=function(t,e){var r,n=a(t);try{for(n.s();!(r=n.n()).done;){var o=r.value;if(!x(o,e))return o}}catch(i){n.e(i)}finally{n.f()}},x=function(t,e){if("hidden"===getComputedStyle(t).visibility)return!0;for(;t;){if(e&&t===e)return!1;if("none"===getComputedStyle(t).display)return!0;t=t.parentElement}return!1},S=function(t,e){if(t&&t.focus){var r=document.activeElement;t.focus({preventScroll:!0}),t!==r&&function(t){return t instanceof HTMLInputElement&&"select"in t}(t)&&e&&t.select()}};function T(t,e){var r=i(t),n=t.indexOf(e);return-1!==n&&r.splice(n,1),r}var _,j=function(t){var e,r=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=document.activeElement,o=a(t);try{for(o.s();!(e=o.n()).done;){var i=e.value;if(S(i,r),document.activeElement!==n)return}}catch(u){o.e(u)}finally{o.f()}},k=(_=[],{push:function(t){var e=_[0];e&&t!==e&&e.pause(),(_=T(_,t)).unshift(t)},remove:function(t){var e,r;null==(r=null==(e=(_=T(_,t))[0])?void 0:e.resume)||r.call(e)}}),O="focus-trap.focus-after-trapped",A="focus-trap.focus-after-released",I={cancelable:!0,bubbles:!1},N="focusAfterTrapped",F="focusAfterReleased",P=t("F",Symbol("elFocusTrap")),K=d({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[N,F,"focusin","focusout","focusout-prevented","release-requested"],setup:function(t,i){var a,f,d,w,x=i.emit,T=p();d=function(e){t.trapped&&!_.paused&&x("release-requested",e)},w=function(t){var e=t;e.key===u.esc&&b.forEach((function(t){return t(e)}))},l((function(){0===b.length&&document.addEventListener("keydown",w),r&&b.push(d)})),s((function(){0===(b=b.filter((function(t){return t!==d}))).length&&r&&document.removeEventListener("keydown",w)}));var _={paused:!1,pause:function(){this.paused=!0},resume:function(){this.paused=!1}},K=function(e){if((t.loop||t.trapped)&&!_.paused){var r=e.key,n=e.altKey,i=e.ctrlKey,a=e.metaKey,c=e.currentTarget,f=e.shiftKey,l=t.loop,s=r===u.tab&&!n&&!i&&!a,d=document.activeElement;if(s&&d){var p=c,v=function(t){var e=E(t);return[L(e,t),L(e.reverse(),t)]}(p),h=o(v,2),y=h[0],m=h[1];y&&m?f||d!==m?f&&[y,p].includes(d)&&(e.preventDefault(),l&&S(m,!0),x("focusout-prevented")):(e.preventDefault(),l&&S(y,!0),x("focusout-prevented")):d===p&&(e.preventDefault(),x("focusout-prevented"))}}};v(P,{focusTrapRef:T,onKeydown:K}),h((function(){return t.focusTrapEl}),(function(t){t&&(T.value=t)}),{immediate:!0}),h([T],(function(t,e){var r=o(t,1)[0],n=o(e,1)[0];r&&(r.addEventListener("keydown",K),r.addEventListener("focusin",R),r.addEventListener("focusout",D)),n&&(n.removeEventListener("keydown",K),n.removeEventListener("focusin",R),n.removeEventListener("focusout",D))}));var G=function(t){x(N,t)},C=function(t){return x(F,t)},R=function(e){var r=y(T);if(r){var n=e.target,o=n&&r.contains(n);o&&x("focusin",e),_.paused||t.trapped&&(o?f=n:S(f,!0))}},D=function(e){var r=y(T);if(!_.paused&&r)if(t.trapped){var n=e.relatedTarget;c(n)||r.contains(n)||setTimeout((function(){!_.paused&&t.trapped&&S(f,!0)}),0)}else{var o=e.target;o&&r.contains(o)||x("focusout",e)}};function H(){return M.apply(this,arguments)}function M(){return(M=n(e().mark((function r(){var n,o,i;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m();case 2:(n=y(T))&&(k.push(_),o=document.activeElement,a=o,n.contains(o)||(i=new Event(O,I),n.addEventListener(O,G),n.dispatchEvent(i),i.defaultPrevented||m((function(){var e=t.focusStartEl;g(e)||(S(e),document.activeElement!==e&&(e="first")),"first"===e&&j(E(n),!0),document.activeElement!==o&&"container"!==e||S(n)}))));case 4:case"end":return e.stop()}}),r)})))).apply(this,arguments)}function q(){var t=y(T);if(t){t.removeEventListener(O,G);var e=new Event(A,I);t.addEventListener(A,C),t.dispatchEvent(e),e.defaultPrevented||S(null!=a?a:document.body,!0),t.removeEventListener(A,G),k.remove(_)}}return l((function(){t.trapped&&H(),h((function(){return t.trapped}),(function(t){t?H():q()}))})),s((function(){t.trapped&&q()})),{onKeydown:K}}});t("E",f(K,[["render",function(t,e,r,n,o,i){return w(t.$slots,"default",{handleKeydown:t.onKeydown})}],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]))}}}))}();
