if(!self.define){let e,s={};const n=(n,a)=>(n=new URL(n+".js",a).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(a,i)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>n(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(i(...e),t)))}}define(["./workbox-4754cb34"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"cf3fe033562ccafe7792d2fe47f7ae41"},{url:"/_next/static/5dMnoolAPEwq_0A9CreNk/_buildManifest.js",revision:"2ec694eb52ae4f523f265a46bae4d768"},{url:"/_next/static/5dMnoolAPEwq_0A9CreNk/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/173-5a1a2607b86654a3.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/23-dd6ca9d4581b595d.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/267.bfdcac549d6de0ab.js",revision:"bfdcac549d6de0ab"},{url:"/_next/static/chunks/303-eb561744f44be9cf.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/365-4605ff9e44965a32.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/370b0802-fe52b231bf25cd69.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/667.9ef6a1c362abce0b.js",revision:"9ef6a1c362abce0b"},{url:"/_next/static/chunks/795d4814-e10fa48fdc83ce30.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/8e1d74a4-d195739342069d7c.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/94730671-9d0403ba288e1319.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/app/_not-found/page-210bf0898f4d4efa.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/app/layout-cf2c8dd1f55fc404.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/app/page-ac7b20ec20a54b66.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/app/settings/page-44e682d55744abc3.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/app/settings/preferences/page-dfe7aa817acea2b1.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/app/template-2cf4e48f270538ec.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/app/testPage/page-1978a96cb19c22b6.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/d0deef33.afff9b3bf7059c8b.js",revision:"afff9b3bf7059c8b"},{url:"/_next/static/chunks/fd9d1056-1a6cec4e37df8ae8.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/main-7f96b22353cc8464.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/main-app-9ecfcf5beae4b20d.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/pages/_app-6a626577ffa902a4.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/pages/_error-1be831200e60c5c0.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-f6052e7f56881242.js",revision:"5dMnoolAPEwq_0A9CreNk"},{url:"/_next/static/css/6d3d8933c3e21edb.css",revision:"6d3d8933c3e21edb"},{url:"/_next/static/css/8e44e7c8ae904f1d.css",revision:"8e44e7c8ae904f1d"},{url:"/_next/static/media/layers-2x.9859cd12.png",revision:"9859cd12"},{url:"/_next/static/media/layers.ef6db872.png",revision:"ef6db872"},{url:"/_next/static/media/marker-icon-2x.93fdb12c.png",revision:"93fdb12c"},{url:"/_next/static/media/marker-icon.d577052a.png",revision:"d577052a"},{url:"/_next/static/media/marker-shadow.612e3b52.png",revision:"612e3b52"},{url:"/assets/icons/book.svg",revision:"60f1bb8e02af114c873636e19b85036e"},{url:"/assets/icons/camera.svg",revision:"806c10a38a97b69af08b662926b25d66"},{url:"/assets/icons/carabiner.svg",revision:"23baf1042bc283a2d508ba9b7db5b7a2"},{url:"/assets/icons/coktail.svg",revision:"8eb26bb1e650f89927ca6891e6bb0b55"},{url:"/assets/icons/epingler.svg",revision:"3253019ed6bc463d6a8617f8421d89c9"},{url:"/assets/icons/hiker.svg",revision:"900d21c05ddbc5ad5779e4b6756fce29"},{url:"/assets/icons/market.svg",revision:"7451cc1365e12789061c8cf88e483870"},{url:"/assets/icons/pin.svg",revision:"b3a38192059bf08c77d43800ba439d2e"},{url:"/assets/icons/restaurant.svg",revision:"38e2d7000b5783c9e0fd4897e6e0af32"},{url:"/assets/icons/shower.svg",revision:"d5dd08e313fdb852816a7e301e7dc21e"},{url:"/assets/icons/sleep.svg",revision:"6e01d84e32642742fb0dc1619d64c7ec"},{url:"/assets/icons/star.svg",revision:"4998aceaec3c50a562935bc62a15c7b0"},{url:"/assets/icons/swim.svg",revision:"c6b81c978dd972ca166efc3a2742c5ec"},{url:"/assets/popUpPic.jpg",revision:"289715f02f24737b829dd254e6d41d07"},{url:"/assets/profilePicture.jpeg",revision:"1b08db6540e1a269cfef74625ffada79"},{url:"/assets/pwaIcons/1024-maskable.png",revision:"27bc9e7077122e48a38d99cb1404aacb"},{url:"/assets/pwaIcons/1024.png",revision:"27bc9e7077122e48a38d99cb1404aacb"},{url:"/assets/pwaIcons/128-maskable.png",revision:"a47cef5bb931eedd13adc90e542244f9"},{url:"/assets/pwaIcons/128.png",revision:"a47cef5bb931eedd13adc90e542244f9"},{url:"/assets/pwaIcons/256-maskable.png",revision:"3be12d992c4262e82056ef5e472815ed"},{url:"/assets/pwaIcons/256.png",revision:"3be12d992c4262e82056ef5e472815ed"},{url:"/assets/pwaIcons/512-maskable.png",revision:"945edb8cbf9aa196bbaa71fb0f571829"},{url:"/assets/pwaIcons/512.png",revision:"945edb8cbf9aa196bbaa71fb0f571829"},{url:"/assets/pwaIcons/64-maskable.png",revision:"96e50f014d4cc1acb50d0d227e96bb56"},{url:"/assets/pwaIcons/64.png",revision:"96e50f014d4cc1acb50d0d227e96bb56"},{url:"/data/pinPoints.js",revision:"80cae943ac0128c28f0e812a4f765eef"},{url:"/manifest.json",revision:"9755d283eb7f1235fac16c970a512b9d"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
