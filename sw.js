if(!self.define){let e,s={};const r=(r,l)=>(r=new URL(r+".js",l).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(l,i)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let a={};const o=e=>r(e,n),u={module:{uri:n},exports:a,require:o};s[n]=Promise.all(l.map((e=>u[e]||o(e)))).then((e=>(i(...e),a)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"200",revision:"ae3eec464de631b7359a987b37c5d3b3"},{url:"404",revision:"ae3eec464de631b7359a987b37c5d3b3"},{url:"admin/dashboard",revision:"5126d666898a38acd49bd48da3e08b0f"},{url:"admin/manage-account/change-password",revision:"0f50889875ef748090217e5129ca0e98"},{url:"admin/manage-account/preferences",revision:"f3071a87c38f5ec624b8ddad16c44b56"},{url:"admin/manage-account/profile",revision:"c84ca6406461d842eab08157792ec7d6"},{url:"admin/registrar/officially-enrolled",revision:"f06176709f2f88c422b8f14565951e3f"},{url:"admin/student/profile",revision:"34a7adfa06d63ad5b6c912562b59f6bf"},{url:"admin/users/add-employee",revision:"b1802d4fc7421334608a6b9f31e877b2"},{url:"admin/users/edit-employee",revision:"2cced7c2cd3ec2eaeb794509ff40e096"},{url:"admin/users/employee",revision:"2c9849cab311302a1727055ee61f772a"},{url:"admission/applicant-type",revision:"c8a0a24ad46a60ea5533ae20bc2cc349"},{url:"admission/new-student/profile",revision:"ee61804aeabd523f0e8111a21c20517e"},{url:"admission/new-student/program",revision:"c4148407360024a6695a6259f18acbed"},{url:"assets/add-employee.61736f94.js",revision:null},{url:"assets/admin.af304dd3.js",revision:null},{url:"assets/admin.faa6d9c5.css",revision:null},{url:"assets/AdminProfileCard.130efcfc.js",revision:null},{url:"assets/AdminProfileCard.760f970c.css",revision:null},{url:"assets/applicant-type.2a2404d1.js",revision:null},{url:"assets/auth.583c5c41.js",revision:null},{url:"assets/change-password.101223d8.js",revision:null},{url:"assets/client-only.8bdb76c5.js",revision:null},{url:"assets/ColorModePicker.vue.fa7111d4.js",revision:null},{url:"assets/course.4903ebdd.js",revision:null},{url:"assets/dashboard.1a47e78f.js",revision:null},{url:"assets/dashboard.c00e3451.js",revision:null},{url:"assets/default.99e894a0.js",revision:null},{url:"assets/edit-employee.8f5efac9.js",revision:null},{url:"assets/employee.120ec6a4.js",revision:null},{url:"assets/enrollment.1690e94d.js",revision:null},{url:"assets/entry.83a27cbe.js",revision:null},{url:"assets/error-404.7fc72018.css",revision:null},{url:"assets/error-404.bd520123.js",revision:null},{url:"assets/error-500.c5df6088.css",revision:null},{url:"assets/error-500.db505d16.js",revision:null},{url:"assets/forgot-password.ec12f2cf.js",revision:null},{url:"assets/index.7ef447b6.js",revision:null},{url:"assets/index.b90cd7fa.js",revision:null},{url:"assets/index.e0dcfd02.js",revision:null},{url:"assets/login.777f5679.js",revision:null},{url:"assets/logo-inverted.7ec74549.js",revision:null},{url:"assets/logo.004d7685.js",revision:null},{url:"assets/nuxt-link.ad97e6fb.js",revision:null},{url:"assets/officially-enrolled.503e014d.js",revision:null},{url:"assets/payment-plan.b2f78916.js",revision:null},{url:"assets/preferences.5f84c273.js",revision:null},{url:"assets/preferences.897f060d.js",revision:null},{url:"assets/profile.20f5b595.js",revision:null},{url:"assets/profile.ac87aaa0.js",revision:null},{url:"assets/profile.c5f39f6d.css",revision:null},{url:"assets/profile.f760f729.js",revision:null},{url:"assets/profile.feb9a958.js",revision:null},{url:"assets/profile.fef683db.js",revision:null},{url:"assets/program.6b2297c4.js",revision:null},{url:"assets/program.ab8baba1.js",revision:null},{url:"assets/reset-password.f8129987.js",revision:null},{url:"assets/Select.eea5382e.js",revision:null},{url:"assets/student.40154e21.js",revision:null},{url:"assets/student.731e3a86.css",revision:null},{url:"assets/tw-elements.es.min.5cc07222.js",revision:null},{url:"assets/workbox-window.prod.es5.a7b12eab.js",revision:null},{url:"auth/forgot-password",revision:"75998610966e2f76fe07eb17d306dc6e"},{url:"auth/login",revision:"29a05df30e399b0dc354a0a9e7cfcca5"},{url:"auth/reset-password",revision:"3f9a3d3571bb18d8c40568edd4578b16"},{url:"enrollment/course",revision:"8c30eeedb8dff0ddd096cf5bc2b1216b"},{url:"enrollment",revision:"a7feb236d32ea8540796fc52256eb53a"},{url:"enrollment/payment-plan",revision:"be3a41e7c752c04a98b1c7678975196b"},{url:"enrollment/profile",revision:"9af57ad75db5995f6177ee91f3807982"},{url:"enrollment/program",revision:"95528aaefca7884d6a5ed6101348f878"},{url:"/academe-sms/",revision:"6c851806d42768c9375db975305b5f75"},{url:"student/dashboard",revision:"56fd95bdb2593a70c96bc931785b8ea9"},{url:"student/profile",revision:"f026f8a60be26e4176dc6c3b60d960f4"},{url:"student/settings/preferences",revision:"b027aa7b620f02704977019aaa2f5f6c"},{url:"manifest.webmanifest",revision:"0951296f9faec8caeb8131a80e87bcf4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
