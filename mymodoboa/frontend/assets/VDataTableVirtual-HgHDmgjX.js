import{a as de,s as ue,c as ie,d as ce,f as me,u as ve,p as ge,g as he,t as be,i as fe,j as pe,k as ye,l as Te,o as D,q as x,r as I,v as Ve}from"./VDataTable-C0eQeH3V.js";import{m as De,u as xe,b as Ie}from"./VSelect-2dOoZxQo.js";import{q as we,z as Se,D as o,i as h,s as w,H as Re,a as t,j as b,I as m}from"./index-BAZgbal1.js";import{m as Pe,u as ke}from"./filter-G89ZZbTZ.js";import{u as Be}from"./tag-cARXM09U.js";const Fe=we({...de(),...ue(),...De(),...Pe()},"VDataTableVirtual"),qe=Se()({name:"VDataTableVirtual",props:Fe(),emits:{"update:modelValue":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0},setup(e,S){let{attrs:R,slots:a}=S;const{groupBy:d}=ie(e),{sortBy:u,multiSort:P,mustSort:k}=ce(e),{columns:i,headers:B,filterFunctions:F,sortFunctions:G,sortRawFunctions:H}=me(e,{groupBy:d,showSelect:o(e,"showSelect"),showExpand:o(e,"showExpand")}),{items:E}=ve(e,i),f=o(e,"search"),{filteredItems:N}=ke(e,E,f,{transform:l=>l.columns,customKeyFilter:F}),{toggleSort:j}=ge({sortBy:u,multiSort:P,mustSort:k}),{sortByWithGroups:q,opened:z,extractRows:O,isGroupOpen:U,toggleGroup:_}=he({groupBy:d,sortBy:u}),{sortedItems:A}=be(e,N,q,{transform:l=>l.columns,sortFunctions:G,sortRawFunctions:H}),{flatItems:v}=fe(A,d,z),c=h(()=>O(v.value)),{isSelected:C,select:K,selectAll:W,toggleSelect:J,someSelected:L,allSelected:M}=pe(e,{allItems:c,currentPage:c}),{isExpanded:Q,toggleExpand:X}=ye(e),{containerRef:Y,markerRef:Z,paddingTop:$,paddingBottom:ee,computedItems:ae,handleItemResize:te,handleScroll:le,handleScrollend:re}=xe(e,v),oe=h(()=>ae.value.map(l=>l.raw));Te({sortBy:u,page:w(1),itemsPerPage:w(-1),groupBy:d,search:f}),Re({VDataTableRows:{hideNoData:o(e,"hideNoData"),noDataText:o(e,"noDataText"),loading:o(e,"loading"),loadingText:o(e,"loadingText")}});const n=h(()=>({sortBy:u.value,toggleSort:j,someSelected:L.value,allSelected:M.value,isSelected:C,select:K,selectAll:W,toggleSelect:J,isExpanded:Q,toggleExpand:X,isGroupOpen:U,toggleGroup:_,items:c.value.map(l=>l.raw),internalItems:c.value,groupedItems:v.value,columns:i.value,headers:B.value}));Be(()=>{const l=D.filterProps(e),se=x.filterProps(e),ne=I.filterProps(e);return t(I,m({class:["v-data-table",{"v-data-table--loading":e.loading},e.class],style:e.style},ne),{top:()=>{var r;return(r=a.top)==null?void 0:r.call(a,n.value)},wrapper:()=>{var r,p,y;return t("div",{ref:Y,onScrollPassive:le,onScrollend:re,class:"v-table__wrapper",style:{height:b(e.height)}},[t("table",null,[(r=a.colgroup)==null?void 0:r.call(a,n.value),!e.hideDefaultHeader&&t("thead",{key:"thead"},[t(D,m(l,{sticky:e.fixedHeader}),a)]),!e.hideDefaultBody&&t("tbody",null,[t("tr",{ref:Z,style:{height:b($.value),border:0}},[t("td",{colspan:i.value.length,style:{height:0,border:0}},null)]),(p=a["body.prepend"])==null?void 0:p.call(a,n.value),t(x,m(R,se,{items:oe.value}),{...a,item:s=>t(Ie,{key:s.internalItem.index,renderless:!0,"onUpdate:height":g=>te(s.internalItem.index,g)},{default:g=>{var V;let{itemRef:T}=g;return((V=a.item)==null?void 0:V.call(a,{...s,itemRef:T}))??t(Ve,m(s.props,{ref:T,key:s.internalItem.index,index:s.internalItem.index}),a)}})}),(y=a["body.append"])==null?void 0:y.call(a,n.value),t("tr",{style:{height:b(ee.value),border:0}},[t("td",{colspan:i.value.length,style:{height:0,border:0}},null)])])])])},bottom:()=>{var r;return(r=a.bottom)==null?void 0:r.call(a,n.value)}})})}});export{qe as V};
