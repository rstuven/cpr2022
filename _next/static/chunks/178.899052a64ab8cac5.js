"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[178],{8178:function(e,n,t){t.r(n),t.d(n,{default:function(){return ae}});var r=t(7328),i=t(2322),a=t(2784),s=t(7676);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=(0,a.useRef)();(0,a.useEffect)((function(){var a=function(a){if(t&&!t.current)return!1;if(null!=i.current&&i.current===window.location.hash)return!0;i.current=window.location.hash;var s,o=l("data-id",t,r);if(!o||0==o.offsetTop)return!1;"auto"==n?(o.focus(),o.blur()):null===(s=t?t.current:window)||void 0===s||s.scrollTo({top:o.offsetTop-e,behavior:a});return!0};c((function(){return a("auto")}));var s=function(){return c((function(){return a(n)}))};return window.addEventListener("hashchange",s),function(){window.removeEventListener("hashchange",s)}}),[n,r,e,t])}function l(e,n,t){var r,i=(0,s.en)(),a=i;for(t&&-1!=i.indexOf("@")&&(a=i.split("@")[1]);;){var o;if(r=null===(o=n?n.current:document)||void 0===o?void 0:o.querySelector("[".concat(e,'^="').concat(a,'"]')))break;var l=a.lastIndexOf(".");if(-1==l&&-1==(l=a.lastIndexOf(":"))){if(-1==(l=a.lastIndexOf("@")))break;t||l++}a=a.substring(0,l)}return r}function c(e){e()||setTimeout((function(){e()||setTimeout((function(){e()}),100)}),100)}var u=t(7261),d=t(3591),h=t(4482),f=t(4031),x=t(6670),m=t(2742),p=t(1439),v=t(924);function j(e){var n=e.fragmento;if(!("inciso"in n))return null;var t,r="articulo"in n?n.articulo:n.transitoria,a="articulo"in n?(0,s.Lv)(n.capitulo):"Disposiciones Transitorias";"titulo"in n&&n.titulo&&(t=(0,s.Lv)(n.titulo));var o="articulo"in n?(0,s.Lv)(n.articulo):(0,s.Lv)(n.transitoria),l="articulo"in n?n.articulo.data.sobre:n.transitoria.data.sobre,c=n.inciso,u=c&&(0,s.hn)(c,r,!1),d=c&&u+" "+c.content;if(c){var h=(0,s.up)(c.parent);"inciso"==h.type&&(d="".concat(h.content," ").concat("a"==c.key?"":"(...)"," ").concat(d))}return(0,i.jsxs)("div",{className:"max-w-md font-sans",children:[(0,i.jsx)("div",{children:a}),t&&(0,i.jsx)("div",{children:t}),(0,i.jsxs)("div",{children:[o," ",l&&" (sobre ".concat(l,")"),d&&":"]}),d&&(0,i.jsxs)("div",{className:"mt-2",children:['"',(0,i.jsx)("span",{className:"font-ConvencionFJ",children:d}),'"']})]})}function g(e){var n=(0,s.tJ)(e.path);return(0,i.jsx)(i.Fragment,{children:n.map((function(e,n){var t=(0,s.Cs)(e.desde);if(!t||!("inciso"in t)||!t.inciso)return null;var r=(0,s.Mm)(t);return(0,i.jsx)(d.Ct,{color:"success",children:(0,i.jsx)(p.Z,{placement:"bottom",content:(0,i.jsx)(j,{fragmento:t}),children:(0,i.jsxs)("span",{className:"flex gap-1 font-sans",children:[(0,i.jsx)(v.vkH,{size:14}),(0,i.jsx)("a",{href:"#"+e.desde,children:r})]})})},n)}))})}var b=t(3939),w=(0,a.createContext)(!1),C=function(e){var n=(0,b.Z)("(min-width: 500px)");return(0,i.jsx)(w.Provider,{value:n,children:e.children})};function N(e){var n=(0,a.useContext)(w);if(e.filter.oids.length>0&&!e.filter.oids.includes(e.item.oid))return null;var t,r=(0,s.hn)(e.item,e.baseItem,!n),o=n&&""!=r,l=(0,s.og)(e.item),c=(0,s.L9)(l).filter((function(e){return e.texto})).map((function(e){return{text:e.texto,value:e,ignoreCase:!1,render:y}}));return e.filter.text&&c.push({text:e.filter.text,value:e.filter.text,ignoreCase:!0,render:k}),(0,i.jsxs)("div",{"data-hash":l,className:(0,s.AK)("mt-1 leading-6 rounded-lg pr-2 py-1",o?"pl-[3.4rem]":"pl-9",o?"-indent-10":"-indent-9"),children:[(0,i.jsx)(f.Z,{indent:o,hash:l,anchor:"string"==typeof e.item.key?"letra":"inciso"})," ",(0,i.jsx)("b",{children:r}),"\xa0\xa0",E(null!==(t=e.item.content)&&void 0!==t?t:"",c),(0,i.jsx)("div",{className:"flex gap-1",children:(0,i.jsx)(g,{path:l})}),(0,s.nM)(e.item,"inciso").map((function(n,t){return(0,i.jsx)(N,{item:n,baseItem:e.baseItem,filter:e.filter},t)}))]})}var k=function(e,n,t){return(0,i.jsx)("span",{className:"bg-amber-400",children:n},t)},y=function(e,n,t){var a,o,l=void 0,c=(0,s.Cs)(e.hacia);return c&&"inciso"in c?(a=(0,i.jsx)(j,{fragmento:c}),o={href:"/#".concat(e.hacia)}):(a=function(e){return(0,i.jsxs)("div",{className:"max-w-md font-sans",children:[e.etiqueta&&(0,i.jsx)("div",{children:e.etiqueta}),(0,i.jsxs)("div",{className:"flex",children:["en ",(0,h.Z)(e.hacia)]})]})}(e),o={href:e.hacia,target:"_blank",rel:"noreferrer"},l=(0,i.jsx)(m.Hi9,{className:"inline",size:14})),(0,i.jsx)("a",(0,x.Z)((0,r.Z)({className:"text-blue-800"},o),{children:(0,i.jsxs)(p.Z,{placement:"bottom",content:a,children:[e.texto," ",l]})}),t)};function E(e,n){if(""==e)return null;var t=0,r=[e];return n.forEach((function(e){r=r.flatMap((function(n){if("string"!=typeof n)return[n];var r=(0,s.OX)(e.text),i=(e.ignoreCase?"i":"")+"g",a=n.match(new RegExp(r,i));if(null==a)return n;var o=e.ignoreCase?new RegExp(r,i):e.text;return n.split(o).flatMap((function(n,r){return[0!=r?e.render(e.value,a[r-1],t++):void 0,n]})).filter((function(e){return!!e}))}))})),r}var T=t(4286),Z=t(5759),I=t(8799),M=t(9385),F=t(7895),L=t(6440),z=t(4940);function O(e){var n=e.path,t=e.item;return(0,i.jsx)("div",{className:"ml-1 mr-2 float-right flex gap-2 font-sans",children:(0,i.jsx)(R,{target:(0,i.jsx)("div",{className:"cursor-pointer",children:(0,i.jsx)(p.Z,{content:"Acciones sobre "+(0,s.AZ)(t.type),children:(0,i.jsx)(m.Dxw,{size:20})})}),dropdown:(0,i.jsx)(A,{path:n,item:t})})})}function R(e){var n=e.target,t=e.dropdown,r=(0,Z.Z)(),a=r.render,s=r.onMouseOver,o=r.onTouchMove,l=r.onTouchEnd,c=r.onFocus;return a?(0,i.jsxs)(F.J,{width:240,shadow:"md",withArrow:!0,children:[(0,i.jsx)(F.J.Target,{children:n}),(0,i.jsx)(F.J.Dropdown,{children:t})]}):(0,i.jsx)("div",{tabIndex:0,className:"cursor-pointer",onMouseOver:s,onTouchMove:o,onTouchEnd:l,onFocus:c,children:n})}function A(e){var n=e.path,t=e.item,r=t.data,o="".concat(location.origin,"/compartir/").concat(n.split("@")[0]);o+="?2022-07-30T23:22:25.938Z";var l=(0,a.useContext)(z.O);(0,s.u$)(n,l)&&-1!=l.lastIndexOf(".")&&(o+="#"+l);var c="".concat((0,s.Lv)(t)," (sobre ").concat(r.sobre,")"),u="".concat(c,":\n").concat(o,"\n"),d="Copiar enlace",h=(0,a.useState)(d),f=h[0],x=h[1],m=(0,a.useCallback)((function(){navigator.clipboard.writeText(o).then((function(){x("\xa1Copiado!"),setTimeout((function(){x(d)}),1e3)}))}),[o]);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(S,{icon:I.DWq,label:"P\xe1gina ".concat(r.pagina," en el PDF oficial"),url:"https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf#page="+(r.pagina+4)}),(0,i.jsx)(S,{icon:M.hAV,label:f,onClick:m}),(0,i.jsx)(S,{icon:I.meP,label:"Compartir en Twitter",url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(u)}),(0,i.jsx)(S,{icon:I.k1O,label:"Compartir en Facebook",url:"https://www.facebook.com/sharer/sharer.php?display=page&u="+encodeURIComponent(o)}),(0,i.jsx)(S,{icon:I.RGt,label:"Compartir en WhatsApp",url:"https://api.whatsapp.com/send/?text=".concat(encodeURIComponent(u))}),(0,i.jsx)(S,{icon:I.iEj,label:"Compartir en Telegram",url:"https://telegram.me/share/url?url=".concat(encodeURIComponent(o))})]})}function S(e){var n=e.icon,t=e.label,r=e.url,o=e.onClick,l=(0,a.useCallback)((function(){o&&o(),L.B({action:"external_link",params:{label:t}})}),[t,o]);return(0,i.jsx)("li",{className:(0,s.AK)("block","py-1","text-sm text-gray-700"),children:(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(n,{size:20}),"\xa0",(0,i.jsx)("a",{href:r,onClick:l,target:"_blank",rel:"noreferrer",className:"no-underline hover:underline w-full cursor-pointer",children:t})]})})}var P=t(5186),q=t(5100),U=t(1553),D=t(3534),J=t.n(D),_=(0,a.createContext)({}),Q=function(e){var n=(0,a.useState)(""),t=n[0],r=n[1],s=""!=t,o=(0,a.useState)(!1),l=o[0],c=o[1],u=(0,a.useState)(!1),d=u[0],h=u[1],f=(0,a.useCallback)((function(){c(!1)}),[]),x=(0,a.useCallback)((function(){h(!0),setTimeout((function(){h(!1),r("")}),3e3)}),[]),m=(0,a.useCallback)((function(e,n){e!=t?(r(e),c(l!==n)):c(n)}),[l,t]);return(0,i.jsxs)(i.Fragment,{children:[s&&(0,i.jsx)(J(),{src:t,playing:l,onEnd:f,onLoadError:x}),(0,i.jsx)(_.Provider,{value:{src:t,isPlaying:l&&s,loadError:d,setValues:m},children:e.children})]})};function V(e){var n=(0,s.Cs)(e.fragmentoId),t=null==n?"":"transitoria"in n?"disposiciones-transitorias-".concat(n.transitoria.ordinal):"articulo"in n?"capitulo-".concat(n.capitulo.ordinal,"-articulo-").concat(n.articulo.key):"",r="https://rstuven.github.io/audiopropuesta/mp3/".concat(t,"-es-US-Wavenet-B.mp3"),o=(0,a.useContext)(_),l=o.setValues,c=o.isPlaying,u=(0,a.useCallback)((function(){l&&l(r,!c)}),[c,l,r]),h=o.src===r,f=h&&o.loadError,x=h&&c;return(0,i.jsx)(d.Ct,{color:"gray",onClick:u,children:(0,i.jsx)("div",{className:"flex gap-1 cursor-pointer ",children:f?(0,i.jsx)(q.Yh4,{size:16}):x?(0,i.jsx)(P.l74,{size:16,className:"animate-pulse"}):(0,i.jsx)(U.MQV,{size:16})})})}function K(e){var n=e.item,t=e.filter;if(t.oids.length>0&&!t.oids.includes(n.oid))return null;var r=(0,s.og)(n),a=n.data,o=(0,s.L9)(r,!0);return(0,i.jsxs)("div",{"data-hash":r,className:"border border-solid rounded-lg p-3 pb-0 px-0 mb-3",children:[(0,i.jsx)(O,{path:r,item:n}),(0,i.jsx)(f.Z,{hash:r,anchor:"art\xedculo",classNameOuter:"float-left"}),(0,i.jsxs)("span",{className:"font-sans flex flex-wrap gap-1 text-base pl-3",children:[(0,i.jsx)("b",{className:"text-black mr-1 font-ConvencionFJ",children:(0,s.Lv)(n)}),(0,i.jsx)(V,{fragmentoId:r}),(0,i.jsxs)(d.Ct,{color:"purple",children:[" ",(0,s.ZQ)(a.sobre)]}),a.etiquetas.map((function(e,t){return(0,i.jsx)(W,{etiqueta:e,item:n},t)})),(0,i.jsx)(g,{path:r}),o.map((function(e,n){return(0,i.jsx)(d.Ct,{color:"info",children:(0,i.jsx)(p.Z,{content:(0,i.jsxs)(i.Fragment,{children:["por "+e.autor,(0,i.jsx)("br",{}),"en "+(0,h.Z)(e.hacia)]}),children:(0,i.jsxs)("span",{className:"flex gap-1",children:[(0,i.jsxs)("a",{href:e.hacia,target:"_blank",rel:"noreferrer",children:[e.etiqueta,o.length>1?" "+(n+1):""]}),(0,i.jsx)(v.RZY,{size:16})]})})},n)}))]}),(0,s.nM)(n,"inciso").map((function(e,r){return(0,i.jsx)(N,{item:e,baseItem:n,filter:t},r)}))]})}function W(e){var n=e.etiqueta.replace(/ /g,"\xa0"),t=(0,s.rQ)("articulo").filter((function(n){return n.oid!=e.item.oid&&n.data.etiquetas.includes(e.etiqueta)}));return 0==t.length?(0,i.jsx)(d.Ct,{color:"pink",children:n}):(0,i.jsx)(d.Ct,{color:"pink",children:(0,i.jsx)(B,{target:(0,i.jsx)("div",{className:"cursor-pointer",children:(0,i.jsxs)("div",{className:"flex",children:[n,(0,i.jsx)(m.kzR,{size:5,className:"ml-1 h-4 w-4"})]})}),dropdown:(0,i.jsx)("div",{className:"max-h-[202px] overflow-y-scroll overscroll-contain",children:t.map((function(e,n){return(0,i.jsx)("div",{children:(0,i.jsx)("a",{className:"no-underline hover:underline font-normal",href:"/#"+(0,s.og)(e),children:"".concat((0,s.Lv)(e)," sobre ").concat(e.data.sobre)})},n)}))})})})}function B(e){var n=e.target,t=e.dropdown,r=(0,Z.Z)(),a=r.render,s=r.onMouseOver,o=r.onTouchMove,l=r.onTouchEnd,c=r.onFocus;return a?(0,i.jsxs)(T.z,{width:330,shadow:"md",withArrow:!0,openDelay:200,closeDelay:400,initiallyOpened:!0,children:[(0,i.jsx)(T.z.Target,{children:n}),(0,i.jsx)(T.z.Dropdown,{children:t})]}):(0,i.jsx)("div",{tabIndex:0,className:"cursor-pointer",onMouseOver:s,onTouchMove:o,onTouchEnd:l,onFocus:c,children:n})}function H(e){return e.filter.oids.length>0&&!e.filter.oids.includes(e.item.oid)?null:(0,i.jsxs)("div",{children:[(0,i.jsxs)("h3",{"data-hash":e.path,className:"text-center rounded",children:[(0,i.jsx)(f.Z,{hash:e.path,anchor:"t\xedtulo"})," ",e.item.label]}),(0,s.nM)(e.item,"articulo").map((function(n){return(0,i.jsx)(K,{item:n,filter:e.filter},n.oid)}))]})}function X(e){var n=e.text.split(" "),t=n.flatMap((function(e,t){return[e[0],e.substring(1),t!=n.length-1?" ":""]})).filter((function(e){return""!=e}));return(0,i.jsx)(i.Fragment,{children:t.map((function(n,t){return(0,i.jsx)("span",{className:(r=n,r==r.toLowerCase()&&r!=r.toUpperCase()?e.lowercaseClass:e.uppercaseClass),children:n.toUpperCase()},t);var r}))})}function Y(e){var n=e.item,t=e.filter;if(t.oids.length>0&&!t.oids.includes(n.oid))return null;var r,a=(0,s.og)(n);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{"data-hash":a,className:"text-center mt-1 rounded",children:[(0,i.jsx)(f.Z,{hash:a,anchor:"cap\xedtulo"})," ",(0,i.jsx)(X,{lowercaseClass:"text-lg",text:"Cap\xedtulo "+n.key}),(0,i.jsx)("br",{}),(0,i.jsx)(X,{lowercaseClass:"text-lg",text:null!==(r=n.label)&&void 0!==r?r:""})]}),(0,s.nM)(n,"articulo").map((function(e){return(0,i.jsx)(K,{item:e,filter:t},e.oid)})),(0,s.nM)(n,"titulo").map((function(e,n){return(0,i.jsx)(H,{item:e,path:"".concat(a,".").concat(n+1),filter:t},n)}))]})}function G(e){var n=e.item,t=e.filter;if(t.oids.length>0&&!t.oids.includes(n.oid))return null;var r=(0,s.og)(n),a=n.data;return(0,i.jsxs)("div",{"data-hash":r,className:"border border-solid rounded-md p-3 mb-3",children:[(0,i.jsx)(O,{path:r,item:n}),(0,i.jsxs)("span",{className:"font-sans flex flex-wrap gap-1 text-base",children:[(0,i.jsx)(f.Z,{hash:r,anchor:"disposici\xf3n transitoria"})," ",(0,i.jsx)("b",{className:"text-black mx-1 font-ConvencionFJ",children:(0,s.Lv)(n)}),(0,i.jsx)(V,{fragmentoId:r}),a.sobre&&(0,i.jsxs)(d.Ct,{color:"purple",children:[" ",(0,s.ZQ)(a.sobre)]})]}),(0,s.nM)(n,"inciso").map((function(e,r){return(0,i.jsx)(N,{item:e,baseItem:n,filter:t},r)}))]})}function $(e){if(e.filter.oids.length>0&&!e.filter.oids.includes(s.dS.oid))return null;var n,t=s.dS.type;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h2",{"data-hash":t,className:"text-center mt-1 rounded",children:[(0,i.jsx)(f.Z,{hash:t,anchor:"apartado"})," ",(0,i.jsx)(X,{lowercaseClass:"text-lg",text:null!==(n=s.dS.label)&&void 0!==n?n:""})]}),(0,s.rQ)("transitoria").map((function(n){return(0,i.jsx)(G,{item:n,filter:e.filter},n.oid)}))]})}function ee(e){if(e.filter.oids.length>0&&!e.filter.oids.includes(s.PU.oid))return null;var n=s.PU.type;return(0,i.jsxs)("div",{"data-hash":n,className:"mb-8 text-xl text-center italic py-4 px-2 rounded",children:[(0,i.jsx)(f.Z,{hash:n,anchor:"pre\xe1mbulo"})," ",s.PU.content]})}function ne(e){var n=e.filter;return(0,i.jsx)(Q,{children:(0,i.jsxs)("div",{className:"prose px-3 sm:px-10 font-ConvencionFJ",children:[(0,i.jsx)("a",{"data-id":"inicio",tabIndex:0}),(0,i.jsx)("h1",{className:"text-center font-normal",children:(0,i.jsx)(X,{lowercaseClass:"text-3xl",text:"Constituci\xf3n Pol\xedtica de la Rep\xfablica de Chile"})}),(0,i.jsx)(ee,{filter:n}),(0,s.rQ)("capitulo").map((function(e){return(0,i.jsx)(Y,{item:e,filter:n},e.oid)})),(0,i.jsx)($,{filter:n}),(0,i.jsx)("div",{className:"text-center text-2xl mt-10",children:"********"})]})})}var te=t(9393),re=t(3022);function ie(e){var n=(0,a.useCallback)((0,s.Ds)((function(n){var t,r;e.onFilterChange(null!==(r=null===(t=n.target)||void 0===t?void 0:t.value)&&void 0!==r?r:"")}),500),[e]),t=(0,a.useRef)(null),r=(0,a.useCallback)((function(e){return e.target.select()}),[]);return(0,a.useEffect)((function(){var n=function(n){if("Escape"===n.key&&e.onClose(),"Enter"===n.key){var t=e.filter.oids.map((function(e){return(0,s.up)(e)})).find((function(e){return"articulo"==e.type}));if(t){var r=(0,s.og)(t);e.onClose(),location.hash=r}}};return document.addEventListener("keydown",n,!1),function(){return document.removeEventListener("keydown",n)}})),e.open?(0,i.jsxs)("div",{className:(0,s.AK)("fixed flex flex-col z-10","right-4 w-11/12 md:w-60 h-24 p-2 pl-4 pr-6 md:pr-4 top-[55px]","bg-white","border-[1px] border-gray-200 rounded-lg","justify-center","items-center","shadow-2xl shadow-black/20"),children:[(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsx)("div",{className:"md:hidden cursor-pointer float-right absolute right-0 top-1 p-1",children:(0,i.jsx)(re.v8y,{size:16,onClick:e.onClose})}),(0,i.jsx)("input",{ref:t,autoFocus:!0,tabIndex:0,placeholder:"Art\xedculo o texto (m\xedn. 4 caracteres)",className:"border rounded p-2 h-8 w-full placeholder:text-sm placeholder:text-gray-400",type:"text",onChange:n,onFocus:r,defaultValue:e.filter.text})]}),""!=e.filter.text&&(0,i.jsxs)("div",{className:"text-sm pt-2",children:[e.filter.totalMatches," ocurrencias",e.filter.foundItems>0&&(0,i.jsxs)(i.Fragment,{children:[" en ",e.filter.foundItems," p\xe1rrafos"]})]})]}):null}function ae(){var e=(0,a.useRef)(null),n=(0,a.useRef)(null),t=(0,b.Z)("(min-height: 600px)");o(t?350:150,"auto",e),o(t?350:150,"smooth",n,!0),function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bg-amber-100";(0,a.useEffect)((function(){var t=function(){var t;if(e&&!e.current)return!1;var r=n.split(" "),i=null===(t=e?e.current:document)||void 0===t?void 0:t.querySelectorAll(".".concat(r[0],"[data-hash]"));r.forEach((function(e){null===i||void 0===i||i.forEach((function(n){return n.classList.remove(e)}))}));var a=l("data-hash",e);return!!a&&(r.forEach((function(e){a.classList.add(e)})),!0)},r=function(){return c(t)};return r(),window.addEventListener("hashchange",r),function(){window.removeEventListener("hashchange",r)}}),[n,e])}(e);var d=(0,a.useState)(""),h=d[0],f=d[1],x=(0,a.useCallback)((function(e){f(e)}),[]),m=(0,a.useState)(!1),p=m[0],v=m[1],j=(0,a.useCallback)((function(){v(!1),f("")}),[]),g=(0,a.useCallback)((function(){v(!p),p&&f("")}),[p]),w=function(e){var n;if(""==e)n={text:"",oids:[],totalMatches:0,foundItems:0};else{var t=new RegExp((0,s.OX)(e),"ig"),i=(0,s.MI)((function(n){if(e.length<4){var r="articulo"==n.type?n:"inciso"==n.type&&(0,s.nc)(n,"articulo");return r&&e==String(r.key)?1:0}var i,a=null!==(i=n.content)&&void 0!==i?i:"";return Array.from(a.matchAll(t)).length}));n=(0,r.Z)({text:e.length<4?"":e},i)}return n}(h);return(0,i.jsx)(z.A,{children:(0,i.jsxs)(C,{children:[(0,i.jsx)("div",{className:"hidden bg-amber-100"}),(0,i.jsx)(ie,{open:p,onClose:j,onFilterChange:x,filter:w}),(0,i.jsxs)("div",{className:"h-screen overflow-hidden",children:[(0,i.jsx)("div",{className:"z-10 md:mr-4 relative",children:(0,i.jsx)(te.A,{onToolsToggle:g,setToolsOpen:v})}),(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-7",children:[(0,i.jsx)("aside",{ref:n,className:"pb-3 h-screen overflow-y-scroll overscroll-contain mt-[-62px] pt-[62px] bg-[#34005f] hidden md:block md:col-span-2",children:(0,i.jsx)(u.Z,{filter:w})}),(0,i.jsx)("div",{ref:e,className:"h-screen overflow-y-scroll overscroll-contain mt-[-62px] pt-20 pb-10 md:col-span-5 grid justify-center",children:(0,i.jsx)(ne,{filter:w})})]})]})]})})}}}]);