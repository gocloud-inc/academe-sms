import{i as p,a0 as _,S as m,B as c,o as f,c as I,z as x,_ as S}from"./entry.eba5405a.js";const d=p({__name:"IconCSS",props:{name:{type:String,required:!0},size:{type:String,default:""}},setup(i){_(e=>({"327ee052":l.value}));const n=m(),t=i,u=c(()=>n.nuxtIcon.aliases&&n.nuxtIcon.aliases[t.name]?n.nuxtIcon.aliases[t.name].replace(/^i-/,""):t.name.replace(/^i-/,"")),l=c(()=>{var s,o;const e=(o=(s=n.nuxtIcon)==null?void 0:s.iconifyApiOptions)==null?void 0:o.url;if(e)try{new URL(e)}catch{console.warn("Nuxt IconCSS: Invalid custom Iconify API URL");return}return`url('${e||"https://api.iconify.design"}/${u.value.replace(":","/")}.svg')`}),r=c(()=>{var a,s,o;if(!t.size&&typeof((a=n.nuxtIcon)==null?void 0:a.size)=="boolean"&&!((s=n.nuxtIcon)!=null&&s.size))return;const e=t.size||((o=n.nuxtIcon)==null?void 0:o.size)||"1em";return String(Number(e))===e?`${e}px`:e});return(e,a)=>(f(),I("span",{style:x({width:r.value,height:r.value})},null,4))}});const z=S(d,[["__scopeId","data-v-5502e260"]]);export{z as default};
