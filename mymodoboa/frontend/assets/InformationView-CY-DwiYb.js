import{aa as f,_ as v,b as g,G as V,i as h,d as x,o as n,Q as m,a as o,w as e,R as c,t as s,f as i,c as b,e as d,S as k,J as I}from"./index-BAZgbal1.js";import{V as C,a as T}from"./VToolbar-7dK0ghH-.js";import{c as y,V as w,a as B}from"./VCard-DNO-zK2P.js";import{V as N}from"./VAlert-hKmdjX4d.js";import{V as A}from"./VDataTableVirtual-HgHDmgjX.js";import"./tag-cARXM09U.js";import"./index-2vnC8Vie.js";import"./dimensions-BvonjXC6.js";import"./VAvatar-DuybK5Si.js";import"./VDataTable-C0eQeH3V.js";import"./VSelect-2dOoZxQo.js";import"./VTextField-B1aixe0Y.js";import"./forwardRefs-CjMRaIA6.js";import"./ssrBoot-CWMlusa3.js";import"./VMenu-lrmWHp5u.js";import"./VChip-CTOpyymj.js";import"./filter-G89ZZbTZ.js";const D={getComponentsInformation(){return f.get("/admin/components/")}},G={tag:"p"},S={tag:"p",class:"text-body-2"},E=["href"],F={__name:"InformationView",setup(J){const{$gettext:t}=g(),l=V([]),p=[{title:t("Name"),value:"name"},{title:t("Installed version"),value:"version"},{title:t("Latest version"),value:"last_version"},{title:t("Description"),value:"description"}],u=h(()=>l.value.filter(a=>a.update).length>0);function _(a){return a.update?"green lighten-5":""}return x(()=>{D.getComponentsInformation().then(a=>{l.value=a.data})}),(a,L)=>(n(),m("div",null,[o(C,{flat:""},{default:e(()=>[o(T,null,{default:e(()=>[c(s(i(t)("Information")),1)]),_:1})]),_:1}),o(y,{class:"mt-6"},{default:e(()=>[o(w,null,{default:e(()=>[c(s(i(t)("Installed components")),1)]),_:1}),o(B,null,{default:e(()=>[u.value?(n(),b(N,{key:0,variant:"outlined",type:"success",text:"",border:"left"},{default:e(()=>[d("div",G,s(i(t)("One or more updates are available")),1),d("div",S,s(i(t)("Check out the following list to find related components")),1)]),_:1})):k("",!0),o(A,{headers:p,items:l.value,"item-class":_},{"item.last_version":e(({item:r})=>[r.changelog_url?(n(),m("a",{key:0,href:r.changelog_url,target:"_blank"},s(r.last_version),9,E)):(n(),m(I,{key:1},[c(s(r.last_version),1)],64))]),_:2},1032,["items"])]),_:1})]),_:1})]))}},et=v(F,[["__scopeId","data-v-eac2c328"]]);export{et as default};
