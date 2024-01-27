import{r as a,_ as A,v as ee,N as W,w as E,j as $,k as me,l as te,m as ne,q as be,i as Ie,x as Ue}from"./index-30T6eusQ.js";import{_ as _e,p as ue,g as ce,h as ze,f as H}from"./Grow-YQ9l7pnM.js";function Oe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function oe(e,s){var r=function(t){return s&&a.isValidElement(t)?s(t):t},l=Object.create(null);return e&&a.Children.map(e,function(n){return n}).forEach(function(n){l[n.key]=r(n)}),l}function Ke(e,s){e=e||{},s=s||{};function r(f){return f in s?s[f]:e[f]}var l=Object.create(null),n=[];for(var t in e)t in s?n.length&&(l[t]=n,n=[]):n.push(t);var o,c={};for(var u in s){if(l[u])for(o=0;o<l[u].length;o++){var p=l[u][o];c[l[u][o]]=r(p)}c[u]=r(u)}for(o=0;o<n.length;o++)c[n[o]]=r(n[o]);return c}function N(e,s,r){return r[s]!=null?r[s]:e.props[s]}function Ae(e,s){return oe(e.children,function(r){return a.cloneElement(r,{onExited:s.bind(null,r),in:!0,appear:N(r,"appear",e),enter:N(r,"enter",e),exit:N(r,"exit",e)})})}function Xe(e,s,r){var l=oe(e.children),n=Ke(s,l);return Object.keys(n).forEach(function(t){var o=n[t];if(a.isValidElement(o)){var c=t in s,u=t in l,p=s[t],f=a.isValidElement(p)&&!p.props.in;u&&(!c||f)?n[t]=a.cloneElement(o,{onExited:r.bind(null,o),in:!0,exit:N(o,"exit",e),enter:N(o,"enter",e)}):!u&&c&&!f?n[t]=a.cloneElement(o,{in:!1}):u&&c&&a.isValidElement(p)&&(n[t]=a.cloneElement(o,{onExited:r.bind(null,o),in:p.props.in,exit:N(o,"exit",e),enter:N(o,"enter",e)}))}}),n}var Ye=Object.values||function(e){return Object.keys(e).map(function(s){return e[s]})},We={component:"div",childFactory:function(s){return s}},ie=function(e){_e(s,e);function s(l,n){var t;t=e.call(this,l,n)||this;var o=t.handleExited.bind(Oe(t));return t.state={contextValue:{isMounting:!0},handleExited:o,firstRender:!0},t}var r=s.prototype;return r.componentDidMount=function(){this.mounted=!0,this.setState({contextValue:{isMounting:!1}})},r.componentWillUnmount=function(){this.mounted=!1},s.getDerivedStateFromProps=function(n,t){var o=t.children,c=t.handleExited,u=t.firstRender;return{children:u?Ae(n,c):Xe(n,o,c),firstRender:!1}},r.handleExited=function(n,t){var o=oe(this.props.children);n.key in o||(n.props.onExited&&n.props.onExited(t),this.mounted&&this.setState(function(c){var u=A({},c.children);return delete u[n.key],{children:u}}))},r.render=function(){var n=this.props,t=n.component,o=n.childFactory,c=ee(n,["component","childFactory"]),u=this.state.contextValue,p=Ye(this.state.children).map(o);return delete c.appear,delete c.enter,delete c.exit,t===null?W.createElement(ue.Provider,{value:u},p):W.createElement(ue.Provider,{value:u},W.createElement(t,c,p))},s}(W.Component);ie.propTypes={};ie.defaultProps=We;const He=ie;function Ge(e){const{className:s,classes:r,pulsate:l=!1,rippleX:n,rippleY:t,rippleSize:o,in:c,onExited:u,timeout:p}=e,[f,g]=a.useState(!1),b=E(s,r.ripple,r.rippleVisible,l&&r.ripplePulsate),C={width:o,height:o,top:-(o/2)+t,left:-(o/2)+n},h=E(r.child,f&&r.childLeaving,l&&r.childPulsate);return!c&&!f&&g(!0),a.useEffect(()=>{if(!c&&u!=null){const R=setTimeout(u,p);return()=>{clearTimeout(R)}}},[u,c,p]),$.jsx("span",{className:b,style:C,children:$.jsx("span",{className:h})})}const m=me("MuiTouchRipple",["root","ripple","rippleVisible","ripplePulsate","child","childLeaving","childPulsate"]),qe=["center","classes","className"];let G=e=>e,pe,de,fe,he;const Z=550,Je=80,Qe=te(pe||(pe=G`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)),Ze=te(de||(de=G`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)),et=te(fe||(fe=G`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)),tt=ne("span",{name:"MuiTouchRipple",slot:"Root"})({overflow:"hidden",pointerEvents:"none",position:"absolute",zIndex:0,top:0,right:0,bottom:0,left:0,borderRadius:"inherit"}),nt=ne(Ge,{name:"MuiTouchRipple",slot:"Ripple"})(he||(he=G`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`),m.rippleVisible,Qe,Z,({theme:e})=>e.transitions.easing.easeInOut,m.ripplePulsate,({theme:e})=>e.transitions.duration.shorter,m.child,m.childLeaving,Ze,Z,({theme:e})=>e.transitions.easing.easeInOut,m.childPulsate,et,({theme:e})=>e.transitions.easing.easeInOut),ot=a.forwardRef(function(s,r){const l=be({props:s,name:"MuiTouchRipple"}),{center:n=!1,classes:t={},className:o}=l,c=ee(l,qe),[u,p]=a.useState([]),f=a.useRef(0),g=a.useRef(null);a.useEffect(()=>{g.current&&(g.current(),g.current=null)},[u]);const b=a.useRef(!1),C=a.useRef(0),h=a.useRef(null),R=a.useRef(null);a.useEffect(()=>()=>{C.current&&clearTimeout(C.current)},[]);const U=a.useCallback(d=>{const{pulsate:M,rippleX:x,rippleY:L,rippleSize:I,cb:z}=d;p(T=>[...T,$.jsx(nt,{classes:{ripple:E(t.ripple,m.ripple),rippleVisible:E(t.rippleVisible,m.rippleVisible),ripplePulsate:E(t.ripplePulsate,m.ripplePulsate),child:E(t.child,m.child),childLeaving:E(t.childLeaving,m.childLeaving),childPulsate:E(t.childPulsate,m.childPulsate)},timeout:Z,pulsate:M,rippleX:x,rippleY:L,rippleSize:I},f.current)]),f.current+=1,g.current=z},[t]),F=a.useCallback((d={},M={},x=()=>{})=>{const{pulsate:L=!1,center:I=n||M.pulsate,fakeElement:z=!1}=M;if((d==null?void 0:d.type)==="mousedown"&&b.current){b.current=!1;return}(d==null?void 0:d.type)==="touchstart"&&(b.current=!0);const T=z?null:R.current,P=T?T.getBoundingClientRect():{width:0,height:0,left:0,top:0};let v,w,D;if(I||d===void 0||d.clientX===0&&d.clientY===0||!d.clientX&&!d.touches)v=Math.round(P.width/2),w=Math.round(P.height/2);else{const{clientX:S,clientY:V}=d.touches&&d.touches.length>0?d.touches[0]:d;v=Math.round(S-P.left),w=Math.round(V-P.top)}if(I)D=Math.sqrt((2*P.width**2+P.height**2)/3),D%2===0&&(D+=1);else{const S=Math.max(Math.abs((T?T.clientWidth:0)-v),v)*2+2,V=Math.max(Math.abs((T?T.clientHeight:0)-w),w)*2+2;D=Math.sqrt(S**2+V**2)}d!=null&&d.touches?h.current===null&&(h.current=()=>{U({pulsate:L,rippleX:v,rippleY:w,rippleSize:D,cb:x})},C.current=setTimeout(()=>{h.current&&(h.current(),h.current=null)},Je)):U({pulsate:L,rippleX:v,rippleY:w,rippleSize:D,cb:x})},[n,U]),_=a.useCallback(()=>{F({},{pulsate:!0})},[F]),j=a.useCallback((d,M)=>{if(clearTimeout(C.current),(d==null?void 0:d.type)==="touchend"&&h.current){h.current(),h.current=null,C.current=setTimeout(()=>{j(d,M)});return}h.current=null,p(x=>x.length>0?x.slice(1):x),g.current=M},[]);return a.useImperativeHandle(r,()=>({pulsate:_,start:F,stop:j}),[_,F,j]),$.jsx(tt,A({className:E(m.root,t.root,o),ref:R},c,{children:$.jsx(He,{component:null,exit:!0,children:u})}))}),it=ot;function st(e){return Ie("MuiButtonBase",e)}const rt=me("MuiButtonBase",["root","disabled","focusVisible"]),at=["action","centerRipple","children","className","component","disabled","disableRipple","disableTouchRipple","focusRipple","focusVisibleClassName","LinkComponent","onBlur","onClick","onContextMenu","onDragLeave","onFocus","onFocusVisible","onKeyDown","onKeyUp","onMouseDown","onMouseLeave","onMouseUp","onTouchEnd","onTouchMove","onTouchStart","tabIndex","TouchRippleProps","touchRippleRef","type"],lt=e=>{const{disabled:s,focusVisible:r,focusVisibleClassName:l,classes:n}=e,o=Ue({root:["root",s&&"disabled",r&&"focusVisible"]},st,n);return r&&l&&(o.root+=` ${l}`),o},ut=ne("button",{name:"MuiButtonBase",slot:"Root",overridesResolver:(e,s)=>s.root})({display:"inline-flex",alignItems:"center",justifyContent:"center",position:"relative",boxSizing:"border-box",WebkitTapHighlightColor:"transparent",backgroundColor:"transparent",outline:0,border:0,margin:0,borderRadius:0,padding:0,cursor:"pointer",userSelect:"none",verticalAlign:"middle",MozAppearance:"none",WebkitAppearance:"none",textDecoration:"none",color:"inherit","&::-moz-focus-inner":{borderStyle:"none"},[`&.${rt.disabled}`]:{pointerEvents:"none",cursor:"default"},"@media print":{colorAdjust:"exact"}}),ct=a.forwardRef(function(s,r){const l=be({props:s,name:"MuiButtonBase"}),{action:n,centerRipple:t=!1,children:o,className:c,component:u="button",disabled:p=!1,disableRipple:f=!1,disableTouchRipple:g=!1,focusRipple:b=!1,LinkComponent:C="a",onBlur:h,onClick:R,onContextMenu:U,onDragLeave:F,onFocus:_,onFocusVisible:j,onKeyDown:d,onKeyUp:M,onMouseDown:x,onMouseLeave:L,onMouseUp:I,onTouchEnd:z,onTouchMove:T,onTouchStart:P,tabIndex:v=0,TouchRippleProps:w,touchRippleRef:D,type:S}=l,V=ee(l,at),O=a.useRef(null),y=a.useRef(null),ge=ce(y,D),{isFocusVisibleRef:se,onFocus:Re,onBlur:Me,ref:xe}=ze(),[k,X]=a.useState(!1);p&&k&&X(!1),a.useImperativeHandle(n,()=>({focusVisible:()=>{X(!0),O.current.focus()}}),[]);const[q,Te]=a.useState(!1);a.useEffect(()=>{Te(!0)},[]);const ye=q&&!f&&!p;a.useEffect(()=>{k&&b&&!f&&q&&y.current.pulsate()},[f,b,k,q]);function B(i,ae,je=g){return H(le=>(ae&&ae(le),!je&&y.current&&y.current[i](le),!0))}const Ee=B("start",x),Ce=B("stop",U),ve=B("stop",F),Ve=B("stop",I),Be=B("stop",i=>{k&&i.preventDefault(),L&&L(i)}),Pe=B("start",P),we=B("stop",z),De=B("stop",T),Le=B("stop",i=>{Me(i),se.current===!1&&X(!1),h&&h(i)},!1),Se=H(i=>{O.current||(O.current=i.currentTarget),Re(i),se.current===!0&&(X(!0),j&&j(i)),_&&_(i)}),J=()=>{const i=O.current;return u&&u!=="button"&&!(i.tagName==="A"&&i.href)},Q=a.useRef(!1),ke=H(i=>{b&&!Q.current&&k&&y.current&&i.key===" "&&(Q.current=!0,y.current.stop(i,()=>{y.current.start(i)})),i.target===i.currentTarget&&J()&&i.key===" "&&i.preventDefault(),d&&d(i),i.target===i.currentTarget&&J()&&i.key==="Enter"&&!p&&(i.preventDefault(),R&&R(i))}),Ne=H(i=>{b&&i.key===" "&&y.current&&k&&!i.defaultPrevented&&(Q.current=!1,y.current.stop(i,()=>{y.current.pulsate(i)})),M&&M(i),R&&i.target===i.currentTarget&&J()&&i.key===" "&&!i.defaultPrevented&&R(i)});let Y=u;Y==="button"&&(V.href||V.to)&&(Y=C);const K={};Y==="button"?(K.type=S===void 0?"button":S,K.disabled=p):(!V.href&&!V.to&&(K.role="button"),p&&(K["aria-disabled"]=p));const $e=ce(r,xe,O),re=A({},l,{centerRipple:t,component:u,disabled:p,disableRipple:f,disableTouchRipple:g,focusRipple:b,tabIndex:v,focusVisible:k}),Fe=lt(re);return $.jsxs(ut,A({as:Y,className:E(Fe.root,c),ownerState:re,onBlur:Le,onClick:R,onContextMenu:Ce,onFocus:Se,onKeyDown:ke,onKeyUp:Ne,onMouseDown:Ee,onMouseLeave:Be,onMouseUp:Ve,onDragLeave:ve,onTouchEnd:we,onTouchMove:De,onTouchStart:Pe,ref:$e,tabIndex:p?-1:v,type:S},K,V,{children:[o,ye?$.jsx(it,A({ref:ge,center:t},w)):null]}))}),ht=ct;export{ht as B};
