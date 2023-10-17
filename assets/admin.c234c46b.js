import{_ as p}from"./nuxt-link.3ce19d3f.js";import{Z as c,D as f,m as h,_ as v}from"./client-only.a335ef1e.js";import{_ as g,r as u,f as k,o as x,c as y,a as r,b as e,w as s,d as m,j as o,A as b}from"./entry.655e5c40.js";const _={setup(){const n=document.getElementById("sidebar-toggler"),d=u(null);let t="";k(()=>{c({Dropdown:f,PerfectScrollbar:h}),d.value=document.getElementById("aside"),n&&n.addEventListener("click",()=>{d.value.classList.toggle("show");const a=i();a.addEventListener("click",()=>{d.value.classList.remove("show"),document.body.style.overflow=t,document.body.removeChild(a)}),t=document.body.style.overflow,document.body.style.overflow="hidden"})});function i(){const a=document.createElement("div");return a.className="sidebar-overlay",document.body.appendChild(a),a}}},w={id:"aside",ref:"asideEl",class:"aside flex h-screen sticky top-0 transition-all duration-300 ease-in-out"},S={class:"aside-container"},D={class:"aside-nav-menu"},j=r("a",{href:"#",class:"uppercase font-semibold text-gray-600 bg-gray-200 rounded-lg p-2"}," GG ",-1),E=r("span",{class:"material-symbols-rounded"}," home ",-1),A=o('<a href="#" class="aside-nav-link" title="Messages"><span class="material-symbols-rounded"> chat </span></a><a href="#" class="aside-nav-link" title="Admin"><span class="material-symbols-rounded"> school </span></a><a href="#" class="aside-nav-link" title="Notifications"><span class="material-symbols-rounded"> notifications </span></a><a href="#" class="aside-nav-link" title="Departments"><span class="material-symbols-rounded"> group </span></a><a href="#" class="aside-nav-link" title="More"><span class="material-symbols-rounded"> more_horiz </span></a>',5),C={class:"flex flex-col items-center mt-4 space-y-4"},$={class:"relative","data-te-dropdown-ref":""},M=r("a",{href:"#",class:"relative",id:"dropdownProfile","data-te-dropdown-toggle-ref":"","data-te-dropdown-animation":"off","aria-expanded":"false"},[r("img",{class:"avatar",src:"https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&h=634&q=80",alt:"avatar"}),r("span",{class:"h-2.5 w-2.5 rounded-full bg-success-500 absolute right-0.5 ring-1 ring-gray-100 bottom-0"})],-1),P={class:"dropdown-menu","aria-labelledby":"dropdownProfile","data-te-dropdown-menu-ref":""},L=o('<li><a href="#" class="flex items-center p-3 text-sm text-gray-600 transition-colors duration-300 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"><img class="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9" src="https://images.unsplash.com/photo-1523779917675-b6ed3a42a561?ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8d29tYW4lMjBibHVlfGVufDB8fDB8fA%3D%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=face&amp;w=500&amp;q=200" alt="jane avatar"><div class="mx-1"><h1 class="text-sm font-semibold text-gray-700 dark:text-gray-200">Jane Doe</h1><p class="text-sm text-gray-500 dark:text-gray-400">janedoe@exampl.com</p></div></a></li><hr class="dropdown-divider">',2),R=r("li",null,[r("a",{class:"dropdown-link",href:"#","data-te-dropdown-item-ref":""}," Account Settings ")],-1),B=r("li",null,[r("a",{class:"dropdown-link",href:"#","data-te-dropdown-item-ref":""}," Ticket ")],-1),z=r("hr",{class:"dropdown-divider"},null,-1),G=o('<div data-te-perfect-scrollbar-init class="relative h-screen px-5 py-4 overflow-hidden bg-primary-50 border-l border-r sm:w-64 w-60 dark:bg-gray-900 dark:border-gray-800"><nav class="-mx-3 space-y-2"><div class="space-y-1"><div class="flex items-center gap-3 bg-white border shadow-sm p-3 mb-3 rounded-lg dark:bg-gray-800 dark:border-gray-800"><div class="bg-gray-100 rounded-xl w-12 h-12 p-4 text-lg uppercase text-primary font-semibold flex items-center justify-center dark:bg-gray-700 dark:text-primary-300"> LV </div><div class="flex flex-col"><div class="text-xs text-gray-400">School Workspace</div><div class="text-sm text-gray-700 font-medium leading-tight line-clamp-2 dark:text-gray-100">La Verdad Christian College</div></div></div><details class="group [&amp;_summary::-webkit-details-marker]:hidden" open><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> app_registration </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Registrar</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Officially Enrolled</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Registrar Verified</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Enrollees</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Credential Master Lists</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Generate Grade Slip</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Course Schedule</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Departments</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Semester</span></a></div></details></div><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> energy_program_time_used </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Program</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Year Level Category</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Year Levels</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Program Departments</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Programs</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Curriculum</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Master Courses</span></a></div></details></div><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> other_admission </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Admission</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Open Admission</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Applicants</span></a></div></details></div><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> badge </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Enrollment</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Open Enrollment</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Enrollment Settings</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Block Sections</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Course Schedules</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Rooms</span></a></div></details></div><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> account_balance </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Finance</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Bank Details</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Official Receipts</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Payment Plans</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Recompute Fees</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Scholarship</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">SOA</span></a></div></details></div><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-gray-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> lab_profile </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Reports</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Classlist Report</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Download Student Profile</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Enrollment List</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Exam Permit Report</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">GWA Reports</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">List of Transferees</span></a></div></details></div></nav></div>',1);function O(n,d,t,i,a,er){const l=p;return x(),y("aside",w,[r("div",S,[r("nav",D,[j,e(l,{to:"/admin/dashboard",class:"aside-nav-link",title:"Home"},{default:s(()=>[E]),_:1}),A]),r("div",C,[r("div",$,[M,r("ul",P,[L,r("li",null,[e(l,{to:"/admin/manage-account/profile",class:"dropdown-link","data-te-dropdown-item-ref":""},{default:s(()=>[m(" Profile ")]),_:1})]),r("li",null,[e(l,{to:"/admin/manage-account/preferences",class:"dropdown-link","data-te-dropdown-item-ref":""},{default:s(()=>[m(" Preferences ")]),_:1})]),R,B,z,r("li",null,[e(l,{to:"/",class:"dropdown-link","data-te-dropdown-item-ref":""},{default:s(()=>[m(" Sign out ")]),_:1})])])])])]),G],512)}const V=g(_,[["render",O]]),H={},N={class:"aside flex h-screen sticky top-0 transition-all duration-300 ease-in-out"},Y={class:"aside-container"},W={class:"aside-nav-menu"},F=r("a",{href:"#",class:"uppercase font-semibold text-gray-600 bg-gray-200 rounded-lg p-2"}," GG ",-1),T=r("span",{class:"material-symbols-rounded"}," home ",-1),q=o('<a href="#" class="aside-nav-link" title="Messages"><span class="material-symbols-rounded"> chat </span></a><a href="#" class="aside-nav-link" title="Admin"><span class="material-symbols-rounded"> school </span></a><a href="#" class="aside-nav-link" title="Notifications"><span class="material-symbols-rounded"> notifications </span></a><a href="#" class="aside-nav-link" title="Departments"><span class="material-symbols-rounded"> group </span></a><a href="#" class="aside-nav-link" title="More"><span class="material-symbols-rounded"> more_horiz </span></a>',5),Z=o('<div class="flex flex-col items-center mt-4 space-y-4"><div class="relative"><a href="#" class="relative"><img class="avatar" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;h=634&amp;q=80" alt="avatar"><span class="h-2.5 w-2.5 rounded-full bg-success-500 absolute right-0.5 ring-1 ring-gray-100 bottom-0"></span></a></div></div>',1),I=o('<div data-te-perfect-scrollbar-init class="relative h-screen px-5 py-4 overflow-hidden bg-primary-50 border-l border-r sm:w-64 w-60 dark:bg-primary-950 dark:border-gray-800"><nav class="-mx-3 space-y-2"><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden" open><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> app_registration </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Registrar</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Officially Enrolled</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Registrar Verified</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Enrollees</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Credential Master Lists</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Generate Grade Slip</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Course Schedule</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Departments</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Semester</span></a></div></details></div><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> energy_program_time_used </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Program</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Year Level Category</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Year Levels</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Program Departments</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Programs</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Curriculum</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Master Courses</span></a></div></details></div><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> other_admission </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Admission</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Open Admission</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Applicants</span></a></div></details></div><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> badge </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Enrollment</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Open Enrollment</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Enrollment Settings</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Block Sections</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Course Schedules</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Rooms</span></a></div></details></div><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> account_balance </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Finance</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Bank Details</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Official Receipts</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Payment Plans</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Recompute Fees</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Scholarship</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">SOA</span></a></div></details></div><div class="space-y-1"><details class="group [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex cursor-pointer items-center justify-between rounded-lg px-2 py-2 text-gray-500 hover:bg-primary-100 hover:text-gray-700 dark:hover:bg-primary-800 dark:text-gray-200 dark:hover:text-gray-100"><div class="flex items-center gap-2"><span class="material-symbols-rounded"> lab_profile </span><span class="px-3 text-sm text-gray-700 font-medium capitalize dark:text-gray-200">Reports</span></div><span class="material-symbols-rounded shrink-0 transition duration-300 group-open:-rotate-180"> expand_more </span></summary><div class="space-y-1 px-4"><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Classlist Report</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Download Student Profile</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Enrollment List</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">Exam Permit Report</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">GWA Reports</span></a><a class="flex items-center pl-7 py-1.5 text-sm text-gray-500 font-normal transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700" href="#"><span class="mx-2 text-sm font-medium">List of Transferees</span></a></div></details></div></nav></div>',1);function X(n,d){const t=p;return x(),y("aside",N,[r("div",Y,[r("nav",W,[F,e(t,{to:"/admin/dashboard",class:"aside-nav-link",title:"Home"},{default:s(()=>[T]),_:1}),q]),Z]),I])}const J=g(H,[["render",X]]),Q={},K={id:"app"},U=o('<header class="header sticky top-0 z-10"><nav class="border-b relative bg-white shadow-sm dark:bg-gray-900 dark:border-gray-800"><div class="px-4 py-3 xl:py-5 mx-auto"><div class="flex items-center justify-between"><div class="flex items-center gap-2"><div class="flex xl:hidden"><button type="button" id="sidebar-toggler" class="inline-flex items-center justify-center px-1 py-1 border shadow-sm text-gray-500 transition-colors duration-200 rounded-lg bg-gray-100 hover:bg-gray-200 dark:bg-gray-900 dark:hover:bg-gray-950 dark:border-gray-700 dark:text-gray-300" aria-label="toggle menu"><span class="material-symbols-rounded"> menu </span></button></div><a href="#" class="hidden lg:block text-gray-700 font-medium dark:text-gray-200"> Academe SMS </a><div class="hidden xl:flex flex-col xl:flex-row xl:items-center mx-3"><a href="#" class="px-3 py-1 text-sm text-gray-700 transition-colors duration-300 transform rounded-md xl:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">First Quarter</a><a href="#" class="px-3 py-1 text-sm text-gray-700 transition-colors duration-300 transform rounded-md xl:mt-0 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700">SY: 2023 - 2024</a></div></div><div class="flex items-center gap-4"><button class="inline-flex items-center justify-center text-gray-600 transition-colors duration-300 transform dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 focus:text-gray-700 dark:focus:text-gray-400 focus:outline-none" aria-label="show notifications"><span class="material-symbols-rounded"> help </span></button></div></div></div></nav></header>',1),rr={class:"main py-8 overflow-y-auto"};function ar(n,d){const t=V,i=J,a=v;return x(),y("div",K,[e(a,null,{fallback:s(()=>[e(i)]),default:s(()=>[e(t)]),_:1}),U,r("main",rr,[b(n.$slots,"default")])])}const nr=g(Q,[["render",ar]]);export{nr as default};
