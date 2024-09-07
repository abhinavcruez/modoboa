import{x as D,F as z,a as F,j as L,k as $,b as p,l as R,o as j,G as w,d as E,v as O,n as q,e as G,s as M,p as N,i as H,g as d,h as J}from"./index-2vnC8Vie.js";import{m as K,a as Q}from"./tag-cARXM09U.js";import{m as U,u as W}from"./dimensions-BvonjXC6.js";import{q as X,a3 as Y,y as Z,z as ee,F as ae,i as o,B as te,D as le,a4 as ne,a as t,I as se}from"./index-BAZgbal1.js";const oe=D("v-alert-title"),re=["success","info","warning","error"],ie=X({border:{type:[Boolean,String],validator:e=>typeof e=="boolean"||["top","end","bottom","start"].includes(e)},borderColor:String,closable:Boolean,closeIcon:{type:Y,default:"$close"},closeLabel:{type:String,default:"$vuetify.close"},icon:{type:[Boolean,String,Function,Object],default:null},modelValue:{type:Boolean,default:!0},prominent:Boolean,title:String,text:String,type:{type:String,validator:e=>re.includes(e)},...K(),...z(),...U(),...F(),...L(),...$(),...p(),...Q(),...Z(),...R({variant:"flat"})},"VAlert"),me=ee()({name:"VAlert",props:ie(),emits:{"click:close":e=>!0,"update:modelValue":e=>!0},setup(e,v){let{emit:m,slots:a}=v;const r=ae(e,"modelValue"),n=o(()=>{if(e.icon!==!1)return e.type?e.icon??`$${e.type}`:e.icon}),y=o(()=>({color:e.color??e.type,variant:e.variant})),{themeClasses:f}=te(e),{colorClasses:k,colorStyles:b,variantClasses:P}=j(y),{densityClasses:V}=w(e),{dimensionStyles:C}=W(e),{elevationClasses:g}=E(e),{locationStyles:x}=O(e),{positionClasses:S}=q(e),{roundedClasses:_}=G(e),{textColorClasses:B,textColorStyles:h}=M(le(e,"borderColor")),{t:I}=ne(),i=o(()=>({"aria-label":I(e.closeLabel),onClick(s){r.value=!1,m("click:close",s)}}));return()=>{const s=!!(a.prepend||n.value),T=!!(a.title||e.title),A=!!(a.close||e.closable);return r.value&&t(e.tag,{class:["v-alert",e.border&&{"v-alert--border":!!e.border,[`v-alert--border-${e.border===!0?"start":e.border}`]:!0},{"v-alert--prominent":e.prominent},f.value,k.value,V.value,g.value,S.value,_.value,P.value,e.class],style:[b.value,C.value,x.value,e.style],role:"alert"},{default:()=>{var c,u;return[N(!1,"v-alert"),e.border&&t("div",{key:"border",class:["v-alert__border",B.value],style:h.value},null),s&&t("div",{key:"prepend",class:"v-alert__prepend"},[a.prepend?t(d,{key:"prepend-defaults",disabled:!n.value,defaults:{VIcon:{density:e.density,icon:n.value,size:e.prominent?44:28}}},a.prepend):t(H,{key:"prepend-icon",density:e.density,icon:n.value,size:e.prominent?44:28},null)]),t("div",{class:"v-alert__content"},[T&&t(oe,{key:"title"},{default:()=>{var l;return[((l=a.title)==null?void 0:l.call(a))??e.title]}}),((c=a.text)==null?void 0:c.call(a))??e.text,(u=a.default)==null?void 0:u.call(a)]),a.append&&t("div",{key:"append",class:"v-alert__append"},[a.append()]),A&&t("div",{key:"close",class:"v-alert__close"},[a.close?t(d,{key:"close-defaults",defaults:{VBtn:{icon:e.closeIcon,size:"x-small",variant:"text"}}},{default:()=>{var l;return[(l=a.close)==null?void 0:l.call(a,{props:i.value})]}}):t(J,se({key:"close-btn",icon:e.closeIcon,size:"x-small",variant:"text"},i.value),null)])]}})}}});export{me as V};
