"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[827,666],{1666:function(e,n,t){t.r(n),t.d(n,{default:function(){return d}});var a=t(2322),r=t(1169),i=t(4031),s=t(6145),l=t(2850),c=t(2784),o=t(2742),u=t(7676);function d(e){var n,t=e.item,c=(0,u.og)(t),o=t.data,d=null===(n=o.referencias)||void 0===n?void 0:n.filter((function(e){return!e.incisos}));return(0,a.jsxs)("div",{"data-hash":c,className:"border border-solid rounded-md p-3 mb-3",children:[(0,a.jsx)("div",{className:"ml-1 float-right",children:(0,a.jsx)(l.Z,{pagina:o.pagina})}),(0,a.jsxs)("span",{className:"font-sans flex flex-wrap gap-1 text-base",children:[(0,a.jsx)(i.Z,{hash:c,anchor:"art\xedculo"}),(0,a.jsx)("b",{className:"text-black mx-1 font-ConvencionFJ",children:(0,u.Lv)(t)}),(0,a.jsxs)(r.Ct,{color:"gray",children:[" ",(0,u.ZQ)(o.sobre)]}),o.etiquetas.map((function(e,n){return(0,a.jsx)(h,{etiqueta:e,item:t},n)})),null===d||void 0===d?void 0:d.map((function(e,n){return(0,a.jsx)(r.Ct,{color:"info",children:(0,a.jsxs)("a",{href:e.url,target:"_blank",rel:"noreferrer",title:"por "+e.autor,children:[e.etiqueta,d.length>1?" "+(n+1):""]})},n)}))]}),(0,u.nM)(t,"inciso").map((function(e,n){return(0,a.jsx)(s.Z,{item:e,baseItem:t},n)}))]})}function h(e){var n=(0,c.useState)(!1),t=n[0],i=n[1],s=e.etiqueta.replace(/ /g,"\xa0");return(0,a.jsx)("div",{className:"cursor-pointer",onMouseOver:function(){return i(!0)},children:(0,a.jsx)(r.Ct,{color:"pink",children:t?(0,a.jsx)(r.Lt,{inline:!0,label:s,children:(0,a.jsx)(r.Lt.Item,{children:(0,a.jsx)("div",{className:"max-h-[200px] overflow-y-scroll overscroll-contain",children:(0,u.rQ)("articulo").filter((function(n){return n.oid!=e.item.oid&&n.data.etiquetas.includes(e.etiqueta)})).map((function(e,n){return(0,a.jsx)("div",{children:(0,a.jsx)("a",{href:"/#"+(0,u.og)(e),children:"".concat((0,u.Lv)(e)," (").concat((0,u.ZQ)(e.data.sobre),")")})},n)}))})})}):(0,a.jsxs)("div",{className:"flex",children:[s,(0,a.jsx)(o.kzR,{className:"ml-2 h-4 w-4"})]})})})}},8827:function(e,n,t){t.r(n),t.d(n,{default:function(){return o}});var a=t(2322),r=t(7676),i=t(1666),s=t(4031);function l(e){return(0,a.jsxs)("div",{children:[(0,a.jsxs)("h3",{"data-hash":e.path,className:"text-center rounded",children:[(0,a.jsx)(s.Z,{hash:e.path,anchor:"t\xedtulo"})," ",e.item.label]}),(0,r.nM)(e.item,"articulo").map((function(e){return(0,a.jsx)(i.default,{item:e},e.oid)}))]})}var c=t(6447);function o(e){var n,t=e.item,o=(0,r.og)(t);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("h2",{"data-hash":o,className:"text-center mt-1 rounded",children:[(0,a.jsx)(s.Z,{hash:o,anchor:"cap\xedtulo"})," ",(0,a.jsx)(c.Z,{lowercaseClass:"text-lg",text:"Cap\xedtulo "+t.key}),(0,a.jsx)("br",{}),(0,a.jsx)(c.Z,{lowercaseClass:"text-lg",text:null!==(n=t.label)&&void 0!==n?n:""})]}),(0,r.nM)(t,"articulo").map((function(e){return(0,a.jsx)(i.default,{item:e},e.oid)})),(0,r.nM)(t,"titulo").map((function(e,n){return(0,a.jsx)(l,{item:e,path:"".concat(o,".").concat(n+1)},n)}))]})}},4031:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(2322),r=t(1169);function i(e){if(e.anchor){var n,t,i=null!==(n=e.title)&&void 0!==n?n:"V\xednculo a "+e.anchor;return(0,a.jsx)("div",{className:"inline-block",children:(0,a.jsx)("a",{className:(null!==(t=e.className)&&void 0!==t?t:"")+"font-sans text-gray-300"+(!1===e.visible?" invisible":""),href:"/#"+e.hash,title:i,"data-id":e.hash,children:(0,a.jsx)(r.u,{content:i,children:"\xb6"})})})}var s;return(0,a.jsx)("a",{className:(null!==(s=e.className)&&void 0!==s?s:"")+(!1===e.visible?" invisible":""),href:"/#"+e.hash,title:e.title,"data-id":e.hash,children:e.children})}},6145:function(e,n,t){t.d(n,{Z:function(){return s}});var a=t(2322),r=t(7676),i=t(4031);function s(e){var n=(0,r.hn)(e.item,e.baseItem),t=(0,r.og)(e.item);return(0,a.jsxs)("div",{"data-hash":t,className:"mt-2 leading-6 rounded",children:[(0,a.jsx)(i.Z,{hash:t,anchor:"inciso"})," ",(0,a.jsx)("b",{children:n}),e.item.content,(0,r.nM)(e.item,"inciso").map((function(n,t){return(0,a.jsx)(s,{item:n,baseItem:e.baseItem},t)}))]})}},2850:function(e,n,t){t.d(n,{Z:function(){return i}});var a=t(2322),r=t(1169);function i(e){var n="Ir a p\xe1gina en el PDF oficial";return(0,a.jsx)("a",{className:"text-sm",href:"https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf#page="+(e.pagina+4),title:n,target:"_blank",rel:"noreferrer",children:(0,a.jsxs)(r.u,{content:n,children:["P\xe1g. ",e.pagina]})})}},6447:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(2322);function r(e){var n=e.text.split("");return(0,a.jsx)(a.Fragment,{children:n.map((function(n,t){return(0,a.jsx)("span",{className:(r=n,r==r.toLowerCase()&&r!=r.toUpperCase()?e.lowercaseClass:e.uppercaseClass),children:n.toUpperCase()},t);var r}))})}}}]);