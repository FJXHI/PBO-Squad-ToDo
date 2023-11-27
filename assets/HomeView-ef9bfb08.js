var b=Object.defineProperty;var k=(t,e,o)=>e in t?b(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o;var r=(t,e,o)=>(k(t,typeof e!="symbol"?e+"":e,o),o);import{d as w,r as m,o as c,c as d,a,t as p,u as n,b as B,e as u,n as x,f as N,p as T,g as D,_ as V,F,h as z,i as R}from"./index-c6c1f15f.js";const Y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALdJREFUSEvVldENgzAMRB+blE3KJC2ToE5SNoFR2KTopLhCoCSIJNDed5zz2T67ojCqwv8TIvg48lgSwXenE9yBN3A7WLoJaIHR4tcKBkAkKRBJ7SPYW3dfApv4tYLTCFJKpNhv4j4FxQlis//7PbhUgUz4AJ7OUC9Asy9kGVM5XZ8beufebASWpREsnfsfCpY9UHnUA0MWBSETXk+QY13rFjS+da1b0CXchOjBSV1ym/ijK2F3IjPl+jMZTcB64AAAAABJRU5ErkJggg==",j="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAW1JREFUSEvFlYFNAzEQBDedQCWBSoBKEiqBToBKoBOiibyvfdvvGFCEpde/3+fd27vzeacrj92V8TVDcCdpL4k3z5ek9/L+KN+bfo4IbiS9FNCRUAjvC2Fjt0VwkHQs1gC8SrK3EPvBjm/bPNcMPYIEh6TZFCCAP4QzjX1NwIbPAoBsYl0P1p0Hk3sf/59yX03wVmI+8vw7GDP+Vs6/W9skwWNJ6sqgoyAJWEYlarMoFvVJYA+QSFK3Rk2AnfcYY4lAElCSqPgNgVVwTgiz56uDRvKQSfwI008UOKyZ7HMeUsEMgVX2yI3lEJ7nSeAK2irPETg5I7QuFM9XBE2Cws0ReCbZBN0kO0F1mV4CXxJaEgzOUigZoqxjS7zU8BLcEch/TbvOKqAN+Dwg3S2bkNStwupZW+Ww1+zyREMwanYADptjj6DukHgLib12q0YRzjBndPvXv104rtC8XHo5+NOVOegW80szl/48WsfyBLfTcBmRPd80AAAAAElFTkSuQmCC",y=t=>(T("data-v-19d5cd8a"),t=t(),D(),t),I={class:"entry-title"},K={class:"info-box-1d"},J={key:0,class:"entry-text"},P=y(()=>a("img",{src:Y},null,-1)),M={key:1,class:"entry-text"},W=y(()=>a("img",{src:j},null,-1)),X={key:0,class:"entry-text"},L={key:1},O=y(()=>a("nav",{class:"info-box-1d"},[a("button",null,"1"),a("button",null,"2"),a("button",null,"3")],-1)),Q=[O],U=w({__name:"CompactEntry",props:{entry:{type:Object,required:!0}},setup(t){const e=t,o=m(null);let i=m(!1),s=e.entry,h=s.getCSSColorString();function g(){i.value=!i.value}return(l,v)=>{var E,S,C;return c(),d("article",{ref_key:"entryBox",ref:o,class:x(["rounded-box","stretch-horizontally",n(i)?"detail-height":"compact-height"]),style:N("--element-color: "+n(h)),onClick:v[0]||(v[0]=q=>g())},[a("div",null,[a("h1",I,p((E=n(s))==null?void 0:E.title),1),a("section",K,[n(s).deadline!=null?(c(),d("span",J,[P,B(" "+p((S=n(s))==null?void 0:S.deadline.toLocaleDateString()),1)])):u("",!0),n(s).expenditure!=null?(c(),d("span",M,[W,B(" "+p((C=n(s))==null?void 0:C.expenditure.toString()),1)])):u("",!0)]),n(i)?(c(),d("p",X,p(n(s).description),1)):u("",!0),n(i)?(c(),d("span",L,Q)):u("",!0)])],6)}}});const H=V(U,[["__scopeId","data-v-19d5cd8a"]]);class A{constructor(e,o,i,s,h,g){r(this,"title","ToDo Entry");r(this,"deadline");r(this,"expenditure");r(this,"description","");r(this,"color",[255,255,255,255]);r(this,"flatPriority",0);r(this,"priority",0);this.title=e,this.deadline=h,this.expenditure=g,this.description=o;for(let l=0;l<i.length;l++)this.color[l]=i[l];s!=null&&(this.flatPriority=s)}getCSSColorString(){return"rgba("+this.color[0]+","+this.color[1]+","+this.color[2]+","+this.color[3]+")"}}var _=(t=>(t.Year="years",t.Day="d",t.Month="m",t.Hour="h",t.Minute="min",t.Second="s",t))(_||{});class f{constructor(e,o){r(this,"time",0);r(this,"unit",_.Minute);this.time=e,this.unit=o}toString(){return this.time+" "+this.unit}}const $=w({__name:"HomeView",setup(t){let e=[];return e.push(new A("Test Entry 1","Test 1 Description",[255,59,48,255],void 0,new Date("2024-01-07"),new f(5,_.Hour))),e.push(new A("Test Entry 2","Test 2 Description",[50,173,230,255],void 0,void 0,new f(30,_.Minute))),e.push(new A("Test Entry 3","Test 3 Description",[162,132,94,255],void 0,new Date("2027-09-29"),void 0)),e.push(new A("Test Entry 4","Test 4 Description",[52,199,89,255],void 0,void 0,void 0)),e.push(new A("Test Entry 5","Test 5 Description",[255,204,0,255],void 0,void 0,void 0)),(o,i)=>(c(),d("main",null,[(c(!0),d(F,null,z(n(e),s=>(c(),d("div",null,[R(H,{entry:s},null,8,["entry"])]))),256))]))}});export{$ as default};
