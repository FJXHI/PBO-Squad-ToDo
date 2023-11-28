import{d as m,r as A,o as r,c as i,a as s,t as d,u as e,b as _,e as l,n as C,f as T,p as v,g as h,_ as B,h as f,F as x,i as k,j as N}from"./index-35bb162e.js";const D="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALdJREFUSEvVldENgzAMRB+blE3KJC2ToE5SNoFR2KTopLhCoCSIJNDed5zz2T67ojCqwv8TIvg48lgSwXenE9yBN3A7WLoJaIHR4tcKBkAkKRBJ7SPYW3dfApv4tYLTCFJKpNhv4j4FxQlis//7PbhUgUz4AJ7OUC9Asy9kGVM5XZ8beufebASWpREsnfsfCpY9UHnUA0MWBSETXk+QY13rFjS+da1b0CXchOjBSV1ym/ijK2F3IjPl+jMZTcB64AAAAABJRU5ErkJggg==",V="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAW1JREFUSEvFlYFNAzEQBDedQCWBSoBKEiqBToBKoBOiibyvfdvvGFCEpde/3+fd27vzeacrj92V8TVDcCdpL4k3z5ek9/L+KN+bfo4IbiS9FNCRUAjvC2Fjt0VwkHQs1gC8SrK3EPvBjm/bPNcMPYIEh6TZFCCAP4QzjX1NwIbPAoBsYl0P1p0Hk3sf/59yX03wVmI+8vw7GDP+Vs6/W9skwWNJ6sqgoyAJWEYlarMoFvVJYA+QSFK3Rk2AnfcYY4lAElCSqPgNgVVwTgiz56uDRvKQSfwI008UOKyZ7HMeUsEMgVX2yI3lEJ7nSeAK2irPETg5I7QuFM9XBE2Cws0ReCbZBN0kO0F1mV4CXxJaEgzOUigZoqxjS7zU8BLcEch/TbvOKqAN+Dwg3S2bkNStwupZW+Ww1+zyREMwanYADptjj6DukHgLib12q0YRzjBndPvXv104rtC8XHo5+NOVOegW80szl/48WsfyBLfTcBmRPd80AAAAAElFTkSuQmCC",p=n=>(v("data-v-7e9955d2"),n=n(),h(),n),w={class:"entry-title"},F={class:"info-box-1d"},z={key:0,class:"entry-text"},R=p(()=>s("img",{src:D},null,-1)),j={key:1,class:"entry-text"},I=p(()=>s("img",{src:V},null,-1)),K={key:0,class:"entry-text"},U={key:1},Y=p(()=>s("nav",{class:"info-box-1d"},[s("button",null,"1"),s("button",null,"2"),s("button",null,"3")],-1)),J=[Y],P=m({__name:"CompactEntry",props:{entry:{type:Object,required:!0}},setup(n){const o=n,a=A(null);let c=A(!1),t=o.entry,b="rgba("+t.color.r.toString()+","+t.color.g.toString()+","+t.color.b.toString()+","+(t.color.a?t.color.a:255)+")";function S(){c.value=!c.value}return(O,u)=>{var g,y,E;return r(),i("article",{ref_key:"entryBox",ref:a,class:C(["entry-box","stretch-horizontally",e(c)?"detail-height":"compact-height"]),style:T("--element-color: "+e(b)),onClick:u[0]||(u[0]=Q=>S())},[s("div",null,[s("h1",w,d((g=e(t))!=null&&g.title?(y=e(t))==null?void 0:y.title:""),1),s("section",F,[e(t).deadline!=null?(r(),i("span",z,[R,_(" "+d((E=e(t))==null?void 0:E.deadline.toLocaleDateString()),1)])):l("",!0),e(t).expenditure!=null?(r(),i("span",j,[I,_(" "+d(e(t).expenditure.time+" "+e(t).expenditure.unit),1)])):l("",!0)]),e(c)&&e(t).description!=null?(r(),i("p",K,d(e(t).description),1)):l("",!0),e(c)?(r(),i("span",U,J)):l("",!0)])],6)}}});const W=B(P,[["__scopeId","data-v-7e9955d2"]]),X=f("todoEntries",()=>{const n=A([]);function o(a){n.value.push(a)}return{entries:n,addEntry:o}}),M=m({__name:"HomeView",setup(n){const o=X();return o.addEntry({title:"Test Entry 1",description:"Test 1 Description",color:{r:255,g:59,b:48},deadline:new Date("2024-01-07"),expenditure:{time:5,unit:"h"}}),o.addEntry({title:"Test Entry 2",description:"Test 2 Description",color:{r:50,g:173,b:230},expenditure:{time:30,unit:"min"}}),o.addEntry({title:"Test Entry 3",description:"Test 3 Description",color:{r:162,g:132,b:94},deadline:new Date("2027-09-29")}),o.addEntry({title:"Test Entry 4",description:"Test 4 Description",color:{r:52,g:199,b:89}}),o.addEntry({title:"Test Entry 5",description:"Test 5 Description",color:{r:255,g:204,b:0}}),o.addEntry({title:"Test Entry 6",description:"Test 6 Description",color:{r:255,g:59,b:48}}),o.addEntry({title:"Test Entry 7",description:"Test 7 Description",color:{r:50,g:173,b:230}}),o.addEntry({title:"Test Entry 8",description:"Test 8 Description",color:{r:162,g:132,b:94}}),(a,c)=>(r(),i("main",null,[(r(!0),i(x,null,k(e(o).entries.slice(0,5),t=>(r(),i("div",null,[N(W,{entry:t,style:"margin-bottom: 5px"},null,8,["entry"])]))),256))]))}});export{M as default};
