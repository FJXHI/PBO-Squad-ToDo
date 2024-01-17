import{_ as te,a as ne,b as re}from"./icon_edit-34456b79.js";import{o as se,n as ce,g as ue,a as de,u as r,b as oe,c as k,r as y,w as U,d as Z,e as J,f as w,h as pe,i as R,j as E,k as f,l as D,m as T,T as fe,_ as K,p as ve,q as ie,s as M,t as V,v as ee,x as he,y as N,z as _e,A as me,F as ye,B as xe}from"./index-e5eebbde.js";import{_ as ge}from"./InputForm.vue_vue_type_style_index_0_lang-8c64f526.js";const be="/PBO-Squad-ToDo/assets/icon_deadline.png",we="/PBO-Squad-ToDo/assets/icon_timespan.png";function ae(e){return ue()?(de(e),!0):!1}function le(e){return typeof e=="function"?e():r(e)}const Ee=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Se=Object.prototype.toString,ke=e=>Se.call(e)==="[object Object]",H=()=>{};function Ce(e){return e||oe()}function $e(e,s=!0,a){const i=Ce(a);i?se(e,i):s?e():ce(e)}function z(e){var s;const a=le(e);return(s=a==null?void 0:a.$el)!=null?s:a}const X=Ee?window:void 0;function F(...e){let s,a,i,v;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,i,v]=e,s=X):[s,a,i,v]=e,!s)return H;Array.isArray(a)||(a=[a]),Array.isArray(i)||(i=[i]);const l=[],c=()=>{l.forEach(u=>u()),l.length=0},h=(u,n,d,p)=>(u.addEventListener(n,d,p),()=>u.removeEventListener(n,d,p)),_=U(()=>[z(s),le(v)],([u,n])=>{if(c(),!u)return;const d=ke(n)?{...n}:n;l.push(...a.flatMap(p=>i.map(x=>h(u,p,x,d))))},{immediate:!0,flush:"post"}),t=()=>{_(),c()};return ae(t),t}function Be(){const e=y(!1);return oe()&&se(()=>{e.value=!0}),e}function Oe(e){const s=Be();return k(()=>(s.value,!!e()))}function Me(e,s,a={}){const{window:i=X,...v}=a;let l;const c=Oe(()=>i&&"ResizeObserver"in i),h=()=>{l&&(l.disconnect(),l=void 0)},_=k(()=>Array.isArray(e)?e.map(n=>z(n)):[z(e)]),t=U(_,n=>{if(h(),c.value&&i){l=new ResizeObserver(s);for(const d of n)d&&l.observe(d,v)}},{immediate:!0,flush:"post",deep:!0}),u=()=>{h(),t()};return ae(u),{isSupported:c,stop:u}}function Y(e,s={width:0,height:0},a={}){const{window:i=X,box:v="content-box"}=a,l=k(()=>{var n,d;return(d=(n=z(e))==null?void 0:n.namespaceURI)==null?void 0:d.includes("svg")}),c=y(s.width),h=y(s.height),{stop:_}=Me(e,([n])=>{const d=v==="border-box"?n.borderBoxSize:v==="content-box"?n.contentBoxSize:n.devicePixelContentBoxSize;if(i&&l.value){const p=z(e);if(p){const x=i.getComputedStyle(p);c.value=Number.parseFloat(x.width),h.value=Number.parseFloat(x.height)}}else if(d){const p=Array.isArray(d)?d:[d];c.value=p.reduce((x,{inlineSize:g})=>x+g,0),h.value=p.reduce((x,{blockSize:g})=>x+g,0)}else c.value=n.contentRect.width,h.value=n.contentRect.height},a);$e(()=>{const n=z(e);n&&(c.value="offsetWidth"in n?n.offsetWidth:s.width,h.value="offsetHeight"in n?n.offsetHeight:s.height)});const t=U(()=>z(e),n=>{c.value=n?s.width:0,h.value=n?s.height:0});function u(){_(),t()}return{width:c,height:h,stop:u}}function ze(e,s={}){const{threshold:a=50,onSwipe:i,onSwipeEnd:v,onSwipeStart:l,passive:c=!0,window:h=X}=s,_=Z({x:0,y:0}),t=Z({x:0,y:0}),u=k(()=>_.x-t.x),n=k(()=>_.y-t.y),{max:d,abs:p}=Math,x=k(()=>d(p(u.value),p(n.value))>=a),g=y(!1),I=k(()=>x.value?p(u.value)>p(n.value)?u.value>0?"left":"right":n.value>0?"up":"down":"none"),C=o=>[o.touches[0].clientX,o.touches[0].clientY],$=(o,b)=>{_.x=o,_.y=b},j=(o,b)=>{t.x=o,t.y=b};let S;const W=De(h==null?void 0:h.document);c?S=W?{passive:!0}:{capture:!1}:S=W?{passive:!1,capture:!0}:{capture:!0};const B=o=>{g.value&&(v==null||v(o,I.value)),g.value=!1},q=[F(e,"touchstart",o=>{if(o.touches.length!==1)return;S.capture&&!S.passive&&o.preventDefault();const[b,O]=C(o);$(b,O),j(b,O),l==null||l(o)},S),F(e,"touchmove",o=>{if(o.touches.length!==1)return;const[b,O]=C(o);j(b,O),!g.value&&x.value&&(g.value=!0),g.value&&(i==null||i(o))},S),F(e,["touchend","touchcancel"],B,S)];return{isPassiveEventSupported:W,isSwiping:g,direction:I,coordsStart:_,coordsEnd:t,lengthX:u,lengthY:n,stop:()=>q.forEach(o=>o())}}function De(e){if(!e)return!1;let s=!1;const a={get passive(){return s=!0,!1}};return e.addEventListener("x",H,a),e.removeEventListener("x",H),s}const Ie={key:0,class:"modal-mask"},Te={class:"modal-wrapper"},Ae={class:"modal-container"},je={class:"modal-body"},We=J({__name:"InputModal",props:{isOpen:{type:Boolean,required:!0},entry:{type:Object}},emits:["close"],setup(e,{emit:s}){const a=s;function i(){a("close")}return(v,l)=>(w(),pe(fe,{name:"modal"},{default:R(()=>[e.isOpen?(w(),E("div",Ie,[f("div",Te,[f("div",Ae,[f("div",je,[D(ge,{onCloseaction:l[0]||(l[0]=c=>i()),entry:e.entry},null,8,["entry"])])])])])):T("",!0)]),_:1}))}});const Le=K(We,[["__scopeId","data-v-73a56e70"]]);const Ve={},Ne={class:"btn"};function Pe(e,s){return w(),E("button",Ne,[ve(e.$slots,"default",{},void 0,!0)])}const G=K(Ve,[["render",Pe],["__scopeId","data-v-f5de9fc5"]]),A=e=>(_e("data-v-a0b91159"),e=e(),me(),e),Re={class:"info-box-1d"},Xe={key:0,class:"entry-text"},qe=A(()=>f("img",{alt:"Deadline",src:be},null,-1)),Fe={key:1,class:"entry-text"},Ye=A(()=>f("img",{alt:"Expenditure",src:we},null,-1)),Ge={key:0,style:"color: #000000; padding: 0 0 10px 0; position: relative;",class:"text-base"},He={key:1},Ue={class:"info-box-1d"},Je=A(()=>f("img",{alt:"Delete",style:{},src:te},null,-1)),Ke=A(()=>f("img",{alt:"Edit",src:re},null,-1)),Qe=A(()=>f("img",{alt:"Done",src:ne},null,-1)),P=40,Ze=J({__name:"CompactEntry",props:{entry:{type:Object,required:!0}},setup(e){const s=ie(),a=e,i=y(null),v=Y(i),l=y(null),c=y(null),h={width:Y(c).width,height:Y(c).height};let _=y(!1),t=a.entry;function u(){t.metadata.isExpanded||g(),t.metadata.isExpanded=!t.metadata.isExpanded}function n(m){console.log("Clicked Delete"),N(m,!0)}function d(m){console.log("editClicked"),_.value=!_.value}function p(m){console.log("Clicked Done"),N(m,!1)}function x(){_.value=!1}function g(){for(const m of s.entries)m.metadata.isExpanded&&(m.metadata.isExpanded=!1)}const I=y(null),C=k(()=>{var m;return(m=I.value)==null?void 0:m.offsetWidth}),$=y("0"),j=y(1);y(0),y(0),y(0);const{direction:S,isSwiping:W,lengthX:B,lengthY:q}=ze(i,{passive:!0,onSwipe(m){if(C.value&&Math.abs(q.value)<50){const o=Math.abs(B.value);o/C.value*100>P?$.value=`${-Math.sign(B.value)*P}%`:$.value=`${-Math.sign(B.value)*o}px`}else $.value="0",j.value=1},onSwipeEnd(m,o){C.value&&Math.abs(B.value)/C.value>=.5?B.value<0?N(t,!0):N(t,!1):$.value="0"}});return(m,o)=>{var b,O,Q;return w(),E("span",{ref_key:"container",ref:I,class:"horizontal-box stretch-horizontally",style:M(`position: relative; min-height: 16vh; overflow: hidden; background-color: ${r(t).color}; `)},[f("article",{ref_key:"entryBox",ref:i,class:he(["entry-box",r(t).metadata.isExpanded?"detail-height":"compact-height"]),style:M(`position: relative; width: 100%; left: ${$.value}; margin: 0; transition: all 200ms ease-out;`),onClick:o[3]||(o[3]=L=>u())},[f("aside",{class:"delete-box restrict-size",style:M(`position: absolute; display: flex; width: ${P}%; height: 100%; left: 0; transform: translateX(-100%)`)},[f("img",{alt:"",class:"icon no-padding center",src:te,style:M(`max-width: ${r(v).height.value/2}px`)},null,4)],4),f("aside",{class:"tick-box restrict-size",style:M(`position: absolute; display: flex; width: ${P}%; height: 100%; right: 0; transform: translateX(100%)`)},[f("img",{alt:"",class:"icon no-padding center",src:ne,style:M(`max-width: ${r(v).height.value/2}px`)},null,4)],4),f("div",{ref_key:"content",ref:c,style:M(`width: ${h.width}px; padding: 10px;`)},[f("h1",{ref_key:"title",ref:l,class:"text-2xl font-medium"},V((b=r(t))!=null&&b.title?(O=r(t))==null?void 0:O.title:""),513),f("section",Re,[r(t).deadline!=null?(w(),E("span",Xe,[qe,ee(" "+V((Q=r(t))==null?void 0:Q.deadline.toLocaleDateString()),1)])):T("",!0),r(t).expenditure!=null?(w(),E("span",Fe,[Ye,ee(" "+V(r(t).expenditure.time+" "+r(t).expenditure.unit),1)])):T("",!0)]),r(t)&&r(t).description!=null?(w(),E("p",Ge,V(r(t).description),1)):T("",!0),r(t).metadata.isExpanded?(w(),E("span",He,[f("nav",Ue,[D(G,{onClick:o[0]||(o[0]=L=>n(r(t))),class:"flex justify-center"},{default:R(()=>[Je]),_:1}),D(G,{onClick:o[1]||(o[1]=L=>d(r(t))),class:"flex justify-center"},{default:R(()=>[Ke]),_:1}),D(G,{onClick:o[2]||(o[2]=L=>p(r(t))),class:"flex justify-center"},{default:R(()=>[Qe]),_:1})])])):T("",!0)],4)],6),D(Le,{"is-open":r(_),onClose:o[4]||(o[4]=L=>x()),entry:r(t)},null,8,["is-open","entry"])],4)}}});const et=K(Ze,[["__scopeId","data-v-a0b91159"]]),tt={style:"position: relative;"},it=J({__name:"HomeView",setup(e){const s=ie();function a(){for(const i of s.entries)console.log(i.metadata.isExpanded),i.metadata.isExpanded&&(i.metadata.isExpanded=!1)}return(i,v)=>(w(),E("div",tt,[(w(!0),E(ye,null,xe(r(s).entries.filter(l=>l.metadata.isVisible==!0).slice(0,5),l=>(w(),E("div",{key:l.title},[D(et,{entry:l,style:"margin-bottom: 5px",onCollapseOthers:a},null,8,["entry"])]))),128))]))}});export{it as default};