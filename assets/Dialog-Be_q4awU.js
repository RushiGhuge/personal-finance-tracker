import{k as X,i as Y,r as c,m as d,n as i,_ as r,q as z,F as H,v as K,j as s,w as f,x as q}from"./index-30T6eusQ.js";import{a as V,M as G,P,F as J}from"./Modal-wBf5PuyQ.js";import{b as O}from"./Grow-YQ9l7pnM.js";function Q(o){return Y("MuiDialog",o)}const Z=X("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"]),k=Z,aa=c.createContext({}),oa=aa,ea=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],ra=d(V,{name:"MuiDialog",slot:"Backdrop",overrides:(o,a)=>a.backdrop})({zIndex:-1}),ia=o=>{const{classes:a,scroll:e,maxWidth:l,fullWidth:n,fullScreen:u}=o,m={root:["root"],container:["container",`scroll${i(e)}`],paper:["paper",`paperScroll${i(e)}`,`paperWidth${i(String(l))}`,n&&"paperFullWidth",u&&"paperFullScreen"]};return q(m,Q,a)},la=d(G,{name:"MuiDialog",slot:"Root",overridesResolver:(o,a)=>a.root})({"@media print":{position:"absolute !important"}}),ta=d("div",{name:"MuiDialog",slot:"Container",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.container,a[`scroll${i(e.scroll)}`]]}})(({ownerState:o})=>r({height:"100%","@media print":{height:"auto"},outline:0},o.scroll==="paper"&&{display:"flex",justifyContent:"center",alignItems:"center"},o.scroll==="body"&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})),sa=d(P,{name:"MuiDialog",slot:"Paper",overridesResolver:(o,a)=>{const{ownerState:e}=o;return[a.paper,a[`scrollPaper${i(e.scroll)}`],a[`paperWidth${i(String(e.maxWidth))}`],e.fullWidth&&a.paperFullWidth,e.fullScreen&&a.paperFullScreen]}})(({theme:o,ownerState:a})=>r({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},a.scroll==="paper"&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},a.scroll==="body"&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!a.maxWidth&&{maxWidth:"calc(100% - 64px)"},a.maxWidth==="xs"&&{maxWidth:o.breakpoints.unit==="px"?Math.max(o.breakpoints.values.xs,444):`max(${o.breakpoints.values.xs}${o.breakpoints.unit}, 444px)`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.maxWidth&&a.maxWidth!=="xs"&&{maxWidth:`${o.breakpoints.values[a.maxWidth]}${o.breakpoints.unit}`,[`&.${k.paperScrollBody}`]:{[o.breakpoints.down(o.breakpoints.values[a.maxWidth]+32*2)]:{maxWidth:"calc(100% - 64px)"}}},a.fullWidth&&{width:"calc(100% - 64px)"},a.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,[`&.${k.paperScrollBody}`]:{margin:0,maxWidth:"100%"}})),na=c.forwardRef(function(a,e){const l=z({props:a,name:"MuiDialog"}),n=H(),u={enter:n.transitions.duration.enteringScreen,exit:n.transitions.duration.leavingScreen},{"aria-describedby":m,"aria-labelledby":B,BackdropComponent:$,BackdropProps:M,children:S,className:F,disableEscapeKeyDown:W=!1,fullScreen:j=!1,fullWidth:w=!1,maxWidth:R="sm",onBackdropClick:C,onClose:x,open:D,PaperComponent:T=P,PaperProps:v={},scroll:N="paper",TransitionComponent:A=J,transitionDuration:y=u,TransitionProps:E}=l,I=K(l,ea),p=r({},l,{disableEscapeKeyDown:W,fullScreen:j,fullWidth:w,maxWidth:R,scroll:N}),h=ia(p),g=c.useRef(),L=t=>{g.current=t.target===t.currentTarget},U=t=>{g.current&&(g.current=null,C&&C(t),x&&x(t,"backdropClick"))},b=O(B),_=c.useMemo(()=>({titleId:b}),[b]);return s.jsx(la,r({className:f(h.root,F),closeAfterTransition:!0,components:{Backdrop:ra},componentsProps:{backdrop:r({transitionDuration:y,as:$},M)},disableEscapeKeyDown:W,onClose:x,open:D,ref:e,onClick:U,ownerState:p},I,{children:s.jsx(A,r({appear:!0,in:D,timeout:y,role:"presentation"},E,{children:s.jsx(ta,{className:f(h.container),onMouseDown:L,ownerState:p,children:s.jsx(sa,r({as:T,elevation:24,role:"dialog","aria-describedby":m,"aria-labelledby":b},v,{className:f(h.paper,v.className),ownerState:p,children:s.jsx(oa.Provider,{value:_,children:S})}))})}))}))}),ua=na;export{ua as D,oa as a};