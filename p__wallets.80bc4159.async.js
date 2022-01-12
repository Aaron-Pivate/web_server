(self.webpackChunkant_design_pro=self.webpackChunkant_design_pro||[]).push([[154],{99219:function(w,C,a){"use strict";a.d(C,{e:function(){return u}});var V=a(2824),c=a(20310),m=a(67294),s=a(17857),d=a(47416),E=a(85893),t,g=d.ZP.div(t||(t=(0,c.Z)([`
  padding: `,`;
`])),function(p){return p.padding||"0"}),u=function(v){var _=v.value,f=_===void 0?"":_,P=v.decimals,l=v.padding,D=(0,m.useState)(0),A=(0,V.Z)(D,2),S=A[0],x=A[1],r=(0,m.useState)(0),e=(0,V.Z)(r,2),n=e[0],i=e[1];return(0,m.useEffect)(function(){typeof f=="number"&&(x(n),i(f))},[f]),(0,E.jsx)(g,{padding:l,children:typeof f=="string"?f:(0,E.jsx)(s.ZP,{start:S,end:n,decimals:P!==void 0?P:0,duration:1,separator:","})})}},64731:function(w,C,a){"use strict";a.d(C,{b:function(){return D}});var V=a(58024),c=a(39144),m=a(20310),s=a(67294),d=a(47416),E=a(16924),t=a(46677),g=a.n(t),u=a(85893),p,v,_,f=d.ZP.div(p||(p=(0,m.Z)([`
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
`]))),P=d.ZP.div(v||(v=(0,m.Z)([`
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
`]))),l=(0,d.ZP)(c.Z)(_||(_=(0,m.Z)([`
  overflow: hidden;
  background-color: rgba(215, 215, 255, 0.2) !important;
  margin-bottom: 20px;

  .ant-card-bordered {
    border-radius: 20px;

  }

  .ant-card-body {
    padding: 20px;

  }
`]))),D=function(S){var x=S.props,r=S.path,e=r===void 0?"market":r;return(0,u.jsx)(E.Link,{to:{pathname:"".concat(e,"/").concat(x.id),search:"id=".concat(x.id,"&name=").concat(x.dog_name,"&path=").concat(e)},children:(0,u.jsx)(l,{hoverable:!0,onClick:function(){},style:{borderRadius:"20px",marginBottom:"20px"},cover:(0,u.jsxs)(f,{children:[(0,u.jsx)("div",{className:"images",children:(0,u.jsx)("img",{alt:"example",src:x.img_url})}),(0,u.jsx)("div",{className:"bottom",children:(0,u.jsx)("h4",{children:x.dog_name})}),(0,u.jsx)("div",{className:"price",children:"600x"})]}),children:(0,u.jsxs)(P,{children:[(0,u.jsx)("span",{children:"\u51FA\u552E\u50F9\u683C"}),(0,u.jsxs)("p",{children:[(0,u.jsx)("img",{src:g(),alt:"",className:"icon"}),parseInt(x.market_price).toFixed(2)]})]})})})}},14164:function(w,C,a){"use strict";a.r(C),a.d(C,{default:function(){return h}});var V=a(13062),c=a(71230),m=a(89032),s=a(15746),d=a(2824),E=a(20310),t=a(47416),g=a(64731),u=a(67294),p=a(67329),v=a(93874),_=a(53776),f=a(83832),P=a(99219),l=a(85893),D,A,S=t.ZP.div(D||(D=(0,E.Z)([`
  h3{
    font-size: 38px;
    font-weight: 700;
    color: #fff;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
  }
  p{
    font-size: 16px;
    color: hsla(0,0%,100%,.8);
    margin-bottom: 0;
  }
`]))),x=function(b){var U=b.text,O=b.value;return(0,l.jsxs)(S,{children:[(0,l.jsxs)("h3",{children:[" ",(0,l.jsx)(P.e,{value:O!=null?O:0})]}),(0,l.jsx)("p",{children:U})]})},r=t.ZP.div(A||(A=(0,E.Z)([`
  border-radius: 100px;
  background: linear-gradient(270deg, #89d143, #75db8d);
  padding: 30px 15px;
  box-sizing: border-box;
  margin-top: 30px;
  margin-bottom: 30px;
  color: #fff;
  text-align: center;
`]))),e=function(){return _jsx(r,{children:_jsxs(_Row,{gutter:20,children:[_jsx(_Col,{xs:24,sm:12,children:_jsx(x,{text:"CCP",value:0})}),_jsx(_Col,{xs:24,sm:12,children:_jsx(x,{text:"USDT",value:0})})]})})},n,i=t.ZP.div(n||(n=(0,E.Z)([`

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
`]))),h=function(){var o,b,U=(0,u.useState)("All NFT"),O=(0,d.Z)(U,2),F=O[0],j=O[1],R=(0,_.t)("@@initialState"),y=R.initialState,I=(0,p.f)(v.w.nftPacket),M=I.data,B=I.request,W=I.status;return(0,u.useEffect)(function(){B("")},[]),(0,l.jsxs)(i,{children:[(0,l.jsx)(r,{children:(0,l.jsxs)(c.Z,{gutter:20,children:[(0,l.jsx)(s.Z,{xs:24,sm:12,children:(0,l.jsx)(x,{text:"CCP",value:y==null||(o=y.currentUser)===null||o===void 0?void 0:o.ccp_coin})}),(0,l.jsx)(s.Z,{xs:24,sm:12,children:(0,l.jsx)(x,{text:"USDT",value:y==null||(b=y.currentUser)===null||b===void 0?void 0:b.usdt_coin})})]})}),(0,l.jsx)(c.Z,{className:"balances",gutter:48}),(0,l.jsx)("div",{style:{padding:"20px"},children:W==p.o.wait?(0,l.jsx)(f.Z,{}):(0,l.jsx)(c.Z,{gutter:48,children:M==null?void 0:M.goods.data.map(function(T){return(0,l.jsx)(s.Z,{span:6,xs:24,sm:12,md:12,lg:6,children:(0,l.jsx)(g.b,{props:T,path:"wallets"})},T.id)})})})]})}},67329:function(w,C,a){"use strict";a.d(C,{f:function(){return E},o:function(){return t}});var V=a(3182),c=a(2824),m=a(94043),s=a.n(m),d=a(67294),E=function(u){var p=(0,d.useState)(t.start),v=(0,c.Z)(p,2),_=v[0],f=v[1],P=(0,d.useState)(),l=(0,c.Z)(P,2),D=l[0],A=l[1],S=(0,d.useCallback)(function(){var x=(0,V.Z)(s().mark(function r(e){var n,i;return s().wrap(function(o){for(;;)switch(o.prev=o.next){case 0:return o.prev=0,f(t.wait),o.next=4,u(e);case 4:n=o.sent,A(n),f(t.success),o.next=14;break;case 9:o.prev=9,o.t0=o.catch(0),i={err:o.t0},A(i),f(t.failure);case 14:case"end":return o.stop()}},r,null,[[0,9]])}));return function(r){return x.apply(this,arguments)}}(),[f,A]);return{status:_,request:S,data:D}},t;(function(g){g[g.start=0]="start",g[g.wait=1]="wait",g[g.success=2]="success",g[g.failure=3]="failure"})(t||(t={}))},46677:function(w){w.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAADICAMAAACahl6sAAAB3VBMVEUAAAAAAP///wAAAP8AgP+A/wAAgL8AgP+//0AAceMAM8wAgOYAgO2k/zcAiN2Z/zMc//Gi/y6V9DWf/zUAgOKd9TEJN8ic/zEIg+APNsENNskHg94Ght8GhuEMN8gROcaf+TMLruQQNskFguAa+u+g+jIPNsQONcUOOcYON8QON8gEguCa9zEQN8id9y+b+DCa+DIOOMcDhOGe+TCb+TIGhOAGguEPNccGguIFhOEb9+wFgt+d9zCd+jIQN8UFgt8Fg+ION8UONsQZ9u2d+DIQOMWb+DGd+DAPN8YEhOAON8YGhOGd+TGd+TKc+DIFhOCd+jEFg+Cb+DEFguAFhOKc+DEPN8UFg+APOMYPOMWd+DEFhOEFg+Gc+TAFg+Cd+TIPOMad+TAPOMQVkded+TCd+TIGg+GC000Egt8EhOEFhOAJnOOH20gVndqd+TEFg+APN8Wd+TEPN8Wc+TAFg+Cd+DGc+DAFg+Cc+DCc+DAFhOAEg+AEg+F0wVsNseac+DESctEFg+Cd+DEEg+AFg+BoyW9z2mQEg+Fmrmqc+TEEg+Cc+DEThdWc+TEFg+AFg+AFg+Cc+DGc+TKc+DCc+DEFg+AFhOGc+DEFg+APN8Ua9uxK9qZl94Bt93Sc+DEyV4T2AAAAmHRSTlMAAQECAgIEBAQJCgoODg8PEhYYGBoaHB8hISYnKCoqLS0vLzExMzQ1Njg4OT9BQUVHSU1PUlNWVlhfX2BgYGFoaWpscHByc3V4en6Hh4qLjY2OkpOTk5WWl5ucn6GjpKSlqa6us7S1tbq6vr/Aw8rLy8vP09bX2Nzd3t/l5eXm5ufo6erq6+zt7u7v8PHz9Pf7/Pz9/f7+/rC8C3EAAAI5SURBVHja7dpFcxwxFEXhN04cZmaOw8zMzOwwMzPHYWaewPutGVdPpjoLJ1Wdnu6e63N20krfRlKpZEZEREREREREGS9fXw0QIEDkITX1tWLTI2ocLa8NygXDbrWlelYW5Fw+qEkwHJQvNQJIFiEbP5av96/qLh9eP6d7IpAtXv6urR2gASl0ZnKVBsT94jgRiPv+jv8F6Tc8yFKHeN3YGDexNCH+bnF8kF4XSvVPHOK+umzHTMIQX6MC8aUqkA/jRSB+v6sIxA+pQHxStKVOO1BsQVYg11tEgqz8fQBuL06MnBvqaAoQnx0PZGs+1NM0IFeqRCA+WgWyQwXyrFoE4kNVIMtUIHsjQIYtLDYmQ5DzcdxKsgB5oQL5Ui0C8bYqkE4RFt5h5p8dvBvqUUqQzhEgQ779pR9AgAABAgQIECBAgAABAgQIECBAgABJD/L9Z0M9vh3q1O6Yax83pOFehp+Il2Th5y8QIECAAAECBIgO5PS+UBMqGLLIshYQIECAAAECBAgQIECAAAECBAiQRgUZeCdSJ3cl3aZ/QAZ/rZDuAQECBAgQIECAAAECBAgQIECAAAECBEjZIb1VIF1UIK0/iUDspgrkhApkgwpkogqk3VsRiB1RgUxXgbR8IAKxFSqQNk9EIDZfBdL0rAjE+r4WgdgMFYitU4Hk9ohArNlOEYjlVn3WgJhNeS4CsR7HRCBmU2+IQKz5rEsakEKjtt3SgBTqM2/z8asP31Q+hIiIiIiIiIgS7hfalmYRHajhbwAAAABJRU5ErkJggg=="},8273:function(w,C,a){"use strict";a.r(C),a.d(C,{CountUp:function(){return c}});var V=function(){return(V=Object.assign||function(m){for(var s,d=1,E=arguments.length;d<E;d++)for(var t in s=arguments[d])Object.prototype.hasOwnProperty.call(s,t)&&(m[t]=s[t]);return m}).apply(this,arguments)},c=function(){function m(s,d,E){var t=this;this.target=s,this.endVal=d,this.options=E,this.version="2.0.8",this.defaults={startVal:0,decimalPlaces:0,duration:2,useEasing:!0,useGrouping:!0,smartEasingThreshold:999,smartEasingAmount:333,separator:",",decimal:".",prefix:"",suffix:""},this.finalEndVal=null,this.useEasing=!0,this.countDown=!1,this.error="",this.startVal=0,this.paused=!0,this.count=function(g){t.startTime||(t.startTime=g);var u=g-t.startTime;t.remaining=t.duration-u,t.useEasing?t.countDown?t.frameVal=t.startVal-t.easingFn(u,0,t.startVal-t.endVal,t.duration):t.frameVal=t.easingFn(u,t.startVal,t.endVal-t.startVal,t.duration):t.countDown?t.frameVal=t.startVal-(t.startVal-t.endVal)*(u/t.duration):t.frameVal=t.startVal+(t.endVal-t.startVal)*(u/t.duration),t.countDown?t.frameVal=t.frameVal<t.endVal?t.endVal:t.frameVal:t.frameVal=t.frameVal>t.endVal?t.endVal:t.frameVal,t.frameVal=Number(t.frameVal.toFixed(t.options.decimalPlaces)),t.printValue(t.frameVal),u<t.duration?t.rAF=requestAnimationFrame(t.count):t.finalEndVal!==null?t.update(t.finalEndVal):t.callback&&t.callback()},this.formatNumber=function(g){var u,p,v,_,f=g<0?"-":"";u=Math.abs(g).toFixed(t.options.decimalPlaces);var P=(u+="").split(".");if(p=P[0],v=P.length>1?t.options.decimal+P[1]:"",t.options.useGrouping){_="";for(var l=0,D=p.length;l<D;++l)l!==0&&l%3==0&&(_=t.options.separator+_),_=p[D-l-1]+_;p=_}return t.options.numerals&&t.options.numerals.length&&(p=p.replace(/[0-9]/g,function(A){return t.options.numerals[+A]}),v=v.replace(/[0-9]/g,function(A){return t.options.numerals[+A]})),f+t.options.prefix+p+v+t.options.suffix},this.easeOutExpo=function(g,u,p,v){return p*(1-Math.pow(2,-10*g/v))*1024/1023+u},this.options=V(V({},this.defaults),E),this.formattingFn=this.options.formattingFn?this.options.formattingFn:this.formatNumber,this.easingFn=this.options.easingFn?this.options.easingFn:this.easeOutExpo,this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.endVal=this.validateValue(d),this.options.decimalPlaces=Math.max(this.options.decimalPlaces),this.resetDuration(),this.options.separator=String(this.options.separator),this.useEasing=this.options.useEasing,this.options.separator===""&&(this.options.useGrouping=!1),this.el=typeof s=="string"?document.getElementById(s):s,this.el?this.printValue(this.startVal):this.error="[CountUp] target is null or undefined"}return m.prototype.determineDirectionAndSmartEasing=function(){var s=this.finalEndVal?this.finalEndVal:this.endVal;this.countDown=this.startVal>s;var d=s-this.startVal;if(Math.abs(d)>this.options.smartEasingThreshold){this.finalEndVal=s;var E=this.countDown?1:-1;this.endVal=s+E*this.options.smartEasingAmount,this.duration=this.duration/2}else this.endVal=s,this.finalEndVal=null;this.finalEndVal?this.useEasing=!1:this.useEasing=this.options.useEasing},m.prototype.start=function(s){this.error||(this.callback=s,this.duration>0?(this.determineDirectionAndSmartEasing(),this.paused=!1,this.rAF=requestAnimationFrame(this.count)):this.printValue(this.endVal))},m.prototype.pauseResume=function(){this.paused?(this.startTime=null,this.duration=this.remaining,this.startVal=this.frameVal,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count)):cancelAnimationFrame(this.rAF),this.paused=!this.paused},m.prototype.reset=function(){cancelAnimationFrame(this.rAF),this.paused=!0,this.resetDuration(),this.startVal=this.validateValue(this.options.startVal),this.frameVal=this.startVal,this.printValue(this.startVal)},m.prototype.update=function(s){cancelAnimationFrame(this.rAF),this.startTime=null,this.endVal=this.validateValue(s),this.endVal!==this.frameVal&&(this.startVal=this.frameVal,this.finalEndVal||this.resetDuration(),this.finalEndVal=null,this.determineDirectionAndSmartEasing(),this.rAF=requestAnimationFrame(this.count))},m.prototype.printValue=function(s){var d=this.formattingFn(s);this.el.tagName==="INPUT"?this.el.value=d:this.el.tagName==="text"||this.el.tagName==="tspan"?this.el.textContent=d:this.el.innerHTML=d},m.prototype.ensureNumber=function(s){return typeof s=="number"&&!isNaN(s)},m.prototype.validateValue=function(s){var d=Number(s);return this.ensureNumber(d)?d:(this.error="[CountUp] invalid start or end value: "+s,null)},m.prototype.resetDuration=function(){this.startTime=null,this.duration=1e3*Number(this.options.duration),this.remaining=this.duration},m}()},17857:function(w,C,a){"use strict";var V;V={value:!0};var c=a(67294),m=a(8273);function s(r){return r&&typeof r=="object"&&"default"in r?r:{default:r}}var d=s(c);function E(r,e){var n=Object.keys(r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(r);e&&(i=i.filter(function(h){return Object.getOwnPropertyDescriptor(r,h).enumerable})),n.push.apply(n,i)}return n}function t(r){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?E(Object(n),!0).forEach(function(i){g(r,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(n)):E(Object(n)).forEach(function(i){Object.defineProperty(r,i,Object.getOwnPropertyDescriptor(n,i))})}return r}function g(r,e,n){return e in r?Object.defineProperty(r,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):r[e]=n,r}function u(){return u=Object.assign||function(r){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(r[i]=n[i])}return r},u.apply(this,arguments)}function p(r,e){if(r==null)return{};var n={},i=Object.keys(r),h,o;for(o=0;o<i.length;o++)h=i[o],!(e.indexOf(h)>=0)&&(n[h]=r[h]);return n}function v(r,e){if(r==null)return{};var n=p(r,e),i,h;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(h=0;h<o.length;h++)i=o[h],!(e.indexOf(i)>=0)&&(!Object.prototype.propertyIsEnumerable.call(r,i)||(n[i]=r[i]))}return n}var _=typeof window!="undefined"&&typeof window.document!="undefined"&&typeof window.document.createElement!="undefined"?c.useLayoutEffect:c.useEffect;function f(r){var e=c.useRef(r);return _(function(){e.current=r}),c.useCallback(function(){for(var n=arguments.length,i=new Array(n),h=0;h<n;h++)i[h]=arguments[h];return e.current.apply(void 0,i)},[])}var P=function(e,n){var i=n.decimal,h=n.decimals,o=n.duration,b=n.easingFn,U=n.end,O=n.formattingFn,F=n.numerals,j=n.prefix,R=n.separator,y=n.start,I=n.suffix,M=n.useEasing;return new m.CountUp(e,U,{startVal:y,duration:o,decimal:i,decimalPlaces:h,easingFn:b,formattingFn:O,numerals:F,separator:R,prefix:j,suffix:I,useEasing:M,useGrouping:!!R})},l=["ref","startOnMount","enableReinitialize","delay","onEnd","onStart","onPauseResume","onReset","onUpdate"],D={decimal:".",delay:null,prefix:"",suffix:"",start:0,startOnMount:!0,enableReinitialize:!0},A=function(e){var n=c.useMemo(function(){return t(t({},D),e)},[e]),i=n.ref,h=n.startOnMount,o=n.enableReinitialize,b=n.delay,U=n.onEnd,O=n.onStart,F=n.onPauseResume,j=n.onReset,R=n.onUpdate,y=v(n,l),I=c.useRef(),M=c.useRef(),B=c.useRef(!1),W=f(function(){return P(typeof i=="string"?i:i.current,y)}),T=f(function(L){var Y=I.current;if(Y&&!L)return Y;var H=W();return I.current=H,H}),Q=f(function(){var L=function(){return T(!0).start(function(){U==null||U({pauseResume:Z,reset:N,start:K,update:z})})};b&&b>0?M.current=setTimeout(L,b*1e3):L(),O==null||O({pauseResume:Z,reset:N,update:z})}),Z=f(function(){T().pauseResume(),F==null||F({reset:N,start:K,update:z})}),N=f(function(){M.current&&clearTimeout(M.current),T().reset(),j==null||j({pauseResume:Z,start:K,update:z})}),z=f(function(L){T().update(L),R==null||R({pauseResume:Z,reset:N,start:K})}),K=f(function(){N(),Q()}),G=f(function(L){h&&(L&&N(),Q())});return c.useEffect(function(){B.current?o&&G(!0):(B.current=!0,G())},[o,B,G,b,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.formattingFn]),c.useEffect(function(){return function(){N()}},[N]),{start:K,pauseResume:Z,reset:N,update:z,getCountUp:T}},S=["className","redraw","containerProps","children","style"],x=function(e){var n=e.className,i=e.redraw,h=e.containerProps,o=e.children,b=e.style,U=v(e,S),O=d.default.useRef(null),F=d.default.useRef(!1),j=A(t(t({},U),{},{ref:O,startOnMount:typeof o!="function"||e.delay===0,enableReinitialize:!1})),R=j.start,y=j.reset,I=j.update,M=j.pauseResume,B=j.getCountUp,W=f(function(){R()}),T=f(function(N){e.preserveValue||y(),I(N)}),Q=f(function(){if(typeof e.children=="function"&&!(O.current instanceof Element)){console.error(`Couldn't find attached element to hook the CountUp instance into! Try to attach "containerRef" from the render prop to a an Element, eg. <span ref={containerRef} />.`);return}B()});c.useEffect(function(){Q()},[Q]),c.useEffect(function(){F.current&&T(e.end)},[e.end,T]);var Z=i&&e;return c.useEffect(function(){i&&F.current&&W()},[W,i,Z]),c.useEffect(function(){!i&&F.current&&W()},[W,i,e.start,e.suffix,e.prefix,e.duration,e.separator,e.decimals,e.decimal,e.className,e.formattingFn]),c.useEffect(function(){F.current=!0},[]),typeof o=="function"?o({countUpRef:O,start:R,reset:y,update:I,pauseResume:M,getCountUp:B}):d.default.createElement("span",u({className:n,ref:O,style:b},h),e.start?B().formattingFn(e.start):"")};C.ZP=x,V=A}}]);
