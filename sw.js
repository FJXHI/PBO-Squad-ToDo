if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let o={};const c=s=>i(s,a),l={module:{uri:a},exports:o,require:c};e[a]=Promise.all(n.map((s=>l[s]||c(s)))).then((s=>(r(...s),o)))}}define(["./workbox-7cfec069"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AboutView-ca9f3163.css",revision:null},{url:"assets/AboutView-f23467cc.js",revision:null},{url:"assets/AddView-6c1dbd0c.js",revision:null},{url:"assets/HomeView-0b994045.css",revision:null},{url:"assets/HomeView-8a331072.js",revision:null},{url:"assets/icon_edit-34456b79.js",revision:null},{url:"assets/index-9655a0de.js",revision:null},{url:"assets/index-ea20ee22.css",revision:null},{url:"assets/MoreView-01b2edfc.js",revision:null},{url:"assets/MoreView-9eec5d1d.css",revision:null},{url:"assets/SettingsView-15139fdd.js",revision:null},{url:"assets/SettingsView-7a16b264.css",revision:null},{url:"assets/TheInputForm-32ab4210.css",revision:null},{url:"assets/TheInputForm.vue_vue_type_style_index_0_lang-418d996d.js",revision:null},{url:"index.html",revision:"30506cfa6c44c5238dc8ab44ce158bf3"},{url:"registerSW.js",revision:"c71e95afdd8b26351a96577fa6463a48"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"logo-512x512.png",revision:"24f9f9f7e22dc1a64c420033f06a38c3"},{url:"logo-192x192.png",revision:"5570bfe120d2dd52d6f3dc357ef7f5b5"},{url:"assets/icon_add.svg",revision:"ba4e8aa9f625193ea71b8bfed1b9a431"},{url:"assets/icon_close.svg",revision:"1c2b19636a95fb827d6418a01a60e685"},{url:"assets/icon_deadline.png",revision:"3b5bbcb30bcec34daa6353d43f3f7f41"},{url:"assets/icon_delete.svg",revision:"87cbed57a6356fb4f067460715b46b54"},{url:"assets/icon_density_small.svg",revision:"6591709aac9c81217c9c6893413125ec"},{url:"assets/icon_done.svg",revision:"27ea57e53f7a235b0b13c342d8013ff6"},{url:"assets/icon_edit.svg",revision:"e71a1aaca1dc8c17d283d74f1f21400d"},{url:"assets/icon_filter.svg",revision:"ae56e0f72efa196b5606ebb43b87f2d2"},{url:"assets/icon_grid_view.svg",revision:"eba7e482aaebf2e554998d851bff90c9"},{url:"assets/icon_search.png",revision:"532e801c00f3d4f6c6b31744576b7056"},{url:"assets/icon_search.svg",revision:"4adebe711f2658446d18078437a8ad9f"},{url:"assets/icon_settings.png",revision:"190c8eb59a07a968261d2e944d622ec9"},{url:"assets/icon_settings.svg",revision:"6214a5a2161216cd6aa36e92bedb2cc1"},{url:"assets/icon_sort_ascending.svg",revision:"8f18ab2ceed41a40bd10b4f4e4592147"},{url:"assets/icon_sort_descending.svg",revision:"16a45799f95cab4d40ba33cfd28b2d89"},{url:"assets/icon_timespan.png",revision:"012adb7c7dccf35a5431867eae447f73"},{url:"manifest.webmanifest",revision:"7de5819a4756940b813849f05d97b14a"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
