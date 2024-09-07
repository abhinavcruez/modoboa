import{b as B,G as m,k as N,a7 as T,o as i,Q as k,a as l,w as u,f,J as g,U as q,c as V,R as c,t as _,ac as R,i as G,e as P}from"./index-BAZgbal1.js";import{V as w,a as K}from"./VTextField-B1aixe0Y.js";import{V as j}from"./VAutocomplete-CA12dlaU.js";import{V as S,r as h}from"./VForm-CMLbYr8a.js";import{h as U,i as b}from"./index-2vnC8Vie.js";import{V as M}from"./VSpacer-DMaQhIUp.js";import{V as O}from"./VChip-CTOpyymj.js";import{V as E}from"./VSwitch-gbuBfPzI.js";const oe={__name:"ProviderAssociatedForm",props:{modelValue:{type:Array,default:null}},emits:["update:modelValue"],setup(A,{expose:C,emit:F}){const{$gettext:a}=B(),p=A,v=F,t=m([]),y=m(),r=m(),e=m({name:"",new_domain:""}),o=m([]);N(()=>p.modelValue,n=>{n&&(t.value=[...n])},{immediate:!0});async function x(){await y.value.validate()&&R.checkAssociatedDomain(e.value).then(s=>{s.status===200&&(t.value.push({name:e.value.name,new_domain:e.value.new_domain}),v("update:modelValue",t.value),e.value={name:"",new_domain:""})})}function I(n){t.value.splice(n,1),v("update:modelValue",t.value)}function D(n){const s=n.keyCode;(s===13||s===9)&&(x(),n.preventDefault())}T.getDomains().then(n=>{o.value=n.data});function L(){return t.value.length===0?a("You need to bind at least one domain to the provider."):!0}return C({vFormRef:r}),(n,s)=>(i(),k(g,null,[l(S,{ref_key:"formRef",ref:y},{default:u(()=>[l(w,{ref:"initialdomainField",modelValue:e.value.name,"onUpdate:modelValue":s[0]||(s[0]=d=>e.value.name=d),placeholder:f(a)("Name of the domain to migrate"),variant:"outlined",density:"compact",onKeydown:D},null,8,["modelValue","placeholder"]),l(j,{modelValue:e.value.new_domain,"onUpdate:modelValue":s[1]||(s[1]=d=>e.value.new_domain=d),label:f(a)("Local domain (optional)"),items:o.value,"item-title":"name","return-object":"",variant:"outlined",density:"compact",clearable:"",onKeydown:D},null,8,["modelValue","label","items"])]),_:1},512),l(U,{icon:"mdi-plus",color:"primary",onClick:x}),l(M),(i(!0),k(g,null,q(t.value,(d,$)=>(i(),V(O,{key:$,class:"mr-2 mt-2",closable:"","onClick:close":Y=>I($)},{default:u(()=>[d.new_domain?(i(),k(g,{key:0},[c(_(d.name)+" --> "+_(d.new_domain.name),1)],64)):(i(),k(g,{key:1},[c(_(d.name),1)],64))]),_:2},1032,["onClick:close"]))),128)),l(S,{ref_key:"vFormRef",ref:r},{default:u(()=>[l(K,{rules:[L]},null,8,["rules"])]),_:1},512)],64))}},J={class:"my-7"},Q={class:"custom-loader"},te={__name:"ProviderGeneralForm",props:{modelValue:{type:Object,default:null}},setup(A,{expose:C}){const F=A,a=G(()=>F.modelValue),p=m(0),v=m(!1),t=m();async function y(){if(!await t.value.validate())return;v.value=!0;const e={address:a.value.address,port:a.value.port,secured:a.value.secured};R.checkProvider(e).then(()=>{p.value=1}).catch(o=>{console.log(o),p.value=2}).finally(()=>v.value=!1)}return C({vFormRef:t}),(r,e)=>(i(),V(S,{ref_key:"vFormRef",ref:t},{default:u(()=>[l(w,{modelValue:a.value.name,"onUpdate:modelValue":e[0]||(e[0]=o=>a.value.name=o),label:r.$gettext("Provider name"),variant:"outlined",rules:[f(h).required]},null,8,["modelValue","label","rules"]),l(w,{modelValue:a.value.address,"onUpdate:modelValue":e[1]||(e[1]=o=>a.value.address=o),label:r.$gettext("Address (hostname or IP)"),rules:[f(h).required],variant:"outlined"},null,8,["modelValue","label","rules"]),l(w,{modelValue:a.value.port,"onUpdate:modelValue":e[2]||(e[2]=o=>a.value.port=o),label:r.$gettext("IMAP Port"),type:"number",variant:"outlined",rules:[f(h).required,f(h).portNumber]},null,8,["modelValue","label","rules"]),l(E,{modelValue:a.value.secured,"onUpdate:modelValue":e[3]||(e[3]=o=>a.value.secured=o),label:r.$gettext("Secured"),color:"primary",hint:r.$gettext("Is the IMAP connection secured using SSL/TLS or StartTLS"),"persistent-hint":""},null,8,["modelValue","label","hint"]),P("div",J,[l(U,{loading:v.value,color:"primary",onClick:y},{loader:u(()=>[P("span",Q,[l(b,{light:""},{default:u(()=>[c("mdi-cached")]),_:1})])]),default:u(()=>[c(_(r.$gettext("Check connection:"))+" ",1),p.value===0?(i(),V(b,{key:0,color:"blue-grey-darken-2"},{default:u(()=>[c(" mdi-help-circle-outline ")]),_:1})):p.value===1?(i(),V(b,{key:1,color:"success"},{default:u(()=>[c(" mdi-check-all ")]),_:1})):(i(),V(b,{key:2,color:"warning"},{default:u(()=>[c(" mdi-alert-circle-outline ")]),_:1}))]),_:1},8,["loading"])])]),_:1},512))}};export{te as _,oe as a};
