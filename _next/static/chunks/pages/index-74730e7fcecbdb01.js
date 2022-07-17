(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8738:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(6147)}])},5263:function(e,t,n){"use strict";function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},o=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),o.forEach((function(t){r(e,t,n[t])}))}return e}t.default=function(e,t){var n=i.default,r={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};a=e,l=Promise,(null!=l&&"undefined"!==typeof Symbol&&l[Symbol.hasInstance]?l[Symbol.hasInstance](a):a instanceof l)?r.loader=function(){return e}:"function"===typeof e?r.loader=e:"object"===typeof e&&(r=o({},r,e));var a,l;var s=r=o({},r,t);if(s.suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");if(s.suspense)return n(s);r.loadableGenerated&&delete(r=o({},r,r.loadableGenerated)).loadableGenerated;if("boolean"===typeof r.ssr){if(!r.ssr)return delete r.ssr,u(n,r);delete r.ssr}return n(r)};a(n(2784));var i=a(n(5933));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,t){return delete t.webpack,delete t.modules,e(t)}},4798:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(2784))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},5933:function(e,t,n){"use strict";function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),r.forEach((function(t){o(e,t,n[t])}))}return e}Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a,u=(a=n(2784))&&a.__esModule?a:{default:a},l=n(1219),s=n(4798);var c=[],f=[],d=!1;function _(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var p=function(){function e(t,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}var t,n,o;return t=e,(n=[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;if(t.loading){if("number"===typeof n.delay)if(0===n.delay)this._state.pastDelay=!0;else{var r=this;this._delay=setTimeout((function(){r._update({pastDelay:!0})}),n.delay)}if("number"===typeof n.timeout){var o=this;this._timeout=setTimeout((function(){o._update({timedOut:!0})}),n.timeout)}}this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}])&&r(t.prototype,n),o&&r(t,o),e}();function h(e){return function(e,t){var n=function(){if(!o){var t=new p(e,r);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},r=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);r.suspense&&(r.lazy=u.default.lazy(r.loader));var o=null;if(!d&&!r.suspense){var a=r.webpack?r.webpack():r.modules;a&&f.push((function(e){var t=!0,r=!1,o=void 0;try{for(var i,u=a[Symbol.iterator]();!(t=(i=u.next()).done);t=!0){var l=i.value;if(-1!==e.indexOf(l))return n()}}catch(s){r=!0,o=s}finally{try{t||null==u.return||u.return()}finally{if(r)throw o}}}))}var c=r.suspense?function(e,t){return u.default.createElement(r.lazy,i({},e,{ref:t}))}:function(e,t){n();var i=u.default.useContext(s.LoadableContext),a=l.useSubscription(o);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),i&&Array.isArray(r.modules)&&r.modules.forEach((function(e){i(e)})),u.default.useMemo((function(){return a.loading||a.error?u.default.createElement(r.loading,{isLoading:a.loading,pastDelay:a.pastDelay,timedOut:a.timedOut,error:a.error,retry:o.retry}):a.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(a.loaded),e):null}),[e,a])};return c.preload=function(){return!r.suspense&&n()},c.displayName="LoadableComponent",u.default.forwardRef(c)}(_,e)}function b(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return b(e,t)}))}h.preloadAll=function(){return new Promise((function(e,t){b(c).then(e,t)}))},h.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};b(f,e).then(n,n)}))},window.__NEXT_PRELOADREADY=h.preloadReady;var m=h;t.default=m},6147:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSG:function(){return c},default:function(){return f}});var r=n(2322),o=n(7729),i=(n(2784),n(2556)),a=n.n(i),u=n(5237);var l=(0,u.default)((function(){return Promise.all([n.e(764),n.e(404)]).then(n.bind(n,1404))}),{loadableGenerated:{webpack:function(){return[1404]}},ssr:!1}),s=(0,u.default)((function(){return Promise.all([n.e(764),n.e(295)]).then(n.bind(n,1295))}),{loadableGenerated:{webpack:function(){return[1295]}},ssr:!1}),c=!0;function f(e){e=null!==e?e:function(e){throw e}(new TypeError("Cannot destructure undefined"));return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(o.default,{children:[(0,r.jsx)("title",{children:"Next.js"}),(0,r.jsx)("meta",{name:"description",content:"Generated by create next app"}),(0,r.jsx)("link",{rel:"icon",href:"/favicon.ico"})]}),(0,r.jsx)("div",{className:a().container,children:(0,r.jsxs)("main",{className:a().main,children:[(0,r.jsx)("h1",{className:a().title,children:"CPR 2022"}),(0,r.jsx)(s,{}),(0,r.jsx)(l,{})]})})]})}},2556:function(e){e.exports={container:"Home_container__bCOhY",main:"Home_main__nLjiQ",title:"Home_title__T09hD",description:"Home_description__41Owk",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",logo:"Home_logo__27_tb",highlighted:"Home_highlighted___vCVR",capitulo:"Home_capitulo__bFQ32",articulo:"Home_articulo__McYYd Home_card___LpL1",inciso:"Home_inciso__H49Bg",path:"Home_path__e6vfU",articuloHighlighted:"Home_articuloHighlighted__aUJb3 Home_articulo__McYYd Home_card___LpL1 Home_highlighted___vCVR",incisoHighlighted:"Home_incisoHighlighted__LnqTz Home_inciso__H49Bg Home_highlighted___vCVR"}},1219:function(e,t,n){(()=>{"use strict";var t={800:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function o(e){if(null===e||void 0===e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(t).map((function(e){return t[e]}));if("0123456789"!==r.join(""))return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach((function(e){o[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},o)).join("")}catch(e){return!1}}()?Object.assign:function(e,i){for(var a,u,l=o(e),s=1;s<arguments.length;s++){for(var c in a=Object(arguments[s]))n.call(a,c)&&(l[c]=a[c]);if(t){u=t(a);for(var f=0;f<u.length;f++)r.call(a,u[f])&&(l[u[f]]=a[u[f]])}}return l}},569:(e,t,n)=>{0},403:(e,t,n)=>{var r=n(800),o=n(522);t.useSubscription=function(e){var t=e.getCurrentValue,n=e.subscribe,i=o.useState((function(){return{getCurrentValue:t,subscribe:n,value:t()}}));e=i[0];var a=i[1];return i=e.value,e.getCurrentValue===t&&e.subscribe===n||(i=t(),a({getCurrentValue:t,subscribe:n,value:i})),o.useDebugValue(i),o.useEffect((function(){function e(){if(!o){var e=t();a((function(o){return o.getCurrentValue!==t||o.subscribe!==n||o.value===e?o:r({},o,{value:e})}))}}var o=!1,i=n(e);return e(),function(){o=!0,i()}}),[t,n]),i}},138:(e,t,n)=>{e.exports=n(403)},522:e=>{e.exports=n(2784)}},r={};function o(e){var n=r[e];if(void 0!==n)return n.exports;var i=r[e]={exports:{}},a=!0;try{t[e](i,i.exports,o),a=!1}finally{a&&delete r[e]}return i.exports}o.ab="//";var i=o(138);e.exports=i})()},5237:function(e,t,n){e.exports=n(5263)},7729:function(e,t,n){e.exports=n(7016)}},function(e){e.O(0,[774,888,179],(function(){return t=8738,e(e.s=t);var t}));var t=e.O();_N_E=t}]);