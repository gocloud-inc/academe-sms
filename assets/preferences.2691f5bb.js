import{_ as g,a as u}from"./AdminProfileCard.d56b65a1.js";import{_ as k}from"./client-only.3e4701e6.js";import{g as v,h as y,o as s,c as d,a as e,i as n,v as l,j as i,k as f,b as a,w as c}from"./entry.48155095.js";import{u as w}from"./index.15a540f1.js";import"./nuxt-link.1155c2c9.js";const b=()=>v("color-mode").value,x={class:"grid grid-cols-1 md:grid-cols-3 gap-4 mt-4"},M={for:"light",class:"block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-primary-500 peer-checked:ring-1 peer-checked:ring-primary-500 dark:peer-checked:ring-primary-400 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"},$={class:"flex items-center gap-2"},C=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-sun",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"1.75",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M12 12m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"}),e("path",{d:"M3 12h1m8 -9v1m8 8h1m-9 8v1m-6.4 -15.4l.7 .7m12.1 -.7l-.7 .7m0 11.4l.7 .7m-12.1 -.7l-.7 .7"})],-1),z={class:"flex items-center justify-between w-full"},B=e("p",{class:"text-gray-700 dark:text-gray-100"},"Light",-1),j={key:0,class:"hidden h-5 w-5 text-primary-600 dark:text-primary-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},V=e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"},null,-1),P=[V],S={for:"dark",class:"block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-primary-500 peer-checked:ring-1 peer-checked:ring-primary-500 dark:peer-checked:ring-primary-400 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"},L={class:"flex items-center gap-2"},N=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"icon icon-tabler icon-tabler-moon",width:"24",height:"24",viewBox:"0 0 24 24","stroke-width":"1.75",stroke:"currentColor",fill:"none","stroke-linecap":"round","stroke-linejoin":"round"},[e("path",{stroke:"none",d:"M0 0h24v24H0z",fill:"none"}),e("path",{d:"M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z"})],-1),A={class:"flex items-center justify-between w-full"},H=e("p",{class:"text-gray-700 dark:text-gray-100"},"Dark",-1),U={key:0,class:"hidden h-5 w-5 text-primary-600 dark:text-primary-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},D=e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"},null,-1),E=[D],O={for:"system",class:"block cursor-pointer rounded-lg border border-gray-100 bg-white p-4 text-sm font-medium shadow-sm hover:border-gray-200 peer-checked:border-primary-500 peer-checked:ring-1 peer-checked:ring-primary-500 dark:peer-checked:ring-primary-400 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-100"},R={class:"flex items-center gap-2"},q=f('<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-device-desktop" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M3 5a1 1 0 0 1 1 -1h16a1 1 0 0 1 1 1v10a1 1 0 0 1 -1 1h-16a1 1 0 0 1 -1 -1v-10z"></path><path d="M7 20h10"></path><path d="M9 16v4"></path><path d="M15 16v4"></path></svg>',1),F={class:"flex items-center justify-between w-full"},G=e("p",{class:"text-gray-700 dark:text-gray-100"},"System",-1),I={key:0,class:"hidden h-5 w-5 text-primary-600 dark:text-primary-400",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},J=e("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z","clip-rule":"evenodd"},null,-1),K=[J],Q=y({__name:"ColorModePicker",setup(p){return b(),(r,o)=>(s(),d("div",x,[e("div",null,[n(e("input",{type:"radio","onUpdate:modelValue":o[0]||(o[0]=t=>r.$colorMode.preference=t),value:"light",id:"light",class:"peer hidden [&:checked_+_label_svg]:block"},null,512),[[l,r.$colorMode.preference]]),e("label",M,[e("div",$,[C,e("div",z,[B,r.$colorMode.preference==="light"?(s(),d("svg",j,P)):i("",!0)])])])]),e("div",null,[n(e("input",{type:"radio","onUpdate:modelValue":o[1]||(o[1]=t=>r.$colorMode.preference=t),value:"dark",id:"dark",class:"peer hidden [&:checked_+_label_svg]:block"},null,512),[[l,r.$colorMode.preference]]),e("label",S,[e("div",L,[N,e("div",A,[H,r.$colorMode.preference==="dark"?(s(),d("svg",U,E)):i("",!0)])])])]),e("div",null,[n(e("input",{type:"radio","onUpdate:modelValue":o[2]||(o[2]=t=>r.$colorMode.preference=t),value:"system",id:"system",class:"peer hidden [&:checked_+_label_svg]:block"},null,512),[[l,r.$colorMode.preference]]),e("label",O,[e("div",R,[q,e("div",F,[G,r.$colorMode.preference==="system"?(s(),d("svg",I,K)):i("",!0)])])])])]))}}),T={class:"container"},W={class:"space-y-6"},X={class:"space-y-6"},Y={class:"flex flex-col gap-2"},Z={class:"card"},ee={class:"card-body"},re=e("h2",{class:"font-semibold text-gray-700 text-lg dark:text-gray-300"},"Color Mode",-1),oe=e("p",{class:"text-sm text-gray-500 dark:text-gray-400"},"Choose if Academe's appearance should be light or dark, or follow your computer’s settings.",-1),le={__name:"preferences",setup(p){return w({title:"Preferences"}),(r,o)=>{const t=g,h=u,_=k,m=Q;return s(),d("div",T,[e("div",W,[e("div",X,[a(_,null,{fallback:c(()=>[a(h)]),default:c(()=>[a(t)]),_:1}),e("div",Y,[e("div",Z,[e("div",ee,[re,oe,a(m)])])])])])])}}};export{le as default};
