import{u as a}from"./index.0cc95bc3.js";import{_ as s,c,a as t,t as i,o as d}from"./entry.c515a726.js";const g={setup(){a({title:"Dashboard"});const e={morning:"⛅ Good morning",afternoon:"🌞 Good afternoon",evening:"🌘 Good evening"},o=new Date().getHours();return{greeting:o<12?e.morning:o<18?e.afternoon:e.evening}}},l={class:"container"},_={class:"flex flex-col mb-6"},f=t("div",{class:"flex items-center overflow-x-auto whitespace-nowrap"},[t("a",{href:"#",class:"text-gray-600 dark:text-gray-200 hover:text-blue-600"}," Dashboard ")],-1),x={class:"text-xl lg:text-2xl font-medium text-gray-700 mt-1 dark:text-gray-300"};function m(e,o,n,r,u,h){return d(),c("div",l,[t("div",_,[f,t("h4",x,i(r.greeting)+"! Mark Paul",1)])])}const b=s(g,[["render",m]]);export{b as default};