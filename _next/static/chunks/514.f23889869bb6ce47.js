"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[514,871,189],{3514:function(r,t,n){n.r(t),n.d(t,{default:function(){return E}});var e=n(2322),o=n(2784),i=n(1650),a=n(8764),l=n(6788),u=n(3738),c=n(2155);function s(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function f(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function y(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),e.forEach((function(t){f(r,t,n[t])}))}return r}function b(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,i=[],a=!0,l=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return s(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function d(){var r=b((0,u.y)(),2),t=r[0],n=(r[1],(0,c.Bm)(t));return(0,e.jsx)("div",{className:"prose text-xs",children:(0,e.jsxs)("ul",{className:"list-none",children:[a.E.capitulos.map((function(r){return(0,e.jsx)(h,y({},r),r.nombre)})),(0,e.jsx)("li",{children:(0,e.jsx)(l.Z,{className:"text-black"+("dt"==t||"transitoria"in n?" bg-amber-100":""),hash:"dt",children:"Disposiciones Transitorias"})})]})})}function h(r){var t,n=b((0,u.y)(),2),o=n[0],i=(n[1],"cap:"+r.numero),a=(0,c.Bm)(o),s="capitulo"in a&&a.capitulo.numero==r.numero;return(0,e.jsxs)("li",{children:[(0,e.jsxs)(l.Z,{className:"text-black"+(o==i||s?" bg-amber-100":""),hash:i,children:["Cap\xedtulo ",r.capitulo," ",r.nombre]}),(0,e.jsx)("ul",{className:"list-disc list-outside",children:null===(t=r.titulos)||void 0===t?void 0:t.map((function(r,t){var n;return(0,e.jsx)(m,y({},r,{highlight:"titulo"in a&&(null===(n=a.titulo)||void 0===n?void 0:n.titulo)==r.titulo,path:"".concat(i,".").concat(t+1)}),t)}))})]})}function m(r){var t=b((0,u.y)(),2),n=t[0];t[1];return(0,e.jsx)("li",{className:n==r.path||r.highlight?" bg-amber-100":"",children:(0,e.jsx)(l.Z,{className:"text-black",hash:r.path,children:r.titulo})})}var p=n(6871),v=n(654);function j(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function g(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function O(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,i=[],a=!0,l=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return j(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function x(r){var t=O((0,u.y)(),2),n=t[0],o=(t[1],"dt:"+r.numero);return(0,e.jsxs)("div",{className:"border border-solid rounded-md p-3 mb-3",children:[(0,e.jsx)("a",{id:o}),(0,e.jsxs)("h3",{className:"my-0"+(o==n?" bg-amber-100":""),children:[(0,e.jsx)(l.Z,{hash:o,children:"\xb6"})," ",r.transitoria]}),r.incisos.map((function(r,t){return(0,e.jsx)(v.Z,function(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),e.forEach((function(t){g(r,t,n[t])}))}return r}({},r,{path:o}),t)}))]})}function w(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function S(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function A(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,i=[],a=!0,l=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return w(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return w(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(r){var t=A((0,u.y)(),2),n=t[0],o=(t[1],"dt");return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("a",{id:o}),(0,e.jsxs)("h2",{className:o==n?"bg-amber-100":void 0,children:[(0,e.jsx)(l.Z,{hash:o,children:"\xb6"})," Disposiciones Transitorias"]}),r.transitorias.map((function(r){return(0,e.jsx)(x,function(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),e.forEach((function(t){S(r,t,n[t])}))}return r}({},r),r.transitoria)}))]})}function N(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function I(){return(0,e.jsxs)("div",{className:"prose px-10",children:[(0,e.jsx)("p",{className:"text-2xl",children:a.E.preambulo}),a.E.capitulos.map((function(r){return(0,e.jsx)(p.default,function(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),e.forEach((function(t){N(r,t,n[t])}))}return r}({},r),r.nombre)})),(0,e.jsx)(P,{transitorias:a.E.transitorias})]})}function E(){var r=(0,o.useRef)(null);return(0,i.j)(350,r),(0,e.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-7",children:[(0,e.jsx)("aside",{className:"hidden md:block md:col-span-2 overflow-y-scroll h-screen py-5 pr-5",children:(0,e.jsx)(d,{})}),(0,e.jsx)("main",{ref:r,className:"md:col-span-5 overflow-y-scroll h-screen grid justify-center",children:(0,e.jsxs)("article",{className:"pb-10",children:[(0,e.jsx)("header",{className:"fixed bg-white prose",children:(0,e.jsx)("h1",{className:"p-5",children:"Propuesta de Constituci\xf3n Pol\xedtica de la Rep\xfablica de Chile 2022"})}),(0,e.jsx)("div",{className:"pt-60 mt-0 sm:pt-32 md:pt-40 lg:pt-32 pb-10",children:(0,e.jsx)(I,{})})]})})]})}},6189:function(r,t,n){n.r(t),n.d(t,{default:function(){return s}});var e=n(2322),o=n(3738),i=n(6788),a=n(654);function l(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function u(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function c(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,i=[],a=!0,l=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return l(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(r){var t="art:"+r.articulo,n=c((0,o.y)(),2),l=n[0];n[1];return(0,e.jsxs)("div",{className:"border border-solid rounded-md p-3 mb-3"+(t==l?" bg-amber-100":""),children:[(0,e.jsx)("a",{id:t}),(0,e.jsxs)("div",{children:[(0,e.jsx)(i.Z,{hash:t,children:"\xb6"})," ",(0,e.jsxs)("b",{children:["Art\xedculo ",r.articulo]})]}),r.incisos.map((function(r,n){return(0,e.jsx)(a.Z,function(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),e.forEach((function(t){u(r,t,n[t])}))}return r}({},r,{path:t}),n)}))]})}},6871:function(r,t,n){n.r(t),n.d(t,{default:function(){return h}});var e=n(2322),o=n(3738),i=n(6189);function a(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function l(r){return(0,e.jsx)(e.Fragment,{children:r.articulos.map((function(r){return(0,e.jsx)(i.default,function(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),e.forEach((function(t){a(r,t,n[t])}))}return r}({},r),r.articulo)}))})}var u=n(6788);function c(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function s(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,i=[],a=!0,l=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return c(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return c(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(r){var t=s((0,o.y)(),2),n=t[0];t[1];return(0,e.jsxs)("div",{children:[(0,e.jsx)("a",{id:r.path}),(0,e.jsxs)("h3",{className:r.path==n?"bg-amber-100":void 0,children:[(0,e.jsx)(u.Z,{hash:r.path,children:"\xb6"})," ",r.titulo]}),r.articulos&&(0,e.jsx)(l,{articulos:r.articulos})]})}function y(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function b(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function d(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,i=[],a=!0,l=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return y(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(r){var t,n=d((0,o.y)(),2),i=n[0],a=(n[1],"cap:"+r.numero);return(0,e.jsxs)("div",{className:"",children:[(0,e.jsx)("a",{id:a}),(0,e.jsxs)("h2",{className:a==i?"bg-amber-100":"",children:[(0,e.jsx)(u.Z,{hash:a,children:"\xb6"})," Cap\xedtulo ",r.capitulo," ",r.nombre]}),r.articulos&&(0,e.jsx)(l,{articulos:r.articulos}),null===(t=r.titulos)||void 0===t?void 0:t.map((function(r,t){return(0,e.jsx)(f,function(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),e.forEach((function(t){b(r,t,n[t])}))}return r}({},r,{path:"".concat(a,".").concat(t+1)}),t)}))]})}},6788:function(r,t,n){n.d(t,{Z:function(){return u}});var e=n(2322),o=n(3738),i=n(2784);function a(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,i=[],a=!0,l=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return a(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(r){var t,n=l((0,o.y)(),2),a=(n[0],n[1]),u=(0,i.useCallback)((function(t){t.preventDefault(),a(r.hash)}),[r.hash,a]);return(0,e.jsx)("a",{className:null!==(t=r.className)&&void 0!==t?t:"text-gray-300",href:"#"+r.hash,onClick:u,children:r.children})}},654:function(r,t,n){n.d(t,{Z:function(){return c}});var e=n(2322),o=n(3738),i=n(6788);function a(r,t){(null==t||t>r.length)&&(t=r.length);for(var n=0,e=new Array(t);n<t;n++)e[n]=r[n];return e}function l(r,t,n){return t in r?Object.defineProperty(r,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[t]=n,r}function u(r,t){return function(r){if(Array.isArray(r))return r}(r)||function(r,t){var n=null==r?null:"undefined"!==typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(null!=n){var e,o,i=[],a=!0,l=!1;try{for(n=n.call(r);!(a=(e=n.next()).done)&&(i.push(e.value),!t||i.length!==t);a=!0);}catch(u){l=!0,o=u}finally{try{a||null==n.return||n.return()}finally{if(l)throw o}}return i}}(r,t)||function(r,t){if(!r)return;if("string"===typeof r)return a(r,t);var n=Object.prototype.toString.call(r).slice(8,-1);"Object"===n&&r.constructor&&(n=r.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(r,t)}(r,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(r){var t,n,a=u((0,o.y)(),2),s=a[0],f=(a[1],r.inciso?"\xa0".repeat(4*r.nivel)+r.inciso+".))"[r.nivel-1]+" ":""),y=r.path+"."+(null!==(n=r.inciso)&&void 0!==n?n:"");return(0,e.jsxs)("div",{className:"mt-2"+(y==s?" bg-amber-100":""),children:[(0,e.jsx)("a",{id:y}),(0,e.jsx)(i.Z,{hash:y,children:"\xb6"})," ",(0,e.jsx)("b",{children:f}),r.texto,null===(t=r.incisos)||void 0===t?void 0:t.map((function(r,t){return(0,e.jsx)(c,function(r){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},e=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(n).filter((function(r){return Object.getOwnPropertyDescriptor(n,r).enumerable})))),e.forEach((function(t){l(r,t,n[t])}))}return r}({},r,{path:y}),t)}))]})}}}]);