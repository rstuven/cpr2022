(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[200],{2262:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/acerca-de",function(){return n(5756)}])},5805:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(237).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=o.default,a={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=i({},a,e));if((a=i({},a,t)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");a.loadableGenerated&&delete(a=i({},a,a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,u(n,a);delete a.ssr}return n(a)},t.noSSR=u;a(n(2784));var o=a(n(2060));function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6941:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(2784))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},2060:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(616).Z,o=n(416).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i,a=(i=n(2784))&&i.__esModule?i:{default:i},u=n(6941);function s(){return s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},s.apply(this,arguments)}var l=n(3100).useSyncExternalStore,c=[],d=[],f=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var m=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=s({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function y(e){return function(e,t){var n=function(){if(!i){var t=new m(e,o);i={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return i.promise()},r=function(){n();var e=a.default.useContext(u.LoadableContext);e&&Array.isArray(o.modules)&&o.modules.forEach((function(t){e(t)}))},o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);o.suspense&&(o.lazy=a.default.lazy(o.loader));var i=null;if(!f){var c=o.webpack?o.webpack():o.modules;c&&d.push((function(e){var t=!0,r=!1,o=void 0;try{for(var i,a=c[Symbol.iterator]();!(t=(i=a.next()).done);t=!0){var u=i.value;if(-1!==e.indexOf(u))return n()}}catch(s){r=!0,o=s}finally{try{t||null==a.return||a.return()}finally{if(r)throw o}}}))}var p=o.suspense?function(e,t){return r(),a.default.createElement(o.lazy,s({},e,{ref:t}))}:function(e,t){r();var n=l(i.subscribe,i.getCurrentValue,i.getCurrentValue);return a.default.useImperativeHandle(t,(function(){return{retry:i.retry}}),[]),a.default.useMemo((function(){return n.loading||n.error?a.default.createElement(o.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:i.retry}):n.loaded?a.default.createElement(function(e){return e&&e.__esModule?e.default:e}(n.loaded),e):null}),[e,n])};return p.preload=function(){return n()},p.displayName="LoadableComponent",a.default.forwardRef(p)}(p,e)}function _(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return _(e,t)}))}y.preloadAll=function(){return new Promise((function(e,t){_(c).then(e,t)}))},y.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return f=!0,t()};_(d,e).then(n,n)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var h=y;t.default=h},6068:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var r=n(2322),o=n(7729),i=n.n(o);function a(e){return(0,r.jsxs)(i(),{children:[e.title&&(0,r.jsx)("title",{children:e.title}),e.description&&(0,r.jsx)("meta",{name:"description",content:e.description}),e.title&&(0,r.jsx)("meta",{itemProp:"name",content:e.title}),e.description&&(0,r.jsx)("meta",{itemProp:"description",content:e.description}),e.image&&(0,r.jsx)("meta",{itemProp:"image",content:e.image}),(0,r.jsx)("meta",{name:"twitter:card",content:e.image?"summary_large_image":"summary"}),e.title&&(0,r.jsx)("meta",{name:"twitter:title",content:e.title}),e.description&&(0,r.jsx)("meta",{name:"twitter:description",content:e.description}),e.image&&(0,r.jsx)("meta",{name:"twitter:image",content:e.image}),(0,r.jsx)("meta",{property:"og:type",content:e.type||"website"}),e.title&&(0,r.jsx)("meta",{property:"og:title",content:e.title}),e.description&&(0,r.jsx)("meta",{property:"og:description",content:e.description}),e.image&&(0,r.jsx)("meta",{property:"og:image",content:e.image}),e.url&&(0,r.jsx)("meta",{property:"og:url",content:e.url}),e.locale&&(0,r.jsx)("meta",{property:"og:locale",content:e.locale})]})}},5756:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return d},default:function(){return f}});var r=n(8875),o=n(2322),i=n(5237),a=n.n(i),u=n(6068),s=n(7729),l=n.n(s),c=a()((function(){return Promise.all([n.e(445),n.e(169),n.e(726),n.e(196),n.e(215)]).then(n.bind(n,9215))}),{loadableGenerated:{webpack:function(){return[9215]}},ssr:!1}),d=!0;function f(e){e=null!==e?e:(0,r.Z)(new TypeError("Cannot destructure undefined"));return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(u.Z,{type:"book",title:"CPR Chile 2022",description:"Propuesta de Constituci\xf3n Pol\xedtica de la Rep\xfablica de Chile 2022",locale:"es_CL"}),(0,o.jsx)(l(),{}),(0,o.jsx)(c,{})]})}},5237:function(e,t,n){e.exports=n(5805)},7729:function(e,t,n){e.exports=n(5913)},452:function(e,t,n){"use strict";var r=n(2784);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},i=r.useState,a=r.useEffect,u=r.useLayoutEffect,s=r.useDebugValue;function l(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(r){return!0}}var c="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=i({inst:{value:n,getSnapshot:t}}),o=r[0].inst,c=r[1];return u((function(){o.value=n,o.getSnapshot=t,l(o)&&c({inst:o})}),[e,n,t]),a((function(){return l(o)&&c({inst:o}),e((function(){l(o)&&c({inst:o})}))}),[e]),s(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:c},3100:function(e,t,n){"use strict";e.exports=n(452)},8875:function(e,t,n){"use strict";function r(e){throw e}n.d(t,{Z:function(){return r}})}},function(e){e.O(0,[774,888,179],(function(){return t=2262,e(e.s=t);var t}));var t=e.O();_N_E=t}]);