import{i as _,k as L,m as w,n as C,_ as f,r as b,q as M,v as B,j as a,w as V,x as Y,O as rt,a6 as et,u as nt,R as at,S as st,ae as it,d as lt,f as ct,af as pt,B as z,b as dt}from"./index-4TuXYIMR.js";import{r as ut,i as ft,I as gt,a as xt}from"./Dashbord-n7TepkuL.js";import mt from"./Balance-fb9qhfLU.js";import{n as bt,h as vt,b as F,T as ht,d as kt,r as yt,p as O,B as P}from"./Select-PZ1lkyFr.js";import{D as Ct}from"./Dialog-2jVmFn6l.js";import"./FormatedNumber-bwQFpXUV.js";function Et(t){return _("MuiAppBar",t)}L("MuiAppBar",["root","positionFixed","positionAbsolute","positionSticky","positionStatic","positionRelative","colorDefault","colorPrimary","colorSecondary","colorInherit","colorTransparent","colorError","colorInfo","colorSuccess","colorWarning"]);const Tt=["className","color","enableColorOnDark","position"],Bt=t=>{const{color:o,position:e,classes:r}=t,s={root:["root",`color${C(o)}`,`position${C(e)}`]};return Y(s,Et,r)},k=(t,o)=>t?`${t==null?void 0:t.replace(")","")}, ${o})`:o,jt=w(bt,{name:"MuiAppBar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,o[`position${C(e.position)}`],o[`color${C(e.color)}`]]}})(({theme:t,ownerState:o})=>{const e=t.palette.mode==="light"?t.palette.grey[100]:t.palette.grey[900];return f({display:"flex",flexDirection:"column",width:"100%",boxSizing:"border-box",flexShrink:0},o.position==="fixed"&&{position:"fixed",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0,"@media print":{position:"absolute"}},o.position==="absolute"&&{position:"absolute",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},o.position==="sticky"&&{position:"sticky",zIndex:(t.vars||t).zIndex.appBar,top:0,left:"auto",right:0},o.position==="static"&&{position:"static"},o.position==="relative"&&{position:"relative"},!t.vars&&f({},o.color==="default"&&{backgroundColor:e,color:t.palette.getContrastText(e)},o.color&&o.color!=="default"&&o.color!=="inherit"&&o.color!=="transparent"&&{backgroundColor:t.palette[o.color].main,color:t.palette[o.color].contrastText},o.color==="inherit"&&{color:"inherit"},t.palette.mode==="dark"&&!o.enableColorOnDark&&{backgroundColor:null,color:null},o.color==="transparent"&&f({backgroundColor:"transparent",color:"inherit"},t.palette.mode==="dark"&&{backgroundImage:"none"})),t.vars&&f({},o.color==="default"&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette.AppBar.defaultBg:k(t.vars.palette.AppBar.darkBg,t.vars.palette.AppBar.defaultBg),"--AppBar-color":o.enableColorOnDark?t.vars.palette.text.primary:k(t.vars.palette.AppBar.darkColor,t.vars.palette.text.primary)},o.color&&!o.color.match(/^(default|inherit|transparent)$/)&&{"--AppBar-background":o.enableColorOnDark?t.vars.palette[o.color].main:k(t.vars.palette.AppBar.darkBg,t.vars.palette[o.color].main),"--AppBar-color":o.enableColorOnDark?t.vars.palette[o.color].contrastText:k(t.vars.palette.AppBar.darkColor,t.vars.palette[o.color].contrastText)},{backgroundColor:"var(--AppBar-background)",color:o.color==="inherit"?"inherit":"var(--AppBar-color)"},o.color==="transparent"&&{backgroundImage:"none",backgroundColor:"transparent",color:"inherit"}))}),At=b.forwardRef(function(o,e){const r=M({props:o,name:"MuiAppBar"}),{className:s,color:g="primary",enableColorOnDark:c=!1,position:p="fixed"}=r,l=B(r,Tt),i=f({},r,{color:g,position:p,enableColorOnDark:c}),d=Bt(i);return a.jsx(jt,f({square:!0,component:"header",ownerState:i,elevation:4,className:V(d.root,s,p==="fixed"&&"mui-fixed"),ref:e},l))}),Rt=At,$t=["addEndListener","appear","children","container","direction","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Nt(t,o,e){const r=o.getBoundingClientRect(),s=e&&e.getBoundingClientRect(),g=F(o);let c;if(o.fakeTransform)c=o.fakeTransform;else{const i=g.getComputedStyle(o);c=i.getPropertyValue("-webkit-transform")||i.getPropertyValue("transform")}let p=0,l=0;if(c&&c!=="none"&&typeof c=="string"){const i=c.split("(")[1].split(")")[0].split(",");p=parseInt(i[4],10),l=parseInt(i[5],10)}return t==="left"?s?`translateX(${s.right+p-r.left}px)`:`translateX(${g.innerWidth+p-r.left}px)`:t==="right"?s?`translateX(-${r.right-s.left-p}px)`:`translateX(-${r.left+r.width-p}px)`:t==="up"?s?`translateY(${s.bottom+l-r.top}px)`:`translateY(${g.innerHeight+l-r.top}px)`:s?`translateY(-${r.top-s.top+r.height-l}px)`:`translateY(-${r.top+r.height-l}px)`}function It(t){return typeof t=="function"?t():t}function y(t,o,e){const r=It(e),s=Nt(t,o,r);s&&(o.style.webkitTransform=s,o.style.transform=s)}const Dt=b.forwardRef(function(o,e){const r=rt(),s={enter:r.transitions.easing.easeOut,exit:r.transitions.easing.sharp},g={enter:r.transitions.duration.enteringScreen,exit:r.transitions.duration.leavingScreen},{addEndListener:c,appear:p=!0,children:l,container:i,direction:d="down",easing:x=s,in:v,onEnter:A,onEntered:U,onEntering:R,onExit:$,onExited:N,onExiting:W,style:E,timeout:T=g,TransitionComponent:q=ht}=o,G=B(o,$t),m=b.useRef(null),X=vt(l.ref,m,e),h=n=>u=>{n&&(u===void 0?n(m.current):n(m.current,u))},J=h((n,u)=>{y(d,n,i),yt(n),A&&A(n,u)}),K=h((n,u)=>{const D=O({timeout:T,style:E,easing:x},{mode:"enter"});n.style.webkitTransition=r.transitions.create("-webkit-transform",f({},D)),n.style.transition=r.transitions.create("transform",f({},D)),n.style.webkitTransform="none",n.style.transform="none",R&&R(n,u)}),Q=h(U),Z=h(W),S=h(n=>{const u=O({timeout:T,style:E,easing:x},{mode:"exit"});n.style.webkitTransition=r.transitions.create("-webkit-transform",u),n.style.transition=r.transitions.create("transform",u),y(d,n,i),$&&$(n)}),tt=h(n=>{n.style.webkitTransition="",n.style.transition="",N&&N(n)}),ot=n=>{c&&c(m.current,n)},I=b.useCallback(()=>{m.current&&y(d,m.current,i)},[d,i]);return b.useEffect(()=>{if(v||d==="down"||d==="right")return;const n=kt(()=>{m.current&&y(d,m.current,i)}),u=F(m.current);return u.addEventListener("resize",n),()=>{n.clear(),u.removeEventListener("resize",n)}},[d,v,i]),b.useEffect(()=>{v||I()},[v,I]),a.jsx(q,f({nodeRef:m,onEnter:J,onEntered:Q,onEntering:K,onExit:S,onExited:tt,onExiting:Z,addEndListener:ot,appear:p,in:v,timeout:T},G,{children:(n,u)=>b.cloneElement(l,f({ref:X,style:f({visibility:n==="exited"&&!v?"hidden":void 0},E,l.props.style)},u))}))}),zt=Dt;function Ot(t){return _("MuiToolbar",t)}L("MuiToolbar",["root","gutters","regular","dense"]);const Pt=["className","component","disableGutters","variant"],_t=t=>{const{classes:o,disableGutters:e,variant:r}=t;return Y({root:["root",!e&&"gutters",r]},Ot,o)},Lt=w("div",{name:"MuiToolbar",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t;return[o.root,!e.disableGutters&&o.gutters,o[e.variant]]}})(({theme:t,ownerState:o})=>f({position:"relative",display:"flex",alignItems:"center"},!o.disableGutters&&{paddingLeft:t.spacing(2),paddingRight:t.spacing(2),[t.breakpoints.up("sm")]:{paddingLeft:t.spacing(3),paddingRight:t.spacing(3)}},o.variant==="dense"&&{minHeight:48}),({theme:t,ownerState:o})=>o.variant==="regular"&&t.mixins.toolbar),wt=b.forwardRef(function(o,e){const r=M({props:o,name:"MuiToolbar"}),{className:s,component:g="div",disableGutters:c=!1,variant:p="regular"}=r,l=B(r,Pt),i=f({},r,{component:g,disableGutters:c,variant:p}),d=_t(i);return a.jsx(Lt,f({as:g,className:V(d.root,s),ref:e,ownerState:i},l))}),Mt=wt;var j={},Vt=ft;Object.defineProperty(j,"__esModule",{value:!0});var H=j.default=void 0,Yt=Vt(ut()),Ft=a;H=j.default=(0,Yt.default)((0,Ft.jsx)("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Close");const Ht=et.forwardRef(function(o,e){return a.jsx(zt,{direction:"up",ref:e,...o})}),Kt=({profileOpen:t,setProfileOpen:o,user:e})=>{const r=nt(),[s,g]=b.useState(!1),{allTransitionData:c}=at(x=>x.accountData);b.useEffect(()=>{t&&p()},[t]);const p=()=>{g(!0)},l=()=>{g(!1),o()},i=()=>{window.confirm("Are you sure you want to log out?")&&it(dt).then(()=>{r("/login")}).catch(v=>{})},d=async()=>{try{if(window.confirm("Are You Sure To Clear Your All History")&&window.confirm("It Will Clear Your All History")){for(let x of c){let v=ct(lt,`users/${e.uid}/transactions/${x.id}`);await pt(v)}z.success("All History is cleared!")}}catch(x){console.log(x.message),z.error(x.message)}};return a.jsx(a.Fragment,{children:a.jsx(Ct,{fullScreen:!0,open:s,onClose:l,TransitionComponent:Ht,className:"backdrop-blur-sm bg-transparent",children:a.jsxs("div",{className:"bg-slate-100 dark:bg-slate-900    text:slate-900 backdrop-sm w-screen h-screen",children:[a.jsx(Rt,{sx:{position:"relative"},className:"bg-slate-900 dark:bg-slate-200",children:a.jsxs(Mt,{className:"bg-slate-600 w-full dark:bg-slate-800",children:[a.jsx(gt,{edge:"start",color:"inherit",onClick:l,"aria-label":"close",children:a.jsx(H,{})}),a.jsx(xt,{sx:{ml:2,flex:1},variant:"h6",component:"div",children:"Finance 💰"}),a.jsx(P,{autoFocus:!0,size:"small",variant:"contained",color:"error",onClick:i,children:"Logout"})]})}),a.jsx("main",{className:"p-6",children:a.jsxs("div",{className:"flex flex-col gap-5",children:[a.jsxs("div",{className:"flex items-center gap-3",children:[a.jsx(st,{sx:{width:"35px",height:"35px"},alt:e.email,src:e.photoURL}),a.jsx("h1",{className:"text-xl font-bold",children:e.displayName})]}),a.jsxs("div",{className:"flex flex-col gap-2 text-lg ",children:[a.jsxs("p",{children:["Email : ",e.email]}),a.jsxs("p",{children:["Phone : ",e.phoneNumber]}),a.jsx("p",{className:`${e.emailVerified?"text-green-700":"text-red-700"} text-xl font-bold`,children:e.emailVerified?"Email Is Verified! ✅":"Email Is Nor Verified! ❌ "})]}),a.jsx("div",{className:"shadow-2xl balance-container rounded-xl p-6 max-lg:col-span-2 max-sm:col-span-1",children:a.jsx(mt,{})}),a.jsx("div",{children:a.jsx(P,{size:"small",color:"error",onClick:d,children:"Clear All History"})})]})})]})})})};export{Kt as default};
