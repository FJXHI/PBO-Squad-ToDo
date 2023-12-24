import{_ as $,b as q,a as B}from"./icon_edit-acee39d0.js";import{f as k,h as f,r as x,i as s,j as r,k as n,t as _,u as e,p as c,q as I,l as w,s as z,v as D,_ as N,F as j,x as F,y as L}from"./index-16700e99.js";const u=d=>(z("data-v-4240d8d0"),d=d(),D(),d),M={class:"entry-title"},O={class:"info-box-1d"},T={key:0,class:"entry-text"},A={key:1,class:"entry-text"},G={key:2,class:"entry-text"},H={key:0,class:"entry-text"},J={key:1},K={class:"info-btn"},P=u(()=>n("img",{src:$},null,-1)),Q=[P],R=u(()=>n("img",{src:q},null,-1)),U=[R],W=u(()=>n("img",{src:B},null,-1)),X=[W],Y=k({__name:"SquareEntry",props:{entry:{type:Object,required:!0}},setup(d){const a=f(),p=d,m=x(null);let o=x(!1),t=p.entry,h="rgba("+t.todoEntry.color.r.toString()+","+t.todoEntry.color.g.toString()+","+t.todoEntry.color.b.toString()+","+(t.todoEntry.color.a?t.todoEntry.color.a:255)+")";function C(){o.value=!o.value}function b(l){console.log("delClicked"),console.log(l.todoEntry),a.removeEntry(l)}function S(){console.log("editClicked")}function V(l){console.log("doneClicked"),console.log(l.todoEntry),a.removeEntry(l)}return(l,i)=>{var E,g,v;return s(),r("article",{ref_key:"entryBox",ref:m,class:I(["entry-box","stretch-horizontally",e(o)?"detail-height":"compact-height"]),style:w("--element-color: "+e(h)),onClick:i[3]||(i[3]=y=>C())},[n("div",null,[n("h1",M,_((E=e(t))!=null&&E.todoEntry.title?(g=e(t))==null?void 0:g.todoEntry.title:""),1),n("section",O,[e(t).todoEntry.deadline!=null?(s(),r("span",T,_((v=e(t))==null?void 0:v.todoEntry.deadline.toLocaleDateString()),1)):c("",!0),e(t).todoEntry.deadline!=null&&e(t).todoEntry.expenditure!=null?(s(),r("span",A," - ")):c("",!0),e(t).todoEntry.expenditure!=null?(s(),r("span",G,_(e(t).todoEntry.expenditure.time+" "+e(t).todoEntry.expenditure.unit),1)):c("",!0)]),e(o)&&e(t).todoEntry.description!=null?(s(),r("p",H,_(e(t).todoEntry.description),1)):c("",!0),e(o)?(s(),r("span",J,[n("nav",K,[n("button",{onClick:i[0]||(i[0]=y=>b(e(t)))},Q),n("button",{onClick:i[1]||(i[1]=y=>S())},U),n("button",{onClick:i[2]||(i[2]=y=>V(e(t)))},X)])])):c("",!0)])],6)}}});const Z=N(Y,[["__scopeId","data-v-4240d8d0"]]),tt={class:"more"},nt=k({__name:"MoreView",setup(d){const a=f();return(p,m)=>(s(),r("main",tt,[(s(!0),r(j,null,F(e(a).entries.filter(o=>o.isVisible==!0).slice(0,30),o=>(s(),r("div",{key:o.todoEntry.title},[L(Z,{entry:o,style:"margin-bottom: 5px"},null,8,["entry"])]))),128))]))}});export{nt as default};
