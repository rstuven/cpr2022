"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[189],{6189:function(r,t,n){n.r(t),n.d(t,{default:function(){return m}});var e=n(2322),a=n(1169),i=n(3738),o=n(6788),l=n(654),u=n(7519),c=n(2784),s=n(2742),f=n(8867);function h(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function d(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,a,i=[],o=!0,l=!1;try{for(n=n.call(r);!(o=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);o=!0);}catch(u){l=!0,a=u}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return h(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return h(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(r){var t,n=r.item,c=(0,f.og)(n),s=d((0,i.y)(),2),h=s[0],m=(s[1],n.data),y=null===(t=m.referencias)||void 0===t?void 0:t.filter((function(r){return!r.incisos})),p=(0,f.u$)(c,h);return(0,e.jsxs)("div",{className:"border border-solid rounded-md p-3 mb-3"+(p?" bg-amber-100":""),children:[(0,e.jsx)("div",{className:"ml-1 float-right",children:(0,e.jsx)(u.Z,{pagina:m.pagina})}),(0,e.jsxs)("span",{className:"font-sans flex flex-wrap gap-1 text-base",children:[(0,e.jsx)(o.Z,{hash:c,anchor:!0,visible:!p}),(0,e.jsx)("b",{className:"text-black mx-1 font-ConvencionFJ",children:(0,f.Lv)(n)}),(0,e.jsxs)(a.Ct,{color:"gray",children:[" ",(0,f.ZQ)(m.sobre)]}),m.etiquetas.map((function(r,t){return(0,e.jsx)(b,{etiqueta:r,item:n},t)})),null===y||void 0===y?void 0:y.map((function(r,t){return(0,e.jsx)(a.Ct,{color:"info",children:(0,e.jsxs)("a",{href:r.url,target:"_blank",rel:"noreferrer",title:"por "+r.autor,children:[r.etiqueta,y.length>1?" "+(t+1):""]})},t)}))]}),(0,f.nM)(n,"inciso").map((function(r,t){return(0,e.jsx)(l.Z,{item:r,baseItem:n},t)}))]})}function b(r){var t=(0,c.useState)(!1),n=t[0],i=t[1],o=r.etiqueta.replace(/ /g,"\xa0");return(0,e.jsx)("div",{className:"cursor-pointer",onMouseOver:function(){return i(!0)},children:(0,e.jsx)(a.Ct,{color:"pink",children:n?(0,e.jsx)(a.Lt,{inline:!0,label:o,children:(0,f.rQ)("articulo").filter((function(t){return t.oid!=r.item.oid&&t.data.etiquetas.includes(r.etiqueta)})).map((function(r,t){return(0,e.jsx)(a.Lt.Item,{children:(0,e.jsx)("a",{href:"#"+(0,f.og)(r),children:"".concat((0,f.Lv)(r)," (").concat((0,f.ZQ)(r.data.sobre),")")})},t)}))}):(0,e.jsxs)("div",{className:"flex",children:[o,(0,e.jsx)(s.kzR,{className:"ml-2 h-4 w-4"})]})})})}},6788:function(r,t,n){n.d(t,{Z:function(){return u}});var e=n(2322),a=n(3738),i=n(2784);function o(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,a,i=[],o=!0,l=!1;try{for(n=n.call(r);!(o=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);o=!0);}catch(u){l=!0,a=u}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return o(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r){var t,n=l((0,a.y)(),2),o=(n[0],n[1]);(0,i.useCallback)((function(t){t.preventDefault(),o(r.hash)}),[r.hash,o]);return r.anchor?(0,e.jsx)("a",{className:"font-sans text-gray-300"+(!1===r.visible?" invisible":""),href:"/#"+r.hash,"data-id":r.hash,children:"\xb6"}):(0,e.jsx)("a",{className:(null!==(t=r.className)&&void 0!==t?t:"")+(!1===r.visible?" invisible":""),href:"/#"+r.hash,"data-id":r.hash,children:r.children})}},654:function(r,t,n){n.d(t,{Z:function(){return c}});var e=n(2322),a=n(3738),i=n(8867),o=n(6788);function l(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,a,i=[],o=!0,l=!1;try{for(n=n.call(r);!(o=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);o=!0);}catch(u){l=!0,a=u}finally{try{o||null==n.return||n.return()}finally{if(l)throw a}}return i}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return l(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(r){var t=u((0,a.y)(),2),n=t[0],l=(t[1],(0,i.hn)(r.item,r.baseItem)),s=(0,i.og)(r.item),f=(0,i.u$)(s,n);return(0,e.jsxs)("div",{className:"mt-2 leading-6 "+(f?" bg-amber-100":""),children:[(0,e.jsx)(o.Z,{hash:s,anchor:!0,visible:!f})," ",(0,e.jsx)("b",{children:l}),r.item.content,(0,i.nM)(r.item,"inciso").map((function(t,n){return(0,e.jsx)(c,{item:t,baseItem:r.baseItem},n)}))]})}},7519:function(r,t,n){n.d(t,{Z:function(){return i}});var e=n(2322),a=n(1169);function i(r){return(0,e.jsx)(a.u,{content:"Ir a p\xe1gina en el PDF oficial",children:(0,e.jsxs)("a",{className:"text-sm",href:"https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf#page="+(r.pagina+4),target:"_blank",rel:"noreferrer",children:["P\xe1g. ",r.pagina]})})}}}]);