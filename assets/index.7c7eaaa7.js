import{_ as p}from"./nuxt-link.1155c2c9.js";import{f as u,r as _,c as f,a as t,l as x,i as l,m as c,n as a,b as h,w,k as y,o as v,d as g,q as b}from"./entry.48155095.js";import{u as k}from"./index.15a540f1.js";import{_ as S}from"./logo.73b5c031.js";const E={class:"w-full max-w-md"},A={class:"card"},V={class:"card-body"},q=t("div",{class:"text-start"},[t("img",{class:"w-auto h-8 sm:h-12",src:S,alt:""}),t("h2",{class:"mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white"},"sign In"),t("p",{class:"mt-3 text-gray-500 dark:text-gray-300"},"Enter details to access your account")],-1),N={class:"mt-8"},B=["onSubmit"],L={class:"form-group"},M=t("label",{for:"email",class:"form-label"},"Email",-1),P={class:"form-group"},T=t("label",{for:"password",class:"form-label"},"Password",-1),C={class:"relative"},I=t("div",{class:"absolute top-0 end-0 my-3 mx-4 password-btn text-sm cursor-pointer"},[t("span",{class:"password-icon"},"Show")],-1),U=t("button",{type:"submit",class:"button button-primary button-lg w-full"}," Login ",-1),z=y('<div class="mt-6 text-center"><a href="#" class="text-sm text-primary-500 hover:underline dark:text-primary-400"> Not enrolled yet? Admission </a></div><p class="mt-6 text-sm text-gray-600 dark:text-gray-400"> By clicking “Login” above, you acknowledge that you have read and understood, and agree to Our <a href="#" class="text-primary-600 font-medium hover:underline dark:text-white">Term &amp; Conditions</a> and <a href="#" class="text-primary-600 font-medium hover:underline dark:text-white"> Privacy Policy.</a></p>',2),G={__name:"index",setup(D){k({title:"Login"}),u(()=>{const r=Array.from(document.querySelectorAll(".password")),s=Array.from(document.querySelectorAll(".password-btn")),d=Array.from(document.querySelectorAll(".password-icon"));s.forEach(o=>{o.addEventListener("click",()=>{const n=r[0].type==="text";r.forEach(i=>{i.type=n?"password":"text"}),d.forEach(i=>{i.textContent=n?"Show":"Hide"})})})});const e=_({email:"mpcaneda.gca@gmail.com",password:"asdasdad"}),m=async()=>{b("/admin/dashboard")};return(r,s)=>{const d=p;return v(),f("div",E,[t("div",A,[t("div",V,[q,t("div",N,[t("form",{onSubmit:x(m,["prevent"]),class:"space-y-6"},[t("div",L,[M,l(t("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>a(e).email=o),id:"email",type:"email",placeholder:"email@example.com",class:"form-control form-control-lg",autocomplete:"email",autofocus:"",required:""},null,512),[[c,a(e).email]])]),t("div",P,[T,t("div",C,[l(t("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>a(e).password=o),id:"password",class:"form-control password",type:"password",name:"password",required:"",autofocus:"",autocomplete:"current-password"},null,512),[[c,a(e).password]]),I])]),h(d,{to:"/auth/forgot-password",class:"inline-block my-4 text-sm text-primary-500 hover:underline dark:text-primary-400"},{default:w(()=>[g(" Forgot password? ")]),_:1}),U],40,B),z])])])])}}};export{G as default};