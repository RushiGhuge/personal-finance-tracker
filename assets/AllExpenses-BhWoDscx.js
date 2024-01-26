import{U as he,V as pe,W as B,j as S,Y as T,Z as Re,$ as fe,E as N,u as be}from"./index-6ErPX8bV.js";import{w as ve,q as le,e as F,t as Pe,b as W,d as w,r as ae,v as de,p as ue,s as q,x as $,c as D,y as ce,z as Le,A as Ce,B as Ae,u as je,E as te,I as ke,g as Me,h as Se,F as xe,S as He,k as Ie,G as O,R as $e,D as Te,l as Fe,n as we,m as Ee,o as Oe}from"./ChartsAxisHighlight-DtgmysaY.js";import"./Typography-EaSwU-J-.js";import"./Popper-z830rqrs.js";function De(e){return e.innerRadius}function Ue(e){return e.outerRadius}function We(e){return e.startAngle}function ze(e){return e.endAngle}function _e(e){return e&&e.padAngle}function qe(e,i,s,t,r,o,g,a){var m=s-e,u=t-i,n=g-r,b=a-o,l=b*m-n*u;if(!(l*l<F))return l=(n*(i-o)-b*(e-r))/l,[e+l*m,i+l*u]}function Z(e,i,s,t,r,o,g){var a=e-s,m=i-t,u=(g?o:-o)/q(a*a+m*m),n=u*m,b=-u*a,l=e+n,c=i+b,R=s+n,p=t+b,P=(l+R)/2,h=(c+p)/2,v=R-l,x=p-c,y=v*v+x*x,C=r-o,f=l*p-R*c,j=(x<0?-1:1)*q(Ce(0,C*C*y-f*f)),L=(f*x-v*j)/y,H=(-f*v-x*j)/y,M=(f*x+v*j)/y,k=(-f*v+x*j)/y,I=L-P,d=H-h,A=M-P,U=k-h;return I*I+d*d>A*A+U*U&&(L=M,H=k),{cx:L,cy:H,x01:-n,y01:-b,x11:L*(r/C-1),y11:H*(r/C-1)}}function me(){var e=De,i=Ue,s=D(0),t=null,r=We,o=ze,g=_e,a=null,m=ve(u);function u(){var n,b,l=+e.apply(this,arguments),c=+i.apply(this,arguments),R=r.apply(this,arguments)-le,p=o.apply(this,arguments)-le,P=de(p-R),h=p>R;if(a||(a=n=m()),c<l&&(b=c,c=l,l=b),!(c>F))a.moveTo(0,0);else if(P>Pe-F)a.moveTo(c*W(R),c*w(R)),a.arc(0,0,c,R,p,!h),l>F&&(a.moveTo(l*W(p),l*w(p)),a.arc(0,0,l,p,R,h));else{var v=R,x=p,y=R,C=p,f=P,j=P,L=g.apply(this,arguments)/2,H=L>F&&(t?+t.apply(this,arguments):q(l*l+c*c)),M=ae(de(c-l)/2,+s.apply(this,arguments)),k=M,I=M,d,A;if(H>F){var U=ce(H/l*w(L)),V=ce(H/c*w(L));(f-=U*2)>F?(U*=h?1:-1,y+=U,C-=U):(f=0,y=C=(R+p)/2),(j-=V*2)>F?(V*=h?1:-1,v+=V,x-=V):(j=0,v=x=(R+p)/2)}var z=c*W(v),_=c*w(v),X=l*W(C),Y=l*w(C);if(M>F){var G=c*W(x),K=c*w(x),J=l*W(y),Q=l*w(y),E;if(P<ue)if(E=qe(z,_,J,Q,G,K,X,Y)){var ee=z-E[0],ne=_-E[1],ie=G-E[0],se=K-E[1],re=1/w(Le((ee*ie+ne*se)/(q(ee*ee+ne*ne)*q(ie*ie+se*se)))/2),oe=q(E[0]*E[0]+E[1]*E[1]);k=ae(M,(l-oe)/(re-1)),I=ae(M,(c-oe)/(re+1))}else k=I=0}j>F?I>F?(d=Z(J,Q,z,_,c,I,h),A=Z(G,K,X,Y,c,I,h),a.moveTo(d.cx+d.x01,d.cy+d.y01),I<M?a.arc(d.cx,d.cy,I,$(d.y01,d.x01),$(A.y01,A.x01),!h):(a.arc(d.cx,d.cy,I,$(d.y01,d.x01),$(d.y11,d.x11),!h),a.arc(0,0,c,$(d.cy+d.y11,d.cx+d.x11),$(A.cy+A.y11,A.cx+A.x11),!h),a.arc(A.cx,A.cy,I,$(A.y11,A.x11),$(A.y01,A.x01),!h))):(a.moveTo(z,_),a.arc(0,0,c,v,x,!h)):a.moveTo(z,_),!(l>F)||!(f>F)?a.lineTo(X,Y):k>F?(d=Z(X,Y,G,K,l,-k,h),A=Z(z,_,J,Q,l,-k,h),a.lineTo(d.cx+d.x01,d.cy+d.y01),k<M?a.arc(d.cx,d.cy,k,$(d.y01,d.x01),$(A.y01,A.x01),!h):(a.arc(d.cx,d.cy,k,$(d.y01,d.x01),$(d.y11,d.x11),!h),a.arc(0,0,l,$(d.cy+d.y11,d.cx+d.x11),$(A.cy+A.y11,A.cx+A.x11),h),a.arc(A.cx,A.cy,k,$(A.y11,A.x11),$(A.y01,A.x01),!h))):a.arc(0,0,l,C,y,h)}if(a.closePath(),n)return a=null,n+""||null}return u.centroid=function(){var n=(+e.apply(this,arguments)+ +i.apply(this,arguments))/2,b=(+r.apply(this,arguments)+ +o.apply(this,arguments))/2-ue/2;return[W(b)*n,w(b)*n]},u.innerRadius=function(n){return arguments.length?(e=typeof n=="function"?n:D(+n),u):e},u.outerRadius=function(n){return arguments.length?(i=typeof n=="function"?n:D(+n),u):i},u.cornerRadius=function(n){return arguments.length?(s=typeof n=="function"?n:D(+n),u):s},u.padRadius=function(n){return arguments.length?(t=n==null?null:typeof n=="function"?n:D(+n),u):t},u.startAngle=function(n){return arguments.length?(r=typeof n=="function"?n:D(+n),u):r},u.endAngle=function(n){return arguments.length?(o=typeof n=="function"?n:D(+n),u):o},u.padAngle=function(n){return arguments.length?(g=typeof n=="function"?n:D(+n),u):g},u.context=function(n){return arguments.length?(a=n??null,u):a},u}const Be=["id","dataIndex","classes","color","highlightScope","onClick","isFaded","isHighlighted","startAngle","endAngle","paddingAngle","innerRadius","outerRadius","cornerRadius"];function Ne(e){return fe("MuiPieArc",e)}he("MuiPieArc",["root","highlighted","faded"]);const Ve=e=>{const{classes:i,id:s,isFaded:t,isHighlighted:r}=e,o={root:["root",`series-${s}`,r&&"highlighted",t&&"faded"]};return Re(o,Ne,i)},Xe=pe(Ae.path,{name:"MuiPieArc",slot:"Root",overridesResolver:(e,i)=>i.arc})(({theme:e})=>({stroke:(e.vars||e).palette.background.paper,strokeWidth:1,strokeLinejoin:"round"}));function Ye(e){const{id:i,dataIndex:s,classes:t,color:r,highlightScope:o,onClick:g,isFaded:a,isHighlighted:m,startAngle:u,endAngle:n,paddingAngle:b,innerRadius:l,outerRadius:c,cornerRadius:R}=e,p=B(e,Be),P={id:i,dataIndex:s,classes:t,color:r,isFaded:a,isHighlighted:m},h=Ve(P),v=je(o);return S.jsx(Xe,T({d:te([u,n,b,l,c,R],(x,y,C,f,j,L)=>me().cornerRadius(L)({padAngle:C,startAngle:x,endAngle:y,innerRadius:f,outerRadius:j})),onClick:g,cursor:g?"pointer":"unset",ownerState:P,className:h.root},p,v({type:"pie",seriesId:i,dataIndex:s})))}const Ge={keys:e=>e.id,from:({innerRadius:e,outerRadius:i,cornerRadius:s,startAngle:t,endAngle:r,paddingAngle:o,color:g,isFaded:a})=>({innerRadius:e,outerRadius:(e+i)/2,cornerRadius:s,startAngle:(t+r)/2,endAngle:(t+r)/2,paddingAngle:o,fill:g,opacity:a?.3:1}),leave:({innerRadius:e,startAngle:i,endAngle:s})=>({innerRadius:e,outerRadius:e,startAngle:(i+s)/2,endAngle:(i+s)/2}),enter:({innerRadius:e,outerRadius:i,startAngle:s,endAngle:t})=>({innerRadius:e,outerRadius:i,startAngle:s,endAngle:t}),update:({innerRadius:e,outerRadius:i,cornerRadius:s,startAngle:t,endAngle:r,paddingAngle:o,color:g,isFaded:a})=>({innerRadius:e,outerRadius:i,cornerRadius:s,startAngle:t,endAngle:r,paddingAngle:o,fill:g,opacity:a?.3:1}),config:{tension:120,friction:14,clamp:!0}},Ke={keys:e=>e.id,from:({innerRadius:e,outerRadius:i,arcLabelRadius:s,cornerRadius:t,startAngle:r,endAngle:o,paddingAngle:g})=>({innerRadius:e,outerRadius:(e+i)/2,cornerRadius:t,arcLabelRadius:s,startAngle:(r+o)/2,endAngle:(r+o)/2,paddingAngle:g,opacity:0}),leave:({innerRadius:e,startAngle:i,endAngle:s})=>({innerRadius:e,outerRadius:e,arcLabelRadius:e,startAngle:(i+s)/2,endAngle:(i+s)/2,opacity:0}),enter:({innerRadius:e,outerRadius:i,startAngle:s,endAngle:t,arcLabelRadius:r})=>({innerRadius:e,outerRadius:i,startAngle:s,endAngle:t,arcLabelRadius:r,opacity:1}),update:({innerRadius:e,outerRadius:i,cornerRadius:s,startAngle:t,endAngle:r,paddingAngle:o,arcLabelRadius:g})=>({innerRadius:e,outerRadius:i,cornerRadius:s,startAngle:t,endAngle:r,paddingAngle:o,arcLabelRadius:g,opacity:1}),config:{tension:120,friction:14,clamp:!0}};function ye(e){const{id:i,highlightScope:s,data:t,faded:r,highlighted:o,paddingAngle:g=0,innerRadius:a=0,arcLabelRadius:m,outerRadius:u,cornerRadius:n=0}=e,{item:b}=N.useContext(ke),l=N.useCallback(R=>{const p=Me(b,{type:"pie",seriesId:i,dataIndex:R},s),P=!p&&Se(b,{type:"pie",seriesId:i,dataIndex:R},s);return{isHighlighted:p,isFaded:P}},[s,b,i]);return N.useMemo(()=>t.map((R,p)=>{var P,h,v,x,y,C;const{isHighlighted:f,isFaded:j}=l(p),L=T({additionalRadius:0},j&&r||f&&o||{}),H=Math.max(0,Math.PI*((P=L.paddingAngle)!=null?P:g)/180),M=Math.max(0,(h=L.innerRadius)!=null?h:a),k=Math.max(0,(v=L.outerRadius)!=null?v:u+L.additionalRadius),I=(x=L.cornerRadius)!=null?x:n,d=(y=(C=L.arcLabelRadius)!=null?C:m)!=null?y:(M+k)/2;return T({},R,L,{isFaded:j,isHighlighted:f,paddingAngle:H,innerRadius:M,outerRadius:k,cornerRadius:I,arcLabelRadius:d})}),[n,a,u,g,m,t,r,l,o])}const Ze=["slots","slotProps","innerRadius","outerRadius","cornerRadius","paddingAngle","id","highlightScope","highlighted","faded","data","onClick","skipAnimation"],Je=["startAngle","endAngle","paddingAngle","innerRadius","arcLabelRadius","outerRadius","cornerRadius"];function Qe(e){var i;const{slots:s,slotProps:t,innerRadius:r=0,outerRadius:o,cornerRadius:g=0,paddingAngle:a=0,id:m,highlightScope:u,highlighted:n,faded:b={additionalRadius:-5},data:l,onClick:c,skipAnimation:R}=e,p=B(e,Ze),P=ye({innerRadius:r,outerRadius:o,cornerRadius:g,paddingAngle:a,id:m,highlightScope:u,highlighted:n,faded:b,data:l}),h=xe(P,T({},Ge,{immediate:R}));if(l.length===0)return null;const v=(i=s==null?void 0:s.pieArc)!=null?i:Ye;return S.jsx("g",T({},p,{children:h((x,y,C,f)=>{let{startAngle:j,endAngle:L,paddingAngle:H,innerRadius:M,outerRadius:k,cornerRadius:I}=x,d=B(x,Je);return S.jsx(v,T({startAngle:j,endAngle:L,paddingAngle:H,innerRadius:M,outerRadius:k,cornerRadius:I,style:d,id:m,color:y.color,dataIndex:f,highlightScope:u,isFaded:y.isFaded,isHighlighted:y.isHighlighted,onClick:c&&(A=>{c(A,{type:"pie",seriesId:m,dataIndex:f},y)})},t==null?void 0:t.pieArc))})}))}const en=["id","classes","color","startAngle","endAngle","paddingAngle","arcLabelRadius","innerRadius","outerRadius","cornerRadius","formattedArcLabel","isHighlighted","isFaded","style"];function nn(e){return fe("MuiPieArcLabel",e)}he("MuiPieArcLabel",["root","highlighted","faded"]);const sn=e=>{const{classes:i,id:s,isFaded:t,isHighlighted:r}=e,o={root:["root",`series-${s}`,r&&"highlighted",t&&"faded"]};return Re(o,nn,i)},an=pe(Ae.text,{name:"MuiPieArcLabel",slot:"Root",overridesResolver:(e,i)=>i.root})(({theme:e})=>({fill:(e.vars||e).palette.text.primary,textAnchor:"middle",dominantBaseline:"middle"})),ge=(e,i)=>(s,t,r,o,g)=>{if(!e)return 0;const[a,m]=me().cornerRadius(g).centroid({padAngle:r,startAngle:s,endAngle:t,innerRadius:o,outerRadius:o});return i==="x"?a:m};function tn(e){const{id:i,classes:s,color:t,startAngle:r,endAngle:o,paddingAngle:g,arcLabelRadius:a,cornerRadius:m,formattedArcLabel:u,isHighlighted:n,isFaded:b,style:l}=e,c=B(e,en),p=sn({id:i,classes:s,color:t,isFaded:b,isHighlighted:n});return S.jsx(an,T({className:p.root},c,{style:T({x:te([r,o,g,a,m],ge(u,"x")),y:te([r,o,g,a,m],ge(u,"y"))},l),children:u}))}const rn=["slots","slotProps","innerRadius","outerRadius","arcLabelRadius","cornerRadius","paddingAngle","id","highlightScope","highlighted","faded","data","arcLabel","arcLabelMinAngle","skipAnimation"],on=["startAngle","endAngle","paddingAngle","innerRadius","outerRadius","arcLabelRadius","cornerRadius"],ln=180/Math.PI;function dn(e,i,s){if(!e||(s.endAngle-s.startAngle)*ln<i)return null;if(typeof e=="string"){var r;return(r=s[e])==null?void 0:r.toString()}return e(s)}function un(e){var i;const{slots:s,slotProps:t,innerRadius:r,outerRadius:o,arcLabelRadius:g,cornerRadius:a=0,paddingAngle:m=0,id:u,highlightScope:n,highlighted:b,faded:l={additionalRadius:-5},data:c,arcLabel:R,arcLabelMinAngle:p=0,skipAnimation:P}=e,h=B(e,rn),v=ye({innerRadius:r,outerRadius:o,arcLabelRadius:g,cornerRadius:a,paddingAngle:m,id:u,highlightScope:n,highlighted:b,faded:l,data:c}),x=xe(v,T({},Ke,{immediate:P}));if(c.length===0)return null;const y=(i=s==null?void 0:s.pieArcLabel)!=null?i:tn;return S.jsx("g",T({},h,{children:x((C,f)=>{let{startAngle:j,endAngle:L,paddingAngle:H,innerRadius:M,outerRadius:k,arcLabelRadius:I,cornerRadius:d}=C,A=B(C,on);return S.jsx(y,T({startAngle:j,endAngle:L,paddingAngle:H,innerRadius:M,outerRadius:k,arcLabelRadius:I,cornerRadius:d,style:A,id:u,color:f.color,isFaded:f.isFaded,isHighlighted:f.isHighlighted,formattedArcLabel:dn(R,p,f)},t==null?void 0:t.pieArcLabel))})}))}function cn(e){const{skipAnimation:i,slots:s,slotProps:t,onClick:r}=e,o=N.useContext(He).pie,{left:g,top:a,width:m,height:u}=N.useContext(Ie);if(o===void 0)return null;const n=Math.min(m,u)/2,{series:b,seriesOrder:l}=o;return S.jsxs("g",{children:[l.map(c=>{const{innerRadius:R,outerRadius:p,cornerRadius:P,paddingAngle:h,data:v,cx:x,cy:y,highlighted:C,faded:f,highlightScope:j}=b[c],L=O(p??n,n),H=O(R??0,n),M=O(x??"50%",m),k=O(y??"50%",u);return S.jsx("g",{transform:`translate(${g+M}, ${a+k})`,children:S.jsx(Qe,{innerRadius:H,outerRadius:L,cornerRadius:P,paddingAngle:h,id:c,data:v,skipAnimation:i,highlightScope:j,highlighted:C,faded:f,onClick:r,slots:s,slotProps:t})},c)}),l.map(c=>{const{innerRadius:R,outerRadius:p,arcLabelRadius:P,cornerRadius:h,paddingAngle:v,arcLabel:x,arcLabelMinAngle:y,data:C,cx:f,cy:j,highlightScope:L}=b[c],H=O(p??n,n),M=O(R??0,n),k=P===void 0?(H+M)/2:O(P,n),I=O(f??"50%",m),d=O(j??"50%",u);return S.jsx("g",{transform:`translate(${g+I}, ${a+d})`,children:S.jsx(un,{innerRadius:M,outerRadius:H??n,arcLabelRadius:k,cornerRadius:h,paddingAngle:v,id:c,data:C,skipAnimation:i,arcLabel:x,arcLabelMinAngle:y,highlightScope:L})},c)})]})}const gn={top:5,bottom:5,left:5,right:100};function hn(e){const{xAxis:i,yAxis:s,series:t,width:r,height:o,margin:g,colors:a,sx:m,tooltip:u={trigger:"item"},axisHighlight:n={x:"none",y:"none"},skipAnimation:b,legend:l={direction:"column",position:{vertical:"middle",horizontal:"right"}},topAxis:c=null,leftAxis:R=null,rightAxis:p=null,bottomAxis:P=null,children:h,slots:v,slotProps:x,onClick:y}=e,C=T({},gn,g);return S.jsxs($e,{series:t.map(f=>T({type:"pie"},f)),width:r,height:o,margin:C,xAxis:i??[{id:Te,scaleType:"point",data:[...new Array(Math.max(...t.map(f=>f.data.length)))].map((f,j)=>j)}],yAxis:s,colors:a,sx:m,disableAxisListener:(u==null?void 0:u.trigger)!=="axis"&&(n==null?void 0:n.x)==="none"&&(n==null?void 0:n.y)==="none",children:[S.jsx(Fe,{topAxis:c,leftAxis:R,rightAxis:p,bottomAxis:P,slots:v,slotProps:x}),S.jsx(cn,{slots:v,slotProps:x,onClick:y,skipAnimation:b}),S.jsx(we,T({},l,{slots:v,slotProps:x})),S.jsx(Ee,T({},n)),S.jsx(Oe,T({},u)),h]})}const pn={margin:{right:1,bottom:10},legend:{direction:"row",position:{vertical:"bottom",horizontal:"left"},padding:10}},mn=()=>{const e=be(t=>t.accountData.expencesArray);console.log(e);const i=new Map;e.forEach((t,r)=>{const{tag:o,amount:g}=t;i.has(o)?i.set(o,i.get(o)+g):i.set(o,g)});const s=[];return i.forEach((t,r)=>{console.log(t,r),s.push({id:r,value:t,label:r})}),console.log(i),S.jsxs("div",{children:[S.jsx("h1",{children:"AllExpenses"}),S.jsx("div",{children:S.jsx(hn,{series:[{data:s,innerRadius:20,outerRadius:100,paddingAngle:2,cornerRadius:3,startAngle:-180,endAngle:180,cx:120,cy:120,faded:{innerRadius:30,additionalRadius:-30,color:"gray"}}],height:400,...pn})})]})};export{mn as default};
