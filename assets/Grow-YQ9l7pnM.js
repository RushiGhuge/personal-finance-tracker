import{r as u,R as mt,N as O,O as I,v as X,_ as p,w as z,j as G,P as ht,F as Et}from"./index-30T6eusQ.js";function Gt(...t){return t.reduce((i,r)=>r==null?i:function(...e){i.apply(this,e),r.apply(this,e)},()=>{})}function Ht(t,i=166){let r;function o(...e){const n=()=>{t.apply(this,e)};clearTimeout(r),r=setTimeout(n,i)}return o.clear=()=>{clearTimeout(r)},o}function Ut(t,i){var r,o;return u.isValidElement(t)&&i.indexOf((r=t.type.muiName)!=null?r:(o=t.type)==null||(o=o._payload)==null||(o=o.value)==null?void 0:o.muiName)!==-1}function yt(t){return t&&t.ownerDocument||document}function $t(t){return yt(t).defaultView||window}function H(t,i){typeof t=="function"?t(i):t&&(t.current=i)}const U=typeof window<"u"?u.useLayoutEffect:u.useEffect;let q=0;function vt(t){const[i,r]=u.useState(t),o=t||i;return u.useEffect(()=>{i==null&&(q+=1,r(`mui-${q}`))},[i]),o}const J=mt.useId;function At(t){if(J!==void 0){const i=J();return t??i}return vt(t)}function Wt({controlled:t,default:i,name:r,state:o="value"}){const{current:e}=u.useRef(t!==void 0),[n,s]=u.useState(i),a=e?t:n,l=u.useCallback(c=>{e||s(c)},[]);return[a,l]}function Kt(t){const i=u.useRef(t);return U(()=>{i.current=t}),u.useRef((...r)=>(0,i.current)(...r)).current}function B(...t){return u.useMemo(()=>t.every(i=>i==null)?null:i=>{t.forEach(r=>{H(r,i)})},t)}let L=!0,$=!1,Q;const xt={text:!0,search:!0,url:!0,tel:!0,email:!0,password:!0,number:!0,date:!0,month:!0,week:!0,time:!0,datetime:!0,"datetime-local":!0};function gt(t){const{type:i,tagName:r}=t;return!!(r==="INPUT"&&xt[i]&&!t.readOnly||r==="TEXTAREA"&&!t.readOnly||t.isContentEditable)}function Tt(t){t.metaKey||t.altKey||t.ctrlKey||(L=!0)}function V(){L=!1}function bt(){this.visibilityState==="hidden"&&$&&(L=!0)}function St(t){t.addEventListener("keydown",Tt,!0),t.addEventListener("mousedown",V,!0),t.addEventListener("pointerdown",V,!0),t.addEventListener("touchstart",V,!0),t.addEventListener("visibilitychange",bt,!0)}function Nt(t){const{target:i}=t;try{return i.matches(":focus-visible")}catch{}return L||gt(i)}function Xt(){const t=u.useCallback(e=>{e!=null&&St(e.ownerDocument)},[]),i=u.useRef(!1);function r(){return i.current?($=!0,window.clearTimeout(Q),Q=window.setTimeout(()=>{$=!1},100),i.current=!1,!0):!1}function o(e){return Nt(e)?(i.current=!0,!0):!1}return{isFocusVisibleRef:i,onFocus:o,onBlur:r,ref:t}}function A(t,i){return A=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(o,e){return o.__proto__=e,o},A(t,i)}function Rt(t,i){t.prototype=Object.create(i.prototype),t.prototype.constructor=t,A(t,i)}const Y={disabled:!1},nt=O.createContext(null);var Ct=function(i){return i.scrollTop},D="unmounted",T="exited",b="entering",w="entered",W="exiting",y=function(t){Rt(i,t);function i(o,e){var n;n=t.call(this,o,e)||this;var s=e,a=s&&!s.isMounting?o.enter:o.appear,l;return n.appearStatus=null,o.in?a?(l=T,n.appearStatus=b):l=w:o.unmountOnExit||o.mountOnEnter?l=D:l=T,n.state={status:l},n.nextCallback=null,n}i.getDerivedStateFromProps=function(e,n){var s=e.in;return s&&n.status===D?{status:T}:null};var r=i.prototype;return r.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},r.componentDidUpdate=function(e){var n=null;if(e!==this.props){var s=this.state.status;this.props.in?s!==b&&s!==w&&(n=b):(s===b||s===w)&&(n=W)}this.updateStatus(!1,n)},r.componentWillUnmount=function(){this.cancelNextCallback()},r.getTimeouts=function(){var e=this.props.timeout,n,s,a;return n=s=a=e,e!=null&&typeof e!="number"&&(n=e.exit,s=e.enter,a=e.appear!==void 0?e.appear:s),{exit:n,enter:s,appear:a}},r.updateStatus=function(e,n){if(e===void 0&&(e=!1),n!==null)if(this.cancelNextCallback(),n===b){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:I.findDOMNode(this);s&&Ct(s)}this.performEnter(e)}else this.performExit();else this.props.unmountOnExit&&this.state.status===T&&this.setState({status:D})},r.performEnter=function(e){var n=this,s=this.props.enter,a=this.context?this.context.isMounting:e,l=this.props.nodeRef?[a]:[I.findDOMNode(this),a],c=l[0],d=l[1],h=this.getTimeouts(),g=a?h.appear:h.enter;if(!e&&!s||Y.disabled){this.safeSetState({status:w},function(){n.props.onEntered(c)});return}this.props.onEnter(c,d),this.safeSetState({status:b},function(){n.props.onEntering(c,d),n.onTransitionEnd(g,function(){n.safeSetState({status:w},function(){n.props.onEntered(c,d)})})})},r.performExit=function(){var e=this,n=this.props.exit,s=this.getTimeouts(),a=this.props.nodeRef?void 0:I.findDOMNode(this);if(!n||Y.disabled){this.safeSetState({status:T},function(){e.props.onExited(a)});return}this.props.onExit(a),this.safeSetState({status:W},function(){e.props.onExiting(a),e.onTransitionEnd(s.exit,function(){e.safeSetState({status:T},function(){e.props.onExited(a)})})})},r.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},r.safeSetState=function(e,n){n=this.setNextCallback(n),this.setState(e,n)},r.setNextCallback=function(e){var n=this,s=!0;return this.nextCallback=function(a){s&&(s=!1,n.nextCallback=null,e(a))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},r.onTransitionEnd=function(e,n){this.setNextCallback(n);var s=this.props.nodeRef?this.props.nodeRef.current:I.findDOMNode(this),a=e==null&&!this.props.addEndListener;if(!s||a){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var l=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],c=l[0],d=l[1];this.props.addEndListener(c,d)}e!=null&&setTimeout(this.nextCallback,e)},r.render=function(){var e=this.state.status;if(e===D)return null;var n=this.props,s=n.children;n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef;var a=X(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return O.createElement(nt.Provider,{value:null},typeof s=="function"?s(e,a):O.cloneElement(O.Children.only(s),a))},i}(O.Component);y.contextType=nt;y.propTypes={};function P(){}y.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:P,onEntering:P,onEntered:P,onExit:P,onExiting:P,onExited:P};y.UNMOUNTED=D;y.EXITED=T;y.ENTERING=b;y.ENTERED=w;y.EXITING=W;const Pt=y,wt=t=>t.scrollTop;function tt(t,i){var r,o;const{timeout:e,easing:n,style:s={}}=t;return{duration:(r=s.transitionDuration)!=null?r:typeof e=="number"?e:e[i.mode]||0,easing:(o=s.transitionTimingFunction)!=null?o:typeof n=="object"?n[i.mode]:n,delay:s.transitionDelay}}function Ot(t){return typeof t=="string"}function Dt(t,i,r){return t===void 0||Ot(t)?i:p({},i,{ownerState:p({},i.ownerState,r)})}function kt(t,i=[]){if(t===void 0)return{};const r={};return Object.keys(t).filter(o=>o.match(/^on[A-Z]/)&&typeof t[o]=="function"&&!i.includes(o)).forEach(o=>{r[o]=t[o]}),r}function _t(t,i,r){return typeof t=="function"?t(i,r):t}function et(t){if(t===void 0)return{};const i={};return Object.keys(t).filter(r=>!(r.match(/^on[A-Z]/)&&typeof t[r]=="function")).forEach(r=>{i[r]=t[r]}),i}function Ft(t){const{getSlotProps:i,additionalProps:r,externalSlotProps:o,externalForwardedProps:e,className:n}=t;if(!i){const k=z(r==null?void 0:r.className,n,e==null?void 0:e.className,o==null?void 0:o.className),S=p({},r==null?void 0:r.style,e==null?void 0:e.style,o==null?void 0:o.style),m=p({},r,e,o);return k.length>0&&(m.className=k),Object.keys(S).length>0&&(m.style=S),{props:m,internalRef:void 0}}const s=kt(p({},e,o)),a=et(o),l=et(e),c=i(s),d=z(c==null?void 0:c.className,r==null?void 0:r.className,n,e==null?void 0:e.className,o==null?void 0:o.className),h=p({},c==null?void 0:c.style,r==null?void 0:r.style,e==null?void 0:e.style,o==null?void 0:o.style),g=p({},c,r,l,a);return d.length>0&&(g.className=d),Object.keys(h).length>0&&(g.style=h),{props:g,internalRef:c.ref}}const It=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function Bt(t){var i;const{elementType:r,externalSlotProps:o,ownerState:e,skipResolvingSlotProps:n=!1}=t,s=X(t,It),a=n?{}:_t(o,e),{props:l,internalRef:c}=Ft(p({},s,{externalSlotProps:a})),d=B(c,a==null?void 0:a.ref,(i=t.additionalProps)==null?void 0:i.ref);return Dt(r,p({},l,{ref:d}),e)}function Lt(t){return typeof t=="function"?t():t}const Zt=u.forwardRef(function(i,r){const{children:o,container:e,disablePortal:n=!1}=i,[s,a]=u.useState(null),l=B(u.isValidElement(o)?o.ref:null,r);if(U(()=>{n||a(Lt(e)||document.body)},[e,n]),U(()=>{if(s&&!n)return H(r,s),()=>{H(r,null)}},[r,s,n]),n){if(u.isValidElement(o)){const c={ref:l};return u.cloneElement(o,c)}return G.jsx(u.Fragment,{children:o})}return G.jsx(u.Fragment,{children:s&&ht.createPortal(o,s)})}),Mt=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function K(t){return`scale(${t}, ${t**2})`}const Vt={entering:{opacity:1,transform:K(1)},entered:{opacity:1,transform:"none"}},j=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),it=u.forwardRef(function(i,r){const{addEndListener:o,appear:e=!0,children:n,easing:s,in:a,onEnter:l,onEntered:c,onEntering:d,onExit:h,onExited:g,onExiting:k,style:S,timeout:m="auto",TransitionComponent:rt=Pt}=i,ot=X(i,Mt),Z=u.useRef(),M=u.useRef(),N=Et(),_=u.useRef(null),st=B(_,n.ref,r),R=f=>v=>{if(f){const x=_.current;v===void 0?f(x):f(x,v)}},at=R(d),ut=R((f,v)=>{wt(f);const{duration:x,delay:F,easing:E}=tt({style:S,timeout:m,easing:s},{mode:"enter"});let C;m==="auto"?(C=N.transitions.getAutoHeightDuration(f.clientHeight),M.current=C):C=x,f.style.transition=[N.transitions.create("opacity",{duration:C,delay:F}),N.transitions.create("transform",{duration:j?C:C*.666,delay:F,easing:E})].join(","),l&&l(f,v)}),lt=R(c),ct=R(k),ft=R(f=>{const{duration:v,delay:x,easing:F}=tt({style:S,timeout:m,easing:s},{mode:"exit"});let E;m==="auto"?(E=N.transitions.getAutoHeightDuration(f.clientHeight),M.current=E):E=v,f.style.transition=[N.transitions.create("opacity",{duration:E,delay:x}),N.transitions.create("transform",{duration:j?E:E*.666,delay:j?x:x||E*.333,easing:F})].join(","),f.style.opacity=0,f.style.transform=K(.75),h&&h(f)}),dt=R(g),pt=f=>{m==="auto"&&(Z.current=setTimeout(f,M.current||0)),o&&o(_.current,f)};return u.useEffect(()=>()=>{clearTimeout(Z.current)},[]),G.jsx(rt,p({appear:e,in:a,nodeRef:_,onEnter:ut,onEntered:lt,onEntering:at,onExit:ft,onExited:dt,onExiting:ct,addEndListener:pt,timeout:m==="auto"?null:m},ot,{children:(f,v)=>u.cloneElement(n,p({style:p({opacity:0,transform:K(.75),visibility:f==="exited"&&!a?"hidden":void 0},Vt[f],S,n.props.style),ref:st},v))}))});it.muiSupportAuto=!0;const zt=it;export{zt as G,Zt as P,Pt as T,Rt as _,$t as a,At as b,Gt as c,Ht as d,Wt as e,Kt as f,B as g,Xt as h,Ut as i,Bt as j,Dt as k,Ot as l,tt as m,kt as n,yt as o,nt as p,wt as r,H as s,U as u};
