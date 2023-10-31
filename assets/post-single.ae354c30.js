import{_}from"./nuxt-link.0e555fab.js";import{u as v}from"./index.7adc634f.js";import{f as s}from"./index.e5f22473.js";import{c as i,a as t,b as x,w as g,t as a,i as d,F as n,l as h,j as b,o as l,d as m,x as u,h as f}from"./entry.4151713e.js";const w={class:"py-24 px-3 md:px-0 bg-white dark:bg-gray-900"},k={class:"container"},B={class:"grid grid-cols-1 lg:grid-cols-12 gap-12 py-12"},z={class:"lg:col-span-8"},P={class:"flex items-center overflow-x-auto whitespace-nowrap"},L=b('<span class="mx-3 text-gray-500 dark:text-gray-300 rtl:-scale-x-100"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span><a href="#" class="text-sm text-gray-600 dark:text-gray-200 hover:underline"> Events </a><span class="mx-3 text-gray-500 dark:text-gray-300 rtl:-scale-x-100"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg></span>',3),N={href:"#",class:"text-sm text-gray-600 dark:text-gray-200 hover:underline"},T={class:"relative group overflow-hidden rounded-lg shadow transition hover:shadow-lg mt-6"},j=["src"],S={class:"relative h-full bg-gradient-to-t from-gray-900/80 to-gray-900/20 pt-32 sm:pt-48 lg:pt-64"},F={class:"p-4 sm:p-6"},O={class:"badge badge-primary dark:bg-gray-300 dark:text-gray-700 absolute top-4 md:top-6"},V=t("time",{datetime:"2022-10-10",class:"block text-xs text-white/90"}," 10th Oct 2022 ",-1),C={class:"mt-0.5 text-2xl text-white font-semibold line-clamp-2"},D=t("div",{class:"flex flex-wrap items-center gap-4 mt-2"},[t("span",{class:"block text-xs text-white/90"},"By Bulletin"),t("span",{class:"block text-xs text-white/90"},"2 minutes read"),t("span",{class:"block text-xs text-white/90"},"1.4k views")],-1),E={class:"mt-8"},M={class:"text-gray-700 leading-relaxed dark:text-gray-200"},R={class:"text-gray-700 leading-relaxed dark:text-gray-200 mt-3"},$={class:"text-gray-700 leading-relaxed dark:text-gray-200 mt-3"},H={class:"lg:col-span-4 space-y-6"},J={class:"space-y-4"},q=t("h2",{class:"text-xl font-semibold text-gray-800 capitalize dark:text-white"}," Related News ",-1),A={class:"w-2/3 p-4 md:p-4"},G={class:"text-base font-semibold text-gray-800 dark:text-white line-clamp-2 leading-tight hover:underline"},I=t("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},"Oct 31, 2023",-1),K={class:"space-y-4"},Q=t("h2",{class:"text-xl font-semibold text-gray-800 capitalize dark:text-white"}," Latest Events ",-1),U={class:"w-2/3 p-4 md:p-4"},W={class:"text-base font-semibold text-gray-800 dark:text-white line-clamp-2 leading-tight hover:underline"},X=t("p",{class:"mt-1 text-sm text-gray-600 dark:text-gray-400"},"Oct 31, 2023",-1),Y={class:"space-y-4"},Z=t("h2",{class:"text-xl font-semibold text-gray-800 capitalize dark:text-white"}," Tags ",-1),tt={class:"flex flex-wrap gap-1"},et={class:"py-24 px-3 md:px-0"},st={class:"container"},at=t("div",{class:"text-left"},[t("h2",{class:"text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white"},"Jobs")],-1),lt={class:"grid grid-cols-1 lg:grid-cols-3 md:grid-cols-3 gap-6 mt-8"},rt={class:"card-body"},ot=t("div",{class:"flex items-center justify-between"},[t("span",{class:"text-sm font-light text-gray-800 dark:text-gray-400"},"Full-time"),t("span",{class:"badge badge-primary"},"psychology")],-1),it={class:"mb-2"},dt={class:"mt-2 text-lg font-semibold capitalize text-gray-800 dark:text-white"},nt={class:"mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3"},ct=t("a",{href:"#",class:"text-sm text-primary-600 dark:text-primary-400 hover:underline",tabindex:"0",role:"link"},"Read more",-1),ut={__name:"post-single",setup(gt){v({title:"Post Single - Bulletin"});const c=o=>{switch(o){case"news":return{id:s.string.uuid(),thumbnail:s.image.urlPicsumPhotos(),title:s.lorem.sentence(),description:s.lorem.paragraph(),type:"news"};case"events":return{id:s.string.uuid(),thumbnail:s.image.urlPicsumPhotos(),title:s.lorem.sentence(),description:s.lorem.paragraph(),type:"events"};case"postTags":return{id:s.string.uuid(),name:s.lorem.word(),type:"postTags"};case"jobs":return{id:s.string.uuid(),thumbnail:s.image.avatarLegacy(),title:s.lorem.word(),description:s.lorem.paragraph(),type:"jobs"};default:return{}}},r=[];for(let o=0;o<3;o++)r.push(c("news")),r.push(c("events"));for(let o=0;o<6;o++)r.push(c("jobs")),r.push(c("postTags"));return(o,ht)=>{const p=_,y=_;return l(),i(n,null,[t("section",w,[t("div",k,[t("div",B,[t("div",z,[t("div",P,[x(p,{to:"/bulletin",class:"text-sm text-gray-600 dark:text-gray-200 hover:underline"},{default:g(()=>[m(" Home ")]),_:1}),L,t("a",N,a(d(s).lorem.word()),1)]),t("article",T,[t("img",{alt:"Office",src:d(s).image.urlPicsumPhotos(),class:"absolute inset-0 h-full w-full object-cover transition-all duration-300 ease-in-out group-hover:scale-125"},null,8,j),t("div",S,[t("div",F,[t("span",O,a(d(s).lorem.word()),1),V,t("h3",C,a(d(s).lorem.sentence()),1),D])])]),t("div",E,[t("p",M,a(d(s).lorem.paragraph()),1),t("p",R,a(d(s).lorem.paragraphs(5)),1),t("p",$,a(d(s).lorem.paragraphs(6)),1)])]),t("div",H,[t("div",J,[q,(l(!0),i(n,null,h(r.filter(e=>e.type==="news"),e=>(l(),i("article",{key:e.id,class:"flex overflow-hidden bg-white rounded-lg border dark:border-gray-700 dark:bg-gray-800"},[t("div",{class:"w-1/3 bg-cover",style:u(`background-image: url('${e.thumbnail}')`)},null,4),t("div",A,[x(p,{to:"/bulletin/post-single"},{default:g(()=>[t("h4",G,a(e.title),1)]),_:2},1024),I])]))),128))]),t("div",K,[Q,(l(!0),i(n,null,h(r.filter(e=>e.type==="events"),e=>(l(),i("article",{key:e.id,class:"flex overflow-hidden bg-white rounded-lg border dark:border-gray-700 dark:bg-gray-800"},[t("div",{class:"w-1/3 bg-cover",style:u(`background-image: url('${e.thumbnail}')`)},null,4),t("div",U,[x(p,{to:"/bulletin/post-single"},{default:g(()=>[t("h4",W,a(e.title),1)]),_:2},1024),X])]))),128))]),t("div",Y,[Z,t("div",tt,[(l(!0),i(n,null,h(r.filter(e=>e.type==="postTags"),e=>(l(),f(y,{to:"/bulletin/post-single",key:e.id,class:"badge badge-primary bg-gray-200 text-gray-700 text-sm"},{default:g(()=>[m(a(e.name),1)]),_:2},1024))),128))])])])])])]),t("section",et,[t("div",st,[at,t("div",lt,[(l(!0),i(n,null,h(r.filter(e=>e.type==="jobs"),e=>(l(),i("div",{class:"card",key:e.id},[t("div",rt,[ot,t("div",it,[t("h1",dt,a(e.title),1),t("p",nt,a(e.description),1)]),ct])]))),128))])])])],64)}}};export{ut as default};
