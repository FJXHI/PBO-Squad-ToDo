import{d as C,r as E,o as i,c as r,a as o,t as a,u as e,b as m,e as p,n as b,f as T,p as B,g as k,_ as f,F as h,h as D,i as x}from"./index-9ecebb76.js";import{u as N}from"./entry_store-2fcf7f67.js";const V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALdJREFUSEvVldENgzAMRB+blE3KJC2ToE5SNoFR2KTopLhCoCSIJNDed5zz2T67ojCqwv8TIvg48lgSwXenE9yBN3A7WLoJaIHR4tcKBkAkKRBJ7SPYW3dfApv4tYLTCFJKpNhv4j4FxQlis//7PbhUgUz4AJ7OUC9Asy9kGVM5XZ8beufebASWpREsnfsfCpY9UHnUA0MWBSETXk+QY13rFjS+da1b0CXchOjBSV1ym/ijK2F3IjPl+jMZTcB64AAAAABJRU5ErkJggg==",w="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAW1JREFUSEvFlYFNAzEQBDedQCWBSoBKEiqBToBKoBOiibyvfdvvGFCEpde/3+fd27vzeacrj92V8TVDcCdpL4k3z5ek9/L+KN+bfo4IbiS9FNCRUAjvC2Fjt0VwkHQs1gC8SrK3EPvBjm/bPNcMPYIEh6TZFCCAP4QzjX1NwIbPAoBsYl0P1p0Hk3sf/59yX03wVmI+8vw7GDP+Vs6/W9skwWNJ6sqgoyAJWEYlarMoFvVJYA+QSFK3Rk2AnfcYY4lAElCSqPgNgVVwTgiz56uDRvKQSfwI008UOKyZ7HMeUsEMgVX2yI3lEJ7nSeAK2irPETg5I7QuFM9XBE2Cws0ReCbZBN0kO0F1mV4CXxJaEgzOUigZoqxjS7zU8BLcEch/TbvOKqAN+Dwg3S2bkNStwupZW+Ww1+zyREMwanYADptjj6DukHgLib12q0YRzjBndPvXv104rtC8XHo5+NOVOegW80szl/48WsfyBLfTcBmRPd80AAAAAElFTkSuQmCC",F="/PBO-Squad-ToDo/assets/icon_delete-ec75e756.svg",z="/PBO-Squad-ToDo/assets/icon_edit-f3f51206.svg",R="/PBO-Squad-ToDo/assets/icon_done-01edd534.svg",l=c=>(B("data-v-903ae859"),c=c(),k(),c),j={class:"entry-title"},I={class:"info-box-1d"},K={key:0,class:"entry-text"},P=l(()=>o("img",{src:V},null,-1)),U={key:1,class:"entry-text"},Y=l(()=>o("img",{src:w},null,-1)),J={key:0,class:"entry-text"},O={key:1},W={class:"info-box-1d"},X=l(()=>o("img",{src:F},null,-1)),Q=[X],q=l(()=>o("img",{src:z},null,-1)),L=[q],M=l(()=>o("img",{src:R},null,-1)),H=[M],Z=C({__name:"CompactEntry",props:{entry:{type:Object,required:!0}},setup(c){const s=c,g=E(null);let d=E(!1),t=s.entry,S="rgba("+t.color.r.toString()+","+t.color.g.toString()+","+t.color.b.toString()+","+(t.color.a?t.color.a:255)+")";function v(){d.value=!d.value}return($,n)=>{var _,u,y;return i(),r("article",{ref_key:"entryBox",ref:g,class:b(["entry-box","stretch-horizontally",e(d)?"detail-height":"compact-height"]),style:T("--element-color: "+e(S)),onClick:n[3]||(n[3]=A=>v())},[o("div",null,[o("h1",j,a((_=e(t))!=null&&_.title?(u=e(t))==null?void 0:u.title:""),1),o("section",I,[e(t).deadline!=null?(i(),r("span",K,[P,m(" "+a((y=e(t))==null?void 0:y.deadline.toLocaleDateString()),1)])):p("",!0),e(t).expenditure!=null?(i(),r("span",U,[Y,m(" "+a(e(t).expenditure.time+" "+e(t).expenditure.unit),1)])):p("",!0)]),e(d)&&e(t).description!=null?(i(),r("p",J,a(e(t).description),1)):p("",!0),e(d)?(i(),r("span",O,[o("nav",W,[o("button",{onClick:n[0]||(n[0]=A=>console.log("delClicked"))},Q),o("button",{onClick:n[1]||(n[1]=A=>console.log("editClicked"))},L),o("button",{onClick:n[2]||(n[2]=A=>console.log("doneClicked"))},H)])])):p("",!0)])],6)}}});const G=f(Z,[["__scopeId","data-v-903ae859"]]),ot=C({__name:"HomeView",setup(c){const s=N();return s.addEntry({title:"Test Entry 1",description:"Test 1 Description",color:{r:255,g:59,b:48},deadline:new Date("2024-01-07"),expenditure:{time:5,unit:"h"}}),s.addEntry({title:"Test Entry 2",description:"Test 2 Description",color:{r:50,g:173,b:230},expenditure:{time:30,unit:"min"}}),s.addEntry({title:"Test Entry 3",description:"Test 3 Description",color:{r:162,g:132,b:94},deadline:new Date("2027-09-29")}),s.addEntry({title:"Test Entry 4",description:"Test 4 Description",color:{r:52,g:199,b:89}}),s.addEntry({title:"Test Entry 5",description:"Test 5 Description",color:{r:255,g:204,b:0}}),s.addEntry({title:"Test Entry 6",description:"Test 6 Description",color:{r:255,g:59,b:48}}),s.addEntry({title:"Test Entry 7",description:"Test 7 Description",color:{r:50,g:173,b:230}}),s.addEntry({title:"Test Entry 8",description:"Test 8 Description",color:{r:162,g:132,b:94}}),(g,d)=>(i(),r("main",null,[(i(!0),r(h,null,D(e(s).entries.slice(0,5),t=>(i(),r("div",{key:t.title},[x(G,{entry:t,style:"margin-bottom: 5px"},null,8,["entry"])]))),128))]))}});export{ot as default};