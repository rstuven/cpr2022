(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[806],{5253:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDomainLocale=function(e,t,n,r){return!1};("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},162:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4566).Z;n(9178).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o,u=(o=n(2784))&&o.__esModule?o:{default:o},a=n(9918),l=n(4400),i=n(3220),s=n(4069),f=n(2030),c=n(5253),d=n(3952);var p="undefined"!==typeof u.default.useTransition,v={};function y(e,t,n,r){if(e&&a.isLocalURL(t)){e.prefetch(t,n,r).catch((function(e){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:e&&e.locale;v[t+"%"+n+(o?"%"+o:"")]=!0}}var h=u.default.forwardRef((function(e,t){var n,o=e.href,h=e.as,_=e.children,b=e.prefetch,m=e.passHref,g=e.replace,O=e.soft,x=e.shallow,M=e.scroll,C=e.locale,j=e.onClick,w=e.onMouseEnter,E=e.legacyBehavior,k=void 0===E?!0!==Boolean(!1):E,P=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["href","as","children","prefetch","passHref","replace","soft","shallow","scroll","locale","onClick","onMouseEnter","legacyBehavior"]);n=_,!k||"string"!==typeof n&&"number"!==typeof n||(n=u.default.createElement("a",null,n));var R=!1!==b,L=r(p?u.default.useTransition():[],2)[1],S=u.default.useContext(i.RouterContext),T=u.default.useContext(s.AppRouterContext);T&&(S=T);var A,D=u.default.useMemo((function(){var e=r(a.resolveHref(S,o,!0),2),t=e[0],n=e[1];return{href:t,as:h?a.resolveHref(S,h):n||t}}),[S,o,h]),I=D.href,N=D.as,V=u.default.useRef(I),Z=u.default.useRef(N);k&&(A=u.default.Children.only(n));var H=k?A&&"object"===typeof A&&A.ref:t,U=r(f.useIntersection({rootMargin:"200px"}),3),z=U[0],B=U[1],F=U[2],K=u.default.useCallback((function(e){Z.current===N&&V.current===I||(F(),Z.current=N,V.current=I),z(e),H&&("function"===typeof H?H(e):"object"===typeof H&&(H.current=e))}),[N,H,I,F,z]);u.default.useEffect((function(){var e=B&&R&&a.isLocalURL(I),t="undefined"!==typeof C?C:S&&S.locale,n=v[I+"%"+N+(t?"%"+t:"")];e&&!n&&y(S,I,N,{locale:t})}),[N,I,B,C,R,S]);var G={ref:K,onClick:function(e){k||"function"!==typeof j||j(e),k&&A.props&&"function"===typeof A.props.onClick&&A.props.onClick(e),e.defaultPrevented||function(e,t,n,r,o,u,l,i,s,f){if("A"!==e.currentTarget.nodeName.toUpperCase()||!function(e){var t=e.currentTarget.target;return t&&"_self"!==t||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&a.isLocalURL(n)){e.preventDefault();var c=function(){"softPush"in t&&"softReplace"in t?t[u?o?"softReplace":"softPush":o?"replace":"push"](n):t[o?"replace":"push"](n,r,{shallow:l,locale:s,scroll:i})};f?f(c):c()}}(e,S,I,N,g,O,x,M,C,T?L:void 0)},onMouseEnter:function(e){k||"function"!==typeof w||w(e),k&&A.props&&"function"===typeof A.props.onMouseEnter&&A.props.onMouseEnter(e),a.isLocalURL(I)&&y(S,I,N,{priority:!0})}};if(!k||m||"a"===A.type&&!("href"in A.props)){var q="undefined"!==typeof C?C:S&&S.locale,X=S&&S.isLocaleDomain&&c.getDomainLocale(N,q,S.locales,S.domainLocales);G.href=X||d.addBasePath(l.addLocale(N,q,S&&S.defaultLocale))}return k?u.default.cloneElement(A,G):u.default.createElement("a",Object.assign({},P,G),n)}));t.default=h,("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},2030:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(4566).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.useIntersection=function(e){var t=e.rootRef,n=e.rootMargin,s=e.disabled||!a,f=o.useRef(),c=r(o.useState(!1),2),d=c[0],p=c[1],v=r(o.useState(null),2),y=v[0],h=v[1];o.useEffect((function(){if(a){if(f.current&&(f.current(),f.current=void 0),s||d)return;return y&&y.tagName&&(f.current=function(e,t,n){var r=function(e){var t,n={root:e.root||null,margin:e.rootMargin||""},r=i.find((function(e){return e.root===n.root&&e.margin===n.margin}));if(r&&(t=l.get(r)))return t;var o=new Map,u=new IntersectionObserver((function(e){e.forEach((function(e){var t=o.get(e.target),n=e.isIntersecting||e.intersectionRatio>0;t&&n&&t(n)}))}),e);return t={id:n,observer:u,elements:o},i.push(n),l.set(n,t),t}(n),o=r.id,u=r.observer,a=r.elements;return a.set(e,t),u.observe(e),function(){if(a.delete(e),u.unobserve(e),0===a.size){u.disconnect(),l.delete(o);var t=i.findIndex((function(e){return e.root===o.root&&e.margin===o.margin}));t>-1&&i.splice(t,1)}}}(y,(function(e){return e&&p(e)}),{root:null==t?void 0:t.current,rootMargin:n})),function(){null==f.current||f.current(),f.current=void 0}}if(!d){var e=u.requestIdleCallback((function(){return p(!0)}));return function(){return u.cancelIdleCallback(e)}}}),[y,s,n,t,d]);var _=o.useCallback((function(){p(!1)}),[]);return[h,d,_]};var o=n(2784),u=n(9071),a="function"===typeof IntersectionObserver;var l=new Map,i=[];("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},4069:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.FullAppTreeContext=t.AppTreeContext=t.AppRouterContext=void 0;var r,o=(r=n(2784))&&r.__esModule?r:{default:r};var u=o.default.createContext(null);t.AppRouterContext=u;var a=o.default.createContext(null);t.AppTreeContext=a;var l=o.default.createContext(null);t.FullAppTreeContext=l},5805:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(237).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t){var n=o.default,a={loading:function(e){e.error,e.isLoading;return e.pastDelay,null}};r(e,Promise)?a.loader=function(){return e}:"function"===typeof e?a.loader=e:"object"===typeof e&&(a=u({},a,e));if((a=u({},a,t)).suspense)throw new Error("Invalid suspense option usage in next/dynamic. Read more: https://nextjs.org/docs/messages/invalid-dynamic-suspense");a.loadableGenerated&&delete(a=u({},a,a.loadableGenerated)).loadableGenerated;if("boolean"===typeof a.ssr&&!a.suspense){if(!a.ssr)return delete a.ssr,l(n,a);delete a.ssr}return n(a)},t.noSSR=l;a(n(2784));var o=a(n(2060));function u(){return u=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},u.apply(this,arguments)}function a(e){return e&&e.__esModule?e:{default:e}}function l(e,t){return delete t.webpack,delete t.modules,e(t)}("function"===typeof t.default||"object"===typeof t.default&&null!==t.default)&&"undefined"===typeof t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},6941:function(e,t,n){"use strict";var r;Object.defineProperty(t,"__esModule",{value:!0}),t.LoadableContext=void 0;var o=((r=n(2784))&&r.__esModule?r:{default:r}).default.createContext(null);t.LoadableContext=o},2060:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(616).Z,o=n(416).Z;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u,a=(u=n(2784))&&u.__esModule?u:{default:u},l=n(6941);function i(){return i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},i.apply(this,arguments)}var s=n(3100).useSyncExternalStore,f=[],c=[],d=!1;function p(e){var t=e(),n={loading:!0,loaded:null,error:null};return n.promise=t.then((function(e){return n.loading=!1,n.loaded=e,e})).catch((function(e){throw n.loading=!1,n.error=e,e})),n}var v=function(){function e(t,n){r(this,e),this._loadFn=t,this._opts=n,this._callbacks=new Set,this._delay=null,this._timeout=null,this.retry()}return o(e,[{key:"promise",value:function(){return this._res.promise}},{key:"retry",value:function(){var e=this;this._clearTimeouts(),this._res=this._loadFn(this._opts.loader),this._state={pastDelay:!1,timedOut:!1};var t=this._res,n=this._opts;t.loading&&("number"===typeof n.delay&&(0===n.delay?this._state.pastDelay=!0:this._delay=setTimeout((function(){e._update({pastDelay:!0})}),n.delay)),"number"===typeof n.timeout&&(this._timeout=setTimeout((function(){e._update({timedOut:!0})}),n.timeout))),this._res.promise.then((function(){e._update({}),e._clearTimeouts()})).catch((function(t){e._update({}),e._clearTimeouts()})),this._update({})}},{key:"_update",value:function(e){this._state=i({},this._state,{error:this._res.error,loaded:this._res.loaded,loading:this._res.loading},e),this._callbacks.forEach((function(e){return e()}))}},{key:"_clearTimeouts",value:function(){clearTimeout(this._delay),clearTimeout(this._timeout)}},{key:"getCurrentValue",value:function(){return this._state}},{key:"subscribe",value:function(e){var t=this;return this._callbacks.add(e),function(){t._callbacks.delete(e)}}}]),e}();function y(e){return function(e,t){var n=function(){if(!u){var t=new v(e,o);u={getCurrentValue:t.getCurrentValue.bind(t),subscribe:t.subscribe.bind(t),retry:t.retry.bind(t),promise:t.promise.bind(t)}}return u.promise()},r=function(){n();var e=a.default.useContext(l.LoadableContext);e&&Array.isArray(o.modules)&&o.modules.forEach((function(t){e(t)}))},o=Object.assign({loader:null,loading:null,delay:200,timeout:null,webpack:null,modules:null,suspense:!1},t);o.suspense&&(o.lazy=a.default.lazy(o.loader));var u=null;if(!d){var f=o.webpack?o.webpack():o.modules;f&&c.push((function(e){var t=!0,r=!1,o=void 0;try{for(var u,a=f[Symbol.iterator]();!(t=(u=a.next()).done);t=!0){var l=u.value;if(-1!==e.indexOf(l))return n()}}catch(i){r=!0,o=i}finally{try{t||null==a.return||a.return()}finally{if(r)throw o}}}))}var p=o.suspense?function(e,t){return r(),a.default.createElement(o.lazy,i({},e,{ref:t}))}:function(e,t){r();var n=s(u.subscribe,u.getCurrentValue,u.getCurrentValue);return a.default.useImperativeHandle(t,(function(){return{retry:u.retry}}),[]),a.default.useMemo((function(){return n.loading||n.error?a.default.createElement(o.loading,{isLoading:n.loading,pastDelay:n.pastDelay,timedOut:n.timedOut,error:n.error,retry:u.retry}):n.loaded?a.default.createElement(function(e){return e&&e.__esModule?e.default:e}(n.loaded),e):null}),[e,n])};return p.preload=function(){return n()},p.displayName="LoadableComponent",a.default.forwardRef(p)}(p,e)}function h(e,t){for(var n=[];e.length;){var r=e.pop();n.push(r(t))}return Promise.all(n).then((function(){if(e.length)return h(e,t)}))}y.preloadAll=function(){return new Promise((function(e,t){h(f).then(e,t)}))},y.preloadReady=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return new Promise((function(t){var n=function(){return d=!0,t()};h(c,e).then(n,n)}))},window.__NEXT_PRELOADREADY=y.preloadReady;var _=y;t.default=_},5237:function(e,t,n){e.exports=n(5805)},7729:function(e,t,n){e.exports=n(5913)},9097:function(e,t,n){e.exports=n(162)},5632:function(e,t,n){e.exports=n(3642)},452:function(e,t,n){"use strict";var r=n(2784);var o="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t},u=r.useState,a=r.useEffect,l=r.useLayoutEffect,i=r.useDebugValue;function s(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!o(e,n)}catch(r){return!0}}var f="undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement?function(e,t){return t()}:function(e,t){var n=t(),r=u({inst:{value:n,getSnapshot:t}}),o=r[0].inst,f=r[1];return l((function(){o.value=n,o.getSnapshot=t,s(o)&&f({inst:o})}),[e,n,t]),a((function(){return s(o)&&f({inst:o}),e((function(){s(o)&&f({inst:o})}))}),[e]),i(n),n};t.useSyncExternalStore=void 0!==r.useSyncExternalStore?r.useSyncExternalStore:f},3100:function(e,t,n){"use strict";e.exports=n(452)},2838:function(e,t,n){"use strict";function r(e,t){return null!=t&&"undefined"!==typeof Symbol&&t[Symbol.hasInstance]?!!t[Symbol.hasInstance](e):e instanceof t}n.d(t,{Z:function(){return r}})}}]);