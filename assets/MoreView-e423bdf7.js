import{_ as $,b as q,a as B}from"./icon_edit-acee39d0.js";import{h as x,u as h,r as v,i as s,l as r,m as n,t as _,b as e,q as a,x as D,s as z,y as I,z as w,_ as N,F,A as L,p as M}from"./index-349311f8.js";const u=l=>(I("data-v-014bf17f"),l=l(),w(),l),j={class:"entry-title"},A={class:"info-box-1d"},O={key:0,class:"entry-text"},T={key:1,class:"entry-text"},G={key:2,class:"entry-text"},H={key:0,class:"entry-text"},J={key:1},K={class:"info-btn"},P=u(()=>n("img",{alt:"Delete",src:$},null,-1)),Q=[P],R=u(()=>n("img",{alt:"Edit",src:q},null,-1)),U=[R],W=u(()=>n("img",{alt:"Done",src:B},null,-1)),X=[W],Y=x({__name:"SquareEntry",props:{entry:{type:Object,required:!0}},setup(l){const c=h(),p=l,m=v(null);let o=v(!1),t=p.entry,k="rgba("+t.todoEntry.color.r.toString()+","+t.todoEntry.color.g.toString()+","+t.todoEntry.color.b.toString()+","+(t.todoEntry.color.a?t.todoEntry.color.a:255)+")";function b(){o.value=!o.value}function C(d){console.log("delClicked"),console.log(d.todoEntry),c.removeEntry(d)}function S(){console.log("editClicked")}function V(d){console.log("doneClicked"),console.log(d.todoEntry),c.removeEntry(d)}return(d,i)=>{var E,f,g;return s(),r("article",{ref_key:"entryBox",ref:m,class:D(["entry-box","stretch-horizontally",e(o)?"detail-height":"compact-height"]),style:z("--element-color: "+e(k)),onClick:i[3]||(i[3]=y=>b())},[n("div",null,[n("h1",j,_((E=e(t))!=null&&E.todoEntry.title?(f=e(t))==null?void 0:f.todoEntry.title:""),1),n("section",A,[e(t).todoEntry.deadline!=null?(s(),r("span",O,_((g=e(t))==null?void 0:g.todoEntry.deadline.toLocaleDateString()),1)):a("",!0),e(t).todoEntry.deadline!=null&&e(t).todoEntry.expenditure!=null?(s(),r("span",T," - ")):a("",!0),e(t).todoEntry.expenditure!=null?(s(),r("span",G,_(e(t).todoEntry.expenditure.time+" "+e(t).todoEntry.expenditure.unit),1)):a("",!0)]),e(o)&&e(t).todoEntry.description!=null?(s(),r("p",H,_(e(t).todoEntry.description),1)):a("",!0),e(o)?(s(),r("span",J,[n("nav",K,[n("button",{onClick:i[0]||(i[0]=y=>C(e(t)))},Q),n("button",{onClick:i[1]||(i[1]=y=>S())},U),n("button",{onClick:i[2]||(i[2]=y=>V(e(t)))},X)])])):a("",!0)])],6)}}});const Z=N(Y,[["__scopeId","data-v-014bf17f"]]),tt={class:"more"},nt=x({__name:"MoreView",setup(l){const c=h();return(p,m)=>(s(),r("main",tt,[(s(!0),r(F,null,L(e(c).entries.filter(o=>o.isVisible==!0).slice(0,30),o=>(s(),r("div",{key:o.todoEntry.title},[M(Z,{entry:o,style:"margin-bottom: 5px"},null,8,["entry"])]))),128))]))}});export{nt as default};
