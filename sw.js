if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let o={};const l=e=>i(e,a),c={module:{uri:a},exports:o,require:l};s[a]=Promise.all(n.map((e=>c[e]||l(e)))).then((e=>(r(...e),o)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/AboutView-ca9f3163.css",revision:null},{url:"assets/AboutView-e92177af.js",revision:null},{url:"assets/AddView-58d7b572.js",revision:null},{url:"assets/HomeView-5fee128d.js",revision:null},{url:"assets/HomeView-d8d71f39.css",revision:null},{url:"assets/icon_edit-34456b79.js",revision:null},{url:"assets/index-e0db37b8.js",revision:null},{url:"assets/index-ea20ee22.css",revision:null},{url:"assets/MoreView-63e40ec5.js",revision:null},{url:"assets/MoreView-9eec5d1d.css",revision:null},{url:"assets/SettingsView-7a16b264.css",revision:null},{url:"assets/SettingsView-9c91938e.js",revision:null},{url:"assets/TheInputForm-32ab4210.css",revision:null},{url:"assets/TheInputForm.vue_vue_type_style_index_0_lang-faff4555.js",revision:null},{url:"index.html",revision:"14ec733e07db8e02b17a4d85842d23c8"},{url:"registerSW.js",revision:"c71e95afdd8b26351a96577fa6463a48"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"logo-512x512.png",revision:"24f9f9f7e22dc1a64c420033f06a38c3"},{url:"logo-192x192.png",revision:"5570bfe120d2dd52d6f3dc357ef7f5b5"},{url:"assets/icon_add.svg",revision:"ba4e8aa9f625193ea71b8bfed1b9a431"},{url:"assets/icon_close.svg",revision:"1c2b19636a95fb827d6418a01a60e685"},{url:"assets/icon_deadline.png",revision:"3b5bbcb30bcec34daa6353d43f3f7f41"},{url:"assets/icon_delete.svg",revision:"87cbed57a6356fb4f067460715b46b54"},{url:"assets/icon_density_small.svg",revision:"6591709aac9c81217c9c6893413125ec"},{url:"assets/icon_done.svg",revision:"27ea57e53f7a235b0b13c342d8013ff6"},{url:"assets/icon_edit.svg",revision:"e71a1aaca1dc8c17d283d74f1f21400d"},{url:"assets/icon_filter.svg",revision:"ae56e0f72efa196b5606ebb43b87f2d2"},{url:"assets/icon_grid_view.svg",revision:"eba7e482aaebf2e554998d851bff90c9"},{url:"assets/icon_search.png",revision:"532e801c00f3d4f6c6b31744576b7056"},{url:"assets/icon_search.svg",revision:"4adebe711f2658446d18078437a8ad9f"},{url:"assets/icon_settings.png",revision:"190c8eb59a07a968261d2e944d622ec9"},{url:"assets/icon_settings.svg",revision:"6214a5a2161216cd6aa36e92bedb2cc1"},{url:"assets/icon_sort_ascending.svg",revision:"8f18ab2ceed41a40bd10b4f4e4592147"},{url:"assets/icon_sort_descending.svg",revision:"16a45799f95cab4d40ba33cfd28b2d89"},{url:"assets/icon_timespan.png",revision:"012adb7c7dccf35a5431867eae447f73"},{url:"manifest.webmanifest",revision:"7de5819a4756940b813849f05d97b14a"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
