if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const a=s||("document"in self?document.currentScript.src:"")||location.href;if(e[a])return;let l={};const o=s=>i(s,a),c={module:{uri:a},exports:l,require:o};e[a]=Promise.all(n.map((s=>c[s]||o(s)))).then((s=>(r(...s),l)))}}define(["./workbox-7cfec069"],(function(s){"use strict";self.addEventListener("message",(s=>{s.data&&"SKIP_WAITING"===s.data.type&&self.skipWaiting()})),s.precacheAndRoute([{url:"assets/AboutView-ae787246.js",revision:null},{url:"assets/AboutView-ca9f3163.css",revision:null},{url:"assets/AddView-de570ff6.js",revision:null},{url:"assets/HomeView-b76dfd52.css",revision:null},{url:"assets/HomeView-cd51a2c0.js",revision:null},{url:"assets/index-a87f5d3e.js",revision:null},{url:"assets/index-cb43f842.css",revision:null},{url:"assets/InputForm-a4867571.css",revision:null},{url:"assets/InputForm.vue_vue_type_style_index_0_lang-df415742.js",revision:null},{url:"assets/MoreView-0fc01996.js",revision:null},{url:"assets/MoreView-56e3d347.css",revision:null},{url:"assets/relativeTime-23acf51e.js",revision:null},{url:"assets/relativeTime-e03e5a0d.css",revision:null},{url:"assets/SettingsView-596feb36.js",revision:null},{url:"assets/SettingsView-7a16b264.css",revision:null},{url:"index.html",revision:"35f6b43126a91b31de37047547ef42a3"},{url:"registerSW.js",revision:"cc0fa084c80667fa8d7a8acab1e0878d"},{url:"favicon.ico",revision:"1ba2ae710d927f13d483fd5d1e548c9b"},{url:"logo-512x512.png",revision:"24f9f9f7e22dc1a64c420033f06a38c3"},{url:"logo-192x192.png",revision:"5570bfe120d2dd52d6f3dc357ef7f5b5"},{url:"assets/icon_add.svg",revision:"ba4e8aa9f625193ea71b8bfed1b9a431"},{url:"assets/icon_close.svg",revision:"1c2b19636a95fb827d6418a01a60e685"},{url:"assets/icon_deadline.svg",revision:"bd4833d501b62350a9fb96330ffa85c6"},{url:"assets/icon_delete.svg",revision:"87cbed57a6356fb4f067460715b46b54"},{url:"assets/icon_density_small.svg",revision:"6591709aac9c81217c9c6893413125ec"},{url:"assets/icon_done.svg",revision:"27ea57e53f7a235b0b13c342d8013ff6"},{url:"assets/icon_edit.svg",revision:"e71a1aaca1dc8c17d283d74f1f21400d"},{url:"assets/icon_filter.svg",revision:"322c8e3cc0d86d5e28ecca7cba1608c7"},{url:"assets/icon_grid_view.svg",revision:"eba7e482aaebf2e554998d851bff90c9"},{url:"assets/icon_search.svg",revision:"4adebe711f2658446d18078437a8ad9f"},{url:"assets/icon_settings.svg",revision:"b434f9e75f77e37863ac70afa1c25469"},{url:"assets/icon_sort_ascending.svg",revision:"8f18ab2ceed41a40bd10b4f4e4592147"},{url:"assets/icon_sort_descending.svg",revision:"16a45799f95cab4d40ba33cfd28b2d89"},{url:"assets/icon_timespan.svg",revision:"181bfb469636173a22906c14c76e4739"},{url:"manifest.webmanifest",revision:"b3f655a303246e35791549772c16b2b2"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
