(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[302],{3565:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/fragmento/[fragmentoId]",function(){return n(5404)}])},6068:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});var r=n(2322),i=n(7729),o=n.n(i);function a(t){return(0,r.jsxs)(o(),{children:[t.title&&(0,r.jsx)("title",{children:t.title}),t.title&&(0,r.jsx)("meta",{name:"application-name",content:t.title}),t.title&&(0,r.jsx)("meta",{name:"apple-mobile-web-app-title",content:t.title}),t.description&&(0,r.jsx)("meta",{name:"description",content:t.description}),t.title&&(0,r.jsx)("meta",{itemProp:"name",content:t.title}),t.description&&(0,r.jsx)("meta",{itemProp:"description",content:t.description}),t.image&&(0,r.jsx)("meta",{itemProp:"image",content:t.image}),(0,r.jsx)("meta",{name:"twitter:card",content:t.image?"summary_large_image":"summary"}),t.title&&(0,r.jsx)("meta",{name:"twitter:title",content:t.title}),t.description&&(0,r.jsx)("meta",{name:"twitter:description",content:t.description}),t.image&&(0,r.jsx)("meta",{name:"twitter:image",content:t.image}),(0,r.jsx)("meta",{property:"og:type",content:t.type||"website"}),t.title&&(0,r.jsx)("meta",{property:"og:title",content:t.title}),t.description&&(0,r.jsx)("meta",{property:"og:description",content:t.description}),t.image&&(0,r.jsx)("meta",{property:"og:image",content:t.image}),t.url&&(0,r.jsx)("meta",{property:"og:url",content:t.url}),t.locale&&(0,r.jsx)("meta",{property:"og:locale",content:t.locale})]})}},9051:function(t,e,n){"use strict";n.d(e,{Q:function(){return o},a:function(){return i}});var r=n(2784);function i(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0;(0,r.useEffect)((function(){var r=function(e){var r;if(n&&!n.current)return!1;var o=a("data-id",n,i);return!(!o||0==o.offsetTop)&&(null===(r=n?n.current:window)||void 0===r||r.scrollTo({top:o.offsetTop-t,behavior:e}),!0)};c((function(){return r("auto")}));var o=function(){return c((function(){return r(e)}))};return window.addEventListener("hashchange",o),function(){window.removeEventListener("hashchange",o)}}),[e,i,t,n])}function o(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bg-amber-100";(0,r.useEffect)((function(){var n=function(){var n;if(t&&!t.current)return!1;var r=e.split(" "),i=null===(n=t?t.current:document)||void 0===n?void 0:n.querySelectorAll(".".concat(r[0],"[data-hash]"));r.forEach((function(t){null===i||void 0===i||i.forEach((function(e){return e.classList.remove(t)}))}));var o=a("data-hash",t);return!!o&&(r.forEach((function(t){o.classList.add(t)})),!0)},r=function(){return c(n)};return r(),window.addEventListener("hashchange",r),function(){window.removeEventListener("hashchange",r)}}),[e,t])}function a(t,e,n){var r,i,o=null===(r=window.location.hash)||void 0===r?void 0:r.substring(1),a=o;for(n&&-1!=o.indexOf("@")&&(a=o.split("@")[1]);;){var c;if(i=null===(c=e?e.current:document)||void 0===c?void 0:c.querySelector("[".concat(t,'^="').concat(a,'"]')))break;var s=a.lastIndexOf(".");if(-1==s&&-1==(s=a.lastIndexOf(":"))){if(-1==(s=a.lastIndexOf("@")))break;n||s++}a=a.substring(0,s)}return i}function c(t){t()||setTimeout((function(){t()||setTimeout((function(){t()}),100)}),100)}},5404:function(t,e,n){"use strict";n.r(e),n.d(e,{__N_SSG:function(){return x},default:function(){return j}});var r=n(2838),i=n(2322),o=n(2784),a=n(5237),c=n.n(a),s=n(9097),u=n.n(s),l=n(5632),d=n(4940),f=n(6068),m=n(9051),p=n(7676),v=c()((function(){return Promise.all([n.e(445),n.e(917),n.e(169),n.e(666),n.e(827)]).then(n.bind(n,8827))}),{loadableGenerated:{webpack:function(){return[8827]}},ssr:!1}),h=c()((function(){return Promise.all([n.e(445),n.e(917),n.e(169),n.e(666)]).then(n.bind(n,1666))}),{loadableGenerated:{webpack:function(){return[1666]}},ssr:!1}),g=c()((function(){return Promise.all([n.e(445),n.e(917),n.e(169),n.e(390)]).then(n.bind(n,6390))}),{loadableGenerated:{webpack:function(){return[6390]}},ssr:!1}),x=!0;function j(){var t=(0,l.useRouter)();(0,m.a)(150,"auto"),(0,m.Q)();var e=(0,o.useContext)(d.O),n=t.query.fragmentoId;if(!n||(0,r.Z)(n,Array))return null;var a=function(t){var e=(0,p.Cs)(t);if(e&&"articulo"in e)return function(t){var e="".concat((0,p.Lv)(t.articulo)," (").concat((0,p.TM)(t),")"),n=(0,p.ZQ)(t.articulo.data.sobre);return{Component:function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:"my-3",children:(0,p.Lv)(t.capitulo)}),t.titulo&&(0,i.jsx)("h3",{className:"my-3",children:(0,p.Lv)(t.titulo,!1)}),(0,i.jsx)(h,{item:t.articulo})]})},title:e,description:n}}(e);if(e&&"capitulo"in e)return function(t){var e=t.capitulo,n=(0,p.Lv)(e),r=(0,p.bl)(e);return{Component:function(){return(0,i.jsx)(v,{item:e})},title:n,description:r}}(e);if(e&&"transitoria"in e)return function(t){var e=(0,p.Lv)(t.transitoria),n=(0,p.ZQ)(t.transitoria.data.sobre);return{Component:function(){return(0,i.jsxs)("div",{children:[(0,i.jsx)("h2",{className:"my-3",children:"Disposiciones Transitorias"}),(0,i.jsx)(g,{item:t.transitoria})]})},title:e,description:n}}(e);throw new Error("Can't handle fragmentoId ".concat(t))}(n),c=a.Component,s=a.title,x=a.description;return(0,i.jsxs)("div",{className:"grid justify-center",children:[(0,i.jsx)(f.Z,{title:s,description:x,image:"https://cpr2022.cl/images/fragmentos/".concat(n,".png?").concat((new Date).getTime()),type:"article"}),(0,i.jsx)(u(),{href:"/#"+(e||n),children:"\ud83d\udcd8 Inicio"}),(0,i.jsx)(d.A,{children:(0,i.jsx)("div",{className:"prose font-ConvencionFJ",children:(0,i.jsx)(c,{})})})]})}}},function(t){t.O(0,[779,885,774,888,179],(function(){return e=3565,t(t.s=e);var e}));var e=t.O();_N_E=e}]);