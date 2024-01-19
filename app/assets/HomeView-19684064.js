import{d as q,a as le,r as re,_ as Z,b as ee,E as F,I as ce,c as ue}from"./relativeTime-ec6a673c.js";import{o as te,n as de,g as pe,a as fe,u as l,b as ne,c as $,r as b,w as J,d as K,e as se,f as oe,h as C,i as k,j as x,k as M,t as L,l as Q,m as V,p as j,q as Y,s as ve,v as N,x as he,y as me,_ as xe,F as ye,z as _e}from"./index-c6fd3bf0.js";import"./InputForm.vue_vue_type_style_index_0_lang-d1dcfce4.js";const ge="/PBO-Squad-ToDo/app/assets/icon_deadline.svg",we="/PBO-Squad-ToDo/app/assets/icon_timespan.svg";function ie(e){return pe()?(fe(e),!0):!1}function ae(e){return typeof e=="function"?e():l(e)}const be=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Ee=Object.prototype.toString,Se=e=>Ee.call(e)==="[object Object]",U=()=>{};function Ce(e){return e||ne()}function ke(e,s=!0,i){const o=Ce(i);o?te(e,o):s?e():de(e)}function D(e){var s;const i=ae(e);return(s=i==null?void 0:i.$el)!=null?s:i}const R=be?window:void 0;function G(...e){let s,i,o,h;if(typeof e[0]=="string"||Array.isArray(e[0])?([i,o,h]=e,s=R):[s,i,o,h]=e,!s)return U;Array.isArray(i)||(i=[i]),Array.isArray(o)||(o=[o]);const r=[],d=()=>{r.forEach(c=>c()),r.length=0},f=(c,t,u,p)=>(c.addEventListener(t,u,p),()=>c.removeEventListener(t,u,p)),v=J(()=>[D(s),ae(h)],([c,t])=>{if(d(),!c)return;const u=Se(t)?{...t}:t;r.push(...i.flatMap(p=>o.map(y=>f(c,p,y,u))))},{immediate:!0,flush:"post"}),n=()=>{v(),d()};return ie(n),n}function $e(){const e=b(!1);return ne()&&te(()=>{e.value=!0}),e}function Be(e){const s=$e();return $(()=>(s.value,!!e()))}function Oe(e,s,i={}){const{window:o=R,...h}=i;let r;const d=Be(()=>o&&"ResizeObserver"in o),f=()=>{r&&(r.disconnect(),r=void 0)},v=$(()=>Array.isArray(e)?e.map(t=>D(t)):[D(e)]),n=J(v,t=>{if(f(),d.value&&o){r=new ResizeObserver(s);for(const u of t)u&&r.observe(u,h)}},{immediate:!0,flush:"post",deep:!0}),c=()=>{f(),n()};return ie(c),{isSupported:d,stop:c}}function H(e,s={width:0,height:0},i={}){const{window:o=R,box:h="content-box"}=i,r=$(()=>{var t,u;return(u=(t=D(e))==null?void 0:t.namespaceURI)==null?void 0:u.includes("svg")}),d=b(s.width),f=b(s.height),{stop:v}=Oe(e,([t])=>{const u=h==="border-box"?t.borderBoxSize:h==="content-box"?t.contentBoxSize:t.devicePixelContentBoxSize;if(o&&r.value){const p=D(e);if(p){const y=o.getComputedStyle(p);d.value=Number.parseFloat(y.width),f.value=Number.parseFloat(y.height)}}else if(u){const p=Array.isArray(u)?u:[u];d.value=p.reduce((y,{inlineSize:_})=>y+_,0),f.value=p.reduce((y,{blockSize:_})=>y+_,0)}else d.value=t.contentRect.width,f.value=t.contentRect.height},i);ke(()=>{const t=D(e);t&&(d.value="offsetWidth"in t?t.offsetWidth:s.width,f.value="offsetHeight"in t?t.offsetHeight:s.height)});const n=J(()=>D(e),t=>{d.value=t?s.width:0,f.value=t?s.height:0});function c(){v(),n()}return{width:d,height:f,stop:c}}function ze(e,s={}){const{threshold:i=50,onSwipe:o,onSwipeEnd:h,onSwipeStart:r,passive:d=!0,window:f=R}=s,v=K({x:0,y:0}),n=K({x:0,y:0}),c=$(()=>v.x-n.x),t=$(()=>v.y-n.y),{max:u,abs:p}=Math,y=$(()=>u(p(c.value),p(t.value))>=i),_=b(!1),T=$(()=>y.value?p(c.value)>p(t.value)?c.value>0?"left":"right":t.value>0?"up":"down":"none"),B=a=>[a.touches[0].clientX,a.touches[0].clientY],O=(a,w)=>{v.x=a,v.y=w},I=(a,w)=>{n.x=a,n.y=w};let E;const S=Me(f==null?void 0:f.document);d?E=S?{passive:!0}:{capture:!1}:E=S?{passive:!1,capture:!0}:{capture:!0};const X=a=>{_.value&&(h==null||h(a,T.value)),_.value=!1},m=[G(e,"touchstart",a=>{if(a.touches.length!==1)return;E.capture&&!E.passive&&a.preventDefault();const[w,z]=B(a);O(w,z),I(w,z),r==null||r(a)},E),G(e,"touchmove",a=>{if(a.touches.length!==1)return;const[w,z]=B(a);I(w,z),!_.value&&y.value&&(_.value=!0),_.value&&(o==null||o(a))},E),G(e,["touchend","touchcancel"],X,E)];return{isPassiveEventSupported:S,isSwiping:_,direction:T,coordsStart:v,coordsEnd:n,lengthX:c,lengthY:t,stop:()=>m.forEach(a=>a())}}function Me(e){if(!e)return!1;let s=!1;const i={get passive(){return s=!0,!1}};return e.addEventListener("x",U,i),e.removeEventListener("x",U),s}const A=e=>(he("data-v-5877de9d"),e=e(),me(),e),De={class:"info-box-1d"},Te={key:0,class:"text-lg flex"},je=A(()=>x("img",{alt:"Deadline",src:ge},null,-1)),Ae={key:1,class:"text-lg flex"},Ie=A(()=>x("img",{alt:"Expenditure",src:we},null,-1)),We={key:0,style:"color: #000000; padding: 0 0 10px 0; position: relative;",class:"text-base"},Le={key:1},Ve={class:"info-box-1d"},Ne=A(()=>x("img",{alt:"Delete",style:{},src:Z},null,-1)),Pe=A(()=>x("img",{alt:"Edit",src:ue},null,-1)),Re=A(()=>x("img",{alt:"Done",src:ee},null,-1)),P=40,Xe=se({__name:"CompactEntry",props:{entry:{type:Object,required:!0}},setup(e){q.extend(le),q.extend(re);const s=oe(),i=e,o=b(null),h=H(o),r=b(null),d=b(null),f={width:H(d).width,height:H(d).height};let v=b(!1),n=i.entry;function c(){n.metadata.isExpanded||_(),n.metadata.isExpanded=!n.metadata.isExpanded}function t(m){console.log("Clicked Delete"),N(m,!0)}function u(){console.log("editClicked"),v.value=!v.value}function p(m){console.log("Clicked Done"),N(m,!1)}function y(){v.value=!1}function _(){for(const m of s.entries)m.metadata.isExpanded&&(m.metadata.isExpanded=!1)}const T=b(null),B=$(()=>{var m;return(m=T.value)==null?void 0:m.offsetWidth}),O=b("0"),I=b(1),{isSwiping:E,lengthX:S,lengthY:X}=ze(o,{passive:!0,onSwipe(){if(B.value&&Math.abs(X.value)<50){const m=Math.abs(S.value);m/B.value*100>P?O.value=`${-Math.sign(S.value)*P}%`:O.value=`${-Math.sign(S.value)*m}px`}else O.value="0",I.value=1,E.value=!1},onSwipeEnd(){B.value&&Math.abs(S.value)/B.value>=.5?S.value<0?N(n,!0):N(n,!1):O.value="0"}});return(m,g)=>{var a,w,z;return C(),k("span",{ref_key:"container",ref:T,class:"horizontal-box stretch-horizontally",style:M(`position: relative; min-height: 16vh; overflow: hidden; background-color: ${l(n).color}; `)},[x("article",{ref_key:"entryBox",ref:o,class:ve(["entry-box",l(n).metadata.isExpanded?"detail-height":"compact-height"]),style:M({position:"relative",width:"100%",left:O.value,margin:"0",transition:l(E)?"none":"all 200ms ease-out"}),onClick:g[3]||(g[3]=W=>c())},[x("aside",{class:"delete-box restrict-size",style:M(`position: absolute; display: flex; width: ${P}%; height: 100%; left: 0; transform: translateX(-100%)`)},[x("img",{alt:"",class:"icon no-padding center",src:Z,style:M(`max-width: ${l(h).height.value/2}px`)},null,4)],4),x("aside",{class:"tick-box restrict-size",style:M(`position: absolute; display: flex; width: ${P}%; height: 100%; right: 0; transform: translateX(100%)`)},[x("img",{alt:"",class:"icon no-padding center",src:ee,style:M(`max-width: ${l(h).height.value/2}px`)},null,4)],4),x("div",{ref_key:"content",ref:d,style:M(`width: ${f.width}px; padding: 10px;`)},[x("h1",{ref_key:"title",ref:r,class:"text-2xl font-medium"},L((a=l(n))!=null&&a.title?(w=l(n))==null?void 0:w.title:""),513),x("section",De,[l(n).deadline!=null?(C(),k("span",Te,[je,Q(" "+L((z=l(n))==null?void 0:z.deadline.toLocaleDateString()),1)])):V("",!0),l(n).expenditure!=null?(C(),k("span",Ae,[Ie,Q(" "+L(l(q).duration({seconds:l(n).expenditure}).humanize()),1)])):V("",!0)]),l(n).metadata.isExpanded&&l(n).description!=null?(C(),k("p",We,L(l(n).description),1)):V("",!0),l(n).metadata.isExpanded?(C(),k("span",Le,[x("nav",Ve,[j(F,{onClick:g[0]||(g[0]=W=>t(l(n))),class:"flex justify-center"},{default:Y(()=>[Ne]),_:1}),j(F,{onClick:g[1]||(g[1]=W=>u()),class:"flex justify-center"},{default:Y(()=>[Pe]),_:1}),j(F,{onClick:g[2]||(g[2]=W=>p(l(n))),class:"flex justify-center"},{default:Y(()=>[Re]),_:1})])])):V("",!0)],4)],6),j(ce,{"is-open":l(v),onClose:g[4]||(g[4]=W=>y()),entry:l(n)},null,8,["is-open","entry"])],4)}}});const qe=xe(Xe,[["__scopeId","data-v-5877de9d"]]),Fe={style:"position: relative;"},Ue=se({__name:"HomeView",setup(e){const s=oe();function i(){for(const o of s.entries)console.log(o.metadata.isExpanded),o.metadata.isExpanded&&(o.metadata.isExpanded=!1)}return(o,h)=>(C(),k("div",Fe,[(C(!0),k(ye,null,_e(l(s).entries.filter(r=>r.metadata.isVisible==!0).slice(0,5),r=>(C(),k("div",{key:r.title},[j(qe,{entry:r,style:"margin-bottom: 5px",onCollapseOthers:i},null,8,["entry"])]))),128))]))}});export{Ue as default};
