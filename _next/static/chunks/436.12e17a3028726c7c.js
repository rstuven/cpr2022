"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[436],{2436:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(7328);function i(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=n(2322),o=n(2784),a=n(5186),l=n(951),c=n(7245),u=n(8799),f=n(6957),p=n.n(f);var h=n(7579),d=n(9916);function v(e){var t=function(){var e=o.useState(!1),t=e[0],n=e[1];return o.useEffect((function(){return p().addListener(n),function(){p().removeListener(n)}}),[]),t?p().install:null}();return(0,s.jsxs)("div",{className:"flex flex-col w-full h-screen pr-5 pb-[70px] absolute bg-white overflow-scroll",children:[(0,s.jsx)(b,{href:"/#inicio",icon:l.iqr,children:"Inicio"}),(0,s.jsx)(b,{href:"/acerca-de",icon:l.ocf,children:"\xbfQu\xe9 es esto?"}),e.setToolsOpen&&(0,s.jsx)(x,{setToolsOpen:e.setToolsOpen}),t&&(0,s.jsx)("div",{className:"p-1",children:(0,s.jsxs)("button",{onClick:t,className:"flex gap-1",children:[(0,s.jsx)(a.U8_,{size:20}),"Instalar app"]})}),(0,s.jsx)("hr",{className:"my-1"}),(0,d.rQ)("preambulo","capitulo","transitorias").map((function(e){return(0,s.jsx)(m,{item:e},e.oid)})),(0,s.jsx)("hr",{className:"my-1"}),(0,s.jsxs)("div",{className:"flex py-1 gap-6 justify-center",children:[(0,s.jsx)("a",{href:"mailto:cpr2022.cl@gmail.com",children:(0,s.jsx)(a.ixJ,{size:20})}),(0,s.jsx)("a",{href:"https://twitter.com/cpr2022cl",children:(0,s.jsx)(u.meP,{size:20})})]}),(0,s.jsx)("hr",{className:"my-1"}),(0,s.jsxs)("div",{className:"text-sm text-gray-300 pt-2 w-full text-center",children:["Versi\xf3n: ","2022-08-02T01:44:03.350Z"]})]})}function x(e){var t=(0,h.q)().setIsOpen,n=(0,o.useCallback)((function(){e.setToolsOpen(!0),t(!1)}),[e,t]);return(0,s.jsx)("div",{className:"hover:bg-gray-200 p-1",children:(0,s.jsxs)("button",{onClick:n,className:"flex gap-1 w-full",children:[(0,s.jsx)(c.wTD,{size:20}),"Buscar"]})})}function b(e){var t=e.icon,n=i(e,["icon"]),a=(0,h.q)().setIsOpen,l=(0,o.useCallback)((function(){setTimeout((function(){a(!1)}),100)}),[a]);return(0,s.jsxs)("div",{className:"hover:bg-gray-200 p-1 flex gap-1",onClick:l,onTouchEnd:l,children:[(0,s.jsx)(t,{size:20}),(0,s.jsx)("a",(0,r.Z)({className:"block align-middle"},n))]})}function m(e){var t=e.item;return(0,s.jsx)(b,{href:"/#"+(0,d.og)(t),icon:l.SRW,children:(0,s.jsx)("span",{className:"font-ConvencionFJ",children:(0,d.Lv)(t)})})}},6957:function(e,t){var n=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))((function(i,s){function o(e){try{l(r.next(e))}catch(t){s(t)}}function a(e){try{l(r.throw(e))}catch(t){s(t)}}function l(e){var t;e.done?i(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,a)}l((r=r.apply(e,t||[])).next())}))},r=this&&this.__generator||function(e,t){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"===typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=(i=o.trys).length>0&&i[i.length-1])&&(6===s[0]||2===s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=t.call(e,o)}catch(a){s=[6,a],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}};Object.defineProperty(t,"__esModule",{value:!0});var i=new(function(){function e(){var e=this;this.event=null,this.callbacks=[],this.install=function(){return n(e,void 0,void 0,(function(){var e=this;return r(this,(function(t){switch(t.label){case 0:return this.event?(this.event.prompt(),[4,this.event.userChoice.then((function(t){var n=t.outcome;return e.updateEvent(null),"accepted"===n||!0}))]):[3,2];case 1:return[2,t.sent()];case 2:throw new Error("Not allowed to prompt.")}}))}))},"undefined"!==typeof window&&(window.addEventListener("beforeinstallprompt",(function(t){t.preventDefault(),e.updateEvent(t)})),window.addEventListener("appinstalled",(function(t){e.updateEvent(null)})))}return e.prototype.getEvent=function(){return this.event},e.prototype.canInstall=function(){return null!==this.event},e.prototype.updateEvent=function(e){var t=this;e!==this.event&&(this.event=e,this.callbacks.forEach((function(e){return e(t.canInstall())})))},e.prototype.addListener=function(e){e(this.canInstall()),this.callbacks.push(e)},e.prototype.removeListener=function(e){this.callbacks=this.callbacks.filter((function(t){return e!==t}))},e}());t.default=i}}]);