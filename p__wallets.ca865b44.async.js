(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[154],{99219:function(B,D,a){"use strict";a.d(D,{e:function(){return o}});var b=a(2824),c=a(20310),_=a(67294),s=a(17857),d=a(47416),E=a(85893),t,m=d.ZP.div(t||(t=(0,c.Z)([`
  padding: `,`;
`])),function(h){return h.padding||"0"}),o=function(p){var v=p.value,f=v===void 0?"":v,P=p.decimals,l=p.padding,C=(0,_.useState)(0),A=(0,b.Z)(C,2),M=A[0],O=A[1],i=(0,_.useState)(0),e=(0,b.Z)(i,2),n=e[0],r=e[1];return(0,_.useEffect)(function(){typeof f=="number"&&(O(n),r(f))},[f]),(0,E.jsx)(m,{padding:l,children:typeof f=="string"?f:(0,E.jsx)(s.ZP,{start:M,end:n,decimals:P!==void 0?P:0,duration:1,separator:","})})}},64731:function(B,D,a){"use strict";a.d(D,{b:function(){return C}});var b=a(58024),c=a(39144),_=a(20310),s=a(67294),d=a(47416),E=a(16924),t=a(46677),m=a.n(t),o=a(85893),h,p,v,f=d.ZP.div(h||(h=(0,_.Z)([`
  .images {
    padding: 20px;

    img {
      display: block;
      width: 100%;
    }
  }

  background: linear-gradient(rgb(237, 237, 255) 0%, rgb(215, 215, 255) 100%);
  border-radius: 0 0 20px 20px;
  position: relative;

  .bottom {
    border-radius: 0 0 20px 20px;
    padding: 5px;

    h4 {
      color: rgb(47, 46, 65);
      font-size: 14px;
      font-weight: 700;
      text-align: center;
      margin-bottom: 0;
    }
  }

  .price {
    position: absolute;
    right: 10px;
    top: 10px;
    background: linear-gradient(270deg, #89d143, #75db8d);
    width: 36px;
    height: 36px;
    border-radius: 32px;
    box-shadow: 0 1px 2px 0 rgb(0 0 0 / 20%);
    color: #fff;
    font-weight: 600;
    font-size: 12px;
    text-align: center;
    line-height: 36px;
  }
`]))),P=d.ZP.div(p||(p=(0,_.Z)([`
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    color: #505f79;
    font-size: 14px;
  }

  p {
    color: #2f2e41;
    font: 16px/1.4 Noto Sans, sans-serif;
    margin-bottom: 0;
    font-weight: 700;
    align-items: center;
    display: flex;

    .icon {
      display: block;
      width: 18px;
      height: 18px;
      margin-right: 6px;
    }
  }
`]))),l=(0,d.ZP)(c.Z)(v||(v=(0,_.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;

  }
`]))),C=function(M){var O=M.props,i=M.path,e=i===void 0?"market":i;return(0,o.jsx)(E.Link,{to:{pathname:"".concat(e,"/").concat(O.id),search:"id=".concat(O.id,"&name=").concat(O.dog_name,"&path=").concat(e)},children:(0,o.jsx)(l,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,o.jsxs)(f,{children:[(0,o.jsx)("div",{className:"images",children:(0,o.jsx)("img",{alt:"example",src:O.img_url})}),(0,o.jsx)("div",{className:"bottom",children:(0,o.jsx)("h4",{children:O.dog_name})}),(0,o.jsx)("div",{className:"price",children:"600x"})]}),children:(0,o.jsxs)(P,{children:[(0,o.jsx)("span",{children:"\u51FA\u552E\u50F9\u683C"}),(0,o.jsxs)("p",{children:[(0,o.jsx)("img",{src:m(),alt:"",className:"icon"}),parseInt(O.market_price).toFixed(2)]})]})})})}},30014:function(B,D,a){"use strict";a.r(D);var b=a(13062),c=a(71230),_=a(89032),s=a(15746),d=a(2824),E=a(20310),t=a(47416),m=a(64731),o=a(67294),h=a(99219),p=a(67329),v=a(93874),f=a(53776),P=a(83832),l=a(85893),C,A=t.ZP.div(C||(C=(0,E.Z)([`

  padding: 20px;
  box-sizing: border-box;

  .balances {
    > div {
      margin-bottom: 30px;


      > div {
        padding: 10px 0;
        box-sizing: border-box;
        display: flex;
        align-items: end;
      }
      div {

        font-size: 18px;


        img {
          display: block;
          width: 20px;
          height: 20px;
          margin-right: 10px;
        }
      }
    }
  }
`])));D.default=function(){var M,O,i=(0,o.useState)("All NFT"),e=(0,d.Z)(i,2),n=e[0],r=e[1],g=(0,f.t)("@@initialState"),u=g.initialState,y=(0,p.f)(v.w.nftPacket),R=y.data,V=y.request,U=y.status;return(0,o.useEffect)(function(){V("")},[]),(0,l.jsxs)(A,{children:[(0,l.jsxs)(c.Z,{className:"balances",gutter:48,children:[(0,l.jsx)(s.Z,{md:8,children:(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:"https://coin.top/production/upload/logo/T9ywgTGYuoYBFagC3PzdSVNKHxZSPB6Kmz.png?t=1619502390076",alt:""}),(0,l.jsx)(h.e,{value:u==null||(M=u.currentUser)===null||M===void 0?void 0:M.ccp_coin})]})}),(0,l.jsx)(s.Z,{md:8,children:(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:"https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Tether-USDT-icon.png",alt:""}),(0,l.jsx)(h.e,{value:u==null||(O=u.currentUser)===null||O===void 0?void 0:O.usdt_coin})]})}),(0,l.jsx)(s.Z,{md:8,children:(0,l.jsxs)("div",{children:[(0,l.jsx)("img",{src:"https://market.winnfthorse.io/img/apenft.9fd30769.png",alt:""}),(0,l.jsx)(h.e,{value:0})]})})]}),(0,l.jsx)("div",{style:{padding:"20px"},children:U==p.o.wait?(0,l.jsx)(P.Z,{}):(0,l.jsx)(c.Z,{gutter:48,children:R==null?void 0:R.goods.data.map(function(x){return(0,l.jsx)(s.Z,{span:6,xs:24,sm:12,md:12,lg:6,children:(0,l.jsx)(m.b,{props:x,path:"wallets"})},x.id)})})})]})}},67329:function(B,D,a){"use strict";a.d(D,{f:function(){return E},o:function(){return t}});var b=a(3182),c=a(2824),_=a(94043),s=a.n(_),d=a(67294),E=function(o){var h=(0,d.useState)(t.start),p=(0,c.Z)(h,2),v=p[0],f=p[1],P=(0,d.useState)(),l=(0,c.Z)(P,2),C=l[0],A=l[1],M=(0,d.useCallback)(function(){var O=(0,b.Z)(s().mark(function i(e){var n,r;return s().wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return u.prev=0,f(t.wait),u.next=4,o(e);case 4:n=u.sent,A(n),f(t.success),u.next=14;break;case 9:u.prev=9,u.t0=u.catch(0),r={err:u.t0},A(r),f(t.failure);case 14:case"end":return u.stop()}},i,null,[[0,9]])}));return function(i){return O.apply(this,arguments)}}(),[f,A]);return{status:v,request:M,data:C}},t;(function(m){m[m.start=0]="start",m[m.wait=1]="wait",m[m.success=2]="success",m[m.failure=3]="failure"})(t||(t={}))},46677:function(B){B.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},8273:function(B,D,a){"use strict";a.r(D),a.d(D,{CountUp:function(){return c}});var b=function(){return(b=Object.assign||function(_){for(var s,d=1,E=arguments.length;d<E;d++)for(var t in s=arguments[d])Object.prototype.hasOwnProperty.call(s,t)&&(_[t]=s[t]);return _}).apply(this,arguments)},c=function(){function _(s,d,E){var t=this;this.target=s,this.endVal=d,this.options=E,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(m){t.startTime||(t.startTime=m);var o=m-t.startTime;t.remaining=t.duration-o,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(o,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(o,t.startVal,t.endVal-t.startVal,t.duration):t.countDown?t.frameVal=t.startVal-(t.startVal-t.endVal)*(o/t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(o/t.duration),t.countDown?t.frameVal=t.frameVal<t.endVal?t.endVal:t.frameVal:t.frameVal=t.frameVal>t.endVal?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),o<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.callback&&t.callback()},this.formatNumber=function(m){var o,h,p,v,f=m<0?"-":"";o=Math.abs(m).toFixed(t.options.decimalPlaces);var P=(o+="").split(".");if(h=P[0],p=P.length>1?t.options.decimal+P[1]:"",t.options.useGrouping){v="";for(var l=0,C=h.length;l<C;++l)l!==0&&l%3==0&&(v=t.options.separator+v),v=h[C-l-1]+v;h=v}return t.options.numerals&&t.options.numerals.length&&(h=h.replace(/[0-9]/g,function(A){return t.options.numerals[+A]}),p=p.replace(/[0-9]/g,function(A){return t.options.numerals[+A]})),f+t.options.prefix+h+p+t.options.suffix},this.easeOutExpo=function(m,o,h,p){return h*(1-Math.pow(2,-10*m/p))*1024/1023+o},this.options=b(b({},this.defaults),E),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(d),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof s=="string"?document.getElementById(s):s,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return _.prototype.determineDirectionAndSmartEasing=function(){var s=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>s;var d=s-this.startVal;if(Math.abs(d)>this.options.smartEasingThreshold){this.finalEndVal=s;var E=this.countDown?1:-1;this.endVal=s+E*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=s,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},_.prototype.start=function(s){this.error||(this.callback=s,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},_.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},_.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},_.prototype.update=function(s){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(s),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},_.prototype.printValue=function(s){var d=this.formattingFn(s);this.el.tagName==="INPUT"?this.el.value=d:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=d:this.el.innerHTML=d},_.prototype.ensureNumber=function(s){return typeof s=="number"&&!isNaN(s)},_.prototype.validateValue=function(s){var d=Number(s);return this.ensureNumber(d)?d:(this.error="[CountUp] invalid start or end value: "+s,null)},_.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},_}()},17857:function(B,D,a){"use strict";var b;b={value:!0};var c=a(67294),_=a(8273);function s(i){return i&&typeof i=="object"&&"default"in i?i:{default:i}}var d=s(c);function E(i,e){var n=Object.keys(i);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(i);e&&(r=r.filter(function(g){return Object.getOwnPropertyDescriptor(i,g).enumerable})),n.push.apply(n,r)}return n}function t(i){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?E(Object(n),!0).forEach(function(r){m(i,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(i,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(r){Object.defineProperty(i,r,Object.getOwnPropertyDescriptor(n,r))})}return i}function m(i,e,n){return e in i?Object.defineProperty(i,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):i[e]=n,i}function o(){return o=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(i[r]=n[r])}return i},o.apply(this,arguments)}function h(i,e){if(i==null)return{};var n={},r=Object.keys(i),g,u;for(u=0;u<r.length;u++)g=r[u],!(e.indexOf(g)>=0)&&(n[g]=i[g]);return n}function p(i,e){if(i==null)return{};var n=h(i,e),r,g;if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(i);for(g=0;g<u.length;g++)r=u[g],!(e.indexOf(r)>=0)&&(!Object.prototype.propertyIsEnumerable.call(i,r)||(n[r]=i[r]))}return n}var v=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?c.useLayoutEffect:c.useEffect;function f(i){var e=c.useRef(i);return v(function(){e.current=i}),c.useCallback(function(){for(var n=arguments.length,r=new Array(n),g=0;g<n;g++)r[g]=arguments[g];return e.current.apply(void 0,r)},[])}var P=function(e,n){var r=n.decimal,g=n.decimals,u=n.duration,y=n.easingFn,R=n.end,V=n.formattingFn,U=n.numerals,x=n.prefix,T=n.separator,K=n.start,N=n.suffix,W=n.useEasing;return new _.CountUp(e,R,{startVal:K,duration:u,decimal:r,decimalPlaces:g,easingFn:y,formattingFn:V,numerals:U,separator:T,prefix:x,suffix:N,useEasing:W,useGrouping:!!T})},l=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],C={decimal:".",delay:null,prefix:"",suffix:"",start:0,startOnMount:!0,enableReinitialize:!0},A=function(e){var n=c.useMemo(function(){return t(t({},C),e)},[e]),r=n.ref,g=n.startOnMount,u=n.enableReinitialize,y=n.delay,R=n.onEnd,V=n.onStart,U=n.onPauseResume,x=n.onReset,T=n.onUpdate,K=p(n,l),N=c.useRef(),W=c.useRef(),L=c.useRef(!1),w=f(function(){return P(typeof r=="string"?r:r.current,K)}),j=f(function(F){var Y=N.current;if(Y&&!F)return Y;var k=w();return N.current=k,k}),Z=f(function(){var F=function(){return j(!0).start(function(){R==null||R({pauseResume:S,reset:I,start:z,update:Q})})};y&&y>0?W.current=setTimeout(F,y*1e3):F(),V==null||V({pauseResume:S,reset:I,update:Q})}),S=f(function(){j().pauseResume(),U==null||U({reset:I,start:z,update:Q})}),I=f(function(){W.current&&clearTimeout(W.current),j().reset(),x==null||x({pauseResume:S,start:z,update:Q})}),Q=f(function(F){j().update(F),T==null||T({pauseResume:S,reset:I,start:z})}),z=f(function(){I(),Z()}),G=f(function(F){g&&(F&&I(),Z())});return c.useEffect(function(){L.current?u&&G(!0):(L.current=!0,G())},[u,L,G,y,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),c.useEffect(function(){return function(){I()}},[I]),{start:z,pauseResume:S,reset:I,update:Q,getCountUp:j}},M=["className","redraw","containerProps","children","style"],O=function(e){var n=e.className,r=e.redraw,g=e.containerProps,u=e.children,y=e.style,R=p(e,M),V=d.default.useRef(null),U=d.default.useRef(!1),x=A(t(t({},R),{},{ref:V,startOnMount:typeof u!="function"||e.delay===0,enableReinitialize:!1})),T=x.start,K=x.reset,N=x.update,W=x.pauseResume,L=x.getCountUp,w=f(function(){T()}),j=f(function(I){e.preserveValue||K(),N(I)}),Z=f(function(){if(typeof e.children=="function"&&!(V.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}L()});c.useEffect(function(){Z()},[Z]),c.useEffect(function(){U.current&&j(e.end)},[e.end,j]);var S=r&&e;return c.useEffect(function(){r&&U.current&&w()},[w,r,S]),c.useEffect(function(){!r&&U.current&&w()},[w,r,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),c.useEffect(function(){U.current=!0},[]),typeof u=="function"?u({countUpRef:V,start:T,reset:K,update:N,pauseResume:W,getCountUp:L}):d.default.createElement("span",o({className:n,ref:V,style:y},g),e.start?L().formattingFn(e.start):"")};D.ZP=O,b=A}}]);
