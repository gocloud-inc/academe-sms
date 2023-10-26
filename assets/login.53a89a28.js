import{_ as h}from"./nuxt-link.feb3d5dd.js";import{g as w,j as f,c as x,a as t,b as c,w as m,i as g,k as p,v as u,l as r,d as n,o as y,n as v}from"./entry.ed94108e.js";import{u as b}from"./index.42fd826e.js";const k={class:"w-full max-w-md"},A={class:"card"},E={class:"card-body"},S={class:"text-start"},B=t("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},[t("path",{fill:"currentColor",d:"M10.733 19.79a.75.75 0 0 0 1.034-1.086L5.516 12.75H20.25a.75.75 0 0 0 0-1.5H5.516l6.251-5.955a.75.75 0 0 0-1.034-1.086l-7.42 7.067a.995.995 0 0 0-.3.58a.754.754 0 0 0 .001.289a.995.995 0 0 0 .3.579l7.419 7.067Z"})],-1),L=t("h2",{class:"mt-3 text-2xl font-semibold text-gray-800 capitalize sm:text-3xl dark:text-white"},"sign In",-1),V=t("p",{class:"mt-3 text-gray-500 dark:text-gray-300"},"Enter details to access your account",-1),q={class:"mt-8"},M=["onSubmit"],C={class:"form-group"},N=t("label",{for:"email",class:"form-label"},"Email",-1),P={class:"form-group"},T=t("label",{for:"password",class:"form-label"},"Password",-1),j={class:"relative"},H=t("div",{class:"absolute top-0 end-0 my-3 mx-4 password-btn text-sm cursor-pointer"},[t("span",{class:"password-icon"},"Show")],-1),I=t("button",{type:"submit",class:"button button-primary button-lg w-full"}," Login ",-1),R=t("p",{class:"mt-6 text-sm text-gray-600 dark:text-gray-400"},[n(" By clicking “Login” above, you acknowledge that you have read, understood, and agreed to Academe's "),t("a",{href:"#",class:"text-primary-600 font-medium hover:underline dark:text-white"},"Term & Conditions"),n(" and "),t("a",{href:"#",class:"text-primary-600 font-medium hover:underline dark:text-white"}," Privacy Policy.")],-1),U=t("div",{class:"flex flex-col items-center justify-center gap-1 mt-6"},[t("img",{class:"w-24",src:"https://gocloudgroup.com/media/products/logo-academe-sms.png",alt:""}),t("div",{class:"text-sm text-gray-500"},"© 2023 Gocloud Inc. All Rights Reserved.")],-1),Z={__name:"login",setup(z){b({title:"Login"}),w(()=>{const l=Array.from(document.querySelectorAll(".password")),s=Array.from(document.querySelectorAll(".password-btn")),a=Array.from(document.querySelectorAll(".password-icon"));s.forEach(o=>{o.addEventListener("click",()=>{const i=l[0].type==="text";l.forEach(d=>{d.type=i?"password":"text"}),a.forEach(d=>{d.textContent=i?"Show":"Hide"})})})});const e=f({email:"mpcaneda.gca@gmail.com",password:"asdasdad"}),_=async()=>{v("/admin/dashboard")};return(l,s)=>{const a=h;return y(),x("div",k,[t("div",A,[t("div",E,[t("div",S,[c(a,{to:"/",class:"bg-gray-200 text-gray-600 rounded-full flex items-center justify-center p-1 w-10 h-10"},{default:m(()=>[B]),_:1}),L,V]),t("div",q,[t("form",{onSubmit:g(_,["prevent"]),class:"space-y-6"},[t("div",C,[N,p(t("input",{"onUpdate:modelValue":s[0]||(s[0]=o=>r(e).email=o),id:"email",type:"email",placeholder:"email@example.com",class:"form-control form-control-lg",autocomplete:"email",required:""},null,512),[[u,r(e).email]])]),t("div",P,[T,t("div",j,[p(t("input",{"onUpdate:modelValue":s[1]||(s[1]=o=>r(e).password=o),id:"password",class:"form-control form-control-lg password",type:"password",name:"password",required:"",autocomplete:"current-password"},null,512),[[u,r(e).password]]),H])]),c(a,{to:"/auth/forgot-password",class:"inline-block my-4 text-sm text-primary-500 hover:underline dark:text-primary-400"},{default:m(()=>[n(" Forgot password? ")]),_:1}),I],40,M),R])])]),U])}}};export{Z as default};