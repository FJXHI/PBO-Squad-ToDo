import{_ as bt,a as St,b as Ht}from"./icon_edit-34456b79.js";import{o as Dt,n as Bt,g as It,a as Wt,u as T,b as kt,c as J,r as V,w as yt,d as Mt,e as $t,f as R,h as At,i as lt,j as U,k as z,l as et,m as rt,T as zt,_ as gt,p as Lt,q as Ot,s as Q,t as at,v as wt,x as Nt,y as ut,z as Pt,A as Ft,F as Vt,B as qt}from"./index-5318f90f.js";import{_ as Rt}from"./InputForm.vue_vue_type_style_index_0_lang-e6436a9f.js";const Ut="/PBO-Squad-ToDo/assets/icon_deadline.svg",Xt="/PBO-Squad-ToDo/assets/icon_timespan.svg";function Et(r){return It()?(Wt(r),!0):!1}function Ct(r){return typeof r=="function"?r():T(r)}const Jt=typeof window<"u"&&typeof document<"u";typeof WorkerGlobalScope<"u"&&globalThis instanceof WorkerGlobalScope;const Zt=Object.prototype.toString,Gt=r=>Zt.call(r)==="[object Object]",vt=()=>{};function Qt(r){return r||kt()}function Kt(r,g=!0,m){const f=Qt(m);f?Dt(r,f):g?r():Bt(r)}function K(r){var g;const m=Ct(r);return(g=m==null?void 0:m.$el)!=null?g:m}const dt=Jt?window:void 0;function ft(...r){let g,m,f,D;if(typeof r[0]=="string"||Array.isArray(r[0])?([m,f,D]=r,g=dt):[g,m,f,D]=r,!g)return vt;Array.isArray(m)||(m=[m]),Array.isArray(f)||(f=[f]);const $=[],M=()=>{$.forEach(_=>_()),$.length=0},b=(_,c,w,x)=>(_.addEventListener(c,w,x),()=>_.removeEventListener(c,w,x)),k=yt(()=>[K(g),Ct(D)],([_,c])=>{if(M(),!_)return;const w=Gt(c)?{...c}:c;$.push(...m.flatMap(x=>f.map(S=>b(_,x,S,w))))},{immediate:!0,flush:"post"}),o=()=>{k(),M()};return Et(o),o}function te(){const r=V(!1);return kt()&&Dt(()=>{r.value=!0}),r}function ee(r){const g=te();return J(()=>(g.value,!!r()))}function ne(r,g,m={}){const{window:f=dt,...D}=m;let $;const M=ee(()=>f&&"ResizeObserver"in f),b=()=>{$&&($.disconnect(),$=void 0)},k=J(()=>Array.isArray(r)?r.map(c=>K(c)):[K(r)]),o=yt(k,c=>{if(b(),M.value&&f){$=new ResizeObserver(g);for(const w of c)w&&$.observe(w,D)}},{immediate:!0,flush:"post",deep:!0}),_=()=>{b(),o()};return Et(_),{isSupported:M,stop:_}}function ht(r,g={width:0,height:0},m={}){const{window:f=dt,box:D="content-box"}=m,$=J(()=>{var c,w;return(w=(c=K(r))==null?void 0:c.namespaceURI)==null?void 0:w.includes("svg")}),M=V(g.width),b=V(g.height),{stop:k}=ne(r,([c])=>{const w=D==="border-box"?c.borderBoxSize:D==="content-box"?c.contentBoxSize:c.devicePixelContentBoxSize;if(f&&$.value){const x=K(r);if(x){const S=f.getComputedStyle(x);M.value=Number.parseFloat(S.width),b.value=Number.parseFloat(S.height)}}else if(w){const x=Array.isArray(w)?w:[w];M.value=x.reduce((S,{inlineSize:O})=>S+O,0),b.value=x.reduce((S,{blockSize:O})=>S+O,0)}else M.value=c.contentRect.width,b.value=c.contentRect.height},m);Kt(()=>{const c=K(r);c&&(M.value="offsetWidth"in c?c.offsetWidth:g.width,b.value="offsetHeight"in c?c.offsetHeight:g.height)});const o=yt(()=>K(r),c=>{M.value=c?g.width:0,b.value=c?g.height:0});function _(){k(),o()}return{width:M,height:b,stop:_}}function se(r,g={}){const{threshold:m=50,onSwipe:f,onSwipeEnd:D,onSwipeStart:$,passive:M=!0,window:b=dt}=g,k=Mt({x:0,y:0}),o=Mt({x:0,y:0}),_=J(()=>k.x-o.x),c=J(()=>k.y-o.y),{max:w,abs:x}=Math,S=J(()=>w(x(_.value),x(c.value))>=m),O=V(!1),P=J(()=>S.value?x(_.value)>x(c.value)?_.value>0?"left":"right":c.value>0?"up":"down":"none"),j=i=>[i.touches[0].clientX,i.touches[0].clientY],N=(i,h)=>{k.x=i,k.y=h},A=(i,h)=>{o.x=i,o.y=h};let I;const C=re(b==null?void 0:b.document);M?I=C?{passive:!0}:{capture:!1}:I=C?{passive:!1,capture:!0}:{capture:!0};const p=i=>{O.value&&(D==null||D(i,P.value)),O.value=!1},a=[ft(r,"touchstart",i=>{if(i.touches.length!==1)return;I.capture&&!I.passive&&i.preventDefault();const[h,u]=j(i);N(h,u),A(h,u),$==null||$(i)},I),ft(r,"touchmove",i=>{if(i.touches.length!==1)return;const[h,u]=j(i);A(h,u),!O.value&&S.value&&(O.value=!0),O.value&&(f==null||f(i))},I),ft(r,["touchend","touchcancel"],p,I)];return{isPassiveEventSupported:C,isSwiping:O,direction:P,coordsStart:k,coordsEnd:o,lengthX:_,lengthY:c,stop:()=>a.forEach(i=>i())}}function re(r){if(!r)return!1;let g=!1;const m={get passive(){return g=!0,!1}};return r.addEventListener("x",vt,m),r.removeEventListener("x",vt),g}const ie={key:0,class:"modal-mask"},oe={class:"modal-wrapper"},ae={class:"modal-container"},ue={class:"modal-body"},ce=$t({__name:"InputModal",props:{isOpen:{type:Boolean,required:!0},entry:{type:Object}},emits:["close"],setup(r,{emit:g}){const m=g;function f(){m("close")}return(D,$)=>(R(),At(zt,{name:"modal"},{default:lt(()=>[r.isOpen?(R(),U("div",ie,[z("div",oe,[z("div",ae,[z("div",ue,[et(Rt,{onCloseaction:$[0]||($[0]=M=>f()),entry:r.entry},null,8,["entry"])])])])])):rt("",!0)]),_:1}))}});const le=gt(ce,[["__scopeId","data-v-6f049905"]]);const de={},fe={class:"btn"};function he(r,g){return R(),U("button",fe,[Lt(r.$slots,"default",{},void 0,!0)])}const pt=gt(de,[["render",he],["__scopeId","data-v-f5de9fc5"]]);var _t=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function xt(r){return r&&r.__esModule&&Object.prototype.hasOwnProperty.call(r,"default")?r.default:r}var Tt={exports:{}};(function(r,g){(function(m,f){r.exports=f()})(_t,function(){var m=1e3,f=6e4,D=36e5,$="millisecond",M="second",b="minute",k="hour",o="day",_="week",c="month",w="quarter",x="year",S="date",O="Invalid Date",P=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,j=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,N={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(l){var s=["th","st","nd","rd"],e=l%100;return"["+l+(s[(e-20)%10]||s[e]||s[0])+"]"}},A=function(l,s,e){var d=String(l);return!d||d.length>=s?l:""+Array(s+1-d.length).join(e)+l},I={s:A,z:function(l){var s=-l.utcOffset(),e=Math.abs(s),d=Math.floor(e/60),n=e%60;return(s<=0?"+":"-")+A(d,2,"0")+":"+A(n,2,"0")},m:function l(s,e){if(s.date()<e.date())return-l(e,s);var d=12*(e.year()-s.year())+(e.month()-s.month()),n=s.clone().add(d,c),v=e-n<0,y=s.clone().add(d+(v?-1:1),c);return+(-(d+(e-n)/(v?n-y:y-n))||0)},a:function(l){return l<0?Math.ceil(l)||0:Math.floor(l)},p:function(l){return{M:c,y:x,w:_,d:o,D:S,h:k,m:b,s:M,ms:$,Q:w}[l]||String(l||"").toLowerCase().replace(/s$/,"")},u:function(l){return l===void 0}},C="en",p={};p[C]=N;var a="$isDayjsObject",t=function(l){return l instanceof Y||!(!l||!l[a])},i=function l(s,e,d){var n;if(!s)return C;if(typeof s=="string"){var v=s.toLowerCase();p[v]&&(n=v),e&&(p[v]=e,n=v);var y=s.split("-");if(!n&&y.length>1)return l(y[0])}else{var E=s.name;p[E]=s,n=E}return!d&&n&&(C=n),n||!d&&C},h=function(l,s){if(t(l))return l.clone();var e=typeof s=="object"?s:{};return e.date=l,e.args=arguments,new Y(e)},u=I;u.l=i,u.i=t,u.w=function(l,s){return h(l,{locale:s.$L,utc:s.$u,x:s.$x,$offset:s.$offset})};var Y=function(){function l(e){this.$L=i(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[a]=!0}var s=l.prototype;return s.parse=function(e){this.$d=function(d){var n=d.date,v=d.utc;if(n===null)return new Date(NaN);if(u.u(n))return new Date;if(n instanceof Date)return new Date(n);if(typeof n=="string"&&!/Z$/i.test(n)){var y=n.match(P);if(y){var E=y[2]-1||0,B=(y[7]||"0").substring(0,3);return v?new Date(Date.UTC(y[1],E,y[3]||1,y[4]||0,y[5]||0,y[6]||0,B)):new Date(y[1],E,y[3]||1,y[4]||0,y[5]||0,y[6]||0,B)}}return new Date(n)}(e),this.init()},s.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},s.$utils=function(){return u},s.isValid=function(){return this.$d.toString()!==O},s.isSame=function(e,d){var n=h(e);return this.startOf(d)<=n&&n<=this.endOf(d)},s.isAfter=function(e,d){return h(e)<this.startOf(d)},s.isBefore=function(e,d){return this.endOf(d)<h(e)},s.$g=function(e,d,n){return u.u(e)?this[d]:this.set(n,e)},s.unix=function(){return Math.floor(this.valueOf()/1e3)},s.valueOf=function(){return this.$d.getTime()},s.startOf=function(e,d){var n=this,v=!!u.u(d)||d,y=u.p(e),E=function(G,F){var X=u.w(n.$u?Date.UTC(n.$y,F,G):new Date(n.$y,F,G),n);return v?X:X.endOf(o)},B=function(G,F){return u.w(n.toDate()[G].apply(n.toDate("s"),(v?[0,0,0,0]:[23,59,59,999]).slice(F)),n)},W=this.$W,L=this.$M,q=this.$D,tt="set"+(this.$u?"UTC":"");switch(y){case x:return v?E(1,0):E(31,11);case c:return v?E(1,L):E(0,L+1);case _:var Z=this.$locale().weekStart||0,nt=(W<Z?W+7:W)-Z;return E(v?q-nt:q+(6-nt),L);case o:case S:return B(tt+"Hours",0);case k:return B(tt+"Minutes",1);case b:return B(tt+"Seconds",2);case M:return B(tt+"Milliseconds",3);default:return this.clone()}},s.endOf=function(e){return this.startOf(e,!1)},s.$set=function(e,d){var n,v=u.p(e),y="set"+(this.$u?"UTC":""),E=(n={},n[o]=y+"Date",n[S]=y+"Date",n[c]=y+"Month",n[x]=y+"FullYear",n[k]=y+"Hours",n[b]=y+"Minutes",n[M]=y+"Seconds",n[$]=y+"Milliseconds",n)[v],B=v===o?this.$D+(d-this.$W):d;if(v===c||v===x){var W=this.clone().set(S,1);W.$d[E](B),W.init(),this.$d=W.set(S,Math.min(this.$D,W.daysInMonth())).$d}else E&&this.$d[E](B);return this.init(),this},s.set=function(e,d){return this.clone().$set(e,d)},s.get=function(e){return this[u.p(e)]()},s.add=function(e,d){var n,v=this;e=Number(e);var y=u.p(d),E=function(L){var q=h(v);return u.w(q.date(q.date()+Math.round(L*e)),v)};if(y===c)return this.set(c,this.$M+e);if(y===x)return this.set(x,this.$y+e);if(y===o)return E(1);if(y===_)return E(7);var B=(n={},n[b]=f,n[k]=D,n[M]=m,n)[y]||1,W=this.$d.getTime()+e*B;return u.w(W,this)},s.subtract=function(e,d){return this.add(-1*e,d)},s.format=function(e){var d=this,n=this.$locale();if(!this.isValid())return n.invalidDate||O;var v=e||"YYYY-MM-DDTHH:mm:ssZ",y=u.z(this),E=this.$H,B=this.$m,W=this.$M,L=n.weekdays,q=n.months,tt=n.meridiem,Z=function(F,X,st,ot){return F&&(F[X]||F(d,v))||st[X].slice(0,ot)},nt=function(F){return u.s(E%12||12,F,"0")},G=tt||function(F,X,st){var ot=F<12?"AM":"PM";return st?ot.toLowerCase():ot};return v.replace(j,function(F,X){return X||function(st){switch(st){case"YY":return String(d.$y).slice(-2);case"YYYY":return u.s(d.$y,4,"0");case"M":return W+1;case"MM":return u.s(W+1,2,"0");case"MMM":return Z(n.monthsShort,W,q,3);case"MMMM":return Z(q,W);case"D":return d.$D;case"DD":return u.s(d.$D,2,"0");case"d":return String(d.$W);case"dd":return Z(n.weekdaysMin,d.$W,L,2);case"ddd":return Z(n.weekdaysShort,d.$W,L,3);case"dddd":return L[d.$W];case"H":return String(E);case"HH":return u.s(E,2,"0");case"h":return nt(1);case"hh":return nt(2);case"a":return G(E,B,!0);case"A":return G(E,B,!1);case"m":return String(B);case"mm":return u.s(B,2,"0");case"s":return String(d.$s);case"ss":return u.s(d.$s,2,"0");case"SSS":return u.s(d.$ms,3,"0");case"Z":return y}return null}(F)||y.replace(":","")})},s.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},s.diff=function(e,d,n){var v,y=this,E=u.p(d),B=h(e),W=(B.utcOffset()-this.utcOffset())*f,L=this-B,q=function(){return u.m(y,B)};switch(E){case x:v=q()/12;break;case c:v=q();break;case w:v=q()/3;break;case _:v=(L-W)/6048e5;break;case o:v=(L-W)/864e5;break;case k:v=L/D;break;case b:v=L/f;break;case M:v=L/m;break;default:v=L}return n?v:u.a(v)},s.daysInMonth=function(){return this.endOf(c).$D},s.$locale=function(){return p[this.$L]},s.locale=function(e,d){if(!e)return this.$L;var n=this.clone(),v=i(e,d,!0);return v&&(n.$L=v),n},s.clone=function(){return u.w(this.$d,this)},s.toDate=function(){return new Date(this.valueOf())},s.toJSON=function(){return this.isValid()?this.toISOString():null},s.toISOString=function(){return this.$d.toISOString()},s.toString=function(){return this.$d.toUTCString()},l}(),H=Y.prototype;return h.prototype=H,[["$ms",$],["$s",M],["$m",b],["$H",k],["$W",o],["$M",c],["$y",x],["$D",S]].forEach(function(l){H[l[1]]=function(s){return this.$g(s,l[0],l[1])}}),h.extend=function(l,s){return l.$i||(l(s,Y,h),l.$i=!0),h},h.locale=i,h.isDayjs=t,h.unix=function(l){return h(1e3*l)},h.en=p[C],h.Ls=p,h.p={},h})})(Tt);var pe=Tt.exports;const mt=xt(pe);var Yt={exports:{}};(function(r,g){(function(m,f){r.exports=f()})(_t,function(){var m,f,D=1e3,$=6e4,M=36e5,b=864e5,k=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,o=31536e6,_=2628e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,w={years:o,months:_,days:b,hours:M,minutes:$,seconds:D,milliseconds:1,weeks:6048e5},x=function(p){return p instanceof I},S=function(p,a,t){return new I(p,t,a.$l)},O=function(p){return f.p(p)+"s"},P=function(p){return p<0},j=function(p){return P(p)?Math.ceil(p):Math.floor(p)},N=function(p){return Math.abs(p)},A=function(p,a){return p?P(p)?{negative:!0,format:""+N(p)+a}:{negative:!1,format:""+p+a}:{negative:!1,format:""}},I=function(){function p(t,i,h){var u=this;if(this.$d={},this.$l=h,t===void 0&&(this.$ms=0,this.parseFromMilliseconds()),i)return S(t*w[O(i)],this);if(typeof t=="number")return this.$ms=t,this.parseFromMilliseconds(),this;if(typeof t=="object")return Object.keys(t).forEach(function(l){u.$d[O(l)]=t[l]}),this.calMilliseconds(),this;if(typeof t=="string"){var Y=t.match(c);if(Y){var H=Y.slice(2).map(function(l){return l!=null?Number(l):0});return this.$d.years=H[0],this.$d.months=H[1],this.$d.weeks=H[2],this.$d.days=H[3],this.$d.hours=H[4],this.$d.minutes=H[5],this.$d.seconds=H[6],this.calMilliseconds(),this}}return this}var a=p.prototype;return a.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce(function(i,h){return i+(t.$d[h]||0)*w[h]},0)},a.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=j(t/o),t%=o,this.$d.months=j(t/_),t%=_,this.$d.days=j(t/b),t%=b,this.$d.hours=j(t/M),t%=M,this.$d.minutes=j(t/$),t%=$,this.$d.seconds=j(t/D),t%=D,this.$d.milliseconds=t},a.toISOString=function(){var t=A(this.$d.years,"Y"),i=A(this.$d.months,"M"),h=+this.$d.days||0;this.$d.weeks&&(h+=7*this.$d.weeks);var u=A(h,"D"),Y=A(this.$d.hours,"H"),H=A(this.$d.minutes,"M"),l=this.$d.seconds||0;this.$d.milliseconds&&(l+=this.$d.milliseconds/1e3,l=Math.round(1e3*l)/1e3);var s=A(l,"S"),e=t.negative||i.negative||u.negative||Y.negative||H.negative||s.negative,d=Y.format||H.format||s.format?"T":"",n=(e?"-":"")+"P"+t.format+i.format+u.format+d+Y.format+H.format+s.format;return n==="P"||n==="-P"?"P0D":n},a.toJSON=function(){return this.toISOString()},a.format=function(t){var i=t||"YYYY-MM-DDTHH:mm:ss",h={Y:this.$d.years,YY:f.s(this.$d.years,2,"0"),YYYY:f.s(this.$d.years,4,"0"),M:this.$d.months,MM:f.s(this.$d.months,2,"0"),D:this.$d.days,DD:f.s(this.$d.days,2,"0"),H:this.$d.hours,HH:f.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:f.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:f.s(this.$d.seconds,2,"0"),SSS:f.s(this.$d.milliseconds,3,"0")};return i.replace(k,function(u,Y){return Y||String(h[u])})},a.as=function(t){return this.$ms/w[O(t)]},a.get=function(t){var i=this.$ms,h=O(t);return h==="milliseconds"?i%=1e3:i=h==="weeks"?j(i/w[h]):this.$d[h],i||0},a.add=function(t,i,h){var u;return u=i?t*w[O(i)]:x(t)?t.$ms:S(t,this).$ms,S(this.$ms+u*(h?-1:1),this)},a.subtract=function(t,i){return this.add(t,i,!0)},a.locale=function(t){var i=this.clone();return i.$l=t,i},a.clone=function(){return S(this.$ms,this)},a.humanize=function(t){return m().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},a.valueOf=function(){return this.asMilliseconds()},a.milliseconds=function(){return this.get("milliseconds")},a.asMilliseconds=function(){return this.as("milliseconds")},a.seconds=function(){return this.get("seconds")},a.asSeconds=function(){return this.as("seconds")},a.minutes=function(){return this.get("minutes")},a.asMinutes=function(){return this.as("minutes")},a.hours=function(){return this.get("hours")},a.asHours=function(){return this.as("hours")},a.days=function(){return this.get("days")},a.asDays=function(){return this.as("days")},a.weeks=function(){return this.get("weeks")},a.asWeeks=function(){return this.as("weeks")},a.months=function(){return this.get("months")},a.asMonths=function(){return this.as("months")},a.years=function(){return this.get("years")},a.asYears=function(){return this.as("years")},p}(),C=function(p,a,t){return p.add(a.years()*t,"y").add(a.months()*t,"M").add(a.days()*t,"d").add(a.hours()*t,"h").add(a.minutes()*t,"m").add(a.seconds()*t,"s").add(a.milliseconds()*t,"ms")};return function(p,a,t){m=t,f=t().$utils(),t.duration=function(u,Y){var H=t.locale();return S(u,{$l:H},Y)},t.isDuration=x;var i=a.prototype.add,h=a.prototype.subtract;a.prototype.add=function(u,Y){return x(u)?C(this,u,1):i.bind(this)(u,Y)},a.prototype.subtract=function(u,Y){return x(u)?C(this,u,-1):h.bind(this)(u,Y)}}})})(Yt);var me=Yt.exports;const ve=xt(me);var jt={exports:{}};(function(r,g){(function(m,f){r.exports=f()})(_t,function(){return function(m,f,D){m=m||{};var $=f.prototype,M={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function b(o,_,c,w){return $.fromToBase(o,_,c,w)}D.en.relativeTime=M,$.fromToBase=function(o,_,c,w,x){for(var S,O,P,j=c.$locale().relativeTime||M,N=m.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],A=N.length,I=0;I<A;I+=1){var C=N[I];C.d&&(S=w?D(o).diff(c,C.d,!0):c.diff(o,C.d,!0));var p=(m.rounding||Math.round)(Math.abs(S));if(P=S>0,p<=C.r||!C.r){p<=1&&I>0&&(C=N[I-1]);var a=j[C.l];x&&(p=x(""+p)),O=typeof a=="string"?a.replace("%d",p):a(p,_,C.l,P);break}}if(_)return O;var t=P?j.future:j.past;return typeof t=="function"?t(O):t.replace("%s",O)},$.to=function(o,_){return b(o,_,this,!0)},$.from=function(o,_){return b(o,_,this)};var k=function(o){return o.$u?D.utc():D()};$.toNow=function(o){return this.to(k(this),o)},$.fromNow=function(o){return this.from(k(this),o)}}})})(jt);var ye=jt.exports;const $e=xt(ye),it=r=>(Pt("data-v-ca6c577f"),r=r(),Ft(),r),ge={class:"info-box-1d"},_e={key:0,class:"text-lg flex"},xe=it(()=>z("img",{alt:"Deadline",src:Ut},null,-1)),Me={key:1,class:"text-lg flex"},we=it(()=>z("img",{alt:"Expenditure",src:Xt},null,-1)),be={key:0,style:"color: #000000; padding: 0 0 10px 0; position: relative;",class:"text-base"},Se={key:1},De={class:"info-box-1d"},ke=it(()=>z("img",{alt:"Delete",style:{},src:bt},null,-1)),Oe=it(()=>z("img",{alt:"Edit",src:Ht},null,-1)),Ee=it(()=>z("img",{alt:"Done",src:St},null,-1)),ct=40,Ce=$t({__name:"CompactEntry",props:{entry:{type:Object,required:!0}},setup(r){mt.extend(ve),mt.extend($e);const g=Ot(),m=r,f=V(null),D=ht(f),$=V(null),M=V(null),b={width:ht(M).width,height:ht(M).height};let k=V(!1),o=m.entry;function _(){o.metadata.isExpanded||O(),o.metadata.isExpanded=!o.metadata.isExpanded}function c(t){console.log("Clicked Delete"),ut(t,!0)}function w(t){console.log("editClicked"),k.value=!k.value}function x(t){console.log("Clicked Done"),ut(t,!1)}function S(){k.value=!1}function O(){for(const t of g.entries)t.metadata.isExpanded&&(t.metadata.isExpanded=!1)}const P=V(null),j=J(()=>{var t;return(t=P.value)==null?void 0:t.offsetWidth}),N=V("0"),A=V(1);V(0),V(0),V(0);const{direction:I,isSwiping:C,lengthX:p,lengthY:a}=se(f,{passive:!0,onSwipe(t){if(j.value&&Math.abs(a.value)<50){const i=Math.abs(p.value);i/j.value*100>ct?N.value=`${-Math.sign(p.value)*ct}%`:N.value=`${-Math.sign(p.value)*i}px`}else N.value="0",A.value=1,C.value=!1},onSwipeEnd(t,i){j.value&&Math.abs(p.value)/j.value>=.5?p.value<0?ut(o,!0):ut(o,!1):N.value="0"}});return(t,i)=>{var h,u,Y;return R(),U("span",{ref_key:"container",ref:P,class:"horizontal-box stretch-horizontally",style:Q(`position: relative; min-height: 16vh; overflow: hidden; background-color: ${T(o).color}; `)},[z("article",{ref_key:"entryBox",ref:f,class:Nt(["entry-box",T(o).metadata.isExpanded?"detail-height":"compact-height"]),style:Q({position:"relative",width:"100%",left:N.value,margin:"0",transition:T(C)?"none":"all 200ms ease-out"}),onClick:i[3]||(i[3]=H=>_())},[z("aside",{class:"delete-box restrict-size",style:Q(`position: absolute; display: flex; width: ${ct}%; height: 100%; left: 0; transform: translateX(-100%)`)},[z("img",{alt:"",class:"icon no-padding center",src:bt,style:Q(`max-width: ${T(D).height.value/2}px`)},null,4)],4),z("aside",{class:"tick-box restrict-size",style:Q(`position: absolute; display: flex; width: ${ct}%; height: 100%; right: 0; transform: translateX(100%)`)},[z("img",{alt:"",class:"icon no-padding center",src:St,style:Q(`max-width: ${T(D).height.value/2}px`)},null,4)],4),z("div",{ref_key:"content",ref:M,style:Q(`width: ${b.width}px; padding: 10px;`)},[z("h1",{ref_key:"title",ref:$,class:"text-2xl font-medium"},at((h=T(o))!=null&&h.title?(u=T(o))==null?void 0:u.title:""),513),z("section",ge,[T(o).deadline!=null?(R(),U("span",_e,[xe,wt(" "+at((Y=T(o))==null?void 0:Y.deadline.toLocaleDateString()),1)])):rt("",!0),T(o).expenditure!=null?(R(),U("span",Me,[we,wt(" "+at(T(mt).duration({seconds:T(o).expenditure}).humanize()),1)])):rt("",!0)]),T(o).metadata.isExpanded&&T(o).description!=null?(R(),U("p",be,at(T(o).description),1)):rt("",!0),T(o).metadata.isExpanded?(R(),U("span",Se,[z("nav",De,[et(pt,{onClick:i[0]||(i[0]=H=>c(T(o))),class:"flex justify-center"},{default:lt(()=>[ke]),_:1}),et(pt,{onClick:i[1]||(i[1]=H=>w(T(o))),class:"flex justify-center"},{default:lt(()=>[Oe]),_:1}),et(pt,{onClick:i[2]||(i[2]=H=>x(T(o))),class:"flex justify-center"},{default:lt(()=>[Ee]),_:1})])])):rt("",!0)],4)],6),et(le,{"is-open":T(k),onClose:i[4]||(i[4]=H=>S()),entry:T(o)},null,8,["is-open","entry"])],4)}}});const Te=gt(Ce,[["__scopeId","data-v-ca6c577f"]]),Ye={style:"position: relative;"},Ie=$t({__name:"HomeView",setup(r){const g=Ot();function m(){for(const f of g.entries)console.log(f.metadata.isExpanded),f.metadata.isExpanded&&(f.metadata.isExpanded=!1)}return(f,D)=>(R(),U("div",Ye,[(R(!0),U(Vt,null,qt(T(g).entries.filter($=>$.metadata.isVisible==!0).slice(0,5),$=>(R(),U("div",{key:$.title},[et(Te,{entry:$,style:"margin-bottom: 5px",onCollapseOthers:m},null,8,["entry"])]))),128))]))}});export{Ie as default};