if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,l)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const o=e=>r(e,n),u={module:{uri:n},exports:a,require:o};s[n]=Promise.all(i.map((e=>u[e]||o(e)))).then((e=>(l(...e),a)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"200",revision:"abe3cd38356eee40ebc90d276a3d65d2"},{url:"404",revision:"abe3cd38356eee40ebc90d276a3d65d2"},{url:"admin/dashboard",revision:"725daddcece3f008c83aa207f639ce2b"},{url:"admin/manage-account/change-password",revision:"61dc8c93e388ad9e70463de1aa725666"},{url:"admin/manage-account/preferences",revision:"1b9579bda51e0f9a1e1f008b0ed1abe6"},{url:"admin/manage-account/profile",revision:"cc514d83871e9f875053a07331501223"},{url:"admin/registrar/officially-enrolled",revision:"ae8429759d2408a81234b403dde030da"},{url:"admin/student/profile",revision:"2e6e6ee70faaa575275bbdb434000431"},{url:"admission/applicant-type",revision:"7c9a969b227736c2d6633f09008f53be"},{url:"admission/new-student/profile",revision:"2f17c8da3ff9baf8e06a5e74313a7f2b"},{url:"admission/new-student/program",revision:"888b83aa41442aebbb7a0826c018c5fe"},{url:"assets/admin.6f73e51a.css",revision:null},{url:"assets/admin.e4e201fb.js",revision:null},{url:"assets/AdminProfileCard.8a47ce9a.js",revision:null},{url:"assets/AdminProfileCard.a4016468.css",revision:null},{url:"assets/applicant-type.4ebaf396.js",revision:null},{url:"assets/auth.ecaa6bdc.js",revision:null},{url:"assets/change-password.c6c1f7c2.js",revision:null},{url:"assets/client-only.acd7a1e1.js",revision:null},{url:"assets/ColorModePicker.vue.f1a50e45.js",revision:null},{url:"assets/dashboard.2da251a6.js",revision:null},{url:"assets/dashboard.42066c34.js",revision:null},{url:"assets/default.8076fd32.js",revision:null},{url:"assets/entry.4e93d010.js",revision:null},{url:"assets/error-404.464813f1.js",revision:null},{url:"assets/error-404.7fc72018.css",revision:null},{url:"assets/error-500.1e74f84e.js",revision:null},{url:"assets/error-500.c5df6088.css",revision:null},{url:"assets/forgot-password.4b8513dd.js",revision:null},{url:"assets/index.19d812db.js",revision:null},{url:"assets/index.ce1bb94e.js",revision:null},{url:"assets/logo-inverted.2e363513.js",revision:null},{url:"assets/logo.8d545cdc.js",revision:null},{url:"assets/nuxt-link.51b8c744.js",revision:null},{url:"assets/officially-enrolled.10280458.js",revision:null},{url:"assets/preferences.1dd0b1ca.js",revision:null},{url:"assets/preferences.5ebb23e8.js",revision:null},{url:"assets/profile.02e711bf.js",revision:null},{url:"assets/profile.5ee80a22.js",revision:null},{url:"assets/profile.88dc5c8f.js",revision:null},{url:"assets/profile.b04bfca7.css",revision:null},{url:"assets/profile.ef81f71d.js",revision:null},{url:"assets/program.df9450ea.js",revision:null},{url:"assets/reset-password.a1c7d39e.js",revision:null},{url:"assets/student.0396768d.js",revision:null},{url:"assets/student.a906f9dd.css",revision:null},{url:"assets/tw-elements.es.min.b6d38ccc.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"auth/forgot-password",revision:"ee0a0273543dfe5df7e106a1ce49d91c"},{url:"auth/reset-password",revision:"f38857a8e8cbf935ef66d9a920e7de74"},{url:"/academe-sms/",revision:"fab8155d56aa5d36e37dd83fcf4bfcac"},{url:"student/dashboard",revision:"ddf6d34627f8e0c1067ecc7d06cf3277"},{url:"student/profile",revision:"fe5543a2f4a12b67f2617e016019fbbc"},{url:"student/settings/preferences",revision:"282e8cb38ab0313ca87aa97f981e70b2"},{url:"manifest.webmanifest",revision:"8fd6fe1c6ae07f6eb05c4eb857705024"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
