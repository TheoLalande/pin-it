if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,i)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let c={};const r=e=>a(e,t),o={module:{uri:t},exports:c,require:r};s[t]=Promise.all(n.map((e=>o[e]||r(e)))).then((e=>(i(...e),c)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"26bba8fa5d19aa86bedd66775b8e629b"},{url:"/_next/static/D58Brh_aMHWwKMvP15GvQ/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/D58Brh_aMHWwKMvP15GvQ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/23-f7d4288174ec4929.js",revision:"D58Brh_aMHWwKMvP15GvQ"},{url:"/_next/static/chunks/267.550d09ddb49e3f48.js",revision:"550d09ddb49e3f48"},{url:"/_next/static/chunks/915.d2b50093feb5056f.js",revision:"d2b50093feb5056f"},{url:"/_next/static/chunks/app/_not-found/page-d2ca4a3edf9c850a.js",revision:"D58Brh_aMHWwKMvP15GvQ"},{url:"/_next/static/chunks/app/layout-93fdf02e7422a552.js",revision:"D58Brh_aMHWwKMvP15GvQ"},{url:"/_next/static/chunks/app/page-f37b25a320c5f67d.js",revision:"D58Brh_aMHWwKMvP15GvQ"},{url:"/_next/static/chunks/app/testPage/page-d8dccaa2711b4b0a.js",revision:"D58Brh_aMHWwKMvP15GvQ"},{url:"/_next/static/chunks/d0deef33.afff9b3bf7059c8b.js",revision:"afff9b3bf7059c8b"},{url:"/_next/static/chunks/fd9d1056-06d966de1f64cd57.js",revision:"D58Brh_aMHWwKMvP15GvQ"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"D58Brh_aMHWwKMvP15GvQ"},{url:"/_next/static/chunks/main-38884205f44230cd.js",revision:"D58Brh_aMHWwKMvP15GvQ"},{url:"/_next/static/chunks/main-app-9ecfcf5beae4b20d.js",revision:"D58Brh_aMHWwKMvP15GvQ"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"D58Brh_aMHWwKMvP15GvQ"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"D58Brh_aMHWwKMvP15GvQ"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-36e0b07667e102b1.js",revision:"D58Brh_aMHWwKMvP15GvQ"},{url:"/_next/static/css/6d3d8933c3e21edb.css",revision:"6d3d8933c3e21edb"},{url:"/_next/static/css/c33da3bdd127e99d.css",revision:"c33da3bdd127e99d"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon-2x.93fdb12c.png",revision:"93fdb12c"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/_next/static/media/marker-shadow.612e3b52.png",revision:"612e3b52"},{url:"/assets/icons/book.svg",revision:"60f1bb8e02af114c873636e19b85036e"},{url:"/assets/icons/camera.svg",revision:"806c10a38a97b69af08b662926b25d66"},{url:"/assets/icons/carabiner.svg",revision:"23baf1042bc283a2d508ba9b7db5b7a2"},{url:"/assets/icons/coktail.svg",revision:"8eb26bb1e650f89927ca6891e6bb0b55"},{url:"/assets/icons/epingler.svg",revision:"3253019ed6bc463d6a8617f8421d89c9"},{url:"/assets/icons/hiker.svg",revision:"900d21c05ddbc5ad5779e4b6756fce29"},{url:"/assets/icons/market.svg",revision:"7451cc1365e12789061c8cf88e483870"},{url:"/assets/icons/pin.svg",revision:"37990e4a13a906983d4565ad31497aa7"},{url:"/assets/icons/restaurant.svg",revision:"38e2d7000b5783c9e0fd4897e6e0af32"},{url:"/assets/icons/shower.svg",revision:"d5dd08e313fdb852816a7e301e7dc21e"},{url:"/assets/icons/sleep.svg",revision:"6e01d84e32642742fb0dc1619d64c7ec"},{url:"/assets/icons/star.svg",revision:"4998aceaec3c50a562935bc62a15c7b0"},{url:"/assets/icons/swim.svg",revision:"c6b81c978dd972ca166efc3a2742c5ec"},{url:"/assets/popUpPic.jpg",revision:"289715f02f24737b829dd254e6d41d07"},{url:"/data/pinPoints.js",revision:"80cae943ac0128c28f0e812a4f765eef"},{url:"/manifest.json",revision:"684f7bf7cd4b968711de8136718ecaa4"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
