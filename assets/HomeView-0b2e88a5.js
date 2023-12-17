import{_ as T,a as z,b as R}from"./icon_done-a6fb218d.js";import{d as j,r as E,u as g,a as f,o as d,c as D,w as K,T as U,b as a,e as o,f as v,g as _,_ as B,h as t,t as u,i as k,n as Y,j as O,p as J,k as M,F as P,l as $}from"./index-de95ffc3.js";import{_ as W}from"./TheInputForm.vue_vue_type_style_index_0_lang-e0488e84.js";const X="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALdJREFUSEvVldENgzAMRB+blE3KJC2ToE5SNoFR2KTopLhCoCSIJNDed5zz2T67ojCqwv8TIvg48lgSwXenE9yBN3A7WLoJaIHR4tcKBkAkKRBJ7SPYW3dfApv4tYLTCFJKpNhv4j4FxQlis//7PbhUgUz4AJ7OUC9Asy9kGVM5XZ8beufebASWpREsnfsfCpY9UHnUA0MWBSETXk+QY13rFjS+da1b0CXchOjBSV1ym/ijK2F3IjPl+jMZTcB64AAAAABJRU5ErkJggg==",Q="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAW1JREFUSEvFlYFNAzEQBDedQCWBSoBKEiqBToBKoBOiibyvfdvvGFCEpde/3+fd27vzeacrj92V8TVDcCdpL4k3z5ek9/L+KN+bfo4IbiS9FNCRUAjvC2Fjt0VwkHQs1gC8SrK3EPvBjm/bPNcMPYIEh6TZFCCAP4QzjX1NwIbPAoBsYl0P1p0Hk3sf/59yX03wVmI+8vw7GDP+Vs6/W9skwWNJ6sqgoyAJWEYlarMoFvVJYA+QSFK3Rk2AnfcYY4lAElCSqPgNgVVwTgiz56uDRvKQSfwI008UOKyZ7HMeUsEMgVX2yI3lEJ7nSeAK2irPETg5I7QuFM9XBE2Cws0ReCbZBN0kO0F1mV4CXxJaEgzOUigZoqxjS7zU8BLcEch/TbvOKqAN+Dwg3S2bkNStwupZW+Ww1+zyREMwanYADptjj6DukHgLib12q0YRzjBndPvXv104rtC8XHo5+NOVOegW80szl/48WsfyBLfTcBmRPd80AAAAAElFTkSuQmCC",L=j("deleteStore",()=>{const n=E([]);function i(l,s){n.value.push({entry:l,isDelete:s})}return{deletedEntries:n,addDeletedEntry:i}});function x(n,i){const l=g(),s=L();console.log("removeAndAddEntry",i,n),l.removeEntry(n),s.addDeletedEntry(n,i)}const q={key:0,class:"modal-mask"},H={class:"modal-wrapper"},Z={class:"modal-container"},G={class:"modal-body"},ee=f({__name:"TheInputModal",props:{isOpen:{type:Boolean,required:!0}},emits:["close"],setup(n,{emit:i}){const l=i;function s(){l("close")}return(y,r)=>(d(),D(U,{name:"modal"},{default:K(()=>[n.isOpen?(d(),a("div",q,[o("div",H,[o("div",Z,[o("div",G,[v(W,{onCloseaction:r[0]||(r[0]=e=>s())})])])])])):_("",!0)]),_:1}))}});const te=B(ee,[["__scopeId","data-v-aaf40992"]]),A=n=>(J("data-v-6a113c9d"),n=n(),M(),n),oe={class:"Entry-InputForm"},ne={class:"entry-title"},se={class:"info-box-1d"},re={key:0,class:"entry-text"},ie=A(()=>o("img",{src:X},null,-1)),de={key:1,class:"entry-text"},le=A(()=>o("img",{src:Q},null,-1)),ae={key:0,class:"entry-text"},ce={key:1},pe={class:"info-box-1d"},_e=A(()=>o("img",{src:T},null,-1)),Ae=[_e],ue=A(()=>o("img",{src:z},null,-1)),Ee=[ue],ye=A(()=>o("img",{src:R},null,-1)),me=[ye],ge=f({__name:"CompactEntry",props:{entry:{type:Object,required:!0}},emits:["collapse-others"],setup(n,{emit:i}){g();const l=n,s=i,y=E(null);E(!1);let r=E(!1),e=l.entry,b="rgba("+e.todoEntry.color.r.toString()+","+e.todoEntry.color.g.toString()+","+e.todoEntry.color.b.toString()+","+(e.todoEntry.color.a?e.todoEntry.color.a:255)+")";function I(){e.isExpanded||s("collapse-others"),e.isExpanded=!e.isExpanded}function N(p){console.log("Clicked Delete"),x(p,!0)}function w(p){console.log("editClicked"),r.value=!r.value}function V(p){console.log("Clicked Done"),x(p,!1)}function F(){r.value=!1}return(p,c)=>{var C,h,S;return d(),a("article",{ref_key:"entryBox",ref:y,class:Y(["entry-box","stretch-horizontally",t(e).isExpanded?"detail-height":"compact-height"]),style:O("--element-color: "+t(b)),onClick:I},[o("div",oe,[v(te,{"is-open":t(r),onClose:c[0]||(c[0]=m=>F())},null,8,["is-open"])]),o("div",null,[o("h1",ne,u((C=t(e))!=null&&C.todoEntry.title?(h=t(e))==null?void 0:h.todoEntry.title:""),1),o("section",se,[t(e).todoEntry.deadline!=null?(d(),a("span",re,[ie,k(" "+u((S=t(e))==null?void 0:S.todoEntry.deadline.toLocaleDateString()),1)])):_("",!0),t(e).todoEntry.expenditure!=null?(d(),a("span",de,[le,k(" "+u(t(e).todoEntry.expenditure.time+" "+t(e).todoEntry.expenditure.unit),1)])):_("",!0)]),t(e).isExpanded&&t(e).todoEntry.description!=null?(d(),a("p",ae,u(t(e).todoEntry.description),1)):_("",!0),t(e).isExpanded?(d(),a("span",ce,[o("nav",pe,[o("button",{onClick:c[1]||(c[1]=m=>N(t(e)))},Ae),o("button",{onClick:c[2]||(c[2]=m=>w(t(e)))},Ee),o("button",{onClick:c[3]||(c[3]=m=>V(t(e)))},me)])])):_("",!0)])],6)}}});const fe=B(ge,[["__scopeId","data-v-6a113c9d"]]),Se=f({__name:"HomeView",setup(n){const i=g();function l(){for(const s of i.entries)console.log(s.isExpanded),s.isExpanded&&(s.isExpanded=!1)}return(s,y)=>(d(),a("main",null,[(d(!0),a(P,null,$(t(i).entries.filter(r=>r.isVisible==!0).slice(0,5),r=>(d(),a("div",{key:r.todoEntry.title},[v(fe,{entry:r,style:"margin-bottom: 5px",onCollapseOthers:l},null,8,["entry"])]))),128))]))}});export{Se as default};
