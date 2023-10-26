import{_ as d,j as c,q as i,c as p,a as t,t as g,b as x,f as m,C as h,o as v,p as _,e as f}from"./entry.7fe22ba6.js";const u={setup(){const a={morning:"⛅ Good morning",afternoon:"🌞 Good afternoon",evening:"🌘 Good evening"},s=new Date().getHours(),l=s<12?a.morning:s<18?a.afternoon:a.evening,o=c([{description:"Examination Week",isComplete:!1,dates:{repeat:{weekdays:6}},color:"red"}]),r=i(()=>[...o.value.map(e=>({dates:e.dates,dot:{color:e.color,...e.isComplete&&{class:"opacity-75"}},popover:{label:e.description}}))]);return{greeting:l,attributes:r}}},b=a=>(_("data-v-0474a803"),a=a(),f(),a),k={class:"container px-4 md:px-8 mx-auto"},w={class:"flex flex-col mb-6"},y={class:"grid grid-cols-1 md:grid-cols-12 gap-6"},C={class:"lg:col-span-9 md:col-span-8"},M=b(()=>t("div",{class:"flex items-center overflow-x-auto whitespace-nowrap"},[t("a",{href:"#",class:"text-gray-600 dark:text-gray-200 hover:text-blue-600"}," Dashboard ")],-1)),j={class:"text-xl lg:text-2xl font-medium text-gray-700 mt-1 dark:text-gray-300"},B={class:"lg:col-span-3 md:col-span-4 space-y-6"},D=m('<div class="flex flex-col items-center justify-center text-center text-sm text-gray-600" data-v-0474a803><img class="flex-shrink-0 object-cover mx-1 rounded-full w-24 h-24 ring-2 ring-gray-200 dark:ring-gray-600" src="https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=634&amp;h=634&amp;q=80" alt="jane avatar" data-v-0474a803><div class="mt-3" data-v-0474a803><div class="flex items-center gap-1" data-v-0474a803><h1 class="text-base font-semibold text-gray-700 dark:text-gray-200" data-v-0474a803>Mark Paul Cañeda</h1><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-discount-check-filled text-primary dark:text-primary-400" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round" data-v-0474a803><path stroke="none" d="M0 0h24v24H0z" fill="none" data-v-0474a803></path><path d="M12.01 2.011a3.2 3.2 0 0 1 2.113 .797l.154 .145l.698 .698a1.2 1.2 0 0 0 .71 .341l.135 .008h1a3.2 3.2 0 0 1 3.195 3.018l.005 .182v1c0 .27 .092 .533 .258 .743l.09 .1l.697 .698a3.2 3.2 0 0 1 .147 4.382l-.145 .154l-.698 .698a1.2 1.2 0 0 0 -.341 .71l-.008 .135v1a3.2 3.2 0 0 1 -3.018 3.195l-.182 .005h-1a1.2 1.2 0 0 0 -.743 .258l-.1 .09l-.698 .697a3.2 3.2 0 0 1 -4.382 .147l-.154 -.145l-.698 -.698a1.2 1.2 0 0 0 -.71 -.341l-.135 -.008h-1a3.2 3.2 0 0 1 -3.195 -3.018l-.005 -.182v-1a1.2 1.2 0 0 0 -.258 -.743l-.09 -.1l-.697 -.698a3.2 3.2 0 0 1 -.147 -4.382l.145 -.154l.698 -.698a1.2 1.2 0 0 0 .341 -.71l.008 -.135v-1l.005 -.182a3.2 3.2 0 0 1 3.013 -3.013l.182 -.005h1a1.2 1.2 0 0 0 .743 -.258l.1 -.09l.698 -.697a3.2 3.2 0 0 1 2.269 -.944zm3.697 7.282a1 1 0 0 0 -1.414 0l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.32 1.497l2 2l.094 .083a1 1 0 0 0 1.32 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor" data-v-0474a803></path></svg></div><p class="text-sm text-gray-500 dark:text-gray-400" data-v-0474a803>College</p></div></div>',1);function H(a,s,l,o,r,e){const n=h;return v(),p("div",k,[t("div",w,[t("div",y,[t("div",C,[M,t("h4",j,g(o.greeting)+"! Mark Paul",1)]),t("div",B,[D,t("div",null,[x(n,{expanded:"",transparent:"",borderless:"","title-position":"left",attributes:o.attributes},null,8,["attributes"])])])])])])}const S=d(u,[["render",H],["__scopeId","data-v-0474a803"]]);export{S as default};
