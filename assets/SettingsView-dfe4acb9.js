import{e as p,r as v,f as u,j as b,k as s,u as a,D as x,E as C,L as k,M as g,N as c,O as r,P as d,z as f,A as h,_ as S}from"./index-f757a742.js";const n=l=>(f("data-v-e4ac2595"),l=l(),h(),l),m={class:"settings"},T={class:"line"},w=n(()=>s("span",{class:"text"},"Remove all entries",-1)),V={class:"line"},E=n(()=>s("span",{class:"text"},"DEBUG: Revert to debug entries",-1)),B={class:"line"},D=n(()=>s("span",{class:"text"},"DEBUG: Clear Local Storage",-1)),R=n(()=>s("div",{class:"line"},[s("span",{class:"text"},"Text"),s("button",{class:"btn"},"Test"),s("button",{class:"btn"},"Test")],-1)),y={class:"line"},I=n(()=>s("span",{class:"text"},"Tags",-1)),L=g('<div class="line" data-v-e4ac2595><span class="text" data-v-e4ac2595>Switch</span><label class="switch" data-v-e4ac2595><input type="checkbox" data-v-e4ac2595><span class="slider round" data-v-e4ac2595></span></label></div>',1),N=p({__name:"SettingsView",setup(l){var o=v("#000000");function _(){var i=o.value;console.log("The Color is: "+i),alert("The Color is: "+i)}return(i,t)=>(u(),b("div",m,[s("div",T,[w,s("button",{class:"btn",onClick:t[0]||(t[0]=(...e)=>a(c)&&a(c)(...e))},"Clear")]),s("div",V,[E,s("button",{class:"btn",onClick:t[1]||(t[1]=(...e)=>a(r)&&a(r)(...e))},"Revert")]),s("div",B,[D,s("button",{class:"btn",onClick:t[2]||(t[2]=(...e)=>a(d)&&a(d)(...e))},"Revert")]),R,s("div",y,[I,x(s("input",{class:"btn",type:"color",id:"colorPicker","onUpdate:modelValue":t[3]||(t[3]=e=>k(o)?o.value=e:o=e)},null,512),[[C,a(o)]]),s("button",{onClick:t[4]||(t[4]=e=>_()),class:"btn"},"Pick Color")]),L]))}});const U=S(N,[["__scopeId","data-v-e4ac2595"]]);export{U as default};
