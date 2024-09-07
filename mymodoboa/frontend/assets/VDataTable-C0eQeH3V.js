import{b1 as ht,G,b2 as yt,q as _,a3 as $,y as Fe,z as O,F as j,a4 as Q,A as xt,B as Be,E as ae,s as pt,H as ie,i as I,aI as Y,D as T,a as o,I as B,b3 as xe,K as pe,n as Ce,aA as U,az as Ae,k as $e,X,a$ as se,b4 as St,j as L,aU as Pt,b5 as wt,b6 as Le,ag as ue,b7 as Z,x as ce,J as K,b8 as Re,R as Se,aF as oe,V as Pe,t as kt,ao as ee}from"./index-BAZgbal1.js";import{m as It,F as Oe,a as Dt,b as Vt,K as Tt,l as _t,h as M,N as Ft,H as Bt,c as Ct,L as At,i as we,G as $t}from"./index-2vnC8Vie.js";import{m as Ne,a as Ee,u as z}from"./tag-cARXM09U.js";import{a as Lt}from"./dimensions-BvonjXC6.js";import{V as He,a as fe}from"./VSelect-2dOoZxQo.js";import{V as Rt}from"./VChip-CTOpyymj.js";import{m as Ot,u as Nt}from"./filter-G89ZZbTZ.js";import{d as Et}from"./forwardRefs-CjMRaIA6.js";function ke(e,l,a){return Object.keys(e).filter(t=>ht(t)&&t.endsWith(l)).reduce((t,n)=>(t[n.slice(0,-l.length)]=r=>e[n](r,a(r)),t),{})}function Ht(){const e=G([]);yt(()=>e.value=[]);function l(a,t){e.value[t]=a}return{refs:e,updateRef:l}}const Gt=_({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:$,default:"$first"},prevIcon:{type:$,default:"$prev"},nextIcon:{type:$,default:"$next"},lastIcon:{type:$,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...It(),...Ne(),...Oe(),...Dt(),...Vt(),...Tt(),...Ee({tag:"nav"}),...Fe(),..._t({variant:"text"})},"VPagination"),Ie=O()({name:"VPagination",props:Gt(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,l){let{slots:a,emit:t}=l;const n=j(e,"modelValue"),{t:r,n:u}=Q(),{isRtl:s}=xt(),{themeClasses:c}=Be(e),{width:i}=ae(),m=pt(-1);ie(void 0,{scoped:!0});const{resizeRef:x}=Lt(b=>{if(!b.length)return;const{target:d,contentRect:w}=b[0],P=d.querySelector(".v-pagination__list > *");if(!P)return;const D=w.width,F=P.offsetWidth+parseFloat(getComputedStyle(P).marginRight)*2;m.value=S(D,F)}),v=I(()=>parseInt(e.length,10)),p=I(()=>parseInt(e.start,10)),h=I(()=>e.totalVisible!=null?parseInt(e.totalVisible,10):m.value>=0?m.value:S(i.value,58));function S(b,d){const w=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((b-d*w)/d).toFixed(2)))}const g=I(()=>{if(v.value<=0||isNaN(v.value)||v.value>Number.MAX_SAFE_INTEGER)return[];if(h.value<=0)return[];if(h.value===1)return[n.value];if(v.value<=h.value)return Y(v.value,p.value);const b=h.value%2===0,d=b?h.value/2:Math.floor(h.value/2),w=b?d:d+1,P=v.value-d;if(w-n.value>=0)return[...Y(Math.max(1,h.value-1),p.value),e.ellipsis,v.value];if(n.value-P>=(b?1:0)){const D=h.value-1,F=v.value-D+p.value;return[p.value,e.ellipsis,...Y(D,F)]}else{const D=Math.max(1,h.value-3),F=D===1?n.value:n.value-Math.ceil(D/2)+p.value;return[p.value,e.ellipsis,...Y(D,F),e.ellipsis,v.value]}});function y(b,d,w){b.preventDefault(),n.value=d,w&&t(w,d)}const{refs:f,updateRef:V}=Ht();ie({VPaginationBtn:{color:T(e,"color"),border:T(e,"border"),density:T(e,"density"),size:T(e,"size"),variant:T(e,"variant"),rounded:T(e,"rounded"),elevation:T(e,"elevation")}});const C=I(()=>g.value.map((b,d)=>{const w=P=>V(P,d);if(typeof b=="string")return{isActive:!1,key:`ellipsis-${d}`,page:b,props:{ref:w,ellipsis:!0,icon:!0,disabled:!0}};{const P=b===n.value;return{isActive:P,key:b,page:u(b),props:{ref:w,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:P?e.activeColor:e.color,"aria-current":P,"aria-label":r(P?e.currentPageAriaLabel:e.pageAriaLabel,b),onClick:D=>y(D,b)}}}})),k=I(()=>{const b=!!e.disabled||n.value<=p.value,d=!!e.disabled||n.value>=p.value+v.value-1;return{first:e.showFirstLastPage?{icon:s.value?e.lastIcon:e.firstIcon,onClick:w=>y(w,p.value,"first"),disabled:b,"aria-label":r(e.firstAriaLabel),"aria-disabled":b}:void 0,prev:{icon:s.value?e.nextIcon:e.prevIcon,onClick:w=>y(w,n.value-1,"prev"),disabled:b,"aria-label":r(e.previousAriaLabel),"aria-disabled":b},next:{icon:s.value?e.prevIcon:e.nextIcon,onClick:w=>y(w,n.value+1,"next"),disabled:d,"aria-label":r(e.nextAriaLabel),"aria-disabled":d},last:e.showFirstLastPage?{icon:s.value?e.firstIcon:e.lastIcon,onClick:w=>y(w,p.value+v.value-1,"last"),disabled:d,"aria-label":r(e.lastAriaLabel),"aria-disabled":d}:void 0}});function R(){var d;const b=n.value-p.value;(d=f.value[b])==null||d.$el.focus()}function N(b){b.key===xe.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,pe(R)):b.key===xe.right&&!e.disabled&&n.value<p.value+v.value-1&&(n.value=n.value+1,pe(R))}return z(()=>o(e.tag,{ref:x,class:["v-pagination",c.value,e.class],style:e.style,role:"navigation","aria-label":r(e.ariaLabel),onKeydown:N,"data-test":"v-pagination-root"},{default:()=>[o("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&o("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[a.first?a.first(k.value.first):o(M,B({_as:"VPaginationBtn"},k.value.first),null)]),o("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[a.prev?a.prev(k.value.prev):o(M,B({_as:"VPaginationBtn"},k.value.prev),null)]),C.value.map((b,d)=>o("li",{key:b.key,class:["v-pagination__item",{"v-pagination__item--is-active":b.isActive}],"data-test":"v-pagination-item"},[a.item?a.item(b):o(M,B({_as:"VPaginationBtn"},b.props),{default:()=>[b.page]})])),o("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[a.next?a.next(k.value.next):o(M,B({_as:"VPaginationBtn"},k.value.next),null)]),e.showFirstLastPage&&o("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[a.last?a.last(k.value.last):o(M,B({_as:"VPaginationBtn"},k.value.last),null)])])]})),{}}}),Mt=_({page:{type:[Number,String],default:1},itemsPerPage:{type:[Number,String],default:10}},"DataTable-paginate"),Ge=Symbol.for("vuetify:data-table-pagination");function jt(e){const l=j(e,"page",void 0,t=>+(t??1)),a=j(e,"itemsPerPage",void 0,t=>+(t??10));return{page:l,itemsPerPage:a}}function zt(e){const{page:l,itemsPerPage:a,itemsLength:t}=e,n=I(()=>a.value===-1?0:a.value*(l.value-1)),r=I(()=>a.value===-1?t.value:Math.min(t.value,n.value+a.value)),u=I(()=>a.value===-1||t.value===0?1:Math.ceil(t.value/a.value));Ce(()=>{l.value>u.value&&(l.value=u.value)});function s(v){a.value=v,l.value=1}function c(){l.value=se(l.value+1,1,u.value)}function i(){l.value=se(l.value-1,1,u.value)}function m(v){l.value=se(v,1,u.value)}const x={page:l,itemsPerPage:a,startIndex:n,stopIndex:r,pageCount:u,itemsLength:t,nextPage:c,prevPage:i,setPage:m,setItemsPerPage:s};return U(Ge,x),x}function Wt(){const e=X(Ge);if(!e)throw new Error("Missing pagination!");return e}function qt(e){const l=Ae("usePaginatedItems"),{items:a,startIndex:t,stopIndex:n,itemsPerPage:r}=e,u=I(()=>r.value<=0?a.value:a.value.slice(t.value,n.value));return $e(u,s=>{l.emit("update:currentItems",s)}),{paginatedItems:u}}const Me=_({prevIcon:{type:$,default:"$prev"},nextIcon:{type:$,default:"$next"},firstIcon:{type:$,default:"$first"},lastIcon:{type:$,default:"$last"},itemsPerPageText:{type:String,default:"$vuetify.dataFooter.itemsPerPageText"},pageText:{type:String,default:"$vuetify.dataFooter.pageText"},firstPageLabel:{type:String,default:"$vuetify.dataFooter.firstPage"},prevPageLabel:{type:String,default:"$vuetify.dataFooter.prevPage"},nextPageLabel:{type:String,default:"$vuetify.dataFooter.nextPage"},lastPageLabel:{type:String,default:"$vuetify.dataFooter.lastPage"},itemsPerPageOptions:{type:Array,default:()=>[{value:10,title:"10"},{value:25,title:"25"},{value:50,title:"50"},{value:100,title:"100"},{value:-1,title:"$vuetify.dataFooter.itemsPerPageAll"}]},showCurrentPage:Boolean},"VDataTableFooter"),De=O()({name:"VDataTableFooter",props:Me(),setup(e,l){let{slots:a}=l;const{t}=Q(),{page:n,pageCount:r,startIndex:u,stopIndex:s,itemsLength:c,itemsPerPage:i,setItemsPerPage:m}=Wt(),x=I(()=>e.itemsPerPageOptions.map(v=>typeof v=="number"?{value:v,title:v===-1?t("$vuetify.dataFooter.itemsPerPageAll"):String(v)}:{...v,title:isNaN(Number(v.title))?t(v.title):v.title}));return z(()=>{var p;const v=Ie.filterProps(e);return o("div",{class:"v-data-table-footer"},[(p=a.prepend)==null?void 0:p.call(a),o("div",{class:"v-data-table-footer__items-per-page"},[o("span",null,[t(e.itemsPerPageText)]),o(He,{items:x.value,modelValue:i.value,"onUpdate:modelValue":h=>m(Number(h)),density:"compact",variant:"outlined","hide-details":!0},null)]),o("div",{class:"v-data-table-footer__info"},[o("div",null,[t(e.pageText,c.value?u.value+1:0,s.value,c.value)])]),o("div",{class:"v-data-table-footer__pagination"},[o(Ie,B({modelValue:n.value,"onUpdate:modelValue":h=>n.value=h,density:"comfortable","first-aria-label":e.firstPageLabel,"last-aria-label":e.lastPageLabel,length:r.value,"next-aria-label":e.nextPageLabel,"previous-aria-label":e.prevPageLabel,rounded:!0,"show-first-last-page":!0,"total-visible":e.showCurrentPage?1:0,variant:"plain"},v),null)])])}),{}}}),te=St({align:{type:String,default:"start"},fixed:Boolean,fixedOffset:[Number,String],height:[Number,String],lastFixed:Boolean,noPadding:Boolean,tag:String,width:[Number,String],maxWidth:[Number,String],nowrap:Boolean},(e,l)=>{let{slots:a}=l;const t=e.tag??"td";return o(t,{class:["v-data-table__td",{"v-data-table-column--fixed":e.fixed,"v-data-table-column--last-fixed":e.lastFixed,"v-data-table-column--no-padding":e.noPadding,"v-data-table-column--nowrap":e.nowrap},`v-data-table-column--align-${e.align}`],style:{height:L(e.height),width:L(e.width),maxWidth:L(e.maxWidth),left:L(e.fixedOffset||null)}},{default:()=>{var n;return[(n=a.default)==null?void 0:n.call(a)]}})}),Kt=_({headers:Array},"DataTable-header"),je=Symbol.for("vuetify:data-table-headers"),ze={title:"",sortable:!1},Ut={...ze,width:48};function Xt(){const l=(arguments.length>0&&arguments[0]!==void 0?arguments[0]:[]).map(a=>({element:a,priority:0}));return{enqueue:(a,t)=>{let n=!1;for(let r=0;r<l.length;r++)if(l[r].priority>t){l.splice(r,0,{element:a,priority:t}),n=!0;break}n||l.push({element:a,priority:t})},size:()=>l.length,count:()=>{let a=0;if(!l.length)return 0;const t=Math.floor(l[0].priority);for(let n=0;n<l.length;n++)Math.floor(l[n].priority)===t&&(a+=1);return a},dequeue:()=>l.shift()}}function de(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[];if(!e.children)l.push(e);else for(const a of e.children)de(a,l);return l}function We(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:new Set;for(const a of e)a.key&&l.add(a.key),a.children&&We(a.children,l);return l}function Jt(e){if(e.key){if(e.key==="data-table-group")return ze;if(["data-table-expand","data-table-select"].includes(e.key))return Ut}}function ve(e){let l=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return e.children?Math.max(l,...e.children.map(a=>ve(a,l+1))):l}function Qt(e){let l=!1;function a(r){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;if(r)if(u&&(r.fixed=!0),r.fixed)if(r.children)for(let s=r.children.length-1;s>=0;s--)a(r.children[s],!0);else l?isNaN(+r.width)&&wt(`Multiple fixed columns should have a static width (key: ${r.key})`):r.lastFixed=!0,l=!0;else if(r.children)for(let s=r.children.length-1;s>=0;s--)a(r.children[s]);else l=!1}for(let r=e.length-1;r>=0;r--)a(e[r]);function t(r){let u=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;if(!r)return u;if(r.children){r.fixedOffset=u;for(const s of r.children)u=t(s,u)}else r.fixed&&(r.fixedOffset=u,u+=parseFloat(r.width||"0")||0);return u}let n=0;for(const r of e)n=t(r,n)}function Yt(e,l){const a=[];let t=0;const n=Xt(e);for(;n.size()>0;){let u=n.count();const s=[];let c=1;for(;u>0;){const{element:i,priority:m}=n.dequeue(),x=l-t-ve(i);if(s.push({...i,rowspan:x??1,colspan:i.children?de(i).length:1}),i.children)for(const v of i.children){const p=m%1+c/Math.pow(10,t+2);n.enqueue(v,t+x+p)}c+=1,u-=1}t+=1,a.push(s)}return{columns:e.map(u=>de(u)).flat(),headers:a}}function qe(e){const l=[];for(const a of e){const t={...Jt(a),...a},n=t.key??(typeof t.value=="string"?t.value:null),r=t.value??n??null,u={...t,key:n,value:r,sortable:t.sortable??(t.key!=null||!!t.sort),children:t.children?qe(t.children):void 0};l.push(u)}return l}function Zt(e,l){const a=G([]),t=G([]),n=G({}),r=G({}),u=G({});Ce(()=>{var S,g,y;const i=(e.headers||Object.keys(e.items[0]??{}).map(f=>({key:f,title:Pt(f)}))).slice(),m=We(i);(S=l==null?void 0:l.groupBy)!=null&&S.value.length&&!m.has("data-table-group")&&i.unshift({key:"data-table-group",title:"Group"}),(g=l==null?void 0:l.showSelect)!=null&&g.value&&!m.has("data-table-select")&&i.unshift({key:"data-table-select"}),(y=l==null?void 0:l.showExpand)!=null&&y.value&&!m.has("data-table-expand")&&i.push({key:"data-table-expand"});const x=qe(i);Qt(x);const v=Math.max(...x.map(f=>ve(f)))+1,p=Yt(x,v);a.value=p.headers,t.value=p.columns;const h=p.headers.flat(1);for(const f of h)f.key&&(f.sortable&&(f.sort&&(n.value[f.key]=f.sort),f.sortRaw&&(r.value[f.key]=f.sortRaw)),f.filter&&(u.value[f.key]=f.filter))});const s={headers:a,columns:t,sortFunctions:n,sortRawFunctions:r,filterFunctions:u};return U(je,s),s}function le(){const e=X(je);if(!e)throw new Error("Missing headers!");return e}const ea={showSelectAll:!1,allSelected:()=>[],select:e=>{var t;let{items:l,value:a}=e;return new Set(a?[(t=l[0])==null?void 0:t.value]:[])},selectAll:e=>{let{selected:l}=e;return l}},Ke={showSelectAll:!0,allSelected:e=>{let{currentPage:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,currentPage:a,selected:t}=e;return Ke.select({items:a,value:l,selected:t})}},Ue={showSelectAll:!0,allSelected:e=>{let{allItems:l}=e;return l},select:e=>{let{items:l,value:a,selected:t}=e;for(const n of l)a?t.add(n.value):t.delete(n.value);return t},selectAll:e=>{let{value:l,allItems:a,selected:t}=e;return Ue.select({items:a,value:l,selected:t})}},ta=_({showSelect:Boolean,selectStrategy:{type:[String,Object],default:"page"},modelValue:{type:Array,default:()=>[]},valueComparator:{type:Function,default:Le}},"DataTable-select"),Xe=Symbol.for("vuetify:data-table-selection");function aa(e,l){let{allItems:a,currentPage:t}=l;const n=j(e,"modelValue",e.modelValue,y=>new Set(ue(y).map(f=>{var V;return((V=a.value.find(C=>e.valueComparator(f,C.value)))==null?void 0:V.value)??f})),y=>[...y.values()]),r=I(()=>a.value.filter(y=>y.selectable)),u=I(()=>t.value.filter(y=>y.selectable)),s=I(()=>{if(typeof e.selectStrategy=="object")return e.selectStrategy;switch(e.selectStrategy){case"single":return ea;case"all":return Ue;case"page":default:return Ke}});function c(y){return ue(y).every(f=>n.value.has(f.value))}function i(y){return ue(y).some(f=>n.value.has(f.value))}function m(y,f){const V=s.value.select({items:y,value:f,selected:new Set(n.value)});n.value=V}function x(y){m([y],!c([y]))}function v(y){const f=s.value.selectAll({value:y,allItems:r.value,currentPage:u.value,selected:new Set(n.value)});n.value=f}const p=I(()=>n.value.size>0),h=I(()=>{const y=s.value.allSelected({allItems:r.value,currentPage:u.value});return!!y.length&&c(y)}),S=I(()=>s.value.showSelectAll),g={toggleSelect:x,select:m,selectAll:v,isSelected:c,isSomeSelected:i,someSelected:p,allSelected:h,showSelectAll:S};return U(Xe,g),g}function ne(){const e=X(Xe);if(!e)throw new Error("Missing selection!");return e}const la=_({sortBy:{type:Array,default:()=>[]},customKeySort:Object,multiSort:Boolean,mustSort:Boolean},"DataTable-sort"),Je=Symbol.for("vuetify:data-table-sort");function na(e){const l=j(e,"sortBy"),a=T(e,"mustSort"),t=T(e,"multiSort");return{sortBy:l,mustSort:a,multiSort:t}}function ra(e){const{sortBy:l,mustSort:a,multiSort:t,page:n}=e,r=c=>{if(c.key==null)return;let i=l.value.map(x=>({...x}))??[];const m=i.find(x=>x.key===c.key);m?m.order==="desc"?a.value?m.order="asc":i=i.filter(x=>x.key!==c.key):m.order="desc":t.value?i=[...i,{key:c.key,order:"asc"}]:i=[{key:c.key,order:"asc"}],l.value=i,n&&(n.value=1)};function u(c){return!!l.value.find(i=>i.key===c.key)}const s={sortBy:l,toggleSort:r,isSorted:u};return U(Je,s),s}function Qe(){const e=X(Je);if(!e)throw new Error("Missing sort!");return e}function sa(e,l,a,t){const n=Q();return{sortedItems:I(()=>{var u,s;return!a.value.length||e.disableSort?l.value:ua(l.value,a.value,n.current.value,{transform:t==null?void 0:t.transform,sortFunctions:{...e.customKeySort,...(u=t==null?void 0:t.sortFunctions)==null?void 0:u.value},sortRawFunctions:(s=t==null?void 0:t.sortRawFunctions)==null?void 0:s.value})})}}function ua(e,l,a,t){const n=new Intl.Collator(a,{sensitivity:"accent",usage:"sort"});return e.map(u=>[u,t!=null&&t.transform?t.transform(u):u]).sort((u,s)=>{var c,i;for(let m=0;m<l.length;m++){let x=!1;const v=l[m].key,p=l[m].order??"asc";if(p===!1)continue;let h=u[1][v],S=s[1][v],g=u[0].raw,y=s[0].raw;if(p==="desc"&&([h,S]=[S,h],[g,y]=[y,g]),(c=t==null?void 0:t.sortRawFunctions)!=null&&c[v]){const f=t.sortRawFunctions[v](g,y);if(f==null)continue;if(x=!0,f)return f}if((i=t==null?void 0:t.sortFunctions)!=null&&i[v]){const f=t.sortFunctions[v](h,S);if(f==null)continue;if(x=!0,f)return f}if(!x){if(h instanceof Date&&S instanceof Date)return h.getTime()-S.getTime();if([h,S]=[h,S].map(f=>f!=null?f.toString().toLocaleLowerCase():f),h!==S)return Z(h)&&Z(S)?0:Z(h)?-1:Z(S)?1:!isNaN(h)&&!isNaN(S)?Number(h)-Number(S):n.compare(h,S)}}return 0}).map(u=>{let[s]=u;return s})}const Ye=_({color:String,sticky:Boolean,disableSort:Boolean,multiSort:Boolean,sortAscIcon:{type:$,default:"$sortAsc"},sortDescIcon:{type:$,default:"$sortDesc"},headerProps:{type:Object},...ce(),...Ft()},"VDataTableHeaders"),Ve=O()({name:"VDataTableHeaders",props:Ye(),setup(e,l){let{slots:a}=l;const{t}=Q(),{toggleSort:n,sortBy:r,isSorted:u}=Qe(),{someSelected:s,allSelected:c,selectAll:i,showSelectAll:m}=ne(),{columns:x,headers:v}=le(),{loaderClasses:p}=Bt(e);function h(b,d){if(!(!e.sticky&&!b.fixed))return{position:"sticky",left:b.fixed?L(b.fixedOffset):void 0,top:e.sticky?`calc(var(--v-table-header-height) * ${d})`:void 0}}function S(b){const d=r.value.find(w=>w.key===b.key);return d?d.order==="asc"?e.sortAscIcon:e.sortDescIcon:e.sortAscIcon}const{backgroundColorClasses:g,backgroundColorStyles:y}=Ct(e,"color"),{displayClasses:f,mobile:V}=ae(e),C=I(()=>({headers:v.value,columns:x.value,toggleSort:n,isSorted:u,sortBy:r.value,someSelected:s.value,allSelected:c.value,selectAll:i,getSortIcon:S})),k=I(()=>["v-data-table__th",{"v-data-table__th--sticky":e.sticky},f.value,p.value]),R=b=>{let{column:d,x:w,y:P}=b;const D=d.key==="data-table-select"||d.key==="data-table-expand",F=B(e.headerProps??{},d.headerProps??{});return o(te,B({tag:"th",align:d.align,class:[{"v-data-table__th--sortable":d.sortable&&!e.disableSort,"v-data-table__th--sorted":u(d),"v-data-table__th--fixed":d.fixed},...k.value],style:{width:L(d.width),minWidth:L(d.minWidth),maxWidth:L(d.maxWidth),...h(d,P)},colspan:d.colspan,rowspan:d.rowspan,onClick:d.sortable?()=>n(d):void 0,fixed:d.fixed,nowrap:d.nowrap,lastFixed:d.lastFixed,noPadding:D},F),{default:()=>{var q;const E=`header.${d.key}`,W={column:d,selectAll:i,isSorted:u,toggleSort:n,sortBy:r.value,someSelected:s.value,allSelected:c.value,getSortIcon:S};return a[E]?a[E](W):d.key==="data-table-select"?((q=a["header.data-table-select"])==null?void 0:q.call(a,W))??(m.value&&o(fe,{modelValue:c.value,indeterminate:s.value&&!c.value,"onUpdate:modelValue":i},null)):o("div",{class:"v-data-table-header__content"},[o("span",null,[d.title]),d.sortable&&!e.disableSort&&o(we,{key:"icon",class:"v-data-table-header__sort-icon",icon:S(d)},null),e.multiSort&&u(d)&&o("div",{key:"badge",class:["v-data-table-header__sort-badge",...g.value],style:y.value},[r.value.findIndex(re=>re.key===d.key)+1])])}})},N=()=>{const b=B(e.headerProps??{}??{}),d=I(()=>x.value.filter(P=>(P==null?void 0:P.sortable)&&!e.disableSort)),w=I(()=>{if(x.value.find(D=>D.key==="data-table-select")!=null)return c.value?"$checkboxOn":s.value?"$checkboxIndeterminate":"$checkboxOff"});return o(te,B({tag:"th",class:[...k.value],colspan:v.value.length+1},b),{default:()=>[o("div",{class:"v-data-table-header__content"},[o(He,{chips:!0,class:"v-data-table__td-sort-select",clearable:!0,density:"default",items:d.value,label:t("$vuetify.dataTable.sortBy"),multiple:e.multiSort,variant:"underlined","onClick:clear":()=>r.value=[],appendIcon:w.value,"onClick:append":()=>i(!c.value)},{...a,chip:P=>{var D;return o(Rt,{onClick:(D=P.item.raw)!=null&&D.sortable?()=>n(P.item.raw):void 0,onMousedown:F=>{F.preventDefault(),F.stopPropagation()}},{default:()=>[P.item.title,o(we,{class:["v-data-table__td-sort-icon",u(P.item.raw)&&"v-data-table__td-sort-icon-active"],icon:S(P.item.raw),size:"small"},null)]})}})])]})};z(()=>V.value?o("tr",null,[o(N,null,null)]):o(K,null,[a.headers?a.headers(C.value):v.value.map((b,d)=>o("tr",null,[b.map((w,P)=>o(R,{column:w,x:P,y:d},null))])),e.loading&&o("tr",{class:"v-data-table-progress"},[o("th",{colspan:x.value.length},[o(At,{name:"v-data-table-progress",absolute:!0,active:!0,color:typeof e.loading=="boolean"?void 0:e.loading,indeterminate:!0},{default:a.loader})])])]))}}),oa=_({groupBy:{type:Array,default:()=>[]}},"DataTable-group"),Ze=Symbol.for("vuetify:data-table-group");function ia(e){return{groupBy:j(e,"groupBy")}}function da(e){const{groupBy:l,sortBy:a}=e,t=G(new Set),n=I(()=>l.value.map(i=>({...i,order:i.order??!1})).concat(a.value));function r(i){return t.value.has(i.id)}function u(i){const m=new Set(t.value);r(i)?m.delete(i.id):m.add(i.id),t.value=m}function s(i){function m(x){const v=[];for(const p of x.items)"type"in p&&p.type==="group"?v.push(...m(p)):v.push(p);return v}return m({type:"group",items:i,id:"dummy",key:"dummy",value:"dummy",depth:0})}const c={sortByWithGroups:n,toggleGroup:u,opened:t,groupBy:l,extractRows:s,isGroupOpen:r};return U(Ze,c),c}function et(){const e=X(Ze);if(!e)throw new Error("Missing group!");return e}function ca(e,l){if(!e.length)return[];const a=new Map;for(const t of e){const n=Re(t.raw,l);a.has(n)||a.set(n,[]),a.get(n).push(t)}return a}function tt(e,l){let a=arguments.length>2&&arguments[2]!==void 0?arguments[2]:0,t=arguments.length>3&&arguments[3]!==void 0?arguments[3]:"root";if(!l.length)return[];const n=ca(e,l[0]),r=[],u=l.slice(1);return n.forEach((s,c)=>{const i=l[0],m=`${t}_${i}_${c}`;r.push({depth:a,id:m,key:i,value:c,items:u.length?tt(s,u,a+1,m):s,type:"group"})}),r}function at(e,l){const a=[];for(const t of e)"type"in t&&t.type==="group"?(t.value!=null&&a.push(t),(l.has(t.id)||t.value==null)&&a.push(...at(t.items,l))):a.push(t);return a}function fa(e,l,a){return{flatItems:I(()=>{if(!l.value.length)return e.value;const n=tt(e.value,l.value.map(r=>r.key));return at(n,a.value)})}}const va=_({item:{type:Object,required:!0}},"VDataTableGroupHeaderRow"),ga=O()({name:"VDataTableGroupHeaderRow",props:va(),setup(e,l){let{slots:a}=l;const{isGroupOpen:t,toggleGroup:n,extractRows:r}=et(),{isSelected:u,isSomeSelected:s,select:c}=ne(),{columns:i}=le(),m=I(()=>r([e.item]));return()=>o("tr",{class:"v-data-table-group-header-row",style:{"--v-data-table-group-header-row-depth":e.item.depth}},[i.value.map(x=>{var v,p;if(x.key==="data-table-group"){const h=t(e.item)?"$expand":"$next",S=()=>n(e.item);return((v=a["data-table-group"])==null?void 0:v.call(a,{item:e.item,count:m.value.length,props:{icon:h,onClick:S}}))??o(te,{class:"v-data-table-group-header-row__column"},{default:()=>[o(M,{size:"small",variant:"text",icon:h,onClick:S},null),o("span",null,[e.item.value]),o("span",null,[Se("("),m.value.length,Se(")")])]})}if(x.key==="data-table-select"){const h=u(m.value),S=s(m.value)&&!h,g=y=>c(m.value,y);return((p=a["data-table-select"])==null?void 0:p.call(a,{props:{modelValue:h,indeterminate:S,"onUpdate:modelValue":g}}))??o("td",null,[o(fe,{modelValue:h,indeterminate:S,"onUpdate:modelValue":g},null)])}return o("td",null,null)})])}}),ma=_({expandOnClick:Boolean,showExpand:Boolean,expanded:{type:Array,default:()=>[]}},"DataTable-expand"),lt=Symbol.for("vuetify:datatable:expanded");function ba(e){const l=T(e,"expandOnClick"),a=j(e,"expanded",e.expanded,s=>new Set(s),s=>[...s.values()]);function t(s,c){const i=new Set(a.value);c?i.add(s.value):i.delete(s.value),a.value=i}function n(s){return a.value.has(s.value)}function r(s){t(s,!n(s))}const u={expand:t,expanded:a,expandOnClick:l,isExpanded:n,toggleExpand:r};return U(lt,u),u}function nt(){const e=X(lt);if(!e)throw new Error("foo");return e}const ha=_({index:Number,item:Object,cellProps:[Object,Function],onClick:oe(),onContextmenu:oe(),onDblclick:oe(),...ce()},"VDataTableRow"),ya=O()({name:"VDataTableRow",props:ha(),setup(e,l){let{slots:a}=l;const{displayClasses:t,mobile:n}=ae(e,"v-data-table__tr"),{isSelected:r,toggleSelect:u,someSelected:s,allSelected:c,selectAll:i}=ne(),{isExpanded:m,toggleExpand:x}=nt(),{toggleSort:v,sortBy:p,isSorted:h}=Qe(),{columns:S}=le();z(()=>o("tr",{class:["v-data-table__tr",{"v-data-table__tr--clickable":!!(e.onClick||e.onContextmenu||e.onDblclick)},t.value],onClick:e.onClick,onContextmenu:e.onContextmenu,onDblclick:e.onDblclick},[e.item&&S.value.map((g,y)=>{const f=e.item,V=`item.${g.key}`,C=`header.${g.key}`,k={index:e.index,item:f.raw,internalItem:f,value:Re(f.columns,g.key),column:g,isSelected:r,toggleSelect:u,isExpanded:m,toggleExpand:x},R={column:g,selectAll:i,isSorted:h,toggleSort:v,sortBy:p.value,someSelected:s.value,allSelected:c.value,getSortIcon:()=>""},N=typeof e.cellProps=="function"?e.cellProps({index:k.index,item:k.item,internalItem:k.internalItem,value:k.value,column:g}):e.cellProps,b=typeof g.cellProps=="function"?g.cellProps({index:k.index,item:k.item,internalItem:k.internalItem,value:k.value}):g.cellProps;return o(te,B({align:g.align,class:{"v-data-table__td--expanded-row":g.key==="data-table-expand","v-data-table__td--select-row":g.key==="data-table-select"},fixed:g.fixed,fixedOffset:g.fixedOffset,lastFixed:g.lastFixed,maxWidth:n.value?void 0:g.maxWidth,noPadding:g.key==="data-table-select"||g.key==="data-table-expand",nowrap:g.nowrap,width:n.value?void 0:g.width},N,b),{default:()=>{var w,P,D,F,E;if(a[V]&&!n.value)return(w=a[V])==null?void 0:w.call(a,k);if(g.key==="data-table-select")return((P=a["item.data-table-select"])==null?void 0:P.call(a,k))??o(fe,{disabled:!f.selectable,modelValue:r([f]),onClick:Pe(()=>u(f),["stop"])},null);if(g.key==="data-table-expand")return((D=a["item.data-table-expand"])==null?void 0:D.call(a,k))??o(M,{icon:m(f)?"$collapse":"$expand",size:"small",variant:"text",onClick:Pe(()=>x(f),["stop"])},null);const d=kt(k.value);return n.value?o(K,null,[o("div",{class:"v-data-table__td-title"},[((F=a[C])==null?void 0:F.call(a,R))??g.title]),o("div",{class:"v-data-table__td-value"},[((E=a[V])==null?void 0:E.call(a,k))??d])]):d}})})]))}}),rt=_({loading:[Boolean,String],loadingText:{type:String,default:"$vuetify.dataIterator.loadingText"},hideNoData:Boolean,items:{type:Array,default:()=>[]},noDataText:{type:String,default:"$vuetify.noDataText"},rowProps:[Object,Function],cellProps:[Object,Function],...ce()},"VDataTableRows"),Te=O()({name:"VDataTableRows",inheritAttrs:!1,props:rt(),setup(e,l){let{attrs:a,slots:t}=l;const{columns:n}=le(),{expandOnClick:r,toggleExpand:u,isExpanded:s}=nt(),{isSelected:c,toggleSelect:i}=ne(),{toggleGroup:m,isGroupOpen:x}=et(),{t:v}=Q(),{mobile:p}=ae(e);return z(()=>{var h,S;return e.loading&&(!e.items.length||t.loading)?o("tr",{class:"v-data-table-rows-loading",key:"loading"},[o("td",{colspan:n.value.length},[((h=t.loading)==null?void 0:h.call(t))??v(e.loadingText)])]):!e.loading&&!e.items.length&&!e.hideNoData?o("tr",{class:"v-data-table-rows-no-data",key:"no-data"},[o("td",{colspan:n.value.length},[((S=t["no-data"])==null?void 0:S.call(t))??v(e.noDataText)])]):o(K,null,[e.items.map((g,y)=>{var C;if(g.type==="group"){const k={index:y,item:g,columns:n.value,isExpanded:s,toggleExpand:u,isSelected:c,toggleSelect:i,toggleGroup:m,isGroupOpen:x};return t["group-header"]?t["group-header"](k):o(ga,B({key:`group-header_${g.id}`,item:g},ke(a,":group-header",()=>k)),t)}const f={index:y,item:g.raw,internalItem:g,columns:n.value,isExpanded:s,toggleExpand:u,isSelected:c,toggleSelect:i},V={...f,props:B({key:`item_${g.key??g.index}`,onClick:r.value?()=>{u(g)}:void 0,index:y,item:g,cellProps:e.cellProps,mobile:p.value},ke(a,":row",()=>f),typeof e.rowProps=="function"?e.rowProps({item:f.item,index:f.index,internalItem:f.internalItem}):e.rowProps)};return o(K,{key:V.props.key},[t.item?t.item(V):o(ya,V.props,t),s(g)&&((C=t["expanded-row"])==null?void 0:C.call(t,f))])})])}),{}}}),st=_({fixedHeader:Boolean,fixedFooter:Boolean,height:[Number,String],hover:Boolean,...Ne(),...Oe(),...Ee(),...Fe()},"VTable"),_e=O()({name:"VTable",props:st(),setup(e,l){let{slots:a,emit:t}=l;const{themeClasses:n}=Be(e),{densityClasses:r}=$t(e);return z(()=>o(e.tag,{class:["v-table",{"v-table--fixed-height":!!e.height,"v-table--fixed-header":e.fixedHeader,"v-table--fixed-footer":e.fixedFooter,"v-table--has-top":!!a.top,"v-table--has-bottom":!!a.bottom,"v-table--hover":e.hover},n.value,r.value,e.class],style:e.style},{default:()=>{var u,s,c;return[(u=a.top)==null?void 0:u.call(a),a.default?o("div",{class:"v-table__wrapper",style:{height:L(e.height)}},[o("table",null,[a.default()])]):(s=a.wrapper)==null?void 0:s.call(a),(c=a.bottom)==null?void 0:c.call(a)]}})),{}}}),xa=_({items:{type:Array,default:()=>[]},itemValue:{type:[String,Array,Function],default:"id"},itemSelectable:{type:[String,Array,Function],default:null},rowProps:[Object,Function],cellProps:[Object,Function],returnObject:Boolean},"DataTable-items");function pa(e,l,a,t){const n=e.returnObject?l:ee(l,e.itemValue),r=ee(l,e.itemSelectable,!0),u=t.reduce((s,c)=>(c.key!=null&&(s[c.key]=ee(l,c.value)),s),{});return{type:"item",key:e.returnObject?ee(l,e.itemValue):n,index:a,value:n,selectable:r,columns:u,raw:l}}function Sa(e,l,a){return l.map((t,n)=>pa(e,t,n,a))}function Pa(e,l){return{items:I(()=>Sa(e,e.items,l.value))}}function wa(e){let{page:l,itemsPerPage:a,sortBy:t,groupBy:n,search:r}=e;const u=Ae("VDataTable"),s=I(()=>({page:l.value,itemsPerPage:a.value,sortBy:t.value,groupBy:n.value,search:r.value}));let c=null;$e(s,()=>{Le(c,s.value)||(c&&c.search!==s.value.search&&(l.value=1),u.emit("update:options",s.value),c=s.value)},{deep:!0,immediate:!0})}const ka=_({...rt(),hideDefaultBody:Boolean,hideDefaultFooter:Boolean,hideDefaultHeader:Boolean,width:[String,Number],search:String,...ma(),...oa(),...Kt(),...xa(),...ta(),...la(),...Ye(),...st()},"DataTable"),Ia=_({...Mt(),...ka(),...Ot(),...Me()},"VDataTable"),$a=O()({name:"VDataTable",props:Ia(),emits:{"update:modelValue":e=>!0,"update:page":e=>!0,"update:itemsPerPage":e=>!0,"update:sortBy":e=>!0,"update:options":e=>!0,"update:groupBy":e=>!0,"update:expanded":e=>!0,"update:currentItems":e=>!0},setup(e,l){let{attrs:a,slots:t}=l;const{groupBy:n}=ia(e),{sortBy:r,multiSort:u,mustSort:s}=na(e),{page:c,itemsPerPage:i}=jt(e),{columns:m,headers:x,sortFunctions:v,sortRawFunctions:p,filterFunctions:h}=Zt(e,{groupBy:n,showSelect:T(e,"showSelect"),showExpand:T(e,"showExpand")}),{items:S}=Pa(e,m),g=T(e,"search"),{filteredItems:y}=Nt(e,S,g,{transform:H=>H.columns,customKeyFilter:h}),{toggleSort:f}=ra({sortBy:r,multiSort:u,mustSort:s,page:c}),{sortByWithGroups:V,opened:C,extractRows:k,isGroupOpen:R,toggleGroup:N}=da({groupBy:n,sortBy:r}),{sortedItems:b}=sa(e,y,V,{transform:H=>H.columns,sortFunctions:v,sortRawFunctions:p}),{flatItems:d}=fa(b,n,C),w=I(()=>d.value.length),{startIndex:P,stopIndex:D,pageCount:F,setItemsPerPage:E}=zt({page:c,itemsPerPage:i,itemsLength:w}),{paginatedItems:W}=qt({items:d,startIndex:P,stopIndex:D,itemsPerPage:i}),q=I(()=>k(W.value)),{isSelected:re,select:ut,selectAll:ot,toggleSelect:it,someSelected:dt,allSelected:ct}=aa(e,{allItems:S,currentPage:q}),{isExpanded:ft,toggleExpand:vt}=ba(e);wa({page:c,itemsPerPage:i,sortBy:r,groupBy:n,search:g}),ie({VDataTableRows:{hideNoData:T(e,"hideNoData"),noDataText:T(e,"noDataText"),loading:T(e,"loading"),loadingText:T(e,"loadingText")}});const A=I(()=>({page:c.value,itemsPerPage:i.value,sortBy:r.value,pageCount:F.value,toggleSort:f,setItemsPerPage:E,someSelected:dt.value,allSelected:ct.value,isSelected:re,select:ut,selectAll:ot,toggleSelect:it,isExpanded:ft,toggleExpand:vt,isGroupOpen:R,toggleGroup:N,items:q.value.map(H=>H.raw),internalItems:q.value,groupedItems:W.value,columns:m.value,headers:x.value}));return z(()=>{const H=De.filterProps(e),gt=Ve.filterProps(e),mt=Te.filterProps(e),bt=_e.filterProps(e);return o(_e,B({class:["v-data-table",{"v-data-table--show-select":e.showSelect,"v-data-table--loading":e.loading},e.class],style:e.style},bt),{top:()=>{var J;return(J=t.top)==null?void 0:J.call(t,A.value)},default:()=>{var J,ge,me,be,he,ye;return t.default?t.default(A.value):o(K,null,[(J=t.colgroup)==null?void 0:J.call(t,A.value),!e.hideDefaultHeader&&o("thead",{key:"thead"},[o(Ve,gt,t)]),(ge=t.thead)==null?void 0:ge.call(t,A.value),!e.hideDefaultBody&&o("tbody",null,[(me=t["body.prepend"])==null?void 0:me.call(t,A.value),t.body?t.body(A.value):o(Te,B(a,mt,{items:W.value}),t),(be=t["body.append"])==null?void 0:be.call(t,A.value)]),(he=t.tbody)==null?void 0:he.call(t,A.value),(ye=t.tfoot)==null?void 0:ye.call(t,A.value)])},bottom:()=>t.bottom?t.bottom(A.value):!e.hideDefaultFooter&&o(K,null,[o(Et,null,null),o(De,H,{prepend:t["footer.prepend"]})])})}),{}}});export{$a as V,ka as a,Me as b,ia as c,na as d,jt as e,Zt as f,da as g,zt as h,fa as i,aa as j,ba as k,wa as l,Mt as m,De as n,Ve as o,ra as p,Te as q,_e as r,oa as s,sa as t,Pa as u,ya as v};
