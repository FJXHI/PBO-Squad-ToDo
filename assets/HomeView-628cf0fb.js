import{_ as v,a as x,b as S,c as b}from"./icon_done-867bdff9.js";import{d as f,r as y,o as n,c as r,a as o,t as c,u as e,b as h,e as d,n as E,f as B,p as N,g as V,_ as j,h as I,F as J,i as R,j as T}from"./index-ff890b96.js";const U="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALdJREFUSEvVldENgzAMRB+blE3KJC2ToE5SNoFR2KTopLhCoCSIJNDed5zz2T67ojCqwv8TIvg48lgSwXenE9yBN3A7WLoJaIHR4tcKBkAkKRBJ7SPYW3dfApv4tYLTCFJKpNhv4j4FxQlis//7PbhUgUz4AJ7OUC9Asy9kGVM5XZ8beufebASWpREsnfsfCpY9UHnUA0MWBSETXk+QY13rFjS+da1b0CXchOjBSV1ym/ijK2F3IjPl+jMZTcB64AAAAABJRU5ErkJggg==",a=i=>(N("data-v-c01a546f"),i=i(),V(),i),z={class:"entry-title"},F={class:"info-box-1d"},K={key:0,class:"entry-text"},L=a(()=>o("img",{src:U},null,-1)),Y={key:1,class:"entry-text"},$=a(()=>o("img",{src:v},null,-1)),w={key:0,class:"entry-text"},D={key:1},X={class:"info-box-1d"},M=a(()=>o("img",{src:x},null,-1)),O=[M],W=a(()=>o("img",{src:S},null,-1)),H=[W],P=a(()=>o("img",{src:b},null,-1)),Q=[P],q=f({__name:"CompactEntry",props:{entry:{type:Object,required:!0}},setup(i){const _=i,u=y(null);let l=y(!1),t=_.entry.todoEntry,C="rgba("+t.color.r.toString()+","+t.color.g.toString()+","+t.color.b.toString()+","+(t.color.a?t.color.a:255)+")";function k(){l.value=!l.value}return(Z,s)=>{var m,A,g;return n(),r("article",{ref_key:"entryBox",ref:u,class:E(["entry-box","stretch-horizontally",e(l)?"detail-height":"compact-height"]),style:B("--element-color: "+e(C)),onClick:s[3]||(s[3]=p=>k())},[o("div",null,[o("h1",z,c((m=e(t))!=null&&m.title?(A=e(t))==null?void 0:A.title:""),1),o("section",F,[e(t).deadline!=null?(n(),r("span",K,[L,h(" "+c((g=e(t))==null?void 0:g.deadline.toLocaleDateString()),1)])):d("",!0),e(t).expenditure!=null?(n(),r("span",Y,[$,h(" "+c(e(t).expenditure.time+" "+e(t).expenditure.unit),1)])):d("",!0)]),e(l)&&e(t).description!=null?(n(),r("p",w,c(e(t).description),1)):d("",!0),e(l)?(n(),r("span",D,[o("nav",X,[o("button",{onClick:s[0]||(s[0]=p=>console.log("delClicked"))},O),o("button",{onClick:s[1]||(s[1]=p=>console.log("editClicked"))},H),o("button",{onClick:s[2]||(s[2]=p=>console.log("doneClicked"))},Q)])])):d("",!0)])],6)}}});const G=j(q,[["__scopeId","data-v-c01a546f"]]),ot=f({__name:"HomeView",setup(i){const _=I();return(u,l)=>(n(),r("main",null,[(n(!0),r(J,null,R(e(_).entries.filter(t=>t.isVisible==!0).slice(0,5),t=>(n(),r("div",{key:t.todoEntry.title},[T(G,{entry:t,style:"margin-bottom: 5px"},null,8,["entry"])]))),128))]))}});export{ot as default};