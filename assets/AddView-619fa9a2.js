import{h as a,_ as d,o as p,c,a as t,w as s,v as u,k as _,l as h,d as D,m}from"./index-a39f4721.js";const f=a(),T={data(){return{inputTitle:"",inputDate:"",inputDuration:"",inputDurationUnit:"m",inputDescript:"",inputTags:""}},methods:{saveEdit(){if(this.inputTitle.trim()!==""){let o;this.inputDate.trim()!==""?o=new Date(this.inputDate):o=new Date(""),f.addEntry({todoEntry:{title:this.inputTitle,description:this.inputDescript,color:{r:255,g:59,b:48},deadline:o,expenditure:{time:parseInt(this.inputDuration),unit:this.inputDurationUnit}},isVisible:!0});const i={title:this.inputTitle,date:this.inputDate,duration:this.inputDuration,unit:this.inputDurationUnit,description:this.inputDescript,tags:this.inputTags};console.log(i),this.clearInput()}},cancelEdit(){this.clearInput(),this.$router.push("/")},clearInput(){this.inputTitle="",this.inputDate="",this.inputDuration="",this.inputDurationUnit="m",this.inputDescript="",this.inputTags=""}}};const v={class:"edit"},b={class:"edit_btn"},y=t("button",{class:"btn_save",type:"submit"},"Save",-1),g=t("label",{for:"id_title"},"Title:",-1),E=t("label",{for:"id_date"},"Date:",-1),U=t("label",{for:"id_duration"},"Estimated duration:",-1),x={style:{display:"flex"}},w=t("option",{value:"m"},"minutes",-1),V=t("option",{value:"h"},"hours",-1),k=t("option",{value:"d"},"days",-1),I=t("option",{value:"w"},"weeks",-1),B=[w,V,k,I],S=t("label",{for:"id_tags"},"Tags:",-1),C=t("label",{for:"id_descript"},"Description:",-1);function M(o,i,r,j,n,l){return p(),c("div",v,[t("form",{class:"input-field",onSubmit:i[7]||(i[7]=h((...e)=>l.saveEdit&&l.saveEdit(...e),["prevent"]))},[t("span",b,[t("button",{class:"btn_cancel",type:"button",onClick:i[0]||(i[0]=(...e)=>l.cancelEdit&&l.cancelEdit(...e))},"Cancel"),y]),g,s(t("input",{class:"user-input",type:"text",id:"id_title","onUpdate:modelValue":i[1]||(i[1]=e=>n.inputTitle=e),placeholder:"Title",required:""},null,512),[[u,n.inputTitle]]),E,s(t("input",{class:"user-input",type:"date",id:"id_date","onUpdate:modelValue":i[2]||(i[2]=e=>n.inputDate=e),placeholder:"Date"},null,512),[[u,n.inputDate]]),U,t("div",x,[s(t("input",{class:"user-input duration",type:"number",id:"id_duration","onUpdate:modelValue":i[3]||(i[3]=e=>n.inputDuration=e),placeholder:"Estimated duration",min:"0"},null,512),[[u,n.inputDuration]]),s(t("select",{class:"user-input duration_unit",id:"id_duration_unit","onUpdate:modelValue":i[4]||(i[4]=e=>n.inputDurationUnit=e)},B,512),[[_,n.inputDurationUnit]])]),S,s(t("input",{class:"user-input",type:"text",id:"id_tags","onUpdate:modelValue":i[5]||(i[5]=e=>n.inputTags=e),placeholder:"Tags"},null,512),[[u,n.inputTags]]),C,s(t("textarea",{class:"user-input input_descript",id:"id_descript","onUpdate:modelValue":i[6]||(i[6]=e=>n.inputDescript=e),placeholder:"Description",rows:"4",style:{resize:"none"}},null,512),[[u,n.inputDescript]])],32)])}const F=d(T,[["render",M]]),z=D({__name:"AddView",setup(o){return(i,r)=>(p(),m(F))}});export{z as default};
