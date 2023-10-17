import{_ as m,a as u}from"./AdminProfileCard.e9806a63.js";import{_ as w}from"./client-only.a335ef1e.js";import{u as _}from"./index.d25dc6fd.js";import{_ as f,f as y,c as b,a as s,b as t,w as d,o as g}from"./entry.655e5c40.js";import"./nuxt-link.3ce19d3f.js";import"./vue.f36acd1f.782a71d7.js";const x={setup(){_({title:"Profile - Admin"}),y(()=>{const r=Array.from(document.querySelectorAll(".password")),e=Array.from(document.querySelectorAll(".password-btn")),n=Array.from(document.querySelectorAll(".password-icon"));e.forEach(c=>{c.addEventListener("click",()=>{const a=r[0].type==="text";r.forEach(o=>{o.type=a?"password":"text"}),n.forEach(o=>{o.textContent=a?"Show":"Hide"})})})})}},h={class:"container"},v={class:"space-y-6"},P=s("div",{class:"card"},[s("div",{class:"card-body"},[s("h2",{class:"font-semibold text-gray-700 text-lg dark:text-gray-300"},"Change Password"),s("p",{class:"text-sm text-gray-500 dark:text-gray-400"},"Ensure your account is using a long, random password to stay secure."),s("form",{class:"mt-4 space-y-4 form",action:"#",method:"POST"},[s("div",{class:"grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-4"},[s("div",{class:"form-group"},[s("label",{for:"current_password",class:"form-label"},"Current Password"),s("div",{class:"relative"},[s("input",{id:"current_password",class:"form-control password",type:"password",name:"current_password",required:"",autofocus:"",autocomplete:"current-password"}),s("div",{class:"absolute top-0 end-0 my-3 mx-4 password-btn text-sm cursor-pointer dark:text-gray-100"},[s("span",{class:"password-icon"},"Show")])])]),s("div",{class:"form-group"},[s("label",{for:"new_password",class:"form-label"},"New Password"),s("input",{id:"new_password",class:"form-control password",type:"password",name:"new_password",required:"",autofocus:"",autocomplete:"new-password"})]),s("div",{class:"form-group"},[s("label",{for:"new_password_confirmation",class:"form-label"},"Confirm New Password"),s("input",{id:"new_password_confirmation",class:"form-control password",type:"password",name:"new_password_confirmation",required:"",autofocus:"",autocomplete:"new-password"})])]),s("button",{type:"submit",class:"button button-primary",disabled:""},"Update password")])])],-1);function A(r,e,n,c,a,o){const l=m,p=u,i=w;return g(),b("div",h,[s("div",v,[t(i,null,{fallback:d(()=>[t(p)]),default:d(()=>[t(l)]),_:1}),P])])}const N=f(x,[["render",A]]);export{N as default};
