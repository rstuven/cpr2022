if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,i)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let t={};const r=e=>c(e,a),o={module:{uri:a},exports:t,require:r};s[a]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-541f88f7"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/CNAME",revision:"11f78eea86cee5f810a5349398385637"},{url:"/_next/static/chunks/065a3ddb.90a458b90235c230.js",revision:"90a458b90235c230"},{url:"/_next/static/chunks/215.cb5cf9056e926e0c.js",revision:"cb5cf9056e926e0c"},{url:"/_next/static/chunks/32.2954f0e8e686da76.js",revision:"2954f0e8e686da76"},{url:"/_next/static/chunks/346.230a3b2c55313d15.js",revision:"230a3b2c55313d15"},{url:"/_next/static/chunks/466.65dd8b6cd3ce4b3b.js",revision:"65dd8b6cd3ce4b3b"},{url:"/_next/static/chunks/4a5bdccf.1a9f95ea5640c6ae.js",revision:"1a9f95ea5640c6ae"},{url:"/_next/static/chunks/59b4e022.fe324f9529c87127.js",revision:"fe324f9529c87127"},{url:"/_next/static/chunks/676-f62a1751ce6be529.js",revision:"f62a1751ce6be529"},{url:"/_next/static/chunks/69bd6bf3.ae683eb74bf9d2d7.js",revision:"ae683eb74bf9d2d7"},{url:"/_next/static/chunks/81ca6f2a.6f5b1eaf2946a6b6.js",revision:"6f5b1eaf2946a6b6"},{url:"/_next/static/chunks/823-6bb1226044891a05.js",revision:"6bb1226044891a05"},{url:"/_next/static/chunks/911.0b52b89cd802811f.js",revision:"0b52b89cd802811f"},{url:"/_next/static/chunks/9814d858.0c30bade4842395c.js",revision:"0c30bade4842395c"},{url:"/_next/static/chunks/f36c6662.8bd4b99cfdd13db4.js",revision:"8bd4b99cfdd13db4"},{url:"/_next/static/chunks/framework-0bff4c72fef67389.js",revision:"0bff4c72fef67389"},{url:"/_next/static/chunks/main-d5bf0ad2b77c25e8.js",revision:"d5bf0ad2b77c25e8"},{url:"/_next/static/chunks/pages/_app-31ad2b909e70b246.js",revision:"31ad2b909e70b246"},{url:"/_next/static/chunks/pages/_error-e755336071b61fcc.js",revision:"e755336071b61fcc"},{url:"/_next/static/chunks/pages/acerca-de-4de1e872f5139871.js",revision:"4de1e872f5139871"},{url:"/_next/static/chunks/pages/compartir/%5BfragmentoId%5D-c0c7b28e6f5c6c91.js",revision:"c0c7b28e6f5c6c91"},{url:"/_next/static/chunks/pages/index-e5cd368bd8f34c7c.js",revision:"e5cd368bd8f34c7c"},{url:"/_next/static/chunks/polyfills-c67a75d1b6f99dc8.js",revision:"837c0df77fd5009c9e46d446188ecfd0"},{url:"/_next/static/chunks/webpack-a2039be55536e9cd.js",revision:"a2039be55536e9cd"},{url:"/_next/static/css/94c627193f3a4580.css",revision:"94c627193f3a4580"},{url:"/_next/static/media/escudo.86a8fb32.png",revision:"60a2580488741f5171ffb16eb104756b"},{url:"/_next/static/media/titulo.00319e1d.png",revision:"8c8825bea1eac6f15e02d4c5fbc7693d"},{url:"/_next/static/rfyVLWlM8Z8IiSbva47Pa/_buildManifest.js",revision:"7fe42dc9d7280d501349b98bcfc55b12"},{url:"/_next/static/rfyVLWlM8Z8IiSbva47Pa/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/android-chrome-192x192.png",revision:"334fdb796617edf90b925977e8907e4b"},{url:"/android-chrome-512x512.png",revision:"2fedf973f187e15bf5398017921d5b49"},{url:"/apple-touch-icon.png",revision:"5948485b33640339e728787cc8b99003"},{url:"/favicon-16x16.png",revision:"411c227583603b4bc6b9745b275caaa2"},{url:"/favicon-32x32.png",revision:"d396c968db30425c7a02b8c83a0b56e4"},{url:"/favicon.ico",revision:"ec84edb7cdaf3cab37bcd8a0436e0f70"},{url:"/fonts/ConvencionFJ-Regular.ttf",revision:"2a127c517c2ef9c6e64fa2ee109cd3c3"},{url:"/fonts/ConvencionFJ-Regular.woff2",revision:"e49b9eda8e0a9ef1095a461d7a6d2fd6"},{url:"/images/escudo.png",revision:"60a2580488741f5171ffb16eb104756b"},{url:"/images/logo.png",revision:"9755a37e908ebefedb24dcf2fefe3416"},{url:"/images/screenshot-actions-menu.png",revision:"c7532d4db5bc56d0236cf488ebceade5"},{url:"/images/screenshot-anchor-link.png",revision:"2b5fa973c288988630d847e990c85cbd"},{url:"/images/screenshot-cross-reference-1.png",revision:"4970c279695b11e2c0aa82bee9652b31"},{url:"/images/screenshot-cross-reference-2.png",revision:"bcc6eb9db1da8cc64f2a6ed4de0f0314"},{url:"/images/screenshot-install-app.png",revision:"82f315e1d7597da39c78f6d6b0c12fd8"},{url:"/images/screenshot-link-law.png",revision:"c4e1e3dd4a2627b365ee364048fd5f1d"},{url:"/images/screenshot-reference.png",revision:"ac0aeb5027e28bc3808c912be7b1df19"},{url:"/images/screenshot-social-articulo.png",revision:"1bbc2789e1b00ade76ec582876623f12"},{url:"/images/screenshot-tag-links.png",revision:"60fa07eec98e8a7e1eca68a77315446a"},{url:"/images/titulo.png",revision:"8c8825bea1eac6f15e02d4c5fbc7693d"},{url:"/site.webmanifest",revision:"e012de515b0b252e70cf4b38e37ef4fa"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
