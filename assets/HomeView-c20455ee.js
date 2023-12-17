import{_ as h,a as k,b as v}from"./icon_done-a6fb218d.js";import{d as C,r as x,o as s,c as n,a as o,t as c,u as e,b as m,e as A,n as B,f as b,p as N,g as V,_ as F,h as z,F as R,i as j,j as w}from"./index-f49315a7.js";const I="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALdJREFUSEvVldENgzAMRB+blE3KJC2ToE5SNoFR2KTopLhCoCSIJNDed5zz2T67ojCqwv8TIvg48lgSwXenE9yBN3A7WLoJaIHR4tcKBkAkKRBJ7SPYW3dfApv4tYLTCFJKpNhv4j4FxQlis//7PbhUgUz4AJ7OUC9Asy9kGVM5XZ8beufebASWpREsnfsfCpY9UHnUA0MWBSETXk+QY13rFjS+da1b0CXchOjBSV1ym/ijK2F3IjPl+jMZTcB64AAAAABJRU5ErkJggg==",K="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAW1JREFUSEvFlYFNAzEQBDedQCWBSoBKEiqBToBKoBOiibyvfdvvGFCEpde/3+fd27vzeacrj92V8TVDcCdpL4k3z5ek9/L+KN+bfo4IbiS9FNCRUAjvC2Fjt0VwkHQs1gC8SrK3EPvBjm/bPNcMPYIEh6TZFCCAP4QzjX1NwIbPAoBsYl0P1p0Hk3sf/59yX03wVmI+8vw7GDP+Vs6/W9skwWNJ6sqgoyAJWEYlarMoFvVJYA+QSFK3Rk2AnfcYY4lAElCSqPgNgVVwTgiz56uDRvKQSfwI008UOKyZ7HMeUsEMgVX2yI3lEJ7nSeAK2irPETg5I7QuFM9XBE2Cws0ReCbZBN0kO0F1mV4CXxJaEgzOUigZoqxjS7zU8BLcEch/TbvOKqAN+Dwg3S2bkNStwupZW+Ww1+zyREMwanYADptjj6DukHgLib12q0YRzjBndPvXv104rtC8XHo5+NOVOegW80szl/48WsfyBLfTcBmRPd80AAAAAElFTkSuQmCC",a=r=>(N("data-v-eadae70d"),r=r(),V(),r),T={class:"entry-title"},U={class:"info-box-1d"},Y={key:0,class:"entry-text"},J=a(()=>o("img",{src:I},null,-1)),O={key:1,class:"entry-text"},P=a(()=>o("img",{src:K},null,-1)),D={key:0,class:"entry-text"},W={key:1},X={class:"info-box-1d"},Q=a(()=>o("img",{src:h},null,-1)),L=[Q],M=a(()=>o("img",{src:k},null,-1)),q=[M],H=a(()=>o("img",{src:v},null,-1)),Z=[H],$=C({__name:"CompactEntry",props:{entry:{type:Object,required:!0}},emits:["collapse-others"],setup(r,{emit:l}){const p=r,i=l,_=x(null);let t=p.entry,S="rgba("+t.todoEntry.color.r.toString()+","+t.todoEntry.color.g.toString()+","+t.todoEntry.color.b.toString()+","+(t.todoEntry.color.a?t.todoEntry.color.a:255)+")";function f(){t.isExpanded||i("collapse-others"),t.isExpanded=!t.isExpanded}return(tt,d)=>{var E,g,y;return s(),n("article",{ref_key:"entryBox",ref:_,class:B(["entry-box","stretch-horizontally",e(t).isExpanded?"detail-height":"compact-height"]),style:b("--element-color: "+e(S)),onClick:f},[o("div",null,[o("h1",T,c((E=e(t))!=null&&E.todoEntry.title?(g=e(t))==null?void 0:g.todoEntry.title:""),1),o("section",U,[e(t).todoEntry.deadline!=null?(s(),n("span",Y,[J,m(" "+c((y=e(t))==null?void 0:y.todoEntry.deadline.toLocaleDateString()),1)])):A("",!0),e(t).todoEntry.expenditure!=null?(s(),n("span",O,[P,m(" "+c(e(t).todoEntry.expenditure.time+" "+e(t).todoEntry.expenditure.unit),1)])):A("",!0)]),e(t).isExpanded&&e(t).todoEntry.description!=null?(s(),n("p",D,c(e(t).todoEntry.description),1)):A("",!0),e(t).isExpanded?(s(),n("span",W,[o("nav",X,[o("button",{onClick:d[0]||(d[0]=u=>console.log("delClicked"))},L),o("button",{onClick:d[1]||(d[1]=u=>console.log("editClicked"))},q),o("button",{onClick:d[2]||(d[2]=u=>console.log("doneClicked"))},Z)])])):A("",!0)])],6)}}});const G=F($,[["__scopeId","data-v-eadae70d"]]),st=C({__name:"HomeView",setup(r){const l=z();function p(){for(const i of l.entries)console.log(i.isExpanded),i.isExpanded&&(i.isExpanded=!1)}return(i,_)=>(s(),n("main",null,[(s(!0),n(R,null,j(e(l).entries.filter(t=>t.isVisible==!0).slice(0,5),t=>(s(),n("div",{key:t.todoEntry.title},[w(G,{entry:t,style:"margin-bottom: 5px",onCollapseOthers:p},null,8,["entry"])]))),128))]))}});export{st as default};
