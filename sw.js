if(!self.define){let s,e={};const r=(r,n)=>(r=new URL(r+".js",n).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(n,i)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let a={};const o=s=>r(s,l),u={module:{uri:l},exports:a,require:o};e[l]=Promise.all(n.map((s=>u[s]||o(s)))).then((s=>(i(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"200",revision:"b5be09f01ee97555a6f1f249d400a424"},{url:"404",revision:"b5be09f01ee97555a6f1f249d400a424"},{url:"admin/dashboard",revision:"b202c8ccba9ee352abede640d6c8da5f"},{url:"admin/manage-account/change-password",revision:"9d6efea1db58e5dc3e91f2cd8c258eec"},{url:"admin/manage-account/preferences",revision:"4b65ef5fc357a8fd97a8b43f29871f7e"},{url:"admin/manage-account/profile",revision:"811bdd67b9384acbc0828dabc7f783b4"},{url:"assets/admin.88890553.js",revision:null},{url:"assets/AdminProfileCard.6b80aaa9.css",revision:null},{url:"assets/AdminProfileCard.ec3dc6b1.js",revision:null},{url:"assets/auth.2b64221c.js",revision:null},{url:"assets/change-password.dad9e427.js",revision:null},{url:"assets/client-only.892fde60.js",revision:null},{url:"assets/dashboard.e494c2ab.js",revision:null},{url:"assets/default.0198a4ff.js",revision:null},{url:"assets/entry.c515a726.js",revision:null},{url:"assets/error-404.7fc72018.css",revision:null},{url:"assets/error-404.ee9fe45f.js",revision:null},{url:"assets/error-500.27f2035f.js",revision:null},{url:"assets/error-500.c5df6088.css",revision:null},{url:"assets/forgot-password.f5c45ffc.js",revision:null},{url:"assets/index.0cc95bc3.js",revision:null},{url:"assets/index.404991a3.js",revision:null},{url:"assets/logo.1ada8ab6.js",revision:null},{url:"assets/nuxt-link.a913b812.js",revision:null},{url:"assets/preferences.9fca4f6c.js",revision:null},{url:"assets/profile.9a74cf94.js",revision:null},{url:"assets/reset-password.7c4d6237.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"auth/forgot-password",revision:"c5261506ca40c119c7de3af61a1dade6"},{url:"auth/reset-password",revision:"35f9fb6b8078e20ec4169604c9d5076a"},{url:"/academe-sms/",revision:"9ee21985d3a53b7c61d30e9332a2259d"},{url:"manifest.webmanifest",revision:"8fd6fe1c6ae07f6eb05c4eb857705024"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
