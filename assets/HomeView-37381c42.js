import{_ as L,a as J,b as te}from"./icon_edit-acee39d0.js";import{d as oe,r as g,o as Q,n as ne,g as se,a as ie,u as f,b as H,c as C,w as U,e as D,f as q,h as G,i as S,j as w,k as h,l as k,t as T,m as K,p as V,q as re,s as le,v as ae,_ as ce,F as de,x as ue,y as pe}from"./index-16700e99.js";/* empty css                                                     */const fe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALdJREFUSEvVldENgzAMRB+blE3KJC2ToE5SNoFR2KTopLhCoCSIJNDed5zz2T67ojCqwv8TIvg48lgSwXenE9yBN3A7WLoJaIHR4tcKBkAkKRBJ7SPYW3dfApv4tYLTCFJKpNhv4j4FxQlis//7PbhUgUz4AJ7OUC9Asy9kGVM5XZ8beufebASWpREsnfsfCpY9UHnUA0MWBSETXk+QY13rFjS+da1b0CXchOjBSV1ym/ijK2F3IjPl+jMZTcB64AAAAABJRU5ErkJggg==",he="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAW1JREFUSEvFlYFNAzEQBDedQCWBSoBKEiqBToBKoBOiibyvfdvvGFCEpde/3+fd27vzeacrj92V8TVDcCdpL4k3z5ek9/L+KN+bfo4IbiS9FNCRUAjvC2Fjt0VwkHQs1gC8SrK3EPvBjm/bPNcMPYIEh6TZFCCAP4QzjX1NwIbPAoBsYl0P1p0Hk3sf/59yX03wVmI+8vw7GDP+Vs6/W9skwWNJ6sqgoyAJWEYlarMoFvVJYA+QSFK3Rk2AnfcYY4lAElCSqPgNgVVwTgiz56uDRvKQSfwI008UOKyZ7HMeUsEMgVX2yI3lEJ7nSeAK2irPETg5I7QuFM9XBE2Cws0ReCbZBN0kO0F1mV4CXxJaEgzOUigZoqxjS7zU8BLcEch/TbvOKqAN+Dwg3S2bkNStwupZW+Ww1+zyREMwanYADptjj6DukHgLib12q0YRzjBndPvXv104rtC8XHo5+NOVOegW80szl/48WsfyBLfTcBmRPd80AAAAAElFTkSuQmCC";oe("deleteStore",()=>{const e=g([]);function n(i,s){e.value.push({entry:i,isDelete:s})}return{deletedEntries:e,addDeletedEntry:n}});function Z(e){return se()?(ie(e),!0):!1}function ee(e){return typeof e=="function"?e():f(e)}const ve=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const ye=Object.prototype.toString,ge=e=>ye.call(e)==="[object Object]",P=()=>{};function Ae(e){return e||H()}function Ee(e,n=!0,i){const s=Ae(i);s?Q(e,s):n?e():ne(e)}function B(e){var n;const i=ee(e);return(n=i==null?void 0:i.$el)!=null?n:i}const M=ve?window:void 0;function X(...e){let n,i,s,v;if(typeof e[0]=="string"||Array.isArray(e[0])?([i,s,v]=e,n=M):[n,i,s,v]=e,!n)return P;Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s]);const r=[],p=()=>{r.forEach(a=>a()),r.length=0},d=(a,t,c,u)=>(a.addEventListener(t,c,u),()=>a.removeEventListener(t,c,u)),_=U(()=>[B(n),ee(v)],([a,t])=>{if(p(),!a)return;const c=ge(t)?{...t}:t;r.push(...i.flatMap(u=>s.map(A=>d(a,u,A,c))))},{immediate:!0,flush:"post"}),o=()=>{_(),p()};return Z(o),o}function _e(){const e=g(!1);return H()&&Q(()=>{e.value=!0}),e}function me(e){const n=_e();return C(()=>(n.value,!!e()))}function xe(e,n,i={}){const{window:s=M,...v}=i;let r;const p=me(()=>s&&"ResizeObserver"in s),d=()=>{r&&(r.disconnect(),r=void 0)},_=C(()=>Array.isArray(e)?e.map(t=>B(t)):[B(e)]),o=U(_,t=>{if(d(),p.value&&s){r=new ResizeObserver(n);for(const c of t)c&&r.observe(c,v)}},{immediate:!0,flush:"post",deep:!0}),a=()=>{d(),o()};return Z(a),{isSupported:p,stop:a}}function W(e,n={width:0,height:0},i={}){const{window:s=M,box:v="content-box"}=i,r=C(()=>{var t,c;return(c=(t=B(e))==null?void 0:t.namespaceURI)==null?void 0:c.includes("svg")}),p=g(n.width),d=g(n.height),{stop:_}=xe(e,([t])=>{const c=v==="border-box"?t.borderBoxSize:v==="content-box"?t.contentBoxSize:t.devicePixelContentBoxSize;if(s&&r.value){const u=B(e);if(u){const A=s.getComputedStyle(u);p.value=Number.parseFloat(A.width),d.value=Number.parseFloat(A.height)}}else if(c){const u=Array.isArray(c)?c:[c];p.value=u.reduce((A,{inlineSize:y})=>A+y,0),d.value=u.reduce((A,{blockSize:y})=>A+y,0)}else p.value=t.contentRect.width,d.value=t.contentRect.height},i);Ee(()=>{const t=B(e);t&&(p.value="offsetWidth"in t?t.offsetWidth:n.width,d.value="offsetHeight"in t?t.offsetHeight:n.height)});const o=U(()=>B(e),t=>{p.value=t?n.width:0,d.value=t?n.height:0});function a(){_(),o()}return{width:p,height:d,stop:a}}function be(e,n={}){const{threshold:i=50,onSwipe:s,onSwipeEnd:v,onSwipeStart:r,passive:p=!0,window:d=M}=n,_=D({x:0,y:0}),o=D({x:0,y:0}),a=C(()=>_.x-o.x),t=C(()=>_.y-o.y),{max:c,abs:u}=Math,A=C(()=>c(u(a.value),u(t.value))>=i),y=g(!1),O=C(()=>A.value?u(a.value)>u(t.value)?a.value>0?"left":"right":t.value>0?"up":"down":"none"),Y=l=>[l.touches[0].clientX,l.touches[0].clientY],$=(l,x)=>{_.x=l,_.y=x},z=(l,x)=>{o.x=l,o.y=x};let b;const m=Se(d==null?void 0:d.document);p?b=m?{passive:!0}:{capture:!1}:b=m?{passive:!1,capture:!0}:{capture:!0};const E=l=>{y.value&&(v==null||v(l,O.value)),y.value=!1},N=[X(e,"touchstart",l=>{if(l.touches.length!==1)return;b.capture&&!b.passive&&l.preventDefault();const[x,R]=Y(l);$(x,R),z(x,R),r==null||r(l)},b),X(e,"touchmove",l=>{if(l.touches.length!==1)return;const[x,R]=Y(l);z(x,R),!y.value&&A.value&&(y.value=!0),y.value&&(s==null||s(l))},b),X(e,["touchend","touchcancel"],E,b)];return{isPassiveEventSupported:m,isSwiping:y,direction:O,coordsStart:_,coordsEnd:o,lengthX:a,lengthY:t,stop:()=>N.forEach(l=>l())}}function Se(e){if(!e)return!1;let n=!1;const i={get passive(){return n=!0,!1}};return e.addEventListener("x",P,i),e.removeEventListener("x",P),n}const j=e=>(le("data-v-b5025727"),e=e(),ae(),e),we={class:"info-box-1d"},Ce={key:0,class:"entry-text"},ke=j(()=>h("img",{src:fe},null,-1)),Be={key:1,class:"entry-text"},ze=j(()=>h("img",{src:he},null,-1)),Ne={key:0,style:"color: #000000; padding: 0 0 10px 0; position: relative;",class:"text-base"},je={key:1},Oe={class:"info-box-1d"},Re=j(()=>h("img",{style:{},src:L},null,-1)),Te=[Re],Ve=j(()=>h("img",{src:te},null,-1)),We=[Ve],Fe=j(()=>h("img",{src:J},null,-1)),Me=[Fe],F=40,Ye=q({__name:"CompactEntry",props:{entry:{type:Object,required:!0}},emits:["collapse-others"],setup(e,{emit:n}){const i=G(),s=e,v=g(null),r=W(v);g(!1);const p=g(null);W(p);const d=g(null),_={width:W(d).width,height:W(d).height};g(!1);let o=s.entry,a="rgba("+o.todoEntry.color.r.toString()+","+o.todoEntry.color.g.toString()+","+o.todoEntry.color.b.toString()+","+(o.todoEntry.color.a?o.todoEntry.color.a:255)+")";function t(){o.isExpanded||c(),o.isExpanded=!o.isExpanded}function c(){for(const m of i.entries)console.log(m.isExpanded),m.isExpanded&&(m.isExpanded=!1)}const u=g(null),A=C(()=>{var m;return(m=u.value)==null?void 0:m.offsetWidth}),y=g("0"),O=g(1);g(0),g(0),g(0);const{direction:Y,isSwiping:$,lengthX:z,lengthY:b}=be(v,{passive:!0,onSwipe(m){if(A.value&&Math.abs(b.value)<50){const E=Math.abs(z.value);E/A.value*100>F?y.value=`${-Math.sign(z.value)*F}%`:y.value=`${-Math.sign(z.value)*E}px`}else y.value="0",O.value=1},onSwipeEnd(m,E){y.value="0"}});return(m,E)=>{var N,I,l;return S(),w("span",{ref_key:"container",ref:u,class:"horizontal-box stretch-horizontally",style:k(`position: relative; min-height: 16vh; overflow: hidden; background-color: ${f(a)}; `)},[h("article",{ref_key:"entryBox",ref:v,class:re(["entry-box",f(o).isExpanded?"detail-height":"compact-height"]),style:k(`position: relative; width: 100%; left: ${y.value}; margin: 0; transition: all 200ms ease-out;`),onClick:E[3]||(E[3]=x=>t())},[h("aside",{class:"delete-box restrict-size",style:k(`position: absolute; display: flex; width: ${F}%; height: 100%; left: 0; transform: translateX(-100%)`)},[h("img",{alt:"",class:"icon no-padding center",src:L,style:k(`max-width: ${f(r).height.value/2}px`)},null,4)],4),h("aside",{class:"tick-box restrict-size",style:k(`position: absolute; display: flex; width: ${F}%; height: 100%; right: 0; transform: translateX(100%)`)},[h("img",{alt:"",class:"icon no-padding center",src:J,style:k(`max-width: ${f(r).height.value/2}px`)},null,4)],4),h("div",{ref_key:"content",ref:d,style:k(`width: ${_.width}px; padding: 10px;`)},[h("h1",{ref_key:"title",ref:p,class:"text-2xl font-medium"},T((N=f(o))!=null&&N.todoEntry.title?(I=f(o))==null?void 0:I.todoEntry.title:""),513),h("section",we,[f(o).todoEntry.deadline!=null?(S(),w("span",Ce,[ke,K(" "+T((l=f(o))==null?void 0:l.todoEntry.deadline.toLocaleDateString()),1)])):V("",!0),f(o).todoEntry.expenditure!=null?(S(),w("span",Be,[ze,K(" "+T(f(o).todoEntry.expenditure.time+" "+f(o).todoEntry.expenditure.unit),1)])):V("",!0)]),f(o).isExpanded&&f(o).todoEntry.description!=null?(S(),w("p",Ne,T(f(o).todoEntry.description),1)):V("",!0),f(o).isExpanded?(S(),w("span",je,[h("nav",Oe,[h("button",{onClick:E[0]||(E[0]=x=>console.log("delClicked")),style:{display:"flex","justify-content":"center","align-items":"center"}},Te),h("button",{onClick:E[1]||(E[1]=x=>console.log("editClicked")),style:{display:"flex","justify-content":"center","align-items":"center"}},We),h("button",{onClick:E[2]||(E[2]=x=>console.log("doneClicked")),style:{display:"flex","justify-content":"center","align-items":"center"}},Me)])])):V("",!0)],4)],6)],4)}}});const Ie=ce(Ye,[["__scopeId","data-v-b5025727"]]),Xe={style:"position: relative;"},De=q({__name:"HomeView",setup(e){const n=G();function i(){for(const s of n.entries)console.log(s.isExpanded),s.isExpanded&&(s.isExpanded=!1)}return(s,v)=>(S(),w("div",Xe,[(S(!0),w(de,null,ue(f(n).entries.filter(r=>r.isVisible==!0).slice(0,5),r=>(S(),w("div",{key:r.todoEntry.title},[pe(Ie,{entry:r,style:"margin-bottom: 5px",onCollapseOthers:i},null,8,["entry"])]))),128))]))}});export{De as default};