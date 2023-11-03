import k from"./Icon.5dddaf05.js";import{_ as y}from"./nuxt-link.6b4bcbb1.js";import{_ as S}from"./logo-inverted.bb555570.js";import{Z as $,D as z,m as M,i as C}from"./tw-elements.es.min.5cc07222.js";import{_ as w,j as D,m as E,o as f,c as v,a as e,b as a,w as o,p as j,e as A,g as c,d as x,q as L,A as B,y as P}from"./entry.eba5405a.js";import{_ as H}from"./client-only.3c28bcd8.js";const t=i=>(j("data-v-9b687e9e"),i=i(),A(),i),O={class:"aside-container"},G={class:"aside-nav-menu"},R=t(()=>e("a",{href:"#",class:"uppercase font-semibold text-gray-600 p-2"},[e("img",{class:"flex-shrink-0 object-cover mx-1 w-8 h-8",src:S,alt:"Academe SMS"})],-1)),I={href:"#",class:"aside-nav-link group","data-te-toggle":"tooltip",title:"Calendar"},N={href:"#",class:"aside-nav-link relative group","data-te-toggle":"tooltip",title:"Messages"},V=t(()=>e("div",{class:"absolute -bottom-5 left-auto right-5 top-auto z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-primary-100 px-2 py-1 text-center align-baseline text-xs font-bold leading-none text-primary dark:bg-primary-200"}," 7 ",-1)),q={href:"#",class:"aside-nav-link relative group","data-te-toggle":"tooltip",title:"Notifications"},Y=t(()=>e("div",{class:"absolute -bottom-5 left-auto right-5 top-auto z-10 inline-block -translate-y-1/2 translate-x-2/4 rotate-0 skew-x-0 skew-y-0 scale-x-100 scale-y-100 whitespace-nowrap rounded-full bg-primary-100 px-2 py-1 text-center align-baseline text-xs font-bold leading-none text-primary dark:bg-primary-200"}," 99+ ",-1)),T={class:"flex flex-col items-center mt-4 space-y-4"},F={class:"inline-flex items-center justify-center text-primary-100 transition-colors duration-300 transform dark:text-gray-200 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none","data-te-toggle":"tooltip",title:"Help Center"},W={"data-te-perfect-scrollbar-init":"",class:"sidebar-wrapper"},X={class:"-mx-3 space-y-2"},Z={class:"space-y-1"},Q={class:"flex items-center gap-3 bg-white/80 backdrop-blur border border-gray-200 shadow-sm p-3 mb-3 rounded-lg dark:bg-gray-700 dark:border-gray-800"},U={class:"bg-gray-100 rounded-xl p-2 w-12 h-12 text-lg uppercase text-gray-400 font-semibold flex items-center justify-center dark:bg-gray-600"},J=t(()=>e("div",{class:"flex flex-col"},[e("div",{class:"text-xs text-gray-500 dark:text-gray-400"},"School"),e("div",{class:"text-sm text-gray-700 font-medium leading-tight line-clamp-2 dark:text-gray-100"},"La Verdad Christian College")],-1)),K={class:"sidebar-dropdown group",open:""},ee={class:"sidebar-dropdown-button"},ae={class:"flex items-center gap-2"},te=t(()=>e("span",{class:"sidebar-dropdown-button-text"},"Registrar",-1)),re={class:"space-y-1 px-4"},se=t(()=>e("span",{class:"sidebar-dropdown-link-text"},"Officially Enrolled",-1)),oe={class:"space-y-1"},ne={class:"sidebar-dropdown group"},ie={class:"sidebar-dropdown-button"},de={class:"flex items-center gap-2"},le=t(()=>e("span",{class:"sidebar-dropdown-button-text"},"User Management",-1)),me={class:"space-y-1 px-4"},ce=t(()=>e("span",{class:"sidebar-dropdown-link-text"},"Employees",-1)),pe={class:"space-y-1 pb-3"},ge=t(()=>e("div",{class:"sidebar-header"}," Bookstore ",-1)),xe={class:"sidebar-dropdown group"},ye={class:"sidebar-dropdown-button"},ue={class:"flex items-center gap-2"},he=t(()=>e("span",{class:"sidebar-dropdown-button-text"}," Sales ",-1)),fe={class:"space-y-1 px-4"},ve=t(()=>e("span",{class:"sidebar-dropdown-link-text"},"Sales Order",-1)),be={class:"sidebar-dropdown group"},_e={class:"sidebar-dropdown-button"},ke={class:"flex items-center gap-2"},we=t(()=>e("span",{class:"sidebar-dropdown-button-text"}," Inventory ",-1)),Se={class:"space-y-1 px-4"},$e=t(()=>e("span",{class:"sidebar-dropdown-link-text"},"Items",-1)),ze=t(()=>e("span",{class:"sidebar-dropdown-link-text"},"Purchase Delivery",-1)),Me={class:"space-y-1"},Ce=t(()=>e("div",{class:"sidebar-header"}," Cashier ",-1)),De={class:"sidebar-dropdown group"},Ee={class:"sidebar-dropdown-button"},je={class:"flex items-center gap-2"},Ae=t(()=>e("span",{class:"sidebar-dropdown-button-text"}," Finance ",-1)),Le={class:"space-y-1 px-4"},Be=t(()=>e("span",{class:"sidebar-dropdown-link-text"},"Banks",-1)),Pe={__name:"AdminSidebar",setup(i){const p=document.getElementById("sidebar-toggler"),s=D(null);let b="",n=null;E(()=>{$({Dropdown:z,PerfectScrollbar:M,Tooltip:C}),s.value=document.getElementById("aside"),p&&p.addEventListener("click",()=>{s.value.classList.contains("show")?(s.value.classList.remove("show"),d()):(s.value.classList.add("show"),u())}),s.value.querySelectorAll("a").forEach(_=>{_.addEventListener("click",l)}),d()});const u=()=>{n=document.createElement("div"),n.className="sidebar-overlay",document.body.appendChild(n),n.addEventListener("click",()=>{s.value.classList.remove("show"),d()})},d=()=>{n&&n.parentElement&&(document.body.style.overflow=b,document.body.removeChild(n))},l=m=>{m.preventDefault(),s.value.classList.remove("show"),d()};return(m,_)=>{const r=k,g=y,h=y;return f(),v("aside",{id:"aside",ref_key:"asideEl",ref:s,class:"aside flex h-screen sticky top-0 transition-all duration-300 ease-in-out"},[e("div",O,[e("nav",G,[R,a(g,{to:"/admin/dashboard",class:"aside-nav-link group","data-te-toggle":"tooltip",title:"Home"},{default:o(()=>[a(r,{name:"fluent:home-24-regular",size:"24",class:"group-hover:scale-[1.1] transition-all duration-300 ease-in-out"})]),_:1}),e("a",I,[a(r,{name:"fluent:calendar-24-regular",size:"24",class:"group-hover:scale-[1.1] transition-all duration-300 ease-in-out"})]),e("a",N,[a(r,{name:"fluent:chat-24-regular",size:"24",class:"group-hover:scale-[1.1] transition-all duration-300 ease-in-out"}),V]),e("a",q,[a(r,{name:"fluent:alert-24-regular",size:"24",class:"group-hover:scale-[1.1] transition-all duration-300 ease-in-out"}),Y])]),e("div",T,[e("button",F,[a(r,{name:"fluent:question-circle-24-regular",size:"24"})])])]),e("div",W,[e("nav",X,[e("div",Z,[e("div",Q,[e("div",U,[a(r,{name:"fluent:building-retail-more-24-filled",size:"32"})]),J]),e("details",K,[e("summary",ee,[e("div",ae,[a(r,{name:"fluent:apps-list-detail-24-regular",size:"24"}),te]),a(r,{name:"fluent:chevron-down-24-regular",class:"sidebar-dropdown-icon-end"})]),e("div",re,[a(g,{to:"/admin/registrar/officially-enrolled",class:"sidebar-dropdown-link"},{default:o(()=>[se]),_:1})])])]),e("div",oe,[e("details",ne,[e("summary",ie,[e("div",de,[a(r,{name:"fluent:people-24-regular",size:"24"}),le]),a(r,{name:"fluent:chevron-down-24-regular",class:"sidebar-dropdown-icon-end"})]),e("div",me,[a(g,{to:"/admin/employees",class:"sidebar-dropdown-link"},{default:o(()=>[ce]),_:1})])])]),e("div",pe,[ge,e("details",xe,[e("summary",ye,[e("div",ue,[a(r,{name:"fluent:arrow-trending-sparkle-24-regular",size:"24"}),he]),a(r,{name:"fluent:chevron-down-24-regular",class:"sidebar-dropdown-icon-end"})]),e("div",fe,[a(h,{to:"/admin/bookstore/sales",class:"sidebar-dropdown-link"},{default:o(()=>[ve]),_:1})])]),e("details",be,[e("summary",_e,[e("div",ke,[a(r,{name:"fluent:calculator-24-regular",size:"24"}),we]),a(r,{name:"fluent:chevron-down-24-regular",class:"sidebar-dropdown-icon-end"})]),e("div",Se,[a(h,{to:"/admin/bookstore/inventory/",class:"sidebar-dropdown-link"},{default:o(()=>[$e]),_:1}),a(h,{to:"/admin/bookstore/inventory/purchase-delivery",class:"sidebar-dropdown-link"},{default:o(()=>[ze]),_:1})])])]),e("div",Me,[Ce,e("details",De,[e("summary",Ee,[e("div",je,[a(r,{name:"fluent:receipt-money-24-regular",size:"24"}),Ae]),a(r,{name:"fluent:chevron-down-24-regular",class:"sidebar-dropdown-icon-end"})]),e("div",Le,[a(g,{to:"/admin/finance/banks",class:"sidebar-dropdown-link"},{default:o(()=>[Be]),_:1})])])])])])],512)}}},He=w(Pe,[["__scopeId","data-v-9b687e9e"]]),Oe={},Ge={class:"aside flex h-screen sticky top-0 transition-all duration-300 ease-in-out"},Re={class:"aside-container"},Ie={class:"aside-nav-menu"},Ne=e("a",{href:"#",class:"uppercase font-semibold text-gray-600 bg-gray-200 rounded-lg p-2"}," GG ",-1),Ve=e("span",{class:"material-symbols-rounded"}," home ",-1),qe=c('<a href="#" class="aside-nav-link" title="Messages"><span class="material-symbols-rounded"> chat </span></a><a href="#" class="aside-nav-link" title="Admin"><span class="material-symbols-rounded"> school </span></a><a href="#" class="aside-nav-link" title="Notifications"><span class="material-symbols-rounded"> notifications </span></a><a href="#" class="aside-nav-link" title="Departments"><span class="material-symbols-rounded"> group </span></a><a href="#" class="aside-nav-link" title="More"><span class="material-symbols-rounded"> more_horiz </span></a>',5),Ye=c('<div class="flex flex-col items-center mt-4 space-y-4"><div class="relative"><a href="#" class="relative"><img class="avatar" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;h=634&amp;q=80" alt="avatar"><span class="h-2.5 w-2.5 rounded-full bg-success-500 absolute right-0.5 ring-1 ring-gray-100 bottom-0"></span></a></div></div>',1),Te=c('<div data-te-perfect-scrollbar-init class="relative h-screen px-5 py-4 overflow-hidden bg-primary-50 border-l border-r sm:w-64 w-60 dark:bg-primary-950 dark:border-gray-800"><nav class="-mx-3 space-y-2"><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden" open><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> app_registration </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Registrar</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Officially Enrolled</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Registrar Verified</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Enrollees</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Credential Master Lists</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Generate Grade Slip</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Course Schedule</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Departments</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Semester</span></a></div></details></div><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> energy_program_time_used </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Program</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Year Level Category</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Year Levels</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Program Departments</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Programs</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Curriculum</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Master Courses</span></a></div></details></div><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> other_admission </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Admission</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Open Admission</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Applicants</span></a></div></details></div><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> badge </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Enrollment</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Open Enrollment</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Enrollment Settings</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Block Sections</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Course Schedules</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Rooms</span></a></div></details></div><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> account_balance </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Finance</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Bank Details</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Official Receipts</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Payment Plans</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Recompute Fees</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Scholarship</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">SOA</span></a></div></details></div><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> lab_profile </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Reports</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Classlist Report</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Download Student Profile</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Enrollment List</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Exam Permit Report</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">GWA Reports</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">List of Transferees</span></a></div></details></div></nav></div>',1);function Fe(i,p){const s=y;return f(),v("aside",Ge,[e("div",Re,[e("nav",Ie,[Ne,a(s,{to:"/admin/dashboard",class:"aside-nav-link",title:"Home"},{default:o(()=>[Ve]),_:1}),qe]),Ye]),Te])}const We=w(Oe,[["render",Fe]]),Xe={id:"app"},Ze={class:"header sticky top-0 z-10"},Qe={class:"border-b relative bg-white shadow-sm dark:bg-gray-900 dark:border-gray-800"},Ue={class:"px-4 py-2 mx-auto"},Je={class:"flex items-center justify-between"},Ke=c('<div class="flex items-center gap-2"><div class="flex xl:hidden"><button type="button" id="sidebar-toggler" class="inline-flex items-center justify-center px-1 py-1 border shadow-sm text-gray-500 transition-colors duration-200 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-950 dark:border-gray-700 dark:text-gray-300" aria-label="toggle menu"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-menu" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M4 8l16 0"></path><path d="M4 16l16 0"></path></svg></button></div><a href="#" class="text-gray-700 font-medium dark:text-gray-200"> Academe SMS </a><div class="hidden md:flex flex-col md:flex-row md:items-center mx-3"><a href="#" class="px-3 py-1 text-sm text-gray-700 transition-colors duration-300 transform rounded-md xl:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">First Quarter</a><a href="#" class="px-3 py-1 text-sm text-gray-700 transition-colors duration-300 transform rounded-md xl:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">SY: 2023 - 2024</a></div></div>',1),ea={class:"flex items-center"},aa={class:"relative","data-te-dropdown-ref":""},ta=c('<button type="button" class="relative flex items-center gap-1 xl:gap-2 focus:outline-none" id="dropdownProfile" data-te-dropdown-toggle-ref data-te-dropdown-animation="off" aria-expanded="false" title="Mark Paul Cañeda"><div class="hidden xl:flex flex-col items-end"><div class="text-gray-700 text-xs font-medium leading-none dark:text-gray-200">Mark Paul</div><span class="text-gray-500 text-xs dark:text-gray-300">Registrar Head</span></div><img class="avatar avatar-sm rounded-full ring-2 ring-gray-200 dark:ring-gray-600" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;h=634&amp;q=80" alt="avatar"></button>',1),ra={class:"dropdown-menu","aria-labelledby":"dropdownProfile","data-te-dropdown-menu-ref":""},sa=c('<li><a href="#" class="flex items-center p-3 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"><img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9 ring-2 ring-gray-200 dark:ring-gray-600" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;h=634&amp;q=80" alt="jane avatar"><div class="mx-1"><h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">Mark Paul Cañeda</h1><p class="text-sm text-gray-500 dark:text-gray-400">mpcaneda.gca@gmail.com</p></div></a></li><hr class="dropdown-divider">',2),oa={class:"dropdown-link",href:"#","data-te-dropdown-item-ref":""},na=["onClick"],ia={class:"main py-8 overflow-y-auto"},xa={__name:"admin",setup(i){const p=async()=>{P("/")};return(s,b)=>{const n=He,u=We,d=H,l=k,m=y;return f(),v("div",Xe,[a(d,null,{fallback:o(()=>[a(u)]),default:o(()=>[a(n)]),_:1}),e("header",Ze,[e("nav",Qe,[e("div",Ue,[e("div",Je,[Ke,e("div",ea,[e("div",aa,[ta,e("ul",ra,[sa,e("li",null,[a(m,{to:"/admin/manage-account/profile",class:"dropdown-link","data-te-dropdown-item-ref":""},{default:o(()=>[a(l,{name:"fluent:person-24-regular",size:"24",class:"text-gray-500 dark:text-gray-400"}),x(" Profile ")]),_:1})]),e("li",null,[a(m,{to:"/admin/manage-account/preferences",class:"dropdown-link","data-te-dropdown-item-ref":""},{default:o(()=>[a(l,{name:"fluent:paint-brush-24-regular",size:"24",class:"text-gray-500 dark:text-gray-400"}),x(" Preferences ")]),_:1})]),e("li",null,[e("a",oa,[a(l,{name:"fluent:settings-24-regular",size:"24",class:"text-gray-500 dark:text-gray-400"}),x(" Account Settings ")])]),e("li",null,[e("button",{type:"button",onClick:L(p,["prevent"]),class:"dropdown-link","data-te-dropdown-item-ref":""},[a(l,{name:"fluent:sign-out-24-regular",size:"24",class:"text-gray-500 dark:text-gray-400"}),x(" Sign out ")],8,na)])])])])])])])]),e("main",ia,[B(s.$slots,"default")])])}}};export{xa as default};
