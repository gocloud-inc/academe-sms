import{_ as E}from"./Print.2afc4aa8.js";import{_ as B}from"./Add.97a4adda.js";import{_ as D}from"./nuxt-link.6b4bcbb1.js";import{_ as T}from"./Search.aa6662af.js";import{_ as N}from"./ChevronDown.8467f584.js";import{_ as I}from"./ArrowSort.9e920cb0.js";import{_ as H}from"./More.3c2e7c7d.js";import{_ as g,o,c as s,a as t,m as L,d as n,b as a,w as b,F as p,r as y,t as i}from"./entry.eba5405a.js";import{u as R}from"./index.37c62e5b.js";import{f as l}from"./index.e5f22473.js";import"./Icon.5dddaf05.js";const O={},q={"data-te-modal-init":"",class:"modal",id:"deleteModal",tabindex:"-1","aria-labelledby":"deleteModalTitle","aria-hidden":"true","aria-modal":"true",role:"dialog"},z=t("div",{"data-te-modal-dialog-ref":"",class:"modal-container"},[t("div",{class:"modal-body"},[t("h3",{class:"text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white",id:"modal-title"}," Delete Confirmation "),t("p",{class:"mt-2 text-sm text-gray-500 dark:text-gray-400"}," Are you sure you want to delete this item? This action cannot be undone. "),t("form",{class:"mt-4",id:"delete-url",action:"",method:"POST"},[t("div",{class:"modal-action"},[t("button",{type:"button",class:"button button-secondary","data-te-modal-dismiss":""}," No, cancel "),t("button",{type:"submit",class:"button button-danger"}," Delete ")])])])],-1),F=[z];function G(m,d){return o(),s("div",q,F)}const V=g(O,[["render",G]]),j={"data-te-modal-init":"",class:"modal",id:"changePasswordModal",tabindex:"-1","aria-labelledby":"changePasswordModalTitle","aria-hidden":"true","aria-modal":"true",role:"dialog"},U=t("div",{"data-te-modal-dialog-ref":"",class:"modal-container"},[t("div",{class:"modal-body"},[t("h3",{class:"text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white",id:"modal-title"}," Create New Password "),t("form",{class:"mt-4",id:"change-password-url",action:"",method:"POST"},[t("div",{class:"flex items-center gap-1 mb-6"},[t("div",{class:"form-group w-9/12"},[t("label",{for:"new_password",class:"form-label sr-only"},"Create New Password"),t("div",{class:"relative"},[t("input",{id:"new_password",class:"form-control password",type:"password",name:"new_password",required:"",autocomplete:"new-password"}),t("div",{class:"absolute top-0 end-0 my-2 mx-4 password-btn text-sm cursor-pointer dark:text-gray-100"},[t("span",{class:"password-icon"},"Show")])])]),t("button",{type:"button",class:"button button-secondary w-fit"}," Generate ")]),t("div",{class:"modal-action"},[t("button",{type:"button",class:"button button-secondary","data-te-modal-dismiss":""}," No, cancel "),t("button",{type:"submit",class:"button button-primary"}," Save changes ")])])])],-1),J=[U],K={__name:"ChangePassword",setup(m){return L(()=>{const d=Array.from(document.querySelectorAll(".password")),c=Array.from(document.querySelectorAll(".password-btn")),h=Array.from(document.querySelectorAll(".password-icon"));c.forEach(_=>{_.addEventListener("click",()=>{const r=d[0].type==="text";d.forEach(u=>{u.type=r?"password":"text"}),h.forEach(u=>{u.textContent=r?"Show":"Hide"})})})}),(d,c)=>(o(),s("div",j,J))}},Q=K,W={},X={"data-te-modal-init":"",class:"modal",id:"deactivateModal",tabindex:"-1","aria-labelledby":"deactivateModalTitle","aria-hidden":"true","aria-modal":"true",role:"dialog"},Y=t("div",{"data-te-modal-dialog-ref":"",class:"modal-container"},[t("div",{class:"modal-body"},[t("h3",{class:"text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white",id:"modal-title"}," Confirmation "),t("p",{class:"mt-2 text-sm text-gray-500 dark:text-gray-400"},[n(" Are you sure you want to deactivate "),t("b",null,"Globe Support Team"),n("? This action cannot be undone. ")]),t("form",{class:"mt-4",id:"deactivate-url",action:"",method:"POST"},[t("div",{class:"modal-action"},[t("button",{type:"button",class:"button button-secondary","data-te-modal-dismiss":""}," No, cancel "),t("button",{type:"submit",class:"button button-danger"}," Deactivate ")])])])],-1),Z=[Y];function tt(m,d){return o(),s("div",X,Z)}const et=g(W,[["render",tt]]),at={},ot={"data-te-modal-init":"",class:"modal",id:"activateModal",tabindex:"-1","aria-labelledby":"activateModalTitle","aria-hidden":"true","aria-modal":"true",role:"dialog"},st=t("div",{"data-te-modal-dialog-ref":"",class:"modal-container"},[t("div",{class:"modal-body"},[t("h3",{class:"text-lg font-medium leading-6 text-gray-800 capitalize dark:text-white",id:"modal-title"}," Confirmation "),t("p",{class:"mt-2 text-sm text-gray-500 dark:text-gray-400"},[n(" Are you sure you want to activate "),t("b",null,"Globe Support Team"),n("? This action cannot be undone. ")]),t("form",{class:"mt-4",id:"activate-url",action:"",method:"POST"},[t("div",{class:"modal-action"},[t("button",{type:"button",class:"button button-secondary","data-te-modal-dismiss":""}," No, cancel "),t("button",{type:"submit",class:"button button-primary"}," Activate ")])])])],-1),nt=[st];function dt(m,d){return o(),s("div",ot,nt)}const rt=g(at,[["render",dt]]),lt={class:"container"},it={class:"sm:flex sm:items-center sm:justify-between"},ct=t("div",null,[t("div",{class:"flex items-center gap-x-3"},[t("h2",{class:"text-xl font-medium text-gray-800 dark:text-white"},"Employees"),t("span",{class:"badge badge-primary"},"10 total")]),t("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-300"},"These students are officiallty enrolled in the current school year.")],-1),mt={class:"flex items-center mt-4 gap-x-3"},_t={class:"button button-secondary"},ut={class:"mt-6 md:flex md:items-center md:justify-between"},pt={class:""},ht={class:"form-group"},ft=t("label",{for:"search",class:"form-label sr-only"},"Search",-1),bt={class:"relative flex items-center"},yt={class:"absolute"},gt=t("input",{id:"search",type:"text",name:"q",placeholder:"Search employee",class:"form-control-icon-start"},null,-1),wt={class:"flex flex-wrap items-center gap-2 mt-4 md:mt-0"},xt={class:"relative","data-te-dropdown-ref":""},vt={class:"button button-secondary",type:"button",id:"type","data-te-dropdown-toggle-ref":"","data-te-dropdown-animation":"off","aria-expanded":"false"},kt={class:"dropdown-menu","aria-labelledby":"type","data-te-dropdown-menu-ref":""},St={class:"dropdown-link",href:"#","data-te-dropdown-item-ref":""},At={class:"relative","data-te-dropdown-ref":""},Mt={class:"button button-secondary",type:"button",id:"yearLevel","data-te-dropdown-toggle-ref":"","data-te-dropdown-animation":"off","aria-expanded":"false"},$t={class:"dropdown-menu","aria-labelledby":"yearLevel","data-te-dropdown-menu-ref":""},Ct={class:"dropdown-link",href:"#","data-te-dropdown-item-ref":""},Pt={class:"relative","data-te-dropdown-ref":""},Et={class:"button button-secondary",type:"button",id:"sortBy","data-te-dropdown-toggle-ref":"","data-te-dropdown-animation":"off","aria-expanded":"false"},Bt=t("ul",{class:"dropdown-menu","aria-labelledby":"sortBy","data-te-dropdown-menu-ref":""},[t("li",null,[t("a",{class:"dropdown-link",href:"#","data-te-dropdown-item-ref":""}," Active ")]),t("li",null,[t("a",{class:"dropdown-link",href:"#","data-te-dropdown-item-ref":""}," Inactive ")])],-1),Dt={class:"flex flex-col mt-6"},Tt={class:"overflow-x-auto"},Nt={class:"inline-block min-w-full align-middle"},It={class:"table-responsive"},Ht={class:"table"},Lt=t("thead",{class:"table-head"},[t("tr",null,[t("th",{scope:"col",class:"table-header"}," Name "),t("th",{scope:"col",class:"table-header"}," Login "),t("th",{scope:"col",class:"table-header"}," Program Department "),t("th",{scope:"col",class:"table-header"}," Role "),t("th",{scope:"col",class:"table-header"}," Status "),t("th",{scope:"col",class:"relative py-3.5 px-4",width:"7%"},[t("span",{class:"sr-only"},"Action")])])],-1),Rt={class:"table-body"},Ot={class:"table-data"},qt={class:"flex items-center gap-2"},zt={class:"uppercase bg-gray-100 text-gray-500 rounded-full w-10 h-10 flex justify-center items-center text-sm font-semibold dark:bg-gray-600 dark:text-gray-300"},Ft=["src"],Gt={class:"table-data"},Vt={class:"table-data"},jt={class:"table-data"},Ut={class:"table-data"},Jt={key:0,class:"badge badge-primary"},Kt={key:1,class:"badge badge-danger"},Qt={class:"table-data"},Wt={class:"relative","data-te-dropdown-ref":""},Xt={class:"inline-flex items-center gap-2 px-1 py-1 text-sm text-gray-500 transition-colors duration-200 rounded-lg dark:text-gray-300 hover:bg-gray-200 hover:text-gray-500 dark:hover:bg-gray-700",type:"button",id:"dropdownMenuButton1d","data-te-dropdown-toggle-ref":"","data-te-dropdown-animation":"off","aria-expanded":"false"},Yt={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1d","data-te-dropdown-menu-ref":""},Zt=t("li",null,[t("button",{"data-te-target":"#changePasswordModal","data-te-toggle":"modal",type:"button",class:"dropdown-link","data-te-dropdown-item-ref":""}," Change Password ")],-1),te=t("hr",{class:"dropdown-divider"},null,-1),ee={key:0},ae=t("button",{"data-te-target":"#activateModal","data-te-toggle":"modal",type:"button",class:"dropdown-link","data-te-dropdown-item-ref":""}," Activate ",-1),oe=[ae],se={key:1},ne=t("button",{"data-te-target":"#deactivateModal","data-te-toggle":"modal",type:"button",class:"dropdown-link","data-te-dropdown-item-ref":""}," Deactivate ",-1),de=[ne],re=t("hr",{class:"dropdown-divider"},null,-1),le=t("li",null,[t("button",{"data-te-target":"#deleteModal","data-te-toggle":"modal",type:"button",class:"dropdown-link","data-te-dropdown-item-ref":""}," Delete ")],-1),we={__name:"index",setup(m){R({title:"Employees"});const d=["Vice President","President","System Administrator","School Administrator","Compliance Officer","Principal","Academic Head","Student Assistant","Dean","Registrar Head","Records System Officer","Registrar Staff","Finance","Cashier","Cashier Head","Human Resource","Library","Faculty","Student Affairs","Custodian","Counselor","Admission","Clearance Department","Clinic","Donors","Book Store","Encoder","Guard","Academic Staff"],c=["Bachelor of Elementary Education","Bachelor of Science in Accountancy","Bachelor of Science in Business Administration","Bachelor of Science in Computer Science","Bachelor of Science in Hotel and Restaurant Management","Professional Education Courses"],h=r=>{switch(r){case"user":return{id:l.string.uuid(),username:l.internet.userName(),name:l.person.fullName(),role:l.helpers.arrayElement(d),department:l.helpers.arrayElement(c),avatar:l.image.avatarGitHub(),status:l.helpers.arrayElement(["Active","Inactive"]),type:"user"};default:return{}}},_=[];for(let r=0;r<10;r++)_.push(h("user"));return(r,u)=>{const x=E,v=B,f=D,k=T,w=N,S=I,A=H,M=V,$=Q,C=et,P=rt;return o(),s(p,null,[t("div",lt,[t("div",it,[ct,t("div",mt,[t("button",_t,[a(x),n(" Print ")]),a(f,{to:"/admin/employees/create",class:"button button-primary"},{default:b(()=>[a(v),n(" Add Employee ")]),_:1})])]),t("div",ut,[t("form",pt,[t("div",ht,[ft,t("div",bt,[t("span",yt,[a(k,{class:"mx-3 text-gray-400 dark:text-gray-600"})]),gt])])]),t("div",wt,[t("div",xt,[t("button",vt,[a(w,{class:"w-4 h-4"}),n(" All Role ")]),t("ul",kt,[(o(),s(p,null,y(d,e=>t("li",{key:e},[t("a",St,i(e),1)])),64))])]),t("div",At,[t("button",Mt,[a(w,{class:"w-4 h-4"}),n(" All Department ")]),t("ul",$t,[(o(),s(p,null,y(c,e=>t("li",{key:e},[t("a",Ct,i(e),1)])),64))])]),t("div",Pt,[t("button",Et,[a(S,{class:"w-5 h-5"}),n(" Sort By ")]),Bt])])]),t("div",Dt,[t("div",Tt,[t("div",Nt,[t("div",It,[t("table",Ht,[Lt,t("tbody",Rt,[(o(!0),s(p,null,y(_.filter(e=>e.type==="user"),e=>(o(),s("tr",{key:e.id},[t("td",Ot,[t("div",qt,[t("div",zt,[t("img",{class:"avatar avatar-sm rounded-full",src:e.avatar,alt:""},null,8,Ft)]),a(f,{to:"/admin/employees/edit",class:"font-medium text-gray-800 capitalize hover:underline dark:text-white"},{default:b(()=>[n(i(e.name),1)]),_:2},1024)])]),t("td",Gt,i(e.username),1),t("td",Vt,i(e.department),1),t("td",jt,i(e.role),1),t("td",Ut,[e.status==="Active"?(o(),s("span",Jt,"Active")):(o(),s("span",Kt,"Inactive"))]),t("td",Qt,[t("div",Wt,[t("button",Xt,[a(A)]),t("ul",Yt,[t("li",null,[a(f,{to:"/admin/employees/edit",class:"dropdown-link","data-te-dropdown-item-ref":""},{default:b(()=>[n(" Edit ")]),_:1})]),Zt,te,e.status==="Inactive"?(o(),s("li",ee,oe)):(o(),s("li",se,de)),re,le])])])]))),128))])])])])])])]),a(M),a($),a(C),a(P)],64)}}};export{we as default};
