import{i as T,k as A,m as D,_ as c,r as h,q as w,v as B,j as e,w as _,x as S,I as U,N as I,O as sa,n as L,Q as ia,R as na,a6 as la,d as ra,f as ca,af as da,B as V}from"./index-N8d739kH.js";import{F as pa}from"./FormatedNumber-bwQFpXUV.js";import{a as ua,r as X,i as Y,T as W}from"./Dashbord-Jc7-Q9tD.js";import{I as q}from"./IconButton-2qQptBna.js";import{f as ga,l as xa,B as H}from"./Select-X6DYC902.js";import{a as va,D as fa}from"./Dialog-dlHFnT_o.js";function ba(a){return T("MuiDialogActions",a)}A("MuiDialogActions",["root","spacing"]);const ya=["className","disableSpacing"],ma=a=>{const{classes:t,disableSpacing:o}=a;return S({root:["root",!o&&"spacing"]},ba,t)},ha=D("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,!o.disableSpacing&&t.spacing]}})(({ownerState:a})=>c({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!a.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})),Ca=h.forwardRef(function(t,o){const s=w({props:t,name:"MuiDialogActions"}),{className:g,disableSpacing:d=!1}=s,x=B(s,ya),i=c({},s,{disableSpacing:d}),p=ma(i);return e.jsx(ha,c({className:_(p.root,g),ownerState:i,ref:o},x))}),ja=Ca;function $a(a){return T("MuiDialogTitle",a)}A("MuiDialogTitle",["root"]);const Pa=["className","id"],Na=a=>{const{classes:t}=a;return S({root:["root"]},$a,t)},Ma=D(ua,{name:"MuiDialogTitle",slot:"Root",overridesResolver:(a,t)=>t.root})({padding:"16px 24px",flex:"0 0 auto"}),Da=h.forwardRef(function(t,o){const s=w({props:t,name:"MuiDialogTitle"}),{className:g,id:d}=s,x=B(s,Pa),i=s,p=Na(i),{titleId:v=d}=h.useContext(va);return e.jsx(Ma,c({component:"h2",className:_(p.root,g),ownerState:i,ref:o,variant:"h6",id:d??v},x))}),Ra=Da;function Ia(a){return T("MuiPagination",a)}A("MuiPagination",["root","ul","outlined","text"]);const za=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];function ka(a={}){const{boundaryCount:t=1,componentName:o="usePagination",count:s=1,defaultPage:g=1,disabled:d=!1,hideNextButton:x=!1,hidePrevButton:i=!1,onChange:p,page:v,showFirstButton:j=!1,showLastButton:N=!1,siblingCount:b=1}=a,u=B(a,za),[r,n]=ga({controlled:v,default:g,name:o,state:"page"}),f=(l,P)=>{v||n(P),p&&p(l,P)},y=(l,P)=>{const ea=P-l+1;return Array.from({length:ea},(tt,oa)=>l+oa)},R=y(1,Math.min(t,s)),C=y(Math.max(s-t+1,t+1),s),z=Math.max(Math.min(r-b,s-t-b*2-1),t+2),M=Math.min(Math.max(r+b,t+b*2+2),C.length>0?C[0]-2:s-1),k=[...j?["first"]:[],...i?[]:["previous"],...R,...z>t+2?["start-ellipsis"]:t+1<s-t?[t+1]:[],...y(z,M),...M<s-t-1?["end-ellipsis"]:s-t>t?[s-t]:[],...C,...x?[]:["next"],...N?["last"]:[]],O=l=>{switch(l){case"first":return 1;case"previous":return r-1;case"next":return r+1;case"last":return s;default:return null}},$=k.map(l=>typeof l=="number"?{onClick:P=>{f(P,l)},type:"page",page:l,selected:l===r,disabled:d,"aria-current":l===r?"true":void 0}:{onClick:P=>{f(P,O(l))},type:l,page:O(l),selected:!1,disabled:d||l.indexOf("ellipsis")===-1&&(l==="next"||l==="last"?r>=s:r<=1)});return c({items:$},u)}function Oa(a){return T("MuiPaginationItem",a)}const La=A("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),m=La,G=U(e.jsx("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),Q=U(e.jsx("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),J=U(e.jsx("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),K=U(e.jsx("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),_a=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],Z=(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant],t[`size${L(o.size)}`],o.variant==="text"&&t[`text${L(o.color)}`],o.variant==="outlined"&&t[`outlined${L(o.color)}`],o.shape==="rounded"&&t.rounded,o.type==="page"&&t.page,(o.type==="start-ellipsis"||o.type==="end-ellipsis")&&t.ellipsis,(o.type==="previous"||o.type==="next")&&t.previousNext,(o.type==="first"||o.type==="last")&&t.firstLast]},Ba=a=>{const{classes:t,color:o,disabled:s,selected:g,size:d,shape:x,type:i,variant:p}=a,v={root:["root",`size${L(d)}`,p,x,o!=="standard"&&`${p}${L(o)}`,s&&"disabled",g&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[i]],icon:["icon"]};return S(v,Oa,t)},Ta=D("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:Z})(({theme:a,ownerState:t})=>c({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,height:"auto",[`&.${m.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity}},t.size==="small"&&{minWidth:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)})),Aa=D(xa,{name:"MuiPaginationItem",slot:"Root",overridesResolver:Z})(({theme:a,ownerState:t})=>c({},a.typography.body2,{borderRadius:32/2,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(a.vars||a).palette.text.primary,[`&.${m.focusVisible}`]:{backgroundColor:(a.vars||a).palette.action.focus},[`&.${m.disabled}`]:{opacity:(a.vars||a).palette.action.disabledOpacity},transition:a.transitions.create(["color","background-color"],{duration:a.transitions.duration.short}),"&:hover":{backgroundColor:(a.vars||a).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.selected}`]:{backgroundColor:(a.vars||a).palette.action.selected,"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.hoverOpacity}))`:I(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(a.vars||a).palette.action.selected}},[`&.${m.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette.action.selectedChannel} / calc(${a.vars.palette.action.selectedOpacity} + ${a.vars.palette.action.focusOpacity}))`:I(a.palette.action.selected,a.palette.action.selectedOpacity+a.palette.action.focusOpacity)},[`&.${m.disabled}`]:{opacity:1,color:(a.vars||a).palette.action.disabled,backgroundColor:(a.vars||a).palette.action.selected}}},t.size==="small"&&{minWidth:26,height:26,borderRadius:26/2,margin:"0 1px",padding:"0 4px"},t.size==="large"&&{minWidth:40,height:40,borderRadius:40/2,padding:"0 10px",fontSize:a.typography.pxToRem(15)},t.shape==="rounded"&&{borderRadius:(a.vars||a).shape.borderRadius}),({theme:a,ownerState:t})=>c({},t.variant==="text"&&{[`&.${m.selected}`]:c({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].contrastText,backgroundColor:(a.vars||a).palette[t.color].main,"&:hover":{backgroundColor:(a.vars||a).palette[t.color].dark,"@media (hover: none)":{backgroundColor:(a.vars||a).palette[t.color].main}},[`&.${m.focusVisible}`]:{backgroundColor:(a.vars||a).palette[t.color].dark}},{[`&.${m.disabled}`]:{color:(a.vars||a).palette.action.disabled}})},t.variant==="outlined"&&{border:a.vars?`1px solid rgba(${a.vars.palette.common.onBackgroundChannel} / 0.23)`:`1px solid ${a.palette.mode==="light"?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"}`,[`&.${m.selected}`]:c({},t.color!=="standard"&&{color:(a.vars||a).palette[t.color].main,border:`1px solid ${a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / 0.5)`:I(a.palette[t.color].main,.5)}`,backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / ${a.vars.palette.action.activatedOpacity})`:I(a.palette[t.color].main,a.palette.action.activatedOpacity),"&:hover":{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:I(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},[`&.${m.focusVisible}`]:{backgroundColor:a.vars?`rgba(${a.vars.palette[t.color].mainChannel} / calc(${a.vars.palette.action.activatedOpacity} + ${a.vars.palette.action.focusOpacity}))`:I(a.palette[t.color].main,a.palette.action.activatedOpacity+a.palette.action.focusOpacity)}},{[`&.${m.disabled}`]:{borderColor:(a.vars||a).palette.action.disabledBackground,color:(a.vars||a).palette.action.disabled}})})),wa=D("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:(a,t)=>t.icon})(({theme:a,ownerState:t})=>c({fontSize:a.typography.pxToRem(20),margin:"0 -8px"},t.size==="small"&&{fontSize:a.typography.pxToRem(18)},t.size==="large"&&{fontSize:a.typography.pxToRem(22)})),Sa=h.forwardRef(function(t,o){const s=w({props:t,name:"MuiPaginationItem"}),{className:g,color:d="standard",component:x,components:i={},disabled:p=!1,page:v,selected:j=!1,shape:N="circular",size:b="medium",slots:u={},type:r="page",variant:n="text"}=s,f=B(s,_a),y=c({},s,{color:d,disabled:p,selected:j,shape:N,size:b,type:r,variant:n}),R=sa(),C=Ba(y),M=(R.direction==="rtl"?{previous:u.next||i.next||K,next:u.previous||i.previous||J,last:u.first||i.first||G,first:u.last||i.last||Q}:{previous:u.previous||i.previous||J,next:u.next||i.next||K,first:u.first||i.first||G,last:u.last||i.last||Q})[r];return r==="start-ellipsis"||r==="end-ellipsis"?e.jsx(Ta,{ref:o,ownerState:y,className:_(C.root,g),children:"…"}):e.jsxs(Aa,c({ref:o,ownerState:y,component:x,disabled:p,className:_(C.root,g)},f,{children:[r==="page"&&v,M?e.jsx(wa,{as:M,ownerState:y,className:C.icon}):null]}))}),Ua=Sa,Fa=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],Ea=a=>{const{classes:t,variant:o}=a;return S({root:["root",o],ul:["ul"]},Ia,t)},Va=D("nav",{name:"MuiPagination",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,t[o.variant]]}})({}),Wa=D("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:(a,t)=>t.ul})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function qa(a,t,o){return a==="page"?`${o?"":"Go to "}page ${t}`:`Go to ${a} page`}const Ha=h.forwardRef(function(t,o){const s=w({props:t,name:"MuiPagination"}),{boundaryCount:g=1,className:d,color:x="standard",count:i=1,defaultPage:p=1,disabled:v=!1,getItemAriaLabel:j=qa,hideNextButton:N=!1,hidePrevButton:b=!1,renderItem:u=$=>e.jsx(Ua,c({},$)),shape:r="circular",showFirstButton:n=!1,showLastButton:f=!1,siblingCount:y=1,size:R="medium",variant:C="text"}=s,z=B(s,Fa),{items:M}=ka(c({},s,{componentName:"Pagination"})),k=c({},s,{boundaryCount:g,color:x,count:i,defaultPage:p,disabled:v,getItemAriaLabel:j,hideNextButton:N,hidePrevButton:b,renderItem:u,shape:r,showFirstButton:n,showLastButton:f,siblingCount:y,size:R,variant:C}),O=Ea(k);return e.jsx(Va,c({"aria-label":"pagination navigation",className:_(O.root,d),ownerState:k,ref:o},z,{children:e.jsx(Wa,{className:O.ul,ownerState:k,children:M.map(($,l)=>e.jsx("li",{children:u(c({},$,{color:x,"aria-label":j($.type,$.page,$.selected),shape:r,size:R,variant:C}))},l))})}))}),Ga=Ha;var F={},Qa=Y;Object.defineProperty(F,"__esModule",{value:!0});var aa=F.default=void 0,Ja=Qa(X()),Ka=e;aa=F.default=(0,Ja.default)((0,Ka.jsx)("path",{d:"M3 17.25V21h3.75L17.81 9.94l-3.75-3.75zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75z"}),"Edit");var E={},Xa=Y;Object.defineProperty(E,"__esModule",{value:!0});var ta=E.default=void 0,Ya=Xa(X()),Za=e;ta=E.default=(0,Ya.default)((0,Za.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6zM19 4h-3.5l-1-1h-5l-1 1H5v2h14z"}),"Delete");const at=h.lazy(()=>ia(()=>import("./ModalForUpdation-kFtJ3B1x.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]))),rt=({transitionData:a})=>{const[t,o]=h.useState(1),{user:s}=na(n=>n.User),[g,d]=h.useState(null),[x,i]=h.useState(!1),[p,v]=h.useState(!1);let j=h.useRef(null);const N=n=>{j.current=n,v(!0)},b=()=>{v(!1)},u=a.slice((t-1)*10,(t-1)*10+10),r=async n=>{b();try{let f=ca(ra,`users/${s.uid}/transactions/${n}`);await da(f),V.success("Delete Successful 👍")}catch(f){V.error(f.message)}};return e.jsxs("main",{className:"pt-10 w-full",children:[e.jsx("div",{className:"w-full  flex overflow-auto   ",children:e.jsxs("table",{className:"rounded-md w-full text-left histroy-table text-slate-900 dark:text-slate-50 bg-slate-50 dark:bg-black/10  ",children:[e.jsx("thead",{children:e.jsxs("tr",{className:"",children:[e.jsx("th",{className:"min-w-32 ",children:"Name"}),e.jsx("th",{className:"min-w-32 ",children:"Credit/Debit"}),e.jsx("th",{className:"min-w-32 ",children:"Amount"}),e.jsx("th",{className:"min-w-32 ",children:"Date"}),e.jsx("th",{className:"min-w-32 ",children:"Tag"}),e.jsx("th",{className:"min-w-32 ",children:"Edit/Delete"})]})}),e.jsx("tbody",{children:u.map((n,f)=>{const y=new Date(n.date).toLocaleDateString("en-US",{year:"numeric",month:"long",day:"numeric"});return e.jsxs("tr",{children:[e.jsx("td",{children:n.name}),e.jsx("td",{children:e.jsx("span",{className:`${n.type==="Credit"?"bg-green-300 text-green-950":"bg-red-300 text-red-950"} px-2 py-1 rounded-md`,children:n.type})}),e.jsxs("td",{children:["₹",pa(Number(n.amount))]}),e.jsx("td",{children:y}),e.jsx("td",{children:n.tag}),e.jsxs("td",{className:"flex gap-1",children:[e.jsx(W,{title:"Edit",arrow:!0,children:e.jsx(q,{onClick:()=>{d(n),i(!0)},children:e.jsx(aa,{})})}),e.jsx(W,{title:"Delete",arrow:!0,children:e.jsx(q,{onClick:()=>N(n.id),children:e.jsx(ta,{})})})]})]},n.id)})})]})}),e.jsx("div",{className:"flex mt-10 justify-center    ",children:e.jsx(Ga,{count:Math.ceil(a.length/10),page:t,variant:"outlined",shape:"rounded",onChange:(n,f)=>o(f)})}),e.jsx(at,{open:x,setOpen:i,uid:s.uid,setUpdateTransition:d,transition:g}),e.jsx(la.Fragment,{children:e.jsxs(fa,{open:p,onClose:b,"aria-labelledby":"alert-dialog-title","aria-describedby":"alert-dialog-description",className:"backdrop-blur-sm",children:[e.jsx(Ra,{id:"alert-dialog-title",children:"Are you sure you want to delete this transaction?"}),e.jsxs(ja,{children:[e.jsx(H,{size:"small",onClick:b,children:"Cancel"}),e.jsx(H,{size:"small",color:"error",onClick:()=>r(j.current),autoFocus:!0,children:"Delete"})]})]})})]})};export{rt as default};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["assets/ModalForUpdation-kFtJ3B1x.js","assets/index-N8d739kH.js","assets/index-N6Jd-sRY.css","assets/Select-X6DYC902.js","assets/Box-lLcftWbw.js","assets/IconButton-2qQptBna.js","assets/Dashbord-Jc7-Q9tD.js","assets/Dashbord-0zjwH0Qm.css","assets/TextField-Mca3R1en.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
