import{e as k,r as s,o as T,h as U,i as M,j as n,E as r,G as c,H as A,p as f,q as y,I as w,J as C,l as b,K as I,L as N,M as B}from"./index-14b8f219.js";const F={class:"edit"},j=["onSubmit"],q=n("label",{for:"id_title"},"Title:",-1),L=n("label",{for:"id_date"},"Date:",-1),O=n("label",{for:"id_duration"},"Estimated duration:",-1),z={style:{display:"flex"}},G=n("option",{value:"min"},"minutes",-1),H=n("option",{value:"h"},"hours",-1),J=n("option",{value:"days"},"days",-1),K=n("option",{value:"weeks"},"weeks",-1),P=[G,H,J,K],Q=n("label",{for:"id_tags"},"Color:",-1),R=n("label",{for:"id_descript"},"Description:",-1),W={class:"edit_btn"},Z=k({__name:"InputForm",props:{entry:{type:Object}},emits:["closeaction"],setup(h,{emit:x}){const a=s(""),l=s(""),d=s(""),u=s("min"),p=s(""),D=s(""),_=s("#ff3b30"),v=x,o=h;T(()=>{var e;if(o.entry){a.value=o.entry.title||"",l.value=((e=o.entry.deadline)==null?void 0:e.toISOString().split("T")[0])||"";const t=o.entry.expenditure?S(o.entry.expenditure):["","min"];d.value=t[0].toString(),u.value=t[1].toString(),p.value=o.entry.description||"",_.value=o.entry.color||"#ff3b30"}});function E(e,t){switch(t){case"min":return e*60;case"h":return e*3600;case"days":return e*86400;case"weeks":return e*604800;default:throw new Error("No fitting unit found")}}function S(e){if(e%604800===0)return[e/604800,"weeks"];if(e%86400===0)return[e/86400,"days"];if(e%3600===0)return[e/3600,"h"];if(e%60===0)return[e/60,"min"];throw new Error("No fitting unit found")}const V=()=>{let e=o.entry?o.entry:{title:"",description:"",color:"",deadline:new Date,expenditure:0,metadata:{isVisible:!0,isExpanded:!1,addedAt:new Date,lastModifiedAt:new Date,deletedAt:void 0}};if(a.value.trim()!==""){let t;l.value.trim()!==""?t=new Date(l.value):t=void 0;let i=0;d.value?i=E(parseInt(d.value),u.value):i=void 0,e.title=a.value,e.description=p.value,e.color=_.value,e.deadline=t,e.expenditure=i}o.entry?(e.metadata.lastModifiedAt=new Date,I()):N(e),B(),m(),v("closeaction")},g=()=>{m(),v("closeaction")},m=()=>{a.value="",l.value="",d.value="",u.value="min",p.value="",D.value=""};return(e,t)=>(U(),M("div",F,[n("form",{class:"input-field",onSubmit:C(V,["prevent"])},[q,r(n("input",{class:"user-input",type:"text",id:"id_title","onUpdate:modelValue":t[0]||(t[0]=i=>a.value=i),placeholder:"Title",required:""},null,512),[[c,a.value]]),L,r(n("input",{class:"user-input",type:"date",id:"id_date","onUpdate:modelValue":t[1]||(t[1]=i=>l.value=i),placeholder:"Date",style:{"-webkit-appearance":"initial"}},null,512),[[c,l.value]]),O,n("div",z,[r(n("input",{class:"user-input duration",type:"number",pattern:"[0-9]*",inputmode:"numeric",id:"id_duration","onUpdate:modelValue":t[2]||(t[2]=i=>d.value=i),placeholder:"Estimated duration",min:"0"},null,512),[[c,d.value]]),r(n("select",{class:"user-input duration_unit",id:"id_duration_unit","onUpdate:modelValue":t[3]||(t[3]=i=>u.value=i)},P,512),[[A,u.value]])]),n("div",null,[Q,r(n("input",{class:"user-input",type:"color",id:"colorPicker","onUpdate:modelValue":t[4]||(t[4]=i=>_.value=i)},null,512),[[c,_.value]])]),R,r(n("textarea",{class:"user-input input_descript",id:"id_descript","onUpdate:modelValue":t[5]||(t[5]=i=>p.value=i),placeholder:"Description",rows:"4",style:{resize:"none"}},null,512),[[c,p.value]]),n("span",W,[f(w,{class:"btn_cancel",type:"button",onClick:g},{default:y(()=>[b("Cancel")]),_:1}),f(w,{class:"btn_save",type:"submit"},{default:y(()=>[b("Save")]),_:1})])],40,j)]))}});export{Z as _};
