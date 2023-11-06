import y from"./Icon.e574ff1b.js";import{_ as h}from"./nuxt-link.1e4f8669.js";import{_ as k}from"./logo-inverted.93952641.js";import{Z as S,D as z,m as M,i as $}from"./tw-elements.es.min.5cc07222.js";import{_ as C,i as E,l as B,o as v,c as w,a as e,b as t,w as r,p as D,e as L,d as u,n as j,M as H,f,s as I}from"./entry.c27bb86e.js";import{_ as A}from"./client-only.a2a4decd.js";const a=i=>(D("data-v-f4c080db"),i=i(),L(),i),P={class:"aside-container"},N={class:"aside-nav-menu"},O=a(()=>e("a",{href:"#",class:"uppercase font-semibold text-gray-600 p-2"},[e("img",{class:"flex-shrink-0 object-cover mx-1 w-8 h-8",src:k,alt:"Academe SMS"})],-1)),V={href:"#",class:"aside-nav-link group","data-te-toggle":"tooltip",title:"Calendar"},q={href:"#",class:"aside-nav-link relative group","data-te-toggle":"tooltip",title:"Messages"},G=a(()=>e("div",{class:"absolute -bottom-5 left-auto right-5 top-auto z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-primary-100 px-2 py-1 text-center align-baseline text-xs font-bold leading-none text-primary dark:bg-primary-200"}," 7 ",-1)),T={href:"#",class:"aside-nav-link relative group","data-te-toggle":"tooltip",title:"Notifications"},Y=a(()=>e("div",{class:"absolute -bottom-5 left-auto right-5 top-auto z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-primary-100 px-2 py-1 text-center align-baseline text-xs font-bold leading-none text-primary dark:bg-primary-200"}," 99+ ",-1)),F={class:"flex flex-col items-center mt-4 space-y-4"},R={class:"inline-flex items-center justify-center text-primary-100 transition-colors duration-300 transform dark:text-gray-200 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none","data-te-toggle":"tooltip",title:"Help Center"},W={"data-te-perfect-scrollbar-init":"",class:"sidebar-wrapper"},X={class:"-mx-3 space-y-2"},Z={class:"space-y-1"},Q={class:"flex items-center gap-3 bg-white/80 backdrop-blur border border-gray-200 shadow-sm p-3 mb-3 rounded-lg dark:bg-gray-700 dark:border-gray-800"},U={class:"bg-gray-100 rounded-xl p-2 w-12 h-12 text-lg uppercase text-gray-400 font-semibold flex items-center justify-center dark:bg-gray-600"},J=a(()=>e("div",{class:"flex flex-col"},[e("div",{class:"text-xs text-gray-500 dark:text-gray-400"},"School"),e("div",{class:"text-sm text-gray-700 font-medium leading-tight line-clamp-2 dark:text-gray-100"},"La Verdad Christian College")],-1)),K={class:"sidebar-dropdown group",open:""},ee={class:"sidebar-dropdown-button"},te={class:"flex items-center gap-2"},ae=a(()=>e("span",{class:"sidebar-dropdown-button-text"},"Registrar",-1)),se={class:"space-y-1 px-4"},oe=a(()=>e("span",{class:"sidebar-dropdown-link-text"},"Officially Enrolled",-1)),re={class:"space-y-1"},ne={class:"sidebar-dropdown group"},de={class:"sidebar-dropdown-button"},ie={class:"flex items-center gap-2"},le=a(()=>e("span",{class:"sidebar-dropdown-button-text"},"User Management",-1)),ce={class:"space-y-1 px-4"},pe=a(()=>e("span",{class:"sidebar-dropdown-link-text"},"Employees",-1)),ue={class:"space-y-1 pb-3"},_e=a(()=>e("div",{class:"sidebar-header"}," Bookstore ",-1)),me={class:"sidebar-dropdown group"},ge={class:"sidebar-dropdown-button"},he={class:"flex items-center gap-2"},fe=a(()=>e("span",{class:"sidebar-dropdown-button-text"}," Sales ",-1)),xe={class:"space-y-1 px-4"},be=a(()=>e("span",{class:"sidebar-dropdown-link-text"},"Sales Order",-1)),ye={class:"sidebar-dropdown group"},ve={class:"sidebar-dropdown-button"},we={class:"flex items-center gap-2"},ke=a(()=>e("span",{class:"sidebar-dropdown-button-text"}," Inventory ",-1)),Se={class:"space-y-1 px-4"},ze=a(()=>e("span",{class:"sidebar-dropdown-link-text"},"Items",-1)),Me=a(()=>e("span",{class:"sidebar-dropdown-link-text"},"Purchase Delivery",-1)),$e={class:"space-y-1"},Ce=a(()=>e("div",{class:"sidebar-header"}," Cashier ",-1)),Ee={class:"sidebar-dropdown group"},Be={class:"sidebar-dropdown-button"},De={class:"flex items-center gap-2"},Le=a(()=>e("span",{class:"sidebar-dropdown-button-text"}," Finance ",-1)),je={class:"space-y-1 px-4"},He=a(()=>e("span",{class:"sidebar-dropdown-link-text"},"Banks",-1)),Ie={__name:"AdminSidebar",setup(i){const l=document.getElementById("sidebar-toggler"),o=E(null);let x="",n=null;B(()=>{S({Dropdown:z,PerfectScrollbar:M,Tooltip:$}),o.value=document.getElementById("aside"),l&&l.addEventListener("click",()=>{o.value.classList.contains("show")?(o.value.classList.remove("show"),d()):(o.value.classList.add("show"),_())}),o.value.querySelectorAll("a").forEach(b=>{b.addEventListener("click",c)}),d()});const _=()=>{n=document.createElement("div"),n.className="sidebar-overlay",document.body.appendChild(n),n.addEventListener("click",()=>{o.value.classList.remove("show"),d()})},d=()=>{n&&n.parentElement&&(document.body.style.overflow=x,document.body.removeChild(n))},c=m=>{m.preventDefault(),o.value.classList.remove("show"),d()};return(m,b)=>{const s=y,p=h,g=h;return v(),w("aside",{id:"aside",ref_key:"asideEl",ref:o,class:"aside flex h-screen sticky top-0 transition-all duration-300 ease-in-out"},[e("div",P,[e("nav",N,[O,t(p,{to:"/admin/dashboard",class:"aside-nav-link group","data-te-toggle":"tooltip",title:"Home"},{default:r(()=>[t(s,{name:"fluent:home-24-regular",size:"24",class:"group-hover:scale-[1.1] transition-all duration-300 ease-in-out"})]),_:1}),e("a",V,[t(s,{name:"fluent:calendar-24-regular",size:"24",class:"group-hover:scale-[1.1] transition-all duration-300 ease-in-out"})]),e("a",q,[t(s,{name:"fluent:chat-24-regular",size:"24",class:"group-hover:scale-[1.1] transition-all duration-300 ease-in-out"}),G]),e("a",T,[t(s,{name:"fluent:alert-24-regular",size:"24",class:"group-hover:scale-[1.1] transition-all duration-300 ease-in-out"}),Y])]),e("div",F,[e("button",R,[t(s,{name:"fluent:question-circle-24-regular",size:"24",class:"w-5 h-5"})])])]),e("div",W,[e("nav",X,[e("div",Z,[e("div",Q,[e("div",U,[t(s,{name:"fluent:building-retail-more-24-filled",size:"32"})]),J]),e("details",K,[e("summary",ee,[e("div",te,[t(s,{name:"fluent:apps-list-detail-24-regular",size:"24",class:"w-5 h-5"}),ae]),t(s,{name:"fluent:chevron-down-24-regular",class:"sidebar-dropdown-icon-end"})]),e("div",se,[t(p,{to:"/admin/registrar/officially-enrolled",class:"sidebar-dropdown-link"},{default:r(()=>[oe]),_:1})])])]),e("div",re,[e("details",ne,[e("summary",de,[e("div",ie,[t(s,{name:"fluent:people-24-regular",size:"24",class:"w-5 h-5"}),le]),t(s,{name:"fluent:chevron-down-24-regular",class:"sidebar-dropdown-icon-end"})]),e("div",ce,[t(p,{to:"/admin/employees",class:"sidebar-dropdown-link"},{default:r(()=>[pe]),_:1})])])]),e("div",ue,[_e,e("details",me,[e("summary",ge,[e("div",he,[t(s,{name:"fluent:arrow-trending-sparkle-24-regular",size:"24",class:"w-5 h-5"}),fe]),t(s,{name:"fluent:chevron-down-24-regular",class:"sidebar-dropdown-icon-end"})]),e("div",xe,[t(g,{to:"/admin/bookstore/sales",class:"sidebar-dropdown-link"},{default:r(()=>[be]),_:1})])]),e("details",ye,[e("summary",ve,[e("div",we,[t(s,{name:"fluent:calculator-24-regular",size:"24",class:"w-5 h-5"}),ke]),t(s,{name:"fluent:chevron-down-24-regular",class:"sidebar-dropdown-icon-end"})]),e("div",Se,[t(g,{to:"/admin/bookstore/inventory/items",class:"sidebar-dropdown-link"},{default:r(()=>[ze]),_:1}),t(g,{to:"/admin/bookstore/inventory/purchase-delivery",class:"sidebar-dropdown-link"},{default:r(()=>[Me]),_:1})])])]),e("div",$e,[Ce,e("details",Ee,[e("summary",Be,[e("div",De,[t(s,{name:"fluent:receipt-money-24-regular",size:"24",class:"w-5 h-5"}),Le]),t(s,{name:"fluent:chevron-down-24-regular",class:"sidebar-dropdown-icon-end"})]),e("div",je,[t(p,{to:"/admin/finance/banks",class:"sidebar-dropdown-link"},{default:r(()=>[He]),_:1})])])])])])],512)}}},Ae=C(Ie,[["__scopeId","data-v-f4c080db"]]),Pe={id:"app"},Ne={class:"header sticky top-0 z-10"},Oe={class:"border-b relative bg-white shadow-sm dark:bg-gray-900 dark:border-gray-800"},Ve={class:"px-4 py-2 mx-auto"},qe={class:"flex items-center justify-between"},Ge=f('<div class="flex items-center gap-2"><div class="flex xl:hidden"><button type="button" id="sidebar-toggler" class="inline-flex items-center justify-center px-1 py-1 border shadow-sm text-gray-500 transition-colors duration-200 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-950 dark:border-gray-700 dark:text-gray-300" aria-label="toggle menu"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 8l16 0"></path><path d="M4 16l16 0"></path></svg></button></div><a href="#" class="text-gray-700 font-medium dark:text-gray-200"> Academe SMS </a><div class="hidden md:flex flex-col md:flex-row md:items-center mx-3"><a href="#" class="px-3 py-1 text-sm text-gray-700 transition-colors duration-300 transform rounded-md xl:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">First Quarter</a><a href="#" class="px-3 py-1 text-sm text-gray-700 transition-colors duration-300 transform rounded-md xl:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">SY: 2023 - 2024</a></div></div>',1),Te={class:"flex items-center"},Ye={class:"relative","data-te-dropdown-ref":""},Fe=f('<button type="button" class="relative flex items-center gap-1 xl:gap-2 focus:outline-none" id="dropdownProfile" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false" title="Mark Paul Cañeda"><div class="hidden xl:flex flex-col items-end"><div class="text-gray-700 text-xs font-medium leading-none dark:text-gray-200">Mark Paul</div><span class="text-gray-500 text-xs dark:text-gray-300">Registrar Head</span></div><img class="avatar avatar-sm rounded-full ring-2 ring-gray-200 dark:ring-gray-600" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;h=634&amp;q=80" alt="avatar"></button>',1),Re={class:"dropdown-menu","aria-labelledby":"dropdownProfile","data-te-dropdown-menu-ref":""},We=f('<li><a href="#" class="flex items-center p-3 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"><img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9 ring-2 ring-gray-200 dark:ring-gray-600" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;h=634&amp;q=80" alt="jane avatar"><div class="mx-1"><h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">Mark Paul Cañeda</h1><p class="text-sm text-gray-500 dark:text-gray-400">mpcaneda.gca@gmail.com</p></div></a></li><hr class="dropdown-divider">',2),Xe={class:"dropdown-link",href:"#","data-te-dropdown-item-ref":""},Ze=["onClick"],Qe={class:"main py-8 overflow-y-auto"},st={__name:"admin",setup(i){const l=async()=>{I("/")};return(o,x)=>{const n=Ae,_=A,d=y,c=h;return v(),w("div",Pe,[t(_,null,{default:r(()=>[t(n)]),_:1}),e("header",Ne,[e("nav",Oe,[e("div",Ve,[e("div",qe,[Ge,e("div",Te,[e("div",Ye,[Fe,e("ul",Re,[We,e("li",null,[t(c,{to:"/admin/manage-account/profile",class:"dropdown-link","data-te-dropdown-item-ref":""},{default:r(()=>[t(d,{name:"fluent:person-24-regular",size:"24",class:"w-5 h-5 text-gray-500 dark:text-gray-400"}),u(" Profile ")]),_:1})]),e("li",null,[t(c,{to:"/admin/manage-account/preferences",class:"dropdown-link","data-te-dropdown-item-ref":""},{default:r(()=>[t(d,{name:"fluent:paint-brush-24-regular",size:"24",class:"w-5 h-5 text-gray-500 dark:text-gray-400"}),u(" Preferences ")]),_:1})]),e("li",null,[e("a",Xe,[t(d,{name:"fluent:settings-24-regular",size:"24",class:"w-5 h-5 text-gray-500 dark:text-gray-400"}),u(" Account Settings ")])]),e("li",null,[e("button",{type:"button",onClick:j(l,["prevent"]),class:"dropdown-link","data-te-dropdown-item-ref":""},[t(d,{name:"fluent:sign-out-24-regular",size:"24",class:"w-5 h-5 text-gray-500 dark:text-gray-400"}),u(" Sign out ")],8,Ze)])])])])])])])]),e("main",Qe,[H(o.$slots,"default")])])}}};export{st as default};
