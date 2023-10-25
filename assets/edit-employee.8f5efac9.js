import{_ as i}from"./nuxt-link.ad97e6fb.js";import{_ as c}from"./Select.eea5382e.js";import{u as r}from"./index.e0dcfd02.js";import{c as d,a as e,b as o,w as s,g as a,o as n,d as _}from"./entry.83a27cbe.js";const m={class:"container"},p={class:"sm:flex sm:items-center sm:justify-between mb-6"},u=e("div",null,[e("div",{class:"flex items-center gap-x-3"},[e("h2",{class:"text-xl font-medium text-gray-800 dark:text-white"},"Edit employee")]),e("p",{class:"mt-1 text-sm text-gray-500 dark:text-gray-300"},"Updated 2 weeks ago")],-1),f={class:"flex items-center mt-4 gap-x-3"},h=e("button",{type:"submit",class:"button button-primary"}," Save changes ",-1),v={class:"grid grid-cols-1 lg:grid-cols-12 gap-6"},b={class:"lg:col-span-8"},g={class:"space-y-6"},y={class:"card"},x={class:"card-body"},S=e("h5",{class:"card-title"},"Personal Information",-1),C={class:"space-y-4"},E=a('<div class="form-group"><label for="name" class="form-label">Full Name</label><input id="name" type="text" placeholder="e.g Juan Dela Cruz" class="form-control" autocomplete="name" required></div><div class="form-group"><label for="birthdate" class="form-label">Date of Birth</label><input id="birthdate" type="date" class="form-control" autocomplete="birthday" required></div><div class="form-group"><label for="birthplace" class="form-label">Place of Birth (optional)</label><input id="birthplace" type="text" placeholder="e.g Metro Manila" class="form-control" autocomplete="address"></div>',3),M={class:"form-group"},N=e("label",{for:"gender",class:"form-label"},"Gender (optional)",-1),w=e("option",{value:"Male"},"Male",-1),D=e("option",{value:"Female"},"Female",-1),k=e("div",{class:"form-group"},[e("label",{for:"nationality",class:"form-label"},"Nationality (optional)"),e("input",{id:"nationality",type:"text",placeholder:"e.g Filipino",class:"form-control"})],-1),B={class:"form-group"},F=e("label",{for:"civil_status",class:"form-label"},"Civil Status (optional)",-1),q=e("option",{value:"Single"},"Single",-1),P=e("option",{value:"Married"},"Married",-1),V=e("option",{value:"Widowed"},"Widowed",-1),z=e("option",{value:"Divorced"},"Divorced",-1),A=a('<div class="card"><div class="card-body"><h5 class="card-title">Contact Information</h5><div class="space-y-4"><div class="form-group"><label for="mobile_number" class="form-label">Mobile Number (optional)</label><input id="mobile_number" type="text" placeholder="e.g (+63) 912-2342-563" class="form-control" autocomplete="phone"></div><div class="form-group"><label for="telephone" class="form-label">Telephone (optional)</label><input id="telephone" type="tel" class="form-control" autocomplete="tel"></div><div class="form-group"><label for="email" class="form-label">Email (optional)</label><input id="email" type="email" placeholder="e.g juandelacruz@gmail.com" class="form-control" autocomplete="email"></div></div></div></div>',1),I={class:"lg:col-span-4"},T={class:"space-y-6"},j={class:"card"},J={class:"card-body"},W={class:"space-y-4"},G=e("div",{class:"form-group"},[e("label",{for:"employee_id",class:"form-label"},"Employee ID"),e("input",{id:"employee_id",type:"text",class:"form-control",placeholder:"e.g Juan Dela Cruz",required:""})],-1),L={class:"form-group"},U=e("label",{for:"account_type",class:"form-label"},"Account Type",-1),$=e("option",{value:"System Administrator"},"System Administrator",-1),H={class:"form-group"},K=e("label",{for:"employee_status",class:"form-label"},"Employee Status (optional)",-1),O=e("option",{value:"Employed"},"Employed",-1),Q={class:"form-group"},R=e("label",{for:"program_department",class:"form-label"},"Program Department (optional)",-1),X={class:"form-group"},Y=e("label",{for:"program_category",class:"form-label"},"Program Category (optional)",-1),Z=e("option",{value:"College"},"College",-1),ce={__name:"edit-employee",setup(ee){return r({title:"Edit Employee"}),(oe,te)=>{const l=i,t=c;return n(),d("form",null,[e("div",m,[e("div",p,[u,e("div",f,[o(l,{to:"/admin/users/employee",class:"button button-secondary"},{default:s(()=>[_(" Cancel ")]),_:1}),h])]),e("div",v,[e("div",b,[e("div",g,[e("div",y,[e("div",x,[S,e("div",C,[E,e("div",M,[N,o(t,{name:"gender",id:"gender"},{default:s(()=>[w,D]),_:1})]),k,e("div",B,[F,o(t,{name:"civil_status",id:"civil_status"},{default:s(()=>[q,P,V,z]),_:1})])])])]),A])]),e("div",I,[e("div",T,[e("div",j,[e("div",J,[e("div",W,[G,e("div",L,[U,o(t,{name:"account_type",id:"account_type",required:""},{default:s(()=>[$]),_:1})]),e("div",H,[K,o(t,{name:"employee_status",id:"employee_status"},{default:s(()=>[O]),_:1})]),e("div",Q,[R,o(t,{name:"program_department",id:"program_department"})]),e("div",X,[Y,o(t,{name:"program_category",id:"program_category"},{default:s(()=>[Z]),_:1})])])])])])])])])])}}};export{ce as default};
