"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[390],{7603:function(n,t,e){var r=e(7328),i=e(6670),a=e(2322),s=e(2784),o=e(1169),c=e(2742),l=e(7676);function u(n){var t,e=(0,s.useState)(!1),u=e[0],d=e[1],h=(0,s.useCallback)((function(){d(!0)}),[]);return(0,a.jsx)("div",{className:"cursor-pointer ",onMouseOver:h,onTouchStart:h,children:u?(0,a.jsx)(o.Lt,(0,i.Z)((0,r.Z)({},n),{children:(0,a.jsx)("div",{className:(0,l.AK)("-m-5 -mr-2 pr-5",n.className),children:n.children})})):(0,a.jsxs)("div",{className:"flex",children:[n.label,(null===(t=n.arrowIcon)||void 0===t||t)&&(0,a.jsx)(c.kzR,{className:"ml-2 h-4 w-4"})]})})}u.Item=o.Lt.Item,t.Z=u},4031:function(n,t,e){e.d(t,{Z:function(){return s}});var r=e(2322),i=e(7676),a=e(1439);function s(n){if(n.anchor){var t,e=null!==(t=n.title)&&void 0!==t?t:"V\xednculo a "+n.anchor;return(0,r.jsx)("div",{className:"inline-block",children:(0,r.jsx)("a",{className:(0,i.AK)(n.className,"font-sans text-gray-300",!1===n.visible&&"invisible"),href:"/#"+n.hash,"data-id":n.hash,children:(0,r.jsx)(a.Z,{content:e,children:"\xb6"})})})}return(0,r.jsx)("a",{className:(0,i.AK)(n.className,!1===n.visible&&"invisible"),href:"/#"+n.hash,title:n.title,"data-id":n.hash,children:n.children})}},6145:function(n,t,e){e.d(t,{Z:function(){return d}});var r=e(7328),i=e(6670),a=e(2322),s=e(2742),o=e(4482),c=e(7676),l=e(4031),u=e(1439);function d(n){var t,e=(0,c.hn)(n.item,n.baseItem),f=(0,c.og)(n.item),m=(0,c.L9)(f).filter((function(n){return n.texto}));return(0,a.jsxs)("div",{"data-hash":f,className:"mt-2 leading-6 rounded",children:[(0,a.jsx)(l.Z,{hash:f,anchor:"inciso"})," ",(0,a.jsx)("b",{children:e}),(0,a.jsx)(a.Fragment,{children:h(null!==(t=n.item.content)&&void 0!==t?t:"",m,(function(n,t){var e,l,d=void 0,h=(0,c.Cs)(n.hacia);return h&&"inciso"in h?(e=function(n){var t,e="articulo"in n?n.articulo:n.transitoria,r="articulo"in n?(0,c.Lv)(n.capitulo):"Disposiciones Transitorias";"titulo"in n&&n.titulo&&(t=(0,c.Lv)(n.titulo));var i="articulo"in n?(0,c.Lv)(n.articulo):(0,c.Lv)(n.transitoria),s="articulo"in n?n.articulo.data.sobre:n.transitoria.data.sobre,o="inciso"in n?n.inciso:void 0,l=o&&(0,c.hn)(o,e,!1),u=o&&l+" "+o.content;if(o){var d=(0,c.up)(o.parent);"inciso"==d.type&&(u="".concat(d.content," ").concat("a"==o.key?"":"(...)"," ").concat(u))}return(0,a.jsxs)("div",{className:"max-w-md font-sans",children:[(0,a.jsx)("div",{children:r}),t&&(0,a.jsx)("div",{children:t}),(0,a.jsxs)("div",{children:[i," ",s&&" (sobre ".concat(s,")"),u&&":"]}),u&&(0,a.jsxs)("div",{className:"mt-2",children:['"',(0,a.jsx)("span",{className:"font-ConvencionFJ",children:u}),'"']})]})}(h),l={href:"/#".concat(n.hacia)}):(e=function(n){return(0,a.jsxs)("div",{className:"max-w-md font-sans",children:[n.etiqueta&&(0,a.jsx)("div",{children:n.etiqueta}),(0,a.jsxs)("div",{className:"flex",children:["en ",(0,o.Z)(n.hacia)]})]})}(n),l={href:n.hacia,target:"_blank",rel:"noreferrer"},d=(0,a.jsx)(s.Hi9,{className:"inline",size:14})),(0,a.jsx)("a",(0,i.Z)((0,r.Z)({className:"text-blue-800"},l),{children:(0,a.jsxs)(u.Z,{placement:"bottom",content:e,children:[n.texto," ",d]})}),t)}))}),(0,c.nM)(n.item,"inciso").map((function(t,e){return(0,a.jsx)(d,{item:t,baseItem:n.baseItem},e)}))]})}function h(n,t,e){if(""==n)return null;var r=0,i=[n];return t.forEach((function(n){i=i.flatMap((function(t){return"string"!=typeof t?[t]:t.split(n.texto).flatMap((function(t,i){return[0!=i?e(n,r++):void 0,t]})).filter((function(n){return!!n}))}))})),i}},6214:function(n,t,e){e.d(t,{Z:function(){return d}});var r=e(2322),i=e(2742),a=e(8799),s=e(7676),o=e(1439),c=e(7603),l=e(2784),u=e(4940);function d(n){var t=n.path,e=n.item,a=location.pathname.startsWith("/fragmento/");return(0,r.jsxs)("div",{className:"ml-1 float-right flex gap-2 font-sans",children:[a&&(0,r.jsx)("a",{href:"/".concat(location.hash.length>1?location.hash:"#"+t),children:(0,r.jsx)(i.TBf,{size:20})}),(0,r.jsx)(c.Z,{arrowIcon:!1,inline:!0,label:(0,r.jsx)(o.Z,{content:"Acciones sobre "+(0,s.AZ)(e.type),children:(0,r.jsx)(i.Dxw,{size:20})}),children:(0,r.jsx)(h,{path:t,item:e})})]})}function h(n){var t=n.path,e=n.item,i=e.data,o="".concat(location.origin,"/fragmento/").concat(t.split("@")[0]);o+="?test=1";var c=(0,l.useContext)(u.O);(0,s.u$)(t,c)&&-1!=c.lastIndexOf(".")&&(o+="#"+c);var d="".concat((0,s.Lv)(e)," sobre ").concat(i.sobre),h="".concat(d,":\n").concat(o,"\n");return(0,r.jsxs)(r.Fragment,{children:[f(a.DWq,"P\xe1gina ".concat(i.pagina," en el PDF oficial"),"https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf#page="+(i.pagina+4)),f(a.meP,"Compartir en Twitter","https://twitter.com/intent/tweet?text="+encodeURIComponent(h)),f(a.k1O,"Compartir en Facebook","https://www.facebook.com/sharer/sharer.php?display=page&u="+encodeURIComponent(o)),f(a.RGt,"Compartir v\xeda WhatsApp","https://api.whatsapp.com/send/?text=".concat(encodeURIComponent(h))),f(a.iEj,"Compartir v\xeda Telegram","https://telegram.me/share/url?url=".concat(encodeURIComponent(o)))]})}function f(n,t,e){return(0,r.jsx)(c.Z.Item,{children:(0,r.jsxs)("div",{className:"flex",children:[(0,r.jsx)(n,{size:20}),"\xa0",(0,r.jsx)("a",{href:e,target:"_blank",rel:"noreferrer",children:t})]})})}},1439:function(n,t,e){e.d(t,{Z:function(){return o}});var r=e(7328),i=e(2322),a=e(2784),s=e(1169);function o(n){var t=(0,a.useState)(!1),e=t[0],o=t[1],c=(0,a.useCallback)((function(){o(!0)}),[]);return(0,i.jsx)("div",{className:"inline",onMouseOver:c,onTouchStart:c,children:e?(0,i.jsx)(s.u,(0,r.Z)({},n)):n.children})}},6390:function(n,t,e){e.r(t),e.d(t,{default:function(){return c}});var r=e(2322),i=e(7676),a=e(4031),s=e(6145),o=e(6214);function c(n){var t=n.item,e=(0,i.og)(t),c=t.data;return(0,r.jsxs)("div",{"data-hash":e,className:"border border-solid rounded-md p-3 mb-3",children:[(0,r.jsx)(o.Z,{path:e,item:t}),(0,r.jsxs)("h3",{className:"my-0 rounded",children:[(0,r.jsx)(a.Z,{hash:e,anchor:"disposici\xf3n transitoria"})," ",(0,i.Lv)(t)," ",c.sobre&&(0,r.jsx)("span",{className:"font-sans rounded-md text-sm font-normal bg-gray-300 text-black px-2 py-1",children:(0,i.ZQ)(c.sobre)})]}),(0,i.nM)(t,"inciso").map((function(n,e){return(0,r.jsx)(s.Z,{item:n,baseItem:t},e)}))]})}},6670:function(n,t,e){function r(n,t){return t=null!=t?t:{},Object.getOwnPropertyDescriptors?Object.defineProperties(n,Object.getOwnPropertyDescriptors(t)):function(n,t){var e=Object.keys(n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(n);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(n,t).enumerable}))),e.push.apply(e,r)}return e}(Object(t)).forEach((function(e){Object.defineProperty(n,e,Object.getOwnPropertyDescriptor(t,e))})),n}e.d(t,{Z:function(){return r}})},4482:function(n,t,e){function r(){throw new TypeError("The given URL is not a string. Please verify your string|array.")}e.d(t,{Z:function(){return o}});const i=["/",":","?","#"],a=[".","/","@"];function s(n,t){"string"!=typeof n&&r();let e=0,s=0,o=0,c=0,l=n.length,u=0;for(;l--&&++u&&!(e&&i.indexOf(n[u])>-1);)"."===n[u]&&(++e,s=u);for(c=u,u=s;u--;)if(-1!==a.indexOf(n[u])){o=u+1;break}if(0===o&&c>3)return n;if(o>0&&o<2)return"";if(t.tld){let t=0;const e=["/","@"];let i=s;for(;i--;)if(e.indexOf(n[i])>-1){t=i+1;break}try{return require("psl").get(n.slice(t,c))}catch(r){throw Error("You must install psl library (https://www.npmjs.com/package/psl) to use `tld` option")}}return n.slice(o,c)}function o(n,t={}){if("string"==typeof n)return s(n,t);if(Array.isArray(n)){const e=[],r=n.length;let i=0;for(;i<r;i++)e.push(s(n[i],t));return e}r()}}}]);