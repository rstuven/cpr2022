(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[888],{5333:function(e,t,r){"use strict";r.d(t,{Z:function(){return oe}});var n=function(){function e(e){var t=this;this._insertTag=function(e){var r;r=0===t.tags.length?t.insertionPoint?t.insertionPoint.nextSibling:t.prepend?t.container.firstChild:t.before:t.tags[t.tags.length-1].nextSibling,t.container.insertBefore(e,r),t.tags.push(e)},this.isSpeedy=void 0===e.speedy||e.speedy,this.tags=[],this.ctr=0,this.nonce=e.nonce,this.key=e.key,this.container=e.container,this.prepend=e.prepend,this.insertionPoint=e.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(e){e.forEach(this._insertTag)},t.insert=function(e){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(function(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),void 0!==e.nonce&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}(this));var t=this.tags[this.tags.length-1];if(this.isSpeedy){var r=function(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}(t);try{r.insertRule(e,r.cssRules.length)}catch(n){0}}else t.appendChild(document.createTextNode(e));this.ctr++},t.flush=function(){this.tags.forEach((function(e){return e.parentNode&&e.parentNode.removeChild(e)})),this.tags=[],this.ctr=0},e}(),o=Math.abs,a=String.fromCharCode,i=Object.assign;function c(e){return e.trim()}function s(e,t,r){return e.replace(t,r)}function f(e,t){return e.indexOf(t)}function u(e,t){return 0|e.charCodeAt(t)}function l(e,t,r){return e.slice(t,r)}function d(e){return e.length}function p(e){return e.length}function b(e,t){return t.push(e),e}var h=1,m=1,g=0,y=0,v=0,x="";function k(e,t,r,n,o,a,i){return{value:e,root:t,parent:r,type:n,props:o,children:a,line:h,column:m,length:i,return:""}}function S(e,t){return i(k("",null,null,"",null,null,0),e,{length:-e.length},t)}function w(){return v=y>0?u(x,--y):0,m--,10===v&&(m=1,h--),v}function $(){return v=y<g?u(x,y++):0,m++,10===v&&(m=1,h++),v}function O(){return u(x,y)}function C(){return y}function z(e,t){return l(x,e,t)}function j(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function P(e){return h=m=1,g=d(x=e),y=0,[]}function E(e){return x="",e}function A(e){return c(z(y-1,_(91===e?e+2:40===e?e+1:e)))}function M(e){for(;(v=O())&&v<33;)$();return j(e)>2||j(v)>3?"":" "}function F(e,t){for(;--t&&$()&&!(v<48||v>102||v>57&&v<65||v>70&&v<97););return z(e,C()+(t<6&&32==O()&&32==$()))}function _(e){for(;$();)switch(v){case e:return y;case 34:case 39:34!==e&&39!==e&&_(v);break;case 40:41===e&&_(e);break;case 92:$()}return y}function T(e,t){for(;$()&&e+v!==57&&(e+v!==84||47!==O()););return"/*"+z(t,y-1)+"*"+a(47===e?e:$())}function R(e){for(;!j(O());)$();return z(e,y)}var N="-ms-",W="-moz-",G="-webkit-",H="comm",I="rule",D="decl",L="@keyframes";function B(e,t){for(var r="",n=p(e),o=0;o<n;o++)r+=t(e[o],o,e,t)||"";return r}function Z(e,t,r,n){switch(e.type){case"@import":case D:return e.return=e.return||e.value;case H:return"";case L:return e.return=e.value+"{"+B(e.children,n)+"}";case I:e.value=e.props.join(",")}return d(r=B(e.children,n))?e.return=e.value+"{"+r+"}":""}function Y(e,t){switch(function(e,t){return(((t<<2^u(e,0))<<2^u(e,1))<<2^u(e,2))<<2^u(e,3)}(e,t)){case 5103:return G+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return G+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return G+e+W+e+N+e+e;case 6828:case 4268:return G+e+N+e+e;case 6165:return G+e+N+"flex-"+e+e;case 5187:return G+e+s(e,/(\w+).+(:[^]+)/,"-webkit-box-$1$2-ms-flex-$1$2")+e;case 5443:return G+e+N+"flex-item-"+s(e,/flex-|-self/,"")+e;case 4675:return G+e+N+"flex-line-pack"+s(e,/align-content|flex-|-self/,"")+e;case 5548:return G+e+N+s(e,"shrink","negative")+e;case 5292:return G+e+N+s(e,"basis","preferred-size")+e;case 6060:return G+"box-"+s(e,"-grow","")+G+e+N+s(e,"grow","positive")+e;case 4554:return G+s(e,/([^-])(transform)/g,"$1-webkit-$2")+e;case 6187:return s(s(s(e,/(zoom-|grab)/,G+"$1"),/(image-set)/,G+"$1"),e,"")+e;case 5495:case 3959:return s(e,/(image-set\([^]*)/,G+"$1$`$1");case 4968:return s(s(e,/(.+:)(flex-)?(.*)/,"-webkit-box-pack:$3-ms-flex-pack:$3"),/s.+-b[^;]+/,"justify")+G+e+e;case 4095:case 3583:case 4068:case 2532:return s(e,/(.+)-inline(.+)/,G+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(d(e)-1-t>6)switch(u(e,t+1)){case 109:if(45!==u(e,t+4))break;case 102:return s(e,/(.+:)(.+)-([^]+)/,"$1-webkit-$2-$3$1"+W+(108==u(e,t+3)?"$3":"$2-$3"))+e;case 115:return~f(e,"stretch")?Y(s(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(115!==u(e,t+1))break;case 6444:switch(u(e,d(e)-3-(~f(e,"!important")&&10))){case 107:return s(e,":",":"+G)+e;case 101:return s(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+G+(45===u(e,14)?"inline-":"")+"box$3$1"+G+"$2$3$1"+N+"$2box$3")+e}break;case 5936:switch(u(e,t+11)){case 114:return G+e+N+s(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return G+e+N+s(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return G+e+N+s(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return G+e+N+e+e}return e}function U(e){return E(q("",null,null,null,[""],e=P(e),0,[0],e))}function q(e,t,r,n,o,i,c,u,l){for(var p=0,h=0,m=c,g=0,y=0,v=0,x=1,k=1,S=1,z=0,j="",P=o,E=i,_=n,N=j;k;)switch(v=z,z=$()){case 40:if(108!=v&&58==N.charCodeAt(m-1)){-1!=f(N+=s(A(z),"&","&\f"),"&\f")&&(S=-1);break}case 34:case 39:case 91:N+=A(z);break;case 9:case 10:case 13:case 32:N+=M(v);break;case 92:N+=F(C()-1,7);continue;case 47:switch(O()){case 42:case 47:b(V(T($(),C()),t,r),l);break;default:N+="/"}break;case 123*x:u[p++]=d(N)*S;case 125*x:case 59:case 0:switch(z){case 0:case 125:k=0;case 59+h:y>0&&d(N)-m&&b(y>32?J(N+";",n,r,m-1):J(s(N," ","")+";",n,r,m-2),l);break;case 59:N+=";";default:if(b(_=X(N,t,r,p,h,o,u,j,P=[],E=[],m),i),123===z)if(0===h)q(N,t,_,_,P,i,m,u,E);else switch(g){case 100:case 109:case 115:q(e,_,_,n&&b(X(e,_,_,0,0,o,u,j,o,P=[],m),E),o,E,m,u,n?P:E);break;default:q(N,_,_,_,[""],E,0,u,E)}}p=h=y=0,x=S=1,j=N="",m=c;break;case 58:m=1+d(N),y=v;default:if(x<1)if(123==z)--x;else if(125==z&&0==x++&&125==w())continue;switch(N+=a(z),z*x){case 38:S=h>0?1:(N+="\f",-1);break;case 44:u[p++]=(d(N)-1)*S,S=1;break;case 64:45===O()&&(N+=A($())),g=O(),h=m=d(j=N+=R(C())),z++;break;case 45:45===v&&2==d(N)&&(x=0)}}return i}function X(e,t,r,n,a,i,f,u,d,b,h){for(var m=a-1,g=0===a?i:[""],y=p(g),v=0,x=0,S=0;v<n;++v)for(var w=0,$=l(e,m+1,m=o(x=f[v])),O=e;w<y;++w)(O=c(x>0?g[w]+" "+$:s($,/&\f/g,g[w])))&&(d[S++]=O);return k(e,t,r,0===a?I:u,d,b,h)}function V(e,t,r){return k(e,t,r,H,a(v),l(e,2,-2),0)}function J(e,t,r,n){return k(e,t,r,D,l(e,0,n),l(e,n+1,-1),n)}var K=function(e,t,r){for(var n=0,o=0;n=o,o=O(),38===n&&12===o&&(t[r]=1),!j(o);)$();return z(e,y)},Q=function(e,t){return E(function(e,t){var r=-1,n=44;do{switch(j(n)){case 0:38===n&&12===O()&&(t[r]=1),e[r]+=K(y-1,t,r);break;case 2:e[r]+=A(n);break;case 4:if(44===n){e[++r]=58===O()?"&\f":"",t[r]=e[r].length;break}default:e[r]+=a(n)}}while(n=$());return e}(P(e),t))},ee=new WeakMap,te=function(e){if("rule"===e.type&&e.parent&&!(e.length<1)){for(var t=e.value,r=e.parent,n=e.column===r.column&&e.line===r.line;"rule"!==r.type;)if(!(r=r.parent))return;if((1!==e.props.length||58===t.charCodeAt(0)||ee.get(r))&&!n){ee.set(e,!0);for(var o=[],a=Q(t,o),i=r.props,c=0,s=0;c<a.length;c++)for(var f=0;f<i.length;f++,s++)e.props[s]=o[c]?a[c].replace(/&\f/g,i[f]):i[f]+" "+a[c]}}},re=function(e){if("decl"===e.type){var t=e.value;108===t.charCodeAt(0)&&98===t.charCodeAt(2)&&(e.return="",e.value="")}},ne=[function(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case D:e.return=Y(e.value,e.length);break;case L:return B([S(e,{value:s(e.value,"@","@"+G)})],n);case I:if(e.length)return function(e,t){return e.map(t).join("")}(e.props,(function(t){switch(function(e,t){return(e=t.exec(e))?e[0]:e}(t,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return B([S(e,{props:[s(t,/:(read-\w+)/,":-moz-$1")]})],n);case"::placeholder":return B([S(e,{props:[s(t,/:(plac\w+)/,":-webkit-input-$1")]}),S(e,{props:[s(t,/:(plac\w+)/,":-moz-$1")]}),S(e,{props:[s(t,/:(plac\w+)/,N+"input-$1")]})],n)}return""}))}}],oe=function(e){var t=e.key;if("css"===t){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,(function(e){-1!==e.getAttribute("data-emotion").indexOf(" ")&&(document.head.appendChild(e),e.setAttribute("data-s",""))}))}var o=e.stylisPlugins||ne;var a,i,c={},s=[];a=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+t+' "]'),(function(e){for(var t=e.getAttribute("data-emotion").split(" "),r=1;r<t.length;r++)c[t[r]]=!0;s.push(e)}));var f,u,l=[Z,(u=function(e){f.insert(e)},function(e){e.root||(e=e.return)&&u(e)})],d=function(e){var t=p(e);return function(r,n,o,a){for(var i="",c=0;c<t;c++)i+=e[c](r,n,o,a)||"";return i}}([te,re].concat(o,l));i=function(e,t,r,n){f=r,B(U(e?e+"{"+t.styles+"}":t.styles),d),n&&(b.inserted[t.name]=!0)};var b={key:t,sheet:new n({key:t,container:a,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:c,registered:{},insert:i};return b.sheet.hydrate(s),b}},9017:function(e,t,r){"use strict";r.d(t,{O:function(){return b}});var n=function(e){for(var t,r=0,n=0,o=e.length;o>=4;++n,o-=4)t=1540483477*(65535&(t=255&e.charCodeAt(n)|(255&e.charCodeAt(++n))<<8|(255&e.charCodeAt(++n))<<16|(255&e.charCodeAt(++n))<<24))+(59797*(t>>>16)<<16),r=1540483477*(65535&(t^=t>>>24))+(59797*(t>>>16)<<16)^1540483477*(65535&r)+(59797*(r>>>16)<<16);switch(o){case 3:r^=(255&e.charCodeAt(n+2))<<16;case 2:r^=(255&e.charCodeAt(n+1))<<8;case 1:r=1540483477*(65535&(r^=255&e.charCodeAt(n)))+(59797*(r>>>16)<<16)}return(((r=1540483477*(65535&(r^=r>>>13))+(59797*(r>>>16)<<16))^r>>>15)>>>0).toString(36)},o={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};var a=/[A-Z]|^ms/g,i=/_EMO_([^_]+?)_([^]*?)_EMO_/g,c=function(e){return 45===e.charCodeAt(1)},s=function(e){return null!=e&&"boolean"!==typeof e},f=function(e){var t=Object.create(null);return function(r){return void 0===t[r]&&(t[r]=e(r)),t[r]}}((function(e){return c(e)?e:e.replace(a,"-$&").toLowerCase()})),u=function(e,t){switch(e){case"animation":case"animationName":if("string"===typeof t)return t.replace(i,(function(e,t,r){return d={name:t,styles:r,next:d},t}))}return 1===o[e]||c(e)||"number"!==typeof t||0===t?t:t+"px"};function l(e,t,r){if(null==r)return"";if(void 0!==r.__emotion_styles)return r;switch(typeof r){case"boolean":return"";case"object":if(1===r.anim)return d={name:r.name,styles:r.styles,next:d},r.name;if(void 0!==r.styles){var n=r.next;if(void 0!==n)for(;void 0!==n;)d={name:n.name,styles:n.styles,next:d},n=n.next;return r.styles+";"}return function(e,t,r){var n="";if(Array.isArray(r))for(var o=0;o<r.length;o++)n+=l(e,t,r[o])+";";else for(var a in r){var i=r[a];if("object"!==typeof i)null!=t&&void 0!==t[i]?n+=a+"{"+t[i]+"}":s(i)&&(n+=f(a)+":"+u(a,i)+";");else if(!Array.isArray(i)||"string"!==typeof i[0]||null!=t&&void 0!==t[i[0]]){var c=l(e,t,i);switch(a){case"animation":case"animationName":n+=f(a)+":"+c+";";break;default:n+=a+"{"+c+"}"}}else for(var d=0;d<i.length;d++)s(i[d])&&(n+=f(a)+":"+u(a,i[d])+";")}return n}(e,t,r);case"function":if(void 0!==e){var o=d,a=r(e);return d=o,l(e,t,a)}}if(null==t)return r;var i=t[r];return void 0!==i?i:r}var d,p=/label:\s*([^\s;\n{]+)\s*(;|$)/g;var b=function(e,t,r){if(1===e.length&&"object"===typeof e[0]&&null!==e[0]&&void 0!==e[0].styles)return e[0];var o=!0,a="";d=void 0;var i=e[0];null==i||void 0===i.raw?(o=!1,a+=l(r,t,i)):a+=i[0];for(var c=1;c<e.length;c++)a+=l(r,t,e[c]),o&&(a+=i[c]);p.lastIndex=0;for(var s,f="";null!==(s=p.exec(a));)f+="-"+s[1];return{name:n(a)+f,styles:a,next:d}}},2792:function(e,t,r){"use strict";r.d(t,{My:function(){return o},fp:function(){return n}});function n(e,t,r){var n="";return r.split(" ").forEach((function(r){void 0!==e[r]?t.push(e[r]+";"):n+=r+" "})),n}var o=function(e,t,r){!function(e,t,r){var n=e.key+"-"+t.name;!1===r&&void 0===e.registered[n]&&(e.registered[n]=t.styles)}(e,t,r);var n=e.key+"-"+t.name;if(void 0===e.inserted[t.name]){var o=t;do{e.insert(t===o?"."+n:"",o,e.sheet,!0);o=o.next}while(void 0!==o)}}},5951:function(e,t,r){"use strict";r.d(t,{Me:function(){return le},N4:function(){return ue},T1:function(){return fe},O2:function(){return se},rZ:function(){return ce}});var n=r(2784),o=r.t(n,2);const a={dark:["#C1C2C5","#A6A7AB","#909296","#5c5f66","#373A40","#2C2E33","#25262b","#1A1B1E","#141517","#101113"],gray:["#f8f9fa","#f1f3f5","#e9ecef","#dee2e6","#ced4da","#adb5bd","#868e96","#495057","#343a40","#212529"],red:["#fff5f5","#ffe3e3","#ffc9c9","#ffa8a8","#ff8787","#ff6b6b","#fa5252","#f03e3e","#e03131","#c92a2a"],pink:["#fff0f6","#ffdeeb","#fcc2d7","#faa2c1","#f783ac","#f06595","#e64980","#d6336c","#c2255c","#a61e4d"],grape:["#f8f0fc","#f3d9fa","#eebefa","#e599f7","#da77f2","#cc5de8","#be4bdb","#ae3ec9","#9c36b5","#862e9c"],violet:["#f3f0ff","#e5dbff","#d0bfff","#b197fc","#9775fa","#845ef7","#7950f2","#7048e8","#6741d9","#5f3dc4"],indigo:["#edf2ff","#dbe4ff","#bac8ff","#91a7ff","#748ffc","#5c7cfa","#4c6ef5","#4263eb","#3b5bdb","#364fc7"],blue:["#e7f5ff","#d0ebff","#a5d8ff","#74c0fc","#4dabf7","#339af0","#228be6","#1c7ed6","#1971c2","#1864ab"],cyan:["#e3fafc","#c5f6fa","#99e9f2","#66d9e8","#3bc9db","#22b8cf","#15aabf","#1098ad","#0c8599","#0b7285"],teal:["#e6fcf5","#c3fae8","#96f2d7","#63e6be","#38d9a9","#20c997","#12b886","#0ca678","#099268","#087f5b"],green:["#ebfbee","#d3f9d8","#b2f2bb","#8ce99a","#69db7c","#51cf66","#40c057","#37b24d","#2f9e44","#2b8a3e"],lime:["#f4fce3","#e9fac8","#d8f5a2","#c0eb75","#a9e34b","#94d82d","#82c91e","#74b816","#66a80f","#5c940d"],yellow:["#fff9db","#fff3bf","#ffec99","#ffe066","#ffd43b","#fcc419","#fab005","#f59f00","#f08c00","#e67700"],orange:["#fff4e6","#ffe8cc","#ffd8a8","#ffc078","#ffa94d","#ff922b","#fd7e14","#f76707","#e8590c","#d9480f"]};function i(e){return(t,r,n=!0)=>{const o=e.colors[e.primaryColor];return t in e.colors?e.colors[t][r]:n?o[r]:t}}function c(e){return t=>"number"===typeof e.primaryShade?e.primaryShade:e.primaryShade[t||e.colorScheme]}function s(e){let t="";for(let r=1;r<e.length-1;r+=1)t+=`${e[r]} ${r/(e.length-1)*100}%, `;return`${e[0]} 0%, ${t}${e[e.length-1]} 100%`}function f(e){const t=i(e),r=c(e);return n=>{const o={from:(null==n?void 0:n.from)||e.defaultGradient.from,to:(null==n?void 0:n.to)||e.defaultGradient.to,deg:(null==n?void 0:n.deg)||e.defaultGradient.deg};return`linear-gradient(${o.deg}deg, ${t(o.from,r(),!1)} 0%, ${t(o.to,r(),!1)} 100%)`}}function u(e){return"number"===typeof e.size?e.size:e.sizes[e.size]||e.size||e.sizes.md}function l(e){return/^#?([0-9A-F]{3}){1,2}$/i.test(e)?function(e){let t=e.replace("#","");if(3===t.length){const e=t.split("");t=[e[0],e[0],e[1],e[1],e[2],e[2]].join("")}const r=parseInt(t,16);return{r:r>>16&255,g:r>>8&255,b:255&r,a:1}}(e):e.startsWith("rgb")?function(e){const[t,r,n,o]=e.replace(/[^0-9,.]/g,"").split(",").map(Number);return{r:t,g:r,b:n,a:o||1}}(e):{r:0,g:0,b:0,a:1}}function d(e,t){if("string"!==typeof e||t>1||t<0)return"rgba(0, 0, 0, 1)";const{r:r,g:n,b:o}=l(e);return`rgba(${r}, ${n}, ${o}, ${t})`}const p={fontStyles:function(e){return()=>({fontFamily:e.fontFamily||"sans-serif"})},themeColor:i,focusStyles:function(e){return()=>({WebkitTapHighlightColor:"transparent","&:focus":{outlineOffset:2,outline:"always"===e.focusRing||"auto"===e.focusRing?`2px solid ${e.colors[e.primaryColor]["dark"===e.colorScheme?7:5]}`:"none"},"&:focus:not(:focus-visible)":{outline:"auto"===e.focusRing||"never"===e.focusRing?"none":void 0}})},linearGradient:function(e,...t){return`linear-gradient(${e}deg, ${s(t)})`},radialGradient:function(...e){return`radial-gradient(circle, ${s(e)})`},smallerThan:function(e){return t=>`@media (max-width: ${u({size:t,sizes:e.breakpoints})}px)`},largerThan:function(e){return t=>`@media (min-width: ${u({size:t,sizes:e.breakpoints})+1}px)`},rgba:d,size:u,cover:function(e=0){return{position:"absolute",top:e,right:e,left:e,bottom:e}},darken:function(e,t){const{r:r,g:n,b:o,a:a}=l(e),i=1-t,c=e=>Math.round(e*i);return`rgba(${c(r)}, ${c(n)}, ${c(o)}, ${a})`},lighten:function(e,t){const{r:r,g:n,b:o,a:a}=l(e),i=e=>Math.round(e+(255-e)*t);return`rgba(${i(r)}, ${i(n)}, ${i(o)}, ${a})`},radius:function(e){return t=>{if("number"===typeof t)return t;const r="number"===typeof e.defaultRadius?e.defaultRadius:e.radius[e.defaultRadius]||e.defaultRadius;return e.radius[t]||t||r}},variant:function(e){const t=i(e),r=c(e),n=f(e);return({variant:o,color:a,gradient:i,primaryFallback:c})=>"light"===o?{border:"transparent",background:d(t(a,"dark"===e.colorScheme?8:0),"dark"===e.colorScheme?.2:1),color:"dark"===a?"dark"===e.colorScheme?e.colors.dark[0]:e.colors.dark[9]:t(a,"dark"===e.colorScheme?2:r("light")),hover:d(t(a,"dark"===e.colorScheme?7:1),"dark"===e.colorScheme?.25:.65)}:"default"===o?{border:"dark"===e.colorScheme?e.colors.dark[4]:e.colors.gray[4],background:"dark"===e.colorScheme?e.colors.dark[6]:e.white,color:"dark"===e.colorScheme?e.white:e.black,hover:"dark"===e.colorScheme?e.colors.dark[5]:e.colors.gray[0]}:"white"===o?{border:"transparent",background:e.white,color:t(a,r()),hover:null}:"outline"===o?{border:t(a,"dark"===e.colorScheme?5:r("light")),background:"transparent",color:t(a,"dark"===e.colorScheme?5:r("light")),hover:"dark"===e.colorScheme?d(t(a,5),.05):d(t(a,0),.35)}:"gradient"===o?{background:n(i),color:e.white,border:"transparent",hover:null}:"subtle"===o?{border:"transparent",background:"transparent",color:"dark"===a?"dark"===e.colorScheme?e.colors.dark[0]:e.colors.dark[9]:t(a,"dark"===e.colorScheme?2:r("light")),hover:d(t(a,"dark"===e.colorScheme?8:0),"dark"===e.colorScheme?.2:1)}:{border:"transparent",background:t(a,r(),c),color:e.white,hover:t(a,9===r()?8:r()+1)}},primaryShade:c,hover:function(e){return{"@media (hover: hover)":{"&:hover":e},"@media (hover: none)":{"&:active":e}}},gradient:f};var b=Object.defineProperty,h=Object.defineProperties,m=Object.getOwnPropertyDescriptors,g=Object.getOwnPropertySymbols,y=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable,x=(e,t,r)=>t in e?b(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;function k(e){return t=((e,t)=>{for(var r in t||(t={}))y.call(t,r)&&x(e,r,t[r]);if(g)for(var r of g(t))v.call(t,r)&&x(e,r,t[r]);return e})({},e),r={fn:{fontStyles:p.fontStyles(e),themeColor:p.themeColor(e),focusStyles:p.focusStyles(e),largerThan:p.largerThan(e),smallerThan:p.smallerThan(e),radialGradient:p.radialGradient,linearGradient:p.linearGradient,gradient:p.gradient(e),rgba:p.rgba,size:p.size,cover:p.cover,lighten:p.lighten,darken:p.darken,primaryShade:p.primaryShade(e),radius:p.radius(e),variant:p.variant(e),hover:p.hover}},h(t,m(r));var t,r}Object.keys(a);const S=k({dir:"ltr",primaryShade:{light:6,dark:8},focusRing:"auto",loader:"oval",dateFormat:"MMMM D, YYYY",colorScheme:"light",white:"#fff",black:"#000",defaultRadius:"sm",transitionTimingFunction:"ease",colors:a,lineHeight:1.55,fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontFamilyMonospace:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",primaryColor:"blue",respectReducedMotion:!0,cursorType:"default",defaultGradient:{from:"indigo",to:"cyan",deg:45},shadows:{xs:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",sm:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",md:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",lg:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xl:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},fontSizes:{xs:12,sm:14,md:16,lg:18,xl:20},radius:{xs:2,sm:4,md:8,lg:16,xl:32},spacing:{xs:10,sm:12,md:16,lg:20,xl:24},breakpoints:{xs:576,sm:768,md:992,lg:1200,xl:1400},headings:{fontFamily:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",fontWeight:700,sizes:{h1:{fontSize:34,lineHeight:1.3,fontWeight:void 0},h2:{fontSize:26,lineHeight:1.35,fontWeight:void 0},h3:{fontSize:22,lineHeight:1.4,fontWeight:void 0},h4:{fontSize:18,lineHeight:1.45,fontWeight:void 0},h5:{fontSize:16,lineHeight:1.5,fontWeight:void 0},h6:{fontSize:14,lineHeight:1.5,fontWeight:void 0}}},other:{},components:{},activeStyles:{transform:"translateY(1px)"},datesLocale:"en"});var w=r(5333),$=r(9017),O=(0,n.createContext)("undefined"!==typeof HTMLElement?(0,w.Z)({key:"css"}):null);O.Provider;var C=function(e){return(0,n.forwardRef)((function(t,r){var o=(0,n.useContext)(O);return e(t,o,r)}))},z=(0,n.createContext)({});o.useInsertionEffect&&o.useInsertionEffect;r(3463);var j=r(2792),P=o.useInsertionEffect?o.useInsertionEffect:n.useLayoutEffect,E=C((function(e,t){var r=e.styles,o=(0,$.O)([r],void 0,(0,n.useContext)(z)),a=(0,n.useRef)();return P((function(){var e=t.key+"-global",r=new t.sheet.constructor({key:e,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),n=!1,i=document.querySelector('style[data-emotion="'+e+" "+o.name+'"]');return t.sheet.tags.length&&(r.before=t.sheet.tags[0]),null!==i&&(n=!0,i.setAttribute("data-emotion",e),r.hydrate([i])),a.current=[r,n],function(){r.flush()}}),[t]),P((function(){var e=a.current,r=e[0];if(e[1])e[1]=!1;else{if(void 0!==o.next&&(0,j.My)(t,o.next,!0),r.tags.length){var n=r.tags[r.tags.length-1].nextElementSibling;r.before=n,r.flush()}t.insert("",o,r,!1)}}),[t,o.name]),null}));var A=Object.defineProperty,M=Object.defineProperties,F=Object.getOwnPropertyDescriptors,_=Object.getOwnPropertySymbols,T=Object.prototype.hasOwnProperty,R=Object.prototype.propertyIsEnumerable,N=(e,t,r)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,W=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&N(e,r,t[r]);if(_)for(var r of _(t))R.call(t,r)&&N(e,r,t[r]);return e};function G({theme:e}){return n.createElement(E,{styles:{"*, *::before, *::after":{boxSizing:"border-box"},body:(t=W({},e.fn.fontStyles()),r={backgroundColor:"dark"===e.colorScheme?e.colors.dark[7]:e.white,color:"dark"===e.colorScheme?e.colors.dark[0]:e.black,lineHeight:e.lineHeight,fontSize:e.fontSizes.md,WebkitFontSmoothing:"antialiased",MozOsxFontSmoothing:"grayscale"},M(t,F(r)))}});var t,r}function H(e,t,r){Object.keys(t).forEach((n=>{e[`--mantine-${r}-${n}`]="number"===typeof t[n]?`${t[n]}px`:t[n]}))}function I({theme:e}){const t={"--mantine-color-white":e.white,"--mantine-color-black":e.black,"--mantine-transition-timing-function":e.transitionTimingFunction,"--mantine-line-height":`${e.lineHeight}`,"--mantine-font-family":e.fontFamily,"--mantine-font-family-monospace":e.fontFamilyMonospace,"--mantine-font-family-headings":e.headings.fontFamily,"--mantine-heading-font-weight":`${e.headings.fontWeight}`};H(t,e.shadows,"shadow"),H(t,e.fontSizes,"font-size"),H(t,e.radius,"radius"),H(t,e.spacing,"spacing"),Object.keys(e.colors).forEach((r=>{e.colors[r].forEach(((e,n)=>{t[`--mantine-color-${r}-${n}`]=e}))}));const r=e.headings.sizes;return Object.keys(r).forEach((e=>{t[`--mantine-${e}-font-size`]=`${r[e].fontSize}px`,t[`--mantine-${e}-line-height`]=`${r[e].lineHeight}`})),n.createElement(E,{styles:{":root":t}})}var D=Object.defineProperty,L=Object.defineProperties,B=Object.getOwnPropertyDescriptors,Z=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,U=Object.prototype.propertyIsEnumerable,q=(e,t,r)=>t in e?D(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,X=(e,t)=>{for(var r in t||(t={}))Y.call(t,r)&&q(e,r,t[r]);if(Z)for(var r of Z(t))U.call(t,r)&&q(e,r,t[r]);return e},V=(e,t)=>L(e,B(t));function J(e,t){return k(function(e,t){return t?Object.keys(e).reduce(((r,n)=>{if("headings"===n&&t.headings){const n=t.headings.sizes?Object.keys(e.headings.sizes).reduce(((r,n)=>(r[n]=X(X({},e.headings.sizes[n]),t.headings.sizes[n]),r)),{}):e.headings.sizes;return V(X({},r),{headings:V(X(X({},e.headings),t.headings),{sizes:n})})}return r[n]="object"===typeof t[n]?X(X({},e[n]),t[n]):"number"===typeof t[n]||"boolean"===typeof t[n]?t[n]:t[n]||e[n],r}),{}):e}(e,t))}const K={html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%"},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em"},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"none"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}};function Q(){return n.createElement(E,{styles:K})}var ee=Object.defineProperty,te=Object.getOwnPropertySymbols,re=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable,oe=(e,t,r)=>t in e?ee(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,ae=(e,t)=>{for(var r in t||(t={}))re.call(t,r)&&oe(e,r,t[r]);if(te)for(var r of te(t))ne.call(t,r)&&oe(e,r,t[r]);return e};const ie=(0,n.createContext)({theme:S});function ce(){var e;return(null==(e=(0,n.useContext)(ie))?void 0:e.theme)||S}function se(e){const t=ce(),r=e=>{var r,n;return{styles:(null==(r=t.components[e])?void 0:r.styles)||{},classNames:(null==(n=t.components[e])?void 0:n.classNames)||{}}};return Array.isArray(e)?e.map(r):[r(e)]}function fe(){var e;return null==(e=(0,n.useContext)(ie))?void 0:e.emotionCache}function ue(e,t,r){var n;const o=null==(n=ce().components[e])?void 0:n.defaultProps;return ae(ae(ae({},t),o),function(e){return Object.keys(e).reduce(((t,r)=>(void 0!==e[r]&&(t[r]=e[r]),t)),{})}(r))}function le({theme:e,emotionCache:t,withNormalizeCSS:r=!1,withGlobalStyles:o=!1,withCSSVariables:a=!1,inherit:i=!1,children:c}){const s=(0,n.useContext)(ie),f=J(S,i?ae(ae({},s.theme),e):e);return n.createElement(ie.Provider,{value:{theme:f,emotionCache:t}},r&&n.createElement(Q,null),o&&n.createElement(G,{theme:f}),a&&n.createElement(I,{theme:f}),c)}le.displayName="@mantine/core/MantineProvider"},3463:function(e,t,r){"use strict";var n=r(3887),o={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},i={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},c={};function s(e){return n.isMemo(e)?i:c[e.$$typeof]||o}c[n.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},c[n.Memo]=i;var f=Object.defineProperty,u=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,d=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,b=Object.prototype;e.exports=function e(t,r,n){if("string"!==typeof r){if(b){var o=p(r);o&&o!==b&&e(t,o,n)}var i=u(r);l&&(i=i.concat(l(r)));for(var c=s(t),h=s(r),m=0;m<i.length;++m){var g=i[m];if(!a[g]&&(!n||!n[g])&&(!h||!h[g])&&(!c||!c[g])){var y=d(r,g);try{f(t,g,y)}catch(v){}}}}return t}},3459:function(e,t){"use strict";var r="function"===typeof Symbol&&Symbol.for,n=r?Symbol.for("react.element"):60103,o=r?Symbol.for("react.portal"):60106,a=r?Symbol.for("react.fragment"):60107,i=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,s=r?Symbol.for("react.provider"):60109,f=r?Symbol.for("react.context"):60110,u=r?Symbol.for("react.async_mode"):60111,l=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,b=r?Symbol.for("react.suspense_list"):60120,h=r?Symbol.for("react.memo"):60115,m=r?Symbol.for("react.lazy"):60116,g=r?Symbol.for("react.block"):60121,y=r?Symbol.for("react.fundamental"):60117,v=r?Symbol.for("react.responder"):60118,x=r?Symbol.for("react.scope"):60119;function k(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case u:case l:case a:case c:case i:case p:return e;default:switch(e=e&&e.$$typeof){case f:case d:case m:case h:case s:return e;default:return t}}case o:return t}}}function S(e){return k(e)===l}t.AsyncMode=u,t.ConcurrentMode=l,t.ContextConsumer=f,t.ContextProvider=s,t.Element=n,t.ForwardRef=d,t.Fragment=a,t.Lazy=m,t.Memo=h,t.Portal=o,t.Profiler=c,t.StrictMode=i,t.Suspense=p,t.isAsyncMode=function(e){return S(e)||k(e)===u},t.isConcurrentMode=S,t.isContextConsumer=function(e){return k(e)===f},t.isContextProvider=function(e){return k(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===n},t.isForwardRef=function(e){return k(e)===d},t.isFragment=function(e){return k(e)===a},t.isLazy=function(e){return k(e)===m},t.isMemo=function(e){return k(e)===h},t.isPortal=function(e){return k(e)===o},t.isProfiler=function(e){return k(e)===c},t.isStrictMode=function(e){return k(e)===i},t.isSuspense=function(e){return k(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===l||e===c||e===i||e===p||e===b||"object"===typeof e&&null!==e&&(e.$$typeof===m||e.$$typeof===h||e.$$typeof===s||e.$$typeof===f||e.$$typeof===d||e.$$typeof===y||e.$$typeof===v||e.$$typeof===x||e.$$typeof===g)},t.typeOf=k},3887:function(e,t,r){"use strict";e.exports=r(3459)},6570:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return r(4081)}])},4081:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return u}});var n=r(7328),o=r(2322),a=r(2784),i=r(5632),c=r(7729),s=r.n(c),f=(r(7915),r(5951));var u=function(e){var t=e.Component,r=e.pageProps,c=(0,i.useRouter)();return(0,a.useEffect)((function(){var e=function(e){!function(e){window.gtag("config","G-X73NL8LLT9",{page_path:e})}(e)};return c.events.on("routeChangeComplete",e),function(){c.events.off("routeChangeComplete",e)}}),[c.events]),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s(),{children:(0,o.jsx)("meta",{name:"viewport",content:"minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"})}),(0,o.jsx)(f.Me,{children:(0,o.jsx)(t,(0,n.Z)({},r))})]})}},7915:function(){},7729:function(e,t,r){e.exports=r(5913)},5632:function(e,t,r){e.exports=r(3642)},7328:function(e,t,r){"use strict";function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},o=Object.keys(r);"function"===typeof Object.getOwnPropertySymbols&&(o=o.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),o.forEach((function(t){n(e,t,r[t])}))}return e}r.d(t,{Z:function(){return o}})}},function(e){var t=function(t){return e(e.s=t)};e.O(0,[774,179],(function(){return t(6570),t(3642)}));var r=e.O();_N_E=r}]);