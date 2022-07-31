"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[915],{5915:function(e,n,t){t.r(n),t.d(n,{default:function(){return oe}});var r=t(7328),a=t(2322),i=t(2784),s=t(9916);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,a=(0,i.useRef)(),s=navigator.userAgent.includes("Safari");(0,i.useEffect)((function(){var i=function(i){if(t&&!t.current)return!1;if(null!=a.current&&a.current===window.location.hash)return!0;a.current=window.location.hash;var o,c=l("data-id",t,r);if(!c||0==c.offsetTop)return!1;"auto"!=n||s?null===(o=t?t.current:window)||void 0===o||o.scrollTo({top:c.offsetTop-e,behavior:i}):(c.focus(),c.blur());return!0};c((function(){return i("auto")}));var o=function(){return c((function(){return i(n)}))};return window.addEventListener("hashchange",o),function(){window.removeEventListener("hashchange",o)}}),[n,r,e,t])}function l(e,n,t){var r,a=(0,s.en)(),i=a;for(t&&-1!=a.indexOf("@")&&(i=a.split("@")[1]);;){var o;if(r=null===(o=n?n.current:document)||void 0===o?void 0:o.querySelector("[".concat(e,'^="').concat(i,'"]')))break;var l=i.lastIndexOf(".");if(-1==l&&-1==(l=i.lastIndexOf(":"))){if(-1==(l=i.lastIndexOf("@")))break;t||l++}i=i.substring(0,l)}return r}function c(e){e()||setTimeout((function(){e()||setTimeout((function(){e()}),100)}),100)}var u=t(7261),d=t(3591),h=t(4482),f=t(4031),x=t(6670),m=t(4677),p=t(2742),v=t(1439),j=t(924);function g(e){var n=e.fragmento;if(!("inciso"in n))return null;var t,r="articulo"in n?n.articulo:n.transitoria,i="articulo"in n?(0,s.Lv)(n.capitulo):"Disposiciones Transitorias";"titulo"in n&&n.titulo&&(t=(0,s.Lv)(n.titulo));var o="articulo"in n?(0,s.Lv)(n.articulo):(0,s.Lv)(n.transitoria),l="articulo"in n?n.articulo.data.sobre:n.transitoria.data.sobre,c=n.inciso,u=c&&(0,s.hn)(c,r,!1),d=c&&u+" "+c.content;if(c){var h=(0,s.up)(c.parent);"inciso"==h.type&&(d="".concat(h.content," ").concat("a"==c.key?"":"(...)"," ").concat(d))}return(0,a.jsxs)("div",{className:"max-w-md font-sans",children:[(0,a.jsx)("div",{children:i}),t&&(0,a.jsx)("div",{children:t}),(0,a.jsxs)("div",{children:[o," ",l&&" (sobre ".concat(l,")"),d&&":"]}),d&&(0,a.jsxs)("div",{className:"mt-2",children:["\u201c",(0,a.jsx)("span",{className:"font-ConvencionFJ",children:d.trim()}),"\u201d"]})]})}function b(e){var n=(0,s.tJ)(e.path);return(0,a.jsx)(a.Fragment,{children:n.map((function(e,n){var t=(0,s.Cs)(e.desde);if(!t||!("inciso"in t)||!t.inciso)return null;var r=(0,s.Mm)(t);return(0,a.jsx)(d.Ct,{color:"success",children:(0,a.jsx)(v.Z,{placement:"bottom",content:(0,a.jsx)(g,{fragmento:t}),children:(0,a.jsxs)("span",{className:"flex gap-1 font-sans",children:[(0,a.jsx)(j.vkH,{size:14}),(0,a.jsx)("a",{href:"#"+e.desde,children:r})]})})},n)}))})}var w=t(3939),C=(0,i.createContext)(!1),N=function(e){var n=(0,w.Z)("(min-width: 500px)");return(0,a.jsx)(C.Provider,{value:n,children:e.children})},k=t(4286),y=t(5759);function E(e){var n=e.width,t=e.className,r=e.target,i=e.dropdown,s=e.openDelay,o=(0,y.Z)(),l=o.render,c=o.onMouseOver,u=o.onTouchMove,d=o.onTouchEnd,h=o.onFocus;return l?(0,a.jsxs)(k.z,{width:n,shadow:"md",withArrow:!0,openDelay:s,closeDelay:400,initiallyOpened:!0,children:[(0,a.jsx)(k.z.Target,{children:r}),(0,a.jsx)(k.z.Dropdown,{children:i})]}):(0,a.jsx)("div",{tabIndex:0,className:t,onMouseOver:c,onTouchMove:u,onTouchEnd:d,onFocus:h,children:r})}function Z(e){var n=(0,i.useContext)(C);if(e.filter.oids.length>0&&!e.filter.oids.includes(e.item.oid))return null;var t=(0,s.hn)(e.item,e.baseItem,!n),o=n&&""!=t,l=(0,s.og)(e.item),c=(0,s.L9)(l).filter((function(e){return e.texto})).map((function(e){return{text:e.texto,value:e,ignoreCase:!1,render:M}}));e.filter.text&&c.push({text:e.filter.text,value:e.filter.text,ignoreCase:!0,render:T});var u,d=m.a.glossary.flatMap((function(e){return e.aliases.map((function(n){return(0,x.Z)((0,r.Z)({},e),{search:n})})).concat((0,x.Z)((0,r.Z)({},e),{search:e.title}))}));return d.sort((function(e,n){return e.title.length>n.title.length?-1:1})),d.forEach((function(e){c.push({text:e.search,value:e,ignoreCase:e.ignoreCase,render:I})})),(0,a.jsxs)("div",{"data-hash":l,className:(0,s.AK)("mt-1 leading-6 rounded-lg pr-2 py-1",o?"pl-[3.4rem]":"pl-9",o?"-indent-10":"-indent-9"),children:[(0,a.jsx)(f.Z,{indent:o,hash:l,anchor:"string"==typeof e.item.key?"letra":"inciso"})," ",(0,a.jsx)("b",{children:t}),"\xa0\xa0",F(null!==(u=e.item.content)&&void 0!==u?u:"",c),(0,a.jsx)("div",{className:"flex gap-1",children:(0,a.jsx)(b,{path:l})}),(0,s.nM)(e.item,"inciso").map((function(n,t){return(0,a.jsx)(Z,{item:n,baseItem:e.baseItem,filter:e.filter},t)}))]})}var T=function(e,n,t){return(0,a.jsx)("span",{className:"bg-amber-400",children:n},t)},I=function(e,n,t){return(0,a.jsx)(E,{width:500,openDelay:600,className:"inline",target:(0,a.jsx)("span",{className:"underline decoration-2 decoration-dotted decoration-green-500 cursor-default",children:n},t),dropdown:(0,a.jsxs)("div",{className:"indent-0 text-sm font-sans flex flex-col gap-2",children:[(0,a.jsx)("div",{className:"font-bold",children:e.title}),(0,a.jsx)("div",{className:"max-w-md italic",children:e.content}),(0,a.jsxs)("div",{children:["Fuente:"," ",(0,a.jsx)("a",{href:e.source,target:"_blank",rel:"noreferrer",children:e.author})]})]})})},M=function(e,n,t){var i,o,l=void 0,c=(0,s.Cs)(e.hacia);return c&&"inciso"in c?(i=(0,a.jsx)(g,{fragmento:c}),o={href:"/#".concat(e.hacia)}):(i=function(e){return(0,a.jsxs)("div",{className:"max-w-md font-sans",children:[e.etiqueta&&(0,a.jsx)("div",{children:e.etiqueta}),(0,a.jsxs)("div",{className:"flex",children:["en ",(0,h.Z)(e.hacia)]})]})}(e),o={href:e.hacia,target:"_blank",rel:"noreferrer"},l=(0,a.jsx)(p.Hi9,{className:"inline",size:14})),(0,a.jsx)("a",(0,x.Z)((0,r.Z)({className:"text-blue-800"},o),{children:(0,a.jsxs)(v.Z,{placement:"bottom",content:i,children:[e.texto," ",l]})}),t)};function F(e,n){if(""==e)return null;var t=0,r=[e];return n.forEach((function(e){r=r.flatMap((function(n){if("string"!=typeof n)return[n];var r=(0,s.OX)(e.text),a=(e.ignoreCase?"i":"")+"g",i=n.match(new RegExp("\\b"+r+"\\b",a));if(null==i)return n;var o=e.ignoreCase?new RegExp(r,a):e.text;return n.split(o).flatMap((function(n,r){return[0!=r?e.render(e.value,i[r-1],t++):void 0,n]})).filter((function(e){return!!e}))}))})),r}var L=t(8799),z=t(9385),A=t(6440),O=t(4940),R=t(7895);function S(e){var n=e.width,t=e.target,r=e.dropdown,i=e.className,s=(0,y.Z)(),o=s.render,l=s.onMouseOver,c=s.onTouchMove,u=s.onTouchEnd,d=s.onFocus;return o?(0,a.jsxs)(R.J,{width:n,shadow:"md",withArrow:!0,children:[(0,a.jsx)(R.J.Target,{children:t}),(0,a.jsx)(R.J.Dropdown,{children:r})]}):(0,a.jsx)("div",{tabIndex:0,className:i,onMouseOver:l,onTouchMove:c,onTouchEnd:u,onFocus:d,children:t})}function D(e){var n=e.path,t=e.item;return(0,a.jsx)("div",{className:"ml-1 mr-2 float-right flex gap-2 font-sans",children:(0,a.jsx)(S,{width:240,className:"cursor-pointer",target:(0,a.jsx)("div",{className:"cursor-pointer",children:(0,a.jsx)(v.Z,{content:"Acciones sobre "+(0,s.AZ)(t.type),children:(0,a.jsx)(p.Dxw,{size:20})})}),dropdown:(0,a.jsx)(P,{path:n,item:t})})})}function P(e){var n=e.path,t=e.item,r=t.data,o="".concat(location.origin,"/compartir/").concat(n.split("@")[0]);o+="?2022-07-31T15:11:43.234Z";var l=(0,i.useContext)(O.O);(0,s.u$)(n,l)&&-1!=l.lastIndexOf(".")&&(o+="#"+l);var c="".concat((0,s.Lv)(t)," (sobre ").concat(r.sobre,")"),u="".concat(c,":\n").concat(o,"\n"),d="Copiar enlace",h=(0,i.useState)(d),f=h[0],x=h[1],m=(0,i.useCallback)((function(){navigator.clipboard.writeText(o).then((function(){x("\xa1Copiado!"),setTimeout((function(){x(d)}),1e3)}))}),[o]);return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(q,{icon:L.DWq,label:"P\xe1gina ".concat(r.pagina," en el PDF oficial"),url:"https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf#page="+(r.pagina+4)}),(0,a.jsx)(q,{icon:z.hAV,label:f,onClick:m}),(0,a.jsx)(q,{icon:L.meP,label:"Compartir en Twitter",url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(u)}),(0,a.jsx)(q,{icon:L.k1O,label:"Compartir en Facebook",url:"https://www.facebook.com/sharer/sharer.php?display=page&u="+encodeURIComponent(o)}),(0,a.jsx)(q,{icon:L.RGt,label:"Compartir en WhatsApp",url:"https://api.whatsapp.com/send/?text=".concat(encodeURIComponent(u))}),(0,a.jsx)(q,{icon:L.iEj,label:"Compartir en Telegram",url:"https://telegram.me/share/url?url=".concat(encodeURIComponent(o))})]})}function q(e){var n=e.icon,t=e.label,r=e.url,o=e.onClick,l=(0,i.useCallback)((function(){o&&o(),A.B({action:"external_link",params:{label:t}})}),[t,o]);return(0,a.jsx)("li",{className:(0,s.AK)("block","py-1","text-sm text-gray-700"),children:(0,a.jsxs)("div",{className:"flex",children:[(0,a.jsx)(n,{size:20}),"\xa0",(0,a.jsx)("a",{href:r,onClick:l,target:"_blank",rel:"noreferrer",className:"no-underline hover:underline w-full cursor-pointer",children:t})]})})}var U=t(5186),_=t(5100),J=t(1553),Q=t(3534),V=t.n(Q),K=(0,i.createContext)({}),W=function(e){var n=(0,i.useState)(""),t=n[0],r=n[1],s=""!=t,o=(0,i.useState)(!1),l=o[0],c=o[1],u=(0,i.useState)(!1),d=u[0],h=u[1],f=(0,i.useCallback)((function(){c(!1)}),[]),x=(0,i.useCallback)((function(){h(!0),setTimeout((function(){h(!1),r("")}),3e3)}),[]),m=(0,i.useCallback)((function(e,n){e!=t?(r(e),c(l!==n)):c(n)}),[l,t]);return(0,a.jsxs)(a.Fragment,{children:[s&&(0,a.jsx)(V(),{src:t,playing:l,onEnd:f,onLoadError:x}),(0,a.jsx)(K.Provider,{value:{src:t,isPlaying:l&&s,loadError:d,setValues:m},children:e.children})]})};function B(e){var n=(0,s.Cs)(e.fragmentoId),t=null==n?"":"transitoria"in n?"disposiciones-transitorias-".concat(n.transitoria.ordinal):"articulo"in n?"capitulo-".concat(n.capitulo.ordinal,"-articulo-").concat(n.articulo.key):"",r="https://rstuven.github.io/audiopropuesta/mp3/".concat(t,"-es-US-Wavenet-B.mp3"),o=(0,i.useContext)(K),l=o.setValues,c=o.isPlaying,u=(0,i.useCallback)((function(){l&&l(r,!c)}),[c,l,r]),h=o.src===r,f=h&&o.loadError,x=h&&c;return(0,a.jsx)(d.Ct,{color:"gray",onClick:u,children:(0,a.jsx)("div",{className:"flex gap-1 cursor-pointer ",children:f?(0,a.jsx)(_.Yh4,{size:16}):x?(0,a.jsx)(U.l74,{size:16,className:"animate-pulse"}):(0,a.jsx)(J.MQV,{size:16})})})}function H(e){var n=e.item,t=e.filter;if(t.oids.length>0&&!t.oids.includes(n.oid))return null;var r=(0,s.og)(n),i=n.data,o=(0,s.L9)(r,!0);return(0,a.jsxs)("div",{"data-hash":r,className:"border border-solid rounded-lg p-3 pb-0 px-0 mb-3",children:[(0,a.jsx)(D,{path:r,item:n}),(0,a.jsx)(f.Z,{hash:r,anchor:"art\xedculo",classNameOuter:"float-left"}),(0,a.jsxs)("span",{className:"font-sans flex flex-wrap gap-1 text-base pl-3",children:[(0,a.jsx)("b",{className:"text-black mr-1 font-ConvencionFJ",children:(0,s.Lv)(n)}),(0,a.jsx)(B,{fragmentoId:r}),(0,a.jsxs)(d.Ct,{color:"purple",children:[" ",(0,s.ZQ)(i.sobre)]}),i.etiquetas.map((function(e,t){return(0,a.jsx)(X,{etiqueta:e,item:n},t)})),(0,a.jsx)(b,{path:r}),o.map((function(e,n){return(0,a.jsx)(d.Ct,{color:"info",children:(0,a.jsx)(v.Z,{content:(0,a.jsxs)(a.Fragment,{children:["por "+e.autor,(0,a.jsx)("br",{}),"en "+(0,h.Z)(e.hacia)]}),children:(0,a.jsxs)("span",{className:"flex gap-1",children:[(0,a.jsxs)("a",{href:e.hacia,target:"_blank",rel:"noreferrer",children:[e.etiqueta,o.length>1?" "+(n+1):""]}),(0,a.jsx)(j.RZY,{size:16})]})})},n)}))]}),(0,s.nM)(n,"inciso").map((function(e,r){return(0,a.jsx)(Z,{item:e,baseItem:n,filter:t},r)}))]})}function X(e){var n=e.etiqueta.replace(/ /g,"\xa0"),t=(0,s.rQ)("articulo").filter((function(n){return n.oid!=e.item.oid&&n.data.etiquetas.includes(e.etiqueta)}));return 0==t.length?(0,a.jsx)(d.Ct,{color:"pink",children:n}):(0,a.jsx)(d.Ct,{color:"pink",children:(0,a.jsx)(E,{width:330,openDelay:600,className:"cursor-pointer",target:(0,a.jsx)("div",{className:"cursor-pointer",children:(0,a.jsxs)("div",{className:"flex",children:[n,(0,a.jsx)(p.kzR,{size:5,className:"ml-1 h-4 w-4"})]})}),dropdown:(0,a.jsx)("div",{className:"max-h-[202px] overflow-y-scroll overscroll-contain",children:t.map((function(e,n){return(0,a.jsx)("div",{children:(0,a.jsx)("a",{className:"no-underline hover:underline font-normal",href:"/#"+(0,s.og)(e),children:"".concat((0,s.Lv)(e)," sobre ").concat(e.data.sobre)})},n)}))})})})}function Y(e){return e.filter.oids.length>0&&!e.filter.oids.includes(e.item.oid)?null:(0,a.jsxs)("div",{children:[(0,a.jsxs)("h3",{"data-hash":e.path,className:"text-center rounded",children:[(0,a.jsx)(f.Z,{hash:e.path,anchor:"t\xedtulo"})," ",e.item.label]}),(0,s.nM)(e.item,"articulo").map((function(n){return(0,a.jsx)(H,{item:n,filter:e.filter},n.oid)}))]})}function G(e){var n=e.text.split(" "),t=n.flatMap((function(e,t){return[e[0],e.substring(1),t!=n.length-1?" ":""]})).filter((function(e){return""!=e}));return(0,a.jsx)(a.Fragment,{children:t.map((function(n,t){return(0,a.jsx)("span",{className:(r=n,r==r.toLowerCase()&&r!=r.toUpperCase()?e.lowercaseClass:e.uppercaseClass),children:n.toUpperCase()},t);var r}))})}function $(e){var n=e.item,t=e.filter;if(t.oids.length>0&&!t.oids.includes(n.oid))return null;var r,i=(0,s.og)(n);return(0,a.jsxs)("div",{children:[(0,a.jsxs)("h2",{"data-hash":i,className:"text-center mt-1 rounded",children:[(0,a.jsx)(f.Z,{hash:i,anchor:"cap\xedtulo"})," ",(0,a.jsx)(G,{lowercaseClass:"text-lg",text:"Cap\xedtulo "+n.key}),(0,a.jsx)("br",{}),(0,a.jsx)(G,{lowercaseClass:"text-lg",text:null!==(r=n.label)&&void 0!==r?r:""})]}),(0,s.nM)(n,"articulo").map((function(e){return(0,a.jsx)(H,{item:e,filter:t},e.oid)})),(0,s.nM)(n,"titulo").map((function(e,n){return(0,a.jsx)(Y,{item:e,path:"".concat(i,".").concat(n+1),filter:t},n)}))]})}function ee(e){var n=e.item,t=e.filter;if(t.oids.length>0&&!t.oids.includes(n.oid))return null;var r=(0,s.og)(n),i=n.data;return(0,a.jsxs)("div",{"data-hash":r,className:"border border-solid rounded-md p-3 mb-3",children:[(0,a.jsx)(D,{path:r,item:n}),(0,a.jsxs)("span",{className:"font-sans flex flex-wrap gap-1 text-base",children:[(0,a.jsx)(f.Z,{hash:r,anchor:"disposici\xf3n transitoria"})," ",(0,a.jsx)("b",{className:"text-black mx-1 font-ConvencionFJ",children:(0,s.Lv)(n)}),(0,a.jsx)(B,{fragmentoId:r}),i.sobre&&(0,a.jsxs)(d.Ct,{color:"purple",children:[" ",(0,s.ZQ)(i.sobre)]})]}),(0,s.nM)(n,"inciso").map((function(e,r){return(0,a.jsx)(Z,{item:e,baseItem:n,filter:t},r)}))]})}function ne(e){if(e.filter.oids.length>0&&!e.filter.oids.includes(s.dS.oid))return null;var n,t=s.dS.type;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("h2",{"data-hash":t,className:"text-center mt-1 rounded",children:[(0,a.jsx)(f.Z,{hash:t,anchor:"apartado"})," ",(0,a.jsx)(G,{lowercaseClass:"text-lg",text:null!==(n=s.dS.label)&&void 0!==n?n:""})]}),(0,s.rQ)("transitoria").map((function(n){return(0,a.jsx)(ee,{item:n,filter:e.filter},n.oid)}))]})}function te(e){if(e.filter.oids.length>0&&!e.filter.oids.includes(s.PU.oid))return null;var n=s.PU.type;return(0,a.jsxs)("div",{"data-hash":n,className:"mb-8 text-xl text-center italic py-4 px-2 rounded",children:[(0,a.jsx)(f.Z,{hash:n,anchor:"pre\xe1mbulo"})," ",s.PU.content]})}function re(e){var n=e.filter;return(0,a.jsx)(W,{children:(0,a.jsxs)("div",{className:"prose px-3 sm:px-10 font-ConvencionFJ",children:[(0,a.jsx)("a",{"data-id":"inicio",tabIndex:0}),(0,a.jsx)("h1",{className:"text-center font-normal",children:(0,a.jsx)(G,{lowercaseClass:"text-3xl",text:"Constituci\xf3n Pol\xedtica de la Rep\xfablica de Chile"})}),(0,a.jsx)(te,{filter:n}),(0,s.rQ)("capitulo").map((function(e){return(0,a.jsx)($,{item:e,filter:n},e.oid)})),(0,a.jsx)(ne,{filter:n}),(0,a.jsx)("div",{className:"text-center text-2xl mt-10",children:"********"})]})})}var ae=t(9393),ie=t(3022);function se(e){var n=(0,i.useCallback)((0,s.Ds)((function(n){var t,r;e.onFilterChange(null!==(r=null===(t=n.target)||void 0===t?void 0:t.value)&&void 0!==r?r:"")}),500),[e]),t=(0,i.useRef)(null),r=(0,i.useCallback)((function(e){return e.target.select()}),[]);return(0,i.useEffect)((function(){var n=function(n){if("Escape"===n.key&&e.onClose(),"Enter"===n.key){var t=e.filter.oids.map((function(e){return(0,s.up)(e)})).find((function(e){return"articulo"==e.type}));if(t){var r=(0,s.og)(t);e.onClose(),location.hash=r}}};return document.addEventListener("keydown",n,!1),function(){return document.removeEventListener("keydown",n)}})),e.open?(0,a.jsxs)("div",{className:(0,s.AK)("fixed flex flex-col z-10","right-4 w-11/12 md:w-60 h-24 p-2 pl-4 pr-6 md:pr-4 top-[55px]","bg-white","border-[1px] border-gray-200 rounded-lg","justify-center","items-center","shadow-2xl shadow-black/20"),children:[(0,a.jsxs)("div",{className:"w-full",children:[(0,a.jsx)("div",{className:"md:hidden cursor-pointer float-right absolute right-0 top-1 p-1",children:(0,a.jsx)(ie.v8y,{size:16,onClick:e.onClose})}),(0,a.jsx)("input",{ref:t,autoFocus:!0,tabIndex:0,placeholder:"Art\xedculo o texto (m\xedn. 4 caracteres)",className:"border rounded p-2 h-8 w-full placeholder:text-sm placeholder:text-gray-400",type:"text",onChange:n,onFocus:r,defaultValue:e.filter.text})]}),""!=e.filter.text&&(0,a.jsxs)("div",{className:"text-sm pt-2",children:[e.filter.totalMatches," ocurrencias",e.filter.foundItems>0&&(0,a.jsxs)(a.Fragment,{children:[" en ",e.filter.foundItems," p\xe1rrafos"]})]})]}):null}function oe(){var e=(0,i.useRef)(null),n=(0,i.useRef)(null),t=(0,w.Z)("(min-height: 600px)");o(t?350:150,"auto",e),o(t?350:150,"smooth",n,!0),function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bg-amber-100";(0,i.useEffect)((function(){var t=function(){var t;if(e&&!e.current)return!1;var r=n.split(" "),a=null===(t=e?e.current:document)||void 0===t?void 0:t.querySelectorAll(".".concat(r[0],"[data-hash]"));r.forEach((function(e){null===a||void 0===a||a.forEach((function(n){return n.classList.remove(e)}))}));var i=l("data-hash",e);return!!i&&(r.forEach((function(e){i.classList.add(e)})),!0)},r=function(){return c(t)};return r(),window.addEventListener("hashchange",r),function(){window.removeEventListener("hashchange",r)}}),[n,e])}(e);var d=(0,i.useState)(""),h=d[0],f=d[1],x=(0,i.useCallback)((function(e){f(e)}),[]),m=(0,i.useState)(!1),p=m[0],v=m[1],j=(0,i.useCallback)((function(){v(!1),f("")}),[]),g=(0,i.useCallback)((function(){v(!p),p&&f("")}),[p]),b=function(e){var n;if(""==e)n={text:"",oids:[],totalMatches:0,foundItems:0};else{var t=new RegExp((0,s.OX)(e),"ig"),a=(0,s.MI)((function(n){if(e.length<4){var r="articulo"==n.type?n:"inciso"==n.type&&(0,s.nc)(n,"articulo");return r&&e==String(r.key)?1:0}var a,i=null!==(a=n.content)&&void 0!==a?a:"";return Array.from(i.matchAll(t)).length}));n=(0,r.Z)({text:e.length<4?"":e},a)}return n}(h);return(0,a.jsx)(O.A,{children:(0,a.jsxs)(N,{children:[(0,a.jsx)("div",{className:"hidden bg-amber-100"}),(0,a.jsx)(se,{open:p,onClose:j,onFilterChange:x,filter:b}),(0,a.jsxs)("div",{className:"h-screen overflow-hidden",children:[(0,a.jsx)("div",{className:"z-10 md:mr-4 relative",children:(0,a.jsx)(ae.A,{onToolsToggle:g,setToolsOpen:v})}),(0,a.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-7",children:[(0,a.jsx)("aside",{ref:n,className:"pb-3 h-screen overflow-y-scroll overscroll-contain mt-[-62px] pt-[62px] bg-[#34005f] hidden md:block md:col-span-2",children:(0,a.jsx)(u.Z,{filter:b})}),(0,a.jsx)("div",{ref:e,className:"h-screen overflow-y-scroll overscroll-contain mt-[-62px] pt-20 pb-10 md:col-span-5 grid justify-center",children:(0,a.jsx)(re,{filter:b})})]})]})]})})}}}]);