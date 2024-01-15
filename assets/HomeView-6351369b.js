import{d as q,a as re,r as ce,_ as ee,b as te,E as F,I as ue,c as de}from"./relativeTime-19df9ef0.js";import{o as ne,n as pe,g as fe,a as ve,u as l,b as se,c as C,r as m,w as J,d as Q,e as oe,f as ie,h as E,i as S,j as x,k as z,t as L,l as Z,m as V,p as j,q as Y,s as he,v as N,x as me,y as xe,_ as ye,F as _e,z as ge}from"./index-f4ad1d8a.js";import"./InputForm.vue_vue_type_style_index_0_lang-44d272d9.js";const be="/PBO-Squad-ToDo/assets/icon_deadline.svg",we="/PBO-Squad-ToDo/assets/icon_timespan.svg";function ae(e){return fe()?(ve(e),!0):!1}function le(e){return typeof e=="function"?e():l(e)}const Ee=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Se=Object.prototype.toString,Ce=e=>Se.call(e)==="[object Object]",U=()=>{};function ke(e){return e||se()}function $e(e,o=!0,a){const i=ke(a);i?ne(e,i):o?e():pe(e)}function M(e){var o;const a=le(e);return(o=a==null?void 0:a.$el)!=null?o:a}const R=Ee?window:void 0;function G(...e){let o,a,i,h;if(typeof e[0]=="string"||Array.isArray(e[0])?([a,i,h]=e,o=R):[o,a,i,h]=e,!o)return U;Array.isArray(a)||(a=[a]),Array.isArray(i)||(i=[i]);const r=[],d=()=>{r.forEach(c=>c()),r.length=0},f=(c,t,u,p)=>(c.addEventListener(t,u,p),()=>c.removeEventListener(t,u,p)),v=J(()=>[M(o),le(h)],([c,t])=>{if(d(),!c)return;const u=Ce(t)?{...t}:t;r.push(...a.flatMap(p=>i.map(y=>f(c,p,y,u))))},{immediate:!0,flush:"post"}),s=()=>{v(),d()};return ae(s),s}function Be(){const e=m(!1);return se()&&ne(()=>{e.value=!0}),e}function Oe(e){const o=Be();return C(()=>(o.value,!!e()))}function ze(e,o,a={}){const{window:i=R,...h}=a;let r;const d=Oe(()=>i&&"ResizeObserver"in i),f=()=>{r&&(r.disconnect(),r=void 0)},v=C(()=>Array.isArray(e)?e.map(t=>M(t)):[M(e)]),s=J(v,t=>{if(f(),d.value&&i){r=new ResizeObserver(o);for(const u of t)u&&r.observe(u,h)}},{immediate:!0,flush:"post",deep:!0}),c=()=>{f(),s()};return ae(c),{isSupported:d,stop:c}}function H(e,o={width:0,height:0},a={}){const{window:i=R,box:h="content-box"}=a,r=C(()=>{var t,u;return(u=(t=M(e))==null?void 0:t.namespaceURI)==null?void 0:u.includes("svg")}),d=m(o.width),f=m(o.height),{stop:v}=ze(e,([t])=>{const u=h==="border-box"?t.borderBoxSize:h==="content-box"?t.contentBoxSize:t.devicePixelContentBoxSize;if(i&&r.value){const p=M(e);if(p){const y=i.getComputedStyle(p);d.value=Number.parseFloat(y.width),f.value=Number.parseFloat(y.height)}}else if(u){const p=Array.isArray(u)?u:[u];d.value=p.reduce((y,{inlineSize:g})=>y+g,0),f.value=p.reduce((y,{blockSize:g})=>y+g,0)}else d.value=t.contentRect.width,f.value=t.contentRect.height},a);$e(()=>{const t=M(e);t&&(d.value="offsetWidth"in t?t.offsetWidth:o.width,f.value="offsetHeight"in t?t.offsetHeight:o.height)});const s=J(()=>M(e),t=>{d.value=t?o.width:0,f.value=t?o.height:0});function c(){v(),s()}return{width:d,height:f,stop:c}}function Me(e,o={}){const{threshold:a=50,onSwipe:i,onSwipeEnd:h,onSwipeStart:r,passive:d=!0,window:f=R}=o,v=Q({x:0,y:0}),s=Q({x:0,y:0}),c=C(()=>v.x-s.x),t=C(()=>v.y-s.y),{max:u,abs:p}=Math,y=C(()=>u(p(c.value),p(t.value))>=a),g=m(!1),T=C(()=>y.value?p(c.value)>p(t.value)?c.value>0?"left":"right":t.value>0?"up":"down":"none"),k=n=>[n.touches[0].clientX,n.touches[0].clientY],$=(n,b)=>{v.x=n,v.y=b},I=(n,b)=>{s.x=n,s.y=b};let w;const D=De(f==null?void 0:f.document);d?w=D?{passive:!0}:{capture:!1}:w=D?{passive:!1,capture:!0}:{capture:!0};const B=n=>{g.value&&(h==null||h(n,T.value)),g.value=!1},X=[G(e,"touchstart",n=>{if(n.touches.length!==1)return;w.capture&&!w.passive&&n.preventDefault();const[b,O]=k(n);$(b,O),I(b,O),r==null||r(n)},w),G(e,"touchmove",n=>{if(n.touches.length!==1)return;const[b,O]=k(n);I(b,O),!g.value&&y.value&&(g.value=!0),g.value&&(i==null||i(n))},w),G(e,["touchend","touchcancel"],B,w)];return{isPassiveEventSupported:D,isSwiping:g,direction:T,coordsStart:v,coordsEnd:s,lengthX:c,lengthY:t,stop:()=>X.forEach(n=>n())}}function De(e){if(!e)return!1;let o=!1;const a={get passive(){return o=!0,!1}};return e.addEventListener("x",U,a),e.removeEventListener("x",U),o}const A=e=>(me("data-v-1df1ba64"),e=e(),xe(),e),Te={class:"info-box-1d"},je={key:0,class:"text-lg flex"},Ae=A(()=>x("img",{alt:"Deadline",src:be},null,-1)),Ie={key:1,class:"text-lg flex"},We=A(()=>x("img",{alt:"Expenditure",src:we},null,-1)),Le={key:0,style:"color: #000000; padding: 0 0 10px 0; position: relative;",class:"text-base"},Ve={key:1},Ne={class:"info-box-1d"},Pe=A(()=>x("img",{alt:"Delete",style:{},src:ee},null,-1)),Re=A(()=>x("img",{alt:"Edit",src:de},null,-1)),Xe=A(()=>x("img",{alt:"Done",src:te},null,-1)),P=40,qe=oe({__name:"CompactEntry",props:{entry:{type:Object,required:!0}},setup(e){q.extend(re),q.extend(ce);const o=ie(),a=e,i=m(null),h=H(i),r=m(null),d=m(null),f={width:H(d).width,height:H(d).height};let v=m(!1),s=a.entry;function c(){s.metadata.isExpanded||g(),s.metadata.isExpanded=!s.metadata.isExpanded}function t(_){console.log("Clicked Delete"),N(_,!0)}function u(){console.log("editClicked"),v.value=!v.value}function p(_){console.log("Clicked Done"),N(_,!1)}function y(){v.value=!1}function g(){for(const _ of o.entries)_.metadata.isExpanded&&(_.metadata.isExpanded=!1)}const T=m(null),k=C(()=>{var _;return(_=T.value)==null?void 0:_.offsetWidth}),$=m("0"),I=m(1);m(0),m(0),m(0);const{direction:w,isSwiping:D,lengthX:B,lengthY:X}=Me(i,{passive:!0,onSwipe(_){if(k.value&&Math.abs(X.value)<50){const n=Math.abs(B.value);n/k.value*100>P?$.value=`${-Math.sign(B.value)*P}%`:$.value=`${-Math.sign(B.value)*n}px`}else $.value="0",I.value=1,D.value=!1},onSwipeEnd(_,n){k.value&&Math.abs(B.value)/k.value>=.5?B.value<0?N(s,!0):N(s,!1):$.value="0"}});return(_,n)=>{var b,O,K;return E(),S("span",{ref_key:"container",ref:T,class:"horizontal-box stretch-horizontally",style:z(`position: relative; min-height: 16vh; overflow: hidden; background-color: ${l(s).color}; `)},[x("article",{ref_key:"entryBox",ref:i,class:he(["entry-box",l(s).metadata.isExpanded?"detail-height":"compact-height"]),style:z({position:"relative",width:"100%",left:$.value,margin:"0",transition:l(D)?"none":"all 200ms ease-out"}),onClick:n[3]||(n[3]=W=>c())},[x("aside",{class:"delete-box restrict-size",style:z(`position: absolute; display: flex; width: ${P}%; height: 100%; left: 0; transform: translateX(-100%)`)},[x("img",{alt:"",class:"icon no-padding center",src:ee,style:z(`max-width: ${l(h).height.value/2}px`)},null,4)],4),x("aside",{class:"tick-box restrict-size",style:z(`position: absolute; display: flex; width: ${P}%; height: 100%; right: 0; transform: translateX(100%)`)},[x("img",{alt:"",class:"icon no-padding center",src:te,style:z(`max-width: ${l(h).height.value/2}px`)},null,4)],4),x("div",{ref_key:"content",ref:d,style:z(`width: ${f.width}px; padding: 10px;`)},[x("h1",{ref_key:"title",ref:r,class:"text-2xl font-medium"},L((b=l(s))!=null&&b.title?(O=l(s))==null?void 0:O.title:""),513),x("section",Te,[l(s).deadline!=null?(E(),S("span",je,[Ae,Z(" "+L((K=l(s))==null?void 0:K.deadline.toLocaleDateString()),1)])):V("",!0),l(s).expenditure!=null?(E(),S("span",Ie,[We,Z(" "+L(l(q).duration({seconds:l(s).expenditure}).humanize()),1)])):V("",!0)]),l(s).metadata.isExpanded&&l(s).description!=null?(E(),S("p",Le,L(l(s).description),1)):V("",!0),l(s).metadata.isExpanded?(E(),S("span",Ve,[x("nav",Ne,[j(F,{onClick:n[0]||(n[0]=W=>t(l(s))),class:"flex justify-center"},{default:Y(()=>[Pe]),_:1}),j(F,{onClick:n[1]||(n[1]=W=>u()),class:"flex justify-center"},{default:Y(()=>[Re]),_:1}),j(F,{onClick:n[2]||(n[2]=W=>p(l(s))),class:"flex justify-center"},{default:Y(()=>[Xe]),_:1})])])):V("",!0)],4)],6),j(ue,{"is-open":l(v),onClose:n[4]||(n[4]=W=>y()),entry:l(s)},null,8,["is-open","entry"])],4)}}});const Fe=ye(qe,[["__scopeId","data-v-1df1ba64"]]),Ye={style:"position: relative;"},Je=oe({__name:"HomeView",setup(e){const o=ie();function a(){for(const i of o.entries)console.log(i.metadata.isExpanded),i.metadata.isExpanded&&(i.metadata.isExpanded=!1)}return(i,h)=>(E(),S("div",Ye,[(E(!0),S(_e,null,ge(l(o).entries.filter(r=>r.metadata.isVisible==!0).slice(0,5),r=>(E(),S("div",{key:r.title},[j(Fe,{entry:r,style:"margin-bottom: 5px",onCollapseOthers:a},null,8,["entry"])]))),128))]))}});export{Je as default};
