(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[29],{80638:function(){},99219:function(S,P,n){"use strict";n.d(P,{e:function(){return f}});var u=n(2824),l=n(20310),d=n(67294),o=n(17857),_=n(47416),b=n(85893),t,A=_.ZP.div(t||(t=(0,l.Z)([`
  padding: `,`;
`])),function(y){return y.padding||"0"}),f=function(g){var M=g.value,i=M===void 0?"":M,U=g.decimals,m=g.padding,p=(0,d.useState)(0),c=(0,u.Z)(p,2),B=c[0],R=c[1],a=(0,d.useState)(0),e=(0,u.Z)(a,2),r=e[0],s=e[1];return(0,d.useEffect)(function(){typeof i=="number"&&(R(r),s(i))},[i]),(0,b.jsx)(A,{padding:m,children:typeof i=="string"?i:(0,b.jsx)(o.ZP,{start:B,end:r,decimals:U!==void 0?U:0,duration:1,separator:","})})}},7289:function(S,P,n){"use strict";n.r(P);var u=n(13062),l=n(71230),d=n(89032),o=n(15746),_=n(20310),b=n(47416),t=n(67294),A=n(99219),f=n(85893),y,g,M,i=b.ZP.div(y||(y=(0,_.Z)([`
  //padding-top: 40px;

  .top {
    padding: 50px 20px;
    left: 0;
    width: 100%;
    background-size: auto;
    background-repeat: no-repeat;
    background-position: top;
    background-image: url("https://yooshi.io/img/bg-top.ab4f7003.svg");
    box-sizing: border-box;

    .title {
      font-size: 54px;
      line-height: 66px;
      color: rgb(124, 215, 112);
      white-space: nowrap;
      font-weight: 700;
      margin-bottom: 0;
    }

    .subTitle {
      color: rgb(47, 46, 65);
      font-size: 17px;
      margin-top: 25px;
      font-weight: 400;
      line-height: 2;
    }

    .buttons {
      button {
        margin-right: 20px;
      }
    }

    .right {
      img {
        display: block;
        width: 290px;
      }
    }
  }

  @media (max-width: 576px) {
    .top .title {
      font-size: 32px;
    }
  }
`]))),U=b.ZP.div(g||(g=(0,_.Z)([`
  h3 {
    font-size: 38px;
    font-weight: 700;
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    color: #7cd770;
  }

  p {
    font-size: 16px;
    margin-bottom: 0;
    margin-top: -6px;
    color: #2f2e41;
    opacity: .8;
  }
`]))),m=function(){return _jsxs(U,{children:[_jsx("h3",{children:_jsx(ValueWidget,{value:123.2})}),_jsx("p",{children:"Total Turnover"})]})},p=b.ZP.div(M||(M=(0,_.Z)([`
  border-radius: 15px;
  padding: 30px 15px;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #000c17;
  text-align: center;
`]))),c=function(){return _jsx(p,{children:_jsxs(_Row,{children:[_jsx(_Col,{xs:24,sm:12,md:6,lg:6,children:_jsx(m,{})}),_jsx(_Col,{xs:24,sm:12,md:6,lg:6,children:_jsx(m,{})}),_jsx(_Col,{xs:24,sm:12,md:6,lg:6,children:_jsx(m,{})}),_jsx(_Col,{xs:24,sm:12,md:6,lg:6,children:_jsx(m,{})})]})})};P.default=function(){return(0,f.jsx)(i,{children:(0,f.jsx)(l.Z,{className:"top",children:(0,f.jsxs)(o.Z,{md:24,children:[(0,f.jsx)("h3",{className:"title",children:"Welcome To CCP NFT"}),(0,f.jsx)("h3",{className:"subTitle",children:'CCPDOG is a "DeFi + NFT" dog racing game created by CCPNFT in conjunction with CCP. Combining the game with "NFT + DeFi" through blockchain technology is to create a CCP NFT DOG game ecosystem. Everyone can enjoy the CCP NFT DOG game through interesting gameplay, and earn token rewards by contributing to the ecosystem. Players can breed, compete, collect and trade their DOG.'})]})})})}},15746:function(S,P,n){"use strict";var u=n(21584);P.Z=u.Z},89032:function(S,P,n){"use strict";var u=n(65056),l=n.n(u),d=n(6999)},99134:function(S,P,n){"use strict";var u=n(67294),l=(0,u.createContext)({});P.Z=l},21584:function(S,P,n){"use strict";var u=n(96156),l=n(22122),d=n(90484),o=n(67294),_=n(94184),b=n.n(_),t=n(99134),A=n(86032),f=function(i,U){var m={};for(var p in i)Object.prototype.hasOwnProperty.call(i,p)&&U.indexOf(p)<0&&(m[p]=i[p]);if(i!=null&&typeof Object.getOwnPropertySymbols=="function")for(var c=0,p=Object.getOwnPropertySymbols(i);c<p.length;c++)U.indexOf(p[c])<0&&Object.prototype.propertyIsEnumerable.call(i,p[c])&&(m[p[c]]=i[p[c]]);return m};function y(i){return typeof i=="number"?"".concat(i," ").concat(i," auto"):/^\d+(\.\d+)?(px|em|rem|%)$/.test(i)?"0 0 ".concat(i):i}var g=["xs","sm","md","lg","xl","xxl"],M=o.forwardRef(function(i,U){var m,p=o.useContext(A.E_),c=p.getPrefixCls,B=p.direction,R=o.useContext(t.Z),a=R.gutter,e=R.wrap,r=R.supportFlexGap,s=i.prefixCls,h=i.span,D=i.order,L=i.offset,j=i.push,V=i.pull,Z=i.className,T=i.children,I=i.flex,G=i.style,F=f(i,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),O=c("col",s),w={};g.forEach(function(v){var x,E={},W=i[v];typeof W=="number"?E.span=W:(0,d.Z)(W)==="object"&&(E=W||{}),delete F[v],w=(0,l.Z)((0,l.Z)({},w),(x={},(0,u.Z)(x,"".concat(O,"-").concat(v,"-").concat(E.span),E.span!==void 0),(0,u.Z)(x,"".concat(O,"-").concat(v,"-order-").concat(E.order),E.order||E.order===0),(0,u.Z)(x,"".concat(O,"-").concat(v,"-offset-").concat(E.offset),E.offset||E.offset===0),(0,u.Z)(x,"".concat(O,"-").concat(v,"-push-").concat(E.push),E.push||E.push===0),(0,u.Z)(x,"".concat(O,"-").concat(v,"-pull-").concat(E.pull),E.pull||E.pull===0),(0,u.Z)(x,"".concat(O,"-rtl"),B==="rtl"),x))});var z=b()(O,(m={},(0,u.Z)(m,"".concat(O,"-").concat(h),h!==void 0),(0,u.Z)(m,"".concat(O,"-order-").concat(D),D),(0,u.Z)(m,"".concat(O,"-offset-").concat(L),L),(0,u.Z)(m,"".concat(O,"-push-").concat(j),j),(0,u.Z)(m,"".concat(O,"-pull-").concat(V),V),m),Z,w),C={};if(a&&a[0]>0){var $=a[0]/2;C.paddingLeft=$,C.paddingRight=$}if(a&&a[1]>0&&!r){var K=a[1]/2;C.paddingTop=K,C.paddingBottom=K}return I&&(C.flex=y(I),I==="auto"&&e===!1&&!C.minWidth&&(C.minWidth=0)),o.createElement("div",(0,l.Z)({},F,{style:(0,l.Z)((0,l.Z)({},C),G),className:z,ref:U}),T)});M.displayName="Col",P.Z=M},92820:function(S,P,n){"use strict";var u=n(22122),l=n(96156),d=n(90484),o=n(28481),_=n(67294),b=n(94184),t=n.n(b),A=n(86032),f=n(99134),y=n(93355),g=n(24308),M=n(98082),i=function(c,B){var R={};for(var a in c)Object.prototype.hasOwnProperty.call(c,a)&&B.indexOf(a)<0&&(R[a]=c[a]);if(c!=null&&typeof Object.getOwnPropertySymbols=="function")for(var e=0,a=Object.getOwnPropertySymbols(c);e<a.length;e++)B.indexOf(a[e])<0&&Object.prototype.propertyIsEnumerable.call(c,a[e])&&(R[a[e]]=c[a[e]]);return R},U=(0,y.b)("top","middle","bottom","stretch"),m=(0,y.b)("start","end","center","space-around","space-between"),p=_.forwardRef(function(c,B){var R,a=c.prefixCls,e=c.justify,r=c.align,s=c.className,h=c.style,D=c.children,L=c.gutter,j=L===void 0?0:L,V=c.wrap,Z=i(c,["prefixCls","justify","align","className","style","children","gutter","wrap"]),T=_.useContext(A.E_),I=T.getPrefixCls,G=T.direction,F=_.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),O=(0,o.Z)(F,2),w=O[0],z=O[1],C=(0,M.Z)(),$=_.useRef(j);_.useEffect(function(){var tt=g.ZP.subscribe(function(Q){var J=$.current||0;(!Array.isArray(J)&&(0,d.Z)(J)==="object"||Array.isArray(J)&&((0,d.Z)(J[0])==="object"||(0,d.Z)(J[1])==="object"))&&z(Q)});return function(){return g.ZP.unsubscribe(tt)}},[]);var K=function(){var Q=[0,0],J=Array.isArray(j)?j:[j,0];return J.forEach(function(Y,et){if((0,d.Z)(Y)==="object")for(var k=0;k<g.c4.length;k++){var q=g.c4[k];if(w[q]&&Y[q]!==void 0){Q[et]=Y[q];break}}else Q[et]=Y||0}),Q},v=I("row",a),x=K(),E=t()(v,(R={},(0,l.Z)(R,"".concat(v,"-no-wrap"),V===!1),(0,l.Z)(R,"".concat(v,"-").concat(e),e),(0,l.Z)(R,"".concat(v,"-").concat(r),r),(0,l.Z)(R,"".concat(v,"-rtl"),G==="rtl"),R),s),W={},N=x[0]>0?x[0]/-2:void 0,H=x[1]>0?x[1]/-2:void 0;if(N&&(W.marginLeft=N,W.marginRight=N),C){var X=(0,o.Z)(x,2);W.rowGap=X[1]}else H&&(W.marginTop=H,W.marginBottom=H);var nt=_.useMemo(function(){return{gutter:x,wrap:V,supportFlexGap:C}},[x,V,C]);return _.createElement(f.Z.Provider,{value:nt},_.createElement("div",(0,u.Z)({},Z,{className:E,style:(0,u.Z)((0,u.Z)({},W),h),ref:B}),D))});p.displayName="Row",P.Z=p},6999:function(S,P,n){"use strict";var u=n(65056),l=n.n(u),d=n(80638),o=n.n(d)},71230:function(S,P,n){"use strict";var u=n(92820);P.Z=u.Z},13062:function(S,P,n){"use strict";var u=n(65056),l=n.n(u),d=n(6999)},8273:function(S,P,n){"use strict";n.r(P),n.d(P,{CountUp:function(){return l}});var u=function(){return(u=Object.assign||function(d){for(var o,_=1,b=arguments.length;_<b;_++)for(var t in o=arguments[_])Object.prototype.hasOwnProperty.call(o,t)&&(d[t]=o[t]);return d}).apply(this,arguments)},l=function(){function d(o,_,b){var t=this;this.target=o,this.endVal=_,this.options=b,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(A){t.startTime||(t.startTime=A);var f=A-t.startTime;t.remaining=t.duration-f,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(f,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(f,t.startVal,t.endVal-t.startVal,t.duration):t.countDown?t.frameVal=t.startVal-(t.startVal-t.endVal)*(f/t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(f/t.duration),t.countDown?t.frameVal=t.frameVal<t.endVal?t.endVal:t.frameVal:t.frameVal=t.frameVal>t.endVal?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),f<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.callback&&t.callback()},this.formatNumber=function(A){var f,y,g,M,i=A<0?"-":"";f=Math.abs(A).toFixed(t.options.decimalPlaces);var U=(f+="").split(".");if(y=U[0],g=U.length>1?t.options.decimal+U[1]:"",t.options.useGrouping){M="";for(var m=0,p=y.length;m<p;++m)m!==0&&m%3==0&&(M=t.options.separator+M),M=y[p-m-1]+M;y=M}return t.options.numerals&&t.options.numerals.length&&(y=y.replace(/[0-9]/g,function(c){return t.options.numerals[+c]}),g=g.replace(/[0-9]/g,function(c){return t.options.numerals[+c]})),i+t.options.prefix+y+g+t.options.suffix},this.easeOutExpo=function(A,f,y,g){return y*(1-Math.pow(2,-10*A/g))*1024/1023+f},this.options=u(u({},this.defaults),b),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(_),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof o=="string"?document.getElementById(o):o,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return d.prototype.determineDirectionAndSmartEasing=function(){var o=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>o;var _=o-this.startVal;if(Math.abs(_)>this.options.smartEasingThreshold){this.finalEndVal=o;var b=this.countDown?1:-1;this.endVal=o+b*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=o,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},d.prototype.start=function(o){this.error||(this.callback=o,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},d.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},d.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},d.prototype.update=function(o){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(o),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},d.prototype.printValue=function(o){var _=this.formattingFn(o);this.el.tagName==="INPUT"?this.el.value=_:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=_:this.el.innerHTML=_},d.prototype.ensureNumber=function(o){return typeof o=="number"&&!isNaN(o)},d.prototype.validateValue=function(o){var _=Number(o);return this.ensureNumber(_)?_:(this.error="[CountUp] invalid start or end value: "+o,null)},d.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},d}()},17857:function(S,P,n){"use strict";var u;u={value:!0};var l=n(67294),d=n(8273);function o(a){return a&&typeof a=="object"&&"default"in a?a:{default:a}}var _=o(l);function b(a,e){var r=Object.keys(a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(a);e&&(s=s.filter(function(h){return Object.getOwnPropertyDescriptor(a,h).enumerable})),r.push.apply(r,s)}return r}function t(a){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?b(Object(r),!0).forEach(function(s){A(a,s,r[s])}):Object.getOwnPropertyDescriptors?Object.defineProperties(a,Object.getOwnPropertyDescriptors(r)):b(Object(r)).forEach(function(s){Object.defineProperty(a,s,Object.getOwnPropertyDescriptor(r,s))})}return a}function A(a,e,r){return e in a?Object.defineProperty(a,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):a[e]=r,a}function f(){return f=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var s in r)Object.prototype.hasOwnProperty.call(r,s)&&(a[s]=r[s])}return a},f.apply(this,arguments)}function y(a,e){if(a==null)return{};var r={},s=Object.keys(a),h,D;for(D=0;D<s.length;D++)h=s[D],!(e.indexOf(h)>=0)&&(r[h]=a[h]);return r}function g(a,e){if(a==null)return{};var r=y(a,e),s,h;if(Object.getOwnPropertySymbols){var D=Object.getOwnPropertySymbols(a);for(h=0;h<D.length;h++)s=D[h],!(e.indexOf(s)>=0)&&(!Object.prototype.propertyIsEnumerable.call(a,s)||(r[s]=a[s]))}return r}var M=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?l.useLayoutEffect:l.useEffect;function i(a){var e=l.useRef(a);return M(function(){e.current=a}),l.useCallback(function(){for(var r=arguments.length,s=new Array(r),h=0;h<r;h++)s[h]=arguments[h];return e.current.apply(void 0,s)},[])}var U=function(e,r){var s=r.decimal,h=r.decimals,D=r.duration,L=r.easingFn,j=r.end,V=r.formattingFn,Z=r.numerals,T=r.prefix,I=r.separator,G=r.start,F=r.suffix,O=r.useEasing;return new d.CountUp(e,j,{startVal:G,duration:D,decimal:s,decimalPlaces:h,easingFn:L,formattingFn:V,numerals:Z,separator:I,prefix:T,suffix:F,useEasing:O,useGrouping:!!I})},m=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],p={decimal:".",delay:null,prefix:"",suffix:"",start:0,startOnMount:!0,enableReinitialize:!0},c=function(e){var r=l.useMemo(function(){return t(t({},p),e)},[e]),s=r.ref,h=r.startOnMount,D=r.enableReinitialize,L=r.delay,j=r.onEnd,V=r.onStart,Z=r.onPauseResume,T=r.onReset,I=r.onUpdate,G=g(r,m),F=l.useRef(),O=l.useRef(),w=l.useRef(!1),z=i(function(){return U(typeof s=="string"?s:s.current,G)}),C=i(function(N){var H=F.current;if(H&&!N)return H;var X=z();return F.current=X,X}),$=i(function(){var N=function(){return C(!0).start(function(){j==null||j({pauseResume:K,reset:v,start:E,update:x})})};L&&L>0?O.current=setTimeout(N,L*1e3):N(),V==null||V({pauseResume:K,reset:v,update:x})}),K=i(function(){C().pauseResume(),Z==null||Z({reset:v,start:E,update:x})}),v=i(function(){O.current&&clearTimeout(O.current),C().reset(),T==null||T({pauseResume:K,start:E,update:x})}),x=i(function(N){C().update(N),I==null||I({pauseResume:K,reset:v,start:E})}),E=i(function(){v(),$()}),W=i(function(N){h&&(N&&v(),$())});return l.useEffect(function(){w.current?D&&W(!0):(w.current=!0,W())},[D,w,W,L,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),l.useEffect(function(){return function(){v()}},[v]),{start:E,pauseResume:K,reset:v,update:x,getCountUp:C}},B=["className","redraw","containerProps","children","style"],R=function(e){var r=e.className,s=e.redraw,h=e.containerProps,D=e.children,L=e.style,j=g(e,B),V=_.default.useRef(null),Z=_.default.useRef(!1),T=c(t(t({},j),{},{ref:V,startOnMount:typeof D!="function"||e.delay===0,enableReinitialize:!1})),I=T.start,G=T.reset,F=T.update,O=T.pauseResume,w=T.getCountUp,z=i(function(){I()}),C=i(function(v){e.preserveValue||G(),F(v)}),$=i(function(){if(typeof e.children=="function"&&!(V.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}w()});l.useEffect(function(){$()},[$]),l.useEffect(function(){Z.current&&C(e.end)},[e.end,C]);var K=s&&e;return l.useEffect(function(){s&&Z.current&&z()},[z,s,K]),l.useEffect(function(){!s&&Z.current&&z()},[z,s,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),l.useEffect(function(){Z.current=!0},[]),typeof D=="function"?D({countUpRef:V,start:I,reset:G,update:F,pauseResume:O,getCountUp:w}):_.default.createElement("span",f({className:r,ref:V,style:L},h),e.start?w().formattingFn(e.start):"")};P.ZP=R,u=c}}]);
