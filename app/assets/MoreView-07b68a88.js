import{d as f,a as j,r as N,E as x,I as F,_ as L,c as T,b as O}from"./relativeTime-f69d7690.js";import{e as I,f as D,r as _,h as s,i as o,j as a,t as y,u as t,m as d,p as c,q as v,s as A,k as G,v as S,x as H,y as J,_ as K,F as P,z as Q}from"./index-7b875115.js";import"./InputForm.vue_vue_type_style_index_0_lang-55eb1b21.js";const k=l=>(H("data-v-b67ac06e"),l=l(),J(),l),R={key:0,class:"entry-text"},U={key:1,class:"entry-text"},W={key:2,class:"entry-text"},X={key:0,style:"color: #000000; padding: 0 0 10px 0; position: relative;",class:"text-base"},Y={key:1},Z={class:"info-btn"},ee=k(()=>a("img",{alt:"Delete",style:{},src:L},null,-1)),te=k(()=>a("img",{alt:"Edit",src:T},null,-1)),ne=k(()=>a("img",{alt:"Done",src:O},null,-1)),se=I({__name:"SquareEntry",props:{entry:{type:Object,required:!0}},setup(l){f.extend(j),f.extend(N);const m=D(),E=l,g=_(null),r=_(null),$=_(null);let p=_(!1),e=E.entry;function B(){e.metadata.isExpanded||M(),e.metadata.isExpanded=!e.metadata.isExpanded}function V(i){console.log("Clicked Delete"),S(i,!0)}function q(){console.log("editClicked"),p.value=!p.value}function w(i){console.log("Clicked Done"),S(i,!1)}function z(){p.value=!1}function M(){for(const i of m.entries)i.metadata.isExpanded&&(i.metadata.isExpanded=!1)}return(i,n)=>{var h,C,b;return s(),o("span",null,[a("article",{ref_key:"entryBox",ref:g,class:A(["entry-box","stretch-horizontally",t(e).metadata.isExpanded?"detail-height":"entry-height"]),style:G("--element-color: "+t(e).color),onClick:n[3]||(n[3]=u=>B())},[a("div",{ref_key:"content",ref:$},[a("h1",{ref_key:"title",ref:r,class:"entry-title"},y((h=t(e))!=null&&h.title?(C=t(e))==null?void 0:C.title:""),513),a("section",null,[t(e).deadline!=null?(s(),o("span",R,y((b=t(e))==null?void 0:b.deadline.toLocaleDateString()),1)):d("",!0),t(e).deadline!=null&&t(e).expenditure!=null?(s(),o("span",U," - ")):d("",!0),t(e).expenditure!=null?(s(),o("span",W,y(t(f).duration({seconds:t(e).expenditure}).humanize()),1)):d("",!0)]),t(e).metadata.isExpanded&&t(e).description!=null?(s(),o("p",X,y(t(e).description),1)):d("",!0),t(e).metadata.isExpanded?(s(),o("span",Y,[a("nav",Z,[c(x,{onClick:n[0]||(n[0]=u=>V(t(e)))},{default:v(()=>[ee]),_:1}),c(x,{onClick:n[1]||(n[1]=u=>q())},{default:v(()=>[te]),_:1}),c(x,{onClick:n[2]||(n[2]=u=>w(t(e)))},{default:v(()=>[ne]),_:1})])])):d("",!0)],512)],6),c(F,{"is-open":t(p),onClose:n[4]||(n[4]=u=>z()),entry:t(e)},null,8,["is-open","entry"])])}}});const oe=K(se,[["__scopeId","data-v-b67ac06e"]]),ae={class:"more"},de=I({__name:"MoreView",setup(l){const m=D();return(E,g)=>(s(),o("main",ae,[(s(!0),o(P,null,Q(t(m).entries.filter(r=>r.metadata.isVisible==!0).slice(0,30),r=>(s(),o("div",{key:r.title},[c(oe,{entry:r,style:"margin-bottom: 5px"},null,8,["entry"])]))),128))]))}});export{de as default};
