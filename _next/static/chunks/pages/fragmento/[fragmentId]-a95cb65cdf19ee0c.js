(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{4586:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fragmento/[fragmentId]",function(){return n(8839)}])},1088:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}e.default=void 0;var a,i=(a=n(2784))&&a.__esModule?a:{default:a},c=n(4e3),u=n(2203),l=n(8599);var f={};function s(t,e,n,r){if(t&&c.isLocalURL(e)){t.prefetch(e,n,r).catch((function(t){0}));var o=r&&"undefined"!==typeof r.locale?r.locale:t&&t.locale;f[e+"%"+n+(o?"%"+o:"")]=!0}}var p=function(t){var e,n=!1!==t.prefetch,r=u.useRouter(),a=i.default.useMemo((function(){var e=o(c.resolveHref(r,t.href,!0),2),n=e[0],a=e[1];return{href:n,as:t.as?c.resolveHref(r,t.as):a||n}}),[r,t.href,t.as]),p=a.href,d=a.as,m=t.children,y=t.replace,v=t.shallow,h=t.scroll,g=t.locale;"string"===typeof m&&(m=i.default.createElement("a",null,m));var b=(e=i.default.Children.only(m))&&"object"===typeof e&&e.ref,j=o(l.useIntersection({rootMargin:"200px"}),2),w=j[0],x=j[1],S=i.default.useCallback((function(t){w(t),b&&("function"===typeof b?b(t):"object"===typeof b&&(b.current=t))}),[b,w]);i.default.useEffect((function(){var t=x&&n&&c.isLocalURL(p),e="undefined"!==typeof g?g:r&&r.locale,o=f[p+"%"+d+(e?"%"+e:"")];t&&!o&&s(r,p,d,{locale:e})}),[d,p,x,g,n,r]);var I={ref:S,onClick:function(t){e.props&&"function"===typeof e.props.onClick&&e.props.onClick(t),t.defaultPrevented||function(t,e,n,r,o,a,i,u){("A"!==t.currentTarget.nodeName.toUpperCase()||!function(t){var e=t.currentTarget.target;return e&&"_self"!==e||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which}(t)&&c.isLocalURL(n))&&(t.preventDefault(),e[o?"replace":"push"](n,r,{shallow:a,locale:u,scroll:i}))}(t,r,p,d,y,v,h,g)},onMouseEnter:function(t){e.props&&"function"===typeof e.props.onMouseEnter&&e.props.onMouseEnter(t),c.isLocalURL(p)&&s(r,p,d,{priority:!0})}};if(t.passHref||"a"===e.type&&!("href"in e.props)){var A="undefined"!==typeof g?g:r&&r.locale,_=r&&r.isLocaleDomain&&c.getDomainLocale(d,A,r&&r.locales,r&&r.domainLocales);I.href=_||c.addBasePath(c.addLocale(d,A,r&&r.defaultLocale))}return i.default.cloneElement(e,I)};e.default=p},8599:function(t,e,n){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}Object.defineProperty(e,"__esModule",{value:!0}),e.useIntersection=function(t){var e=t.rootRef,n=t.rootMargin,r=t.disabled||!c,f=a.useRef(),s=o(a.useState(!1),2),p=s[0],d=s[1],m=o(a.useState(e?e.current:null),2),y=m[0],v=m[1],h=a.useCallback((function(t){f.current&&(f.current(),f.current=void 0),r||p||t&&t.tagName&&(f.current=function(t,e,n){var r=function(t){var e,n={root:t.root||null,margin:t.rootMargin||""},r=l.find((function(t){return t.root===n.root&&t.margin===n.margin}));r?e=u.get(r):(e=u.get(n),l.push(n));if(e)return e;var o=new Map,a=new IntersectionObserver((function(t){t.forEach((function(t){var e=o.get(t.target),n=t.isIntersecting||t.intersectionRatio>0;e&&n&&e(n)}))}),t);return u.set(n,e={id:n,observer:a,elements:o}),e}(n),o=r.id,a=r.observer,i=r.elements;return i.set(t,e),a.observe(t),function(){if(i.delete(t),a.unobserve(t),0===i.size){a.disconnect(),u.delete(o);var e=l.findIndex((function(t){return t.root===o.root&&t.margin===o.margin}));e>-1&&l.splice(e,1)}}}(t,(function(t){return t&&d(t)}),{root:y,rootMargin:n}))}),[r,y,n,p]);return a.useEffect((function(){if(!c&&!p){var t=i.requestIdleCallback((function(){return d(!0)}));return function(){return i.cancelIdleCallback(t)}}}),[p]),a.useEffect((function(){e&&v(e.current)}),[e]),[h,p]};var a=n(2784),i=n(1424),c="undefined"!==typeof IntersectionObserver;var u=new Map,l=[]},3178:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(2322),o=n(7729);function a(t){return(0,r.jsxs)(o.default,{children:[t.title&&(0,r.jsx)("title",{children:t.title}),t.description&&(0,r.jsx)("meta",{name:"description",content:t.description}),t.title&&(0,r.jsx)("meta",{itemProp:"name",content:t.title}),t.description&&(0,r.jsx)("meta",{itemProp:"description",content:t.description}),t.image&&(0,r.jsx)("meta",{itemProp:"image",content:t.image}),(0,r.jsx)("meta",{name:"twitter:card",content:t.image?"summary_large_image":"summary"}),t.title&&(0,r.jsx)("meta",{name:"twitter:title",content:t.title}),t.description&&(0,r.jsx)("meta",{name:"twitter:description",content:t.description}),t.image&&(0,r.jsx)("meta",{name:"twitter:image",content:t.image}),(0,r.jsx)("meta",{property:"og:type",content:t.type||"website"}),t.title&&(0,r.jsx)("meta",{property:"og:title",content:t.title}),t.description&&(0,r.jsx)("meta",{property:"og:description",content:t.description}),t.image&&(0,r.jsx)("meta",{property:"og:image",content:t.image}),t.url&&(0,r.jsx)("meta",{property:"og:url",content:t.url}),t.locale&&(0,r.jsx)("meta",{property:"og:locale",content:t.locale})]})}},8839:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return h},default:function(){return g}});var r=n(2322),o=n(5237),a=n(9097),i=n(5632),c=n(3178),u=n(1650),l=n(3738),f=n(4413);function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function p(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{},r=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(n).filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable})))),r.forEach((function(e){p(t,e,n[e])}))}return t}function m(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var n=null==t?null:"undefined"!==typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=n){var r,o,a=[],i=!0,c=!1;try{for(n=n.call(t);!(i=(r=n.next()).done)&&(a.push(r.value),!e||a.length!==e);i=!0);}catch(u){c=!0,o=u}finally{try{i||null==n.return||n.return()}finally{if(c)throw o}}return a}}(t,e)||function(t,e){if(!t)return;if("string"===typeof t)return s(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var y=(0,o.default)((function(){return n.e(871).then(n.bind(n,6871))}),{loadableGenerated:{webpack:function(){return[6871]}},ssr:!1}),v=(0,o.default)((function(){return n.e(189).then(n.bind(n,6189))}),{loadableGenerated:{webpack:function(){return[6189]}},ssr:!1}),h=!0;function g(){var t=(0,i.useRouter)();(0,u.j)(150);var e,n,o=m((0,l.y)(),2),s=o[0],p=(o[1],t.query.fragmentId);if(!p||(e=p,null!=(n=Array)&&"undefined"!==typeof Symbol&&n[Symbol.hasInstance]?n[Symbol.hasInstance](e):e instanceof n))return null;var h=function(t){var e=(0,f.Bm)(t);if(e&&"articulo"in e)return function(t){var e="Art\xedculo ".concat(t.articulo.articulo," (Cap\xedtulo ").concat(t.capitulo.capitulo," ").concat(t.capitulo.nombre).concat(t.titulo?" - T\xedtulo: ".concat(t.titulo.titulo):"",")"),n=t.articulo.sobre;return{Component:function(){return(0,r.jsxs)("div",{children:[(0,r.jsxs)("h2",{className:"my-3",children:["Cap\xedtulo ",t.capitulo.capitulo," ",t.capitulo.nombre]}),t.titulo&&(0,r.jsx)("h3",{className:"my-3",children:t.titulo.titulo}),(0,r.jsx)(v,d({},t.articulo))]})},title:e,description:n}}(e);if(e&&"capitulo"in e)return function(t){var e=t.capitulo,n=(0,f.tz)(e),o="Cap\xedtulo ".concat(e.capitulo," ").concat(e.nombre),a="Art\xedculos ".concat(n[0].articulo.articulo," al ").concat(n[n.length-1].articulo.articulo);return{Component:function(){return(0,r.jsx)(y,d({},e))},title:o,description:a}}(e);throw new Error("Can't handle fragmentId ".concat(t))}(p),g=h.Component,b=h.title,j=h.description;return(0,r.jsxs)("div",{className:"grid justify-center",children:[(0,r.jsx)(c.Z,{title:b,description:j,image:"https://cpr2022.cl/thumbnails/".concat(p,".png?").concat((new Date).getTime()),type:"article"}),(0,r.jsx)(a.default,{href:"/#"+(s||p),children:"\ud83d\udcd8 Inicio"}),(0,r.jsx)("div",{className:"prose",children:(0,r.jsx)(g,{})})]})}},9097:function(t,e,n){t.exports=n(1088)},5632:function(t,e,n){t.exports=n(2203)}},function(t){t.O(0,[175,159,774,888,179],(function(){return e=4586,t(t.s=e);var e}));var e=t.O();_N_E=e}]);