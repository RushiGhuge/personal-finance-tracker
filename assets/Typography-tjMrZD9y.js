import{t as d,_ as i,ab as $,ac as W,ad as M,ae as N,r as v,$ as R,j as b,v as B,i as j,k as U,m as A,n as P,q as E,w as O}from"./index-s3O7NWeT.js";const k=["sx"],w=a=>{var t,o;const r={systemProps:{},otherProps:{}},s=(t=a==null||(o=a.theme)==null?void 0:o.unstable_sxConfig)!=null?t:$;return Object.keys(a).forEach(e=>{s[e]?r.systemProps[e]=a[e]:r.otherProps[e]=a[e]}),r};function T(a){const{sx:t}=a,o=d(a,k),{systemProps:r,otherProps:s}=w(o);let e;return Array.isArray(t)?e=[r,...t]:typeof t=="function"?e=(...l)=>{const n=t(...l);return W(n)?i({},r,n):r}:e=i({},r,t),i({},s,{sx:e})}const F=["className","component"];function G(a={}){const{themeId:t,defaultTheme:o,defaultClassName:r="MuiBox-root",generateClassName:s}=a,e=M("div",{shouldForwardProp:n=>n!=="theme"&&n!=="sx"&&n!=="as"})(N);return v.forwardRef(function(m,g){const p=R(o),c=T(m),{className:h,component:u="div"}=c,y=d(c,F);return b.jsx(e,i({as:u,ref:g,className:B(h,s?s(r):r),theme:t&&p[t]||p},y))})}function L(a){return j("MuiTypography",a)}U("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);const S=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],q=a=>{const{align:t,gutterBottom:o,noWrap:r,paragraph:s,variant:e,classes:l}=a,n={root:["root",e,a.align!=="inherit"&&`align${P(t)}`,o&&"gutterBottom",r&&"noWrap",s&&"paragraph"]};return O(n,L,l)},z=A("span",{name:"MuiTypography",slot:"Root",overridesResolver:(a,t)=>{const{ownerState:o}=a;return[t.root,o.variant&&t[o.variant],o.align!=="inherit"&&t[`align${P(o.align)}`],o.noWrap&&t.noWrap,o.gutterBottom&&t.gutterBottom,o.paragraph&&t.paragraph]}})(({theme:a,ownerState:t})=>i({margin:0},t.variant==="inherit"&&{font:"inherit"},t.variant!=="inherit"&&a.typography[t.variant],t.align!=="inherit"&&{textAlign:t.align},t.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},t.gutterBottom&&{marginBottom:"0.35em"},t.paragraph&&{marginBottom:16})),x={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},D={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},I=a=>D[a]||a,J=v.forwardRef(function(t,o){const r=E({props:t,name:"MuiTypography"}),s=I(r.color),e=T(i({},r,{color:s})),{align:l="inherit",className:n,component:m,gutterBottom:g=!1,noWrap:p=!1,paragraph:c=!1,variant:h="body1",variantMapping:u=x}=e,y=d(e,S),f=i({},e,{align:l,color:s,className:n,component:m,gutterBottom:g,noWrap:p,paragraph:c,variant:h,variantMapping:u}),C=m||(c?"p":u[h]||x[h])||"span",_=q(f);return b.jsx(z,i({as:C,ref:o,ownerState:f,className:B(_.root,n)},y))}),H=J;export{H as T,G as c};