(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[119],{1890:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/compartir/[fragmentoId]",function(){return r(6726)}])},5805:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(237).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var r=a.default,u={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};n(e,Promise)?u.loader=function(){return e}:"function"===typeof e?u.loader=e:"object"===typeof e&&(u=o({},u,e));!1;(u=o({},u,t)).loadableGenerated&&delete(u=o({},u,u.loadableGenerated)).loadableGenerated;if("boolean"===typeof u.ssr&&!u.suspense){if(!u.ssr)return delete u.ssr,i(r,u);delete u.ssr}return r(u)},t.noSSR=i;u(r(2784));var a=u(r(2060));function o(){return o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(this,arguments)}function u(e){return e&&e.__esModule?e:{default:e}}function i(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6941:function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var a=((n=r(2784))&&n.__esModule?n:{default:n}).default.createContext(null);t.LoadableContext=a},2060:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(616).Z,a=r(416).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=r(2784))&&o.__esModule?o:{default:o},i=r(6941);function l(){return l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(this,arguments)}var s=r(2784).useSyncExternalStore,c=[],d=[],f=!1;function p(e){var t=e(),r={loading:!0,loaded:null,error:null};return r.promise=t.then((function(e){return r.loading=!1,r.loaded=e,e})).catch((function(e){throw r.loading=!1,r.error=e,e})),r}var y=function(){function e(t,r){n(this,e),this._loadFn=t,this._opts=r,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return a(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,r=this._opts;t.loading&&("number"===typeof r.delay&&(0===r.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),r.delay)),"number"===typeof r.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),r.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=l({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function _(e){return function(e,t){var r=function(){if(!o){var t=new y(e,a);o={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return o.promise()},n=function(){r();var e=u.default.useContext(i.LoadableContext);e&&Array.isArray(a.modules)&&a.modules.forEach((function(t){e(t)}))},a=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);a.suspense&&(a.lazy=u.default.lazy(a.loader));var o=null;if(!f){var c=a.webpack?a.webpack():a.modules;c&&d.push((function(e){var t=!0,n=!1,a=void 0;try{for(var o,u=c[Symbol.iterator]();!(t=(o=u.next()).done);t=!0){var i=o.value;if(-1!==e.indexOf(i))return r()}}catch(l){n=!0,a=l}finally{try{t||null==u.return||u.return()}finally{if(n)throw a}}}))}var p=a.suspense?function(e,t){return n(),u.default.createElement(a.lazy,l({},e,{ref:t}))}:function(e,t){n();var r=s(o.subscribe,o.getCurrentValue,o.getCurrentValue);return u.default.useImperativeHandle(t,(function(){return{retry:o.retry}}),[]),u.default.useMemo((function(){return r.loading||r.error?u.default.createElement(a.loading,{isLoading:r.loading,pastDelay:r.pastDelay,timedOut:r.timedOut,error:r.error,retry:o.retry}):r.loaded?u.default.createElement(function(e){return e&&e.__esModule?e.default:e}(r.loaded),e):null}),[e,r])};return p.preload=function(){return r()},p.displayName="LoadableComponent",u.default.forwardRef(p)}(p,e)}function v(e,t){for(var r=[];e.length;){var n=e.pop();r.push(n(t))}return Promise.all(r).then((function(){if(e.length)return v(e,t)}))}_.preloadAll=function(){return new Promise((function(e,t){v(c).then(e,t)}))},_.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var r=function(){return f=!0,t()};v(d,e).then(r,r)}))},window.__NEXT_PRELOADREADY=_.preloadReady;var h=_;t.default=h},6726:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return c},default:function(){return d}});var n=r(2322),a=r(5237),o=r.n(a),u=r(5632),i=r(6068),l=r(9916),s=o()((function(){return r.e(466).then(r.bind(r,1466))}),{loadableGenerated:{webpack:function(){return[1466]}},ssr:!1}),c=!0;function d(){var e,t,r=(0,u.useRouter)().query.fragmentoId;if(!r||(e=r,null!=(t=Array)&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?t[Symbol.hasInstance](e):e instanceof t))return null;var a=function(e){var t=(0,l.Cs)(e);if(t&&"articulo"in t)return function(e){var t="".concat((0,l.Lv)(e.articulo)," / ").concat((0,l.TM)(e)),r="Sobre ".concat(e.articulo.data.sobre),n=(0,l.og)(e.articulo);return{title:t,description:r,fragmentoIdFull:n}}(t);if(t&&"transitoria"in t)return function(e){var t=(0,l.Lv)(e.transitoria),r=(0,l.ZQ)(e.transitoria.data.sobre),n=(0,l.og)(e.transitoria);return{title:t,description:r,fragmentoIdFull:n}}(t);throw new Error("Can't handle fragmentoId ".concat(e))}(r),o=a.title,c=a.description,d=a.fragmentoIdFull;return(0,n.jsxs)("div",{className:"grid justify-center",children:[(0,n.jsx)(i.Z,{title:o,description:c,image:"https://cpr2022.cl/images/fragmentos/".concat(r,".png?").concat((new Date).getTime()),type:"article"}),(0,n.jsx)(s,{fragmentoId:d})]})}},5237:function(e,t,r){e.exports=r(5805)},630:function(e,t,r){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}r.d(t,{Z:function(){return n}})},3579:function(e,t,r){"use strict";function n(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}r.d(t,{Z:function(){return n}})},930:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(630);var a=r(3579);var o=r(5459);function u(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||(0,a.Z)(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},5459:function(e,t,r){"use strict";r.d(t,{Z:function(){return a}});var n=r(630);function a(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?(0,n.Z)(e,t):void 0}}}},function(e){e.O(0,[488,774,888,179],(function(){return t=1890,e(e.s=t);var t}));var t=e.O();_N_E=t}]);