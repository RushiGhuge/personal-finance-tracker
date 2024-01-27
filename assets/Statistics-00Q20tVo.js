import{W as Ft,k as X,m as W,v as O,r as j,_ as E,j as x,x as Y,i as K,J as Ut}from"./index-30T6eusQ.js";import{w as st,c as b,a as mt,t as G,s as H,p as et,b as vt,d as F,e as _t,f as nt,u as ot,I as z,g as rt,h as lt,S as B,C as V,i as J,j as Xt,D as at,k as Wt,R as Yt,l as Kt,m as Gt,n as zt,o as Bt}from"./ChartsAxisHighlight-k3xkPwKo.js";import{j as Tt,b as Vt}from"./Grow-YQ9l7pnM.js";import"./createBox-g9v1669b.js";import"./Typography-ZyoyaP1l.js";import"./Dashbord-h7EvJ7KC.js";var bt={exports:{}},Jt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",Qt=Jt,Zt=Qt;function At(){}function kt(){}kt.resetWarningCache=At;var te=function(){function t(s,o,i,r,l,c){if(c!==Zt){var u=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw u.name="Invariant Violation",u}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:kt,resetWarningCache:At};return n.PropTypes=n,n};bt.exports=te();var ee=bt.exports;const h=Ft(ee);function Pt(t){this._context=t}Pt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._point=0},lineEnd:function(){(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:this._context.lineTo(t,e);break}}};function ct(t){return new Pt(t)}function Ct(t){return t[0]}function Et(t){return t[1]}function St(t,e){var n=b(!0),s=null,o=ct,i=null,r=st(l);t=typeof t=="function"?t:t===void 0?Ct:b(t),e=typeof e=="function"?e:e===void 0?Et:b(e);function l(c){var u,p=(c=mt(c)).length,a,_=!1,g;for(s==null&&(i=o(g=r())),u=0;u<=p;++u)!(u<p&&n(a=c[u],u,c))===_&&((_=!_)?i.lineStart():i.lineEnd()),_&&i.point(+t(a,u,c),+e(a,u,c));if(g)return i=null,g+""||null}return l.x=function(c){return arguments.length?(t=typeof c=="function"?c:b(+c),l):t},l.y=function(c){return arguments.length?(e=typeof c=="function"?c:b(+c),l):e},l.defined=function(c){return arguments.length?(n=typeof c=="function"?c:b(!!c),l):n},l.curve=function(c){return arguments.length?(o=c,s!=null&&(i=o(s)),l):o},l.context=function(c){return arguments.length?(c==null?s=i=null:i=o(s=c),l):s},l}function ne(t,e,n){var s=null,o=b(!0),i=null,r=ct,l=null,c=st(u);t=typeof t=="function"?t:t===void 0?Ct:b(+t),e=typeof e=="function"?e:e===void 0?b(0):b(+e),n=typeof n=="function"?n:n===void 0?Et:b(+n);function u(a){var _,g,v,f=(a=mt(a)).length,m,T=!1,P,M=new Array(f),k=new Array(f);for(i==null&&(l=r(P=c())),_=0;_<=f;++_){if(!(_<f&&o(m=a[_],_,a))===T)if(T=!T)g=_,l.areaStart(),l.lineStart();else{for(l.lineEnd(),l.lineStart(),v=_-1;v>=g;--v)l.point(M[v],k[v]);l.lineEnd(),l.areaEnd()}T&&(M[_]=+t(m,_,a),k[_]=+e(m,_,a),l.point(s?+s(m,_,a):M[_],n?+n(m,_,a):k[_]))}if(P)return l=null,P+""||null}function p(){return St().defined(o).curve(r).context(i)}return u.x=function(a){return arguments.length?(t=typeof a=="function"?a:b(+a),s=null,u):t},u.x0=function(a){return arguments.length?(t=typeof a=="function"?a:b(+a),u):t},u.x1=function(a){return arguments.length?(s=a==null?null:typeof a=="function"?a:b(+a),u):s},u.y=function(a){return arguments.length?(e=typeof a=="function"?a:b(+a),n=null,u):e},u.y0=function(a){return arguments.length?(e=typeof a=="function"?a:b(+a),u):e},u.y1=function(a){return arguments.length?(n=a==null?null:typeof a=="function"?a:b(+a),u):n},u.lineX0=u.lineY0=function(){return p().x(t).y(e)},u.lineY1=function(){return p().x(t).y(n)},u.lineX1=function(){return p().x(s).y(e)},u.defined=function(a){return arguments.length?(o=typeof a=="function"?a:b(!!a),u):o},u.curve=function(a){return arguments.length?(r=a,i!=null&&(l=r(i)),u):r},u.context=function(a){return arguments.length?(a==null?i=l=null:l=r(i=a),u):i},u}const jt={draw(t,e){const n=H(e/et);t.moveTo(n,0),t.arc(0,0,n,0,G)}},ie={draw(t,e){const n=H(e/5)/2;t.moveTo(-3*n,-n),t.lineTo(-n,-n),t.lineTo(-n,-3*n),t.lineTo(n,-3*n),t.lineTo(n,-n),t.lineTo(3*n,-n),t.lineTo(3*n,n),t.lineTo(n,n),t.lineTo(n,3*n),t.lineTo(-n,3*n),t.lineTo(-n,n),t.lineTo(-3*n,n),t.closePath()}},Mt=H(1/3),se=Mt*2,oe={draw(t,e){const n=H(e/se),s=n*Mt;t.moveTo(0,-n),t.lineTo(s,0),t.lineTo(0,n),t.lineTo(-s,0),t.closePath()}},re={draw(t,e){const n=H(e),s=-n/2;t.rect(s,s,n,n)}},le=.8908130915292852,wt=F(et/10)/F(7*et/10),ae=F(G/10)*wt,ce=-vt(G/10)*wt,ue={draw(t,e){const n=H(e*le),s=ae*n,o=ce*n;t.moveTo(0,-n),t.lineTo(s,o);for(let i=1;i<5;++i){const r=G*i/5,l=vt(r),c=F(r);t.lineTo(c*n,-l*n),t.lineTo(l*s-c*o,c*s+l*o)}t.closePath()}},Z=H(3),he={draw(t,e){const n=-H(e/(Z*3));t.moveTo(0,n*2),t.lineTo(-Z*n,-n),t.lineTo(Z*n,-n),t.closePath()}},N=-.5,D=H(3)/2,it=1/H(12),_e=(it/2+1)*3,fe={draw(t,e){const n=H(e/_e),s=n/2,o=n*it,i=s,r=n*it+n,l=-i,c=r;t.moveTo(s,o),t.lineTo(i,r),t.lineTo(l,c),t.lineTo(N*s-D*o,D*s+N*o),t.lineTo(N*i-D*r,D*i+N*r),t.lineTo(N*l-D*c,D*l+N*c),t.lineTo(N*s+D*o,N*o-D*s),t.lineTo(N*i+D*r,N*r-D*i),t.lineTo(N*l+D*c,N*c-D*l),t.closePath()}},de=[jt,ie,oe,re,ue,he,fe];function pe(t,e){let n=null,s=st(o);t=typeof t=="function"?t:b(t||jt),e=typeof e=="function"?e:b(e===void 0?64:+e);function o(){let i;if(n||(n=i=s()),t.apply(this,arguments).draw(n,+e.apply(this,arguments)),i)return n=null,i+""||null}return o.type=function(i){return arguments.length?(t=typeof i=="function"?i:b(i),o):t},o.size=function(i){return arguments.length?(e=typeof i=="function"?i:b(+i),o):e},o.context=function(i){return arguments.length?(n=i??null,o):n},o}function ft(t,e,n){t._context.bezierCurveTo(t._x1+t._k*(t._x2-t._x0),t._y1+t._k*(t._y2-t._y0),t._x2+t._k*(t._x1-e),t._y2+t._k*(t._y1-n),t._x2,t._y2)}function ut(t,e){this._context=t,this._k=(1-e)/6}ut.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:ft(this,this._x1,this._y1);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2,this._x1=t,this._y1=e;break;case 2:this._point=3;default:ft(this,t,e);break}this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};(function t(e){function n(s){return new ut(s,e)}return n.tension=function(s){return t(+s)},n})(0);function xe(t,e,n){var s=t._x1,o=t._y1,i=t._x2,r=t._y2;if(t._l01_a>_t){var l=2*t._l01_2a+3*t._l01_a*t._l12_a+t._l12_2a,c=3*t._l01_a*(t._l01_a+t._l12_a);s=(s*l-t._x0*t._l12_2a+t._x2*t._l01_2a)/c,o=(o*l-t._y0*t._l12_2a+t._y2*t._l01_2a)/c}if(t._l23_a>_t){var u=2*t._l23_2a+3*t._l23_a*t._l12_a+t._l12_2a,p=3*t._l23_a*(t._l23_a+t._l12_a);i=(i*u+t._x1*t._l23_2a-e*t._l12_2a)/p,r=(r*u+t._y1*t._l23_2a-n*t._l12_2a)/p}t._context.bezierCurveTo(s,o,i,r,t._x2,t._y2)}function Rt(t,e){this._context=t,this._alpha=e}Rt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._x2=this._y0=this._y1=this._y2=NaN,this._l01_a=this._l12_a=this._l23_a=this._l01_2a=this._l12_2a=this._l23_2a=this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x2,this._y2);break;case 3:this.point(this._x2,this._y2);break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){if(t=+t,e=+e,this._point){var n=this._x2-t,s=this._y2-e;this._l23_a=Math.sqrt(this._l23_2a=Math.pow(n*n+s*s,this._alpha))}switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3;default:xe(this,t,e);break}this._l01_a=this._l12_a,this._l12_a=this._l23_a,this._l01_2a=this._l12_2a,this._l12_2a=this._l23_2a,this._x0=this._x1,this._x1=this._x2,this._x2=t,this._y0=this._y1,this._y1=this._y2,this._y2=e}};const ge=function t(e){function n(s){return e?new Rt(s,e):new ut(s,0)}return n.alpha=function(s){return t(+s)},n}(.5);function dt(t){return t<0?-1:1}function pt(t,e,n){var s=t._x1-t._x0,o=e-t._x1,i=(t._y1-t._y0)/(s||o<0&&-0),r=(n-t._y1)/(o||s<0&&-0),l=(i*o+r*s)/(s+o);return(dt(i)+dt(r))*Math.min(Math.abs(i),Math.abs(r),.5*Math.abs(l))||0}function xt(t,e){var n=t._x1-t._x0;return n?(3*(t._y1-t._y0)/n-e)/2:e}function tt(t,e,n){var s=t._x0,o=t._y0,i=t._x1,r=t._y1,l=(i-s)/3;t._context.bezierCurveTo(s+l,o+l*e,i-l,r-l*n,i,r)}function U(t){this._context=t}U.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x0=this._x1=this._y0=this._y1=this._t0=NaN,this._point=0},lineEnd:function(){switch(this._point){case 2:this._context.lineTo(this._x1,this._y1);break;case 3:tt(this,this._t0,xt(this,this._t0));break}(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line=1-this._line},point:function(t,e){var n=NaN;if(t=+t,e=+e,!(t===this._x1&&e===this._y1)){switch(this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;break;case 2:this._point=3,tt(this,xt(this,n=pt(this,t,e)),n);break;default:tt(this,this._t0,n=pt(this,t,e));break}this._x0=this._x1,this._x1=t,this._y0=this._y1,this._y1=e,this._t0=n}}};function It(t){this._context=new Nt(t)}(It.prototype=Object.create(U.prototype)).point=function(t,e){U.prototype.point.call(this,e,t)};function Nt(t){this._context=t}Nt.prototype={moveTo:function(t,e){this._context.moveTo(e,t)},closePath:function(){this._context.closePath()},lineTo:function(t,e){this._context.lineTo(e,t)},bezierCurveTo:function(t,e,n,s,o,i){this._context.bezierCurveTo(e,t,s,n,i,o)}};function gt(t){return new U(t)}function ye(t){return new It(t)}function Dt(t){this._context=t}Dt.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=[],this._y=[]},lineEnd:function(){var t=this._x,e=this._y,n=t.length;if(n)if(this._line?this._context.lineTo(t[0],e[0]):this._context.moveTo(t[0],e[0]),n===2)this._context.lineTo(t[1],e[1]);else for(var s=yt(t),o=yt(e),i=0,r=1;r<n;++i,++r)this._context.bezierCurveTo(s[0][i],o[0][i],s[1][i],o[1][i],t[r],e[r]);(this._line||this._line!==0&&n===1)&&this._context.closePath(),this._line=1-this._line,this._x=this._y=null},point:function(t,e){this._x.push(+t),this._y.push(+e)}};function yt(t){var e,n=t.length-1,s,o=new Array(n),i=new Array(n),r=new Array(n);for(o[0]=0,i[0]=2,r[0]=t[0]+2*t[1],e=1;e<n-1;++e)o[e]=1,i[e]=4,r[e]=4*t[e]+2*t[e+1];for(o[n-1]=2,i[n-1]=7,r[n-1]=8*t[n-1]+t[n],e=1;e<n;++e)s=o[e]/i[e-1],i[e]-=s,r[e]-=s*r[e-1];for(o[n-1]=r[n-1]/i[n-1],e=n-2;e>=0;--e)o[e]=(r[e]-o[e+1])/i[e];for(i[n-1]=(t[n]+o[n-1])/2,e=0;e<n-1;++e)i[e]=2*t[e+1]-o[e+1];return[o,i]}function me(t){return new Dt(t)}function Q(t,e){this._context=t,this._t=e}Q.prototype={areaStart:function(){this._line=0},areaEnd:function(){this._line=NaN},lineStart:function(){this._x=this._y=NaN,this._point=0},lineEnd:function(){0<this._t&&this._t<1&&this._point===2&&this._context.lineTo(this._x,this._y),(this._line||this._line!==0&&this._point===1)&&this._context.closePath(),this._line>=0&&(this._t=1-this._t,this._line=1-this._line)},point:function(t,e){switch(t=+t,e=+e,this._point){case 0:this._point=1,this._line?this._context.lineTo(t,e):this._context.moveTo(t,e);break;case 1:this._point=2;default:{if(this._t<=0)this._context.lineTo(this._x,e),this._context.lineTo(t,e);else{var n=this._x*(1-this._t)+t*this._t;this._context.lineTo(n,this._y),this._context.lineTo(n,e)}break}}this._x=t,this._y=e}};function ve(t){return new Q(t,.5)}function Te(t){return new Q(t,0)}function be(t){return new Q(t,1)}const Ae=["id","classes","color","highlightScope","slots","slotProps"];function ke(t){return K("MuiAreaElement",t)}X("MuiAreaElement",["root","highlighted","faded"]);const Pe=t=>{const{classes:e,id:n,isFaded:s,isHighlighted:o}=t,i={root:["root",`series-${n}`,o&&"highlighted",s&&"faded"]};return Y(i,ke,e)},Ht=W("path",{name:"MuiAreaElement",slot:"Root",overridesResolver:(t,e)=>e.root})(({ownerState:t})=>({stroke:"none",fill:t.isHighlighted?nt(t.color).brighter(1).formatHex():nt(t.color).brighter(.5).formatHex(),transition:"opacity 0.2s ease-in, fill 0.2s ease-in",opacity:t.isFaded?.3:1}));Ht.propTypes={as:h.elementType,ownerState:h.shape({classes:h.object,color:h.string.isRequired,id:h.string.isRequired,isFaded:h.bool.isRequired,isHighlighted:h.bool.isRequired}).isRequired,sx:h.oneOfType([h.arrayOf(h.oneOfType([h.func,h.object,h.bool])),h.func,h.object])};function Ce(t){var e;const{id:n,classes:s,color:o,highlightScope:i,slots:r,slotProps:l}=t,c=O(t,Ae),u=ot(i),{item:p}=j.useContext(z),a=rt(p,{type:"line",seriesId:n},i),_=!a&&lt(p,{type:"line",seriesId:n},i),g={id:n,classes:s,color:o,isFaded:_,isHighlighted:a},v=Pe(g),f=(e=r==null?void 0:r.area)!=null?e:Ht,m=Tt({elementType:f,externalSlotProps:l==null?void 0:l.area,additionalProps:E({},c,u({type:"line",seriesId:n}),{className:v.root}),ownerState:g});return x.jsx(f,E({},m))}function $t(t){switch(t){case"catmullRom":return ge.alpha(.5);case"linear":return ct;case"monotoneX":return gt;case"monotoneY":return ye;case"natural":return me;case"step":return ve;case"stepBefore":return Te;case"stepAfter":return be;default:return gt}}const Ee=["slots","slotProps"];function Se(t){const{slots:e,slotProps:n}=t,s=O(t,Ee),o=j.useContext(B).line,i=j.useContext(V);if(o===void 0)return null;const{series:r,stackingGroups:l}=o,{xAxis:c,yAxis:u,xAxisIds:p,yAxisIds:a}=i,_=p[0],g=a[0];return x.jsx("g",E({},s,{children:l.flatMap(({ids:v})=>v.flatMap(f=>{var m;const{xAxisKey:T=_,yAxisKey:P=g,stackedData:M,data:k,connectNulls:A}=r[f],C=J(c[T].scale),$=u[P].scale,w=c[T].data,S=ne().x(d=>C(d.x)).defined((d,y)=>A||k[y]!=null).y0(d=>d.y&&$(d.y[0])).y1(d=>d.y&&$(d.y[1])),R=$t(r[f].curve),I=(m=w==null?void 0:w.map((d,y)=>({x:d,y:M[y]})))!=null?m:[],L=A?I.filter((d,y)=>k[y]!=null):I;return!!r[f].area&&x.jsx(Ce,{id:f,d:S.curve(R)(L)||void 0,color:r[f].color,highlightScope:r[f].highlightScope,slots:e,slotProps:n},f)}))}))}const je=["id","classes","color","highlightScope","slots","slotProps"];function Me(t){return K("MuiLineElement",t)}X("MuiLineElement",["root","highlighted","faded"]);const we=t=>{const{classes:e,id:n,isFaded:s,isHighlighted:o}=t,i={root:["root",`series-${n}`,o&&"highlighted",s&&"faded"]};return Y(i,Me,e)},Lt=W("path",{name:"MuiLineElement",slot:"Root",overridesResolver:(t,e)=>e.root})(({ownerState:t})=>({strokeWidth:2,strokeLinejoin:"round",fill:"none",stroke:t.isHighlighted?nt(t.color).brighter(.5).formatHex():t.color,transition:"opacity 0.2s ease-in, stroke 0.2s ease-in",opacity:t.isFaded?.3:1}));Lt.propTypes={as:h.elementType,ownerState:h.shape({classes:h.object,color:h.string.isRequired,id:h.string.isRequired,isFaded:h.bool.isRequired,isHighlighted:h.bool.isRequired}).isRequired,sx:h.oneOfType([h.arrayOf(h.oneOfType([h.func,h.object,h.bool])),h.func,h.object])};function Re(t){var e;const{id:n,classes:s,color:o,highlightScope:i,slots:r,slotProps:l}=t,c=O(t,je),u=ot(i),{item:p}=j.useContext(z),a=rt(p,{type:"line",seriesId:n},i),_=!a&&lt(p,{type:"line",seriesId:n},i),g={id:n,classes:s,color:o,isFaded:_,isHighlighted:a},v=we(g),f=(e=r==null?void 0:r.line)!=null?e:Lt,m=Tt({elementType:f,externalSlotProps:l==null?void 0:l.line,additionalProps:E({},c,u({type:"line",seriesId:n}),{className:v.root}),ownerState:g});return x.jsx(f,E({},m))}const Ie=["slots","slotProps"];function Ne(t){const{slots:e,slotProps:n}=t,s=O(t,Ie),o=j.useContext(B).line,i=j.useContext(V);if(o===void 0)return null;const{series:r,stackingGroups:l}=o,{xAxis:c,yAxis:u,xAxisIds:p,yAxisIds:a}=i,_=p[0],g=a[0];return x.jsx("g",E({},s,{children:l.flatMap(({ids:v})=>v.flatMap(f=>{var m;const{xAxisKey:T=_,yAxisKey:P=g,stackedData:M,data:k,connectNulls:A}=r[f],C=J(c[T].scale),$=u[P].scale,w=c[T].data,S=St().x(d=>C(d.x)).defined((d,y)=>A||k[y]!=null).y(d=>$(d.y[1])),R=$t(r[f].curve),I=(m=w==null?void 0:w.map((d,y)=>({x:d,y:M[y]})))!=null?m:[],L=A?I.filter((d,y)=>k[y]!=null):I;return x.jsx(Re,{id:f,d:S.curve(R)(L)||void 0,color:r[f].color,highlightScope:r[f].highlightScope,slots:e,slotProps:n},f)}))}))}const De=["x","y","id","classes","color","shape","dataIndex","highlightScope"];function He(t){return K("MuiMarkElement",t)}X("MuiMarkElement",["root","highlighted","faded"]);const $e=t=>{const{classes:e,id:n,isFaded:s,isHighlighted:o}=t,i={root:["root",`series-${n}`,o&&"highlighted",s&&"faded"]};return Y(i,He,e)},qt=W("path",{name:"MuiMarkElement",slot:"Root",overridesResolver:(t,e)=>e.root})(({ownerState:t,theme:e})=>({transform:`translate(${t.x}px, ${t.y}px)`,transformOrigin:`${t.x}px ${t.y}px`,fill:(e.vars||e).palette.background.paper,stroke:t.color,strokeWidth:2}));qt.propTypes={as:h.elementType,ownerState:h.shape({classes:h.object,color:h.string.isRequired,id:h.string.isRequired,isFaded:h.bool.isRequired,isHighlighted:h.bool.isRequired,x:h.number.isRequired,y:h.number.isRequired}).isRequired,sx:h.oneOfType([h.arrayOf(h.oneOfType([h.func,h.object,h.bool])),h.func,h.object])};function Le(t){var e;const{x:n,y:s,id:o,classes:i,color:r,shape:l,dataIndex:c,highlightScope:u}=t,p=O(t,De),a=ot(u),{item:_,axis:g}=j.useContext(z),v=((e=g.x)==null?void 0:e.index)===c||rt(_,{type:"line",seriesId:o},u),f=!v&&lt(_,{type:"line",seriesId:o},u),m={id:o,classes:i,isHighlighted:v,isFaded:f,color:r,x:n,y:s},T=$e(m);return x.jsx(qt,E({},p,{ownerState:m,className:T.root,d:pe(de[Xt(l)])()},a({type:"line",seriesId:o,dataIndex:c})))}const qe=["slots","slotProps"];function Oe(t){var e;const{slots:n,slotProps:s}=t,o=O(t,qe),i=j.useContext(B).line,r=j.useContext(V),l=(e=n==null?void 0:n.mark)!=null?e:Le;if(i===void 0)return null;const{series:c,stackingGroups:u}=i,{xAxis:p,yAxis:a,xAxisIds:_,yAxisIds:g}=r,v=_[0],f=g[0];return x.jsx("g",E({},o,{children:u.flatMap(({ids:m})=>m.flatMap(T=>{const{xAxisKey:P=v,yAxisKey:M=f,stackedData:k,data:A,showMark:C=!0}=c[T];if(C===!1)return null;const $=J(p[P].scale),w=a[M].scale,S=p[P].data,R=p[P].scale.range(),I=w.range(),L=({x:d,y})=>!(d<Math.min(...R)||d>Math.max(...R)||y<Math.min(...I)||y>Math.max(...I));if(S===void 0)throw new Error(`MUI-X-Charts: ${P===at?"The first `xAxis`":`The x-axis with id "${P}"`} should have data property to be able to display a line plot`);return S==null?void 0:S.map((d,y)=>{const q=A[y]==null?null:k[y][1];return{x:$(d),y:q===null?null:w(q),position:d,value:q,index:y}}).filter(({x:d,y,index:q,position:Ot,value:ht})=>ht===null||y===null||!L({x:d,y})?!1:C===!0?!0:C({x:d,y,index:q,position:Ot,value:ht})).map(({x:d,y,index:q})=>x.jsx(l,E({id:T,dataIndex:q,shape:"circle",color:c[T].color,x:d,y,highlightScope:c[T].highlightScope},s==null?void 0:s.mark),`${T}-${q}`))}))}))}function Fe(t){const{id:e,offset:n}=t,{left:s,top:o,width:i,height:r}=j.useContext(Wt),l=E({top:0,right:0,bottom:0,left:0},n);return x.jsx("clipPath",{id:e,children:x.jsx("rect",{x:s-l.left,y:o-l.top,width:i+l.left+l.right,height:r+l.top+l.bottom})})}const Ue=["x","y","id","classes","color"];function Xe(t){return K("MuiHighlightElement",t)}X("MuiHighlightElement",["root"]);const We=t=>{const{classes:e,id:n}=t,s={root:["root",`series-${n}`]};return Y(s,Xe,e)},Ye=W("circle",{name:"MuiHighlightElement",slot:"Root",overridesResolver:(t,e)=>e.root})(({ownerState:t})=>({transform:`translate(${t.x}px, ${t.y}px)`,transformOrigin:`${t.x}px ${t.y}px`,fill:t.color}));function Ke(t){const{x:e,y:n,id:s,classes:o,color:i}=t,r=O(t,Ue),l={id:s,classes:o,color:i,x:e,y:n},c=We(l);return x.jsx(Ye,E({},r,{ownerState:l,className:c.root,cx:0,cy:0,r:r.r===void 0?5:r.r}))}const Ge=["slots","slotProps"];function ze(t){var e,n;const{slots:s,slotProps:o}=t,i=O(t,Ge),r=j.useContext(B).line,l=j.useContext(V),{axis:c}=j.useContext(z),u=(e=c.x)==null?void 0:e.index;if(u===void 0||r===void 0)return null;const{series:p,stackingGroups:a}=r,{xAxis:_,yAxis:g,xAxisIds:v,yAxisIds:f}=l,m=v[0],T=f[0],P=(n=s==null?void 0:s.lineHighlight)!=null?n:Ke;return x.jsx("g",E({},i,{children:a.flatMap(({ids:M})=>M.flatMap(k=>{const{xAxisKey:A=m,yAxisKey:C=T,stackedData:$,data:w,disableHighlight:S}=p[k];if(S||w[u]==null)return null;const R=J(_[A].scale),I=g[C].scale,L=_[A].data;if(L===void 0)throw new Error(`MUI-X-Charts: ${A===at?"The first `xAxis`":`The x-axis with id "${A}"`} should have data property to be able to display a line plot.`);const d=R(L[u]),y=I($[u][1]);return x.jsx(P,E({id:k,color:p[k].color,x:d,y},o==null?void 0:o.lineHighlight),`${k}`)}))}))}const Be=j.forwardRef(function(e,n){const{xAxis:s,yAxis:o,series:i,width:r,height:l,margin:c,colors:u,dataset:p,sx:a,tooltip:_,axisHighlight:g={x:"line"},disableLineItemHighlight:v,legend:f,topAxis:m,leftAxis:T,rightAxis:P,bottomAxis:M,children:k,slots:A,slotProps:C}=e,w=`${Vt()}-clip-path`;return x.jsxs(Yt,{ref:n,series:i.map(S=>E({disableHighlight:!!v,type:"line"},S)),width:r,height:l,margin:c,xAxis:s??[{id:at,scaleType:"point",data:Array.from({length:Math.max(...i.map(S=>{var R,I;return((R=(I=S.data)!=null?I:p)!=null?R:[]).length}))},(S,R)=>R)}],yAxis:o,colors:u,dataset:p,sx:a,disableAxisListener:(_==null?void 0:_.trigger)!=="axis"&&(g==null?void 0:g.x)==="none"&&(g==null?void 0:g.y)==="none",children:[x.jsxs("g",{clipPath:`url(#${w})`,children:[x.jsx(Se,{slots:A,slotProps:C}),x.jsx(Ne,{slots:A,slotProps:C})]}),x.jsx(Kt,{topAxis:m,leftAxis:T,rightAxis:P,bottomAxis:M,slots:A,slotProps:C}),x.jsx(Gt,E({},g)),x.jsx(Oe,{slots:A,slotProps:C}),x.jsx(ze,{slots:A,slotProps:C}),x.jsx(zt,E({},f,{slots:A,slotProps:C})),x.jsx(Bt,E({},_,{slots:A,slotProps:C})),x.jsx(Fe,{id:w}),k]})}),nn=()=>{const{expencesArray:t,incomesArray:e,datesArray:n}=Ut(i=>i.accountData),s=t.map(i=>i.amount),o=n.map(i=>new Date(i*1e3).toLocaleTimeString([],{hour:"numeric",minute:"numeric"}));return x.jsxs("div",{children:[x.jsx("h1",{children:"Statistics"}),x.jsx("div",{className:"text-red-900",children:x.jsx(Be,{color:"inherit",height:400,margin:{left:60,right:40,top:70,bottom:40},sx:{".MuiLineElement-root":{strokeWidth:3},".MuiMarkElement-root":{scale:"0.6",fill:"#fff",strokeWidth:5,zIndex:100}},series:[{data:s,label:"Expenses",color:"#e15759"},{data:e,label:"Income",color:"#59a14f"}],xAxis:[{scaleType:"point",data:o}]})})]})};export{nn as default};
