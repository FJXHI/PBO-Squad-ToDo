import{_ as te,a as oe,b as ae}from"./icon_edit-acee39d0.js";import{d as ce,r as m,u as P,o as ne,n as de,g as ue,a as pe,b as a,c as se,e as w,w as U,f as G,h as K,i as b,j as fe,k as ve,T as he,l as S,m as p,p as L,q as O,_ as ie,s as C,t as R,v as Z,x as ye,y as ge,z as me,F as _e,A as Ae}from"./index-e8f5a3a4.js";import{_ as Ee}from"./TheInputForm.vue_vue_type_style_index_0_lang-290f76b2.js";const xe="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAALdJREFUSEvVldENgzAMRB+blE3KJC2ToE5SNoFR2KTopLhCoCSIJNDed5zz2T67ojCqwv8TIvg48lgSwXenE9yBN3A7WLoJaIHR4tcKBkAkKRBJ7SPYW3dfApv4tYLTCFJKpNhv4j4FxQlis//7PbhUgUz4AJ7OUC9Asy9kGVM5XZ8beufebASWpREsnfsfCpY9UHnUA0MWBSETXk+QY13rFjS+da1b0CXchOjBSV1ym/ijK2F3IjPl+jMZTcB64AAAAABJRU5ErkJggg==",be="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAW1JREFUSEvFlYFNAzEQBDedQCWBSoBKEiqBToBKoBOiibyvfdvvGFCEpde/3+fd27vzeacrj92V8TVDcCdpL4k3z5ek9/L+KN+bfo4IbiS9FNCRUAjvC2Fjt0VwkHQs1gC8SrK3EPvBjm/bPNcMPYIEh6TZFCCAP4QzjX1NwIbPAoBsYl0P1p0Hk3sf/59yX03wVmI+8vw7GDP+Vs6/W9skwWNJ6sqgoyAJWEYlarMoFvVJYA+QSFK3Rk2AnfcYY4lAElCSqPgNgVVwTgiz56uDRvKQSfwI008UOKyZ7HMeUsEMgVX2yI3lEJ7nSeAK2irPETg5I7QuFM9XBE2Cws0ReCbZBN0kO0F1mV4CXxJaEgzOUigZoqxjS7zU8BLcEch/TbvOKqAN+Dwg3S2bkNStwupZW+Ww1+zyREMwanYADptjj6DukHgLib12q0YRzjBndPvXv104rtC8XHo5+NOVOegW80szl/48WsfyBLfTcBmRPd80AAAAAElFTkSuQmCC",Se=ce("deleteStore",()=>{const e=m([]);function o(i,s){e.value.push({entry:i,isDelete:s})}return{deletedEntries:e,addDeletedEntry:o}});function ee(e,o){const i=P(),s=Se();console.log("removeAndAddEntry",o,e),i.removeEntry(e),s.addDeletedEntry(e,o)}function re(e){return ue()?(pe(e),!0):!1}function le(e){return typeof e=="function"?e():a(e)}const we=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ce=Object.prototype.toString,ke=e=>Ce.call(e)==="[object Object]",X=()=>{};function Be(e){return e||se()}function ze(e,o=!0,i){const s=Be(i);s?ne(e,s):o?e():de(e)}function k(e){var o;const i=le(e);return(o=i==null?void 0:i.$el)!=null?o:i}const F=we?window:void 0;function D(...e){let o,i,s,h;if(typeof e[0]=="string"||Array.isArray(e[0])?([i,s,h]=e,o=F):[o,i,s,h]=e,!o)return X;Array.isArray(i)||(i=[i]),Array.isArray(s)||(s=[s]);const r=[],f=()=>{r.forEach(t=>t()),r.length=0},v=(t,n,d,g)=>(t.addEventListener(n,d,g),()=>t.removeEventListener(n,d,g)),_=U(()=>[k(o),le(h)],([t,n])=>{if(f(),!t)return;const d=ke(n)?{...n}:n;r.push(...i.flatMap(g=>s.map(A=>v(t,g,A,d))))},{immediate:!0,flush:"post"}),y=()=>{_(),f()};return re(y),y}function Oe(){const e=m(!1);return se()&&ne(()=>{e.value=!0}),e}function Te(e){const o=Oe();return w(()=>(o.value,!!e()))}function je(e,o,i={}){const{window:s=F,...h}=i;let r;const f=Te(()=>s&&"ResizeObserver"in s),v=()=>{r&&(r.disconnect(),r=void 0)},_=w(()=>Array.isArray(e)?e.map(n=>k(n)):[k(e)]),y=U(_,n=>{if(v(),f.value&&s){r=new ResizeObserver(o);for(const d of n)d&&r.observe(d,h)}},{immediate:!0,flush:"post",deep:!0}),t=()=>{v(),y()};return re(t),{isSupported:f,stop:t}}function V(e,o={width:0,height:0},i={}){const{window:s=F,box:h="content-box"}=i,r=w(()=>{var n,d;return(d=(n=k(e))==null?void 0:n.namespaceURI)==null?void 0:d.includes("svg")}),f=m(o.width),v=m(o.height),{stop:_}=je(e,([n])=>{const d=h==="border-box"?n.borderBoxSize:h==="content-box"?n.contentBoxSize:n.devicePixelContentBoxSize;if(s&&r.value){const g=k(e);if(g){const A=s.getComputedStyle(g);f.value=Number.parseFloat(A.width),v.value=Number.parseFloat(A.height)}}else if(d){const g=Array.isArray(d)?d:[d];f.value=g.reduce((A,{inlineSize:x})=>A+x,0),v.value=g.reduce((A,{blockSize:x})=>A+x,0)}else f.value=n.contentRect.width,v.value=n.contentRect.height},i);ze(()=>{const n=k(e);n&&(f.value="offsetWidth"in n?n.offsetWidth:o.width,v.value="offsetHeight"in n?n.offsetHeight:o.height)});const y=U(()=>k(e),n=>{f.value=n?o.width:0,v.value=n?o.height:0});function t(){_(),y()}return{width:f,height:v,stop:t}}function Ne(e,o={}){const{threshold:i=50,onSwipe:s,onSwipeEnd:h,onSwipeStart:r,passive:f=!0,window:v=F}=o,_=G({x:0,y:0}),y=G({x:0,y:0}),t=w(()=>_.x-y.x),n=w(()=>_.y-y.y),{max:d,abs:g}=Math,A=w(()=>d(g(t.value),g(n.value))>=i),x=m(!1),j=w(()=>A.value?g(t.value)>g(n.value)?t.value>0?"left":"right":n.value>0?"up":"down":"none"),N=c=>[c.touches[0].clientX,c.touches[0].clientY],$=(c,l)=>{_.x=c,_.y=l},B=(c,l)=>{y.x=c,y.y=l};let E;const z=$e(v==null?void 0:v.document);f?E=z?{passive:!0}:{capture:!1}:E=z?{passive:!1,capture:!0}:{capture:!0};const J=c=>{x.value&&(h==null||h(c,j.value)),x.value=!1},Q=[D(e,"touchstart",c=>{if(c.touches.length!==1)return;E.capture&&!E.passive&&c.preventDefault();const[l,u]=N(c);$(l,u),B(l,u),r==null||r(c)},E),D(e,"touchmove",c=>{if(c.touches.length!==1)return;const[l,u]=N(c);B(l,u),!x.value&&A.value&&(x.value=!0),x.value&&(s==null||s(c))},E),D(e,["touchend","touchcancel"],J,E)];return{isPassiveEventSupported:z,isSwiping:x,direction:j,coordsStart:_,coordsEnd:y,lengthX:t,lengthY:n,stop:()=>Q.forEach(c=>c())}}function $e(e){if(!e)return!1;let o=!1;const i={get passive(){return o=!0,!1}};return e.addEventListener("x",X,i),e.removeEventListener("x",X),o}const Ie={key:0,class:"modal-mask"},Me={class:"modal-wrapper"},Re={class:"modal-container"},Ve={class:"modal-body"},We=K({__name:"TheInputModal",props:{isOpen:{type:Boolean,required:!0},entry:{type:Object}},emits:["close"],setup(e,{emit:o}){const i=o;function s(){i("close")}return(h,r)=>(b(),fe(he,{name:"modal"},{default:ve(()=>[e.isOpen?(b(),S("div",Ie,[p("div",Me,[p("div",Re,[p("div",Ve,[L(Ee,{onCloseaction:r[0]||(r[0]=f=>s()),entry:e.entry},null,8,["entry"])])])])])):O("",!0)]),_:1}))}});const Fe=ie(We,[["__scopeId","data-v-5c52f3aa"]]),T=e=>(ge("data-v-b438e447"),e=e(),me(),e),Ye={class:"info-box-1d"},De={key:0,class:"entry-text"},Xe=T(()=>p("img",{src:xe},null,-1)),Pe={key:1,class:"entry-text"},Ue=T(()=>p("img",{src:be},null,-1)),Ke={key:0,style:"color: #000000; padding: 0 0 10px 0; position: relative;",class:"text-base"},Le={key:1,class:"info-box-1d"},Je=T(()=>p("img",{style:{},src:te},null,-1)),Qe=[Je],qe=T(()=>p("img",{src:ae},null,-1)),He=[qe],Ge=T(()=>p("img",{src:oe},null,-1)),Ze=[Ge],W=40,et=K({__name:"CompactEntry",props:{entry:{type:Object,required:!0}},emits:["collapse-others"],setup(e,{emit:o}){const i=P(),s=e,h=m(null),r=V(h);m(!1);const f=m(null);V(f);const v=m(null),_={width:V(v).width,height:V(v).height};let y=m(!1),t=s.entry,n="rgba("+t.todoEntry.color.r.toString()+","+t.todoEntry.color.g.toString()+","+t.todoEntry.color.b.toString()+","+(t.todoEntry.color.a?t.todoEntry.color.a:255)+")";function d(){t.isExpanded||N(),t.isExpanded=!t.isExpanded}function g(l){console.log("Clicked Delete"),ee(l,!0)}function A(l){console.log("editClicked"),y.value=!y.value}function x(l){console.log("Clicked Done"),ee(l,!1)}function j(){y.value=!1}function N(){for(const l of i.entries)console.log(l.isExpanded),l.isExpanded&&(l.isExpanded=!1)}const $=m(null),B=w(()=>{var l;return(l=$.value)==null?void 0:l.offsetWidth}),E=m("0"),z=m(1);m(0),m(0),m(0);const{direction:J,isSwiping:Q,lengthX:I,lengthY:c}=Ne(h,{passive:!0,onSwipe(l){if(B.value&&Math.abs(c.value)<50){const u=Math.abs(I.value);u/B.value*100>W?E.value=`${-Math.sign(I.value)*W}%`:E.value=`${-Math.sign(I.value)*u}px`}else E.value="0",z.value=1},onSwipeEnd(l,u){E.value="0"}});return(l,u)=>{var Y,q,H;return b(),S("span",{ref_key:"container",ref:$,class:"horizontal-box stretch-horizontally",style:C(`position: relative; min-height: 16vh; overflow: hidden; background-color: ${a(n)}; `)},[p("article",{ref_key:"entryBox",ref:h,class:ye(["entry-box",a(t).isExpanded?"detail-height":"compact-height"]),style:C(`position: relative; width: 100%; left: ${E.value}; margin: 0; transition: all 200ms ease-out;`),onClick:u[3]||(u[3]=M=>d())},[p("aside",{class:"delete-box restrict-size",style:C(`position: absolute; display: flex; width: ${W}%; height: 100%; left: 0; transform: translateX(-100%)`)},[p("img",{alt:"",class:"icon no-padding center",src:te,style:C(`max-width: ${a(r).height.value/2}px`)},null,4)],4),p("aside",{class:"tick-box restrict-size",style:C(`position: absolute; display: flex; width: ${W}%; height: 100%; right: 0; transform: translateX(100%)`)},[p("img",{alt:"",class:"icon no-padding center",src:oe,style:C(`max-width: ${a(r).height.value/2}px`)},null,4)],4),p("div",{ref_key:"content",ref:v,style:C(`width: ${_.width}px; padding: 10px;`)},[p("h1",{ref_key:"title",ref:f,class:"text-2xl font-medium"},R((Y=a(t))!=null&&Y.todoEntry.title?(q=a(t))==null?void 0:q.todoEntry.title:""),513),p("section",Ye,[a(t).todoEntry.deadline!=null?(b(),S("span",De,[Xe,Z(" "+R((H=a(t))==null?void 0:H.todoEntry.deadline.toLocaleDateString()),1)])):O("",!0),a(t).todoEntry.expenditure!=null?(b(),S("span",Pe,[Ue,Z(" "+R(a(t).todoEntry.expenditure.time+" "+a(t).todoEntry.expenditure.unit),1)])):O("",!0)]),a(t).isExpanded&&a(t).todoEntry.description!=null?(b(),S("p",Ke,R(a(t).todoEntry.description),1)):O("",!0),a(t).isExpanded?(b(),S("span",Le,[p("button",{onClick:u[0]||(u[0]=M=>g(a(t))),class:"flex justify-center"},Qe),p("button",{onClick:u[1]||(u[1]=M=>A(a(t))),class:"flex justify-center"},He),p("button",{onClick:u[2]||(u[2]=M=>x(a(t))),class:"flex justify-center"},Ze)])):O("",!0)],4)],6),L(Fe,{"is-open":a(y),onClose:u[4]||(u[4]=M=>j()),entry:a(t)},null,8,["is-open","entry"])],4)}}});const tt=ie(et,[["__scopeId","data-v-b438e447"]]),ot={style:"position: relative;"},rt=K({__name:"HomeView",setup(e){const o=P();function i(){for(const s of o.entries)console.log(s.isExpanded),s.isExpanded&&(s.isExpanded=!1)}return(s,h)=>(b(),S("div",ot,[(b(!0),S(_e,null,Ae(a(o).entries.filter(r=>r.isVisible==!0).slice(0,5),r=>(b(),S("div",{key:r.todoEntry.title},[L(tt,{entry:r,style:"margin-bottom: 5px",onCollapseOthers:i},null,8,["entry"])]))),128))]))}});export{rt as default};
