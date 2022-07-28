"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[259],{2259:function(e,n,t){t.r(n),t.d(n,{default:function(){return V}});var r=t(7328),i=t(2322),a=t(2784),s=t(7676);function o(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0,t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0;(0,a.useEffect)((function(){var i=function(i){if(t&&!t.current)return!1;var a,s=l("data-id",t,r);if(!s||0==s.offsetTop)return!1;"auto"==n?(s.focus(),s.blur()):null===(a=t?t.current:window)||void 0===a||a.scrollTo({top:s.offsetTop-e,behavior:i});return!0};c((function(){return i("auto")}));var a=function(){return c((function(){return i(n)}))};return window.addEventListener("hashchange",a),function(){window.removeEventListener("hashchange",a)}}),[n,r,e,t])}function l(e,n,t){var r,i=(0,s.en)(),a=i;for(t&&-1!=i.indexOf("@")&&(a=i.split("@")[1]);;){var o;if(r=null===(o=n?n.current:document)||void 0===o?void 0:o.querySelector("[".concat(e,'^="').concat(a,'"]')))break;var l=a.lastIndexOf(".");if(-1==l&&-1==(l=a.lastIndexOf(":"))){if(-1==(l=a.lastIndexOf("@")))break;t||l++}a=a.substring(0,l)}return r}function c(e){e()||setTimeout((function(){e()||setTimeout((function(){e()}),100)}),100)}var d=t(3939),u=t(7261),h=t(3591),f=t(4482),x=t(4031),m=t(6670),p=t(2742),v=t(1439),j=t(924);function g(e){var n=e.fragmento;if(!("inciso"in n))return null;var t,r="articulo"in n?n.articulo:n.transitoria,a="articulo"in n?(0,s.Lv)(n.capitulo):"Disposiciones Transitorias";"titulo"in n&&n.titulo&&(t=(0,s.Lv)(n.titulo));var o="articulo"in n?(0,s.Lv)(n.articulo):(0,s.Lv)(n.transitoria),l="articulo"in n?n.articulo.data.sobre:n.transitoria.data.sobre,c=n.inciso,d=c&&(0,s.hn)(c,r,!1),u=c&&d+" "+c.content;if(c){var h=(0,s.up)(c.parent);"inciso"==h.type&&(u="".concat(h.content," ").concat("a"==c.key?"":"(...)"," ").concat(u))}return(0,i.jsxs)("div",{className:"max-w-md font-sans",children:[(0,i.jsx)("div",{children:a}),t&&(0,i.jsx)("div",{children:t}),(0,i.jsxs)("div",{children:[o," ",l&&" (sobre ".concat(l,")"),u&&":"]}),u&&(0,i.jsxs)("div",{className:"mt-2",children:['"',(0,i.jsx)("span",{className:"font-ConvencionFJ",children:u}),'"']})]})}function b(e){var n=(0,s.tJ)(e.path);return(0,i.jsx)(i.Fragment,{children:n.map((function(e,n){var t=(0,s.Cs)(e.desde);if(!t||!("inciso"in t)||!t.inciso)return null;var r=(0,s.Mm)(t);return(0,i.jsx)(h.Ct,{color:"success",children:(0,i.jsx)(v.Z,{placement:"bottom",content:(0,i.jsx)(g,{fragmento:t}),children:(0,i.jsxs)("span",{className:"flex gap-1 font-sans",children:[(0,i.jsx)(j.vkH,{size:14}),(0,i.jsx)("a",{href:"#"+e.desde,children:r})]})})},n)}))})}function w(e){if(e.filter.oids.length>0&&!e.filter.oids.includes(e.item.oid))return null;var n,t=(0,s.hn)(e.item,e.baseItem),r=(0,s.og)(e.item),a=(0,s.L9)(r).filter((function(e){return e.texto})).map((function(e){return{text:e.texto,value:e,render:C}}));return e.filter.text&&a.push({text:e.filter.text,value:e.filter.text,render:N}),(0,i.jsxs)("div",{"data-hash":r,className:"mt-2 leading-6 rounded",children:[(0,i.jsx)(x.Z,{hash:r,anchor:"inciso"})," ",(0,i.jsx)("b",{children:t}),A(null!==(n=e.item.content)&&void 0!==n?n:"",a),(0,i.jsx)("div",{className:"flex gap-1",children:(0,i.jsx)(b,{path:r})}),(0,s.nM)(e.item,"inciso").map((function(n,t){return(0,i.jsx)(w,{item:n,baseItem:e.baseItem,filter:e.filter},t)}))]})}var N=function(e,n){return(0,i.jsx)("span",{className:"bg-amber-400",children:e},n)},C=function(e,n){var t,a,o=void 0,l=(0,s.Cs)(e.hacia);return l&&"inciso"in l?(t=(0,i.jsx)(g,{fragmento:l}),a={href:"/#".concat(e.hacia)}):(t=function(e){return(0,i.jsxs)("div",{className:"max-w-md font-sans",children:[e.etiqueta&&(0,i.jsx)("div",{children:e.etiqueta}),(0,i.jsxs)("div",{className:"flex",children:["en ",(0,f.Z)(e.hacia)]})]})}(e),a={href:e.hacia,target:"_blank",rel:"noreferrer"},o=(0,i.jsx)(p.Hi9,{className:"inline",size:14})),(0,i.jsx)("a",(0,m.Z)((0,r.Z)({className:"text-blue-800"},a),{children:(0,i.jsxs)(v.Z,{placement:"bottom",content:t,children:[e.texto," ",o]})}),n)};function A(e,n){if(""==e)return null;var t=0,r=[e];return n.forEach((function(e){r=r.flatMap((function(n){return"string"!=typeof n?[n]:n.split(e.text).flatMap((function(n,r){return[0!=r?e.render(e.value,t++):void 0,n]})).filter((function(e){return!!e}))}))})),r}var k=t(4286),y=t(8799),Z=t(7895),T=t(4940);function L(e){var n=e.path,t=e.item;return(0,i.jsx)("div",{className:"ml-1 float-right flex gap-2 font-sans",children:(0,i.jsx)(I,{target:(0,i.jsx)("div",{className:"cursor-pointer",children:(0,i.jsx)(v.Z,{content:"Acciones sobre "+(0,s.AZ)(t.type),children:(0,i.jsx)(p.Dxw,{size:20})})}),dropdown:(0,i.jsx)(E,{path:n,item:t})})})}function I(e){var n=e.target,t=e.dropdown,r=(0,a.useState)(!1),s=r[0],o=r[1],l=(0,a.useCallback)((function(){o(!0)}),[]);return s?(0,i.jsxs)(Z.J,{width:230,shadow:"md",withArrow:!0,children:[(0,i.jsx)(Z.J.Target,{children:n}),(0,i.jsx)(Z.J.Dropdown,{children:t})]}):(0,i.jsx)("div",{tabIndex:0,className:"cursor-pointer",onMouseOver:l,onTouchStart:l,onFocus:l,children:n})}function E(e){var n=e.path,t=e.item,r=t.data,o="".concat(location.origin,"/compartir/").concat(n.split("@")[0]);o+="?2022-07-28T05:41:36.469Z";var l=(0,a.useContext)(T.O);(0,s.u$)(n,l)&&-1!=l.lastIndexOf(".")&&(o+="#"+l);var c="".concat((0,s.Lv)(t)," sobre ").concat(r.sobre),d="".concat(c,":\n").concat(o,"\n");return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(F,{icon:y.DWq,label:"P\xe1gina ".concat(r.pagina," en el PDF oficial"),url:"https://www.chileconvencion.cl/wp-content/uploads/2022/07/Texto-CPR-2022.pdf#page="+(r.pagina+4)}),(0,i.jsx)(F,{icon:y.meP,label:"Compartir en Twitter",url:"https://twitter.com/intent/tweet?text="+encodeURIComponent(d)}),(0,i.jsx)(F,{icon:y.k1O,label:"Compartir en Facebook",url:"https://www.facebook.com/sharer/sharer.php?display=page&u="+encodeURIComponent(o)}),(0,i.jsx)(F,{icon:y.RGt,label:"Compartir v\xeda WhatsApp",url:"https://api.whatsapp.com/send/?text=".concat(encodeURIComponent(d))}),(0,i.jsx)(F,{icon:y.iEj,label:"Compartir v\xeda Telegram",url:"https://telegram.me/share/url?url=".concat(encodeURIComponent(o))})]})}function F(e){var n=e.icon,t=e.label,r=e.url;return(0,i.jsx)("li",{className:(0,s.AK)("block","py-1","text-sm text-gray-700"),children:(0,i.jsxs)("div",{className:"flex",children:[(0,i.jsx)(n,{size:20}),"\xa0",(0,i.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",className:"no-underline hover:underline w-full",children:t})]})})}function O(e){var n=e.item,t=e.filter;if(t.oids.length>0&&!t.oids.includes(n.oid))return null;var r=(0,s.og)(n),a=n.data,o=(0,s.L9)(r,!0);return(0,i.jsxs)("div",{"data-hash":r,className:"border border-solid rounded-md p-3 mb-3",children:[(0,i.jsx)(L,{path:r,item:n}),(0,i.jsxs)("span",{className:"font-sans flex flex-wrap gap-1 text-base",children:[(0,i.jsx)(x.Z,{hash:r,anchor:"art\xedculo"}),(0,i.jsx)("b",{className:"text-black mx-1 font-ConvencionFJ",children:(0,s.Lv)(n)}),(0,i.jsxs)(h.Ct,{color:"gray",children:[" ",(0,s.ZQ)(a.sobre)]}),a.etiquetas.map((function(e,t){return(0,i.jsx)(R,{etiqueta:e,item:n},t)})),(0,i.jsx)(b,{path:r}),o.map((function(e,n){return(0,i.jsx)(h.Ct,{color:"info",children:(0,i.jsx)(v.Z,{content:(0,i.jsxs)(i.Fragment,{children:["por "+e.autor,(0,i.jsx)("br",{}),"en "+(0,f.Z)(e.hacia)]}),children:(0,i.jsxs)("span",{className:"flex gap-1",children:[(0,i.jsxs)("a",{href:e.hacia,target:"_blank",rel:"noreferrer",children:[e.etiqueta,o.length>1?" "+(n+1):""]}),(0,i.jsx)(j.RZY,{size:16})]})})},n)}))]}),(0,s.nM)(n,"inciso").map((function(e,r){return(0,i.jsx)(w,{item:e,baseItem:n,filter:t},r)}))]})}function R(e){var n=e.etiqueta.replace(/ /g,"\xa0");return(0,i.jsx)(h.Ct,{color:"pink",children:(0,i.jsx)(M,{target:(0,i.jsx)("div",{className:"cursor-pointer",children:(0,i.jsxs)("div",{className:"flex",children:[n,(0,i.jsx)(p.kzR,{size:5,className:"ml-1 h-4 w-4"})]})}),dropdown:(0,i.jsx)("div",{className:"max-h-[202px] overflow-y-scroll overscroll-contain",children:(0,s.rQ)("articulo").filter((function(n){return n.oid!=e.item.oid&&n.data.etiquetas.includes(e.etiqueta)})).map((function(e,n){return(0,i.jsx)("div",{children:(0,i.jsx)("a",{className:"no-underline hover:underline font-normal",href:"/#"+(0,s.og)(e),children:"".concat((0,s.Lv)(e)," sobre ").concat(e.data.sobre)})},n)}))})})})}function M(e){var n=e.target,t=e.dropdown,r=(0,a.useState)(!1),s=r[0],o=r[1],l=(0,a.useCallback)((function(){o(!0)}),[]);return s?(0,i.jsxs)(k.z,{width:330,shadow:"md",withArrow:!0,openDelay:200,closeDelay:400,initiallyOpened:!0,children:[(0,i.jsx)(k.z.Target,{children:n}),(0,i.jsx)(k.z.Dropdown,{children:t})]}):(0,i.jsx)("div",{tabIndex:0,className:"cursor-pointer",onMouseOver:l,onTouchStart:l,onFocus:l,children:n})}function U(e){return e.filter.oids.length>0&&!e.filter.oids.includes(e.item.oid)?null:(0,i.jsxs)("div",{children:[(0,i.jsxs)("h3",{"data-hash":e.path,className:"text-center rounded",children:[(0,i.jsx)(x.Z,{hash:e.path,anchor:"t\xedtulo"})," ",e.item.label]}),(0,s.nM)(e.item,"articulo").map((function(n){return(0,i.jsx)(O,{item:n,filter:e.filter},n.oid)}))]})}function P(e){var n=e.text.split(" "),t=n.flatMap((function(e,t){return[e[0],e.substring(1),t!=n.length-1?" ":""]})).filter((function(e){return""!=e}));return(0,i.jsx)(i.Fragment,{children:t.map((function(n,t){return(0,i.jsx)("span",{className:(r=n,r==r.toLowerCase()&&r!=r.toUpperCase()?e.lowercaseClass:e.uppercaseClass),children:n.toUpperCase()},t);var r}))})}function z(e){var n=e.item,t=e.filter;if(t.oids.length>0&&!t.oids.includes(n.oid))return null;var r,a=(0,s.og)(n);return(0,i.jsxs)("div",{children:[(0,i.jsxs)("h2",{"data-hash":a,className:"text-center mt-1 rounded",children:[(0,i.jsx)(x.Z,{hash:a,anchor:"cap\xedtulo"})," ",(0,i.jsx)(P,{lowercaseClass:"text-lg",text:"Cap\xedtulo "+n.key}),(0,i.jsx)("br",{}),(0,i.jsx)(P,{lowercaseClass:"text-lg",text:null!==(r=n.label)&&void 0!==r?r:""})]}),(0,s.nM)(n,"articulo").map((function(e){return(0,i.jsx)(O,{item:e,filter:t},e.oid)})),(0,s.nM)(n,"titulo").map((function(e,n){return(0,i.jsx)(U,{item:e,path:"".concat(a,".").concat(n+1),filter:t},n)}))]})}function q(e){var n=e.item,t=e.filter;if(t.oids.length>0&&!t.oids.includes(n.oid))return null;var r=(0,s.og)(n),a=n.data;return(0,i.jsxs)("div",{"data-hash":r,className:"border border-solid rounded-md p-3 mb-3",children:[(0,i.jsx)(L,{path:r,item:n}),(0,i.jsxs)("h3",{className:"my-0 rounded",children:[(0,i.jsx)(x.Z,{hash:r,anchor:"disposici\xf3n transitoria"})," ",(0,s.Lv)(n)," ",a.sobre&&(0,i.jsx)("span",{className:"font-sans rounded-md text-sm font-normal bg-gray-300 text-black px-2 py-1",children:(0,s.ZQ)(a.sobre)})]}),(0,s.nM)(n,"inciso").map((function(e,r){return(0,i.jsx)(w,{item:e,baseItem:n,filter:t},r)}))]})}function S(e){if(e.filter.oids.length>0&&!e.filter.oids.includes(s.dS.oid))return null;var n,t=s.dS.type;return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("h2",{"data-hash":t,className:"text-center mt-1 rounded",children:[(0,i.jsx)(x.Z,{hash:t,anchor:"apartado"})," ",(0,i.jsx)(P,{lowercaseClass:"text-lg",text:null!==(n=s.dS.label)&&void 0!==n?n:""})]}),(0,s.rQ)("transitoria").map((function(n){return(0,i.jsx)(q,{item:n,filter:e.filter},n.oid)}))]})}function K(e){if(e.filter.oids.length>0&&!e.filter.oids.includes(s.PU.oid))return null;var n=s.PU.type;return(0,i.jsxs)("div",{"data-hash":n,className:"mb-8 text-xl text-center italic py-4 px-2 rounded",children:[(0,i.jsx)(x.Z,{hash:n,anchor:"pre\xe1mbulo"})," ",s.PU.content]})}function B(e){var n=e.filter;return(0,i.jsxs)("div",{className:"prose px-3 sm:px-10 font-ConvencionFJ",children:[(0,i.jsx)("a",{"data-id":"inicio"}),(0,i.jsx)("h1",{className:"text-center font-normal",children:(0,i.jsx)(P,{lowercaseClass:"text-3xl",text:"Constituci\xf3n Pol\xedtica de la Rep\xfablica de Chile"})}),(0,i.jsx)(K,{filter:n}),(0,s.rQ)("capitulo").map((function(e){return(0,i.jsx)(z,{item:e,filter:n},e.oid)})),(0,i.jsx)(S,{filter:n}),(0,i.jsx)("div",{className:"text-center text-2xl mt-10",children:"********"})]})}var J=t(9393),Y=t(3022);function D(e){var n=(0,a.useCallback)((0,s.Ds)((function(n){var t,r;e.onFilterChange(null!==(r=null===(t=n.target)||void 0===t?void 0:t.value)&&void 0!==r?r:"")}),500),[e]),t=(0,a.useRef)(null),r=(0,a.useCallback)((function(e){return e.target.select()}),[]);return(0,a.useEffect)((function(){var n=function(n){"Escape"===n.key&&e.onClose()};return document.addEventListener("keydown",n,!1),function(){return document.removeEventListener("keydown",n)}})),e.open?(0,i.jsxs)("div",{className:(0,s.AK)("fixed flex flex-col z-10","right-4 w-11/12 md:w-60 h-24 p-2 pl-4 pr-6 md:pr-4 top-[55px]","bg-white","border-[1px] border-gray-200 rounded-lg","justify-center","items-center","shadow-2xl shadow-gray-300"),children:[(0,i.jsxs)("div",{className:"w-full",children:[(0,i.jsx)("div",{className:"md:hidden cursor-pointer float-right absolute right-0 top-1 p-1",children:(0,i.jsx)(Y.v8y,{size:16,onClick:e.onClose})}),(0,i.jsx)("input",{ref:t,autoFocus:!0,tabIndex:0,placeholder:"Filtro (m\xednimo 4 caracteres)",className:"border rounded p-2 h-8 w-full placeholder:text-sm placeholder:text-gray-400",type:"text",onChange:n,onFocus:r,defaultValue:e.filter.text})]}),""!=e.filter.text&&(0,i.jsxs)("div",{className:"text-sm pt-2",children:[e.filter.totalMatches," ocurrencias",e.filter.foundItems>0&&(0,i.jsxs)(i.Fragment,{children:[" en ",e.filter.foundItems," p\xe1rrafos"]})]})]}):null}function V(){var e=(0,a.useRef)(null),n=(0,a.useRef)(null),t=(0,d.Z)("(min-height: 600px)");o(t?350:150,"auto",e),o(t?350:150,"smooth",n,!0),function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"bg-amber-100";(0,a.useEffect)((function(){var t=function(){var t;if(e&&!e.current)return!1;var r=n.split(" "),i=null===(t=e?e.current:document)||void 0===t?void 0:t.querySelectorAll(".".concat(r[0],"[data-hash]"));r.forEach((function(e){null===i||void 0===i||i.forEach((function(n){return n.classList.remove(e)}))}));var a=l("data-hash",e);return!!a&&(r.forEach((function(e){a.classList.add(e)})),!0)},r=function(){return c(t)};return r(),window.addEventListener("hashchange",r),function(){window.removeEventListener("hashchange",r)}}),[n,e])}(e);var h=(0,a.useState)(""),f=h[0],x=h[1],m=(0,a.useCallback)((function(e){x(e)}),[]),p=(0,a.useState)(!1),v=p[0],j=p[1],g=(0,a.useCallback)((function(){j(!1),x("")}),[]),b=(0,a.useCallback)((function(){j(!v),v&&x("")}),[v]),w=function(e){var n;if(""==e)n={text:"",oids:[],totalMatches:0,foundItems:0};else{var t=(0,s.MI)((function(n){var t,r=null!==(t=n.content)&&void 0!==t?t:"";return e.length<4?0:r.split(e).length-1}));n=(0,r.Z)({text:e.length<4?"":e},t)}return n}(f);return(0,i.jsxs)(T.A,{children:[(0,i.jsx)("div",{className:"hidden bg-amber-100"}),(0,i.jsx)(D,{open:v,onClose:g,onFilterChange:m,filter:w}),(0,i.jsxs)("div",{className:"h-screen overflow-hidden",children:[(0,i.jsx)("div",{className:"z-10 md:mr-4 relative",children:(0,i.jsx)(J.A,{onToolsToggle:b,setToolsOpen:j})}),(0,i.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-7",children:[(0,i.jsx)("aside",{ref:n,className:"pb-3 h-screen overflow-y-scroll overscroll-contain mt-[-62px] pt-[62px] bg-[#34005f] hidden md:block md:col-span-2",children:(0,i.jsx)(u.Z,{filter:w})}),(0,i.jsx)("div",{ref:e,className:"h-screen overflow-y-scroll overscroll-contain mt-[-62px] pt-20 pb-10 md:col-span-5 grid justify-center",children:(0,i.jsx)(B,{filter:w})})]})]})]})}},9393:function(e,n,t){t.d(n,{A:function(){return m}});var r=t(7328),i=t(6297),a=t(2322),s=t(2784),o=t(1336),l=t(5186),c=t(951),d=t(7245),u=t(3591),h=t(7579),f=t(3939),x=t(7676);function m(e){var n=(0,f.Z)("(min-width: 768px)"),t=(0,o.a)();return(0,s.useEffect)((function(){var n=function(n){(n.ctrlKey||n.metaKey)&&"b"===n.key.toLowerCase()&&(n.preventDefault(),n.stopPropagation(),e.onToolsToggle&&e.onToolsToggle())};return document.addEventListener("keydown",n,!1),function(){return document.removeEventListener("keydown",n)}})),(0,a.jsxs)(u.wp,{border:!0,rounded:!0,children:[(0,a.jsxs)(u.wp.Brand,{href:"/#inicio",children:[(0,a.jsx)(u.qE,{alt:"Inicio",img:"/images/logo.png"}),"\xa0",(0,a.jsx)("span",{className:"p-1 text-lg sm:hidden",children:"Propuesta de Nueva Constituci\xf3n"}),(0,a.jsx)("span",{className:"p-1 text-lg hidden sm:block md:hidden",children:"Propuesta de Nueva Constituci\xf3n para Chile 2022"}),(0,a.jsx)("span",{className:"p-1 font-ConvencionFJ text-lg hidden md:block lg:hidden ",children:"Propuesta de Constituci\xf3n Pol\xedtica de la Rep\xfablica de Chile"}),(0,a.jsx)("span",{className:"p-1 font-ConvencionFJ text-lg hidden lg:block",children:"Propuesta de Constituci\xf3n Pol\xedtica de la Rep\xfablica de Chile 2022"})]}),(0,a.jsx)(u.wp.Toggle,{}),(0,a.jsx)(u.wp.Collapse,{children:n?(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(u.wp.Link,{href:"/acerca-de",children:(0,a.jsxs)("div",{className:"flex gap-1",children:[(0,a.jsx)(c.ocf,{size:20}),"\xbfQu\xe9 es esto?"]})}),e.onToolsToggle&&(0,a.jsx)("div",{className:"block p-0 hover:bg-transparent hover:text-blue-700 dark:hover:bg-transparent dark:hover:text-white",children:(0,a.jsx)("div",{className:"flex gap-1",children:(0,a.jsx)(d.wTD,{className:"cursor-pointer",size:20,onClick:e.onToolsToggle})})})]}):(0,a.jsxs)("div",{className:"flex flex-col w-full h-screen pr-5 pb-[70px] absolute bg-white overflow-scroll",children:[(0,a.jsx)(v,{href:"/#inicio",icon:c.iqr,children:"Inicio"}),(0,a.jsx)(v,{href:"/acerca-de",icon:c.ocf,children:"\xbfQu\xe9 es esto?"}),e.onToolsToggle&&(0,a.jsx)(p,{setToolsOpen:e.setToolsOpen}),t&&(0,a.jsx)("div",{className:"p-1",children:(0,a.jsxs)("button",{onClick:t,className:"flex gap-1",children:[(0,a.jsx)(l.U8_,{size:20}),"Instalar app"]})}),(0,a.jsx)("hr",{className:"my-1"}),(0,x.rQ)("preambulo","capitulo","transitorias").map((function(e,n){return(0,a.jsx)(j,{item:e},n)})),(0,a.jsxs)("div",{className:"text-sm text-gray-300 pt-5 pl-7",children:["Versi\xf3n: ","2022-07-28T05:41:36.469Z"]})]})})]})}function p(e){var n=(0,h.q)().setIsOpen,t=(0,s.useCallback)((function(){e.setToolsOpen(!0),n(!1)}),[e,n]);return(0,a.jsx)("div",{className:"hover:bg-gray-200 p-1",children:(0,a.jsxs)("button",{onClick:t,className:"flex gap-1 w-full",children:[(0,a.jsx)(d.wTD,{size:20}),"Buscar"]})})}function v(e){var n=(0,h.q)().setIsOpen,t=e.icon,o=(0,i.Z)(e,["icon"]),l=(0,s.useCallback)((function(){setTimeout((function(){n(!1)}),100)}),[n]);return(0,a.jsxs)("div",{className:"hover:bg-gray-200 p-1 flex gap-1",onClick:l,onTouchEnd:l,children:[(0,a.jsx)(t,{size:20}),(0,a.jsx)("a",(0,r.Z)({className:"block align-middle"},o))]})}function j(e){var n=e.item;return(0,a.jsx)(v,{href:"/#"+(0,x.og)(n),icon:c.SRW,children:(0,a.jsx)("span",{className:"font-ConvencionFJ",children:(0,x.Lv)(n)})})}},4031:function(e,n,t){t.d(n,{Z:function(){return s}});var r=t(2322),i=t(7676),a=t(1439);function s(e){if(e.anchor){var n,t=null!==(n=e.title)&&void 0!==n?n:"V\xednculo a "+e.anchor;return(0,r.jsx)("div",{className:"inline-block",children:(0,r.jsx)("a",{className:(0,i.AK)(e.className,"font-sans text-gray-300 no-underline",!1===e.visible&&"invisible"),href:"/#"+e.hash,"data-id":e.hash,children:(0,r.jsx)(a.Z,{content:t,children:(0,r.jsx)("div",{className:"-ml-3 pl-3",children:"\xb6"})})})})}return(0,r.jsx)("a",{className:(0,i.AK)(e.className,!1===e.visible&&"invisible"),href:"/#"+e.hash,title:e.title,"data-id":e.hash,children:e.children})}},4940:function(e,n,t){t.d(n,{A:function(){return o},O:function(){return s}});var r=t(2322),i=t(2784),a=t(7676),s=(0,i.createContext)(""),o=function(e){var n=(0,i.useState)((function(){return(0,a.en)()})),t=n[0],o=n[1],l=(0,i.useCallback)((function(){o((0,a.en)())}),[]);return(0,i.useEffect)((function(){return window.addEventListener("hashchange",l),function(){window.removeEventListener("hashchange",l)}}),[l]),(0,r.jsx)(s.Provider,{value:t,children:e.children})}},7261:function(e,n,t){t.d(n,{Z:function(){return f}});var r=t(2322),i=t(2784),a=t(6577),s=t.n(a),o=t(4031),l=t(7676),c={src:"/_next/static/media/titulo.3e86f13f.png",height:296,width:592,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAECAIAAAA8r+mnAAAAbklEQVR42mPw0I72Noz11o+xlYwx5UowZogz508wZIhlmNSzYPbU5VMnLJo7Y+XMyUuB3OkTF0/pW8jQ2Ti9vX7qxK550yYu7m2f3dEwvadtdn/HHAZnuRAP9VBthhBBhlBlhgglhnB5hnAFhnAAnBcll7l8ZO8AAAAASUVORK5CYII="},d={src:"/_next/static/media/escudo.fc3c50ef.png",height:93,width:120,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAIAAABxZ0isAAAAkklEQVR42mMwZY4zZIg3ZohP9IqMdY3UY4jXYYg3YYxj0GeId1KKjXGJbMwJbMwOTPKKCLGKBgoyaDPER9hHVaUG54aFlcSFNOcGApEFP1hHYXRolFNUXnhYTlhYeWJIVUqwjXgcg4tqLFBHmn94LlAiNCwrJCzJO8JFLZbBTiYWKBdoHg2UBiJ/k2h7uVhbqTgAMzAq/dAOqy8AAAAASUVORK5CYII="},u=t(4940),h=function(e){return(0,l.AK)("no-underline block","hover:text-[#d0b0ef]",e?"text-white":"text-[#bf77fa]")};function f(e){var n=function(e){return e.src};return(0,r.jsxs)("div",{className:"prose text-xs font-ConvencionFJ pl-3 pr-4 py-5",children:[(0,r.jsx)(o.Z,{hash:"inicio",title:"Ir al inicio",children:(0,r.jsx)(s(),{src:c,loader:n,width:296,height:148,alt:"Propuesta de Constituci\xf3n Pol\xedtica de la Rep\xfablica de Chile 2022","aria-label":"T\xedtulo"})}),(0,r.jsx)("ul",{className:"list-none mt-0 mb-6 pl-0 -ml-1",children:(0,l.rQ)("preambulo","capitulo","transitorias").map((function(n){return(0,r.jsx)(x,{item:n,filter:e.filter},n.oid)}))}),(0,r.jsx)("div",{className:"text-center",children:(0,r.jsx)(s(),{src:d,loader:n,width:120,height:93,"aria-label":"Escudo"})}),(0,r.jsxs)("div",{className:"pt-3 text-sm text-center text-[#603484]",children:["Versi\xf3n: ","2022-07-28T05:41:36.469Z"]})]})}function x(e){var n=e.item,t=e.filter,a=(0,i.useContext)(u.O);if(t.oids.length>0&&!t.oids.includes(n.oid))return null;var s,c,d=(0,l.og)(n),h=(0,l.Cs)(a),f=(0,l.u$)(d,a)||Boolean(h&&"capitulo"in h&&h.capitulo.oid==n.oid),x=(0,l.nM)(n,"titulo");return(0,r.jsxs)("li",{className:(0,l.AK)("mt-2 mb-0"),children:[(0,r.jsx)(o.Z,{className:(s=f,c=x.length>0,(0,l.AK)("no-underline p-1 block my-0","hover:text-white","rounded",c&&"rounded-bl-none",s?"text-white bg-[#9035da]":"text-[#d0a2f5]")),hash:d,children:(0,l.Lv)(n)}),(0,r.jsx)("ul",{className:"list-none my-0",children:x.map((function(e,n){var i;return(0,r.jsx)(m,{titulo:e,highlight:Boolean(h&&"titulo"in h&&(null===(i=h.titulo)||void 0===i?void 0:i.oid)==e.oid),path:"".concat(d,".").concat(n+1),filter:t},e.oid)}))})]})}function m(e){var n,t=(0,i.useContext)(u.O),a=e.path==t||e.highlight;return e.filter.oids.length>0&&!e.filter.oids.includes(e.titulo.oid)?null:(0,r.jsx)("li",{className:(n=a,(0,l.AK)("border-l-[3px] border-solid","my-0 pt-1 -mx-[19.5px] pr-6 pl-3","pl-2","hover:border-[#730ac8]",n?"border-[#9035da]":"border-[#400472]")),children:(0,r.jsx)(o.Z,{hash:e.path,className:h(a),children:e.titulo.label})})}},1439:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(7328),i=t(2322),a=t(2784),s=t(3591);function o(e){var n=(0,a.useState)(!1),t=n[0],o=n[1],l=(0,a.useCallback)((function(){o(!0)}),[]);return(0,i.jsx)("div",{className:"inline",onMouseOver:l,onTouchStart:l,children:t?(0,i.jsx)(s.u,(0,r.Z)({},e)):e.children})}},3939:function(e,n,t){var r=t(2784);n.Z=function(e){var n=function(e){return window.matchMedia(e).matches},t=(0,r.useState)(n(e)),i=t[0],a=t[1],s=(0,r.useCallback)((function(){a(n(e))}),[e]);return(0,r.useEffect)((function(){var n=window.matchMedia(e);return s(),n.addListener?n.addListener(s):n.addEventListener("change",s),function(){n.removeListener?n.removeListener(s):n.removeEventListener("change",s)}}),[s,e]),i}}}]);