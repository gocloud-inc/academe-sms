if(!self.define){let e,s={};const r=(r,l)=>(r=new URL(r+".js",l).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(l,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const o=e=>r(e,n),u={module:{uri:n},exports:a,require:o};s[n]=Promise.all(l.map((e=>u[e]||o(e)))).then((e=>(i(...e),a)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"200",revision:"d22e9663d87843b8894d82bfb0aeb035"},{url:"404",revision:"d22e9663d87843b8894d82bfb0aeb035"},{url:"admin/dashboard",revision:"c8ec7dbfd484471550785ff1c01831f7"},{url:"admin/employees/create",revision:"fa5f000c3c4c41ef862eaa0171b6ac90"},{url:"admin/employees/edit",revision:"3361eac14392e384284e6d49b91292e3"},{url:"admin/employees",revision:"419c66ab1ddc971829b17746adc0c0b2"},{url:"admin/manage-account/change-password",revision:"b7da7cd8c71f05b24b2fecf49f92793d"},{url:"admin/manage-account/preferences",revision:"483bf9db1f7313b71c06eeda30f7c409"},{url:"admin/manage-account/profile",revision:"5caa6dd568e197a74f5476b5c400fdad"},{url:"admin/registrar/officially-enrolled",revision:"40b044854a52a30ae118c0ade59559f0"},{url:"admin/student/profile",revision:"2d89726cf3f92563609133149eef7439"},{url:"admission/applicant-type",revision:"d51a9ac7c77d88c97369ba60e245fbd0"},{url:"admission/new-student/profile",revision:"71083cfd25c118ef39e664ee01a3b577"},{url:"admission/new-student/program",revision:"bf3d9e4465870ef94979bfe7a0d7715f"},{url:"assets/admin.5d618e5e.css",revision:null},{url:"assets/admin.5e4962b1.js",revision:null},{url:"assets/AdminProfileCard.760f970c.css",revision:null},{url:"assets/AdminProfileCard.faa95c44.js",revision:null},{url:"assets/applicant-type.79864a0c.js",revision:null},{url:"assets/auth.ecd73d32.js",revision:null},{url:"assets/change-password.b0be1c1c.js",revision:null},{url:"assets/client-only.1d6b5744.js",revision:null},{url:"assets/ColorModePicker.vue.4194f19b.js",revision:null},{url:"assets/course.ab04344c.js",revision:null},{url:"assets/create.feeecc90.js",revision:null},{url:"assets/dashboard.601a2430.js",revision:null},{url:"assets/dashboard.6a1b6a52.js",revision:null},{url:"assets/dashboard.cefd8193.css",revision:null},{url:"assets/default.400a3461.js",revision:null},{url:"assets/edit.1e4780ed.js",revision:null},{url:"assets/enrollment.92f21791.js",revision:null},{url:"assets/entry.7fe22ba6.js",revision:null},{url:"assets/error-404.2ea15d60.js",revision:null},{url:"assets/error-404.7fc72018.css",revision:null},{url:"assets/error-500.c5df6088.css",revision:null},{url:"assets/error-500.cdffb2db.js",revision:null},{url:"assets/forgot-password.41cc8c59.js",revision:null},{url:"assets/index.4bc319ef.js",revision:null},{url:"assets/index.5057280e.js",revision:null},{url:"assets/index.51ce8170.js",revision:null},{url:"assets/index.aee15d10.js",revision:null},{url:"assets/login.4e71f8ba.js",revision:null},{url:"assets/logo-inverted.2753a189.js",revision:null},{url:"assets/logo.97dec0f3.js",revision:null},{url:"assets/nuxt-link.7fff16fd.js",revision:null},{url:"assets/officially-enrolled.0517224d.js",revision:null},{url:"assets/payment-plan.ff944ced.js",revision:null},{url:"assets/preferences.85e50f0f.js",revision:null},{url:"assets/preferences.94a7faad.js",revision:null},{url:"assets/profile.0a2e1a1c.js",revision:null},{url:"assets/profile.1a77a6e2.js",revision:null},{url:"assets/profile.6e0397a8.js",revision:null},{url:"assets/profile.c5f39f6d.css",revision:null},{url:"assets/profile.cc67b197.js",revision:null},{url:"assets/profile.de9ae8c0.js",revision:null},{url:"assets/program.60459a09.js",revision:null},{url:"assets/program.66b4a6f6.js",revision:null},{url:"assets/reset-password.7bd4c273.js",revision:null},{url:"assets/Select.e038e55c.js",revision:null},{url:"assets/student.137c064b.js",revision:null},{url:"assets/student.4555725e.css",revision:null},{url:"assets/tw-elements.es.min.5cc07222.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"auth/forgot-password",revision:"1eb30cd9c530de9855b3dfdf2679b9dd"},{url:"auth/login",revision:"63e2bfa8f614f40c0e562aef258eec8e"},{url:"auth/reset-password",revision:"273259fa084824f999ac5909e8d0ef6d"},{url:"enrollment/course",revision:"539ea876420601da226e64320a12eb29"},{url:"enrollment",revision:"058cb3a33ae9e0dd799f97f46f8bbb2b"},{url:"enrollment/payment-plan",revision:"c7288d8e94a297070c4ce1e447369e24"},{url:"enrollment/profile",revision:"2f3017899b6fcc9be813d694d2abad9b"},{url:"enrollment/program",revision:"126c9d2395316cb58f501fcd0e3f7724"},{url:"/academe-sms/",revision:"1c838f15d0a9b6995aea7638850ed80e"},{url:"student/dashboard",revision:"8d6cfb5a42eb31d2556af7b67dd660ac"},{url:"student/profile",revision:"b4d8a8f85896cc28f42985e2bf30cecd"},{url:"student/settings/preferences",revision:"53428afc75c1f804c7cd908e509e1abd"},{url:"manifest.webmanifest",revision:"0951296f9faec8caeb8131a80e87bcf4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
