import{_ as B,b as V,a as $}from"./icon_edit-34456b79.js";import{e as h,q as g,r as k,f as n,j as i,k as s,t as _,u as e,m as c,x as q,s as D,z,A as I,_ as w,F as N,B as j,l as F}from"./index-321a5500.js";const p=l=>(z("data-v-b439e1e2"),l=l(),I(),l),L={class:"entry-title"},M={class:"info-box-1d"},A={key:0,class:"entry-text"},O={key:1,class:"entry-text"},T={key:2,class:"entry-text"},G={key:0,class:"entry-text"},H={key:1},J={class:"info-btn"},K=p(()=>s("img",{alt:"Delete",src:B},null,-1)),P=[K],Q=p(()=>s("img",{alt:"Edit",src:V},null,-1)),R=[Q],U=p(()=>s("img",{alt:"Done",src:$},null,-1)),W=[U],X=h({__name:"SquareEntry",props:{entry:{type:Object,required:!0}},setup(l){const d=g(),m=l,y=k(null);let o=k(!1),t=m.entry;function b(){o.value=!o.value}function C(a){console.log("delClicked"),console.log(a),d.removeEntry(a)}function E(){console.log("editClicked")}function S(a){console.log("doneClicked"),console.log(a),d.removeEntry(a)}return(a,r)=>{var v,x,f;return n(),i("article",{ref_key:"entryBox",ref:y,class:q(["entry-box","stretch-horizontally",e(o)?"detail-height":"compact-height"]),style:D("--element-color: "+e(t).color),onClick:r[3]||(r[3]=u=>b())},[s("div",null,[s("h1",L,_((v=e(t))!=null&&v.title?(x=e(t))==null?void 0:x.title:""),1),s("section",M,[e(t).deadline!=null?(n(),i("span",A,_((f=e(t))==null?void 0:f.deadline.toLocaleDateString()),1)):c("",!0),e(t).deadline!=null&&e(t).expenditure!=null?(n(),i("span",O," - ")):c("",!0),e(t).expenditure!=null?(n(),i("span",T,_(e(t).expenditure.time+" "+e(t).expenditure.unit),1)):c("",!0)]),e(o)&&e(t).description!=null?(n(),i("p",G,_(e(t).description),1)):c("",!0),e(o)?(n(),i("span",H,[s("nav",J,[s("button",{onClick:r[0]||(r[0]=u=>C(e(t)))},P),s("button",{onClick:r[1]||(r[1]=u=>E())},R),s("button",{onClick:r[2]||(r[2]=u=>S(e(t)))},W)])])):c("",!0)])],6)}}});const Y=w(X,[["__scopeId","data-v-b439e1e2"]]),Z={class:"more"},oe=h({__name:"MoreView",setup(l){const d=g();return(m,y)=>(n(),i("main",Z,[(n(!0),i(N,null,j(e(d).entries.filter(o=>o.metadata.isVisible==!0).slice(0,30),o=>(n(),i("div",{key:o.title},[F(Y,{entry:o,style:"margin-bottom: 5px"},null,8,["entry"])]))),128))]))}});export{oe as default};
