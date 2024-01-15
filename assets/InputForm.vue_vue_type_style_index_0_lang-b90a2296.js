import{e as w,r as d,f,j as g,D as r,E as c,k as e,F as V,B,q as C,o as F,l as y,i as E,G as U,H as M,I as j,v as k,J as N,K as O}from"./index-5c1b6b71.js";const $={id:"tag-list"},q=["value"],A=w({__name:"TagDropdown",setup(b){const _=d(""),o=["Uni","Work","Hobby"];return(u,s)=>(f(),g(V,null,[r(e("input",{list:"tag-list",id:"id_tags",class:"user-input duration",placeholder:"Tags","onUpdate:modelValue":s[0]||(s[0]=i=>_.value=i)},null,512),[[c,_.value]]),e("datalist",$,[(f(),g(V,null,B(o,i=>e("option",{key:i,value:i},null,8,q)),64))])],64))}}),H={class:"edit"},L=["onSubmit"],z={class:"edit_btn"},G=e("label",{for:"id_title"},"Title:",-1),J=e("label",{for:"id_date"},"Date:",-1),K=e("label",{for:"id_duration"},"Estimated duration:",-1),P={style:{display:"flex"}},W=e("option",{value:"min"},"minutes",-1),Q=e("option",{value:"h"},"hours",-1),R=e("option",{value:"days"},"days",-1),X=e("option",{value:"weeks"},"weeks",-1),Y=[W,Q,R,X],Z=e("label",{for:"id_tags"},"Tags:",-1),ee=e("label",{for:"id_descript"},"Description:",-1),ne=w({__name:"InputForm",props:{entry:{type:Object}},emits:["closeaction"],setup(b,{emit:_}){C();const o=d(""),u=d(""),s=d(""),i=d("min"),p=d(""),x=d(""),v=d("#000000"),D=_,l=b;F(()=>{var a,n,t;l.entry&&(o.value=l.entry.title||"",u.value=((a=l.entry.deadline)==null?void 0:a.toISOString().split("T")[0])||"",s.value=((n=l.entry.expenditure)==null?void 0:n.time.toString())||"",i.value=((t=l.entry.expenditure)==null?void 0:t.unit)||"min",p.value=l.entry.description||"",v.value=l.entry.color||"#ff3b30")});const S=()=>{let a=l.entry?l.entry:{title:"",description:"",color:"",deadline:new Date,expenditure:{time:0,unit:"min"},metadata:{isVisible:!0,isExpanded:!1}};if(o.value.trim()!==""){let t;u.value.trim()!==""?t=new Date(u.value):t=void 0;let m;const T=s.value.trim().replace(/\D/g,"");T!==""?m={time:parseInt(T),unit:i.value}:m=void 0,a.title=o.value,a.description=p.value,a.color=v.value,a.deadline=t,a.expenditure=m}l.entry?(console.log("Updating existing entry"),N()):(console.log("Adding existing entry"),O(a));const n={title:o.value,date:u.value,duration:s.value,unit:i.value,description:p.value,tags:x.value,color:v.value};console.log(n),h(),D("closeaction")},I=()=>{h(),D("closeaction")},h=()=>{o.value="",u.value="",s.value="",i.value="min",p.value="",x.value=""};return(a,n)=>(f(),g("div",H,[e("form",{class:"input-field",onSubmit:j(S,["prevent"])},[e("span",z,[y(U,{class:"btn_cancel",type:"button",onClick:I},{default:E(()=>[k("Cancel")]),_:1}),y(U,{class:"btn_save",type:"submit"},{default:E(()=>[k("Save")]),_:1})]),G,r(e("input",{class:"user-input",type:"text",id:"id_title","onUpdate:modelValue":n[0]||(n[0]=t=>o.value=t),placeholder:"Title",required:""},null,512),[[c,o.value]]),J,r(e("input",{class:"user-input",type:"date",id:"id_date","onUpdate:modelValue":n[1]||(n[1]=t=>u.value=t),placeholder:"Date"},null,512),[[c,u.value]]),K,e("div",P,[r(e("input",{class:"user-input duration",type:"number",pattern:"[0-9]*",inputmode:"numeric",id:"id_duration","onUpdate:modelValue":n[2]||(n[2]=t=>s.value=t),placeholder:"Estimated duration",min:"0"},null,512),[[c,s.value]]),r(e("select",{class:"user-input duration_unit",id:"id_duration_unit","onUpdate:modelValue":n[3]||(n[3]=t=>i.value=t)},Y,512),[[M,i.value]])]),Z,e("div",null,[y(A),r(e("input",{class:"user-input short",type:"color",id:"colorPicker","onUpdate:modelValue":n[4]||(n[4]=t=>v.value=t)},null,512),[[c,v.value]])]),ee,r(e("textarea",{class:"user-input input_descript",id:"id_descript","onUpdate:modelValue":n[5]||(n[5]=t=>p.value=t),placeholder:"Description",rows:"4",style:{resize:"none"}},null,512),[[c,p.value]])],40,L)]))}});export{ne as _};
