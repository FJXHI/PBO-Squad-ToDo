if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,a)=>{const r=e||("document"in self?document.currentScript.src:"")||location.href;if(s[r])return;let o={};const l=e=>i(e,r),c={module:{uri:r},exports:o,require:l};s[r]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(a(...e),o)))}}define(["./workbox-f2d444aa"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AboutView-8b6190c5.js",revision:null},{url:"assets/AboutView-ca9f3163.css",revision:null},{url:"assets/AddView-f3b28434.js",revision:null},{url:"assets/HomeView-6351369b.js",revision:null},{url:"assets/HomeView-b76dfd52.css",revision:null},{url:"assets/index-cb43f842.css",revision:null},{url:"assets/index-f4ad1d8a.js",revision:null},{url:"assets/InputForm-a4867571.css",revision:null},{url:"assets/InputForm.vue_vue_type_style_index_0_lang-44d272d9.js",revision:null},{url:"assets/MoreView-56e3d347.css",revision:null},{url:"assets/MoreView-7c186573.js",revision:null},{url:"assets/relativeTime-19df9ef0.js",revision:null},{url:"assets/relativeTime-e03e5a0d.css",revision:null},{url:"assets/SettingsView-7a16b264.css",revision:null},{url:"assets/SettingsView-8f153f58.js",revision:null},{url:"index.html",revision:"ba3fc86b7dc993ea2f611990df1bc912"},{url:"registerSW.js",revision:"c71e95afdd8b26351a96577fa6463a48"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"logo-512x512.png",revision:"24f9f9f7e22dc1a64c420033f06a38c3"},{url:"logo-192x192.png",revision:"5570bfe120d2dd52d6f3dc357ef7f5b5"},{url:"assets/icon_add.svg",revision:"ba4e8aa9f625193ea71b8bfed1b9a431"},{url:"assets/icon_close.svg",revision:"1c2b19636a95fb827d6418a01a60e685"},{url:"assets/icon_deadline.svg",revision:"bd4833d501b62350a9fb96330ffa85c6"},{url:"assets/icon_delete.svg",revision:"87cbed57a6356fb4f067460715b46b54"},{url:"assets/icon_density_small.svg",revision:"6591709aac9c81217c9c6893413125ec"},{url:"assets/icon_done.svg",revision:"27ea57e53f7a235b0b13c342d8013ff6"},{url:"assets/icon_edit.svg",revision:"e71a1aaca1dc8c17d283d74f1f21400d"},{url:"assets/icon_filter.svg",revision:"322c8e3cc0d86d5e28ecca7cba1608c7"},{url:"assets/icon_grid_view.svg",revision:"eba7e482aaebf2e554998d851bff90c9"},{url:"assets/icon_search.svg",revision:"4adebe711f2658446d18078437a8ad9f"},{url:"assets/icon_settings.svg",revision:"b434f9e75f77e37863ac70afa1c25469"},{url:"assets/icon_sort_ascending.svg",revision:"8f18ab2ceed41a40bd10b4f4e4592147"},{url:"assets/icon_sort_descending.svg",revision:"16a45799f95cab4d40ba33cfd28b2d89"},{url:"assets/icon_timespan.svg",revision:"181bfb469636173a22906c14c76e4739"},{url:"manifest.webmanifest",revision:"7de5819a4756940b813849f05d97b14a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html"))),e.registerRoute(/^\/PBO-Squad-ToDo\/docs\/.*$/,new e.NetworkFirst({cacheName:"docs-cache",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:50,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/.*\.(?:png|jpg|jpeg|svg|gif)/,new e.CacheFirst({cacheName:"image-cache",plugins:[new e.ExpirationPlugin({maxEntries:100,maxAgeSeconds:2592e3})]}),"GET")}));
