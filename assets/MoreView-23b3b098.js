import{_ as v,a as k,b}from"./icon_done-a6fb218d.js";import{d as x,r as g,o as n,c as s,a as o,t as a,u as e,e as d,n as S,f as C,p as V,g as $,_ as B,h as q,F as I,i as w,j as z}from"./index-254b8378.js";const y=i=>(V("data-v-e1989f0e"),i=i(),$(),i),D={class:"entry-title"},N={class:"info-box-1d"},j={key:0,class:"entry-text"},F={key:1,class:"entry-text"},L={key:2,class:"entry-text"},M={key:0,class:"entry-text"},O={key:1},T={class:"info-btn"},A=y(()=>o("img",{src:v},null,-1)),G=[A],H=y(()=>o("img",{src:k},null,-1)),J=[H],K=y(()=>o("img",{src:b},null,-1)),P=[K],Q=x({__name:"SquareEntry",props:{entry:{type:Object,required:!0}},setup(i){const c=i,u=g(null);let l=g(!1),t=c.entry,f="rgba("+t.todoEntry.color.r.toString()+","+t.todoEntry.color.g.toString()+","+t.todoEntry.color.b.toString()+","+(t.todoEntry.color.a?t.todoEntry.color.a:255)+")";function h(){l.value=!l.value}return(W,r)=>{var p,m,E;return n(),s("article",{ref_key:"entryBox",ref:u,class:S(["entry-box","stretch-horizontally",e(l)?"detail-height":"compact-height"]),style:C("--element-color: "+e(f)),onClick:r[3]||(r[3]=_=>h())},[o("div",null,[o("h1",D,a((p=e(t))!=null&&p.todoEntry.title?(m=e(t))==null?void 0:m.todoEntry.title:""),1),o("section",N,[e(t).todoEntry.deadline!=null?(n(),s("span",j,a((E=e(t))==null?void 0:E.todoEntry.deadline.toLocaleDateString()),1)):d("",!0),e(t).todoEntry.deadline!=null&&e(t).todoEntry.expenditure!=null?(n(),s("span",F," - ")):d("",!0),e(t).todoEntry.expenditure!=null?(n(),s("span",L,a(e(t).todoEntry.expenditure.time+" "+e(t).todoEntry.expenditure.unit),1)):d("",!0)]),e(l)&&e(t).todoEntry.description!=null?(n(),s("p",M,a(e(t).todoEntry.description),1)):d("",!0),e(l)?(n(),s("span",O,[o("nav",T,[o("button",{onClick:r[0]||(r[0]=_=>console.log("delClicked"))},G),o("button",{onClick:r[1]||(r[1]=_=>console.log("editClicked"))},J),o("button",{onClick:r[2]||(r[2]=_=>console.log("doneClicked"))},P)])])):d("",!0)])],6)}}});const R=B(Q,[["__scopeId","data-v-e1989f0e"]]),U={class:"more"},Z=x({__name:"MoreView",setup(i){const c=q();return(u,l)=>(n(),s("main",U,[(n(!0),s(I,null,w(e(c).entries.filter(t=>t.isVisible==!0).slice(0,30),t=>(n(),s("div",{key:t.todoEntry.title},[z(R,{entry:t,style:"margin-bottom: 5px"},null,8,["entry"])]))),128))]))}});export{Z as default};
