import{h as c,r as d,i as p,l as b,m as a,C as r,D as v,b as _,H as u,I as l,y as f,z as x,_ as h}from"./index-37b03470.js";const C=s=>(f("data-v-0743f6eb"),s=s(),x(),s),T={class:"settings"},k=l('<div class="line" data-v-0743f6eb><span class="text" data-v-0743f6eb>Text</span><button class="btn" data-v-0743f6eb>Test</button></div><div class="line" data-v-0743f6eb><span class="text" data-v-0743f6eb>Text</span><button class="btn" data-v-0743f6eb>Test</button><button class="btn" data-v-0743f6eb>Test</button></div>',2),m={class:"line"},S=C(()=>a("span",{class:"text"},"Tags",-1)),g=l('<div class="line" data-v-0743f6eb><span class="text" data-v-0743f6eb>Switch</span><label class="switch" data-v-0743f6eb><input type="checkbox" data-v-0743f6eb><span class="slider round" data-v-0743f6eb></span></label></div>',1),w=c({__name:"SettingsView",setup(s){var t=d("#000000");function i(){var o=t.value;console.log("The Color is: "+o),alert("The Color is: "+o)}return(o,e)=>(p(),b("div",T,[k,a("div",m,[S,r(a("input",{class:"btn",type:"color",id:"colorPicker","onUpdate:modelValue":e[0]||(e[0]=n=>u(t)?t.value=n:t=n)},null,512),[[v,_(t)]]),a("button",{onClick:e[1]||(e[1]=n=>i()),class:"btn"},"Pick Color")]),g]))}});const y=h(w,[["__scopeId","data-v-0743f6eb"]]);export{y as default};