import{h as x,r as a,i as y,l as f,C as d,D as c,m as e,F as T,A as V,u as k,o as w,E as S,p as C,G as I}from"./index-564ab2ec.js";const F={id:"tag-list"},M=["value"],B=x({__name:"TagDropdown",setup(b){const v=a(""),_=["Uni","Work","Test"];return(s,o)=>(y(),f(T,null,[d(e("input",{list:"tag-list",id:"id_tags",class:"user-input duration",placeholder:"Tags","onUpdate:modelValue":o[0]||(o[0]=i=>v.value=i)},null,512),[[c,v.value]]),e("datalist",F,[(y(),f(T,null,V(_,i=>e("option",{key:i,value:i},null,8,M)),64))])],64))}}),O={class:"edit"},$=["onSubmit"],j=e("button",{class:"btn_save",type:"submit"},"Save",-1),N=e("label",{for:"id_title"},"Title:",-1),q=e("label",{for:"id_date"},"Date:",-1),z=e("label",{for:"id_duration"},"Estimated duration:",-1),A={style:{display:"flex"}},G=e("option",{value:"min"},"minutes",-1),L=e("option",{value:"h"},"hours",-1),P=e("option",{value:"days"},"days",-1),W=e("option",{value:"weeks"},"weeks",-1),H=[G,L,P,W],J=e("label",{for:"id_tags"},"Tags:",-1),K=e("label",{for:"id_descript"},"Description:",-1),R=x({__name:"TheInputForm",props:{entry:{type:Object}},emits:["closeaction"],setup(b,{emit:v}){const _=k(),s=a(""),o=a(""),i=a(""),r=a("min"),p=a(""),h=a(""),m=a("#000000"),g=v,l=b;w(()=>{var u,t,n;l.entry&&(s.value=l.entry.title||"",o.value=((u=l.entry.deadline)==null?void 0:u.toISOString().split("T")[0])||"",i.value=((t=l.entry.expenditure)==null?void 0:t.time.toString())||"",r.value=((n=l.entry.expenditure)==null?void 0:n.unit)||"min",p.value=l.entry.description||"")});const E=()=>{if(l.entry&&(console.log("Update Entry -> rm old & create new Entry"+l.entry),_.removeEntry(l.entry)),s.value.trim()!==""){let u;o.value.trim()!==""?u=new Date(o.value):u=void 0;let t;i.value.trim()!==""?t={time:parseInt(i.value),unit:r.value}:t=void 0,_.addEntry({title:s.value,description:p.value,color:"#ff3b30",deadline:u,expenditure:t,metadata:{isVisible:!0,isExpanded:!1}});const n={title:s.value,date:o.value,duration:i.value,unit:r.value,description:p.value,tags:h.value,color:m.value};console.log(n),D(),g("closeaction")}},U=()=>{D(),g("closeaction")},D=()=>{s.value="",o.value="",i.value="",r.value="min",p.value="",h.value=""};return(u,t)=>(y(),f("div",O,[e("form",{class:"input-field",onSubmit:I(E,["prevent"])},[e("span",{class:"edit_btn"},[e("button",{class:"btn_cancel",type:"button",onClick:U},"Cancel"),j]),N,d(e("input",{class:"user-input",type:"text",id:"id_title","onUpdate:modelValue":t[0]||(t[0]=n=>s.value=n),placeholder:"Title",required:""},null,512),[[c,s.value]]),q,d(e("input",{class:"user-input",type:"date",id:"id_date","onUpdate:modelValue":t[1]||(t[1]=n=>o.value=n),placeholder:"Date"},null,512),[[c,o.value]]),z,e("div",A,[d(e("input",{class:"user-input duration",type:"number",id:"id_duration","onUpdate:modelValue":t[2]||(t[2]=n=>i.value=n),placeholder:"Estimated duration",min:"0"},null,512),[[c,i.value]]),d(e("select",{class:"user-input duration_unit",id:"id_duration_unit","onUpdate:modelValue":t[3]||(t[3]=n=>r.value=n)},H,512),[[S,r.value]])]),J,e("div",null,[C(B),d(e("input",{class:"user-input short",type:"color",id:"colorPicker","onUpdate:modelValue":t[4]||(t[4]=n=>m.value=n)},null,512),[[c,m.value]])]),K,d(e("textarea",{class:"user-input input_descript",id:"id_descript","onUpdate:modelValue":t[5]||(t[5]=n=>p.value=n),placeholder:"Description",rows:"4",style:{resize:"none"}},null,512),[[c,p.value]])],40,$)]))}});export{R as _};
